export default function grid() {
  return (
    <div className="bg-base-300 w-full relative  ">

      
      <div className="bg-base-200 rounded-b-lg shadow-xl ">

        
     
     <div className="  mb-20 mx-auto max-w-7xl ">
    <div className='text-center'>
        <h1 className='header'>Weiteres...</h1>

     

    </div>
        </div> 
       


        <div class="p-5  pb-20 pt-0 mx-auto max-w-6xl md:grid grid-flow-col max-h-200 grid-rows-3 grid-cols-3 gap-4  inline">
          
          <div className="card row-span-1 col-span-1">
            
            <div className="card-body ">
              <h2 className="card-title font-[Montserrat]">Zum Gründer</h2>
              <p className="content">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h2 className="card-title font-[Montserrat]">Zum Team  </h2>
              <p className="content">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>
          </div>

          <div className="card row-span-2 col-span-2">
            <div className="card-body ">
              <h2 className="card-title font-[Montserrat]">Zu unseren Zielen</h2>
              <p className="content">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>
            <figure  >
              <img
                className=""
                src="https://cdn.pixabay.com/photo/2017/08/20/21/05/industry-2663191_1280.jpg"
                alt="Shoes"
              />
            </figure>
          </div>

          <div className="card row-span-1 col-span-2">
            <div className="card-body ">
              <h2 className="card-title font-[Montserrat]">Zu unseren Partnern</h2>
              <p className="content">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>
            <figure>
              <img
                className=""
                src="https://cdn.pixabay.com/photo/2020/01/06/10/50/abendstimmung-4745091_1280.jpg"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
