import { queryOptions, useQuery } from '@tanstack/react-query';
import type { IconMeta } from '../../mocks/data/icons';

export const iconQueries = {
  all: () => ['icons'] as const,
  catalog: () =>
    queryOptions({
      queryKey: [...iconQueries.all(), 'catalog'] as const,
      queryFn: async (): Promise<IconMeta[]> => {
        const res = await fetch('/api/icons');
        if (!res.ok) throw new Error('Failed to fetch icons');
        return res.json();
      },
    }),
};

export function useIconCatalog() {
  return useQuery(iconQueries.catalog());
}
