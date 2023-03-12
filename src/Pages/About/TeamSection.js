import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import SectionTitle from "../../Components/SectionTitle";
import TeamComp from "../../Components/TeamComp";
import img from "../../assset/270x333.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
const TeamSection = () => {
    const items = [
        {
            image: img,
            name: "Daniel Abikzer",
            designation: "CEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon1: <LinkedInIcon />,
            icon2: <TwitterIcon />,
            icon3: <GitHubIcon />,
        },
        {
            image: img,
            name: "Daniel Abikzer",
            designation: "CEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon1: <LinkedInIcon />,
            icon2: <TwitterIcon />,
            icon3: <GitHubIcon />,
        },
        {
            image: img,
            name: "Daniel Abikzer",
            designation: "CEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon1: <LinkedInIcon />,
            icon2: <TwitterIcon />,
            icon3: <GitHubIcon />,
        },
        {
            image: img,
            name: "Daniel Abikzer",
            designation: "CEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon1: <LinkedInIcon />,
            icon2: <TwitterIcon />,
            icon3: <GitHubIcon />,
        },
        {
            image: img,
            name: "Daniel Abikzer",
            designation: "CEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon1: <LinkedInIcon />,
            icon2: <TwitterIcon />,
            icon3: <GitHubIcon />,
        },
        {
            image: img,
            name: "Daniel Abikzer",
            designation: "CEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon1: <LinkedInIcon />,
            icon2: <TwitterIcon />,
            icon3: <GitHubIcon />,
        },
        {
            image: img,
            name: "Daniel Abikzer",
            designation: "CEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon1: <LinkedInIcon />,
            icon2: <TwitterIcon />,
            icon3: <GitHubIcon />,
        },
        {
            image: img,
            name: "Daniel Abikzer",
            designation: "CEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon1: <LinkedInIcon />,
            icon2: <TwitterIcon />,
            icon3: <GitHubIcon />,
        },
        {
            image: img,
            name: "Daniel Abikzer",
            designation: "CEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon1: <LinkedInIcon />,
            icon2: <TwitterIcon />,
            icon3: <GitHubIcon />,
        },
        {
            image: img,
            name: "Daniel Abikzer",
            designation: "CEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon1: <LinkedInIcon />,
            icon2: <TwitterIcon />,
            icon3: <GitHubIcon />,
        },
        {
            image: img,
            name: "Daniel Abikzer",
            designation: "CEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon1: <LinkedInIcon />,
            icon2: <TwitterIcon />,
            icon3: <GitHubIcon />,
        },
        {
            image: img,
            name: "Daniel Abikzer",
            designation: "CEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon1: <LinkedInIcon />,
            icon2: <TwitterIcon />,
            icon3: <GitHubIcon />,
        },
    ];
    return (
        <Box sx={{ mt: "2rem" }}>
            <SectionTitle colored="Talent & Glory" />
            <SectionHeader title="Meet the Team" />
            <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                // columns={{ xs: 3, sm: 8, md: 12 }}
                sx={{ justifyContent: "center", pt: 4, px: "4rem" }}
                // sx={{ p: { xs: "1rem", sm: "1rem", md: ".2rem" } }}
            >
                {items.map((item, i) => (
                    <Grid item xs={12} sm={4} md={3} key={i} sx={{ textAlign: "center", maxWidth: 295, mx: "0rem" }}>
                        <TeamComp item={item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TeamSection;
