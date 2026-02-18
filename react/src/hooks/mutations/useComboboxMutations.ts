import { useMutation, useQueryClient } from '@tanstack/react-query';
import { comboboxQueries } from '../queries/useComboboxQueries';
import type { ComboboxOption } from '../../mocks/data/combobox';

export function useAddComboboxOption() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Omit<ComboboxOption, 'id'>) => {
      const res = await fetch('/api/combobox/options', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to add option');
      return res.json() as Promise<ComboboxOption>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: comboboxQueries.all() });
    },
  });
}

export function useDeleteComboboxOption() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/combobox/options/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete option');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: comboboxQueries.all() });
    },
  });
}
