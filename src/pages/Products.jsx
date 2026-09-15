import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import ProductDetails from "../components/ProductDetails"
import Footer from "../components/Footer";


function Product() {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category} ${product.type} ${product.brand}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );


  const indexOfLastProduct = currentPage * productsPerPage;

  const indexOfFirstProduct =
    indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <main className="min-h-screen bg-slate-50 mt-8">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-3">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
              Healthcare Store
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Healthcare products,
              <span className="text-blue-600"> made accessible.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 font-[Newsreader] italic">
              Discover quality healthcare products, medical equipment,
              personal care essentials, and wellness products in one place.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white flex justify-between items-center flex-col gap-4">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-3">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-2xl font-bold">Available Products</h1>
            <div className="relative">
              <input type="search" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="px-10 border border-slate-200 outline-0 rounded-full text-left py-3 w-full bg-slate-50 md:px-60 " />
              <Search className="w-5 h-5 absolute top-4 left-3 " />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10  ">
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={setSelectedProduct}
                />
              ))}


            </div>
            {selectedProduct && (
              ProductDetails({ product: selectedProduct, onClose: () => setSelectedProduct(null) })
            )}
          </div>
          <div className="flex items-center justify-center gap-2 mt-8">

            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-lg border"
            >
              ←
            </button>

            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`px-3 py-2 rounded-lg ${currentPage === number
                  ? "bg-blue-600 text-white"
                  : "border"
                  }`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-lg border"
            >
              →
            </button>

          </div>
        </div>


      </section>

      <Footer />
    </main>
  )
}

export default Product