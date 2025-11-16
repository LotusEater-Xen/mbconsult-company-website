import { Link } from "react-router-dom";

export default function Diashow() {
  
  return (
    <div className="bg-base-200">
      
    <div className="z-5 relative pb-15 pt-15 bg-base-100 shadow-xl rounded-b-lg">


      <div className="mx-auto max-w-7xl ">
        <div className=" rounded-lg   w-full carousel carousel-center ">
          <div id="slide1" className="carousel-item min-h-140 w-full ">
            <div
              className="hero"
              style={{
                backgroundImage:
                  "url(https://cdn.pixabay.com/photo/2014/11/10/07/01/industry-525119_1280.jpg)",
              }}
            >
              <div className="hero-overlay contrast-100"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-lg">
                  <h1 className="font-[Montserrat] mb-2 text-5xl ">
                    Effizienz startet hier
                  </h1>
                  <p className=" mb-5 inline-block text-shadow-lg">
                    Material. Energie. Management. Organisation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    </div>
  );
}
