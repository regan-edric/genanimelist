// Ini dashboard bagian collection kita setelah kita click Komponen Collection Button

import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user.email,
    },
  });
  return (
    <>
      <section className="p-4">
        <Header title={"My Collection"} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 py-4 gap-2">
          {collection.map((collect, index) => {
            console.log(collect);
            return (
              <Link
                key={index}
                href={`/anime/${collect.anime_mal_id}`}
                className="relative"
              >
                <Image
                  className="w-full"
                  src={collect.anime_image}
                  width={350}
                  height={350}
                  alt="..."
                />
                <div className="w-full absolute flex items-center justify-center bottom-0 h-12 bg-accent">
                  <h3 className="text-xl text-center">{collect.anime_title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
