webpackJsonp([1],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(176);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  childRoutes: [{
    path: '/',
    component: _App2.default,
    childRoutes: []
  }]
};

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(104);

var _reactRouter = __webpack_require__(59);

var _reactRouterRedux = __webpack_require__(58);

var _reduxThunk = __webpack_require__(382);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(381);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = __webpack_require__(178);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _reduxLogger2.default)();

var configureStore = function configureStore(preloadedState) {
  return (0, _redux.createStore)(_reducers2.default, preloadedState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, logger, (0, _reactRouterRedux.routerMiddleware)(_reactRouter.browserHistory)), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
    return f;
  }));
};

exports.default = configureStore;

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(343);

var _reactRouter = __webpack_require__(59);

var _routes = __webpack_require__(103);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root(_ref) {
  var store = _ref.store,
      history = _ref.history,
      routeKey = _ref.routeKey;
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_reactRouter.Router, { history: history, routes: _routes2.default, key: routeKey })
  );
};

Root.propTypes = {
  store: _react.PropTypes.object.isRequired,
  history: _react.PropTypes.object.isRequired,
  routes: _react.PropTypes.object.isRequired
};

exports.default = Root;

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(181);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(185);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(186);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(188);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(187);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(5);

var _reactHelmet = __webpack_require__(334);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(App, _PureComponent);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(_reactHelmet2.default, { defaultTitle: 'Big Market Place', titleTemplate: '%s | Big Market Place' }),
        this.props.children
      );
    }
  }]);
  return App;
}(_react.PureComponent), _class.propTypes = {
  children: _react.PropTypes.any
}, _temp);
exports.default = App;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(175);

var ReactDOM = _interopRequireWildcard(_reactDom);

var _reactRouter = __webpack_require__(59);

var _reactRouterRedux = __webpack_require__(58);

var _routes = __webpack_require__(103);

var _routes2 = _interopRequireDefault(_routes);

var _root = __webpack_require__(174);

var _root2 = _interopRequireDefault(_root);

var _store = __webpack_require__(173);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var store = (0, _store2.default)();
var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

ReactDOM.render(React.createElement(_root2.default, { store: store, history: history, routes: _routes2.default }), document.getElementById('app'));

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterRedux = __webpack_require__(58);

var _redux = __webpack_require__(104);

exports.default = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer
});

/***/ })

},[177]);