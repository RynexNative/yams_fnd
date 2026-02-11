import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  StickyNote,
  BookOpen,
  FileText,
  Folder,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Download,
  Star,
  Clock,
  Tag,
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

const notes = [
  {
    id: 1,
    title: "Parent Meeting Notes - Grade 8A",
    content:
      "Discussed student progress, upcoming exams, and extracurricular activities...",
    subject: "Meeting",
    date: "2024-02-25",
    starred: true,
  },
  {
    id: 2,
    title: "Algebra Teaching Strategies",
    content:
      "New approaches for teaching quadratic equations, using visual methods...",
    subject: "Mathematics",
    date: "2024-02-23",
    starred: false,
  },
  {
    id: 3,
    title: "Lab Safety Guidelines",
    content: "Updated safety protocols for chemistry lab sessions...",
    subject: "Science",
    date: "2024-02-20",
    starred: true,
  },
  {
    id: 4,
    title: "Term 1 Reflection",
    content:
      "Personal notes on what worked well this term and areas for improvement...",
    subject: "Personal",
    date: "2024-02-18",
    starred: false,
  },
];

const resources = [
  {
    id: 1,
    title: "Mathematics Worksheet Pack",
    type: "PDF",
    size: "2.4 MB",
    downloads: 45,
    category: "Worksheets",
    date: "2024-02-24",
  },
  {
    id: 2,
    title: "Science Experiment Videos",
    type: "Video",
    size: "156 MB",
    downloads: 32,
    category: "Videos",
    date: "2024-02-22",
  },
  {
    id: 3,
    title: "English Grammar Guide",
    type: "PDF",
    size: "1.8 MB",
    downloads: 67,
    category: "Study Guides",
    date: "2024-02-20",
  },
  {
    id: 4,
    title: "History Timeline Poster",
    type: "Image",
    size: "4.2 MB",
    downloads: 28,
    category: "Visual Aids",
    date: "2024-02-18",
  },
];

const folders = [
  { id: 1, name: "Mathematics", count: 24, color: "bg-blue-500" },
  { id: 2, name: "Science", count: 18, color: "bg-green-500" },
  { id: 3, name: "English", count: 15, color: "bg-purple-500" },
  { id: 4, name: "History", count: 12, color: "bg-orange-500" },
  { id: 5, name: "Meeting Notes", count: 8, color: "bg-pink-500" },
];

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("notes");

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Library
          </h1>
          <p className="text-muted-foreground mt-1">
            Your personal collection of notes and learning resources
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 gap-2">
          <Plus className="h-4 w-4" />
          Add New
        </Button>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <StickyNote className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{notes.length}</p>
              <p className="text-xs text-muted-foreground">Notes</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
              <FileText className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{resources.length}</p>
              <p className="text-xs text-muted-foreground">Resources</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Folder className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold">{folders.length}</p>
              <p className="text-xs text-muted-foreground">Folders</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
              <Star className="h-5 w-5 text-warning" />
            </div>
            <div>
              <p className="text-2xl font-bold">
                {notes.filter((n) => n.starred).length}
              </p>
              <p className="text-xs text-muted-foreground">Starred</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Folders */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <h2 className="text-lg font-semibold mb-3">Folders</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {folders.map((folder) => (
            <Card
              key={folder.id}
              className="shrink-0 w-[160px] hover:shadow-md transition-shadow cursor-pointer"
            >
              <CardContent className="p-4 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg ${folder.color} flex items-center justify-center`}
                >
                  <Folder className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium truncate">{folder.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {folder.count} items
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
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
            <TabsTrigger value="notes" className="gap-2">
              <StickyNote className="h-4 w-4" />
              Notes
            </TabsTrigger>
            <TabsTrigger value="resources" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Resources
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search library..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </motion.div>

      {/* Content */}
      {activeTab === "notes" ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredNotes.map((note) => (
            <Card key={note.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {note.starred && (
                        <Star className="h-4 w-4 fill-warning text-warning shrink-0" />
                      )}
                      <CardTitle className="text-base truncate">
                        {note.title}
                      </CardTitle>
                    </div>
                    <Badge variant="secondary" className="mt-2">
                      <Tag className="h-3 w-3 mr-1" />
                      {note.subject}
                    </Badge>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2">
                        <Eye className="h-4 w-4" /> View
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <Edit className="h-4 w-4" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <Star className="h-4 w-4" /> Star
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-destructive">
                        <Trash2 className="h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {note.content}
                </p>
                <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {note.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredResources.map((resource) => (
            <Card
              key={resource.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{resource.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {resource.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {resource.size}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-muted-foreground">
                        {resource.downloads} downloads
                      </span>
                      <Button variant="ghost" size="sm" className="h-7 gap-1">
                        <Download className="h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Library;
