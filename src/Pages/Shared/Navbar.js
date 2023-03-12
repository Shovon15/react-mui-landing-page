import {
    AppBar,
    Button,
    Container,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    Tab,
    Tabs,
    Toolbar,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ColorModeContext } from "../../Context/ColorModeContext";

import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { MaterialUISwitch } from "../../Components/MaterialUISwitch";

const drawerWidth = 240;
const navItems = [
    {
        id: 0,
        path: "/",
        label: "Home",
    },
    {
        id: 1,
        path: "/about",
        label: "About",
    },
    {
        id: 2,
        path: "/blog",
        label: "Blog",
    },
    {
        id: 3,
        path: "/contact",
        label: "Contact",
    },
];

const Navbar = () => {
    const { colorMode } = React.useContext(ColorModeContext);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            {/* {colorMode.mode === "light" ? (
                <img style={{ width: "150px" }} src={darkLogo} alt="logo"></img>
            ) : (
                <img style={{ width: "150px" }} src={lightLogo} alt="logo"></img>
            )} */}
            <Typography variant="h5" component="h1" color="text.primary" sx={{ mx: "2rem", my: "1rem" }}>
                LOGO
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <Link style={{ textDecoration: "none" }} to={`${item.path}`}>
                                <ListItemText primary={item.label} sx={{ color: "primary.main" }} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav" color="inherit" sx={{ boxShadow: "none", height: "4rem" }}>
                <Container>
                    <Toolbar
                        sx={{ display: "flex", justifyContent: "space-between", "&.MuiToolbar-root": { px: "0px" } }}
                    >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                mr: 2,
                                display: { md: "none" },
                                backgroundColor: "primary.main",
                                "&:hover": {
                                    backgroundColor: "primary.light",
                                },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box>
                            <Typography variant="h5" component="h1" color="text.primary" sx={{ mx: "2rem" }}>
                                LOGO
                            </Typography>
                        </Box>

                        <Tabs
                            value={value}
                            onChange={handleChange}
                            sx={{
                                // textColor: "primary.white",
                                display: { xs: "none", sm: "none", md: "block" },
                                "& button.Mui-selected": { backgroundColor: "blue" },
                                "& .MuiTabs-indicator": {
                                    color: "primary.white",
                                    backgroundColor: "primary.main",
                                },
                            }}
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    // color="text.secondary"
                                    style={{ textDecoration: "none" }}
                                    to={`${item.path}`}
                                >
                                    <Tab
                                        value={item.id}
                                        onChange={handleChange}
                                        label={item.label}
                                        // color="text.primary"
                                        sx={{
                                            fontSize: "1rem",
                                            fontWeight: "bold",
                                            color: "text.blue",
                                        }}
                                        // variant="text"
                                    />
                                </Link>
                            ))}
                        </Tabs>

                        <Stack direction="row" spacing={2} sx={{ display: "flex", flexDirection: "row" }}>
                            <MaterialUISwitch onClick={colorMode.toggleMode} />
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "primary.blue",
                                    display: { xs: "none", sm: "none", md: "block" },
                                }}
                                fullWidth
                            >
                                Buy vulk
                            </Button>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    // container={container}
                    variant="temporary"
                    // open={state.top}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
};

export default Navbar;
