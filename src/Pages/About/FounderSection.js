import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import SectionText from "../../Components/SectionText";
import SectionTitle from "../../Components/SectionTitle";

const FounderSection = () => {
    return (
        <Box>
            <SectionTitle colored="The brains behind" />

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
            {/* <SectionText title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate. Hoc non est positum in nostra actione." /> */}
        </Box>
    );
};

export default FounderSection;
