import { atom } from 'jotai';
import { ICoinProps } from '../identity';

export const coinsAtom = atom<ICoinProps[]>([]);
export const coinsFilteredAtom = atom<ICoinProps[]>([]);
export const coinsFavoritesFilteredAtom = atom<ICoinProps[]>([]);
export const queryAtom = atom<string>('');
export const queryFavoritesAtom = atom<string>('');
export const selectedCoinAtom = atom<ICoinProps | null>(null);
export const changeFavoritePendingAtom = atom<ICoinProps | null>(null);
export const openModalCoinAtom = atom<boolean>(false);
export const startPageAtom = atom<number>(0);