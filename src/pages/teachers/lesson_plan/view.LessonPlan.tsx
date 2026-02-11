import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ViewField, ViewTextarea } from "@/components/view-field";
import { LessonPlan } from "@/dto/lessonPlan.dto";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";

interface LessonPlanViewProps {
    plan: LessonPlan;
    handleExport: (plan: LessonPlan, format: "pdf" | "docx") => void;
    handleEdit: (plan: LessonPlan) => void;
    setIsViewDialogOpen: (open: boolean) => void;
}

export const LessonPlanView = ({ plan, handleExport, handleEdit, setIsViewDialogOpen }: LessonPlanViewProps) => {
    return (
        <div className="space-y-6 overflow-x-auto">

            {/* BASIC INFO */}
            <div className="grid grid-cols-2 gap-4">
                <ViewField label="School Name" value={plan.school_name} />
                <ViewField label="Subject" value={plan.subject} />
                <ViewField label="Class" value={plan.class} />
                <ViewField label="Date" value={plan.date} />
                <ViewField label="Time" value={plan.time} />
            </div>

            {/* REGISTERED / PRESENT TABLE */}
            <div className="border rounded-lg overflow-x-auto">
                <Table>
                    <TableHeader className="bg-muted">
                        <TableRow>
                            <TableHead colSpan={2} className="text-center">
                                Registered
                            </TableHead>
                            <TableHead colSpan={2} className="text-center">
                                Present
                            </TableHead>
                        </TableRow>
                        <TableRow>
                            <TableHead>Girls</TableHead>
                            <TableHead>Boys</TableHead>
                            <TableHead>Girls</TableHead>
                            <TableHead>Boys</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>{plan.registered_girls}</TableCell>
                            <TableCell>{plan.registered_boys}</TableCell>
                            <TableCell>{plan.present_girls}</TableCell>
                            <TableCell>{plan.present_boys}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            {/* TEXT SECTIONS */}
            <ViewTextarea label="Main Competence" value={plan.main_competence} />
            <ViewTextarea label="Specific Competence" value={plan.specific_competence} />
            <ViewTextarea label="Main Activity" value={plan.main_activity} />

            {/* STEPS TABLE */}
            <div>
                <Label className="text-base font-semibold">Scheme Steps</Label>

                <div className="border rounded-lg overflow-x-auto mt-2">
                    <Table className="min-w-max">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Stage</TableHead>
                                <TableHead>Time (Minutes)</TableHead>
                                <TableHead>Specific Activity</TableHead>
                                <TableHead>Teaching Activities</TableHead>
                                <TableHead>Learning Activities</TableHead>
                                <TableHead>Assessment Criteria</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {plan.steps?.map((step) => (
                                <TableRow key={step.id}>
                                    <TableCell>{step.stage}</TableCell>
                                    <TableCell>{step.time_minutes}</TableCell>
                                    <TableCell>{step.specific_activity}</TableCell>
                                    <TableCell>{step.teaching_activities}</TableCell>
                                    <TableCell>{step.learning_activities}</TableCell>
                                    <TableCell>{step.assessment_criteria}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <DialogFooter className="mt-6">
                        <Button variant="outline" onClick={() => handleExport(plan, "pdf")}>
                            Export PDF
                        </Button>
                        <Button
                            onClick={() => {
                                setIsViewDialogOpen(false);
                                handleEdit(plan);
                            }}
                        >
                            Edit
                        </Button>
                    </DialogFooter>
                </div>
            </div>
        </div>
    );
};
