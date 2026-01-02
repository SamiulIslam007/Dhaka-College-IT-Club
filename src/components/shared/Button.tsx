import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 " +
      "cursor-pointer disabled:cursor-not-allowed " +
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
      "disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md",
      outline:
        "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
      ghost:
        "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
