import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

export default async function Home() {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  // );
  // const topAnime = await response.json();

  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recommendAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendAnime = reproduce(recommendAnime, 5);

  // function rekomendasi reload berubah terus
  // function shuffleArray(array) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // }

  // recommendAnime = { data: shuffleArray(recommendAnime).slice(0, 5) };
  // console.log(recommendAnime);

  return (
    <>
      {/* Anime Populer */}
      <section className="p-4">
        <Header
          title={"Paling Populer"}
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <AnimeList props={topAnime} />

        {/* Contoh passing beberapa data */}
        {/* <div className="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-3 py-2 gap-4">
          {topAnime.data.map((data) => {
            return (
              <div>
                <AnimeList
                  key={data.mal_id}
                  title={data.title}
                  images={data.images.webp.image_url}
                />
              </div>
            );
          })}
        </div> */}
      </section>

      {/* Anime Rekomendasi */}
      <section className="p-4">
        <Header
          title={"Paling Rekomendasi"}
          linkHref="/rekomendasi"
          linkTitle="Ikuti sekarang"
        />
        <AnimeList props={recommendAnime} />
      </section>
    </>
  );
}
