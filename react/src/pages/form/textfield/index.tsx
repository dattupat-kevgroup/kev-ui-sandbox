import { useState } from 'react';
import { Typography } from '@kev-ui/typography/Typography';
import { TextField } from '@kev-ui/form-field/TextField';

export default function FormTextFieldPage() {
  const [basicValue, setBasicValue] = useState('');

  return (
    <div>
      <Typography variant="h4" className="mb-4">TextField</Typography>
      <Typography variant="body1" className="text-gray-600 mb-8">
        Text input field with label, helper text, validation, and multiple variants.
      </Typography>

      <div className="space-y-10 max-w-lg">
        {/* Basic */}
        <section>
          <Typography variant="h6" className="mb-3">Basic</Typography>
          <TextField
            name="basic"
            label="Basic TextField"
            value={basicValue}
            onChange={(e) => setBasicValue(e.target.value)}
          />
        </section>

        {/* States */}
        <section>
          <Typography variant="h6" className="mb-3">States</Typography>
          <div className="space-y-4">
            <TextField
              name="disabled"
              label="Disabled"
              disabled
              value="Disabled value"
            />
            <TextField
              name="view-only"
              label="View Only"
              isViewOnly
              value="View only value"
            />
          </div>
        </section>

        {/* Helper & Error Text */}
        <section>
          <Typography variant="h6" className="mb-3">Helper &amp; Error Text</Typography>
          <div className="space-y-4">
            <TextField
              name="helper"
              label="With Helper Text"
              tip="This is helper text displayed below the field"
            />
            <TextField
              name="error"
              label="With Error"
              errorMessages={['This field has an error']}
            />
          </div>
        </section>

        {/* Required */}
        <section>
          <Typography variant="h6" className="mb-3">Required</Typography>
          <TextField
            name="required"
            label="Required Field"
            validation={{ required: true }}
            showRequiredIcon
          />
        </section>

        {/* Multiline */}
        <section>
          <Typography variant="h6" className="mb-3">Multiline (Textarea)</Typography>
          <TextField
            name="multiline"
            label="Long Answer"
            multiline
            rows={4}
            placeholder="Enter a longer response..."
          />
        </section>

        {/* Text Types */}
        <section>
          <Typography variant="h6" className="mb-3">Text Types</Typography>
          <div className="space-y-4">
            <TextField
              name="email"
              label="Email"
              textType="email"
              placeholder="user@example.com"
            />
            <TextField
              name="phone"
              label="Phone"
              textType="phone"
              placeholder="(555) 123-4567"
            />
            <TextField
              name="url"
              label="URL"
              textType="url"
              placeholder="https://example.com"
            />
          </div>
        </section>

        {/* Character Count */}
        <section>
          <Typography variant="h6" className="mb-3">Character Count</Typography>
          <div className="space-y-4">
            <TextField
              name="char-count-max"
              label="Max 50 Characters"
              showCharacterCount
              validation={{ maxCharacters: 50 }}
            />
            <TextField
              name="char-count-range"
              label="5–100 Characters"
              showCharacterCount
              validation={{ minCharacters: 5, maxCharacters: 100 }}
              multiline
              rows={3}
            />
          </div>
        </section>

        {/* Clear Button */}
        <section>
          <Typography variant="h6" className="mb-3">Clear Button</Typography>
          <TextField
            name="clearable"
            label="Clearable Field"
            showClearButton
            placeholder="Type something, then clear it"
          />
        </section>
      </div>
    </div>
  );
}
