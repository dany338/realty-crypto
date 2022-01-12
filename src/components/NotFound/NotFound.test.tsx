import { render, screen } from '@testing-library/react';
import NotFound from './';

const props = {
  onChangeQuery: jest.fn(),
  typeQuery: 'Coins',
}

describe('Copyright', () => {
  const renderNotFound = () => render(<NotFound {...props} />);

  test('should render content...', () => {
    renderNotFound();
    const notfoundContainer = screen.getByTestId('notfound-container');
    const donthavecoins = screen.getByText(/We don't have coins yet, register and add new coins./i);
    expect(notfoundContainer).toBeInTheDocument();
    expect(donthavecoins).toBeInTheDocument();
  });
});