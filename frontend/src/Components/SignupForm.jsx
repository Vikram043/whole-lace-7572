import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link,useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from 'react-icons/ai';
import "../Style/Login.css"

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pass: '',
        role:'',
        confirmPassword:''
        
    });

    const [errors, setErrors] = useState({
        usernameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
    });

    // Function to validate the email using regex
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Function to validate the password strength using regex
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData)

        // Clear previous error messages
        setErrors({
            usernameError: '',
            emailError: '',
            passwordError: '',
            confirmPasswordError: '',
        });

        // Validate inputs and display error messages if invalid
        if (formData.name === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                usernameError: 'Please enter a username.',
            }));
        }

        if (formData.email === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                emailError: 'Please enter an email.',
            }));
        } else if (!validateEmail(formData.email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                emailError: 'Please enter a valid email.',
            }));
        }

        if (formData.pass === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                passwordError: 'Please enter a password.',
            }));
        } else if (!validatePassword(formData.pass)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                passwordError: 'Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, a digit, and a special character.',
            }));
        }

        if (formData.confirmPassword === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmPasswordError: 'Please confirm your password.',
            }));
        } else if (formData.pass !== formData.confirmPassword) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmPasswordError: 'Passwords do not match.',
            }));
        }

         // If there are no errors, send the form data to the server
         if (
            formData.name !== '' &&
            formData.email !== '' &&
            formData.pass !== '' &&
            formData.confirmPassword !== '' &&
            validateEmail(formData.email) &&
            validatePassword(formData.pass) &&
            formData.pass === formData.confirmPassword
        ) {
            try {
                const response = await fetch(`http://localhost:8000/user/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                // Handle the response from the server
                if (response.ok) {
                    // Form submission successful
                    alert('signup successfully')
                    navigate(`/user/login`)
                    console.log('Form submitted successfully!');
                } else {
                    // Form submission failed
                    console.log('Form submission failed.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        //......google OAuth........

    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));

        setInputValue(event.target.value);
      };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Signup Form</h2>
            </div>
            <div>
                <select className='form-input' name="role" id="" value={formData.role} onChange={handleChange}>
                   <option value="">Choose role</option>
                   <option value="user">User</option>
                   <option value="admin">Admin</option>
                   <option value="doctor">Doctor</option>
                </select>
            </div>
            <div>
                {/* <label htmlFor="username">Username</label> <br/> */}
                <input className="form-input" type="text" id="username" name="name" value={formData.name} onChange={handleChange} />
                <label className={`form-label ${inputValue !== '' ? 'active' : ''}`} htmlFor="username"><FontAwesomeIcon icon={faUser} /> Username</label>
                <span className="error-message">{errors.usernameError}</span>
            </div>
            <div>
                {/* <label htmlFor="email">Email</label> <br/> */}
                <input className="form-input" type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
                <label className={`form-label ${inputValue !== '' ? 'active' : ''}`} htmlFor="email"> <FontAwesomeIcon icon={faEnvelope} /> Email</label>
                <span className="error-message">{errors.emailError}</span>
            </div>
            <div>
                {/* <label htmlFor="password">Password</label> <br/> */}
                <input className="form-input" type="password" id="password" name="pass" value={formData.pass} onChange={handleChange} />
                <label className={`form-label ${inputValue !== '' ? 'active' : ''}`} htmlFor="password"> <FontAwesomeIcon icon={faLock} /> Password</label>
                <span className="error-message">{errors.passwordError}</span>
            </div>
             <div>
                {/* <label htmlFor="confirmPassword">Confirm Password</label> <br/> */}
                <input className="form-input" type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                <label className={`form-label ${inputValue !== '' ? 'active' : ''}`} htmlFor="confirmPassword"> <FontAwesomeIcon icon={faLock} /> Confirm Password</label>
                <span className="error-message">{errors.confirmPasswordError}</span>
            </div> 
            <div>
                <input id="signup-btn" type="submit" value="Submit" /> <br /><br/>
                <button id="google-btn"> < AiOutlineGoogle/>  Continue with Google</button>
                <p>Alredy have an account?<Link to="/user/login">Login Here</Link></p><br />
            </div>
        </form>
    );
};

export default Form;
