import '../../css/style.css';
import { Link,
         useLocation
 } from 'react-router-dom';
import logo from '../../sources/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,
         faPhone,
         faUsers
       } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  return (

<div className="navbar max-w-full shadow-sm" data-theme="nord">
  <div className="navbar-start">

    
  </div>
  <div className="navbar-center lg:flex">
       <ul className="menu menu-horizontal px-1">
      <Link to={"contact"} className='btn tooltip tooltip-bottom' data-tip="contact" ><FontAwesomeIcon icon={faPhone} /></Link>
      <Link to={""} className='btn tooltip tooltip-bottom' data-tip="home" >  <FontAwesomeIcon icon={faHome} /></Link>
      <Link to={"career"} className='btn tooltip tooltip-bottom' data-tip="team" ><FontAwesomeIcon icon={faUsers} /></Link>
    </ul>
  </div>
  <div className="navbar-end">
   
  </div>
</div>

  );
};