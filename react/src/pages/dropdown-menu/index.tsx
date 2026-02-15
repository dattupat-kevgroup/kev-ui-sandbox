import { useState } from 'react';
import { DropdownMenu } from '@kev-ui/dropdown-menu/DropdownMenu';
import { GlobeIcon } from '@kev-ui/icons';

const languageOptions = [
  { id: 'en', label: 'English' },
  { id: 'fr', label: 'French' },
  { id: 'es', label: 'Spanish' },
];

export default function DropdownMenuPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | number>('en');

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold mb-4">Dropdown Menu</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Import</h2>
        <code className="bg-gray-100 px-2 py-1 rounded text-sm block">
          import {`{ DropdownMenu }`} from '@kev-ui/dropdown-menu/DropdownMenu'
        </code>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Label Trigger</h2>
        <DropdownMenu
          label="Select Language"
          optionsList={languageOptions}
          value={selectedLanguage}
          onChanged={setSelectedLanguage}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Icon Trigger</h2>
        <DropdownMenu
          icon={<GlobeIcon />}
          triggerMode="icon"
          optionsList={languageOptions}
          value={selectedLanguage}
          onChanged={setSelectedLanguage}
          aria-label="Select language"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Variants</h2>
        <div className="flex gap-4 flex-wrap">
          <DropdownMenu
            label="Contained"
            variant="contained"
            optionsList={languageOptions}
            value={selectedLanguage}
            onChanged={setSelectedLanguage}
          />
          <DropdownMenu
            label="Outlined"
            variant="outlined"
            optionsList={languageOptions}
            value={selectedLanguage}
            onChanged={setSelectedLanguage}
          />
          <DropdownMenu
            label="Text"
            variant="text"
            optionsList={languageOptions}
            value={selectedLanguage}
            onChanged={setSelectedLanguage}
          />
        </div>
      </div>
    </div>
  );
}
