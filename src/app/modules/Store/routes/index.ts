import Shop from '../pages/Shop';
import Catalog from '../pages/Catalog';
import {Store} from 'redux';
import {IState} from 'models/store';
import {catalogGet} from '../redux/catalog';


export default (store: Store<IState>) => {
  return {
    path: 'store',
    component: Shop,
    indexRoute: {onEnter: (nextState: any, replace: any) => replace('/store/catalog')},
    childRoutes: [
      {
        path: 'catalog',
        component: Catalog,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(catalogGet({albumId: 1})).then(() => callback());
        },
      },
    ],
  };
};