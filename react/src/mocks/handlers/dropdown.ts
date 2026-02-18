import { http, HttpResponse, delay } from 'msw';
import { db } from '../db';

export const dropdownHandlers = [
  // GET /api/dropdown/options — List all options
  http.get('/api/dropdown/options', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.dropdownOptions.getAll());
  }),

  // GET /api/dropdown/selected — Get selected options
  http.get('/api/dropdown/selected', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.selectedOptions.getAll());
  }),

  // PUT /api/dropdown/select/:optionId — Select an option
  http.put('/api/dropdown/select/:optionId', async ({ params }) => {
    await delay({ min: 200, max: 500 });
    const optionId = params.optionId as string;
    const option = db.dropdownOptions.getById(optionId);
    if (!option) {
      return HttpResponse.json({ error: 'Option not found' }, { status: 404 });
    }
    const selected = db.selectedOptions.create({
      optionId,
      selectedAt: new Date().toISOString(),
    } as never);
    return HttpResponse.json(selected);
  }),
];
