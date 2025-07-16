import { useState } from "react";
// yet-another-react-lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import LightBoxNextJsImage from "@/components/photo_gallery/LightBoxNextJsImage";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import Image from "next/image";
import { Box } from "@mui/material";

export default function PhotoGalleryTW({ photos, col }) {
  //   console.log(photos);
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
  const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
  const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
  const myphotos = photos.map((photo, index) => ({
    // src: `${photo.img}`,
    src: `${process.env.DIRECTUS_URL}/assets/${photo.artworks_id.image.filename_disk}`,
    width: photo.artworks_id.image.width,
    height: photo.artworks_id.image.height,
    title_tw: `${photo.artworks_id.title_tw}`,
    description: photo.artworks_id.caption_tw
      ? `${photo.artworks_id.caption_tw.replace(/<[^>]+>/g, "")}`
      : null,
    index: index,
    // srcSet: breakpoints.map((breakpoint) => {
    //   const height = Math.round(
    //     (photo.artworks_id.image.height / photo.artworks_id.image.width) *
    //       breakpoint
    //   );
    //   return {
    //     // src: `${photo.img}`,
    //     src: `${process.env.DIRECTUS_URL}/assets/${photo.artworks_id.image.filename_disk}`,
    //     width: breakpoints,
    //     height,
    //     title_tw: `${photo.artworks_id.title_tw}`,
    //     index: index,
    //   };
    // }),

    /* with zoom plugin in Lightbox */
    srcSet: [...imageSizes, ...deviceSizes]
      .filter((size) => size <= photo.artworks_id.image.width)
      .map((size) => ({
        src: `${process.env.DIRECTUS_URL}/assets/${photo.artworks_id.image.filename_disk}`,
        width: size,
        height: Math.round(
          (photo.artworks_id.image.height / photo.artworks_id.image.width) *
            size
        ),
      })),
  }));
  // console.log(myphotos);

  const [index, setIndex] = useState(-1);

  const gridColumns =
    col === 2
      ? "repeat(2, 1fr)"
      : col === 4
      ? "repeat(4, 1fr)"
      : "repeat(2, 1fr)";

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: gridColumns },
          gap: { xs: "60px", md: "60px" },
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
              alt={photo.title_tw}
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
            />
            <div style={{ padding: "8px 0", textAlign: "center" }}>
              <div
                style={{ fontStyle: "normal", paddingTop: 20, color: "#666" }}
                className="tw_font"
              >
                {photo.title_tw}
              </div>
            </div>
          </div>
        ))}
      </Box>
      <Lightbox
        slides={myphotos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Zoom, Captions]}
        render={{ slide: LightBoxNextJsImage }}
        styles={{
          container: {
            backgroundColor: "rgba(255, 255, 255, 1)",
            letterSpacing: "0.88px",
            fontFamily: `serif`,
          },
          root: {
            "--yarl__slide_description_color": "rgba(0, 0, 0, .8)",
          },
        }}
      />
    </>
  );
}
