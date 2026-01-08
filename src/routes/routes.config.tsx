import Dashboard from "@/pages/dashboard";
import StudentListPage from "../pages/students/StudentPage";
import StudentDetails from "@/pages/students/StudentDetails";
// import StudentDetailPage from "../pages/students/StudentDetailPage";
import Login from "../pages/auth/Login";
// import ForbiddenPage from "../pages/ForbiddenPage";
import AppLayout from "../components/layouts/AppLayout";
import { PermissionDTO } from "@/dto/permission.dto";
import NotFound from "@/pages/Error/NotFound";
import LessonPlan from "@/pages/teachers/LessonPlan";
import SchemeOfWork from "@/pages/teachers/SchemeOfWork";
import Draft from "@/pages/teachers/Draft"
import Attendance from "@/pages/teachers/Attendance";

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
  {
    path: "/lessonplan",
    element: <LessonPlan />,
    isProtected: true,
    permission: "can_request_tenant",
    layout: <AppLayout />,
    title: "Lesson Plan",
  },
  {
    path: "/schemeofwork",
    element: <SchemeOfWork />,
    isProtected: true,
    permission: "can_request_tenant",
    layout: <AppLayout />,
    title: "Scheme of work",
  },
  {
    path: "/draft",
    element: <Draft />,
    isProtected: true,
    permission: "can_request_tenant",
    layout: <AppLayout />,
    title: "Draft",
  },
  {
    path: "/attendance",
    element: <Attendance />,
    isProtected: true,
    permission: "can_request_tenant",
    layout: <AppLayout />,
    title: "Attendance",
  },
];
