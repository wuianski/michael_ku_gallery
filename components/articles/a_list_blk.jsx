import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Link from "next/link";
/* Framer Motion */
import { motion, useWillChange } from "framer-motion";
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

export default function AListBlock({ useLang, articles }) {
  const willChange = useWillChange();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 12, md: 12 }}
          pl={{ xs: 0, md: 10 }}
        >
          {articles.map((a, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Item>
                <Link href={`/articles/${a.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring" }}
                    style={{ willChange }}
                  >
                    <Box
                      p={{ xs: 1.4, sm: 2 }}
                      sx={{ fontSize: 14, fontWeight: 400 }}
                    >
                      {useLang ? (
                        <>
                          <Box>
                            <ArtistsNameTW artists={a.artists} />
                            {a.artists.length === 0 ? (
                              <Box className="tw_font" sx={{ fontWeight: 600 }}>
                                谷公館
                              </Box>
                            ) : (
                              <></>
                            )}
                          </Box>
                          <Box
                            sx={{ fontWeight: 600 }}
                            pb={1}
                            className="tw_font"
                          >
                            {a.title_tw}
                          </Box>
                          <Box sx={{ fontSize: 12, color: "#666" }}>
                            <Box>{new Date(a.date).toLocaleDateString()}</Box>
                            <Box className="tw_font">詳情</Box>
                          </Box>
                        </>
                      ) : (
                        <>
                          <Box>
                            <ArtistsNameEN artists={a.artists} />
                            {a.artists.length === 0 ? (
                              <Box className="en_font" sx={{ fontWeight: 600 }}>
                                Michael Ku Gallery
                              </Box>
                            ) : (
                              <></>
                            )}
                          </Box>
                          <Box
                            sx={{ fontWeight: 600 }}
                            pb={1}
                            className="en_font"
                          >
                            {a.title_en}
                          </Box>
                          <Box sx={{ fontSize: 12, color: "#666" }}>
                            <Box>{new Date(a.date).toLocaleDateString()}</Box>
                            <Box className="en_font">More</Box>
                          </Box>
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
