import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  animated?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, animated = true, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // Don't use animated version when asChild is true (Slot requires single child)
    const shouldAnimate = animated && !asChild && variant !== "ghost" && variant !== "link";
    
    if (shouldAnimate) {
      return (
        <button
          className={cn(
            "relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background group",
            className
          )}
          ref={ref}
          {...props}
        >
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(185_84%_50%)_0%,hsl(220_90%_56%)_25%,hsl(270_70%_60%)_50%,hsl(220_90%_56%)_75%,hsl(185_84%_50%)_100%)]" />
          <span
            className={cn(
              "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background backdrop-blur-3xl transition-all group-hover:bg-muted",
              size === "lg" ? "px-8 py-3 text-base font-semibold" : size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-2.5 text-sm font-medium",
              variant === "default" && "text-primary-foreground bg-card hover:bg-card/80",
              variant === "secondary" && "text-secondary bg-card hover:bg-card/80",
              variant === "outline" && "text-secondary bg-background hover:bg-muted",
              variant === "destructive" && "text-destructive bg-card hover:bg-card/80"
            )}
          >
            {children}
          </span>
        </button>
      );
    }
    
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>{children}</Comp>;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
