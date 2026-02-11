import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, GraduationCap, School, Clock } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: "200K+", label: "Total Students", delay: 0.2 },
  { icon: GraduationCap, value: "50K+", label: "Total Teachers", delay: 0.3 },
  { icon: School, value: "500+", label: "Total Schools", delay: 0.4 },
  { icon: Clock, value: "99.9%", label: "System Uptime", delay: 0.5 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background with gradient fade */}
      <div className="absolute inset-0 -z-10">
        {/* Left solid primary gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, 
              hsl(var(--primary)) 0%, 
              hsl(var(--primary)) 30%, 
              hsl(var(--primary) / 0.8) 35%, 
              hsl(var(--primary) / 0.4) 50%, 
              transparent 70%
            )`
          }}
        />

        {/* Background pattern/image area (right side) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "var(--background-image)",
          }}
        />

        {/* Gradient overlay using --background COLOR */}
        <div className="absolute inset-0" style={{
            background: `linear-gradient(to right, 
              hsl(var(--primary)) 0%, 
              hsl(var(--primary)) 30%, 
              hsl(var(--primary) / 0.8) 60%, 
              hsl(var(--primary) / 0.4) 75%, 
              transparent 100%
            )`
          }} />

        {/* Subtle grid pattern on right */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-sm font-medium text-white">
                Youth Academic Management System
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6 text-white"
            >
              Modern School
              <span className="block text-white/90">Management System</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-lg mb-8"
            >
              Empower your educational institution with YAMS - a comprehensive,
              scalable platform designed for modern schools. Manage teachers,
              students, and parents all in one secure environment.
            </motion.p>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-white/80 text-sm">
                <span className="font-semibold text-white">4.9/5</span> from 2,500+ reviews
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link to="/register">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 transition-colors text-lg px-8 h-14 gap-2 shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-14 gap-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Paper Statistics Cards */}
          <div className="relative lg:pl-8">
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  className="relative"
                >
                  {/* Paper Card */}
                  <div
                    className="relative bg-card rounded-l-2xl rounded-r-sm py-5 px-6 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 97% 15%, 100% 30%, 98% 50%, 100% 70%, 97% 85%, 100% 100%, 0 100%)',
                    }}
                  >
                    {/* Paper fold effect */}
                    <div
                      className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-foreground/5 to-transparent"
                    />

                    {/* Content */}
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg shrink-0">
                        <stat.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-3xl md:text-4xl font-bold font-display text-gradient-primary">
                          {stat.value}
                        </p>
                        <p className="text-sm text-muted-foreground font-medium">
                          {stat.label}
                        </p>
                      </div>
                    </div>

                    {/* Subtle paper texture */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground/[0.02] pointer-events-none" />
                  </div>

                  {/* Shadow/depth effect */}
                  <div
                    className="absolute -right-1 top-2 bottom-2 w-2 bg-foreground/10 rounded-r-sm blur-[1px] -z-10"
                  />
                </motion.div>
              ))}
            </div>

            {/* Floating decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -top-8 right-0 w-20 h-20 bg-accent/20 rounded-full blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -bottom-8 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
