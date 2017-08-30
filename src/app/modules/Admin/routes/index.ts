import Admin from '../pages/Admin';
import Catalogs from '../pages/Catalogs';
import Categories from '../pages/Categories';
import Category from '../pages/Category';
import Counter from '../pages/Counter';
import Products from '../pages/Products';
import Attributes from '../pages/Attributes';
import {categoryListGet} from '../redux/categoryList';
import {catalogListGet} from '../redux/catalogList';
import {categoryGet} from '../redux/category';
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
      {
        path: 'products',
        component: Products,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(categoryListGet({albumId: 2})).then(() => callback());
        },
      },
      {
        path: 'attributes',
        component: Attributes,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(categoryListGet({albumId: 3})).then(() => callback());
        },
      },
      {
        path: 'counter',
        component: Counter,
      },
    ],
  }
};