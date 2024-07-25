import Head from "next/head";
import Image from "next/image";
/* MUI */
import { Box } from "@mui/material";
/* Fonts */
import {
  Noto_Serif,
  Baskervville,
  Noto_Sans_TC,
  Noto_Serif_TC,
} from "next/font/google";
const noto_serif = Noto_Serif({ subsets: ["latin"] });
const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });
const noto_sans_tc = Noto_Sans_TC({ subsets: ["latin"] });
const noto_serif_tc = Noto_Serif_TC({ weight: "400", subsets: ["latin"] });

const data_tw = "中文資料";
const data_en = "English data";

export default function Index({ useLang }) {
  // console.log(useLang);
  return (
    <>
      <Box>
        {useLang ? (
          <Box className={noto_serif_tc.className}>{data_tw}</Box>
        ) : (
          <Box className={baskervville.className}>{data_en}</Box>
        )}
      </Box>
    </>
  );
}
