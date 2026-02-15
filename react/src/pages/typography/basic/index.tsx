import { Typography } from '@kev-ui/typography/Typography';
import { useTranslation } from 'react-i18next';

export default function TypographyBasicPage() {
  const { t } = useTranslation('@kev-ui/typography');

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Typography - Basic Integration</h1>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Import Method</h2>
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">
          import {`{ Typography }`} from '@kev-ui/typography/Typography'
        </code>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Examples</h2>
        <div className="space-y-4">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="body1">Body text 1 - Regular paragraph text</Typography>
          <Typography variant="body2">Body text 2 - Secondary body text</Typography>
          <Typography variant="caption">Caption text - Small helper text</Typography>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Alignment</h2>
        <div className="space-y-2">
          <Typography align="left">Left aligned text</Typography>
          <Typography align="center">Center aligned text</Typography>
          <Typography align="right">Right aligned text</Typography>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">i18n Translation Demo</h2>
        <Typography variant="body1">{t('Typography.copyright')}</Typography>
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Integration Status</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Package installed from Verdaccio</li>
          <li>Subpath import works</li>
          <li>TypeScript types available</li>
          <li>Component renders correctly</li>
          <li>i18n translations work</li>
        </ul>
      </div>
    </div>
  );
}
