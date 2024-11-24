export default function Footer() {
  return (
    <>
      <footer className="bg-firstprime text-white relative">
        <div className="container grid grid-cols-12 gap-8 py-[90px]">
          <div className="section-left col-span-12 text-center sm:col-span-6 lg:col-span-4 space-y-2">
            <h3 className="uppercase font-bold text-3xl">Location</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="section-center col-span-12 text-center sm:col-span-6 lg:col-span-4 space-y-2">
            <h3 className="uppercase font-bold text-3xl">AROUND THE WEB</h3>
            <ul className="flex gap-3 justify-center items-center text-xl">
              <li>
                <a href="">
                  <i className="fa-brands fa-facebook fa"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="section-right col-span-12 text-center sm:col-span-6 lg:col-span-4 space-y-2">
            <h3 className="uppercase font-bold text-3xl">ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
        <div className="bg-[#1A252F] text-center py-4">
          Copyright © Your Website 2021
        </div>
      </footer>
    </>
  );
}
