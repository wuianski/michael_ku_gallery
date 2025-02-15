import { Box, Paper, Stack, styled, Grid, Container } from "@mui/material";

/* Framer Motion */
import { motion } from "framer-motion";
/* Component */
import ArtistInfo from "@/components/artists/artist_info";
import Artworks from "@/components/artists/artworks";
import Exhibitions from "@/components/artists/exhibitions";
/* Fetch Data */
import fetchData from "@/lib/api";
/* SEO */
import { NextSeo } from "next-seo";

export default function Artist({ useLang, artists }) {
  // console.log(artists);
  /*** SEO data ***/
  const title = useLang ? artists[0].name_tw : artists[0].name_en;
  const bio = useLang ? artists[0].bio_tw : artists[0].bio_en;
  const img = artists[0].cover.image.filename_disk;
  const id = artists[0].id;
  const name_tw = artists[0].name_tw;

  const SEO = {
    title: `${artists[0].name_tw} | ${artists[0].name_en}`,
    canonical: `https://michaelkugallery.com/artists/${name_tw}`,
    description: `${artists[0].name_tw} | ${artists[0].name_en}`,
    openGraph: {
      type: "website",
      url: `https://michaelkugallery.com/artists/${name_tw}`,
      title: `${artists[0].name_tw} | ${artists[0].name_en}`,
      images: [
        {
          url: `${process.env.DIRECTUS_URL}/assets/${img}`,
          width: 800,
          height: 600,
          alt: "Picture of the artwork",
        },
      ],
      site_name: "michaelkugallery.com",
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <Container maxWidth="lg">
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
          artists  ( filter: { name_tw: { _eq: "${params.name_tw}"}, status:{_eq:"published"} }){
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
