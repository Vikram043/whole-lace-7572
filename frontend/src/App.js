

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard'
import Layout from './Components/shared/Layout.jsx'
import Products from './Pages/Products'
import Stafs from './Pages/Stafs'
import Clients from './Pages/Clients'
import Profile from './Pages/Profile'
import Doctor from './Pages/Doctor';
import ProfileDoc from './Pages/ProfileDoc';
import Client from './Pages/Client';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home.jsx'
import AppContextProvider from './Contest/AppContext';
import Navbar from './Components/Navbar';
import AdminLogin from './Components/AdminLogin';
import DoctorLogin from './Components/DoctorLogin';
import TransactionPage from './Pages/Trasaction';
import MessagePage from './Pages/Message';
import AdminSettingsPage from './Pages/AdminSetting';
import Help from './Pages/Help'
import AdminStaffEdit from './Pages/AdminStaffEdit';
import AboutPage from './Pages/Pet'
import Pet from './Pages/AboutPage'
import ContactUs from './Pages/ContactUs'
import Services from './Pages/Services';
function App() {
    return (
        <AppContextProvider>
            <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/client" element={<Client/>}/>
                <Route path="/doctor" element={<Doctor/>}/>
                <Route path="/profiledoc" element={<ProfileDoc />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/pet-veterinary" element={<Pet />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/admin" element={<Layout/>}>
                    <Route path='/admin' element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="/admin/stafs" element={<Stafs />} />
                    <Route path="/admin/Clients" element={<Clients />} />
                    <Route path="/admin/transactions" element={<TransactionPage/>} />
                    <Route path="/admin/messages" element={<MessagePage/>} />
                    <Route path="/admin/settings" element={<AdminSettingsPage/>} />
                    <Route path="/admin/setting" element={<AdminStaffEdit/>} />
                    <Route path="/admin/support" element={<Help/>} />
                    <Route path="/admin/profile" element={<Profile/>} />
                </Route>
                <Route path="/user/signup" element={<Signup/>} />
                <Route path="user/login" element={<Login/>} />
                <Route path="admin/login" element={<AdminLogin/>} />
                <Route path="doctor/login" element={<DoctorLogin/>} />
            </Routes>
         </Router>
        </AppContextProvider>
        
    );
}

export default App;

