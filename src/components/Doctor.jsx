function DoctorCard({ doctor }) {

    return (
        <div className="bg-white rounded-lg shadow-md p-6 m-4">
            <img src={doctor.image} alt={doctor.name} className="w-full h-80 object-cover rounded-lg hover:translate-0.5 hover:scale-105 transition" />
            <h3 className="font-bold text-lg mt-4">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialization}</p>
            <p className="text-gray-600">Experience: {doctor.experience}</p>
            <p className="text-gray-600">Rating: {doctor.rating}</p>
            <p className="text-gray-600">Available: {doctor.available ? "Yes" : "No"}</p>
        </div>
    )
}
export default DoctorCard