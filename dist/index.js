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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  min-height: 50px;\n  padding: 20px 0px;\n  transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);\n  &.active {\n    background: ", " !important;\n    padding: 10px 0;\n  }\n  #react-sticky-navbar-brand-container {\n    transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);\n  }\n  &.active #react-sticky-navbar-brand-container {\n    transform: scale(1.4)\n  }\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Index(props) {
  var log = console.log; // setup defaults if none provided

  var params = {
    locations: (props === null || props === void 0 ? void 0 : props.locations) || [],
    brandIcon: processBrandImage(props === null || props === void 0 ? void 0 : props.brandIcon),
    // image element
    maxWidth: (props === null || props === void 0 ? void 0 : props.maxWidth) || 1024,
    backgroundColorPrimary: (props === null || props === void 0 ? void 0 : props.backgroundColorPrimary) || "white",
    backgroundColorSecondary: (props === null || props === void 0 ? void 0 : props.backgroundColorSecondary) || "black",
    dropShadow: (props === null || props === void 0 ? void 0 : props.dropShadow) || true,
    brandLink: (props === null || props === void 0 ? void 0 : props.brandLink) || '/'
  }; // location tracking

  var _useState = (0, _react.useState)("/"),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      map = _useState4[0],
      setMap = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      windowHeight = _useState6[0],
      setWindowHeight = _useState6[1]; // setup listeners


  (0, _react.useEffect)(function () {
    document.addEventListener("scroll", (0, _throttle.default)(onscroll, 50));
    document.addEventListener("resize", resizeWindow);
    setMap(generateMap(params.locations));
    resizeWindow();
  }, []); // on mount

  function onscroll() {
    // console.log("Scroll call")
    var position = getScrollLocation();
    log(position);
    determineIfActive(position);
  }

  function getScrollLocation() {
    return window.scrollY;
  }

  function resizeWindow() {
    var windowHeight = getWindowSize();
    setWindowHeight(windowHeight);

    function getWindowSize() {
      return window.innerHeight;
    }
  } // apply active class


  var headerRef = (0, _react.useRef)();

  function determineIfActive() {
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
        location: getLocationPixels(pathObj.id)
      };
      map.push(newObj);
    });
    return map;

    function getLocationPixels(path) {
      var el = document.getElementById(path);
      return el.getBoundingClientRect().top + document.body.scrollTop;
    }
  } // render


  return /*#__PURE__*/_react.default.createElement(Header, {
    ref: headerRef,
    className: "",
    style: {
      position: "sticky",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      background: params.backgroundColorPrimary
    },
    secondary: params.backgroundColorSecondary
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
    href: params.brandLink || '/'
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "react-sticky-navbar-brand-container",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, params.brandIcon), /*#__PURE__*/_react.default.createElement("div", {
    id: "react-sticky-navbar-links-container"
  }))));
}

var Header = _styledComponents.default.header(_templateObject(), function (props) {
  return props.secondary;
});

Index.propTypes = {
  /** type:[object] - object array of element ID to include in navigation section
   * {
   *     path: string,
   *     image: string
   * }
   */
  locations: _propTypes.default.object,

  /** type:string - string to path of image*/
  brandIcon: _propTypes.default.string,

  /** type:number max width of navbar content in pixels */
  maxWidth: _propTypes.default.number,

  /** type:string background color of navbar while page is parked */
  backgroundColorPrimary: _propTypes.default.string,

  /** type:string background color of navbar whil page is scrolled */
  backgroundColorSecondary: _propTypes.default.string,

  /** type:bool activate drop shadow effect */
  dropShadow: _propTypes.default.bool,

  /** type:string brand icon transform:scale on scroll ('none', def:'low', 'high') */
  brandScale: _propTypes.default.string,

  /** type:string brand icon link URL */
  brandLink: _propTypes.default.string
};

function processBrandImage(brandImage) {
  var img = /*#__PURE__*/_react.default.createElement("img", {
    src: brandImage,
    id: "sticky-navbar-brand-image",
    width: 60
  });

  console.log(img);
  return img;
}
