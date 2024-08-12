import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
/* Component */
import ArtistsNameTW from "@/components/common/artistsNameTW";
import ArtistsNameEN from "@/components/common/artistsNameEN";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
  width: "100%",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {},
}));

export default function PContentBlock({ useLang, pub, index }) {
  // console.log(pub);
  return (
    <Box key={index}>
      {useLang ? (
        <>
          <Box
            sx={{ fontSize: { xs: 14, sm: 14 }, fontWeight: 500 }}
            pb={1}
            pt={2}
          >
            <ArtistsNameTW artists={pub.artists} />
          </Box>
          <Box sx={{ fontSize: 18 }} pb={2}>
            {pub.title_tw}
          </Box>
          <Box sx={{ fontSize: 14 }}>{pub.content_tw}</Box>
        </>
      ) : (
        <>
          <Box
            sx={{ fontSize: { xs: 14, sm: 14 }, fontWeight: 500 }}
            pb={1}
            pt={2}
          >
            <ArtistsNameEN artists={pub.artists} />
          </Box>
          <Box sx={{ fontSize: 18 }} pb={2}>
            {pub.title_en}
          </Box>
          <Box sx={{ fontSize: 14 }}>{pub.content_en}</Box>
        </>
      )}
    </Box>
  );
}
