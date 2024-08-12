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
/* Fetch Data */
import fetchData from "@/lib/api";
/* Component */
import CurrentExhibitionFront from "@/components/exhibitions/current_exhibition_front";

const data_tw = "中文資料";
const data_en = "English data";

export default function Index({ useLang, current_exhibitions }) {
  // console.log(current_exhibitions.exhibitions.length);
  return (
    <>
      {/* 當期展覽 */}
      <Box p={{ xs: 4, md: 0 }} sx={{ minHeight: { xs: "50vh", md: "60vh" } }}>
        {current_exhibitions.exhibitions.length > 0 ? (
          <>
            {/* <Box pb={2} sx={{ color: "#666" }}>
              {useLang ? "當期展覽" : "Current Exhibition"}
            </Box> */}

            <CurrentExhibitionFront
              exhibitions={current_exhibitions.exhibitions}
              useLang={useLang}
            />
          </>
        ) : (
          <Box sx={{ color: "#666" }}>
            {useLang ? "目前無展覽" : "No current exhibition"}
          </Box>
        )}
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const current_exhibitions = await fetchData(
    `
      query {
        exhibitions (filter: { isCurrent: { _eq: true} }){
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
          begin_exhibition,
          end_exhibition,
          isCurrent,
    
        }
      }
    `,
    {
      variables: {},
    }
  );

  return {
    props: {
      current_exhibitions: current_exhibitions.data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
