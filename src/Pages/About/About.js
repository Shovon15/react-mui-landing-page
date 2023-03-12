import { Box } from "@mui/material";
import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import FounderSection from "./FounderSection";
import Philosophy from "./Philosophy";
import TeamSection from "./TeamSection";

const About = () => {
    return (
        <Box sx={{ mt: "5rem", mb: "12rem" }}>
            <FounderSection />
            <Philosophy />
            <TeamSection />
        </Box>
    );
};

export default About;
