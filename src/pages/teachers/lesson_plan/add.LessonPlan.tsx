import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLessonPlans } from "./useLessonPlan";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, X, Save } from "lucide-react";
import { LessonPlanStep, LessonPlan } from "@/dto/lessonPlan.dto";


interface StepRow {
  stage_name: string;
  duration_minutes: string;
  teaching_activities: string;
  learning_activities: string;
  assessment_criteria: string;
}

interface AddLessonPlanProps {
  editingPlan: LessonPlan | null;
  formData: LessonPlan;
  setFormData: React.Dispatch<React.SetStateAction<LessonPlan>>;
  handleCreatePlan: (e: React.FormEvent) => void;
  setIsDialogOpen: (v: boolean) => void;
  setEditingPlan: (v: LessonPlan | null) => void;
  resetForm: () => void;
}

const AddLessonPlan = ({
  editingPlan,
  formData,
  setFormData,
  handleCreatePlan,
  setIsDialogOpen,
  setEditingPlan,
  resetForm,
}: AddLessonPlanProps) => {


  const emptyStep = (): LessonPlanStep => ({
    id: crypto.randomUUID(),
    stage: "",
    time_minutes: "",
    specific_activity: "",
    teaching_activities: "",
    learning_activities: "",
    assessment_criteria: "",
  });


  const steps = formData.steps;
  const setSteps = (newSteps: LessonPlanStep[]) =>
    setFormData({ ...formData, steps: newSteps });


  const addRow = () => {
    setSteps([...steps, emptyStep()]);
  };

  const removeRow = (id: string) => {
    if (steps.length === 1) return;
    setSteps(steps.filter((s) => s.id !== id));
  };

  const updateStep = (
    id: string,
    field: keyof LessonPlanStep,
    value: string
  ) => {
    setSteps(
      steps.map((step) =>
        step.id === id ? { ...step, [field]: value } : step
      )
    );
  };


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("📘 FINAL PAYLOAD:", formData);
    handleCreatePlan(e);
  };

  useEffect(() => {
    if (editingPlan) {
      setFormData(editingPlan);
    }
  }, [editingPlan]);


  return (
    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col">
      <DialogHeader>
        <DialogTitle>{editingPlan ? "Edit Lesson Plan" : "Create Lesson Plan"}</DialogTitle>
      </DialogHeader>
      <DialogDescription className="sr-only">
        Lesson plan form dialog
      </DialogDescription>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="school_name">School Name</Label>
          <Input
            id="school_name"
            placeholder="Enter School Name"
            className="mt-1.5"
            value={formData.school_name}
            onChange={(e) => setFormData({ ...formData, school_name: e.target.value })}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Select
              value={formData.subject}
              onValueChange={(value) => setFormData({ ...formData, subject: value })}
            >
              <SelectTrigger className="mt-1.5">
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="History">History</SelectItem>
                <SelectItem value="Geography">Geography</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="grade">Class</Label>
            <Select
              value={formData.class}
              onValueChange={(value) => setFormData({ ...formData, class: value })}
            >
              <SelectTrigger className="mt-1.5">
                <SelectValue placeholder="Select grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Grade 7">Grade 7</SelectItem>
                <SelectItem value="Grade 8">Grade 8</SelectItem>
                <SelectItem value="Grade 9">Grade 9</SelectItem>
                <SelectItem value="Grade 10">Grade 10</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              className="mt-1.5"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="duration">Time</Label>
            <Input
              id="duration"
              placeholder="e.g., 10:00 AM - 11:00 AM"
              className="mt-1.5"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />
          </div>
        </div>
        <div className="border rounded-lg overflow-x-auto max-h-[55vh]">
          <Table className="min-w-max">
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead colSpan={2} className="">Registered</TableHead>
                <TableHead colSpan={2}>Present</TableHead>
              </TableRow>
              <TableRow>
                <TableHead>Girls</TableHead>
                <TableHead>Boys</TableHead>
                <TableHead> Girsl</TableHead>
                <TableHead>Boys</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.registered_girls}
                    onChange={(e) =>
                      setFormData({ ...formData, registered_girls: Number(e.target.value) })
                    }
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.registered_boys}
                    onChange={(e) =>
                      setFormData({ ...formData, registered_boys: Number(e.target.value) })
                    }
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.present_girls}
                    onChange={(e) =>
                      setFormData({ ...formData, present_girls: Number(e.target.value) })
                    }
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.present_boys}
                    onChange={(e) =>
                      setFormData({ ...formData, present_boys: Number(e.target.value) })
                    }
                    className="w-full"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <Label htmlFor="school_name">Main Competence</Label>
          <Textarea
            id="main_competence"
            placeholder="Enter Main Competence"
            className="mt-1.5"
            value={formData.main_competence}
            onChange={(e) => setFormData({ ...formData, main_competence: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="school_name">Specific Competence</Label>
          <Textarea
            id="specific_competence"
            placeholder="Enter Specific Competence"
            className="mt-1.5"
            value={formData.specific_competence}
            onChange={(e) => setFormData({ ...formData, specific_competence: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="school_name">Main Activity</Label>
          <Textarea
            id="main_activity"
            placeholder="Enter Main Activity"
            className="mt-1.5"
            value={formData.main_activity}
            onChange={(e) => setFormData({ ...formData, main_activity: e.target.value })}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <Label className="text-base font-semibold">
            Scheme Steps
          </Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addRow}
            className="gap-1"
          >
            <Plus className="h-4 w-4" />
            Add Row
          </Button>
        </div>
        <div className="border rounded-lg overflow-x-auto max-h-[55vh]">
          <Table className="min-w-max">
            <TableHeader>
              <TableRow>
                {[
                  "Stage",
                  "Time (Minutes)",
                  "Specific Activity",
                  "Teaching Activities",
                  "Learning Activities",
                  "Assessment Criteria",
                  "Actions",
                ].map((h) => (
                  <TableHead key={h}>{h}</TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {steps.map((step) => (
                <TableRow key={step.id}>
                  {(
                    Object.keys(step) as (keyof LessonPlanStep)[]
                  )
                    .filter((k) => k !== "id")
                    .map((field) => (
                      <TableCell key={field}>
                        <Textarea
                          value={step[field]}
                          onChange={(e) =>
                            updateStep(
                              step.id,
                              field,
                              e.target.value
                            )
                          }
                          className="min-w-[160px] h-32"
                        />
                      </TableCell>
                    ))}

                  <TableCell>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      disabled={steps.length === 1}
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeRow(step.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline" onClick={() => {
            setIsDialogOpen(false);
            setEditingPlan(null);
            resetForm();
          }}>
            Cancel
          </Button>
          <Button type="submit" className="bg-gradient-primary">
            {editingPlan ? "Update Plan" : "Create Plan"}
          </Button>
        </div>
      </form>
    </DialogContent>
  );
};

export default AddLessonPlan;
