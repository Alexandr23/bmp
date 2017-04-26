/**
 * Type declerations for global development variables
 */

interface Window {
  // A hack for the Redux DevTools Chrome extension.
  __REDUX_DEVTOOLS_EXTENSION__?: <F extends Function>(f: F) => F;
  __INITIAL_STATE__?: any;
}
