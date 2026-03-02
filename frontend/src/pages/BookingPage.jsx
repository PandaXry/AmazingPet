import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { CalendarCheck } from '@phosphor-icons/react';
import { requestBooking } from '../services/apiClient';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const INITIAL = {
  name: '',
  email: '',
  company: '',
  phone: '',
  meeting_type: 'Demo',
  notes: '',
};

const BookingPage = () => {
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await requestBooking(form);
      setSubmitted(true);
      toast.success('Booking request sent!', {
        description: "We'll confirm your slot within 24 hours.",
      });
      setForm(INITIAL);
    } catch (err) {
      if (err.status === 429) {
        toast.error(err.message);
      } else {
        toast.error('Request failed', {
          description: 'Please try again or email us directly.',
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <CalendarCheck size={48} weight="duotone" className="text-[#DE9344] mx-auto mb-4" />
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              data-testid="booking-title"
            >
              Book a Demo
            </h1>
            <p className="text-lg text-slate-600">
              Schedule a session with our Australia team to see Amazing Pet Air in action.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#FAF8F7] border border-[#F5EFE9] rounded-2xl p-10 text-center"
              data-testid="booking-success"
            >
              <CalendarCheck size={48} weight="fill" className="text-[#DE9344] mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">Request received!</h2>
              <p className="text-slate-600">We'll be in touch within 24 hours to confirm your booking.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="bg-[#FAF8F7] border border-[#F5EFE9] rounded-2xl p-8 md:p-10 space-y-5"
              data-testid="booking-form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name" className="text-slate-900 font-medium mb-1.5 block">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="bg-white"
                    placeholder="Your full name"
                    data-testid="booking-name-input"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate-900 font-medium mb-1.5 block">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="bg-white"
                    placeholder="your@email.com"
                    data-testid="booking-email-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="company" className="text-slate-900 font-medium mb-1.5 block">
                    Company / Operation
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="bg-white"
                    placeholder="Your business name"
                    data-testid="booking-company-input"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-slate-900 font-medium mb-1.5 block">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-white"
                    placeholder="+61 xxx xxx xxx"
                    data-testid="booking-phone-input"
                  />
                </div>
              </div>

              <div>
                <Label className="text-slate-900 font-medium mb-1.5 block">
                  Session type <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={form.meeting_type}
                  onValueChange={(val) => setForm((p) => ({ ...p, meeting_type: val }))}
                >
                  <SelectTrigger className="bg-white" data-testid="booking-meeting-type-select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Demo">Product Demo</SelectItem>
                    <SelectItem value="Coffee Chat">Coffee Chat</SelectItem>
                    <SelectItem value="Technical Consultation">Technical Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="notes" className="text-slate-900 font-medium mb-1.5 block">
                  Notes
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  className="bg-white min-h-[100px]"
                  placeholder="Anything we should know before the session…"
                  data-testid="booking-notes-input"
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                data-testid="booking-submit-btn"
                className="w-full bg-[#DE9344] text-white hover:bg-[#C57622] active:bg-[#AC671E] rounded-full px-8 py-6 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending…' : 'Request Booking'}
              </Button>

              <p className="text-sm text-slate-500 text-center">
                By submitting, you agree to be contacted by Amazing Pet Australia.
              </p>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
