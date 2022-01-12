/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CardCoin from './';

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

describe('CardBlog', () => {
  const renderCardCoin = () => render(<CardCoin {...coin} />);

  test('should render content...', () => {
    renderCardCoin();
    const price_usd = screen.getByText(/0.949379/i);
    const name = screen.getAllByText(/ICON/i);
    const symbol = screen.getByText(/ICX/i);
    const price_btc = screen.getByText(/0.000023/i);
    expect(price_usd).toBeInTheDocument();
    expect(symbol).toBeInTheDocument();
    expect(name).toHaveLength(2);
    expect(price_btc).toBeInTheDocument();
  });

  test('should render when clicking in the card...', async () => {
    renderCardCoin();
    const mockHandler = jest.fn();
    const containerCard = screen.getByTestId('card-container');
    fireEvent.click(containerCard);
  });
});