import React from 'react';
// !INTERFACES:
export interface IUserProps {
  id: number;
  fullname: string;
  email: string;
  password: string;
  token: string;
};

export interface ICoinProps {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: string;
  favorite?: boolean;
  userId?: number;
};

export interface ICardCoinProps {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: string;
  favorite?: boolean;
  userId?: number;
  typeQuery: string;
  goToDetailBlog: (e: any, id: string, type: string) => void;
  onChangeFavorite: (e: any, id: string, type: string) => void
};

export interface ICoinsProps {
  startPage: any | number;
  fetchSearchByQuery: any | ((page?: number, limit?: number, access?: string, type?: string, activeLoadMore?: boolean) => void);
  loading: any | boolean;
  data: any | ICoinProps[];
  query: any | string;
  onChangeQuery: any | ((value: string, type: string) => void);
  onLoadMore: any | ((page?: number, limit?: number, access?: string, type?: string, activeLoadMore?: boolean) => void);
  onChangeFavorite: any | ((e: any, id: number, type?: string) => void);
  goToDetailBlog: any | ((e: any, id: number, type?: string) => void);
  typeQuery: string;
};

export interface INotFoundProps {
  onChangeQuery: any | ((value: string, type: string) => void);
  typeQuery: string;
}

export interface ICardCoinContainerProps {
  colorPrice: string;
  image: string;
};

export interface ICardProps {
  image: string;
};

export interface IContainerProps {
  image: string;
};

export interface SyntheticEvent<T> {
  currentTarget: EventTarget & T;
  target: EventTarget & T;
  bubbles: boolean;
  cancelable: boolean;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  nativeEvent: Event;
  preventDefault(): void;
  stopPropagation(): void;
  timeStamp: Date;
  type: string;
};

export interface ILoadMoreProps {
  startPage: number;
  onClick: (page: number, limit: number, access: string, type: string, activeLoadMore: boolean) => void;
  typeQuery: string;
};

export interface IOverlayProps {
  showOverlay: boolean;
  positionModal: string;
};

export interface IModalContainerProps {
  padding: string;
};

export interface IModalProps {
  children: React.ReactElement;
  state: boolean;
  changeState: (state: boolean) => void;
  title: string;
  showHeader: boolean;
  showOverlay: boolean;
  positionModal: string;
  padding: string;
};

export interface IMenuProps {
  open: boolean;
};

export interface IMenuItemLinkProps {
  active: string | boolean;
  onClick: (e: any) => void;
};

export interface IContainerNotFoundProps {
  image: string;
};

export interface IPrivateRouteProps {
  children: React.ReactElement;
};

export interface ISearchBarProps {
  fetchSearchByQuery: (page: number, limit: number, access: string) => void;
  placeholder: string;
  value?: string;
  onChangeValue: (value: any, type: string) => void;
  count: number;
  typeQuery: string;
};

export interface ITextButtonProps {
  text: string;
  type: string | any;
  width: string;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
};

export interface ISearchBoxProps {
  width: string;
};

export interface ITextFieldSearchBoxProps {
  type: string | any;
};

export interface ITextFieldProps {
  type: string | any;
  typeInput: string;
  name: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.FormEvent<HTMLFormElement | HTMLInputElement | HTMLSpanElement>) => void;
  errors?: string | null;
  icon?: string | null;
  rows?: string | number | any;
};

export interface ISignUpProps {
  fullname: string;
  email: string;
  password: string;
};

export interface ISignInProps {
  email: string;
  password: string;
};

export interface IDetailCoinProps {
  id: string | number | any;
};

// !TYPES:
export type TLabelPriceColor = {
  primary: string;
  secundary: string;
  terciary: string;
};

export type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>;
export type TextareaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>;
export type SelectChangeEventHandler = React.ChangeEventHandler<HTMLSelectElement>;
export type ButtonClickEventHandler = React.MouseEventHandler<HTMLButtonElement>;
export type SpanChangeEventHandler = React.ChangeEventHandler<HTMLSpanElement>;
export type SpanClickEventHandler = React.MouseEventHandler<HTMLSpanElement>;
export type FormEventHandler = React.FormEvent<HTMLFormElement | HTMLInputElement | HTMLSpanElement | HTMLDivElement>;