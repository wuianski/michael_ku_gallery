import { Box, Paper, Stack, styled, Grid, Container } from "@mui/material";

/* Framer Motion */
import { motion } from "framer-motion";
/* Component */
import ArtistsListBlk from "@/components/artists/artists_list_blk";
/* Fetch Data */
import fetchData from "@/lib/api";

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
          // className="tw_font"
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
