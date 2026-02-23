import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

export const ProductCard = ({ product, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
      data-testid={`product-card-${product.id}`}
    >
      {/* Product Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {product.badge && (
          <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1.5 shadow-lg border border-slate-100">
            <span className="text-xs font-semibold text-slate-900">{product.badge}</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h2
          className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-3"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          data-testid={`product-name-${product.id}`}
        >
          {product.name}
        </h2>
        
        <p 
          className="text-base leading-relaxed text-slate-600 mb-6"
          data-testid={`product-description-${product.id}`}
        >
          {product.description}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to={`/products/${product.id.replace('amazing-pet-', '')}`}
            data-testid={`product-learn-more-${product.id}`}
            className="bg-[#DE9344] text-white hover:bg-[#C57622] active:bg-[#AC671E] rounded-full px-6 py-3 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center space-x-2"
          >
            <span>View Details</span>
            <ArrowRight size={18} weight="bold" />
          </Link>
          
          {product.secondaryCta && (
            <Link
              to={product.secondaryCta.link}
              className="bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-full px-6 py-3 font-semibold transition-all"
            >
              {product.secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};
