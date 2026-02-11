import { Users, UserPlus, LayoutDashboard, Settings, File, BookDashed, List, FileArchive, DraftingCompass, Library, NotebookPenIcon, School, ClipboardList, DollarSign, MessageSquare, Video, Calendar } from "lucide-react"
import { PermissionKey, PERMISSIONS } from "@/dto/permission.contract"
import { AccountType } from "@/dto/enums"

export type MenuCategory = "PERSONAL" | "SCHOOL" | "ADMIN";

export type MenuItem = {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  children?: MenuItem[];
  permission?: PermissionKey; // badilisha kutoka PermissionDTO
  allowedAccountTypes?: AccountType[];
  category?: MenuCategory;
  badge?: string | number;
};
// Menu items.
export const MENU_ITEMS: MenuItem[] = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard />,
    href: "/t/dashboard",
    permission: PERMISSIONS.CAN_VIEW_DASHBOARD,
    allowedAccountTypes: [AccountType.STUDENT, AccountType.TEACHER],
    category: "PERSONAL",
  },
  {
    label: "Lesson Plan",
    icon: <BookDashed />,
    href: "/t/lessonplan",
    permission: PERMISSIONS.CAN_VIEW_LESSON_PLAN,
    allowedAccountTypes: [AccountType.STUDENT, AccountType.TEACHER],
    category: "PERSONAL",
  },
  {
    label: "Scheme of Work",
    icon: <FileArchive />,
    href: "/t/schemeofwork",
    permission: PERMISSIONS.CAN_VIEW_SCHEME,
    allowedAccountTypes: [AccountType.STUDENT, AccountType.TEACHER],
    category: "PERSONAL",
  },
  {
    label: "Draft",
    icon: <DraftingCompass />,
    href: "/t/draft",
    permission: PERMISSIONS.CAN_VIEW_DRAFT,
    allowedAccountTypes: [AccountType.STUDENT, AccountType.TEACHER],
    category: "PERSONAL",
    badge: 7,
  },
  {
    label: "Library",
    icon: <Library />,
    href: "/t/library",
    permission: PERMISSIONS.CAN_VIEW_LIBRARY,
    allowedAccountTypes: [AccountType.STUDENT, AccountType.TEACHER],
    category: "SCHOOL",
  },
  {
    label: "Attendance",
    icon: <Users />,
    href: "/t/attendance",
    permission: PERMISSIONS.CAN_VIEW_ATTENDANCE,
    allowedAccountTypes: [AccountType.STUDENT, AccountType.TEACHER],
    category: "SCHOOL",
  },
  {
    label: "Classes",
    icon: <School />,
    href: "/t/classes",
    permission: PERMISSIONS.CAN_VIEW_CLASSES,
    allowedAccountTypes: [AccountType.STUDENT, AccountType.TEACHER],
    category: "SCHOOL",
  },
  {
    label: "Exams",
    icon: <ClipboardList />,
    href: "/t/exams",
    permission: PERMISSIONS.CAN_VIEW_EXAMS,
    allowedAccountTypes: [AccountType.STUDENT, AccountType.TEACHER],
    category: "SCHOOL",
  },
  {
    label: "Fees",
    icon: <DollarSign />,
    href: "/t/fees",
    permission: PERMISSIONS.CAN_VIEW_FEES,
    allowedAccountTypes: [AccountType.STUDENT, AccountType.TEACHER],
    category: "SCHOOL",
  },
  {
    label: "Message",
    icon: <MessageSquare />,
    href: "/t/messages",
    permission: PERMISSIONS.CAN_VIEW_MESSAGES,
    allowedAccountTypes: [AccountType.STUDENT, AccountType.TEACHER],
    category: "SCHOOL",
    badge: 2,
  },
  {
    label: "Meetings",
    icon: <Video />,
    href: "/t/meetings",
    permission: PERMISSIONS.CAN_VIEW_MEETINGS,
    allowedAccountTypes: [AccountType.STUDENT, AccountType.TEACHER],
    category: "SCHOOL",
  },
  {
    label: "Calendar",
    icon: <Calendar />,
    href: "/t/calendar",
    permission: PERMISSIONS.CAN_VIEW_CALENDAR,
    allowedAccountTypes: [AccountType.STUDENT, AccountType.TEACHER],
    category: "SCHOOL",
  },
  {
    label: "Students Management",
    icon: <Users />,
    permission: PERMISSIONS.CAN_MANAGE_STUDENTS,
    allowedAccountTypes: [AccountType.STUDENT, AccountType.TEACHER],
    category: "SCHOOL",
    children: [
      {
        label: "Student Info",
        href: "/t/students",
        icon: <Users />,
        permission: PERMISSIONS.CAN_MANAGE_STUDENTS,
      },
      {
        label: "Add Student",
        icon: <UserPlus />,
        href: "/t/students/add",
        permission: "CAN_REQUEST_TENANT",
      },
    ],
  },
  {
    label: "Settings",
    icon: <Settings />,
    permission: PERMISSIONS.CAN_VIEW_SETTINGS,
    allowedAccountTypes: [AccountType.STUDENT, AccountType.TEACHER],
    category: "SCHOOL",
    children: [
      {
        label: "Profile",
        href: "/settings",
        permission: "CAN_REQUEST_TENANT",
      },
      {
        label: "Permissions",
        href: "/t/settings/permissions",
        permission: "CAN_REQUEST_TENANT",
      },
    ],
  },
];
