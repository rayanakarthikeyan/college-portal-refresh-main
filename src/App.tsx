import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PortalLayout from "./components/portal/PortalLayout";
import Dashboard from "./pages/Dashboard";
import Timetable from "./pages/Timetable";
import Attendance from "./pages/Attendance";
import Assessments from "./pages/Assessments";
import Profile from "./pages/Profile";
import Announcements from "./pages/Announcements";
import ExamResults from "./pages/ExamResults";
import Payments from "./pages/Payments";
import Discussion from "./pages/Discussion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<PortalLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/results" element={<ExamResults />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/forum" element={<Discussion />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
