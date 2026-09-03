const formatPrice = (price) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
};

function ProductCard({ product, onViewDetails }) {
  return (
    <div className="flex flex-col items-center justify-center">
        <button
      onClick={() => onViewDetails(product)}
      className="group relative flex flex-col items-center justify-center overflow-hidden border border-slate-200 bg-white p-5 shadow-sm transition  hover:shadow-lg"
    >
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="h-60 w-60 rounded-2xl object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="mt-4 flex flex-row-reverse w-full justify-between items-center">
        <p className="px-3 py-1 text-sm font-bold text-slate-500 mt-1">
        {formatPrice(product.price)}
      </p>
        <h3 className="font-semibold text-slate-800 text-center">
          {product.name}
        </h3>
      </div>

      

      <span className="absolute left-0 top-5 rounded-r-full bg-blue-600 px-3 py-1 text-sm text-white">
        ⭐ {product.rating}
      </span>
    </button>
    </div>
    
  );
}

export default ProductCard;