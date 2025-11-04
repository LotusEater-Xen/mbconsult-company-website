export default function grid() {
  return (
    <div className="bg-slate-300 w-full relative  ">

      
      <div className="bg-base-200 rounded-b-lg shadow-lg ">

        
     
     <div className="z-3  mb-20 mx-auto max-w-7xl ">
    <div className='text-center'>
        <h1 className='font-semibold text-3xl'>Weiteres...</h1>

     

    </div>
        </div> 
       


        <div class="p-5  pb-20 pt-0 mx-auto max-w-6xl md:grid grid-flow-col max-h-200 grid-rows-3 grid-cols-3 gap-4  inline">
          
          <div className="h-100 md:h-full mb-10 md:mb-0 card bg-base-100  row-span-1 col-span-1">
            
            <div className="card-body ">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>
          </div>

          <div className="h-100 md:h-full mb-10 md:mb-0 card bg-base-100  row-span-2 col-span-1">
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>
          </div>

          <div className="h-100 md:h-full mb-10 md:mb-0 card bg-base-100 row-span-2 col-span-2">
            <div className="card-body ">
              <h2 className="card-title">Card Title</h2>
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

          <div className="h-100 md:h-full mb-10 md:mb-0 card bg-base-100 row-span-1 col-span-2">
            <div className="card-body ">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>
            <figure>
              <img
                className=""
                src="https://cdn.pixabay.com/photo/2018/06/07/04/48/shanghai-3459422_1280.jpg"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
