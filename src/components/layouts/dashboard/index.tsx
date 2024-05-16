import { FC, ReactNode } from "react";
import { Box, styled } from "@mui/material";
import { Fragment, useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

// styled components
const BodyWrapper = styled(Box)<{ compact: number }>(({ theme, compact }) => ({
  transition: "margin-left 0.3s",
  marginLeft: compact ? "86px" : "280px",
  [theme.breakpoints.down("lg")]: { marginLeft: 0 },
}));

const InnerWrapper = styled(Box)(({ theme }) => ({
  transition: "all 0.3s",

  [theme.breakpoints.up("lg")]: {
    margin: "auto",
    marginLeft: "20px",
    marginRight: "20px",
  },
}));

// ======================================================
type Props = { children: ReactNode };
// ======================================================

const VendorDashboardLayout: FC<Props> = ({ children }) => {
  const [sidebarCompact, setSidebarCompact] = useState(0);
  const [showMobileSideBar, setShowMobileSideBar] = useState(0);

  // handle sidebar toggle for desktop device
  const handleCompactToggle = () =>
    setSidebarCompact((state) => (state ? 0 : 1));
  // handle sidebar toggle in mobile device
  const handleMobileDrawerToggle = () =>
    setShowMobileSideBar((state) => (state ? 0 : 1));

  return (
    <Fragment>
      <DashboardSidebar
        sidebarCompact={sidebarCompact}
        showMobileSideBar={showMobileSideBar}
        setSidebarCompact={handleCompactToggle}
        setShowMobileSideBar={handleMobileDrawerToggle}
      />

      <BodyWrapper compact={sidebarCompact ? 1 : 0}>
        <DashboardNavbar handleDrawerToggle={handleMobileDrawerToggle} />
        <InnerWrapper>{children}</InnerWrapper>
      </BodyWrapper>
    </Fragment>
  );
};

export default VendorDashboardLayout;
