// Ini Komponen header untuk Anime di tampilan page pertama

"use client";

import Link from "next/link";

export default function Header({ title, linkHref, linkTitle }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl py-2 font-bold text-primary">{title}</h1>
        {linkHref && linkTitle ? (
          <Link
            href={linkHref}
            className="underline md:text-xl text-sm text-primary hover:text-accent transition-all       "
          >
            {linkTitle}
          </Link>
        ) : null}
      </div>
    </>
  );
}
