"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion"

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "https://formspree.io/f/xaqdabrg";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="z-10">
        <motion.h5 className="text-4xl font-bold text-gray-700 my-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true}}>
          Let&apos;s Connect
        </motion.h5>
        <motion.p className="text-gray-600 mb-4 max-w-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true}}
        >
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </motion.p>
        <div className="socials flex flex-row items-center gap-2 mt-5">
          <Link href="https://github.com/nilesh-mehra/">
            <Image src={GithubIcon} alt="Github Icon" className="w-10 h-10 filter brightness-[0.60]"/>
          </Link>
          <Link href="https://www.linkedin.com/in/nilesh-mehra-99692b387/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-10 h-10 filter brightness-[0.60]" />
          </Link>
           <Link href="mailto:nilesh@example.com" className="text-gray-500 hover:text-blue-500 text-ms">
          <span className="text-gray-600 ">| </span>nilesh.mehra.dev@gmail.com
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-600 text-lg mt-16">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" 
          onSubmit={handleSubmit}>
            <motion.div className="mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true}}>
              <label htmlFor="email" className="text-gray-600 block mb-2 text-sm font-medium" >
                Your email
              </label>
              <input name="email" type="email" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-5 md:p-4" placeholder="jacob@google.com" />
            </motion.div>

            <motion.div className="mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true}}> 
              <label htmlFor="subject" className="text-gray-600 block text-sm mb-2 font-medium" >
                Subject
              </label>
              <input name="subject" type="text" id="subject" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-5 md:p-4" placeholder="Just saying hi" />
            </motion.div>

            <motion.div className="mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true}}> 
              <label htmlFor="message" className="text-gray-600 block text-sm mb-2 font-medium" >
                Message
              </label>
              <textarea name="message" id="message" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-5 md:p-4" placeholder="Let's talk about..." />
            </motion.div>

            <motion.button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium p-5 md:p-4 rounded-lg w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true}}> 
              Send Message
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
