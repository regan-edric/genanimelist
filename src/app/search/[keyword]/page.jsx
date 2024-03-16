// Ini page setelah kita search suatu Anime

import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Home({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section className="p-4">
        <Header title={`Pencarian untuk ${decodedKeyword}...`} />
        <AnimeList props={searchAnime} />
      </section>
    </>
  );
}
