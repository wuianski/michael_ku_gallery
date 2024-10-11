import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

/* Framer Motion */
import { motion, useWillChange } from "framer-motion";
/* Components */
import B2E from "@/components/common/begin2endDate";
import ArtistsNameTW from "@/components/common/artistsNameTWNoLink";
import ArtistsNameEN from "@/components/common/artistsNameENNoLink";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
  width: "100%",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {},
}));

export default function CurrentExhibitions({ useLang, exhibitions }) {
  // console.log(exhibitions);
  const willChange = useWillChange();
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 12, md: 12 }}>
        {exhibitions.map((e, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Item>
              <Link href={`/exhibitions/${e.id}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring" }}
                  style={{ willChange }}
                >
                  <Box sx={{ fontSize: 14, fontWeight: 400 }}>
                    <>
                      <Box
                        sx={{
                          backgroundColor: "none",
                          width: { xs: "100%", md: 340 },
                          height: { xs: 200, md: 255 },
                          position: "relative",
                          boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
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
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </Box>

                      <Box
                        sx={{ fontSize: { xs: 14, sm: 14 }, fontWeight: 600 }}
                        pb={1}
                        pt={2}
                      >
                        {useLang ? (
                          <ArtistsNameTW artists={e.artists} />
                        ) : (
                          <ArtistsNameEN artists={e.artists} />
                        )}
                      </Box>
                      <Box
                        sx={{ fontSize: { xs: 18, sm: 18 }, fontWeight: 600 }}
                      >
                        {useLang ? (
                          <Box className="tw_font">{e.title_tw}</Box>
                        ) : (
                          <Box className="en_font" sx={{ fontStyle: "italic" }}>
                            {e.title_en}
                          </Box>
                        )}
                      </Box>
                      <B2E begin={e.begin_exhibition} end={e.end_exhibition} />
                    </>
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
