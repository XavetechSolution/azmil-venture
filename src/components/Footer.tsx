"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bg-green-600 py-8 px-4 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="https://wa.me/2348134936101"
            className="bg-white text-green-600 px-8 py-4 rounded-2xl text-xl font-bold hover:bg-gray-100 transition"
          >
            Reach Out To Us Today!
          </Link>
        </div>
      </div>

      <footer className="bg-gray-900 text-white">
        <div className="py-16 px-4 md:px-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
            <div>
              <Image
                src="/azmil_logo.jpeg"
                alt="AZMIL"
                width={150}
                height={60}
                className="mb-6"
              />
              <p className="text-gray-400 leading-relaxed mb-8">
                AZMIL provides premium solar solutions for Nigerian homes and
                businesses. Reliable power, unbeatable warranties, lifetime
                support. Power your future today.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/energy_calculator"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reviews"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/products?category=panels"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Solar Panels
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=inverters"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Inverters
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=batteries"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Batteries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=packages"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Full Packages
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaWhatsapp className="text-green-400 text-2xl mt-1" />
                  <div>
                    <p className="font-semibold">+234 813 493 6101</p>
                    <Link
                      href="https://wa.me/2348134936101"
                      className="text-green-400 hover:underline"
                    >
                      WhatsApp Chat
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-green-400 text-xl mt-1" />
                  <p>
                    4 Akinwale Street, Ogba
                    <br />
                    Opposite Nationwide, Lagos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-12 text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} AZMIL Solar Solutions. All
              rights reserved. Years Warranty | 24/7 Lifetime Support |
              Nigeria&apos;s Most Trusted Solar Brand.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
