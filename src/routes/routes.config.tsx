import Dashboard from "@/pages/dashboard";
import StudentListPage from "../pages/students/StudentPage";
import StudentDetails from "@/pages/students/StudentDetails";
// import StudentDetailPage from "../pages/students/StudentDetailPage";
import Login from "../pages/auth/Login";
// import ForbiddenPage from "../pages/ForbiddenPage";
import AppLayout from "../components/layouts/AppLayout";
import { PermissionDTO } from "@/dto/permission.dto";
import NotFound from "@/pages/Error/NotFound";

export interface AppRoute {
  path: string;
  element: React.ReactNode;
  isProtected?: boolean;
  permission?: PermissionDTO;
  layout?: React.ReactNode;
  children?: AppRoute[];
  title?: string; // Optional: page title
}

export const routes: AppRoute[] = [
  { path: "/login", element: <Login />, title: "Login" },
  { path: "/404", element: <NotFound />, title: "Forbidden" },

  {
    path: "/dashboard",
    element: <Dashboard />,
    isProtected: true,
    permission: "can_request_tenant",
    layout: <AppLayout />,
    title: "Dashboard",
  },

  {
    path: "/students",
    element: <StudentListPage />,
    isProtected: true,
    permission: "can_request_tenant",
    layout: <AppLayout />,
    title: "Student Management",
    children: [
      {
        path: "/students/:id",
        element: <StudentDetails />,
        permission: "VIEW_BILLING",
        title: "Student Details",
      },
    ],
  },
];
