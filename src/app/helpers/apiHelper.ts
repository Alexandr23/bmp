/**
 * Хелпер для преобразования объекта фильтра/пагинации для api
 */
function objectTo (params: Object, type: string) {
  let preparedParams = {};
  Object.keys(params).forEach(key => preparedParams[type + '[' + key + ']'] = params[key]);
  return preparedParams;
}


/**
 * Хелпер для преобразования объекта с параметрами фильтра списка {is_active: true} для api {'filter[is_active]': true}
 */
export const objectToFilter = (filter: Object) => objectTo(filter, 'filter');


/**
 * Хелпер для преобразования объекта пагинации {number: 2, size: 20} для api {'page[number]': 2, 'page[size]': 20}
 */
export const objectToPage = (page: Object) => objectTo(page, 'page');



export const paramsToApi = (params: any) => ({
  ...objectToPage(params.pagination || {}),
  ...objectToFilter(params.filter || {}),
});


// deprecated!!!
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