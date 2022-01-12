/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useAtom } from 'jotai';
import {
  coinsAtom,
  coinsFilteredAtom,
  queryAtom,
  queryFavoritesAtom,
  startPageAtom,
  selectedCoinAtom,
  coinsFavoritesFilteredAtom,
  changeFavoritePendingAtom,
} from '../../atoms/crypto';
import { userAtom } from '../../atoms/user';
import { getAllCoins, updateFavoriteCrypto } from '../../services/crypto';
import { waitFor } from '../../utils/wait';
import { ICoinProps, SyntheticEvent } from '../../identity';

const COINS = 'Coins';
const FAVORITES = 'Favorites';
const LOADMORE = 'LoadMore';

const useGetCoin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [ isLoading, setIsLoading ] = useState(false);
  const [ , setCoins ] = useAtom(coinsAtom);
  const [ query, setQuery ] = useAtom(queryAtom);
  const [ queryFavorites, setQueryFavorites ] = useAtom(queryFavoritesAtom);
  const [ startPage, setStartPage ] = useAtom(startPageAtom);
  const [ coinsFiltered, setCoinsFiltered ] = useAtom(coinsFilteredAtom);
  const [ coinsFavoritesFiltered, setCoinsFavoritesFiltered ] = useAtom(coinsFavoritesFilteredAtom);
  const [ , setSelectedCoin ] = useAtom(selectedCoinAtom);
  const [ changeFavoritePending , setChangeFavoritePending ] = useAtom(changeFavoritePendingAtom);
  const [ user, ] = useAtom(userAtom);

  const onChangeFavorite = async (e: SyntheticEvent<HTMLFormElement>, id: number, type: string = (location.pathname === '/' ? COINS : FAVORITES)) => {
    e.stopPropagation();
    e.preventDefault();
    if (user) {
      const favorite: boolean = type === COINS;
      const coin: any = coinsFiltered.find((coin: any) => coin.id === id);
      const newChangeFavoritePending: ICoinProps | any = { ...coin, favorite, userId: user.id };
      const responseFavorite: any = await updateFavoriteCrypto(newChangeFavoritePending, favorite);
      if (typeof responseFavorite === 'object') {
        const newCoins: ICoinProps[] = type === COINS ? coinsFiltered.map((coin: any) => coin.id === responseFavorite.id ? { ...responseFavorite } : coin) : coinsFavoritesFiltered.map((coin: any) => coin.id === responseFavorite.id ? { ...responseFavorite } : coin);
        if (type === COINS) {
          setCoins(newCoins);
          setCoinsFiltered(newCoins);
        } else if (type === FAVORITES) {
          setCoinsFavoritesFiltered(newCoins.filter((coin: any) => coin.favorite));
        }
      }
    } else {
      const coin: any = coinsFiltered.find((coin: any) => coin.id === id);
      const newCoin = { ...coin, favorite: true };
      setChangeFavoritePending(newCoin);
      await waitFor(100);
      navigate('/login', { state: { backgroundLocation: location } } );
    }
  };

  const goToDetailBlog = async (e: SyntheticEvent<HTMLFormElement>, id: number, type: string = (location.pathname === '/' ? COINS : FAVORITES)) => {
    e.stopPropagation();
    e.preventDefault();
    const coin: ICoinProps | any = type === COINS ? coinsFiltered.find((coin: any) => coin.id === id) : coinsFavoritesFiltered.find((coin: any) => coin.id === id);
    setSelectedCoin(coin);
    await waitFor(100);
    navigate(`/detail-coin/${id}`);
  };

  const onChangeQuery = (value: string, type = COINS) => {
    if (type === COINS) {
      setQuery(value);
    } else if (type === FAVORITES) {
      setQueryFavorites(value);
    }
  };

  const onFilterCoins = (q: string) => {
    const newCoinsFiltered = coinsFiltered.filter((coin: any) =>
      coin.name.toLowerCase().includes(q.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(q.toLowerCase()) ||
      coin.nameid.toString().includes(q) ||
      coin.rank.toString().includes(q) ||
      coin.price_usd.toString().includes(q)
    );
    return newCoinsFiltered;
  };

  const fetchAllBlog = async (page = (location.pathname === '/') ? startPage : startPage + 1, limit = 9, access = LOADMORE, type: string = (location.pathname === '/' ? COINS : FAVORITES), activeLoadMore = false)  => {
    try {
      setIsLoading(true);
      const queryDefault = type === COINS ? query : queryFavorites;
      const newPage = (!activeLoadMore && page >= 1) ? 1 : page;
      let response: ICoinProps[] | any = [];
      response = queryDefault !== '' && type === COINS ? onFilterCoins(queryDefault) : await getAllCoins(queryDefault, newPage, limit, type);
      if (Array.isArray(response)) {
        if (type === COINS) {
          const newCoins: ICoinProps[] = (query === '' && access === LOADMORE && activeLoadMore) ? [...coinsFiltered, ...response] : [...response];
          setCoins(newCoins);
          setCoinsFiltered(newCoins);
        } else if (user && type === FAVORITES) {
          const newCoins: any = (queryFavorites === '' && access === LOADMORE && activeLoadMore) ? [...coinsFavoritesFiltered, ...response] : [...response];
          setCoinsFavoritesFiltered(newCoins);
        }

        if (activeLoadMore) {
          setStartPage(page);
        } else if(!activeLoadMore && page >= 1) {
          setStartPage(1);
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBlog();
    return () => {
    }
  }, []);

  return [
    fetchAllBlog,
    onChangeQuery,
    coinsFiltered,
    query,
    isLoading,
    startPage,
    onChangeFavorite,
    goToDetailBlog,
    coinsFavoritesFiltered,
    queryFavorites,
  ];
}

export default useGetCoin;
