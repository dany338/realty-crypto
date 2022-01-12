import { render, screen } from '@testing-library/react';
import Copyright from './';

describe('Copyright', () => {
  const renderCopyright = () => render(<Copyright />);

  test('should render content...', () => {
    renderCopyright();
    const copyrightContainer = screen.getByTestId('copyright-container');
    const all_rights = screen.getByText(/all rights reserved/i);
    expect(copyrightContainer).toBeInTheDocument();
    expect(all_rights).toBeInTheDocument();
  });
});