import Image from "next/image";
import Link from "next/link";
import { Product } from "../constants/products";
import { formatPrice } from "../utils/formatPrice";

export interface CartItem {
  id: number;
  product: Product;
  qty: number;
}

export default function CartDrawer({
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

  const whatsappMessage = `Hello AZMIL,

🛒 *NEW ORDER REQUEST*

${cart
  .map(
    (item, index) =>
      `${index + 1}. *${item.product.name}*
   - Qty: ${item.qty}
   - Price: ${formatPrice(item.product.price)}
   - Subtotal: ${formatPrice(item.product.price * item.qty)}`,
  )
  .join("\n\n")}

----------------------------
*TOTAL: ${formatPrice(total)}*
----------------------------

Kindly provide:
• Quote
• Installation details
• Delivery timeline

Thank you!`;

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
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={() => setCartOpen(false)}
      >
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
