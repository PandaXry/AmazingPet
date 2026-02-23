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
import { ProductCard } from '../components/ProductCard';
import { products, getAvailableProducts, getComingSoonProducts } from '../data/products';

const ProductPage = () => {
  const availableProducts = getAvailableProducts();
  const comingSoonProducts = getComingSoonProducts();
  
  // Get the first available product (Amazing Pet Air) for detailed sections
  const currentProduct = availableProducts[0];

  // Icon mapping for capabilities
  const iconMap = {
    'Vaginal Smear Analysis': <Microscope size={28} weight="duotone" />,
    'Semen Quality Observation': <Flask size={28} weight="duotone" />,
    'Image-Backed Results': <ImageIcon size={28} weight="duotone" />,
    'Optional Manual Review': <Brain size={28} weight="duotone" />
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero with Product Overview */}
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
                  Our Products
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
            </motion.div>
          </div>

          {/* Render Available Products in Grid */}
          {availableProducts.length > 0 && (
            <div className="mb-20">
              <h2 
                className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-8 text-center"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Available Now
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {availableProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Render Coming Soon Products in Grid */}
          {comingSoonProducts.length > 0 && (
            <div>
              <h2 
                className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-8 text-center"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Coming Soon
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {comingSoonProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Capabilities Section - Data-driven from current product */}
      {currentProduct && currentProduct.capabilities && (
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
              {currentProduct.capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#FAF8F7] border border-[#F5EFE9] rounded-2xl p-8 hover:border-[#DE9344]/20 transition-colors"
                  data-testid={`capability-${index}`}
                >
                  <div className="text-[#DE9344] mb-4">
                    {iconMap[capability.title] || <ChartLineUp size={28} weight="duotone" />}
                  </div>
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
      )}

      {/* Workflow Diagram - Data-driven from current product */}
      {currentProduct && currentProduct.workflow && (
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
              {currentProduct.workflow.map((step, index) => (
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
                  {index < currentProduct.workflow.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight size={24} className="text-slate-300" weight="bold" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Consumables Note - Data-driven from current product */}
      {currentProduct && currentProduct.consumables && (
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
                      <strong className="text-slate-900">Semen Analysis:</strong> {currentProduct.consumables.semen}
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-slate-900">Other Tests:</strong> {currentProduct.consumables.other}
                    </p>
                    {currentProduct.consumables.note && (
                      <p className="leading-relaxed text-sm">
                        {currentProduct.consumables.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Coming Next - Show future products */}
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
          
          {comingSoonProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {comingSoonProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-slate-200 rounded-2xl p-8"
                >
                  <div className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {product.badge || 'Coming Soon'}
                  </div>
                  <h3
                    className="text-xl font-semibold text-slate-900 mb-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{product.description}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
              <ChartLineUp size={48} className="text-slate-400 mx-auto mb-4" weight="duotone" />
              <p className="text-slate-600 leading-relaxed">
                MiniPro and Pro models, expanded AI analysis capabilities, and additional breeding management 
                tools will be added as the product line grows.
              </p>
            </div>
          )}
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
