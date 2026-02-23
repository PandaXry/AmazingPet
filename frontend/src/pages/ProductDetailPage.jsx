import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CaretDown, CaretUp } from '@phosphor-icons/react';
import { getProductById } from '../data/products';
import { ComplianceBanner } from '../components/ComplianceBanner';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [expandedDescription, setExpandedDescription] = useState(false);
  
  // Get product data
  const product = getProductById(productId);

  // If product not found, redirect to products page
  if (!product) {
    return <Navigate to="/product" replace />;
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          {/* Back Button */}
          <Link
            to="/product"
            className="inline-flex items-center space-x-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
            data-testid="back-to-products"
          >
            <ArrowLeft size={20} weight="bold" />
            <span className="font-medium">Back to Products</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                  data-testid="product-detail-image"
                />
                {product.badge && (
                  <div className="absolute top-6 right-6 bg-white rounded-full px-4 py-2 shadow-lg border border-slate-100">
                    <span className="text-sm font-semibold text-slate-900">{product.badge}</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                data-testid="product-detail-name"
              >
                {product.name}
              </h1>

              {/* Expandable Description */}
              <div className="mb-8">
                <div
                  className={`text-lg leading-relaxed text-slate-600 ${
                    !expandedDescription && product.description.length > 200 ? 'line-clamp-4' : ''
                  }`}
                  data-testid="product-detail-description"
                >
                  {product.description}
                </div>
                
                {product.description.length > 200 && (
                  <button
                    onClick={() => setExpandedDescription(!expandedDescription)}
                    className="mt-3 inline-flex items-center space-x-2 text-[#DE9344] hover:text-[#C57622] font-medium transition-colors"
                    data-testid="expand-description-btn"
                  >
                    <span>{expandedDescription ? 'Show Less' : 'Read More'}</span>
                    {expandedDescription ? <CaretUp size={16} weight="bold" /> : <CaretDown size={16} weight="bold" />}
                  </button>
                )}
              </div>

              {/* Status Badge */}
              <div className="mb-8">
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                  product.status === 'available' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {product.status === 'available' ? 'Available Now' : 'Coming Soon'}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  data-testid="product-detail-cta"
                  className="bg-[#DE9344] text-white hover:bg-[#C57622] active:bg-[#AC671E] rounded-full px-8 py-4 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
                >
                  {product.status === 'available' ? 'Book a Demo' : 'Get Notified'}
                </Link>
                
                {product.status === 'available' && (
                  <Link
                    to="/how-it-works"
                    className="bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-full px-8 py-4 font-semibold transition-all text-center"
                  >
                    How It Works
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Product Details (if available) */}
      {product.capabilities && product.capabilities.length > 0 && (
        <section className="py-20 md:py-32 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-12 text-center"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Key Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6"
                >
                  <h3
                    className="text-lg font-semibold text-slate-900 mb-2"
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

      {/* Workflow (if available) */}
      {product.workflow && product.workflow.length > 0 && (
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-12 text-center"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Workflow
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.workflow.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
                >
                  <div className="w-10 h-10 bg-[#DE9344] rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {step.step}
                  </div>
                  <h3
                    className="text-base font-semibold text-slate-900 mb-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compliance Banner */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <ComplianceBanner />
        </div>
      </section>

      {/* Related Products / Back to All Products */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Explore More Products
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            View our complete product lineup and find the perfect solution for your needs.
          </p>
          <Link
            to="/product"
            className="bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-full px-8 py-4 font-semibold transition-all inline-block"
          >
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
