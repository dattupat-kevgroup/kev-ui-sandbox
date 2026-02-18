import { useDashboard } from '../services/queries/useHomeQueries';

export default function Home() {
  const { data: stats, isPending, isError, error } = useDashboard();

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">KEV-UI Sandbox</h1>
      <p className="mb-4">
        This application tests all @kev-ui packages installed from Verdaccio.
      </p>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Dashboard
          {isPending && <span className="ml-2 text-sm text-gray-400">Loading...</span>}
        </h2>

        {isPending && (
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse p-4 border rounded">
                <div className="h-8 bg-gray-200 rounded w-12 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-24" />
              </div>
            ))}
          </div>
        )}

        {isError && (
          <p className="text-red-600 text-sm">Failed to load dashboard: {error.message}</p>
        )}

        {stats && (
          <>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 border rounded text-center">
                <div className="text-2xl font-bold text-blue-600">{String(stats.totalPackages)}</div>
                <div className="text-sm text-gray-600">Packages</div>
              </div>
              <div className="p-4 border rounded text-center">
                <div className="text-2xl font-bold text-green-600">{String(stats.totalComponents)}</div>
                <div className="text-sm text-gray-600">Components</div>
              </div>
              <div className="p-4 border rounded text-center">
                <div className="text-2xl font-bold text-purple-600">{String(stats.totalUtilities)}</div>
                <div className="text-sm text-gray-600">Utilities</div>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Registry: <code className="bg-gray-100 px-1 rounded">{stats.registryUrl}</code>
              </p>
              <p className="text-sm text-gray-600">
                Last published: {new Date(stats.lastPublished).toLocaleDateString()}
              </p>
            </div>

            <h3 className="font-semibold mb-2">Package Status</h3>
            <div className="grid grid-cols-2 gap-2">
              {stats.packages.map((pkg) => (
                <div key={pkg.id} className="flex items-center justify-between p-2 border rounded text-sm">
                  <span className="font-mono">{pkg.name}</span>
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    pkg.status === 'passing' ? 'bg-green-100 text-green-700' :
                    pkg.status === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {pkg.status}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="card bg-primary_blue-50">
        <div className="card-body">
          <h2 className="card-title">Getting Started</h2>
          <p className="mb-2">Select a package from the sidebar to view examples.</p>
          <p>Each example demonstrates different import methods and includes tests.</p>
        </div>
      </div>
    </div>
  );
}
