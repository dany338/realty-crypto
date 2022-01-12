import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils'
import { IUserProps } from '../identity';

export const authedAtom = atom<boolean>(false);
export const userAtom = atomWithStorage<IUserProps | null>('user', null);
export const openModalSignAtom = atom<boolean>(false);