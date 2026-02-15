import { Typography } from '@kev-ui/typography/Typography';

export default function FormOverview() {
  return (
    <div>
      <Typography variant="h4" className="mb-4">Form Package</Typography>
      <Typography variant="body1" className="text-gray-600 mb-6">
        The Form package provides components for building forms with validation support.
      </Typography>
      <div className="grid gap-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <Typography variant="h6" className="mb-2">Features</Typography>
          <ul className="list-disc list-inside text-gray-600">
            <li>Form validation with Zod schemas</li>
            <li>TextField, Combobox components</li>
            <li>Error handling and display</li>
            <li>Accessible form controls</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
