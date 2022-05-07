"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vue_views_auth_ResetPasswordView_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/forms/ResetAccountForm.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/forms/ResetAccountForm.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_forms_TextInputComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/forms/TextInputComponent */ "./resources/vue/components/forms/TextInputComponent.vue");
/* harmony import */ var _components_ButtonComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ButtonComponent */ "./resources/vue/components/ButtonComponent.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    token: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  components: {
    TextInputComponent: _components_forms_TextInputComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    ButtonComponent: _components_ButtonComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  emits: {
    submit: function submit(payload) {
      return payload;
    }
  },
  data: function data() {
    return {
      password: "",
      password_confirmation: "",
      disabled: false,
      resetAccountFormValidator: undefined
    };
  },
  mounted: function mounted() {
    this.resetAccountFormValidator = new JSValidator('reset_account_form').init();
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      if (this.resetAccountFormValidator.status) {
        this.disabled = true;
        axios.post('/api/reset-password', {
          token: this.token,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        }).then(function (res) {
          _this.$emit('submit', {
            message: 'Se ha restablecido la contraseña',
            res: res
          });
        })["catch"](function (error) {
          console.log(error);
          UIkit.notification({
            message: 'Ha ocurrido un error inesperado.',
            status: 'danger'
          });
        });
      } else {
        UIkit.notification({
          message: 'Error de validación',
          status: 'danger'
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/views/auth/ResetPasswordView.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/views/auth/ResetPasswordView.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _forms_ResetAccountForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../forms/ResetAccountForm */ "./resources/vue/forms/ResetAccountForm.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ResetAccountForm: _forms_ResetAccountForm__WEBPACK_IMPORTED_MODULE_0__["default"]
  },

  /* mounted() {
       console.log(this.$route);
       console.log(this.$route.params);
       console.log(this.$route.query);
   },*/
  computed: {
    email: function email() {
      return this.$route.query.email;
    },
    token: function token() {
      return this.$route.params.token;
    }
  },
  methods: {
    submitForm: function submitForm(payload) {
      UIkit.notification({
        message: payload.message,
        status: 'success'
      });
      store.dispatch('setAuthUser');
    }
  }
});

/***/ }),

/***/ "./resources/vue/forms/ResetAccountForm.vue":
/*!**************************************************!*\
  !*** ./resources/vue/forms/ResetAccountForm.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResetAccountForm_vue_vue_type_template_id_59ad04a3_bindings_token_props_email_props_password_data_password_confirmation_data_disabled_data_resetAccountFormValidator_data_onSubmit_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetAccountForm.vue?vue&type=template&id=59ad04a3&bindings={"token":"props","email":"props","password":"data","password_confirmation":"data","disabled":"data","resetAccountFormValidator":"data","onSubmit":"options"} */ "./resources/vue/forms/ResetAccountForm.vue?vue&type=template&id=59ad04a3&bindings={\"token\":\"props\",\"email\":\"props\",\"password\":\"data\",\"password_confirmation\":\"data\",\"disabled\":\"data\",\"resetAccountFormValidator\":\"data\",\"onSubmit\":\"options\"}");
/* harmony import */ var _ResetAccountForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetAccountForm.vue?vue&type=script&lang=js */ "./resources/vue/forms/ResetAccountForm.vue?vue&type=script&lang=js");



_ResetAccountForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _ResetAccountForm_vue_vue_type_template_id_59ad04a3_bindings_token_props_email_props_password_data_password_confirmation_data_disabled_data_resetAccountFormValidator_data_onSubmit_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ResetAccountForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "resources/vue/forms/ResetAccountForm.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ResetAccountForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./resources/vue/views/auth/ResetPasswordView.vue":
/*!********************************************************!*\
  !*** ./resources/vue/views/auth/ResetPasswordView.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResetPasswordView_vue_vue_type_template_id_0b497b6a_bindings_email_options_token_options_submitForm_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPasswordView.vue?vue&type=template&id=0b497b6a&bindings={"email":"options","token":"options","submitForm":"options"} */ "./resources/vue/views/auth/ResetPasswordView.vue?vue&type=template&id=0b497b6a&bindings={\"email\":\"options\",\"token\":\"options\",\"submitForm\":\"options\"}");
/* harmony import */ var _ResetPasswordView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPasswordView.vue?vue&type=script&lang=js */ "./resources/vue/views/auth/ResetPasswordView.vue?vue&type=script&lang=js");



