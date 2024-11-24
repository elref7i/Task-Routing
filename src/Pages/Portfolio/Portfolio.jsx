import imagOne from '../../assets/poert1.png';
import imagTwo from '../../assets/port2.png';
import imagThree from '../../assets/port3.png';
// import ShowCargeory from '../../Components/ShowCargeory/ShowCargeory';
export default function Portfolio() {
  function display() {
    console.log('refai');
  }
  return (
    <>
      <section className="min-h-screen pt-[110px] pb-20">
        <div className="container ">
          <div className="title text-center space-y-3">
            <h2 className="text-5xl font-semibold uppercase text-firstprime">
              about component
            </h2>
            <div className="icon-star  flex items-center justify-center gap-3  ">
              <div className="line bg-firstprime"></div>
              <i className="fa-solid fa-star text-xl "></i>
              <div className="line bg-firstprime"></div>
            </div>
          </div>
          <div className="all-card grid grid-cols-12 pt-12 gap-4">
            <div
              className="card rounded-md overflow-hidden relative group/parent col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer"
              onClick={display}
            >
              <img src={imagOne} className="w-full" alt="" />
              <div className="group/child overlay absolute inset-0 bg-secondprime flex items-center justify-center opacity-0 group-hover/parent:opacity-75 duration-[.4s] transition-opacity">
                <i className="icon-plus fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="card rounded-md overflow-hidden relative group/parent col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer">
              <img src={imagTwo} className="w-full" alt="" />
              <div className="group/child overlay absolute inset-0 bg-secondprime flex items-center justify-center opacity-0 group-hover/parent:opacity-75 duration-[.4s] transition-opacity">
                <i className="icon-plus fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="card rounded-md overflow-hidden relative group/parent col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer">
              <img src={imagThree} className="w-full" alt="" />
              <div className="group/child overlay absolute inset-0 bg-secondprime flex items-center justify-center opacity-0 group-hover/parent:opacity-75 duration-[.4s] transition-opacity">
                <i className="icon-plus fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="card rounded-md overflow-hidden relative group/parent col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer">
              <img src={imagOne} className="w-full" alt="" />
              <div className="group/child overlay absolute inset-0 bg-secondprime flex items-center justify-center opacity-0 group-hover/parent:opacity-75 duration-[.4s] transition-opacity">
                <i className="icon-plus fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="card rounded-md overflow-hidden relative group/parent col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer">
              <img src={imagTwo} className="w-full" alt="" />
              <div className="group/child overlay absolute inset-0 bg-secondprime flex items-center justify-center opacity-0 group-hover/parent:opacity-75 duration-[.4s] transition-opacity">
                <i className="icon-plus fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="card rounded-md overflow-hidden relative group/parent col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer">
              <img src={imagThree} className="w-full" alt="" />
              <div className="group/child overlay absolute inset-0 bg-secondprime flex items-center justify-center opacity-0 group-hover/parent:opacity-75 duration-[.4s] transition-opacity">
                <i className="icon-plus fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
