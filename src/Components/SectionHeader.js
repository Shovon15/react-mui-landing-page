import { Typography } from "@mui/material";
import React from "react";

const SectionHeader = ({ title, colored, sx }) => {
    return (
        <div>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    mb: 2,
                    ...sx,
                }}
            >
                {title}
                {/* {colored && <span style={{ color: "#5502B5" }}>{colored}</span>} */}
            </Typography>
        </div>
    );
};

export default SectionHeader;
