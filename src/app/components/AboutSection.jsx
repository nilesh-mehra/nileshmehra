"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import {motion} from "framer-motion"
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Technical Skills",
    id: "technical-skills",
    content: (
      <ul className="flex flex-wrap gap-3 text-lg">
        {[
          { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
          { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "React.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
          { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
          { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        ].map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full hover:scale-105 transition-transform duration-200"
          >
            <Image src={skill.src} alt={skill.name} width={24} height={24} />
            <span className="text-gray-800 dark:text-white font-medium">{skill.name}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Tools & Frameworks",
    id: "tools-frameworks",
    content: (
      <ul className="flex flex-wrap gap-3 text-lg">
        {[
          { name: "Tailwind CSS", src: "https://www.svgrepo.com/show/333609/tailwind-css.svg" },
          { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
          { name: "Material-UI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
          { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
          { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
          { name: "Chakra UI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chakraui/chakraui-original.svg" },
          { name: "VMware", src: "https://imgs.search.brave.com/NQyulRRKVsVF9p4miR6oJ8qXgX7zxmBmJCQNL_Kr0pw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzVhL1Ztd2FyZV93/b3Jrc3RhdGlvbl8x/Nl9pY29uLnN2Zw" },
          { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        ].map((tool) => (
          <li
            key={tool.name}
            className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-full hover:scale-105 transition-transform duration-200"
          >
            <Image src={tool.src} alt={tool.name} width={24} height={24} className="object-contain" />
            <span className="text-gray-800 dark:text-white font-medium">{tool.name}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
  title: "Education",
  id: "education",
  content: (
    <div className="flex flex-col gap-4">
      <div className="flex items-start gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white text-lg">
            Graphic Era Hill University, Dehradun
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Bachelor of Computer Applications (Hons) <span className="italic">(Ongoing)</span>
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white text-lg">
            Evergreen Sr. Sec. School
          </h3>
          <p className="text-gray-600 dark:text-gray-300">10+2 (Higher Secondary)</p>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white text-lg">
            Evergreen Sr. Sec. School
          </h3>
          <p className="text-gray-600 dark:text-gray-300">10th (High School)</p>
        </div>
      </div>
    </div>
  ),
}
];

const AboutSection = () => {
  const [tab, setTab] = useState("technical-skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-gray-800 dark:text-white" id="about">
      <div className="py-8 px-4 xl:gap-16 pt-20 sm:pt-28 pb-24 sm:pb-24 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <motion.h2 className="text-4xl font-bold text-gray-700 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          >About Me</motion.h2>
          <motion.p className="text-justify text-gray-600 lg:text-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true}}>
            I&apos;m a full stack web developer who loves turning ideas into interactive and responsive web apps — basically, I make websites do cool stuff while keeping them clean and user-friendly. I work with tools like JavaScript, React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, and Bootstrap, so I can build everything from a sleek landing page to a full-featured web application.  
            I enjoy solving challenges and figuring out the best way to make things work smoothly, all while keeping the experience simple and enjoyable for users. Collaborating with awesome teams, brainstorming ideas, and seeing a project grow from concept to something people love is what keeps me excited about coding every day.  
            And yes… I might drink a little too much coffee ☕ along the way, but it&apos;s all worth it when the app just clicks.
          </motion.p>

          <motion.div className="flex flex-row justify-start mt-12 space-x-4 overflow-x-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true}}
          >
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </motion.div>

          <motion.div className="mt-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true}}
          >
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </motion.div>
        </div>
      </div>
      <div className="w-full rounded-full h-1 bg-gray-500 px-10"></div>
    </section>
  );
};

export default AboutSection;