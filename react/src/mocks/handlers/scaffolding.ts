import { http, HttpResponse, delay } from 'msw';
import { db } from '../db';

export const scaffoldingHandlers = [
  // GET /api/nav/items — Sidebar navigation items
  http.get('/api/nav/items', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.navItems.getAll());
  }),

  // GET /api/nav/links — Secondary nav links
  http.get('/api/nav/links', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.navLinks.getAll());
  }),
];
