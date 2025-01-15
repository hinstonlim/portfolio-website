import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    // <div className="px-8">
    //   <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
    //     {children}
    //   </h4>
    // </div>
    <h2 className="text-3xl sm:text-5xl font-medium capitalize mb-4 sm:mb-8 text-center w-full leading-normal sm:leading-relaxed lg:leading-normal">
      {children}
    </h2>
  );
}
