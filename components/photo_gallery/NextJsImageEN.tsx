import Image from "next/image";
// react-photo-album
import type { RenderPhotoProps } from "react-photo-album";

interface Photo {
  title_en: string;
  index: number;
  // Add other properties here if needed
}

export default function NextJsImageEN({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps & { photo: Photo }) {
  return (
    <div
      style={{
        ...wrapperStyle,
        position: "relative",
      }}
      key={photo.index}
    >
      <Image
        priority={true}
        fill
        src={photo}
        quality={100}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className, onClick }}
      />
      <div
        style={{
          paddingTop: "8px",
          paddingBottom: "8px",
          overflow: "visible",
          //   whiteSpace: "nowrap",
          textAlign: "center",
          width: "100%",
          position: "absolute",
          //   bottom: "-40px",
          top: "100%",
          left: 0,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        {photo.title_en}
      </div>
    </div>
  );
}
