"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/dashboard" && href === "/dashboard") || pathname === href;

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center my-2 gap-x-2 text-muted-foreground text-sm font-[500] bg-muted-foreground/5 pl-6 transition-all hover:text-primary hover:bg-primary/10",
        isActive &&
          "text-primary bg-primary/10 hover:bg-primary/20 hover:text-primary"
      )}
    >
      <div className="flex items-center gap-x-4 py-4">
        <Icon
          size={22}
          className={cn("hover:text-primary", isActive && "text-primary")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-primary h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};
