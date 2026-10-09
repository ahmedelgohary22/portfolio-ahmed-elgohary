import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { links } from "@/lib/data";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import Social from "@/components/social";
import { clsx } from "clsx";

const MobileNavbar = ({
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
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className={"cursor-pointer"} />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle></SheetTitle>
        <div className="flex flex-col items-center mt-8">
          {/*    Image  */}
          <div
            className={
              "flex flex-col gap-1 p-2 items-center justify-center bg-orange-light rounded-lg w-full"
            }
          >
            <Image
              className={"rounded-xl mix-blend-multiply bg-cover"}
              src={"/images/logo3.png"}
              alt={"Logo image for website"}
              width={120}
              height={120}
              priority={true}
            />
            <span className={"text-xl text-primary"}>Ahmed Elgohary</span>
          </div>
          <hr className={"h-[0.2rem] my-3 w-full bg-orange-light"} />
          {/*    Links   */}
          <ul
            className={
              "mt-5 w-full flex flex-col items-center text-center gap-3"
            }
          >
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.hash}
                onClick={() => setActiveLink(link.name)}
                className={clsx(
                  "w-full py-2 dark:hover:bg-orange-light hover:bg-primary hover:text-white hover:dark:text-orange rounded-xl transition duration-300 ease-in-out",
                  {
                    "dark:bg-orange-light bg-primary dark:text-orange font-semibold text-white":
                      link.name === activeLink,
                  },
                )}
              >
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
          <hr className={"h-[0.2rem] my-3 w-full bg-orange-light"} />
          <Social
            containerStyle={"flex gap-x-4 mt-5"}
            iconsStyle={
              "text-2xl hover:text-primary transition-all duration-200"
            }
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
