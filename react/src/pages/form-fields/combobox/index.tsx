import { Combobox } from '@kev-ui/form-field/Combobox';

const fruitOptions = [
  { id: 'apple', value: 'apple', label: 'Apple' },
  { id: 'banana', value: 'banana', label: 'Banana' },
  { id: 'cherry', value: 'cherry', label: 'Cherry' },
  { id: 'grape', value: 'grape', label: 'Grape' },
  { id: 'orange', value: 'orange', label: 'Orange' },
];

export default function ComboboxPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold mb-4">Combobox</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Single Select</h2>
        <Combobox
          name="fruit"
          label="Select a Fruit"
          placeholder="Choose a fruit..."
          optionsList={fruitOptions}
        />
      </div>
    </div>
  );
}
