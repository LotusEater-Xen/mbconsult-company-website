  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears } from '@fortawesome/free-solid-svg-icons';
export default function Prozessoptimierung() {
  
  return (
 <a href="Prozessoptimierung" className="  card card-diashow2 m-5 md:ml-2 md:mr-2 ">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/08/17/13/14/motorcycle-2651286_1280.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-[Montserrat]">Prozessoptimierung</h2>
                  <p className="describer">
                 Analyse, Bewertung und Optimierung.
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-primary badge-outline"><FontAwesomeIcon icon={faGears} /></div>
                  </div>
                </div>
              </a>
  );
 }