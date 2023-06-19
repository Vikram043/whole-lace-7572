


// import { useState } from "react"
import "../Style/ClientCss.css";
import { useState} from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

export default function Client() {
  const navigate=useNavigate()
  const [client_name, setClientName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pet_category, setCategory] = useState('');
  const [disease_suffering, setDisease] = useState('');
  const [veterinary_appointment, setAppointment] = useState('');
  // const [name,setName]=usestate('');
  // const
  // const [data, setData] = useState([])

  const DoctorId = JSON.parse(localStorage.getItem("key"))
  // const DoctorEmail=JSON.parse(localStorage.getItem("key"))



  const handleSubmit = () => {
    const payload = {
      client_name,
      contact,
      email,
      address,
      pet_category,
      disease_suffering,
      veterinary_appointment,
      DoctorId: DoctorId.name,
      DoctorEmail: DoctorId.email,
    }



    // useEffect(()=>{
    //   fetch("http://localhost:4300/doctor/")
    //   .then((res)=>res.json())
    //   .then((res)=>{
    //     console.log(res)
    //     setData(res)
    //   })
    //   .catch(err=>console.log(err))
    // },[])


    // connecting FE with BE
    fetch("https://precious-tan-binturong.cyclic.app/users/details/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(res => {
      if (!res.ok) {
        throw new Error("Please fill all the details here.");
      }
      return res.json();
    })
      .then(res => {
        console.log(res);
        alert("Thank you for booking. Your email has been send.");
        navigate('/')
      })
      .catch(err => {
        console.log(err);
        alert(err.message);
      });

  }
  return (
    <>
      <h1 id="h1new">Hello</h1>
      <Navbar />
      <h1 id="h1new">Booking Appointment</h1>
      <h2 id="h2new">Doctor's Name:- {DoctorId.name}</h2>
      <div className="overall">
        <div className="registerform">
          client_name: <input
            type="text"
            id="client_name"
            value={client_name}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="client_name"
            required
          />
          {/* console.log(client_name) */}
          Contact: <input
            type="number"
            id="contact"
            value={contact}
            onChange={(e) => {
              const inputValue = e.target.value;
              if (inputValue.length <= 10) {
                setContact(inputValue);
              }
            }}
            placeholder="Contact"
            maxLength={10}
            required
          />

          Email: <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          Address: <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
          />
          Pet_Category: <select
            id="pet_category"
            value={pet_category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select pet category</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Fish">Fish</option>
            <option value="Horse">Horse</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Other">Other</option>
          </select>
          Disease_Suffering: <input
            type="text"
            id="disease_suffering"
            value={disease_suffering}
            onChange={(e) => setDisease(e.target.value)}
            placeholder="Disease Suffering"
            required
          />
          {/* Doctor_Name: <input
          type="text"
          id="Doctor_name"
          placeholder={`${JSON.stringify(DoctorId)}`}
          required
        /> */}

          Veterinary_Appointment: <input
            type="date"
            id="veterinary_appointment"
            value={veterinary_appointment}
            onChange={(e) => setAppointment(e.target.value)}
            placeholder="Veterinary Appointment"
            required
          />
          <button onClick={handleSubmit}>Booking Appointment</button>
        </div>
        <div className="wallp">
          <img src="https://www.linkpicture.com/q/many_kind-animal.jpg" alt="" />
        </div>
      </div>
      <div>
      <Footer />

      </div>
    
       
    </>
  )
}

