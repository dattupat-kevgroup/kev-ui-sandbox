'use client';

import { TextField } from '@kev-ui/form-field';

export default function FormFieldBasicPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Form Field - Basic Integration (Next.js)</h1>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">TextField Component</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-sm text-gray-600 mb-2">
              1. Named Import
            </h3>
            <code className="bg-gray-100 px-2 py-1 rounded text-sm block mb-3">
              import {`{ TextField }`} from &apos;@kev-ui/form-field&apos;
            </code>
            <div className="space-y-4 max-w-sm">
              <TextField label="Email" placeholder="Enter your email" type="email" />
              <TextField label="Password" placeholder="Enter password" type="password" />
              <TextField label="Phone" placeholder="Enter phone number" type="tel" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Input Types</h2>
        <div className="space-y-4 max-w-sm">
          <TextField label="Text" placeholder="Regular text input" type="text" />
          <TextField label="Number" placeholder="Enter a number" type="number" />
          <TextField label="URL" placeholder="https://example.com" type="url" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">States</h2>
        <div className="space-y-4 max-w-sm">
          <TextField label="Disabled Input" placeholder="This is disabled" disabled />
          <TextField placeholder="No label - just placeholder" />
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Integration Status</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Package installed from Verdaccio</li>
          <li>Uses ShadCN Input and Label under the hood</li>
          <li>TypeScript types available</li>
          <li>Component renders correctly in Next.js</li>
        </ul>
      </div>
    </div>
  );
}
