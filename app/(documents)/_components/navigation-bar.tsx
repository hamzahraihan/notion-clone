"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Star } from "lucide-react";
import IconButton from "../_components/icon-button";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function NavigationBar() {
  const [isFavorite, setIsFavorite] = useState(false);
  console.log(isFavorite);

  return (
    <div className="sticky top-0 flex justify-between items-center p-2 px-6 z-10 bg-background">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex gap-2 items-center">
        <IconButton onClick={() => setIsFavorite(!isFavorite)}>
          <Star
            fill={isFavorite ? "yellow" : "transparent"}
            strokeWidth={isFavorite ? 0 : 2}
            size={18}
          />
        </IconButton>
        <Button variant="ghost" size="sm">
          Share
        </Button>
      </div>
    </div>
  );
}
