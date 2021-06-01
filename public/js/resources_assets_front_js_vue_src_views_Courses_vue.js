(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_front_js_vue_src_views_Courses_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/layouts/ContainerLayout.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/courses/Card.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Courses',
  components: {
    ContainerLayout: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/layouts/ContainerLayout.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    Card: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/courses/Card.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      locationFilters: this.$store.getters['locations/getLocations'].map(function (loc) {
        return _objectSpread(_objectSpread({}, loc), {}, {
          checked: true
        });
      })
    };
  },
  computed: {
    filteredCourses: function filteredCourses() {
      return this.$store.getters['courses/getCoursesByLocations'](this.locationFilters.filter(function (_ref) {
        var checked = _ref.checked;
        return checked;
      }).map(function (_ref2) {
        var id = _ref2.id;
        return id;
      }));
    }
  }
});

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/Courses.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/Courses.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Courses_vue_vue_type_template_id_da98eeb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Courses.vue?vue&type=template&id=da98eeb2& */ "./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=template&id=da98eeb2&");
/* harmony import */ var _Courses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Courses.vue?vue&type=script&lang=js& */ "./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Courses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Courses_vue_vue_type_template_id_da98eeb2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Courses_vue_vue_type_template_id_da98eeb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/front/js/vue/src/views/Courses.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Courses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Courses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Courses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=template&id=da98eeb2&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=template&id=da98eeb2& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Courses_vue_vue_type_template_id_da98eeb2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Courses_vue_vue_type_template_id_da98eeb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Courses_vue_vue_type_template_id_da98eeb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Courses.vue?vue&type=template&id=da98eeb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=template&id=da98eeb2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=template&id=da98eeb2&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=template&id=da98eeb2& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ContainerLayout",
    [
      _c("h1", { staticClass: "mb-5" }, [_vm._v("Courses")]),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "3" } },
            [
              _c("h2", { staticClass: "h3" }, [_vm._v("Filters")]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("h3", { staticClass: "h4" }, [_vm._v("Locations")]),
              _vm._v(" "),
              _vm._l(_vm.locationFilters, function(loc) {
                return _c(
                  "b-form-checkbox",
                  {
                    key: loc.id,
                    model: {
                      value: loc.checked,
                      callback: function($$v) {
                        _vm.$set(loc, "checked", $$v)
                      },
                      expression: "loc.checked"
                    }
                  },
                  [_vm._v("\n        " + _vm._s(loc.title) + "\n      ")]
                )
              }),
              _vm._v(" "),
              _c("hr")
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "9" } },
            [
              _c("h2", { staticClass: "h3" }, [_vm._v("Courses")]),
              _vm._v(" "),
              _vm._l(_vm.filteredCourses, function(course) {
                return _c("Card", {
                  key: course.id,
                  attrs: { "card-data": course }
                })
              })
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);