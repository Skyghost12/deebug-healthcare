import { doctors } from "../data/products";

function DoctorDetails({ doctor, onClose}) {

    return (
        
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <section className="relative flex w-full max-w-3xl flex-col gap-6 rounded-2xl bg-white p-6 shadow-xl md:flex-row">

                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-xl text-slate-500 hover:text-slate-900"
                >
                    ✕
                </button>

                <div className="shrink-0">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="h-80 w-full rounded-xl object-cover md:w-80"
                    />
                </div>

                <div className="mt-2 flex flex-col">

                    

                    <h1 className="mt-3 text-xl font-bold text-blue-700">
                        {doctor.name}
                        <span className="text-sm font-normal text-slate-500">
                            {" "}({doctor.experience} Experience)
                        </span>
                    </h1>

                    <span className=" py-1 text-left text-xl">
                        {doctor.specialization}
                    </span>

                    <p className="mt-1 text-sm text-slate-500">
                        Email: {doctor.Contact}
                    </p>

                    <button
                        className="mt-5 w-fit rounded-lg  px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:scale-105"
                        onClick={() => {
                            addToCart(doctor)
                            onClose()
                            
                        }}
                    >
                         <p className="text-gray-600"> {doctor.available ?
                    <button className="bg-blue-500 text-white py-1.5 px-4 rounded hover:bg-blue-600">Message</button> :
                    <span className="text-red-500 cursor-not-allowed">Not Available</span>
                }</p>
                    </button>

                </div>
            </section>
        </div>
    
    )
}

export default DoctorDetails