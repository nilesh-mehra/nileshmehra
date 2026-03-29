"use client";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, slug }) => {
  return (
    <Link href={`/projects/${slug}`} target="_blank">
      <div className="relative p-3 rounded-lg h-[500px] lg:h-[500px] mt-10 cursor-pointer transform transition-all duration-300 hover:scale-105 group">
        
        <div className="absolute inset-0 rounded-lg pointer-events-none" style={{
            boxShadow: "0 0 25px rgba(0,0,0,0.6)", 
          }}
        ></div>

        <div className="h-52 md:h-60 rounded-t-xl relative bg-cover bg-center transition-all duration-300 group-hover:brightness-75"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <div className="absolute bottom-3 right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>

        <div className="text-gray-800 rounded-b-xl mt-3 py-6 px-4 bg-white">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;