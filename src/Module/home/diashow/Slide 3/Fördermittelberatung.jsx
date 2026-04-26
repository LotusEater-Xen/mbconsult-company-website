import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Fördermittelberatung() {
  
  return (
      <a href="Fördermittelberatung" className="card card-diashow2 m-5 md:mr-2">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/04/27/10/37/counter-2265065_1280.jpg"
                    alt="Shoes"
                    className=" "
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-header">Fördermittelberatung</h2>
                  <p className="describer">
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-primary badge-outline"><FontAwesomeIcon icon={faPercent} /></div>
                  
                  </div>
                </div>
              </a>

  );}
   