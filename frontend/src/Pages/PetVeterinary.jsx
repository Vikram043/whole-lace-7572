import React from 'react';
import '../Style/CssPetVeterinary.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const PetVeterinary = () => {
  const services = [
    {
      title: 'Routine Check-ups',
      description: 'Regular examinations and health assessments to ensure your pet\'s well-being.',
    },
    {
      title: 'Vaccinations',
      description: 'Essential immunizations to protect your pet from common diseases.',
    },
    {
      title: 'Surgical Procedures',
      description: 'Safe and effective surgical interventions performed by experienced veterinarians.',
    },
    {
      title: 'Emergency Care',
      description: '24/7 emergency veterinary services for urgent medical situations.',
    },
  ];

  return (
    <div>
        <Navbar/>
        <img id='banner' src="https://wallpapers.com/images/hd/veterinary-cartoon-graphic-art-bu870jgkmy5se8ky.jpg" alt="banner" />

    <div className="pet-veterinary">
      <div className="pet-veterinary-header">
        <h1>Pet Veterinary Services</h1>
        <p>Welcome to our Pet Veterinary Services page! We are dedicated to providing high-quality care for your beloved pets.</p>
      </div>

      <div className="pet-veterinary-details">
        <div className="pet-veterinary-services">
          <h2>Our Services</h2>
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="pet-veterinary-additional">
          <h2>Additional Information</h2>
          <p>At our Pet Veterinary clinic, we provide comprehensive care for pets of all ages and sizes. Our team of experienced veterinarians and caring staff is dedicated to ensuring the health and well-being of your furry companions.</p>
          <p>We offer a wide range of services, including preventive care, dental care, diagnostic testing, surgical procedures, and emergency care. Our state-of-the-art facilities and advanced medical equipment allow us to deliver the highest quality of care to your pets.</p>
          <p>Whether your pet needs a routine check-up, vaccinations, specialized treatments, or urgent medical attention, we are here to provide compassionate and professional veterinary services.</p>
        </div>
      </div>
    </div>
        <Footer/>
    </div>
  );
};

export default PetVeterinary;
