import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

/* Components */
import B2E from "@/components/common/begin2endDate";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
  width: "100%",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {},
}));

export default function Exhibitions({ useLang, exhibitions }) {
  // console.log(exhibitions);
  return (
    <>
      <Box pb={2} sx={{ color: "#666" }}>
        {/* {useLang ? "展覽" : "Exhibitions"} */}
        {useLang ? (
          <Box className="tw_font">展覽</Box>
        ) : (
          <Box className="en_font">Exhibitions</Box>
        )}
      </Box>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 12, md: 12 }}>
        {exhibitions.map((a, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Item>
              <Link href={`/exhibitions/${a.exhibitions_id.id}`}>
                <>
                  <Box
                    sx={{
                      backgroundColor: "none",
                      width: { xs: "100%", md: "100%" },
                      height: { xs: 130, md: 338 },
                      position: "relative",
                    }}
                  >
                    <Image
                      priority={true}
                      // src={a.img}
                      src={`${process.env.DIRECTUS_URL}/assets/${a.exhibitions_id.cover.image.filename_disk}`}
                      fill
                      alt="Picture of the artwork"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                  </Box>
                  <Box pt={2}>
                    {useLang ? (
                      <>
                        <Box
                          className="tw_font"
                          sx={{ fontSize: 18, textAlign: "left" }}
                        >
                          {a.exhibitions_id.title_tw}
                        </Box>
                        <B2E
                          begin={a.exhibitions_id.begin_exhibition}
                          end={a.exhibitions_id.end_exhibition}
                        />
                      </>
                    ) : (
                      <>
                        <Box
                          className="en_font"
                          sx={{
                            fontSize: 18,
                            textAlign: "left",
                            fontStyle: "italic",
                          }}
                        >
                          {a.exhibitions_id.title_en}
                        </Box>
                        <B2E
                          begin={a.exhibitions_id.begin_exhibition}
                          end={a.exhibitions_id.end_exhibition}
                        />
                      </>
                    )}
                  </Box>
                </>
              </Link>
            </Item>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
