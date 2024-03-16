// Detail Anime

import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import Collection from "@/components/AnimeList/Collection";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

export default async function Page({ params: { id } }) {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: {
      user_email: user?.email,
      anime_mal_id: id,
    },
  });

  return (
    <>
      <div className="p-4 text-primary text-2xl">
        <h3>
          {anime.data.title} - {anime.data.year}
        </h3>
        {!collection && user && (
          <Collection
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div className="p-4 flex gap-4 text-primary overflow-x-auto">
        <div className="flex flex-col justify-center items-center rounded border px-2">
          <h3>PERINGKAT</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded border px-2">
          <h3>SCORE</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded border px-3">
          <h3>GENRE</h3>
          <p>{anime.data.genres[0].name}</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded border px-2">
          <h3>EPISODE</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded border px-2">
          <h3>STATUS</h3>
          <p>{anime.data.status}</p>
        </div>
      </div>
      <div className="p-4 flex sm:flex-nowrap flex-wrap justify-center gap-4">
        <Image
          className="object-cover w-full max-md:text-center"
          src={anime.data.images.webp.image_url}
          width={250}
          height={250}
          url={anime.data.images.jpg.image_url}
        />
        <p className="text-primary">{anime.data.synopsis}</p>
      </div>
      <div className="p-4">
        <h3 className="py-2 text-xl text-primary">Komentar Penonton</h3>
        <CommentBox anime_mal_id={id} />
        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
}
