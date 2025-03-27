"use client";
import { client } from "@/sanity/lib/client";
import { Resume } from "../interface";
import { useEffect, useState } from "react";

async function getResume(): Promise<Resume | null> {
  const query = `*[_type == "resume"][0] {
    "resumeUrl": resume.asset->url
  }`;

  const data: Resume | null = await client.fetch(query);
  return data;
}

export default function ResumeComponent() {
  const [resume, setResume] = useState<Resume | null>(null);

  useEffect(() => {
    async function fetchResume() {
      const data = await getResume();
      setResume(data);
    }
    fetchResume();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center ">
      {/* <h2 className="text-2xl font-semibold mb-4">My Resume</h2> */}
      {resume ? (
        <div className="flex flex-col items-center space-y-4">
          <iframe
            src={resume.resumeUrl}
            className="w-full max-w-3xl h-96 border border-gray-300 rounded-lg shadow-md mb-10.5"
          />
          <div className="flex gap-5 mb-6">
            <a
              href={resume.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-green-700 transition"
            >
              View Resume
            </a>
            {/* Download Resume */}
            <a
              href={resume.resumeUrl}
              download="Abarna_Rajan_Resume.pdf"
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Loading resume...</p>
      )}
    </div>
  );
}
