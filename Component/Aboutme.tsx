"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import about from "../../public/assets/about.jpg";
import about2 from "../../public/assets/about2.jpg";
import { Button } from "@/Components/ui/button";

export default function Home() {
  const headRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headRef.current,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 2 }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { x: 10, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 2.3 }
    );
  }, []);

  return (
    <div>
      <div className="text-5xl text-gray-400 text-center font-bold mt-5">
        <h1>About ME</h1>
      </div>
      <div className="flex ">
        <div
          ref={headRef}
          className="w-[500px] h-[400px]  rounded-2xl text-white mb-40"
        >
          <div className="w-[300] h-[300] m-1 bg-black rounded-2xl ">
            <Image width={300} height={300} src={about} alt="image" />
          </div>
          <div className="w-[450px] h-[250px] m-1 border-7 border-black rounded-2xl text-gray-800">
            <p className="text-3xl font-semibold m-3 ">
              "Hey, I'm Abarna Rajan, a MERN stack developer passionate about
              crafting high-performance web applications with Next.js and
              TypeScript".
            </p>
          </div>
        </div>

        <div
          ref={contentRef}
          className="text-black w-[1000] h-[300] flex i rounded-2xl bg-black p-5 mt-40"
        >
          <div className="ml-10">
            <Image width={300} height={300} src={about2} alt="image" />
          </div>
          <div className="mt-10 text-white  bg-black rounded-2xl w-[700] font-bold text-2xl p-2">
            <p>
              Beyond coding, I love exploring new web technologies
              <br /> contributing to open-source projects,
              <br /> and constantly leveling up my skills.
            </p>
          </div>
          <div className="mt-30">
            <Button className="w-[150] rounded-2xl h-[50] p-3 m-20 bg-white">
              Know my skills !!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
