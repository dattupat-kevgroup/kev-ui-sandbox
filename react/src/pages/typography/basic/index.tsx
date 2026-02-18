import { Typography } from '@kev-ui/typography/Typography';
import { useTranslation } from 'react-i18next';
import { useContentBlocks } from '../../../hooks/queries/useTypographyQueries';

export default function TypographyBasicPage() {
  const { t } = useTranslation('@kev-ui/typography');
  const { data: blocks, isPending, isError, error } = useContentBlocks();

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Typography - Basic Integration</h1>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Import Method</h2>
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">
          import {`{ Typography }`} from &apos;@kev-ui/typography/Typography&apos;
        </code>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">
          Content from API
          {isPending && <span className="ml-2 text-sm text-gray-400">Loading...</span>}
        </h2>

        {isPending && (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-5 bg-gray-200 rounded w-3/4" />
              </div>
            ))}
          </div>
        )}

        {isError && (
          <p className="text-red-600 text-sm">Failed to load content: {error.message}</p>
        )}

        {blocks && (
          <div className="space-y-2">
            {blocks.map((block) => (
              <Typography
                key={block.id}
                variant={block.variant as 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption'}
                align={block.alignment}
              >
                {block.text}
              </Typography>
            ))}
          </div>
        )}
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
    </div>
  );
}
