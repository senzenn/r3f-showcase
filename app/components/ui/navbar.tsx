import Image from "next/image";
import Logo from "@/public/Logowhite.svg";

import { useGSAP } from "@gsap/react";

import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useState } from "react";

export enum SectionId {
  Home = "home",
  About = "about",
  Service = "service",
  Projects = "projects",
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Home);

  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, useGSAP);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".nav-section") as HTMLElement[];
      console.log(sections);
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top  center",
          end: "bottom center ",
          onEnter: () => {
            console.log("Entered ", section.id);
            setActiveSection(section.id as SectionId);
          },
          onEnterBack: () => {
            console.log("On Leave", section.id);

            setActiveSection(section.id as SectionId);
          },
        });
      });
    },
    { dependencies: [] },
  );

  return (
    <>
      <nav className="left-10 fixed top-10">
        <Image src={Logo} alt="logo.png" />
        <div className="flex flex-col gap-4 text-white">
          {Object.values(SectionId).map((id) => (
            <button key={id}> {id}</button>
          ))}
        </div>
      </nav>
    </>
  );
}
