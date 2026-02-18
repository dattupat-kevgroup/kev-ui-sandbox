export interface ChipTag {
  id: string;
  label: string;
  color?: string;
}

export const seedChipTags: ChipTag[] = [
  { id: '1', label: 'React', color: 'primary' },
  { id: '2', label: 'TypeScript', color: 'secondary' },
  { id: '3', label: 'Tailwind', color: 'primary' },
  { id: '4', label: 'Vite', color: 'secondary' },
  { id: '5', label: 'Redux', color: 'primary' },
  { id: '6', label: 'MSW', color: 'secondary' },
];
