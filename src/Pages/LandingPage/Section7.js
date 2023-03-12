import styled from "@emotion/styled";
import { Avatar, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CompanyCard from "../../Components/CompanyCard";
import SectionTitle from "../../Components/SectionTitle";
import logo1 from "../../assset/company logo/covenant.svg";
import logo2 from "../../assset/company logo/grubspot.svg";
import logo3 from "../../assset/company logo/infinite.svg";
import logo4 from "../../assset/company logo/kromo.svg";
import logo5 from "../../assset/company logo/phasekit.svg";

const Section7 = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#FFFFFF" : "#fff",
        textAlign: "center",
        // color: theme.palette.primary.green,
        boxShadow: "none",
        border: "none",
        // padding: ".5rem",
    }));
    const cardItems = [
        {
            avatar: <Avatar />,
            name: "Mike Williams",
            designation: "Founder @Covenant",
            logo: logo1,
            text: "Vulk software is notably robust, and their analysts have helped us both maximize profitability and truly understand the incremental value of our web Ads.",
        },
        {
            avatar: <Avatar />,
            name: "Tara Reed",
            designation: "CFO @Kromo",
            logo: logo2,
            text: "our metrics and performance up and exceeding expectations, but I’ve been really impressed with the way that they manage our business.",
        },
        {
            avatar: <Avatar />,
            name: "Mike Williams",
            designation: "Founder @Covenant",
            logo: logo3,
            text: "Vulk software is notably robust, and their analysts have helped us both maximize profitability and truly understand the incremental value of our web Ads.",
        },
        {
            avatar: <Avatar />,
            name: "Nelly Olsen",
            designation: "Founder @Infinite",
            logo: logo4,
            text: "Vulk software is notably robust, and their analysts have helped us both maximize profitability and truly understand the incremental value of our web Ads.",
        },
        {
            avatar: <Avatar />,
            name: "Mike Williams",
            designation: "Founder @Covenant",
            logo: logo5,
            text: "Vulk software is notably robust, and their analysts have helped us both maximize profitability and truly understand the incremental value of our web Ads.",
        },
        {
            avatar: <Avatar />,
            name: "Adrian Felks",
            designation: "Founder @Grubspot",
            logo: logo3,
            text: "Vulk software is notably robust, and their analysts have helped us both maximize profitability and truly understand the incremental value of our web Ads.",
        },

        {
            avatar: <Avatar />,
            name: "Alan Smith",
            designation: "Manager @Proactive",
            logo: logo1,
            text: "Vulk software is notably robust, and their analysts have helped us both maximize profitability and truly understand the incremental value of our web Ads.",
        },
        {
            avatar: <Avatar />,
            name: "Lana Henriks",
            designation: "Founder @Live Talk",
            logo: logo4,
            text: "Vulk software is notably robust, and their analysts have helped us both maximize profitability and truly understand the incremental value of our web Ads.",
        },
        {
            avatar: <Avatar />,
            name: "Helen Watts",
            designation: "Founder @Gutwork",
            logo: logo2,
            text: "Vulk software is notably robust, and their analysts have helped us both maximize profitability and truly understand the incremental value of our web Ads.",
        },
    ];

    return (
        <Box sx={{ my: "2rem" }}>
            <SectionTitle
                colored="Take a quick look at what they say"
                sx={{ fontSize: { xs: "10px", sm: "12px", md: "18px" } }}
            />
            <Typography variant="h4" textAlign="center" sx={{ fontWeight: "bold", mb: 2 }}>
                why volk straight from our customers
            </Typography>
            <Grid
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 3, sm: 8, md: 12 }}
                // sx={{ p: { xs: "1rem", sm: "1rem", md: ".2rem" } }}
            >
                {cardItems.map((item, i) => (
                    <Grid item xs={12} sm={4} md={4} key={i} sx={{ textAlign: "center" }}>
                        <Item>
                            <CompanyCard item={item} />
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Section7;
