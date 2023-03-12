import { Box } from "@mui/material";
import React from "react";
import SectionTitle from "../../Components/SectionTitle";

const Blog = () => {
    return (
        <Box sx={{ mt: "4rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <SectionTitle
                colored="Blog"
                sx={{
                    fontSize: "54px",
                }}
            />
        </Box>
    );
};

export default Blog;
