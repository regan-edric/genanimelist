// Ini bagian dashboard profile setelah kita login

import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await authUserSession();

  return (
    <>
      <div className="flex flex-col justify-center items-center text-white">
        <Image className="p-4" width={250} height={250} src={user.image} />
        <div className="flex gap-4 p-4">
          <p>username: </p>
          <p>{user.name}</p>
        </div>
        <div className="p-4 gap-4 flex">
          <p>email: </p>
          <p>{user.email}</p>
        </div>
        <div className="p-4 flex flex-wrap gap-6">
          <Link
            href="/users/dashboard/collection"
            className="bg-accent text-dark text-xl px-4 py-2 font-bold hover:text-primary"
          >
            My Collection
          </Link>
          <Link
            href="/users/dashboard/comment"
            className="bg-accent text-dark text-xl px-4 py-2 font-bold hover:text-primary"
          >
            My Comment
          </Link>
        </div>
      </div>
    </>
  );
}
