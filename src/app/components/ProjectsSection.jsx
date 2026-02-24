"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const projectsData = [
    {
      id: 1,
      title: "NILmaanus | Esports Platform",
      description:
        "NILmaanus is a full-stack esports platform for managing tournaments, with responsive design, live updates, secure profiles, and an interactive UI for competitive gaming.",
      image: "/images/projects/nilmaanus/nilImg.png",
      tag: ["All", "Full Stack"],
      slug: "nilmaanus-es",
      previewUrl: "http://nilmaanus.vercel.app",
    },
    {
      id: 2,
      title: "Get Me a Chai Clone",
      description: "A full-stack creator funding platform clone featuring secure authentication, Google and GitHub login, Razorpay payments, responsive UI, and a personalized dashboard for supporters and creators.",
      image: "/images/projects/getmeachai/g1.png",
      tag: ["All", "Full Stack"],
      slug: "getMeAChai",
      previewUrl: "#",
    },
    {
      id: 3,
      title: "Password Manager",
      description: "This is a React-based Password Manager that securely stores, edits, deletes, and copies website credentials, providing a user-friendly interface with inline actions and persistent data.",
      image: "/images/projects/passop/1.png",
      tag: ["All", "Utility"],
      slug: "passwordManager",
      previewUrl: "#",
    },
    {
      id: 4,
      title: "Clear The Clutter",
      description: "ClsClutter is a smart file organizer that instantly sorts your digital files into folders, clearing clutter and creating a clean, efficient workspace for seamless productivity.",
      image: "/images/projects/clearTheClutter/1.png",
      tag: ["All", "Utility"],
      slug: "clearTheClutter",
      previewUrl: "#",
    },
  ];
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="px-4 md:px-12 py-12">
      <h2 className="text-center text-4xl font-bold text-gray-700 pt-12 mb-12">
        My Projects
      </h2>

      <div className="flex flex-row justify-center items-center gap-4 mb-8">
        {["All", "Full Stack",  "Utility"].map((t) => (
          <ProjectTag
            key={t}
            name={t}
            isSelected={tag === t}
            onClick={handleTagChange}
          />
        ))}
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-3 gap-8 md:gap-12 justify-items-center"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              slug={project.slug}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;