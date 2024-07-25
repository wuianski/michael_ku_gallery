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

export default function Exhibitions({ useLang, artworks }) {
  return (
    <>
      <Box pb={2} sx={{ color: "#666" }}>
        {useLang ? "展覽" : "Exhibitions"}
      </Box>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 12, md: 12 }}>
        {artworks.map((a, index) => (
          <Grid item xs={6} md={6} key={index}>
            <Item>
              <>
                <Box
                  sx={{
                    backgroundColor: "none",
                    width: { xs: "100%", md: "100%" },
                    height: { xs: 100, md: 338 },
                    position: "relative",
                  }}
                >
                  <Image
                    priority={true}
                    src={a.img}
                    fill
                    alt="Picture of the artwork"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    sizes="50vw"
                  />
                </Box>
                <Box pt={2}>
                  {useLang ? (
                    <>
                      <Box sx={{ fontSize: 18, textAlign: "left" }}>
                        {a.title_tw}
                      </Box>
                      <Box sx={{ fontSize: 12, color: "#666" }}>
                        {a.begin_exhibition} - {a.end_exhibition}
                      </Box>
                    </>
                  ) : (
                    <>
                      <Box
                        sx={{
                          fontSize: 18,
                          textAlign: "left",
                          fontStyle: "italic",
                        }}
                      >
                        {a.title_en}
                      </Box>
                      <Box sx={{ fontSize: 12, color: "#666" }}>
                        {a.begin_exhibition} - {a.end_exhibition}
                      </Box>
                    </>
                  )}
                </Box>
              </>
            </Item>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
