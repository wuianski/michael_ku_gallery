import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

import dynamic from "next/dynamic";
import Link from "next/link";
/* Component */
const Nav = dynamic(() => import("@/components/app/nav"), { ssr: false });
import Footer from "@/components/app/footer";
/* MUI */
import { Box, Paper, Stack, styled, Divider } from "@mui/material";
/* Framer Motion */
import { AnimatePresence, motion } from "framer-motion";

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

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*** !!important when use router to query value from component. Use a React key to tell React to remount the component. ***/}
      <Nav useLang={useLang} />
      {/* Desktop - language switch */}
      <Box sx={{ display: { xs: "none", md: "block" }, cursor: "pointer" }}>
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
            <motion.div whileHover={{ scale: 1.1 }}>English</motion.div>
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
            <motion.div whileHover={{ scale: 1.1 }}>中文</motion.div>
          </Box>
        </motion.div>
      </Box>
      {/* Mobile - nav + language switch */}
      <Box sx={{ display: { xs: "block", md: "none" } }} pt={4}>
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
      <Box pt={2}>
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="content"
          >
            <Component key={router.route} {...pageProps} useLang={useLang} />
          </motion.div>
        </AnimatePresence>
      </Box>
      {/* Footer */}
      <Box className="en_font" pt={12} pb={6}>
        <Footer />
      </Box>
    </>
  );
}

export default App;
