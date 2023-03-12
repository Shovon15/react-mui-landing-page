import { Box } from "@mui/system";
import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import SectionTitle from "../../Components/SectionTitle";
import img1 from "../../assset/about section/plant-10.svg";
import img2 from "../../assset/about section/plant-4.svg";
import img3 from "../../assset/about section/plant-8.svg";
import { Grid } from "@mui/material";
import PhilosophyComp from "../../Components/PhilosophyComp";

const Philosophy = () => {
    const items = [
        {
            image: img1,
            name: "Our Mission",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui-vere falsone quaerere",
        },
        {
            image: img2,
            name: "Our Vision",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui-vere falsone quaerere",
        },
        {
            image: img3,
            name: "Our Values",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui-vere falsone quaerere",
        },
    ];
    return (
        <Box sx={{ mt: "2rem" }}>
            <SectionTitle colored="Philosophy" />
            <SectionHeader title="Our Values" />
            <Grid
                container
                spacing={{ xs: 1, md: 2 }}
                // columns={{ xs: 3, sm: 8, md: 12 }}
                sx={{ justifyContent: "center", pt: 4 }}
                // sx={{ p: { xs: "1rem", sm: "1rem", md: ".2rem" } }}
            >
                {items.map((item, i) => (
                    <Grid item xs={12} sm={4} md={3} key={i} sx={{ textAlign: "center", maxWidth: 275 }}>
                        <PhilosophyComp item={item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Philosophy;
