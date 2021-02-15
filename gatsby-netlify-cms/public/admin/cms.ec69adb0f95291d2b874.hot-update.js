webpackHotUpdate("cms",{

/***/ "./src/components/Map.js":
/*!*******************************!*\
  !*** ./src/components/Map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_location_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/location.svg */ "./src/img/location.svg");
/* harmony import */ var _img_location_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_location_svg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/cskim/git-repo/netlify-github/gatsby-netlify-cms/src/components/Map.js",
    _this = undefined;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var Map = function Map(props) {
  if (!props.latitude || !props.longitude || !props.link) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"], {
    defaultOptions: {
      styles: exampleMapStyles
    },
    defaultZoom: 15,
    defaultCenter: {
      lat: props.latitude,
      lng: props.longitude
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
    position: {
      lat: props.latitude,
      lng: props.longitude
    },
    icon: {
      url: _img_location_svg__WEBPACK_IMPORTED_MODULE_3___default.a
    },
    onClick: function onClick() {
      return window.open(props.link);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }));
};

Map.propTypes = {
  link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  latitude: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  longitude: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};

var _default = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withGoogleMap"])(Map));

/* harmony default export */ __webpack_exports__["default"] = (_default);
var exampleMapStyles = [{
  featureType: "all",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#ffffff"
  }]
}, {
  featureType: "all",
  elementType: "labels.text.stroke",
  stylers: [{
    color: "#000000"
  }, {
    lightness: 13
  }]
}, {
  featureType: "administrative",
  elementType: "geometry.fill",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "administrative",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#144b53"
  }, {
    lightness: 14
  }, {
    weight: 1.4
  }]
}, {
  featureType: "landscape",
  elementType: "all",
  stylers: [{
    color: "#08304b"
  }]
}, {
  featureType: "poi",
  elementType: "geometry",
  stylers: [{
    color: "#0c4152"
  }, {
    lightness: 5
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry.fill",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#0b434f"
  }, {
    lightness: 25
  }]
}, {
  featureType: "road.arterial",
  elementType: "geometry.fill",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "road.arterial",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#0b3d51"
  }, {
    lightness: 16
  }]
}, {
  featureType: "road.local",
  elementType: "geometry",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "transit",
  elementType: "all",
  stylers: [{
    color: "#146474"
  }]
}, {
  featureType: "water",
  elementType: "all",
  stylers: [{
    color: "#021019"
  }]
}];
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Map, "Map", "/home/cskim/git-repo/netlify-github/gatsby-netlify-cms/src/components/Map.js");
  reactHotLoader.register(exampleMapStyles, "exampleMapStyles", "/home/cskim/git-repo/netlify-github/gatsby-netlify-cms/src/components/Map.js");
  reactHotLoader.register(_default, "default", "/home/cskim/git-repo/netlify-github/gatsby-netlify-cms/src/components/Map.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.ec69adb0f95291d2b874.hot-update.js.map