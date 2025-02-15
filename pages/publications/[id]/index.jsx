import { Box, Paper, Stack, styled, Grid, Container } from "@mui/material";

/* Framer Motion */
import { motion } from "framer-motion";
/* Component */
import PContentBlock from "@/components/publications/p_content_blk";
import SliderFullW from "@/components/sliders/slider_full_w";
/* Fetch Data */
import fetchData from "@/lib/api";
/* SEO */
import { NextSeo } from "next-seo";

export default function Publication({ useLang, publications }) {
  // console.log(publications);
  /*** SEO data ***/
  const title = useLang ? publications[0].title_tw : publications[0].title_en;
  const img = publications[0].cover.image.filename_disk;
  const id = publications[0].id;
  const name_tw = publications[0].name_tw;

  const SEO = {
    title: `${publications[0].title_tw} | ${publications[0].title_en}`,
    canonical: `https://michaelkugallery.com/publications/${id}`,
    description: `${publications[0].title_tw} | ${publications[0].title_en}`,
    openGraph: {
      type: "website",
      url: `https://michaelkugallery.com/publications/${id}`,
      title: `${publications[0].title_tw} | ${publications[0].title_en}`,
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
            {/* <SliderFullW imgs={pub.imgs} /> */}
            {publications.map((p, index) => (
              <SliderFullW imgs={p.images} index={index} key={index} />
            ))}
          </Box>

          <Box pl={{ xs: 0, md: 12 }} pt={8}>
            {publications.map((p, index) => (
              <PContentBlock
                pub={p}
                index={index}
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
  const publications = await fetchData(
    `
      query  {
          publications (filter: { id: { _eq: "${params.id}"}, status:{_eq:"published"} }){
            id,
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
            images {
              artworks_id {
                id
                title_tw
                title_en
                image {
                    filename_disk
                }
              }
            },
            content_tw,
            content_en,
          }
      }
      `,
    {
      variables: {},
    }
  );
  return { props: { publications: publications.data.publications } };
}
