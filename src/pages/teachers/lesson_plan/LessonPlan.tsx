import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Filter,
  MoreVertical,
  BookOpen,
  Calendar,
  Clock,
  Edit,
  Trash2,
  Copy,
  Eye,
  Download,
  Printer,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import AddLessonPlan from "./add.LessonPlan";
import { toast } from "sonner";
import { initialLessonPlans } from "./initial-lesson-plans";
import { LessonPlan } from "@/dto/lessonPlan.dto";
import { useLessonPlans } from "./useLessonPlan";
import { LessonPlanView } from "./view.LessonPlan";


const LessonPlans = () => {
  const {
    filteredPlans,
    isViewDialogOpen,
    isDialogOpen,
    setIsDialogOpen,
    setEditingPlan,
    resetForm,
    setSearchQuery,
    searchQuery,
    activeFiltersCount,
    resetFilters,
    handleView,
    handleEdit,
    handleDuplicate,
    handleExport,
    handlePrint,
    handleDelete,
    setIsViewDialogOpen,
    selectedPlan,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    confirmDelete,
    editingPlan,
    formData,
    setFormData,
    handleCreatePlan,
    filters,
    setFilters,
    isFilterOpen,
    setIsFilterOpen

  } = useLessonPlans()

  return (
    <div className="space-y-6 p-[1em]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div className="flex flex-col justify-start items-start gap-1">  
          <h1 className="text-2xl md:text-3xl font-bold">
            Lesson Plans
          </h1>
          <p className="text-muted-foreground mt-1">
            Create and manage your lesson plans
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) {
            setEditingPlan(null);
            resetForm();
          }
        }}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary hover:opacity-90 gap-2">
              <Plus className="h-4 w-4" />
              New Lesson Plan
            </Button>
          </DialogTrigger>
          <AddLessonPlan editingPlan={editingPlan} formData={formData} setFormData={setFormData} handleCreatePlan={handleCreatePlan} setIsDialogOpen={setIsDialogOpen} setEditingPlan={setEditingPlan} resetForm={resetForm} />
        </Dialog>
      </motion.div>

      {/* Search & Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search lesson plans..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
              {activeFiltersCount > 0 && (
                <Badge className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="end">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Filters</h4>
                {activeFiltersCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={resetFilters}>
                    Clear all
                  </Button>
                )}
              </div>
              <div className="space-y-3">
                <div>
                  <Label className="text-sm">Subject</Label>
                  <Select
                    value={filters.subject}
                    onValueChange={(value) => setFilters({ ...filters, subject: value })}
                  >
                    <SelectTrigger className="mt-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Subjects</SelectItem>
                      <SelectItem value="Mathematics">Mathematics</SelectItem>
                      <SelectItem value="Science">Science</SelectItem>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="History">History</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm">Grade</Label>
                  <Select
                    value={filters.grade}
                    onValueChange={(value) => setFilters({ ...filters, grade: value })}
                  >
                    <SelectTrigger className="mt-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Grades</SelectItem>
                      <SelectItem value="Grade 7">Grade 7</SelectItem>
                      <SelectItem value="Grade 8">Grade 8</SelectItem>
                      <SelectItem value="Grade 9">Grade 9</SelectItem>
                      <SelectItem value="Grade 10">Grade 10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm">Term</Label>
                  <Select
                    value={filters.term}
                    onValueChange={(value) => setFilters({ ...filters, term: value })}
                  >
                    <SelectTrigger className="mt-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Terms</SelectItem>
                      <SelectItem value="Term 1">Term 1</SelectItem>
                      <SelectItem value="Term 2">Term 2</SelectItem>
                      <SelectItem value="Term 3">Term 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm">Status</Label>
                  <Select
                    value={filters.status}
                    onValueChange={(value) => setFilters({ ...filters, status: value })}
                  >
                    <SelectTrigger className="mt-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full" onClick={() => setIsFilterOpen(false)}>
                Apply Filters
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </motion.div>

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2"
        >
          {filters.subject !== "all" && (
            <Badge variant="secondary" className="gap-1">
              Subject: {filters.subject}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setFilters({ ...filters, subject: "all" })} />
            </Badge>
          )}
          {filters.grade !== "all" && (
            <Badge variant="secondary" className="gap-1">
              {filters.grade}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setFilters({ ...filters, grade: "all" })} />
            </Badge>
          )}
          {filters.term !== "all" && (
            <Badge variant="secondary" className="gap-1">
              {filters.term}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setFilters({ ...filters, term: "all" })} />
            </Badge>
          )}
          {filters.status !== "all" && (
            <Badge variant="secondary" className="gap-1">
              Status: {filters.status}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setFilters({ ...filters, status: "all" })} />
            </Badge>
          )}
        </motion.div>
      )}

      {/* Lesson Plans Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filteredPlans.map((plan) => (
          <Card key={plan.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{plan.main_competence}</CardTitle>
                    <p className="text-sm text-muted-foreground">{plan.subject}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="gap-2" onClick={() => handleView(plan)}>
                      <Eye className="h-4 w-4" /> View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2" onClick={() => handleEdit(plan)}>
                      <Edit className="h-4 w-4" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2" onClick={() => handleDuplicate(plan)}>
                      <Copy className="h-4 w-4" /> Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="gap-2" onClick={() => handleExport(plan, "pdf")}>
                      <Download className="h-4 w-4" /> Export as PDF
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2" onClick={() => handleExport(plan, "docx")}>
                      <Download className="h-4 w-4" /> Export as Word
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2" onClick={() => handlePrint(plan)}>
                      <Printer className="h-4 w-4" /> Print
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="gap-2 text-destructive" onClick={() => handleDelete(plan)}>
                      <Trash2 className="h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {plan.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {plan.time}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Badge variant="outline">{plan.class}</Badge>
                <Badge
                  className={
                    plan.status === "completed"
                      ? "bg-success/10 text-success hover:bg-success/20"
                      : plan.status === "in-progress"
                        ? "bg-warning/10 text-warning hover:bg-warning/20"
                        : "bg-muted text-muted-foreground"
                  }
                >
                  {plan.status.replace("-", " ")}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {filteredPlans.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="font-medium text-lg">No lesson plans found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      )}

      {/* View Details Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedPlan?.main_competence}</DialogTitle>
          </DialogHeader>
          {selectedPlan && (
            <LessonPlanView plan={selectedPlan} handleExport={handleExport} handleEdit={handleEdit} setIsViewDialogOpen={setIsViewDialogOpen}/>
          )}
        </DialogContent>
      </Dialog>
  
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Lesson Plan?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{selectedPlan?.main_competence}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default LessonPlans;
