import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, Calendar, ClipboardCheck, BookOpen,
  UserCircle, MessageSquare, CreditCard, FileText,
  ChevronLeft, Menu, GraduationCap, Bell
} from "lucide-react";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/timetable", label: "Timetable", icon: Calendar },
  { path: "/attendance", label: "Attendance", icon: ClipboardCheck },
  { path: "/assessments", label: "Assessments", icon: BookOpen },
  { path: "/profile", label: "Profile", icon: UserCircle },
  { path: "/announcements", label: "Announcements", icon: Bell },
  { path: "/results", label: "Exam Results", icon: FileText },
  { path: "/payments", label: "Payments", icon: CreditCard },
  { path: "/forum", label: "Discussion", icon: MessageSquare },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-6 border-b border-sidebar-hover">
        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
          <GraduationCap className="w-5 h-5 text-primary-foreground" />
        </div>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-heading text-lg font-bold text-sidebar-active-fg tracking-tight"
          >
            CampusX
          </motion.span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group
                ${isActive
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-sidebar-fg hover:bg-sidebar-hover hover:text-sidebar-active-fg"
                }
              `}
            >
              <item.icon className={`w-[18px] h-[18px] flex-shrink-0 ${isActive ? "" : "opacity-70 group-hover:opacity-100"}`} />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* User */}
      {!collapsed && (
        <div className="px-4 py-4 border-t border-sidebar-hover">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary-foreground">
              RK
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-sidebar-active-fg truncate">Rayana K.</p>
              <p className="text-xs text-sidebar-fg truncate">24QM1A05Q4</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border shadow-md"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/40 z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed left-0 top-0 bottom-0 w-[260px] bg-sidebar-bg z-50 lg:hidden"
          >
            {sidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside
        className={`hidden lg:flex flex-col bg-sidebar-bg transition-all duration-300 flex-shrink-0 ${
          collapsed ? "w-[72px]" : "w-[260px]"
        }`}
      >
        {sidebarContent}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute top-6 -right-3 w-6 h-6 rounded-full bg-card border border-border shadow-sm flex items-center justify-center hover:bg-secondary transition-colors"
          style={{ position: "relative", margin: "0 auto 16px" }}
        >
          <ChevronLeft className={`w-3.5 h-3.5 transition-transform ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
