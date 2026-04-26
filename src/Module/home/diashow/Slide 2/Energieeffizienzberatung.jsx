 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

 
 export default function Energieeffizienzberatung() {
  
  return (
     <a href="Energieeffizienzberatung"  className=" card card-diashow2 m-5 md:ml-2">
              
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/04/27/10/37/counter-2265065_1280.jpg"
                    alt="Shoes"
                    className=" "
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-header">Energieeffizienzberatung</h2>
                  <p className="describer">
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-primary badge-outline"><FontAwesomeIcon icon={faBolt} /></div>
                  </div>
                </div>
             
              </a>
  );
 }
