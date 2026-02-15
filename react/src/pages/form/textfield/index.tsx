import { useState } from 'react';
import { Typography } from '@kev-ui/typography/Typography';
import { TextField } from '@kev-ui/form-field/TextField';

export default function FormTextFieldPage() {
  const [value, setValue] = useState('');

  return (
    <div>
      <Typography variant="h4" className="mb-4">TextField</Typography>
      <Typography variant="body1" className="text-gray-600 mb-6">
        Text input field with label, helper text, and error states.
      </Typography>

      <div className="space-y-6 max-w-md">
        <TextField
          name="basic"
          label="Basic TextField"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <TextField
          name="helper"
          label="With Helper Text"
          helperText="This is helper text"
        />

        <TextField
          name="error"
          label="With Error"
          error="This field has an error"
        />

        <TextField
          name="disabled"
          label="Disabled"
          disabled
          value="Disabled value"
        />

        <TextField
          name="required"
          label="Required Field"
          required
        />
      </div>
    </div>
  );
}
