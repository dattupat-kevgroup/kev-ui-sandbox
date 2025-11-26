import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TypographyBasicPage from '../index';
import { Typography } from '@kev-ui/typography';

describe('Typography Integration', () => {
  it('renders the page', () => {
    render(
      <BrowserRouter>
        <TypographyBasicPage />
      </BrowserRouter>
    );
    expect(screen.getByText('Typography - Basic Integration')).toBeInTheDocument();
  });

  it('renders typography component', () => {
    render(<Typography>Test Text</Typography>);
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  it('supports different variants', () => {
    render(<Typography variant="h1">Heading</Typography>);
    expect(screen.getByText('Heading')).toBeInTheDocument();
  });
});
