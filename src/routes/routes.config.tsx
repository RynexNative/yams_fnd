import Dashboard from "@/pages/dashboard";
import StudentListPage from "../pages/students/StudentPage";
import StudentDetails from "@/pages/students/StudentDetails";
// import StudentDetailPage from "../pages/students/StudentDetailPage";
import Login from "../pages/auth/Login";
// import ForbiddenPage from "../pages/ForbiddenPage";
import AppLayout from "../components/layouts/AppLayout";
import { PermissionDTO } from "@/dto/permission.dto";
import NotFound from "@/pages/Error/NotFound";
import LessonPlan from "@/pages/teachers/lesson_plan/LessonPlan";
import SchemeOfWork from "@/pages/teachers/scheme_of_work/SchemeOfWork";
import Draft from "@/pages/teachers/Draft"
import Attendance from "@/pages/teachers/attendance/Attendance";
import LessonplanAdd from "@/pages/teachers/lesson_plan/add.LessonPlan";
import SchemeofWorkAdd from "@/pages/teachers/scheme_of_work/add.Scheme";
import { AccountType } from "@/dto/enums"
import TDashboard from "@/pages/teachers/dashboard";
import Settings from "@/pages/Settings";
import JoinSchool from "@/pages/teachers/JoinSchool"
import RegisterSchool from "@/pages/teachers/school_application/school_application";
import Notes from "@/pages/teachers/Library/notes";
import Library from "@/pages/teachers/Library/library";
import StudentPage from "../pages/students/StudentPage";
import Students from "@/pages/teachers/StudentManagement/StudentInfo";
import Calendar from "@/pages/teachers/calendar/calendar";
import Exams from "@/pages/teachers/exams/exams";
import Fees from "@/pages/teachers/fees/fees";
import Messages from "@/pages/teachers/messages/messages";
import Meetings from "@/pages/teachers/meetings/meetings";
import Classes from "@/pages/teachers/classes/classes";
import { PermissionCode, PERMISSIONS } from "@/dto/permission.contract";
import Landing from "@/pages/LandingPage/landingpage";
import Register from "@/pages/auth/Register";


export interface AppRoute {
  path: string;
  element: React.ReactNode;
  isProtected?: boolean;
  permission?: PermissionCode;
  allowedAccountTypes?: AccountType[];
  layout?: React.ReactNode;
  children?: AppRoute[];
  title?: string; // Optional: page title
}

export const routes: AppRoute[] = [
  // ==============================================================
  // Public
  // ==============================================================
  { path: "/", element: <Landing />},
  { path: "/login", element: <Login />, title: "Login" },
  { path: "/register", element: <Register /> },
  { path: "/404", element: <NotFound />, title: "Not Found" },

  // ==============================================================
  // Teacher Dashboard
  // ==============================================================
  {
    path: "/t/dashboard",
    element: <TDashboard />,
    isProtected: true,
    permission: PERMISSIONS.CAN_VIEW_DASHBOARD,
    allowedAccountTypes: [AccountType.TEACHER],
    layout: <AppLayout />,
    title: "Dashboard",
  },

  // ==============================================================
  // Students
  // ==============================================================
  {
    path: "/t/students",
    element: <Students />,
    isProtected: true,
    permission: PERMISSIONS.CAN_MANAGE_STUDENTS,
    allowedAccountTypes: [AccountType.TEACHER],
    layout: <AppLayout />,
    title: "Students",
    children: [
      {
        path: "/t/students/:id",
        element: <StudentDetails />,
        permission: PERMISSIONS.CAN_MANAGE_STUDENTS,
        title: "Student Details",
      },
    ],
  },

  // ==============================================================
  // Academics
  // ==============================================================
  {
    path: "/t/lessonplan",
    element: <LessonPlan />,
    isProtected: true,
    permission: PERMISSIONS.CAN_VIEW_LESSON_PLAN,
    allowedAccountTypes: [AccountType.TEACHER],
    layout: <AppLayout />,
    title:'Lesson Plan'
  },
  {
    path: "/t/schemeofwork",
    element: <SchemeOfWork />,
    isProtected: true,
    permission: PERMISSIONS.CAN_VIEW_SCHEME,
    allowedAccountTypes: [AccountType.TEACHER],
    layout: <AppLayout />,
  },
  {
    path: "/t/draft",
    element: <Draft />,
    isProtected: true,
    permission: PERMISSIONS.CAN_VIEW_DRAFT,
    allowedAccountTypes: [AccountType.TEACHER],
    layout: <AppLayout />,
  },

  // ==============================================================
  // School
  // ==============================================================
  {
    path: "/t/library",
    element: <Library />,
    isProtected: true,
    permission: PERMISSIONS.CAN_VIEW_LIBRARY,
    allowedAccountTypes: [AccountType.TEACHER],
    layout: <AppLayout />,
  },
  {
    path: "/t/attendance",
    element: <Attendance />,
    isProtected: true,
    permission: PERMISSIONS.CAN_VIEW_ATTENDANCE,
    allowedAccountTypes: [AccountType.TEACHER],
    layout: <AppLayout />,
  },
  {
    path: "/t/calendar",
    element: <Calendar />,
    isProtected: true,
    permission: PERMISSIONS.CAN_VIEW_CALENDAR,
    allowedAccountTypes: [AccountType.TEACHER],
    layout: <AppLayout />,
  },
  {
    path: "/t/exams",
    element: <Exams />,
    isProtected: true,
    permission: PERMISSIONS.CAN_VIEW_EXAMS,
    allowedAccountTypes: [AccountType.TEACHER],
    layout: <AppLayout />,
  },
  {
    path: "/t/fees",
    element: <Fees />,
    isProtected: true,
    permission: PERMISSIONS.CAN_VIEW_FEES,
    allowedAccountTypes: [AccountType.TEACHER],
    layout: <AppLayout />,
  },
  {
    path: "/t/messages",
    element: <Messages />,
    isProtected: true,
    permission: PERMISSIONS.CAN_VIEW_MESSAGES,
    allowedAccountTypes: [AccountType.TEACHER],
    layout: <AppLayout />,
  },
  {
    path: "/t/meetings",
    element: <Meetings />,
    isProtected: true,
    permission: PERMISSIONS.CAN_VIEW_MEETINGS,
    allowedAccountTypes: [AccountType.TEACHER],
    layout: <AppLayout />,
  },
  {
    path: "/t/classes",
    element: <Classes />,
    isProtected: true,
    permission: PERMISSIONS.CAN_VIEW_CLASSES,
    allowedAccountTypes: [AccountType.TEACHER],
    layout: <AppLayout />,
  },

  // ==============================================================
  // Settings
  // ==============================================================
  {
    path: "/settings",
    element: <Settings />,
    isProtected: true,
    permission: PERMISSIONS.CAN_VIEW_SETTINGS,
    allowedAccountTypes: [AccountType.TEACHER],
    layout: <AppLayout />,
  },
  {
    path: "/join-school",
    element: <JoinSchool />,
    isProtected: true,
    permission: PERMISSIONS.CAN_JOIN_SCHOOL,
    allowedAccountTypes: [AccountType.TEACHER],
    layout: <AppLayout />,
  },
  {
    path: "/t/apply-school",
    element: <RegisterSchool />,
    isProtected: true,
    permission: PERMISSIONS.CAN_APPLY_SCHOOL,
    allowedAccountTypes: [AccountType.TEACHER],
    layout: <AppLayout />,
  },
];
