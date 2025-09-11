import "../../css/style.css";
import { Link } from 'react-router-dom';

export default function Diashow() {
  return (
    <div className=" mx-auto">
    
        <div className=" w-full rounded-b-lg shadow-md object-cover carousel carousel-center ">
          <div id="slide1" className="carousel-item w-full ">
            <div
  className="hero min-h-140"
  style={{
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2020/04/01/12/46/city-4991094_1280.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="w-120">
      <h1 className="mb-2 text-5xl font-bold">Effizienz startet hier</h1>
      <p className="mb-5 inline-block text-shadow-lg">
        Material. Energie.
        Management. Organisation.
      </p>
    </div>
  </div>
</div>
           
          </div>
          <div id="slide2" className="carousel-item w-full object-cover">
            <div
  className="hero  min-h-140"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        This website is not finished yet please stay calm and keep developing one day it will be done propably I guess.
      </p>
    </div>
  </div>
</div>
</div>
        </div> 
      </div>

  );
}
