import Admin from '../pages/Admin';
import Catalogs from '../pages/Catalogs';
import Catalog from '../pages/Catalog';
import CatalogCreate from '../pages/CatalogCreate';
import Categories from '../pages/Categories';
import Category from '../pages/Category';
import Product from '../pages/Product';
import Products from '../pages/Products';
import {categoryListGet} from '../redux/categoryList';
import {catalogListGet} from '../redux/catalogList';
import {catalogGet} from '../redux/catalog';
import {categoryGet} from '../redux/category';
import {productGet} from '../redux/product';
import {productListGet} from '../redux/prodictList';
import {Store} from 'redux';
import {IState} from 'models/store';


export default (store: Store<IState>) => {
  const isClient = typeof window !== 'undefined';

  return {
    path: 'admin',
    component: Admin,
    indexRoute: { onEnter: (nextState: any, replace: any) => replace('/admin/categories') },
    childRoutes: [
      {
        path: 'catalogs',
        component: Catalogs,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(catalogListGet()).then(() => callback());
        },
      },
      {
        path: 'catalog/create',
        component: CatalogCreate,
      },
      {
        path: 'catalog/:id',
        component: Catalog,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(catalogGet({id: nextState.params.id})).then(() => callback());
        },
      },
      {
        path: 'products',
        component: Products,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(productListGet()).then(() => callback());
        },
      },
      {
        path: 'product/:id',
        component: Product,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(productGet({id: nextState.params.id})).then(() => callback());
        },
      },
      {
        path: 'categories',
        component: Categories,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(categoryListGet({albumId: 1})).then(() => callback());
        },
      },
      {
        path: 'category/:id',
        component: Category,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(categoryGet({id: nextState.params.id})).then(() => callback());
        },
      },
    ],
  }
};