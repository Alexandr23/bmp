/**
 * Хелпер для преобразования объекта с параметрами фильтра списка {is_active: true} для api {'filter[is_active]': true}
 * @param filter
 * @returns {{}}
 */
export function objectToFilter (filter: Object) {
  let params = {};
  Object.keys(filter).forEach(key => params['filter[' + key + ']'] = filter[key]);
  return params;
}