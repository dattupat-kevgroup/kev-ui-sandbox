import { queryOptions, useQuery } from '@tanstack/react-query';
import type { FormPageMeta, SavedFormData } from '../../mocks/data/form';

export const formQueries = {
  all: () => ['form'] as const,
  pages: () =>
    queryOptions({
      queryKey: [...formQueries.all(), 'pages'] as const,
      queryFn: async (): Promise<FormPageMeta[]> => {
        const res = await fetch('/api/form/pages');
        if (!res.ok) throw new Error('Failed to fetch form pages');
        return res.json();
      },
    }),
  data: () =>
    queryOptions({
      queryKey: [...formQueries.all(), 'data'] as const,
      queryFn: async (): Promise<SavedFormData[]> => {
        const res = await fetch('/api/form/data');
        if (!res.ok) throw new Error('Failed to fetch form data');
        return res.json();
      },
    }),
};

export function useFormPages() {
  return useQuery(formQueries.pages());
}

export function useFormData() {
  return useQuery(formQueries.data());
}
