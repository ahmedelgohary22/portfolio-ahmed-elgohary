"use client";
import React from "react";
import SectionContainer from "@/components/custom-ui/section-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AppWindow,
  CircleCheck,
  Database,
  Factory,
  Gem,
  ShieldBan,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    name: "Frontend Development",
    icon: <AppWindow size={72} strokeWidth={0.8} />,
    description:
      "Designing and developing highly interactive, visually appealing, and user-friendly interfaces using modern libraries like React, Vue.js, and Material UI. Expertise in responsive design ensures seamless user experiences across all devices, while focusing on performance optimization and accessibility standards (WCAG) to make applications inclusive and fast.",
  },
  {
    name: "Backend Development",
    icon: <Database size={72} strokeWidth={0.8} />,
    description:
      "Creating robust backend systems that handle business logic, data processing, and integration with third-party services. Proficient in building RESTful and GraphQL APIs using frameworks like Laravel and Node.js. Skilled in database modeling and management, ensuring data integrity, scalability, and high availability for applications.",
  },
  {
    name: "DevOps & Deployment",
    icon: <Gem size={72} strokeWidth={0.8} />,
    description:
      "Streamlining development and deployment processes with continuous integration/continuous deployment (CI/CD) pipelines. Expert in containerization technologies such as Docker and Kubernetes for scalable and efficient application deployment, and experienced in cloud platforms like AWS, Google Cloud, and Azure for hosting and resource management.",
  },
  {
    name: "System Design & Architecture",
    icon: <Factory size={72} strokeWidth={0.8} />,
    description:
      "Designing scalable and maintainable system architectures tailored to specific business requirements. Expertise in microservices, event-driven architecture, and serverless computing to ensure flexibility and resilience. Strong focus on system performance, fault tolerance, and cost optimization, enabling systems to handle growing user bases effectively.",
  },
  {
    name: "Quality Assurance",
    icon: <CircleCheck size={72} strokeWidth={0.8} />,
    description:
      "Implementing comprehensive testing strategies to ensure the reliability and quality of software applications. Proficient in writing unit, integration, and end-to-end tests using tools like Jest, Cypress, and Selenium. Experience in test-driven development (TDD) and behavior-driven development (BDD) methodologies to catch bugs early and deliver flawless products.",
  },
  {
    name: "Security",
    icon: <ShieldBan size={72} strokeWidth={0.8} />,
    description:
      "Securing applications against potential threats by implementing best practices such as encryption, secure authentication, and secure coding standards. Conducting regular security audits, penetration testing, and vulnerability assessments. Knowledgeable in OWASP guidelines to protect applications from SQL injection, XSS, CSRF, and other common vulnerabilities.",
  },
];

const ServicesSection = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <SectionContainer title={"Services"} uniqueId={"services"}>
      <motion.div
        className={
          "mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-y-12 gap-x-2 md:gap-x-4 -z-[100]"
        }
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {services.map((service, index) => (
          <Card
            key={index}
            className={
              "w-full max-w-[424px] h-[320px] sm:h-[350px] flex flex-col justify-start items-center relative pt-[110px]"
            }
          >
            <CardHeader
              className={
                "text-primary absolute -top-[45px] flex items-center justify-center"
              }
            >
              <div
                className={
                  "w-[140px] h-[80px] bg-white dark:bg-background flex items-center justify-center"
                }
              >
                {service.icon}
              </div>
              <CardTitle>{service.name}</CardTitle>
            </CardHeader>
            <CardContent
              className={
                "py-0 px-2 md:px-4 text-center text-foreground text-sm font-medium leading-relaxed tracking-wide"
              }
            >
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </SectionContainer>
  );
};

export default ServicesSection;
