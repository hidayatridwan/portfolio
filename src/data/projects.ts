export interface Project {
  title: string;
  description: string;
  tags: string[];
  /** Optional outbound link for the project. */
  href?: string;
}

export const projects: Project[] = [
  {
    title: 'BebasKirim',
    description: 'Omnichannel logistics & multi-courier Open API unifying JNE, Ninja, SPX and J&T.',
    tags: ['Node.js', 'RabbitMQ', 'Postgres', 'Redis'],
  },
  {
    title: 'Trifaraya ERP',
    description: 'Full pharmaceutical manufacturing ERP built from scratch — HRIS to accounting.',
    tags: ['Laravel', 'MySQL', 'jQuery'],
  },
  {
    title: 'Gwenza Business System',
    description: 'Reseller, inventory & live-sales platform for a top TikTok / Shopee fashion brand.',
    tags: ['Express', 'Svelte', 'MongoDB'],
  },
  {
    title: 'Kiosk Information System',
    description: 'Web & mobile kiosk for Kementrian Koperasi — public-facing service terminals.',
    tags: ['CodeIgniter', 'Flutter', 'SQL Server'],
  },
];
