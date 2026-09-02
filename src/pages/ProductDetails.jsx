import { products } from "../data/products";
import Navbar from "../components/Navbar";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0,
    }).format(price);
};


function ProductDetails() {

    const { id } = useParams()
    const { addToCart } = useCart()
    const product = products.find((p) => p.id === +id)

    if (!product) return <p>Product not found</p>

    return (
        <main className="min-h-full flex justify-center mt-25">
            <section className="bg-white flex justify-between gap-2.5">
                <img src={product.image} alt={product.name} className="w-100 h-100 object-cover" />
                <div className="ml-4 ">
                    <span className="bg-slate-300 py-1.5 px-3 text-center font-semibold rounded-full border border-slate-400">{product.category}</span>
                    <h1 className="mt-2 text-lg font-bold text-blue-700">{product.name}</h1>
                    <p className="wrap mt-1.5">{product.description}</p>
                    <span className="text-lg font-bold text-slate-900">
                        {formatPrice(product.price)}
                    </span>
                    <p className="mt-1 text-sm text-slate-500">
                        {product.brand}
                    </p>
                    <div className="flex flex-col mt-4">
                        <button className="rounded-lg w-30 bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:scale-105" onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>
                        <Link to="/product" className="back-link">← Back to shop</Link>
                    </div>


                </div>
            </section>
        </main>
    )
}

export default ProductDetails