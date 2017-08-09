import App from '../containers/App';
import {Store} from 'redux';
import {IState} from 'models/store';
import configureAdminRoutes from '../modules/Admin/routes';


export default (store: Store<IState>) => {
  return {
    childRoutes: [{
      path: '/',
      component: App,
      childRoutes: [
        configureAdminRoutes(store),
      ],
    }],
  }
};