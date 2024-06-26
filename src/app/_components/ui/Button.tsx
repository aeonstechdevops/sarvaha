"use client";

import { cn } from "@/app/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { motion, MotionProps } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-secondary-1 text-color-1 hover:bg-secondary-1/90",
        secondary: "bg-primary-1 text-color-1 hover:bg-primary-1/90",
      },
      size: {
        default: "h-10 px-8 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// Custom type merging ButtonHTMLAttributes and MotionProps
type ButtonHTMLMotionProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  | "onAnimationStart"
  | "onDrag"
  | "onDragEnd"
  | "onDragStart"
  | "onPointerDown"
  | "onPointerMove"
  | "onPointerUp"
  | "onPointerCancel"
  | "onPointerEnter"
  | "onPointerLeave"
  | "onPointerOut"
  | "onPointerOver"
  | "onPointerUpCapture"
> &
  MotionProps;

export interface ButtonProps
  extends ButtonHTMLMotionProps,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 0.9 }}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
        ref={ref}
      />
    );
  },
);
Button.displayName = "Button";

export default Button;
