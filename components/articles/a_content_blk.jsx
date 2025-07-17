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
  const englishContent = !useLang && articles.writer_en;
  const NoEnglishContent = !useLang && !articles.writer_en;
  const taiwaneseContent = useLang && articles.writer_tw;
  const NoTaiwaneseContent = useLang && !articles.writer_tw;
  return (
    <>
      {/* Exhibition Content */}
      {taiwaneseContent ? (
        <Stack direction={{ xs: "column", sm: "row" }} spacing={10}>
          <Item sx={{ width: { xs: "100%", sm: "50%" }, minHeight: "50vh" }}>
            <>
              <Box
                pb={1}
                className="tw_font"
                sx={{ fontSize: 18, fontWeight: 500 }}
              >
                {articles.title_tw}
              </Box>

              <Box
                sx={{ fontSize: 12, fontWeight: 500 }}
                pb={1}
                className="tw_font"
              >
                文 / {articles.writer_tw}
              </Box>

              <Box sx={{ fontSize: 12, color: "#666" }}>
                {(() => {
                  const date = new Date(articles.date);
                  return `${date.getFullYear()}年${date.getMonth() + 1}月`;
                })()}
              </Box>

              <Box
                sx={{ fontSize: { xs: 14, sm: 14 }, fontWeight: 500 }}
                pb={1}
                pt={2}
              >
                <ArtistsNameTW artists={articles.artists} />
                {articles.artists.length === 0 ? (
                  <Box className="tw_font">谷公館</Box>
                ) : null}
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
          </Item>
          <Item sx={{ width: { xs: "100%", sm: "50%" } }}>
            <Box>
              <SliderHalfW imgs={articles.images} />
            </Box>
          </Item>
        </Stack>
      ) : null}

      {NoTaiwaneseContent ? (
        <Box
          sx={{
            fontSize: 16,
            color: "#888",
            py: 4,
            pr: 12,
            textAlign: "center",
          }}
          className="tw_font"
        >
          很抱歉，目前此文章沒有中文內容。
        </Box>
      ) : null}

      {englishContent ? (
        <Stack direction={{ xs: "column", sm: "row" }} spacing={10}>
          <Item sx={{ width: { xs: "100%", sm: "50%" }, minHeight: "50vh" }}>
            <>
              <Box
                pb={1}
                className="en_font"
                sx={{ fontSize: 18, fontWeight: 500 }}
              >
                {articles.title_en}
              </Box>

              <Box
                sx={{ fontSize: 12, fontWeight: 500 }}
                pb={1}
                className="en_font"
              >
                By {articles.writer_en}
              </Box>

              <Box className="en_font" sx={{ fontSize: 12, color: "#666" }}>
                {(() => {
                  const date = new Date(articles.date);
                  return date.toLocaleString("en-US", {
                    month: "long",
                    year: "numeric",
                  });
                })()}
              </Box>

              <Box
                sx={{ fontSize: { xs: 14, sm: 14 }, fontWeight: 500 }}
                pb={1}
                pt={2}
              >
                <ArtistsNameEN artists={articles.artists} />
                {articles.artists.length === 0 ? (
                  <Box className="en_font">Michael Ku Gallery</Box>
                ) : null}
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
          </Item>
          <Item sx={{ width: { xs: "100%", sm: "50%" } }}>
            <Box>
              <SliderHalfW imgs={articles.images} />
            </Box>
          </Item>
        </Stack>
      ) : null}

      {NoEnglishContent ? (
        <Box
          sx={{
            fontSize: 16,
            color: "#888",
            py: 4,
            pr: 12,
            textAlign: "center",
          }}
          className="en_font"
        >
          We apologize, but the English content for this article is currently
          unavailable.
        </Box>
      ) : null}
    </>
  );
}
