
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/shared/Layout';
// import Dashboard from './pages/Dashboard';
// import Products from './pages/Products';
import Doctor from './Pages/Doctor';
import Client from './Pages/Client';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import AdminLogin from './Components/AdminLogin';
import DoctorLogin from './Components/DoctorLogin';


function App() {
    return (


        <Router>

             <Routes>
               {/* <Route path="/" element={<Dashboard />} /> */}
               {/* <Route path="/products" element={<Products />} /> */}
                {/* <Route path="/doctor" element={<Doctor />} /> */}
                <Route path="/client" element={<Client />} />
                <Route path="/doctor" element={<Doctor />} />
                <Route path="/user/signup" element={<Signup />} />
                <Route path="/user/login" element={<Login />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/doctor/login" element={<DoctorLogin/>}></Route>
               {/* <Route path="/register" element={<div>Register</div>} /> */}
            </Routes>
        </Router>
    );
}

export default App;
