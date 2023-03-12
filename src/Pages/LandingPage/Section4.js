import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import appImg from "../../assset/hero-app-screen.png";
import appImgDark from "../../assset/hero-app-screen-dark.png";
import { ColorModeContext } from "../../Context/ColorModeContext";

const Section4 = () => {
    const { colorMode } = React.useContext(ColorModeContext);
    return (
        <Box sx={{ my: "3rem" }}>
            <Box>
                <SectionTitle
                    sx={{ fontSize: { xs: "10px", sm: "12px", md: "18px" } }}
                    colored="The Industry-leading Advertising Optimization solution"
                />
                <Typography variant="h4" textAlign="center" sx={{ fontWeight: "bold" }}>
                    Build optimize, and analyze your advertising
                </Typography>
                <Grid container sm={12} xs={12} sx={{ p: "4rem" }}>
                    <Grid container>
                        <Grid item sm={12} xs={12}>
                            {colorMode.mode === "light" ? (
                                <img
                                    src={appImg}
                                    style={{ maxWidth: "100%", height: "auto", padding: 0, margin: 0 }}
                                    alt="appImg"
                                />
                            ) : (
                                <img
                                    src={appImgDark}
                                    style={{ maxWidth: "100%", height: "auto", padding: 0, margin: 0 }}
                                    alt="appImg"
                                />
                            )}
                        </Grid>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "column", md: "row" },
                        alignItems: "center",
                        m: "2rem",
                        justifyContent: "center",
                        gap: { xs: 2, sm: 2, md: 3 },
                    }}
                >
                    <Box>
                        <Typography sx={{ fontWeight: "bold" }} color="text.primary">
                            AI Powered
                        </Typography>
                        <Typography color="text.secondary">
                            Our AI handles every complex operation, letting you focus.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: "bold" }} color="text.primary">
                            Real-Time Data
                        </Typography>
                        <Typography color="text.secondary">
                            All your data is processed in real-time, for better performance.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: "bold" }} color="text.primary">
                            Fast & Secure
                        </Typography>
                        <Typography color="text.secondary">
                            Your data is virtually unhackable compared to traditional net
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Section4;
