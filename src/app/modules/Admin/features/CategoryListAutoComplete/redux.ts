import {AxiosResponse, AxiosError} from 'axios';
import {ICategoryListAction, ICategoryListState} from '../../models/category';
import * as apiCategory from '../../api/category';
import {IParams} from '../../../../models/params';
import {onParamsCreator, metaToParams} from '../../../../helpers/paramsHelper';

/** Action Types */
export const CATEGORY_LIST_GET_REQUEST  = 'feature/CategoryListAutoComplete/CATEGORY_LIST_GET_REQUEST';
export const CATEGORY_LIST_GET_SUCCESS  = 'feature/CategoryListAutoComplete/CATEGORY_LIST_GET_SUCCESS';
export const CATEGORY_LIST_GET_FAILURE  = 'feature/CategoryListAutoComplete/CATEGORY_LIST_GET_FAILURE';
export const CATEGORY_LIST_PARAMS       = 'feature/CategoryListAutoComplete/CATEGORY_LIST_PARAMS';
export const CATEGORY_LIST_FORCE_UPDATE = 'feature/CategoryListAutoComplete/CATEGORY_LIST_FORCE_UPDATE';


/** Initial State */
const INITIAL_STATE: ICategoryListState = {
  list: [],
  params: {
    pagination: {
      total: 0,
      number: 1,
      size: 20,
    },
    filter: {},
    sort: [],
  },
  isLoading: false,
  isLoaded: false,
  isForceUpdate: false,
};


/** Reducer: CatalogReducer */
export function CategoryListReducer (state = INITIAL_STATE, action: ICategoryListAction) {
  const {type, payload} = action;

  switch (type) {
    case CATEGORY_LIST_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
        isForceUpdate: false,
      };

    case CATEGORY_LIST_GET_SUCCESS:
      return {
        ...state,
        list: payload.data.data,
        params: metaToParams(payload.data.meta),
        isLoading: false,
        isLoaded: true,
      };

    case CATEGORY_LIST_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case CATEGORY_LIST_PARAMS:
      return {
        ...state,
        params: payload,
      };

    case CATEGORY_LIST_FORCE_UPDATE:
      return {
        ...state,
        isForceUpdate: true,
      };

    default:
      return state;
  }
}


/** Action Creators */
export const onParams = onParamsCreator(CATEGORY_LIST_PARAMS);
export const forceUpdate = () => ({type: CATEGORY_LIST_FORCE_UPDATE, payload: {}});

export const categoryListGet = (params: IParams = {}, isReplaceLocation = false) => {
  return (dispatch: any) => {
    dispatch({type: CATEGORY_LIST_GET_REQUEST, payload: {}});

    return apiCategory.getCategoryList(params)
      .then((response: AxiosResponse) => {
        dispatch({type: CATEGORY_LIST_GET_SUCCESS, payload: response});
        dispatch(onParams(metaToParams(response.data.meta), isReplaceLocation, true));
      })
      .catch((error: AxiosError) => dispatch({type: CATEGORY_LIST_GET_FAILURE, payload: error}));
  };
};