"use client";

import { useState } from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({ youtubeId }) {
  const [isOpen, setIsOpen] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-2 right-2 rounded">
          <button
            onClick={handleVideoPlayer}
            className="text-primary float-right bg-secondary px-4 py-2"
          >
            X
          </button>
          <YouTube
            videoId={youtubeId}
            onReady={(e) => e.target.pauseVideo()}
            opts={option}
            onError={() => setErrorMsg("Tidak ada video trailer yang tersedia")}
          />
          {errorMsg && (
            <p className="text-xl text-primary bg-accent">{errorMsg}</p>
          )}
        </div>
      ) : (
        <button
          onClick={handleVideoPlayer}
          className="fixed w-32 bottom-6 right-5 rounded bg-primary shadow-xl text-dark text-xl hover:bg-accent"
        >
          Nonton Trailer{" "}
        </button>
      )}
    </>
  );
}
