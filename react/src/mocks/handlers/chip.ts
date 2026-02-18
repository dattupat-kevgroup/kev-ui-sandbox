import { http, HttpResponse, delay } from 'msw';
import { db } from '../db';
import type { ChipTag } from '../data/chip';

export const chipHandlers = [
  // GET /api/chips — List all tags
  http.get('/api/chips', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.chipTags.getAll());
  }),

  // POST /api/chips — Add a new tag
  http.post('/api/chips', async ({ request }) => {
    await delay({ min: 200, max: 500 });
    const body = (await request.json()) as Omit<ChipTag, 'id'>;
    const tag = db.chipTags.create(body);
    return HttpResponse.json(tag, { status: 201 });
  }),

  // DELETE /api/chips/:id — Remove a tag
  http.delete('/api/chips/:id', async ({ params }) => {
    await delay({ min: 200, max: 500 });
    const deleted = db.chipTags.delete(params.id as string);
    if (!deleted) {
      return HttpResponse.json({ error: 'Tag not found' }, { status: 404 });
    }
    return new HttpResponse(null, { status: 204 });
  }),
];
