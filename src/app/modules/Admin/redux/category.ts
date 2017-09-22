import {AxiosResponse, AxiosError} from 'axios';
import {ICategoryAction, ICategoryState} from '../models/category';
import * as apiCategory from '../api/category';

/** Action Types */
export const CATEGORY_GET_REQUEST = 'CATEGORY_GET_REQUEST';
export const CATEGORY_GET_SUCCESS = 'CATEGORY_GET_SUCCESS';
export const CATEGORY_GET_FAILURE = 'CATEGORY_GET_FAILURE';

export const CATEGORY_CREATE_REQUEST = 'CATEGORY_CREATE_REQUEST';
export const CATEGORY_CREATE_SUCCESS = 'CATEGORY_CREATE_SUCCESS';
export const CATEGORY_CREATE_FAILURE = 'CATEGORY_CREATE_FAILURE';

export const CATEGORY_UPDATE_REQUEST = 'CATEGORY_UPDATE_REQUEST';
export const CATEGORY_UPDATE_SUCCESS = 'CATEGORY_UPDATE_SUCCESS';
export const CATEGORY_UPDATE_FAILURE = 'CATEGORY_UPDATE_FAILURE';

export const CATEGORY_DELETE_REQUEST = 'CATEGORY_DELETE_REQUEST';
export const CATEGORY_DELETE_SUCCESS = 'CATEGORY_DELETE_SUCCESS';
export const CATEGORY_DELETE_FAILURE = 'CATEGORY_DELETE_FAILURE';

/** Initial State */
const INITIAL_STATE: ICategoryState = {
  data: {},
  isLoading: false,
  isLoaded: false,
};

/** Reducer: CategoryReducer */
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

    case CATEGORY_CREATE_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
        isLoaded: true,
      };

    case CATEGORY_CREATE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case CATEGORY_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case CATEGORY_UPDATE_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
        isLoaded: true,
      };

    case CATEGORY_UPDATE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case CATEGORY_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case CATEGORY_DELETE_SUCCESS:
      return {
        ...state,
        data: {},
        isLoading: false,
        isLoaded: false,
      };

    case CATEGORY_DELETE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};



/** Action Creators GET */
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
      data: payload.data.data,
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

/** Action Creators CREATE */
export const categoryCreate = (data: any) => {
  return (dispatch: any) => {
    dispatch(categoryCreateRequest());
    return apiCategory.createCategory(data)
      .then((response: AxiosResponse) => dispatch((categoryCreateSuccess)(response)))
      .catch((error: AxiosError) => dispatch((categoryCreateFailure)(error)));
  };
};

export function categoryCreateRequest(): ICategoryAction {
  return {
    type: CATEGORY_CREATE_REQUEST,
    payload: {}
  };
}

export function categoryCreateSuccess(payload: AxiosResponse): ICategoryAction {
  return {
    type: CATEGORY_CREATE_SUCCESS,
    payload: {
      data: payload.data.data,
    },
  };
}

export function categoryCreateFailure(error: AxiosError): ICategoryAction {
  return {
    type: CATEGORY_CREATE_FAILURE,
    payload: {
      error,
    }
  };
}


/** Action Creators UPDATE */
export const categoryUpdate = (id: string, data: any) => {
  return (dispatch: any) => {
    dispatch(categoryUpdateRequest());
    return apiCategory.updateCategory(id, data)
      .then((response: AxiosResponse) => dispatch((categoryUpdateSuccess)(response)))
      .catch((error: AxiosError) => dispatch((categoryUpdateFailure)(error)));
  };
};

export function categoryUpdateRequest(): ICategoryAction {
  return {
    type: CATEGORY_UPDATE_REQUEST,
    payload: {}
  };
}

export function categoryUpdateSuccess(payload: AxiosResponse): ICategoryAction {
  return {
    type: CATEGORY_UPDATE_SUCCESS,
    payload: {
      data: payload.data.data,
    },
  };
}

export function categoryUpdateFailure(error: AxiosError): ICategoryAction {
  return {
    type: CATEGORY_UPDATE_FAILURE,
    payload: {
      error,
    }
  };
}


/** Action Creators DELETE */
export const categoryDelete = (id: string) => {
  return (dispatch: any) => {
    dispatch(categoryDeleteRequest());
    return apiCategory.deleteCategory(id)
      .then((response: AxiosResponse) => dispatch((categoryDeleteSuccess)(response)))
      .catch((error: AxiosError) => dispatch((categoryDeleteFailure)(error)));
  };
};

export function categoryDeleteRequest(): ICategoryAction {
  return {
    type: CATEGORY_DELETE_REQUEST,
    payload: {}
  };
}

export function categoryDeleteSuccess(payload: AxiosResponse): ICategoryAction {
  return {
    type: CATEGORY_DELETE_SUCCESS,
    payload: {
      data: payload.data.data,
    },
  };
}

export function categoryDeleteFailure(error: AxiosError): ICategoryAction {
  return {
    type: CATEGORY_DELETE_FAILURE,
    payload: {
      error,
    }
  };
}