
import Body from "../../Module/diashow/EDLGBerichte/body";

import "../../css/style.css"; // Import the CSS for this component
import "../../sources/fonts/Montserrat Alternates/Montserrat_Alternates//MontserratAlternates-Regular.ttf";
import "../../sources/fonts/Montserrat Alternates/Montserrat_Alternates//MontserratAlternates-Bold.ttf";

const Home = () => {
  //Lukas Tip: You can change the theming, try swapping the data-theme for light/dark !
  //Lukas Workflow: Create a folder for each page, copy the modules that you need and adjust the blueprint.
  //Lukas Result: Pages that are somewhat easy to maintain and not as cluttered :D
  return (
    <body data-theme="nord" className="max-w-full  ">
      <div className="-mt-10 bg-fixed min-h-screen bg-[url(../sources/clouds-2085112_1920.jpg)] bg-cover">
    
        <Body />
       
      </div>
    
    </body>
  );
};

export default Home;
