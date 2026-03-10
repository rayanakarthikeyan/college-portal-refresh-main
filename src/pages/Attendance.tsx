import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Calendar, Users } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const stats = [
  { label: "Sessions Completed", value: "31", icon: Calendar, color: "text-primary", bg: "bg-primary/10" },
  { label: "Sessions Attended", value: "23", icon: Users, color: "text-success", bg: "bg-success/10" },
  { label: "Your Rate", value: "74.19%", icon: TrendingUp, color: "text-warning", bg: "bg-warning/10" },
  { label: "Class Rate", value: "51.76%", icon: TrendingDown, color: "text-destructive", bg: "bg-destructive/10" },
];

const pieData = [
  { name: "Present", value: 23 },
  { name: "Absent", value: 8 },
];
const COLORS = ["hsl(152, 60%, 42%)", "hsl(0, 72%, 55%)"];

const sessions = [
  { date: "09 Mar 2026", from: "11:20", to: "12:20", status: "Present", topic: "Normal Probability Distribution" },
  { date: "07 Mar 2026", from: "14:00", to: "15:00", status: "Absent", topic: "Normal Probability Distribution" },
  { date: "06 Mar 2026", from: "11:20", to: "12:20", status: "Present", topic: "Normal Probability Distribution" },
  { date: "05 Mar 2026", from: "11:20", to: "12:20", status: "Absent", topic: "Introduction to SMCE" },
  { date: "04 Mar 2026", from: "11:20", to: "12:20", status: "Present", topic: "Slip test conducted on Unit-3" },
  { date: "27 Feb 2026", from: "11:20", to: "12:20", status: "Present", topic: "Central Limit Theorem, Sampling Distributions" },
  { date: "26 Feb 2026", from: "15:00", to: "16:00", status: "Present", topic: "Problems on Normal Probability Distribution" },
  { date: "26 Feb 2026", from: "14:00", to: "15:00", status: "Present", topic: "Problems on Normal Probability Distribution" },
  { date: "26 Feb 2026", from: "11:20", to: "12:20", status: "Present", topic: "Unit 2 - Slip test conducted" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

const Attendance = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 pt-12 lg:pt-0">
      <motion.div variants={item}>
        <h1 className="text-2xl font-heading font-bold">Attendance</h1>
        <p className="text-muted-foreground text-sm">Statistical Methods for Computer Engineers</p>
      </motion.div>

      {/* Stats */}
      <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
              <s.icon className={`w-5 h-5 ${s.color}`} />
            </div>
            <p className="text-2xl font-heading font-bold">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Pie Chart */}
        <motion.div variants={item} className="glass-card p-6">
          <h3 className="text-base font-heading font-semibold mb-4">Attendance Breakdown</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={4} dataKey="value">
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-2">
            <span className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full bg-success" /> Present (23)</span>
            <span className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full bg-destructive" /> Absent (8)</span>
          </div>
        </motion.div>

        {/* Session Table */}
        <motion.div variants={item} className="lg:col-span-2 glass-card overflow-hidden">
          <div className="p-6 pb-3">
            <h3 className="text-base font-heading font-semibold">Session History</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="text-left px-6 py-3 font-semibold text-muted-foreground">Date</th>
                  <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Time</th>
                  <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Status</th>
                  <th className="text-left px-4 py-3 font-semibold text-muted-foreground hidden sm:table-cell">Topic</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((s, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                    <td className="px-6 py-3 font-medium">{s.date}</td>
                    <td className="px-4 py-3 text-muted-foreground">{s.from} – {s.to}</td>
                    <td className="px-4 py-3">
                      <span className={s.status === "Present" ? "badge-present" : "badge-absent"}>
                        {s.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell max-w-[250px] truncate">{s.topic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Attendance;
