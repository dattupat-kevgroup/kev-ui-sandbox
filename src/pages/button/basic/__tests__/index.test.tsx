import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ButtonBasicPage from '../index';
import { Button } from '@kev-ui/button';

describe('Button Integration', () => {
  it('renders the page', () => {
    render(
      <BrowserRouter>
        <ButtonBasicPage />
      </BrowserRouter>
    );
    expect(screen.getByText('Button - Basic Integration')).toBeInTheDocument();
  });

  it('renders button component', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('supports different variants', () => {
    const { rerender } = render(<Button variant="contained">Contained</Button>);
    expect(screen.getByText('Contained')).toBeInTheDocument();

    rerender(<Button variant="outlined">Outlined</Button>);
    expect(screen.getByText('Outlined')).toBeInTheDocument();
  });
});
