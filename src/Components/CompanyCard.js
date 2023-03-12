import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CompanyCard = ({ item }) => {
    const { name, logo, text, designation, avatar } = item;

    return (
        <Card sx={{ minWidth: 300, border: "none", p: 2 }}>
            <CardContent sx={{ textAlign: "left", border: "none" }}>
                <Box sx={{ display: "flex" }}>
                    <Typography>{avatar}</Typography>
                    <Box sx={{ ml: 1 }}>
                        <Typography variant="h6" sx={{ fontSize: "18px", m: 0 }} color="text.primary" gutterBottom>
                            {name}
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: "" }} color="text.secondary" gutterBottom>
                            {designation}
                        </Typography>
                    </Box>
                    <Box sx={{ ml: "auto" }}>
                        <img src={logo} alt="logo" style={{ width: "78px", color: "#ffffff" }} />
                    </Box>
                </Box>
                <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CompanyCard;
