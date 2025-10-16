import * as React from "react";
import { Box, Tabs, Tab, Divider } from "@mui/material";
import ServerData from "./DataExplorerPages/ServerData";

const drawerWidthCollapsed = 60;
const topBarHeight = 60;

export default function DataExplorer() {
  const [activeTab, setActiveTab] = React.useState(0);
  const handleTabChange = (event, newValue) => setActiveTab(newValue);

  return (
    <Box
      sx={{
        position: "fixed",
        top: `${topBarHeight}px`,
        left: `${drawerWidthCollapsed}px`,
        width: `calc(100% - ${drawerWidthCollapsed}px)`,
        height: `calc(100vh - ${topBarHeight}px)`,
        bgcolor: "#f1f3f5",
        display: "flex",
        flexDirection: "column",
        pt: 0, // only top padding to create space above content
        px: 0, // remove horizontal padding so content aligns with sidebar
      }}
    >
      {/* Tabs */}
     <Tabs
  value={activeTab}
  onChange={handleTabChange}
  sx={{
    mb: 0,
    px: 1,gap:3,
    "& .MuiTab-root": { 
      fontWeight: 900, 
      color: "#666666ff", 
      textTransform: "none"  // <- this disables uppercase
    },
    "& .Mui-selected": { 
      color: "#034896ff", 
      borderBottom: "2px solid #1565c0" 
    },
  }}
>
  <Tab label="Server Data" />
  <Tab label="Template View" />
  <Tab label="Data Logger" />
</Tabs>

      <Divider sx={{ borderColor: "#ccc", mb: 2 }} />

      {/* Main content below tabs */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* ServerData filters/buttons with extra bottom spacing */}
        <Box sx={{ px: 2, mb: 2 }}>
          <ServerData />
        </Box>

        {/* White blank area below filters */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "#fff",
            borderRadius: 1,
            boxShadow: 0,
            width: "100%",
          }}
        >
          {/* Empty for now */}
        </Box>
      </Box>
    </Box>
  );
}
