import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
/* Fonts */
import { Noto_Serif, Baskervville, Noto_Sans } from "next/font/google";
const noto_serif = Noto_Serif({ subsets: ["latin"] });
const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });
const noto_sans = Noto_Sans({ weight: "400", subsets: ["latin"] });
/* Framer Motion */
import { motion } from "framer-motion";
/* Components */
import B2E from "@/components/common/begin2endDate";
import ArtistsNameTW from "@/components/common/artistsNameTW";
import ArtistsNameEN from "@/components/common/artistsNameEN";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
  width: "100%",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {},
}));

export default function CurrentExhibitions({ useLang, exhibitions }) {
  // console.log(exhibitions);
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 12, md: 12 }}>
        {exhibitions.map((e, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Item>
              <Link href={`/exhibitions/${e.id}`}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Box sx={{ fontSize: 14, fontWeight: 400 }}>
                    {useLang ? (
                      <>
                        <Box
                          sx={{
                            backgroundColor: "none",
                            width: { xs: "100%", md: 340 },
                            height: { xs: 200, md: 255 },
                            position: "relative",
                            boxShadow:
                              "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
                          }}
                        >
                          <Image
                            priority={true}
                            src={`${process.env.DIRECTUS_URL}/assets/${e.cover.image.filename_disk}`}
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
                          sx={{ fontSize: { xs: 14, sm: 14 }, fontWeight: 500 }}
                          pb={1}
                          pt={2}
                        >
                          <ArtistsNameTW artists={e.artists} />
                        </Box>
                        <Box sx={{ fontSize: { xs: 18, sm: 18 } }}>
                          {e.title_tw}
                        </Box>
                        <B2E
                          begin={e.begin_exhibition}
                          end={e.end_exhibition}
                        />
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
                            src={`${process.env.DIRECTUS_URL}/assets/${e.cover.image.filename_disk}`}
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
                          sx={{ fontSize: 14, fontWeight: 500 }}
                          pb={1}
                          pt={2}
                        >
                          <ArtistsNameEN artists={e.artists} />
                        </Box>
                        <Box sx={{ fontSize: 18, fontStyle: "italic" }}>
                          {e.title_en}
                        </Box>
                        <B2E
                          begin={e.begin_exhibition}
                          end={e.end_exhibition}
                        />
                      </>
                    )}
                  </Box>
                </motion.div>
              </Link>
            </Item>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
