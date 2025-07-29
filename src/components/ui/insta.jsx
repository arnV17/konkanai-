import { useEffect, useRef } from "react";
import Insta from "./insta";

export default function InstagramEmbed({ url }) {
  const ref = useRef(null);

  useEffect(() => {
    const scriptId = "instagram-embed-script";

    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else {
      // Script already exists, just re-process
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  }, [url]);

  return (
    <div ref={ref}>
      <blockquote
        className="instagram-media" 
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ width: "100%", maxWidth: 540, margin: "auto" }}
      ></blockquote>
    </div>
  );
}
