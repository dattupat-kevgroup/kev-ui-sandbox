import { Drawer } from '@kev-ui/drawer/Drawer';
import { Button } from '@kev-ui/button/Button';
import { useNotifications } from '../../services/queries/useDrawerQueries';
import { useMarkNotificationRead } from '../../services/mutations/useDrawerMutations';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectNotificationDrawerOpen,
  setNotificationDrawerOpen,
} from '../../store/slices/notification/slice';

export default function DrawerPage() {
  const { data: notifications, isPending, isError, error } = useNotifications();
  const markRead = useMarkNotificationRead();
  const dispatch = useAppDispatch();
  const drawerOpen = useAppSelector(selectNotificationDrawerOpen);

  const unreadCount = notifications?.filter((n) => !n.read).length ?? 0;

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold mb-4">Drawer</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Import</h2>
        <code className="bg-gray-100 px-2 py-1 rounded text-sm block">
          import {`{ Drawer }`} from &apos;@kev-ui/drawer/Drawer&apos;
        </code>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Notification Drawer</h2>
        <Button onClick={() => dispatch(setNotificationDrawerOpen(true))}>
          Open Notifications {unreadCount > 0 && `(${String(unreadCount)} unread)`}
        </Button>
      </div>

      <Drawer
        open={drawerOpen}
        onOpenChange={(open) => dispatch(setNotificationDrawerOpen(open))}
        anchor="right"
      >
        <div className="p-6 w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <Button
              variant="text"
              size="small"
              onClick={() => dispatch(setNotificationDrawerOpen(false))}
            >
              Close
            </Button>
          </div>

          {isPending && (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse p-3 border rounded">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                </div>
              ))}
            </div>
          )}

          {isError && (
            <p className="text-red-600 text-sm">Failed to load: {error.message}</p>
          )}

          {notifications && (
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 border rounded text-sm ${notification.read ? 'opacity-60' : 'bg-blue-50 border-blue-200'}`}
                >
                  <div className="flex items-start justify-between">
                    <h4 className="font-medium">{notification.title}</h4>
                    <span className={`text-xs px-1.5 py-0.5 rounded ${
                      notification.type === 'error' ? 'bg-red-100 text-red-700' :
                      notification.type === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                      notification.type === 'success' ? 'bg-green-100 text-green-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {notification.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1">{notification.message}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400">
                      {new Date(notification.createdAt).toLocaleDateString()}
                    </span>
                    {!notification.read && (
                      <button
                        onClick={() => markRead.mutate(notification.id)}
                        disabled={markRead.isPending}
                        className="text-xs text-blue-500 hover:text-blue-700"
                      >
                        Mark read
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
}
