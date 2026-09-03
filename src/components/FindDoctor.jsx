import { doctors } from "../data/products";
import DoctorCard from "./Doctor";

function FindDoctor() {

    return (
        <div className="flex justify-center mt-10 bg-blue-50" id="find-doctor">
            <div className="max-w-7xl py-3 flex flex-col items-center gap-3">
                <h3 className="ml- text-3xl font-bold text-blue-700">Your Health Matters</h3>
                <div className="px-9">
                    <h2 className="ml-5 font-semibold text-lg text-center">Connect with the right healthcare professional.</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 justify-between gap-5 mt-5">
                        {doctors.map((doctor) => (
                            <DoctorCard key={doctor.id} doctor={doctor} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindDoctor
