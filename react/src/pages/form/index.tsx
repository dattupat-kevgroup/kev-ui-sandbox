import { Typography } from '@kev-ui/typography/Typography';
import { useFormPages } from '../../hooks/queries/useFormQueries';

export default function FormOverview() {
  const { data: subPages, isPending, isError, error } = useFormPages();

  return (
    <div>
      <Typography variant="h4" className="mb-4">Form</Typography>
      <Typography variant="body1" className="text-gray-600 mb-8">
        Form components for building validated, accessible forms. Explore the individual field
        demos below or see the full validation page for an end-to-end example.
      </Typography>

      {isPending && (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 bg-white rounded-lg shadow animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-1/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
            </div>
          ))}
        </div>
      )}

      {isError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <Typography variant="body2" className="text-red-600">
            Failed to load form pages: {error.message}
          </Typography>
        </div>
      )}

      {subPages && (
        <div className="grid gap-4">
          {subPages.map((page) => (
            <a
              key={page.href}
              href={page.href}
              className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <Typography variant="h6" className="mb-1">{page.title}</Typography>
              <Typography variant="body2" className="text-gray-600">
                {page.description}
              </Typography>
            </a>
          ))}
        </div>
      )}

      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <Typography variant="body2" className="text-gray-500">
          More field components (DatePicker, TimePicker, etc.) will be added as they are developed.
        </Typography>
      </div>
    </div>
  );
}
