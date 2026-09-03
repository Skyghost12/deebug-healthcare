import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CheckOut() {
    const { cartItems, cartTotal } = useCart();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phoneNumber: "",
        city: "",
        state: "",
    });


    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = (e) => {
        if( formData.name && formData.email && formData.address && formData.phoneNumber && formData.city && formData.state) {
            e.preventDefault();
            setSubmitted(true);
        }
    } 

    if (submitted) {
        return (
            <main className="min-h-screen flex justify-center items-center flex-col">
                <p className="font-semibold">Thank you for your order, {formData.name}!</p>
                <p className="font-semibold">Your order total is: ₦{cartTotal.toFixed(2)}</p>
                <Link to="/product" className="underline my-3">Continue shopping</Link>
            </main>
        )
    }

    return (
        <main className="min-h-screen flex justify-center items-center flex-col">
            <h2 className="font-semibold text-2xl mb-3">Checkout</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-3">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State
                    </label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Place Order
                </button>
            </form>
        </main>
    );
}   
export default CheckOut;