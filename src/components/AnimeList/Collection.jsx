// Komponen Button untuk Collection kita

"use client";

import React, { useState } from "react";

export default function Collection({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (e) => {
    e.preventDefault();

    const data = { anime_mal_id, user_email, anime_image, anime_title };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const collection = await response.json();
    console.log({ collection });
    if (collection.success === true) {
      setIsCreated(true);
      // setIsCreated(collection.isCreated);
    }
    return;
  };
  return (
    <>
      {isCreated ? (
        <p>Berhasil ditambahkan ke Collection</p>
      ) : (
        <button
          onClick={handleCollection}
          className="mt-4 py-1 px-2 text-lg bg-accent rounded text-dark hover:text-primary"
        >
          Add to Collection
        </button>
      )}
    </>
  );
}
