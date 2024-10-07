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
      <Box sx={{ fontSize: { xs: 14, sm: 14 }, fontWeight: 600 }} pb={1} pt={2}>
        {useLang ? (
          <ArtistsNameTW artists={pub.artists} />
        ) : (
          <ArtistsNameEN artists={pub.artists} />
        )}
      </Box>
      <Box sx={{ fontSize: 18, fontWeight: 600 }} pb={2}>
        {useLang ? (
          <Box className="tw_font">{pub.title_tw}</Box>
        ) : (
          <Box className="en_font" sx={{ fontStyle: "italic" }}>
            {pub.title_en}
          </Box>
        )}
      </Box>
      {useLang ? (
        <Box
          className="tw_font"
          sx={{ fontSize: 14 }}
          dangerouslySetInnerHTML={{
            __html: pub.content_tw,
          }}
        />
      ) : (
        <Box
          className="en_font"
          sx={{ fontSize: 14 }}
          dangerouslySetInnerHTML={{
            __html: pub.content_en,
          }}
        />
      )}
    </Box>
  );
}
