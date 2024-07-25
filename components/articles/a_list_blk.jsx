import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
  width: "100%",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {},
}));

export default function AListBlock({ useLang, articles }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 12, md: 12 }}
          pl={{ xs: 0, md: 10 }}
        >
          {articles.map((a, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Item>
                <Link href={`/articles/${index}`}>
                  <Box
                    p={{ xs: 1.4, sm: 2 }}
                    sx={{ fontSize: 14, fontWeight: 400 }}
                  >
                    {useLang ? (
                      <>
                        <Box sx={{ fontWeight: 500 }} pb={1}>
                          {a.title_tw}
                        </Box>
                        <Box sx={{ fontSize: 12, color: "#666" }}>
                          <Box>{a.begin_exhibition}</Box>
                          <Box>詳情</Box>
                        </Box>
                      </>
                    ) : (
                      <>
                        <Box sx={{ fontWeight: 500 }} pb={1}>
                          {a.title_en}
                        </Box>
                        <Box sx={{ fontSize: 12, color: "#666" }}>
                          <Box>{a.begin_exhibition}</Box>
                          <Box>More</Box>
                        </Box>
                      </>
                    )}
                  </Box>
                </Link>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
