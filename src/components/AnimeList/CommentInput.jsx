// Bagian handle untuk ngeposting komentar

"use client";

import { useRouter } from "next/navigation";
import { React, useState } from "react";

export default function CommentInput({
  anime_mal_id,
  user_email,
  username,
  anime_title,
}) {
  const [comment, setComment] = useState(null);
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handlePosting = async (e) => {
    e.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();
    console.log({ postComment });
    if (postComment.success === true) {
      setIsCreated(true);
      setComment("");
      router.refresh();
      // setIsCreated(collection.isCreated);
    }
    return;
  };

  return (
    <div className="flex flex-col gap-2">
      {isCreated && <p className="text-primary">Komentar terposting!</p>}
      <textarea
        className="w-full h-32 text-xl px-2 py-1"
        onChange={handleInput}
        value={comment}
      />
      <button
        className="w-52 bg-accent py-1 px-2 rounded"
        onClick={handlePosting}
      >
        Posting Komentar
      </button>
    </div>
  );
}
