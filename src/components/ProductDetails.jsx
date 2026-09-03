import { useCart } from "../context/CartContext";
import {toast} from "react-toastify";

const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0,
    }).format(price);
};

function ProductDetails({ product, onClose }) {

    const { addToCart } = useCart();


    if (!product) return null;

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
                        src={product.image}
                        alt={product.name}
                        className="h-80 w-full rounded-xl object-cover md:w-80"
                    />
                </div>

                <div className="mt-2 flex flex-col">

                    <span className="w-fit rounded-full border border-slate-400 bg-slate-300 px-2 py-1 text-center text-xs">
                        {product.category}
                    </span>

                    <h1 className="mt-3 text-xl font-bold text-blue-700">
                        {product.name}
                        <span className="text-sm font-normal text-slate-500">
                            {" "}({product.type})
                        </span>
                    </h1>

                    <p className="mt-2 text-slate-600">
                        {product.description}
                    </p>

                    <span className="mt-4 text-xl font-bold text-slate-900">
                        {formatPrice(product.price)}
                    </span>

                    <p className="mt-1 text-sm text-slate-500">
                        Brand: {product.brand}
                    </p>

                    <button
                        className="mt-5 w-fit rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:scale-105"
                        onClick={() => {
                            addToCart(product);
                        }}
                    >
                        Add to Cart
                    </button>

                </div>
            </section>
        </div>
    );
}

export default ProductDetails;