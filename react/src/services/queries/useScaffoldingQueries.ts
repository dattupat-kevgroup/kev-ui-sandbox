import { queryOptions, useQuery } from '@tanstack/react-query';
import type { NavItem, NavLink } from '../../mocks/data/scaffolding';

export const scaffoldingQueries = {
  all: () => ['scaffolding'] as const,
  navItems: () =>
    queryOptions({
      queryKey: [...scaffoldingQueries.all(), 'navItems'] as const,
      queryFn: async (): Promise<NavItem[]> => {
        const res = await fetch('/api/nav/items');
        if (!res.ok) throw new Error('Failed to fetch nav items');
        return res.json();
      },
    }),
  navLinks: () =>
    queryOptions({
      queryKey: [...scaffoldingQueries.all(), 'navLinks'] as const,
      queryFn: async (): Promise<NavLink[]> => {
        const res = await fetch('/api/nav/links');
        if (!res.ok) throw new Error('Failed to fetch nav links');
        return res.json();
      },
    }),
};

export function useNavItems() {
  return useQuery(scaffoldingQueries.navItems());
}

export function useNavLinks() {
  return useQuery(scaffoldingQueries.navLinks());
}
