"use client";

import AboutReviews from "@/src/components/AboutReviews";
import AboutTrusted from "@/src/components/AboutTrusted";
import { useScrollReveal } from "@/src/hooks/useScrollReveal";
import { useTypewriter } from "@/src/hooks/useTypewriter";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdBolt, MdBuild, MdHome, MdSunny } from "react-icons/md";

export default function Home() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  useScrollReveal();
  const fullHeadlineText = `Go solar with AZMIL`;
  useTypewriter(headlineRef, fullHeadlineText, 60);

  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-gray-900 text-white overflow-hidden py-20 px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 bg-black/20" />
        <Image
          src="/solar-panel-7.jpg"
          alt="AZMIL Solar Installation"
          fill
          className="object-cover -z-10"
        />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1
            ref={headlineRef}
            className="typewriter-text text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          ></h1>
          <p className="subheadline text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-0">
            Escape NEPA blackouts forever. Reliable solar power for your home
            and business. Save thousands on fuel generators. warranty
            guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Link
              href="https://wa.me/2348134936101?text=Hello%20AZMIL%2C%20I%27m%20interested%20in%20a%20solar%20quote%20for%20my%20home%2Fbusiness."
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2"
            >
              <span>
                <FaWhatsapp className="text-2xl" />
              </span>
              Get WhatsApp Quote
            </Link>
            <Link
              href="/energy_calculator"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Try Calculator
            </Link>
          </div>
          {/* Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
            <div>
              <div
                data-scroll-reveal
                data-count-target="5000"
                data-count-text="5000+"
                className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 animate-on-scroll"
              >
                5000+
              </div>
              <p className="text-sm opacity-90">Installations</p>
            </div>
            <div>
              <div
                data-scroll-reveal
                data-count-target="500"
                data-count-text="₦500M+"
                className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 animate-on-scroll"
              >
                ₦500M+
              </div>
              <p className="text-sm opacity-90">Saved</p>
            </div>
            <div>
              <div
                className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 animate-on-scroll"
                data-scroll-reveal
                data-count-target="25"
                data-count-text="Years"
              >
                Years
              </div>
              <p className="text-sm opacity-90">Warranty</p>
            </div>
            <div>
              <div
                className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 animate-on-scroll"
                data-scroll-reveal
              >
                24/7
              </div>
              <p className="text-sm opacity-90">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-8 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div
            data-scroll-reveal
            animate-on-scroll
            className="flex flex-col items-center"
          >
            <div className="text-2xl md:text-3xl font-bold mb-1">
              <MdBolt className="text-2xl md:text-3xl" />
            </div>
            <p className="text-lg font-semibold">Zero Fuel Cost</p>
          </div>
          <div
            data-scroll-reveal
            animate-on-scroll
            className="flex flex-col items-center"
          >
            <div className="text-2xl md:text-3xl font-bold mb-1">
              <MdSunny className="text-2xl md:text-3xl" />
            </div>
            <p className="text-lg font-semibold">Free Energy Forever</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-bold mb-1">
              <MdBuild className="text-2xl md:text-3xl" />
            </div>
            <p className="text-lg font-semibold">Lifetime Support</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-bold mb-1">
              <MdHome className="text-2xl md:text-3xl" />
            </div>
            <p className="text-lg font-semibold">Tailored Installs</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Solar Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for reliable power under one roof
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/products?category=panels" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 text-center group-hover:-translate-y-2">
                <Image
                  src="/solar-panel-5.jpg"
                  alt="Solar Panels"
                  width={80}
                  height={80}
                  className="mx-auto mb-6 rounded-2xl"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Solar Panels
                </h3>
                <p className="text-gray-600 mb-6">
                  High-efficiency panels for maximum energy harvest
                </p>
                <span className="text-green-600 font-bold text-xl">
                  Shop Panels →
                </span>
              </div>
            </Link>
            <Link href="/products?category=inverters" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 text-center group-hover:-translate-y-2">
                <Image
                  src="/solar-inverter.jpg"
                  alt="Inverters"
                  width={80}
                  height={80}
                  className="mx-auto mb-6 rounded-2xl"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Inverters
                </h3>
                <p className="text-gray-600 mb-6">
                  Pure sine wave inverters for all appliances
                </p>
                <span className="text-green-600 font-bold text-xl">
                  Shop Inverters →
                </span>
              </div>
            </Link>
            <Link href="/products?category=batteries" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 text-center group-hover:-translate-y-2">
                <Image
                  src="/solar-battery-1.jpg"
                  alt="Batteries"
                  width={80}
                  height={80}
                  className="mx-auto mb-6 rounded-2xl"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Batteries
                </h3>
                <p className="text-gray-600 mb-6">
                  Lithium & tubular for 24/7 backup
                </p>
                <span className="text-green-600 font-bold text-xl">
                  Shop Batteries →
                </span>
              </div>
            </Link>
            <Link href="/products?category=packages" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 text-center group-hover:-translate-y-2">
                <Image
                  src="/solar-inverter-4.jpg"
                  alt="Packages"
                  width={80}
                  height={80}
                  className="mx-auto mb-6 rounded-2xl"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Full Packages
                </h3>
                <p className="text-gray-600 mb-6">
                  Complete ready-to-install systems
                </p>
                <span className="text-green-600 font-bold text-xl">
                  View Packages →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600">
              From consultation to lights on in 7 days
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="w-20 h-20 bg-blue-500 text-white rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pink-500">
                Free Consultation
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Site survey & custom design. WhatsApp or visit our Ogba office.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-20 h-20 bg-green-500 text-white rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pink-500">
                Installation
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Professional team installs in 2-3 days. Minimal disruption.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-20 h-20 bg-purple-500 text-white rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pink-500">
                Power On
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Full training & 24/7 support. Enjoy reliable power forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Preview */}
      <section className="py-20 px-4 md:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/solar-inverter-2.jpg"
            alt="Solar Calculator"
            width={500}
            height={300}
            className="w-full max-w-md mx-auto rounded-3xl shadow-2xl mb-12 object-cover"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Size Your Perfect System
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Enter your appliances in seconds. Get exact panels, battery &
            inverter specs with price.
          </p>
          <Link
            href="/energy_calculator"
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-12 py-6 rounded-3xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            Start Calculator Now
          </Link>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real Projects
            </h2>
            <p className="text-xl text-gray-600">
              Trusted installations across Lagos & Nigeria
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <Image
                src="/ogbaresidence1.jpg"
                alt="Ogba Residence"
                width={400}
                height={250}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ogba Residence
                </h3>
                <p className="text-green-600 font-semibold mb-4">
                  5kW Off-Grid System
                </p>
                <p className="text-gray-600">
                  Powers entire home including AC. Zero outages since 2023.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <Image
                src="/ikejaimg-1.jpg"
                alt="Ikeja Office"
                width={400}
                height={250}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ikeja Corporate
                </h3>
                <p className="text-green-600 font-semibold mb-4">
                  12kW Hybrid System
                </p>
                <p className="text-gray-600">
                  Backup for 50 staff office. NEPA-independent.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <Image
                src="/lekkivilla-2.jpg"
                alt="Lekki Villa"
                width={400}
                height={250}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Lekki Luxury Villa
                </h3>
                <p className="text-green-600 font-semibold mb-4">
                  8kW Premium System
                </p>
                <p className="text-gray-600">
                  Pool, gym & home cinema powered 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutReviews />

      <AboutTrusted />

      <section
        className="text-white py-20 px-4 md:px-16"
        style={{
          backgroundImage: "url('/solar-panel-7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join 5000+ Nigerian homes & businesses enjoying reliable power. Your
            freedom starts today.
          </p>
          <Link
            href="https://wa.me/2348134936101?text=Hi%20AZMIL%2C%20please%20send%20me%20solar%20options%20for%20my%20[home%2Foffice]%20"
            className="bg-white text-green-600 px-12 py-6 rounded-3xl text-2xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
          >
            <span>
              <FaWhatsapp className="text-xl" />
            </span>
            Get In Touch (2 mins)
          </Link>
        </div>
      </section>
    </main>
  );
}
