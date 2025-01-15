"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const skillsIconUrl = [
    "typescript",
    "react",
    "nodejs",
    "nextjs",
    "tailwindcss",
    "expressjs",
    "mongodb",
    // "graphql",
    "vercel",
    "git",
  ];

  return (
    <section id="skills" ref={ref} className="scroll-mt-28 text-center">
      <SectionHeading>
        My{" "}
        <Highlight className="text-black dark:text-white">Expertise</Highlight>{" "}
        that Brings Ideas to Life
      </SectionHeading>
      <ul className="flex flex-wrap justify-center max-w-[54rem] gap-4 text-xl text-gray-800">
        {/* {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-2xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))} */}
        {skillsIconUrl.map((skillIcon, index) => (
          <motion.li
            className="flex items-center justify-center bg-white borderBlack rounded-2xl px-5 py-3 min-h-[8rem] dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Image
              className="w-24"
              src={`/skills/${skillIcon}.png`}
              alt={skillIcon}
              width={2000}
              height={2000}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
