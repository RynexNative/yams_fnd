import { motion } from "framer-motion";
import {
  Shield,
  Users,
  School,
  Bell,
  Moon,
  Lock,
  Zap,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Role-Based Access Control",
    description:
      "Granular permissions ensure each user only sees what they need. Teachers, students, and parents have tailored experiences.",
  },
  {
    icon: School,
    title: "Multi-Tenant Architecture",
    description:
      "One system serves multiple schools while keeping data completely separate and secure for each institution.",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description:
      "Stay informed with instant updates on grades, announcements, meetings, and important academic events.",
  },
  {
    icon: Moon,
    title: "Dark & Light Mode",
    description:
      "Comfortable viewing experience with automatic theme switching based on user preference or system settings.",
  },
  {
    icon: Lock,
    title: "Secure Data Separation",
    description:
      "Enterprise-grade security ensures each school's data is isolated and protected with encryption at rest and in transit.",
  },
  {
    icon: Users,
    title: "Multi-School Support",
    description:
      "Teachers can work across multiple schools seamlessly, switching contexts with a single click.",
  },
  {
    icon: Zap,
    title: "Scalable Infrastructure",
    description:
      "Built to grow with your institution, from a single school to a network of hundreds.",
  },
  {
    icon: Globe,
    title: "Web-Based Platform",
    description:
      "Access from anywhere, on any device. No installations required - just open your browser and start.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-display mb-4"
          >
            Everything You Need to
            <span className="text-gradient-primary"> Manage Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            YAMS provides a comprehensive suite of tools designed specifically
            for modern educational institutions.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold font-display mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}