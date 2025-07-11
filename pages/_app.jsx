import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

import dynamic from "next/dynamic";
import Link from "next/link";
/* Component */
const Nav = dynamic(() => import("@/components/app/nav"), { ssr: false });
import Footer from "@/components/app/footer";
import Layout from "@/components/app/layout";
/* MUI */
import { Box, Paper, Stack, styled, Divider } from "@mui/material";
/* Framer Motion */
import { AnimatePresence, motion, useWillChange } from "framer-motion";

/* Icons */
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
/* React Slick CSS (slider) */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* SEO */
import { NextSeo, DefaultSeo } from "next-seo";

import { Noto_Serif_TC } from "next/font/google";
const noto_serif_tc = Noto_Serif_TC({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif-tc",
});
import { Baskervville } from "next/font/google";
const baskervville = Baskervville({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baskervville",
});

/* Mobile Nav Item */
const Nav_item_m = styled(Paper)(({ theme }) => ({
  background: "none",
  boxShadow: "none",
  width: "90vw",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "21px",
  letterSpacing: "0.88px",
  paddingBottom: "16px",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

function App({ Component, pageProps }) {
  const willChange = useWillChange();
  // const getLayout = Component.getLayout || ((page) => page);

  const router = useRouter();
  const [useLang, setLang] = useState(true);
  const show_state = {
    hide: { opacity: 0, display: "none" },
    show: { opacity: 1, display: "block" },
    transition: { duration: 0.5 },
  };
  /*** click on tw ***/
  const click_on_tw = {
    tw: { opacity: 0 },
    en: { opacity: 1 },
  };
  /*** click on en ***/
  const click_on_en = {
    tw: { opacity: 1 },
    en: { opacity: 0 },
  };
  const [nav_m, setNav_m] = useState(false);

  /*** SEO data ***/
  // const title = "谷公館 Michael Ku Gallery";
  // const description_tw = `谷公館 Michael Ku Gallery，坐落在臺北市中心，成立於2008年，是臺灣有著美術史背景訓練的畫廊業者，每檔展覽谷浩宇先生皆親自策展並撰寫展覽文字，以大華人區為主軸，連通國際網路，一系列有規劃地介紹今日優秀藝術家，成為一個清晰的脈絡體系。並以文化推廣的角度，為畫廊創造一種具備獨立精神與人文深度的視野，探討在作品表面的背後的另一層次意境。`;
  // const description_en = `Founded by Michael Ku in 2008, Michael Ku Gallery is located in the central Taipei. Michael Ku leads the gallery with his background in art history. For each single exhibition he curates and writes the statement by himself. The major line of the gallery represented artists is from Greater China connecting with international art scene. We introduce the artists on the basis of plans, hope to form a clear context for the arts. In the meantime, we want to create a vision filled with independent spirits and depth of humanities from a perspective of promoting different cultures, in order to rediscover another layer of meanings of the artworks.`;
  // const description = useLang ? description_tw : description_en;
  // const img = "bf2b9750-0930-48db-aba8-3a35b610b54c.png";

  const DEFAULT_SEO = {
    title: "谷公館 | Michael Ku Gallery",
    // description: 'SEO made easy for Next.js projects',
    openGraph: {
      type: "website",
      url: "https://michaelkugallery.com",
      title: "谷公館 | Michael Ku Gallery",
      // description: 'SEO made easy for Next.js projects',
      images: [
        {
          url: `${process.env.DIRECTUS_URL}/assets/bf2b9750-0930-48db-aba8-3a35b610b54c.png`,
          width: 800,
          height: 600,
          alt: "Picture of the artwork",
        },
      ],
      site_name: "michaelkugallery.com",
    },
  };

  return (
    <>
      {/* <DefaultSeo
        title="谷公館 Michael Ku Gallery"
        // description={description}
        openGraph={{
          type: "website",
          url: "https://michaelkugallery.com/",
          title: "谷公館 Michael Ku Gallery",
          // description: `${description}`,
          images: [
            {
              url: `${process.env.DIRECTUS_URL}/assets/${img}`,
              width: 800,
              height: 600,
              alt: "Picture of the artwork",
            },
          ],
        }}
      /> */}
      <DefaultSeo {...DEFAULT_SEO} />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*** !!important when use router to query value from component. Use a React key to tell React to remount the component. ***/}
      <div
        id="my_nav"
        className={`${noto_serif_tc.variable} ${baskervville.variable}`}
      >
        <Nav useLang={useLang} />
      </div>
      {/* Desktop - language switch */}
      <Box
        sx={{ display: { xs: "none", md: "block" }, cursor: "pointer" }}
        className={`${noto_serif_tc.variable} ${baskervville.variable}`}
      >
        <motion.div
          // variants={show_state}
          // animate={useLang ? "show" : "hide"}
          // style={{ willChange: "unset" }}
          variants={click_on_en}
          initial="tw"
          animate={useLang ? "tw" : "en"}
          exit="tw"
          style={{ willChange: "unset" }}
        >
          <Box
            sx={{
              position: "fixed",
              top: 50,
              right: 30,
              zIndex: 999,
              textTransform: "uppercase",
              fontSize: 14,
            }}
            onClick={() => setLang(false)}
            className="en_font"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" }}
              style={{ willChange }}
            >
              English
            </motion.div>
          </Box>
        </motion.div>

        <motion.div
          // variants={show_state}
          // animate={useLang ? "hide" : "show"}
          // style={{ willChange: "unset" }}
          variants={click_on_tw}
          initial="tw"
          animate={useLang ? "tw" : "en"}
          exit="tw"
          style={{ willChange: "unset" }}
        >
          <Box
            sx={{
              position: "fixed",
              top: 50,
              right: 30,
              zIndex: 100,
              fontSize: 14,
            }}
            onClick={() => setLang(true)}
            className="tw_font"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" }}
              style={{ willChange }}
            >
              中文
            </motion.div>
          </Box>
        </motion.div>
      </Box>
      {/* Mobile - nav + language switch */}
      <Box
        sx={{ display: { xs: "block", md: "none" } }}
        className={`${noto_serif_tc.variable} ${baskervville.variable}`}
        pt={4}
      >
        {!nav_m && (
          <Box
            onClick={() => setNav_m(true)}
            sx={{
              position: "fixed",
              top: 15,
              right: 30,
              zIndex: 100,
              cursor: "pointer",
            }}
          >
            <MenuIcon sx={{ fontSize: 40 }} />
          </Box>
        )}
        {nav_m && (
          <Box
            onClick={() => setNav_m(false)}
            sx={{
              position: "fixed",
              top: 15,
              right: 30,
              zIndex: 100,
              cursor: "pointer",
            }}
          >
            <CloseIcon sx={{ fontSize: 40 }} />
          </Box>
        )}
        {nav_m && (
          <Box
            sx={{
              width: "max-content",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Stack direction="column" spacing={1}>
              <Nav_item_m
                onClick={() => {
                  setNav_m(false);
                }}
              >
                <Link href="/artists">
                  {useLang ? (
                    <Box className="tw_font">藝術家</Box>
                  ) : (
                    <Box className="en_font">ARTISTS</Box>
                  )}
                </Link>
              </Nav_item_m>
              <Nav_item_m
                onClick={() => {
                  setNav_m(false);
                }}
              >
                <Link href="/exhibitions">
                  {useLang ? (
                    <Box className="tw_font">展覽</Box>
                  ) : (
                    <Box className="en_font">EXHIBITIONS</Box>
                  )}
                </Link>
              </Nav_item_m>
              <Nav_item_m
                onClick={() => {
                  setNav_m(false);
                }}
              >
                <Link href="/publications">
                  {useLang ? (
                    <Box className="tw_font">出版</Box>
                  ) : (
                    <Box className="en_font">PUBLICATIONS</Box>
                  )}
                </Link>
              </Nav_item_m>
              <Nav_item_m
                onClick={() => {
                  setNav_m(false);
                }}
              >
                <Link href="/news">
                  {useLang ? (
                    <Box className="tw_font">新聞</Box>
                  ) : (
                    <Box className="en_font">NEWS</Box>
                  )}
                </Link>
              </Nav_item_m>
              <Nav_item_m
                onClick={() => {
                  setNav_m(false);
                }}
              >
                <Link href="/articles">
                  {useLang ? (
                    <Box className="tw_font">文章</Box>
                  ) : (
                    <Box className="en_font">ARTICLES</Box>
                  )}
                </Link>
              </Nav_item_m>
              <Nav_item_m
                onClick={() => {
                  setNav_m(false);
                }}
              >
                <Link href="/about">
                  {useLang ? (
                    <Box className="tw_font">關於</Box>
                  ) : (
                    <Box className="en_font">ABOUT</Box>
                  )}
                </Link>
              </Nav_item_m>
              <Nav_item_m>-</Nav_item_m>

              <Nav_item_m>
                {useLang ? (
                  <Box
                    sx={{ textTransform: "uppercase", cursor: "pointer" }}
                    onClick={() => {
                      setLang(false);
                      setNav_m(false);
                    }}
                    className="en_font"
                  >
                    English
                  </Box>
                ) : (
                  <Box
                    sx={{ textTransform: "uppercase", cursor: "pointer" }}
                    onClick={() => {
                      setLang(true);
                      setNav_m(false);
                    }}
                    className="tw_font"
                  >
                    中文
                  </Box>
                )}
              </Nav_item_m>
              <Divider />
            </Stack>
          </Box>
        )}
      </Box>

      {/* Page */}
      {/* important to add key for make it work */}
      <Box
        pt={2}
        className={`${noto_serif_tc.variable} ${baskervville.variable}`}
      >
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="content"
          >
            <Layout>
              <Component key={router.route} {...pageProps} useLang={useLang} />
            </Layout>
          </motion.div>
        </AnimatePresence>
      </Box>
      {/* Footer */}
      <Box className={` ${baskervville.variable}`} pt={12} pb={6}>
        <Footer />
      </Box>
    </>
  );
}

export default App;
