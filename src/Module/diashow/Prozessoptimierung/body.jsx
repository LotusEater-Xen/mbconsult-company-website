import Fördermittelberatung from '../../../pages/diashow/subpages/Prozessoptimierung/Fördermittelberatung';
export default function Diashow() {
 
  return (

    <div className="min-h-screen md:ml-60 md:mr-60">
      <div className="mx-auto max-w-7xl text-center">


        <div className=" z-5  relative  ">

          <div className="bg-base-200 pt-15 pb-5 ">

            <h1 className="header">
              Prozesse
            </h1>
            <h2 className=" content pt-10 max-w-4xl mx-auto  ">

              Effiziente Prozesse sind entscheidend für den wirtschaftlichen Erfolg. Wir analysieren Ihre bestehenden Abläufe und identifizieren Optimierungspotenziale – sowohl energetisch als auch operativ.

              Unser Fokus liegt auf:

              Reduzierung von Energie- und Materialverlusten
              Steigerung der Anlageneffizienz
              Verbesserung der Produktionsabläufe

              Durch gezielte Maßnahmen helfen wir Ihnen, Ihre Prozesse nachhaltig leistungsfähiger zu gestalten.


            </h2>



          </div>

        </div>
        <div className=" p-5 pt-0 bg-base-200 md:rounded-b-lg  md:grid grid-flow-col grid-cols-4 gap-3">


          <div className="rounded-lg  bg-base-300 m-2 ">
            Transformationskonzepte


          </div>

          <div className="rounded-lg  bg-base-300 m-2">
            Fördermittelberatung


          </div>

          <div className="rounded-lg  bg-base-300 m-2">


           Optimierung
          </div>
          <div className="rounded-lg  bg-base-300 m-2">


            Umwelt
          </div>
          <div>
           
          </div>

        </div>
        <div className='bg-base-200 mt-10 rounded-lg'>
         
         <Fördermittelberatung/>
       </div>




      </div>
    </div>


  );
}
