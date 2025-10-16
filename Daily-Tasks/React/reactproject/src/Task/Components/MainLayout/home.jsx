import React, { useState } from "react";
import TopBar from "../Layouts/Topbar";
import SidebarWithFlyout from "../Layouts/sidebar";

// FTP Pages
import DataExplorer from "../../Pages/FTP/DataExplorer";

// User Management Pages
import UserManagement from "../../Pages/UserManagement/UserManagement";
import PasswordPolicy from "../../Pages/UserManagement/PasswordPolicy";

export default function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedSub, setSelectedSub] = useState(0);

  // Function to render main content dynamically
  const renderContent = () => {
    switch (selectedIndex) {
      case 0: // FTP Data View
        if (selectedSub === 0) return <DataExplorer />;
        if (selectedSub === 1) return <div>Search Server Data Content Here</div>;
        break;

      case 5: // User Management
        if (selectedSub === 0) return <UserManagement />;
        if (selectedSub === 1) return <PasswordPolicy />;
        break;

      // Add more cases here for other sidebar menus if needed
      default:
        return <div>Content not available</div>;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Top Bar */}
      <TopBar username="Administrator" />

      {/* Sidebar + Main content */}
      <div style={{ display: "flex", flexGrow: 1 }}>
        <SidebarWithFlyout
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          setSelectedSub={setSelectedSub}
        />

        {/* Main content */}
        <div style={{ flexGrow: 1, padding: 16 }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
