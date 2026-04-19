  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsSpin } from '@fortawesome/free-solid-svg-icons';
 export default function Managementsysteme() {
  
  return (

              <a href="Managementsysteme" className=" card card-diashow2 m-5 md:ml-2">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2023/07/10/13/41/technology-8118382_1280.jpg"
                    alt="Server"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-[Montserrat]">Managementsysteme</h2>
                  <p className="describer">
                   Aufbau, Audits und Schulungen
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-primary badge-outline"><FontAwesomeIcon icon={faArrowsSpin} /></div>
                  </div>
                </div>
              </a>

  );
 }