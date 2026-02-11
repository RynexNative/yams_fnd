import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  StickyNote,
  Star,
  MoreVertical,
  Edit,
  Trash2,
  Pin,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const notes = [
  {
    id: 1,
    title: "Parent Meeting Notes",
    content:
      "Discussed student progress with parents. Key points: homework completion, class participation, upcoming exams...",
    date: "2024-01-15",
    isPinned: true,
    isStarred: true,
    tags: ["meetings", "parents"],
    color: "bg-yellow-50 dark:bg-yellow-900/20",
  },
  {
    id: 2,
    title: "Teaching Strategies",
    content:
      "New strategies to improve student engagement: interactive activities, group discussions, visual aids...",
    date: "2024-01-14",
    isPinned: true,
    isStarred: false,
    tags: ["teaching", "strategies"],
    color: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    id: 3,
    title: "Exam Preparation Tips",
    content:
      "Share with students: review past papers, create study schedules, focus on weak areas...",
    date: "2024-01-13",
    isPinned: false,
    isStarred: true,
    tags: ["exams", "students"],
    color: "bg-green-50 dark:bg-green-900/20",
  },
  {
    id: 4,
    title: "Resource Links",
    content:
      "Educational websites: Khan Academy, Coursera, EdX. Add to student resources page...",
    date: "2024-01-12",
    isPinned: true,
    isStarred: true,
    tags: ["resources"],
    color: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    id: 5,
    title: "Class Schedule Changes",
    content:
      "Grade 8 Math moved to Thursday afternoon. Grade 7 Science stays on Wednesday morning...",
    date: "2024-01-11",
    isPinned: false,
    isStarred: false,
    tags: ["schedule"],
    color: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    id: 6,
    title: "Project Ideas",
    content:
      "Science fair projects: renewable energy, water filtration, plant growth experiments...",
    date: "2024-01-10",
    isPinned: false,
    isStarred: false,
    tags: ["projects", "science"],
    color: "bg-pink-50 dark:bg-pink-900/20",
  },
];

const Notes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const pinnedNotes = filteredNotes.filter((note) => note.isPinned);
  const otherNotes = filteredNotes.filter((note) => !note.isPinned);

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Note created successfully!");
    setIsDialogOpen(false);
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
          <h1 className="text-2xl md:text-3xl font-bold font-display">Notes</h1>
          <p className="text-muted-foreground mt-1">
            Keep track of your ideas and reminders
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary hover:opacity-90 gap-2">
              <Plus className="h-4 w-4" />
              New Note
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Note</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateNote} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter note title"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Write your note..."
                  rows={6}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  placeholder="e.g., meetings, important"
                  className="mt-1.5"
                />
              </div>
              <div className="flex justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-gradient-primary">
                  Create Note
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </motion.div>

      {/* Pinned Notes */}
      {pinnedNotes.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
            <Pin className="h-4 w-4" /> Pinned
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pinnedNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Other Notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {pinnedNotes.length > 0 && otherNotes.length > 0 && (
          <h2 className="text-sm font-medium text-muted-foreground mb-3">
            Other Notes
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {otherNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

function NoteCard({ note }: { note: (typeof notes)[0] }) {
  return (
    <Card
      className={`group hover:shadow-lg transition-shadow overflow-hidden ${note.color} border-0`}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {note.isPinned && <Pin className="h-3 w-3 text-muted-foreground" />}
            {note.isStarred && <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreVertical className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="gap-2">
                <Pin className="h-4 w-4" />{" "}
                {note.isPinned ? "Unpin" : "Pin"}
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Star className="h-4 w-4" />{" "}
                {note.isStarred ? "Unstar" : "Star"}
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Edit className="h-4 w-4" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 text-destructive">
                <Trash2 className="h-4 w-4" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <h3 className="font-semibold mb-2 line-clamp-1">{note.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
          {note.content}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {note.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {note.tags.length > 2 && (
              <span className="text-xs text-muted-foreground">
                +{note.tags.length - 2}
              </span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">{note.date}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default Notes;
