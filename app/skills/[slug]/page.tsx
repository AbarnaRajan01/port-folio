import { newSkill } from "@/app/interface";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type=='skill' && slug.current==$slug][0]
  {
    "currentSlug":slug.current,
    name,
    image{
      asset->{
        _id,
        url
      }
    },
    content
  }`;

  const data = await client.fetch(query, { slug });
  return data;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data: newSkill | null = await getData(params.slug);
  console.log(data);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        <p className="text-xl font-semibold">Skill not found 😢</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center p-6">
        <div className="rounded-xl p-6 max-w-lg w-full">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            {data.name}
          </h1>
          {data.image?.asset?.url ? (
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                width={500}
                height={500}
                src={data.image.asset.url}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <p className="text-gray-400 text-center">No image available</p>
          )}
        </div>
        <div className="mt-16 prose-blue dark:prose-invert px-6">
          <PortableText value={data.content} />
        </div>
      </div>
    </div>
  );
}
