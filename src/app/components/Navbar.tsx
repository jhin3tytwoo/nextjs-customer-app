"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group transition-all duration-200"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
              <Image
                src="/image/3d-house.png"
                alt="Logo"
                width={32}
                height={32}
                priority
                className="relative z-10 transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            <span
              className={`text-xl font-bold transition-colors duration-200 ${
                scrolled ? "text-gray-900" : "text-gray-800"
              } group-hover:text-blue-600`}
            >
              CustomerApp
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: "/customers", label: "Customers" },
              { href: "/about", label: "About" },
              { href: "/settings", label: "Settings" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                  scrolled ? "text-gray-700" : "text-gray-600"
                } hover:text-blue-600`}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className={`p-2 rounded-lg transition-all duration-200 ${
                scrolled ? "text-gray-700" : "text-gray-600"
              } hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
            >
              <svg
                className="w-5 h-5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{
                  transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-3 space-y-1">
          {[
            { href: "/customers", label: "Customers" },
            { href: "/about", label: "About" },
            { href: "/settings", label: "Settings" },
          ].map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 transform"
              onClick={() => setMenuOpen(false)}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: menuOpen
                  ? "slideInUp 0.3s ease-out forwards"
                  : "none",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
