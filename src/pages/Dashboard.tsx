import { motion } from "framer-motion";
import {
  CalendarDays, ClipboardCheck, BookOpen, TrendingUp,
  Clock, ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Attendance Rate", value: "74.2%", icon: ClipboardCheck, color: "text-warning", bg: "bg-warning/10" },
  { label: "Sessions Attended", value: "23/31", icon: CalendarDays, color: "text-info", bg: "bg-info/10" },
  { label: "Active Quizzes", value: "1", icon: BookOpen, color: "text-success", bg: "bg-success/10" },
  { label: "CGPA", value: "8.4", icon: TrendingUp, color: "text-primary", bg: "bg-primary/10" },
];

const todayClasses = [
  { time: "9:10 - 10:00", subject: "Object Oriented Programming", type: "Lecture", color: "border-l-primary" },
  { time: "10:10 - 11:00", subject: "Operating Systems", type: "Lab", color: "border-l-warning" },
  { time: "11:20 - 12:10", subject: "Software Engineering", type: "Lecture", color: "border-l-success" },
  { time: "2:00 - 2:50", subject: "Business Economics", type: "Lecture", color: "border-l-info" },
  { time: "3:00 - 3:50", subject: "Object Oriented Programming", type: "Lab", color: "border-l-destructive" },
];

const announcements = [
  { title: "Mid-Semester Exams Schedule Released", time: "2 hours ago", urgent: true },
  { title: "Library will remain closed on March 12", time: "5 hours ago", urgent: false },
  { title: "Sports Day registration open", time: "1 day ago", urgent: false },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Dashboard = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8 pt-12 lg:pt-0">
      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight">
          Good Morning, Rayana 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          Tuesday, March 10, 2026 — Here's your overview for today.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="stat-card flex flex-col gap-3">
            <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center`}>
              <s.icon className={`w-5 h-5 ${s.color}`} />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Today's Schedule */}
        <motion.div variants={item} className="lg:col-span-3 glass-card p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-heading font-semibold flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Today's Classes
            </h2>
            <Link to="/timetable" className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
              Full Timetable <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-3">
            {todayClasses.map((c, i) => (
              <div key={i} className={`flex items-center gap-4 p-3 rounded-lg bg-secondary/50 border-l-4 ${c.color}`}>
                <div className="min-w-[100px]">
                  <p className="text-sm font-semibold">{c.time}</p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{c.subject}</p>
                  <p className="text-xs text-muted-foreground">{c.type}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Announcements */}
        <motion.div variants={item} className="lg:col-span-2 glass-card p-6">
          <h2 className="text-lg font-heading font-semibold mb-5">📢 Announcements</h2>
          <div className="space-y-4">
            {announcements.map((a, i) => (
              <div key={i} className="flex gap-3">
                {a.urgent && <span className="mt-1 w-2 h-2 rounded-full bg-destructive flex-shrink-0" />}
                {!a.urgent && <span className="mt-1 w-2 h-2 rounded-full bg-muted flex-shrink-0" />}
                <div>
                  <p className="text-sm font-medium leading-snug">{a.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
