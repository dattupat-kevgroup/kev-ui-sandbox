import { useMutation, useQueryClient } from '@tanstack/react-query';
import { drawerQueries } from '../queries/useDrawerQueries';
import { buttonQueries } from '../queries/useButtonQueries';
import type { Notification } from '../../mocks/data/drawer';

export function useMarkNotificationRead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/notifications/${id}/read`, { method: 'PUT' });
      if (!res.ok) throw new Error('Failed to mark as read');
      return res.json() as Promise<Notification>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: drawerQueries.all() });
      queryClient.invalidateQueries({ queryKey: buttonQueries.notificationSummary().queryKey });
    },
  });
}
