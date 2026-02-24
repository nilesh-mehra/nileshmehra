import React from "react";
import Link from "next/link"

const ProjectDescription = () => {
    return (
        <div className="flex flex-col items-center px-4 py-10 lg:px-32 lg:py-16 bg-gray-50 min-h-screen">
            <h1 className="text-3xl lg:text-5xl font-bold text-blue-600 text-center mb-6">
                PassOP - Password Manager
            </h1>
            <p className="text-center text-gray-700 mb-8 lg:text-lg">
                A secure and user-friendly application to store, manage, and copy your website credentials efficiently.
            </p>

            <div className="w-full flex justify-center mb-8">
                <img 
                    src="/images/projects/passop/ui.png" 
                    alt="Password Manager UI" 
                    className="w-full max-w-md lg:max-w-4xl rounded-xl shadow-lg"
                />
            </div>

            <div className="w-full lg:w-3/4 text-gray-800">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Project Overview</h2>
                <p className="mb-4">
                    PassOP is a React-based Password Manager that allows users to securely store, edit, and delete credentials for different websites. 
                    Each password entry includes the website, username, and password.
                </p>
                <p className="mb-4">
                    Users can easily copy credentials to the clipboard with a single click and toggle password visibility for convenience. 
                    The interface is responsive, making it fully functional on mobile devices and larger screens.
                </p>
                <p className="mb-4">
                    The application uses React state management and toast notifications to provide real-time feedback for actions like saving, deleting, or copying passwords. 
                    It also supports clearing all stored passwords and editing existing entries dynamically.
                </p>
                <p className="mb-4">
                    This project demonstrates key React concepts including <span className="font-semibold">useState, useEffect, useRef, conditional rendering, and dynamic table rendering</span>, along with integration of third-party libraries like <span className="font-semibold">react-toastify</span> for notifications.
                </p>
                <p className="mb-4">
                    Overall, PassOP is designed to provide a seamless and visually appealing experience for managing personal credentials securely and efficiently.
                </p>
            </div>

            <div className="text-center space-y-8 my-8">
                <h2 className="text-3xl md:text-4xl font-bold">
                Tech Stack
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                {[
                    "React.js",
                    "MongoDB",
                    "Tailwind CSS",
                    "react-toastify ",
                    "UUID (Unique ID Generation)",
                    "Local Storage & Fetch API",
                ].map((tech, index) => (
                    <span
                    key={index}
                    className="px-6 py-2 bg-gray-800 rounded-full text-gray-300 hover:bg-black hover:text-white transition duration-300"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </div>

            <div className="text-center pt-10">
                <Link href="https://github.com/nilesh-mehra/Password-Manager" target="_blank" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300" >
                View on GitHub
                </Link>
            </div>

        </div>
    );
};

export default ProjectDescription;