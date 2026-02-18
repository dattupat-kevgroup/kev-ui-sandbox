import { queryOptions, useQuery } from '@tanstack/react-query';
import type { UtilityMeta } from '../../mocks/data/jsUtils';

export const jsUtilsQueries = {
  all: () => ['jsUtils'] as const,
  list: () =>
    queryOptions({
      queryKey: [...jsUtilsQueries.all(), 'list'] as const,
      queryFn: async (): Promise<UtilityMeta[]> => {
        const res = await fetch('/api/js-utils');
        if (!res.ok) throw new Error('Failed to fetch utilities');
        return res.json();
      },
    }),
  detail: (id: string) =>
    queryOptions({
      queryKey: [...jsUtilsQueries.all(), 'detail', id] as const,
      queryFn: async (): Promise<UtilityMeta> => {
        const res = await fetch(`/api/js-utils/${id}`);
        if (!res.ok) throw new Error('Failed to fetch utility');
        return res.json();
      },
    }),
};

export function useUtilities() {
  return useQuery(jsUtilsQueries.list());
}

export function useUtilityDetail(id: string) {
  return useQuery(jsUtilsQueries.detail(id));
}
