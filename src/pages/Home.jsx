import Grid from '../Module/home/grid';
import Diashow from '../Module/home/diashow';
import '../css/style.css'; // Import the CSS for this component


const Home = () => {

//Lukas Tip: You can change the theming, try swapping the data-theme for light/dark !
//Lukas Workflow: Create a folder for each page, copy the modules that you need and adjust the blueprint. 
//Lukas Result: Pages that are somewhat easy to maintain and not as cluttered :D
  return (
      <body data-theme="nord" className="bg-base-300 max-w-full ">
      <div className='min-h-screen'>
      <Diashow />
      <Grid />
      </div>
    </body>
  );
};

export default Home;
