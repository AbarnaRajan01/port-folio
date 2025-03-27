"use client";
import { Button } from "@/Components/ui/button";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const AboutPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 3, ease: "power3.out", delay: 2 }
      );
    }
  }, []);

  return (
    <div>
      <div ref={aboutRef} className="  text-gray-300 p-5 text-center">
        <h1 className="mt-7 text-4xl font-bold text-gray-800">
          About <strong className="underline text-gray-400">ABARNA </strong>
        </h1>
        <h3 className="text-gray-500 text-2xl font-bold mt-4">Hey Folks!</h3>
        <h2 className="text-gray-800 mt-8 p-2 border-4 border-gray-400 w-[400px] mx-auto font-bold">
          MINIMALISTIC . SLEEK . CREATIVE
        </h2>

        <p className="text-gray-700 text-2xl p-5">
          I specialize in building scalable full-stack applications <br />
          focusing on backend efficiency and smooth frontend experiences <br />I
          particularly invested in TypeScript and backend development ensuring
          robust and maintainable codebases
        </p>

        <Button className="bg-black rounded-lg w-[200px] h-[50px] text-white mt-5 text-xl">
          <Link href="/about/skill">My Skills</Link>
        </Button>

        <p className="text-xl font-semibold text-gray-400 mt-5">
          Feel free to check out my skillset by clicking the "My Skills" button!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
