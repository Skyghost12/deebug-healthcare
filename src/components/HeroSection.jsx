import { Link } from "react-router-dom"
import hero from "../assets/mr-p.png"
function HeroSection() {


    return(
         <section className="overflow-hidden relative">
            <img src={hero} alt="" className="h-200 w-screen object-cover " />
             <div className="absolute inset-0 bg-black/65 "></div>
                <div className="absolute top-10 inset-0 mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                            <span className="h-2 w-2 rounded-full bg-blue-600 font-semibold" />
                            Your health, our priority
                        </div>

                        <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-200 sm:text-5xl lg:text-6xl">
                            Quality healthcare
                            <span className="text-blue-600"> made simple.</span>
                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-white font-[Newsreader] italic">
                            Connect with trusted healthcare professionals, book
                            appointments, and find quality healthcare products all in
                            one place.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#find-doctor"
                                className="rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                            >
                                Find a Doctor
                            </a>

                            <Link
                                to="/product"
                                className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
                            >
                                Explore Products
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
    )
}

export default HeroSection