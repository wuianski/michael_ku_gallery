import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";

/* PhotoGallery */
import PhotoGalleryTW from "@/components/photo_gallery/PhotoGalleryTW";
import PhotoGalleryEN from "@/components/photo_gallery/PhotoGalleryEN";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
  width: "100%",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {},
}));

export default function Artworks({ useLang, artworks, col }) {
  // console.log(artworks);
  // const col = 4;
  return (
    <>
      <Box pb={2} sx={{ color: "#666" }}>
        {/* {useLang ? "作品" : "Artworks"} */}
        {useLang ? (
          <Box className="tw_font">作品</Box>
        ) : (
          <Box className="en_font">Artworks</Box>
        )}
      </Box>

      <Box sx={{ fontSize: 12 }}>
        {useLang ? (
          <PhotoGalleryTW photos={artworks} col={col} />
        ) : (
          <PhotoGalleryEN photos={artworks} col={col} />
        )}
      </Box>
    </>
  );
}
