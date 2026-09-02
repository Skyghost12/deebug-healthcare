import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { ShoppingCart } from 'lucide-react';

function Navbar() {
    const { cartCount } = useCart();

    return (
        <nav className="border-b border-slate-100 bg-white shadow-md fixed top-0 left-0 w-full z-10">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
                <Link to="/" className="flex items-center gap-2">
                    {/* logo */}
                    <span className="text-xl font-bold tracking-tight">
                        Deebug<span className="text-blue-600">Healthcare</span>
                    </span>
                </Link>

                {/* Navigation */}
                <div className="items-center gap-8 flex">
                    <Link
                        to="/"
                        className="text-sm font-medium text-blue-600 hover:scale-105"
                    >
                        Home
                    </Link>

                    <a
                        href="#find-doctor"
                        className="text-sm font-medium text-slate-600 transition hover:text-blue-600 hover:scale-105"
                    >
                        Find a Doctor
                    </a>

                    <Link
                        to="/product"
                        className="text-sm font-medium text-slate-600 transition hover:text-blue-600 hover:scale-105"
                    >
                        Products
                    </Link>

                    <Link
                        to="/about"
                        className="text-sm font-medium text-slate-600 transition hover:text-blue-600 hover:scale-105"
                    >
                        About Developer
                    </Link>
                </div>

                {/*  Buttons */}
                <div className="items-center gap-5 md:flex">

                    <Link to="/cart" className="relative">
                         <ShoppingCart className="mr-6"/> {cartCount > 0 && <p className="absolute flex justify-center items-center top-0 right-3 w-4 h-4 bg-red-800 rounded-full">
                            <span className="text-white text-xs">{cartCount}</span>
                            </p>}
                    </Link>

                    <Link
                        to="/doctors"
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:scale-105"
                    >
                        Book Appointment
                    </Link>
                </div>


            </div>
        </nav>
    )
}
export default Navbar