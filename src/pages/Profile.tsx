import { motion } from "framer-motion";
import { Mail, Hash, Key, Shield } from "lucide-react";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

const Profile = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 pt-12 lg:pt-0 max-w-3xl">
      <motion.div variants={item}>
        <h1 className="text-2xl font-heading font-bold">Profile</h1>
        <p className="text-muted-foreground text-sm">Account Details</p>
      </motion.div>

      <motion.div variants={item} className="glass-card p-8">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl font-heading font-bold text-primary">
            RK
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-heading font-bold">RAYANA KARTHIKEYAN</h2>
            <p className="text-muted-foreground text-sm mt-1">B.Tech CSE — Section D</p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {[
            { icon: Mail, label: "Email", value: "rayanakarthikeyan@gmail.com" },
            { icon: Hash, label: "Roll Number", value: "24QM1A05Q4" },
            { icon: Shield, label: "Department", value: "Computer Science & Engineering" },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{f.label}</p>
                <p className="text-sm font-medium">{f.value}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors">
          <Key className="w-4 h-4" /> Reset Password
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
