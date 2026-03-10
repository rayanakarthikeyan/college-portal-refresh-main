import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];
const HOURS = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00"];

type ClassItem = {
  day: number;
  startHour: number;
  duration: number;
  subject: string;
  type: string;
  color: string;
};

const classes: ClassItem[] = [
  { day: 0, startHour: 0, duration: 1, subject: "OOP Through Java", type: "Lab", color: "bg-primary" },
  { day: 0, startHour: 1, duration: 1, subject: "Operating Systems", type: "Lab", color: "bg-warning" },
  { day: 0, startHour: 2, duration: 1, subject: "Statistical Methods", type: "Lecture", color: "bg-success" },
  { day: 0, startHour: 3, duration: 1, subject: "Software Engineering", type: "Lecture", color: "bg-info" },
  { day: 0, startHour: 5, duration: 1, subject: "Business Economics", type: "Lecture", color: "bg-destructive/80" },
  { day: 0, startHour: 6, duration: 1, subject: "Operating Systems", type: "Lecture", color: "bg-warning" },
  { day: 1, startHour: 0, duration: 1, subject: "OOP Through Java", type: "Lecture", color: "bg-primary" },
  { day: 1, startHour: 1, duration: 1, subject: "Operating Systems", type: "Lab", color: "bg-warning" },
  { day: 1, startHour: 2, duration: 1, subject: "Software Engineering", type: "Lecture", color: "bg-info" },
  { day: 1, startHour: 5, duration: 1, subject: "Business Economics", type: "Lecture", color: "bg-destructive/80" },
  { day: 1, startHour: 6, duration: 1, subject: "OOP Through Java", type: "Lab", color: "bg-primary" },
  { day: 2, startHour: 0, duration: 1, subject: "OOP Through Java", type: "Lecture", color: "bg-primary" },
  { day: 2, startHour: 1, duration: 1, subject: "Operating Systems", type: "Lecture", color: "bg-warning" },
  { day: 2, startHour: 2, duration: 1, subject: "Statistical Methods", type: "Lecture", color: "bg-success" },
  { day: 2, startHour: 3, duration: 1, subject: "Software Engineering", type: "Lecture", color: "bg-info" },
  { day: 2, startHour: 5, duration: 1, subject: "LIBRARY", type: "", color: "bg-muted-foreground/30" },
  { day: 2, startHour: 6, duration: 1, subject: "Software Engineering", type: "Lecture", color: "bg-info" },
  { day: 3, startHour: 0, duration: 1, subject: "Operating Systems", type: "Lecture", color: "bg-warning" },
  { day: 3, startHour: 1, duration: 1, subject: "OOP Through Java", type: "Lecture", color: "bg-primary" },
  { day: 3, startHour: 2, duration: 1, subject: "Statistical Methods", type: "Lecture", color: "bg-success" },
  { day: 3, startHour: 3, duration: 1, subject: "Business Economics", type: "Lecture", color: "bg-destructive/80" },
  { day: 3, startHour: 5, duration: 1, subject: "HSDA", type: "", color: "bg-muted-foreground/30" },
  { day: 4, startHour: 0, duration: 1, subject: "Constitution of India", type: "Lecture", color: "bg-accent-foreground/70" },
  { day: 4, startHour: 1, duration: 1, subject: "Operating Systems", type: "Lecture", color: "bg-warning" },
  { day: 4, startHour: 2, duration: 1, subject: "Statistical Methods", type: "Lecture", color: "bg-success" },
  { day: 4, startHour: 3, duration: 1, subject: "OOP Through Java", type: "Lecture", color: "bg-primary" },
  { day: 4, startHour: 5, duration: 1, subject: "Operating Systems", type: "Lecture", color: "bg-warning" },
  { day: 4, startHour: 6, duration: 1, subject: "Sports", type: "", color: "bg-muted-foreground/30" },
  { day: 5, startHour: 0, duration: 1, subject: "Operating Systems", type: "Lecture", color: "bg-warning" },
  { day: 5, startHour: 1, duration: 1, subject: "Business Economics", type: "Lecture", color: "bg-destructive/80" },
  { day: 5, startHour: 2, duration: 1, subject: "OOP Through Java", type: "Lab", color: "bg-primary" },
  { day: 5, startHour: 3, duration: 1, subject: "Project Based Assignment", type: "", color: "bg-accent-foreground/50" },
  { day: 5, startHour: 5, duration: 1, subject: "Statistical Methods", type: "Lecture", color: "bg-success" },
  { day: 5, startHour: 6, duration: 1, subject: "OOP Through Java", type: "Lecture", color: "bg-primary" },
];

