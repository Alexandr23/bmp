import {AxiosResponse, AxiosError} from 'axios';
import {ICatalog, ICatalogListState, ICatalogListAction} from '../models/catalog';
import * as apiCatalog from '../api/catalog';

/** Action Types */
export const CATALOG_LIST_GET_REQUEST: string = 'CATALOG_LIST_GET_REQUEST';
export const CATALOG_LIST_GET_SUCCESS: string = 'CATALOG_LIST_GET_SUCCESS';
export const CATALOG_LIST_GET_FAILURE: string = 'CATALOG_LIST_GET_FAILURE';

/** Initial State */
const INITIAL_STATE: ICatalogListState = {
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
export function CatalogListReducer (state = INITIAL_STATE, action: ICatalogListAction ) {
  const {type, payload} = action;

  switch (type) {
    case CATALOG_LIST_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case CATALOG_LIST_GET_SUCCESS:
      return {
        ...state,
        list: payload.list,
        isLoading: false,
        isLoaded: true,
      };

    case CATALOG_LIST_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};



/** Action Creators */
export const catalogListGet = (params?:any) => {
  return (dispatch: any) => {
    dispatch(catalogListGetRequest());
    return apiCatalog.getCatalogList(params)
      .then((response: AxiosResponse) => dispatch((catalogListGetSuccess)(response)))
      .catch((error: AxiosError) => dispatch((catalogListGetFailure)(error)));
  };
};

export function catalogListGetRequest(): ICatalogListAction {
  return {
    type: CATALOG_LIST_GET_REQUEST,
    payload: {}
  };
}

export function catalogListGetSuccess(payload: AxiosResponse): ICatalogListAction {
  return {
    type: CATALOG_LIST_GET_SUCCESS,
    payload: {
      list: payload.data.data,
    },
  };
}

export function catalogListGetFailure(error: AxiosError): ICatalogListAction {
  return {
    type: CATALOG_LIST_GET_FAILURE,
    payload: {
      error,
    }
  };
}