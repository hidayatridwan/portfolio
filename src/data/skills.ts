export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { category: 'Languages', items: ['PHP', 'JavaScript', 'Dart'] },
  {
    category: 'Frameworks',
    items: ['Node.js', 'Laravel', 'Slim', 'CodeIgniter', 'Express', 'Svelte', 'React', 'Flutter', 'jQuery'],
  },
  { category: 'Databases', items: ['MySQL', 'Postgres', 'SQL Server', 'MongoDB', 'Redis'] },
  { category: 'Message Broker', items: ['RabbitMQ'] },
  { category: 'Tools', items: ['Docker', 'Git', 'CI/CD'] },
];
