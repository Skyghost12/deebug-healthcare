function Service() {
    return (
        <section className="bg-white flex justify-center">
            <div className=" p-5 text-center max-w-7xl">
                <h2 className="font-bold text-2xl">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-6 justify-center">
                    <div className="flex flex-col  p-4 m-4 rounded-lg shadow-md bg-blue-50 w-70 hover:translate-0.5 hover:scale-105 transition">
                        <h2 className="font-bold text-blue-700 mb-3">Doctor Consultations</h2>
                        <p className="tracking-wide">Connect with qualified healthcare professionals and get the guidance you need.</p>
                    </div>
                    <div className="flex flex-col  p-4 m-4 rounded-lg shadow-md bg-blue-50 w-70 hover:translate-0.5 hover:scale-105 transition">
                        <h2 className="font-bold text-blue-700 mb-3">Appointment Booking</h2>
                        <p className="tracking-wide">Book appointments with available doctors quickly and conveniently.</p>
                    </div>
                    <div className="flex flex-col  p-4 m-4 rounded-lg shadow-md bg-blue-50 w-70 hover:translate-0.5 hover:scale-105 transition">
                        <h2 className="font-bold text-blue-700 mb-3">Healthcare Products</h2>
                        <p className="tracking-wide">Find essential medical equipment, wellness products, and healthcare supplies.</p>
                    </div>
                    <div className="flex flex-col  p-4 m-4 rounded-lg shadow-md bg-blue-50 w-70 hover:translate-0.5 hover:scale-105 transition">
                        <h2 className="font-bold text-blue-700 mb-3">Health & Wellness</h2>
                        <p className="tracking-wide">Access useful information and resources to help you make informed decisions about your wellbeing.</p>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Service;