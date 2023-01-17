"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = function App() {
  return /*#__PURE__*/_react["default"].createElement("h1", null, "Hello");
};

(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById("root"));