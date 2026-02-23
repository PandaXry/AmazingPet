import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

export const ProductCard = ({ product, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative max-w-5xl mx-auto"
      data-testid={`product-card-${product.id}`}
    >
      {/* Product Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto"
        />
        {product.badge && (
          <div className="absolute top-6 right-6 bg-white rounded-full px-4 py-2 shadow-lg border border-slate-100">
            <span className="text-sm font-semibold text-slate-900">{product.badge}</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          data-testid={`product-name-${product.id}`}
        >
          {product.name}
        </h2>
        
        <p 
          className="text-lg md:text-xl leading-relaxed text-slate-600 mb-8"
          data-testid={`product-description-${product.id}`}
        >
          {product.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={product.learnMoreLink || '/contact'}
            data-testid={`product-learn-more-${product.id}`}
            className="bg-[#DE9344] text-white hover:bg-[#C57622] active:bg-[#AC671E] rounded-full px-8 py-4 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center space-x-2"
          >
            <span>{product.ctaText || 'Learn More'}</span>
            <ArrowRight size={20} weight="bold" />
          </Link>
          
          {product.secondaryCta && (
            <Link
              to={product.secondaryCta.link}
              className="bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-full px-8 py-4 font-semibold transition-all"
            >
              {product.secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};
