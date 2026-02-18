import { Typography } from '@kev-ui/typography/Typography';
import { IconButton } from '@kev-ui/button/IconButton';
import { BellIcon, UserIcon, GlobeIcon, BurgerIcon } from '@kev-ui/icons';
import { useNotificationSummary, useUserProfile } from '../../../services/queries/useButtonQueries';

export default function ButtonIconPage() {
  const { data: summary, isPending: summaryLoading } = useNotificationSummary();
  const { data: profile, isPending: profileLoading } = useUserProfile();

  return (
    <div>
      <Typography variant="h4" className="mb-4">Icon Button</Typography>
      <Typography variant="body1" className="text-gray-600 mb-6">
        Buttons that display only an icon, useful for toolbars and compact UIs.
      </Typography>

      <div className="space-y-6">
        {/* API Data */}
        <div className="bg-white p-4 rounded-lg shadow">
          <Typography variant="h6" className="mb-3">API Data</Typography>
          <div className="flex gap-4 text-sm">
            <span className="text-gray-600">
              Notifications: {summaryLoading ? (
                <span className="inline-block w-4 h-4 bg-gray-200 rounded animate-pulse" />
              ) : (
                <strong>{String(summary?.count ?? 0)}</strong>
              )}
            </span>
            <span className="text-gray-600">
              User: {profileLoading ? (
                <span className="inline-block w-16 h-4 bg-gray-200 rounded animate-pulse" />
              ) : (
                <strong>{profile?.name}</strong>
              )}
            </span>
          </div>
        </div>

        <div>
          <Typography variant="h6" className="mb-3">Default</Typography>
          <div className="flex gap-2">
            <IconButton aria-label="Notifications">
              <BellIcon />
            </IconButton>
            <IconButton aria-label="User profile">
              <UserIcon />
            </IconButton>
            <IconButton aria-label="Language">
              <GlobeIcon />
            </IconButton>
            <IconButton aria-label="Menu">
              <BurgerIcon />
            </IconButton>
          </div>
        </div>

        <div>
          <Typography variant="h6" className="mb-3">Colors</Typography>
          <div className="flex gap-2">
            <IconButton color="primary" aria-label="Primary">
              <BellIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="Secondary">
              <BellIcon />
            </IconButton>
            <IconButton color="error" aria-label="Error">
              <BellIcon />
            </IconButton>
          </div>
        </div>

        <div>
          <Typography variant="h6" className="mb-3">Disabled</Typography>
          <div className="flex gap-2">
            <IconButton disabled aria-label="Disabled">
              <BellIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