const viewModes = ["Week", "Day"] as const;

const Timetable = () => {
  const [view, setView] = useState<typeof viewModes[number]>("Week");
  const [selectedDay, setSelectedDay] = useState(1); // Tuesday (today)
  const dates = ["3/9", "3/10", "3/11", "3/12", "3/13", "3/14"];

  const visibleClasses = view === "Week" ? classes : classes.filter(c => c.day === selectedDay);
  const visibleDays = view === "Week" ? DAYS : [DAYS[selectedDay]];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 pt-12 lg:pt-0"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-heading font-bold">Timetable</h1>
          <p className="text-muted-foreground text-sm">Mar 9 – 14, 2026</p>
        </div>
        <div className="flex items-center gap-2">
          {view === "Day" && (
            <div className="flex items-center gap-1 mr-3">
              <button onClick={() => setSelectedDay(Math.max(0, selectedDay - 1))} className="p-1.5 rounded-lg hover:bg-secondary">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-sm font-medium min-w-[60px] text-center">{DAYS[selectedDay]} {dates[selectedDay]}</span>
              <button onClick={() => setSelectedDay(Math.min(5, selectedDay + 1))} className="p-1.5 rounded-lg hover:bg-secondary">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
          <div className="flex bg-secondary rounded-lg p-0.5">
            {viewModes.map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                  view === v ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card overflow-x-auto">
        <div className="min-w-[600px]">
          {/* Header */}
          <div className={`grid border-b border-border ${view === "Week" ? "grid-cols-[60px_repeat(6,1fr)]" : "grid-cols-[60px_1fr]"}`}>
            <div className="p-3" />
            {visibleDays.map((d, i) => {
              const dayIdx = view === "Week" ? i : selectedDay;
              const isToday = dayIdx === 1;
              return (
                <div key={d} className={`p-3 text-center border-l border-border ${isToday ? "bg-primary/5" : ""}`}>
                  <p className={`text-xs font-semibold ${isToday ? "text-primary" : "text-muted-foreground"}`}>{d}</p>
                  <p className={`text-sm font-bold ${isToday ? "text-primary" : ""}`}>{dates[dayIdx]}</p>
                </div>
              );
            })}
          </div>

          {/* Body */}
          {HOURS.map((hour, hi) => (
            <div key={hour} className={`grid ${view === "Week" ? "grid-cols-[60px_repeat(6,1fr)]" : "grid-cols-[60px_1fr]"} min-h-[72px]`}>
              <div className="p-2 text-xs text-muted-foreground text-right pr-3 pt-3 border-b border-border">
                {hour}
              </div>
              {visibleDays.map((_, di) => {
                const dayIdx = view === "Week" ? di : selectedDay;
                const cls = visibleClasses.find(c => c.day === dayIdx && c.startHour === hi);
                return (
                  <div key={di} className="border-l border-b border-border p-1 relative">
                    {cls && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`${cls.color} text-primary-foreground rounded-lg p-2 h-full cursor-pointer hover:brightness-110 transition-all`}
                      >
                        <p className="text-xs font-bold leading-tight truncate">{cls.subject}</p>
                        {cls.type && <p className="text-[10px] opacity-80 mt-0.5">{cls.type}</p>}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Timetable;
