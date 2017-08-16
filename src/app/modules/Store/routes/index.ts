import Catalog from '../pages/Catalog';
import {Store} from 'redux';
import {IState} from 'models/store';
import {catalogGet} from '../../../redux/modules/catalog';


export default (store: Store<IState>) => {
  return [
    {
      path: 'catalog',
      component: Catalog,
      onEnter: (nextState: any, replace: any, callback: any) => {
        store.dispatch(catalogGet({albumId: 1})).then(() => callback());
      },
    },
  ]
};