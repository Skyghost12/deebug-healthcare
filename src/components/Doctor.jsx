function DoctorCard({ doctor, onViewDetails }) {

    return (
        <button
        onClick={() => onViewDetails(doctor)}
        className="relative bg-white rounded-lg shadow-md p-6 m-4">
            <img src={doctor.image} alt={doctor.name} className="w-full h-80 object-cover hover:translate-0.5 hover:scale-105 transition" />
            <div className="flex justify-between items-center mt-4">
                <h3 className="font-bold text-lg">{doctor.name}</h3>
                <p className="text-gray-600"> {doctor.available ?
                    <a className="bg-blue-500 text-white py-1.5 px-4 rounded hover:bg-blue-600">Contact</a> :
                    <span className="text-red-500">Not Available</span>
                }</p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <p className="text-gray-600">{doctor.specialization}</p>
                <p className="text-gray-600">Experience: {doctor.experience}</p>
            </div>
            <span className="absolute left-0 top-5 rounded-r-full bg-blue-600 px-3 py-1 text-sm text-white">
                ⭐ {doctor.rating}
            </span>
        </button>
    )
}
export default DoctorCard