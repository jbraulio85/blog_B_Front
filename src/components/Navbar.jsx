import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="border-b-4 border-blue-900 fixed top-0 bg-blue-800 font-bold w-full text-lg text-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 block lg:hidden focus:outline-none bg-transparent border-none"
      >
        ☰
      </button>
      <ul className={`lg:flex ${isOpen ? "block" : "hidden"}`}>
        <li className="inline-block py-4">
          <Link to="/" onClick={handleClick} className="pl-6 pr-8">
            Inicio
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/posts" onClick={handleClick} className="pl-6 pr-8">
            Artículos
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/about" onClick={handleClick} className="pl-6 pr-8">
            Acerca de nosotros
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/pegro" onClick={handleClick} className="pl-6 pr-8">
            Pegro
          </Link>
        </li>
      </ul>
    </nav>
  );
};
