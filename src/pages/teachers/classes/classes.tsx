import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Users,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const classes = [
  {
    id: 1,
    name: "Grade 7A",
    stream: "Science",
    classTeacher: "Mr. John Doe",
    students: 42,
    capacity: 45,
    subjects: ["Math", "English", "Science", "History", "Geography"],
    avgAttendance: 94,
    avgPerformance: 78,
  },
  {
    id: 2,
    name: "Grade 7B",
    stream: "Arts",
    classTeacher: "Ms. Sarah Smith",
    students: 38,
    capacity: 45,
    subjects: ["Math", "English", "Art", "Music", "Drama"],
    avgAttendance: 91,
    avgPerformance: 82,
  },
  {
    id: 3,
    name: "Grade 8A",
    stream: "Science",
    classTeacher: "Mr. David Brown",
    students: 45,
    capacity: 45,
    subjects: ["Math", "Physics", "Chemistry", "Biology", "English"],
    avgAttendance: 96,
    avgPerformance: 85,
  },
  {
    id: 4,
    name: "Grade 8B",
    stream: "Commerce",
    classTeacher: "Mrs. Emily Wilson",
    students: 40,
    capacity: 45,
    subjects: ["Math", "Accounting", "Business", "Economics", "English"],
    avgAttendance: 89,
    avgPerformance: 76,
  },
  {
    id: 5,
    name: "Grade 9A",
    stream: "Science",
    classTeacher: "Dr. Michael Chen",
    students: 43,
    capacity: 45,
    subjects: ["Math", "Physics", "Chemistry", "Biology", "Computer Science"],
    avgAttendance: 93,
    avgPerformance: 88,
  },
];

const Classes = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClasses = classes.filter(
    (cls) =>
      cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.classTeacher.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 p-[1em]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-display">
            Classes
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage class structures and assignments
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 gap-2">
          <Plus className="h-4 w-4" />
          Add Class
        </Button>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search classes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </motion.div>

      {/* Classes Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredClasses.map((cls) => (
          <Card
            key={cls.id}
            className="hover:shadow-lg transition-shadow overflow-hidden"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{cls.name}</CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      {cls.stream}
                    </Badge>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="gap-2">
                      <Eye className="h-4 w-4" /> View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <Edit className="h-4 w-4" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-destructive">
                      <Trash2 className="h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Class Teacher */}
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Class Teacher:</span>
                <span className="font-medium">{cls.classTeacher}</span>
              </div>

              {/* Students */}
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Students</span>
                  <span className="font-medium">
                    {cls.students} / {cls.capacity}
                  </span>
                </div>
                <Progress
                  value={(cls.students / cls.capacity) * 100}
                  className="h-2"
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-primary">
                    {cls.avgAttendance}%
                  </p>
                  <p className="text-xs text-muted-foreground">Attendance</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-secondary">
                    {cls.avgPerformance}%
                  </p>
                  <p className="text-xs text-muted-foreground">Performance</p>
                </div>
              </div>

              {/* Subjects */}
              <div>
                <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  Subjects
                </p>
                <div className="flex flex-wrap gap-1">
                  {cls.subjects.slice(0, 3).map((subject) => (
                    <Badge key={subject} variant="outline" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                  {cls.subjects.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{cls.subjects.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  );
};

export default Classes;
