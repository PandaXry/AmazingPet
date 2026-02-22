import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  FileText,
  Scales,
  Certificate
} from '@phosphor-icons/react';

const CompliancePage = () => {
  const complianceItems = [
    {
      icon: <ShieldCheck size={32} weight="duotone" />,
      title: 'Observation Tool Classification',
      description: 'Amazing Pet Air is positioned as a pre-check and observation tool, not a diagnostic or treatment device. All outputs are for monitoring and reference purposes only.'
    },
    {
      icon: <Certificate size={32} weight="duotone" />,
      title: 'Australian Market Compliance',
      description: 'Electronics compliance focused on RCM (Regulatory Compliance Mark) for electrical safety. We do not claim APVMA (veterinary medicine) or TGA (therapeutic goods) registration unless specifically confirmed.'
    },
    {
      icon: <FileText size={32} weight="duotone" />,
      title: 'Image Traceability',
      description: 'Every AI-assisted observation is backed by source microscopy images, ensuring complete transparency and enabling verification by veterinary professionals when needed.'
    },
    {
      icon: <Scales size={32} weight="duotone" />,
      title: 'Claims Policy',
      description: 'We maintain strict boundaries in all marketing and communication: no diagnosis, treatment, or medical device claims. Results support decision-making, not replace professional veterinary judgment.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white" data-testid="compliance-hero">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={48} weight="duotone" className="text-white" />
              </div>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                data-testid="compliance-title"
              >
                Compliance &{' '}
                <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                  Regulatory Standards
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-slate-600">
                Transparency, integrity, and clear boundaries in everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Grid */}
      <section className="py-20 md:py-32" data-testid="compliance-grid">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8"
                data-testid={`compliance-item-${index}`}
              >
                <div className="text-slate-900 mb-4">{item.icon}</div>
                <h3
                  className="text-xl font-semibold text-slate-900 mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-20 md:py-32 bg-slate-50" data-testid="disclaimer-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border-2 border-slate-900 rounded-2xl p-8 md:p-12"
          >
            <h2
              className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Official Disclaimer
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Amazing Pet Air is not a medical device, diagnostic tool, or treatment system.</strong> It is 
                designed as a pre-check and observation support tool for breeding management purposes.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                All results provided by Amazing Pet Air, including AI-assisted cell classification and semen quality 
                observations, are for <strong>monitoring and reference only</strong>. They are not veterinary diagnoses 
                and should not be used as the sole basis for breeding, treatment, or health decisions.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Users should consult qualified veterinary professionals for diagnostic confirmation, treatment 
                recommendations, and health assessments. Amazing Pet Air results may inform your decision to seek 
                professional veterinary or laboratory testing but do not replace it.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Traceability:</strong> Every observation includes source microscopy images to enable verification 
                and review by veterinary professionals.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>Optional Manual Review:</strong> When selected, manual review provides an additional verification 
                layer but remains within the scope of observation support, not diagnostic service.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AU Compliance Roadmap */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 text-center"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Australian Market Compliance Roadmap
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Current Status (2026 Entry)</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Focus on electronics safety compliance (RCM) for electrical components. Positioning as 
                    observation tool to avoid veterinary medicine or therapeutic goods regulation where not applicable.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Regulatory Strategy</h4>
                  <p className="text-slate-600 leading-relaxed">
                    We work with regulatory consultants to ensure appropriate classification and compliance. 
                    We do not claim APVMA or TGA registration unless formally obtained and confirmed.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Quality & Standards</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Manufacturing quality controls and standard operating procedures ensure consistent device 
                    performance. User training materials emphasize proper use within observation boundaries.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Questions About Compliance?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-8">
            Our team can provide additional details on regulatory positioning, claims policy, and quality standards.
          </p>
          <Link
            to="/contact"
            data-testid="compliance-contact-btn"
            className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-4 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] inline-block"
          >
            Contact Compliance Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CompliancePage;
