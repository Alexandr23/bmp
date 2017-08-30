import {AxiosResponse, AxiosError} from 'axios';
import {ICategory, ICategoryListAction, ICategoryListState} from '../models/category';
import * as apiCategory from '../api/category';

/** Action Types */
export const CATEGORY_LIST_GET_REQUEST: string = 'CATEGORY_LIST_GET_REQUEST';
export const CATEGORY_LIST_GET_SUCCESS: string = 'CATEGORY_LIST_GET_SUCCESS';
export const CATEGORY_LIST_GET_FAILURE: string = 'CATEGORY_LIST_GET_FAILURE';

/** Initial State */
const INITIAL_STATE: ICategoryListState = {
  list: [],
  pagination: {
    page: 1,
    total: 0,
    perPage: 20,
  },
  isLoading: false,
  isLoaded: false,
};

/** Reducer: CatalogReducer */
export function CategoryListReducer (state = INITIAL_STATE, action: ICategoryListAction) {
  const {type, payload} = action;

  switch (type) {
    case CATEGORY_LIST_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case CATEGORY_LIST_GET_SUCCESS:
      return {
        ...state,
        list: payload.list,
        isLoading: false,
        isLoaded: true,
      };

    case CATEGORY_LIST_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};



/** Action Creators */
export const categoryListGet = (params: ICategory) => {
  return (dispatch: any) => {
    dispatch(categoryListGetRequest());
    return apiCategory.getCategoryList(params)
      .then((response: AxiosResponse) => dispatch((categoryListGetSuccess)(response)))
      .catch((error: AxiosError) => dispatch((categoryListGetFailure)(error)));
  };
};

export function categoryListGetRequest(): ICategoryListAction {
  return {
    type: CATEGORY_LIST_GET_REQUEST,
    payload: {}
  };
}

export function categoryListGetSuccess(payload: AxiosResponse): ICategoryListAction {
  return {
    type: CATEGORY_LIST_GET_SUCCESS,
    payload: {
      list: payload.data,
    },
  };
}

export function categoryListGetFailure(error: AxiosError): ICategoryListAction {
  return {
    type: CATEGORY_LIST_GET_FAILURE,
    payload: {
      error,
    }
  };
}