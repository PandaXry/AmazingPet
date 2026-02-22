import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Microscope, 
  CheckCircle, 
  Users, 
  CalendarCheck,
  ShieldCheck,
  Image as ImageIcon,
  ChartLineUp,
  DownloadSimple
} from '@phosphor-icons/react';
import { ComplianceBanner } from '../components/ComplianceBanner';

const HomePage = () => {
  const features = [
    {
      icon: <Microscope size={32} weight="duotone" />,
      title: 'On-Site Microscopy',
      description: 'Professional-grade imaging without the clinic visit. Capture high-quality samples instantly.',
      span: 'md:col-span-2'
    },
    {
      icon: <ImageIcon size={32} weight="duotone" />,
      title: 'Image Traceability',
      description: 'Every AI observation is backed by actual microscopy images for complete transparency.',
      span: 'md:col-span-1'
    },
    {
      icon: <ChartLineUp size={32} weight="duotone" />,
      title: 'AI-Assisted Analysis',
      description: 'Advanced epithelial cell classification and semen quality observation support.',
      span: 'md:col-span-1'
    },
    {
      icon: <Users size={32} weight="duotone" />,
      title: 'Optional Manual Review',
      description: 'Add human expert verification when you need additional confidence in results.',
      span: 'md:col-span-2'
    }
  ];

  const useCases = [
    {
      title: 'Breeders',
      subtitle: 'Heat Cycle & Semen Quality',
      description: 'Monitor breeding readiness and male fertility with on-demand observations.',
      image: 'https://images.pexels.com/photos/14846031/pexels-photo-14846031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      link: '/use-cases/breeders',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Groomers',
      subtitle: 'Trusted Referral Partner',
      description: 'Become a key touchpoint for breeders by offering on-site observation demos.',
      image: 'https://images.pexels.com/photos/6131580/pexels-photo-6131580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      link: '/use-cases/groomers',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Clinics',
      subtitle: 'Complementary Tool',
      description: 'Support your diagnostic workflow with pre-check observations and image documentation.',
      image: 'https://images.pexels.com/photos/4031415/pexels-photo-4031415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      link: '/use-cases',
      bgColor: 'bg-purple-50'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden" data-testid="hero-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div {...fadeInUp}>
              <div className="inline-block mb-6">
                <span className="text-sm text-slate-500 font-medium uppercase tracking-wider bg-slate-100 px-4 py-2 rounded-full">
                  Australian Market Entry 2026
                </span>
              </div>
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                data-testid="hero-title"
              >
                On-Site Microscopy Imaging for{' '}
                <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                  Breeding Management
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-8 max-w-xl">
                Pre-check and observation support for breeders and groomers. AI-assisted analysis with 
                complete image traceability—helping you decide when to proceed to formal veterinary testing.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8" data-testid="hero-cta-buttons">
                <Link
                  to="/contact"
                  data-testid="book-demo-button"
                  className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-4 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
                >
                  Book a Demo
                </Link>
                <Link
                  to="/contact"
                  data-testid="talk-to-us-button"
                  className="bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-full px-8 py-4 font-semibold transition-all text-center"
                >
                  Talk to Us
                </Link>
                <button
                  data-testid="download-brochure-button"
                  className="text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-full px-6 py-4 font-medium transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <DownloadSimple size={20} />
                  <span>Download Brochure</span>
                </button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} weight="fill" className="text-green-600" />
                  <span>Image-backed results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} weight="fill" className="text-green-600" />
                  <span>Optional manual review</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} weight="fill" className="text-green-600" />
                  <span>AU market ready</span>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/31188648/pexels-photo-31188648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Amazing Pet Air Device"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                    <ShieldCheck size={24} weight="duotone" className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Compliance First</div>
                    <div className="text-xs text-slate-500">Observation, not diagnosis</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid - Bento Style */}
      <section className="py-20 md:py-32 bg-slate-50" data-testid="features-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              How Amazing Pet Air Works
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Professional observation tools that support breeding management decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${feature.span} bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
                data-testid={`feature-card-${index}`}
              >
                <div className="text-slate-900 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="py-20 md:py-32" data-testid="use-cases-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Who It's For
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Supporting Australian breeding professionals at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`use-case-card-${index}`}
              >
                <Link to={useCase.link} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={useCase.image}
                        alt={useCase.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-semibold mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {useCase.title}
                        </h3>
                        <p className="text-sm text-white/80">{useCase.subtitle}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {useCase.description}
                      </p>
                      <span className="text-slate-900 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                        Learn more 
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Banner */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <ComplianceBanner />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32" data-testid="final-cta-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CalendarCheck size={64} weight="duotone" className="text-slate-900 mx-auto mb-6" />
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Ready to See It in Action?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-8 max-w-2xl mx-auto">
              Book a demo or coffee chat with our Australia team. See how Amazing Pet Air can support your breeding operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                data-testid="final-book-demo-button"
                className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-4 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a Demo
              </Link>
              <Link
                to="/contact"
                className="bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-full px-8 py-4 font-semibold transition-all"
              >
                Request Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
