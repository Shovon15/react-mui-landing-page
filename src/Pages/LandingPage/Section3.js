import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import thinking from "../../assset/thinking.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Section3 = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "column", md: "row" },
                alignItems: "center",
                my: { xs: ".5rem", md: "2rem" },
            }}
        >
            <Box sx={{ maxWidth: { xs: "100%", md: "50%" } }}>
                <SectionTitle colored="DATA DRIVEN" sx={{ textAlign: "start" }} />
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    Your entire business, connected and powered by AI
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ my: 2 }}>
                    To grow your business on today’s dynamic marketplaces, you need an advantage. With our AI working
                    continually behind the scenes, you can unlock growth opportunities and compete at the highest level
                    24/7.
                </Typography>
                <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
                    Explore Our Features
                </Button>
            </Box>
            <Grid container sm={6} xs={12}>
                <Grid container>
                    <Grid item sm={12} xs={12}>
                        <img
                            src={thinking}
                            style={{ maxWidth: "100%", height: "auto", padding: 0, margin: 0 }}
                            alt="thinking"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Section3;
