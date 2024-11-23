import imgHome from '../../assets/avataaars.svg';

export default function Home() {
  return (
    <>
      <section className="bg-secondprime text-white h-screen flex items-center justify-center ">
        <div className="container text-center space-y-4">
          <div className="flex justify-center">
            <img src={imgHome} className="w-32 md:w-64" alt="" />
          </div>
          <h2 className="text-5xl font-semibold uppercase">about component</h2>
          <div className="icon-star  flex items-center justify-center gap-3  ">
            <div className="line"></div>
            <i className="fa-solid fa-star text-xl "></i>
            <div className="line"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
    </>
  );
}
