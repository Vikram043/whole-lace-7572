import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
function Pet(id) {
    let petData = [{
        _id: 1,
        name: 'Dog',
        details: [{
            Diseases: "Canine Parvovirus (Parvo):",
            Details: "Canine Parvovirus is a highly contagious viral disease that primarily affects puppies and young dogs. It is spread through direct contact with infected feces or contaminated environments. Parvo attacks the gastrointestinal system, leading to severe vomiting, diarrhea (often bloody), dehydration, and potentially life-threatening complications.",
            Treatment:"The treatment for Parvo involves supportive care to manage the symptoms and boost the dog's immune system. It typically includes intravenous fluids to combat dehydration, medications to control vomiting and diarrhea, antibiotics to prevent secondary infections, and sometimes blood transfusions. Infected dogs are usually isolated to prevent the spread of the virus.",
            Prevention:"Vaccination is crucial in preventing Parvo. Puppies should receive a series of vaccinations starting at around 6-8 weeks of age, followed by boosters at regular intervals. It's also important to keep puppies away from potentially contaminated areas until they are fully vaccinated."
        },{
            Diseases:"Canine Distemper:",
            Details:"Canine Distemper is a viral disease that affects the respiratory, gastrointestinal, and nervous systems of dogs. It spreads through contact with respiratory secretions or urine of infected animals. Distemper symptoms can vary and include fever, coughing, nasal discharge, loss of appetite, vomiting, diarrhea, seizures, and neurological signs.",
            Treatment:"There is no specific cure for canine distemper, so treatment focuses on managing the symptoms and providing supportive care. This includes medications to control fever, antibiotics to prevent secondary infections, intravenous fluids to combat dehydration, and other medications to alleviate specific symptoms. Dogs with severe neurological signs may require specialized care",
            Prevention:"Vaccination is the key preventive measure against canine distemper. Puppies should receive a series of vaccinations starting at around 6-8 weeks of age, followed by boosters at regular intervals. It's important to keep dogs away from potentially infected animals and maintain good hygiene practices."
        },{
            Diseases:"Canine Heartworm Disease:",
            Details:"Canine Heartworm Disease is caused by parasitic worms called heartworms, which are transmitted through mosquito bites. The worms reside in the dog's heart, lungs, and blood vessels, causing damage and potentially leading to heart failure. Symptoms may include coughing, exercise intolerance, weight loss, and difficulty breathing.",
            Treatment:"Treating heartworm disease involves a series of steps. Initially, a thorough examination and diagnostic tests are conducted to assess the extent of the infection. Treatment usually involves administering medication to kill the adult worms, followed by a period of rest and restricted activity. In severe cases, additional treatment may be required to address complications or support heart function.",
            Prevention:"Preventing heartworm disease is much easier and safer than treating it. Monthly heartworm preventive medications prescribed by veterinarians are highly effective at preventing heartworm infection. It's important to administer these preventives consistently, especially in mosquito-prone areas, to ensure your dog's protection."
        }]
    },{
        _id:2,
        name:"Cat",
        details:[{
            Diseases:"Feline Panleukopenia (Feline Distemper):",
            Details:"Feline Panleukopenia, also known as Feline Distemper, is a highly contagious viral disease that affects cats. It spreads through direct contact with infected bodily fluids or contaminated environments. The virus primarily targets rapidly dividing cells in the bone marrow, intestines, and lymphoid tissues, leading to a decrease in white blood cells, severe gastrointestinal symptoms, and a weakened immune system.",
            Treatment:"Treatment for Feline Panleukopenia focuses on supportive care to manage symptoms and boost the cat's immune system. It often includes providing intravenous fluids to combat dehydration, medications to control vomiting and diarrhea, antibiotics to prevent secondary infections, and other supportive therapies. Infected cats are typically isolated to prevent the spread of the virus.",
            Prevention:"Vaccination is essential in preventing Feline Panleukopenia. Kittens should receive a series of vaccinations starting at around 6-8 weeks of age, followed by boosters at regular intervals. Maintaining good hygiene practices and minimizing exposure to potentially infected cats or environments are also important preventive measures."
        },{
            Diseases:"Feline Upper Respiratory Infection (URI):",
            Details:"Feline Upper Respiratory Infection refers to a group of viral and bacterial infections that affect a cat's respiratory system. It is highly contagious and spreads through close contact with infected cats, contaminated objects, or airborne droplets. Common pathogens involved in URIs include feline herpesvirus and feline calicivirus. Symptoms may include sneezing, nasal discharge, congestion, coughing, fever, loss of appetite, and eye or mouth ulcers.",
            Treatment:"Treatment for Feline Upper Respiratory Infections aims to alleviate symptoms, prevent secondary infections, and support the cat's recovery. It often involves medications such as antibiotics to treat bacterial infections, antiviral drugs to manage viral infections, and supportive care, including keeping the cat's environment clean and providing proper nutrition and hydration.",
            Prevention:"Preventing Feline Upper Respiratory Infections can be challenging due to their highly contagious nature. However, regular vaccinations against common pathogens, good hygiene practices (such as regular handwashing), and minimizing exposure to infected cats can help reduce the risk."
        },{
            Diseases:"Feline Leukemia Virus (FeLV):",
            Details:"Feline Leukemia Virus is a retrovirus that affects cats worldwide. It is primarily transmitted through close contact with infected cats, such as through mutual grooming, shared litter boxes, or bite wounds. FeLV weakens the cat's immune system, making it susceptible to infections, anemia, and certain types of cancer. Infected cats may exhibit a variety of symptoms, including weight loss, poor coat condition, recurrent infections, anemia, and cancer-related signs.",
            Treatment:"There is no cure for Feline Leukemia Virus, so treatment focuses on managing the cat's symptoms and improving its quality of life. This includes supportive care to address specific health issues, such as antibiotics for infections, blood transfusions for severe anemia, and other treatments tailored to individual needs. Regular veterinary check-ups are essential to monitor the cat's health and provide appropriate care.",
            Prevention:"Preventing Feline Leukemia Virus involves minimizing exposure to infected cats and implementing preventive measures. Vaccination against FeLV is available and is recommended for cats at risk, such as those who spend time outdoors or have contact with potentially infected cats. Testing for FeLV before introducing new cats into a household and practicing responsible cat ownership can also help prevent the spread of the virus."
        }]
    },{
        _id:3,
        name:"Fish",
        details:[{
            Diseases:"Ichthyophthirius multifiliis (Ich):",
            Details:"Ich, also known as white spot disease, is one of the most common parasitic infections affecting fish. It is caused by a protozoan parasite called Ichthyophthirius multifiliis. Infected fish develop white spots resembling grains of salt or sugar on their skin, fins, and gills. They may also exhibit symptoms like scratching against objects, increased mucus production, respiratory distress, and loss of appetite.",
            Treatment:"Treating Ich typically involves raising the water temperature gradually to speed up the parasite's life cycle. This is done in conjunction with adding medication specifically designed to kill the parasite. Additionally, regular water changes and maintaining good water quality are important for the fish's recovery. Quarantining affected fish can help prevent the spread of the disease to other tank inhabitants.",
            Prevention:"Maintaining a clean and well-maintained aquarium, avoiding the introduction of infected fish or contaminated items, and providing a stress-free environment for fish can help prevent Ich outbreaks. It's also beneficial to quarantine new fish before adding them to the main tank to ensure they are disease-free."
        },{
            Diseases:"Fin Rot:",
            Details:"Fin Rot is a bacterial infection that affects the fins and tail of fish. It is commonly caused by opportunistic bacteria that take advantage of weakened fish due to poor water conditions, stress, or injuries. Symptoms of fin rot include frayed or ragged fins, discoloration, inflammation, and in severe cases, tissue erosion.",
            Treatment:"Treating fin rot involves addressing the underlying cause and providing suitable water conditions for the fish's recovery. This includes regular water changes, maintaining proper filtration, and correcting any water quality issues. In some cases, topical treatments such as antibiotics or antifungal medications may be necessary to control the bacterial infection. Ensuring a balanced diet and minimizing stressors also contribute to the healing process.",
            Prevention:"Maintaining good water quality and providing a stress-free environment are crucial for preventing fin rot. Regular monitoring of water parameters, avoiding overcrowding, and maintaining a balanced diet can help keep fish healthy and less susceptible to infections. Promptly addressing any signs of stress or injury in fish is also important to prevent the development of fin rot."
        },{
            Diseases:"Dropsy:",
            Details:"Dropsy, also known as 'pinecone disease', is a condition characterized by the swelling of a fish's body due to fluid retention. It can be caused by various factors, including bacterial infections, organ failure, or underlying health issues. Affected fish exhibit bloating, raised scales, protruding eyes, lethargy, loss of appetite, and may have difficulty swimming.",
            Treatment:"Treating dropsy can be challenging, as it often indicates severe internal issues. It's important to isolate the affected fish and provide supportive care to improve its condition. This includes maintaining clean water conditions, adjusting water parameters to reduce stress, and administering medication as prescribed by a veterinarian. However, the success of treatment for dropsy depends on identifying and addressing the underlying cause, if possible.",
            Prevention:"Maintaining a clean and well-maintained aquarium, providing a balanced diet, and minimizing stressors can help prevent dropsy. Regular monitoring of fish behavior and health, along with prompt action if any abnormalities are observed, can aid in early detection and treatment of potential issues."
        }]
    },{
        _id:4,
        name:"Bird",
        details:[{
            Diseases:"Avian Chlamydiosis (Psittacosis):",
            Details:"Avian Chlamydiosis, also known as Psittacosis or Parrot Fever, is a bacterial infection that affects a wide range of bird species, including parrots, cockatiels, and pigeons. It can be transmitted to humans as well. Infected birds may exhibit symptoms such as respiratory distress, weight loss, lethargy, nasal discharge, and diarrhea. In severe cases, birds may develop pneumonia and liver disease.",
            Treatment:"Treatment for Avian Chlamydiosis involves administering appropriate antibiotics prescribed by a veterinarian. The duration and type of antibiotic treatment may vary depending on the bird species, severity of the infection, and other factors. In addition to medication, supportive care, such as maintaining a stress-free environment, providing proper nutrition and hydration, and ensuring good hygiene, is crucial for the bird's recovery.",
            Prevention:"Preventing Avian Chlamydiosis requires practicing good hygiene and biosecurity measures. This includes regular cleaning and disinfection of cages, food and water bowls, and toys. Minimizing stress, avoiding overcrowding, and preventing contact with potentially infected birds are also important preventive measures. It's recommended to handle and house birds separately if they are suspected to be infected."
        },{
            Diseases:"Polyomavirus:",
            Details:"Polyomavirus is a viral infection that primarily affects young birds, particularly psittacine species such as parrots, cockatoos, and macaws. It is highly contagious and can be transmitted through direct contact with infected birds or contaminated objects. Polyomavirus can cause various symptoms, including lethargy, loss of appetite, weight loss, abnormal feather development, and in severe cases, sudden death.",
            Treatment:"There is no specific cure for Polyomavirus, so treatment focuses on supportive care and managing the bird's symptoms. This includes providing proper nutrition, maintaining a warm and comfortable environment, and ensuring good hygiene. Infected birds may require additional treatments, such as fluids and medication to address secondary infections or alleviate specific symptoms. However, the prognosis for Polyomavirus-infected birds can be poor, and prevention is crucial.",
            Prevention:"Preventing Polyomavirus involves practicing strict biosecurity measures, such as quarantine and testing new birds before introducing them to the flock. Regular cleaning and disinfection of cages, toys, and other equipment, as well as minimizing exposure to potentially infected birds, are important preventive steps. Additionally, breeders should follow appropriate vaccination protocols to minimize the risk of Polyomavirus transmission."
        },{
            Diseases:"Aspergillosis:",
            Details:"Aspergillosis is a fungal infection caused by the Aspergillus species of fungi. It can affect birds of various species, particularly those with compromised immune systems or respiratory issues. Birds may inhale fungal spores present in contaminated environments, leading to respiratory distress, weight loss, decreased activity, difficulty breathing, and in severe cases, organ damage.",
            Treatment:"Treating Aspergillosis requires a combination of antifungal medication and supportive care. Antifungal drugs prescribed by a veterinarian may include oral or injectable medications, nebulization therapy, or topical treatments, depending on the severity and location of the infection. Supportive care involves providing a clean and stress-free environment, good nutrition, and appropriate hydration to aid in the bird's recovery.",
            Prevention:"Preventing Aspergillosis involves maintaining a clean and well-ventilated environment for birds, with proper air circulation and humidity control. Regular cleaning and disinfection of cages, perches, and nesting areas are essential to minimize the growth and spread of fungal spores. Ensuring a balanced diet, reducing stressors, and providing good overall bird care can also help prevent Aspergil"
        }]
    },{
        _id:5,
        name:"Rabbit",
        details:[{
            Diseases:"Rabbit Viral Hemorrhagic Disease (RVHD):",
            Details:"Rabbit Viral Hemorrhagic Disease is a highly contagious viral infection that affects rabbits. It is caused by calicivirus and has two main strains: RVHD1 and RVHD2. The disease is spread through direct contact with infected rabbits or their secretions, as well as contaminated surfaces or objects. RVHD can cause sudden death in rabbits, and symptoms may include fever, lethargy, loss of appetite, respiratory distress, and bleeding.",
            Treatment:"Unfortunately, there is no specific cure for RVHD. Prevention is crucial, and rabbits should be vaccinated against both RVHD1 and RVHD2. If a rabbit is suspected to have RVHD, supportive care is provided, including maintaining a clean and stress-free environment, ensuring proper hydration and nutrition, and managing any secondary infections. Quarantine and strict biosecurity measures should be implemented to prevent the spread of the disease.",
            Prevention:"Vaccination is the most effective way to prevent RVHD in rabbits. Vaccines for both RVHD1 and RVHD2 are available and should be administered as recommended by a veterinarian. Additionally, practicing good hygiene, avoiding contact with wild rabbits or contaminated areas, and implementing appropriate biosecurity measures can help reduce the risk of RVHD."
        },{
            Diseases:"Pasteurellosis:",
            Details:"Pasteurellosis, also known as Snuffles, is a bacterial infection caused by Pasteurella multocida. It is a common respiratory disease in rabbits and can also affect other animals. Infected rabbits may exhibit symptoms such as sneezing, nasal discharge, conjunctivitis, difficulty breathing, loss of appetite, and head tilt. In severe cases, pasteurellosis can spread to other parts of the body, leading to abscesses and systemic infection.",
            Treatment:"Treatment for Pasteurellosis involves a combination of antibiotics and supportive care. Antibiotics prescribed by a veterinarian target the specific strain of Pasteurella multocida. Supportive care includes providing a clean and well-ventilated environment, maintaining proper hydration and nutrition, and managing any complications, such as abscesses. Regular veterinary check-ups and follow-up treatments may be necessary to ensure the infection is properly controlled.",
            Prevention:"Preventing Pasteurellosis involves practicing good hygiene and minimizing stressors in rabbits. Providing a clean and well-ventilated living environment, regular cleaning and disinfection of cages, and proper nutrition contribute to the prevention of this disease. Quarantining new rabbits before introducing them to the existing rabbit population and avoiding overcrowding can help reduce the risk of transmission."
        },{
            Diseases:"Encephalitozoonosis:",
            Details:"Encephalitozoonosis is a parasitic infection caused by the microsporidian parasite Encephalitozoon cuniculi. It primarily affects rabbits but can also infect other animals, including humans. The parasite commonly targets the nervous and renal systems, leading to neurological symptoms, urinary tract disorders, and in severe cases, kidney failure. Infected rabbits may show signs such as head tilt, loss of balance, hind limb weakness, urinary incontinence, and cataracts.",
            Treatment:"Treatment for Encephalitozoonosis involves medications, such as fenbendazole or albendazole, which are prescribed by a veterinarian. These drugs help control the parasite's growth and reduce the severity of symptoms. Supportive care, including maintaining proper nutrition, hydration, and a stress-free environment, is important for the rabbit's recovery. Regular veterinary check-ups and monitoring of kidney function are necessary for managing the disease long-term.",
            Prevention:"Preventing Encephalitozoonosis involves minimizing exposure to the parasite. This includes providing a clean living environment, practicing good hygiene, and avoiding contact with potentially infected animals or contaminated environments. Quarantining new rabbits before introducing them to the existing population and maintaining good overall rabbit health can help prevent the transmission of the parasite."
        }]
    },{
        _id:6,
        name:"Cow",
        details:[{
            Diseases:"",
            Details:"",
            Treatment:"",
            Prevention:""
        },{
            Diseases:"",
            Details:"",
            Treatment:"",
            Prevention:""
        },{
            Diseases:"",
            Details:"",
            Treatment:"",
            Prevention:""
        }]
    }]
    return (
        <div>
            <Navbar />
            {
                petData.map((ele)=>{
                    return (
                        <div>
                        {id===ele._id ? <div>
                        <div id='PetImage'>
                            <img src="" alt={ele.name} />
                        </div>
                        <div>
                            <h1>{ele.details.Diseases}:</h1>
                            <h2>{ele.details.Details}</h2>
                            <h1>Treatment:</h1>
                            <h2>{ele.details.Treatment}</h2>
                            <h1>Prevention:</h1>
                            <h2>{ele.details.Prevention}</h2>
                            
                        </div>
                        </div>:null}
                    </div>
                    )
                    
                })
                
            }
            <Footer />
        </div>
    )
}

export default Pet