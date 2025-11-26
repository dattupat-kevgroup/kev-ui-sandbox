import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import IsNilPage from '../index';
import { isNil } from '@kev-ui/js-utils/isNil';

describe('IsNil Integration', () => {
  it('renders the page', () => {
    render(
      <BrowserRouter>
        <IsNilPage />
      </BrowserRouter>
    );
    expect(screen.getByText('isNil - JS Utils')).toBeInTheDocument();
  });

  it('correctly identifies nil values', () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
    expect(isNil('')).toBe(true);
    expect(isNil([])).toBe(true);
    expect(isNil({})).toBe(true);
  });

  it('correctly identifies non-nil values', () => {
    expect(isNil('hello')).toBe(false);
    expect(isNil(42)).toBe(false);
    expect(isNil([1, 2])).toBe(false);
    expect(isNil({ a: 1 })).toBe(false);
  });
});
