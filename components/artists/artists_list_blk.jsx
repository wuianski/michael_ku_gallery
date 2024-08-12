import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
/* Framer Motion */
import { AnimatePresence, motion } from "framer-motion";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: "#000",
  width: "max-content",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    textAlign: "left",
  },
}));

export default function ArtistsListBlk({ useLang, artists }) {
  const [hoverId, setHoverId] = useState(0);
  // const [renderSrc, setRenderSrc] = useState(artists[hoverId].img);
  const [renderSrc, setRenderSrc] = useState(
    artists[hoverId].cover.image.filename_disk
  );

  useEffect(() => {
    // console.log(hoverId);
    setRenderSrc(artists[hoverId].cover.image.filename_disk);
    // console.log(renderSrc);
  }, [hoverId]);
  return (
    <>
      <Stack direction="row" spacing={10}>
        <Item sx={{ width: { xs: "100%", sm: "50%" } }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 0, md: 0 }}
              columns={{ xs: 12, md: 12 }}
              pl={{ xs: 0, md: 10 }}
            >
              {artists.map((a, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Item>
                    <Link href={`/artists/${a.id}`}>
                      <Box p={{ xs: 1.4, sm: 2 }}>
                        {useLang ? (
                          <>
                            <Box
                              id={index}
                              sx={{ cursor: "pointer" }}
                              onMouseOver={() => setHoverId(index)}
                            >
                              <motion.div whileHover={{ scale: 1.1 }}>
                                {a.name_tw}
                              </motion.div>
                            </Box>
                          </>
                        ) : (
                          <Box
                            id={index}
                            sx={{ cursor: "pointer" }}
                            onMouseOver={() => setHoverId(index)}
                          >
                            <motion.div whileHover={{ scale: 1.1 }}>
                              {a.name_en}
                            </motion.div>
                          </Box>
                        )}
                      </Box>
                    </Link>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Item>
        <Item
          sx={{
            width: { xs: "0%", sm: "50%" },
            display: { xs: "none", sm: "block" },
          }}
        >
          <Box>
            <Image
              priority={true}
              // src={renderSrc}
              src={`${process.env.DIRECTUS_URL}/assets/${renderSrc}`}
              width={500}
              height={500}
              alt="Picture of the artwork"
              style={{ objectFit: "contain", objectPosition: "top" }}
              sizes="50vw"
            />
          </Box>
        </Item>
      </Stack>
    </>
  );
}
