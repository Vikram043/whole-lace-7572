import React from 'react'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
import '../Style/CssFooter.css'
export default function Footer() {
  let mediaData=[{
    img:"https://www.linkpicture.com/q/youtube_1.png",
    link:"https://www.youtube.com/@PetCareujjwal"
  },
  {
    img:"https://www.linkpicture.com/q/instagram_65.png",
    link:"https://www.instagram.com/zoetispetcare/"
  },
  {
    img:"https://www.linkpicture.com/q/facebook_19.png",
    link:"https://www.facebook.com/groups/692556975452740"
  },
  {
    img:"https://www.linkpicture.com/q/twitter_13.png",
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

      <div id='support'>
        <h2>Support us:</h2>
        <p>Pet veterinarians play a crucial role in ensuring the health and well-being of animals, providing expert medical care and guidance to pet owners. Their dedication and expertise contribute to the happiness and longevity of our beloved furry companions.  
        </p>
      </div>
      <div id="vetsection">
        <h2>Pet Veterinary:</h2>
        <p>Our experienced team of pet veterinarians provides comprehensive medical care and ensures the well-being of your beloved pets.</p>
      </div>
      <div id="aboutsection">
        <h2>Contact us:</h2>
        <p>Email:</p>
        <p>      petcare@gmail.com</p>
        <p>Phone:</p>
        <p> +91 8950937997</p>
        <p> +91 9845712482</p>
        
      </div>
    </div>
  )
}
