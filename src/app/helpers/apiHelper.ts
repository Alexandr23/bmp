function objectTo (params: Object, type: string) {
  let preparedParams = {};
  Object.keys(params).forEach(key => preparedParams[type + '[' + key + ']'] = params[key]);
  return preparedParams;
}

/**
 * Хелпер для преобразования объекта с параметрами фильтра списка {is_active: true} для api {'filter[is_active]': true}
 * @param filter
 * @returns {{}}
 */
export function objectToFilter (filter: Object) {
  return objectTo(filter, 'filter');
}

/**
 * Хелпер для преобразования объекта пагинации {number: 2, size: 20} для api {'page[number]': 2, 'page[size]': 20}
 * @param page
 * @returns {{}}
 */
export function objectToPage (page: Object) {
  return objectTo(page, 'page');
}