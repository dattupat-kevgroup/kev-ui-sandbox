import { Typography } from '@kev-ui/typography/Typography';

const subPages = [
  {
    title: 'TextField',
    href: '/form/textfield',
    description: 'Text input with labels, helper text, validation, multiline, and character counting.',
  },
  {
    title: 'Combobox',
    href: '/form/combobox',
    description: 'Searchable dropdown with single and multi-select support.',
  },
  {
    title: 'Validation',
    href: '/form/validation',
    description: 'Full form with sections, Zod validation, and i18n error messages.',
  },
];

export default function FormOverview() {
  return (
    <div>
      <Typography variant="h4" className="mb-4">Form</Typography>
      <Typography variant="body1" className="text-gray-600 mb-8">
        Form components for building validated, accessible forms. Explore the individual field
        demos below or see the full validation page for an end-to-end example.
      </Typography>

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

      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <Typography variant="body2" className="text-gray-500">
          More field components (DatePicker, TimePicker, etc.) will be added as they are developed.
        </Typography>
      </div>
    </div>
  );
}
