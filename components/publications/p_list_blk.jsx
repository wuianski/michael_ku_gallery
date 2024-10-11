import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
/* Framer Motion */
import { motion, useWillChange } from "framer-motion";
/* Component */
import ArtistsNameTW from "@/components/common/artistsNameTWNoLink";
import ArtistsNameEN from "@/components/common/artistsNameENNoLink";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
  width: "100%",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {},
}));

export default function PListBlock({ useLang, pub }) {
  const willChange = useWillChange();
  return (
    <Box sx={{ flexGrow: 1 }} mt={-10}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 12, md: 12 }}
        pl={{ xs: 0, md: 10 }}
      >
        {pub.map((p, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Item>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" }}
                style={{ willChange }}
              >
                <Link href={`/publications/${p.id}`} passHref>
                  <Box
                    p={{ xs: 2, sm: 2 }}
                    sx={{
                      fontSize: 14,
                      fontWeight: 400,
                    }}
                  >
                    {/* Desktop thumbnail */}
                    <Box
                      sx={{
                        backgroundColor: "none",
                        width: { xs: "100%", md: "100%" },
                        height: { xs: 200, md: 400 },
                        position: "relative",
                        display: { xs: "none", md: "block" },
                        boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
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
                        sizes="25vw"
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
                        sizes="70vw"
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
                      {useLang ? (
                        <ArtistsNameTW artists={p.artists} />
                      ) : (
                        <ArtistsNameEN artists={p.artists} />
                      )}
                    </Box>
                    <Box sx={{ fontSize: { xs: 18, sm: 18, fontWeight: 500 } }}>
                      {useLang ? (
                        <Box className="tw_font">{p.title_tw}</Box>
                      ) : (
                        <Box className="en_font" sx={{ fontStyle: "italic" }}>
                          {p.title_en}
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Link>
              </motion.div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
