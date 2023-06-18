

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard'
import Layout from './Components/shared/Layout.jsx'
import Products from './Pages/Products'
import Stafs from './Pages/Stafs'
import Clients from './Pages/Clients'
import Profile from './Pages/Profile'
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
                <Route path="/client" element={<Client />} />
                <Route path="/doctor" element={<Doctor />} />
                <Route path="/admin" element={<Layout />}>
                    <Route path='/admin' element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="/admin/stafs" element={<Stafs />} />
                    <Route path="/admin/Clients" element={<Clients />} />
                    <Route path="/admin/transactions" element={<Products/>} />
                    <Route path="/admin/messages" element={<Products/>} />
                    <Route path="/admin/settings" element={<Products/>} />
                    <Route path="/admin/support" element={<Products/>} />
                    <Route path="/admin/profile" element={<Profile/>} />
                </Route>
                <Route path="/register" element={<div>Register</div>} />
            </Routes>
         </Router>
    );
}

export default App;
