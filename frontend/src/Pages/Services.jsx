import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const Services = () => {
  const servicesData = [
    { id: 1, title: 'Dog Walking', description: 'Enjoy a leisurely walk with your furry friend.' },
    { id: 2, title: 'Pet Boarding', description: 'Provide a comfortable and safe environment for your pet while you are away.' },
    { id: 3, title: 'Grooming', description: 'Keep your pet looking clean and stylish with our professional grooming services.' },
    { id: 4, title: 'Training', description: 'Help your pet learn new skills and improve their behavior through our training programs.' },
  ];

  return (
    <div>
        <p>p</p>
        <p>p</p>
        <p> p</p>
        <Navbar/>
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
              Our Services
            </h2>
            <ul className="space-y-4">
              {servicesData.map((service) => (
                <li
                  key={service.id}
                  className="px-4 py-6 bg-white shadow rounded-md"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Services;
