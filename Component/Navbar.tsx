"use client";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 1 }
    );
  }, []);
  return (
    <nav
      ref={navRef}
      className="flex items-center justify-between px-8 py-4 text-black"
    >
      <Link href="/">
        <Image src={logo} alt="Logo" width={100} height={50} priority />
      </Link>
      <div className="flex-grow flex justify-center gap-8 text-400 font-semibold  ">
        <Link href="/about">About me</Link>
        <Link href="/works">Works</Link>
        <Link href="/resume">Resume</Link>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
