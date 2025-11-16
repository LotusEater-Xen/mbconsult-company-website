export default function Diashow() {
  return (
    <div className="pb-20 pt-20   bg-base-200 ">
      <div className="relative  pb-20">
        <div className="mx-auto max-w-4xl pl-5 pr-5 ">
          <div className="text-center">
            <h1 className="font-[Montserrat] text-3xl">
              Unsere Dienstleistungen
            </h1>

            <h2 className="font-[Montserrat-Medium] pt-10 text-sm text-balance">
              Wir besitzen ein enormes Portfolio an Nutzerfreundlichen
              Effizienzlösunge die sich ega kompliziert anhören und ganz wichtig
              für Sie sind. Andernfalls ist Ihre Firma so ziemlich dem Untergang
              geweiht. Sie sollten sich auf die Zukunft vorbereiten alter Mann
              denn es ist Zeit sie mit offenen Armen zu empfangen.
            </h2>
          </div>
        </div>
      </div>

      <div className=" inset-shadow-[0_5px_25px_rgba(0,0,0,0.15)] bg-base-300 mx-auto max-w-6xl rounded-lg">
        <div className=" md:carousel  w-full">
          <div id="slideA" className="carousel-item relative w-full">
            <div className="inline max-w-full mx-auto md:h-100 md:grid grid-cols-3 grid-rows-1 gap-0">
              <div className="m-5 md:mr-2 card bg-base-200 shadow-md md:h-auto h-100">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/04/27/10/37/counter-2265065_1280.jpg"
                    alt="Shoes"
                    className=" "
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Energy</div>
                    <div className="badge badge-outline">Software</div>
                  </div>
                </div>
              </div>

              <div className="m-5 md:ml-2 md:mr-2 card bg-base-200  shadow-md md:h-auto h-100">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/08/17/13/14/motorcycle-2651286_1280.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Planning</div>
                    <div className="badge badge-outline">Consulting</div>
                  </div>
                </div>
              </div>

              <div className="m-5 md:ml-2 card bg-base-200 shadow-md md:h-auto h-100">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/06/12/20/27/macro-1452987_1280.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p>
                    A card component has ihcidhvidgvhvoufhv9rehvrehvrehvirehv a
                    figure, a body part, and inside body there are title and
                    actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Management</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slideA" className="btn btn-circle">
                ❮
              </a>
              <a href="#slideC" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slideC" className="carousel-item relative w-full">
            <div className="inline max-w-full mx-auto md:h-100 md:grid grid-cols-3 grid-rows-1 gap-0">
              <div className="m-5 md:mr-2 card bg-base-200 shadow-md md:h-auto h-100">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/04/27/10/37/counter-2265065_1280.jpg"
                    alt="Shoes"
                    className=" "
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Energy</div>
                    <div className="badge badge-outline">Software</div>
                  </div>
                </div>
              </div>

              <div className="m-5 md:ml-2 md:mr-2 card bg-base-200 shadow-md md:h-auto h-100">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/08/17/13/14/motorcycle-2651286_1280.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Planning</div>
                    <div className="badge badge-outline">Consulting</div>
                  </div>
                </div>
              </div>

              <div className="m-5 md:ml-2 card bg-base-200 shadow-md md:h-auto h-100">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/06/12/20/27/macro-1452987_1280.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p>
                    A card component has ihcidhvidgvhvoufhv9rehvrehvrehvirehv a
                    figure, a body part, and inside body there are title and
                    actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Management</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slideB" className="btn btn-circle">
                ❮
              </a>
              <a href="#slideD" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slideD" className="carousel-item relative w-full">
            <div className="inline max-w-full mx-auto md:h-100 md:grid grid-cols-3 grid-rows-1 gap-0">
              <div className="m-5 md:mr-2 card bg-base-200 shadow-md md:h-auto h-100">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/04/27/10/37/counter-2265065_1280.jpg"
                    alt="Shoes"
                    className=" "
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Energy</div>
                    <div className="badge badge-outline">Software</div>
                  </div>
                </div>
              </div>

              <div className="m-5 md:ml-2 md:mr-2 card bg-base-200  shadow-md md:h-auto h-100">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/08/17/13/14/motorcycle-2651286_1280.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Planning</div>
                    <div className="badge badge-outline">Consulting</div>
                  </div>
                </div>
              </div>

              <div className="m-5 md:ml-2 card bg-base-200 shadow-md md:h-auto h-100">
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/06/12/20/27/macro-1452987_1280.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p>
                    A card component has ihcidhvidgvhvoufhv9rehvrehvrehvirehv a
                    figure, a body part, and inside body there are title and
                    actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Management</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slideC" className="btn btn-circle">
                ❮
              </a>
              <a href="#slideA" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
