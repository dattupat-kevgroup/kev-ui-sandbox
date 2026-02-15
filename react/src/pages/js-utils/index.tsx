import { Typography } from '@kev-ui/typography/Typography';

export default function JsUtilsOverview() {
  return (
    <div>
      <Typography variant="h4" className="mb-4">JS Utils Package</Typography>
      <Typography variant="body1" className="text-gray-600 mb-6">
        The JS Utils package provides utility functions for common JavaScript operations.
      </Typography>
      <div className="grid gap-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <Typography variant="h6" className="mb-2">Available Utilities</Typography>
          <ul className="list-disc list-inside text-gray-600">
            <li>generateId - Generate unique identifiers</li>
            <li>isNil - Check if value is null or undefined</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
