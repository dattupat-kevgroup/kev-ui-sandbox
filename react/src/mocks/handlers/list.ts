import { http, HttpResponse, delay } from 'msw';
import { db } from '../db';
import type { ListItem } from '../data/list';

export const listHandlers = [
  // GET /api/list — List all items
  http.get('/api/list', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.listItems.getAll());
  }),

  // POST /api/list — Add an item
  http.post('/api/list', async ({ request }) => {
    await delay({ min: 200, max: 500 });
    const body = (await request.json()) as Omit<ListItem, 'id'>;
    const item = db.listItems.create(body);
    return HttpResponse.json(item, { status: 201 });
  }),

  // PUT /api/list/:id — Update an item
  http.put('/api/list/:id', async ({ params, request }) => {
    await delay({ min: 200, max: 500 });
    const body = (await request.json()) as Partial<ListItem>;
    const updated = db.listItems.update(params.id as string, body);
    if (!updated) {
      return HttpResponse.json({ error: 'Item not found' }, { status: 404 });
    }
    return HttpResponse.json(updated);
  }),

  // DELETE /api/list/:id — Remove an item
  http.delete('/api/list/:id', async ({ params }) => {
    await delay({ min: 200, max: 500 });
    const deleted = db.listItems.delete(params.id as string);
    if (!deleted) {
      return HttpResponse.json({ error: 'Item not found' }, { status: 404 });
    }
    return new HttpResponse(null, { status: 204 });
  }),
];
