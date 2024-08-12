import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
/* Component */
import SliderHalfW from "@/components/sliders/slider_half_w";
import Artworks from "@/components/artists/artworks";
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

export default function EContentBlock({ useLang, e, index }) {
  // console.log(e);
  return (
    <Box key={index}>
      {/* 1st row */}
      <Box pl={{ xs: 0, md: 12 }} pt={2} pb={6}>
        <Box sx={{ fontSize: { xs: 14, sm: 14 }, fontWeight: 500 }} pb={1}>
          {useLang ? (
            <ArtistsNameTW artists={e.artists} />
          ) : (
            <ArtistsNameEN artists={e.artists} />
          )}
        </Box>
        <Box sx={{ fontSize: 18 }}>
          {useLang ? (
            <Box>{e.title_tw}</Box>
          ) : (
            <Box sx={{ fontStyle: "italic" }}>{e.title_en}</Box>
          )}
        </Box>
        <B2E begin={e.begin_exhibition} end={e.end_exhibition} />
      </Box>

      {/* 2nd row */}
      <Box pl={{ xs: 0, md: 12 }} pt={2}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={10}>
          {/* Artworks */}
          <Item sx={{ width: { xs: "100%", sm: "50%" } }}>
            <Artworks artworks={e.artworks} useLang={useLang} />
          </Item>
          {/* Exhibition Content */}
          <Item sx={{ width: { xs: "100%", sm: "50%" } }}>
            {useLang ? (
              <>
                <Box
                  sx={{ fontSize: { xs: 14, sm: 14 } }}
                  pt={0}
                  pb={8}
                  dangerouslySetInnerHTML={{
                    __html: e.content_tw,
                  }}
                />

                {/* {e.reviews.length > 0 ? (
                  <>
                    <Box>評論</Box>
                    {e.reviews.map((r, index) => (
                      <Box sx={{ fontSize: 12, cursor: "pointer" }} key={index}>
                        <a
                          href={`${process.env.DIRECTUS_URL}/assets/${r.reviews_id.file_tw.filename_disk}`}
                          target="_blank"
                        >
                          {r.reviews_id.title_tw}
                        </a>
                      </Box>
                    ))}
                  </>
                ) : null} */}
              </>
            ) : (
              <>
                <Box
                  sx={{ fontSize: { xs: 14, sm: 14 } }}
                  pt={0}
                  pb={8}
                  dangerouslySetInnerHTML={{
                    __html: e.content_en,
                  }}
                />
                {/* {e.reviews.length > 0 ? (
                  <>
                    <Box>Review</Box>
                    {e.reviews.map((r, index) => (
                      <Box sx={{ fontSize: 12, cursor: "pointer" }} key={index}>
                        <a
                          href={`${process.env.DIRECTUS_URL}/assets/${r.reviews_id.file.filename_disk}`}
                          target="_blank"
                        >
                          {r.reviews_id.title_en}
                        </a>
                      </Box>
                    ))}
                  </>
                ) : null} */}
              </>
            )}
          </Item>
        </Stack>
      </Box>
    </Box>
  );
}
