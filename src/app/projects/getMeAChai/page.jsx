import Link from "next/link";

export default function GetMeAChai() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-16 space-y-20">

      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Get Me A Chai ☕
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto">
          This project is a clone built for learning purposes while exploring the MERN stack.
          The original concept and guidance were followed from CodeWithHarry&apos;s tutorial series.
          This is not my original product idea.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Landing Page</h2>
        <p className="text-gray-400">
          A clean and responsive landing page introducing creators and allowing users to support them.
        </p>

        <img
          src="/images/projects/getmeachai/g1.png"
          alt="Landing Page"
          className="rounded-2xl w-full h-[400px] object-cover"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Secure Authentication System</h2>
        <p className="text-gray-400">
          Implemented secure authentication using:
          <br />
          • Email & Password Login  
          • Google OAuth Login  
          • GitHub OAuth Login  
          <br />
          Built using NextAuth.js with session management.
        </p>

        <img
          src="/images/projects/getmeachai/glogin.png"
          alt="Authentication System"
          className="rounded-2xl w-full h-[400px] object-contain"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Creator Dashboard</h2>
        <p className="text-gray-400">
          A personalized dashboard where creators can manage their profile and receive funding
          from supporters using Razorpay payment integration.
        </p>

        <img
          src="/images/projects/getmeachai/gdash.png"
          alt="Dashboard"
          className="rounded-2xl w-full h-[400px] object-contain"
        />
      </section>

      <section className="text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Next.js",
            "MongoDB",
            "Node.js",
            "NextAuth.js",
            "Google OAuth",
            "GitHub OAuth",
            "Razorpay Integration",
            "Tailwind CSS",
            "React Hook Form",
            "React Toastify",
            "REST APIs",
            "JWT Session Management"
          ].map((tech, index) => (
            <span
              key={index}
              className="px-6 py-2 bg-gray-800 rounded-full text-gray-300 hover:bg-white hover:text-black transition duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="text-center space-y-4 border-t border-gray-800 pt-12">
        <h3 className="text-2xl font-semibold">Credits</h3>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Built while learning from CodeWithHarry&apos;s YouTube MERN series.
          Special credit to Naman Khandelwal for the original project concept.
          This project was created strictly for learning and educational purposes.
        </p>
      </section>

      <section className="text-center pt-10">
        <Link
          href="https://github.com/nilesh-mehra/get-me-a-chai-clone/"
          target="_blank"
          className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
        >
          View on GitHub
        </Link>
      </section>

    </div>
  );
}