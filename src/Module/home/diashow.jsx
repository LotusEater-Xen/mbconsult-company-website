export default function Diashow() {
  return (
    <div className="pb-20 pt-20   bg-base-200 ">



 {/* //UNSERE DIENSTLEISTUNGEN DIV /////////////////////////////////// */ }
      <div className="relative  pb-20">
      
         
            <h1 className="header">
              Unsere Dienstleistungen
            </h1>
           {/*Für GutCert als Lead auditor tätig für qmb enms und ums */}
 <div className=" max-w-7xl mx-auto">
            <h2 className="content pt-10 text-center">
           
          Wir unterstützen Industrieunternehmen ganzheitlich bei der Optimierung ihrer Energie- und Ressourceneffizienz. Unser Ansatz verbindet technische Expertise mit strategischem Weitblick. Von der Analyse über die Konzeptentwicklung bis hin zur Umsetzung und Fördermittelbegleitung bieten wir maßgeschneiderte Lösungen, die wirtschaftlich sinnvoll und nachhaltig wirksam sind.
Unser Ziel ist es, Ihre Energiekosten zu senken, gesetzliche Anforderungen sicher zu erfüllen und gleichzeitig Ihre Wettbewerbsfähigkeit langfristig zu stärken.
            <br/>
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
            <div className="diashow2-grid">

              
              <a href="Managementsysteme" className=" card  card-diashow2  m-5 md:mr-2 ">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/04/27/10/37/counter-2265065_1280.jpg"
                    alt="Shoes"
                    className=" "
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-[Montserrat]">Integrierte Managementsysteme</h2>
                 
                  <p className="describer">
DIN EN ISO 9001 14001 140XX 50001
                  </p>
                  <div className="card-actions justify-end">
                     <div className="badge badge-primary badge-outline">Qualität</div>
                       <div className="badge badge-primary badge-outline">Nachhaltigkeit</div>
                           <div className="badge badge-primary badge-outline">Energie</div>
                            
                   
                  </div>
                </div>
              </a>

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
                    <div className="badge badge-primary badge-outline">Planning</div>
                    <div className="badge badge-primary badge-outline">Consulting</div>
                  </div>
                </div>
              </a>

              <a href="Datenbanken" className=" card card-diashow2 m-5 md:ml-2">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2023/07/10/13/41/technology-8118382_1280.jpg"
                    alt="Server"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-[Montserrat]">Innovative Datenbanklösungen</h2>
                  <p className="describer">
                   Vernetzung, Standardisierung und Angleichung.
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-primary badge-outline">Strukturierung</div>
                  </div>
                </div>
              </a>
            </div>

             <div className="hidden md:flex">
              <a  className="btn " href="#slideB">
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
            <div className="diashow2-grid">
              <a href="Energieeffizienzberatung"  className=" card card-diashow2 m-5 md:ml-2">
              
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/04/27/10/37/counter-2265065_1280.jpg"
                    alt="Shoes"
                    className=" "
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-[Montserrat]">Energieeffizienzberatung</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Energy</div>
                    <div className="badge badge-outline">Software</div>
                  </div>
                </div>
             
              </a>

              <a href="Transformationskonzepte" className=" card card-diashow2 m-5 md:ml-2 md:mr-2">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/08/17/13/14/motorcycle-2651286_1280.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-[Montserrat]">Transformationskonzepte</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Planning</div>
                    <div className="badge badge-outline">Consulting</div>
                  </div>
                </div>
              </a>

              <a className="card card-diashow2 m-5 md:ml-2">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/06/12/20/27/macro-1452987_1280.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-[Montserrat]">Card Title</h2>
                  <p>
                    A card component has ihcidhvidgvhvoufhv9rehvrehvrehvirehv a
                    figure, a body part, and inside body there are title and
                    actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Management</div>
                  </div>
                </div>
              </a>
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
            <div className="diashow2-grid">
              <div className="card card-diashow2 m-5 md:mr-2">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/04/27/10/37/counter-2265065_1280.jpg"
                    alt="Shoes"
                    className=" "
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-[Montserrat]">Card Title</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Energy</div>
                    <div className="badge badge-outline">Software</div>
                  </div>
                </div>
              </div>

              <div className="card card-diashow2 m-5 md:ml-2 md:mr-2">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/08/17/13/14/motorcycle-2651286_1280.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-[Montserrat]">Card Title</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Planning</div>
                    <div className="badge badge-outline">Consulting</div>
                  </div>
                </div>
              </div>

              <div className="card card-diashow2 m-5 md:ml-2">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/06/12/20/27/macro-1452987_1280.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-[Montserrat]">Card Title</h2>
                  <p>
                    A card component has ihcidhvidgvhvoufhv9rehvrehvrehvirehv a
                    figure, a body part, and inside body there are title and
                    actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Management</div>
                  </div>
                </div>
              </div>
            </div>

              <a href="#slideA" className="btn ">
                ❯
              </a>
            </div>
           
        </div>
      </div>
      <div></div>
    </div>
  );
}
