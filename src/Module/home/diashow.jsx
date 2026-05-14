
import {
  Managementsysteme, Prozessoptimierung, Datenbanken,
  EDLGBerichte,
  Energieeffizienzberatung,
  Transformationskonzepte,
  Projektmanagement,
  Fördermittelberatung,
  Berichtspflichten
} from './diashow/diashowindex';

export default function Diashow() {
  return (
    <div className="pb-20 pt-20   bg-base-200 ">



      {/* //UNSERE DIENSTLEISTUNGEN DIV /////////////////////////////////// */}
      <div className="relative  pb-20">


        <h1 className="header">
         MBConsult.Me 
        </h1>
        {/*Für GutCert als Lead auditor tätig für qmb enms und ums */}
        <div className="lg:p-0 pr-5 pl-5 max-w-7xl mx-auto">
          <h2 className="content pt-10 text-center text-pretty">
 Seit 2008 unterstützen wir Industrieunternehmen und kommunale Betriebe bei der nachhaltigen Optimierung ihrer betrieblichen Prozesse und Systeme. 
 Unser Fokus liegt auf den zentralen Bausteinen moderner Unternehmensentwicklung: Energieeffizienz, Energiemonitoring, Fördermittelberatung,<br/>
 Managementsysteme, Projektmanagement sowie Prozessoptimierung.
<br/>
<br/>
Wir <br/>
begleiten unsere Kunden bei der Einführung und Weiterentwicklung integrierter Managementsysteme (IMS) nach DIN EN ISO 9001, 14001, 50001 und weiteren relevanten Normen. Als akkreditierte Lead-Auditoren arbeiten wir mit etablierten Zertifizierungsstellen zusammen und verfügen über langjährige Erfahrung in der Auditierung und Prozessbewertung.
<br/>

Darüber hinaus sind wir anerkannte Berater der Energieeffizienz-Expertenliste (dena) und erstellen Energieaudits sowie EDL-G-Berichte gemäß den Vorgaben des BAFA. Als gelistete Sachverständige begleiten wir Unternehmen und Kommunen bei Förderprogrammen von BAFA, KfW und weiteren öffentlichen Institutionen – von der Antragstellung bis zur erfolgreichen Umsetzung der Maßnahmen.
<br/>
Mit unserer SQL-basierten Datenbanklösung bieten wir effiziente Werkzeuge für Energiemonitoring, EDL-G-Berichte, ValERI-Bewertungen und individuelle, kundenspezifische Datenbankanwendungen.
<br/>
Von der Analyse über die Konzeptentwicklung bis hin zur Fördermittelbeantragung und Umsetzungsbegleitung entwickeln wir maßgeschneiderte Lösungen, die wirtschaftlich sinnvoll und nachhaltig wirksam sind.
<br/>
Unser Ziel ist es, Energiekosten nachhaltig zu senken, gesetzliche Anforderungen sicher zu erfüllen und die Wettbewerbsfähigkeit unserer Kunden langfristig zu stärken.
<br/>
Dabei verstehen wir uns in jeder Projektphase als persönlicher und verlässlicher Partner. In enger Abstimmung mit Ihrem Unternehmen begleiten wir sämtliche Prozesse – von der ersten Idee bis zur erfolgreichen Umsetzung und langfristigen Maßnahmenbetreuung.



          </h2>
        </div>

      </div>

      {/* DIV DIASHOW 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}




      <div className="  mx-auto max-w-7xl">
        <div className=" rounded-lg inset-shadow-[0_5px_25px_rgba(0,0,0,0.15)] bg-base-300 md:carousel  w-full">

          {/* 
          /////////////////////////////////////////
          // SLIDE A                             //
          /////////////////////////////////////////
*/}

          <div id="slideA" className="carousel-item relative w-full">
            <div className="hidden  md:flex">
              <a className="btn" href="#slideC">
                ❮
              </a>
            </div>
            <div className="diashow2-grid grid-cols-3">
              <Energieeffizienzberatung />
              <Datenbanken />
                  <Fördermittelberatung />
             
              
             




            </div>

            <div className="hidden md:flex">
              <a className="btn " href="#slideB">
                ❯
              </a>
            </div>
          </div>

          {/*
            /////////////////////////////////////////
           // SLIDE B                              /
          /////////////////////////////////////////

        */}
          <div id="slideB" className="carousel-item relative w-full">
            <div className="hidden md:flex ">
              <a href="#slideA" className="btn">
                ❮
              </a>
            </div>
            <div className="diashow2-grid grid-cols-3">
               <Managementsysteme />
               <Projektmanagement />
              <Prozessoptimierung />
             



            </div>

           <div className="hidden md:flex ">
            <a href="#slideC" className="btn ">
              ❯
            </a>
            </div>
          </div>



          {/* /////////////////////////////////////////
           // SLIDE C                              /
          /////////////////////////////////////////

          */}



          <div id="slideC" className="carousel-item relative w-full">


            <div className="hidden md:flex ">
              <a href="#slideB" className="btn ">
                ❮
              </a>
            </div>
            <div className="grid-cols-2 diashow2-grid ">
            
          
              <Berichtspflichten />
               <Transformationskonzepte />
             
            </div>
<div className="hidden md:flex ">
            <a href="#slideA" className="btn ">
              ❯
            </a>
          </div>
</div>
        </div>
      </div>
    </div>
  );
}
