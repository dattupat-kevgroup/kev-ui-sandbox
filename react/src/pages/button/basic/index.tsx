import { Button } from '@kev-ui/button';
import * as ButtonModule from '@kev-ui/button';

export default function ButtonBasicPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Button - Basic Integration</h1>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Import Methods</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-sm text-gray-600 mb-2">
              1. Named Import
            </h3>
            <code className="bg-gray-100 px-2 py-1 rounded text-sm block mb-3">
              import {`{ Button }`} from '@kev-ui/button'
            </code>
            <div className="flex gap-2">
              <Button>Default Button</Button>
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-600 mb-2">
              2. Namespace Import
            </h3>
            <code className="bg-gray-100 px-2 py-1 rounded text-sm block mb-3">
              import * as ButtonModule from '@kev-ui/button'
            </code>
            <ButtonModule.Button variant="outlined">Outlined Button</ButtonModule.Button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Sizes</h3>
            <div className="flex gap-2 items-center">
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Variants</h3>
            <div className="flex gap-2">
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="text">Text</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">✓ Integration Status</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Package installed from Verdaccio</li>
          <li>Named import works</li>
          <li>Namespace import works</li>
          <li>TypeScript types available</li>
          <li>Component renders correctly</li>
          <li>Dependencies (design-system, js-utils) resolved</li>
        </ul>
      </div>
    </div>
  );
}
