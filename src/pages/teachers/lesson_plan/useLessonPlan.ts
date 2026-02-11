import { useState } from "react";
import { LessonPlan } from "@/dto/lessonPlan.dto";
import { initialLessonPlans } from "./initial-lesson-plans";
import { toast } from "sonner";
import LessonPlans from "./LessonPlan";
import { LessonPlanStep } from "@/dto/lessonPlan.dto";

export const useLessonPlans = () => {
  const [lessonPlans, setLessonPlans] =
    useState<LessonPlan[]>(initialLessonPlans);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<LessonPlan | null>(null);
  const [editingPlan, setEditingPlan] = useState<LessonPlan | null>(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const [filters, setFilters] = useState({
    subject: "all",
    grade: "all",
    term: "all",
    status: "all",
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [formData, setFormData] = useState<LessonPlan>({
      id: "",
      school_name: "",
      teacher: "",
      class: "",
      subject: "",
      date: "",
      time: "",
      registered_girls: 0,
      registered_boys: 0,
      present_girls: 0,
      present_boys: 0,
      main_competence: "",
      specific_competence: "",
      main_activity: "",
      specific_activity: "",
      teaching_resources: "",
      references: "",
      steps: [],
      remarks: "",
      status: "",
    });

  const filteredPlans = lessonPlans.filter((plan) => {
    const matchesSearch =
      plan.main_competence.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plan.subject.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSubject =
      filters.subject === "all" || plan.subject === filters.subject;
    const matchesGrade =
      filters.grade === "all" || plan.class === filters.grade;
    // const matchesTerm =
    //   filters.term === "all" || plan.term === filters.term;
    // const matchesStatus =
      // filters.status === "all" || plan.status === filters.status;

    return (
      matchesSearch &&
      matchesSubject &&
      matchesGrade
      // matchesTerm &&
      // matchesStatus
    );
  });

  const activeFiltersCount = Object.values(filters).filter(
    (v) => v !== "all"
  ).length;

  const resetFilters = () => {
    setFilters({ subject: "all", grade: "all", term: "all", status: "all" });
  };

  const resetForm = () => {
    setFormData({
      id: "",
      school_name: "",
      teacher: "",
      class: "",
      subject: "",
      date: "",
      time: "",
      registered_girls: 0,
      registered_boys: 0,
      present_girls: 0,
      present_boys: 0,
      main_competence: "",
      specific_competence: "",
      main_activity: "",
      specific_activity: "",
      teaching_resources: "",
      steps: [],
      references: "",
      remarks: "",
      status: ""
    });
  };

  const handleCreatePlan = (e: React.FormEvent) => {
    e.preventDefault();

    const newPlan: LessonPlan = {
      id: formData.id,
      school_name: formData.school_name,
      teacher: formData.teacher,
      class: formData.class,
      subject: formData.subject,
      date: formData.date,
      time: formData.time,
      registered_girls: formData.registered_girls,
      registered_boys: formData.registered_boys,
      present_girls: formData.present_girls,
      present_boys: formData.present_boys,
      main_competence: formData.main_competence,
      specific_competence: formData.specific_competence,
      main_activity: formData.main_activity,
      specific_activity: formData.specific_activity,
      teaching_resources: formData.teaching_resources,
      references: formData.references,
      steps: [],
      remarks: formData.remarks,
      status: formData.status,
    };

    if (editingPlan) {
      setLessonPlans((plans) =>
        plans.map((p) =>
          p.id === editingPlan.id ? { ...newPlan, id: editingPlan.id } : p
        )
      );
      toast.success("Lesson plan updated successfully!");
    } else {
      setLessonPlans((plans) => [...plans, newPlan]);
      toast.success("Lesson plan created successfully!");
    }

    setIsDialogOpen(false);
    setEditingPlan(null);
    resetForm();
  };

  const handleEdit = (plan: LessonPlan) => {
    setEditingPlan(plan);
    setFormData({
      id: plan.id,
      school_name: plan.school_name,
      teacher: plan.teacher,
      class: plan.class,
      subject: plan.subject,
      date: plan.date,
      time: plan.time,
      registered_girls: plan.registered_girls,
      registered_boys: plan.registered_boys,
      present_girls: plan.present_girls,
      present_boys: plan.present_boys,
      main_competence: plan.main_competence,
      specific_competence: plan.specific_competence,
      main_activity: plan.main_activity,
      specific_activity: plan.specific_activity,
      teaching_resources: plan.teaching_resources,
      references: plan.references,
      steps: plan.steps,
      remarks: plan.remarks,
      status: plan.status,
    });
    setIsDialogOpen(true);
  };

  const handleDuplicate = (plan: LessonPlan) => {
    setLessonPlans((plans) => [
      ...plans,
      { ...plan, id: plan.id, title: `${plan.main_competence} (Copy)`, status: "draft" },
    ]);
    toast.success("Lesson plan duplicated successfully!");
  };

  const handleDelete = (plan: LessonPlan) => {
    setSelectedPlan(plan);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (!selectedPlan) return;

    setLessonPlans((plans) =>
      plans.filter((p) => p.id !== selectedPlan.id)
    );
    toast.success("Lesson plan deleted successfully!");
    setIsDeleteDialogOpen(false);
    setSelectedPlan(null);
  };

  const handleView = (plan: LessonPlan) => {
    setSelectedPlan(plan);
    setIsViewDialogOpen(true);
  };

  const handleExport = (plan: LessonPlan, format: string) => {
    toast.success(`Exporting "${plan.main_competence}" as ${format.toUpperCase()}...`);
    setTimeout(() => {
      toast.success(`${format.toUpperCase()} downloaded successfully!`);
    }, 1000);
  };

  const handlePrint = (plan: LessonPlan) => {
    toast.success(`Preparing "${plan.main_competence}" for printing...`);
    window.print();
  };

  return {
    // state
    lessonPlans,
    filteredPlans,
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    isFilterOpen,
    setIsFilterOpen,
    activeFiltersCount,

    isDialogOpen,
    setIsDialogOpen,
    isViewDialogOpen,
    setIsViewDialogOpen,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,

    selectedPlan,
    editingPlan,
    setEditingPlan,
    formData,
    setFormData,

    // actions
    resetFilters,
    handleCreatePlan,
    handleEdit,
    handleDuplicate,
    handleDelete,
    confirmDelete,
    handleView,
    handleExport,
    handlePrint,
    resetForm,
  };
};
