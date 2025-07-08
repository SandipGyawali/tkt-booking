import { PageContainer } from "@/components/PageLayou";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import AuthDashboardLayout from "@/layouts/Dashboard/AuthDashboardLayout";
import ProtectedLayout from "@/layouts/ProtectedLayout";

function SettingsPage() {
  return (
    <ProtectedLayout>
      <AuthDashboardLayout
        breadcrumbs={[
          {
            title: "Settings",
            href: "/settings",
          },
        ]}
      >
        <PageContainer>
          <Card className="rounded-none shadow-xl bg-[#fffde8] ">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Settings</CardTitle>
              <CardDescription>Manage your settings profile</CardDescription>
            </CardHeader>
            <CardContent>Hello this is Settings page</CardContent>
          </Card>
        </PageContainer>
      </AuthDashboardLayout>
    </ProtectedLayout>
  );
}

export default SettingsPage;
