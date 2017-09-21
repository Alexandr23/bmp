import {ICatalog} from './catalog';
import {AxiosError} from "axios";
import {IParams} from "../../../models/params";


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
  payload?: any;
}

export interface ICatalogListState {
  list: ICatalog[];
  params: IParams;
  isLoading: boolean;
  isLoaded: boolean;
}
