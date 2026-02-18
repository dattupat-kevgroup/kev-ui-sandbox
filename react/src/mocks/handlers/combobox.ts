import { http, HttpResponse, delay } from 'msw';
import { db } from '../db';
import type { ComboboxOption } from '../data/combobox';

export const comboboxHandlers = [
  // GET /api/combobox/options — List all options
  http.get('/api/combobox/options', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.comboboxOptions.getAll());
  }),

  // POST /api/combobox/options — Add a new option
  http.post('/api/combobox/options', async ({ request }) => {
    await delay({ min: 200, max: 500 });
    const body = (await request.json()) as Omit<ComboboxOption, 'id'>;
    const option = db.comboboxOptions.create(body);
    return HttpResponse.json(option, { status: 201 });
  }),

  // DELETE /api/combobox/options/:id — Remove an option
  http.delete('/api/combobox/options/:id', async ({ params }) => {
    await delay({ min: 200, max: 500 });
    const deleted = db.comboboxOptions.delete(params.id as string);
    if (!deleted) {
      return HttpResponse.json({ error: 'Option not found' }, { status: 404 });
    }
    return new HttpResponse(null, { status: 204 });
  }),
];
