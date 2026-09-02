import { products } from "../data/products";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { Search } from "lucide-react";

function Product() {



  return (
    <main className="min-h-screen bg-slate-50 mt-8">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
              Healthcare Store
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Healthcare products,
              <span className="text-blue-600"> made accessible.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Discover quality healthcare products, medical equipment,
              personal care essentials, and wellness products in one place.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white flex justify-center">
        <div className=" max-w-7xl p-4">
            <div className="flex flex-col gap-4 items-center">
          <h1 className="text-2xl font-bold">Available Products</h1>
          <div className="relative">
            <input type="search" className="px-10 border border-slate-200 outline-0 rounded-2xl py-1.5 w-300 bg-slate-50" />
            <Search className="w-5 h-5 absolute top-2 left-3"/>
          </div>

          <div className="grid grid-cols-3 gap-4 p-2 ">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />

            ))}
          </div>
        </div>
        </div>
        

      </section>


    </main>
  )
}

export default Product