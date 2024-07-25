import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
  width: "100%",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {},
}));

export default function NContentBlock({ useLang, news }) {
  return (
    <>
      {/* Exhibition Content */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={10}>
        <Item sx={{ width: { xs: "100%", sm: "50%" } }}>
          {useLang ? (
            <>
              <Box
                sx={{
                  fontSize: { xs: 14, sm: 14 },
                  fontWeight: 500,
                }}
                pb={1}
                pt={2}
              >
                {news.name_tw}
              </Box>
              <Box sx={{ fontSize: 18 }} pb={2}>
                {news.title_tw}
              </Box>
              <Box sx={{ fontSize: 14 }}>{news.content_tw}</Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  fontSize: { xs: 14, sm: 14 },
                  fontWeight: 500,
                }}
                pb={1}
                pt={2}
              >
                {news.name_en}
              </Box>
              <Box sx={{ fontSize: 18 }} pb={2}>
                {news.title_en}
              </Box>
              <Box sx={{ fontSize: 14 }}>{news.content_en}</Box>
            </>
          )}
        </Item>
        <Item sx={{ width: { xs: "100%", sm: "50%" } }}>
          <Box>images slider</Box>
        </Item>
      </Stack>
    </>
  );
}
