import { Box, Paper, Stack, styled, Grid, Container } from "@mui/material";
import Image from "next/image";
/* Fonts */
import { Noto_Serif, Baskervville, Noto_Sans } from "next/font/google";
const noto_serif = Noto_Serif({ subsets: ["latin"] });
const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });
const noto_sans = Noto_Sans({ weight: "400", subsets: ["latin"] });
/* Framer Motion */
import { AnimatePresence, motion } from "framer-motion";
/* Component */
import EContentBlock from "@/components/exhibitions/e_content_blk";
/* Fetch Data */
import fetchData from "@/lib/api";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
  width: "100%",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {},
}));

/* fake data */
// const exhibition = {
//   name_tw: "羅智信",
//   name_en: "Luo Jr-shin",
//   title_tw: "看我舞動",
//   title_en: "Dance with Me",
//   content_tw:
//     "羅智信（1984年出生於台灣苗栗）在台北生活與工作，其創作實踐圍繞著對於多種傳統和非典型材料的實驗，從陶土、樹脂、金屬、日常物件、食物、化學材料、香味中，去探索再現世界裡所隱含的精神性與人類況境。他關注生產架構與模式所衍生的認知經驗，擅長捕捉日常生活間不穩定的、虛幻或甚至妄想的時刻。近日展覽包括：台北市立美術館，台北（2021）；利物浦雙年展，利物浦（2021）；國立臺灣美術館（2020）台北當代館，台北（2019）；台北當代藝術中心，台北（2018）；亞洲文化殿堂，光州（2017）；時代美術館，廣州（2017）；台北市立美術館，台北（2014）；皇后美術館，紐約（2013）。",
//   content_en:
//     "Luo Jr-shin (b. 1984, Miaoli, Taiwan) lives and works in Taipei. Luo’s practice revolves around the experimentation of a variety of traditional and unconventional materials. Ranging from clay, resin, metal and everyday objects to food, chemicals and scent, he investigates the underlying spirituality and human condition in our representational world. Interested in the framework and modes of production from which our cognitive experiences arise, Luo is known for capturing and amplifying the absurdity within precarious, illusionary, and sometimes delusionary moments of everyday life. Recent exhibitions include Taipei Fine Art Museum, Taipei (2021) ; Liverpool Biennial, Liverpool (2021); National Taiwan Museum of Fine Arts, Taichung (2020); MoCA Taipei, Taipei (2019) ; Taipei Contemporary Art Centre, Taipei (2018); ACC, Gwangju (2017); Times Museum, Guangzhou (2017); Taipei Fine Art Museum, Taipei (2014); and Queens Museum, New York (2013).",
//   cover: "/img/fake_data/luo.jpg",
//   begin_exhibition: "2021-10-01",
//   end_exhibition: "2021-12-12",
// };
// const artworks = [
//   {
//     name_tw: "羅智信",
//     name_en: "Luo Jr-shin",
//     title_tw: "看我舞動",
//     title_en: "Dance with Me",
//     img: "/img/fake_data/luo.jpg",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "韋嘉",
//     name_en: "Wei Jia",
//     title_tw: "韋嘉 2017-2021",
//     title_en: "Wei Jia 2017-2021",
//     img: "/img/fake_data/5-韋嘉-《河灣》-2019-丙烯畫布-275x200cm-1.jpg",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "劉安民",
//     name_en: "Lao Lianben",
//     title_tw: "《飼養箱》（旺來）、（鳥巢）、（苔球）",
//     title_en: "Glorious",
//     img: "/img/fake_data/2-劉安民-《池塘松尾芭蕉》-2019-壓克力石墨-152.4x182.9cm.jpg",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "蔣勳",
//     name_en: "Chiang Hsun",
//     title_tw: "漂流城市 - 臺北市立美術館",
//     title_en: "The Beauty of Heaven and Earth",
//     img: "/img/fake_data/7-蔣勳《雙松》-2019-水墨設色紙本-37.8x33.5cm.jpg",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "韋嘉",
//     name_en: "Wei Jia",
//     title_tw: "韋嘉 2017-2021",
//     title_en: "Wei Jia 2017-2021",
//     img: "/img/fake_data/5-韋嘉-《河灣》-2019-丙烯畫布-275x200cm-1.jpg",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "劉安民",
//     name_en: "Lao Lianben",
//     title_tw: "光華",
//     title_en: "Glorious",
//     img: "/img/fake_data/2-劉安民-《池塘松尾芭蕉》-2019-壓克力石墨-152.4x182.9cm.jpg",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
//   {
//     name_tw: "蔣勳",
//     name_en: "Chiang Hsun",
//     title_tw: "天地有大美",
//     title_en: "The Beauty of Heaven and Earth",
//     img: "/img/fake_data/7-蔣勳《雙松》-2019-水墨設色紙本-37.8x33.5cm.jpg",
//     begin_exhibition: "2021-10-01",
//     end_exhibition: "2021-12-12",
//   },
// ];

export default function Exhibition({ useLang, exhibitions }) {
  console.log(exhibitions);
  return (
    <>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <Box
            p={2}
            className={noto_serif.className}
            sx={{
              fontSize: { xs: "18px", sm: "14px" },
              fontWeight: 400,
              letterSpacing: "0.88px",
              lineHeight: { xs: "1.5", sm: "1.5" },
            }}
          >
            {exhibitions.map((e, index) => (
              <EContentBlock
                e={e}
                index={index}
                useLang={useLang}
                key={index}
              />
            ))}
          </Box>
        </motion.div>
      </Container>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const exhibitions = await fetchData(
    `
      query {
        exhibitions(filter:{id:{_eq:"${params.id}"}}) {
          id
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
          content_tw,
          content_en,
          begin_exhibition,
          end_exhibition,
          isCurrent,
          artworks {
            artworks_id {
                title_tw,
                title_en,
                caption_tw,
                caption_en,
                image {
                    filename_disk,
                    width,
                    height
                }
            }
          },
          reviews {
            reviews_id {
                title_tw,
                title_en,
                info_tw,
                info_en,
                file_tw {
                    filename_disk
                }
            }
          }
        
        }
      }
      `,
    {
      variables: {},
    }
  );
  return { props: { exhibitions: exhibitions.data.exhibitions } };
}
