import React, { lazy } from 'react';
import SearchBar from '../../components/SearchBar';
import LoadMore from '../../components/LoadMore';
import {
  Container,
  Wrapper,
  ContainerBlog
} from './styled';
import { ICoinProps, ICoinsProps } from '../../identity';

const CardCoin = lazy(() => import('../../components/CardCoin'));
const NotFound = lazy(() => import('../../components/NotFound'));

const Coins: React.FC<ICoinsProps> = ({ startPage, fetchSearchByQuery, loading, data, query, onChangeQuery, onLoadMore, onChangeFavorite, goToDetailBlog, typeQuery }) => (
  <Container>
    <Wrapper>
      <SearchBar fetchSearchByQuery={fetchSearchByQuery} placeholder="Search" value={query} onChangeValue={onChangeQuery} count={data.length} typeQuery={typeQuery} />
      {loading && <div>Loading...</div>}
      {data.length > 0 ? (
        <>
          <ContainerBlog>
            {data.map((coin: ICoinProps) => (
              <CardCoin key={coin.id} {...coin} onChangeFavorite={onChangeFavorite} goToDetailBlog={goToDetailBlog} typeQuery={typeQuery} />
            ))}
          </ContainerBlog>
          <LoadMore onClick={onLoadMore} startPage={startPage} typeQuery={typeQuery} />
        </>
      ) : (
        <NotFound onChangeQuery={onChangeQuery} typeQuery={typeQuery} />
      )}
    </Wrapper>
  </Container>
)

export default Coins;
