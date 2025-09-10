import { useState } from 'react'
import { BrowserRouter as Router, 
         Route, 
         Routes
      } from 'react-router-dom';
import Navbar from './Module/global/navbar.jsx'

import Home from './pages/Home';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
  return (
    
     <Router  class="bg-base-100 text-base-content">
     <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/career" element={<Career />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
  );
}

export default App;
