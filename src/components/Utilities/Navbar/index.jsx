import Link from "next/link";
import InputSearch from "./InputSearch";
import UserAction from "./UserAction";

export default function Navbar() {
  return (
    <>
      <header className="bg-accent">
        <div className="flex flex-col md:flex-row justify-between md:items-center py-2 px-4 gap-2">
          <Link href="/" className="font-bold md:text-xl text-black">
            GenAnimeList
          </Link>
          <div className="flex items-center gap-4">
            <InputSearch />
            <UserAction />
          </div>
        </div>
      </header>
    </>
  );
}
