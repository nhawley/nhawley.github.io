import type { Project } from '../../../types';

export const projects: Project[] = [
  {
    id: 'ai-code-review',
    title: 'AI Code Review Assistant',
    description: 'Intelligent code analysis tool powered by Claude AI',
    longDescription: 'A comprehensive code review tool that uses Claude AI to analyze code for security vulnerabilities, performance issues, and best practices.',
    image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGkzZnRua20wMG5pOXhqZDkxZGJ2dGw0cXpneWVzOWFnODlnemNnYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q9aBxHn9fTqKs/giphy.gif',
    demoUrl: '',
    githubUrl: '',
    tags: ['React', 'TypeScript', 'Claude API'],
    featured: true,
    highlights: [
      'Real-time streaming responses from Claude AI',
      'Multi-language support (JavaScript, TypeScript, Python)',
      'Security vulnerability detection',
      'Performance optimization suggestions',
    ],
  },
  {
    id: 'stan',
    title: 'STAN (Spotify Test Agent Nate)',
    description: 'Spotify API Test Harness with Contract Testing',
    longDescription: '',
    image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTVvdGFwMWk1eWl4MXozMXdpZm00djEzNXI2NnlmZmlsY3QzNGxvZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EFGXDUBXcUd131C0CR/giphy.gif',
    demoUrl: '',
    githubUrl: '',
    tags: ['TypeScript', 'Python'],
    featured: true,
    highlights: [
      'Schema validation layer',
      'Synthetic API drift detector',
      'Github Actions workflows',
    ],
  },
  {
    id: 'auto-mind',
    title: 'AutoMind',
    description: 'Automotive companion & Garage Build Planner',
    longDescription: 'React Native mobile app that combines AI-powered vehicle diagnostics with a Tamagotchi-style car companion.',
    image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTl6czRla2U2Mmt2MGZxNHR5eXNham4ybXNiaGFsZThmdGtzczZuYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7c0bE2bfJrfos/giphy.gif',
    demoUrl: '',
    githubUrl: '',
    tags: ['React Native', 'Expo', 'AsyncStorage'],
    featured: true,
    highlights: [
      'Native iOS and Android experience',
      'OBD-II Bluetooth Diagnostics',
      'Tamagotchi Companion Loop',
    ],
  },
];