import classNames from 'classnames'
import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'


function PopularProducts() {
	const [popularProducts,setPopularProducts]=useState([])
	useEffect(()=>{
		const fetchedData=async ()=>{
			const result=await fetch(`http://localhost:8000/doctor/`)
			const data=await result.json()
			setPopularProducts(data)
		}
		fetchedData()
	},[])
	return (
		<div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
			<strong className="text-gray-700 font-medium">Staff Details</strong>
			<div className="mt-4 flex flex-col gap-3">
				{popularProducts.map((product) => (
					<Link
						key={product._id}
						to={`/product/${product._id}`}
						className="flex items-start hover:no-underline"
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
							<span
								className={classNames(
									parseInt(product.rating) > 0
										? 'text-green-500'
										: 'text-green-500',
									'text-xs font-medium'
								)}
							>
								{product.rating === 0 ? 'Not Available' :  ' Available'}
							</span>
						</div>
						<div className="text-xs text-gray-400 pl-1.5">{product.specialist}</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default PopularProducts
