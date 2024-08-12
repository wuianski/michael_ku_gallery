import { Box, Paper, Stack, styled, Container } from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
/* Fonts */
import { Noto_Serif, Baskervville, Noto_Sans } from "next/font/google";
const noto_serif = Noto_Serif({ weight: "400", subsets: ["latin"] });
const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });
const noto_sans = Noto_Sans({ weight: "400", subsets: ["latin"] });
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

/* fake data */
// const content_tw =
//   "谷公館 Michael Ku Gallery，坐落在臺北市中心，成立於2008年，是臺灣有著美術史背景訓練的畫廊業者，每檔展覽谷浩宇先生皆親自策展並撰寫展覽文字，以大華人區為主軸，連通國際網路，一系列有規劃地介紹今日優秀藝術家，成為一個清晰的脈絡體系。並以文化推廣的角度，為畫廊創造一種具備獨立精神與人文深度的視野，探討在作品表面的背後的另一層次意境。";
// const content_en =
//   "Michael Ku Gallery, located in the heart of Taipei, was established in 2008. As a gallery owner with a background in art history, Michael Ku personally curates and writes the text for each exhibition. With a focus on the Greater China region and an international reach, the gallery presents a series of carefully planned exhibitions that introduce today's outstanding artists in a clear context. From a cultural promotion perspective, the gallery creates an independent and humanistic vision, exploring the deeper meaning behind the works.";
// const subscribe_tw = "訂閱郵件以獲取畫廊最新消息";
// const subscribe_en = "Subscribe to our newsletter for the latest news";

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
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        > */}
        <Box
          p={4}
          className={noto_serif.className}
          sx={{
            fontSize: { xs: "14px", sm: "14px" },
            fontWeight: 400,
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
                    className={noto_serif.className}
                    dangerouslySetInnerHTML={{
                      __html: about.info_tw,
                    }}
                  ></Box>
                ) : (
                  <Box
                    className={baskervville.className}
                    dangerouslySetInnerHTML={{
                      __html: about.info_en,
                    }}
                  ></Box>
                )}
              </Box>
              {/* <Box pt={10}>
                  {useLang ? (
                    <Box className={noto_serif.className}>{subscribe_tw}</Box>
                  ) : (
                    <Box className={baskervville.className}>{subscribe_en}</Box>
                  )}
                </Box> */}
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
