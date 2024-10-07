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
    description: `${photo.artworks_id.caption_tw}`,
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
  //   console.log(myphotos);

  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        photos={myphotos}
        layout="rows"
        spacing={50}
        padding={20}
        targetRowHeight={200}
        renderPhoto={NextJsImageTW}
        renderContainer={renderContainer}
        renderRowContainer={renderRowContainer}
        defaultContainerWidth={1200}
        sizes={{
          size: "33vw",
          sizes: [
            // { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
            { viewport: "(max-width: 768px)", size: "calc(100vw - 20px)" },
            { viewport: "(max-width: 1200px)", size: "calc(50vw - 30px)" },
          ],
        }}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        slides={myphotos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Captions]}
        render={{ slide: LightBoxNextJsImage }}
        styles={{ container: { backgroundColor: "rgba(255, 255, 255, 1)" } }}
        className="tw_font"
      />
    </>
  );
}
