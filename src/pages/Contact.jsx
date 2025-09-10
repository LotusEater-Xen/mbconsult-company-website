//import './ContactPage.css'; // You can create a separate CSS for ContactPage
import Footer from '../Module/home/footer';
import Overview from '../Module/home/overview';
const contact = () => {
  return (
     <body data-theme="nord" className="bg-base-100 max-w-full min-h-screen">
        <Overview />
         <Footer />
    </body>
  );
};

export default contact;
