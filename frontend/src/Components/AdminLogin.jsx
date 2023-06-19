import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {  faLock } from '@fortawesome/free-solid-svg-icons';
import { Link ,useNavigate} from "react-router-dom"
import "../Style/cssLogin.css"

const AdminLogin = () => {
    const navigate =useNavigate()
    const [inputValue, setInputValue] = useState('');

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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

    const handleSubmit = async(event) => {
        event.preventDefault();

        // Clear previous error messages
        setErrors({
            usernameError: '',
            emailError: '',
            passwordError: '',
            confirmPasswordError: '',
        });

        // Validate inputs and display error messages if invalid
        if (formData.username === '') {
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

        if (formData.password === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                passwordError: 'Please enter a password.',
            }));
        } else if (!validatePassword(formData.password)) {
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
        } else if (formData.password !== formData.confirmPassword) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmPasswordError: 'Passwords do not match.',
            }));
        }

        // If there are no errors, perform login authentication
        if (errors.emailError === '' && errors.passwordError === '') {
            try {
                const response = await fetch('https://precious-tan-binturong.cyclic.app/user/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    // Process the response and handle successful login
                    alert('Login successful')
                    navigate('/admin')
                    console.log('Login successful');
                } else {
                    // Handle login error
                    const errorData = await response.json();
                    console.error(errorData);
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        emailError: 'Invalid email or password.',
                    }));
                }
            } catch (error) {
                // Handle network or other errors
                console.error(error);
                // setErrors((prevErrors) => ({
                //     ...prevErrors,
                //     emailError: 'An error occurred during login.',
                // }));
            }
        }
    };

    const handleChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
        setInputValue(event.target.value);
    };

    return (
        <div id="parent">
        <form id="form" onSubmit={handleSubmit}>
            <div>
                <h2>Admin Login Form</h2>
            </div>
            <div>
                {/* <label htmlFor="email">Email</label> <br/> */}
                <input className="form-input" type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
                <label className={`form-label ${inputValue !== '' ? 'active' : ''}`} htmlFor="email"> <FontAwesomeIcon icon={faEnvelope} /> Email</label>
                <span className="error-message">{errors.emailError}</span>
            </div>
            <div>
                {/* <label htmlFor="password">Password</label> <br/> */}
                <input className="form-input" type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                <label className={`form-label ${inputValue !== '' ? 'active' : ''}`} htmlFor="password"> <FontAwesomeIcon icon={faLock} /> Password</label>
                <span className="error-message">{errors.passwordError}</span>
            </div>
 
            <div>
                <input id="signup-btn" type="submit" value="Login" /> <br /><br/>
                <button id="google-btn">  Continue with Google</button>                
            </div>

            <div id="links">
                <p>Not a member? <Link className='link' to="/user/signup">Signup now</Link></p>
                <p>Are you a User? <Link className='link' to="/user/login">Login here</Link></p>
                <p>Are you a Doctor? <Link className='link' to="/doctor/login">Login here</Link></p>
            </div>

            <br />
           
        </form>
        </div>
    );
};

export default AdminLogin;