import { Typography } from '@kev-ui/typography/Typography';

const variants = [
  { variant: 'h1' as const, label: 'h1 — Heading 1' },
  { variant: 'h2' as const, label: 'h2 — Heading 2' },
  { variant: 'h3' as const, label: 'h3 — Heading 3' },
  { variant: 'h4' as const, label: 'h4 — Heading 4' },
  { variant: 'h5' as const, label: 'h5 — Heading 5' },
  { variant: 'h6' as const, label: 'h6 — Heading 6' },
  { variant: 'subtitle1' as const, label: 'subtitle1 — Subtitle 1' },
  { variant: 'subtitle2' as const, label: 'subtitle2 — Subtitle 2' },
  { variant: 'body1' as const, label: 'body1 — Body 1 (default)' },
  { variant: 'body2' as const, label: 'body2 — Body 2' },
  { variant: 'caption' as const, label: 'caption — Caption text' },
  { variant: 'overline' as const, label: 'overline — Overline text' },
];

export default function TypographyOverview() {
  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold mb-4">Typography</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Import</h2>
        <code className="bg-gray-100 px-2 py-1 rounded text-sm block">
          import {`{ Typography }`} from '@kev-ui/typography/Typography'
        </code>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-6">All Variants</h2>
        <div className="space-y-4">
          {variants.map(({ variant, label }) => (
            <div key={variant} className="flex items-baseline gap-4 border-b pb-3 last:border-b-0">
              <code className="text-xs text-gray-400 w-24 shrink-0 font-mono">{variant}</code>
              <Typography variant={variant}>{label}</Typography>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Alignment</h2>
        <div className="space-y-2">
          <Typography align="left">Left aligned text</Typography>
          <Typography align="center">Center aligned text</Typography>
          <Typography align="right">Right aligned text</Typography>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">noWrap (truncation)</h2>
        <div className="w-64 border p-2">
          <Typography noWrap>
            This is a very long text that should be truncated with an ellipsis when it overflows the container
          </Typography>
        </div>
      </div>
    </div>
  );
}
