import { http, HttpResponse, delay } from 'msw';
import { db } from '../db';

export const homeHandlers = [
  // GET /api/dashboard — Get dashboard stats
  http.get('/api/dashboard', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.dashboardStats.get());
  }),
];
