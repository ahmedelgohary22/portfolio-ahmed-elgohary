import React from "react";
import Social from "@/components/social";

const Footer = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <footer className={"bg-secondary py-12"}>
      <div className={"container mx-auto"}>
        <div className={"flex flex-col justify-between items-center"}>
          <h3
            className={
              "text-2xl md:text-3xl font-semibold mb-4 text-foreground"
            }
          >
            Ahmed Elgohary Profile
          </h3>
          {/*    Socials */}
          <Social
            containerStyle={"flex gap-x-6 mx-auto xl:mx-0 mb-4"}
            iconsStyle={
              "text-primary text-[20px] hover:text-black dark:hover:text-white"
            }
          />
          {/*    Copyright  */}
          <div className={"text-muted-foreground font-semibold"}>
            Copyright &copy; Ahmed Elgohary. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
