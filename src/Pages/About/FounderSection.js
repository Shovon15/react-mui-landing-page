import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FoundersCard from "../../Components/FoundersCard";
import SectionHeader from "../../Components/SectionHeader";
import SectionText from "../../Components/SectionText";
import SectionTitle from "../../Components/SectionTitle";
import img from "../../assset/270x333.png";
import styled from "@emotion/styled";

const FounderSection = () => {
    const items = [
        {
            image: img,
            name: "Daniel Abikzer",
            designation: "Co-Founder",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate. Hoc non est positum in nostra actione. Primum in nostrane potestate est, quid meminerimus",
        },
        {
            image: img,
            name: "Hakeem Elba",
            designation: "Co-Founder",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate. Hoc non est positum in nostra actione. Primum in nostrane potestate est, quid meminerimus",
        },
        {
            image: img,
            name: "Gianni Collaro",
            designation: "Co-Founder",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate. Hoc non est positum in nostra actione. Primum in nostrane potestate est, quid meminerimus",
        },
    ];
    return (
        <Box>
            <SectionTitle sx={{ fontSize: { xs: "14px", sm: "14px", md: "22px" } }} colored="The brains behind" />
            <SectionHeader title="Meet Our Founders" />
            <Typography
                color="text.secondary"
                sx={{
                    textAlign: "center",
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet <br /> sensum
                voluptate. Hoc non est positum in nostra actione.
            </Typography>
            <Grid
                container
                spacing={{ xs: 1, md: 2 }}
                // columns={{ xs: 3, sm: 8, md: 12 }}
                sx={{ justifyContent: "center", pt: 4 }}
                // sx={{ p: { xs: "1rem", sm: "1rem", md: ".2rem" } }}
            >
                {items.map((item, i) => (
                    <Grid item xs={12} sm={4} md={3} key={i} sx={{ textAlign: "center", maxWidth: 275 }}>
                        <FoundersCard item={item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FounderSection;
