import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
  
 
 export default function EDLGBerichte() {
  
  return (
   
              <a href="EDL-G_Berichte "className="card card-diashow2 m-5 md:ml-2">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/06/12/20/27/macro-1452987_1280.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-header">EDL-G Berichte</h2>
                  <p className="describer">
                    A card component has ihcidhvidgvhvoufhv9rehvrehvrehvirehv a
                    figure, a body part, and inside body there are title and
                    actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-primary badge-outline"><FontAwesomeIcon icon={faChartPie} /></div>
                  </div>
                </div>
              </a>
  );
 }
