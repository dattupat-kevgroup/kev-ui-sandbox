import { queryOptions, useQuery } from '@tanstack/react-query';
import type { DropdownOption, SelectedOption } from '../../mocks/data/dropdown';

export const dropdownQueries = {
  all: () => ['dropdown'] as const,
  options: () =>
    queryOptions({
      queryKey: [...dropdownQueries.all(), 'options'] as const,
      queryFn: async (): Promise<DropdownOption[]> => {
        const res = await fetch('/api/dropdown/options');
        if (!res.ok) throw new Error('Failed to fetch dropdown options');
        return res.json();
      },
    }),
  selected: () =>
    queryOptions({
      queryKey: [...dropdownQueries.all(), 'selected'] as const,
      queryFn: async (): Promise<SelectedOption[]> => {
        const res = await fetch('/api/dropdown/selected');
        if (!res.ok) throw new Error('Failed to fetch selected options');
        return res.json();
      },
    }),
};

export function useDropdownOptions() {
  return useQuery(dropdownQueries.options());
}

export function useSelectedOptions() {
  return useQuery(dropdownQueries.selected());
}
