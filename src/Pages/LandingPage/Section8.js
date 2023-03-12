import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import earning from "../../assset/earning.svg";
import earningDark from "../../assset/earning-dark.svg";
import { ColorModeContext } from "../../Context/ColorModeContext";

const Section8 = () => {
    const { colorMode } = React.useContext(ColorModeContext);
    return (
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "row" }, alignItems: "center" }}>
            <Box sx={{ maxWidth: { xs: "100%", md: "50%" } }}>
                <SectionTitle colored="Artificial Intelligence" sx={{ textAlign: "start" }} />
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    Unlock growth with artificial intelligence
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ my: 2 }}>
                    To grow your business on today’s dynamic marketplaces, you need an advantage. With our AI working
                    continually behind the scenes, you can unlock growth opportunities and compete at the highest level
                    24/7.
                </Typography>
                <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
                    Learn More About Our Product
                </Button>
            </Box>
            <Grid container sm={6} xs={12}>
                <Grid container>
                    <Grid item sm={12} xs={12}>
                        {colorMode.mode === "light" ? (
                            <img
                                src={earning}
                                style={{ maxWidth: "100%", height: "auto", padding: 0, margin: 0 }}
                                alt="earning"
                            />
                        ) : (
                            <img
                                src={earningDark}
                                style={{ maxWidth: "100%", height: "auto", padding: 0, margin: 0 }}
                                alt="earning"
                            />
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Section8;
