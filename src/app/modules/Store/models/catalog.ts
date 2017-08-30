import {AxiosError} from "axios";


export interface IProduct {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
  key?: string;
}

export interface ICatalogAction {
  type: string;
  payload?: {
    data?: IProduct[];
    error?: AxiosError;
  };
}

export interface ICatalogState {
  products?: IProduct[];
  isLoading?: boolean;
  isLoaded?: boolean;
}
