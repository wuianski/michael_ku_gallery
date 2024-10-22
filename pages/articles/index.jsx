import { Box, Paper, Stack, styled, Grid, Container } from "@mui/material";

/* Framer Motion */
import { motion } from "framer-motion";
/* Component */
import AListBlock from "@/components/articles/a_list_blk";
/* Fetch Data */
import fetchData from "@/lib/api";

/* fake data */
// const articles = [
//   {
//     name_tw: "羅智信",
//     name_en: "Luo Jr-shin",
//     title_tw: "《看我舞動》參加新北市美術館 《體育課》展覽",
//     title_en:
//       "participates the group exhibition “In Terms of Sport” at “New Taipei City Art Museum”",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "簡翊洪",
//     name_en: "Jian Yihong",
//     title_tw: "《有時風雨有時晴》參加 「一間裱褙店：青雨山房」特展",
//     title_en:
//       "participates the exhibition “ All About Mounting And Framing” curated by Wu Ting-Wei at ART SPACE",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "蔣勳",
//     name_en: "Chiang Hsun",
//     title_tw: "雲淡風輕 2024年個展於杭州明月樓",
//     title_en:
//       "Pale Cloud, Gentle Breeze Solo Exhibition in Ming Space at West Lake of Hangzhou",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "羅智信",
//     name_en: "Luo Jr-shin",
//     title_tw: "《看我舞動》參加新北市美術館 《體育課》展覽",
//     title_en:
//       "participates the group exhibition “In Terms of Sport” at “New Taipei City Art Museum”",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "羅智信",
//     name_en: "Luo Jr-shin",
//     title_tw: "《看我舞動》參加新北市美術館 《體育課》展覽",
//     title_en:
//       "participates the group exhibition “In Terms of Sport” at “New Taipei City Art Museum”",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "簡翊洪",
//     name_en: "Jian Yihong",
//     title_tw: "《有時風雨有時晴》參加 「一間裱褙店：青雨山房」特展",
//     title_en:
//       "participates the exhibition “ All About Mounting And Framing” curated by Wu Ting-Wei at ART SPACE",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "蔣勳",
//     name_en: "Chiang Hsun",
//     title_tw: "雲淡風輕 2024年個展於杭州明月樓",
//     title_en:
//       "Pale Cloud, Gentle Breeze Solo Exhibition in Ming Space at West Lake of Hangzhou",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "羅智信",
//     name_en: "Luo Jr-shin",
//     title_tw: "《看我舞動》參加新北市美術館 《體育課》展覽",
//     title_en:
//       "participates the group exhibition “In Terms of Sport” at “New Taipei City Art Museum”",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "簡翊洪",
//     name_en: "Jian Yihong",
//     title_tw: "《有時風雨有時晴》參加 「一間裱褙店：青雨山房」特展",
//     title_en:
//       "participates the exhibition “ All About Mounting And Framing” curated by Wu Ting-Wei at ART SPACE",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "蔣勳",
//     name_en: "Chiang Hsun",
//     title_tw: "雲淡風輕 2024年個展於杭州明月樓",
//     title_en:
//       "Pale Cloud, Gentle Breeze Solo Exhibition in Ming Space at West Lake of Hangzhou",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "羅智信",
//     name_en: "Luo Jr-shin",
//     title_tw: "《看我舞動》參加新北市美術館 《體育課》展覽",
//     title_en:
//       "participates the group exhibition “In Terms of Sport” at “New Taipei City Art Museum”",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "羅智信",
//     name_en: "Luo Jr-shin",
//     title_tw: "《看我舞動》參加新北市美術館 《體育課》展覽",
//     title_en:
//       "participates the group exhibition “In Terms of Sport” at “New Taipei City Art Museum”",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
// ];

export default function Articles({ useLang, articles }) {
  /* CHANGE ARRAY SORTING BY begin_exhibition */
  !articles.articles
    ? null
    : articles.articles.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
  return (
    <>
      <Container maxWidth="lg">
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        > */}
        <Box
          p={2}
          // className="tw_font"
          sx={{
            width: { xs: "100%", sm: "50%" },
            fontSize: { xs: "18px", sm: "14px" },
            fontWeight: 400,
            letterSpacing: "0.88px",
            lineHeight: { xs: "1.5", sm: "1.5" },
          }}
        >
          <AListBlock articles={articles.articles} useLang={useLang} />
        </Box>
        {/* </motion.div> */}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const articles = await fetchData(
    `
      query  {
          articles (filter:{status:{_eq:"published"}} ){
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
            date,
 
          }
      }
      `,
    {
      variables: {},
    }
  );
  return {
    props: { articles: articles.data },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
