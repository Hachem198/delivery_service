import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Demandes",
    url: "/admin/demandes",
    icon: Home,
  },
  {
    title: "Clients",
    url: "/admin/clients",
    icon: FaUser,
  },
  {
    title: "Admins",
    url: "/admin/admins",
    icon: RiAdminFill,
  },
  {
    title: "Contact",
    url: "/admin/contact",
    icon: Inbox,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-white">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Delivery App</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="w-[200px] h-[60px] hover:bg-gray-300"
                    >
                      <item.icon />
                      <span className="text-[20px]">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
