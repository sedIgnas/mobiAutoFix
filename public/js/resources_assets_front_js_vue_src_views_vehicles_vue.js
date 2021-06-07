(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_front_js_vue_src_views_Vehicles_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/vehicleManager/Form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/vehicleManager/Form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Form',
  data: function data() {
    return {
      vehicleTitle: ''
    };
  },
  watch: {
    editedLocation: function editedLocation(newEditedVehicle) {
      if (newEditedVehicle) {
        this.vehicleTitle = newEditedVehicle.title;
      } else {
        this.vehicleTitle = '';
      }
    }
  },
  methods: _objectSpread({
    handleSubmit: function handleSubmit() {
      if (this.isEdited) {
        this.updateVehicle({
          title: this.vehicleTitle
        });
      } else this.createVehicle(this.vehicleTitle);
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('vehicle', ['updateVehicle', 'createVehicle'])),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('vehicle', {
    isEdited: 'getVehicleIsEdited',
    editedVehicle: 'getEditedVehicle'
  })), {}, {
    formAction: function formAction() {
      return "".concat(this.isEdited ? 'Update' : 'Create', " Vehicle");
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/vehicleManager/Table.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/vehicleManager/Table.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_dateTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/dateTime */ "./resources/assets/front/js/vue/src/helpers/dateTime.js");
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
  name: 'Table',
  data: function data() {
    return {
      fields: ['Vehicle', {
        key: 'createdAt',
        label: 'Created At'
      }, {
        key: 'updatedAt',
        label: 'Updated At'
      }, {
        key: 'actions',
        label: 'Actions'
      }]
    };
  },
  methods: _objectSpread(_objectSpread({
    dateStr2yyyymmdd: _helpers_dateTime__WEBPACK_IMPORTED_MODULE_0__.dateStr2yyyymmdd
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('vehicles', ['deleteVehicle', 'editVehicle'])), {}, {
    isVehicleEdited: function isVehicleEdited(vehicleId) {
      return !!this.editedVehicleId && vehicleId === this.editedVehicleId;
    },
    logConsole: function logConsole() {
      console.log(this.vehicles);
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('vehicles', {
    editedVehicleId: 'getEditedVehicleId',
    vehicles: 'getVehicles',
    state: 'getState'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Vehicles.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Vehicles.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_ContainerLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/ContainerLayout.vue */ "./resources/assets/front/js/vue/src/layouts/ContainerLayout.vue");
/* harmony import */ var _components_vehicleManager_Form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/vehicleManager/Form.vue */ "./resources/assets/front/js/vue/src/components/vehicleManager/Form.vue");
/* harmony import */ var _components_vehicleManager_Table_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/vehicleManager/Table.vue */ "./resources/assets/front/js/vue/src/components/vehicleManager/Table.vue");
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
  name: 'Vehicles',
  components: {
    ContainerLayout: _layouts_ContainerLayout_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    Form: _components_vehicleManager_Form_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    Table: _components_vehicleManager_Table_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  created: function created() {
    this.$store.dispatch('vehicles/getVehicles');
  }
});

/***/ }),

/***/ "./resources/assets/front/js/vue/src/components/vehicleManager/Form.vue":
/*!******************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/components/vehicleManager/Form.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_6aed094e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=6aed094e& */ "./resources/assets/front/js/vue/src/components/vehicleManager/Form.vue?vue&type=template&id=6aed094e&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/assets/front/js/vue/src/components/vehicleManager/Form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Form_vue_vue_type_template_id_6aed094e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Form_vue_vue_type_template_id_6aed094e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/front/js/vue/src/components/vehicleManager/Form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/front/js/vue/src/components/vehicleManager/Table.vue":
/*!*******************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/components/vehicleManager/Table.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Table_vue_vue_type_template_id_b23d4dee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=b23d4dee& */ "./resources/assets/front/js/vue/src/components/vehicleManager/Table.vue?vue&type=template&id=b23d4dee&");
/* harmony import */ var _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js& */ "./resources/assets/front/js/vue/src/components/vehicleManager/Table.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Table_vue_vue_type_template_id_b23d4dee___WEBPACK_IMPORTED_MODULE_0__.render,
  _Table_vue_vue_type_template_id_b23d4dee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/front/js/vue/src/components/vehicleManager/Table.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/Vehicles.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/Vehicles.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Vehicles_vue_vue_type_template_id_72486b30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vehicles.vue?vue&type=template&id=72486b30& */ "./resources/assets/front/js/vue/src/views/Vehicles.vue?vue&type=template&id=72486b30&");
/* harmony import */ var _Vehicles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vehicles.vue?vue&type=script&lang=js& */ "./resources/assets/front/js/vue/src/views/Vehicles.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Vehicles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Vehicles_vue_vue_type_template_id_72486b30___WEBPACK_IMPORTED_MODULE_0__.render,
  _Vehicles_vue_vue_type_template_id_72486b30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/front/js/vue/src/views/Vehicles.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/front/js/vue/src/components/vehicleManager/Form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/components/vehicleManager/Form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/vehicleManager/Form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/assets/front/js/vue/src/components/vehicleManager/Table.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/components/vehicleManager/Table.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/vehicleManager/Table.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/Vehicles.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/Vehicles.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vehicles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vehicles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Vehicles.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vehicles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/assets/front/js/vue/src/components/vehicleManager/Form.vue?vue&type=template&id=6aed094e&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/components/vehicleManager/Form.vue?vue&type=template&id=6aed094e& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_6aed094e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_6aed094e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_6aed094e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=template&id=6aed094e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/vehicleManager/Form.vue?vue&type=template&id=6aed094e&");


/***/ }),

