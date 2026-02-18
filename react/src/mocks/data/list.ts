export interface ListItem {
  id: string;
  primary: string;
  secondary?: string;
  icon?: string;
}

export const seedListItems: ListItem[] = [
  { id: '1', primary: 'Inbox', secondary: 'You have 5 new messages', icon: 'mail' },
  { id: '2', primary: 'Drafts', secondary: '2 drafts saved', icon: 'drafts' },
  { id: '3', primary: 'Sent', secondary: 'Last sent 2 hours ago', icon: 'sent' },
  { id: '4', primary: 'Trash', secondary: '12 items', icon: 'trash' },
  { id: '5', primary: 'Spam', secondary: '3 new spam messages', icon: 'spam' },
  { id: '6', primary: 'Starred', secondary: '7 starred items', icon: 'star' },
  { id: '7', primary: 'Archive', secondary: '143 archived items', icon: 'archive' },
];
