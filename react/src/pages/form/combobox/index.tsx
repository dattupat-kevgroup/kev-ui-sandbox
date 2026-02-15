import { useState } from 'react';
import { Typography } from '@kev-ui/typography/Typography';
import { Combobox } from '@kev-ui/form-field/Combobox';

const options = [
  { id: '1', label: 'Apple', value: 'apple' },
  { id: '2', label: 'Banana', value: 'banana' },
  { id: '3', label: 'Cherry', value: 'cherry' },
  { id: '4', label: 'Date', value: 'date' },
  { id: '5', label: 'Elderberry', value: 'elderberry' },
];

export default function FormComboboxPage() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div>
      <Typography variant="h4" className="mb-4">Combobox</Typography>
      <Typography variant="body1" className="text-gray-600 mb-6">
        Searchable dropdown with autocomplete functionality.
      </Typography>

      <div className="space-y-6 max-w-md">
        <Combobox
          name="basic"
          label="Select a fruit"
          optionsList={options}
          onChange={(val) => setValue(val as string)}
        />

        <div className="p-4 bg-gray-100 rounded">
          <Typography variant="body2">
            Selected value: <strong>{value || 'None'}</strong>
          </Typography>
        </div>

        <Combobox
          name="disabled"
          label="Disabled Combobox"
          optionsList={options}
          disabled
        />
      </div>
    </div>
  );
}
