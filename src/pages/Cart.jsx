import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0,
    }).format(price);
};

function Cart() {
    const { cartItems, removeFromCart, cartTotal } = useCart()

    if (cartItems.length === 0) {
        return (
            <main className="min-h-screen flex justify-center items-center flex-col">
                <p className="font-semibold">Your Cart is empty.</p>
                <Link to="/product" className="underline my-3">Browse products </Link>
            </main>
        )
    }
    return (
        <main className="max-w-7xl flex justify-center mt-30">
            <div className="">
                <h2 className="font-semibold text-2xl mb-3">Your cart</h2>

                <div className="grid items-center flex-col justify-center gap-5 flex-wrap">
                    {cartItems.map((item) => (
                        <div className=" border border-slate-200 p-4 flex gap-2 shadow" key={item.id}>
                            <img src={item.image} alt={item.name} className="w-30 h-30 object-cover" />
                            <div className="flex justify-between px-5 gap-20">
                                <div className="">
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="">Qantity: {item.quantity}</p>
                                    <p className="">Total: ₦{(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <button className="text-red-700 font-semibold" onClick={() => removeFromCart(item.id)}>
                                    Romove
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="mt-6 ">
                    <p className="mb-5">Total: ${cartTotal.toFixed(2)}</p>
                    <Link to="/" className="rounded-lg bg-blue-600 px-4 py-2 text-sm mt-4 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:scale-105 ">
                        Checkout
                    </Link>
                </div>
            </div>

        </main>
    )
}

export default Cart