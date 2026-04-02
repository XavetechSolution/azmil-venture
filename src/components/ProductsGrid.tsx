import { Product } from "@/src/constants/products";
import Image from "next/image";
import Link from "next/link";
import { formatNaira } from "../utils/formatter";

function ProductsGrid({
  filteredProducts,
  getQty,
  addToCart,
  increment,
  decrement,
}: any) {
  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-32">
        <div className="w-32 h-32 bg-gray-200 rounded-3xl mx-auto mb-8 flex items-center justify-center">
          🔍
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          No Products Found
        </h2>

        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Try adjusting your filters or contact us for custom solutions.
        </p>

        <Link
          href="https://wa.me/2348134936101"
          className="bg-green-500 text-white px-8 py-4 rounded-2xl text-xl font-bold hover:bg-green-600"
        >
          Ask About Custom
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
      {filteredProducts.map((product: Product) => {
        const qty = getQty(product.id);

        return (
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* IMAGE */}
            <div className="relative h-56 sm:h-60 bg-gradient-to-br from-gray-50 to-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {product.name}
              </h3>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>

              <ul className="space-y-1 mb-4 text-sm text-gray-500">
                {product.specs.slice(0, 3).map((spec: string, i: number) => (
                  <li key={i} className="flex gap-2">
                    <span>•</span>
                    {spec}
                  </li>
                ))}
              </ul>

              {/* FOOTER */}
              <div className="mt-auto">
                <div className="text-xl font-bold text-green-600 mb-4">
                  {formatNaira(product.price)}
                </div>

                {qty === 0 ? (
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-xl font-semibold"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex items-center justify-between bg-gray-100 rounded-xl overflow-hidden">
                    <button
                      onClick={() => decrement(product)}
                      className="px-4 py-3 text-lg font-bold hover:bg-gray-200"
                    >
                      −
                    </button>

                    <span className="font-semibold text-lg">{qty}</span>

                    <button
                      onClick={() => increment(product)}
                      className="px-4 py-3 text-lg font-bold hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
