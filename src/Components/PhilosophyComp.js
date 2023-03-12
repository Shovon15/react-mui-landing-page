import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const PhilosophyComp = ({ item }) => {
    const { image, name, text } = item;
    console.log(item.name);
    return (
        <Card
            sx={{
                maxWidth: "full",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CardMedia sx={{ height: 200, width: 225 }} image={image} title="green iguana" />
            <CardContent>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                    {name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PhilosophyComp;
