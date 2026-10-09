const skillsData = [
  {
    type: "Frontend",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "JQuery",
      "React",
      "Next JS",
      "Redux Toolkit",
      "Tailwind CSS",
      "Sass",
      "Bootstrap",
      "Material UI",
      "Shade CN",
      "Git",
      "Github",
      "GitLab",
      "Axios",
      "React Query",
    ],
  },
  {
    type: "Backend",
    technologies: [
      "PHP",
      "Java",
      "JavaScript",
      "Laravel",
      "Node JS",
      "MySql",
      "MongoDB",
      "Git",
      "Github",
      "Gitlab",
      "Rest",
      "Restful API",
      "GraphQL",
    ],
  },
];

const SkillsTab = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className={"text-center lg:text-left"}>
      <h3
        className={
          "text-3xl lg:text-2xl font-semibold mb-8 text-center lg:text-left"
        }
      >
        Technologies and tools that I Use Everyday
      </h3>
      <div>
        <div className={"flex flex-col gap-y-6 mt-4"}>
          {skillsData.map((item, index) => {
            const { type, technologies } = item;
            return (
              <div key={index} className={""}>
                <h4 className="text-xl font-semibold mb-2 text-primary">
                  {type}
                </h4>
                <div className="border-b border-border mb-4"></div>
                <div
                  className={
                    "flex flex-wrap items-center justify-start gap-2 gap-x-0 md:gap-x-4 px-0"
                  }
                >
                  {technologies.map((item, index) => (
                    <div
                      className={
                        "px-3 lg:px-6 py-2 bg-secondary font-medium text-foreground rounded-full text-sm mx-1 cursor-pointer transition-all duration-500 hover:bg-primary hover:text-white hover:border hover:border-primary"
                      }
                      key={index}
                    >
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*  Tools */}
    </div>
  );
};

export default SkillsTab;
