import React from "react";
import { Box, Grid, Paper, styled } from "@mui/material";
import SectionTitle from "../../Components/SectionTitle";

const brands = [
    "https://i.ibb.co/27wHw8Y/image-5.png",
    "https://i.ibb.co/vVSVd76/image-6.png",
    "https://i.ibb.co/vVSVd76/image-6.png",
    "https://i.ibb.co/Rhk2VSh/image-9.png",
    "https://i.ibb.co/Rhk2VSh/image-9.png",
    "https://i.ibb.co/27wHw8Y/image-5.png",
    "https://i.ibb.co/vVSVd76/image-6.png",
    "https://i.ibb.co/Rhk2VSh/image-9.png",
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#FFFFFF" : "#fff",
    textAlign: "center",
    // color: theme.palette.primary.green,
    boxShadow: "none",
    padding: ".5rem",
}));

const Brands = () => {
    return (
        <Box>
            <SectionTitle
                colored="WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500"
                sx={{
                    fontSize: { xs: "10px", sm: "12px", md: "18px" },
                    textAlign: "center",
                    mt: { xs: "1rem", sm: "1rem", md: "2rem" },
                }}
            />

            <Grid
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 3, sm: 8, md: 12 }}
                sx={{ p: { xs: "1rem", sm: "1rem", md: ".2rem" } }}
            >
                {brands.map((brand, i) => (
                    <Grid item xs={12} sm={4} md={3} key={i} sx={{ textAlign: "center" }}>
                        <Item>
                            <img key={i} src={brand} alt="brands" style={{ width: "40%" }} />
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Brands;
