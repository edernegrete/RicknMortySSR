/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPlanets = exports.FETCH_PLANETS = exports.fetchEpisodes = exports.FETCH_EPISODES = exports.fetchCharacters = exports.FETCH_CHARACTERS = undefined;

var _axios = __webpack_require__(34);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_CHARACTERS = exports.FETCH_CHARACTERS = 'fetch_characters';

var fetchCharacters = exports.fetchCharacters = function fetchCharacters(url) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get(url || 'https://rickandmortyapi.com/api/character/');

            case 2:
              res = _context.sent;

              dispatch({
                type: FETCH_CHARACTERS,
                payload: res
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var FETCH_EPISODES = exports.FETCH_EPISODES = 'fetch_episodes';

var fetchEpisodes = exports.fetchEpisodes = function fetchEpisodes(url) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _axios2.default.get(url || 'https://rickandmortyapi.com/api/episode/');

            case 2:
              res = _context2.sent;

              dispatch({
                type: FETCH_EPISODES,
                payload: res
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var FETCH_PLANETS = exports.FETCH_PLANETS = 'fetch_planets';

var fetchPlanets = exports.fetchPlanets = function fetchPlanets(url) {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _axios2.default.get(url || 'https://rickandmortyapi.com/api/location/');

            case 2:
              res = _context3.sent;

              dispatch({
                type: FETCH_PLANETS,
                payload: res
              });

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroll-component");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement('div', { className: 'loading' });
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (action, state, type) {
  var _extends2;

  return _extends({}, state, (_extends2 = {}, _defineProperty(_extends2, type, state[type].concat(action.payload.data.results)), _defineProperty(_extends2, 'info', action.payload.data.info), _defineProperty(_extends2, 'hasMore', action.payload.data.info.next !== ''), _extends2));
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _App = __webpack_require__(23);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(28);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _CharactersListPage = __webpack_require__(30);

var _CharactersListPage2 = _interopRequireDefault(_CharactersListPage);

var _EpisodesListPage = __webpack_require__(36);

var _EpisodesListPage2 = _interopRequireDefault(_EpisodesListPage);

var _PlanetsListPage = __webpack_require__(38);

var _PlanetsListPage2 = _interopRequireDefault(_PlanetsListPage);

var _NotFound = __webpack_require__(39);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: '/',
    exact: true
  }), _extends({}, _EpisodesListPage2.default, {
    path: '/episodes'
  }), _extends({}, _CharactersListPage2.default, {
    path: '/characters'
  }), _extends({}, _PlanetsListPage2.default, {
    path: '/planets'
  }), _extends({}, _NotFound2.default)]
})];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        { key: props.id, className: 'SimpleCard' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h3',
                { className: 'SimpleCard-title' },
                props.name
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            props.list.map(function (item, index) {
                return _react2.default.createElement(
                    'p',
                    { key: index },
                    item.key,
                    ': ',
                    item.value
                );
            })
        )
    );
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

__webpack_require__(13);

var _path = __webpack_require__(14);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(15);

var _fs2 = _interopRequireDefault(_fs);

var _express = __webpack_require__(16);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(4);

var _i18nextExpressMiddleware = __webpack_require__(17);

var _i18nextExpressMiddleware2 = _interopRequireDefault(_i18nextExpressMiddleware);

var _i18nextNodeFsBackend = __webpack_require__(18);

var _i18nextNodeFsBackend2 = _interopRequireDefault(_i18nextNodeFsBackend);

var _i18n = __webpack_require__(19);

var _i18n2 = _interopRequireDefault(_i18n);

var _Routes = __webpack_require__(8);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(41);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(43);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appDirectory = _fs2.default.realpathSync(process.cwd());
var resolveApp = function resolveApp(relativePath) {
  return _path2.default.resolve(appDirectory, relativePath);
};

var appSrc = resolveApp('src');

var app = (0, _express2.default)();

_i18n2.default.use(_i18nextNodeFsBackend2.default).use(_i18nextExpressMiddleware2.default.LanguageDetector).init({
  preload: ['en', 'es'],
  backend: {
    loadPath: appSrc + '/translations/locales/{{lng}}/{{ns}}.json',
    addPath: appSrc + '/translations/locales/{{lng}}/{{ns}}.missing.json'
  }
}, function () {
  app.disable('x-powered-by').use('/locales', _express2.default.static(__dirname + '/src/translations')).use(_express2.default.static('public')).use(_i18nextExpressMiddleware2.default.handle(_i18n2.default)).get('*', function (req, res) {
    var store = (0, _createStore2.default)();
    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
      var route = _ref.route;
      return route.loadData ? route.loadData(store) : null;
    });
    Promise.all(promises).then(function () {
      res.send((0, _renderer2.default)(req, store));
    });
  });
});
app.listen(process.env.PORT || 3000, function () {
  console.log('listening in 3000');
});
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("i18next-express-middleware");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("i18next-node-fs-backend");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _i18next = __webpack_require__(20);

