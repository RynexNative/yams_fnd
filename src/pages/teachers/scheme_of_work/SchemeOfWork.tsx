import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  FileText,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";

import AddSchemeOfWork from "./add.Scheme";
import { scheme, schemeStep } from "@/dto/scheme.dto";
import { schemes } from "./initial.scheme"


/* =====================
   COMPONENT
===================== */

const SchemeOfWork = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  /* ===== FORM STATE ===== */

  const [formData, setFormData] = useState<scheme>({
    id: 0,
    school_name: "",
    subject: "",
    year: "",
    term: "",
    class: "",
    status: "",
    steps: [],
  });

  const [steps, setSteps] = useState<schemeStep[]>([
    {
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
    },
  ]);

  /* =====================
     SUBMIT
  ===================== */

  const handleSubmit = () => {
    const payload = {
      ...formData,
      steps: steps,
    };

    console.log("SCHEME PAYLOAD 👉", payload);

    setIsDialogOpen(false);
  };

  /* =====================
     FILTER
  ===================== */

  const filteredSchemes = schemes.filter(
    (scheme) =>
      scheme.school_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  /* =====================
     RENDER
  ===================== */

  return (
    <div className="space-y-6 p-4">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold font-display">
            Scheme of Work
          </h1>
          <p className="text-muted-foreground">
            Plan your curriculum for each term
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary gap-2">
              <Plus className="h-4 w-4" />
              New Scheme
            </Button>
          </DialogTrigger>

          <AddSchemeOfWork
            formData={formData}
            steps={steps}
            setFormData={setFormData}
            setSteps={setSteps}
            onSubmit={handleSubmit}
            setIsDialogOpen={setIsDialogOpen}
          />
        </Dialog>
      </motion.div>

      {/* SEARCH */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search schemes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* LIST */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSchemes.map((scheme) => {
          const progress = Math.round(
            (40/60) * 100
          );

          return (
            <Card key={scheme.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${scheme.status === "active"
                          ? "bg-primary/10"
                          : scheme.status === "completed"
                            ? "bg-success/10"
                            : "bg-muted"
                        }`}
                    >
                      <FileText
                        className={`h-6 w-6 ${scheme.status === "active"
                            ? "text-primary"
                            : scheme.status === "completed"
                              ? "text-success"
                              : "text-muted-foreground"
                          }`}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{scheme.school_name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <span>{scheme.class}</span>
                        <span>•</span>
                        <span>{scheme.year}</span>
                      </div>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2">
                        <Eye className="h-4 w-4" /> View Details
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
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Progress */}
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">
                      Week {40} of {60}
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                {/* Topics */}
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {scheme.steps.map((topic) => (
                      <Badge key={topic.id} variant="secondary">
                        {topic.main_activities}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t">
                  <Badge
                    className={
                      scheme.status === "active"
                        ? "bg-primary/10 text-primary"
                        : scheme.status === "completed"
                          ? "bg-success/10 text-success"
                          : "bg-muted text-muted-foreground"
                    }
                  >
                    {scheme.status}
                  </Badge>
                  <Button variant="ghost" size="sm" className="gap-1">
                    View Details
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SchemeOfWork;
