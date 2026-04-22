import bag from './img/bag.avif';
import laptopStand from './img/LaptopStand.webp';
import tumbler from './img/Tumbler.avif';
import wirelessEarbuds from './img/WirelessEarbuds.jpg';

const products = [
  {
    name: 'minimalist-canvas-backpack',
    title: 'Minimalist Canvas Backpack',
    category: 'Bags',
    price: 'PHP 899',
    stock: 'In stock',
    image: bag,
    content: [
      'A sleek, water-resistant backpack designed for the modern student.',
      'Features padded laptop compartments and hidden anti-theft pockets.',
      'Perfect for daily commutes and long study sessions at the cafe.'
    ],
  },
  {
    name: 'ergonomic-laptop-stand',
    title: 'Ergonomic Laptop Stand',
    category: 'Workspace',
    price: 'PHP 549',
    stock: 'In stock',
    image: laptopStand,
    content: [
      'A foldable, aluminum laptop stand to improve your posture.',
      'Adjustable height settings help reduce neck strain during late-night reviews.',
      'Lightweight and easily slips into your everyday tote.'
    ],
  },
  {
    name: 'matte-thermal-flask',
    title: 'Matte Thermal Flask',
    category: 'Drinkware',
    price: 'PHP 650',
    stock: 'Low stock',
    image: tumbler,
    content: [
      'Keep your coffee hot for 12 hours or your water cold for 24 hours.',
      'Features a premium matte finish that offers a secure grip.',
      'BPA-free and designed to fit perfectly in standard backpack side pockets.'
    ],
  },
  {
    name: 'noise-cancelling-earbuds',
    title: 'Focus Wireless Earbuds',
    category: 'Tech',
    price: 'PHP 1,299',
    stock: 'In stock',
    image: wirelessEarbuds,
    content: [
      'Active noise cancellation to help you zone in on your studies.',
      'Up to 30 hours of total playtime with the included charging case.',
      'Sweat-resistant design for campus walks or gym sessions.'
    ],
  }
];

export default products;