import { Box, Paper, Stack, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import Link from "next/link";
/* Fonts */
import { Noto_Serif, Baskervville, Noto_Sans } from "next/font/google";
const noto_serif = Noto_Serif({ weight: "500", subsets: ["latin"] });
const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });
const noto_sans = Noto_Sans({ weight: "500", subsets: ["latin"] });

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
          {useLang ? (
            <Box className={noto_sans.className}>藝術家</Box>
          ) : (
            <Box className={noto_serif.className}>ARTISTS</Box>
          )}
        </Link>
      </Item>
      <Item>
        <Link href="/exhibitions">
          {useLang ? (
            <Box className={noto_sans.className}>展覽</Box>
          ) : (
            <Box className={noto_serif.className}>EXHIBITIONS</Box>
          )}
        </Link>
      </Item>
      <Item>
        <Link href="/publications">
          {useLang ? (
            <Box className={noto_sans.className}>出版</Box>
          ) : (
            <Box className={noto_serif.className}>PUBLICATIONS</Box>
          )}
        </Link>
      </Item>
      <Item>
        <Link href="/news">
          {useLang ? (
            <Box className={noto_sans.className}>新聞</Box>
          ) : (
            <Box className={noto_serif.className}>NEWS</Box>
          )}
        </Link>
      </Item>
      <Item>
        <Link href="/articles">
          {useLang ? (
            <Box className={noto_sans.className}>文章</Box>
          ) : (
            <Box className={noto_serif.className}>ARTICLES</Box>
          )}
        </Link>
      </Item>
      <Item>
        <Link href="/about">
          {useLang ? (
            <Box className={noto_sans.className}>關於</Box>
          ) : (
            <Box className={noto_serif.className}>ABOUT</Box>
          )}
        </Link>
      </Item>
    </>
  );
}