var _i18next2 = _interopRequireDefault(_i18next);

var _i18nextXhrBackend = __webpack_require__(21);

var _i18nextXhrBackend2 = _interopRequireDefault(_i18nextXhrBackend);

var _i18nextBrowserLanguagedetector = __webpack_require__(22);

var _i18nextBrowserLanguagedetector2 = _interopRequireDefault(_i18nextBrowserLanguagedetector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  fallbackLng: 'es',
  load: 'currentOnly',
  ns: ['translations'],
  defaultNS: 'translations',

  debug: false,

  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    format: function format(value, _format, lng) {
      if (_format === 'uppercase') return value.toUpperCase();
      return value;
    }
  },
  wait: process && !process.release
};

if (process && !process.release) {
  _i18next2.default.use(_i18nextXhrBackend2.default).use(_i18nextBrowserLanguagedetector2.default);
}

if (!_i18next2.default.isInitialized) _i18next2.default.init(options);

module.exports = _i18next2.default;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("i18next-xhr-backend");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(4);

var _NavigationBar = __webpack_require__(24);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

__webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        { className: 'root' },
        _react2.default.createElement(_NavigationBar2.default, null),
        _react2.default.createElement(
            'div',
            { id: 'page-content' },
            (0, _reactRouterConfig.renderRoutes)(route.routes)
        )
    );
};

exports.default = {
    component: App
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

var _reactI18next = __webpack_require__(1);

var _logo = __webpack_require__(25);

var _logo2 = _interopRequireDefault(_logo);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavigationBar(props) {
    var t = props.t;

    return _react2.default.createElement(
        'div',
        { className: 'Navigation' },
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            _react2.default.createElement(
                'div',
                { className: 'Navigation-logo' },
                _react2.default.createElement('img', { src: _logo2.default })
            ),
            _react2.default.createElement(
                'h1',
                { className: 'Navigation-title' },
                t('general.title')
            )
        ),
        _react2.default.createElement(
            'ul',
            { className: 'Navigation-list' },
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/characters' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        t('general.characters')
                    )
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/episodes' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        t('general.episodes')
                    )
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/planets' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        t('general.planets')
                    )
                )
            )
        )
    );
}
exports.default = (0, _reactI18next.withNamespaces)('translations')(NavigationBar);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "57ec2438cc1a8024bd06be2f40a6b2ad.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactI18next = __webpack_require__(1);

var _rm = __webpack_require__(29);

var _rm2 = _interopRequireDefault(_rm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(props) {
    var t = props.t;

    return _react2.default.createElement(
        'div',
        { className: 'Home' },
        _react2.default.createElement(
            'h1',
            null,
            t('home.title')
        ),
        _react2.default.createElement(
            'h2',
            null,
            t('home.subtitle')
        ),
        _react2.default.createElement(
            'p',
            null,
            t('home.action')
        ),
        _react2.default.createElement('img', { src: _rm2.default })
    );
};

exports.default = {
    component: (0, _reactI18next.withNamespaces)('translations')(Home)
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1328e74c0bdc8e8a2adc8f64ba63f5c8.jpg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _reactI18next = __webpack_require__(1);

var _reactInfiniteScrollComponent = __webpack_require__(5);

var _reactInfiniteScrollComponent2 = _interopRequireDefault(_reactInfiniteScrollComponent);

var _DetailCard = __webpack_require__(31);

var _DetailCard2 = _interopRequireDefault(_DetailCard);

var _Loading = __webpack_require__(6);

var _Loading2 = _interopRequireDefault(_Loading);

var _actions = __webpack_require__(2);

__webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CharactersList = function (_Component) {
    _inherits(CharactersList, _Component);

    function CharactersList() {
        _classCallCheck(this, CharactersList);

        return _possibleConstructorReturn(this, (CharactersList.__proto__ || Object.getPrototypeOf(CharactersList)).apply(this, arguments));
    }

    _createClass(CharactersList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.characters.length > 0) return;
            this.fetchData();
        }
    }, {
        key: 'fetchData',
        value: function fetchData() {
            if (!this.props.hasMore) return;
            return this.props.fetchCharacters(this.props.info.next);
        }
    }, {
        key: 'renderList',
        value: function renderList() {
            return this.props.characters.map(function (character) {
                return _react2.default.createElement(_DetailCard2.default, { key: character.id,
                    image: character.image,
                    title: character.name,
                    subtitle: character.status });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var t = this.props.t;

            return _react2.default.createElement(
                'div',
                { className: 'Characters' },
                _react2.default.createElement(
                    'h2',
                    null,
                    t('general.characters')
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Characters-list' },
                    this.props.characters && _react2.default.createElement(
                        _reactInfiniteScrollComponent2.default,
                        {
                            dataLength: this.props.characters.length,
                            next: this.fetchData.bind(this),
                            hasMore: this.props.hasMore,
                            loader: _react2.default.createElement(_Loading2.default, null) },
                        this.renderList()
                    )
                )
            );
        }
    }]);

    return CharactersList;
}(_react.Component);

