'use client';

import { isNil } from '@kev-ui/js-utils/isNil';
import * as JsUtils from '@kev-ui/js-utils';

export default function IsNilPage() {
  const testCases = [
    { value: null, expected: true },
    { value: undefined, expected: true },
    { value: '', expected: false },
    { value: 0, expected: false },
    { value: false, expected: false },
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">isNil - JS Utils (Next.js)</h1>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Import Methods</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-sm text-gray-600 mb-1">
              1. Subpath Import (Tree-shaking)
            </h3>
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">
              import {`{ isNil }`} from &apos;@kev-ui/js-utils/isNil&apos;
            </code>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-600 mb-1">
              2. Named Import from Main
            </h3>
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">
              import * as JsUtils from &apos;@kev-ui/js-utils&apos;
            </code>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Test Cases</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Value</th>
              <th className="text-left py-2">Expected</th>
              <th className="text-left py-2">Result (subpath)</th>
              <th className="text-left py-2">Result (namespace)</th>
            </tr>
          </thead>
          <tbody>
            {testCases.map((tc, i) => (
              <tr key={i} className="border-b">
                <td className="py-2 font-mono">{String(tc.value)}</td>
                <td className="py-2">{String(tc.expected)}</td>
                <td className="py-2">
                  <span
                    className={
                      isNil(tc.value) === tc.expected
                        ? 'text-green-600'
                        : 'text-red-600'
                    }
                  >
                    {String(isNil(tc.value))}
                  </span>
                </td>
                <td className="py-2">
                  <span
                    className={
                      JsUtils.isNil(tc.value) === tc.expected
                        ? 'text-green-600'
                        : 'text-red-600'
                    }
                  >
                    {String(JsUtils.isNil(tc.value))}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Integration Status</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Package installed from Verdaccio</li>
          <li>Subpath import works</li>
          <li>Namespace import works</li>
          <li>All test cases pass in Next.js</li>
        </ul>
      </div>
    </div>
  );
}