_ResetPasswordView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _ResetPasswordView_vue_vue_type_template_id_0b497b6a_bindings_email_options_token_options_submitForm_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ResetPasswordView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "resources/vue/views/auth/ResetPasswordView.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ResetPasswordView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./resources/vue/forms/ResetAccountForm.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/vue/forms/ResetAccountForm.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetAccountForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetAccountForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ResetAccountForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/forms/ResetAccountForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/vue/views/auth/ResetPasswordView.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/vue/views/auth/ResetPasswordView.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetPasswordView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetPasswordView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ResetPasswordView.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/views/auth/ResetPasswordView.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/vue/forms/ResetAccountForm.vue?vue&type=template&id=59ad04a3&bindings={\"token\":\"props\",\"email\":\"props\",\"password\":\"data\",\"password_confirmation\":\"data\",\"disabled\":\"data\",\"resetAccountFormValidator\":\"data\",\"onSubmit\":\"options\"}":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/vue/forms/ResetAccountForm.vue?vue&type=template&id=59ad04a3&bindings={"token":"props","email":"props","password":"data","password_confirmation":"data","disabled":"data","resetAccountFormValidator":"data","onSubmit":"options"} ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetAccountForm_vue_vue_type_template_id_59ad04a3_bindings_token_props_email_props_password_data_password_confirmation_data_disabled_data_resetAccountFormValidator_data_onSubmit_options___WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetAccountForm_vue_vue_type_template_id_59ad04a3_bindings_token_props_email_props_password_data_password_confirmation_data_disabled_data_resetAccountFormValidator_data_onSubmit_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ResetAccountForm.vue?vue&type=template&id=59ad04a3&bindings={"token":"props","email":"props","password":"data","password_confirmation":"data","disabled":"data","resetAccountFormValidator":"data","onSubmit":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/forms/ResetAccountForm.vue?vue&type=template&id=59ad04a3&bindings={\"token\":\"props\",\"email\":\"props\",\"password\":\"data\",\"password_confirmation\":\"data\",\"disabled\":\"data\",\"resetAccountFormValidator\":\"data\",\"onSubmit\":\"options\"}");


/***/ }),

/***/ "./resources/vue/views/auth/ResetPasswordView.vue?vue&type=template&id=0b497b6a&bindings={\"email\":\"options\",\"token\":\"options\",\"submitForm\":\"options\"}":
/*!************************************************************************************************************************************************************!*\
  !*** ./resources/vue/views/auth/ResetPasswordView.vue?vue&type=template&id=0b497b6a&bindings={"email":"options","token":"options","submitForm":"options"} ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetPasswordView_vue_vue_type_template_id_0b497b6a_bindings_email_options_token_options_submitForm_options___WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetPasswordView_vue_vue_type_template_id_0b497b6a_bindings_email_options_token_options_submitForm_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ResetPasswordView.vue?vue&type=template&id=0b497b6a&bindings={"email":"options","token":"options","submitForm":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/views/auth/ResetPasswordView.vue?vue&type=template&id=0b497b6a&bindings={\"email\":\"options\",\"token\":\"options\",\"submitForm\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/forms/ResetAccountForm.vue?vue&type=template&id=59ad04a3&bindings={\"token\":\"props\",\"email\":\"props\",\"password\":\"data\",\"password_confirmation\":\"data\",\"disabled\":\"data\",\"resetAccountFormValidator\":\"data\",\"onSubmit\":\"options\"}":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/forms/ResetAccountForm.vue?vue&type=template&id=59ad04a3&bindings={"token":"props","email":"props","password":"data","password_confirmation":"data","disabled":"data","resetAccountFormValidator":"data","onSubmit":"options"} ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", { class: "uk-card-title uk-text-center" }, "Restablecer cuenta", -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_text_input_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("text-input-component")
  const _component_button_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("button-component")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
    id: "reset_account_form",
    onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.onSubmit && $options.onSubmit(...args)), ["prevent"]))
  }, [
    _hoisted_1,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_text_input_component, {
      "custom-class": "jsValidator",
      type: "email",
      name: "email",
      placeholder: "Escribe tu email",
      icon: "mail",
      validators: "required email",
      modelValue: $props.email,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($props.email) = $event))
    }, null, 8 /* PROPS */, ["modelValue"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_text_input_component, {
      "custom-class": "jsValidator",
      type: "password",
      name: "password",
      placeholder: "Contraseña",
      icon: "lock",
      validators: "required length",
      min_length: "8",
      modelValue: $data.password,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($data.password) = $event))
    }, null, 8 /* PROPS */, ["modelValue"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_text_input_component, {
      "custom-class": "jsValidator",
      type: "password",
      name: "password_confirmation",
      placeholder: "Confirmar contraseña",
      icon: "lock",
      validators: "required password_confirmation",
      modelValue: $data.password_confirmation,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($data.password_confirmation) = $event))
    }, null, 8 /* PROPS */, ["modelValue"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_button_component, {
      "custom-class": "uk-button-primary uk-button-large uk-width-1-1",
      disabled: $data.disabled,
      value: "Restablecer contraseña"
    }, null, 8 /* PROPS */, ["disabled"])
  ], 32 /* HYDRATE_EVENTS */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/views/auth/ResetPasswordView.vue?vue&type=template&id=0b497b6a&bindings={\"email\":\"options\",\"token\":\"options\",\"submitForm\":\"options\"}":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/views/auth/ResetPasswordView.vue?vue&type=template&id=0b497b6a&bindings={"email":"options","token":"options","submitForm":"options"} ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = {
  class: "uk-section uk-flex uk-flex-middle uk-animation-fade",
  "uk-height-viewport": "expand: true"
}
const _hoisted_2 = { class: "uk-width-1-1" }
const _hoisted_3 = { class: "uk-container" }
const _hoisted_4 = {
  class: "uk-grid-margin uk-grid uk-grid-stack",
  "uk-grid": ""
}
const _hoisted_5 = { class: "uk-width-1-1@m" }
const _hoisted_6 = { class: "uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_reset_account_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("reset-account-form")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_reset_account_form, {
                email: $options.email,
                token: $options.token,
                onSubmit: $options.submitForm
              }, null, 8 /* PROPS */, ["email", "token", "onSubmit"])
            ])
          ])
        ])
      ])
    ])
  ]))
}

/***/ })

}]);