function mapStateToProps(state) {
    return {
        characters: state.characters.charactersList,
        info: state.characters.info,
        hasMore: state.characters.hasMore
    };
}
function loadData(store) {
    return store.dispatch((0, _actions.fetchCharacters)());
}

exports.default = {
    component: (0, _reactI18next.withNamespaces)('translations')((0, _reactRedux.connect)(mapStateToProps, { fetchCharacters: _actions.fetchCharacters })(CharactersList)),
    loadData: loadData
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        { className: 'DetailCard' },
        _react2.default.createElement(
            'div',
            { className: 'Card-image' },
            _react2.default.createElement('img', { src: props.image })
        ),
        _react2.default.createElement(
            'div',
            { className: 'Card-header' },
            _react2.default.createElement(
                'p',
                { className: 'Card-title' },
                props.title
            ),
            _react2.default.createElement(
                'p',
                { className: 'Card-subtitle' },
                props.subtitle
            )
        )
    );
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _reactI18next = __webpack_require__(1);

var _reactInfiniteScrollComponent = __webpack_require__(5);

var _reactInfiniteScrollComponent2 = _interopRequireDefault(_reactInfiniteScrollComponent);

var _TexCard = __webpack_require__(10);

var _TexCard2 = _interopRequireDefault(_TexCard);

var _Loading = __webpack_require__(6);

var _Loading2 = _interopRequireDefault(_Loading);

var _actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EpisodesList = function (_Component) {
    _inherits(EpisodesList, _Component);

    function EpisodesList() {
        _classCallCheck(this, EpisodesList);

        return _possibleConstructorReturn(this, (EpisodesList.__proto__ || Object.getPrototypeOf(EpisodesList)).apply(this, arguments));
    }

    _createClass(EpisodesList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.episodes.length > 0) return;
            this.fetchData();
        }
    }, {
        key: 'fetchData',
        value: function fetchData() {
            if (!this.props.hasMore) return;
            return this.props.fetchEpisodes(this.props.info.next);
        }
    }, {
        key: 'renderList',
        value: function renderList(t) {
            return this.props.episodes.map(function (episode) {
                var lists = [{
                    key: t('shows.airDate'),
                    value: episode.air_date
                }, {
                    key: t('shows.name'),
                    value: episode.episode
                }];
                return _react2.default.createElement(_TexCard2.default, {
                    key: episode.id,
                    name: episode.name,
                    list: lists });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var t = this.props.t;

            return _react2.default.createElement(
                'div',
                { className: 'Episodes' },
                _react2.default.createElement(
                    'h2',
                    null,
                    t('general.episodes')
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Episodes-list' },
                    this.props.episodes && _react2.default.createElement(
                        _reactInfiniteScrollComponent2.default,
                        {
                            dataLength: this.props.episodes.length,
                            next: this.fetchData.bind(this),
                            hasMore: this.props.hasMore,
                            loader: _react2.default.createElement(_Loading2.default, null) },
                        this.renderList(t)
                    )
                )
            );
        }
    }]);

    return EpisodesList;
}(_react.Component);

function mapStateToProps(_ref) {
    var episodes = _ref.episodes;

    return {
        episodes: episodes.episodesList,
        info: episodes.info,
        hasMore: episodes.hasMore
    };
}
function loadData(store) {
    return store.dispatch((0, _actions.fetchEpisodes)());
}

