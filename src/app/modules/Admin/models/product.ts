import {IPagination} from 'app/models/pagination';
import {ICatalog} from './catalog';
import {AxiosError} from "axios";


/* Catalog interfaces */
export interface IProduct {
  type?: string;
  id?: string;
  attributes?: {
    short_name: string;
    long_name: string;
    creator_id: any;
    updater_id: any;
    date_created: string;
    date_updated: string;
  };
  links?: {
    self: string;
  }
  key?: string;
}

export interface IProductAction {
  type: string;
  payload?: {
    data?: IProduct;
    error?: AxiosError;
  };
}

export interface IProductState {
  data?: IProduct;
  isLoading?: boolean;
  isLoaded?: boolean;
}


/* CatalogList interfaces */
export interface IProductListAction {
  type: string;
  payload?: {
    list?: IProduct[];
    pagination?: IPagination;
    error?: AxiosError;
  };
}

export interface IProductListState {
  list: IProduct[];
  pagination: IPagination;
  isLoading: boolean;
  isLoaded: boolean;
}
