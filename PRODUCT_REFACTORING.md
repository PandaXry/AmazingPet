# Product Page Refactoring Documentation

## Overview
The Product page has been refactored into a scalable, component-based architecture that allows for easy addition of new products without modifying the page structure.

---

## New Architecture

### 1. ProductCard Component
**Location**: `/app/frontend/src/components/ProductCard.jsx`

**Purpose**: Reusable component for displaying product information

**Props:**
```javascript
{
  product: {
    id: string,              // Unique identifier
    name: string,            // Product name (H2)
    description: string,     // 3-5 line description
    image: string,           // Product image URL
    badge: string,           // Optional badge (e.g., "Available Now", "Coming Soon")
    ctaText: string,         // CTA button text (default: "Learn More")
    learnMoreLink: string,   // CTA destination (default: "/contact")
    secondaryCta: {          // Optional secondary CTA
      text: string,
      link: string
    },
    status: string          // "available" or "coming-soon"
  },
  index: number             // For staggered animations
}
```

**Features:**
- Animated entrance (staggered by index)
- Product image with optional badge overlay
- Product name (H2 typography)
- Description text (3-5 lines)
- Primary CTA button with icon
- Optional secondary CTA
- Maintains all current design styles
- Fully accessible with data-testid attributes

---

### 2. Products Data File
**Location**: `/app/frontend/src/data/products.js`

**Purpose**: Centralized product catalog data

**Structure:**
```javascript
export const products = [
  {
    id: 'amazing-pet-air',
    name: 'Amazing Pet Air',
    description: '...',
    image: '...',
    badge: 'Available Now',
    status: 'available',
    capabilities: [...],    // Extended data for detail sections
    workflow: [...],        // Workflow steps
    consumables: {...}      // Consumables information
  }
  // Future products added here
];
```

**Helper Functions:**
- `getProductById(id)` - Retrieve specific product
- `getAvailableProducts()` - Get all available products
- `getComingSoonProducts()` - Get upcoming products

---

### 3. Refactored ProductPage
**Location**: `/app/frontend/src/pages/ProductPage.jsx`

**Changes:**
- Now imports product data from centralized source
- Renders ProductCard components from array
- Capabilities section driven by product data
- Workflow section driven by product data
- Consumables section driven by product data
- "Coming Soon" section shows future products automatically

**Data Flow:**
```
products.js → ProductPage → ProductCard
              ↓
         Detail Sections (capabilities, workflow, consumables)
```

---

## Adding New Products

### Step 1: Add Product Data
Edit `/app/frontend/src/data/products.js`:

```javascript
export const products = [
  {
    id: 'amazing-pet-air',
    // ... existing product
  },
  {
    id: 'amazing-pet-mini-pro',
    name: 'Amazing Pet MiniPro',
    description: 'Compact design for mobile breeders and groomers. All the power of Amazing Pet Air in a portable form factor perfect for on-the-go observations.',
    image: 'https://images.pexels.com/...',
    badge: 'Coming Q3 2026',
    ctaText: 'Join Waitlist',
    learnMoreLink: '/contact',
    secondaryCta: {
      text: 'Compare Models',
      link: '/product'
    },
    status: 'coming-soon',
    capabilities: [
      // Optional: Add capability details if product should show detail sections
    ]
  }
];
```

### Step 2: That's It!
The ProductPage automatically:
- Renders the new product in the main product showcase
- Shows it in the "Coming Soon" section if status is "coming-soon"
- Displays capabilities if they exist
- Maintains consistent styling

---

## Component Usage Examples

### Basic Product Card
```jsx
import { ProductCard } from '../components/ProductCard';

const product = {
  id: 'my-product',
  name: 'My Product',
  description: 'A concise 3-5 line description...',
  image: 'https://...',
  ctaText: 'Learn More',
  learnMoreLink: '/contact'
};

<ProductCard product={product} index={0} />
```

### Product Card with Badge
```jsx
const product = {
  ...basicProduct,
  badge: 'New Release',
  status: 'available'
};

<ProductCard product={product} />
```

### Product Card with Secondary CTA
```jsx
const product = {
  ...basicProduct,
  secondaryCta: {
    text: 'See Specifications',
    link: '/specs'
  }
};

<ProductCard product={product} />
```

