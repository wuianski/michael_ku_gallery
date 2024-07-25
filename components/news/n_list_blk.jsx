import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
  width: "100%",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {},
}));

export default function NListBlock({ useLang, news }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 12, md: 12 }}
          pl={{ xs: 0, md: 10 }}
        >
          {news.map((n, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Item>
                <Link href={`/news/${index}`}>
                  <Box
                    p={{ xs: 1.4, sm: 2 }}
                    sx={{ fontSize: 14, fontWeight: 400 }}
                  >
                    {useLang ? (
                      <>
                        <Box
                          sx={{
                            fontSize: { xs: 14, sm: 14 },
                            fontWeight: 500,
                          }}
                          pb={1}
                        >
                          {n.name_tw}
                        </Box>
                        <Box sx={{ fontWeight: 500 }} pb={1}>
                          {n.title_tw}
                        </Box>
                        <Box sx={{ fontSize: 12, color: "#666" }}>
                          <Box>
                            {n.begin_exhibition} - {n.end_exhibition}
                          </Box>
                          <Box>詳情</Box>
                        </Box>
                      </>
                    ) : (
                      <>
                        <Box
                          sx={{
                            fontSize: { xs: 14, sm: 14 },
                            fontWeight: 500,
                          }}
                          pb={1}
                        >
                          {n.name_en}
                        </Box>
                        <Box sx={{ fontWeight: 500 }} pb={1}>
                          {n.title_en}
                        </Box>
                        <Box sx={{ fontSize: 12, color: "#666" }}>
                          <Box>
                            {n.begin_exhibition} - {n.end_exhibition}
                          </Box>
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
