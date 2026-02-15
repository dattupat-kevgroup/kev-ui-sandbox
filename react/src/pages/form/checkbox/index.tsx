import { useState } from 'react';
import { Typography } from '@kev-ui/typography/Typography';

export default function FormCheckboxPage() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Typography variant="h4" className="mb-4">Checkbox</Typography>
      <Typography variant="body1" className="text-gray-600 mb-6">
        Checkbox component for boolean selections.
      </Typography>

      <div className="space-y-6 max-w-md">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="w-5 h-5"
          />
          <span>Basic Checkbox</span>
        </label>

        <div className="p-4 bg-gray-100 rounded">
          <Typography variant="body2">
            Checked: <strong>{checked ? 'Yes' : 'No'}</strong>
          </Typography>
        </div>
      </div>
    </div>
  );
}
