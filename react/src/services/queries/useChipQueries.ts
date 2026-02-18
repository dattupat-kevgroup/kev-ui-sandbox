import { queryOptions, useQuery } from '@tanstack/react-query';
import type { ChipTag } from '../../mocks/data/chip';

export const chipQueries = {
  all: () => ['chips'] as const,
  list: () =>
    queryOptions({
      queryKey: [...chipQueries.all(), 'list'] as const,
      queryFn: async (): Promise<ChipTag[]> => {
        const res = await fetch('/api/chips');
        if (!res.ok) throw new Error('Failed to fetch chips');
        return res.json();
      },
    }),
};

export function useChips() {
  return useQuery(chipQueries.list());
}
