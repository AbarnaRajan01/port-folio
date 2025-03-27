"use client";
import React, { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";

const Page = () => {
  const splineRef = useRef(null);
  const headRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      splineRef.current,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 1 }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      headRef.current,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 2 }
    );
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Spline container with fixed height */}
      <div className="absolute inset-0 w-full h-full">
        <Spline scene="/spline/scene.splinecode" />
      </div>

      {/* Header Content */}
      <div ref={headRef} className="absolute top-10 left-10 text-black">
        <h1 className="text-7xl font-bold">
          I&apos;m <strong>Abarna Rajan</strong>
        </h1>
        <span className="text-4xl text-gray-500 mt-5">A Web Developer</span>
      </div>
    </div>
  );
};

export default Page;
