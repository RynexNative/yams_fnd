import * as React from "react";
import clsx from "clsx";

/* ================================
   TYPES
================================ */

type ListVariant = "default" | "compact" | "spacious";
type ListAlign = "start" | "center" | "end";
type ListMarkerType = "bullet" | "number" | "none" | "custom";

interface BaseProps {
  className?: string;
  children: React.ReactNode;
}

/* ================================
   VARIANTS
================================ */

const listVariants: Record<ListVariant, string> = {
  default: "space-y-3",
  compact: "space-y-1",
  spacious: "space-y-5",
};

const listAlign: Record<ListAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

/* ================================
   LIST (CONTAINER)
================================ */

interface ListProps extends BaseProps {
  variant?: ListVariant;
  align?: ListAlign;
}

export const List: React.FC<ListProps> = ({
  variant = "default",
  align = "start",
  className,
  children,
}) => (
  <ul
    className={clsx(
      "flex flex-col",
      listVariants[variant],
      listAlign[align],
      className
    )}
  >
    {children}
  </ul>
);

/* ================================
   LIST ITEM
================================ */

interface ListItemProps extends BaseProps {
  indent?: number;
}

export const ListItem: React.FC<ListItemProps> = ({
  className,
  indent = 0,
  children,
}) => (
  <li
    style={{ paddingLeft: indent }}
    className={clsx(
      "flex gap-1",
      className
    )}
  >
    {children}
  </li>
);

/* ================================
   LIST MARKER
================================ */

interface ListMarkerProps {
  type?: ListMarkerType;
  value?: number;
  className?: string;
  children?: React.ReactNode;
}

export const ListMarker: React.FC<ListMarkerProps> = ({
  type = "bullet",
  value,
  className,
  children,
}) => {
  if (type === "none") return null;

  if (type === "custom") {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={clsx("mt-0 text-sm font-medium", className)}>
      {type === "number" ? `${value}.` : "•"}
    </div>
  );
};

/* ================================
   LIST MEDIA (IMAGE / AVATAR)
================================ */

interface ListMediaProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}

export const ListMedia: React.FC<ListMediaProps> = ({
  src,
  alt,
  size = 40,
  className,
}) => (
  <img
    src={src}
    alt={alt}
    style={{ width: size, height: size }}
    className={clsx(
      "rounded-full object-cover shrink-0",
      className
    )}
  />
);

/* ================================
   LIST CONTENT
================================ */

export const ListContent: React.FC<BaseProps> = ({
  className,
  children,
}) => (
  <div className={clsx("flex flex-col", className)}>
    {children}
  </div>
);

/* ================================
   LIST TITLE
================================ */

export const ListTitle: React.FC<BaseProps> = ({
  className,
  children,
}) => (
  <div className={clsx("font-semibold text-gray-900", className)}>
    {children}
  </div>
);

/* ================================
   LIST DESCRIPTION
================================ */

export const ListDescription: React.FC<BaseProps> = ({
  className,
  children,
}) => (
  <div className={clsx("text-sm text-gray-600", className)}>
    {children}
  </div>
);
