import { queryOptions, useQuery } from '@tanstack/react-query';
import type { ListItem } from '../../mocks/data/list';

export const listQueries = {
  all: () => ['list'] as const,
  items: () =>
    queryOptions({
      queryKey: [...listQueries.all(), 'items'] as const,
      queryFn: async (): Promise<ListItem[]> => {
        const res = await fetch('/api/list');
        if (!res.ok) throw new Error('Failed to fetch list items');
        return res.json();
      },
    }),
};

export function useListItems() {
  return useQuery(listQueries.items());
}
