import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Link, useLocation } from 'react-router-dom';
import { getOrderStatus } from '../lib/helpers';

export default function Clients() {
  const [recentOrderData, setRecentOrderData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('https://precious-tan-binturong.cyclic.app/users/');
        const data = await result.json();
        console.log(data.msg);
        setRecentOrderData(data.msg);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const clientId = id;
    try {
      const result = await fetch(`http://localhost:8000/users/delete/${clientId}`, {
        method: 'DELETE',
      });

      if (result.ok) {
        // Remove the deleted order from the state
        setRecentOrderData((prevData) =>
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
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Clients Details</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>ID</th>
              <th>Contact</th>
              <th>Client Name</th>
              <th>Appointment Date</th>
              <th>Email</th>
              <th>Address</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr key={order._id}>
                <td>
                  <Link to={`/order/${order.id}`}>{order._id}</Link>
                </td>
                <td>
                  <Link to={`/product/${order.Registerd_ID}`}>{order.contact}</Link>
                </td>
                <td>
                  <Link to={`/customer/${order.customer_id}`}>{order.client_name}</Link>
                </td>
                <td>{format(new Date(order.veterinary_appointment), 'dd MMM yyyy')}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>
                  <Link to={`/admin/settings?orderId=${order._id}`}>
                    <button className="text-green-500">Update</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(order._id)} className="text-red-500">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
