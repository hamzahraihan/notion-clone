import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Documents",
  description: "Document Page",
};

export default function DocumentLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
