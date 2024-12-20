"use client";

import TransparentHero from "./components/ui/hero-transparent";
import { Marquee } from "./components/ui/marquee";
import Navbar, { SectionId } from "./components/ui/navbar";
import OrbitExperience from "./components/ui/Orbot-Experience";

export default function Home() {
  return (
    <>
      <main className="bg-black w-full font-sans">
        <Navbar />
        <section
          id={SectionId.Home}
          className="h-[100vh] w-full border p-20 nav-section"
        >
          <TransparentHero />
          <Marquee />
          {/* <div> */}
          {/*   <h1 className="text-center text-9xl ">PAGE ONE </h1> */}
          {/* </div> */}
        </section>

        <section
          id={SectionId.About}
          className="  nav-section h-[100vh] w-full border p-20"
        >
          <h2 className="text-xl font-bold text-white">About </h2>
          <OrbitExperience />
        </section>

        <section
          id={SectionId.Service}
          className=" bg-blue-400 h-[100vh] w-full border p-20 nav-section"
        >
          <h2 className="text-xl font-bold text-white">Service </h2>
        </section>

        <section
          id={SectionId.Projects}
          className="h-[100vh] w-full border p-20 nav-section"
        >
          <h2 className="text-xl font-bold text-white">Projects </h2>
        </section>
      </main>
    </>
  );
}
