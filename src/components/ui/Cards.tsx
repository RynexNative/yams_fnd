import * as React from "react";
import clsx from "clsx";

/* ================================
   TYPES
================================ */

type CardVariant = "default" | "primary" | "success" | "warning" | "danger";

interface BaseProps {
  className?: string;
  children: React.ReactNode;
}

/* ================================
   VARIANTS
================================ */

const cardVariants: Record<CardVariant, string> = {
  default: "bg-white border-gray-200",
  primary: "bg-blue-50 border-blue-200",
  success: "bg-green-50 border-green-200",
  warning: "bg-yellow-50 border-yellow-200",
  danger: "bg-red-50 border-red-200",
};

/* ================================
   CARD
================================ */

interface CardProps extends BaseProps {
  variant?: CardVariant;
}

export const Cards: React.FC<CardProps> = ({
  variant = "default",
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        "rounded-2xl border shadow-sm transition-colors duration-200",
        cardVariants[variant],
        className,
        "rounded-2xl border shadow-[0px_3px_5px_0px_rgba(0,0,0,0.50)] transition-colors duration-200",

      ) }
    >
      {children}
    </div>
  );
};

/* ================================
   CARD HEADER
================================ */

export const CardHeader: React.FC<BaseProps> = ({
  className,
  children,
}) => (
  <div className={clsx("px-3 border-b font-medium", className)}>
    {children}
  </div>
);

/* ================================
   CARD CONTENT
================================ */

export const CardContent: React.FC<BaseProps> = ({
  className,
  children,
}) => (
  <div className={clsx("px-3", className)}>
    {children}
  </div>
);

/* ================================
   CARD FOOTER
================================ */

export const CardFooter: React.FC<BaseProps> = ({
  className,
  children,
}) => (
  <div className={clsx("px-3 py-3 border-t", className)}>
    {children}
  </div>
);
