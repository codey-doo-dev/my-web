import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";


function Navbar() {
  const [open, setOpen] = useState(false);

  const link =
    "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div>
    <nav className="flex justify-between bg-black text-red-500 p-4">

      <h1 className="text-xl font-bold">MyPortfolio</h1>

      {/* Desktop menu */}
      <div className="space-x-6 hidden sm:block">
        <NavLink to="/" className={link}>Home</NavLink>
        <NavLink to="/about" className={link}>About</NavLink>
        <NavLink to="/services" className={link}>Services</NavLink>
        <NavLink to="/contact" className={link}>Contact</NavLink>
        <NavLink to="/clock" className={link}>Clock</NavLink>
      </div>

      {/* Burger icon */}
      <div className="sm:hidden">
        <button onClick={()=>{
          setOpen(!open)
        }}>
          <IoMenu />

        </button>
      </div>


      

    </nav>
    {open && (
      <div className="text-white flex flex-col bg-red-300 sm:hidden">
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