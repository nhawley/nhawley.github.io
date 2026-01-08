import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ai-code-review',
    title: 'AI Code Review Assistant',
    description: 'Intelligent code analysis tool powered by Claude AI',
    longDescription: 'A comprehensive code review tool that uses Claude AI to analyze code for security vulnerabilities, performance issues, and best practices.',
    image: '/projects/ai-code-review.png',
    demoUrl: 'https://ai-code-review.vercel.app',
    githubUrl: 'https://github.com/nhawley/ai-code-review',
    tags: ['React', 'TypeScript', 'Claude API', 'Tailwind CSS'],
    featured: true,
    highlights: [
      'Real-time streaming responses from Claude AI',
      'Multi-language support (JavaScript, TypeScript, Python)',
      'Security vulnerability detection',
      'Performance optimization suggestions',
    ],
  },
  {
    id: 'kanban-board',
    title: 'Real-Time Kanban Board',
    description: 'Collaborative project management with drag-and-drop',
    longDescription: 'A modern kanban board application with real-time collaboration, built with React and Firebase.',
    image: '/projects/kanban.png',
    demoUrl: 'https://kanban-board.vercel.app',
    githubUrl: 'https://github.com/nhawley/kanban-board',
    tags: ['React', 'TypeScript', 'Firebase', 'dnd-kit', 'Framer Motion'],
    featured: true,
    highlights: [
      'Smooth drag-and-drop with animations',
      'Real-time updates across multiple users',
      'Keyboard shortcuts for power users',
      'Mobile-responsive design',
    ],
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker App',
    description: 'Mobile workout tracking with progress analytics',
    longDescription: 'Native-feeling React Native app for tracking workouts, sets, and progress over time.',
    image: '/projects/fitness-tracker.png',
    githubUrl: 'https://github.com/nhawley/fitness-tracker',
    tags: ['React Native', 'TypeScript', 'Expo', 'AsyncStorage'],
    featured: true,
    highlights: [
      'Native iOS and Android experience',
      'Progress charts and analytics',
      'Rest timer with notifications',
      'Offline-first with local storage',
    ],
  },
];