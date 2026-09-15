
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CountrySelect, StateSelect, CitySelect} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import PaystackPop from "@paystack/inline-js";
import { toast } from "react-toastify";

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

    const [submitted, setSubmitted] = useState(false);
    const [countryId, setCountryId] = useState(0);
    const [stateId, setStateId] = useState(0);

    // Handle normal input changes
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // Start Paystack payment
    const handlePayment = () => {
        const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

        // Make sure the Paystack key exists
        if (!publicKey) {
            console.error("Paystack public key is missing.");
            toast.error("Payment configuration is missing. Please try again.");
            return;
        }

        // checks if cart is empty
        if (!cartItems.length || cartTotal <= 0) {
            toast.warning("Your cart is empty.");
            return;
        }

        const popup = new PaystackPop();

        popup.newTransaction({
            key: publicKey,

            email: formData.email,
            amount: Math.round(cartTotal * 100),
            currency: "NGN",
            metadata: {
                custom_fields: [
                    {
                        display_name: "Customer Name",
                        variable_name: "customer_name",
                        value: formData.name,
                    },
                    {
                        display_name: "Phone Number",
                        variable_name: "phone_number",
                        value: formData.phoneNumber,
                    },
                    {
                        display_name: "Delivery Address",
                        variable_name: "delivery_address",
                        value: formData.address,
                    },
                    {
                        display_name: "City",
                        variable_name: "city",
                        value: formData.city,
                    },
                    {
                        display_name: "State",
                        variable_name: "state",
                        value: formData.state,
                    },
                ],
            },

            // Payment successful
            onSuccess: (transaction) => {
                toast.success("Payment successful:", transaction);

                setSubmitted(true);
            },

            // Customer closed payment window
            onCancel: () => {
                toast.warning("Payment cancelled.");
            },
        });
    };

    // Validate checkout form
    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.address.trim() ||
            !formData.phoneNumber.trim() ||
            // !formData.city.trim() ||
            !formData.state.trim()
        ) {
            toast.error("Please complete all checkout fields.");
            return;
        }

        // Everything is valid, start payment
        handlePayment();
    };

    // Show confirmation after successful payment
    if (submitted) {
        return (
            <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">

                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <svg
                            className="h-8 w-8 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Order Confirmed
                    </h1>
                    <p className="mt-2 text-slate-500">
                        Thank you for your order, {formData.name}.
                    </p>
                    <div className="mt-6 rounded-xl bg-slate-50 p-4">
                        <p className="text-sm text-slate-500">
                            Order total
                        </p>
                        <p className="mt-1 text-2xl font-bold text-blue-600">
                            ₦{cartTotal.toFixed(2)}
                        </p>
                    </div>
                    <Link
                        to="/product"
                        className="mt-6 block w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 md:px-8">

            {/* Header */}
            <div className="mx-auto mb-8 max-w-6xl">
                <Link
                    to="/cart"
                    className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600"
                >
                    ← Back to Cart
                </Link>

                <h1 className="text-3xl font-bold text-slate-900">
                    Checkout
                </h1>

                <p className="mt-1 text-slate-500">
                    Complete your details to place your order.
                </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_380px]">

                {/* LEFT - FORM */}
                <form
                    id="checkout-form"
                    onSubmit={handleSubmit}
                >
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">

                        {/* Contact Information */}
                        <div className="mb-8">
                            <div className="mb-5">
                                <h2 className="text-lg font-bold text-slate-900">
                                    Contact Information
                                </h2>

                                <p className="text-sm text-slate-500">
                                    We'll use this information to contact you about your order.
                                </p>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">

                                {/* Name */}
                                <div className="md:col-span-2">
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        required
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label
                                        htmlFor="phoneNumber"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="+234 800 000 0000"
                                        required
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div>
                            <div className="mb-5">
                                <h2 className="text-lg font-bold text-slate-900">
                                    Shipping Address
                                </h2>

                                <p className="text-sm text-slate-500">
                                    Where should we deliver your order?
                                </p>
                            </div>

                            <div className="space-y-5">

                                {/* Address */}
                                <div>
                                    <label
                                        htmlFor="address"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Street Address
                                    </label>

                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="123 Main Street"
                                        required
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>

                                {/* Country */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Country
                                    </label>

                                    <CountrySelect
                                        onChange={(val) => {
                                            setCountryId(val.id);
                                            setStateId(0);

                                            setFormData((prev) => ({
                                                ...prev,
                                                state: "",
                                                city: "",
                                            }));
                                        }}
                                        placeHolder="Select Country"
                                        inputClassName="!w-full !rounded-xl !border-slate-200 !bg-slate-50 !py-3 !px-4"
                                    />
                                </div>

                                {/* State + City */}
                                <div className="grid gap-5 md:grid-cols-2">

                                    {/* State */}
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            State / Province
                                        </label>

                                        <StateSelect
                                            countryid={countryId}
                                            onChange={(val) => {
                                                setStateId(val.id);

                                                setFormData((prev) => ({
                                                    ...prev,
                                                    state: val.name,
                                                    city: "",
                                                }));
                                            }}
                                            placeHolder="Select State"
                                            inputClassName="!w-full !rounded-xl !border-slate-200 !bg-slate-50 !py-3 !px-4"
                                        />
                                    </div>

                                    {/* City */}
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            City
                                        </label>

                                        <CitySelect
                                            countryid={countryId}
                                            stateid={stateId}
                                            onChange={(val) => {
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    city: val.name,
                                                }));
                                            }}
                                            placeHolder="Select City"
                                            inputClassName="!w-full !rounded-xl !border-slate-200 !bg-slate-50 !py-3 !px-4"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="mt-8 w-full rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.99]"
                        >
                            Pay ₦{cartTotal.toFixed(2)}
                        </button>
                    </div>
                </form>

                {/* RIGHT - ORDER SUMMARY */}
                <aside className="h-fit lg:sticky lg:top-6">

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                        <h2 className="text-lg font-bold text-slate-900">
                            Order Summary
                        </h2>

                        {/* Products */}
                        <div className="mt-6 space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-4"
                                >
                                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-full w-full object-cover"
                                        />

                                        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                                            {item.quantity}
                                        </span>
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-semibold text-slate-800">
                                            {item.name}
                                        </p>

                                        <p className="mt-1 text-xs text-slate-500">
                                            Qty: {item.quantity}
                                        </p>
                                    </div>

                                    <p className="text-sm font-semibold text-slate-800">
                                        ₦{(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="my-6 border-t border-slate-100" />

                        {/* Pricing */}
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-slate-500">
                                    Subtotal
                                </span>

                                <span className="font-medium text-slate-800">
                                    ₦{cartTotal.toFixed(2)}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-slate-500">
                                    Delivery
                                </span>

                                <span className="font-medium text-green-600">
                                    Free
                                </span>
                            </div>
                        </div>

                        <div className="my-5 border-t border-slate-100" />

                        {/* Total */}
                        <div className="flex items-center justify-between">
                            <span className="font-semibold text-slate-900">
                                Total
                            </span>

                            <span className="text-2xl font-bold text-blue-600">
                                ₦{cartTotal.toFixed(2)}
                            </span>
                        </div>

                        {/* Secure checkout */}
                        <div className="mt-6 flex gap-3 rounded-xl bg-blue-50 p-4">
                            <div className="shrink-0">
                                🔒
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-slate-800">
                                    Secure Checkout
                                </p>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    Your payment is securely processed by Paystack.
                                </p>
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/product"
                        className="mt-4 block text-center text-sm font-medium text-slate-500 hover:text-blue-600"
                    >
                        ← Continue Shopping
                    </Link>
                </aside>
            </div>
        </main>
    );
}

export default CheckOut;