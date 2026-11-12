import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const styledButtonVariants = cva(
  "inline-flex h-12 items-center gap-8 rounded-none px-3 py-1 text-lg uppercase hover:cursor-pointer transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: "",
        outline:
          "border border-border bg-background hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function StyledButton({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"a"> & VariantProps<typeof styledButtonVariants>) {
  return (
    <a
      data-slot="styled-button"
      data-variant={variant}
      className={cn(styledButtonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { StyledButton, styledButtonVariants };
