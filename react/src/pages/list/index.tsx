import { List, ListItem, ListItemText } from '@kev-ui/list';

export default function ListPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold mb-4">List</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Import</h2>
        <code className="bg-gray-100 px-2 py-1 rounded text-sm block">
          import {`{ List, ListItem, ListItemText }`} from '@kev-ui/list'
        </code>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Basic List</h2>
        <List className="border rounded">
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 3" />
          </ListItem>
        </List>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">List with Secondary Text</h2>
        <List className="border rounded">
          <ListItem>
            <ListItemText primary="Inbox" secondary="You have 5 new messages" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Drafts" secondary="2 drafts saved" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Sent" secondary="Last sent 2 hours ago" />
          </ListItem>
        </List>
      </div>
    </div>
  );
}
