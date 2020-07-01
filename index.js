"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBarebonesModal = _interopRequireDefault(require("react-barebones-modal"));

require("./src/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Slider = function Slider(_ref) {
  var _images = _ref.images;

  var _useState = (0, _react.useState)(_images || []),
      _useState2 = _slicedToArray(_useState, 2),
      images = _useState2[0],
      setImages = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      currentIndex = _useState4[0],
      setCurrentIndex = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      translateValue = _useState6[0],
      setTranslateValue = _useState6[1];

  var slideWidth = function slideWidth() {
    return document.querySelector('.slide').clientWidth;
  };

  var goToPrevSlide = function goToPrevSlide() {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
      setTranslateValue(-(slideWidth() * (images.length - 1)));
      return;
    }

    setCurrentIndex(currentIndex - 1);
    setTranslateValue(translateValue - 1 + slideWidth());
  };

  var goToNextSlide = function goToNextSlide() {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
      setTranslateValue(0);
      return;
    }

    setCurrentIndex(currentIndex + 1);
    setTranslateValue(translateValue + -slideWidth());
  };

  var Slide = function Slide(_ref2) {
    var image = _ref2.image;
    var styles = {
      backgroundImage: "url(".concat(image, ")"),
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    };
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "slide",
      style: styles
    });
  };

  var LeftArrow = function LeftArrow(props) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "backArrow arrow",
      onClick: props.goToPrevSlide
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-arrow-left fa-2x",
      "aria-hidden": "true"
    }));
  };

  var RightArrow = function RightArrow(props) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "nextArrow arrow",
      onClick: props.goToNextSlide
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-arrow-right fa-2x",
      "aria-hidden": "true"
    }));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "slider"
  }, /*#__PURE__*/_react.default.createElement(_reactBarebonesModal.default, {
    show: true
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-wrapper",
    style: {
      transform: "translateX(".concat(translateValue, "px)"),
      transition: 'transform ease-out 0.45s'
    }
  }, images.map(function (image, i) {
    return /*#__PURE__*/_react.default.createElement(Slide, {
      key: i,
      image: image
    });
  })), /*#__PURE__*/_react.default.createElement(LeftArrow, {
    goToPrevSlide: goToPrevSlide
  }), /*#__PURE__*/_react.default.createElement(RightArrow, {
    goToNextSlide: goToNextSlide
  }));
};

var _default = Slider;
exports.default = _default;
