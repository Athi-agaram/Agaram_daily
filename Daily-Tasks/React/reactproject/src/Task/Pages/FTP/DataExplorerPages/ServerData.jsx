import * as React from "react";
import { Box, Typography, IconButton, Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// Icons for buttons
import FilterAltSharpIcon from "@mui/icons-material/FilterAltSharp";
import RestartAltSharpIcon from "@mui/icons-material/RestartAltSharp";
import CachedSharpIcon from "@mui/icons-material/CachedSharp";
import SettingsIcon from "@mui/icons-material/Settings";

export default function ServerData() {
  const filters = {
    storageGroup: "SDMS_ftp",
    client: "DESKTOP-50DBU45",
    instrument: "cu-summary",
    taskStatus: "Active",
    workflowStatus: "All",
    recordsDuration: "Current Date",
  };

  const mockOptions = {
    storageGroup: ["SDMS_ftp", "SDMS_local", "SDMS_cloud"],
    client: ["DESKTOP-50DBU45", "ClientA", "ClientB"],
    instrument: ["cu-summary", "InstrumentA", "InstrumentB"],
    taskStatus: ["Active", "Inactive", "Pending"],
    workflowStatus: ["All", "Completed", "Error"],
    recordsDuration: ["Current Date", "Last Week", "Last Month"],
  };

  const filtersArray = [
    { key: "storageGroup", label: "Storage Group" },
    { key: "client", label: "Client" },
    { key: "instrument", label: "Instrument" },
    { key: "taskStatus", label: "Task Status" },
    { key: "workflowStatus", label: "Workflow Status" },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuOptions, setMenuOptions] = React.useState([]);
  const [menuKey, setMenuKey] = React.useState("");
  const [menuWidth, setMenuWidth] = React.useState(200); // default width
  const [selectedFilter, setSelectedFilter] = React.useState(filters);

  const handleClick = (event, key) => {
    setAnchorEl(event.currentTarget);
    setMenuOptions(mockOptions[key]);
    setMenuKey(key);
    setMenuWidth(event.currentTarget.offsetWidth); // dynamically set menu width
  };

  const handleClose = () => setAnchorEl(null);

  const handleSelect = (key, value) => {
    setSelectedFilter((prev) => ({ ...prev, [key]: value }));
    handleClose();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {/* First row: main filters */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {filtersArray.map((item) => (
          <Box
            key={item.key}
            sx={{
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              minWidth: 120,
              maxWidth: 200,
              flex: "1 1 150px",
            }}
            onClick={(e) => handleClick(e, item.key)}
          >
            <Typography sx={{ fontWeight: 600, fontSize: 12, color: "#555" }}>
              {item.label}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #ccc",
                mt: 0.5,
                minHeight: 28,
              }}
            >
              <Typography sx={{ flexGrow: 1, fontSize: 13, fontWeight: 600, color: "#3b3a3aff",fontFamily:"verdana" }}>
                {selectedFilter[item.key]}
              </Typography>
              <IconButton size="small" sx={{ p: 0 }}>
                <ArrowDropDownIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Second row: Records Duration aligned with Storage Group width */}
      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, flexWrap: "wrap" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            minWidth: 200, // same as Storage Group
            maxWidth: 250,
          }}
          onClick={(e) => handleClick(e, "recordsDuration")}
        >
          <Typography sx={{ fontWeight: 600, fontSize: 12, color: "#555454ff" }}>
            Records Duration
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #ccc",
              mt: 0.5,
              minHeight: 32,
            }}
          >
            <Typography sx={{ flexGrow: 1, fontSize: 13, fontWeight: 600,fontFamily:"verdana", color: "#3b3a3aff" }}>
              {selectedFilter.recordsDuration}
            </Typography>
            <IconButton size="small" sx={{ p: 0 }}>
              <ArrowDropDownIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Action buttons aligned below Client (2nd filter) */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1, ml: `calc(20px + 5px)` }}>
          <Button
            size="small"
            startIcon={<FilterAltSharpIcon />}
            sx={{ backgroundColor: "white", fontWeight: 600, fontSize: 11, textTransform: "none" }}
          >
            Filter
          </Button>
          <Button
            size="small"
            startIcon={<RestartAltSharpIcon />}
            sx={{ backgroundColor: "white", fontWeight: 600, fontSize: 11, textTransform: "none" }}
          >
            Reset
          </Button>
          <Button
            size="small"
            startIcon={<CachedSharpIcon />}
            sx={{ backgroundColor: "white", fontWeight: 600, fontSize: 11, textTransform: "none" }}
          >
            Refresh
          </Button>
          <Button
            size="small"
            startIcon={<SettingsIcon />}
            sx={{ backgroundColor: "white", fontWeight: 600, fontSize: 11, textTransform: "none" }}
          >
            Configuration
          </Button>
        </Box>
      </Box>

      {/* Menu for dropdowns */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ sx: { width: `${menuWidth}px` } }} // <-- Set menu width dynamically
      >
        {menuOptions.map((option, idx) => (
          <MenuItem key={idx} onClick={() => handleSelect(menuKey, option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
