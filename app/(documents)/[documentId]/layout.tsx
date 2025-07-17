import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Documents",
  description: "Document Page",
};

export default function DocumentLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar variant="floating" />
      <main className="py-4 px-2">{children}</main>
    </SidebarProvider>
  );
}
