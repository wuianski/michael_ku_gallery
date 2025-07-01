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

export default function CurrentExhibitionFront({ useLang, exhibitions }) {
  // console.log(exhibitions);
  const willChange = useWillChange();
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 0 }}
        columns={{ xs: 12, md: 12 }}
        // direction="row"
        justifyContent="center"
      >
        {exhibitions.map((e, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Item>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" }}
                style={{ willChange }}
              >
                <Box sx={{ fontSize: 14, fontWeight: 400 }}>
                  <Link href={`/exhibitions/${e.id}`}>
                    <Box>
                      <Box
                        sx={{
                          backgroundColor: "none",
                          width: { xs: "100%", md: "100% " },
                          maxWidth: { xs: "unset", md: "500px " },
                          marginLeft: "auto",
                          marginRight: "auto",
                          height: { xs: 245, md: 400 },
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
                        sx={{
                          width: {
                            xs: "unset",
                            md: "500px ",
                          },
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      >
                        <Box
                          sx={{ fontSize: { xs: 14, sm: 14 }, fontWeight: 500 }}
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
                          sx={{ fontSize: { xs: 18, sm: 18 }, fontWeight: 500 }}
                          pb={0.5}
                        >
                          {useLang ? (
                            <Box className="tw_font">{e.title_tw}</Box>
                          ) : (
                            <Box
                              className="en_font"
                              sx={{ fontStyle: "italic" }}
                            >
                              {e.title_en}
                            </Box>
                          )}
                        </Box>
                        <B2E
                          begin={e.begin_exhibition}
                          end={e.end_exhibition}
                        />
                      </Box>
                    </Box>
                  </Link>
                </Box>
              </motion.div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
