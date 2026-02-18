import { useState } from 'react';
import { DropdownMenu } from '@kev-ui/dropdown-menu/DropdownMenu';
import { GlobeIcon } from '@kev-ui/icons';
import { useDropdownOptions } from '../../hooks/queries/useDropdownQueries';
import { useSelectDropdownOption } from '../../hooks/mutations/useDropdownMutations';

export default function DropdownMenuPage() {
  const { data: options, isPending, isError, error } = useDropdownOptions();
  const selectOption = useSelectDropdownOption();
  const [selectedLanguage, setSelectedLanguage] = useState<string | number>('en');

  const handleChange = (val: string | number) => {
    setSelectedLanguage(val);
    selectOption.mutate(String(val));
  };

  // Transform API data to DropdownMenu format
  const menuOptions = options?.map((opt) => ({ id: opt.id, label: opt.label })) ?? [];

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold mb-4">Dropdown Menu</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Import</h2>
        <code className="bg-gray-100 px-2 py-1 rounded text-sm block">
          import {`{ DropdownMenu }`} from &apos;@kev-ui/dropdown-menu/DropdownMenu&apos;
        </code>
      </div>

      {isPending && (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="animate-pulse">
            <div className="h-5 bg-gray-200 rounded w-1/4 mb-4" />
            <div className="h-10 bg-gray-200 rounded w-48" />
          </div>
        </div>
      )}

      {isError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">Failed to load options: {error.message}</p>
        </div>
      )}

      {options && (
        <>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              Label Trigger
              {selectOption.isPending && <span className="ml-2 text-sm text-gray-400">Saving...</span>}
            </h2>
            <DropdownMenu
              label="Select Language"
              optionsList={menuOptions}
              value={selectedLanguage}
              onChanged={handleChange}
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Icon Trigger</h2>
            <DropdownMenu
              icon={<GlobeIcon />}
              triggerMode="icon"
              optionsList={menuOptions}
              value={selectedLanguage}
              onChanged={handleChange}
              aria-label="Select language"
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Variants</h2>
            <div className="flex gap-4 flex-wrap">
              <DropdownMenu label="Contained" variant="contained" optionsList={menuOptions} value={selectedLanguage} onChanged={handleChange} />
              <DropdownMenu label="Outlined" variant="outlined" optionsList={menuOptions} value={selectedLanguage} onChanged={handleChange} />
              <DropdownMenu label="Text" variant="text" optionsList={menuOptions} value={selectedLanguage} onChanged={handleChange} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
