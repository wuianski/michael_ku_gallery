import { Box, Paper, Stack, styled, Grid, Container } from "@mui/material";
import Image from "next/image";

/* Framer Motion */
import { AnimatePresence, motion } from "framer-motion";
/* Component */
import EContentBlock from "@/components/exhibitions/e_content_blk";
/* Fetch Data */
import fetchData from "@/lib/api";
/* SEO */
import { NextSeo } from "next-seo";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
  width: "100%",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {},
}));

export default function Exhibition({ useLang, exhibitions }) {
  // console.log(exhibitions);
  /*** SEO data ***/
  const title = useLang ? exhibitions[0].title_tw : exhibitions[0].title_en;
  //  const bio = useLang ? exhibitions[0].bio_tw : artists[0].bio_en;
  const img = exhibitions[0].cover.image.filename_disk;
  const id = exhibitions[0].id;

  const SEO = {
    title: `${exhibitions[0].title_tw} | ${exhibitions[0].title_en}`,
    canonical: `https://michaelkugallery.com/exhibitions/${id}`,
    description: `${exhibitions[0].title_tw} | ${exhibitions[0].title_en}`,
    openGraph: {
      type: "website",
      url: `https://michaelkugallery.com/exhibitions/${id}`,
      title: `${exhibitions[0].title_tw} | ${exhibitions[0].title_en}`,
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
      {/* <NextSeo
        title={title}
        // description={bio}
        openGraph={{
          type: "website",
          url: `https://michaelkugallery.com/exhibitions/${id}`,
          title: `${title}`,
          // description: `${bio}`,
          images: [
            {
              url: `${process.env.DIRECTUS_URL}/assets/${img}`,
              width: 800,
              height: 600,
              alt: "Picture of the artwork",
            },
          ],
        }}
      /> */}
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
          {exhibitions.map((e, index) => (
            <EContentBlock e={e} index={index} useLang={useLang} key={index} />
          ))}
        </Box>
        {/* </motion.div> */}
      </Container>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const exhibitions = await fetchData(
    `
      query {
        exhibitions(filter:{id:{_eq:"${params.id}"}, status:{_eq:"published"} }) {
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
