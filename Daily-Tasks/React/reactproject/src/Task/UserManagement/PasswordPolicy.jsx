import * as React from "react";
import {
  Box,
  Tabs,
  Tab,
  Divider,
  Typography,
  Switch,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

const drawerWidthCollapsed = 60;
const topBarHeight = 60;

export default function PasswordPolicy() {
  const [dbLogin, setDbLogin] = React.useState(true);
  const [complexPolicy, setComplexPolicy] = React.useState(false);

  const tabLabels = ["Password Policy"];

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
        value={0}
        sx={{
          px: 2,
          gap: 5,
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

      {/* Main white background content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: 2,
          py: 1,
          bgcolor: "#fff",
          height: "100%",
          borderRadius: 1,
          position: "relative",
        }}
      >
        {/* Top row: Database login (left), Save button (right) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 0,
          }}
        >
          {/* Left: Database Login */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ mr: 1, color: "#555", fontSize: 12, fontWeight: 600 }}>
              Database Based Login
            </Typography>
            <Switch
              size="small"
              checked={dbLogin}
              onChange={() => setDbLogin(!dbLogin)}
              sx={{ transform: "scale(0.8)" }}
            />
          </Box>

          {/* Right: Save button */}
          <Button
            variant="contained"
            size="small"
            startIcon={<CheckBoxOutlinedIcon />}
            sx={{
              backgroundColor: "#f3f3f3",
              boxShadow: "none",
              color: "#3992f8",
              fontWeight: 600,
              textTransform: "capitalize",
              fontSize: "0.69rem",
              "&:hover": { backgroundColor: "#e7e7e7" },
            }}
          >
            Save
          </Button>
        </Box>

        {/* Complex Password Policy - centered, does not affect left inputs */}
        <Box
          sx={{
            position: "absolute",
            top: 15,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#034896ff",
              fontWeight: "bold",
              fontSize: "0.95rem",
              mb: 0,
            }}
          >
            Complex Password Policy
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
            <Typography sx={{ color: "#5f5e5eff", fontSize: 12, fontWeight: 600, mr: 0 }}>
              Complex Password Policy
            </Typography>
            <Checkbox
              size="small"
              checked={complexPolicy}
              onChange={() => setComplexPolicy(!complexPolicy)}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
            />
          </Box>

          {complexPolicy && (
            <Box sx={{ mt:1, display: "flex", flexDirection: "column", gap: 1,mr:-23 }}>
              {/* NOTE - yellow highlight */}
              <Box
                sx={{
                  px: 0,
                  py: 0,
                  bgcolor: "#fcff3fff",
                  borderRadius: "none",
                  maxWidth: "500px",
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, color: "#4d4d4dff", fontSize: 12}}
                >
                  NOTE:- The total length of complex password must be greater than or equal to
                  minimum password length and less than or equal to maximum password length.
                </Typography>
              </Box>

              {/* Inputs for complex password */}
              {[
                "Minimum number of Uppercase characters",
                "Minimum number of Lowercase characters",
                "Minimum number of Numeric characters",
                "Minimum number of Special characters",
              ].map((label, idx) => (
                <Box key={idx} sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 12, color: "#5f5f5f", mb: 0.5,fontWeight:"600" }}>
                    {label}
                  </Typography>
                  <TextField
                    type="number"
                    defaultValue={0}
                    variant="standard"
                    InputProps={{
                      disableUnderline: false,
                      style: { fontSize: 12, color: "#444", fontWeight: 600 },
                    }}
                    sx={{
                      width: "100%",
                      maxWidth: "330px",
                      "& .MuiInput-underline:before": { borderBottomColor: "#8b8b8b" },
                      "& .MuiInput-underline:after": { borderBottomColor: "#1565c0" },
                    }}
                  />
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {/* Left-side inputs below Database Login */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          {[
            { label: "Minimum Password Length (Between 4 and 20 Characters)", value: 4 },
            { label: "Maximum Password Length (Between 4 and 20 Characters)", value: 10 },
            { label: "Password History (Between 1 and 5 Times)", value: 5 },
            { label: "Password Expiry (Between 1 and 180 Days)", value: 90 },
            { label: "Autolock Policy (Between 1 and 5 Times)", value: 3 },
          ].map((item, i) => (
            <Box key={i} sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  color: "#5f5f5f",
                  fontSize: 12,
                  mb: 0.5,
                  fontWeight: 600,
                }}
              >
                {item.label}
              </Typography>
              <TextField
                defaultValue={item.value}
                variant="standard"
                InputProps={{
                  disableUnderline: false,
                  style: { fontSize: 12, color: "#444", fontWeight: 600 },
                }}
                sx={{
                  width: "100%",
                  maxWidth: "330px",
                  "& .MuiInput-underline:before": { borderBottomColor: "#8b8b8b" },
                  "& .MuiInput-underline:after": { borderBottomColor: "#1565c0" },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
