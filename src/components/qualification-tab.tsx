import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experienceData = {
  title: "experience",
  data: [
    {
      company: "RouadTech Company",
      role: "Backend Engineer",
      years: "Apr, 2021 - Oct, 2021",
    },
    {
      company: "Altarek Company",
      role: "Full Stack Engineer",
      years: "Mar, 2022 - Aug, 2022",
    },
    {
      company: "Academic Service Company",
      role: "Full Stack Engineering",
      years: "Sep, 2022 - June, 2023",
    },
    {
      company: "RouadTech Company",
      role: "Backend Engineering",
      years: "Apr, 2023 - Oct, 2023",
    },
    {
      company: "Softify Company",
      role: "Full Stack Engineering",
      years: "Sep, 2023 - Apr, 2024",
    },
    {
      company: "Academic Service Company",
      role: "Full Stack Engineering",
      years: "Jun, 2024 - Until Now",
    },
  ],
};
const educationData = {
  title: "education",
  data: [
    {
      university: "Zagazig University",
      qualification: "Bachelor degree of Computer Science",
      years: "2017 - 2021",
    },
  ],
};
const QualificationTab = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div>
      <h3
        className={
          "text-2xl lg:text-xl font-semibold mb-8 text-center lg:text-left"
        }
      >
        My Personal Journey
      </h3>
      <div className={"grid md:grid-cols-2 gap-y-8 md:px-0 px-4"}>
        {/*  Experiences */}
        <div className={"flex flex-col gap-y-6"}>
          <div
            className={
              "flex gap-x-4 items-center text-base lg:text-xl text-primary"
            }
          >
            <Briefcase />
            <h4 className="capitalize font-semibold tracking-widest leading-10">
              {experienceData.title}
            </h4>
          </div>
          {/* List */}
          <div className={"flex flex-col gap-y-4"}>
            {experienceData?.data.map((item, index) => {
              const { company, role, years } = item;
              return (
                <div key={index} className={"flex gap-x-8 group items-center"}>
                  <div className={"h-[84px] w-[1px] bg-border relative ml-2"}>
                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                  </div>
                  <div className={"flex flex-col gap-y-1"}>
                    <div
                      className={
                        "font-semibold text-base lg:text-lg leading-none mb-2"
                      }
                    >
                      {company}
                    </div>
                    <span
                      className={
                        "leading-none text-sm lg:text-base text-muted-foreground mb-1"
                      }
                    >
                      {role}
                    </span>
                    <span className="text-sm text-primary font-medium">
                      {years}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/*  Educations */}
        <div className={"flex flex-col gap-y-6"}>
          <div
            className={
              "flex gap-x-4 items-center text-base lg:text-xl text-primary"
            }
          >
            <GraduationCap />
            <h4 className="capitalize font-semibold tracking-widest leading-10">
              {educationData.title}
            </h4>
          </div>
          {/* List */}
          <div className={"flex flex-col gap-y-8"}>
            {educationData.data.map((item, index) => {
              const { university, qualification, years } = item;
              return (
                <div key={index} className={"flex gap-x-8 group items-center"}>
                  <div className={"h-[84px] w-[1px] bg-border relative ml-2"}>
                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                  </div>
                  <div className={"flex flex-col gap-y-1"}>
                    <div
                      className={
                        "font-semibold text-base lg:text-lg leading-none mb-2"
                      }
                    >
                      {university}
                    </div>
                    <span
                      className={
                        "leading-none text-sm lg:text-base text-muted-foreground mb-1"
                      }
                    >
                      {qualification}
                    </span>
                    <span className="text-sm text-primary font-medium">
                      {years}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationTab;
