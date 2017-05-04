import Admin from '../containers/Admin';
import Catalog from '../containers/Catalog';
import {catalogGet} from 'redux/modules/catalog';
import {Store} from 'redux';
import {IState} from 'models/store';

export default (store: Store<IState>) => {
  return {
    path: 'admin',
    component: Admin,
    childRoutes: [
      {
        path: 'catalog',
        component: Catalog,
        onEnter: (nextState: any, replace: any, callback: any) => {
          store.dispatch(catalogGet());
          callback();
        },
      },
    ],
  }
};