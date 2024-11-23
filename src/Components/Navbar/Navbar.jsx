import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <nav className="bg-firstprime fixed z-50 left-0 right-0 py-8 ">
        <div className="container flex">
          <Link to="/home" className="uppercase font-bold text-white">
            Start Framework
          </Link>
          <ul className="flex ms-auto gap-9 uppercase text-white font-bold">
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
        </div>
      </nav>
    </>
  );
}
