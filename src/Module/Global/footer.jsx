import logo from "../../../MBCMe.svg";
export default function Footer() {
  return (
    
    <footer className="pl-5 pr-5 z-0 relative bg-slate-300 footer sm:footer-horizontal text-base-content pt-10 pb-5 ">
      <aside>
    
        <p>
        <div className=" navbar-start my-auto w-96">
              
                 <div className="  font-[Montserrat]  sm:text-2xl lg:text-2xl">
                  
                   MB | Consult.Me   </div>  
                   
                   <img src={logo} className="max-h-8  pl-1 pb-2 sm:max-h-9" />
                    <div className="pl-1 font-[Montserrat] text-[5px] pt-2">GmbH</div>
                  </div>
          <br />
          
        </p>
      </aside>
      <nav className="">
        <h6 className="footer-title link link-hover">Impressum</h6>
      
      </nav>

      <nav className="">
        <h6 className="footer-title link link-hover">Data</h6>
      
      </nav>

      <nav>
        <h6 className="footer-title link link-hover">AGB</h6>

      </nav>
    
    </footer>
  );
}
