import React from 'react';
import { useContext,useState,useEffect } from 'react';
import { AppContext } from '../Contest/AppContext';
import { useNavigate,Link } from 'react-router-dom';
const Profile = () => {
  const navigate=useNavigate()
  const { authState, logoutUser } = useContext(AppContext);
  const { isAuth, username } = authState;
  const [loggedInUsername, setLoggedInUsername] = useState('');

  const handleLogout = () => {
    logoutUser();
    navigate('/')
  };

  useEffect(() => {
    if (isAuth) {
      setLoggedInUsername(username);
    } else {
      setLoggedInUsername('');
    }
  }, [isAuth, username]);

  return (
    <div className="flex bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg px-20px p-10">
        <img
          src="https://source.unsplash.com/80x80?face"
          alt="Admin Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{loggedInUsername}</h1>
        <h2 className="text-xl text-gray-600 mb-4">Administrator</h2>
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm0 2h6v12H7V4zm2 8a1 1 0 100 2 1 1 0 000-2zm-2-4h6v2H7v-2zm0 4h6v2H7v-2z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-700">Banglore, India</p>
        </div>
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M13 6H7v7h6V6zm2-2H5v11h10V4zM4 5H3v10h1V5zm5-3h6a1 1 0 011 1v2H8V3a1 1 0 011-1zm0 4h6v2H8V6zm0 4h6v2H8v-2zm0 4h6a1 1 0 011 1v2h-8v-2a1 1 0 011-1zm-7 0h5v2H3v-2zm0-4h5v2H3v-2z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-700">admin@gmail.com</p>
        </div>
       <Link to='/admin/settings'>
       <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Edit Profile
        </button>
       </Link> 
        <button onClick={handleLogout}className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Log Out
        </button>
      </div>
    </div>
  );
};



export default Profile