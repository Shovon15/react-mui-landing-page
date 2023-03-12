import { Box, Typography } from "@mui/material";
import React from "react";

const SectionText = ({ title, sx }) => {
    return (
        <Box>
            <Typography
                color="text.secondary"
                sx={{
                    textAlign: "center",
                    // maxWidth: "80%",
                    width: "70%",
                    ...sx,
                }}
                // sx={{
                //     fontWeight: {},
                //     textAlign: "center",

                // }}
            >
                {title}
            </Typography>
        </Box>
    );
};

export default SectionText;
