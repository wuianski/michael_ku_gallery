import { Box, Paper, Stack, styled, Grid, Container } from "@mui/material";

/* Framer Motion */
import { motion } from "framer-motion";
/* Component */
import ArtistInfo from "@/components/artists/artist_info";
import Artworks from "@/components/artists/artworks";
import Exhibitions from "@/components/artists/exhibitions";
/* Fetch Data */
import fetchData from "@/lib/api";

export default function Artist({ useLang, artists }) {
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
            fontSize: { xs: "18px", sm: "14px" },
            fontWeight: 400,
            letterSpacing: "0.88px",
            lineHeight: { xs: "1.5", sm: "1.5" },
          }}
        >
          <Box pl={{ xs: 0, md: 12 }} pt={2}>
            {artists.map((artist, index) => (
              <ArtistInfo artist={artist} useLang={useLang} key={index} />
            ))}
          </Box>

          <Box pl={{ xs: 0, md: 12 }} pt={8}>
            {artists.map((artist, index) => (
              <Artworks
                artworks={artist.artworks}
                useLang={useLang}
                key={index}
              />
            ))}
          </Box>

          <Box pl={{ xs: 0, md: 12 }} pt={14}>
            {artists.map((artist, index) => (
              <Exhibitions
                exhibitions={artist.exhibitions}
                useLang={useLang}
                key={index}
              />
            ))}
          </Box>
        </Box>
        {/* </motion.div> */}
      </Container>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const artists = await fetchData(
    `
      query  {
          artists  ( filter: { id: { _eq: "${params.id}"}, status:{_eq:"published"} }){
            id
            name_tw,
            name_en,
            cover {
              image {
                filename_disk
              }
            } 
            bio_tw,
            bio_en,
            cv_tw {
              filename_disk
            },
            cv_en {
              filename_disk
            },
            website,
            artworks (limit:250, sort:["-sort"] ){ 
              sort,
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
            exhibitions {
              exhibitions_id {
                id,
                title_tw,
                title_en,
                cover {
                    image {
                        filename_disk,
                        width,
                        height
                    }
                },
                begin_exhibition,
                end_exhibition,
              }
            },
            publications {
              publications_id {
                id,
                title_tw,
                title_en,
                cover {
                    image {
                        filename_disk
                    }
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
  return { props: { artists: artists.data.artists } };
}
