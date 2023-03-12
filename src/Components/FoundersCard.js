import { Button, Card, CardActions, CardContent, CardMedia, Skeleton, Typography } from "@mui/material";
import React from "react";
import img from "../assset/270x333.png";

const FoundersCard = ({ item }) => {
    const { image, name, designation, text } = item;
    return (
        <Card sx={{ maxWidth: "full" }}>
            <CardMedia sx={{ height: 333, width: 325 }} image={image} title="green iguana" />

            <CardContent>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                    {name}
                </Typography>
                <Typography variant="body1" color="text.light" sx={{ textAlign: "center" }}>
                    {designation}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FoundersCard;
