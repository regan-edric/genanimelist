// Ini komponen list anime untuk dishow di page pertama/awal

"use client";

import Image from "next/image";
import Link from "next/link";

export default function AnimeList({ props }) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-3 p-4 gap-4">
        {props.data?.map((data) => {
          return (
            <Link
              href={`/anime/${data.mal_id}`}
              className="cursor-pointer text-primary hover:text-accent transition-all"
            >
              <Image
                src={data.images.webp.image_url}
                alt="Kotak 1..."
                width={350}
                height={350}
                className=" w-full max-h-96 object-cover"
              />
              <h3 className="font-bold  md:text-xl text-sm py-2">
                {data.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </>
  );
}