exports.default = {
    component: (0, _reactI18next.withNamespaces)('translations')((0, _reactRedux.connect)(mapStateToProps, { fetchEpisodes: _actions.fetchEpisodes })(EpisodesList)),
    loadData: loadData
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _reactI18next = __webpack_require__(1);

var _reactInfiniteScrollComponent = __webpack_require__(5);

var _reactInfiniteScrollComponent2 = _interopRequireDefault(_reactInfiniteScrollComponent);

var _TexCard = __webpack_require__(10);

var _TexCard2 = _interopRequireDefault(_TexCard);

var _Loading = __webpack_require__(6);

var _Loading2 = _interopRequireDefault(_Loading);

var _actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlanetsList = function (_Component) {
    _inherits(PlanetsList, _Component);

    function PlanetsList() {
        _classCallCheck(this, PlanetsList);

        return _possibleConstructorReturn(this, (PlanetsList.__proto__ || Object.getPrototypeOf(PlanetsList)).apply(this, arguments));
    }

    _createClass(PlanetsList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.planets.length > 0) return;
            this.fetchData();
        }
    }, {
        key: 'fetchData',
        value: function fetchData() {
            if (!this.props.hasMore) return;
            return this.props.fetchPlanets(this.props.info.next);
        }
    }, {
        key: 'renderList',
        value: function renderList(t) {
            return this.props.planets.map(function (planet) {
                var lists = [{
                    key: t('planets.dimension'),
                    value: planet.dimension
                }, {
                    key: t('planets.numberOfResidents'),
                    value: planet.residents.length
                }];

                return _react2.default.createElement(_TexCard2.default, {
                    key: planet.id,
                    name: planet.name,
                    list: lists });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var t = this.props.t;

            return _react2.default.createElement(
                'div',
                { className: 'Planets' },
                _react2.default.createElement(
                    'h2',
                    null,
                    t('general.planets')
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Planets-list' },
                    this.props.planets && _react2.default.createElement(
                        _reactInfiniteScrollComponent2.default,
                        {
                            dataLength: this.props.planets.length,
                            next: this.fetchData.bind(this),
                            hasMore: this.props.hasMore,
                            loader: _react2.default.createElement(_Loading2.default, null) },
                        this.renderList(t)
                    )
                )
            );
        }
    }]);

    return PlanetsList;
}(_react.Component);

function mapStateToProps(_ref) {
    var planets = _ref.planets;

    return {
        planets: planets.planetsList,
        info: planets.info,
        hasMore: planets.hasMore
    };
}
function loadData(store) {
    return store.dispatch((0, _actions.fetchPlanets)());
}

exports.default = {
    component: (0, _reactI18next.withNamespaces)('translations')((0, _reactRedux.connect)(mapStateToProps, { fetchPlanets: _actions.fetchPlanets })(PlanetsList)),
    loadData: loadData
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ = __webpack_require__(40);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', { src: _2.default })
    );
};
exports.default = {
    component: NotFound
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7ad7a8d96df2e3ea2892542b21c1f333.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(42);

var _reactRouterDom = __webpack_require__(9);

var _reactRedux = __webpack_require__(3);

var _reactI18next = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(4);

var _Routes = __webpack_require__(8);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
  var context = {};
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactI18next.I18nextProvider,
      { i18n: req.i18n },
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.path, context: context },
        _react2.default.createElement(
          'div',
          null,
          (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
        )
      )
    )
  ));
  var initialI18nStore = {};
  req.i18n.languages.forEach(function (l) {
    initialI18nStore[l] = req.i18n.services.resourceStore.data[l];
  });
  var initialLanguage = req.i18n.language;
  return '\n      <html>\n        <head>\n          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">\n          <link rel="stylesheet" href="/css/main.css">  \n        </head>\n        <body>\n          <div id="app">' + content + '</div>\n          <script>\n            window.INITIAL_STATE = ' + JSON.stringify(store.getState()) + '\n            window.initialI18nStore = JSON.parse(\'' + JSON.stringify(initialI18nStore) + '\');\n            window.initialLanguage = \'' + initialLanguage + '\';\n          </script>\n          <script src="bundle.js"></script>\n        </body>\n      </html>\n    ';
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _reduxThunk = __webpack_require__(44);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(45);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
  return store;
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _charactersReducer = __webpack_require__(46);

var _charactersReducer2 = _interopRequireDefault(_charactersReducer);

var _episodesReducer = __webpack_require__(47);

var _episodesReducer2 = _interopRequireDefault(_episodesReducer);

var _planetsReducer = __webpack_require__(48);

var _planetsReducer2 = _interopRequireDefault(_planetsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  characters: _charactersReducer2.default,
  episodes: _episodesReducer2.default,
  planets: _planetsReducer2.default
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

var _stateParser = __webpack_require__(7);

var _stateParser2 = _interopRequireDefault(_stateParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  charactersList: [],
  info: [],
  hasMore: true
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_CHARACTERS:
      return (0, _stateParser2.default)(action, state, 'charactersList');
    default:
      return state;
  }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

var _stateParser = __webpack_require__(7);

var _stateParser2 = _interopRequireDefault(_stateParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  episodesList: [],
  info: [],
  hasMore: true
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_EPISODES:
      return (0, _stateParser2.default)(action, state, 'episodesList');
    default:
      return state;
  }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

var _stateParser = __webpack_require__(7);

var _stateParser2 = _interopRequireDefault(_stateParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  planetsList: [],
  info: [],
  hasMore: true
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_PLANETS:
      return (0, _stateParser2.default)(action, state, 'planetsList');
    default:
      return state;
  }
};

/***/ })
/******/ ]);