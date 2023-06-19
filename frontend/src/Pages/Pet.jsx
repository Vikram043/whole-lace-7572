import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const AboutUs = () => {
  return (
    <div>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <Navbar/>
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
              About Us
            </h2>
            <p className="text-gray-700 mb-6">
              At Pet Veterinary Clinic, we are dedicated to providing the highest quality care for your beloved pets. With a team of experienced veterinarians and a compassionate staff, we strive to create a comfortable and welcoming environment for both pets and their owners.
            </p>
            <p className="text-gray-700 mb-6">
              Our clinic offers a wide range of veterinary services, including routine check-ups, vaccinations, dental care, surgery, and emergency treatments. We are equipped with state-of-the-art facilities and utilize the latest medical advancements to ensure the well-being and health of your pets.
            </p>
            <p className="text-gray-700">
              Our team is passionate about animals and deeply committed to providing personalized care to meet the unique needs of each pet. We understand that pets are family, and we treat them with the same love and attention that they receive at home.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AboutUs;
