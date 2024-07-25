import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
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

export default function CurrentExhibitions({ useLang, exhibitions }) {
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 12, md: 12 }}>
        <Grid item xs={12} md={4}>
          <Item>
            <Link href={`/exhibitions/${exhibitions.title_en}`}>
              <Box sx={{ fontSize: 14, fontWeight: 400 }}>
                {useLang ? (
                  <>
                    <Box
                      sx={{
                        backgroundColor: "none",
                        width: { xs: "100%", md: 340 },
                        height: { xs: 200, md: 255 },
                        position: "relative",
                      }}
                    >
                      <Image
                        priority={true}
                        src={exhibitions.img}
                        fill
                        alt="Picture of the artwork"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        sizes="50vw"
                      />
                    </Box>

                    <Box
                      sx={{
                        fontSize: { xs: 14, sm: 14 },
                        fontWeight: 500,
                      }}
                      pb={1}
                      pt={2}
                    >
                      {exhibitions.name_tw}
                    </Box>
                    <Box sx={{ fontSize: { xs: 18, sm: 18 } }}>
                      {exhibitions.title_tw}
                    </Box>
                    <Box sx={{ fontSize: 12, color: "#666" }}>
                      {exhibitions.begin_exhibition} -{" "}
                      {exhibitions.end_exhibition}
                    </Box>
                  </>
                ) : (
                  <>
                    <Box
                      sx={{
                        backgroundColor: "none",
                        width: { xs: "100%", md: 340 },
                        height: { xs: 200, md: 255 },
                        position: "relative",
                      }}
                    >
                      <Image
                        priority={true}
                        src={exhibitions.img}
                        fill
                        alt="Picture of the artwork"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        sizes="50vw"
                      />
                    </Box>

                    <Box
                      sx={{
                        fontSize: { xs: 14, sm: 14 },
                        fontWeight: 500,
                      }}
                      pb={1}
                      pt={2}
                    >
                      {exhibitions.name_en}
                    </Box>
                    <Box
                      sx={{
                        fontSize: { xs: 18, sm: 18 },
                        fontStyle: "italic",
                      }}
                    >
                      {exhibitions.title_en}
                    </Box>
                    <Box sx={{ fontSize: 12, color: "#666" }}>
                      {exhibitions.begin_exhibition} -{" "}
                      {exhibitions.end_exhibition}
                    </Box>
                  </>
                )}
              </Box>
            </Link>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}