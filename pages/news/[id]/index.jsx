import { Box, Paper, Stack, styled, Grid, Container } from "@mui/material";

/* Framer Motion */
import { motion } from "framer-motion";
/* Component */
import NContentBlock from "@/components/news/n_content_blk";
/* Fetch Data */
import fetchData from "@/lib/api";

export default function Snews({ useLang, news }) {
  // console.log(news);
  return (
    <>
      <Container maxWidth="lg">
        <Box
          p={2}
          // className="tw_font"
          sx={{
            fontSize: { xs: "18px", sm: "14px" },
            fontWeight: 400,
            letterSpacing: "0.88px",
            lineHeight: { xs: "1.5", sm: "1.5" },
          }}
        >
          <Box pl={{ xs: 0, md: 12 }} pt={2}>
            {news.map((n, index) => (
              <NContentBlock news={n} useLang={useLang} key={index} />
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const news = await fetchData(
    `
      query  {
          news (filter: { id: { _eq: "${params.id}"}, status:{_eq:"published"} }){
            id,
            title_tw,
            title_en,
            artists {
              id,
              artists_id {
                id
                name_tw
                name_en
              }
            },
            begin_exhibition,
            end_exhibition,
            content_tw,
            content_en,
            images {
              artworks_id {
                id
                title_tw
                title_en
                image {
                    filename_disk
                }
              }
            },

          }
      }
      `,
    {
      variables: {},
    }
  );
  return { props: { news: news.data.news } };
}
