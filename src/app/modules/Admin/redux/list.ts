import {AxiosResponse, AxiosError} from 'axios';
import {ICategoryListAction, ICategoryListState} from '../models/category';
import {IParams} from '../../../models/params';
import {onParamsCreator, metaToParams} from '../../../helpers/paramsHelper';


export interface IListState<Entity> {
  list: Array<Entity>;
  params: IParams;
  isLoading: boolean;
  isLoaded: boolean;
  isForceUpdate: boolean;
}


export const createListRedux = (data: {name: string, getList: any}) => {
  const LIST_GET_REQUEST  = data.name + '/LIST_GET_REQUEST';
  const LIST_GET_SUCCESS  = data.name + '/LIST_GET_SUCCESS';
  const LIST_GET_FAILURE  = data.name + '/LIST_GET_FAILURE';
  const LIST_PARAMS       = data.name + '/LIST_PARAMS';
  const LIST_FORCE_UPDATE = data.name + '/LIST_FORCE_UPDATE';

  /** Initial State */
  const INITIAL_STATE: IListState<any> = {
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


  /** Action Creators */
  const onParams = onParamsCreator(LIST_PARAMS);

  const forceUpdate = () => ({type: LIST_FORCE_UPDATE, payload: {}});

  const get = (params: IParams = {}, isReplaceLocation = false) => {
    return (dispatch: any) => {
      dispatch({type: LIST_GET_REQUEST, payload: {}});
      return data.getList(params)
        .then((response: AxiosResponse) => {
          dispatch({type: LIST_GET_SUCCESS, payload: response});
          dispatch(onParams(metaToParams(response.data.meta), isReplaceLocation, true));
        })
        .catch((error: AxiosError) => dispatch({type: LIST_GET_FAILURE, payload: error}));
    };
  };


  /** Reducer */
  const Reducer = (state = INITIAL_STATE, action: any) => {
    const {type, payload} = action;

    switch (type) {
      case LIST_GET_REQUEST:
        return {
          ...state,
          isLoading: true,
          isForceUpdate: false,
        };

      case LIST_GET_SUCCESS:
        return {
          ...state,
          list: payload.data.data,
          params: metaToParams(payload.data.meta),
          isLoading: false,
          isLoaded: true,
        };

      case LIST_GET_FAILURE:
        return {
          ...state,
          isLoading: false,
        };

      case LIST_PARAMS:
        return {
          ...state,
          params: payload,
        };

      case LIST_FORCE_UPDATE:
        return {
          ...state,
          isForceUpdate: true,
        };

      default:
        return state;
    }
  };


  return {
    get,
    onParams,
    forceUpdate,
    Reducer,
  };
};