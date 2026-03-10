import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

export default function ExamResults() {
  const results = [
    { semester: "Fall 2025", subject: "Data Structures", marks: 87, grade: "A", status: "Published" },
    { semester: "Fall 2025", subject: "Web Development", marks: 92, grade: "A+", status: "Published" },
    { semester: "Fall 2025", subject: "Database Systems", marks: 78, grade: "B+", status: "Published" },
    { semester: "Spring 2025", subject: "Algorithms", marks: 85, grade: "A", status: "Published" },
    { semester: "Spring 2025", subject: "Operating Systems", marks: 88, grade: "A", status: "Published" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Exam Results</h1>
        <p className="text-muted-foreground mt-2">View your exam results and grades</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Results Summary
          </CardTitle>
          <CardDescription>Your exam scores and grades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Semester</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead className="text-right">Marks</TableHead>
                  <TableHead className="text-center">Grade</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((result, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{result.semester}</TableCell>
                    <TableCell>{result.subject}</TableCell>
                    <TableCell className="text-right">{result.marks}/100</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline">{result.grade}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        {result.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
