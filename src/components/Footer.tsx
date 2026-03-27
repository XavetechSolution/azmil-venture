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
    <footer className="bg-gray-900 text-white">
      <div className="py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          {/* Brand (NOT centered on mobile) */}
          <div className="text-left">
            <Image
              src="/logo3.png"
              alt="AZMIL"
              width={100}
              height={50}
              className="mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
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

          {/* Navigation (centered on mobile) */}
          <div className="text-center md:text-left">
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
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
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

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
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

              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
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

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-12 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} AZMIL Solar Solutions. All rights
            reserved. Years Warranty | 24/7 Lifetime Support | Nigeria&apos;s
            Most Trusted Solar Brand.
          </p>
        </div>
      </div>
    </footer>
  );
}
