import '../../css/style.css';
export default function grid() {
  return (
    <div className='bg-base-200 rounded-b-lg shadow-md '>
    <div class="pb-21 mx-auto max-w-6xl md:grid grid-flow-col max-h-200 grid-rows-3 grid-cols-3 gap-4 m-15 inline">
 
     <div className="card  row-span-1 col-span-1">
  <div className="card-body ">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
 
</div>

 <div className="card   row-span-2 col-span-1">
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
 
</div>


        <div className="card  row-span-2 col-span-2">
  <div className="card-body ">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
  <figure>
    <img className=''
      src="https://cdn.pixabay.com/photo/2020/09/19/23/42/architecture-5585737_1280.jpg"
      alt="Shoes" />
  </figure>
</div>

 
    

   

<div className="card row-span-1 col-span-2">
  <div className="card-body ">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
  <figure>
    <img className='max-h-100'
      src="https://cdn.pixabay.com/photo/2018/06/07/04/48/shanghai-3459422_1280.jpg"
      alt="Shoes" />
  </figure>
</div>


  </div>
  </div>


  );}