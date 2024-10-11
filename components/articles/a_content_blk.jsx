import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
/* Component */
import SliderHalfW from "@/components/sliders/slider_half_w";
import ArtistsNameTW from "@/components/common/artistsNameTW";
import ArtistsNameEN from "@/components/common/artistsNameEN";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
  width: "100%",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {},
}));

export default function AContentBlock({ useLang, articles }) {
  return (
    <>
      {/* Exhibition Content */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={10}>
        <Item sx={{ width: { xs: "100%", sm: "50%" }, minHeight: "50vh" }}>
          {useLang ? (
            <>
              <Box
                sx={{ fontSize: { xs: 14, sm: 14 }, fontWeight: 500 }}
                pb={1}
                pt={2}
              >
                <ArtistsNameTW artists={articles.artists} />
                {articles.artists.length === 0 ? (
                  <Box className="tw_font">谷公館</Box>
                ) : (
                  <></>
                )}
              </Box>
              <Box
                pb={1}
                className="tw_font"
                sx={{ fontSize: 18, fontWeight: 500 }}
              >
                {articles.title_tw}
              </Box>
              <Box className="tw_font" sx={{ fontSize: 12, color: "#666" }}>
                {new Date(articles.date).toLocaleDateString()}
              </Box>
              <Box
                className="tw_font"
                sx={{ fontSize: 14 }}
                pt={2}
                dangerouslySetInnerHTML={{
                  __html: articles.content_tw,
                }}
              ></Box>
            </>
          ) : (
            <>
              <Box
                sx={{ fontSize: { xs: 14, sm: 14 }, fontWeight: 500 }}
                pb={1}
                pt={2}
              >
                <ArtistsNameEN artists={articles.artists} />
                {articles.artists.length === 0 ? (
                  <Box className="en_font">Michael Ku Gallery</Box>
                ) : (
                  <></>
                )}
              </Box>
              <Box
                pb={1}
                className="en_font"
                sx={{ fontSize: 18, fontWeight: 500 }}
              >
                {articles.title_en}
              </Box>
              <Box className="en_font" sx={{ fontSize: 12, color: "#666" }}>
                {new Date(articles.date).toLocaleDateString()}
              </Box>
              <Box
                className="en_font"
                sx={{ fontSize: 14 }}
                pt={2}
                dangerouslySetInnerHTML={{
                  __html: articles.content_en,
                }}
              ></Box>
            </>
          )}
        </Item>
        <Item sx={{ width: { xs: "100%", sm: "50%" } }}>
          <Box>
            <SliderHalfW imgs={articles.images} />
          </Box>
        </Item>
      </Stack>
    </>
  );
}
