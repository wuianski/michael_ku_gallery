import { Box, Paper, Stack, styled, Grid, Container } from "@mui/material";
/* Fonts */
import { Noto_Serif, Baskervville, Noto_Sans } from "next/font/google";
const noto_serif = Noto_Serif({ subsets: ["latin"] });
const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });
const noto_sans = Noto_Sans({ weight: "400", subsets: ["latin"] });
/* Framer Motion */
import { motion } from "framer-motion";
/* Component */
import ArtistInfo from "@/components/artists/artist_info";
import Artworks from "@/components/artists/artworks";
import Exhibitions from "@/components/artists/exhibitions";

/* fake data */
const artist = {
  name_tw: "羅智信",
  name_en: "Luo Jr-shin",
  content_tw:
    "羅智信（1984年出生於台灣苗栗）在台北生活與工作，其創作實踐圍繞著對於多種傳統和非典型材料的實驗，從陶土、樹脂、金屬、日常物件、食物、化學材料、香味中，去探索再現世界裡所隱含的精神性與人類況境。他關注生產架構與模式所衍生的認知經驗，擅長捕捉日常生活間不穩定的、虛幻或甚至妄想的時刻。近日展覽包括：台北市立美術館，台北（2021）；利物浦雙年展，利物浦（2021）；國立臺灣美術館（2020）台北當代館，台北（2019）；台北當代藝術中心，台北（2018）；亞洲文化殿堂，光州（2017）；時代美術館，廣州（2017）；台北市立美術館，台北（2014）；皇后美術館，紐約（2013）。",
  content_en:
    "Luo Jr-shin (b. 1984, Miaoli, Taiwan) lives and works in Taipei. Luo’s practice revolves around the experimentation of a variety of traditional and unconventional materials. Ranging from clay, resin, metal and everyday objects to food, chemicals and scent, he investigates the underlying spirituality and human condition in our representational world. Interested in the framework and modes of production from which our cognitive experiences arise, Luo is known for capturing and amplifying the absurdity within precarious, illusionary, and sometimes delusionary moments of everyday life. Recent exhibitions include Taipei Fine Art Museum, Taipei (2021) ; Liverpool Biennial, Liverpool (2021); National Taiwan Museum of Fine Arts, Taichung (2020); MoCA Taipei, Taipei (2019) ; Taipei Contemporary Art Centre, Taipei (2018); ACC, Gwangju (2017); Times Museum, Guangzhou (2017); Taipei Fine Art Museum, Taipei (2014); and Queens Museum, New York (2013).",
  cover: "/img/fake_data/luo.jpg",
};
const artworks = [
  {
    name_tw: "羅智信",
    name_en: "Luo Jr-shin",
    title_tw: "看我舞動",
    title_en: "Dance with Me",
    img: "/img/fake_data/luo.jpg",
    width: 1707,
    height: 2560,
    begin_exhibition: "2021-10-01",
    end_exhibition: "2021-12-12",
    caption_tw: "羅智信，不存在的蝸牛，2019\n\n展覽現場",
    caption_en: "Luo Jr-shin, snails(not included), 2019\n\nInstallation view",
  },
  {
    name_tw: "韋嘉",
    name_en: "Wei Jia",
    title_tw: "韋嘉 2017-2021",
    title_en: "Wei Jia 2017-2021",
    img: "/img/fake_data/5-韋嘉-《河灣》-2019-丙烯畫布-275x200cm-1.jpg",
    width: 1396,
    height: 1920,
    begin_exhibition: "2021-10-01",
    end_exhibition: "2021-12-12",
    caption_tw: "羅智信，不存在的蝸牛，2019\n\n展覽現場",
    caption_en: "Luo Jr-shin, snails(not included), 2019\n\nInstallation view",
  },
  {
    name_tw: "劉安民",
    name_en: "Lao Lianben",
    title_tw: "《飼養箱》（旺來）、（鳥巢）、（苔球）",
    title_en: "Glorious",
    img: "/img/fake_data/2-劉安民-《池塘松尾芭蕉》-2019-壓克力石墨-152.4x182.9cm.jpg",
    width: 1920,
    height: 1602,
    begin_exhibition: "2021-10-01",
    end_exhibition: "2021-12-12",
    caption_tw: "羅智信，不存在的蝸牛，2019\n\n展覽現場",
    caption_en: "Luo Jr-shin, snails(not included), 2019\n\nInstallation view",
  },
  {
    name_tw: "蔣勳",
    name_en: "Chiang Hsun",
    title_tw: "漂流城市 - 臺北市立美術館",
    title_en: "The Beauty of Heaven and Earth",
    img: "/img/fake_data/7-蔣勳《雙松》-2019-水墨設色紙本-37.8x33.5cm.jpg",
    width: 1755,
    height: 1920,
    begin_exhibition: "2021-10-01",
    end_exhibition: "2021-12-12",
    caption_tw: "羅智信，不存在的蝸牛，2019\n\n展覽現場",
    caption_en: "Luo Jr-shin, snails(not included), 2019\n\nInstallation view",
  },
  {
    name_tw: "韋嘉",
    name_en: "Wei Jia",
    title_tw: "韋嘉 2017-2021",
    title_en: "Wei Jia 2017-2021",
    img: "/img/fake_data/MKG-5-2.jpg",
    width: 1396,
    height: 1920,
    begin_exhibition: "2021-10-01",
    end_exhibition: "2021-12-12",
    caption_tw: "羅智信，不存在的蝸牛，2019\n\n展覽現場",
    caption_en: "Luo Jr-shin, snails(not included), 2019\n\nInstallation view",
  },
  // {
  //   name_tw: "劉安民",
  //   name_en: "Lao Lianben",
  //   title_tw: "光華",
  //   title_en: "Glorious",
  //   img: "/img/fake_data/2-劉安民-《池塘松尾芭蕉》-2019-壓克力石墨-152.4x182.9cm.jpg",
  //   width: 1920,
  //   height: 1602,
  //   begin_exhibition: "2021-10-01",
  //   end_exhibition: "2021-12-12",
  //   caption_tw: "羅智信，不存在的蝸牛，2019\n\n展覽現場",
  //   caption_en: "Luo Jr-shin, snails(not included), 2019\n\nInstallation view",
  // },
  // {
  //   name_tw: "蔣勳",
  //   name_en: "Chiang Hsun",
  //   title_tw: "天地有大美",
  //   title_en: "The Beauty of Heaven and Earth",
  //   img: "/img/fake_data/7-蔣勳《雙松》-2019-水墨設色紙本-37.8x33.5cm.jpg",
  //   width: 1755,
  //   height: 1920,
  //   begin_exhibition: "2021-10-01",
  //   end_exhibition: "2021-12-12",
  //   caption_tw: "羅智信，不存在的蝸牛，2019\n\n展覽現場",
  //   capttion_en: "Luo Jr-shin, snails(not included), 2019\n\nInstallation view",
  // },
];

export default function Artist({ useLang }) {
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
            <Box pl={{ xs: 0, md: 12 }} pt={2}>
              <ArtistInfo artist={artist} useLang={useLang} />
            </Box>

            <Box pl={{ xs: 0, md: 12 }} pt={8}>
              <Artworks artworks={artworks} useLang={useLang} />
            </Box>

            <Box pl={{ xs: 0, md: 12 }} pt={14}>
              <Exhibitions artworks={artworks} useLang={useLang} />
            </Box>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
