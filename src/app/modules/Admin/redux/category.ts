import {AxiosResponse, AxiosError} from 'axios';
import {ICategoryAction, ICategoryState} from '../models/category';
import * as apiCategory from '../api/category';

/** Action Types */
export const CATEGORY_GET_REQUEST: string = 'CATEGORY_GET_REQUEST';
export const CATEGORY_GET_SUCCESS: string = 'CATEGORY_GET_SUCCESS';
export const CATEGORY_GET_FAILURE: string = 'CATEGORY_GET_FAILURE';

/** Initial State */
const INITIAL_STATE: ICategoryState = {
  data: {},
  isLoading: false,
  isLoaded: false,
};

/** Reducer: CatalogReducer */
export function CategoryReducer (state = INITIAL_STATE, action: ICategoryAction) {
  const {type, payload} = action;

  switch (type) {
    case CATEGORY_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case CATEGORY_GET_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
        isLoaded: true,
      };

    case CATEGORY_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};



/** Action Creators */
export const categoryGet = (params: {id: number}) => {
  return (dispatch: any) => {
    dispatch(categoryGetRequest());
    return apiCategory.getCategory(params)
      .then((response: AxiosResponse) => dispatch((categoryGetSuccess)(response)))
      .catch((error: AxiosError) => dispatch((categoryGetFailure)(error)));
  };
};

export function categoryGetRequest(): ICategoryAction {
  return {
    type: CATEGORY_GET_REQUEST,
    payload: {}
  };
}

export function categoryGetSuccess(payload: AxiosResponse): ICategoryAction {
  return {
    type: CATEGORY_GET_SUCCESS,
    payload: {
      data: payload.data,
    },
  };
}

export function categoryGetFailure(error: AxiosError): ICategoryAction {
  return {
    type: CATEGORY_GET_FAILURE,
    payload: {
      error,
    }
  };
}