export default function Home() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">KEV-UI Sandbox (Next.js)</h1>
      <p className="mb-4">
        This application tests all @kev-ui packages installed from Verdaccio in
        a Next.js environment.
      </p>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Purpose</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Verify packages work correctly in Next.js App Router</li>
          <li>Test AppLink auto-detection with Next.js Link</li>
          <li>Validate TypeScript types work with React 19</li>
          <li>Confirm all package exports resolve correctly</li>
        </ul>
      </div>

      <div className="bg-blue-100 rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Getting Started</h2>
        <p className="mb-2">Select a package from the sidebar to view examples.</p>
        <p>Each example demonstrates that @kev-ui packages work in Next.js.</p>
      </div>
    </div>
  );
}
