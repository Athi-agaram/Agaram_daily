import * as React from "react";
import { Box, Tabs, Tab, Divider, Button } from "@mui/material";
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import EditCalendarSharpIcon from '@mui/icons-material/EditCalendarSharp';
import PersonRemoveSharpIcon from '@mui/icons-material/PersonRemoveSharp';

const drawerWidthCollapsed = 60;
const topBarHeight = 60;

export default function UserManagement() {
  const [activeTab, setActiveTab] = React.useState(0);
  const handleTabChange = (event, newValue) => setActiveTab(newValue);

  const tabLabels = ["User Group", "User Master", "User Rights", "Online User"];

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
      }}
    >
      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{
          px: 2,
          gap: 2,
          "& .MuiTab-root": {
            fontWeight: 600,
            color: "#666666ff",
            textTransform: "capitalize",
            fontSize: "0.875rem",
          },
          "& .Mui-selected": {
            color: "#034896ff",
            borderBottom: "2px solid #1565c0",
          },
        }}
      >
        {tabLabels.map((label, idx) => (
          <Tab key={idx} label={label} />
        ))}
      </Tabs>

      <Divider sx={{ borderColor: "#ccc", mb: 0 }} />

      {/* Main content below tabs */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          px: 2,
          py: 2,
          bgcolor: "#fff",
          borderRadius: 1,
        }}
      >
        {/* Tab-specific content */}
        {activeTab === 0 && (
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            {/* Buttons on the right */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mb: 2 }}>
              <Button
                variant="contained"
                startIcon={<GroupSharpIcon />}
                size="small"
                sx={{
                  backgroundColor: "#f3f3f3ff",
                  boxShadow: "none",
                  color: "#3992f8",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  fontSize: "0.69rem",
                }}
              >
                Add new group
              </Button>
              <Button
                variant="contained"
                startIcon={<EditCalendarSharpIcon />}
                size="small"
                sx={{
                  backgroundColor: "#f3f3f3ff",
                  boxShadow: "none",
                  color: "#3992f8",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  fontSize: "0.69rem",
                }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                startIcon={<PersonRemoveSharpIcon />}
                size="small"
                sx={{
                  backgroundColor: "#f3f3f3ff",
                  boxShadow: "none",
                  color: "#3992f8",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  fontSize: "0.69rem",
                }}
              >
                Active/deactivate
              </Button>
            </Box>

            {/* Split content into two halves with white background and grey outline */}
            <Box sx={{ display: "flex", gap: 2, flex: 1 }}>
              <Box
                sx={{
                  flex: 1,
                  bgcolor: "#fff",
                  border: "1px solid #f0ededff",
                  borderRadius: 1,
                  p: 2,
                }}
              >
                
              </Box>
              <Box
                sx={{
                  flex: 1,
                  bgcolor: "#fff",
                  border: "1px solid #f0ededff",
                  borderRadius: 1,
                  p: 2,
                }}
              >
                
              </Box>
            </Box>
          </Box>
        )}

        {activeTab === 1 && (
          <Box sx={{ flex: 1, bgcolor: "#fff", border: "1px solid #ccc", borderRadius: 1, p: 2 }}>
            User Master Content Here
          </Box>
        )}
        {activeTab === 2 && (
          <Box sx={{ flex: 1, bgcolor: "#fff", border: "1px solid #ccc", borderRadius: 1, p: 2 }}>
            User Rights Content Here
          </Box>
        )}
        {activeTab === 3 && (
          <Box sx={{ flex: 1, bgcolor: "#fff", border: "1px solid #ccc", borderRadius: 1, p: 2 }}>
            Online User Content Here
          </Box>
        )}
      </Box>
    </Box>
  );
}
