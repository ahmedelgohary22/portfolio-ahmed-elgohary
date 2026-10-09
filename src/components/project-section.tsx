"use client";
import SectionContainer from "@/components/custom-ui/section-container";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import ProjectCard from "@/components/project-card";
import { projectData } from "@/lib/data";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProjectSection = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <SectionContainer title={"My Projects"} uniqueId={"projects"}>
      <div
        className={
          "flex flex-col lg:flex-row items-center justify-between w-full gap-x-8 gap-y-7 sm:gap-y-5 p-4 sm:p-0 mt-6"
        }
      >
        <motion.div
          className={
            "w-full order1 lg:order-2 lg:w-2/5 mx-auto hidden lg:flex items-center justify-center relative p-2 z-[-100]"
          }
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Image
            className={"bg-cover rounded-3xl mix-blend-multiply"}
            src={"/images/project-7.svg"}
            alt={"About Image"}
            style={{ width: "auto", height: "auto" }}
            width={400}
            height={300}
            priority={true}
          />
        </motion.div>
        <motion.div
          className={
            "grid grid-cols-1 order-2 lg:order-1  place-items-center w-full lg:w-3/5 gap-y-12 gap-x-2 md:gap-x-4 z-0"
          }
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div
            className={
              "w-full h-[580px] flex items-center justify-center px-6 md:px-0"
            }
          >
            <Swiper
              className={"h-[600px] flex items-center justify-center mx-auto"}
              modules={[Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                1024: { slidesPerView: 1, spaceBetween: 20 },
                1280: { slidesPerView: 2, spaceBetween: 20 },
              }}
            >
              {projectData.map((project, index) => (
                <SwiperSlide
                  key={index}
                  className={"flex items-center justify-around"}
                >
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default ProjectSection;
