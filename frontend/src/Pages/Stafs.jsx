import classNames from 'classnames'
import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'


function PopularProducts() {
	const [popularProducts,setPopularProducts]=useState([])
	useEffect(()=>{
		const fetchedData=async ()=>{
			const result=await fetch(`http://localhost:8000/doctor/`)
			const data=await result.json()
			console.log(data)
			setPopularProducts(data)
		}
		fetchedData()
	},[])

	const handleDelete = async (id) => {
		const clientId = id;
		try {
		  const result = await fetch(`http://localhost:8000/users/delete/${clientId}`, {
			method: 'DELETE',
		  });
	
		  if (result.ok) {
			// Remove the deleted order from the state
			setPopularProducts((prevData) =>
			  prevData.filter((order) => order._id !== id)
			);
			console.log('Order deleted successfully.');
		  } else {
			console.log('Failed to delete order.');
		  }
		} catch (error) {
		  console.error(error);
		}
	  };

	return (
		<div className="w-[70rem] bg-white p-4 rounded-sm border border-gray-200">
			<strong className="text-gray-700 font-medium">Staff Details</strong>
			<div className="mt-4 flex flex-col gap-3 ">
				{popularProducts.map((product) => (
					<div
						key={product._id}
						to={`/product/${product.id}`}
						className="flex items-start hover:no-underline border-solid border-2 border-sky-100 py-3 px-2"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={product.img}
								alt={product.name}
							/>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{product.name}</p>
							<p className="text-sm text-gray-800">Email : {product.email}</p>
							<p className="text-sm text-gray-800">Bio : {product.bio}</p>
							<p className="text-sm text-gray-800">Experience : {product.experience}</p>
							<p className="text-sm text-gray-800">Rating : {product.rating}</p>
							<span
								className={classNames(
									parseInt(product.rating) > 0
										? 'text-green-500'
										: 'text-green-500',
									'text-xs font-medium'
								)}
							>
							{parseInt(product.rating) === 0 ?(<button>Available</button>):(<button >Available</button>)}
							</span>
						</div>
						<Link to={`/admin/setting?orderId=${product._id}`}>
                    <button className="text-green-500">Update</button>
                  </Link>
						<button onClick={() => handleDelete(product._id)} className="text-red-500">
                    Delete
                  </button>
					</div>
				))}
			</div>
		</div>
	)
}

export default PopularProducts
