


// import { useState } from "react"
import "./ClientCss.css";
import { useState,useEffect } from 'react'



export default function Client() {
  const [clientName, setClientName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pet_category, setCategory] = useState('');
  const [disease_suffering, setDisease] = useState('');
  const [veterinary_appointment, setAppointment] = useState('');
  // const [name,setName]=usestate('');
  // const
  // const [data, setData] = useState([])

  const DoctorId=JSON.parse(localStorage.getItem("key"))


  const handleSubmit = () => {
    const payload = {
      clientName,
      contact,
      email,
      address,
      pet_category,
      disease_suffering,
      DoctorId:DoctorId,
      veterinary_appointment,
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
    fetch("http://localhost:8000/users/details/", {
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
        alert("Thank you for booking the appointment!");
      })
      .catch(err => {
        console.log(err);
        alert(err.message);
      });

  }
  return (
    <>
      <h1>booking appointment</h1>
      <h2>Doctor's Name:-{JSON.stringify(DoctorId)}</h2>
      <div className="overall">
      <div className="registerform">
        clientName: <input
          type="text"
          id="clientName"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          placeholder="clientName"
          required
        />
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
      

    </>
  )
}

