
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { selectedCoinAtom, coinsFilteredAtom } from '../../atoms/crypto';
import { ICoinProps } from '../../identity';

const useDetailCoin = (id: string | number | any) => {
  const [ selectedCoin, setSelectedCoin ] = useAtom(selectedCoinAtom);
  const [ coinsFiltered, ] = useAtom(coinsFilteredAtom);

  const onSelectedCoin = () => {
    const coin: ICoinProps | any = coinsFiltered.find((coinFiltered: any) => coinFiltered.id === id);
    setSelectedCoin(coin);
  };

  useEffect(() => {
    onSelectedCoin();
    return () => {
    }
  }, []);

  return [
    selectedCoin
  ];
}

export default useDetailCoin;