import { useState } from 'react';
import { Typography } from '@kev-ui/typography/Typography';
import { Combobox } from '@kev-ui/form-field/Combobox';

const fruitOptions = [
  { id: '1', label: 'Apple', value: 'apple' },
  { id: '2', label: 'Banana', value: 'banana' },
  { id: '3', label: 'Cherry', value: 'cherry' },
  { id: '4', label: 'Date', value: 'date' },
  { id: '5', label: 'Elderberry', value: 'elderberry' },
  { id: '6', label: 'Fig', value: 'fig' },
  { id: '7', label: 'Grape', value: 'grape' },
];

export default function FormComboboxPage() {
  const [singleValue, setSingleValue] = useState<string | null>(null);
  const [multiValue, setMultiValue] = useState<string[]>([]);

  return (
    <div>
      <Typography variant="h4" className="mb-4">Combobox</Typography>
      <Typography variant="body1" className="text-gray-600 mb-8">
        Searchable dropdown with autocomplete, single and multi-select support.
      </Typography>

      <div className="space-y-10 max-w-lg">
        {/* Single Select */}
        <section>
          <Typography variant="h6" className="mb-3">Single Select</Typography>
          <Combobox
            name="single"
            label="Select a fruit"
            optionsList={fruitOptions}
            onChange={(val) => setSingleValue(val as string)}
          />
          <div className="mt-2 p-3 bg-gray-100 rounded">
            <Typography variant="body2">
              Selected: <strong>{singleValue || 'None'}</strong>
            </Typography>
          </div>
        </section>

        {/* Multi Select */}
        <section>
          <Typography variant="h6" className="mb-3">Multi Select</Typography>
          <Combobox
            name="multi"
            label="Select fruits"
            optionsList={fruitOptions}
            multipleSelect
            showSelectionCount
            onChange={(val) => setMultiValue(val as string[])}
          />
          <div className="mt-2 p-3 bg-gray-100 rounded">
            <Typography variant="body2">
              Selected: <strong>{multiValue.length > 0 ? multiValue.join(', ') : 'None'}</strong>
            </Typography>
          </div>
        </section>

        {/* With Helper Text */}
        <section>
          <Typography variant="h6" className="mb-3">With Helper Text</Typography>
          <Combobox
            name="with-tip"
            label="Favorite fruit"
            optionsList={fruitOptions}
            tip="Choose the fruit you like most"
          />
        </section>

        {/* With Validation Error */}
        <section>
          <Typography variant="h6" className="mb-3">With Error</Typography>
          <Combobox
            name="with-error"
            label="Required fruit"
            optionsList={fruitOptions}
            errorMessages={['Please select a fruit']}
          />
        </section>

        {/* Disabled */}
        <section>
          <Typography variant="h6" className="mb-3">Disabled</Typography>
          <Combobox
            name="disabled"
            label="Disabled Combobox"
            optionsList={fruitOptions}
            disabled
          />
        </section>
      </div>
    </div>
  );
}
