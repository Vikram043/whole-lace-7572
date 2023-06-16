import React from 'react'
import '../Style/CssNavbar.css'
export default function Navbar() {
  return (
    <div id='Nav'>
      <img className='logo' src="https://www.linkpicture.com/q/logo-no-background.png" alt="404" />
      {/* <span id='searchLogin-btn'>
      <input id='searchBar' type="text" placeholder='Search' />
      
      </span> */}
      <button id='login-btn'>Login</button>
      <span id='profile'>
      <h2 id='userName'> Please log in</h2>
      <img id='profilePic' src="https://media.istockphoto.com/id/1141711478/photo/pomeranian-dog-on-a-white-background.jpg?s=612x612&w=0&k=20&c=aCklYPEzEtD7dIaHWpr-JGKuy0KF1ihLbuKdIug6lA0=" alt="404" />
      </span>
    </div>
  )
}
