import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Flask,
  Image as ImageIcon,
  Brain,
  CheckCircle,
  XCircle,
  ArrowRight
} from '@phosphor-icons/react';
import { ComplianceBanner } from '../components/ComplianceBanner';

const HowItWorksPage = () => {
  const steps = [
    {
      number: '01',
      title: 'Collect Sample',
      description: 'Use provided collection tools to gather vaginal smear or semen sample. Follow standard collection protocols for your sample type.',
      icon: <Flask size={40} weight="duotone" />,
      details: [
        'Vaginal smear: Use swab or gentle collection method',
        'Semen sample: Fresh collection required',
        'Standard preparation techniques apply'
      ]
    },
    {
      number: '02',
      title: 'Capture Image',
      description: 'Place prepared sample on appropriate slide and use Amazing Pet Air to capture high-quality microscopy image.',
      icon: <ImageIcon size={40} weight="duotone" />,
      details: [
        'Device automatically optimizes focus and lighting',
        'Multiple images can be captured if needed',
        'Images stored with timestamp and metadata'
      ]
    },
    {
      number: '03',
      title: 'AI-Assisted Observation',
      description: 'Receive AI-supported analysis with complete image traceability. Results include cell classification or quality metrics.',
      icon: <Brain size={40} weight="duotone" />,
      details: [
        'Epithelial cell classification for heat cycle monitoring',
        'Semen motility, density, and movement patterns',
        'Source images attached to every result'
      ]
    }
  ];

  const whatWeDo = [
    'Observe and classify epithelial cells in vaginal smears',
    'Analyze semen motility, density, and movement patterns',
    'Provide image-backed results for record keeping',
    'Support breeding timing and quality assessment decisions',
    'Offer optional manual review layer for additional verification'
  ];

  const whatWeDoNot = [
    'Diagnose disease, infection, or medical conditions',
    'Provide treatment recommendations',
    'Replace veterinary examination or laboratory testing',
    'Guarantee breeding outcomes or success rates',
    'Serve as a medical device or clinical diagnostic tool'
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white" data-testid="how-it-works-hero">
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
                data-testid="how-it-works-title"
              >
                Simple 3-Step{' '}
                <span className="bg-gradient-to-r from-[#C67D2E] to-[#DE9344] bg-clip-text text-transparent">
                  Observation Process
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-8">
                From sample collection to AI-assisted results, the complete workflow in minutes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-32" data-testid="process-steps-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="text-6xl font-bold text-slate-100 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {step.number}
                    </div>
                    <div className="text-[#DE9344] mb-4">{step.icon}</div>
                    <h2
                      className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {step.title}
                    </h2>
                    <p className="text-lg leading-relaxed text-slate-600 mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <ArrowRight size={20} className="text-slate-900 flex-shrink-0 mt-1" weight="bold" />
                          <span className="text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                      <div className="text-slate-300 opacity-50">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 -bottom-8 transform -translate-x-1/2">
                    <div className="w-0.5 h-16 bg-slate-200"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do / Don't Do */}
      <section className="py-20 md:py-32 bg-slate-50" data-testid="boundaries-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Clear Boundaries
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Understanding what Amazing Pet Air does—and what it doesn't do.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* What We Do */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-slate-200 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={24} weight="fill" className="text-green-600" />
                </div>
                <h3
                  className="text-2xl font-semibold text-slate-900"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  What We Do
                </h3>
              </div>
              <ul className="space-y-4">
                {whatWeDo.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} weight="fill" className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What We Don't Do */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-slate-200 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle size={24} weight="fill" className="text-red-600" />
                </div>
                <h3
                  className="text-2xl font-semibold text-slate-900"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  What We Don't Do
                </h3>
              </div>
              <ul className="space-y-4">
                {whatWeDoNot.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <XCircle size={20} weight="fill" className="text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-slate-900">Key Principle:</strong> Amazing Pet Air provides observation 
              and monitoring support to help you decide when to proceed to formal veterinary or laboratory testing. 
              Results are for reference and decision-support only.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <ComplianceBanner />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Ready to See It in Action?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-8">
            Schedule a demonstration and see the complete workflow firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-testid="how-it-works-cta-btn"
              className="bg-[#DE9344] text-white hover:bg-[#C67D2E] rounded-full px-8 py-4 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Demo
            </Link>
            <Link
              to="/product"
              className="bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-full px-8 py-4 font-semibold transition-all"
            >
              View Product Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
