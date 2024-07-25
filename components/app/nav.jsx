import { Box, Paper, Stack, styled } from "@mui/material";
import Image from "next/image";
/* Component */
import NavItem from "./navItem";

export default function Nav({ useLang }) {
  return (
    <>
      {/* Desktop - logo + nav */}
      <Box p={"50px"} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box
          sx={{
            width: "max-content",
            marginLeft: "auto",
            marginRight: "auto",
            width: "470px",
            height: "23px",
            position: "relative",
          }}
        >
          <Image
            src="/img/logo.png"
            alt="about open image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            style={{ objectFit: "contain" }}
            placeholder="blur"
            blurDataURL="/img/logo.png"
          />
        </Box>
        <Box
          sx={{
            width: "max-content",
            marginLeft: "auto",
            marginRight: "auto",
            letterSpacing: "0.88px",
          }}
          p={"30px"}
        >
          <Stack direction="row" spacing={5}>
            <NavItem useLang={useLang} />
          </Stack>
        </Box>
      </Box>
      {/* Mobile - logo */}
      <Box pt={"30px"} sx={{ display: { xs: "block", sm: "none" } }}>
        <Box
          sx={{
            width: "max-content",
            marginLeft: "auto",
            marginRight: "auto",
            width: "75px",
            height: "75px",
            position: "relative",
          }}
        >
          <Image
            src="/img/logo_m.png"
            alt="about open image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            style={{ objectFit: "contain" }}
            placeholder="blur"
            blurDataURL="/img/logo_m.png"
          />
        </Box>
      </Box>
    </>
  );
}
