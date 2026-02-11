import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  DollarSign,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle2,
  Clock,
  Download,
  Filter,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const feeRecords = [
  {
    id: 1,
    studentName: "Alice Johnson",
    regNo: "STU-2024-001",
    class: "Grade 8A",
    totalFee: 500000,
    paidAmount: 500000,
    balance: 0,
    status: "paid",
    lastPayment: "2024-02-15",
  },
  {
    id: 2,
    studentName: "Bob Smith",
    regNo: "STU-2024-002",
    class: "Grade 8A",
    totalFee: 500000,
    paidAmount: 350000,
    balance: 150000,
    status: "partial",
    lastPayment: "2024-02-10",
  },
  {
    id: 3,
    studentName: "Carol Williams",
    regNo: "STU-2024-003",
    class: "Grade 7B",
    totalFee: 450000,
    paidAmount: 0,
    balance: 450000,
    status: "unpaid",
    lastPayment: null,
  },
  {
    id: 4,
    studentName: "David Brown",
    regNo: "STU-2024-004",
    class: "Grade 9A",
    totalFee: 550000,
    paidAmount: 550000,
    balance: 0,
    status: "paid",
    lastPayment: "2024-02-01",
  },
  {
    id: 5,
    studentName: "Eva Martinez",
    regNo: "STU-2024-005",
    class: "Grade 8B",
    totalFee: 500000,
    paidAmount: 250000,
    balance: 250000,
    status: "partial",
    lastPayment: "2024-01-28",
  },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-TZ", {
    style: "currency",
    currency: "TZS",
    minimumFractionDigits: 0,
  }).format(amount);
};

const Fees = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredRecords = feeRecords.filter((record) => {
    const matchesSearch =
      record.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.regNo.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || record.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalExpected = feeRecords.reduce((sum, r) => sum + r.totalFee, 0);
  const totalCollected = feeRecords.reduce((sum, r) => sum + r.paidAmount, 0);
  const totalPending = feeRecords.reduce((sum, r) => sum + r.balance, 0);
  const collectionRate = Math.round((totalCollected / totalExpected) * 100);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return (
          <Badge className="bg-success/10 text-success gap-1">
            <CheckCircle2 className="h-3 w-3" /> Paid
          </Badge>
        );
      case "partial":
        return (
          <Badge className="bg-warning/10 text-warning gap-1">
            <Clock className="h-3 w-3" /> Partial
          </Badge>
        );
      default:
        return (
          <Badge className="bg-destructive/10 text-destructive gap-1">
            <AlertCircle className="h-3 w-3" /> Unpaid
          </Badge>
        );
    }
  };

  return (
    <div className="space-y-6 p-[1em]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-display">
            Fee Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Track and manage student fee payments
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Expected</p>
                <p className="text-2xl font-bold font-display mt-1">
                  {formatCurrency(totalExpected)}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Collected</p>
                <p className="text-2xl font-bold font-display mt-1">
                  {formatCurrency(totalCollected)}
                </p>
                <p className="text-xs text-success flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3" />
                  {collectionRate}% of total
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold font-display mt-1">
                  {formatCurrency(totalPending)}
                </p>
                <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                  <TrendingDown className="h-3 w-3" />
                  {100 - collectionRate}% outstanding
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Collection Rate</p>
                <p className="text-2xl font-bold font-display mt-1">
                  {collectionRate}%
                </p>
                <Progress value={collectionRate} className="h-2 mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or reg. number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="partial">Partial</SelectItem>
            <SelectItem value="unpaid">Unpaid</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      {/* Fee Records Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead className="text-right">Total Fee</TableHead>
                  <TableHead className="text-right">Paid</TableHead>
                  <TableHead className="text-right">Balance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Last Payment
                  </TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{record.studentName}</p>
                        <p className="text-xs text-muted-foreground font-mono">
                          {record.regNo}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>{record.class}</TableCell>
                    <TableCell className="text-right font-medium">
                      {formatCurrency(record.totalFee)}
                    </TableCell>
                    <TableCell className="text-right text-success">
                      {formatCurrency(record.paidAmount)}
                    </TableCell>
                    <TableCell className="text-right text-destructive">
                      {formatCurrency(record.balance)}
                    </TableCell>
                    <TableCell>{getStatusBadge(record.status)}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">
                      {record.lastPayment || "-"}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Fees;
