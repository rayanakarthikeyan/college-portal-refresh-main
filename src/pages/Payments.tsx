import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, Download } from "lucide-react";

export default function Payments() {
  const payments = [
    { description: "Tuition Fee - Spring 2026", amount: "₹50,000", dueDate: "2026-03-20", status: "Pending", invoiceId: "INV-2026-001" },
    { description: "Library Fee - Spring 2026", amount: "₹2,000", dueDate: "2026-03-20", status: "Pending", invoiceId: "INV-2026-002" },
    { description: "Tuition Fee - Fall 2025", amount: "₹50,000", dueDate: "2025-09-15", status: "Paid", invoiceId: "INV-2025-001" },
    { description: "Laboratory Fee - Fall 2025", amount: "₹5,000", dueDate: "2025-09-15", status: "Paid", invoiceId: "INV-2025-002" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
        <p className="text-muted-foreground mt-2">View and manage your fee payments</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Due</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹52,000</div>
            <p className="text-xs text-muted-foreground mt-1">2 pending payments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Last Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹55,000</div>
            <p className="text-xs text-muted-foreground mt-1">Fall 2025</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Payment Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">Pending</div>
            <p className="text-xs text-muted-foreground mt-1">Action required</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Payment History
          </CardTitle>
          <CardDescription>All your fee payments and invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{payment.description}</TableCell>
                    <TableCell>{payment.amount}</TableCell>
                    <TableCell>{new Date(payment.dueDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge variant={payment.status === "Paid" ? "outline" : "destructive"}>
                        {payment.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="w-4 h-4" />
                      </Button>
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
