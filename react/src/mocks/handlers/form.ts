import { http, HttpResponse, delay } from 'msw';
import { db } from '../db';
import type { SavedFormData, FormSubmission } from '../data/form';

export const formHandlers = [
  // GET /api/form/pages — List form sub-pages
  http.get('/api/form/pages', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.formPages.getAll());
  }),

  // GET /api/form/data — Get saved form data
  http.get('/api/form/data', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.savedFormData.getAll());
  }),

  // PUT /api/form/data/:id — Update a saved form field
  http.put('/api/form/data/:id', async ({ params, request }) => {
    await delay({ min: 200, max: 500 });
    const body = (await request.json()) as Partial<SavedFormData>;
    const updated = db.savedFormData.update(params.id as string, {
      ...body,
      updatedAt: new Date().toISOString(),
    });
    if (!updated) {
      return HttpResponse.json({ error: 'Field not found' }, { status: 404 });
    }
    return HttpResponse.json(updated);
  }),

  // POST /api/form/submit — Submit a form
  http.post('/api/form/submit', async ({ request }) => {
    await delay({ min: 300, max: 500 });
    const body = (await request.json()) as { formId: string; values: Record<string, string> };
    const submission = db.formSubmissions.create({
      formId: body.formId,
      values: body.values,
      submittedAt: new Date().toISOString(),
    } as Omit<FormSubmission, 'id'>);
    return HttpResponse.json(submission, { status: 201 });
  }),
];
