import { useMutation, useQueryClient } from '@tanstack/react-query';
import { dropdownQueries } from '../queries/useDropdownQueries';

export function useSelectDropdownOption() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (optionId: string) => {
      const res = await fetch(`/api/dropdown/select/${optionId}`, { method: 'PUT' });
      if (!res.ok) throw new Error('Failed to select option');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: dropdownQueries.all() });
    },
  });
}
