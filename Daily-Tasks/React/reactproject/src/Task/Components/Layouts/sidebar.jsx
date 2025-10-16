import * as React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, Paper, Typography, IconButton, ClickAwayListener } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowLeftSharpIcon from '@mui/icons-material/ArrowLeftSharp';

// Sidebar icons
import InsertDriveFileSharpIcon from "@mui/icons-material/InsertDriveFileSharp";
import LockIcon from "@mui/icons-material/Lock";
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import AccountTreeSharpIcon from "@mui/icons-material/AccountTreeSharp";
import BackupSharpIcon from "@mui/icons-material/BackupSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import FindInPageSharpIcon from "@mui/icons-material/FindInPageSharp";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidthCollapsed = 60;
const flyoutWidth = 220;
const topBarHeight = 60;
const SIDEBAR_BLUE = "#1A57A6";

const menuItems = [
  { text: "FTP Data View", icon: <InsertDriveFileSharpIcon />, subItems: ["Data Explorer", "Search Server Data"] },
  { text: "Lock Settings", icon: <LockIcon />, subItems: ["Instrument Lock Settings"] },
  { text: "Scheduler", icon: <CalendarMonthSharpIcon />, subItems: ["Data Scheduler","View Edit Scheduler","Monitor Scheduler","Local File Delete Scheduler","Server File Delete Scheduler","Download Scheduler","Client Service Monitor"] },
  { text: "Masters", icon: <AccountTreeSharpIcon />, subItems: ["Base Master","Tags and Templates","Parent Parser Key"] },
  { text: "Storage", icon: <BackupSharpIcon />, subItems: ["Configuration","Rights"] },
  { text: "User Management", icon: <PersonSharpIcon />, subItems: ["User Management","Password Policy"] },
  { text: "Log History", icon: <FindInPageSharpIcon />, subItems: ["Audit Trail History","Download Logs","Upload Logs","Restore Logs","Server & Local File Delete","Logs","Scheduler Config. Logs","Instrument"] },
  { text: "Settings", icon: <SettingsIcon />, subItems: ["Preferences","License Information","Workflow Setup","Audit Trail Configuration","Maintenance"] },
];

export default function SidebarWithFlyout({ selectedIndex, setSelectedIndex, setSelectedSub }) {
  const [panelOpen, setPanelOpen] = React.useState(false);
  const [selectedSubInternal, setSelectedSubInternal] = React.useState(0);

  const handleSelect = (index) => {
    setSelectedIndex?.(index);
    setSelectedSubInternal(0);
    setSelectedSub?.(0);
    setPanelOpen(true);
  };

  const handleSubSelect = (i) => {
    setSelectedSubInternal(i);
    setSelectedSub?.(i);
    setPanelOpen(false);
  };

  const togglePanel = () => setPanelOpen((v) => !v);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar Drawer */}
      <MuiDrawer
        variant="permanent"
        PaperProps={{
          sx: {
            width: drawerWidthCollapsed,
            backgroundColor: SIDEBAR_BLUE,
            color: "white",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 1500,
            overflow:"hidden"
          },
        }}
      >
        <List sx={{ mt: 0 }}>
          {menuItems.map((item, index) => {
            const selected = selectedIndex === index;
            return (
              <ListItem key={item.text} disablePadding sx={{ mb: 0 }}>
                <ListItemButton
                  onClick={() => handleSelect(index)}
                  sx={{
                    justifyContent: "center",
                    px: 0,
                    py: 0,
                    backgroundColor: "transparent",
                    position: "relative",
                    minHeight: "60px",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                      color: selected ? "#ffffff" : "#dadadaff",
                      "&:hover": { color: "#ffffff" },
                      transition: "color 0.2s",
                    }}
                  >
                    {React.cloneElement(item.icon, { fontSize: "large", sx: { fontSize: 25 } })}
                  </ListItemIcon>

                  {/* Arrow always visible */}
                  {selected && (
                    <ArrowLeftSharpIcon
                      sx={{
                        position: "absolute",
                        right: -17,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#dadadaff",
                        fontSize: 43,
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ mb: 0, px: 0, display: "flex", justifyContent: "center" }}>
          <AccountCircleIcon sx={{ color: "white", fontSize: 38 }} />
        </Box>
      </MuiDrawer>

      {/* Flyout Menu with ClickAwayListener */}
      {panelOpen && (
        <ClickAwayListener onClickAway={() => setPanelOpen(false)}>
          <Paper
            elevation={0}
            sx={{
              position: "absolute",
              left: drawerWidthCollapsed,
              top: 0,
              height: "100vh",
              width: flyoutWidth,
              p: 2,
              bgcolor: "#f1f3f5",
              borderLeft: "1px solid rgba(0,0,0,0.06)",
              zIndex: 1499,
              pt: `${topBarHeight - 20}px`,
              boxSizing: "border-box",
            }}
          >
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
              {menuItems[selectedIndex]?.text}
            </Typography>
            <List>
              {menuItems[selectedIndex]?.subItems?.map((sub, i) => (
                <ListItem key={i} disablePadding>
                  <ListItemButton
                    onClick={() => handleSubSelect(i)}
                    sx={{
                      fontWeight: selectedSubInternal === i ? "700" : "400",
                      backgroundColor: selectedSubInternal === i ? "#e6e9ec" : "transparent",
                      mb: 1,
                      borderRadius: "none",
                      "&:hover": { bgcolor: "#eaeef2" },
                      color: "black",
                    }}
                  >
                    <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#464545ff" }}>
                      {sub}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </ClickAwayListener>
      )}

      {/* Toggle Chevron */}
      <Box
        sx={{
          position: "absolute",
          top: 27,
          left: panelOpen ? drawerWidthCollapsed + flyoutWidth : drawerWidthCollapsed,
          zIndex: 2000,
        }}
      >
        <IconButton
          onClick={togglePanel}
          sx={{
            width: 20,
            height: 32,
            borderRadius: 1,
            backgroundColor: "#1565c0",
            color: "white",
            "&:hover": { backgroundColor: "#0d47a1" },
          }}
        >
          {panelOpen ? <KeyboardDoubleArrowLeftIcon sx={{ fontSize: 20 }} /> : <KeyboardDoubleArrowRightIcon sx={{ fontSize: 20 }} />}
        </IconButton>
      </Box>
    </Box>
  );
}
