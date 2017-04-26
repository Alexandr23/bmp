import App from '../containers/App';
import About from '../containers/About';
import Counter from '../containers/Counter';

export default {
  childRoutes: [{
    path: '/',
    component: App,
    childRoutes: [
      {
        path: 'about',
        component: About,
      },
      {
        path: 'counter',
        component: Counter,
      }
    ],
  }],
};