import { http, HttpResponse, delay } from 'msw';
import { db } from '../db';
import type { ContentBlock } from '../data/typography';

export const typographyHandlers = [
  // GET /api/typography/blocks — List content blocks
  http.get('/api/typography/blocks', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.contentBlocks.getAll());
  }),

  // PUT /api/typography/blocks/:id — Update a content block
  http.put('/api/typography/blocks/:id', async ({ params, request }) => {
    await delay({ min: 200, max: 500 });
    const body = (await request.json()) as Partial<ContentBlock>;
    const updated = db.contentBlocks.update(params.id as string, body);
    if (!updated) {
      return HttpResponse.json({ error: 'Block not found' }, { status: 404 });
    }
    return HttpResponse.json(updated);
  }),
];
