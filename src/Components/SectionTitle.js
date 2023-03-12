import React from "react";
import { Typography } from "@mui/material";

const SectionTitle = ({ title, colored, sx }) => {
    return (
        <div>
            <Typography
                sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    ...sx,
                }}
            >
                {title} {colored && <span style={{ color: "#5502B5" }}>{colored}</span>}
            </Typography>
        </div>
    );
};

export default SectionTitle;
