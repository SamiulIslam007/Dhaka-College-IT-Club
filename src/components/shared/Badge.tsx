import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "danger";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-muted text-muted-foreground border-border",
      primary: "bg-primary text-primary-foreground border-primary",
      secondary: "bg-secondary text-secondary-foreground border-border",
      accent: "bg-accent text-accent-foreground border-accent",
      success: "bg-[#22C55E] text-white border-[#22C55E]",
      warning: "bg-[#F59E0B] text-white border-[#F59E0B]",
      danger: "bg-[#EF4444] text-white border-[#EF4444]",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
