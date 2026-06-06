export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: 'Backend Engineering',
    description:
      'Scalable APIs, integrations, and reliable distributed systems built to handle real traffic.',
  },
  {
    title: 'Full-Stack Web Apps',
    description:
      'End-to-end web applications, from database schema and services through to a polished UI.',
  },
  {
    title: 'System Integration',
    description:
      'Connecting third-party services — payments, logistics couriers, and marketplaces.',
  },
  {
    title: 'ERP & Business Systems',
    description:
      'Custom internal platforms covering operations end-to-end, from inventory to accounting.',
  },
];
