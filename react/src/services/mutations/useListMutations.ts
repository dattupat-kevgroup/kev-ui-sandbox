import { useMutation, useQueryClient } from '@tanstack/react-query';
import { listQueries } from '../queries/useListQueries';
import type { ListItem } from '../../mocks/data/list';

export function useAddListItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Omit<ListItem, 'id'>) => {
      const res = await fetch('/api/list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to add item');
      return res.json() as Promise<ListItem>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: listQueries.all() });
    },
  });
}

export function useUpdateListItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...data }: { id: string } & Partial<ListItem>) => {
      const res = await fetch(`/api/list/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to update item');
      return res.json() as Promise<ListItem>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: listQueries.all() });
    },
  });
}

export function useDeleteListItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/list/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete item');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: listQueries.all() });
    },
  });
}
