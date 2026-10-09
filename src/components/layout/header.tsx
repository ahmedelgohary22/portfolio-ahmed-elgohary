"use client";
import React from "react";
import Image from "next/image";
import { montserrat } from "@/ui/fonts";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import MobileNavbar from "@/components/layout/mobile-navbar";
import ThemeToggler from "@/components/layout/theme-toggler";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";

const Header = ({}) => {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  // const [active, setActive] = useState<string>("Home");
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <>
      <motion.header
        className={
          "sticky top-0 md:top-4 flex z-[10] justify-between items-center mt-0 md:mt-4 mx-auto container px-10 py-2 h-[4.5rem] rounded-none border sm:h-[5rem] border-orange bg-secondary dark:bg-secondary border-opacity-40 bg-opacity-90  shadow-xl shadow-black/[0.03] backdrop-blur-[0.5rem]  sm:rounded-full"
        }
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/*  Logo  */}
        <div
          className={`flex gap-1 items-center justify-center flex-row ${montserrat.className}`}
        >
          <Link href={"#home"}>
            <Image
              className={"rounded-xl mix-blend-multiply bg-cover"}
              style={{ width: "auto", height: "auto" }}
              src={"/images/logo3.png"}
              alt={"Logo image for website"}
              width={60}
              height={60}
              priority={true}
            />
          </Link>
        </div>
        {/*  Nav Links for large devices  */}
        <div className={"hidden lg:block"}>
          <Navbar activeLink={activeSection} setActiveLink={setActiveSection} />
        </div>

        {/*  NavLinks for mobile */}
        <div className={"flex gap-3 items-center justify-center"}>
          <ThemeToggler />
          <div className={"lg:hidden"}>
            <MobileNavbar
              activeLink={activeSection}
              setActiveLink={setActiveSection}
            />
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
