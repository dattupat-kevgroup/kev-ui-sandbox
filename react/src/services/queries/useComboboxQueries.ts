import { queryOptions, useQuery } from '@tanstack/react-query';
import type { ComboboxOption } from '../../mocks/data/combobox';

export const comboboxQueries = {
  all: () => ['combobox'] as const,
  options: () =>
    queryOptions({
      queryKey: [...comboboxQueries.all(), 'options'] as const,
      queryFn: async (): Promise<ComboboxOption[]> => {
        const res = await fetch('/api/combobox/options');
        if (!res.ok) throw new Error('Failed to fetch options');
        return res.json();
      },
    }),
};

export function useComboboxOptions() {
  return useQuery(comboboxQueries.options());
}
