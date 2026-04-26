export default function Body( {header, content, link, headerlink, describerlink, iconlink}) {
  return (
 <body data-theme="nord" className="max-w-full  ">
      <div className="-mt-10 bg-fixed min-h-screen bg-[url(../sources/industry.jpg)] bg-cover">
    <div className="mx-auto max-w-7xl md:rounded-b-lg bg-base-200 md:grid md:grid-cols-2">
       
      
      


          <div className=" pt-15 pb-5 md:col-span-1">
            <div className="ml-10">
             <h1 className="subpageheader float-left ">
            {header}  
            </h1>
            </div>



            <h2 className=" content pt-10 mx-auto text-left ml-10 mr-10 md: mr-0 md:text-left md:ml-20 ">
   {content}
            </h2>


 </div>
         
<div className="md:pt-15 pb-5 md:col-span-1 ">
       
        <h2 className="md:text-right text-2xl lg:text-3xl w-full font-[Montserrat] bg-base-200 pl-10 md:mr-10 md:float-right">
          Ähnliches
        </h2>

<div className='grid grid-rows-1 float-right'>

       
        <div className=" p-3 pt-0 bg-base-200 md:rounded-b-lg  md:float-right ">
             <a href={link} className=" md:w-80 card card-diashow2 bg-base-100 m-5 md:ml-2 max-h-45">
                <figure className='h-15'>
                  <img
                    src="https://cdn.pixabay.com/photo/2023/07/10/13/41/technology-8118382_1280.jpg"
                    alt="Server"
                  />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title text-sm font-[Montserrat]">{headerlink}</h2>
                  <div className='grid grid-cols-2'>
                  <p className="describer ">
                  {describerlink}
                  </p>
                  <div className="card-actions justify-end ">
                    <div className="badge badge-primary badge-outline">{iconlink}</div>
                  </div>
                  </div>
                </div>
              </a>
        </div>

       
</div>






         </div>





      

    
</div>
</div>
</body>

  );
}


  




   





         

  




   





         
