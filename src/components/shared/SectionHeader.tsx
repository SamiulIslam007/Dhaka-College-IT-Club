import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  highlight?: string;
}

export function SectionHeader({
  title,
  subtitle,
  highlight,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-12 lg:mb-16", className)} {...props}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
        {highlight ? (
          <>
            {title.split(highlight)[0]}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#34D399] bg-clip-text text-transparent">
              {highlight}
            </span>
            {title.split(highlight)[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
