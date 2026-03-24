"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
  price: number;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Felicity Solar 550W Mono Panel",
    category: "panels",
    image: "/solar-panel-5.jpg",
    description: "High-efficiency monocrystalline panel. Perfect for rooftops.",
    specs: ["550W output", "25yr warranty", "IP68 weatherproof"],
    price: 145000,
  },
  {
    id: 2,
    name: "Deye 5kW Hybrid Inverter",
    category: "inverters",
    image: "/solar-inverter.jpg",
    description: "Pure sine wave hybrid inverter for off-grid & grid-tie.",
    specs: ["5kW power", "48V battery", "WiFi monitoring"],
    price: 1250000,
  },
  {
    id: 3,
    name: "Amaron 5kWh Lithium Battery",
    category: "batteries",
    image: "/solar-battery-1.jpg",
    description: "LiFePO4 lithium battery with 6000+ cycles.",
    specs: ["5kWh capacity", "10yr warranty", "BMS included"],
    price: 850000,
  },
  {
    id: 4,
    name: "2kW Starter Home Package",
    category: "packages",
    image: "/solar-inverter-2.jpg",
    description: "Complete system for small homes/apartments.",
    specs: ["4x550W panels", "2kW inverter", "3kWh battery"],
    price: 2500000,
  },
  {
    id: 5,
    name: "Gospower 300W Panel",
    category: "panels",
    image: "/solar-panel-6.jpg",
    description: "Compact panel for portable systems.",
    specs: ["300W", "Foldable", "Lightweight"],
    price: 85000,
  },
  {
    id: 6,
    name: "Cworth 3kW Inverter",
    category: "inverters",
    image: "/lekkivilla-2.jpg",
    description: "Reliable pure sine wave inverter.",
    specs: ["3kW continuous", "48V", "Remote monitoring"],
    price: 750000,
  },
  {
    id: 7,
    name: "Tubular 200AH Battery",
    category: "batteries",
    image: "/solar-battery-1.jpg",
    description: "Heavy-duty tubular for deep cycle.",
    specs: ["200AH @ 48V", "5yr warranty", "Maintenance free"],
    price: 320000,
  },
  {
    id: 8,
    name: "5kW Off-Grid Package",
    category: "packages",
    image: "/solar-inverter-3.jpg",
    description: "Full off-grid system for average homes.",
    specs: ["8x550W panels", "5kW inverter", "10kWh battery"],
    price: 5800000,
  },
  {
    id: 9,
    name: "Itel 440W Bifacial Panel",
    category: "panels",
    image: "/solar-panel-7.jpg",
    description: "Bifacial panels capture light from both sides.",
    specs: ["440W + 25% rear", "30yr lifespan", "Anti-PID"],
    price: 125000,
  },
  {
    id: 10,
    name: "Felicity 8kW Inverter",
    category: "inverters",
    image: "/ikejaimg-1.jpg",
    description: "High capacity for commercial use.",
    specs: ["8kW", "Parallel up to 16", "MPPT charger"],
    price: 2100000,
  },
  {
    id: 11,
    name: "12kWh Lithium Rack Battery",
    category: "batteries",
    image: "/solar-battery-1.jpg",
    description: "Rack-mount for easy installation.",
    specs: ["12kWh", "Modular", "6000 cycles"],
    price: 1850000,
  },
  {
    id: 12,
    name: "10kW Commercial Package",
    category: "packages",
    image: "/solar-inverter-4.jpg",
    description: "Large system for offices/small factories.",
    specs: ["20x550W panels", "10kW inverter", "20kWh storage"],
    price: 12500000,
  },
  {
    id: 7,
    name: "Tubular 200AH Battery",
    category: "batteries",
    image: "/solar-battery-1.jpg",
    description: "Heavy-duty tubular for deep cycle.",
    specs: ["200AH @ 48V", "5yr warranty", "Maintenance free"],
    price: 320000,
  },
  {
    id: 7,
    name: "Tubular 200AH Battery",
    category: "batteries",
    image: "/solar-battery-1.jpg",
    description: "Heavy-duty tubular for deep cycle.",
    specs: ["200AH @ 48V", "5yr warranty", "Maintenance free"],
    price: 320000,
  },
  {
    id: 7,
    name: "Tubular 200AH Battery",
    category: "batteries",
    image: "/solar-battery-1.jpg",
    description: "Heavy-duty tubular for deep cycle.",
    specs: ["200AH @ 48V", "5yr warranty", "Maintenance free"],
    price: 320000,
  },
  {
    id: 7,
    name: "Tubular 200AH Battery",
    category: "batteries",
    image: "/solar-battery-1.jpg",
    description: "Heavy-duty tubular for deep cycle.",
    specs: ["200AH @ 48V", "5yr warranty", "Maintenance free"],
    price: 320000,
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(price);
}

