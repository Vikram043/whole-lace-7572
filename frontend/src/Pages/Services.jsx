import React from 'react';
import '../Style/CssServices.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Services = () => {
  const services = [
    {
      title: 'Dog Grooming',
      description: 'We offer professional dog grooming services to keep your furry friend looking their best.',
      icon: '🐾',
    },
    {
      title: 'Pet Boarding',
      description: 'Our pet boarding service ensures that your pet is well taken care of while you are away.',
      icon: '🏠',
    },
    {
      title: 'Veterinary Care',
      description: 'Our experienced veterinarians provide top-notch medical care for your pets.',
      icon: '⚕️',
    },
    {
      title: 'Pet Training',
      description: 'We offer training programs to help your pet develop good behavior and obedience skills.',
      icon: '🎾',
    },
    {
      title: 'Pet Walking',
      description: 'Our professional pet walkers will ensure that your pets get the exercise they need.',
      icon: '🚶‍♂️',
    },
    {
      title: 'Pet Sitting',
      description: 'Our pet sitting service provides in-home care for your pets while you are away.',
      icon: '🏡',
    },
    {
      title: 'Pet Vaccinations',
      description: 'We provide comprehensive vaccination services to protect your pets from diseases.',
      icon: '💉',
    },
    {
      title: 'Pet Dental Care',
      description: 'Our dental care services help maintain your pet\'s oral health and hygiene.',
      icon: '🦷',
    },
    {
      title: 'Pet Nutrition',
      description: 'We offer expert advice on pet nutrition and provide specialized diets for your pets.',
      icon: '🥦',
    },
    {
      title: 'Pet Spa',
      description: 'Treat your pet to a luxurious spa experience with our range of pet spa services.',
      icon: '💅',
    },
  ];

  return (
    <div>
        <Navbar/>
    <div className="services">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <span className="service-icon">{service.icon}</span>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
        <Footer/>
    </div>
  );
};

export default Services;
