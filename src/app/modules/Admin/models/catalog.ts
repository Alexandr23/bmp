import {IPagination} from 'app/models/pagination';
import {ICatalog} from './catalog';
import {AxiosError} from "axios";


/* Catalog interfaces */
export interface ICatalog {
  type?: string;
  id?: string;
  attributes?: {
    creator_id: any;
    date_created: string;
    date_updated: string;
    description: string;
    name: string;
    updater_id: any;
    is_active: boolean;
  };
  links?: {
    self: string;
  }
  key?: string;
}

export interface ICatalogAction {
  type: string;
  payload?: {
    data?: ICatalog;
    error?: AxiosError;
  };
}

export interface ICatalogState {
  data?: ICatalog;
  isLoading?: boolean;
  isLoaded?: boolean;
}


/* CatalogList interfaces */
export interface ICatalogListAction {
  type: string;
  payload?: {
    list?: ICatalog[];
    pagination?: IPagination;
    error?: AxiosError;
  };
}

export interface ICatalogListState {
  list: ICatalog[];
  pagination: IPagination;
  isLoading: boolean;
  isLoaded: boolean;
}
