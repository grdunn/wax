import React from "react";
import { SECONDARY } from "./Svgs";

2;
function Spotify() {
  return (
    <div className="container flex items-center justify-center flex-row-reverse p-6 my-10">
      <div className="w-2/4 flex justify-center px-2">
        <SECONDARY />
      </div>
      <div className="w-2/4 px-2">
        <iframe
          style={{
            borderRadius: 12,
          }}
          src="//open.spotify.com/embed/playlist/379tEvo9O0ipMsT23ZEcex?utm_source=generator&theme=0"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Spotify;
