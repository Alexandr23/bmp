import {IPagination} from './pagination';
import {AxiosError} from "axios";


export interface ICatalog {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrk: string;
  key?: string;
}

export interface ICatalogAction {
  type: string;
  payload?: {
    list?: ICatalog[];
    pagination?: IPagination;
    error?: AxiosError;
  };
}

export interface ICatalogState {
  list: ICatalog[];
  pagination: IPagination;
  isLoading: boolean;
  isLoaded: boolean;
}
