
// import Dashboard from './pages/Dashboard'
// import Layout from './components/shared/Layout.jsx'
// import Products from './pages/Products'
import Doctor from './Pages/Doctor'
import {BrowserRouter, Route ,Routes} from "react-router-dom"
import {Client} from './Pages/Client';

function App() {
    return (
        // <Client />
        <Doctor/>
        
        // <Router>
            
        // //     {/* <Routes>
        // //         <Route path="/" element={<Layout />}>
        // //             <Route index element={<Dashboard />} />
        // //             <Route path="products" element={<Products />} />
        // //         </Route>
        // //         <Route path="/register" element={<div>Register</div>} />
        // //     </Routes> */}
            
        // {/* //     <Routes>
        // //         <Route path="/client" element={<Client />} />
        // //         <Route path="/doctor" element={<Doctor />} />
        // //     </Routes> */}
        // // </Router>
    )
}

export default App;