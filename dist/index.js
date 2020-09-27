"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = index;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: sticky;\n    top:0;\n    left:0;\n    right:0;\n    min-height: 70px;\n    &.active{\n\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function index(props) {
  return /*#__PURE__*/_react.default.createElement(Header, {
    className: ""
  });
}

var Header = _styledComponents.default.header(_templateObject());
