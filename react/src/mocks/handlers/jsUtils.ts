import { http, HttpResponse, delay } from 'msw';
import { db } from '../db';

export const jsUtilsHandlers = [
  // GET /api/js-utils — List all utility metadata
  http.get('/api/js-utils', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.utilities.getAll());
  }),

  // GET /api/js-utils/:id — Get single utility metadata
  http.get('/api/js-utils/:id', async ({ params }) => {
    await delay({ min: 200, max: 500 });
    const util = db.utilities.getById(params.id as string);
    if (!util) {
      return HttpResponse.json({ error: 'Utility not found' }, { status: 404 });
    }
    return HttpResponse.json(util);
  }),
];
