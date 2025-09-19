import { Link } from "react-router-dom";

export default function Diashow() {
  return (
    <div className="z-5 relative pb-15 pt-15 bg-base-200 shadow-xl rounded-b-lg">
      <div className="mx-auto max-w-7xl ">
        <div className=" rounded-lg   w-full carousel carousel-center ">
          <div id="slide1" className="carousel-item min-h-140 w-full ">
            <div
              className="hero"
              style={{
                backgroundImage:
                  "url(https://cdn.pixabay.com/photo/2020/04/01/12/46/city-4991094_1280.jpg)",
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-lg">
                  <h1 className="mb-2 text-5xl font-bold">
                    Effizienz startet hier
                  </h1>
                  <p className="mb-5 inline-block text-shadow-lg">
                    Material. Energie. Management. Organisation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="slide2" className="carousel-item w-full">
            <div
              className="hero  "
              style={{
                backgroundImage:
                  "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    This website is not finished yet please stay calm and keep
                    developing one day it will be done propably I guess.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
