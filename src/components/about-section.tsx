"use client";
import React from "react";
import Image from "next/image";
import SectionContainer from "@/components/custom-ui/section-container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalTab from "@/components/personal-tab";
import QualificationTab from "@/components/qualification-tab";
import SkillsTab from "@/components/skills-tab";
import { motion } from "framer-motion";

const AboutSection = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <SectionContainer title={"About Me"} uniqueId={"about"}>
      <div
        className={
          "flex flex-col lg:flex-row items-start justify-between w-full gap-x-8 gap-y-7 sm:gap-y-5 p-4 sm:p-0 mt-6"
        }
      >
        <motion.div
          className={
            "w-full lg:w-1/2 mx-auto hidden lg:flex items-center justify-center relative p-2 z-[-100]"
          }
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Image
            className={"bg-cover rounded-3xl"}
            src={"/images/about-img.png"}
            alt={"About Image"}
            style={{ width: "auto", height: "auto" }}
            width={400}
            height={400}
          />
        </motion.div>
        <motion.div
          className={"w-full lg:w-1/2"}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="w-full grid grid-cols-3 xl:border xl:max-w-[520px] mx-auto dark:border-none">
              <TabsTrigger
                className={"w-auto md:w-[160px] text-sm md:text-base"}
                value="personal"
              >
                Personal Info
              </TabsTrigger>
              <TabsTrigger
                className={"w-auto md:w-[160px] text-sm md:text-base"}
                value="qualification"
              >
                Qualification
              </TabsTrigger>
              <TabsTrigger
                className={"w-auto md:w-[160px] text-sm md:text-base"}
                value="skills"
              >
                Skills
              </TabsTrigger>
            </TabsList>
            <div className={"text-lg mt-12 xl:mt-8"}>
              {/* Personal Tab */}
              <TabsContent value="personal">
                <PersonalTab />
              </TabsContent>
              {/* Qualification Tab */}
              <TabsContent value="qualification">
                <QualificationTab />
              </TabsContent>
              {/* Skills Tab */}
              <TabsContent value="skills">
                <SkillsTab />
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
