import { Box, Paper, Stack, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import Link from "next/link";

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
              <Box className="tw_font w-600">藝術家</Box>
            ) : (
              <Box className="en_font w-600">ARTISTS</Box>
            )}
          </motion.div>
        </Link>
      </Item>
      <Item>
        <Link href="/exhibitions">
          <motion.div whileHover={{ scale: 1.1 }}>
            {useLang ? (
              <Box className="tw_font w-600">展覽</Box>
            ) : (
              <Box className="en_font w-600">EXHIBITIONS</Box>
            )}
          </motion.div>
        </Link>
      </Item>
      <Item>
        <Link href="/publications">
          <motion.div whileHover={{ scale: 1.1 }}>
            {useLang ? (
              <Box className="tw_font w-600">出版</Box>
            ) : (
              <Box className="en_font w-600">PUBLICATIONS</Box>
            )}
          </motion.div>
        </Link>
      </Item>
      <Item>
        <Link href="/news">
          <motion.div whileHover={{ scale: 1.1 }}>
            {useLang ? (
              <Box className="tw_font w-600">新聞</Box>
            ) : (
              <Box className="en_font w-600">NEWS</Box>
            )}
          </motion.div>
        </Link>
      </Item>
      <Item>
        <Link href="/articles">
          <motion.div whileHover={{ scale: 1.1 }}>
            {useLang ? (
              <Box className="tw_font w-600">文章</Box>
            ) : (
              <Box className="en_font w-600">ARTICLES</Box>
            )}
          </motion.div>
        </Link>
      </Item>
      <Item>
        <Link href="/about">
          <motion.div whileHover={{ scale: 1.1 }}>
            {useLang ? (
              <Box className="tw_font w-600">關於</Box>
            ) : (
              <Box className="en_font w-600">ABOUT</Box>
            )}
          </motion.div>
        </Link>
      </Item>
    </>
  );
}
