'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Icons = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxList = function CheckboxList(props) {
    return _react2.default.createElement(
        'svg',
        props,
        _react2.default.createElement('path', {
            clipRule: 'evenodd',
            d: 'M4 3.323a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2zm16 2H4v14h16z',
            fillRule: 'evenodd'
        }),
        _react2.default.createElement('path', {
            clipRule: 'evenodd',
            d: 'M11 9.323a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1z',
            fillRule: 'evenodd'
        }),
        _react2.default.createElement('path', {
            d: 'M6 7.323h3v3H6zm0 7h3v3H6z'
        })
    );
};

CheckboxList.defaultProps = {
    height: '24',
    viewBox: '0 0 24 24',
    width: '24',
    xmlns: 'http://www.w3.org/2000/svg'
};

var ChevronLeft = function ChevronLeft(props) {
    return _react2.default.createElement(
        'svg',
        props,
        _react2.default.createElement('path', {
            d: 'M14.59 6L16 7.41 11.42 12 16 16.59 14.59 18l-6-6z'
        })
    );
};

ChevronLeft.defaultProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24'
};

var ChevronRight = function ChevronRight(props) {
    return _react2.default.createElement(
        'svg',
        props,
        _react2.default.createElement('path', {
            d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
        })
    );
};

ChevronRight.defaultProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24'
};
var Icons = exports.Icons = {
    CheckboxList: CheckboxList,
    ChevronLeft: ChevronLeft,
    ChevronRight: ChevronRight
};