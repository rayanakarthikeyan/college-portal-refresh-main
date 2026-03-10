import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Clock, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

const tabs = ["Active", "Completed", "Practice"] as const;

const quizzes = [
  {
    title: "Quiz-2 (SMCE): CSE-(D)",
    date: "03 March 2026 | 08:00 AM",
    status: "Active",
    attempts: "1/1",
    maxMarks: 5,
    endTime: "14 March 2026 | 09:00 PM",
    submitted: 1,
  },
];

const completedQuizzes = [
  { title: "Quiz-1 (SMCE): CSE-(D)", date: "15 Feb 2026", score: "4/5", status: "Completed" },
  { title: "Quiz-1 (OOP): CSE-(D)", date: "10 Feb 2026", score: "3/5", status: "Completed" },
];

const assignments = [
  { title: "Assignment 1 - OS", due: "March 15, 2026", status: "Pending" },
  { title: "Assignment 2 - SMCE", due: "March 18, 2026", status: "Pending" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

const Assessments = () => {
  const [tab, setTab] = useState<typeof tabs[number]>("Active");
  const [quizOpen, setQuizOpen] = useState(true);
  const [assignOpen, setAssignOpen] = useState(true);

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 pt-12 lg:pt-0">
      <motion.div variants={item}>
        <h1 className="text-2xl font-heading font-bold">Assessments</h1>
        <p className="text-muted-foreground text-sm">Learning Management &gt; Assessments</p>
      </motion.div>

      {/* Tabs */}
      <motion.div variants={item} className="flex gap-1 bg-secondary rounded-lg p-0.5 w-fit">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2 text-sm font-medium rounded-md transition-all ${
              tab === t ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </motion.div>

      {tab === "Active" && (
        <>
          {/* Quizzes */}
          <motion.div variants={item} className="glass-card">
            <button
              onClick={() => setQuizOpen(!quizOpen)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <h3 className="font-heading font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Quizzes
              </h3>
              {quizOpen ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
            </button>
            {quizOpen && (
              <div className="px-5 pb-5 space-y-4">
                {quizzes.map((q, i) => (
                  <div key={i} className="border border-border rounded-xl p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                          <FileText className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold">{q.title}</p>
                          <p className="text-xs text-muted-foreground">{q.date}</p>
                        </div>
                      </div>
                      <span className="badge-active">{q.status}</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Attempts</p>
                        <p className="font-semibold">{q.attempts}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Max Marks</p>
                        <p className="font-semibold">{q.maxMarks}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">End Time</p>
                        <p className="font-semibold">{q.endTime}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Submitted</p>
                        <p className="font-semibold">{q.submitted}</p>
                      </div>
                    </div>
                    <button className="mt-4 w-full py-2.5 border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Assignments */}
          <motion.div variants={item} className="glass-card">
            <button
              onClick={() => setAssignOpen(!assignOpen)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <h3 className="font-heading font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5 text-warning" /> Assignments
              </h3>
              {assignOpen ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
            </button>
            {assignOpen && (
              <div className="px-5 pb-5 space-y-3">
                {assignments.map((a, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium text-sm">{a.title}</p>
                      <p className="text-xs text-muted-foreground">Due: {a.due}</p>
                    </div>
                    <span className="badge-absent">{a.status}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </>
      )}

      {tab === "Completed" && (
        <motion.div variants={item} className="glass-card p-5 space-y-3">
          {completedQuizzes.map((q, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <div>
                  <p className="font-medium text-sm">{q.title}</p>
                  <p className="text-xs text-muted-foreground">{q.date}</p>
                </div>
              </div>
              <span className="text-sm font-bold text-success">{q.score}</span>
            </div>
          ))}
        </motion.div>
      )}

      {tab === "Practice" && (
        <motion.div variants={item} className="glass-card p-12 text-center">
          <p className="text-muted-foreground">No practice assessments available.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Assessments;
