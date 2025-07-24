import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export default function IconButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="cursor-pointer"
      onClick={onClick}
    >
      <div>{children}</div>
    </Button>
  );
}
