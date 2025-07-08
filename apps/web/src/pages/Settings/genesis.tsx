import AuthDashboardLayout from "@/layouts/Dashboard/AuthDashboardLayout";
import ProtectedLayout from "@/layouts/ProtectedLayout";

function GenesisPage() {
  return (
    <ProtectedLayout>
      <AuthDashboardLayout>Genesis Page</AuthDashboardLayout>;
    </ProtectedLayout>
  );
}

export default GenesisPage;
