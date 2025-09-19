//import './ContactPage.css'; // You can create a separate CSS for ContactPage
import Text from '../Module/assets/text';
import '../css/style.css';
import '../css/style.css'; // Import the CSS for this component


const Contact = () => {

//Lukas Tip: You can change the theming, try swapping the data-theme for light/dark !
//Lukas Workflow: Create a folder for each page, copy the modules that you need and adjust the blueprint. 
//Lukas Result: Pages that are somewhat easy to maintain and not as cluttered :D
  return (
      <body data-theme="nord" className="bg-base-300 max-w-full">
        <div className=" min-h-screen">
      <Text />
      </div>
    </body>
  );
};

export default Contact;