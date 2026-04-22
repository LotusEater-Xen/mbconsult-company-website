import logo from "../../../MBCMe.svg";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faMoneyBillTrendUp,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="bg-base-100">
      <a 
        className="z-10 relative bg-base-100 shadow-lg navbar max-w-full rounded-b-lg"
        data-theme="nord"
      >
        <a href="/" className=" navbar-start w-96">
       
          <div className="  font-[Montserrat]  text-[15px] lg:text-[20px]">
           
            MB | Consult.Me   </div>  
            
            <img src={logo} className="max-h-8  pl-1 pb-2 sm:max-h-9" />
             <div className="pl-1 font-[Montserrat] text-[5px] pt-2">GmbH</div>
           </a>
           
            
          
       
    
          
      
        <div className="navbar-center hidden">
          <ul className="menu menu-horizontal px-1 lg:flex hidden">
            <Link
              to={""}
              className="btn tooltip tooltip-bottom"
              data-tip="home"
            >
              {" "}
              <FontAwesomeIcon icon={faHome} />
            </Link>
            <div className="hidden md:flex">
              <div className="dropdown dropdown-center">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn tooltip tooltip-bottom"
                  data-tip="services"
                >
                  <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <Link to={"services"}>
                      <a>services</a>
                    </Link>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
            <Link
              to={"contact"}
              className="btn tooltip tooltip-bottom"
              data-tip="contact"
            >
              <FontAwesomeIcon icon={faPhone} />
            </Link>
          </ul>
        </div>
       
        <div className=" navbar-end w-full">
          <div className=" drawer  drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content ">
              <label htmlFor="my-drawer" className="float-right">
                <FontAwesomeIcon icon={faBars} />
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay  "
              ></label>

              <ul className="menu bg-base-200 text-base-content min-h-full w-screen md:w-sm p-4 pb-0 pt-0 flex">
                <div className="mt-2">
                  <div className="float-left text-2xl font-semibold">Menü</div>
                  <label htmlFor="my-drawer" className="float-right">
                    <FontAwesomeIcon icon={faXmark} />
                  </label>
                </div>
                <div className="divider "></div>
                <div className=" max-w-6xl">
                  <strong>Seiten</strong>
                  <li>
                    <Link
              to={""}>
                    <a>Hauptseite</a>
                    </Link>
                  </li>
                  <li>
                      <Link
              to={"Impressum"}>
                    <a>Kontakt</a>
                    </Link>
                  </li>

                  <strong>Dienstleistungen</strong>
                  <li>
                    <Link
              to={"Managementsysteme"}>
                    <a>Managementsysteme</a>
                    </Link>
                  </li>
                  <li>
                       <Link
              to={"Prozessoptimierung"}>
                    <a>Prozessoptimierung</a>
                    </Link>
                  </li>

                   <li>
                       <Link
              to={"Datenbanken"}>
                    <a>Datenbanken</a>
                    </Link>
                  </li>

                   <li>
                       <Link
              to={"EDL-G_Berichte"}>
                    <a>EDL-G Berichte</a>
                    </Link>
                  </li>

                   <li>
                       <Link
              to={"Energieeffizienzberatung"}>
                    <a>Energieeffizienzberatung</a>
                    </Link>
                  </li>

                   <li>
                       <Link
              to={"Transformationskonzepte"}>
                    <a>Transformationskonzepte</a>
                    </Link>
                  </li>

                   <li>
                       <Link
              to={"Projektmanagement"}>
                    <a>Projektmanagement</a>
                    </Link>
                  </li>

                   <li>
                       <Link
              to={"Fördermittelberatung"}>
                    <a>Fördermittelberatung</a>
                    </Link>
                  </li>

                  <strong>Other</strong>
                  <li>
                    <Link
              to={"impressum"}>
                    <a>Impressum</a>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
