import { List, ListItem, ListItemText } from '@kev-ui/list';
import { useListItems } from '../../hooks/queries/useListQueries';
import { useDeleteListItem, useAddListItem } from '../../hooks/mutations/useListMutations';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { toggleItemSelection, selectSelectedItems, setFilterText, selectFilterText } from '../../store/slices/list/listSlice';

export default function ListPage() {
  const { data: items, isPending, isError, error } = useListItems();
  const deleteItem = useDeleteListItem();
  const addItem = useAddListItem();
  const dispatch = useAppDispatch();
  const selectedItems = useAppSelector(selectSelectedItems);
  const filterText = useAppSelector(selectFilterText);

  const filteredItems = items?.filter((item) =>
    item.primary.toLowerCase().includes(filterText.toLowerCase()) ||
    item.secondary?.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleAdd = () => {
    const primary = prompt('Enter item name:');
    if (primary) {
      const secondary = prompt('Enter description (optional):') || undefined;
      addItem.mutate({ primary, secondary });
    }
  };

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold mb-4">List</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Import</h2>
        <code className="bg-gray-100 px-2 py-1 rounded text-sm block">
          import {`{ List, ListItem, ListItemText }`} from &apos;@kev-ui/list&apos;
        </code>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Items from API</h2>
          <button
            onClick={handleAdd}
            disabled={addItem.isPending}
            className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {addItem.isPending ? 'Adding...' : '+ Add Item'}
          </button>
        </div>

        <input
          type="text"
          placeholder="Filter items..."
          value={filterText}
          onChange={(e) => dispatch(setFilterText(e.target.value))}
          className="w-full mb-4 px-3 py-2 border rounded text-sm"
        />

        {isPending && (
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse flex gap-3 p-3">
                <div className="h-5 bg-gray-200 rounded w-1/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        )}

        {isError && (
          <p className="text-red-600 text-sm">Failed to load list: {error.message}</p>
        )}

        {filteredItems && (
          <>
            <List className="border rounded">
              {filteredItems.map((item) => (
                <ListItem
                  key={item.id}
                  className={selectedItems.includes(item.id) ? 'bg-blue-50' : ''}
                  onClick={() => dispatch(toggleItemSelection(item.id))}
                >
                  <ListItemText primary={item.primary} secondary={item.secondary} />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteItem.mutate(item.id);
                    }}
                    className="ml-auto text-red-400 hover:text-red-600 text-sm px-2"
                  >
                    Delete
                  </button>
                </ListItem>
              ))}
            </List>
            {selectedItems.length > 0 && (
              <p className="text-sm text-gray-500 mt-2">
                {String(selectedItems.length)} item(s) selected
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
