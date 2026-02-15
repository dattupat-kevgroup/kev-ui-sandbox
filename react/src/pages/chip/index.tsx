import { Chip } from '@kev-ui/chip/Chip';

export default function ChipPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold mb-4">Chip</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Basic Chip</h2>
        <Chip>Default Chip</Chip>
      </div>
    </div>
  );
}
