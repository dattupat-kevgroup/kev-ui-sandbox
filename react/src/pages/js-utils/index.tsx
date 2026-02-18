import { Typography } from '@kev-ui/typography/Typography';
import { useUtilities } from '../../hooks/queries/useJsUtilsQueries';

export default function JsUtilsOverview() {
  const { data: utilities, isPending, isError, error } = useUtilities();

  return (
    <div>
      <Typography variant="h4" className="mb-4">JS Utils Package</Typography>
      <Typography variant="body1" className="text-gray-600 mb-6">
        The JS Utils package provides utility functions for common JavaScript operations.
      </Typography>

      <div className="bg-white p-6 rounded-lg shadow">
        <Typography variant="h6" className="mb-4">
          Available Utilities
          {isPending && <span className="ml-2 text-sm text-gray-400">Loading...</span>}
        </Typography>

        {isPending && (
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="animate-pulse p-4 border rounded">
                <div className="h-5 bg-gray-200 rounded w-32 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-full mb-1" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        )}

        {isError && (
          <p className="text-red-600 text-sm">Failed to load utilities: {error.message}</p>
        )}

        {utilities && (
          <div className="space-y-4">
            {utilities.map((util) => (
              <div key={util.id} className="p-4 border rounded">
                <div className="flex items-baseline gap-2 mb-1">
                  <code className="font-bold text-blue-600">{util.name}</code>
                  <span className="text-xs text-gray-400">v{util.since}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{util.description}</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">{util.signature}</code>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
