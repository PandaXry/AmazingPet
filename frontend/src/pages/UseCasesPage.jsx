import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart,
  Users,
  Storefront,
  CheckCircle,
  TrendUp,
  Clock
} from '@phosphor-icons/react';

const UseCasesPage = () => {
  const breederBenefits = [
    'Monitor heat cycle progression without multiple clinic visits',
    'Observe semen quality before breeding decisions',
    'Image-backed results for record keeping',
    'Reduce time and cost compared to repeated lab testing',
    'Make informed decisions about when to seek veterinary confirmation'
  ];

  const groomerBenefits = [
    'Become a trusted resource for breeder clients',
    'Offer demo days to showcase observation capabilities',
    'No medical interpretation required—device handles observation',
    'Referral partner for breeders seeking on-site tools',
    'Expand service offerings without veterinary licensing'
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white" data-testid="use-cases-hero">
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
                data-testid="use-cases-title"
              >
                Supporting Australian{' '}
                <span className="bg-gradient-to-r from-[#C67D2E] to-[#DE9344] bg-clip-text text-transparent">
                  Breeding Professionals
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-8">
                From breeders to groomers, Amazing Pet Air provides observation support where you need it most.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Breeders Use Case */}
      <section className="py-20 md:py-32" data-testid="breeders-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/14846031/pexels-photo-14846031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Professional breeder with puppies"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Heart size={32} weight="duotone" className="text-[#DE9344]" />
                <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">For Breeders</span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Heat Cycle Monitoring & Semen Quality Observation
              </h2>
              <p className="text-lg leading-relaxed text-slate-600 mb-8">
                Make breeding timing decisions with on-site observations. Monitor heat cycle progression through 
                vaginal cytology and assess semen quality—all without leaving your facility.
              </p>

              <div className="space-y-4 mb-8">
                {breederBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={24} weight="fill" className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#FAF8F7] border border-[#F5EFE9] rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <TrendUp size={24} className="text-[#DE9344] flex-shrink-0" weight="duotone" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Cost & Time Efficiency</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Reduce repeated clinic trips for pre-checks. Use Amazing Pet Air for preliminary observation, 
                      then proceed to vet/lab confirmation only when results suggest it's needed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  data-testid="breeders-contact-btn"
                  className="bg-[#DE9344] text-white hover:bg-[#C57622] active:bg-[#AC671E] rounded-full px-8 py-4 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] inline-block"
                >
                  Request Breeder Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Groomers Use Case */}
      <section className="py-20 md:py-32 bg-slate-50" data-testid="groomers-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Storefront size={32} weight="duotone" className="text-[#DE9344]" />
                <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">For Groomers</span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Trusted Touchpoint & Referral Partner
              </h2>
              <p className="text-lg leading-relaxed text-slate-600 mb-8">
                Groomers are natural access points for breeders. Offer demo days and become a resource for 
                clients interested in on-site observation tools—no medical interpretation required.
              </p>

              <div className="space-y-4 mb-8">
                {groomerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={24} weight="fill" className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#FAF8F7] border border-[#F5EFE9] rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <Users size={24} className="text-[#DE9344] flex-shrink-0" weight="duotone" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Demo Day Workflow</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Host informational sessions where breeders can see the device in action. You facilitate 
                      access; the device handles the observation work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  data-testid="groomers-contact-btn"
                  className="bg-[#DE9344] text-white hover:bg-[#C57622] active:bg-[#AC671E] rounded-full px-8 py-4 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] inline-block"
                >
                  Become a Partner
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <img
                src="https://images.pexels.com/photos/6131580/pexels-photo-6131580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Professional groomer in salon"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinics (Brief) */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-[#DE9344] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={32} weight="duotone" className="text-white" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Veterinary Clinics & Services
              </h2>
              <p className="text-lg leading-relaxed text-slate-600 mb-8">
                For clinics, Amazing Pet Air can serve as a complementary pre-check tool. It does not replace 
                formal diagnostics but can support workflow efficiency and client education.
              </p>
              <p className="text-base text-slate-500 italic">
                Additional clinical use case details available on request. All claims remain within observation 
                and monitoring scope.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-full px-8 py-4 font-semibold transition-all inline-block"
                >
                  Inquire About Clinical Use
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Which Use Case Fits You?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-8">
            Get in touch to discuss how Amazing Pet Air can support your specific operation.
          </p>
          <Link
            to="/contact"
            data-testid="use-cases-final-cta"
            className="bg-[#DE9344] text-white hover:bg-[#C57622] active:bg-[#AC671E] rounded-full px-8 py-4 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] inline-block"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UseCasesPage;
