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
import categoryListRedux from '../redux/categoryList';
import catalogListRedux from '../redux/catalogList';
import {catalogGet} from '../redux/catalog';
import {categoryGet} from '../redux/category';
import {productGet} from '../redux/product';
import productListRedux from '../redux/productList';

/* Models */
import {Store} from 'redux';
import {IState} from 'models/store';

import {queryToParams} from '../../../helpers/paramsHelper';


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
          const params = queryToParams(nextState.location.query);
          store.dispatch(catalogListRedux.get(params)).then(() => callback());
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
            store.dispatch(categoryListRedux.get({filter: {catalog_id: nextState.params.id}}))
          ]).then(() => callback());
        },
      },
      {
        path: 'product/list',
        component: ProductListPage,
        onEnter: (nextState: any, replace: any, callback: any) => {
          const params = queryToParams(nextState.location.query);
          store.dispatch(productListRedux.get(params)).then(() => callback());
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
          const params = queryToParams(nextState.location.query);
          store.dispatch(categoryListRedux.get(params)).then(() => callback());
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