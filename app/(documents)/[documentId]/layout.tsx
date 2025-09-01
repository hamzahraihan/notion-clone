import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { ReactNode } from "react";
import NavigationBar from "../_components/navigation-bar";

export const metadata: Metadata = {
  title: "Documents",
  description: "Document Page",
};

export default function DocumentLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full">
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <div className="w-full">
          <NavigationBar />
          {children}
        </div>
      </SidebarProvider>
    </main>
  );
}
