import {AxiosError} from "axios";


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
