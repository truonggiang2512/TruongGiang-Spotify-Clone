import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box, Divider } from "@mui/material";
import Link from "next/link";
const drawerWidth = 240;
const DrawerComponent = () => {
  const renderButton = [
    { name: "Home", icon: "/Home_Fill_S.png", href: "" },
    { name: "Search", icon: "/Search_S.png", href: "search" },
    { name: "Your Library", icon: "/Library_S.png", href: "your-library" },
    {
      name: "Create Playlist",
      icon: "/+Library_S.png",
      href: "create-playlist",
    },
    { name: "Liked Songs", icon: "/Liked Songs_S.png", href: "liked-song" },
  ];

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ minHeight: { xs: "35px" } }} />
        <List>
          {renderButton.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              style={{ textDecoration: "none", color: "inherit" }}
              passHref
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <img width={"65%"} height={"50%"} src={button?.icon} />
                  </ListItemIcon>
                  <ListItemText primary={button.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
          <Box py={1} px={2}>
            <Divider variant="fullWidth" />
          </Box>
        </List>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
