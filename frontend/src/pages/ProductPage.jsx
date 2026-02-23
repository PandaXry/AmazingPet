import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Microscope,
  Brain,
  Image as ImageIcon,
  Flask,
  ChartLineUp,
  Package,
  ArrowRight
} from '@phosphor-icons/react';
import { ComplianceBanner } from '../components/ComplianceBanner';

const ProductPage = () => {
  const capabilities = [
    {
      icon: <Microscope size={28} weight="duotone" />,
      title: 'Vaginal Smear Analysis',
      description: 'Epithelial cell classification to support heat cycle monitoring and breeding timing decisions.'
    },
    {
      icon: <Flask size={28} weight="duotone" />,
      title: 'Semen Quality Observation',
      description: 'Motility, density, and movement pattern analysis. Requires dedicated 20µl slide for optimal results.'
    },
    {
      icon: <ImageIcon size={28} weight="duotone" />,
      title: 'Image-Backed Results',
      description: 'Every observation includes source microscopy images for complete traceability and verification.'
    },
    {
      icon: <Brain size={28} weight="duotone" />,
      title: 'Optional Manual Review',
      description: 'Add human expert verification for inflammatory cells or when additional confidence is needed.'
    }
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Sample Collection',
      description: 'Collect vaginal smear or semen sample using provided collection tools.'
    },
    {
      step: '2',
      title: 'Observation',
      description: 'Place sample on slide and capture high-quality microscopy image with Amazing Pet Air.'
    },
    {
      step: '3',
      title: 'AI-Assisted Analysis',
      description: 'Receive AI-supported cell classification and quality metrics with image traceability.'
    },
    {
      step: '4',
      title: 'Decision Point',
      description: 'Use results to decide whether to proceed with breeding or seek veterinary/lab confirmation.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white" data-testid="product-hero">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block mb-6">
                <span className="text-sm text-slate-500 font-medium uppercase tracking-wider bg-white px-4 py-2 rounded-full border border-slate-200">
                  Amazing Pet Air
                </span>
              </div>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                data-testid="product-title"
              >
                Professional Observation,{' '}
                <span className="bg-gradient-to-r from-[#C57622] to-[#DE9344] bg-clip-text text-transparent">
                  On Your Terms
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-8">
                Portable microscopy imaging with AI-assisted observation support. Make informed breeding 
                decisions without leaving your facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  data-testid="product-book-demo-btn"
                  className="bg-[#DE9344] text-white hover:bg-[#C57622] active:bg-[#AC671E] rounded-full px-8 py-4 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book a Demo
                </Link>
                <Link
                  to="/how-it-works"
                  className="bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-full px-8 py-4 font-semibold transition-all"
                >
                  See How It Works
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-4xl mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/31188648/pexels-photo-31188648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Amazing Pet Air Device"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-32" data-testid="capabilities-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Current Capabilities
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto">
              AI-supported observation tools designed for breeding management workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FAF8F7] border border-[#F5EFE9] rounded-2xl p-8 hover:border-[#DE9344]/20 transition-colors"
                data-testid={`capability-${index}`}
              >
                <div className="text-[#DE9344] mb-4">{capability.icon}</div>
                <h3
                  className="text-xl font-semibold text-slate-900 mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {capability.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="py-20 md:py-32 bg-slate-50" data-testid="workflow-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Where It Fits in Your Workflow
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto">
              A decision-support tool that helps you determine next steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 bg-[#DE9344] rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {step.step}
                  </div>
                  <h3
                    className="text-lg font-semibold text-slate-900 mb-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight size={24} className="text-slate-300" weight="bold" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consumables Note */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12">
            <div className="flex items-start space-x-4">
              <Package size={32} className="text-[#DE9344] flex-shrink-0" weight="duotone" />
              <div>
                <h3
                  className="text-2xl font-semibold text-slate-900 mb-4"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Recommended Consumables
                </h3>
                <div className="space-y-4 text-slate-600">
                  <p className="leading-relaxed">
                    <strong className="text-slate-900">Semen Analysis:</strong> Requires dedicated 20µl slides 
                    for optimal motility and density observation.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-slate-900">Other Tests:</strong> Standard microscopy slides work 
                    for vaginal cytology and general observations.
                  </p>
                  <p className="leading-relaxed text-sm">
                    All consumables are available through our AU distribution channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Next */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Coming Next
            </h2>
            <p className="text-lg text-slate-600">
              Additional products and AI modules in development.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
            <ChartLineUp size={48} className="text-slate-400 mx-auto mb-4" weight="duotone" />
            <p className="text-slate-600 leading-relaxed">
              MiniPro and Pro models, expanded AI analysis capabilities, and additional breeding management 
              tools will be added as the product line grows.
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
            Ready to Learn More?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-8">
            Schedule a demo or request pricing information for your operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-testid="product-final-cta-btn"
              className="bg-[#DE9344] text-white hover:bg-[#C57622] active:bg-[#AC671E] rounded-full px-8 py-4 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Us
            </Link>
            <Link
              to="/use-cases"
              className="bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-full px-8 py-4 font-semibold transition-all"
            >
              Explore Use Cases
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
