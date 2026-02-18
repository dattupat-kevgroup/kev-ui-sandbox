export interface ContentBlock {
  id: string;
  variant: string;
  text: string;
  alignment?: 'left' | 'center' | 'right';
}

export const seedContentBlocks: ContentBlock[] = [
  { id: '1', variant: 'h1', text: 'Welcome to KEV-UI', alignment: 'left' },
  { id: '2', variant: 'h2', text: 'A Modern Component Library', alignment: 'left' },
  { id: '3', variant: 'body1', text: 'KEV-UI provides a comprehensive set of accessible, customizable React components built with Tailwind CSS and shadcn/ui foundations.', alignment: 'left' },
  { id: '4', variant: 'body2', text: 'All components support theming, internationalization, and full keyboard navigation out of the box.', alignment: 'left' },
  { id: '5', variant: 'h3', text: 'Getting Started', alignment: 'left' },
  { id: '6', variant: 'body1', text: 'Install the design system package and import the base styles. Then add individual component packages as needed.', alignment: 'left' },
  { id: '7', variant: 'caption', text: 'Last updated: February 2026', alignment: 'right' },
];
