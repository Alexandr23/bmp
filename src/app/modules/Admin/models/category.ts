import {AxiosError} from "axios";
import {IParams} from "../../../models/params";


/* Category interfaces */
export interface ICategory {
  type: string;
  id: string;
  attributes: {
    catalog_id: number;
    creator_id: number | null;
    date_created: string | null;
    date_updated: string | null;
    description: string;
    is_active: boolean;
    name: string;
    parent_id: number | null;
    updater_id: number | null;
  }
  links: any;
  relationships: any;
  key?: string;
  sub?: Array<any>;
}

export interface ICategoryAction {
  type: string;
  payload?: {
    data?: ICategory;
    error?: AxiosError;
  };
}

export interface ICategoryState {
  data?: Partial<ICategory>;
  isLoading?: boolean;
  isLoaded?: boolean;
}


/* CategoryList interfaces */
export interface ICategoryListAction {
  type: string;
  payload?: any;
}

export interface ICategoryListState {
  list: ICategory[];
  params: IParams;
  isLoading: boolean;
  isLoaded: boolean;
  isForceUpdate: boolean;
}
