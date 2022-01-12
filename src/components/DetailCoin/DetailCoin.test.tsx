import { Suspense } from 'react';
import { Route, MemoryRouter, useLocation } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import DetailCoin from './';

const coin = {
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
};

describe('App', () => {
  const renderDetailCoin = () => render(
    <MemoryRouter initialEntries={[{ pathname: `/detail-coin/${coin.id}`, search: `?id=${coin.id}` }]}>
      <DetailCoin {...coin} />
    </MemoryRouter>
  );
  test('should render content...', async () => {
    renderDetailCoin();
    await waitFor(() => {
      const detailcoinContainer = screen.getByTestId(`detail-coin-${coin.id}`);
      expect(detailcoinContainer).toBeInTheDocument();
    });
  });
});