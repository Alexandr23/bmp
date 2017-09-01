import {AxiosResponse, AxiosError} from 'axios';
import {IProduct, IProductListState, IProductListAction} from '../models/product';
import * as apiProduct from '../api/product';

/** Action Types */
export const PRODUCT_LIST_GET_REQUEST: string = 'PRODUCT_LIST_GET_REQUEST';
export const PRODUCT_LIST_GET_SUCCESS: string = 'PRODUCT_LIST_GET_SUCCESS';
export const PRODUCT_LIST_GET_FAILURE: string = 'PRODUCT_LIST_GET_FAILURE';

/** Initial State */
const INITIAL_STATE: IProductListState = {
  list: [],
  isLoading: false,
  isLoaded: false,
  pagination: {
    page: 1,
    total: 0,
    perPage: 20,
  },
};

/** Reducer: CatalogListReducer */
export function ProductListReducer (state = INITIAL_STATE, action: IProductListAction) {
  const {type, payload} = action;

  switch (type) {
    case PRODUCT_LIST_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case PRODUCT_LIST_GET_SUCCESS:
      return {
        ...state,
        list: payload.list,
        isLoading: false,
        isLoaded: true,
      };

    case PRODUCT_LIST_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};



/** Action Creators */
export const productListGet = (params?: IProduct) => {
  return (dispatch: any) => {
    dispatch(productListGetRequest());
    return apiProduct.getProductList(params)
      .then((response: AxiosResponse) => dispatch((productListGetSuccess)(response)))
      .catch((error: AxiosError) => dispatch((productListGetFailure)(error)));
  };
};

export function productListGetRequest(): IProductListAction {
  return {
    type: PRODUCT_LIST_GET_REQUEST,
    payload: {}
  };
}

export function productListGetSuccess(payload: AxiosResponse): IProductListAction {
  return {
    type: PRODUCT_LIST_GET_SUCCESS,
    payload: {
      list: payload.data.data,
    },
  };
}

export function productListGetFailure(error: AxiosError): IProductListAction {
  return {
    type: PRODUCT_LIST_GET_FAILURE,
    payload: {
      error,
    }
  };
}