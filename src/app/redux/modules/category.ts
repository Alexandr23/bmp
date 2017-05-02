import { ICategory, ICategoryAction, ICategoryState } from '../../models/category';
import * as apiCategory from '../../api/category';

/** Action Types */
export const CATEGORY_GET_LIST_REQUEST: string = 'CATEGORY_GET_LIST_REQUEST';
export const CATEGORY_GET_LIST_SUCCESS: string = 'CATEGORY_GET_LIST_SUCCESS';
export const CATEGORY_GET_LIST_FAILURE: string = 'CATEGORY_GET_LIST_FAILURE';

/** Initial State */
const INITIAL_STATE: ICategoryState = {
  list: [],
  pagination: {
    page: 1,
    total: 0,
    perPage: 20,
  },
};

/** Reducer: CategoryReducer */
export function CategoryReducer (state = INITIAL_STATE, action: any) {
  const {type, payload} = action;

  switch (type) {
    case CATEGORY_GET_LIST_SUCCESS:
      return {
        ...state,
        list: payload,
      };

    default:
      return state;
  }
};

/** Async Action Creator */
export const categoryGetList = () => {
  return (dispatch: any) => {
    dispatch((categoryGetListRequest as any)(CATEGORY_GET_LIST_REQUEST));
    apiCategory.getCategoryList()
      .then((res: any) => dispatch((categoryGetListSuccess as any)(res.data)))
      .catch((err: any) => dispatch((categoryGetListFailure as any)(err)));
  };
};

/** Action Creator */
export function categoryGetListRequest(): any {
  return {
    type: CATEGORY_GET_LIST_REQUEST,
    payload: {}
  };
}

/** Action Creator */
export function categoryGetListSuccess(payload: any): any {
  return {
    type: CATEGORY_GET_LIST_SUCCESS,
    payload,
  };
}

/** Action Creator */
export function categoryGetListFailure(): any {
  return {
    type: CATEGORY_GET_LIST_FAILURE,
    payload: {}
  };
}