/***/ "./resources/assets/front/js/vue/src/components/vehicleManager/Table.vue?vue&type=template&id=b23d4dee&":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/components/vehicleManager/Table.vue?vue&type=template&id=b23d4dee& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_b23d4dee___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_b23d4dee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_b23d4dee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=template&id=b23d4dee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/vehicleManager/Table.vue?vue&type=template&id=b23d4dee&");


/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/Vehicles.vue?vue&type=template&id=72486b30&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/Vehicles.vue?vue&type=template&id=72486b30& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vehicles_vue_vue_type_template_id_72486b30___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vehicles_vue_vue_type_template_id_72486b30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vehicles_vue_vue_type_template_id_72486b30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vehicles.vue?vue&type=template&id=72486b30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Vehicles.vue?vue&type=template&id=72486b30&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/vehicleManager/Form.vue?vue&type=template&id=6aed094e&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/vehicleManager/Form.vue?vue&type=template&id=6aed094e& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    {
      class: {
        shadow: true,
        "border-success": !_vm.isEdited,
        "border-warning": _vm.isEdited
      }
    },
    [
      _c("h2", { staticClass: "h4" }, [_vm._v(_vm._s(_vm.formAction))]),
      _vm._v(" "),
      _c(
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.handleSubmit($event)
            }
          }
        },
        [
          _c(
            "b-form-group",
            { attrs: { label: "Vehicle", "label-for": "vehicle" } },
            [
              _c("b-form-input", {
                attrs: {
                  id: "vehicle",
                  type: "text",
                  placeholder: "Lexus",
                  required: ""
                },
                model: {
                  value: _vm.vehicleTitle,
                  callback: function($$v) {
                    _vm.vehicleTitle = $$v
                  },
                  expression: "vehicleTitle"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center" },
            [
              _c(
                "b-button",
                {
                  attrs: {
                    type: "submit",
                    variant: _vm.isEdited ? "warning" : "success"
                  }
                },
                [_vm._v("\n        " + _vm._s(_vm.formAction) + "\n      ")]
              )
            ],
            1
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/vehicleManager/Table.vue?vue&type=template&id=b23d4dee&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/vehicleManager/Table.vue?vue&type=template&id=b23d4dee& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "ul",
      { attrs: { id: "example-1" } },
      _vm._l(this.vehicles, function(vehicle) {
        return _c("li", { key: vehicle.id }, [
          _vm._v(
            "\n                " +
              _vm._s(vehicle.make.name) +
              " " +
              _vm._s(vehicle.model.name) +
              "\n            "
          )
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Vehicles.vue?vue&type=template&id=72486b30&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Vehicles.vue?vue&type=template&id=72486b30& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      _c("h1", [_vm._v("Vehicles")]),
      _vm._v(" "),
      _c("span", { staticClass: "h5" }, [
        _vm._v("Here is the list of servicable vehicles, by current workers: ")
      ]),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "my-4" },
        [
          _c("b-col", { attrs: { cols: "9" } }, [_c("Table")], 1),
          _vm._v(" "),
          _c("b-col", { attrs: { cols: "3" } }, [_c("Form")], 1)
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