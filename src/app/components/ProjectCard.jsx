import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, slug }) => {
  return (
    <Link href={`/projects/${slug}`} target="_blank">
      <div className="relative p-3 rounded-lg h-[500px] lg:h-[500px] mt-10 cursor-pointer transform transition-all duration-300 hover:scale-105">
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            boxShadow: "0 0 25px rgba(0,0,0,0.6)", 
          }}
        ></div>
        <div
          className="h-52 md:h-60 rounded-t-xl relative bg-cover bg-center transition-all duration-300 group-hover:brightness-75"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
        <div className="text-white rounded-b-xl mt-3 py-6 px-4 ">
          <h5 className="text-xl text-gray-800 font-semibold mb-2">{title}</h5>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;