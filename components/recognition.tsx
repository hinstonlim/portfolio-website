"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { recognitionsData, testimonialsData } from "@/lib/data";
import { Carousel } from "react-responsive-3d-carousel";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { Highlight } from "./ui/hero-highlight";

export default function Recognition() {
  const { ref } = useSectionInView("Recognition");

  return (
    <section
      id="recognition"
      ref={ref}
      className="w-full scroll-mt-28"
    >
      {/* <SectionHeading>
      A look at the{" "}
      <Highlight className="text-black dark:text-white">
        Recognition
      </Highlight>{" "}
      I've received from Those I've Worked With
    </SectionHeading> */}
      <SectionHeading>
        A look at the{" "}
        <Highlight className="text-black dark:text-white">
          Recognitions
        </Highlight>{" "}
        that I've received
      </SectionHeading>
      <AnimatedTestimonials testimonials={testimonialsData} />
      {/* <Carousel
        showStatus={false}
        autoPlay={true}
        selectable={false}
        showArrows={false}
        showIndicators={true}
        isShadow={false}
      >
        {recognitionsData.map((item, index) => (
          <div className="p-4 pb-12 bg-white borderBlack dark:bg-gray-800 text-black rounded-xl flex flex-col justify-between">
            <div className="mb-2 mt-4 px-4 text-lg dark:font-light leading-loose text-center text-black dark:text-white tracking-wider ">
              " {item.description} "
            </div>
            <div>
              <div className="mt-4 text-xl font-bold text-center text-black dark:text-white tracking-wider">
                {item.name}
              </div>
              <div className="mt-1 text-m text-center dark:text-blue-300 text-blue-600 tracking-widest">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </Carousel> */}
    </section>
  );
}
