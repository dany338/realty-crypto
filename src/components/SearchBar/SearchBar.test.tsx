import { render, screen } from '@testing-library/react';
import SearchBar from './';

const props = {
  fetchSearchByQuery: jest.fn(),
  placeholder: 'Search',
  value: '',
  onChangeValue: jest.fn(),
  count: 0,
  typeQuery: 'Coins',
}

describe('Copyright', () => {
  const renderSearchBar = () => render(<SearchBar {...props} />);

  test('should render content...', () => {
    renderSearchBar();
    const searchbarContainer = screen.getByTestId('searchbar-container');
    const donthavecoins = screen.getByText(/0 results/i);
    expect(searchbarContainer).toBeInTheDocument();
    expect(donthavecoins).toBeInTheDocument();
  });
});