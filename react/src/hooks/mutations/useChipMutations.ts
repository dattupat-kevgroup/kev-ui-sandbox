import { useMutation, useQueryClient } from '@tanstack/react-query';
import { chipQueries } from '../queries/useChipQueries';
import type { ChipTag } from '../../mocks/data/chip';

export function useAddChip() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Omit<ChipTag, 'id'>) => {
      const res = await fetch('/api/chips', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to add chip');
      return res.json() as Promise<ChipTag>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: chipQueries.all() });
    },
  });
}

export function useDeleteChip() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/chips/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete chip');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: chipQueries.all() });
    },
  });
}
