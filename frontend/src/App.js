import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import Dashboard from './pages/Dashboard'
// import Layout from './components/shared/Layout.jsx'
// import Products from './pages/Products'

import {Client} from './Pages/Client';

function App() {
    return (
        <Router>
            
            {/* <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                </Route>
                <Route path="/register" element={<div>Register</div>} />
            </Routes> */}

            <Routes>
            <Route path="/client" element={<Client />} />
            </Routes>
        </Router>
    )
}

export default App;