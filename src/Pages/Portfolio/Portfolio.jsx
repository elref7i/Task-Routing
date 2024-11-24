import { useState } from 'react';
import imagOne from '../../assets/poert1.png';
import imagTwo from '../../assets/port2.png';
import imagThree from '../../assets/port3.png';
// import ShowCargeory from '../../Components/ShowCargeory/ShowCargeory';
export default function Portfolio() {
  let [showCategory, setShowCategory] = useState(false);
  let [currentImage, setCurrentImage] = useState(null);

  function show() {
    setShowCategory(!showCategory);
  }
  function getIMage(e) {
    e.stopPropagation();
    let current = e.target.previousSibling.getAttribute('src');
    console.log(current);
    setCurrentImage(current);
    show();
  }
  return (
    <>
      <section className="min-h-screen pt-[110px] relative pb-20">
        {showCategory ? (
          <div
            className="show-catagory absolute flex items-center justify-center z-50 bg-gray-50 bg-opacity-65 inset-0"
            onClick={show}
          >
            <img src={currentImage} className="w-1/3" alt="" />
          </div>
        ) : (
          ''
        )}
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
            <div className="card rounded-md overflow-hidden relative group/parent col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer">
              <img src={imagOne} className="w-full" alt="" />
              <div
                className="group/child overlay absolute inset-0 bg-secondprime flex items-center justify-center opacity-0 group-hover/parent:opacity-75 duration-[.4s] transition-opacity"
                onClick={(e) => {
                  getIMage(e);
                }}
              >
                <i className="icon-plus fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="card rounded-md overflow-hidden relative group/parent col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer">
              <img src={imagTwo} className="w-full" alt="" />
              <div
                className="group/child overlay absolute inset-0 bg-secondprime flex items-center justify-center opacity-0 group-hover/parent:opacity-75 duration-[.4s] transition-opacity"
                onClick={(e) => {
                  getIMage(e);
                }}
              >
                <i className="icon-plus fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="card rounded-md overflow-hidden relative group/parent col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer">
              <img src={imagThree} className="w-full" alt="" />
              <div
                className="group/child overlay absolute inset-0 bg-secondprime flex items-center justify-center opacity-0 group-hover/parent:opacity-75 duration-[.4s] transition-opacity"
                onClick={(e) => {
                  getIMage(e);
                }}
              >
                <i className="icon-plus fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="card rounded-md overflow-hidden relative group/parent col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer">
              <img src={imagOne} className="w-full" alt="" />
              <div
                className="group/child overlay absolute inset-0 bg-secondprime flex items-center justify-center opacity-0 group-hover/parent:opacity-75 duration-[.4s] transition-opacity"
                onClick={(e) => {
                  getIMage(e);
                }}
              >
                <i className="icon-plus fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="card rounded-md overflow-hidden relative group/parent col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer">
              <img src={imagTwo} className="w-full" alt="" />
              <div
                className="group/child overlay absolute inset-0 bg-secondprime flex items-center justify-center opacity-0 group-hover/parent:opacity-75 duration-[.4s] transition-opacity"
                onClick={(e) => {
                  getIMage(e);
                }}
              >
                <i className="icon-plus fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="card rounded-md overflow-hidden relative group/parent col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer">
              <img src={imagThree} className="w-full" alt="" />
              <div
                className="group/child overlay absolute inset-0 bg-secondprime flex items-center justify-center opacity-0 group-hover/parent:opacity-75 duration-[.4s] transition-opacity"
                onClick={(e) => {
                  getIMage(e);
                }}
              >
                <i className="icon-plus fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
