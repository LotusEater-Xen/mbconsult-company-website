export default function contact() {
  return (
    <div className="  bg-slate-300 w-full z-2 relative  ">

      
      <div className="  rounded-b-lg shadow-lg bg-base-300">

        
     
     <div className="mt-20 mb-20 mx-auto max-w-7xl ">
    <div className='text-center'>
        <h1 className='font-semibold text-3xl'>Kontaktieren Sie uns</h1>

     

    </div>
        </div> 
       


        <div class="p-5  pb-20 pt-0 mx-auto max-w-6xl md:grid grid-flow-col max-h-200 grid-rows-3 grid-cols-3 gap-4  inline">
          
          <div className="h-100 md:h-full mb-10 md:mb-0 card bg-base-200  row-span-1 col-span-1">
            
            <div className="card-body ">
              <h2 className="card-title">Senden Sie uns eine E-Mail</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>
          </div>

          <div className="h-100 md:h-full mb-10 md:mb-0 card bg-base-200  row-span-2 col-span-1">
            <div className="card-body">
              <h2 className="card-title">Rufen Sie uns an</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>
          </div>

          <div className="h-100 md:h-full mb-10 md:mb-0 card bg-base-200 row-span-3 col-span-2">
            <div className="card-body ">
              <h2 className="card-title">Kommen Sie vorbei</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>
            <figure>
              <img
                className=""
                src="https://cdn.pixabay.com/photo/2020/09/19/23/42/architecture-5585737_1280.jpg"
                alt="Shoes"
              />
            </figure>
          </div>

        </div>
      </div>
    </div>
  );
}
