import {PaginationProps} from 'antd/lib/pagination';


/**
 * Готовит пагинации для фильтра из объекта пагинации Ant Design
 */
export const pagination = (page: PaginationProps) => ({number: page.current, size: page.pageSize});