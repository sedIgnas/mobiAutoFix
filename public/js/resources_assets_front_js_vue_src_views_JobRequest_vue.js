(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_front_js_vue_src_views_JobRequest_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/JobRequest.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/JobRequest.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_ContainerLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/ContainerLayout.vue */ "./resources/assets/front/js/vue/src/layouts/ContainerLayout.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  name: 'JobRequest',
  components: {
    ContainerLayout: _layouts_ContainerLayout_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      isFetching: true
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('jobs', ['getJob'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('vehicles', ['getUserVehicle'])), {}, {
    logConsole: function logConsole() {
      console.log(this.isFetching);
      this.isFetching = false;
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('jobs', {
    job: 'getJob'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('vehicles', {
    userVehicle: 'getUserVehicle'
  })),
  created: function created() {
    var _this = this;

    this.$store.dispatch('jobs/getJob', this.$route.params.id).then(function () {
      _this.$store.dispatch('vehicles/getUserVehicle', _this.job[0].vehicle_id).then(function () {
        _this.isFetching = false;
      });
    });
  }
});

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/JobRequest.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/JobRequest.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _JobRequest_vue_vue_type_template_id_f006f01a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JobRequest.vue?vue&type=template&id=f006f01a& */ "./resources/assets/front/js/vue/src/views/JobRequest.vue?vue&type=template&id=f006f01a&");
/* harmony import */ var _JobRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JobRequest.vue?vue&type=script&lang=js& */ "./resources/assets/front/js/vue/src/views/JobRequest.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _JobRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _JobRequest_vue_vue_type_template_id_f006f01a___WEBPACK_IMPORTED_MODULE_0__.render,
  _JobRequest_vue_vue_type_template_id_f006f01a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/front/js/vue/src/views/JobRequest.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/JobRequest.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/JobRequest.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JobRequest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/JobRequest.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/JobRequest.vue?vue&type=template&id=f006f01a&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/JobRequest.vue?vue&type=template&id=f006f01a& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobRequest_vue_vue_type_template_id_f006f01a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobRequest_vue_vue_type_template_id_f006f01a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobRequest_vue_vue_type_template_id_f006f01a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JobRequest.vue?vue&type=template&id=f006f01a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/JobRequest.vue?vue&type=template&id=f006f01a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/JobRequest.vue?vue&type=template&id=f006f01a&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/JobRequest.vue?vue&type=template&id=f006f01a& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("ContainerLayout", [
    _c("h1", [_vm._v("Job request id: " + _vm._s(_vm.$route.params.id))]),
    _vm._v(" "),
    !_vm.isFetching
      ? _c(
          "div",
          [
            _c(
              "b-card",
              {
                attrs: { title: this.job[0].poster, "sub-title": "Job poster" }
              },
              [
                _c("b-card-text", [
                  _c("hr"),
                  _vm._v(" "),
                  _c("strong", [_vm._v("Description")]),
                  _vm._v(": "),
                  _c("br"),
                  _vm._v(
                    " " + _vm._s(this.job[0].description) + "\n            "
                  )
                ]),
                _vm._v(" "),
                _c("b-card-text", [
                  _c("strong", [_vm._v("Location")]),
                  _vm._v(": "),
                  _c("br"),
                  _vm._v(
                    " " + _vm._s(this.job[0].location) + "\n                "
                  ),
                  _c("hr")
                ]),
                _vm._v(" "),
                this.job[0].phone
                  ? _c("b-card-text", [
                      _c("strong", [_vm._v("Phone")]),
                      _vm._v(": "),
                      _c("br"),
                      _vm._v(
                        " " + _vm._s(this.job[0].phone) + "\n                "
                      ),
                      _c("hr")
                    ])
                  : _c("b-card-text", [
                      _c("strong", [_vm._v("Phone")]),
                      _vm._v(": "),
                      _c("br"),
                      _vm._v(" User did not specify\n                "),
                      _c("hr")
                    ]),
                _vm._v(" "),
                _c("b-card-text", [
                  _c("strong", [_vm._v("Vehicle")]),
                  _vm._v(
                    ": " +
                      _vm._s(this.userVehicle[0].make.name) +
                      " " +
                      _vm._s(this.userVehicle[0].model.name) +
                      "\n                "
                  ),
                  _c("hr")
                ])
              ],
              1
            )
          ],
          1
        )
      : _c(
          "div",
          { staticClass: "text-center" },
          [
            _c("b-spinner", {
              attrs: { variant: "primary", label: "Text Centered" }
            })
          ],
          1
        ),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "mt-3 btn btn-outline-dark",
        on: {
          click: function($event) {
            return _vm.$router.go(-1)
          }
        }
      },
      [_vm._v("Back to Jobs")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);