/* Admin */
import Admin from '../pages/Admin';

/* Catalog */
import CatalogPage from '../pages/CatalogPage';
import CatalogListPage from '../pages/CatalogListPage';
import CatalogCreatePage from '../pages/CatalogCreatePage';

/* Category */
import CategoryListPage from '../pages/CategoryListPage';
import CategoryPage from '../pages/CategoryPage';

/* Product */
import ProductPage from '../pages/ProductPage';
import ProductListPage from '../pages/ProductListPage';
import ProductCreatePage from '../pages/ProductCreatePage';

/* Redux */
import {categoryListGet, onPagination as onPaginationCategoryList, onFilter as onFilterCategoryList} from '../redux/categoryList';
import {catalogListGet} from '../redux/catalogList';
import {catalogGet} from '../redux/catalog';
import {categoryGet} from '../redux/category';
import {productGet} from '../redux/product';
import {productListGet} from '../redux/prodictList';

/* Models */
import {Store} from 'redux';
import {IState} from 'models/store';

import {queryToFPS} from '../../../helpers/apiHelper';

export default (store: Store<IState>) => {
  const isClient = typeof window !== 'undefined';

  return {
    path: 'admin',
    component: Admin,
    indexRoute: { onEnter: (nextState: any, replace: any) => replace('/admin/catalog/list') },
    childRoutes: [
      {
        path: 'catalog/list',
        component: CatalogListPage,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(catalogListGet()).then(() => callback());
        },
      },
      {
        path: 'catalog/create',
        component: CatalogCreatePage,
      },
      {
        path: 'catalog/:id',
        component: CatalogPage,
        onEnter: (nextState: any, replace: any, callback: any) => {
          Promise.all([
            store.dispatch(catalogGet({id: nextState.params.id})),
            store.dispatch(categoryListGet({filter: {catalog_id: nextState.params.id}}))
          ]).then(() => callback());
        },
      },
      {
        path: 'product/list',
        component: ProductListPage,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(productListGet()).then(() => callback());
        },
      },
      {
        path: 'product/create',
        component: ProductCreatePage,
      },
      {
        path: 'product/:id',
        component: ProductPage,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(productGet({id: nextState.params.id})).then(() => callback());
        },
      },
      {
        path: 'category/list',
        component: CategoryListPage,
        onEnter: (nextState: any, replace: any, callback: any) => {
          const params = queryToFPS(nextState.location.query);

          // Object.keys(params.pagination).length && store.dispatch(onPaginationCategoryList(params.pagination));
          // Object.keys(params.filter).length && store.dispatch(onFilterCategoryList(params.filter));

          store.dispatch(categoryListGet(params)).then(() => callback());
        },
      },
      {
        path: 'category/:id',
        component: CategoryPage,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(categoryGet({id: nextState.params.id})).then(() => callback());
        },
      },
    ],
  }
};