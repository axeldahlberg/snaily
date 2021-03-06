'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n\n.styles_Button__2GmQd {\n  background-color: #05b169;\n  border-radius: 0.25rem;\n  border: 1px solid #06b169;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 0.75rem 1rem;\n  transition: all 100ms ease-in-out;\n  width: auto;\n  outline: none;  \n}\n\n.styles_Button__2GmQd:hover,\n.styles_Button__2GmQd:focus {\n  background-color: #00a55e;\n  border-color: #00a55e;  \n}\n\n.styles_ButtonSecondary__2gAlX {\n  background: transparent;\n  border-color: #fff;\n}\n\n.styles_ButtonSecondary__2gAlX:hover,\n.styles_ButtonSecondary__2gAlX:focus {\n  background: #fff;\n  border-color: #fff;\n  color: #000;\n}\n";
var styles = {"Button":"styles_Button__2GmQd","ButtonSecondary":"styles_ButtonSecondary__2gAlX"};
styleInject(css_248z);

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      variant = _ref.variant,
      rest = _objectWithoutProperties(_ref, ["children", "className", "variant"]);

  var classes = cx__default['default'](styles.Button, _defineProperty({}, styles.ButtonSecondary, variant === 'secondary'), className);
  return /*#__PURE__*/React__default['default'].createElement("button", _extends({}, rest, {
    className: classes
  }), children);
};

exports.Button = Button;
