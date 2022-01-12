import useGetCoin from '../../hooks/useGetCoin';
import Coins from '../../components/Coins';

import { Container } from './styled';

const Favorites = () => {
  const [
    fetchAllBlog,
    onChangeQuery,
    ,
    ,
    isLoading,
    startPage,
    onChangeFavorite,
    goToDetailBlog,
    coinsFavoritesFiltered,
    queryFavorites,
  ] = useGetCoin();

  return (
    <Container>
      <Coins
        startPage={startPage}
        fetchSearchByQuery={fetchAllBlog}
        loading={isLoading}
        data={coinsFavoritesFiltered}
        query={queryFavorites}
        onChangeQuery={onChangeQuery}
        onLoadMore={fetchAllBlog}
        onChangeFavorite={onChangeFavorite}
        goToDetailBlog={goToDetailBlog}
        typeQuery="Favorites"
      />
    </Container>
  );
};

export default Favorites;
