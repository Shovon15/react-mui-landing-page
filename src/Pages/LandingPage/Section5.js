import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SectionTitle from "../../Components/SectionTitle";

import AccordionComp from "../../Components/AccordionComp";

const Section5 = () => {
    return (
        <Box container>
            <Box>
                <SectionTitle
                    sx={{ fontSize: { xs: "10px", sm: "12px", md: "18px" } }}
                    colored="A solution to instantly reach your customers"
                />
                <Typography variant="h4" textAlign="center" sx={{ fontWeight: "bold" }}>
                    Goal based campaign creation made easy
                </Typography>
            </Box>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ px: { xs: "0rem", md: "4rem" } }}
            >
                <Grid item xs={12} sm={12} md={6} sx={{ p: { xs: "0rem", md: "5rem" } }}>
                    <AccordionComp />
                    {/* <Box sx={{ display: "flex", alignItems: "end", py: "1rem" }}>
                        <img src={icon} alt="icon" style={{ width: "10%" }} />
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            Goal-based Campaign Creation
                        </Typography>
                    </Box>
                    <Typography color="text.secondary">
                        Build a foundation for long-term success. Our automation utilizes your individual product-level
                        goals to create optimal advertising campaigns in four simple steps.
                    </Typography> */}
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    2
                </Grid>
            </Grid>
        </Box>
    );
};

export default Section5;
