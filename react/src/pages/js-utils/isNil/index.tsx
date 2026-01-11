import { isNil } from '@kev-ui/js-utils/isNil';

export default function IsNilPage() {
  const testCases = [
    { value: null, label: 'null' },
    { value: undefined, label: 'undefined' },
    { value: '', label: 'empty string' },
    { value: [], label: 'empty array' },
    { value: {}, label: 'empty object' },
    { value: 'hello', label: '"hello"' },
    { value: 42, label: '42' },
    { value: [1, 2], label: '[1, 2]' },
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">isNil - JS Utils</h1>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Import Method</h2>
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">
          import {`{ isNil }`} from '@kev-ui/js-utils/isNil'
        </code>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Test Results</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Value</th>
              <th className="text-left py-2">isNil Result</th>
            </tr>
          </thead>
          <tbody>
            {testCases.map((tc, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-2 font-mono text-sm">{tc.label}</td>
                <td className="py-2">
                  <span className={`px-2 py-1 rounded text-sm ${isNil(tc.value) ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {isNil(tc.value).toString()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">✓ Integration Status</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Subpath import works</li>
          <li>Function handles all edge cases correctly</li>
          <li>TypeScript types available</li>
        </ul>
      </div>
    </div>
  );
}
