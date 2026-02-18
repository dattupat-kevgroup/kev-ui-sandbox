import { http, HttpResponse, delay } from 'msw';
import { db } from '../db';

export const iconHandlers = [
  // GET /api/icons — List all icons with metadata
  http.get('/api/icons', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.icons.getAll());
  }),
];
