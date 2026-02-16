import { useState } from 'react';
import { Chip } from '@kev-ui/chip/Chip';

export default function ChipPage() {
  const [chips, setChips] = useState(['Apple', 'Banana', 'Cherry']);

  const handleDelete = (label: string) => {
    setChips((prev) => prev.filter((c) => c !== label));
  };

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold mb-4">Chip</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Basic Chip</h2>
        <Chip>Default Chip</Chip>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Deletable Chips</h2>
        <div className="flex gap-2 flex-wrap">
          {chips.map((label) => (
            <Chip key={label} onDelete={() => handleDelete(label)}>
              {label}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
}
