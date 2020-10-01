"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Index;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _core = require("@babel/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 1rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  min-height: 50px;\n  padding: 20px 0px;\n  transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);\n\n  /* active styling */\n  &.active {\n    background: ", " !important;\n    padding: 10px 0;\n    /* drop shadow */\n    box-shadow: ", ";\n  }\n  /* brand image active styling */\n  #react-sticky-navbar-brand-container {\n    transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);\n  }\n  &.active #react-sticky-navbar-brand-container {\n    transform: scale(1.4);\n  }\n  /* nav links active styling */\n  .sticky-navbar-location-nav-button {\n  }\n  &.active .sticky-navbar-location-nav-button {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Index(props) {
  var _ref;

  var log = console.log; // setup defaults if none provided

  var params = {
    locations: (props === null || props === void 0 ? void 0 : props.locations) || null,
    brandIcon: processBrandImage(props === null || props === void 0 ? void 0 : props.brandIcon),
    // image element
    maxWidth: (props === null || props === void 0 ? void 0 : props.maxWidth) || 1024,
    backgroundColorDocked: (props === null || props === void 0 ? void 0 : props.backgroundColorDocked) || "white",
    backgroundColorActive: (props === null || props === void 0 ? void 0 : props.backgroundColorActive) || "black",
    dropShadow: (props === null || props === void 0 ? void 0 : props.dropShadow) || true,
    brandLink: (props === null || props === void 0 ? void 0 : props.brandLink) || "/",
    textStylesActive: (props === null || props === void 0 ? void 0 : props.textStylesActive) || {},
    textStylesDocked: (props === null || props === void 0 ? void 0 : props.textStylesDocked) || {}
  }; // location tracking

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      map = _useState4[0],
      setMap = _useState4[1];

  var mapRef = (0, _react.useRef)(map);
  mapRef.current = map;

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      windowHeight = _useState6[0],
      setWindowHeight = _useState6[1];

  var windowHeightRef = (0, _react.useRef)(windowHeight);
  windowHeightRef.current = windowHeight; // setup listeners

  (0, _react.useEffect)(function () {
    // set scroll behavior to smooth
    document.documentElement.style.scrollBehavior = "smooth";
    document.addEventListener("scroll", (0, _throttle.default)(onscroll, 50));
    document.addEventListener("resize", resizeWindow);
    setMap(generateMap(params.locations));
    resizeWindow();
  }, []); // on mount

  function onscroll() {
    // console.log("Scroll call")
    var position = getScrollLocation();
    log(position); // determine if scroll styling is active

    determineIfScrolled(position); // determine what section is being seen

    if (Object.keys(mapRef.current).length === 0) {
      // log(map)
      return; // return if map is default empty object
    }

    log(mapRef.current);
    var activePath = getActiveLocation();
    setActive(function (oldState) {
      return activePath;
    });
  }

  function getScrollLocation() {
    return window.scrollY;
  }

  function getActiveLocation() {
    var active = 0;
    console.log('getting active location');
    mapRef.current.forEach(function (mapObj, index) {
      // console.log(mapObj)
      if (window.scrollY + windowHeightRef.current / 2 > mapObj.location) {
        active = index; // console.log('can see '+path)
      }

      return;
    }); // this returns last matching path of visible element

    return active;
  }

  function resizeWindow() {
    var windowHeight = getWindowSize();
    setWindowHeight(windowHeight);

    function getWindowSize() {
      return window.innerHeight;
    }
  } // apply active class


  var headerRef = (0, _react.useRef)();

  function determineIfScrolled() {
    if (window.scrollY > 10) {
      headerRef.current.classList.add("active");
      return;
    }

    headerRef.current.classList.remove("active");
  } // generate location map for id scroll positions on page


  function generateMap(locationArray) {
    var inValid = false; //error handling

    if (!locationArray) {
      return;
    }

    locationArray.forEach(function (locationObj, index) {
      if (!document.getElementById(locationObj.id)) {
        inValid = true;
      }
    }); // exit if id's do not resolve

    if (inValid) {
      return;
    } // generate array


    var map = [];
    locationArray.forEach(function (pathObj, index) {
      var newObj = {
        id: pathObj.id,
        text: pathObj.text,
        location: getLocationPixels(pathObj.id)
      };
      console.log(newObj);
      map.push(newObj);
    });
    return map;

    function getLocationPixels(idString) {
      var el = document.getElementById(idString);
      return el.getBoundingClientRect().top + window.scrollY;
    }
  } // navigate on button press


  function handleNavigation(e, idString) {
    e.preventDefault();
    log("Navigating to ID: " + idString); // first, refresh location map

    setMap(generateMap(params.locations));
    var index = map.map(function (f) {
      return f.id;
    }).indexOf(idString); // if home index selected

    if (index === 0) {
      window.scrollTo(0, 0);
      return;
    } // if non-home index selected


    window.scrollTo(0, parseInt(map[index].location) - windowHeight / 3);
  }

  var _useState7 = (0, _react.useState)(10),
      _useState8 = _slicedToArray(_useState7, 2),
      indicatorWidth = _useState8[0],
      setIndicatorWidth = _useState8[1];

  var _useState9 = (0, _react.useState)(10),
      _useState10 = _slicedToArray(_useState9, 2),
      indicatorOffset = _useState10[0],
      setIndicatorOffset = _useState10[1]; // callback for when active section changes


  (0, _react.useEffect)(function () {
    // do calculations for indicator size and position
    console.log('new active: ' + active);
    var leftOffset = document.getElementById("".concat(params.locations[active].id, "-link")).offsetLeft;
    var width = document.getElementById("".concat(params.locations[active].id, "-link")).offsetWidth;
    console.log('width: ' + width);
    console.log('offset: ' + leftOffset);
    setIndicatorWidth(width);
    setIndicatorOffset(leftOffset);
  }, [active]);

  var indicatorComponent = /*#__PURE__*/_react.default.createElement("div", {
    style: (_ref = {
      transition: "all .4s cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      borderRadius: "5px",
      position: 'absolute',
      bottom: 0,
      background: "white",
      height: '2px'
    }, _defineProperty(_ref, "background", "black"), _defineProperty(_ref, "width", "".concat(indicatorWidth / 4, "px")), _defineProperty(_ref, "transform", "translateX(".concat(indicatorOffset + (indicatorWidth / 4 + indicatorWidth / 8), "px")), _ref)
  }); //   navigator component


  var navComponent = /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "sticky-navbar-nav-links",
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center"
    }
  }, params.locations.map(function (locationObj, index) {
    return /*#__PURE__*/_react.default.createElement(NavButton, {
      key: "sticky-navbar-link-key-".concat(index),
      className: "sticky-navbar-location-nav-button",
      id: "".concat(locationObj.id, "-link"),
      style: _objectSpread(_objectSpread({}, params.textStyleDocked), {}, {
        fontSize: "1rem"
      }),
      onClick: function onClick(e) {
        handleNavigation(e, locationObj.id);
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "sticky-navbar-location-text"
    }, locationObj.text));
  })), /*#__PURE__*/_react.default.createElement("div", {
    id: "sticky-navbar-nav-indicator",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: '2px'
    }
  }, indicatorComponent)); // render


  return /*#__PURE__*/_react.default.createElement(Header, {
    id: "react-sticky-navbar",
    ref: headerRef,
    className: "",
    style: {
      position: "sticky",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      background: params.backgroundColorDocked
    } // paramter drops
    ,
    secondary: params.backgroundColorActive,
    dropShadow: params.dropShadow,
    textStylesActive: _objectSpread(_objectSpread({}, params.textStyleActive), {}, {
      color: "white"
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "sticky-navbar-content-wrapper",
    style: {
      maxWidth: "".concat(params.maxWidth, "px"),
      margin: "0 auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: params.brandLink || "/"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "react-sticky-navbar-brand-container",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, params.brandIcon)), /*#__PURE__*/_react.default.createElement("div", {
    id: "react-sticky-navbar-links-container"
  }, params.locations && navComponent)));
}