---

## Design System Compliance

### Typography
- Product Name: H2 with Plus Jakarta Sans, text-3xl to text-5xl (responsive)
- Description: text-lg to text-xl, leading-relaxed, slate-600
- Badge: text-sm, uppercase tracking, rounded-full

### Colors
- Primary CTA: `#DE9344` → hover `#C57622` → active `#AC671E`
- Secondary CTA: White with slate-200 border
- Badge background: White with slate-100 border
- Text: slate-900 (headings), slate-600 (body)

### Spacing
- Card padding: p-8 to p-12 (responsive)
- Element spacing: space-y-4, gap-4, mb-6/8
- Container: max-w-5xl for product cards

### Animation
- Entrance: fade-in with y-axis slide
- Stagger delay: 0.2s × index
- Duration: 0.6s
- Hover effects: scale-[1.02] on buttons

---

## File Structure

```
/app/frontend/src/
├── components/
│   └── ProductCard.jsx          # Reusable product display component
├── data/
│   └── products.js              # Product catalog & helpers
└── pages/
    └── ProductPage.jsx          # Main product page (refactored)
```

---

## Scalability Benefits

### Before Refactoring
- Product data hardcoded in page
- Adding products required modifying multiple sections
- Difficult to maintain consistency
- No separation of concerns

### After Refactoring
✅ **Single Source of Truth**: All product data in one file  
✅ **Easy Product Addition**: Add one object to array  
✅ **Automatic Rendering**: Page updates automatically  
✅ **Reusable Components**: ProductCard can be used elsewhere  
✅ **Type Safety Ready**: Easy to add TypeScript types  
✅ **CMS Integration Ready**: Replace array with API calls  
✅ **Consistent Styling**: Design system enforced in component  

---

## Future Enhancements

### Easy Additions
1. **Product Comparison**: Create comparison view using product array
2. **Product Filtering**: Filter by status, capabilities, price range
3. **Product Search**: Search across product names and descriptions
4. **Dynamic Routing**: `/product/:id` individual product pages
5. **CMS Integration**: Replace `products.js` with Sanity CMS queries
6. **Product Variants**: Add size/color options to product schema
7. **Related Products**: "Customers also viewed" using product data

### Example: CMS Integration
```javascript
// Replace static import
import { products } from '../data/products';

// With CMS query
const { data: products } = useSanityQuery(`
  *[_type == "product"] {
    id,
    name,
    description,
    image,
    status
  }
`);
```

---

## Testing

### Component Tests
```javascript
describe('ProductCard', () => {
  it('renders product name', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByTestId('product-name-test-id')).toBeInTheDocument();
  });
  
  it('displays badge when provided', () => {
    const productWithBadge = { ...mockProduct, badge: 'New' };
    render(<ProductCard product={productWithBadge} />);
    expect(screen.getByText('New')).toBeInTheDocument();
  });
});
```

### Data-testid Attributes
- `product-card-{id}` - Card container
- `product-name-{id}` - Product name
- `product-description-{id}` - Product description
- `product-learn-more-{id}` - CTA button

---

## Migration Notes

### What Changed
- ✅ Product display now uses ProductCard component
- ✅ Product data moved to centralized file
- ✅ Page renders from product array
- ✅ Capabilities section data-driven
- ✅ Workflow section data-driven
- ✅ Consumables section data-driven

### What Stayed the Same
- ✅ All design styles maintained
- ✅ Layout structure unchanged
- ✅ Animations preserved
- ✅ Typography system intact
- ✅ Color palette consistent
- ✅ Responsive behavior identical
- ✅ Accessibility maintained

### Backward Compatibility
- All existing functionality preserved
- No breaking changes to user experience
- Same URLs and navigation
- Same test IDs maintained

---

## Summary

The Product page refactoring provides:
- **Scalability**: Easy to add unlimited products
- **Maintainability**: Single source of truth for product data
- **Reusability**: ProductCard component usable anywhere
- **Consistency**: Design system enforced in components
- **Future-Ready**: Prepared for CMS integration and advanced features

**No visual changes** - Only improved architecture and developer experience.
