import { useState } from "react";
// react-photo-album
import {
  PhotoAlbum,
  RenderContainer,
  RenderPhoto,
  RenderRowContainer,
} from "react-photo-album";
import NextJsImageTW from "@/components/photo_gallery/NextJsImageTW";
// yet-another-react-lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import LightBoxNextJsImage from "@/components/photo_gallery/LightBoxNextJsImage";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import Image from "next/image";

const renderContainer = ({ containerProps, children, containerRef }) => (
  <div ref={containerRef} {...containerProps}>
    {children}
  </div>
);

const renderRowContainer = ({
  rowContainerProps,
  rowIndex,
  rowsCount,
  children,
}) => (
  <div>
    <div {...rowContainerProps}>{children}</div>
    {rowIndex < rowsCount - 1 && <div style={{ marginBottom: "40px" }} />}
  </div>
);

export default function PhotoGalleryTW({ photos }) {
  //   console.log(photos);
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
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
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round(
        (photo.artworks_id.image.height / photo.artworks_id.image.width) *
          breakpoint
      );
      return {
        // src: `${photo.img}`,
        src: `${process.env.DIRECTUS_URL}/assets/${photo.artworks_id.image.filename_disk}`,
        width: breakpoints,
        height,
        title_tw: `${photo.artworks_id.title_tw}`,
        index: index,
      };
    }),
  }));
  // console.log(myphotos);

  const [index, setIndex] = useState(-1);

  const gridStyle = {
    minHeight: "100vh", // Example height for the grid
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Example grid layout
    gap: "30px",
    // padding: "20px",
  };

  return (
    <>
      <div style={gridStyle}>
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
              // loading="lazy"
            />
            <div style={{ padding: "8px 0", textAlign: "center" }}>
              <div style={{ fontWeight: "normal" }}>{photo.title_tw}</div>
            </div>
          </div>
        ))}
      </div>
      <Lightbox
        slides={myphotos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions]}
        render={{ slide: LightBoxNextJsImage }}
        styles={{ container: { backgroundColor: "rgba(255, 255, 255, 1)" } }}
        className="tw_font"
      />
    </>
  );
}
