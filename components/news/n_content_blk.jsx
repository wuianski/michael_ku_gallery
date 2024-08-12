import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
/* Component */
import SliderHalfW from "@/components/sliders/slider_half_w";
import B2E from "@/components/common/begin2endDate";
import ArtistsNameTW from "@/components/common/artistsNameTW";
import ArtistsNameEN from "@/components/common/artistsNameEN";

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
      {/* News Content */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={10}>
        <Item sx={{ width: { xs: "100%", sm: "50%" }, minHeight: "50vh" }}>
          {useLang ? (
            <>
              <Box
                sx={{ ontSize: { xs: 14, sm: 14 }, fontWeight: 500 }}
                pb={1}
                pt={2}
              >
                <ArtistsNameTW artists={news.artists} />
              </Box>
              <Box sx={{ fontSize: 18 }}>{news.title_tw}</Box>
              <B2E begin={news.begin_exhibition} end={news.end_exhibition} />
              <Box
                sx={{ fontSize: 14 }}
                pt={2}
                dangerouslySetInnerHTML={{ __html: news.content_tw }}
              ></Box>
            </>
          ) : (
            <>
              <Box
                sx={{ fontSize: { xs: 14, sm: 14 }, fontWeight: 500 }}
                pb={1}
                pt={2}
              >
                <ArtistsNameEN artists={news.artists} />
              </Box>
              <Box sx={{ fontSize: 18 }}>{news.title_en}</Box>
              <B2E begin={news.begin_exhibition} end={news.end_exhibition} />
              <Box
                sx={{ fontSize: 14 }}
                pt={2}
                dangerouslySetInnerHTML={{ __html: news.content_en }}
              ></Box>
            </>
          )}
        </Item>
        <Item sx={{ width: { xs: "100%", sm: "50%" } }}>
          <Box>
            <SliderHalfW imgs={news.images} />
          </Box>
        </Item>
      </Stack>
    </>
  );
}
