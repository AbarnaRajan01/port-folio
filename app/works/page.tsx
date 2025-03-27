"use client";
import React, { useEffect, useRef, useState } from "react";
import { projectCard } from "../interface";
import { Card } from "@/Components/ui/card";
import Image from "next/image";
import { Button } from "@/Components/ui/button";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import gsap from "gsap";
import { urlFor } from "@/sanity/lib/image";
// import { urlFor } from "@/sanity/image-url";

async function getData() {
  const query = `*[_type == "work"]{
    _id,
    image { asset -> { url } },
    title,
    "currentSlug": slug.current,
    description,
    stacks,
    github,
    liveDemo
  }`;
  return await client.fetch(query);
}

const Page = () => {
  const [data, setData] = useState<projectCard[]>([]);

  useEffect(() => {
    getData()
      .then((works) => setData(works))
      .catch(console.error);
  }, []);
  const workRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      workRef.current,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 1 }
    );
  }, []);

  return (
    <div className="min-h-screen  text-white py-10 px-5">
      {/* <h1 className="text-4xl font-semibold text-gray-300 text-center mb-8">
        These are <span className="text-white">My Works</span>
      </h1> */}

      <div
        ref={workRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {data.map((i, index) => (
          <Card
            key={i.currentSlug || index}
            className="p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-700"
          >
            {i.image && (
              <div className="relative w-full h-40 mb-4 overflow-hidden">
                <Image
                  width={400}
                  height={300}
                  src={urlFor(i.image).url()} // Use urlFor function here
                  alt={i.title || "image"}
                  className="object-cover rounded-2"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold text-gray-400">{i.title}</h3>
            <p className="text-gray-400 text-sm  font-bold text-2xl">
              Stack used : {i.stacks}
            </p>
            {i.liveDemo && (
              <a
                href={i.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-semibold text-gray-800 hover:text-black hover:underline mb-3"
              >
                View Live Demo
              </a>
            )}
            <div className="flex justify-between">
              {i.github && (
                <a
                  href={i.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium bg-gray-500 text-white rounded-lg hover:bg-black transition-colors"
                >
                  GitHub
                </a>
              )}
              <Button
                asChild
                className="hover:bg-white hover:text-black px-4 py-2 text-sm font-medium rounded-lg bg-gray-300 text-white transition"
              >
                <Link href={`/skills/${i.currentSlug}`}>Know more</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
