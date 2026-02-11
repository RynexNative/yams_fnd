import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  Upload,
  CheckCircle2,
} from "lucide-react";

const schoolTypes = [
  "Primary School",
  "Secondary School",
  "High School",
  "College",
  "University",
  "Vocational Training",
  "Other",
];

const ownerTypes = [
  "Public/Government",
  "Private",
  "Community",
  "Religious Organization",
  "Non-Profit Organization",
  "Other",
];

interface SchoolApplicationFormProps {
  isSubmitting: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const SchoolApplicationForm = ({
  isSubmitting,
  handleSubmit,
}: SchoolApplicationFormProps) => {
  const [form, setForm] = useState({
    schoolName: "",
    schoolType: "",
    ownerType: "",
    address: "",
    registrationNumber: "",
    city: "",
    region: "",
    country: "",
    phone: "",
    email: "",
    website: "",
    studentCount: "",
    teacherCount: "",
    description: "",
  });

  const [certificate, setCertificate] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setCertificate(file);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("🏫 SCHOOL APPLICATION DATA:", {
      ...form,
      certificate,
    });

    handleSubmit(e);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            School Information
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={onSubmit} className="space-y-6">
            {/* BASIC INFO */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="schoolName">School Name *</Label>
                <Input
                  id="schoolName"
                  value={form.schoolName}
                  onChange={handleChange}
                  placeholder="Enter school name"
                  className="mt-1.5"
                  required
                />
              </div>

              <div>
                <Label>School Type *</Label>
                <Select
                  value={form.schoolType}
                  onValueChange={(v) =>
                    setForm({ ...form, schoolType: v })
                  }
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {schoolTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Ownership Type *</Label>
                <Select
                  value={form.ownerType}
                  onValueChange={(v) =>
                    setForm({ ...form, ownerType: v })
                  }
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select ownership" />
                  </SelectTrigger>
                  <SelectContent>
                    {ownerTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* LOCATION */}
            <div>
              <Label htmlFor="address">Address *</Label>
              <Textarea
                id="address"
                value={form.address}
                onChange={handleChange}
                rows={2}
                className="mt-1.5"
                required
              />
            </div>

            <div>
              <Label htmlFor="registrationNumber">
                Registration Number *
              </Label>
              <Input
                id="registrationNumber"
                value={form.registrationNumber}
                onChange={handleChange}
                className="mt-1.5"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                id="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                required
              />
              <Input
                id="region"
                value={form.region}
                onChange={handleChange}
                placeholder="Region"
              />
              <Input
                id="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Country"
                required
              />
            </div>

            {/* CONTACT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                id="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+255 xxx xxx xxx"
                required
              />
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="info@school.edu"
                required
              />
            </div>

            <Input
              id="website"
              value={form.website}
              onChange={handleChange}
              placeholder="https://www.school.edu"
            />

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                id="studentCount"
                type="number"
                value={form.studentCount}
                onChange={handleChange}
                placeholder="Number of students"
              />
              <Input
                id="teacherCount"
                type="number"
                value={form.teacherCount}
                onChange={handleChange}
                placeholder="Number of teachers"
              />
            </div>

            <Textarea
              id="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              placeholder="School description"
            />

            {/* FILE UPLOAD */}
            <div>
              <Label>Supporting Documents (Certificate) *</Label>

              <input
                ref={fileRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={handleFileChange}
              />

              <div
                onClick={() => fileRef.current?.click()}
                className="mt-2 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary"
              >
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                {certificate ? (
                  <p className="text-sm font-medium">{certificate.name}</p>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Click to upload certificate
                  </p>
                )}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex justify-between items-center pt-4 border-t">
              <span className="text-sm text-muted-foreground">
                * Required fields
              </span>
              <Button type="submit" disabled={isSubmitting} className="gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Submit Registration
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SchoolApplicationForm;
