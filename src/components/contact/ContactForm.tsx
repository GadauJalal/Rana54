import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Form */}
      <div className="p-8 lg:p-10 rounded-3xl bg-white border-2 border-gray-100 shadow-lg">
        <h2 className="text-3xl mb-2 tracking-tight text-gray-900">Send Us a Message</h2>
        <p className="text-gray-600 mb-8">
          Fill out the form below and our team will get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name*</Label>
              <Input
                id="firstName"
                required
                placeholder="John"
                className="rounded-xl border-2 border-gray-200 focus:border-[#527E5F] transition-colors"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name*</Label>
              <Input
                id="lastName"
                required
                placeholder="Doe"
                className="rounded-xl border-2 border-gray-200 focus:border-[#527E5F] transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address*</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="john.doe@example.com"
              className="rounded-xl border-2 border-gray-200 focus:border-[#527E5F] transition-colors"
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company">Company/Organization</Label>
            <Input
              id="company"
              placeholder="Your Company Name"
              className="rounded-xl border-2 border-gray-200 focus:border-[#527E5F] transition-colors"
            />
          </div>

          {/* Inquiry Type */}
          <div className="space-y-2">
            <Label htmlFor="inquiryType">Inquiry Type*</Label>
            <Select required>
              <SelectTrigger className="rounded-xl border-2 border-gray-200 focus:border-[#527E5F] transition-colors">
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="user">Become a User</SelectItem>
                <SelectItem value="buyer">Purchase Credits (Buyers)</SelectItem>
                <SelectItem value="partner">Partnership Opportunities</SelectItem>
                <SelectItem value="installer">Installer/Integrator</SelectItem>
                <SelectItem value="support">Technical Support</SelectItem>
                <SelectItem value="press">Press/Media</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message*</Label>
            <Textarea
              id="message"
              required
              placeholder="Tell us more about your inquiry..."
              rows={6}
              className="rounded-xl border-2 border-gray-200 focus:border-[#527E5F] transition-colors resize-none"
            />
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-[#527E5F] to-[#3d5d48] text-white hover:from-[#3d5d48] hover:to-[#527E5F] shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl group"
            disabled={submitted}
          >
            {submitted ? (
              <>
                <CheckCircle2 className="mr-2 w-5 h-5" />
                Message Sent!
              </>
            ) : (
              <>
                <Send className="mr-2 w-5 h-5" />
                Send Message
              </>
            )}
          </Button>

          <p className="text-sm text-gray-500 text-center">
            By submitting this form, you agree to our privacy policy.
          </p>
        </form>
      </div>

      {/* Contact info sidebar */}
      <div className="space-y-6">
        {/* Direct contact */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#F57B44] to-[#e06a33] text-white shadow-lg">
          <h3 className="text-2xl mb-4 tracking-tight">Direct Contact</h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-white/70 mb-1">General Inquiries</div>
              <a href="mailto:hello@rana54.com" className="text-white hover:text-white/80 transition-colors">
                hello@rana54.com
              </a>
            </div>
            <div>
              <div className="text-sm text-white/70 mb-1">Sales & Partnerships</div>
              <a href="mailto:partners@rana54.com" className="text-white hover:text-white/80 transition-colors">
                partners@rana54.com
              </a>
            </div>
            <div>
              <div className="text-sm text-white/70 mb-1">Technical Support</div>
              <a href="mailto:support@rana54.com" className="text-white hover:text-white/80 transition-colors">
                support@rana54.com
              </a>
            </div>
            <div>
              <div className="text-sm text-white/70 mb-1">Press & Media</div>
              <a href="mailto:press@rana54.com" className="text-white hover:text-white/80 transition-colors">
                press@rana54.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick facts */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#527E5F]/5 to-[#F57B44]/5 border border-gray-200">
          <h3 className="text-2xl mb-4 tracking-tight text-gray-900">Why Contact Us?</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#527E5F] mt-1">✓</span>
              <span className="text-gray-600">Get personalized deployment guidance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#527E5F] mt-1">✓</span>
              <span className="text-gray-600">Explore partnership opportunities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#527E5F] mt-1">✓</span>
              <span className="text-gray-600">Request a product demo or pilot</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#527E5F] mt-1">✓</span>
              <span className="text-gray-600">Discuss carbon credit procurement</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#527E5F] mt-1">✓</span>
              <span className="text-gray-600">Get technical support and training</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
