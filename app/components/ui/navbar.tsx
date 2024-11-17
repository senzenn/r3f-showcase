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
  const [ActiveSection, setActiveSection] = useState<SectionId>(SectionId.Home);

  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, useGSAP);

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".nav-section");
    console.log(
      "Detected sections:",
      sections.map((section) => section.id),
    );

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 10%",
        onEnter: () => {
          console.log("Entered Section:", section.id);
          setActiveSection(section.id as SectionId);
        },
        onEnterBack: () => {
          console.log("Re-entered Section:", section.id);
          setActiveSection(section.id as SectionId);
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });

  useGSAP(() => {
    console.log("Active Section:", ActiveSection);

    const buttons = gsap.utils.toArray<HTMLButtonElement>(".nav-button");

    buttons.forEach((button) => {
      const isActive = button.dataset.sectionId === ActiveSection;

      gsap.to(button, {
        opacity: isActive ? 1 : 0.3,
        duration: 0.3,
        overwrite: true,
      });
    });
  }, [ActiveSection]);

  return (
    <>
      <nav className="left-10 fixed top-100">
        <Image src={Logo} alt="logo.png" />
        <div className="flex flex-col gap-4 text-white">
          {Object.values(SectionId).map((id) => (
            <button key={id} data-section-id={id} className="nav-button">
              {id}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
