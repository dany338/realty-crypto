import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { getUserByCredentials , createAccount} from '../../services/user';
import { updateFavoriteCrypto } from '../../services/crypto';
import { coinsAtom, coinsFilteredAtom, coinsFavoritesFilteredAtom, changeFavoritePendingAtom } from '../../atoms/crypto';
import { userAtom, authedAtom } from '../../atoms/user';
import { waitFor } from '../../utils/wait';

const useFormSign = (values: any) => {
  const navigate = useNavigate();
  const [ , setUser ] = useAtom(userAtom);
  const [ , setAuthed ] = useAtom(authedAtom);
  const [ changeFavoritePending, setChangeFavoritePending ] = useAtom(changeFavoritePendingAtom);
  const [ , setCoins ] = useAtom(coinsAtom);
  const [ blogsFiltered, setCoinsFiltered ] = useAtom(coinsFilteredAtom);
  const [ blogsFavoritesFiltered, setCoinsFavoritesFiltered ] = useAtom(coinsFavoritesFilteredAtom);
  const [ isLoading, setIsLoading ] = useState(false);

  const createUser: any = async () => {
    setIsLoading(true);
    const response: any = await createAccount(values);
    if (typeof response === 'object') {
      setUser(response);
      setAuthed(true);
      await waitFor(100);
      navigate(-1);
    }
    setIsLoading(false);
  };

  const loginUser: any = async () => {
    setIsLoading(true);
    const response = await getUserByCredentials(values);
    if (Array.isArray(response) && response.length > 0) {
      setUser(response[0]);
      setAuthed(true);
      if (changeFavoritePending) {
        const newChangeFavoritePending = { ...changeFavoritePending, userId: response[0].id };
        const responseFavorite: any = await updateFavoriteCrypto(newChangeFavoritePending, true);
        if (typeof responseFavorite === 'object') {
          if (blogsFiltered.length > 0) {
            const newCoins: any = blogsFiltered.map((coin: any) => coin.id === responseFavorite.id ? { ...responseFavorite } : coin);
            setCoins(newCoins);
            setCoinsFiltered(newCoins);
            setCoinsFavoritesFiltered(newCoins.filter((coin: any) => coin.favorite));
          } else if (blogsFavoritesFiltered.length > 0) {
            const newCoins: any = blogsFavoritesFiltered.map((coin: any) => (coin.id === responseFavorite.id && changeFavoritePending.favorite) ? { ...responseFavorite } : coin);
            setCoinsFavoritesFiltered(newCoins);
          }
          setChangeFavoritePending(null);
        }
      }
      await waitFor(100);
      navigate(-1);
    }
    setIsLoading(false);
  };

  return [
    createUser,
    loginUser,
    isLoading,
  ];
}

export default useFormSign;
