import { http, HttpResponse, delay } from 'msw';
import { db } from '../db';
import type { ButtonConfig } from '../data/button';

export const buttonHandlers = [
  // GET /api/button/configs — List button configurations
  http.get('/api/button/configs', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.buttonConfigs.getAll());
  }),

  // PUT /api/button/configs/:id — Update a button config
  http.put('/api/button/configs/:id', async ({ params, request }) => {
    await delay({ min: 200, max: 500 });
    const body = (await request.json()) as Partial<ButtonConfig>;
    const updated = db.buttonConfigs.update(params.id as string, body);
    if (!updated) {
      return HttpResponse.json({ error: 'Config not found' }, { status: 404 });
    }
    return HttpResponse.json(updated);
  }),

  // GET /api/user/profile — Get user profile
  http.get('/api/user/profile', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.userProfile.get());
  }),

  // PUT /api/user/profile — Update user profile
  http.put('/api/user/profile', async ({ request }) => {
    await delay({ min: 200, max: 500 });
    const body = (await request.json()) as Record<string, string>;
    const updated = db.userProfile.update(body);
    return HttpResponse.json(updated);
  }),

  // GET /api/notifications/summary — Get notification count
  http.get('/api/notifications/summary', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.notificationSummary.get());
  }),
];
