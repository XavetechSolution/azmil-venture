"use client";

import CartDrawer, { CartItem } from "@/src/components/CartDrawer";
import FilterSync from "@/src/components/FilterSync";
import ProductsCTA from "@/src/components/ProductsCTA";
import ProductsGrid from "@/src/components/ProductsGrid";
import PRODUCTS, { Product } from "@/src/constants/products";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

export default function ProductsClient() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = localStorage.getItem("azmil-cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("azmil-cart", JSON.stringify(cart));
  }, [cart]);

  const getQty = (productId: number) =>
    cart.find((item) => item.product.id === productId)?.qty || 0;

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, { id: Date.now(), product, qty: 1 }]);
  };

  const increment = (product: Product) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  const decrement = (product: Product) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === product.id
            ? { ...item, qty: item.qty - 1 }
            : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const updateCart = (newCart: CartItem[]) => setCart(newCart);

  const categories = ["all", "panels", "inverters", "batteries", "packages"];

  const filteredProducts = PRODUCTS.filter(
    (p) => filter === "all" || p.category === filter,
  );

  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <Suspense fallback={null}>
          <FilterSync setFilter={setFilter} />
        </Suspense>

        {/* CATEGORY BAR */}
        <div className="bg-white border-b sticky top-[80px] z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
            <div className="flex items-center justify-between gap-4 py-4">
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/products?category=${cat}`}
                    className={`px-5 py-2.5 rounded-xl font-semibold text-sm ${
                      filter === cat
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() +
                      cat.slice(1).replace(/([A-Z])/g, " $1")}
                  </Link>
                ))}
              </div>

              {/* CART BUTTON */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-5 py-2.5 rounded-xl"
              >
                🛒
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.reduce((sum, item) => sum + item.qty, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-12">
          <ProductsGrid
            filteredProducts={filteredProducts}
            getQty={getQty}
            addToCart={addToCart}
            increment={increment}
            decrement={decrement}
          />
        </div>

        <ProductsCTA />
      </main>

      {/* CART DRAWER */}
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
