"use client";

import { ArrowSquareLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header({ title }) {
  const router = useRouter();

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <Link
          onClick={handleBack}
          href="/"
          className="text-primary hover:text-accent"
        >
          <ArrowSquareLeft size={32} />
        </Link>
        <h3 className="text-primary text-2xl py-4 text-center font-bold">
          {title}
        </h3>
        <div></div>
      </div>
    </>
  );
}
