import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Calendar,
  FileText,
  MessageSquare,
  DollarSign,
  GraduationCap,
  ClipboardList,
  Video,
  BarChart3,
} from "lucide-react";

const modules = [
  {
    icon: BookOpen,
    title: "Lesson Planning",
    description: "Create and manage detailed lesson plans with objectives, resources, and assessments.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: ClipboardList,
    title: "Scheme of Work",
    description: "Organize your curriculum with comprehensive schemes of work for each term.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Users,
    title: "Student Management",
    description: "Track student information, attendance, performance, and academic progress.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: GraduationCap,
    title: "Class Management",
    description: "Organize classes, streams, and subject allocations efficiently.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: FileText,
    title: "Exams & Results",
    description: "Create exams, record results, and generate comprehensive report cards.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: DollarSign,
    title: "Fee Management",
    description: "Handle fee structures, payments, and generate financial reports.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "Send messages and announcements to teachers, students, and parents.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Video,
    title: "Meetings",
    description: "Schedule and manage meetings with attendance tracking and minutes.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Calendar,
    title: "Academic Calendar",
    description: "Plan events, holidays, and important dates throughout the academic year.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Get insights with comprehensive analytics and customizable reports.",
    color: "from-amber-500 to-amber-600",
  },
];

export function Modules() {
  return (
    <section id="modules" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4"
          >
            Modules
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-display mb-4"
          >
            Powerful Modules for
            <span className="text-gradient-primary"> Every Need</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            From lesson planning to fee management, YAMS has all the tools your
            school needs in one integrated platform.
          </motion.p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative p-6 rounded-2xl bg-card border border-border overflow-hidden card-hover ${
                index === 0 || index === 5 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <module.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-lg font-semibold font-display mb-2">
                {module.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {module.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}