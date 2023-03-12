import { Card, CardContent, CardMedia, Icon, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const TeamComp = ({ item }) => {
    const { image, name, designation, text, icon1, icon2, icon3 } = item;
    return (
        <Card sx={{ maxWidth: "full" }}>
            <CardMedia sx={{ height: 300, width: 295 }} image={image} title="green iguana" />

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
                <Stack
                    gap={1}
                    sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
                    color="text.purple"
                >
                    <Icon>{icon1}</Icon>
                    <Icon>{icon2}</Icon>
                    <Icon>{icon3}</Icon>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default TeamComp;
