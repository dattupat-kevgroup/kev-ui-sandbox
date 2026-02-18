import { queryOptions, useQuery } from '@tanstack/react-query';
import type { ButtonConfig, NotificationSummary, UserProfile } from '../../mocks/data/button';

export const buttonQueries = {
  all: () => ['button'] as const,
  configs: () =>
    queryOptions({
      queryKey: [...buttonQueries.all(), 'configs'] as const,
      queryFn: async (): Promise<ButtonConfig[]> => {
        const res = await fetch('/api/button/configs');
        if (!res.ok) throw new Error('Failed to fetch button configs');
        return res.json();
      },
    }),
  notificationSummary: () =>
    queryOptions({
      queryKey: ['notifications', 'summary'] as const,
      queryFn: async (): Promise<NotificationSummary> => {
        const res = await fetch('/api/notifications/summary');
        if (!res.ok) throw new Error('Failed to fetch notification summary');
        return res.json();
      },
    }),
  userProfile: () =>
    queryOptions({
      queryKey: ['user', 'profile'] as const,
      queryFn: async (): Promise<UserProfile> => {
        const res = await fetch('/api/user/profile');
        if (!res.ok) throw new Error('Failed to fetch user profile');
        return res.json();
      },
    }),
};

export function useButtonConfigs() {
  return useQuery(buttonQueries.configs());
}

export function useNotificationSummary() {
  return useQuery(buttonQueries.notificationSummary());
}

export function useUserProfile() {
  return useQuery(buttonQueries.userProfile());
}
