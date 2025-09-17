import { useState } from 'react'
import { BrowserRouter as Router, 
         Route, 
         Routes
      } from 'react-router-dom';
import Navbar from './Module/global/navbar.jsx'
import Footer from './Module/global/footer.jsx'

import Home from './pages/Home';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    
     <Router  class="bg-base-100 text-base-content">
     <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/career" element={<Career />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
            </Routes>
       <Footer />
     
        </Router>
  );
}

export default App;