var Header = _styledComponents.default.header(_templateObject(), function (props) {
  return props.secondary;
}, function (props) {
  return props.dropShadow ? "0 4px 8px rgba(0,0,0,.3)" : "none";
}, function (props) {
  return props.textStylesActive.color;
});

var NavButton = _styledComponents.default.button(_templateObject2());

Index.propTypes = {
  /** type:[object] - object array of element ID to include in navigation section
   * {
   *     id: string,
   *     text: string
   * }
   */
  locations: _propTypes.default.object,

  /** type:string - string to path of image*/
  brandIcon: _propTypes.default.string,

  /** type:number max width of navbar content in pixels */
  maxWidth: _propTypes.default.number,

  /** type:string background color of navbar while page is parked */
  backgroundColorDocked: _propTypes.default.string,

  /** type:string background color of navbar whil page is scrolled */
  backgroundColorActive: _propTypes.default.string,

  /** type:bool activate drop shadow effect */
  dropShadow: _propTypes.default.bool,

  /** type:string brand icon transform:scale on scroll ('none', def:'low', 'high') */
  brandScale: _propTypes.default.string,

  /** type:string brand icon link URL */
  brandLink: _propTypes.default.string,

  /** type:object styles object containing user defined text styles for nav links while at top of page */
  textStylesDocked: _propTypes.default.object,

  /** type:object styles object containing user defined text styles for nav links while page is scrolled*/
  textStylesActive: _propTypes.default.object
};

function processBrandImage(brandImage) {
  var img = /*#__PURE__*/_react.default.createElement("img", {
    src: brandImage,
    id: "sticky-navbar-brand-image",
    width: 60
  });

  return img;
}
