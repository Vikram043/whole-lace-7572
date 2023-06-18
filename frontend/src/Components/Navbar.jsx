import React from 'react';
import '../Style/CssNavbar.css';
import { useContext,useState,useEffect } from 'react';
import { AppContext } from '../Contest/AppContext';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const { authState, logoutUser } = useContext(AppContext);
  const { isAuth, username } = authState;
  const [loggedInUsername, setLoggedInUsername] = useState('');

  const handleLogout = () => {
    logoutUser();
  };

  useEffect(() => {
    if (isAuth) {
      setLoggedInUsername(username);
    } else {
      setLoggedInUsername('');
    }
  }, [isAuth, username]);

  return (
    <div id='Nav'>
      <button onClick={() => window.location.href='/'}>
        <img className='logo' src="https://www.linkpicture.com/q/logo-no-background.png" alt="404" />
      </button>

 

      <button onClick={() => window.location.href='/about'}>About</button>
      <button onClick={() => window.location.href='/pet-veterinary'}>Pet Veterinary</button>
      <button onClick={() => window.location.href='/services'}>Services</button> {/* Added Services section */}
      <button onClick={() => window.location.href='/contact'}>Contact</button> {/* Added Contact section */}

      {isAuth ? (
          <>
            <li>
              <span>Hi, {loggedInUsername}!</span>
            </li>
              <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button>
            <Link to="/user/login">Login</Link>
          </button>
        )}

      {/* <span id='profile'>
        <h2 id='userName'> Please log in</h2>
        <button onClick={() => window.location.href='/profile'}>
          <img id='profilePic' src="https://media.istockphoto.com/id/1141711478/photo/pomeranian-dog-on-a-white-background.jpg?s=612x612&w=0&k=20&c=aCklYPEzEtD7dIaHWpr-JGKuy0KF1ihLbuKdIug6lA0=" alt="404" />
        </button>
      </span> */}
    </div>
  );
}
