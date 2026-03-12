import React, { useEffect, useState, useRef } from "react";
import { cn } from "../lib/utils";
import { Loader2 } from "lucide-react";
import { cva } from "class-variance-authority";

const confettiButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600",
        gradient:
          "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-md",
        lg: "h-12 px-6 py-3 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const ConfettiButton = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      children,
      icon,
      loading = false,
      triggerOnHover = false,
      ...props
    },
    ref
  ) => {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
      if (!window.confetti) {
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js";
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);
      } else {
        setScriptLoaded(true);
      }
    }, []);

    const triggerConfetti = () => {
      if (window.confetti && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        window.confetti({
          particleCount: 100,
          spread: 70,
          origin: { x, y },
        });
      }
    };

    return (
      <button
        ref={(node) => {
          buttonRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(confettiButtonVariants({ variant, size }), className)}
        onClick={(e) => {
          if (scriptLoaded) triggerConfetti();
          props.onClick?.(e);
        }}
        onMouseEnter={triggerOnHover ? triggerConfetti : undefined}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {icon}
        {children}
      </button>
    );
  }
);

export default ConfettiButton;