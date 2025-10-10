import React, { useState } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { decrypt } from "./encrypt";


const drawerWidth = 150;
function HomePage() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("Component1");
  const [settingsOpen, setSettingsOpen] = useState(false);

  const menuItems = ["Component 1", "Component 2", "Component 3"];

  const handleLogout = () => {
    Cookies.remove("sessionToken");
    navigate("/LoginPage");
  };
  const sessionData = Cookies.get("sessionToken");
  let username = "";

  if (sessionData) {
    try {
      const { username: encryptedUser } = JSON.parse(sessionData);
      username = decrypt(encryptedUser); 
    } catch (err) {
      console.error("Invalid session data:", err);
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: 1201 }} >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <b>Home Page</b>
          </Typography>
          <IconButton color="inherit" onClick={() => setSettingsOpen(!settingsOpen)}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={drawerOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {menuItems.map((text) => (
            <ListItem button key={text} onClick={() => setSelectedMenu(text)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8}}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          {selectedMenu}
          {/* <p>This is the {selectedMenu} content.</p> */}
        </Typography>
        <Typography>
          {selectedMenu === "Component 1" && "This is the Component 1 content."}
          {selectedMenu === "Component 2" && "This is the Component 2 content."}
          {selectedMenu === "Component 3" && "This is the Component 3 content."}
        </Typography>
      </Box>

      {settingsOpen && (
        <Paper
          elevation={3}
          sx={{
            position: "fixed",
            top: 64,
            right: 16,
            padding: 2,
            width: 200,
          }}
        >
          <Typography variant="subtitle1">Username: {username}</Typography>
          <Button
            variant="contained"
            color="error"
            sx={{ mt: 2 }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Paper>
      )}
    </Box>
  );
}

export default HomePage