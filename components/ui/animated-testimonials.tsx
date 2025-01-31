"use client";

import {
  IconArrowLeft,
  IconArrowRight,
  IconPlayerPause,
  IconPlayerPlay,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  connector?: string;
  company: string;
  url: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleUserNext = () => {
    handleNext();
    setIsUserInteracted(true);
  };

  const handleUserPrev = () => {
    handlePrev();
    setIsUserInteracted(true);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay && !isUserInteracted) {
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isUserInteracted]);

  const randomRotateY = () => {
    const randomY = [-8, -6, 6, 8];
    return randomY[Math.floor(Math.random() * randomY.length)];
    // console.log(Math.floor(Math.random() * 26) - 10);
    // return Math.floor(Math.random() * 26) - 10;
  };

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 pt-10">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold dark:text-white text-black">
              {testimonials[active].name}
            </h3>
            <p className="text-sm italic text-gray-500 dark:text-neutral-300">
              {testimonials[active].designation}
              {` ${testimonials[active].connector ?? "of"} `}
              <a
                className="underline"
                href={testimonials[active].url}
                target="_blank"
              >
                {testimonials[active].company}
              </a>
            </p>
            <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12">
            <button
              onClick={() => {
                setIsUserInteracted((prev) => !prev);
                if (isUserInteracted) {
                  handleNext();
                }
              }}
              className="h-7 w-7 rounded-full bg-gray-300 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              {isUserInteracted ? (
                <IconPlayerPlay className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
              ) : (
                <IconPlayerPause className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
              )}
            </button>
            <button
              onClick={handleUserPrev}
              className="h-7 w-7 rounded-full bg-gray-300 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleUserNext}
              className="h-7 w-7 rounded-full bg-gray-300 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
