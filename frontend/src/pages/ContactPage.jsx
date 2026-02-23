import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'sonner';
import {
  EnvelopeSimple,
  MapPin,
  CalendarCheck,
  PaperPlaneTilt
} from '@phosphor-icons/react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    lead_type: 'Breeder',
    interest: 'Book Demo',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      toast.success('Message sent successfully!', {
        description: 'We\'ll get back to you within 24 hours.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        lead_type: 'Breeder',
        interest: 'Book Demo',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message', {
        description: 'Please try again or email us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white" data-testid="contact-hero">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                data-testid="contact-title"
              >
                Let's Talk About{' '}
                <span className="bg-gradient-to-r from-[#C67D2E] to-[#DE9344] bg-clip-text text-transparent">
                  Your Needs
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-slate-600">
                Get in touch with our Australia team for demos, pricing, or partnership inquiries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-32" data-testid="contact-form-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2
                  className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Get in Touch
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Whether you're a breeder, groomer, or distributor, we're here to discuss how 
                  Amazing Pet Air can support your operation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#DE9344]" weight="duotone" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
                    <p className="text-slate-600 text-sm">Australia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <EnvelopeSimple size={24} className="text-[#DE9344]" weight="duotone" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href="mailto:contact@amazingpet.com.au"
                      className="text-slate-600 text-sm hover:text-slate-900 transition-colors"
                    >
                      contact@amazingpet.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CalendarCheck size={24} className="text-[#DE9344]" weight="duotone" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Response Time</h3>
                    <p className="text-slate-600 text-sm">Within 24 hours on business days</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">Meeting Booking</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  For demo scheduling or coffee chats, select "Book Demo" in the form and we'll send 
                  you a calendar link.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12" data-testid="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-900 font-medium mb-2 block">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      data-testid="contact-name-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-900 font-medium mb-2 block">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      data-testid="contact-email-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="company" className="text-slate-900 font-medium mb-2 block">
                      Company / Operation
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      data-testid="contact-company-input"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white"
                      placeholder="Your business name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-slate-900 font-medium mb-2 block">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      data-testid="contact-phone-input"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white"
                      placeholder="+61 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="lead_type" className="text-slate-900 font-medium mb-2 block">
                      I am a <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.lead_type}
                      onValueChange={(value) => handleSelectChange('lead_type', value)}
                      data-testid="contact-lead-type-select"
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Breeder">Breeder</SelectItem>
                        <SelectItem value="Groomer">Groomer</SelectItem>
                        <SelectItem value="Distributor">Distributor</SelectItem>
                        <SelectItem value="Clinic">Veterinary Clinic</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="interest" className="text-slate-900 font-medium mb-2 block">
                      I'm interested in <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.interest}
                      onValueChange={(value) => handleSelectChange('interest', value)}
                      data-testid="contact-interest-select"
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Book Demo">Book Demo</SelectItem>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        <SelectItem value="Partnership">Partnership</SelectItem>
                        <SelectItem value="Pricing">Pricing Information</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mb-6">
                  <Label htmlFor="message" className="text-slate-900 font-medium mb-2 block">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    data-testid="contact-message-input"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white min-h-[150px]"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <Button
                  type="submit"
                  data-testid="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full bg-[#DE9344] text-white hover:bg-[#C67D2E] rounded-full px-8 py-6 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <PaperPlaneTilt size={20} weight="fill" />
                      <span>Send Message</span>
                    </span>
                  )}
                </Button>

                <p className="text-sm text-slate-500 mt-4 text-center">
                  By submitting this form, you agree to be contacted by Amazing Pet Australia.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
