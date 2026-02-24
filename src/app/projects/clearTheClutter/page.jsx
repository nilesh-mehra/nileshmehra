"use client";

import { motion } from "framer-motion";

export default function ClsClutterPage() {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-16 space-y-28">

      <section className="text-center max-w-4xl mx-auto space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          ClsClutter | File Organizer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl"
        >
          ClsClutter is a smart digital file organizer that automatically sorts your files into folders, clearing clutter and transforming your workspace efficiently.
        </motion.p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Easy Folder Input</h2>
          <p className="text-gray-400">
            Users enter the folder path they want to organize. ClsClutter instantly reads the files and prepares them for automatic sorting into designated folders.
          </p>
        </div>

        <img
          src="/images/projects/clearTheClutter/folder.jpg"
          alt="Folder Input"
          className="rounded-2xl w-full h-80 object-cover bg-zinc-950"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/images/projects/clearTheClutter/sorting.jpg"
          alt="File Sorting"
          className="rounded-2xl w-full h-80 object-cover order-2 md:order-1"
        />

        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold mb-4">Automatic File Sorting</h2>
          <p className="text-gray-400">
            ClsClutter moves files into folders based on their extensions. Images, documents, and executables are neatly organized automatically for a clutter-free workspace.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Backend Processing</h2>
          <p className="text-gray-400">
            The Node.js backend handles file operations securely. Express server reads directories, creates folders if missing, and moves files without conflicts.
          </p>
        </div>

        <img
          src="/images/projects/clearTheClutter/backend.jpg"
          alt="Backend Processing"
          className="rounded-2xl w-full h-80 object-cover bg-zinc-950"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/images/projects/clearTheClutter/1.png"
          alt="UI Interaction"
          className="rounded-2xl w-full h-80 object-cover bg-zinc-950 order-2 md:order-1"
        />

        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold mb-4">Smooth User Interface</h2>
          <p className="text-gray-400">
            The frontend provides a smooth, responsive interface with animated backgrounds and interactive buttons, making file management simple and visually appealing.
          </p>
        </div>
      </section>

      <section className="text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Node.js",
            "Express",
            "HTML",
            "CSS",
            "JavaScript",
            "cors",
            "Fetch API",
          ].map((tech, index) => (
            <span
              key={index}
              className="px-6 py-2 bg-gray-800 rounded-full text-gray-300 hover:bg-white hover:text-black transition"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href="https://github.com/nilesh-mehra/Clear-the-Clutter"
          target="_blank"
          className="inline-block px-8 py-3 bg-yellow-400 text-black rounded-xl font-semibold hover:scale-105 transition mt-6"
        >
          View on GitHub →
        </a>
      </section>
    </div>
  );
}