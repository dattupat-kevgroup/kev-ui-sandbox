import { useMutation, useQueryClient } from '@tanstack/react-query';
import { formQueries } from '../queries/useFormQueries';
import type { SavedFormData, FormSubmission } from '../../mocks/data/form';

export function useUpdateFormField() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...data }: { id: string } & Partial<SavedFormData>) => {
      const res = await fetch(`/api/form/data/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to update field');
      return res.json() as Promise<SavedFormData>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: formQueries.all() });
    },
  });
}

export function useSubmitForm() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { formId: string; values: Record<string, string> }) => {
      const res = await fetch('/api/form/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to submit form');
      return res.json() as Promise<FormSubmission>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: formQueries.all() });
    },
  });
}
