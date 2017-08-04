import {IPagination} from './pagination';
import {ICategory} from './category';
import {AxiosError} from "axios";


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
