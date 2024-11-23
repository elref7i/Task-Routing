import imagOne from '../../assets/poert1.png';
import imagTwo from '../../assets/port2.png';
import imagThree from '../../assets/port3.png';
export default function Portfolio() {
  return (
    <>
      <section className="h-screen pt-[110px]">
        <div className="container">
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
          <div className="all-card grid grid-cols-12 pt-12">
            <div className="group card relative col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer">
              <img src={imagOne} className="w-full" alt="" />
              <div className="overlay absolute inset-0 bg-lime-500 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-[.4s] transition-opacity">
                <i className="fa-solid fa-plus text-7xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
