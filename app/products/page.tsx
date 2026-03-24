"use client";

import CartDrawer, { CartItem } from "@/src/components/CartDrawer";
import PRODUCTS, { Product } from "@/src/constants/products";
import { formatPrice } from "@/src/utils/formatPrice";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Products() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const searchParams = useSearchParams();

  useEffect(() => {
    const savedCart = localStorage.getItem("azmil-cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("azmil-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const category = searchParams.get("category") || "all";
    setFilter(category);
  }, [searchParams]);

  const filteredProducts = PRODUCTS.filter(
    (p) => filter === "all" || p.category === filter,
  );

  const addToCart = (product: Product) => {
    const existing = cart.find((item) => item.product.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { product, qty: 1, id: Date.now() }]);
    }
  };

  const updateCart = (newCart: CartItem[]) => setCart(newCart);

  const categories = ["all", "panels", "inverters", "batteries", "packages"];

  return (
    <>
      <main className="min-h-screen bg-gray-50">
        {/* Sticky Filter + Cart */}
        <div className="bg-white border-b sticky top-[65px] z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
            <div className="flex items-center justify-between gap-4 py-4">
              {/* Categories */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/products?category=${cat}`}
                    className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition whitespace-nowrap ${
                      filter === cat
                        ? "bg-green-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() +
                      cat.slice(1).replace(/([A-Z])/g, " $1")}
                  </Link>
                ))}
              </div>

              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition shrink-0"
              >
                🛒
                <span className="hidden sm:inline">Cart</span>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cart.reduce((sum, item) => sum + item.qty, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-12 md:py-16">
          {filteredProducts.length === 0 ? (
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
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-56 sm:h-60 bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <ul className="space-y-1 mb-4 text-sm text-gray-500">
                      {product.specs.slice(0, 3).map((spec, i) => (
                        <li key={i} className="flex gap-2">
                          <span>•</span>
                          {spec}
                        </li>
                      ))}
                    </ul>

                    {/* Bottom */}
                    <div className="mt-auto">
                      <div className="text-xl font-bold text-green-600 mb-4">
                        {formatPrice(product.price)}
                      </div>

                      <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div
          className="text-white py-16 px-4 md:px-16 text-center"
          style={{
            backgroundImage: "url('/hrlpimg-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Meet our experts for free advice & custom quotes
          </p>
          <Link
            href="https://wa.me/2348134936101"
            className="bg-white text-green-600 px-10 py-5 rounded-3xl text-2xl font-bold hover:bg-gray-100 transition shadow-2xl"
          >
            GET HELP HERE
          </Link>
        </div>
      </main>

      {cartOpen && (
        <CartDrawer
          cart={cart}
          setCartOpen={setCartOpen}
          onUpdateCart={updateCart}
        />
      )}
    </>
  );
}
