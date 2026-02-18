export interface ButtonConfig {
  id: string;
  variant: string;
  color: string;
  size: string;
  disabled: boolean;
  label: string;
}

export const seedButtonConfigs: ButtonConfig[] = [
  { id: '1', variant: 'contained', color: 'primary', size: 'medium', disabled: false, label: 'Primary Button' },
  { id: '2', variant: 'outlined', color: 'primary', size: 'medium', disabled: false, label: 'Outlined Button' },
  { id: '3', variant: 'text', color: 'primary', size: 'medium', disabled: false, label: 'Text Button' },
  { id: '4', variant: 'contained', color: 'secondary', size: 'small', disabled: false, label: 'Small Secondary' },
  { id: '5', variant: 'contained', color: 'error', size: 'large', disabled: false, label: 'Large Error' },
  { id: '6', variant: 'contained', color: 'primary', size: 'medium', disabled: true, label: 'Disabled Button' },
];

export interface NotificationSummary {
  count: number;
  lastChecked: string;
}

export const seedNotificationSummary: NotificationSummary = {
  count: 3,
  lastChecked: '2026-02-16T08:00:00Z',
};

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export const seedUserProfile: UserProfile = {
  id: 'user-1',
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  avatar: 'JS',
};
