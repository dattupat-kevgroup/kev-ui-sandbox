import { http, HttpResponse, delay } from 'msw';
import { db } from '../db';

export const drawerHandlers = [
  // GET /api/notifications — List all notifications
  http.get('/api/notifications', async () => {
    await delay({ min: 200, max: 500 });
    return HttpResponse.json(db.notifications.getAll());
  }),

  // PUT /api/notifications/:id/read — Mark notification as read
  http.put('/api/notifications/:id/read', async ({ params }) => {
    await delay({ min: 200, max: 500 });
    const updated = db.notifications.update(params.id as string, { read: true });
    if (!updated) {
      return HttpResponse.json({ error: 'Notification not found' }, { status: 404 });
    }
    // Update summary count
    const allNotifications = db.notifications.getAll();
    const unreadCount = allNotifications.filter((n) => !n.read).length;
    db.notificationSummary.update({ count: unreadCount });
    return HttpResponse.json(updated);
  }),
];
