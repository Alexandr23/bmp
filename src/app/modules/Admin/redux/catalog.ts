import {AxiosResponse, AxiosError} from 'axios';
import {ICatalogAction, ICatalogState} from '../models/catalog';
import * as apiCatalog from '../api/catalog';

/** Action Types */
export const CATALOG_GET_REQUEST: string = 'CATALOG_GET_REQUEST';
export const CATALOG_GET_SUCCESS: string = 'CATALOG_GET_SUCCESS';
export const CATALOG_GET_FAILURE: string = 'CATALOG_GET_FAILURE';

export const CATALOG_CREATE_REQUEST: string = 'CATALOG_CREATE_REQUEST';
export const CATALOG_CREATE_SUCCESS: string = 'CATALOG_CREATE_SUCCESS';
export const CATALOG_CREATE_FAILURE: string = 'CATALOG_CREATE_FAILURE';

/** Initial State */
const INITIAL_STATE: ICatalogState = {
  data: {},
  isLoading: false,
  isLoaded: false,
};

/** Reducer: CatalogReducer */
export function CatalogReducer (state = INITIAL_STATE, action: ICatalogAction) {
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
        data: payload.data,
        isLoading: false,
        isLoaded: true,
      };

    case CATALOG_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case CATALOG_CREATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case CATALOG_CREATE_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
        isLoaded: true,
      };

    case CATALOG_CREATE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};



/** Action Creators */
export const catalogGet = (params: {id: string}) => {
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
      data: payload.data.data,
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



/** Action Creators */
export const catalogCreate = (data: any) => {
  return (dispatch: any) => {
    dispatch(catalogCreateRequest());
    return apiCatalog.createCatalog(data)
      .then((response: AxiosResponse) => dispatch((catalogCreateSuccess)(response)))
      .catch((error: AxiosError) => dispatch((catalogCreateFailure)(error)));
  };
};

export function catalogCreateRequest(): ICatalogAction {
  return {
    type: CATALOG_CREATE_REQUEST,
    payload: {}
  };
}

export function catalogCreateSuccess(payload: AxiosResponse): ICatalogAction {
  return {
    type: CATALOG_CREATE_SUCCESS,
    payload: {
      data: payload.data.data,
    },
  };
}

export function catalogCreateFailure(error: AxiosError): ICatalogAction {
  return {
    type: CATALOG_CREATE_FAILURE,
    payload: {
      error,
    }
  };
}