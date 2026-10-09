"use client";
import React from "react";
import { MailIcon } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import ContactForm from "@/components/contact-form";
import { motion } from "framer-motion";

const ContactSection = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <section className={"py-5 lg:py-8 scroll-mt-20"} id={"contact"}>
      <div className={"container mx-auto"}>
        {/* Text & Illustration */}
        <div
          className={
            "flex flex-col lg:flex-row gap-x-0 lg:gap-x-8 gap-y-6  justify-between items-center w-full"
          }
        >
          <motion.div
            className={
              "w-full lg:w-1/2 flex flex-col items-center justify-center lg:justify-start"
            }
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div
              className={
                "text-center lg:text-start flex flex-col items-center lg:items-start"
              }
            >
              <h3 className={"text-2xl lg:text-3xl font-bold tracking-wide"}>
                Let&apos;s chat. <br /> Tell me about your project.
              </h3>
              <p
                className={
                  "text-foreground mt-4 text-base lg:text-lg font-semibold "
                }
              >
                Let&apos;s creating your website together.✌️
              </p>
              <div
                className={
                  "mt-5 flex flex-col gap-y-2 lg:gap-y-4 text-sm md:text-base font-semibold text-muted-foreground"
                }
              >
                <div className={"flex items-center gap-x-4 lg:gap-x-8"}>
                  <MailIcon size={18} className={"text-primary"} />
                  <span>ahmed.elgohary.webdev@gmail.com</span>
                </div>
                <div className={"flex items-center gap-x-4 lg:gap-x-8"}>
                  <BsWhatsapp size={18} className={"text-primary"} />
                  <span>+20 0155 499 8128</span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Form */}
          <motion.div
            className={"w-full lg:w-1/2"}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
