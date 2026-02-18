import { useState } from 'react';
import { Typography } from '@kev-ui/typography/Typography';
import { Combobox } from '@kev-ui/form-field/Combobox';
import { useComboboxOptions } from '../../../services/queries/useComboboxQueries';

export default function FormComboboxPage() {
  const { data: options, isPending, isError, error } = useComboboxOptions();
  const [singleValue, setSingleValue] = useState<string | null>(null);
  const [multiValue, setMultiValue] = useState<string[]>([]);

  return (
    <div>
      <Typography variant="h4" className="mb-4">Combobox</Typography>
      <Typography variant="body1" className="text-gray-600 mb-8">
        Searchable dropdown with autocomplete, single and multi-select support.
      </Typography>

      {isPending && (
        <div className="space-y-6 max-w-lg">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
              <div className="h-10 bg-gray-200 rounded w-full" />
            </div>
          ))}
        </div>
      )}

      {isError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <Typography variant="body2" className="text-red-600">
            Failed to load options: {error.message}
          </Typography>
        </div>
      )}

      {options && (
        <div className="space-y-10 max-w-lg">
          {/* Single Select */}
          <section>
            <Typography variant="h6" className="mb-3">Single Select</Typography>
            <Combobox
              name="single"
              label="Select a fruit"
              optionsList={options}
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
              optionsList={options}
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
              optionsList={options}
              tip="Choose the fruit you like most"
            />
          </section>

          {/* With Validation Error */}
          <section>
            <Typography variant="h6" className="mb-3">With Error</Typography>
            <Combobox
              name="with-error"
              label="Required fruit"
              optionsList={options}
              errorMessages={['Please select a fruit']}
            />
          </section>

          {/* Disabled */}
          <section>
            <Typography variant="h6" className="mb-3">Disabled</Typography>
            <Combobox
              name="disabled"
              label="Disabled Combobox"
              optionsList={options}
              disabled
            />
          </section>
        </div>
      )}
    </div>
  );
}
