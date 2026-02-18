import { Chip } from '@kev-ui/chip/Chip';
import { useChips } from '../../services/queries/useChipQueries';
import { useDeleteChip, useAddChip } from '../../services/mutations/useChipMutations';

export default function ChipPage() {
  const { data: chips, isPending, isError, error } = useChips();
  const deleteChip = useDeleteChip();
  const addChip = useAddChip();

  const handleAdd = () => {
    const label = prompt('Enter chip label:');
    if (label) {
      addChip.mutate({ label });
    }
  };

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold mb-4">Chip</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Basic Chip</h2>
        <Chip>Default Chip</Chip>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Tags from API</h2>
          <button
            onClick={handleAdd}
            disabled={addChip.isPending}
            className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {addChip.isPending ? 'Adding...' : '+ Add Tag'}
          </button>
        </div>

        {isPending && (
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-20 bg-gray-200 rounded-full animate-pulse" />
            ))}
          </div>
        )}

        {isError && (
          <p className="text-red-600 text-sm">Failed to load tags: {error.message}</p>
        )}

        {chips && (
          <div className="flex gap-2 flex-wrap">
            {chips.map((chip) => (
              <Chip
                key={chip.id}
                onDelete={() => deleteChip.mutate(chip.id)}
              >
                {chip.label}
              </Chip>
            ))}
            {chips.length === 0 && (
              <p className="text-gray-400 text-sm">No tags. Click &quot;+ Add Tag&quot; to create one.</p>
            )}
          </div>
        )}

        {deleteChip.isPending && (
          <p className="text-sm text-gray-400 mt-2">Removing...</p>
        )}
      </div>
    </div>
  );
}
