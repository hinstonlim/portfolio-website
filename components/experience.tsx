"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                // Bigger when hover
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border:
                  theme === "light" ? "1px solid rgba(0, 0, 0, 0.05)" : "none",
                textAlign: "left",
                padding: "1.3rem 2rem",
                borderRadius: "1.0rem",
                transition: "transform 0.3s ease-in-out",
                transform: "scale(1)",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.5rem solid #f3f4f6"
                    : "0.5rem solid rgba(255, 255, 255, 0.05)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(138, 124, 148, 1.0)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <div className="border-b border-gray-300 dark:border-gray-400 my-2" />
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description.map((desc, index) => (
                  <span key={index}>
                    {desc}
                    <br />
                  </span>
                ))}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
