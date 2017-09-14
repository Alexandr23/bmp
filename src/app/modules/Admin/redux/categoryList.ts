import {AxiosResponse, AxiosError} from 'axios';
import {browserHistory} from 'react-router';
import {replace} from 'react-router-redux';
import {ICategory, ICategoryListAction, ICategoryListState} from '../models/category';
import * as apiCategory from '../api/category';
import {PaginationProps} from 'antd/lib/pagination';
import * as antHelper from '../../../helpers/antHelper';
import * as apiHelper from '../../../helpers/apiHelper';

/** Action Types */
export const CATEGORY_LIST_GET_REQUEST: string = 'CATEGORY_LIST_GET_REQUEST';
export const CATEGORY_LIST_GET_SUCCESS: string = 'CATEGORY_LIST_GET_SUCCESS';
export const CATEGORY_LIST_GET_FAILURE: string = 'CATEGORY_LIST_GET_FAILURE';

export const PAGINATION: string = 'CATEGORY_LIST_PAGINATION';
export const FILTER: string = 'CATEGORY_LIST_FILTER';
export const SORT: string = 'CATEGORY_LIST_SORT';


/** Initial State */
const INITIAL_STATE: ICategoryListState = {
  list: [],
  pagination: {
    total: 0,
    number: 1,
    size: 20,
  },
  filter: {},
  sort: {},
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
        isLoading: true
      };

    case CATEGORY_LIST_GET_SUCCESS:
      const page = payload.data.meta.page;

      return {
        ...state,
        list: payload.data.data,
        pagination: {
          total: page['total-items'],
          number: page['current-page-number'],
          size: page['current-page-size'],
        },
        isLoading: false,
        isLoaded: true,
      };

    case CATEGORY_LIST_GET_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    case PAGINATION:
      return {
        ...state,
        pagination: {...state.pagination, ...payload.pagination},
      };

    case FILTER:
      return {
        ...state,
        filter: {...state.filter, ...payload.filter},
      };

    default:
      return state;
  }
}


/** Action Creators */
export const categoryListGet = ({pagination = {}, filter = {}, sort = {}}) => {
  return (dispatch: any, getState: any) => {
    dispatch({type: CATEGORY_LIST_GET_REQUEST, payload: {}});

    const categoryList = getState().admin.categoryList;
    const params = {
      pagination: Object.assign({}, categoryList.pagination, pagination),
      filter: Object.assign({}, categoryList.filter, filter),
      sort: Object.assign({}, categoryList.sort, sort),
    };

    return apiCategory.getCategoryList(params)
      .then((response: AxiosResponse) => dispatch({type: CATEGORY_LIST_GET_SUCCESS, payload: response}))
      .catch((error: AxiosError) => dispatch({type: CATEGORY_LIST_GET_FAILURE, payload: error}));
  };
};



export function onPagination(payload: PaginationProps) {
  return (dispatch: any, getState: any) => {
    dispatch({
      type: PAGINATION,
      payload: {pagination: payload},
    });

    const location = getState().routing.locationBeforeTransitions;
    dispatch(replaceLocationQuery(location, payload));
  };
}

export function onFilter(payload: any) {
  return (dispatch: any, getState: any) => {
    dispatch({
      type: FILTER,
      payload: {filter: payload},
    });

    const location = getState().routing.locationBeforeTransitions;
    dispatch(replaceLocationQuery(location, payload));
  };
}

export const replaceLocationQuery = (location, query, force = false) => {
  return replace({
    ...location,
    query: force ? query : {
      ...location.query,
      ...query,
    },
  });
};