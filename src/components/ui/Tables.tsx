import * as React from "react";
import clsx from "clsx";

/* ================================
   TYPES
================================ */

type TableVariant = "default" | "primary" | "success" | "warning" | "danger";

interface BaseProps {
  className?: string;
  children: React.ReactNode;
}

/* ================================
   VARIANTS
================================ */

const tableVariants: Record<TableVariant, string> = {
  default: "border-gray-200",
  primary: "border-blue-200",
  success: "border-green-200",
  warning: "border-yellow-200",
  danger: "border-red-200",
};

const headerVariants: Record<TableVariant, string> = {
  default: "bg-gray-50 text-gray-700",
  primary: "bg-blue-50 text-blue-700",
  success: "bg-green-50 text-green-700",
  warning: "bg-yellow-50 text-yellow-700",
  danger: "bg-red-50 text-red-700",
};

/* ================================
   TABLE
================================ */

interface TableProps extends BaseProps {
  variant?: TableVariant;
}

export const Table: React.FC<TableProps> = ({
  variant = "default",
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        "w-full overflow-hidden rounded-2xl shadow-sm",
        tableVariants[variant],
        className
      )}
    >
      <table className="w-full border-collapse">
        {children}
      </table>
    </div>
  );
};

/* ================================
   TABLE HEADER
================================ */

interface TableHeaderProps extends BaseProps {
  variant?: TableVariant;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  variant = "default",
  className,
  children,
}) => (
  <thead
    className={clsx(
      "border-b text-sm font-semibold",
      headerVariants[variant],
      className
    )}
  >
    {children}
  </thead>
);

/* ================================
   TABLE BODY
================================ */

export const TableBody: React.FC<BaseProps> = ({
  className,
  children,
}) => (
  <tbody
    className={clsx(
      " divide-y divide-gray-100 text-sm",
      className
    )}
  >
    {children}
  </tbody>
);

/* ================================
   TABLE ROW
================================ */

export const TableRow: React.FC<BaseProps> = ({
  className,
  children,
}) => (
  <tr
    className={clsx(
      "border-b transition-colors hover:bg-gray-50",
      className
    )}
  >
    {children}
  </tr>
);

/* ================================
   TABLE HEAD CELL
================================ */

export const TableHead: React.FC<BaseProps> = ({
  className,
  children,
}) => (
  <th
    className={clsx(
      "px-4 py-3 text-left font-medium",
      className
    )}
  >
    {children}
  </th>
);

/* ================================
   TABLE CELL
================================ */

export const TableCell: React.FC<BaseProps> = ({
  className,
  children,
}) => (
  <td
    className={clsx(
      "px-4 py-3 text-gray-700",
      className
    )}
  >
    {children}
  </td>
);
