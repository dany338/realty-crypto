import useGetCoin from '../../hooks/useGetCoin';
import Coins from '../../components/Coins';

import { Container } from './styled';

const Crypto = () => {
  const [
    fetchAllBlog,
    onChangeQuery,
    coinsFiltered,
    query,
    isLoading,
    startPage,
    onChangeFavorite,
    goToDetailBlog,
  ] = useGetCoin();

  return (
    <Container>
      <Coins
        startPage={startPage}
        fetchSearchByQuery={fetchAllBlog}
        loading={isLoading}
        data={coinsFiltered}
        query={query}
        onChangeQuery={onChangeQuery}
        onLoadMore={fetchAllBlog}
        onChangeFavorite={onChangeFavorite}
        goToDetailBlog={goToDetailBlog}
        typeQuery="Coins"
      />
    </Container>
  );
};

export default Crypto;
