"use client";

import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/Navbar";
import { ScrollVelocity } from "@/components/ScrollVelocity";
import "@/css/style.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full">
        <section
          id="hero"
          className="bg-[#F1BA88] w-full h-screen overflow-x-hidden flex items-center justify-center"
        >
          <ScrollVelocity
            texts={[
              "Kepuasan dan kepercayaan pelanggan adalah prioritas utama kami",
              "Serta meningkatan muttu dan kualitas adalah tanggung jawab kami",
            ]}
            velocity={100}
            className="custom-scroll-text text-[#FEF3E2]"
          />
        </section>
        <section
          id="about"
          className="bg-[#FFF2E0] w-full min-h-screen py-18 px-2 flex items-center justify-center"
        >
          <AboutSection />
        </section>
        <section
          id="servies"
          className="bg-[#FFF2E0] w-full min-h-screen py-18 flex items-center justify-center"
        ></section>
      </div>
    </>
  );
}
