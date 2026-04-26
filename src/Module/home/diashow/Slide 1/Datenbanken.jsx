   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase} from '@fortawesome/free-solid-svg-icons';
 
 export default function Datenbanken() {
  
  return (

              <a href="Datenbanken" className=" card card-diashow2 m-5 md:ml-2">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2023/07/10/13/41/technology-8118382_1280.jpg"
                    alt="Server"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-header">Datenbanklösungen</h2>
                  <p className="describer">
                   Vernetzung, Standardisierung und Angleichung.
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-primary badge-outline"><FontAwesomeIcon icon={faDatabase} /></div>
                  </div>
                </div>
              </a>

  );
 }