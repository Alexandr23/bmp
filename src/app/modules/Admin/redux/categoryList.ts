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
    total: 0,
    number: 1,
    size: 20,
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
        pagination: payload.pagination,
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
export const categoryListGet = (params?: any) => {
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
  const page = payload.data.meta.page;

  return {
    type: CATEGORY_LIST_GET_SUCCESS,
    payload: {
      list: payload.data.data,
      pagination: {
        total: page['total-items'],
        number: page['current-page-number'],
        size: page['current-page-size'],
      },
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