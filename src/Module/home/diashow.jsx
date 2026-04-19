
import {
  Managementsysteme, Prozessoptimierung, Datenbanken,
  EDLGBerichte,
  Energieeffizienzberatung,
  Transformationskonzepte,
  Projektmanagement,
  Fördermittelberatung
} from './diashow/diashowindex';

export default function Diashow() {
  return (
    <div className="pb-20 pt-20   bg-base-200 ">



      {/* //UNSERE DIENSTLEISTUNGEN DIV /////////////////////////////////// */}
      <div className="relative  pb-20">


        <h1 className="header">
          Unsere Dienstleistungen
        </h1>
        {/*Für GutCert als Lead auditor tätig für qmb enms und ums */}
        <div className=" max-w-7xl mx-auto">
          <h2 className="content pt-10 text-center">

            Wir unterstützen Industrieunternehmen ganzheitlich bei der Optimierung ihrer Energie- und Ressourceneffizienz. Unser Ansatz verbindet technische Expertise mit strategischem Weitblick. Von der Analyse über die Konzeptentwicklung bis hin zur Umsetzung und Fördermittelbegleitung bieten wir maßgeschneiderte Lösungen, die wirtschaftlich sinnvoll und nachhaltig wirksam sind.
            Unser Ziel ist es, Ihre Energiekosten zu senken, gesetzliche Anforderungen sicher zu erfüllen und gleichzeitig Ihre Wettbewerbsfähigkeit langfristig zu stärken.
            <br />
            Seit 2008 begleiten wir Firmen in der Etablierung/Optimierung der Grundbausteine
            Energieeffizienz, Energiemonitoring, Managementsysteme, Projektmanagement und Prozessoptimierung
            zur Ausschöpfung des betrieblichen Potenzials.



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

              <Managementsysteme />
              <Prozessoptimierung />
              <Datenbanken />




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

              <EDLGBerichte />
              <Energieeffizienzberatung />
              <Transformationskonzepte />



            </div>


            <a href="#slideC" className="btn ">
              ❯
            </a>
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
            
              <Projektmanagement />
              <Fördermittelberatung />

             
            </div>

            <a href="#slideA" className="btn ">
              ❯
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
