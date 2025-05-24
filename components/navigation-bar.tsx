"use client";

import { useScrollTop } from "@/hooks/useScrollTop";

const Navigation = () => {
  const isScrollTop = useScrollTop();

  return (
    <div
      className={`bg-white sticky top-0 dark:text-white flex flex-row p-4 border-b-neutral-100 ${isScrollTop && "border-b-2"}`}
    >
      Noteground
    </div>
  );
};

export default Navigation;
