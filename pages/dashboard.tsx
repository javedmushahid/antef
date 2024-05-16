import { ReactElement } from "react";
import { GetStaticProps } from "next";
import { Box, Grid } from "@mui/material";
import WishCard from "@/page-section/WishCard";
import VendorDashboardLayout from "@/components/layouts/dashboard";
import MapComponent from "@/components/map/MapComponent";

// =============================================================================
VendorDashboard.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================
type DashboardProps = {
  cardList: any[];
  recentPurchase: any[];
  stockOutProducts: any[];
};
// =============================================================================

export default function VendorDashboard() {
  return (
    <Box
      py={2}
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: 2,
      }}
    >
      <WishCard />
      <MapComponent />
    </Box>
  );
}
