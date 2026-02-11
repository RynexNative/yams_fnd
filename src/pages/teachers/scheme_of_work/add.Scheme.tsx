import React from "react";
import { v4 as uuid } from "uuid";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, X, Save } from "lucide-react";
import { scheme, schemeStep } from "@/dto/scheme.dto";
import { Textarea } from "flowbite-react";

interface AddSchemeProps {
  formData: scheme;
  steps: schemeStep[];

  setFormData: (data: scheme) => void;
  setSteps: (steps: schemeStep[]) => void;

  onSubmit: () => void;
  setIsDialogOpen: (open: boolean) => void;
}

/* =======================
   DEFAULT STEP
======================= */

const emptyStep = (): schemeStep => ({
  id: 0,
  main_competence: "",
  specific_competences: "",
  main_activities: "",
  specific_activities: "",
  teaching_activities: "",
  learning_activities: "",
  month: "",
  week: "",
  no_of_periods: "",
  teaching_and_learning_methods: "",
  teaching_and_learning_resources: "",
  assessment_tools: "",
  References: "",
  remarks: "",
});

/* =======================
   COMPONENT
======================= */

const AddSchemeOfWork: React.FC<AddSchemeProps> = ({
  formData,
  steps,
  setFormData,
  setSteps,
  onSubmit,
  setIsDialogOpen,
}) => {
  /* =======================
     HANDLERS
  ======================= */

  const addRow = () => {
    setSteps([...steps, emptyStep()]);
  };

  const removeRow = (id: number) => {
    if (steps.length === 1) return;
    setSteps(steps.filter((s) => s.id !== id));
  };

  const updateStep = (
    id: number,
    field: keyof schemeStep,
    value: string
  ) => {
    setSteps(
      steps.map((step) =>
        step.id === id ? { ...step, [field]: value } : step
      )
    );
  };

  /* =======================
     RENDER
  ======================= */

  return (
    <DialogContent className="max-w-[95vw] max-h-[90vh] flex flex-col">
      {/* HEADER */}
      <DialogHeader className="shrink-0">
        <DialogTitle className="text-xl font-display">
          Create Scheme of Work
        </DialogTitle>
      </DialogHeader>

      {/* SCROLLABLE BODY */}
      <div className="flex-1 overflow-y-auto space-y-6 pr-3 mt-4">
        {/* BASIC INFO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "School", key: "School" },
            { label: "Teacher", key: "Teacher" },
            { label: "Subject", key: "Subject" },
            { label: "Year", key: "Year" },
            { label: "Term", key: "Term" },
            { label: "Class", key: "class_id" },
          ].map((field) => (
            <div key={field.key} className="space-y-1">
              <Label>{field.label}</Label>
              <Input
                value={(formData as any)[field.key]}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [field.key]: e.target.value,
                  })
                }
              />
            </div>
          ))}
        </div>

        {/* TABLE */}
        <div className="space-y-3">
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

          <div className="border rounded-lg overflow-auto max-h-[55vh]">
            <Table className="min-w-[2200px]">
              <TableHeader>
                <TableRow>
                  {[
                    "Main Competence",
                    "Specific Competence",
                    "Main Activity",
                    "Specific Activity",
                    "Teaching Activities",
                    "Learning Activities",
                    "Month",
                    "Week",
                    "Periods",
                    "Methods",
                    "Resources",
                    "Assessment",
                    "References",
                    "Remarks",
                    "",
                  ].map((h) => (
                    <TableHead key={h}>{h}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>

              <TableBody>
                {steps.map((step) => (
                  <TableRow key={step.id}>
                    {(
                      Object.keys(step) as (keyof schemeStep)[]
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
                            className="min-w-[160px] h-[8rem]"
                          />
                        </TableCell>
                      ))}

                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeRow(step.id)}
                        disabled={steps.length === 1}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="shrink-0 flex justify-end gap-3 pt-4 border-t">
        <Button
          variant="outline"
          onClick={() => setIsDialogOpen(false)}
        >
          Cancel
        </Button>
        <Button
          className="gap-2 bg-gradient-primary hover:opacity-90"
          onClick={onSubmit}
        >
          <Save className="h-4 w-4" />
          Submit Scheme
        </Button>
      </div>
    </DialogContent>
  );
};

export default AddSchemeOfWork;
