export default function About() {
  return (
    <>
      <section className="bg-secondprime text-white h-screen flex items-center justify-center">
        <div className="container text-center space-y-4 ">
          <h2 className="text-5xl font-semibold uppercase">about component</h2>
          <div className="icon-star  flex items-center justify-center gap-3  ">
            <div className="line bg-white"></div>
            <i className="fa-solid fa-star text-xl"></i>
            <div className="line bg-white"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-start">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
