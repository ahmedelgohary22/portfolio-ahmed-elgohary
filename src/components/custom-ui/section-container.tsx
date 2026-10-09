import React from "react";
import { montserrat } from "@/ui/fonts";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  children: React.ReactNode;
  uniqueId?: string;
}
const SectionContainer = ({
  title,
  children,
  uniqueId,
  ...rest
}: SectionContainerProps) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <section className={"py-5 lg:py-8 scroll-mt-20"} id={uniqueId} {...rest}>
      <div
        className={
          "container mx-auto flex flex-col items-center w-full gap-y-6"
        }
      >
        {/* Title */}
        <div className={"flex flex-col w-fit items-center justify-center"}>
          <h1
            className={`text-primary text-3xl md:text-2xl bg-transparent antialiased font-semibold ${montserrat} font-medium font-mono tracking-wide`}
          >
            {title}
          </h1>
          <hr
            className={"h-1 mt-1 bg-primary rounded-full w-[115%] opacity-70"}
          />
        </div>

        {/* Content */}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
