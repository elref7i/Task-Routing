import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
  let [links, setLinks] = useState(true);

  const handleResize = () => {
    if (window.innerWidth >= 789) {
      setLinks(true);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  function show() {
    setLinks(!links);
  }

  return (
    <>
      <nav className="bg-firstprime fixed z-50 left-0 right-0 py-8 ">
        <div className="container grid items-center justify-between grid-cols-12 px-3">
          <Link
            to="/home"
            className="uppercase col-span-4 font-bold text-white text-nowrap"
          >
            Start Framework
          </Link>
          <div className="ms-auto sm:block md:hidden col-span-8">
            <i
              className=" fa-solid fa-bars text-xl text-white cursor-pointer"
              onClick={show}
            ></i>
          </div>
          {links ? (
            <ul className="py-5 md:py-0  md:translate-y-0 flex flex-col md:flex-row items-center md:ms-auto gap-9 col-span-12  justify-center md:items-start  md:col-span-8 uppercase text-white font-bold ">
              <li>
                <NavLink
                  className={function ({ isActive }) {
                    return isActive ? 'p-3 bg-secondprime rounded-md' : '';
                  }}
                  to="/about"
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={function ({ isActive }) {
                    return isActive ? 'p-3 bg-secondprime rounded-md' : '';
                  }}
                  to="/portfolio"
                >
                  portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={function ({ isActive }) {
                    return isActive ? 'p-3 bg-secondprime rounded-md' : '';
                  }}
                  to="/contact"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          ) : (
            ''
          )}
        </div>
      </nav>
    </>
  );
}
