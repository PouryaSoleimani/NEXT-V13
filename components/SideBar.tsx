"use client";

import { useState } from "react";
import { Calendar, Home, Inbox, Search, Settings, Menu } from "lucide-react";
import Link from "next/link";
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

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <button
        onClick={() => setOpen(!open)}
        className={`p-2 text-white z-[999] rounded-md transition-all duration-500 ${open ? "fixed top-3 left-64" : "fixed top-3 left-1"}`}
      >
        <Menu className={`${open ? "" : ""}`} />
      </button>
      <Sidebar className={`${open ? "w-80" : "w-16"} transition-all duration-300 overflow-hidden`}>
        <SidebarContent className="!bg-zinc-900 !text-white h-screen">
          <SidebarGroup>
            <SidebarGroupLabel className="text-white text-xl my-4 tracking-tighter">{open && "NEXT.JS"}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url} className="hover:bg-black flex items-center gap-2">
                        <item.icon />
                        {open && <span>{item.title}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
