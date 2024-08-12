import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";
/* Fonts */
import { Noto_Serif, Baskervville, Noto_Sans } from "next/font/google";
const noto_serif = Noto_Serif({ subsets: ["latin"] });
const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });
const noto_sans = Noto_Sans({ weight: "400", subsets: ["latin"] });
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

export default function Artworks({ useLang, artworks }) {
  // console.log(artworks);
  return (
    <>
      <Box pb={2} sx={{ color: "#666" }}>
        {useLang ? "作品" : "Artworks"}
      </Box>

      <Box sx={{ fontSize: 12 }}>
        {useLang ? (
          <PhotoGalleryTW photos={artworks} />
        ) : (
          <PhotoGalleryEN photos={artworks} />
        )}
      </Box>
    </>
  );
}
