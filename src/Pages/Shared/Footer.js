import styled from "@emotion/styled";
import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assset/logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#FFFFFF" : "#fff",
    textAlign: "center",
    minWidth: "100%",
    // color: theme.palette.primary.green,
    boxShadow: "none",
    border: "none",
    // padding: ".5rem",
  }));
  return (
    <Box
      minHeight="80vh"
      sx={{ backgroundColor: "primary.dark", color: "text.light" }}
    >
      <Container>
        <Box sx={{ width: "100%", height: "100%", py: 4, textAlign: "center" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 3 }}
          >
            <Grid item xs={12} sm={6} md={2}>
              <img width="30%" src={logo} alt="logo" sx={{}} />
            </Grid>
            <Grid
              display="flex"
              direction="column"
              sx={{ gap: 2 }}
              item
              xs={12}
              sm={6}
              md={2}
            >
              <Typography variant="h6">PRODUCT</Typography>
              <Link style={{ textDecoration: "none" }}>
                <Typography color="text.light">Home</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography color="text.light">Search</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography color="text.light">Contact</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography color="text.light">About</Typography>
              </Link>
            </Grid>
            <Grid
              display="flex"
              direction="column"
              sx={{ gap: 2 }}
              item
              xs={12}
              sm={6}
              md={2}
            >
              <Typography variant="h6">COMPANY</Typography>
              <Link style={{ textDecoration: "none" }}>
                <Typography color="text.light">Home</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography color="text.light">Search</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography color="text.light">Contact</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography color="text.light">About</Typography>
              </Link>
            </Grid>
            <Grid
              display="flex"
              direction="column"
              sx={{ gap: 2 }}
              item
              xs={12}
              sm={6}
              md={2}
            >
              <Typography variant="h6">API</Typography>
              <Link style={{ textDecoration: "none" }}>
                <Typography color="text.light">Home</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography color="text.light">Search</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography color="text.light">Contact</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography color="text.light">About</Typography>
              </Link>
            </Grid>
            <Grid
              display="flex"
              direction="column"
              sx={{ gap: 2 }}
              item
              xs={12}
              sm={6}
              md={2}
            >
              <Typography variant="h6">ASSISTANCE</Typography>
              <Link style={{ textDecoration: "none" }}>
                <Typography color="text.light">Home</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography color="text.light">Search</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography color="text.light">Contact</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography color="text.light">About</Typography>
              </Link>
            </Grid>
            {/* <Grid display="flex" direction="column" item xs={12} sm={6} md={2}>
                            <Typography variant="h6">ASSISTANCE</Typography>
                            <Box display="flex" sx={{ justifyContent: "center", gap: 2, py: 2 }}>
                                <Link style={{ textDecoration: "none" }}>
                                    <Typography color="text.light">Home</Typography>
                                </Link>
                                <Link style={{ textDecoration: "none" }}>
                                    <Typography color="text.light">Search</Typography>
                                </Link>
                                <Link style={{ textDecoration: "none" }}>
                                    <Typography color="text.light">Contact</Typography>
                                </Link>
                                <Link style={{ textDecoration: "none" }}>
                                    <Typography color="text.light">About</Typography>
                                </Link>
                                <Link style={{ textDecoration: "none" }}>
                                    <FacebookIcon sx={{ fontSize: "2.5rem", color: "#ffffff" }} />
                                </Link>
                                <Link style={{ textDecoration: "none" }}>
                                    <TwitterIcon sx={{ fontSize: "2.5rem", color: "#ffffff" }} />
                                </Link>
                                <Link style={{ textDecoration: "none" }}>
                                    <InstagramIcon sx={{ fontSize: "2.5rem", color: "#ffffff" }} />
                                </Link> 
                            </Box>
                        </Grid> */}
            <Grid display="flex" direction="column" item xs={12} sm={6} md={2}>
              <Typography variant="h6">Subscribe Now</Typography>
              <Box
                display="flex"
                sx={{ flexDirection: "column", gap: 1, pb: 5 }}
              >
                <TextField
                  sx={{
                    mt: 2,
                    color: "text.light",
                    // "& label.Mui-focused": {
                    //     color: "green",
                    // },
                    // "& .MuiInput-underline:after": {
                    //     borderBottomColor: "green",
                    // },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "text.light",
                      },
                      "&:hover fieldset": {
                        borderColor: "primary.main",
                      },
                      // "&.Mui-focused fieldset": {
                      //     borderColor: "green",
                      // },
                    },
                  }}
                  size="small"
                  label="Email"
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    height: "2.5rem",
                    "&:hover": {
                      backgroundColor: "#300761",
                    },
                  }}
                >
                  Subscribe
                </Button>
                <Box sx={{ dispaly: "flex" }}>
                  <Link style={{ textDecoration: "none" }}>
                    <FacebookOutlinedIcon
                      sx={{ fontSize: "1.5rem", color: "#ffffff", mx: ".2rem" }}
                    />
                  </Link>
                  <Link style={{ textDecoration: "none" }}>
                    <TwitterIcon
                      sx={{ fontSize: "1.5rem", color: "#ffffff", mx: ".2rem" }}
                    />
                  </Link>
                  <Link style={{ textDecoration: "none" }}>
                    <LinkedInIcon
                      sx={{ fontSize: "1.5rem", color: "#ffffff", mx: ".2rem" }}
                    />
                  </Link>
                  <Link style={{ textDecoration: "none" }}>
                    <YouTubeIcon
                      sx={{ fontSize: "1.5rem", color: "#ffffff", mx: ".2rem" }}
                    />
                  </Link>
                  <Link style={{ textDecoration: "none" }}>
                    <GitHubIcon
                      sx={{ fontSize: "1.5rem", color: "#ffffff", mx: ".2rem" }}
                    />
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Divider color="#ffffff" sx={{ mx: "2rem" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        <Grid container spacing={2} sx={{ display: "flex", m: "2rem" }}>
          <Grid item>
            <Typography>Logo</Typography>
            {/* <img style={{ width: "12%" }} src={logo} alt="logo" /> */}
          </Grid>
          <Grid item>
            <Typography>Volk</Typography>
          </Grid>
          <Grid item>
            <Typography>Contact Us</Typography>
          </Grid>
          <Grid item>
            <Typography>privacy</Typography>
          </Grid>
          <Grid item>
            <Typography>Terms & service</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sx={{ m: "2rem", display: "flex", alignItems: "center" }}>
            <Typography>© 2022-2023 Css Ninja. All rights reserved.</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
    // <Box sx={{ minHeight: "80vh", backgroundColor: "primary.dark", color: "text.light" }}>
    //     <Typography>Footer</Typography>
    //     <Grid
    //         container
    //         spacing={{ xs: 1, md: 1 }}
    //         // minWidth="300"
    //         // columns={{ xs: 3, sm: 8, md: 12 }}
    //         // sx={{ p: { xs: "1rem", sm: "1rem", md: ".2rem" } }}
    //     >
    //         <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
    //             <Item>1</Item>
    //         </Grid>
    //         <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
    //             <Item>1</Item>
    //         </Grid>
    //         <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
    //             <Item>1</Item>
    //         </Grid>
    //         <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
    //             <Item>1</Item>
    //         </Grid>
    //         <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
    //             <Item>1</Item>
    //         </Grid>
    //     </Grid>
    //     <Divider />
    //     <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
    //         <Grid container spacing={2} sx={{ display: "flex", m: "2rem" }}>
    //             <Grid item>
    //                 <img style={{ width: "12%" }} src={logo} alt="logo" />
    //             </Grid>
    //             <Grid item>
    //                 <Typography>Volk</Typography>
    //             </Grid>
    //             <Grid item>
    //                 <Typography>Contact Us</Typography>
    //             </Grid>
    //             <Grid item>
    //                 <Typography>privacy</Typography>
    //             </Grid>
    //             <Grid item>
    //                 <Typography>Terms & service</Typography>
    //             </Grid>
    //         </Grid>
    //         <Box>2</Box>
    //     </Box>
    // </Box>
  );
};

export default Footer;
