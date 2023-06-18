import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

const AdminStaffEdit = () => {
  const navigate=useNavigate()
  const location = useLocation();
  const clientId = new URLSearchParams(location.search).get('orderId');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    bio: '',
  });

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/doctor/`);
        const data = await response.json();

        const filteredData=data.filter((el)=>el._id===clientId)
        
        // Update the form data with existing order details
        setFormData({
          name: filteredData[0].name,
          email: filteredData[0].email,
          rating: filteredData[0].rating,
          bio: filteredData[0].bio,
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (clientId) {
      fetchOrderData();
    }
  }, [clientId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make API request to update admin settings
    fetch(`http://localhost:8000/users/update/${clientId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response data or show success message
        console.log(data);
        alert("Updated Succefully")
        navigate("/admin/Stafs")
      })
      .catch((error) => {
        // Handle error or show error message
        console.error(error);
      });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8 mb-4">Admin Settings</h1>

      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border rounded py-2 px-3 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border rounded py-2 px-3 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-2">
              rating
            </label>
            <input
              type="text"
              id="password"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className="border rounded py-2 px-3 w-full"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="bio" className="block font-bold mb-2">
              bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="border rounded py-2 px-3 w-full"
              rows="4"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminStaffEdit;
