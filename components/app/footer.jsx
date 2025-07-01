import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const Item = styled(Paper)(({ theme }) => ({
  background: "none",
  boxShadow: "none",
  width: "100%",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "21px",
  letterSpacing: "0.88px",

  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
        }}
      >
        <Grid container direction={{ xs: "column", md: "column" }} spacing={3}>
          <Grid item xs={12}>
            <Item>
              <Box
                sx={{
                  fontSize: { xs: "10px", md: "12px" },
                  textAlign: "center",
                  letterSpacing: "1.5px",
                  fontFamily: "Roboto",
                }}
                // className="en_font"
              >
                © {year} MICHAEL KU GALLERY. All Rights Reserved
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Box
                sx={{ marginLeft: "auto", marginRight: "auto" }}
                width={"max-content"}
              >
                <Grid
                  container
                  direction={{ xs: "row", md: "row" }}
                  spacing={1}
                >
                  <Grid item xs={0}>
                    <Item>
                      <Box sx={{ textAlign: "center" }}>
                        <a
                          href="https://www.facebook.com/michaelkugallery"
                          target="_blank"
                        >
                          <FacebookIcon />
                        </a>
                      </Box>
                    </Item>
                  </Grid>
                  <Grid item xs={0}>
                    <Item>
                      <Box sx={{ textAlign: "center" }}>
                        <a
                          href="https://www.instagram.com/michaelkugallery"
                          target="_blank"
                        >
                          <InstagramIcon />
                        </a>
                      </Box>
                    </Item>
                  </Grid>
                  <Grid item xs={0}>
                    <Item>
                      <Box sx={{ textAlign: "center" }}>
                        <a href="mailto:http://ku.gallery@msa.hinet.net">
                          <EmailIcon />
                        </a>
                      </Box>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
