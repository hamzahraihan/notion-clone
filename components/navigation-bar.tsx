"use client";

import { useScrollTop } from "@/hooks/useScrollTop";
import { Button } from "./ui/button";
import ModeToggle from "./toggle-theme";

const Navigation = () => {
  const isScrollTop = useScrollTop();

  return (
    <div
      className={`bg-white dark:bg-[#1f1f1f] sticky top-0 dark:text-white font-bold flex flex-row items-center justify-between p-8 border-b-neutral-100 ${isScrollTop && "border-b-2"}`}
    >
      <p>Noteground</p>
      <div className="flex items-center justify-center gap-2">
        <Button>Login</Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navigation;
