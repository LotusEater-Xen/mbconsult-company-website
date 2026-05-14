import Body from '../../Module/diashow/body'
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase} from '@fortawesome/free-solid-svg-icons';
export default function Subpage() {

  //Link to unterstützung für verpflichtende Berichterstattung 
  //Berichtspflichten

  return (
    <Body
    header="Berichtspflichten"
    content=" Energieaudit und EL-G Berichte nach DIN 16247.
    Normalisierungen und Regressionsbewertung von Prozessen und Anlagen.
    Effizienzmaßnahmenliste.
    VSME Berichte."
    

link="Datenbanken"
    headerlink="Datenbanklösungen" 
    describerlink="Resourcenschonende Ermittlung Ihrer Verbräuche."
    iconlink={<FontAwesomeIcon icon={faDatabase} />}/>

   

  );
}


  




   





         

  




   





         
