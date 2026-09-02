import { doctors } from "../data/products";
import DoctorCard from "./Doctor";

function FindDoctor() {

    return (
        <div className="find-doctor flex justify-center mt-10">
            <div className="max-w-7xl py-3">
                <h3 className="text-3xl font-bold text-blue-700">Your Health Matters</h3>
                {/* <span className="text-xl text-center">Find a Doctor</span> */}
                <div className="p-9">
                    <h2 className="">Connect with the right healthcare professional.</h2>
                    <div className="grid grid-cols-3">
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
