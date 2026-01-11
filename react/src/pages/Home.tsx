export default function Home() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">KEV-UI Sandbox</h1>
      <p className="mb-4">
        This application tests all @kev-ui packages installed from Verdaccio.
      </p>

      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Purpose</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Verify packages install correctly from Verdaccio registry</li>
            <li>Test default imports, named imports, and subpath imports (tree-shaking)</li>
            <li>Validate TypeScript types are exported properly</li>
            <li>Ensure i18n translations work as expected</li>
            <li>Confirm all package dependencies resolve correctly</li>
          </ul>
        </div>
      </div>

      <div className="card mt-6 bg-primary_blue-50">
        <div className="card-body">
          <h2 className="card-title">Getting Started</h2>
          <p className="mb-2">Select a package from the sidebar to view examples.</p>
          <p>Each example demonstrates different import methods and includes tests.</p>
        </div>
      </div>
    </div>
  );
}
