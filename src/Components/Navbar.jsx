import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { WiDaySunny } from "react-icons/wi";
import { TiWeatherNight } from "react-icons/ti";


function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined" && document.documentElement) {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      }
    }
  }, [darkMode]);
  const link =
    "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full ";

  return (
    <div>
      <nav className="flex  justify-between md:items-center bg-black/95 text-red-500 p-4">

        <h1 className="text-xl font-bold">Portfolio</h1>

        {/* Desktop menu */}

        <div className="space-x-6 transition-all duration-300 p-1 md:p-0 hidden sm:block">
          <NavLink to="/" className={link}>Home</NavLink>
          <NavLink to="/about" className={link}>About</NavLink>
          <NavLink to="/services" className={link}>Services</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
          <NavLink to="/clock" className={link}>Clock</NavLink>
        </div>


        {/* Right side controls */}
        <div className="flex items-center gap-3">

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border border-red-500 px-3 py-1 rounded text-red-500 hover:bg-red-500 hover:text-white transition"
          >
            {darkMode ? <TiWeatherNight /> : <WiDaySunny />}
          </button>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button onClick={() => setOpen(!open)}>
              <IoMenu />
            </button>
          </div>

        </div>

      </nav>

      {open && (
        <div className="text-red-500 items-center flex flex-col bg-black sm:hidden">
          <NavLink to="/" className={link}>Home</NavLink>
          <NavLink to="/about" className={link}>About</NavLink>
          <NavLink to="/services" className={link}>Services</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
          <NavLink to="/clock" className={link}>Clock</NavLink>

        </div>
      )

      }
    </div>
  );
}

export default Navbar;