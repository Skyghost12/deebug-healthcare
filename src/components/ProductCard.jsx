import { Link } from 'react-router-dom'

const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0,
    }).format(price);
};

function ProductCard({ name, price, image, id }) {
  return (
    <div className="relative flex flex-col justify-center items-center overflow-hidden border shadow border-slate-200 p-5">
      <img src={image} alt={name} className='w-60 h-60 object-cover hover:scale-105 transition rounded-2xl'/>
      <div className="flex gap-2 mt-4">
        <h3 className='font-semibold'>{name}</h3>
        <p className="absolute right-0 bottom-79 bg-red-700 text-white rounded-l-full px-2">{formatPrice(price)}</p>
      </div>
      <Link to={`/product/${id}`} className="rounded-lg bg-blue-600 px-4 py-2 text-sm mt-4 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:scale-105">View →</Link>
    </div>
  )
}

export default ProductCard