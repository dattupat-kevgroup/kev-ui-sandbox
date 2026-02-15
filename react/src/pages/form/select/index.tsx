import { useState } from 'react';
import { Typography } from '@kev-ui/typography/Typography';
import { Combobox } from '@kev-ui/form-field/Combobox';

const options = [
  { id: '1', label: 'Option 1', value: '1' },
  { id: '2', label: 'Option 2', value: '2' },
  { id: '3', label: 'Option 3', value: '3' },
];

export default function FormSelectPage() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div>
      <Typography variant="h4" className="mb-4">Select</Typography>
      <Typography variant="body1" className="text-gray-600 mb-6">
        Use Combobox component for select-like behavior.
      </Typography>

      <div className="space-y-6 max-w-md">
        <Combobox
          name="basic"
          label="Select an option"
          optionsList={options}
          onChange={(val) => setValue(val as string)}
        />

        <div className="p-4 bg-gray-100 rounded">
          <Typography variant="body2">
            Selected value: <strong>{value || 'None'}</strong>
          </Typography>
        </div>
      </div>
    </div>
  );
}
