import { Box, Paper, Stack, styled, Grid, Container } from "@mui/material";
/* Fonts */
import { Noto_Serif, Baskervville, Noto_Sans } from "next/font/google";
const noto_serif = Noto_Serif({ subsets: ["latin"] });
const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });
const noto_sans = Noto_Sans({ weight: "400", subsets: ["latin"] });
/* Framer Motion */
import { motion } from "framer-motion";
/* Component */
import PListBlock from "@/components/publications/p_list_blk";
/* Fetch Data */
import fetchData from "@/lib/api";

/* fake data */
// const pub = [
//   {
//     name_tw: "羅智信",
//     name_en: "Luo Jr-shin",
//     title_tw: "看我舞動",
//     title_en: "Dance with Me",
//     img: "/img/fake_data/luo.jpg",
//   },
//   {
//     name_tw: "韋嘉",
//     name_en: "Wei Jia",
//     title_tw: "韋嘉 2017-2021",
//     title_en: "Wei Jia 2017-2021",
//     img: "/img/fake_data/5-韋嘉-《河灣》-2019-丙烯畫布-275x200cm-1.jpg",
//   },
//   {
//     name_tw: "劉安民",
//     name_en: "Lao Lianben",
//     title_tw: "光華",
//     title_en: "Glorious",
//     img: "/img/fake_data/2-劉安民-《池塘松尾芭蕉》-2019-壓克力石墨-152.4x182.9cm.jpg",
//   },
//   {
//     name_tw: "蔣勳",
//     name_en: "Chiang Hsun",
//     title_tw: "天地有大美",
//     title_en: "The Beauty of Heaven and Earth",
//     img: "/img/fake_data/7-蔣勳《雙松》-2019-水墨設色紙本-37.8x33.5cm.jpg",
//   },
//   {
//     name_tw: "韋嘉",
//     name_en: "Wei Jia",
//     title_tw: "韋嘉 2017-2021",
//     title_en: "Wei Jia 2017-2021",
//     img: "/img/fake_data/5-韋嘉-《河灣》-2019-丙烯畫布-275x200cm-1.jpg",
//   },
//   {
//     name_tw: "劉安民",
//     name_en: "Lao Lianben",
//     title_tw: "光華",
//     title_en: "Glorious",
//     img: "/img/fake_data/2-劉安民-《池塘松尾芭蕉》-2019-壓克力石墨-152.4x182.9cm.jpg",
//   },
//   {
//     name_tw: "蔣勳",
//     name_en: "Chiang Hsun",
//     title_tw: "天地有大美",
//     title_en: "The Beauty of Heaven and Earth",
//     img: "/img/fake_data/7-蔣勳《雙松》-2019-水墨設色紙本-37.8x33.5cm.jpg",
//   },
// ];

export default function Publications({ useLang, publications }) {
  // console.log(publications);
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
          className={noto_serif.className}
          sx={{
            fontSize: { xs: "14px", sm: "14px" },
            fontWeight: 400,
            letterSpacing: "0.88px",
            lineHeight: { xs: "1.5", sm: "1.5" },
          }}
        >
          <PListBlock pub={publications.publications} useLang={useLang} />
        </Box>
        {/* </motion.div> */}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const publications = await fetchData(
    `
      query  {
          publications (sort:["sort","id"], filter:{status:{_eq:"published"}} ){
            id,
            title_tw,
            title_en,
            cover {
              image {
                filename_disk
              }
            },
            artists {
              artists_id {              
                name_tw
                name_en
              }
            },
          }
      }
      `,
    {
      variables: {},
    }
  );
  return {
    props: { publications: publications.data },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
