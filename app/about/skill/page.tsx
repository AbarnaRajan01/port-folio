"use client";
import { client } from "@/sanity/lib/client";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { skillCard } from "@/app/interface";
import { Card } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
async function getData() {
  const query = `*[_type=='skill'] | order(_createdAt asc){
    name,
    proficiency,
    image {
      asset->{
        _id,
        url
      }
    },
    "currentSlug": slug.current
  }`;

  return client.fetch(query);
}

export default function Skill() {
  const [data, setData] = useState<skillCard[]>([]);
  const skillRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      skillRef.current,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 1 }
    );
  }, []);
  useEffect(() => {
    getData().then((skills) => setData(skills));
  }, []);
  return (
    <div className="h-screen">
      <div
        ref={skillRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 ml-5 gap-10 "
      >
        {data.length > 0 ? (
          data.map((i, index) => (
            <Card
              key={i.currentSlug || index}
              className="bg-gray-300 p-5 rounded-2xl shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-black mb-3">{i.name}</h3>

              {i.image?.asset?.url ? (
                <div className="relative w-full h-40 mb-3">
                  <Image
                    width={500}
                    height={500}
                    src={i.image.asset.url}
                    alt={i.name}
                    className="w-full h-full object-cover rounded-lg "
                  />
                </div>
              ) : (
                <p className="text-gray-700">No image available</p>
              )}

              <p className="text-gray-700">
                {i.currentSlug || "No Slug Found"}
              </p>
              <p className="text-gray-700 flex">
                Proficiency:{" "}
                <span className="font-semibold">{i.proficiency}%</span>
              </p>

              <Button
                asChild
                className="w-full mt-3 bg-gradient-to-r from-black via-gray-400 to-white hover:from-gray-900 hover:via-gray-500 hover:to-gray-200 text-black-800"
              >
                <Link href={`/skills/${i.currentSlug}`}>Know more</Link>
              </Button>
            </Card>
          ))
        ) : (
          <p className="text-white text-center"></p>
        )}
      </div>
    </div>
  );
}
