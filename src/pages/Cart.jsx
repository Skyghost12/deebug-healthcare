import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0,
    }).format(price);
};

function Cart() {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, cartTotal } = useCart()

    if (cartItems.length === 0) {
        return (
            <main className="min-h-screen flex justify-center items-center flex-col">
                <DotLottieReact
                    src="https://lottie.host/add8b468-a9ed-4040-bca9-bc831e6175d6/0cDQtXCcs4.lottie"
                    loop
                    autoplay
                    className="w-200 h-100 object-cover"
                />
                <p className="text-lg font-semibold text-slate-600">Your cart is empty</p>
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
                        <div className="relative border border-slate-200 p-4 flex gap-2 shadow" key={item.id}>
                            <img src={item.image} alt={item.name} className="w-30 h-30 object-cover" />
                            <div className="flex justify-between px-5 gap-20">
                                <div className="">
                                    <h3 className="font-semibold">{item.name}</h3>

                                    <p className="">Total: {formatPrice(cartTotal.toFixed(2))}</p>
                                </div>
                                <div className=" flex flex-col gap-2 items-center">
                                    <div className="relative flex flex-row-reverse  gap-5 items-center justify-between mt-10 border border-slate-300  bg-slate-200  rounded-lg">
                                        <button className="text-green-700 font-semibold text-2xl px-2 hover:bg-blue-400 hover:text-white transition" onClick={() => increaseQuantity(item.id)}>
                                            +
                                        </button>
                                        <p className="text-sm font-bold">{item.quantity}</p>
                                        <button className="text-red-700 font-semibold text-2xl px-2 hover:bg-red-300" onClick={() => decreaseQuantity(item.id)}>
                                            -
                                        </button>
                                    </div>
                                    <button className=" absolute right-3 top-1 text-red-700 font-semibold" onClick={() => removeFromCart(item.id)}>
                                        <Trash2 />
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="mt-6 ">
                    <p className="mb-5">Total: {formatPrice(cartTotal.toFixed(2))}</p>
                    <Link to="/checkout" className="rounded-lg bg-blue-600 px-4 py-2 text-sm mt-4 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:scale-105 ">
                        Checkout
                    </Link>
                </div>
            </div>

        </main>
    )
}

export default Cart