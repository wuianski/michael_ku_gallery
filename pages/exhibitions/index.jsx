import { Box, Paper, Stack, styled, Grid, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

/* Framer Motion */
import { motion } from "framer-motion";
/* Component */
import PastExhibitions from "@/components/exhibitions/past_exhibitions";
import CurrentExhibitions from "@/components/exhibitions/current_exhibitions";
/* Fetch Data */
import fetchData from "@/lib/api";

export default function Exhibitions({
  useLang,
  current_exhibitions,
  past_exhibitions,
}) {
  // console.log(current_exhibitions);
  /* CHANGE ARRAY SORTING BY begin_exhibition */
  !past_exhibitions.exhibitions
    ? null
    : past_exhibitions.exhibitions.sort(
        (a, b) =>
          new Date(b.begin_exhibition).getTime() -
          new Date(a.begin_exhibition).getTime()
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
            fontSize: { xs: "18px", sm: "14px" },
            fontWeight: 400,
            letterSpacing: "0.88px",
            lineHeight: { xs: "1.5", sm: "1.5" },
          }}
        >
          {/* 當期展覽 */}
          <Box pl={{ xs: 0, md: 12 }} pb={12} pt={2}>
            <Box pb={2} sx={{ color: "#666" }}>
              {/* {useLang ? "當期展覽" : "Current Exhibition"} */}
              {useLang ? (
                <Box className="tw_font">當期展覽</Box>
              ) : (
                <Box className="en_font">Current Exhibition</Box>
              )}
            </Box>
            <CurrentExhibitions
              exhibitions={current_exhibitions.exhibitions}
              useLang={useLang}
            />
          </Box>
          {/* 過往展覽 */}
          <Box pl={{ xs: 0, md: 12 }}>
            <Box pb={2} sx={{ color: "#666" }}>
              {/* {useLang ? "過往展覽" : "Past Exhibitions"} */}
              {useLang ? (
                <Box className="tw_font">過往展覽</Box>
              ) : (
                <Box className="en_font">Past Exhibitions</Box>
              )}
            </Box>
            <PastExhibitions
              exhibitions={past_exhibitions.exhibitions}
              useLang={useLang}
            />
          </Box>
        </Box>
        {/* </motion.div> */}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const [current_exhibitions, past_exhibitions] = await Promise.all([
    await fetchData(
      `
      query {
        exhibitions (filter: { isCurrent: { _eq: true}, status:{_eq:"published"} }){
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
                id             
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
    ),
    await fetchData(
      `
      query {
        exhibitions (filter: { isCurrent: { _eq: false}, status:{_eq:"published"} } ){
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
                id
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
    ),
  ]);
  return {
    props: {
      current_exhibitions: current_exhibitions.data,
      past_exhibitions: past_exhibitions.data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
