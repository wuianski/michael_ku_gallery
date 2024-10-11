import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";

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
                sx={{ fontSize: { xs: 14, sm: 24 }, fontWeight: 500 }}
                className="tw_font w-400"
              >
                {artist.name_tw}
              </Box>
              <Box
                className="tw_font"
                sx={{ fontSize: { xs: 14, sm: 14 } }}
                pt={2}
                pb={8}
                dangerouslySetInnerHTML={{
                  __html: artist.bio_tw,
                }}
              ></Box>
              <Box className="tw_font" sx={{ fontSize: 12, cursor: "pointer" }}>
                {artist.cv_tw && (
                  <Box pb={1}>
                    <a
                      href={`${process.env.DIRECTUS_URL}/assets/${artist.cv_tw.filename_disk}`}
                      target="_blank"
                    >
                      下載簡歷
                    </a>
                  </Box>
                )}
                {artist.website && (
                  <Box>
                    <a href={`${artist.website}`} target="_blank">
                      個人網站
                    </a>
                  </Box>
                )}
              </Box>
            </>
          ) : (
            <>
              <Box
                className="en_font w-400"
                sx={{ fontSize: { xs: 14, sm: 24 }, fontWeight: 500 }}
              >
                {artist.name_en}
              </Box>
              <Box
                className="en_font"
                sx={{ fontSize: { xs: 14, sm: 14 } }}
                pt={2}
                pb={8}
                dangerouslySetInnerHTML={{
                  __html: artist.bio_en,
                }}
              ></Box>
              <Box className="en_font" sx={{ fontSize: 12, cursor: "pointer" }}>
                {artist.cv_en && (
                  <Box pb={1}>
                    <a
                      href={`${process.env.DIRECTUS_URL}/assets/${artist.cv_en.filename_disk}`}
                      target="_blank"
                    >
                      CV
                    </a>
                  </Box>
                )}
                {artist.website && (
                  <Box>
                    <a href={`${artist.website}`} target="_blank">
                      Website
                    </a>
                  </Box>
                )}
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
              src={`${process.env.DIRECTUS_URL}/assets/${artist.cover.image.filename_disk}`}
              fill
              alt="Picture of the artwork"
              style={{
                objectFit: "contain",
                objectPosition: "right",
              }}
              sizes="(max-width: 768px) 50vw,  25vw"
            />
          </Box>
        </Item>
      </Stack>
    </>
  );
}
