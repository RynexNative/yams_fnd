import { useState } from "react";
import { motion } from "framer-motion";
import {
  School,
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Upload,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import SchoolApplicationForm from "@/pages/teachers/school_application/school_application_form";

const RegisterSchool = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success(
      "School registration submitted! Our team will review your application within 2-3 business days."
    );
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold font-display">
          Register a New School
        </h1>
        <p className="text-muted-foreground mt-1">
          Add your school to YAMS and start managing your institution
        </p>
      </motion.div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-warning/5 border-warning/20">
          <CardContent className="py-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center shrink-0">
                <AlertCircle className="h-5 w-5 text-warning" />
              </div>
              <div>
                <h3 className="font-medium">Verification Required</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  All school registrations are reviewed by our team to ensure
                  authenticity. Please provide accurate information and valid
                  documentation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Registration Form */}
      <SchoolApplicationForm isSubmitting={isSubmitting} handleSubmit={handleSubmit}/>
      
    </div>
  );
};

export default RegisterSchool;