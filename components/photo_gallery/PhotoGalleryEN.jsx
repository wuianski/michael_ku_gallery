import { useState } from "react";
// yet-another-react-lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import LightBoxNextJsImage from "@/components/photo_gallery/LightBoxNextJsImage";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import Image from "next/image";
import { Box } from "@mui/material";

export default function PhotoGalleryEN({ photos }) {
  //   console.log(photos);
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
  const myphotos = photos.map((photo, index) => ({
    src: `${process.env.DIRECTUS_URL}/assets/${photo.artworks_id.image.filename_disk}`,
    width: photo.artworks_id.image.width,
    height: photo.artworks_id.image.height,
    title_en: `${photo.artworks_id.title_en}`,
    description: photo.artworks_id.caption_en
      ? `${photo.artworks_id.caption_en.replace(/<[^>]+>/g, "")}`
      : null,
    index: index,
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round(
        (photo.artworks_id.image.height / photo.artworks_id.image.width) *
          breakpoint
      );
      return {
        src: `${process.env.DIRECTUS_URL}/assets/${photo.artworks_id.image.filename_disk}`,
        width: breakpoints,
        height,
        title_en: `${photo.artworks_id.title_en}`,
        index: index,
      };
    }),
  }));
  //   console.log(myphotos);

  const [index, setIndex] = useState(-1);

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }, // default to 2 columns (mobile)
          gap: "30px",
        }}
      >
        {myphotos.map((photo, idx) => (
          <div
            key={photo.src + idx}
            style={{
              cursor: "pointer",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={() => setIndex(idx)}
          >
            <Image
              src={photo.src}
              alt={photo.title_en}
              width={photo.width}
              height={photo.height}
              style={{
                width: "100%",
                height: "200px",
                display: "block",
                objectFit: "contain",
                aspectRatio: `${photo.width} / ${photo.height}`,
                maxHeight: "200px",
              }}
              placeholder="blur"
              blurDataURL={photo.srcSet[6].src}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              // loading="lazy"
            />
            <div style={{ padding: "8px 0", textAlign: "center" }}>
              <div style={{ fontWeight: "normal" }}>{photo.title_en}</div>
            </div>
          </div>
        ))}
      </Box>

      <Lightbox
        slides={myphotos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Captions]}
        render={{ slide: LightBoxNextJsImage }}
        styles={{ container: { backgroundColor: "rgba(255, 255, 255, 1)" } }}
        className="en_font"
      />
    </>
  );
}
