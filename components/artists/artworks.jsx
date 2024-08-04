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
  return (
    <>
      <Box pb={2} sx={{ color: "#666" }}>
        {useLang ? "作品" : "Artworks"}
      </Box>
      {/* <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 12, md: 12 }}>
        {artworks.map((a, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Item>
              <>
                <Box
                  sx={{
                    backgroundColor: "none",
                    width: { xs: "100%", md: "100%" },
                    height: { xs: 100, md: 168 },
                    position: "relative",
                  }}
                >
                  <Image
                    priority={true}
                    src={a.img}
                    fill
                    alt="Picture of the artwork"
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    sizes="50vw"
                  />
                </Box>
                <Box sx={{ fontSize: 14, fontWeight: 400 }} pt={2}>
                  {useLang ? (
                    <Box sx={{ textAlign: "center" }} pb={1}>
                      {a.title_tw}
                    </Box>
                  ) : (
                    <Box
                      sx={{ textAlign: "center", fontStyle: "italic" }}
                      pb={1}
                    >
                      {a.title_en}
                    </Box>
                  )}
                </Box>
              </>
            </Item>
          </Grid>
        ))}
      </Grid> */}
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
