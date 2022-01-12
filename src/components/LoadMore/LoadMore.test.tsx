import { render, screen } from '@testing-library/react';
import LoadMore from './';

const props = {
  startPage: 0,
  onClick: jest.fn(),
  typeQuery: 'Coins',
}

describe('Copyright', () => {
  const renderCopyright = () => render(<LoadMore {...props} />);

  test('should render content...', () => {
    renderCopyright();
    const loadmoreContainer = screen.getByTestId('loadmore-container');
    const load_more = screen.getByText(/Load more/i);
    expect(loadmoreContainer).toBeInTheDocument();
    expect(load_more).toBeInTheDocument();
  });
});