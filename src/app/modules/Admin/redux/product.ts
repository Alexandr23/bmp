import {AxiosResponse, AxiosError} from 'axios';
import {IProductAction, IProductState} from '../models/product';
import * as apiProduct from '../api/product';

/** Action Types */
export const PRODUCT_GET_REQUEST: string = 'PRODUCT_GET_REQUEST';
export const PRODUCT_GET_SUCCESS: string = 'PRODUCT_GET_SUCCESS';
export const PRODUCT_GET_FAILURE: string = 'PRODUCT_GET_FAILURE';

export const PRODUCT_CREATE_REQUEST: string = 'PRODUCT_CREATE_REQUEST';
export const PRODUCT_CREATE_SUCCESS: string = 'PRODUCT_CREATE_SUCCESS';
export const PRODUCT_CREATE_FAILURE: string = 'PRODUCT_CREATE_FAILURE';

/** Initial State */
const INITIAL_STATE: IProductState = {
  data: {},
  isLoading: false,
  isLoaded: false,
};

/** Reducer: ProductReducer */
export function ProductReducer (state = INITIAL_STATE, action: IProductAction) {
  const {type, payload} = action;

  switch (type) {
    case PRODUCT_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case PRODUCT_GET_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
        isLoaded: true,
      };

    case PRODUCT_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case PRODUCT_CREATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case PRODUCT_CREATE_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
        isLoaded: true,
      };

    case PRODUCT_CREATE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};



/** Action Creators */
export const productGet = (params: {id: string}) => {
  return (dispatch: any) => {
    dispatch(productGetRequest());
    return apiProduct.getProduct(params)
      .then((response: AxiosResponse) => dispatch((productGetSuccess)(response)))
      .catch((error: AxiosError) => dispatch((productGetFailure)(error)));
  };
};

export function productGetRequest(): IProductAction {
  return {
    type: PRODUCT_GET_REQUEST,
    payload: {}
  };
}

export function productGetSuccess(payload: AxiosResponse): IProductAction {
  return {
    type: PRODUCT_GET_SUCCESS,
    payload: {
      data: payload.data.data,
    },
  };
}

export function productGetFailure(error: AxiosError): IProductAction {
  return {
    type: PRODUCT_GET_FAILURE,
    payload: {
      error,
    }
  };
}


/** Action Creators */
export const productCreate = (params: {id: string}) => {
  return (dispatch: any) => {
    dispatch(productCreateRequest());
    return apiProduct.createProduct(params)
      .then((response: AxiosResponse) => dispatch((productCreateSuccess)(response)))
      .catch((error: AxiosError) => dispatch((productCreateFailure)(error)));
  };
};

export function productCreateRequest(): IProductAction {
  return {
    type: PRODUCT_CREATE_REQUEST,
    payload: {}
  };
}

export function productCreateSuccess(payload: AxiosResponse): IProductAction {
  return {
    type: PRODUCT_CREATE_SUCCESS,
    payload: {
      data: payload.data.data,
    },
  };
}

export function productCreateFailure(error: AxiosError): IProductAction {
  return {
    type: PRODUCT_CREATE_FAILURE,
    payload: {
      error,
    }
  };
}