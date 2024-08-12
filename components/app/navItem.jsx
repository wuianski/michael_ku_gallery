import { Box, Paper, Stack, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import Link from "next/link";
/* Fonts */
import { Noto_Serif, Baskervville, Noto_Sans } from "next/font/google";
const noto_serif = Noto_Serif({ weight: "500", subsets: ["latin"] });
const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });
const noto_sans = Noto_Sans({ weight: "500", subsets: ["latin"] });
/* Framer Motion */
import { motion } from "framer-motion";

const Item = styled(Paper)(({ theme }) => ({
  background: "none",
  boxShadow: "none",
  width: "max-content",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "1.5",
  letterSpacing: "0.88px",

  [theme.breakpoints.down("md")]: {
    width: "90vw",
  },
}));

export default function NavItem({ useLang }) {
  return (
    <>
      <Item>
        <Link href="/artists">
          <motion.div whileHover={{ scale: 1.1 }}>
            {useLang ? (
              <Box className={noto_sans.className}>藝術家</Box>
            ) : (
              <Box className={noto_serif.className}>ARTISTS</Box>
            )}
          </motion.div>
        </Link>
      </Item>
      <Item>
        <Link href="/exhibitions">
          <motion.div whileHover={{ scale: 1.1 }}>
            {useLang ? (
              <Box className={noto_sans.className}>展覽</Box>
            ) : (
              <Box className={noto_serif.className}>EXHIBITIONS</Box>
            )}
          </motion.div>
        </Link>
      </Item>
      <Item>
        <Link href="/publications">
          <motion.div whileHover={{ scale: 1.1 }}>
            {useLang ? (
              <Box className={noto_sans.className}>出版</Box>
            ) : (
              <Box className={noto_serif.className}>PUBLICATIONS</Box>
            )}
          </motion.div>
        </Link>
      </Item>
      <Item>
        <Link href="/news">
          <motion.div whileHover={{ scale: 1.1 }}>
            {useLang ? (
              <Box className={noto_sans.className}>新聞</Box>
            ) : (
              <Box className={noto_serif.className}>NEWS</Box>
            )}
          </motion.div>
        </Link>
      </Item>
      <Item>
        <Link href="/articles">
          <motion.div whileHover={{ scale: 1.1 }}>
            {useLang ? (
              <Box className={noto_sans.className}>文章</Box>
            ) : (
              <Box className={noto_serif.className}>ARTICLES</Box>
            )}
          </motion.div>
        </Link>
      </Item>
      <Item>
        <Link href="/about">
          <motion.div whileHover={{ scale: 1.1 }}>
            {useLang ? (
              <Box className={noto_sans.className}>關於</Box>
            ) : (
              <Box className={noto_serif.className}>ABOUT</Box>
            )}
          </motion.div>
        </Link>
      </Item>
    </>
  );
}
