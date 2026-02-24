"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center bg-[rgba(255,255,255,0.97)] shadow-md border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl text-gray-600 hover:text-indigo-500 transition"
        >
          Nilesh Mehra
        </Link>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="p-2 rounded-md text-gray-800 border border-gray-300 hover:text-indigo-500 hover:border-indigo-500 transition"
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  className="text-gray-800 font-semibold hover:text-indigo-500 transition"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
          ${navbarOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col mt-20 space-y-6 px-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="text-gray-800 text-lg font-semibold hover:text-indigo-500 transition"
              onClick={() => setNavbarOpen(false)} // close menu on link click
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay behind menu */}
      {navbarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setNavbarOpen(false)} // close menu when clicking outside
        />
      )}
    </nav>
  );
};

export default Navbar;