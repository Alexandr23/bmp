import Admin from '../pages/Admin';
import Categories from '../pages/Categories';
import Category from '../pages/Category';
import Counter from '../pages/Counter';
import Products from '../pages/Products';
import Attributes from '../pages/Attributes';
import {categoryListGet} from 'redux/modules/categoryList';
import {categoryGet} from 'redux/modules/category';
import {Store} from 'redux';
import {IState} from 'models/store';

import {AxiosResponse, AxiosError} from 'axios';

import {categoryListGetRequest, categoryListGetSuccess, categoryListGetFailure} from '../../../redux/modules/categoryList';
import * as apiCategory from 'api/category';

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
          store.dispatch((dispatch: any) => {
            dispatch(categoryListGetRequest());
            apiCategory.getCategoryList({albumId: 1})
              .then((response: AxiosResponse) => {dispatch((categoryListGetSuccess)(response)); callback();})
              .catch((error: AxiosError) => {dispatch((categoryListGetFailure)(error)); callback();});
          });

          // store.dispatch(categoryListGet({albumId: 1})).then(() => {
          //   callback();
          // });
        },
      },
      {
        path: 'category/:id',
        component: Category,
        onEnter: (nextState: any, replace: any, callback: any) => {
          console.log(nextState, replace, callback);

          store.dispatch(categoryGet({id: nextState.params.id}));
          callback();
        },
      },
      {
        path: 'products',
        component: Products,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(categoryListGet({albumId: 2}));
          callback();
        },
      },
      {
        path: 'attributes',
        component: Attributes,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(categoryListGet({albumId: 3}));
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