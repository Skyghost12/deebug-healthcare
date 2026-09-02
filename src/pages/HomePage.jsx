import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Service from "../components/Service";
import FindDoctor from "../components/FindDoctor";
function HomePage() {

    return (
        <div className="min-h-screen bg-white text-slate-900">
            
            <HeroSection />
            <Service />
            <FindDoctor />
            <Footer />
        </div>
    );
};

export default HomePage