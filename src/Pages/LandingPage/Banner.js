import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import CheckIcon from "@mui/icons-material/Check";
import workingImg from "../../assset/working-laptop.svg";
import workingImgDark from "../../assset/working-laptop-dark.svg";
import { ColorModeContext } from "../../Context/ColorModeContext";

const Banner = () => {
    const { colorMode } = React.useContext(ColorModeContext);
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box>
                <SectionTitle
                    colored="Empower your digital marketing"
                    sx={{
                        fontSize: "54px",
                        textAlign: "center",
                    }}
                />
                <Typography
                    color="text.secondary"
                    sx={{
                        textAlign: "center",
                    }}
                >
                    The AI-powered platform to optimize and grow your ecommerce
                    <br /> business on every single store provider.
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: "center",
                        gap: { xs: 1, sm: 1, md: 2 },
                    }}
                >
                    <Box>
                        <CheckIcon fontSize="small" />
                        Reach customers
                    </Box>
                    <Box>
                        <CheckIcon fontSize="small" />
                        Save hours of time
                    </Box>
                    <Box>
                        <CheckIcon fontSize="small" />
                        Be more profitable
                    </Box>
                </Box>
                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "column", md: "row" },
                        // width: "20%",
                        gap: 1,
                        justifyContent: "center",
                        m: "2rem",
                        mx: "auto",
                        alignItems: "center",
                    }}
                >
                    <Button variant="contained" color="primary" sx={{ px: 3 }}>
                        Free trial
                    </Button>
                    <Button variant="outlined" color="primary" sx={{ px: 2 }}>
                        Learn More
                    </Button>
                </Stack>
            </Box>

            <Grid container sm={6} xs={12}>
                <Grid container>
                    <Grid item sm={12} xs={12}>
                        {colorMode.mode === "light" ? (
                            <img
                                src={workingImg}
                                style={{ maxWidth: "100%", height: "auto", padding: 0, margin: 0 }}
                                alt="workingImg"
                            />
                        ) : (
                            <img
                                src={workingImgDark}
                                style={{ maxWidth: "100%", height: "auto", padding: 0, margin: 0 }}
                                alt="workingImg"
                            />
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;
