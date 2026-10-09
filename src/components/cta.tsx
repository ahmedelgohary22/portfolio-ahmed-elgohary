import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Cta = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <section className={"py-5 lg:py-8"}>
      <div className={"container mx-auto"}>
        <div className="flex flex-col items-center px-3 md:px-0">
          <h2
            className={
              "text-2xl lg:text-3xl font-semibold text-foreground max-w-xl text-center mb-8"
            }
          >
            Prepared to turn your ideas into reality? I&apos;m here to help you
          </h2>
          <Link href={"#contact"}>
            <Button
              className={
                "text-base lg:text-lg px-4 font-semibold lg:px-8 py-4 lg:py-6 w-[180px] md:w-[250px]"
              }
            >
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
