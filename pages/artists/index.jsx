import { Box, Paper, Stack, styled, Grid, Container } from "@mui/material";
/* Fonts */
import { Noto_Serif, Baskervville, Noto_Sans } from "next/font/google";
const noto_serif = Noto_Serif({ weight: "500", subsets: ["latin"] });
const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });
const noto_sans = Noto_Sans({ weight: "400", subsets: ["latin"] });
/* Framer Motion */
import { motion } from "framer-motion";
/* Component */
import ArtistsListBlk from "@/components/artists/artists_list_blk";
/* Fetch Data */
import fetchData from "@/lib/api";

/* fake data */
// const artists = [
//   {
//     name_tw: "羅智信",
//     name_en: "Luo Jr-shin",
//     img: "/img/fake_data/luo.jpg",
//   },
//   {
//     name_tw: "韋嘉",
//     name_en: "Wei Jia",
//     img: "/img/fake_data/5-韋嘉-《河灣》-2019-丙烯畫布-275x200cm-1.jpg",
//   },
//   {
//     name_tw: "劉安民",
//     name_en: "Lao Lianben",
//     img: "/img/fake_data/2-劉安民-《池塘松尾芭蕉》-2019-壓克力石墨-152.4x182.9cm.jpg",
//   },
//   {
//     name_tw: "蔣勳",
//     name_en: "Chiang Hsun",
//     img: "/img/fake_data/7-蔣勳《雙松》-2019-水墨設色紙本-37.8x33.5cm.jpg",
//   },
//   {
//     name_tw: "簡翊洪",
//     name_en: "Jian Yi-Hong",
//     img: "/img/fake_data/15-簡翊洪《隱几忘言》-2018-水墨設色絹本-18x20.5cm.jpg",
//   },
//   {
//     name_tw: "郭俞平",
//     name_en: "Kuo Yu Ping",
//     img: "/img/fake_data/10-郭俞平-《卵》-2018-彩色墨水-壓克力-紙-39x27cm-2-scaled.jpg",
//   },
//   {
//     name_tw: "牛俊強",
//     name_en: "NIU Jun-Qiang",
//     img: "/img/fake_data/27-牛俊強e1591950088601.jpg",
//   },
//   {
//     name_tw: "汪紹綱",
//     name_en: "Wang Shao-Gang",
//     img: "/img/fake_data/9-汪紹綱.jpg",
//   },
//   {
//     name_tw: "宋琨",
//     name_en: "Song Kun",
//     img: "/img/fake_data/5-宋琨《悠Baby-花童》-2016-油彩畫布-40x60cm.jpg",
//   },
//   {
//     name_tw: "陳可",
//     name_en: "Chen Ke",
//     img: "/img/fake_data/2-陳可-《釋迦》-2017-綜合媒材-畫布-40x40cm.jpg",
//   },
//   {
//     name_tw: "吳俊勇",
//     name_en: "Wu Junyong",
//     img: "/img/fake_data/1-吳俊勇-《Europa》-2019-水墨設色紙本-29.5x33cm.jpg",
//   },
//   {
//     name_tw: "匡峻",
//     name_en: "Kuang Jun",
//     img: "/img/fake_data/4-匡峻.jpg",
//   },
//   {
//     name_tw: "董承濂",
//     name_en: "Nick Dong",
//     img: "/img/fake_data/6-董承濂-《Because-Horizon》-168x64x23cm-2013-不鏽鋼-琺瑯-石墨鉛筆素描.jpg",
//   },
//   {
//     name_tw: "石孟鑫",
//     name_en: "Shih Meng-Hsin",
//     img: "/img/fake_data/2-石孟鑫《A》-2020-現成物-尺寸可變.jpg",
//   },
//   {
//     name_tw: "蘇昱銘",
//     name_en: "Su Yuming",
//     img: "/img/fake_data/4-蘇昱銘-《Sponge-and-Greek》-2019-石板版畫-152x112cm.jpg",
//   },
//   {
//     name_tw: "張凱鈞",
//     name_en: "Chang Kaï-Chun",
//     img: "/img/fake_data/MKG-5-2.jpg",
//   },
//   {
//     name_tw: "魯燕蓉",
//     name_en: "Monica Luu",
//     img: "/img/fake_data/魯燕蓉《山˙甜》-2022-羊毛氈-38-x-35-x-27cm-1.jpg",
//   },
// ];

export default function Artists({ useLang, artists }) {
  // console.log(artists);
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
          <ArtistsListBlk artists={artists.artists} useLang={useLang} />
        </Box>
        {/* </motion.div> */}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const artists = await fetchData(
    `
      query  {
          artists (filter:{isSign:{_eq:true}, status:{_eq:"published"} }){
            id,
            name_tw,
            name_en,
            cover {
              image {
                filename_disk
              }
            }
     
          }
      }
      `,
    {
      variables: {},
    }
  );
  return {
    props: { artists: artists.data },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
