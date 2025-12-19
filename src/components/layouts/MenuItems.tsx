import { Users, UserPlus, LayoutDashboard, Settings, File, ChevronRight, BookDashed, PlaneIcon, List } from "lucide-react"

export type MenuItem = {
  label: string
  icon?: React.ReactNode
  href?: string
  children?: MenuItem[]
}
// Menu items.
export const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard />,
    href: "/dashboard",
  },

  {
    label: "Students Management",
    icon: <Users />,
    children: [
      {
        label: "Student Info",
        href: "/students",
      },
      {
        label: "Add Student",
        icon: <UserPlus />,
        href: "/students/add",
      },
    ],
  },
  {
    label: "Lesson Plan",
    icon: <BookDashed />,
    href:'',
  },

  {
    label: "Scheme of Work",
    icon: <Users />,
    href: "/teachers",
  },

  {
    label: "Notes",
    icon: <File />,
    children: [
      {
        label: "List of Notes",
        icon:<List />
      }
    ]
  },
  {
    label: "Attendance",
    icon: <Users />,
    href: "/teachers",
  },

  {
    label: "Settings",
    icon: <Settings />,
    children: [
      {
        label: "Profile",
        href: "/settings/profile",
      },
      {
        label: "Permissions",
        href: "/settings/permissions",
      },
    ],
  },
]