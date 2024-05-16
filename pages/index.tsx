import VendorDashboard from "./dashboard";
import VendorDashboardLayout from "@/components/layouts/dashboard";

const Index = () => {
  return (
    <>
      <VendorDashboardLayout>
        <VendorDashboard />
      </VendorDashboardLayout>
    </>
  );
};

export default Index;
