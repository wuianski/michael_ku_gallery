import { useState } from "react";
// react-photo-album
import {
  PhotoAlbum,
  RenderContainer,
  RenderPhoto,
  RenderRowContainer,
} from "react-photo-album";
import NextJsImageEN from "@/components/photo_gallery/NextJsImageEN";
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

export default function PhotoGalleryEN({ photos }) {
  //   console.log(photos);
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
  const myphotos = photos.map((photo, index) => ({
    src: `${photo.img}`,
    width: photo.width,
    height: photo.height,
    title_en: `${photo.title_en}`,
    description: `${photo.caption_en}`,
    index: index,
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: `${photo.img}`,
        width: breakpoints,
        height,
        title_en: `${photo.title_en}`,
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
        renderPhoto={NextJsImageEN}
        renderContainer={renderContainer}
        renderRowContainer={renderRowContainer}
        defaultContainerWidth={1200}
        sizes={{
          size: "calc(100vw - 40px)",
          sizes: [
            { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
            { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
            { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
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
      />
    </>
  );
}
