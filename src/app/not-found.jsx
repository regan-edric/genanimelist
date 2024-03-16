// Ini bagian Page yang muncul jika route nya tidak ada

"use client";

import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="text-accent flex flex-col min-h-screen mx-auto justify-center items-center max-w-xl">
        <div className="flex justify-center items-center gap-2">
          <FileSearch size={32} />
          <h3 className="text-accent text-2xl font-bold">NOT FOUND</h3>
        </div>
        <button
          onClick={() => router.back()}
          className="text-primary hover:text-accent underline transition-all"
        >
          Kembali
        </button>
      </div>
    </>
  );
}
