"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 flex flex-col md:flex-row bg-transparent">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1 col-span-12 sm:col-span-8 text-center sm:text-left flex flex-col justify-center lg:pt-0 pt-5"
        >
          <h1 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-neutral-800">
              Hi, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Nilesh Mehra",
                1000,
                "MERN Developer",
                1000,
                "Frontend Engineer",
                1000,
                "Web Developer",
                1000,
                "UI/UX Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 via-zinc-800 to-blue-800"
            />
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6 lg:text-xl">
            Building modern web experiences with clean code and intuitive design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition w-full sm:w-auto text-center"
            >
              Connect
            </Link>
            <Link href="/resume.pdf" target="_blank" className="px-6 py-3 rounded-full border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition w-full sm:w-auto text-center" >
            View Resume
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="order-1 md:order-2 col-span-12 sm:col-span-4 flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
            <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-20 filter blur-3xl z-0"></div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full rounded-full overflow-hidden shadow-2xl z-10"
            >
              <Image src="/images/hero-img.png" alt="Hero" width={1200} height={800} priority />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;