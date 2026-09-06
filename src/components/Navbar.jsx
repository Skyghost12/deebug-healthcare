import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();


  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition relative pb-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 ${isActive
      ? 'text-blue-600 after:scale-x-100'
      : 'text-slate-600 hover:text-blue-600 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform'
    }`;


  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-100 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={closeMenu}
        >
          <span className="text-xl font-bold tracking-tight animate-bounce">
            Deebug<span className="text-blue-600">Healthcare</span>
          </span>
        </Link>

        {/* ----------------------------------Desktop Navigation---------------------------- */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          {/* <a
            href="#find-doctor"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Find a Doctor
          </a> */}

          <NavLink to="/product" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/health-tips" className={navLinkClass}>
            Health TIps
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About Developer
          </NavLink>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-5 md:flex">

          {/* --------------------- Cart================== */}
          <Link to="/cart" className="relative animate-bounce">
            <ShoppingCart />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* <button onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button> */}

          <button
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Chat with a Doctor
          </button>
        </div>

        {/* --------------------------Mobile Controls --------------------------*/}
        <div className="flex items-center gap-4 md:hidden">

          {/*--------------------------------------------------- Mobile Cart -------*/}
          <Link to="/cart" className="relative">
            <ShoppingCart />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/*------------------------------ Hamburger------------------------------*/}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-1 text-slate-700 hover:bg-slate-100"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* -----------------------------------Mobile Menu------------------------------ */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden">

          <div className="flex flex-col gap-5">

            <NavLink
              to="/"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <a
              href="#find-doctor"
              onClick={closeMenu}
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              Find a Doctor
            </a>

            <NavLink
              to="/product"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={closeMenu}
            >
              About Developer
            </NavLink>

            <a
              href="#find-doctor"
              onClick={closeMenu}
              className="rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Book Appointment
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;