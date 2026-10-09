import type { Metadata } from "next";
import "./globals.css";
import { openSans } from "@/ui/fonts";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ThemeProvider from "@/components/layout/theme-provider";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Ahmed Elgohary | Portfolio",
  description:
    "Explore the portfolio of Ahmed Elgohary, a skilled full-stack developer specializing in creating robust web applications with modern technologies like React, Next.js, Laravel, and more. Discover projects, skills, and expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={"!scroll-smooth"}>
      <body className={`${openSans.className} antialiased  relative`}>
        <ThemeProvider attribute={"class"} defaultTheme={"light"}>
          <Toaster position="top-right" reverseOrder={false} />
          {/* Background Shapes */}
          <div
            className={
              "bg-orange absolute top[-6rem] right-[0rem] rounded-full blur-[20rem] sm:w-[68.75] h-[31.25rem] sm:right-[11rem] sm:blur-[10rem]"
            }
          ></div>
          <div
            className={
              "bg-blue absolute top[-1rem] left-[-35rem] h-[31.25rem]  rounded-full blur-[20rem] sm:w-[68.75] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] sm:blur-[10rem]"
            }
          ></div>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
