import {AxiosResponse, AxiosError} from 'axios';
import {IProduct, ICatalogState, ICatalogAction} from '../models/catalog';
import * as apiCatalog from '../api/catalog';

/** Action Types */
export const CATALOG_GET_REQUEST: string = 'CATALOG_GET_REQUEST';
export const CATALOG_GET_SUCCESS: string = 'CATALOG_GET_SUCCESS';
export const CATALOG_GET_FAILURE: string = 'CATALOG_GET_FAILURE';

/** Initial State */
const INITIAL_STATE: ICatalogState = {
  products: [],
  isLoading: false,
  isLoaded: false,
};

/** Reducer: CatalogReducer */
export function CatalogReducer (state = INITIAL_STATE, action: ICatalogAction ) {
  const {type, payload} = action;

  switch (type) {
    case CATALOG_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case CATALOG_GET_SUCCESS:
      return {
        ...state,
        products: payload.data,
        isLoading: false,
        isLoaded: true,
      };

    case CATALOG_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};



/** Action Creators */
export const catalogGet = (params?: IProduct) => {
  return (dispatch: any) => {
    dispatch(catalogGetRequest());
    return apiCatalog.getCatalog(params)
      .then((response: AxiosResponse) => dispatch((catalogGetSuccess)(response)))
      .catch((error: AxiosError) => dispatch((catalogGetFailure)(error)));
  };
};

export function catalogGetRequest(): ICatalogAction {
  return {
    type: CATALOG_GET_REQUEST,
    payload: {}
  };
}

export function catalogGetSuccess(payload: AxiosResponse): ICatalogAction {
  return {
    type: CATALOG_GET_SUCCESS,
    payload: {
      data: payload.data,
    },
  };
}

export function catalogGetFailure(error: AxiosError): ICatalogAction {
  return {
    type: CATALOG_GET_FAILURE,
    payload: {
      error,
    }
  };
}