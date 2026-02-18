import { useState } from 'react';
import { generateId } from '@kev-ui/js-utils/generateId';
import * as JsUtils from '@kev-ui/js-utils';
import { useUtilityDetail } from '../../../hooks/queries/useJsUtilsQueries';

export default function GenerateIdPage() {
  const [id1] = useState(() => generateId());
  const [id2] = useState(() => JsUtils.generateId());
  const { data: meta, isPending } = useUtilityDetail('generateId');

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">generateId - JS Utils</h1>

      {isPending && (
        <div className="bg-white p-6 rounded-lg shadow mb-6 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-full mb-2" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
      )}

      {meta && (
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-600 text-sm mb-2">{meta.description}</p>
          <code className="text-xs bg-gray-100 px-2 py-1 rounded">{meta.signature}</code>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Import Methods</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-sm text-gray-600 mb-1">
              1. Subpath Import (Tree-shaking)
            </h3>
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">
              import {`{ generateId }`} from &apos;@kev-ui/js-utils/generateId&apos;
            </code>
            <p className="mt-2">Generated ID: <span className="font-mono font-bold">{id1}</span></p>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-600 mb-1">
              2. Named Import from Main
            </h3>
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">
              import * as JsUtils from &apos;@kev-ui/js-utils&apos;
            </code>
            <p className="mt-2">Generated ID: <span className="font-mono font-bold">{id2}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
