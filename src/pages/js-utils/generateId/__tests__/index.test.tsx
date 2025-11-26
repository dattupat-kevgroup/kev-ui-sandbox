import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GenerateIdPage from '../index';
import { generateId } from '@kev-ui/js-utils/generateId';

describe('GenerateId Integration', () => {
  it('renders the page', () => {
    render(
      <BrowserRouter>
        <GenerateIdPage />
      </BrowserRouter>
    );
    expect(screen.getByText('generateId - JS Utils')).toBeInTheDocument();
  });

  it('generates unique UUIDs', () => {
    const id1 = generateId();
    const id2 = generateId();

    expect(id1).toBeTruthy();
    expect(id2).toBeTruthy();
    expect(id1).not.toBe(id2);
    expect(id1).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });

  it('subpath import works', () => {
    const id = generateId();
    expect(typeof id).toBe('string');
  });
});
