import { Box } from "@mui/system";
import React from "react";
import AccordionComp from "../../Components/AccordionComp";
import Banner from "./Banner";
import Brands from "./Brands";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";

const LandingPage = () => {
    return (
        <Box sx={{ m: 10 }}>
            <Banner />
            <Brands />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <AccordionComp />
        </Box>
    );
};

export default LandingPage;
