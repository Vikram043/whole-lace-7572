import React from 'react'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
import '../Style/CssFooter.css'
export default function Footer() {
  let mediaData=[{
    img:"https://lh3.googleusercontent.com/PxlTITdvAq-gLp6Pi_dcQZh6dvw6T4HsK7sH4gJ5fTFo0sWkVR0i8OI-H6CHYAt0nmwYwGespDuhfPDehQXQt9dClA=w640-h400-e365-rj-sc0x00ffffff",
    link:"https://www.youtube.com/@PetCareujjwal"
  },
  {
    img:"https://robots.net/wp-content/uploads/2020/03/Photo-by-Tumisu-1-1-600x595.jpg",
    link:"https://www.instagram.com/zoetispetcare/"
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiGr0Vsh8v462eX_DiahmbC58_-CgK-MwASA&usqp=CAU",
    link:"https://www.facebook.com/groups/692556975452740"
  },
  {
    img:"",
    link:""
  }]
  return (
    <div id='footerDiv'>
      <div>
        <img className='logo' src="https://www.linkpicture.com/q/logo-no-background.png" alt="" />
        <h2>About us:</h2>
        <p>We are the pet care. We take care of pets, we solves the pets prolems. We love to save pets and help them to recover from any 
          kind of Disease.  
        </p>
        <h2>Services</h2>
        <h2>Partner with Us</h2>
      </div>
      <div>
        <img src="https://www.linkpicture.com/q/logo-no-background.png" alt="Pet Care" />
      <video src="https://youtu.be/Mnj5TAmlP9U" autoplay loop controls>Pet Care</video>
      </div>
      <div>
        <h2>Contact us:</h2>
        <p>Email:</p>
        <p>      caretaker@gmail.com</p>
        <p>Phone:</p>
        <p>      098776543210</p>
        <p>      098776543211</p>
        <div id='media'>
        {
          mediaData.map((ele)=>{
            return (
              <div>
                <button>
                  <img src={ele.img} alt="" />
                  <link rel="stylesheet" href={ele.link} />
                </button>
              </div>
            )
          })
        }
      </div>
      </div>
    </div>
  )
}
