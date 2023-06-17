import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/shared/Layout';
// import Dashboard from './pages/Dashboard';
// import Products from './pages/Products';
import Doctor from './Pages/Doctor';
import Client from './Pages/Client';

function App() {
    return (
       

        <Router>
        
        //     <Routes>
        //       {/* <Route path="/" element={<Dashboard />} /> */}
        //       {/* <Route path="/products" element={<Products />} /> */}
         {/* <Route path="/doctor" element={<Doctor />} /> */}
                 <Route path="/client" element={<Client />} />
        //        <Route path="/doctor" element={<Doctor />} />
        //      
        //   
        //       {/* <Route path="/register" element={<div>Register</div>} /> */}
        //     </Routes>
         </Router>
    );
}

export default App;
