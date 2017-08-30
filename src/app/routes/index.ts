import App from '../containers/App';
import {Store} from 'redux';
import {IState} from 'models/store';
import configureStoreRoutes from '../modules/Store/routes';
import configureAdminRoutes from '../modules/Admin/routes';


export default (store: Store<IState>) => {
  return {
    childRoutes: [{
      path: '/',
      component: App,
      indexRoute: {onEnter: (nextState: any, replace: any) => replace('/store/catalog')},
      childRoutes: [
        configureStoreRoutes(store),
        configureAdminRoutes(store),
      ],
    }],
  }
};