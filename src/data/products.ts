export interface Product {
  name: string;
  /** Short italic lead line. */
  tagline: string;
  description: string;
  tags: string[];
  /** Label shown in the pill at the top of the card. */
  category: string;
}

const SAAS = 'SaaS · Subscription';

export const products: Product[] = [
  {
    name: 'Chatly',
    tagline: 'Unified messaging service.',
    description:
      'One integration to send and receive across WhatsApp, Telegram and Email — a single API and inbox for every customer conversation.',
    tags: ['WhatsApp', 'Telegram', 'Email'],
    category: SAAS,
  },
  {
    name: 'Point of Sales',
    tagline: 'Multi-tenant retail POS.',
    description:
      'Run multiple outlets and warehouses from one account — real-time stock across locations, isolated tenant data, and unified reporting.',
    tags: ['Multi-tenant', 'Multi-warehouse'],
    category: SAAS,
  },
  {
    name: 'Ecommerce',
    tagline: 'Multi-tenant storefronts.',
    description:
      'Launch a branded online store in minutes — each merchant gets isolated data and a swappable multi-theme storefront they can make their own.',
    tags: ['Multi-tenant', 'Multi-theme'],
    category: SAAS,
  },
  {
    name: 'Presence',
    tagline: 'Smart attendance.',
    description:
      'Clock-in you can trust — face-recognition with liveness detection to block spoofing, plus geolocation radius checks to verify staff are on-site.',
    tags: ['Face liveness', 'Geolocation radius'],
    category: SAAS,
  },
];
