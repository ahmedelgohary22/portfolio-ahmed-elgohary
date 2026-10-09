import React from "react";
import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiLinkedinFill,
  RiWhatsappFill,
} from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    path: "https://github.com/Ahmed-Elgohary-WebDevEng",
    name: <RiGithubFill size={25} />,
  },
  {
    path: "http://www.linkedin.com/in/ahmed-elgohary-eng",
    name: <RiLinkedinFill size={25} />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100007524735771",
    name: <RiFacebookBoxFill size={25} />,
  },
  {
    path: "https://wa.me/201554998128",
    name: <RiWhatsappFill size={25} />,
  },
];

const Social = ({
  containerStyle,
  iconsStyle,
}: {
  containerStyle: string;
  iconsStyle: string;
}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className={`${containerStyle}`}>
      {icons.map((icon, index) => (
        <Link
          href={icon.path}
          key={index}
          className={"p-1.5 hover:scale-125 rounded-full bg-secondary"}
          target={"_blank"}
        >
          <div className={`${iconsStyle}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Social;
