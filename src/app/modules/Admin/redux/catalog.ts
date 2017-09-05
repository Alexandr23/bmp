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

export const CATALOG_UPDATE_REQUEST: string = 'CATALOG_UPDATE_REQUEST';
export const CATALOG_UPDATE_SUCCESS: string = 'CATALOG_UPDATE_SUCCESS';
export const CATALOG_UPDATE_FAILURE: string = 'CATALOG_UPDATE_FAILURE';

export const CATALOG_DELETE_REQUEST: string = 'CATALOG_DELETE_REQUEST';
export const CATALOG_DELETE_SUCCESS: string = 'CATALOG_DELETE_SUCCESS';
export const CATALOG_DELETE_FAILURE: string = 'CATALOG_DELETE_FAILURE';

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

    case CATALOG_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case CATALOG_UPDATE_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
        isLoaded: true,
      };

    case CATALOG_UPDATE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case CATALOG_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case CATALOG_DELETE_SUCCESS:
      return {
        ...state,
        data: {},
        isLoading: false,
        isLoaded: false,
      };

    case CATALOG_DELETE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};



/** Action Creators GET */
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


/** Action Creators CREATE */
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


/** Action Creators UPDATE */
export const catalogUpdate = (id: string, data: any) => {
  return (dispatch: any) => {
    dispatch(catalogUpdateRequest());
    return apiCatalog.updateCatalog(id, data)
      .then((response: AxiosResponse) => dispatch((catalogUpdateSuccess)(response)))
      .catch((error: AxiosError) => dispatch((catalogUpdateFailure)(error)));
  };
};

export function catalogUpdateRequest(): ICatalogAction {
  return {
    type: CATALOG_UPDATE_REQUEST,
    payload: {}
  };
}

export function catalogUpdateSuccess(payload: AxiosResponse): ICatalogAction {
  return {
    type: CATALOG_UPDATE_SUCCESS,
    payload: {
      data: payload.data.data,
    },
  };
}

export function catalogUpdateFailure(error: AxiosError): ICatalogAction {
  return {
    type: CATALOG_UPDATE_FAILURE,
    payload: {
      error,
    }
  };
}


/** Action Creators DELETE */
export const catalogDelete = (id: string) => {
  return (dispatch: any) => {
    dispatch(catalogDeleteRequest());
    return apiCatalog.deleteCatalog(id)
      .then((response: AxiosResponse) => dispatch((catalogDeleteSuccess)(response)))
      .catch((error: AxiosError) => dispatch((catalogDeleteFailure)(error)));
  };
};

export function catalogDeleteRequest(): ICatalogAction {
  return {
    type: CATALOG_DELETE_REQUEST,
    payload: {}
  };
}

export function catalogDeleteSuccess(payload: AxiosResponse): ICatalogAction {
  return {
    type: CATALOG_DELETE_SUCCESS,
    payload: {
      data: payload.data.data,
    },
  };
}

export function catalogDeleteFailure(error: AxiosError): ICatalogAction {
  return {
    type: CATALOG_DELETE_FAILURE,
    payload: {
      error,
    }
  };
}