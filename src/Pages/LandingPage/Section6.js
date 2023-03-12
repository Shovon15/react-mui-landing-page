import styled from "@emotion/styled";
import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CardCopm from "../../Components/Card";
import SectionTitle from "../../Components/SectionTitle";
import EmailIcon from "@mui/icons-material/Email";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PaymentIcon from "@mui/icons-material/Payment";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import FacebookIcon from "@mui/icons-material/Facebook";
import SmsIcon from "@mui/icons-material/Sms";
const Section6 = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#FFFFFF" : "#fff",
        textAlign: "center",
        // color: theme.palette.primary.green,
        boxShadow: "none",
        border: "none",
        // padding: ".5rem",
    }));
    const cardItems = [
        {
            icon: <EmailIcon color="primary" />,
            heading: "Campaigns",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
        },
        {
            icon: <HomeRepairServiceIcon color="secondary" />,
            heading: "Task Management",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere sed",
        },
        {
            icon: <WidgetsIcon color="info" />,
            heading: "Personal Dashboard",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
        },
        {
            icon: <PaymentIcon color="warning" />,
            heading: "Payment Gateways",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere",
        },
        {
            icon: <AccessAlarmsIcon color="success" />,
            heading: "Time Management",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed  ",
        },
        {
            icon: <NotificationsActiveIcon color="primary" />,
            heading: "Notifications",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere ",
        },
        {
            icon: <FacebookIcon color="secondary" />,
            heading: "Social Integrations",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere sed frangere.",
        },
        {
            icon: <SmsIcon color="success" />,
            heading: "Instant Messaging",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere sed frangere.",
        },
    ];
    return (
        <Box>
            <SectionTitle colored="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
            <Grid
                container
                // spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 3, sm: 8, md: 12 }}
                // sx={{ p: { xs: "1rem", sm: "1rem", md: ".2rem" } }}
            >
                {cardItems.map((item, i) => (
                    <Grid item xs={12} sm={4} md={3} key={i} sx={{ textAlign: "center" }}>
                        <Item>
                            <CardCopm item={item} />
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Section6;
