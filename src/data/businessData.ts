export interface CategoryItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Living Rooms' | 'Bedrooms' | 'Dining Spaces' | 'Furniture' | 'Interiors' | 'Showroom';
  image: string;
  caption: string;
}

export const BUSINESS_INFO = {
  name: 'Zion Furniture & Interior',
  address: '2, Hadadi Rd, Jeevan Bhima Nagara, 2nd Stage, Shivakumara Swamy Nagara, Davangere, Karnataka 577005',
  shortAddress: '2, Hadadi Rd, Jeevan Bhima Nagara, Davangere, Karnataka 577005',
  landmark: 'Hadadi Road, 2nd Stage Shivakumara Swamy Nagara',
  rating: 5.0,
  reviewsCount: 10,
  hours: 'Open until 9:00 PM',
  city: 'Davangere',
  state: 'Karnataka',
  pincode: '577005',
  // Placeholder mobile number per user request (replace with original number later)
  phone: '+91 XXXXXXXXXX',
  rawPhone: '+91XXXXXXXXXX',
  whatsAppNumber: '+91 XXXXXXXXXX',
  whatsAppUrl: 'https://wa.me/?text=Hello%20Zion%20Furniture%20%26%20Interior%2C%20I%20would%20like%20to%20inquire%20about%20your%20showroom%20collection%20in%20Davangere.',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Zion+Furniture+%26+Interior+Hadadi+Rd+Davangere+Karnataka+577005',
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Zion+Furniture+%26+Interior+Hadadi+Rd+Davangere+Karnataka+577005#reviews',
  customerQuotes: [
    {
      id: 'quote-1',
      text: 'Good collections and affordable price to buy the furniture’s',
      verified: true,
      rating: 5,
    },
    {
      id: 'quote-2',
      text: 'Good behaviour with customer',
      verified: true,
      rating: 5,
    },
  ],
};

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'living-room',
    name: 'Living Room',
    subtitle: 'Sofas, coffee tables, TV units and more.',
    description: 'Transform your primary gathering area into a warm, inviting haven with thoughtfully proportioned sofas, ergonomic seating, statement center tables, and entertainment consoles tailored for contemporary living.',
    image: '/images/category_living_room_1790774050888.jpg',
    features: ['Comfortable sectional & modular sofas', 'Solid wood & contemporary coffee tables', 'Sleek entertainment & TV units', 'Accent lounge chairs'],
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    subtitle: 'Beds, wardrobes, side tables and bedroom furniture.',
    description: 'Create a restful sanctuary designed around comfort and quiet elegance. Explore sturdy beds, coordinated bedside nightstands, functional wardrobes, and spacious storage solutions.',
    image: '/images/category_bedroom_1790774064006.jpg',
    features: ['King & Queen beds with fine headboards', 'Spacious storage wardrobes', 'Coordinated bedside nightstands', 'Ergonomic dressing units'],
  },
  {
    id: 'dining',
    name: 'Dining',
    subtitle: 'Dining tables, chairs and complete dining setups.',
    description: 'Gather family and guests around beautifully proportioned dining sets built for meaningful meals, durable everyday use, and timeless visual appeal.',
    image: '/images/about_showroom_interior_1790774035344.jpg',
    features: ['4, 6 & 8-seater dining tables', 'Upholstered dining chairs', 'Compact dining solutions for modern flats', 'Solid wood surfaces'],
  },
  {
    id: 'home-furniture',
    name: 'Home Furniture',
    subtitle: 'Practical and stylish furniture for everyday living.',
    description: 'Functional, versatile furniture pieces crafted to maximize everyday comfort, durability, and organization across all rooms of your home.',
    image: '/images/hero_showroom_luxury_1790774016064.jpg',
    features: ['Study desks & work chairs', 'Shoe racks & foyer units', 'Display cabinets & bookshelves', 'Multi-utility storage pieces'],
  },
  {
    id: 'interior-solutions',
    name: 'Interior Solutions',
    subtitle: 'Elegant interior elements and space-enhancing designs.',
    description: 'Cohesive spatial concepts and decorative interior ideas that tie materials, lighting, and layout together into a harmonious living environment.',
    image: '/images/interior_design_banner_1790774080247.jpg',
    features: ['Spatial planning consultation', 'Wood texture & paneling ideas', 'Customizable furniture arrangements', 'Color & finish harmony'],
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    id: 'quality',
    title: 'Quality Collection',
    description: 'Thoughtfully selected furniture for modern homes, balancing durable construction with refined aesthetics.',
  },
  {
    id: 'affordable',
    title: 'Affordable Choices',
    description: 'Beautiful furniture at prices designed to provide genuine value without compromising on durability.',
  },
  {
    id: 'customer-friendly',
    title: 'Customer Friendly',
    description: 'A welcoming shopping experience with helpful, patient service to assist you in choosing the right fit.',
  },
  {
    id: 'local-convenient',
    title: 'Local & Convenient',
    description: 'Visit our showroom conveniently located on Hadadi Road, Shivakumara Swamy Nagara in Davangere.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Contemporary Living Showcase',
    category: 'Living Rooms',
    image: '/images/hero_showroom_luxury_1790774016064.jpg',
    caption: 'Modern modular sofa arrangements and natural wood accent tables at Zion Furniture showroom.',
  },
  {
    id: 'gal-2',
    title: 'Sanctuary Master Bedroom',
    category: 'Bedrooms',
    image: '/images/category_bedroom_1790774064006.jpg',
    caption: 'Comfortable platform bed design with upholstered headboard and warm ambient bedside lighting.',
  },
  {
    id: 'gal-3',
    title: 'Curated Dining Experience',
    category: 'Dining Spaces',
    image: '/images/about_showroom_interior_1790774035344.jpg',
    caption: 'Warm wooden dining setups and comfortable seating arrangements designed for family gatherings.',
  },
  {
    id: 'gal-4',
    title: 'Architectural Living Space',
    category: 'Interiors',
    image: '/images/interior_design_banner_1790774080247.jpg',
    caption: 'Harmonious interior balance combining wooden paneling, statement seating, and warm cove illumination.',
  },
  {
    id: 'gal-5',
    title: 'Refined Seating Collection',
    category: 'Furniture',
    image: '/images/category_living_room_1790774050888.jpg',
    caption: 'Premium fabric textures, ergonomic contours, and timeless craftsmanship for daily relaxation.',
  },
  {
    id: 'gal-6',
    title: 'Showroom Interior Walkthrough',
    category: 'Showroom',
    image: '/images/about_showroom_interior_1790774035344.jpg',
    caption: 'Explore furniture layouts in person at our Davangere showroom on Hadadi Road.',
  },
];
