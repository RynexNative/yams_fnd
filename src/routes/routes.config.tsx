import Dashboard from "../pages/teachers/TeacherPage";
// import StudentListPage from "../pages/students/StudentListPage";
// import StudentDetailPage from "../pages/students/StudentDetailPage";
import Login from "../pages/auth/Login";
// import ForbiddenPage from "../pages/ForbiddenPage";
import AppLayout from "../components/layouts/AppLayout";
import { PermissionDTO } from "@/dto/permission.dto";

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
  // { path: "/403", element: <ForbiddenPage />, title: "Forbidden" },

  {
    path: "/dashboard",
    element: <Dashboard />,
    isProtected: true,
    permission: "VIEW_DASHBOARD",
    layout: <AppLayout />,
    title: "Dashboard",
  },

  // {
  //   path: "/students",
  //   element: <StudentListPage />,
  //   isProtected: true,
  //   permission: "VIEW_STUDENTS",
  //   layout: <AppLayout />,
  //   title: "Student Management",
  //   children: [
  //     {
  //       path: ":id",
  //       element: <StudentDetailPage />,
  //       permission: "VIEW_STUDENTS",
  //       title: "Student Details",
  //     },
  //   ],
  // },
];
