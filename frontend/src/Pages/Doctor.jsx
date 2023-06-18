import React from 'react'
// import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import "../Style/doctor.css"
import Navbar from '../Components/Navbar'


export default function Doctor() {
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8000/doctor/")
    .then((res)=>res.json())
    .then((res)=>{
      console.log("hello")
      console.log(res)
      setFilterData(res)
      setData(res)
    })
    .catch(err=>console.log(err))
  },[])
 
  return (
    <div>
      <p>hello</p>
      <p>jkf</p>
      <p>jkf</p>
      <Navbar/>

      <select id="select-pet"onChange={(event)=>{
        console.log(event.target.value)
        if(event.target.value==="all")
        setFilterData(data);
        else{
          const filterData=data.filter((e)=>{
            return e.specialist===event.target.value

         })  
         setFilterData(filterData)
        }           

      }}>
        <option value="all">Select Pet Type</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="horse">Horse</option>
        <option value="rabbit">Rabbit</option>
      </select>
      <div id='doc-container'>
        {
          filterData.map((e)=>{
            return (
            // {console.log(e[i])}
            <div className='doc-card'>
              <img id='avatar' src={e.img} alt="error" />
              <p id='doc-name'>{e.name} ({e.specialist})</p>
              <p>Experience:-{e.experience}</p>
              <p>{e.bio}</p>
              <p>Email:- {e.email}</p>
              <p>Rating:- {e.rating}</p>
              <Link to='/client'><button id='bookBtn' onClick={() => localStorage.setItem('key', JSON.stringify({ name: e.name, email: e.email }))}>Book Now</button></Link>
              <Link to='/profiledoc'><button id='viewBtn' onClick={()=>localStorage.setItem('key' ,JSON.stringify(e.name))}>View Booking</button></Link> 
            </div>
            )
          })
        }
      </div>
      <Footer/>

    </div>
  )
}
