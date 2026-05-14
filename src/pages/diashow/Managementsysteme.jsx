import Body from '../../Module/diashow/body'
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase} from '@fortawesome/free-solid-svg-icons';
export default function Subpage() {

  //Link to unterstützung für verpflichtende Berichterstattung 
  //Berichtspflichten

  return (
    <Body
    header="Managementsysteme"
    content=" 
Wir begleiten Unternehmen bei der Einführung, 
Optimierung und Zertifizierung von Managementsystemen nach 

ISO 9001/14001/50001/140XX

Unsere Leistungen
  • Aufbau und Implementierung 
  • Weiterentwicklung bestehender Strukturen
  • Durchführung interner Audits
  • Vorbereitung und Begleitung externer Zertifizierungen
  • Schulung von Mitarbeitenden und Verantwortlichen

Unsere Kundenbranchen
  • Kommunale Betriebe 
      (Verkehr,Bäder,Netze,Wassergewinnung)
  • Industriekunden 
      (allgem. Maschinenbau, Nahrungsmittel, Wasserstrahlschneiden, 
      landwirtschaftliche Maschinen, Papier- und Pappenherstellung, 
      Betreiber von Biogasanlagen und diverse Andere) 

Wir entwickeln Lösungen, die individuell auf Ihre Organisation zugeschnitten sind 
und echten Mehrwert schaffen. Parallel arbeiten wir als Lead-Auditoren 
für Zertifizierungsstellen (u.a. GutCERT) für die oben aufgeführten Normen."
    
link2="Datenbanken"
    headerlink2="Datenbanklösungen" 
    describerlink2="Resourcenschonende Ermittlung Ihrer Verbräuche."
    iconlink2={<FontAwesomeIcon icon={faDatabase} />}

link="Berichtspflichten"
    headerlink="Berichtspflichten" 
    describerlink="EDL-G Berichte nach DIN 16247.
    Prozess & Anlagenanalysen"
    iconlink={<FontAwesomeIcon icon={faDatabase} />}/>






   

  );
}


  




   





         

  




   





         
