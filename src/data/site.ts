/**
 * Global site + profile configuration.
 * Edit these values to update content that appears across the whole site.
 */

export interface Stat {
  value: number;
  /** Optional symbol rendered (and accent-coloured) after the number, e.g. "+". */
  suffix?: string;
  label: string;
}

export const site = {
  name: 'Ridwan Hidayat',
  shortName: 'Ridwan',
  role: 'Backend / Full-Stack Engineer',
  /** Three lines used for the stacked hero role label. */
  roleLines: ['Backend /', 'Full-Stack', 'Engineer'],
  description:
    'Specialized in scalable backend systems, API design, ERP & logistics platforms, and full-stack web development.',
  availability: 'Available for new opportunities',
  location: 'Bandung, Indonesia',
  locationShort: 'Bandung, ID',
  email: 'ridwan.nurulhidayat@gmail.com',
  phone: '+62 831-4141-8173',
  /** Digits-only form for the `tel:` link. */
  phoneHref: '+6283141418173',
  social: {
    linkedin: 'https://linkedin.com/in/hidayatridwan',
    github: 'https://github.com/hidayatridwan',
  },
  stats: [
    { value: 13, suffix: '+', label: 'Years of experience' },
    { value: 6, label: 'Companies & clients' },
  ] satisfies Stat[],
} as const;

export const mailto = `mailto:${site.email}`;
export const tel = `tel:${site.phoneHref}`;
