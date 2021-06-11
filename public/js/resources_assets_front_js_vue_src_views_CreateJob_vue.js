(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_front_js_vue_src_views_CreateJob_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/CreateJob.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/CreateJob.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_ContainerLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/ContainerLayout.vue */ "./resources/assets/front/js/vue/src/layouts/ContainerLayout.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
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



var isNavigationFailure = vue_router__WEBPACK_IMPORTED_MODULE_1__.default.isNavigationFailure,
    NavigationFailureType = vue_router__WEBPACK_IMPORTED_MODULE_1__.default.NavigationFailureType;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ContainerLayout: _layouts_ContainerLayout_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      form: {
        user_id: 3,
        poster: '',
        description: '',
        location: '',
        phone: '',
        vehicle_id: ''
      },
      show: true
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)('vehicles', ['getVehicles'])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)('jobs', ['createJob'])), {}, {
    handleSubmit: function handleSubmit() {
      this.createJob({
        user_id: this.form.user_id,
        poster: this.form.poster,
        description: this.form.description,
        location: this.form.location,
        phone: this.form.phone,
        vehicle_id: this.form.vehicle_id
      });
    },
    logConsole: function logConsole() {
      console.log(this.vehicles);
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)('vehicles', {
    vehicles: 'getVehicles'
  })),
  created: function created() {
    this.$store.dispatch('vehicles/getVehicles');
  }
});

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/CreateJob.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/CreateJob.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateJob_vue_vue_type_template_id_66194060___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateJob.vue?vue&type=template&id=66194060& */ "./resources/assets/front/js/vue/src/views/CreateJob.vue?vue&type=template&id=66194060&");
/* harmony import */ var _CreateJob_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateJob.vue?vue&type=script&lang=js& */ "./resources/assets/front/js/vue/src/views/CreateJob.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CreateJob_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CreateJob_vue_vue_type_template_id_66194060___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateJob_vue_vue_type_template_id_66194060___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/front/js/vue/src/views/CreateJob.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/CreateJob.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/CreateJob.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateJob_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateJob.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/CreateJob.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateJob_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/CreateJob.vue?vue&type=template&id=66194060&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/CreateJob.vue?vue&type=template&id=66194060& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateJob_vue_vue_type_template_id_66194060___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateJob_vue_vue_type_template_id_66194060___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateJob_vue_vue_type_template_id_66194060___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateJob.vue?vue&type=template&id=66194060& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/CreateJob.vue?vue&type=template&id=66194060&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/CreateJob.vue?vue&type=template&id=66194060&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/CreateJob.vue?vue&type=template&id=66194060& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _c("h1", [_vm._v("Create Job request")]),
    _vm._v(" "),
    _c(
      "div",
      [
        _vm.show
          ? _c(
              "b-form",
              { on: { submit: _vm.handleSubmit } },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-2",
                      label: "Your name",
                      "label-for": "input-2"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "input-1",
                        placeholder: "Input full name",
                        required: ""
                      },
                      model: {
                        value: _vm.form.poster,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "poster", $$v)
                        },
                        expression: "form.poster"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-1",
                      label: "Description: ",
                      "label-for": "input-1",
                      description:
                        "Describe the problem that you are facing\n                in as much detail as you can.\n                Add ways to contact you, e.g: phone number."
                    }
                  },
                  [
                    _c("b-form-textarea", {
                      attrs: {
                        id: "input-2",
                        type: "text",
                        placeholder: "Request description",
                        required: ""
                      },
                      model: {
                        value: _vm.form.description,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "description", $$v)
                        },
                        expression: "form.description"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-2",
                      label: "Request location",
                      "label-for": "input-2"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "input-3",
                        placeholder: "Detail location as much as possible",
                        required: ""
                      },
                      model: {
                        value: _vm.form.location,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "location", $$v)
                        },
                        expression: "form.location"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-2",
                      label: "Phone number",
                      "label-for": "input-2"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "input-4",
                        placeholder: "Input your contact phone number",
                        required: ""
                      },
                      model: {
                        value: _vm.form.phone,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "phone", $$v)
                        },
                        expression: "form.phone"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-2",
                      label: "Vehicle:",
                      "label-for": "input-3"
                    }
                  },
                  [
                    _c(
                      "b-form-select",
                      {
                        model: {
                          value: _vm.form.vehicle_id,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "vehicle_id", $$v)
                          },
                          expression: "form.vehicle_id"
                        }
                      },
                      _vm._l(this.vehicles, function(vehicle) {
                        return _c(
                          "option",
                          { key: vehicle.id, domProps: { value: vehicle.id } },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(vehicle.make.name) +
                                "\n                        " +
                                _vm._s(vehicle.model.name) +
                                "\n                    "
                            )
                          ]
                        )
                      }),
                      0
                    )
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
                  [_vm._v("Back")]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "float-right",
                    attrs: { type: "submit", variant: "primary" }
                  },
                  [_vm._v("Submit")]
                )
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);