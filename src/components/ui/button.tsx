import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 ease-out cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring/80 focus-visible:ring-ring/60 focus-visible:ring-[4px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] hover:scale-[1.03] active:scale-[0.97] border border-primary/20",
        destructive:
          "bg-destructive/80 backdrop-blur-md text-white shadow-[0_0_20px_rgba(var(--destructive),0.2)] hover:bg-destructive focus-visible:ring-destructive/40 hover:scale-[1.03] active:scale-[0.97] border border-destructive/30",
        outline:
          "border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:bg-white/15 hover:text-accent-foreground dark:bg-black/30 dark:border-white/15 dark:hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-[1.03] active:scale-[0.97] text-foreground",
        secondary:
          "bg-secondary/60 backdrop-blur-md border border-secondary/20 text-secondary-foreground shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:bg-secondary/80 hover:shadow-[0_0_20px_rgba(var(--secondary),0.3)] hover:scale-[1.03] active:scale-[0.97]",
        ghost:
          "hover:bg-white/10 hover:backdrop-blur-md hover:text-accent-foreground dark:hover:bg-white/10 transition-colors duration-300 active:scale-[0.97]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-xl gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-xl px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
