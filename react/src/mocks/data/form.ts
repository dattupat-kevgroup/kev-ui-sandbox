export interface FormPageMeta {
  id: string;
  title: string;
  href: string;
  description: string;
}

export interface SavedFormData {
  id: string;
  fieldName: string;
  value: string;
  updatedAt: string;
}

export interface FormSubmission {
  id: string;
  formId: string;
  values: Record<string, string>;
  submittedAt: string;
}

export const seedFormPages: FormPageMeta[] = [
  {
    id: 'textfield',
    title: 'TextField',
    href: '/form/textfield',
    description: 'Text input fields with validation, floating labels, and various configurations.',
  },
  {
    id: 'combobox',
    title: 'Combobox',
    href: '/form/combobox',
    description: 'Single and multi-select dropdowns with search, filtering, and custom options.',
  },
  {
    id: 'validation',
    title: 'Validation',
    href: '/form/validation',
    description: 'Form-level validation with Zod schemas, sections, and error messaging.',
  },
];

export const seedSavedFormData: SavedFormData[] = [
  { id: '1', fieldName: 'firstName', value: 'John', updatedAt: '2026-01-15T10:30:00Z' },
  { id: '2', fieldName: 'lastName', value: 'Doe', updatedAt: '2026-01-15T10:30:00Z' },
  { id: '3', fieldName: 'email', value: 'john.doe@example.com', updatedAt: '2026-01-15T10:31:00Z' },
  { id: '4', fieldName: 'phone', value: '(555) 123-4567', updatedAt: '2026-01-15T10:31:00Z' },
  { id: '5', fieldName: 'bio', value: 'Software engineer with 5 years of experience.', updatedAt: '2026-01-15T10:32:00Z' },
];

export const seedFormSubmissions: FormSubmission[] = [];
