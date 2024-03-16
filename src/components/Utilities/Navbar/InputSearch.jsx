"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function InputSearch() {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (e) => {
    const keyword = searchRef.current.value;
    if (!keyword || keyword.trim() === "") return;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="py-1 px-1 md:px-2 w-full rounded"
          ref={searchRef}
          onKeyDown={handleSearch}
        />
        <button>
          <MagnifyingGlass
            size={24}
            weight="bold"
            className="absolute top-1 right-1.5"
            onClick={handleSearch}
          />
        </button>
      </div>
    </>
  );
}
