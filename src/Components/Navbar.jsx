import { NavLink } from "react-router-dom";

function Navbar() {

  const link =
  "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="flex justify-between bg-black text-red-500 p-4">

      <h1 className="text-xl font-bold">MyPortfolio</h1>

      <div className="space-x-6">

        <NavLink to="/" className={link}>Home</NavLink>

        <NavLink to="/about" className={link}>About</NavLink>

        <NavLink to="/services" className={link}>Services</NavLink>

        <NavLink to="/contact" className={link}>Contact</NavLink>

      </div>

    </nav>
  );
}

export default Navbar;