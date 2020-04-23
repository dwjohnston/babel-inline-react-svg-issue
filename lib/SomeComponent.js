'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SomeComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChevronRight = require('./assets/ChevronRight');

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SomeComponent = exports.SomeComponent = function SomeComponent() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_ChevronRight2.default, null)
  );
};