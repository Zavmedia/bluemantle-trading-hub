import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";

const applySchema = z.object({
  name: z.string()
    .min(1, "Name is required")
    .regex(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces"),
  mobile: z.string()
    .regex(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
  email: z.string()
    .email("Invalid email format"),
  age: z.number()
    .min(18, "Age must be at least 18")
    .max(100, "Age must be less than 100"),
  qualification: z.enum(["High School", "UG", "PG", "Others"], {
    errorMap: () => ({ message: "Please select a qualification" })
  })
});

type FormData = {
  name: string;
  mobile: string;
  email: string;
  age: string;
  qualification: string;
};

const Apply = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    age: "",
    qualification: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    try {
      const validatedData = applySchema.parse({
        ...formData,
        age: parseInt(formData.age),
        qualification: formData.qualification as any
      });

      setLoading(true);

      // Call edge function to submit to Google Sheets
      const { data, error } = await supabase.functions.invoke('submit-application', {
        body: validatedData
      });

      if (error) throw error;

      // Show success state
      setSubmitted(true);

      // Store success flag in sessionStorage
      sessionStorage.setItem('submission_success', 'true');

      // Wait 5 seconds then redirect
      setTimeout(() => {
        navigate(-1);
      }, 5000);

    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(newErrors);
        toast({
          title: "Validation Error",
          description: "Please check all fields and try again.",
          variant: "destructive"
        });
      } else {
        console.error('Submission error:', error);
        toast({
          title: "Submission Failed",
          description: "Something went wrong. Please try again.",
          variant: "destructive"
        });
      }
    } finally {
      setLoading(false);
    }
  };

  // Success screen
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 text-gradient-cyan">
            Application Submitted!
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Thank you for applying. We'll contact you soon.
          </p>
          <p className="text-sm text-muted-foreground">
            Redirecting you back...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-20 bg-gradient-to-br from-background via-card to-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </Button>

          <Card className="p-8 lg:p-12 bg-card border-2 border-border">
            <h1 className="text-4xl font-bold mb-2 text-center">
              Apply <span className="text-gradient-cyan">Now</span>
            </h1>
            <p className="text-muted-foreground text-center mb-8">
              Start your journey to financial success
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <Label htmlFor="mobile">Mobile Number (WhatsApp) *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleInputChange("mobile", value);
                  }}
                  placeholder="10 digit mobile number"
                  className={errors.mobile ? "border-red-500" : ""}
                />
                {errors.mobile && (
                  <p className="text-sm text-red-500 mt-1">{errors.mobile}</p>
                )}
              </div>

              {/* Gmail */}
              <div>
                <Label htmlFor="email">Gmail/Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@gmail.com"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Age */}
              <div>
                <Label htmlFor="age">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    handleInputChange("age", value);
                  }}
                  placeholder="Enter your age"
                  className={errors.age ? "border-red-500" : ""}
                  min="18"
                  max="100"
                />
                {errors.age && (
                  <p className="text-sm text-red-500 mt-1">{errors.age}</p>
                )}
              </div>

              {/* Qualification */}
              <div>
                <Label htmlFor="qualification">Qualification *</Label>
                <Select
                  value={formData.qualification}
                  onValueChange={(value) => handleInputChange("qualification", value)}
                >
                  <SelectTrigger className={errors.qualification ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select your qualification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="High School">High School</SelectItem>
                    <SelectItem value="UG">UG (Under Graduate)</SelectItem>
                    <SelectItem value="PG">PG (Post Graduate)</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
                {errors.qualification && (
                  <p className="text-sm text-red-500 mt-1">{errors.qualification}</p>
                )}
              </div>

              {/* Motivational Quote */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-secondary p-4 rounded-md">
                <p className="text-sm italic text-foreground font-medium text-center">
                  "Financial stability starts when you invest in learning."
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-gradient-cyan font-bold glow-cyan text-slate-50"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={20} />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={() => navigate(-1)}
                  disabled={loading}
                  className="flex-1"
                >
                  Exit
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Apply;
