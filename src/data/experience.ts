export interface ExperienceEntry {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export const experience: ExperienceEntry[] = [
  {
    period: '2024 — 2025',
    role: 'Backend Engineer',
    organization: 'PT Inovasi Niaga Integrasi',
    description:
      'Built the BebasKirim omnichannel logistics platform; integrated JNE, Ninja, SPX & J&T behind a unified Open API.',
  },
  {
    period: '2021 — 2024',
    role: 'Full-Stack Engineer',
    organization: 'PT Sapta Sari Tama',
    description:
      'Built a full ERP from scratch for a pharma manufacturer — HRIS, PPIC, Inventory, Production & Accounting.',
  },
  {
    period: '2017 — 2021',
    role: 'Full-Stack Engineer',
    organization: 'PT Adityarama Daya Cipta',
    description: 'POS for 212 Mart, plus school & government kiosk information systems.',
  },
  {
    period: '2022 — Present',
    role: 'Software Engineer · Freelance',
    organization: 'Gwenza',
    description:
      'Integrated business system for a top TikTok fashion brand — reseller, inventory & live-sales dashboards.',
  },
  {
    period: '2011 — 2016',
    role: 'Desktop Developer',
    organization: 'PT Brilyan Trimatra Utama',
    description: 'Sports event management & automated scoring systems, including POPNAS 2015.',
  },
];
