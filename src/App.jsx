import { useState } from 'react'
import { BrowserRouter as Router, 
         Route, 
         Routes
      } from 'react-router-dom';
import {Navbar,Footer} from './Module/Global/globalindex.jsx';
import {Home,Managementsysteme,Prozessoptimierung,Energieeffizienzberatung,Transformationskonzepte,EDLGBerichte,Fördermittelberatung, Projektmanagement, Contact} from './pages/pagesindex.jsx';
     
function App() {
  return (
    
     <Router  class="bg-base-100 text-base-content">
     <Navbar />
            <Routes>
                <Route path="/Impressum" element={<Contact />} />
                <Route path="/" element={<Home />} />
                <Route path="/Managementsysteme" element={<Managementsysteme />}/>
                <Route path="/Prozessoptimierung" element={<Prozessoptimierung />}/>
                <Route path="/Energieeffizienzberatung" element={<Energieeffizienzberatung />}/>
                <Route path="/Transformationskonzepte" element={<Transformationskonzepte />}/>
                <Route path="/Fördermittelberatung" element={<Fördermittelberatung />}/>
                <Route path="/EDL-G_Berichte" element={<EDLGBerichte />}/>
                 <Route path="Projektmanagement" element={<Projektmanagement />}/>

            </Routes>
       <Footer />
     
        </Router>
  );
}

export default App;
