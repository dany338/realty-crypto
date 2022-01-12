import api from './api';
import { COINLORE_URL, BACKEND_URL, COINS, TICKERS } from '../constants/backend';
import { ICoinProps } from '../identity';

export const getAllCoins = (query: string, page: number, limit: number, type: string) => new Promise( async (resolve, reject) => {
  try {
    const obj = type === 'Coins' ? { _page: page, _limit: limit } : { _page: page, _limit: limit, _sort: 'id', _order: 'desc', q: query, favorite: true};
    const objDefault = type === 'Coins' ? { start: page, limit } : { _page: page, _limit: limit, _sort: 'id', _order: 'desc', favorite: true };
    const params = query !== '' ? obj : objDefault;
    const response = type === 'Coins' ? await api.get(`${COINLORE_URL}${TICKERS}/`, { params }) : await api.get(`${BACKEND_URL}${COINS}`, { params });
    if (response.status === 200 && type === 'Coins') {
      resolve(response.data.data);
    } else if (response.status === 200 && type === 'Favorites') {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});

export const updateFavoriteCrypto = (data: ICoinProps | null, favorite: boolean) => new Promise( async (resolve, reject) => {
  try {
    const response = favorite ? await api.post(`${BACKEND_URL}${COINS}`, data) : await api.delete(`${BACKEND_URL}${COINS}/${data?.id}`);
    if (response.status === 200 || response.status === 201) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});