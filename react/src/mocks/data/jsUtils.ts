export interface UtilityMeta {
  id: string;
  name: string;
  description: string;
  signature: string;
  example: string;
  since: string;
}

export const seedUtilities: UtilityMeta[] = [
  {
    id: 'generateId',
    name: 'generateId',
    description: 'Generates a unique identifier string. Useful for creating keys for dynamic lists, form elements, and component instances.',
    signature: '() => string',
    example: "const id = generateId(); // 'kev_a1b2c3d4'",
    since: '1.0.0',
  },
  {
    id: 'isNil',
    name: 'isNil',
    description: 'Checks if a value is null or undefined. Returns true for null and undefined, false for all other values including empty strings, 0, and false.',
    signature: '(value: unknown) => boolean',
    example: "isNil(null) // true\nisNil('') // false",
    since: '1.0.0',
  },
];
