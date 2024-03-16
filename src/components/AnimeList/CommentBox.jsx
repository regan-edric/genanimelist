// Bagian untuk show atau display commentar di detail anime

import prisma from "@/libs/prisma";

export default async function CommentBox({ anime_mal_id }) {
  const comments = await prisma.comment.findMany({
    where: {
      anime_mal_id,
    },
  });
  return (
    <>
      <div className="grid grid-cols-4 gap-4 py-4">
        {comments.map((comment) => {
          return (
            <div key={comment.id} className="bg-primary p-2 text-dark">
              <p className="font-bold">{comment.username}</p>
              <p className="text-sm font-thin">{comment.comment}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
