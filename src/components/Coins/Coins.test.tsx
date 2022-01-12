import { lazy, Suspense} from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Coins from './';

const coin = [
  {
    id: "3708",
    symbol: "ICX",
    name: "ICON",
    nameid: "icon",
    rank: 101,
    price_usd: "0.949379",
    percent_change_24h: "-5.91",
    percent_change_1h: "0.83",
    percent_change_7d: "-24.04",
    price_btc: "0.000023",
    market_cap_usd: "642670975.26",
    volume24: 46172802.60112923,
    volume24a: 31671102.184261627,
    csupply: "676938393.00",
    tsupply: "800460000",
    msupply: "",
    typeQuery: "Coins",
    goToDetailBlog: jest.fn(),
    onChangeFavorite: jest.fn(),
  }
];

const coins = {
  startPage: 0,
  fetchSearchByQuery: jest.fn(),
  loading: false,
  data: coin,
  query: '',
  onChangeQuery: jest.fn(),
  onLoadMore: jest.fn(),
  onChangeFavorite: jest.fn(),
  goToDetailBlog: jest.fn(),
  typeQuery: 'Coins',
};

describe('Coins', () => {
  const renderCoins = () => render(
    <Suspense fallback={<span>Loading...</span>}>
      <Coins {...coins} />
    </Suspense>
  );
  test('should render content...', async () => {
    renderCoins();
    await waitFor(() => {
      const searchbarContainer = screen.getByTestId('searchbar-container');
      expect(searchbarContainer).toBeInTheDocument();
    });
    await waitFor(() => {
      const loadmoreContainer = screen.getByTestId('loadmore-container');
      expect(loadmoreContainer).toBeInTheDocument();
    });
  });
});