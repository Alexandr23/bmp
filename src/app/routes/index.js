import App from '../containers/App';
import About from '../containers/About';

export default {
  childRoutes: [{
    path: '/',
    component: App,
    childRoutes: [
      {
        path: 'about',
        component: About,
      }
    ],
  }],
};