"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; 

export default function AppButton({children, className, ...prop}: React.ComponentProps<typeof Button>) {
  return (
    <Button {...prop}  className={cn(className)}>
      {children}
    </Button>
  );
}