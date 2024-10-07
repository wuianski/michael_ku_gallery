import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Link from "next/link";
/* Framer Motion */
import { motion } from "framer-motion";
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

export default function NListBlock({ useLang, news }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 12, md: 12 }}
          pl={{ xs: 0, md: 10 }}
        >
          {news.map((n, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Item>
                <Link href={`/news/${n.id}`}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Box
                      p={{ xs: 1.4, sm: 2 }}
                      sx={{
                        fontSize: 14,
                        fontWeight: 400,
                        // boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
                      }}
                    >
                      {useLang ? (
                        <>
                          <Box
                            sx={{
                              fontSize: { xs: 14, sm: 14 },
                              fontWeight: 600,
                            }}
                            pb={1}
                          >
                            <ArtistsNameTW artists={n.artists} />
                            {n.artists.length === 0 ? (
                              <Box className="tw_font">谷公館</Box>
                            ) : (
                              <></>
                            )}
                          </Box>
                          <Box
                            className="tw_font"
                            sx={{ fontWeight: 600 }}
                            pb={1}
                          >
                            {n.title_tw}
                          </Box>
                          <Box sx={{ fontSize: 12, color: "#666" }}>
                            <B2E
                              begin={n.begin_exhibition}
                              end={n.end_exhibition}
                            />
                            <Box className="tw_font">詳情</Box>
                          </Box>
                        </>
                      ) : (
                        <>
                          <Box
                            sx={{
                              fontSize: { xs: 14, sm: 14 },
                              fontWeight: 600,
                            }}
                            pb={1}
                          >
                            <ArtistsNameEN artists={n.artists} />
                            {n.artists.length === 0 ? (
                              <Box className="en_font">Michael Ku Gallery</Box>
                            ) : (
                              <></>
                            )}
                          </Box>
                          <Box
                            className="en_font"
                            sx={{ fontWeight: 600 }}
                            pb={1}
                          >
                            {n.title_en}
                          </Box>
                          <Box sx={{ fontSize: 12, color: "#666" }}>
                            <B2E
                              begin={n.begin_exhibition}
                              end={n.end_exhibition}
                            />
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
