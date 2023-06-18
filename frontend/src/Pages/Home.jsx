import React from 'react'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Pet from './Pet'
import '../Style/CssHome.css'
import { Link } from 'react-router-dom'
export default function home() {
  let doctorData = [{
    id: 1,
    name: "DR. Avinash Mohan Dev",
    profession: "Animal expert",
    img: "https://media.licdn.com/dms/image/D4D03AQFRKeCpF8J1fQ/profile-displayphoto-shrink_800_800/0/1683776037836?e=1692230400&v=beta&t=eOLnvulAaOtASTCuNzk6PjbDAtUdF2k0BpU0Y91xzvM"
  }, {
    id: 2,
    name: "DR. Vikram Naik",
    profession: "Dog expert",
    img: "https://avatars.githubusercontent.com/u/119391188?v=4"
  },
  {
    id: 3,
    name: "Dr. Kamlesh Das",
    profession: "Cat expert",
    img: "https://avatars.githubusercontent.com/u/115461973?v=4"
  },
  {
    id: 4,
    name: "Dr. Rohit Chauhan",
    profession: "Fish expert",
    img: "https://www.linkpicture.com/q/download-2_17.png"
  },
  {
    id: 5,
    name: "Dr. Venkatesh Tiwari",
    profession: "Bird expert",
    img: "https://avatars.githubusercontent.com/u/115460541?v=4"
  }]

  let petData = [
    {
      id: 1,
      category: "Dog",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLzFh8163pz_ToeBIAunf7A9MJXzfok_rTvlgSWpvFSnxNGaheFkQ4tNa2Pok8KFUvPo&usqp=CAU"
    },
    {
      id: 2,
      category: "Cat",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl6G5bsRs0dhtS3TVGclhjkwPxBTY9RXO8qw&usqp=CAU"
    },
    {
      id: 3,
      category: "Fish",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ640hAVWwnZHzNqQ4GuKo-jPhv-9gXKxeBzg&usqp=CAU"
    },
    {
      id: 4,
      category: "Birds",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkvsvlzJ6NE5FXVC2k6m9_VGxFod6nvmAmA&usqp=CAU"
    },
    {
      id: 5,
      category: "Rabbit",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtofi4iiIQLX1AROZryO842Uazya9EMxVtA&usqp=CAU"
    }
  ]

  return (
    <div>
      <Navbar />
      {/* Banner Image */}
      <img id='banner' src="https://wallpapers.com/images/hd/veterinary-cartoon-graphic-art-bu870jgkmy5se8ky.jpg" alt="banner" />
      {/* Doctors details */}

      <div id="newimg">
        <img src="https://www.linkpicture.com/q/desk.png" alt="" />
        <img src="https://www.linkpicture.com/q/2023-06-18-1.png" alt=' ' />
      </div>

      <div id="doctor-details">
        <h1>Doctors Details</h1>
      </div>
      <div id='docData-div'>
        {
          doctorData.map((ele) => {
            return (
              <div>
                <img src={ele.img} alt="404" />
                <p>{ele.name}</p>
                <p>{ele.profession}</p>
              </div>
            )
          })
        }
      </div>
      {/* Pets details */}
      <div>
        <h1>Pets Details</h1>
      </div>
      <div id='petData-div'>
        {
          petData.map((ele) => {
            return (
              <div>
                <img src={ele.img} alt="" />
                <p>{ele.category}</p>
                {/* <button  >check out</button> */}
                <Link to={`/Pet/${ele.id}`}>
                  <button>View Details</button>
                </Link>
              </div>
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}
