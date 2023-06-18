import React from "react";
import "../Style/doctor.css";

import { useEffect, useState } from "react";




const ProfileDoc = () => {
  const docName = JSON.parse(localStorage.getItem("key"));
  const [data, setData] = useState([]);
  const [clientdata, setClientData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/doctor/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:8000/users/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.msg);
        setClientData(res.msg);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>Navigation</h2>
      <div id="profile-container">
        <div id="docProfile">
          {data.map((e) => {
            
            if (e.name === docName) {
              return (
                <div key={e._id}>
                  <div className="doc-card">
                    <img id="avatar" src={e.img} alt="error" />
                    <h3>
                      {e.name} ({e.specialist})
                    </h3>
                    <p>Experience:-{e.experience}</p>
                    <p>{e.bio}</p>
                    <p>Email:- {e.email}</p>
                    <p>Rating:- {e.rating}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div id="client-card">
       
          {clientdata.map((e) => {
         
            if (e.DoctorId === docName) {
          
              return (
                <div  id="client-details" key={e._id}>
                 
                  <h4>Client Name:- {e.client_name}</h4>
                  <h4>Contact No:- {e.contact}</h4>
                  <h4>Address:- {e.address}</h4>
                  <h4>Email:- {e.email}</h4>
                  <h4>Pet :- {e.pet_category}</h4>
                  <h4>Disease :- {e.disease_suffering}</h4>
                  <h4>Appointment Data:- {e.veterinary_appointment}</h4>

                </div>
              );
            }
            // if(flag==0){
            //     return (
            //         <div>You Have No Bookings</div>
            //     )
            // }
            
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileDoc;
