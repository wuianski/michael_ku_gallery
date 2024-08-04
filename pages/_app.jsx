import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import "@/styles/globals.css";
import dynamic from "next/dynamic";
import Link from "next/link";
/* Component */
const Nav = dynamic(() => import("@/components/app/nav"), { ssr: false });
import Footer from "@/components/app/footer";
/* MUI */
import { Box, Paper, Stack, styled, Divider } from "@mui/material";
/* Framer Motion */
import { AnimatePresence, motion } from "framer-motion";
/* Fonts */
import { Noto_Serif, Baskervville, Noto_Sans } from "next/font/google";
const noto_serif = Noto_Serif({ weight: "500", subsets: ["latin"] });
const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });
const noto_sans = Noto_Sans({ weight: "500", subsets: ["latin"] });
/* Icons */
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
/* React Slick CSS (slider) */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const router = useRouter();
  const [useLang, setLang] = useState(true);
  const show_state = {
    hide: { opacity: 0, display: "none" },
    show: { opacity: 1, display: "block" },
    transition: { duration: 0.5 },
  };
  const [nav_m, setNav_m] = useState(false);

  return (
    <>
      <Head>
        <title>Michael Ku Gallery</title>
        <meta
          name="description"
          content="Michael Ku Gallery Official Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*** !!important when use router to query value from component. Use a React key to tell React to remount the component. ***/}
      <Nav useLang={useLang} />
      {/* Desktop - language switch */}
      <Box sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}>
        <motion.div variants={show_state} animate={useLang ? "show" : "hide"}>
          <Box
            sx={{
              position: "fixed",
              top: 50,
              right: 30,
              zIndex: 100,
              textTransform: "uppercase",
              fontSize: 14,
            }}
            onClick={() => setLang(false)}
            className={baskervville.className}
          >
            English
          </Box>
        </motion.div>

        <motion.div variants={show_state} animate={useLang ? "hide" : "show"}>
          <Box
            sx={{
              position: "fixed",
              top: 50,
              right: 30,
              zIndex: 100,
              fontSize: 14,
            }}
            onClick={() => setLang(true)}
            className={noto_serif.className}
          >
            中文
          </Box>
        </motion.div>
      </Box>
      {/* Mobile - nav + language switch */}
      <Box sx={{ display: { xs: "block", sm: "none" } }} pt={4}>
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
                    <Box className={noto_sans.className}>藝術家</Box>
                  ) : (
                    <Box className={noto_sans.className}>ARTISTS</Box>
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
                    <Box className={noto_sans.className}>展覽</Box>
                  ) : (
                    <Box className={noto_sans.className}>EXHIBITIONS</Box>
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
                    <Box className={noto_sans.className}>出版</Box>
                  ) : (
                    <Box className={noto_sans.className}>PUBLICATIONS</Box>
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
                    <Box className={noto_sans.className}>新聞</Box>
                  ) : (
                    <Box className={noto_sans.className}>NEWS</Box>
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
                    <Box className={noto_sans.className}>文章</Box>
                  ) : (
                    <Box className={noto_sans.className}>ARTICLES</Box>
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
                    <Box className={noto_sans.className}>關於</Box>
                  ) : (
                    <Box className={noto_sans.className}>ABOUT</Box>
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
                    className={baskervville.className}
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
                    className={noto_serif.className}
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
      <Box pt={2}>
        <Component key={router.route} {...pageProps} useLang={useLang} />
      </Box>
      {/* Footer */}
      <Box className={noto_serif.className} pt={12} pb={6}>
        <Footer />
      </Box>
    </>
  );
}

export default App;
