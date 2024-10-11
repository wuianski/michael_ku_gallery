import { Box, Paper, Stack, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import Link from "next/link";

/* Framer Motion */
import { motion, useWillChange } from "framer-motion";

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
  const willChange = useWillChange();
  return (
    <>
      <Item>
        <Link href="/artists">
          {useLang ? (
            <Box className="tw_font">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
                style={{ willChange }}
              >
                藝術家
              </motion.div>
            </Box>
          ) : (
            <Box className="en_font">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
                style={{ willChange }}
              >
                ARTISTS
              </motion.div>
            </Box>
          )}
        </Link>
      </Item>
      <Item>
        <Link href="/exhibitions">
          {useLang ? (
            <Box className="tw_font">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
                style={{ willChange }}
              >
                展覽
              </motion.div>
            </Box>
          ) : (
            <Box className="en_font">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
                style={{ willChange }}
              >
                EXHIBITIONS
              </motion.div>
            </Box>
          )}
        </Link>
      </Item>
      <Item>
        <Link href="/publications">
          {useLang ? (
            <Box className="tw_font">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
                style={{ willChange }}
              >
                出版
              </motion.div>
            </Box>
          ) : (
            <Box className="en_font">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
                style={{ willChange }}
              >
                PUBLICATIONS
              </motion.div>
            </Box>
          )}
        </Link>
      </Item>
      <Item>
        <Link href="/news">
          {useLang ? (
            <Box className="tw_font">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
                style={{ willChange }}
              >
                新聞
              </motion.div>
            </Box>
          ) : (
            <Box className="en_font">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
                style={{ willChange }}
              >
                NEWS
              </motion.div>
            </Box>
          )}
        </Link>
      </Item>
      {/* <Item>
        <Link href="/articles">
          {useLang ? (
            <Box className="tw_font">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
                style={{ willChange }}
              >
                文章
              </motion.div>
            </Box>
          ) : (
            <Box className="en_font">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
                style={{ willChange }}
              >
                ARTICLES
              </motion.div>
            </Box>
          )}
        </Link>
      </Item> */}
      <Item>
        <Link href="/about">
          {useLang ? (
            <Box className="tw_font">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
                style={{ willChange }}
              >
                關於
              </motion.div>
            </Box>
          ) : (
            <Box className="en_font">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
                style={{ willChange }}
              >
                ABOUT
              </motion.div>
            </Box>
          )}
        </Link>
      </Item>
    </>
  );
}
