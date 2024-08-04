import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
/* Component */
import SliderHalfW from "@/components/sliders/slider_half_w";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
  width: "100%",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {},
}));

export default function NContentBlock({ useLang, news }) {
  return (
    <>
      {/* Exhibition Content */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={10}>
        <Item sx={{ width: { xs: "100%", sm: "50%" }, minHeight: "50vh" }}>
          {useLang ? (
            <>
              <Box
                sx={{
                  fontSize: { xs: 14, sm: 14 },
                  fontWeight: 500,
                }}
                pb={1}
                pt={2}
              >
                {news.name_tw}
              </Box>
              <Box sx={{ fontSize: 18 }}>{news.title_tw}</Box>
              <Box sx={{ fontSize: 12, color: "#666" }}>
                {news.begin_exhibition} - {news.end_exhibition}
              </Box>
              <Box sx={{ fontSize: 14 }} pt={2}>
                {news.content_tw}
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  fontSize: { xs: 14, sm: 14 },
                  fontWeight: 500,
                }}
                pb={1}
                pt={2}
              >
                {news.name_en}
              </Box>
              <Box sx={{ fontSize: 18 }}>{news.title_en}</Box>
              <Box sx={{ fontSize: 12, color: "#666" }}>
                {news.begin_exhibition} - {news.end_exhibition}
              </Box>
              <Box sx={{ fontSize: 14 }} pt={2}>
                {news.content_en}
              </Box>
            </>
          )}
        </Item>
        <Item sx={{ width: { xs: "100%", sm: "50%" } }}>
          <Box>
            <SliderHalfW imgs={news.imgs} />
          </Box>
        </Item>
      </Stack>
    </>
  );
}
