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
  fontWeight: "600",
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
              <Box className="tw_font">藝術家</Box>
            ) : (
              <Box className="en_font">ARTISTS</Box>
            )}
          </motion.div>
        </Link>
      </Item>
      <Item>
        <Link href="/exhibitions">
          <motion.div whileHover={{ scale: 1.1 }}>
            {useLang ? (
              <Box className="tw_font">展覽</Box>
            ) : (
              <Box className="en_font">EXHIBITIONS</Box>
            )}
          </motion.div>
        </Link>
      </Item>
      <Item>
        <Link href="/publications">
          <motion.div whileHover={{ scale: 1.1 }}>
            {useLang ? (
              <Box className="tw_font">出版</Box>
            ) : (
              <Box className="en_font">PUBLICATIONS</Box>
            )}
          </motion.div>
        </Link>
      </Item>
      <Item>
        <Link href="/news">
          <motion.div whileHover={{ scale: 1.1 }}>
            {useLang ? (
              <Box className="tw_font">新聞</Box>
            ) : (
              <Box className="en_font">NEWS</Box>
            )}
          </motion.div>
        </Link>
      </Item>
      <Item>
        <Link href="/articles">
          <motion.div whileHover={{ scale: 1.1 }}>
            {useLang ? (
              <Box className="tw_font">文章</Box>
            ) : (
              <Box className="en_font">ARTICLES</Box>
            )}
          </motion.div>
        </Link>
      </Item>
      <Item>
        <Link href="/about">
          <motion.div whileHover={{ scale: 1.1 }}>
            {useLang ? (
              <Box className="tw_font">關於</Box>
            ) : (
              <Box className="en_font">ABOUT</Box>
            )}
          </motion.div>
        </Link>
      </Item>
    </>
  );
}
