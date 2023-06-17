import React from 'react';
import '../Style/CssAboutPage.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
 function AboutPage() {
  return (
    <div>
      <Navbar/>
    <div className="about-page">
      <h1 className="title">About Us</h1>
      <div className="content">
        <div className="section">
          <h2 className="section-title">Dogs</h2>
          <p className="section-text">
            At Pet Care, we have a deep love and appreciation for dogs. We believe that dogs are more than just pets;
            they are members of our families. Our dedicated team is committed to providing the best care and services
            for dogs of all breeds and sizes.
          </p>
          <div className="image-container">
            <img src="https://media.istockphoto.com/id/483531287/photo/smiling-boston-terrier-dog-on-white-background-close-up.jpg?s=612x612&w=0&k=20&c=1sI8mVFHbwsByA9jYz7H7emrcutF0sKawavQVOuPhnI=" alt="Dog 1" className="pet-image" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFnxWVrWbqquAm8lwP2bH7Xn-G7PnKLPkgKn0dNoa0qEKMJeHi18iPXaL_2n0yzjzl2HA&usqp=CAU" alt="Dog 2" className="pet-image" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNea6pfn3CMg-1IqIg8He3MHMR-Izj33kyTLiy8j5tUkw45fbDqg6VNZVX6U8yYawhW9w&usqp=CAU" alt="Dog 3" className="pet-image" />
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">Cats</h2>
          <p className="section-text">
            At Pet Care, we have a deep love and appreciation for cats. We believe that catss are more than just pets;
            they are members of our families. Our dedicated team is committed to providing the best care and services
            for catss of all breeds and sizes.
          </p>
          <div className="image-container">
            <img src="https://img.freepik.com/free-photo/closeup-shot-cute-ginger-kitten-staring-camera-isolated-white-wall_181624-45452.jpg" alt="Cat 1" className="pet-image" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBt7bP_NgQIHHBumj1aj4frb-7jHMQbStyTDxwH_PobH3UOXBH8IL1LPW9_O0vLJEJX0Y&usqp=CAU" alt="Cat 2" className="pet-image" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltmpvncOnaDV_0o2nOdRjB2R1k6YnPMKj9dpZcZliG_wB7pr_mhmz8X3-4WUmXMVYUhY&usqp=CAU" alt="Cat 3" className="pet-image" />
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">Birds</h2>
          <p className="section-text">
            At Pet Care, we have a deep love and appreciation for birds. We believe that birds are more than just pets;
            they are members of our families. Our dedicated team is committed to providing the best care and services
            for birds of all breeds and sizes.
          </p>
          <div className="image-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQreRF-wvH25XAnUQI421KiCIpO3nau1o29rsOxH1pD5ndX27P3jVubNIN16nQL6h4zkGI&usqp=CAU" alt="Bird 1" className="pet-image" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVToWOiaVxbG74O1O1TqmIULBcgEz7Pukc5p69ZlTiZhU1ASipNrDizyjgU-LetfHXF5I&usqp=CAU" alt="Bird 2" className="pet-image" />
            <img src="https://images.unsplash.com/photo-1519700048278-279185ba0a83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZCUyMGZhY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Bird 3" className="pet-image" />
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">Fishes</h2>
          <p className="section-text">
            At Pet Care, we have a deep love and appreciation for fishes. We believe that fishes are more than just pets;
            they are members of our families. Our dedicated team is committed to providing the best care and services
            for fishes of all breeds and sizes.
          </p>
          <div className="image-container">
            <img src="https://t4.ftcdn.net/jpg/02/53/61/69/360_F_253616948_za22DUrpvoM6aBDyPZxXDXf1OVNZFhL4.jpg" alt="Fish 1" className="pet-image" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKagvgzc-bHoh_D54UpB8dpFMeIgp-WWl7-0M5T62gKMo4-2xM-6sVrPowWKh_1ywKvw&usqp=CAU" alt="Fish 2" className="pet-image" />
            <img src="https://media.istockphoto.com/id/125976888/photo/red-fish.jpg?s=612x612&w=0&k=20&c=feq3UfbjZHzZi7Lp0RTL8Te7jBt9dJSLZlwEJ2zEgUA=" alt="Fish 3" className="pet-image" />
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">Services</h2>
          <ul className="service-list">
            <li>Grooming and bathing</li>
            <li>Training and obedience classes</li>
            <li>Health check-ups and vaccinations</li>
            <li>Boarding and daycare</li>
            <li>Dental care</li>
            <li>Nutrition and diet consultation</li>
            <li>Exercise and play sessions</li>
            <li>Behavioral counseling</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default AboutPage