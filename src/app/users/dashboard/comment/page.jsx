import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";

export default async function Page() {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: {
      user_email: user.email,
    },
  });
  return (
    <>
      <section className="p-4">
        <Header title={"My Comments"} />
        <div className="grid grid-cols-1 py-4 gap-4">
          {comments.map((comment) => {
            return (
              <Link
                href={`/anime/${comment.anime_mal_id}`}
                key={comment.id}
                className="bg-primary text-dark p-4"
              >
                <p className="font-bold">{comment.anime_title}</p>
                <p className="font-thin">{comment.comment}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
