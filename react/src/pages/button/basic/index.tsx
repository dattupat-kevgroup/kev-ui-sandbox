import { Button } from '@kev-ui/button/Button';
import { useButtonConfigs } from '../../../hooks/queries/useButtonQueries';

export default function ButtonBasicPage() {
  const { data: configs, isPending, isError, error } = useButtonConfigs();

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Button - Basic Integration</h1>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Import Method</h2>
        <code className="bg-gray-100 px-2 py-1 rounded text-sm block mb-3">
          import {`{ Button }`} from &apos;@kev-ui/button/Button&apos;
        </code>
        <div className="flex gap-2">
          <Button>Default Button</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">
          Configs from API
          {isPending && <span className="ml-2 text-sm text-gray-400">Loading...</span>}
        </h2>

        {isPending && (
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-10 w-28 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        )}

        {isError && (
          <p className="text-red-600 text-sm">Failed to load configs: {error.message}</p>
        )}

        {configs && (
          <div className="flex gap-2 flex-wrap">
            {configs.map((cfg) => (
              <Button
                key={cfg.id}
                variant={cfg.variant as 'contained' | 'outlined' | 'text'}
                color={cfg.color as 'primary' | 'secondary'}
                size={cfg.size as 'small' | 'medium' | 'large'}
                disabled={cfg.disabled}
              >
                {cfg.label}
              </Button>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Sizes</h2>
        <div className="flex gap-2 items-center">
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Variants</h2>
        <div className="flex gap-2">
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
        </div>
      </div>
    </div>
  );
}
