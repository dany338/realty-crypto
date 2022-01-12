import React from 'react';
import { Container } from './styled';
import StartYellowIcon from '../../assets/icons/star-yellow.svg';
import StartGreyIcon from '../../assets/icons/star-grey.svg';
import BitcoinBrands from '../../assets/icons/bitcoin-brands.svg';
import bitcoin from '../../assets/images/Bitcoin.png';
import colorPrice from '../../utils/colorPrice';
import { ICardCoinProps } from '../../identity';

const CardCoin: React.FC<ICardCoinProps> = ({ id, symbol, name, nameid, price_usd, price_btc, onChangeFavorite, goToDetailBlog, typeQuery, favorite = false }) => (
  <Container data-testid="card-container" image={bitcoin} colorPrice={colorPrice(price_usd)} onClick={e => goToDetailBlog(e, id, typeQuery)}>
    <div className="image">
      <div className="header">
        <div>
          <span>${price_usd}/usd</span>
        </div>
        <img
          src={favorite ? StartYellowIcon : StartGreyIcon  }
          alt='Star...'
          onClick={e => onChangeFavorite(e, id, typeQuery)}
        />
      </div>
    </div>
    <div className="textos">
      <h2 className="titulo">{name}</h2>
		  <p className="description">BTC: ${price_btc}</p>
    </div>
    <div className="line" />
    <div className="footer">
      <div>
        <img
          src={BitcoinBrands}
          alt='User...'
        />
        <span>{symbol}</span>
      </div>
      <div>
        <span>{nameid}</span>
      </div>
    </div>
  </Container>
);

export default CardCoin;
