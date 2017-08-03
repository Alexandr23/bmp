import Admin from '../pages/Admin';
import Categories from '../pages/Categories';
import Category from '../pages/Category';
import Counter from '../pages/Counter';
import Products from '../pages/Products';
import Attributes from '../pages/Attributes';
import {catalogGet} from 'redux/modules/catalog';
import {Store} from 'redux';
import {IState} from 'models/store';

export default (store: Store<IState>) => {
  return {
    path: 'admin',
    component: Admin,
    indexRoute: { onEnter: (nextState: any, replace: any) => replace('/categories') },
    childRoutes: [
      {
        path: 'categories',
        component: Categories,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(catalogGet({albumId: 1}));
          callback();
        },
      },
      {
        path: 'category/:id',
        component: Category,
        // onEnter: (nextState: any, replace: any, callback: any) => {
        //   store.dispatch(categoryGet({id: 1}));
        //   callback();
        // },
      },
      {
        path: 'products',
        component: Products,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(catalogGet({albumId: 2}));
          callback();
        },
      },
      {
        path: 'attributes',
        component: Attributes,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(catalogGet({albumId: 3}));
          callback();
        },
      },
      {
        path: 'counter',
        component: Counter,
      },
    ],
  }
};