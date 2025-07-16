import { Box, Paper, Stack, styled, Grid } from "@mui/material";
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
          {articles.map((article, index) => {
            /* !!!Show if useLang is true, or if useLang is false and writer_en exists */
            if (useLang || (!useLang && article.writer_en)) {
              return (
                <Grid item xs={12} md={6} key={index}>
                  <Item>
                    <Link href={`/articles/${article.id}`}>
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
                              <Box
                                sx={{ fontWeight: 500 }}
                                pb={1}
                                className="tw_font"
                              >
                                {article.title_tw}
                              </Box>

                              <Box
                                sx={{ fontSize: 12, fontWeight: 500 }}
                                pb={1}
                                className="tw_font"
                              >
                                文 / {article.writer_tw}
                              </Box>

                              <Box sx={{ fontSize: 12, color: "#666" }}>
                                <Box>
                                  {(() => {
                                    const date = new Date(article.date);
                                    return `${date.getFullYear()}年${
                                      date.getMonth() + 1
                                    }月`;
                                  })()}
                                </Box>
                                <Box className="tw_font">詳情</Box>
                              </Box>

                              <Box
                                sx={{
                                  fontSize: { xs: 12, sm: 14 },
                                  fontWeight: 500,
                                }}
                                pt={1}
                              >
                                <ArtistsNameTW artists={article.artists} />
                                {article.artists.length === 0 ? (
                                  <Box
                                    className="tw_font"
                                    sx={{ fontWeight: 500 }}
                                  >
                                    谷公館
                                  </Box>
                                ) : null}
                              </Box>
                            </>
                          ) : (
                            <>
                              <Box
                                sx={{ fontWeight: 500 }}
                                pb={1}
                                className="en_font"
                              >
                                {article.title_en}
                              </Box>

                              <Box
                                sx={{ fontSize: 12, fontWeight: 500 }}
                                pb={1}
                                className="en_font"
                              >
                                by {article.writer_en}
                              </Box>

                              <Box sx={{ fontSize: 12, color: "#666" }}>
                                <Box>
                                  {(() => {
                                    const date = new Date(article.date);
                                    return `${date.getFullYear()}年${
                                      date.getMonth() + 1
                                    }月`;
                                  })()}
                                </Box>
                                <Box className="en_font">More</Box>
                              </Box>

                              <Box
                                sx={{
                                  fontSize: { xs: 12, sm: 14 },
                                  fontWeight: 500,
                                }}
                                pt={1}
                              >
                                <ArtistsNameEN artists={article.artists} />
                                {article.artists.length === 0 ? (
                                  <Box
                                    className="en_font"
                                    sx={{ fontWeight: 500 }}
                                  >
                                    Michael Ku Gallery
                                  </Box>
                                ) : null}
                              </Box>
                            </>
                          )}
                        </Box>
                      </motion.div>
                    </Link>
                  </Item>
                </Grid>
              );
            }
            return null;
          })}
        </Grid>
      </Box>
    </>
  );
}
