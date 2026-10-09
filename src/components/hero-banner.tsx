"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, SendIcon } from "lucide-react";
import { clsx } from "clsx";
import Social from "@/components/social";
import Image from "next/image";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";

const HeroBanner = ({}) => {
  const { setActiveSection } = useActiveSectionContext();
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <section
      className={"py-8 sm:py-12 xl:py-24 h-auto xl:pt-28 scroll-mt-28"}
      id={"home"}
    >
      {/* Background overlay using ::before */}
      <style className={"h-screen"} jsx>{`
        section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url(/images/home-banner-img.png) no-repeat;
          background-size: cover;
          opacity: 0.2; /* Adjust the opacity as needed */
          z-index: -50;
        }
      `}</style>
      <div className="container mx-auto">
        <div
          className={
            "flex flex-col lg:flex-row justify-between gap-x-8 gap-y-5 p-4 sm:p-0"
          }
        >
          {/* Text */}
          <motion.div
            className={
              "flex w-full lg:w-1/2 order-2 lg:order-1 flex-col items-center justify-center mx-auto lg:mx-0 text-center lg:text-start"
            }
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div
              className={
                "text-lg uppercase font-semibold mb-4 text-primary tracking-[4px]"
              }
            >
              Software Engineer
            </div>
            <h1 className={"h1"}>
              Hello, my name is <br />
              <span className={"text-primary italic"}>Ahmed Elgohary</span>
            </h1>
            <p className={"subtitle mx-auto xl:mx-0 mt-3"}>
              As a dedicated software engineer specializing in web applications,
              I am expert in designing and developing modern, scalable, and
              user-friendly solutions. I have hands-on experience with
              frameworks like Next.js, React, Vue, and Laravel, ensuring robust
              application architecture and efficient performance.
            </p>
            {/*  Buttons */}
            <div className={"flex gap-3 flex-row mx-auto xl:mx-0 mb-12"}>
              <Link
                href={"#contact"}
                className={
                  "hover:scale-110 focus:scale-110 transition-all duration-75"
                }
              >
                <Button
                  className={clsx("h-[45px] px-6")}
                  onClick={() => setActiveSection("Contact")}
                >
                  Contact me <SendIcon size={18} />
                </Button>
              </Link>{" "}
              <Link
                href={"/files/Ahmed%20Ibrahim%20Elgohary%20(CV).pdf"}
                className={
                  "hover:scale-110 focus:scale-110 transition-all duration-75"
                }
                download={true}
                target="_blank"
              >
                <Button variant={"secondary"} className={clsx("h-[45px] px-6")}>
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* Socials */}
            <Social
              containerStyle={"flex gap-x-6 mx-auto lg:mx-0"}
              iconsStyle={
                "text-primary text-[22px] transition-all duration-200"
              }
            />
          </motion.div>
          {/* Image */}
          <motion.div
            className={
              "flex order-1 lg:order-2 items-center justify-center mx-auto lg:mx-0 p-3 bg-primary rounded-full shadow-orange"
            }
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Image
              className={"bg-cover bg-no-repeat rounded-full"}
              src={"/images/portfolio-img.jpeg"}
              alt={"Personal Image for portfolio"}
              style={{ width: "auto", height: "auto" }}
              priority={true}
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
