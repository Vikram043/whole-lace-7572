import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

const AdminSettingsPage = () => {
  const navigate=useNavigate()
  const location = useLocation();
  const clientId = new URLSearchParams(location.search).get('orderId');

  const [formData, setFormData] = useState({
    client_name: '',
    email: '',
    contact: '',
    address: '',
  });

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await fetch(`https://precious-tan-binturong.cyclic.app/users/`);
        const data = await response.json();

        const filteredData=data.msg.filter((el)=>el._id===clientId)
        
        // Update the form data with existing order details
        setFormData({
          client_name: filteredData[0].client_name,
          email: filteredData[0].email,
          contact: filteredData[0].contact,
          address: filteredData[0].address,
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
    fetch(`https://precious-tan-binturong.cyclic.app/users/update/${clientId}`, {
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
        navigate("/admin/Clients")
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
              name="client_name"
              value={formData.client_name}
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
              Contact
            </label>
            <input
              type="password"
              id="password"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              className="border rounded py-2 px-3 w-full"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="bio" className="block font-bold mb-2">
              Address
            </label>
            <textarea
              id="bio"
              name="address"
              value={formData.address}
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

export default AdminSettingsPage;
