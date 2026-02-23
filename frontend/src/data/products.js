// Product catalog data for Amazing Pet Australia

export const products = [
  {
    id: 'amazing-pet-air',
    name: 'Amazing Pet Air',
    description: 'Portable microscopy imaging with AI-assisted observation support. Make informed breeding decisions without leaving your facility. Professional-grade on-site observation for heat cycle monitoring and semen quality assessment.',
    image: 'https://images.pexels.com/photos/31188648/pexels-photo-31188648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    badge: 'Available Now',
    ctaText: 'Book a Demo',
    learnMoreLink: '/contact',
    secondaryCta: {
      text: 'See How It Works',
      link: '/how-it-works'
    },
    status: 'available',
    capabilities: [
      {
        title: 'Vaginal Smear Analysis',
        description: 'Epithelial cell classification to support heat cycle monitoring and breeding timing decisions.'
      },
      {
        title: 'Semen Quality Observation',
        description: 'Motility, density, and movement pattern analysis. Requires dedicated 20µl slide for optimal results.'
      },
      {
        title: 'Image-Backed Results',
        description: 'Every observation includes source microscopy images for complete traceability and verification.'
      },
      {
        title: 'Optional Manual Review',
        description: 'Add human expert verification for inflammatory cells or when additional confidence is needed.'
      }
    ],
    workflow: [
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
    ],
    consumables: {
      semen: 'Requires dedicated 20µl slides for optimal motility and density observation.',
      other: 'Standard microscopy slides work for vaginal cytology and general observations.',
      note: 'All consumables are available through our AU distribution channels.'
    }
  }
  // Future products will be added here:
  // {
  //   id: 'amazing-pet-mini-pro',
  //   name: 'Amazing Pet MiniPro',
  //   description: '...',
  //   badge: 'Coming Soon',
  //   status: 'coming-soon'
  // },
  // {
  //   id: 'amazing-pet-pro',
  //   name: 'Amazing Pet Pro',
  //   description: '...',
  //   badge: 'Coming Soon',
  //   status: 'coming-soon'
  // }
];

// Helper function to get product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

// Helper function to get available products
export const getAvailableProducts = () => {
  return products.filter(product => product.status === 'available');
};

// Helper function to get coming soon products
export const getComingSoonProducts = () => {
  return products.filter(product => product.status === 'coming-soon');
};