interface CartItem {
  id: number;
  product: Product;
  qty: number;
}

function CartDrawer({
  cart,
  setCartOpen,
  onUpdateCart,
}: {
  cart: CartItem[];
  setCartOpen: (open: boolean) => void;
  onUpdateCart: (newCart: CartItem[]) => void;
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0,
  );

  const whatsappMessage = `Hi AZMIL,\\n\\nMy Cart Order:\\n${cart
    .map(
      (item) =>
        `- ${item.product.name} x${item.qty} (₦${formatPrice(item.product.price)})`,
    )
    .join(
      "\\n",
    )}\\n\\nTotal: ${formatPrice(total)}\\n\\nPlease send quote/installation details.\\nThanks!`;

  const handleQtyChange = (id: number, qty: number) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, qty: Math.max(1, qty) } : item,
    );
    onUpdateCart(newCart);
  };

  const removeItem = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    onUpdateCart(newCart);
  };

  if (cart.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Your Cart is Empty
          </h3>
          <p className="text-gray-600 mb-8">Add products to get started!</p>
          <button
            onClick={() => setCartOpen(false)}
            className="bg-gray-900 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="bg-white w-full max-w-md h-full flex flex-col">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button onClick={() => setCartOpen(false)} className="text-2xl">
            ×
          </button>
        </div>
        <div className="flex-1 p-6 overflow-y-auto">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 py-4 border-b last:border-b-0"
            >
              <Image
                src={item.product.image}
                alt={item.product.name}
                width={80}
                height={80}
                className="rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 truncate">
                  {item.product.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {formatPrice(item.product.price)} each
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => handleQtyChange(item.id, item.qty - 1)}>
                  -
                </button>
                <span className="w-8 text-center font-semibold">
                  {item.qty}
                </span>
                <button onClick={() => handleQtyChange(item.id, item.qty + 1)}>
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 text-xl"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="p-6 border-t bg-gray-50">
          <div className="text-right mb-6">
            <div className="text-2xl font-bold text-gray-900">
              {formatPrice(total)}
            </div>
          </div>
          <div className="space-y-3">
            <Link
              href={`https://wa.me/2348134936101?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              className="block w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl text-center font-semibold text-lg transition"
            >
              Checkout on WhatsApp
            </Link>
            <button
              onClick={() => setCartOpen(false)}
              className="w-full border border-gray-300 text-gray-900 py-4 px-6 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const searchParams = useSearchParams();

  useEffect(() => {
    const savedCart = localStorage.getItem("azmil-cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
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
      const newCart = cart.map((item) =>
        item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item,
      );
      setCart(newCart);
    } else {
      setCart([...cart, { product, qty: 1, id: Date.now() }]);
    }
  };

  const updateCart = (newCart: CartItem[]) => setCart(newCart);

  const categories = ["all", "panels", "inverters", "batteries", "packages"];

  return (
    <>
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b sticky top-[65px] z-40">
          <div className="max-w-7xl mx-auto px-4 md:px-16 py-4 flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              AZMIL Products
            </h1>
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl transition flex items-center gap-2"
            >
              🛒 Cart
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {cart.reduce((sum, item) => sum + item.qty, 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Sticky Filter Bar */}
        <div className="bg-white border-b sticky top-[155px] z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <div className="flex flex-wrap gap-2 py-4 overflow-x-auto">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/products?category=${cat}`}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 whitespace-nowrap ${
                    filter === cat
                      ? "bg-green-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() +
                    cat.slice(1).replace(/([A-Z])/g, " $1")}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-16 py-16">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-xl text-sm font-bold">
                      New
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <ul className="space-y-1 mb-6">
                      {product.specs.map((spec, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-500"
                        >
                          <span>•</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-2xl font-bold text-green-600">
                        {formatPrice(product.price)}
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
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
            className="bg-white text-green-600 px-10 py-5 rounded-3xl text-2xl font-bold hover:bg-gray-100 transition shadow-2xl hover:shadow-3xl"
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
