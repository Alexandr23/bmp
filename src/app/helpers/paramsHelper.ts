import {IParams} from "../models/params";
import {objectToFilter} from "../helpers/apiHelper";
import {replace} from "react-router-redux";


/**
 * Метод создает actionCreator onParams с указанным type.
 * @param {string} type
 */
export const onParamsCreator = (type: string) => (params: IParams, isReplaceLocation = false, force = false) => (dispatch: any, getState: any) => {
  dispatch({
    type,
    payload: {
      pagination: params.pagination,
      filter: params.filter,
    },
  });

  if (isReplaceLocation) {
    const location = getState().routing.locationBeforeTransitions;
    const query = {
      number: params.pagination.number,
      size: params.pagination.size,
      ...objectToFilter(params.filter),
    };

    dispatch(replaceLocationQuery(location, query, force));
  }
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


export const metaToParams = (meta) => ({
  pagination: meta.page,
  filter: meta.filter,
  sort: meta.sort,
})


export const queryToParams = (query: any) => {
  let pagination:any = {}, filter:any = {}, sort:any = {};

  query.number && (pagination.number = query.number);
  query.size && (pagination.size = query.size);

  Object.keys(query).map(key => {
    let param = key.match(/filter\[(\w+)]/);
    param && (filter[param[1]] = query[key]);
  });

  return {pagination, filter, sort};
};