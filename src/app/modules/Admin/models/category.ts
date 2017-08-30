import {IPagination} from '../../../models/pagination';
import {AxiosError} from "axios";


/* Category interfaces */
export interface ICategory {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
  key?: string;
}

export interface ICategoryAction {
  type: string;
  payload?: {
    data?: ICategory;
    error?: AxiosError;
  };
}

export interface ICategoryState {
  data?: ICategory;
  isLoading?: boolean;
  isLoaded?: boolean;
}


/* CategoryList interfaces */
export interface ICategoryListAction {
  type: string;
  payload?: {
    list?: ICategory[];
    pagination?: IPagination;
    error?: AxiosError;
  };
}

export interface ICategoryListState {
  list: ICategory[];
  pagination: IPagination;
  isLoading: boolean;
  isLoaded: boolean;
}
