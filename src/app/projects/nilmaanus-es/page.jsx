"use client";

import { motion } from "framer-motion";

export default function NilmaanusPage() {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-16 space-y-28">

      <section className="text-center max-w-4xl mx-auto space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          NILmaanus | Esports Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl"
        >
          NILmaanus is a full-stack esports platform for joining and managing tournaments,
          with responsive design, live updates, secure profiles, and an
          interactive UI built for competitive gaming. ...onProgress
        </motion.p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Secure Login System</h2>
          <p className="text-gray-400">
            Players and organizers securely authenticate using Customize , Google and Github to access
            personalized dashboards and tournament features.
          </p>
        </div>

        <img
          src="/images/projects/nilmaanus/nil-login.png"
          alt="Login System"
          className="rounded-2xl w-full h-80 object-contain bg-zinc-950"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/images/projects/nilmaanus/1.png"
          alt="User Dashboard"
          className="rounded-2xl w-full h-80 object-cover order-2 md:order-1"
        />

        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold mb-4">User Dashboard</h2>
          <p className="text-gray-400">
            Players can join tournaments, track match participation,
            and manage their gaming profiles through an intuitive interface.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Organizer Dashboard</h2>
          <p className="text-gray-400">
            Organizers create tournaments, check tournaments created and update
            tournament details and update results in ...real-time "upcoming"... with structured control panels.
          </p>
        </div>

        <img
          src="/images/projects/nilmaanus/organizer.png"
          alt="Organizer Dashboard"
          className="rounded-2xl w-full h-80 object-contain bg-zinc-950"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/images/projects/nilmaanus/room.png"
          alt="Room Management"
          className="rounded-2xl w-full h-80 object-contain bg-zinc-950 order-2 md:order-1"
        />

        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold mb-4">
            Secure Room Detail Management
          </h2>
          <p className="text-gray-400">
            Room IDs and passwords are shared securely only with
            registered participants, ensuring fair tournament operations.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Admin Approval System
          </h2>
          <p className="text-gray-400">
            Admin panel for reviewing organizer requests and approving
            tournament creation while maintaining platform integrity.
          </p>
        </div>

        <img
          src="/images/projects/nilmaanus//admin.png"
          alt="Admin Panel"
          className="rounded-2xl w-full h-80 object-contain bg-zinc-950"
        />
      </section>

      <section className="text-center space-y-6 pt-16 border-t border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold">
          Explore NILmaanus Live
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          NILmaanus is a personal production-level esports platform built
          to demonstrate scalable tournament architecture, secure role-based
          authentication, and real-time competitive management.
        </p>

        <a
          href="https://nilmaanus.vercel.app"
          target="_blank"
          className="inline-block px-8 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
        >
          Visit Live Website →
        </a>

        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          This is a personal production project. The source code is kept
          private to protect core platform logic and backend architecture.
        </p>
      </section>

      <section className="text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Next.js",
            "MongoDB",
            "NextAuth.js",
            "Node.js",
            "Tailwind CSS",
            "JWT Authentication",
          ].map((tech, index) => (
            <span
              key={index}
              className="px-6 py-2 bg-gray-800 rounded-full text-gray-300 hover:bg-white hover:text-black transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}