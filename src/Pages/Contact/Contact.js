import { Box } from "@mui/material";
import React from "react";
import SectionTitle from "../../Components/SectionTitle";

const Contact = () => {
    return (
        <Box sx={{ mt: "4rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <SectionTitle
                colored="Contact"
                sx={{
                    fontSize: "54px",
                }}
            />
        </Box>
    );
};

export default Contact;
