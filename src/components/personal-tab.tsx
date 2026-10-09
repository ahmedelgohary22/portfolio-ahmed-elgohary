import React from "react";
import {
  Calendar,
  GraduationCap,
  House,
  Mail,
  PhoneCall,
  User,
} from "lucide-react";

const infoData = [
  {
    icon: <User size={20} />,
    text: "Ahmed Elgohary",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+20 0155 499 8128",
  },
  {
    icon: <Mail size={20} />,
    text: "ahmed.elgohary.webdev@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born in 1 Jun, 1999",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor's Degree in Computer Science",
  },
  {
    icon: <House size={20} />,
    text: "M.F Street, Zefta, Elgharbia, Egypt",
  },
];

const PersonalTab = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className={"text-center lg:text-start"}>
      <h3 className="text-2xl lg:text-xl mb-4 font-semibold text-foreground">
        Full Stack Developer with 3 years of hands-on experience, I have
        developed a strong proficiency in both front-end and back-end
        development.
      </h3>
      <p className="text-muted-foreground text-sm lg:text-lg tracking-wide">
        I am adept at using modern technologies and methodologies to deliver
        seamless and user-friendly solutions. My collaborative approach and
        commitment to continuous learning ensure that I consistently contribute
        to innovative and efficient development processes. I am eager to bring
        my technical expertise and creative problem-solving skills to a
        forward-thinking team where I can drive impactful projects and further
        hone my craft.
      </p>
      {/* Icons */}
      <div
        className={
          "grid xl:grid-cols-2 justify-items-center xl:justify-items-start gap-y-4 mb-5 mt-4"
        }
      >
        {infoData.map((item, index) => (
          <div
            className={"flex items-center xl:items-start gap-x-4 xl:mx-0"}
            key={index}
          >
            <div className={"text-primary"}>{item.icon}</div>
            <div className={"text-sm text-foreground font-medium"}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
      {/* Languages */}
      <div className={"flex flex-col gap-y-2"}>
        <div className={"text-primary font-semibold"}>Language Skill</div>
        <div className={"border-b border-border"}></div>
        <div>Arabic: Native </div>
        <div>English: Fluent</div>
      </div>
    </div>
  );
};

export default PersonalTab;
