import { Card, CardContent, IconButton, Typography } from "@mui/material";
import React from "react";

const CardComp = ({ item }) => {
    const { icon, heading, text } = item;
    return (
        <Card sx={{ minWidth: 300, boxShadow: "none", border: "none" }}>
            <CardContent sx={{ textAlign: "left", border: "none" }}>
                <IconButton desabaled>{icon}</IconButton>
                <Typography variant="h6" sx={{ fontSize: "bold" }} color="text.primary" gutterBottom>
                    {heading}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardComp;
