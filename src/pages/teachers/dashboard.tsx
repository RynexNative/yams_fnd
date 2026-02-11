// import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  StickyNote,
  Users,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowRight,
  TrendingUp,
  Calendar,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { AccountType } from "@/dto/enums";

const stats = [
  {
    title: "Lesson Plans",
    value: "12",
    change: "+3 this week",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Schemes of Work",
    value: "4",
    change: "2 active",
    icon: FileText,
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "Notes",
    value: "28",
    change: "+5 this week",
    icon: StickyNote,
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Students",
    value: "145",
    change: "Across 3 classes",
    icon: Users,
    color: "from-purple-500 to-purple-600",
  },
];

const recentActivity = [
  {
    title: "Lesson Plan: Introduction to Algebra",
    time: "2 hours ago",
    status: "completed",
  },
  {
    title: "Scheme of Work: Term 2 Mathematics",
    time: "Yesterday",
    status: "in-progress",
  },
  {
    title: "Note: Parent Meeting Notes",
    time: "2 days ago",
    status: "completed",
  },
  {
    title: "Lesson Plan: Geometry Basics",
    time: "3 days ago",
    status: "pending",
  },
];

const upcomingEvents = [
  { title: "Staff Meeting", date: "Today, 3:00 PM", type: "meeting" },
  { title: "Parent-Teacher Conference", date: "Tomorrow, 10:00 AM", type: "event" },
  { title: "Term Exams Begin", date: "Next Monday", type: "exam" },
];

export interface User {
  id: string;
  email: string;
  name: string;
  role: AccountType;
  isAdmin: boolean;
  isVerified: boolean;
  profileComplete: number;
  schools: Array<{
    id: string;
    name: string;
    role: "teacher" | "admin";
    status: "verified" | "pending" | "rejected";
  }>;
  currentSchool?: string;
}

export const user: User = {
      id: "1",
      email: "casa1@casa.com",
      name: "John Smith",
      role: AccountType.TEACHER,
      isAdmin: false,
      isVerified: true,
      profileComplete: 75,
      schools: [
        { id: "school1", name: "Sunrise Academy", role: "teacher", status: "verified" },
        { id: "school2", name: "Valley High School", role: "teacher", status: "pending" },
        { id: "school2", name: "Valley High School", role: "teacher", status: "pending" },
      ],
      currentSchool: "school1",
    };
const TDashboard = () => {
//   const { user } = useAuth();

//   const verificationStatus = ;
  const currentSchool = user.schools.find(
  (s) => s.id === user.currentSchool
);

  return (
    <div className="space-y-6 p-[1em]">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-display">
            Welcome back, {user?.name?.split(" ")[0]}! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening with your classes today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/t/lessonplan">
            <Button className="bg-gradient-primary hover:opacity-90 gap-2">
              <BookOpen className="h-4 w-4" />
              New Lesson Plan
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Profile Completion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Profile Completion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold">{user?.profileComplete}%</span>
                <Badge
                  variant={user?.profileComplete === 100 ? "default" : "secondary"}
                >
                  {user?.profileComplete === 100 ? "Complete" : "In Progress"}
                </Badge>
              </div>
              <Progress value={user?.profileComplete} className="h-2" />
              {user?.profileComplete !== 100 && (
                <Link
                  to="/dashboard/settings"
                  className="text-sm text-primary hover:underline mt-2 inline-flex items-center gap-1"
                >
                  Complete your profile <ArrowRight className="h-3 w-3" />
                </Link>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Verification Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Teacher Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {currentSchool?.status === "verified" ? (
                    <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                    </div>
                  ) : currentSchool?.status === "pending" ? (
                    <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-warning" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <AlertCircle className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}
                  <div>
                    <p className="font-medium">
                      {currentSchool?.name || "No School"}
                    </p>
                    <p className="text-sm text-muted-foreground capitalize">
                      {currentSchool?.status || "Not recognized"}
                    </p>
                  </div>
                </div>
                {!currentSchool && (
                  <Link to="/dashboard/apply-school">
                    <Button variant="outline" size="sm">
                      Apply Now
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => (
          <Card key={stat.title} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold font-display mt-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-success" />
                    {stat.change}
                  </p>
                </div>
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Recent Activity
                <Link to="/t/lessonplan">
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          activity.status === "completed"
                            ? "bg-success"
                            : activity.status === "in-progress"
                            ? "bg-warning"
                            : "bg-muted-foreground"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-medium">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant={
                        activity.status === "completed"
                          ? "default"
                          : "secondary"
                      }
                      className="capitalize"
                    >
                      {activity.status.replace("-", " ")}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Upcoming Events
                <Link to="/dashboard/calendar">
                  <Button variant="ghost" size="sm">
                    View Calendar
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{event.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {event.date}
                      </p>
                    </div>
                    <Badge variant="outline" className="capitalize">
                      {event.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default TDashboard;