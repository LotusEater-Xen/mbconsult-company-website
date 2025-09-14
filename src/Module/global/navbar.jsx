import '../../css/style.css';
import logo from '../../../MBCMe.svg';
import { Link,
         useLocation
 } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,
         faPhone,
         faUsers,
       } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {

  return (

<div className="navbar max-w-full" data-theme="nord">
  <div className="ml-5 navbar-start ">
  <img src={logo} className=' max-h-12'/>
  <div className='pl-5 font-medium text-lg hidden lg:flex'>MBConsultMe Gmbh</div>
  </div>
  <div className="navbar-center ">
       <ul className="menu menu-horizontal px-1 lg:flex hidden">
      <Link to={"contact"} className='btn tooltip tooltip-bottom' data-tip="contact" ><FontAwesomeIcon icon={faPhone} /></Link>
      <Link to={""} className='btn tooltip tooltip-bottom' data-tip="home" >  <FontAwesomeIcon icon={faHome} /></Link>
      <Link to={"career"} className='btn tooltip tooltip-bottom' data-tip="team" ><FontAwesomeIcon icon={faUsers} /></Link>
     
    </ul>
  </div>
  <div className="navbar-end">
     <div className="lg:hidden mr-5">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
    <Link to={"services"} className='lg:flex hidden btn max-w-50 border-2 border-solid border-gray-300 flex'>services →</Link> 
  </div>
</div>

  );
};