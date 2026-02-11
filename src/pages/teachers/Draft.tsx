import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  FileText,
  BookOpen,
  StickyNote,
  Clock,
  Trash2,
  Edit,
  MoreVertical,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const drafts = [
  {
    id: 1,
    title: "Introduction to Quadratic Equations",
    type: "lesson",
    lastSaved: "2024-02-28 10:45 AM",
    reason: "Auto-saved",
    progress: 65,
    content: "Lesson plan for Grade 8 Mathematics covering quadratic equations...",
  },
  {
    id: 2,
    title: "Term 2 Scheme - Science",
    type: "scheme",
    lastSaved: "2024-02-27 3:30 PM",
    reason: "Connection lost",
    progress: 40,
    content: "Science curriculum plan for Term 2 including lab experiments...",
  },
  {
    id: 3,
    title: "Staff Meeting Notes",
    type: "note",
    lastSaved: "2024-02-27 11:20 AM",
    reason: "Page closed",
    progress: 80,
    content: "Notes from weekly staff meeting discussing new policies...",
  },
  {
    id: 4,
    title: "English Literature Analysis",
    type: "lesson",
    lastSaved: "2024-02-26 2:15 PM",
    reason: "Auto-saved",
    progress: 30,
    content: "Analysis framework for poetry appreciation in Grade 9...",
  },
  {
    id: 5,
    title: "History Timeline Project",
    type: "scheme",
    lastSaved: "2024-02-25 4:00 PM",
    reason: "Power outage",
    progress: 55,
    content: "Interactive timeline project for world history...",
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "lesson":
      return <BookOpen className="h-5 w-5" />;
    case "scheme":
      return <FileText className="h-5 w-5" />;
    default:
      return <StickyNote className="h-5 w-5" />;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case "lesson":
      return "Lesson Plan";
    case "scheme":
      return "Scheme of Work";
    default:
      return "Note";
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "lesson":
      return "bg-primary/10 text-primary";
    case "scheme":
      return "bg-secondary/10 text-secondary";
    default:
      return "bg-accent/10 text-accent";
  }
};

const Drafts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredDrafts = drafts.filter((draft) => {
    const matchesSearch = draft.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "lessons" && draft.type === "lesson") ||
      (activeTab === "schemes" && draft.type === "scheme") ||
      (activeTab === "notes" && draft.type === "note");
    return matchesSearch && matchesTab;
  });

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
            Drafts
          </h1>
          <p className="text-muted-foreground mt-1">
            Auto-saved work that you can resume anytime
          </p>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="gap-2 text-destructive">
              <Trash2 className="h-4 w-4" />
              Clear All
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Clear all drafts?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete all your saved drafts. This action
                cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-destructive text-destructive-foreground">
                Delete All
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </motion.div>

      {/* Info Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-info/5 border-info/20">
          <CardContent className="p-4 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-info/10 flex items-center justify-center shrink-0">
              <RefreshCw className="h-5 w-5 text-info" />
            </div>
            <div>
              <h3 className="font-medium text-info">Auto-Save Enabled</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Your work is automatically saved every 30 seconds. Drafts are
                also created when your connection is lost, the page is closed
                unexpectedly, or power goes off.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold font-display">{drafts.length}</p>
            <p className="text-sm text-muted-foreground">Total Drafts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold font-display text-primary">
              {drafts.filter((d) => d.type === "lesson").length}
            </p>
            <p className="text-sm text-muted-foreground">Lesson Plans</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold font-display text-secondary">
              {drafts.filter((d) => d.type === "scheme").length}
            </p>
            <p className="text-sm text-muted-foreground">Schemes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold font-display text-accent">
              {drafts.filter((d) => d.type === "note").length}
            </p>
            <p className="text-sm text-muted-foreground">Notes</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Tabs and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row sm:items-center gap-4"
      >
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-1"
        >
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="lessons">Lessons</TabsTrigger>
            <TabsTrigger value="schemes">Schemes</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search drafts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </motion.div>

      {/* Drafts List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        {filteredDrafts.map((draft) => (
          <Card key={draft.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${getTypeColor(
                      draft.type
                    )}`}
                  >
                    {getTypeIcon(draft.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold">{draft.title}</h3>
                      <Badge variant="outline">{getTypeLabel(draft.type)}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                      {draft.content}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {draft.lastSaved}
                      </div>
                      <div className="flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {draft.reason}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Progress */}
                  <div className="text-center min-w-[80px]">
                    <div className="relative w-12 h-12 mx-auto">
                      <svg className="w-12 h-12 -rotate-90">
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          className="text-muted"
                        />
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray={`${draft.progress * 1.26} 126`}
                          className="text-primary"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                        {draft.progress}%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Progress
                    </p>
                  </div>

                  <Button className="gap-2">
                    <Edit className="h-4 w-4" />
                    Resume
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2">
                        <Edit className="h-4 w-4" /> Resume Editing
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-destructive">
                        <Trash2 className="h-4 w-4" /> Delete Draft
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {filteredDrafts.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="font-medium text-lg">No drafts found</h3>
          <p className="text-muted-foreground mt-1">
            Your auto-saved work will appear here
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Drafts;
