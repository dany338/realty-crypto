import React from 'react';
import { useParams } from "react-router-dom";
import {
  Container,
  Wrapper,
  ContainerBlog,
  Card
} from './styled';
import EllipseIcon from '../../assets/icons/Ellipse.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import BitcoinBrandsIcon from '../../assets/icons/bitcoin-brands.svg';
import bitcoin from '../../assets/images/Bitcoin.png';
import { ICoinProps } from '../../identity';

const DetailCoin: React.FC<ICoinProps> = ({
  id,
  name,
  price_usd,
  rank,
  price_btc,
  market_cap_usd
}) => (
  <Container data-testid={`detail-coin-${id}`}>
    <Wrapper>
      <ContainerBlog>
        <Card image={bitcoin}>
          <div className="title">
            Name: {name}
          </div>
          <div className="description">
            Price usd: {price_usd}
          </div>
          <div className="author">
            <div className="info">
              <div className="avatar">
                <img
                  src={EllipseIcon}
                  alt='User...'
                />
              </div>
              <div className="name">
                <div className="authorName">{rank}</div>
                <div className="published">Price btc {price_btc}</div>
              </div>
            </div>
            <div className="share">
              <div className="shareIcons">
                <div className="shareText">
                  <span>SHARE:</span>
                </div>
                <img
                  src={BitcoinBrandsIcon}
                  alt='Instagram...'
                />
                <img
                  src={InstagramIcon}
                  alt='Instagram...'
                />
                <img
                  src={FacebookIcon}
                  alt='Facebook...'
                />
                <img
                  src={TwitterIcon}
                  alt='Twitter...'
                />
              </div>
            </div>
          </div>
          <div className="image" />
          <div className="content">
            <p>
              Market cap usd: {market_cap_usd}
            </p>
          </div>
        </Card>
      </ContainerBlog>
    </Wrapper>
  </Container>
);

export default DetailCoin;
