import { useState } from "react";
import { X, Mail, User, Building2, Phone, MessageSquare, CheckCircle2, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface RequestDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RequestDemoModal({ open, onOpenChange }: RequestDemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Demo request submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        role: "",
        message: ""
      });
      onOpenChange(false);
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-white rounded-3xl border-0 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] [&>button]:hidden">
        {/* Hidden accessibility elements */}
        <DialogTitle className="sr-only">
          {submitted ? "Demo Request Received" : "Request a Demo"}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {submitted 
            ? "Your demo request has been successfully submitted. Our team will contact you within 24 hours." 
            : "Fill out this form to request a personalized demo of Rana54's clean energy tracking and verification platform."}
        </DialogDescription>
        
        {submitted ? (
          // Success State
          <div className="relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#527E5F] via-[#527E5F] to-[#3d5d48]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F6B842]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F57B44]/20 rounded-full blur-3xl" />
            
            <div className="relative p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 animate-[scale_0.5s_ease-in-out]">
                <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
              
              <h3 className="text-3xl text-white mb-4 tracking-tight">
                Request Received!
              </h3>
              
              <p className="text-lg text-white/90 max-w-md leading-relaxed">
                Thank you for your interest. Our team will reach out within 24 hours to schedule your personalized demo.
              </p>
            </div>
          </div>
        ) : (
          // Form State
          <>
            {/* Header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#527E5F] via-[#527E5F] to-[#3d5d48] p-8">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F6B842]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F57B44]/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  
                </div>
                
                <h2 className="text-3xl text-white mb-3 tracking-tight">
                  Request a Demo
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Discover how Rana54 can help you track, verify, and monetize clean energy impact.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#527E5F]" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="John Doe"
                  className="border-gray-200 focus:border-[#527E5F] focus:ring-[#527E5F] rounded-xl h-12"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#527E5F]" />
                  Work Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="john@company.com"
                  className="border-gray-200 focus:border-[#527E5F] focus:ring-[#527E5F] rounded-xl h-12"
                />
              </div>

              {/* Company & Role */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#527E5F]" />
                    Company *
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="Acme Corp"
                    className="border-gray-200 focus:border-[#527E5F] focus:ring-[#527E5F] rounded-xl h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-gray-700">
                    Your Role *
                  </Label>
                  <Select value={formData.role} onValueChange={(value) => handleChange("role", value)} required>
                    <SelectTrigger className="border-gray-200 focus:border-[#527E5F] focus:ring-[#527E5F] rounded-xl h-12">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="homeowner">Homeowner</SelectItem>
                      <SelectItem value="sustainability">Sustainability Manager</SelectItem>
                      <SelectItem value="procurement">Procurement</SelectItem>
                      <SelectItem value="executive">Executive</SelectItem>
                      <SelectItem value="partner">Partner/Installer</SelectItem>
                      <SelectItem value="investor">Investor</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#527E5F]" />
                  Phone Number (Optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="border-gray-200 focus:border-[#527E5F] focus:ring-[#527E5F] rounded-xl h-12"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#527E5F]" />
                  Tell us about your needs (Optional)
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="What are you hoping to achieve with Rana54?"
                  className="border-gray-200 focus:border-[#527E5F] focus:ring-[#527E5F] rounded-xl min-h-[100px] resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#527E5F] to-[#3d5d48] hover:from-[#3d5d48] hover:to-[#527E5F] text-white h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2 tracking-wide">
                  Submit Request
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" strokeWidth={2.5} />
                </span>
              </Button>

              {/* Privacy note */}
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                By submitting this form, you agree to our privacy policy. We'll only use your information to contact you about your demo request.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}