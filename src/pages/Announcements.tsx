import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";

export default function Announcements() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Announcements</h1>
        <p className="text-muted-foreground mt-2">Stay updated with the latest college announcements</p>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-lg">Semester Exam Schedule Released</CardTitle>
                <CardDescription>Posted 2 hours ago</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              The semester exam schedule for the current academic year has been released. Please check the examination timetable accordingly.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-lg">Library Maintenance Notice</CardTitle>
                <CardDescription>Posted 1 day ago</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              The library will be closed for maintenance on weekends. Normal services will resume from Monday.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-lg">New Course Registration Deadline</CardTitle>
                <CardDescription>Posted 3 days ago</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Last date for course registration is March 15th. Please complete your course selection before the deadline.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
