import { useState } from "react";
import { motion } from "framer-motion";
import {
  School,
  Search,
  CheckCircle2,
  Clock,
  Building2,
  MapPin,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const schools = [
  {
    id: "school1",
    name: "Sunrise Academy",
    type: "Secondary School",
    location: "Dar es Salaam, Tanzania",
    students: 1200,
    teachers: 85,
    status: "verified",
  },
  {
    id: "school2",
    name: "Valley High School",
    type: "High School",
    location: "Arusha, Tanzania",
    students: 800,
    teachers: 52,
    status: "verified",
  },
  {
    id: "school3",
    name: "Mountain View College",
    type: "College",
    location: "Moshi, Tanzania",
    students: 2500,
    teachers: 150,
    status: "verified",
  },
  {
    id: "school4",
    name: "Lake Side Primary",
    type: "Primary School",
    location: "Mwanza, Tanzania",
    students: 600,
    teachers: 35,
    status: "verified",
  },
];

const JoinSchool = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSchool, setSelectedSchool] = useState<(typeof schools)[0] | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredSchools = schools.filter(
    (school) =>
      school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      school.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success(
      `Application submitted to ${selectedSchool?.name}! You will be notified once reviewed.`
    );
    setIsSubmitting(false);
    setIsDialogOpen(false);
    setSelectedSchool(null);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold font-display">
          Apply to a School
        </h1>
        <p className="text-muted-foreground mt-1">
          Search and apply to be recognized as a teacher at a registered school
        </p>
      </motion.div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="py-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <School className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Why apply to a school?</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Once recognized by a school, you'll gain access to additional
                  features like student management, exam grading, fee tracking,
                  and school-wide communication tools.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search schools by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-12"
          />
        </div>
      </motion.div>

      {/* Schools List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        {filteredSchools.map((school) => (
          <Card
            key={school.id}
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => {
              setSelectedSchool(school);
              setIsDialogOpen(true);
            }}
          >
            <CardContent className="py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Building2 className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{school.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {school.location}
                      </span>
                      <span>•</span>
                      <span>{school.type}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm mt-2">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        {school.students} students
                      </span>
                      <span className="flex items-center gap-1">
                        <School className="h-4 w-4 text-muted-foreground" />
                        {school.teachers} teachers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-success/10 text-success">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                  <Button className="gap-2">
                    Apply
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredSchools.length === 0 && (
          <div className="text-center py-12">
            <School className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No schools found</h3>
            <p className="text-muted-foreground">
              Try a different search term or register a new school
            </p>
          </div>
        )}
      </motion.div>

      {/* Application Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Apply to {selectedSchool?.name}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleApply} className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{selectedSchool?.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedSchool?.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="subjects">Subjects you teach</Label>
              <Input
                id="subjects"
                placeholder="e.g., Mathematics, Physics"
                className="mt-1.5"
                required
              />
            </div>

            <div>
              <Label htmlFor="experience">Years of experience</Label>
              <Input
                id="experience"
                type="number"
                placeholder="e.g., 5"
                className="mt-1.5"
                required
              />
            </div>

            <div>
              <Label htmlFor="message">Message to school admin</Label>
              <Textarea
                id="message"
                placeholder="Introduce yourself and explain why you'd like to join this school..."
                rows={4}
                className="mt-1.5"
                required
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
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-primary hover:opacity-90"
              >
                {isSubmitting ? (
                  <>
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JoinSchool;