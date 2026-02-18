import { queryOptions, useQuery } from '@tanstack/react-query';
import type { ContentBlock } from '../../mocks/data/typography';

export const typographyQueries = {
  all: () => ['typography'] as const,
  blocks: () =>
    queryOptions({
      queryKey: [...typographyQueries.all(), 'blocks'] as const,
      queryFn: async (): Promise<ContentBlock[]> => {
        const res = await fetch('/api/typography/blocks');
        if (!res.ok) throw new Error('Failed to fetch content blocks');
        return res.json();
      },
    }),
};

export function useContentBlocks() {
  return useQuery(typographyQueries.blocks());
}
