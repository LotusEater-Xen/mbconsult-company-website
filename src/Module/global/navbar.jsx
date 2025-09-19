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
    <div className="bg-base-200">
      <div
        className="z-10 relative bg-base-100 shadow-lg navbar max-w-full rounded-b-lg"
        data-theme="nord"
      >
        <div className="navbar-start ">
          <img src={logo} className=" max-h-12" />
          <div className="pl-5 font-medium text-lg hidden lg:flex">
            MBConsultMe.Gmbh
          </div>
        </div>
        <div className="navbar-center ">
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
        <div className=" navbar-end ">
          <div className="lg:hidden drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content ">
              <label htmlFor="my-drawer" className="btn float-right">
                <FontAwesomeIcon icon={faBars} />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay "
              ></label>

              <ul className="menu bg-base-200 text-base-content min-h-full w-full p-4">
                <label htmlFor="my-drawer" className="w-5 btn float-right">
                  <FontAwesomeIcon icon={faXmark} />
                </label>
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
