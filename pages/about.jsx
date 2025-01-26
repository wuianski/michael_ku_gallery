import { Box, Paper, Stack, styled, Container } from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";

/* Framer Motion */
import { AnimatePresence, motion } from "framer-motion";
/* Google Maps */
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
/* Fetch Data */
import fetchData from "@/lib/api";

const Item = styled(Paper)(({ theme }) => ({
  // padding: theme.spacing(2),
  textAlign: "left",
  color: "#000",
  width: "100%",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {},
}));

export default function About({ useLang, about }) {
  // console.log(about);
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(
    () => ({ lat: 25.046626155721928, lng: 121.54932281962199 }),
    []
  );
  const [selected, setSelected] = useState(mapCenter);

  const mapOptions = {
    disableDefaultUI: true,
    clickableIcons: true,
    scrollwheel: false,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GoogleMapsAPIKey,
    libraries: libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Container maxWidth="lg">
        <Box
          p={4}
          // className="tw_font"
          sx={{
            fontSize: { xs: "14px", sm: "14px" },
            fontWeight: 500,
            letterSpacing: "0.88px",
            lineHeight: { xs: "1.5", sm: "1.5" },
            minHeight: "50vh",
          }}
          pl={{ xs: 4, md: 14 }}
        >
          <Stack direction={{ xs: "column", sm: "row" }} spacing={10}>
            <Item>
              <Box>
                {useLang ? (
                  <Box
                    className="tw_font"
                    dangerouslySetInnerHTML={{
                      __html: about.info_tw,
                    }}
                  ></Box>
                ) : (
                  <Box
                    className="en_font"
                    dangerouslySetInnerHTML={{
                      __html: about.info_en,
                    }}
                  ></Box>
                )}
              </Box>
            </Item>
            <Item>
              <Box>
                <GoogleMap
                  options={mapOptions}
                  zoom={16}
                  center={mapCenter}
                  mapTypeId={google.maps.MapTypeId.ROADMAP}
                  mapContainerStyle={{ width: "100%", height: "400px" }}
                  onLoad={() => console.log("Map Component Loaded...")}
                >
                  <MarkerF
                    position={mapCenter}
                    onClick={() => setSelected(mapCenter)}
                  >
                    {selected ? (
                      <InfoWindowF
                        position={mapCenter}
                        onCloseClick={() => setSelected(null)}
                      >
                        <>
                          <Box fontSize={14} fontWeight={500}>
                            谷公館當代藝術有限公司
                          </Box>
                          <Box fontSize={12}>
                            105, Taipei City, Songshan District, 敦化南路1段21號
                            四樓之二
                          </Box>
                        </>
                      </InfoWindowF>
                    ) : null}
                  </MarkerF>
                </GoogleMap>
              </Box>
            </Item>
          </Stack>
        </Box>
        {/* </motion.div> */}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const about = await fetchData(
    `
      query  {
          about{
            info_tw,
            info_en,
          }
      }
      `,
    {
      variables: {},
    }
  );
  return {
    props: { about: about.data.about },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
