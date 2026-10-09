"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "@/lib/data";
import { clsx } from "clsx";

const Navbar = ({
  activeLink,
  setActiveLink,
}: {
  activeLink: string;
  setActiveLink: React.Dispatch<
    React.SetStateAction<"Home" | "About" | "Projects" | "Services" | "Contact">
  >;
}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <ul className={"flex items-center justify-between gap-5 font-medium"}>
        {links.map((link, index) => (
          <li key={index} className={"h-3/4 flex items-center justify-center"}>
            <Link
              className={clsx(
                "flex w-full items-center justify-center p-2 px-3 hover:text-primary hover:bg-primary-foreground rounded-full transition",
                {
                  "text-primary bg-primary-foreground":
                    link.name === activeLink,
                },
              )}
              href={link.hash}
              onClick={() => setActiveLink(link.name)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
