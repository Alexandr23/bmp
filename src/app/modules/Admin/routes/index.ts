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


function counterWrapper (func: any, context:any = null) {
  let counter:number = 0;

  return function () {
    counter++;
    let args = Array.prototype.slice.call(arguments);
    args.push(counter);

    func.apply(context, args);
  };
}


export default (store: Store<IState>) => {
  const isClient = typeof window !== 'undefined';

  return {
    path: 'admin',
    component: Admin,
    indexRoute: { onEnter: (nextState: any, replace: any) => replace('/admin/categories') },
    childRoutes: [
      {
        path: 'categories',
        component: Categories,
        onEnter: function (nextState: any, replace: any, callback: any) {
          this.counter = this.counter || 1;
          const state = store.getState();

          if (isClient && state.categoryList.isLoaded && this.counter === 1) {
            callback();
          } else {
            store.dispatch(categoryListGet({albumId: 1})).then(() => callback());
          }

          this.counter++;
        },
      },
      {
        path: 'category/:id',
        component: Category,
        onEnter: counterWrapper((nextState: any, replace: any, callback: any, counter: number) => {
          const state = store.getState();

          if (isClient && state.category.isLoaded && counter === 1) {
            callback();
          } else {
            store.dispatch(categoryGet({id: nextState.params.id})).then(() => callback());
          }
        }),
      },
      {
        path: 'products',
        component: Products,
        onEnter: counterWrapper((nextState: any, replace: any, callback: any, counter: number) => {
          const state = store.getState();

          if (isClient && state.categoryList.isLoaded && counter === 1) {
            callback();
          } else {
            store.dispatch(categoryListGet({albumId: 2})).then(() => callback());
          }
        }),
      },
      {
        path: 'attributes',
        component: Attributes,
        onEnter: counterWrapper((nextState: any, replace: any, callback: any, counter: number) => {
          const state = store.getState();

          if (isClient && state.categoryList.isLoaded && counter === 1) {
            callback();
          } else {
            store.dispatch(categoryListGet({albumId: 3})).then(() => callback());
          }
        }),
      },
      {
        path: 'counter',
        component: Counter,
      },
    ],
  }
};