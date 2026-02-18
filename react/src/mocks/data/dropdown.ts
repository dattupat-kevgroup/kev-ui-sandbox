export interface DropdownOption {
  id: string;
  label: string;
  value: string;
  group?: string;
}

export const seedDropdownOptions: DropdownOption[] = [
  { id: '1', label: 'English', value: 'en', group: 'Languages' },
  { id: '2', label: 'French', value: 'fr', group: 'Languages' },
  { id: '3', label: 'Spanish', value: 'es', group: 'Languages' },
  { id: '4', label: 'German', value: 'de', group: 'Languages' },
  { id: '5', label: 'Light Mode', value: 'light', group: 'Theme' },
  { id: '6', label: 'Dark Mode', value: 'dark', group: 'Theme' },
  { id: '7', label: 'System Default', value: 'system', group: 'Theme' },
];

export interface SelectedOption {
  id: string;
  optionId: string;
  selectedAt: string;
}

export const seedSelectedOptions: SelectedOption[] = [
  { id: '1', optionId: '1', selectedAt: '2026-01-15T10:00:00Z' },
  { id: '2', optionId: '5', selectedAt: '2026-01-15T10:00:00Z' },
];
