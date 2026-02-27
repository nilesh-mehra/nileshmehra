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
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center bg-[rgba(253,253,253,0.97)] shadow-md border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-3">
        <Link href="/" className="text-2xl md:text-3xl text-gray-600 hover:text-indigo-500 transition" >
          Nilesh Mehra
        </Link>

        <div className="md:hidden">
          <button onClick={() => setNavbarOpen(!navbarOpen)} className="p-2 rounded-md text-gray-800 hover:text-indigo-500 transition"
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
          >
            {navbarOpen ? <XMarkIcon className="h-9 w-9" /> : <Bars3Icon className="h-9 w-9" />}
          </button>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} className="text-gray-800 font-semibold hover:text-indigo-500 transition"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={` fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
          ${navbarOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setNavbarOpen(false)} className="p-2 rounded-md text-gray-800 hover:text-indigo-500 transition"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col mt-4 space-y-6 px-6">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.path} className="text-gray-800 text-lg font-semibold hover:text-indigo-500 transition"
              onClick={() => setNavbarOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {navbarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-30" onClick={() => setNavbarOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;