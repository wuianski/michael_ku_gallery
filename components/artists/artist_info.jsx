import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";
/* Fonts */
import { Noto_Serif, Baskervville, Noto_Sans } from "next/font/google";
const noto_serif = Noto_Serif({ subsets: ["latin"] });
const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });
const noto_sans = Noto_Sans({ weight: "400", subsets: ["latin"] });

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
  width: "100%",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {},
}));

export default function ArtistInfo({ useLang, artist }) {
  return (
    <>
      <Stack direction={{ xs: "column-reverse", sm: "row" }} spacing={10}>
        <Item sx={{ width: { xs: "100%", sm: "50%" } }}>
          {useLang ? (
            <>
              <Box
                sx={{
                  fontSize: { xs: 14, sm: 14 },
                  fontWeight: 500,
                }}
              >
                {artist.name_tw}
              </Box>
              <Box sx={{ fontSize: { xs: 14, sm: 14 } }} pt={2} pb={8}>
                {artist.content_tw}
              </Box>
              <Box sx={{ fontSize: 12, cursor: "pointer" }}>
                <Box pb={1}>下載簡歷</Box>
                <Box>個人網站</Box>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  fontSize: { xs: 14, sm: 14 },
                  fontWeight: 500,
                }}
              >
                {artist.name_en}
              </Box>
              <Box sx={{ fontSize: { xs: 14, sm: 14 } }} pt={2} pb={8}>
                {artist.content_en}
              </Box>
              <Box sx={{ fontSize: 12, cursor: "pointer" }}>
                <Box pb={1}>CV</Box>
                <Box>Website</Box>
              </Box>
            </>
          )}
        </Item>
        <Item sx={{ width: { xs: "100%", sm: "50%" } }}>
          <Box
            sx={{
              backgroundColor: "none",
              width: { xs: "100%", md: "100%" },
              height: { xs: 200, md: 255 },
              position: "relative",
            }}
          >
            <Image
              priority={true}
              src={artist.cover}
              fill
              alt="Picture of the artwork"
              style={{
                objectFit: "contain",
                objectPosition: "right",
              }}
              sizes="50vw"
            />
          </Box>
        </Item>
      </Stack>
    </>
  );
}
