import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, type iFormProps } from '@kev-ui/form';
import { Button } from '@kev-ui/button';
import { registerFormTranslations } from '@kev-ui/form/locales';
import { registerFormFieldTranslations } from '@kev-ui/form-field/locales';
import { registerFormValidationTranslations } from '@kev-ui/form-validation/locales';
import { eElementType } from '@kev-ui/form-utilities';
import { useSubmitForm } from '../../../hooks/mutations/useFormMutations';

// Form ref type (not exported from main package)
interface iFormRef {
  reset: () => void;
  getValues: () => Record<string, unknown>;
}

// Register translations on module load
const registerTranslations = (i18n: typeof import('i18next').default) => {
  registerFormTranslations(i18n);
  registerFormFieldTranslations(i18n);
  registerFormValidationTranslations(i18n);
};

const validationForm = {
  id: 'validation-test-form',
  sections: [
    {
      id: 'section-required',
      elementType: 'SECTION' as const,
      title: 'Required Field Validation',
      showTitle: true,
      numberOfColumns: 2,
      sequence: 0,
    },
    {
      id: 'section-length',
      elementType: 'SECTION' as const,
      title: 'Length Validation',
      showTitle: true,
      numberOfColumns: 2,
      sequence: 1,
    },
    {
      id: 'section-format',
      elementType: 'SECTION' as const,
      title: 'Format Validation',
      showTitle: true,
      numberOfColumns: 2,
      sequence: 2,
    },
    {
      id: 'section-selection',
      elementType: 'SECTION' as const,
      title: 'Selection Validation',
      showTitle: true,
      numberOfColumns: 2,
      sequence: 3,
    },
  ],
  elements: [
    // Required field validations
    {
      id: 'required-text',
      sectionId: 'section-required',
      sequence: 0,
      elementType: eElementType.SHORT_ANSWER,
      enableValidation: true,
      isRequired: true,
      label: 'Required Text Field',
      placeholder: 'This field is required',
      tip: 'Leave empty and submit to see the required error',
      inputWidth: 100,
    },
    {
      id: 'optional-text',
      sectionId: 'section-required',
      sequence: 1,
      elementType: eElementType.SHORT_ANSWER,
      enableValidation: true,
      isRequired: false,
      label: 'Optional Text Field',
      placeholder: 'This field is optional',
      tip: 'This field can be left empty',
      inputWidth: 100,
    },
    // Length validations
    {
      id: 'min-length-text',
      sectionId: 'section-length',
      sequence: 0,
      elementType: eElementType.SHORT_ANSWER,
      enableValidation: true,
      isRequired: false,
      label: 'Minimum 5 Characters',
      placeholder: 'Enter at least 5 characters',
      minCharacters: 5,
      inputWidth: 100,
    },
    {
      id: 'max-length-text',
      sectionId: 'section-length',
      sequence: 1,
      elementType: eElementType.SHORT_ANSWER,
      enableValidation: true,
      isRequired: false,
      label: 'Maximum 10 Characters',
      placeholder: 'Enter up to 10 characters',
      maxCharacters: 10,
      inputWidth: 100,
    },
    {
      id: 'long-answer',
      sectionId: 'section-length',
      sequence: 2,
      elementType: eElementType.LONG_ANSWER,
      enableValidation: true,
      isRequired: false,
      label: 'Long Answer (10-100 chars)',
      placeholder: 'Enter between 10 and 100 characters',
      minCharacters: 10,
      maxCharacters: 100,
      inputWidth: 100,
    },
    // Format validations
    {
      id: 'email-field',
      sectionId: 'section-format',
      sequence: 0,
      elementType: eElementType.SHORT_ANSWER,
      enableValidation: true,
      isRequired: false,
      textType: 'email' as const,
      label: 'Email Address',
      placeholder: 'Enter a valid email',
      inputWidth: 100,
    },
    {
      id: 'phone-field',
      sectionId: 'section-format',
      sequence: 1,
      elementType: eElementType.SHORT_ANSWER,
      enableValidation: true,
      isRequired: false,
      textType: 'phone' as const,
      label: 'Phone Number',
      placeholder: 'Enter a valid phone number',
      inputWidth: 100,
    },
    // Selection validations
    {
      id: 'required-dropdown',
      sectionId: 'section-selection',
      sequence: 0,
      elementType: eElementType.COMBOBOX_SINGLE,
      enableValidation: true,
      isRequired: true,
      label: 'Required Dropdown',
      optionsList: [
        { id: 'opt1', label: 'Option 1', value: 'opt1' },
        { id: 'opt2', label: 'Option 2', value: 'opt2' },
        { id: 'opt3', label: 'Option 3', value: 'opt3' },
      ],
      inputWidth: 100,
    },
    {
      id: 'multi-select',
      sectionId: 'section-selection',
      sequence: 1,
      elementType: eElementType.COMBOBOX_MULTIPLE,
      enableValidation: true,
      isRequired: true,
      label: 'Select 2-3 Options',
      optionsList: [
        { id: 'a', label: 'Choice A', value: 'a' },
        { id: 'b', label: 'Choice B', value: 'b' },
        { id: 'c', label: 'Choice C', value: 'c' },
        { id: 'd', label: 'Choice D', value: 'd' },
        { id: 'e', label: 'Choice E', value: 'e' },
      ],
      minSelection: 2,
      maxSelection: 3,
      inputWidth: 100,
    },
  ],
  logics: [],
};

export default function FormValidationPage() {
  const { t, i18n } = useTranslation();
  const formRef = useRef<iFormRef>(null);
  const submitForm = useSubmitForm();

  // Register translations
  registerTranslations(i18n);

  const handleSubmit = (data: Record<string, unknown>) => {
    submitForm.mutate(
      { formId: validationForm.id, values: data as Record<string, string> },
      {
        onSuccess: () => {
          alert('Form submitted successfully!');
        },
      },
    );
  };

  const handleReset = () => {
    formRef.current?.reset();
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-2">Form Validation Test</h2>
        <p className="text-gray-600 mb-4">
          Current language: <strong>{i18n.language}</strong>
        </p>
        <p className="text-gray-600 text-sm">
          Use the language toggle in the header (EN-CA, EN-US, FR-CA) to see validation messages in different languages.
          Try submitting the form with invalid data to see the translated error messages.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <Form
          ref={formRef}
          form={validationForm}
          onSubmit={handleSubmit}
        />

        <div className="flex gap-3 mt-6 pt-4 border-t">
          <Button
            type="submit"
            form={validationForm.id}
            color="primary"
            disabled={submitForm.isPending}
          >
            {submitForm.isPending ? 'Submitting...' : 'Submit Form'}
          </Button>
          <Button type="button" variant="outlined" onClick={handleReset}>
            Reset Form
          </Button>
        </div>

        {submitForm.isError && (
          <p className="text-red-600 text-sm mt-2">
            Submission failed: {submitForm.error.message}
          </p>
        )}
      </div>
    </div>
  );
}
