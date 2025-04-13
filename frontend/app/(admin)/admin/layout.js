import Header from "@/components/Header";
import { AdminHeader } from "@/components/admin/AdminHeader";
import "../../(client)/globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/app-sidebar";
export default function AdminLayout({ children }) {
  return (
    <html>
      <body className="bg-stone-400">
        <AdminHeader></AdminHeader>
        <SidebarProvider
          style={{
            "--sidebar-width": "20rem",
            "--sidebar-width-mobile": "20rem",
          }}
        >
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
