import { Box, Paper, Stack, styled, Grid, Container } from "@mui/material";
/* Fonts */
import { Noto_Serif, Baskervville, Noto_Sans } from "next/font/google";
const noto_serif = Noto_Serif({ subsets: ["latin"] });
const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });
const noto_sans = Noto_Sans({ weight: "400", subsets: ["latin"] });
/* Framer Motion */
import { motion } from "framer-motion";
/* Component */
import AContentBlock from "@/components/articles/a_content_blk";

/* fake data */
const articles = {
  name_tw: "羅智信",
  name_en: "Luo Jr-shin",
  title_tw: "看我舞動",
  title_en: "Dance with Me",
  begin_exhibition: "2021-10-01",
  end_exhibition: "2021-12-12",
  content_tw:
    "畫冊集結時代的鏡子四位參展藝術家(韋嘉/宋琨/陳可/賈藹力)的作品。韋嘉，宋琨，陳可，賈藹力，以及當然還有更多的同世代的中國藝術家，在年齡上，大約都到了超過三十歲的年紀。我們說三十而立，對於一個世代的藝術來說，是否這些三十歲的藝術家，到了一個成熟建立起自己藝術語言的階段，不只形成一個穩定的風格，也同時開始成立起一個日趨成熟確定的自我的思想體系。某種程度來說，這些藝術家不再描繪巨大的中國衝擊下的社會面貌，可能更多的從「人」(個人)的角度出發，用比較隱喻的手法來描繪他所關懷的人生觀。當然，「個人」的描繪不應只是一種自我的喃喃自語，而或許是在於建立起更深刻的思考價值體系。其中，無論是積極的、悲觀的、否定的、爆裂的、存在的、抑鬱的、簡化的，可能更重要的是朝著一個更清晰的思維前進。個人是時代的影子，而時代又像是個人的鏡子。青年藝術家建立自己的思緒語言風格的同時，也串連起一個時代的脈絡的發展。",
  content_en:
    "The album brings together the works of four participating artists (Wei Jia/Song Kun/Chen Ke/Jia Aili) in the mirror of the times. Wei Jia, Song Kun, Chen Ke, Jia Aili, and of course many more contemporary Chinese artists, are all over thirty years old. We say that thirty is the age of standing, whether these thirty-year-old artists of a generation have reached a mature stage of establishing their own artistic language, not only forming a stable style, but also beginning to establish a more mature and definite self-thinking system. To some extent, these artists no longer depict the social appearance under the great impact of China, but may start from the perspective of people (individuals), using more metaphorical methods to depict the life view they care about. Of course, the depiction of individuals should not only be a kind of self-whispering, but perhaps to establish a more profound thinking value system. Among them, whether it is positive, pessimistic, negative, explosive, existent, depressive, simplified, perhaps more importantly, it is moving towards a clearer thinking. The individual is the shadow of the times, and the times are like the mirror of the individual. While young artists establish their own thinking language style, they also connect the development of an era's context.",
  imgs: [
    "/img/fake_data/luo.jpg",
    "/img/fake_data/5-韋嘉-《河灣》-2019-丙烯畫布-275x200cm-1.jpg",
    "/img/fake_data/7-蔣勳《雙松》-2019-水墨設色紙本-37.8x33.5cm.jpg",
  ],
};

export default function Snews({ useLang }) {
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
              <AContentBlock articles={articles} useLang={useLang} />
            </Box>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
