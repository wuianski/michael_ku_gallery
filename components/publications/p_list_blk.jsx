import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
/* Framer Motion */
import { motion } from "framer-motion";
/* Component */
import ArtistsNameTW from "@/components/common/artistsNameTW";
import ArtistsNameEN from "@/components/common/artistsNameEN";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
  width: "100%",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {},
}));

export default function PListBlock({ useLang, pub }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 12, md: 12 }}
          pl={{ xs: 0, md: 10 }}
        >
          {pub.map((p, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Item>
                <Link href={`/publications/${p.id}`}>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Box
                      p={{ xs: 2, sm: 2 }}
                      sx={{
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      {useLang ? (
                        <>
                          {/* Desktop thumbnail */}
                          <Box
                            sx={{
                              backgroundColor: "none",
                              width: { xs: "100%", md: "100%" },
                              height: { xs: 200, md: 400 },
                              position: "relative",
                              display: { xs: "none", md: "block" },
                              boxShadow:
                                "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
                            }}
                          >
                            <Image
                              priority={true}
                              src={`${process.env.DIRECTUS_URL}/assets/${p.cover.image.filename_disk}`}
                              fill
                              alt="Picture of the artwork"
                              style={{
                                objectFit: "contain",
                                objectPosition: "bottom",
                              }}
                              sizes="50vw"
                            />
                          </Box>
                          {/* Mobile thumbnail */}
                          <Box
                            sx={{
                              backgroundColor: "none",
                              width: { xs: "100%" },
                              height: { xs: 200 },
                              position: "relative",
                              display: { xs: "block", md: "none" },
                            }}
                          >
                            <Image
                              priority={true}
                              src={`${process.env.DIRECTUS_URL}/assets/${p.cover.image.filename_disk}`}
                              fill
                              alt="Picture of the artwork"
                              style={{
                                objectFit: "contain",
                                objectPosition: "left",
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
                            <ArtistsNameTW artists={p.artists} />
                          </Box>
                          {/* <Box sx={{ fontSize: { xs: 18, sm: 18 } }}>
                          {p.title_tw}
                        </Box> */}
                        </>
                      ) : (
                        <>
                          {/* Desktop thumbnail */}
                          <Box
                            sx={{
                              backgroundColor: "none",
                              width: { xs: "100%", md: "100%" },
                              height: { xs: 200, md: 400 },
                              position: "relative",
                              display: { xs: "none", md: "block" },
                            }}
                          >
                            <Image
                              priority={true}
                              src={`${process.env.DIRECTUS_URL}/assets/${p.cover.image.filename_disk}`}
                              fill
                              alt="Picture of the artwork"
                              style={{
                                objectFit: "contain",
                                objectPosition: "bottom",
                              }}
                              sizes="50vw"
                            />
                          </Box>
                          {/* Mobile thumbnail */}
                          <Box
                            sx={{
                              backgroundColor: "none",
                              width: { xs: "100%" },
                              height: { xs: 200 },
                              position: "relative",
                              display: { xs: "block", md: "none" },
                            }}
                          >
                            <Image
                              priority={true}
                              src={`${process.env.DIRECTUS_URL}/assets/${p.cover.image.filename_disk}`}
                              fill
                              alt="Picture of the artwork"
                              style={{
                                objectFit: "contain",
                                objectPosition: "left",
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
                            <ArtistsNameEN artists={p.artists} />
                          </Box>
                          {/* <Box sx={{ fontStyle: "italic", fontSize: 18 }}>
                          {p.title_en}
                        </Box> */}
                        </>
                      )}
                    </Box>
                  </motion.div>
                </Link>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
