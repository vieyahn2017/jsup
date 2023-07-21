"use strict";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function makeMap(str, expectsLowerCase) {
  const map2 = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map2[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map2[val.toLowerCase()] : (val) => !!map2[val];
}
const toDisplayString = (val) => {
  return isString$1(val) ? val : val == null ? "" : isArray$1(val) || isObject$1(val) && (val.toString === objectToString || !isFunction$1(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$1(val) && !isArray$1(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend$1 = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
const isArray$1 = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction$1 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$1(val) && isFunction$1(val.then) && isFunction$1(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns$1 = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = (val) => {
  const n = isString$1(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
const LINEFEED = "\n";
const SLOT_DEFAULT_NAME = "d";
const ON_SHOW = "onShow";
const ON_HIDE = "onHide";
const ON_LAUNCH = "onLaunch";
const ON_ERROR = "onError";
const ON_THEME_CHANGE = "onThemeChange";
const ON_PAGE_NOT_FOUND = "onPageNotFound";
const ON_UNHANDLE_REJECTION = "onUnhandledRejection";
const ON_LOAD = "onLoad";
const ON_READY = "onReady";
const ON_UNLOAD = "onUnload";
const ON_INIT = "onInit";
const ON_SAVE_EXIT_STATE = "onSaveExitState";
const ON_RESIZE = "onResize";
const ON_BACK_PRESS = "onBackPress";
const ON_PAGE_SCROLL = "onPageScroll";
const ON_TAB_ITEM_TAP = "onTabItemTap";
const ON_REACH_BOTTOM = "onReachBottom";
const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
const ON_SHARE_TIMELINE = "onShareTimeline";
const ON_ADD_TO_FAVORITES = "onAddToFavorites";
const ON_SHARE_APP_MESSAGE = "onShareAppMessage";
const ON_NAVIGATION_BAR_BUTTON_TAP = "onNavigationBarButtonTap";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED = "onNavigationBarSearchInputClicked";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED = "onNavigationBarSearchInputChanged";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED = "onNavigationBarSearchInputConfirmed";
const ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED = "onNavigationBarSearchInputFocusChanged";
const customizeRE = /:/g;
function customizeEvent(str) {
  return camelize(str.replace(customizeRE, "-"));
}
function hasLeadingSlash(str) {
  return str.indexOf("/") === 0;
}
function addLeadingSlash(str) {
  return hasLeadingSlash(str) ? str : "/" + str;
}
const invokeArrayFns = (fns, arg) => {
  let ret;
  for (let i = 0; i < fns.length; i++) {
    ret = fns[i](arg);
  }
  return ret;
};
function once(fn, ctx = null) {
  let res;
  return (...args) => {
    if (fn) {
      res = fn.apply(ctx, args);
      fn = null;
    }
    return res;
  };
}
function getValueByDataPath(obj, path) {
  if (!isString$1(path)) {
    return;
  }
  path = path.replace(/\[(\d+)\]/g, ".$1");
  const parts = path.split(".");
  let key = parts[0];
  if (!obj) {
    obj = {};
  }
  if (parts.length === 1) {
    return obj[key];
  }
  return getValueByDataPath(obj[key], parts.slice(1).join("."));
}
function sortObject(obj) {
  let sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach((key) => {
      const _key = key;
      sortObj[_key] = obj[_key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
const encode = encodeURIComponent;
function stringifyQuery(obj, encodeStr = encode) {
  const res = obj ? Object.keys(obj).map((key) => {
    let val = obj[key];
    if (typeof val === void 0 || val === null) {
      val = "";
    } else if (isPlainObject(val)) {
      val = JSON.stringify(val);
    }
    return encodeStr(key) + "=" + encodeStr(val);
  }).filter((x) => x.length > 0).join("&") : null;
  return res ? `?${res}` : "";
}
const PAGE_HOOKS = [
  ON_INIT,
  ON_LOAD,
  ON_SHOW,
  ON_HIDE,
  ON_UNLOAD,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_SHARE_APP_MESSAGE,
  ON_ADD_TO_FAVORITES,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED
];
function isRootHook(name) {
  return PAGE_HOOKS.indexOf(name) > -1;
}
const UniLifecycleHooks = [
  ON_SHOW,
  ON_HIDE,
  ON_LAUNCH,
  ON_ERROR,
  ON_THEME_CHANGE,
  ON_PAGE_NOT_FOUND,
  ON_UNHANDLE_REJECTION,
  ON_INIT,
  ON_LOAD,
  ON_READY,
  ON_UNLOAD,
  ON_RESIZE,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_ADD_TO_FAVORITES,
  ON_SHARE_APP_MESSAGE,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED
];
const MINI_PROGRAM_PAGE_RUNTIME_HOOKS = /* @__PURE__ */ (() => {
  return {
    onPageScroll: 1,
    onShareAppMessage: 1 << 1,
    onShareTimeline: 1 << 2
  };
})();
function isUniLifecycleHook(name, value, checkType = true) {
  if (checkType && !isFunction$1(value)) {
    return false;
  }
  if (UniLifecycleHooks.indexOf(name) > -1) {
    return true;
  } else if (name.indexOf("on") === 0) {
    return true;
  }
  return false;
}
let vueApp;
const createVueAppHooks = [];
function onCreateVueApp(hook) {
  if (vueApp) {
    return hook(vueApp);
  }
  createVueAppHooks.push(hook);
}
function invokeCreateVueAppHook(app) {
  vueApp = app;
  createVueAppHooks.forEach((hook) => hook(app));
}
const invokeCreateErrorHandler = once((app, createErrorHandler2) => {
  if (isFunction$1(app._component.onError)) {
    return createErrorHandler2(app);
  }
});
const E = function() {
};
E.prototype = {
  on: function(name, callback, ctx) {
    var e2 = this.e || (this.e = {});
    (e2[name] || (e2[name] = [])).push({
      fn: callback,
      ctx
    });
    return this;
  },
  once: function(name, callback, ctx) {
    var self2 = this;
    function listener() {
      self2.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function(name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;
    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }
    return this;
  },
  off: function(name, callback) {
    var e2 = this.e || (this.e = {});
    var evts = e2[name];
    var liveEvents = [];
    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }
    liveEvents.length ? e2[name] = liveEvents : delete e2[name];
    return this;
  }
};
var E$1 = E;
const LOCALE_ZH_HANS = "zh-Hans";
const LOCALE_ZH_HANT = "zh-Hant";
const LOCALE_EN = "en";
const LOCALE_FR = "fr";
const LOCALE_ES = "es";
function include(str, parts) {
  return !!parts.find((part) => str.indexOf(part) !== -1);
}
function startsWith(str, parts) {
  return parts.find((part) => str.indexOf(part) === 0);
}
function normalizeLocale$1(locale2, messages) {
  if (!locale2) {
    return;
  }
  locale2 = locale2.trim().replace(/_/g, "-");
  if (messages && messages[locale2]) {
    return locale2;
  }
  locale2 = locale2.toLowerCase();
  if (locale2 === "chinese") {
    return LOCALE_ZH_HANS;
  }
  if (locale2.indexOf("zh") === 0) {
    if (locale2.indexOf("-hans") > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale2.indexOf("-hant") > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale2, ["-tw", "-hk", "-mo", "-cht"])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  let locales2 = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales2 = Object.keys(messages);
  }
  const lang2 = startsWith(locale2, locales2);
  if (lang2) {
    return lang2;
  }
}
function getBaseSystemInfo() {
  return wx.getSystemInfoSync();
}
function validateProtocolFail(name, msg) {
  console.warn(`${name}: ${msg}`);
}
function validateProtocol(name, data, protocol, onFail) {
  if (!onFail) {
    onFail = validateProtocolFail;
  }
  for (const key in protocol) {
    const errMsg = validateProp$1(key, data[key], protocol[key], !hasOwn(data, key));
    if (isString$1(errMsg)) {
      onFail(name, errMsg);
    }
  }
}
function validateProtocols(name, args, protocol, onFail) {
  if (!protocol) {
    return;
  }
  if (!isArray$1(protocol)) {
    return validateProtocol(name, args[0] || /* @__PURE__ */ Object.create(null), protocol, onFail);
  }
  const len = protocol.length;
  const argsLen = args.length;
  for (let i = 0; i < len; i++) {
    const opts = protocol[i];
    const data = /* @__PURE__ */ Object.create(null);
    if (argsLen > i) {
      data[opts.name] = args[i];
    }
    validateProtocol(name, data, { [opts.name]: opts }, onFail);
  }
}
function validateProp$1(name, value, prop, isAbsent) {
  if (!isPlainObject(prop)) {
    prop = { type: prop };
  }
  const { type, required, validator } = prop;
  if (required && isAbsent) {
    return 'Missing required args: "' + name + '"';
  }
  if (value == null && !required) {
    return;
  }
  if (type != null) {
    let isValid2 = false;
    const types = isArray$1(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid2; i++) {
      const { valid, expectedType } = assertType$1(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid2 = valid;
    }
    if (!isValid2) {
      return getInvalidTypeMessage$1(name, value, expectedTypes);
    }
  }
  if (validator) {
    return validator(value);
  }
}
const isSimpleType$1 = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol");
function assertType$1(value, type) {
  let valid;
  const expectedType = getType$1(type);
  if (isSimpleType$1(expectedType)) {
    const t2 = typeof value;
    valid = t2 === expectedType.toLowerCase();
    if (!valid && t2 === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject$1(value);
  } else if (expectedType === "Array") {
    valid = isArray$1(value);
  } else {
    {
      valid = value instanceof type;
    }
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage$1(name, value, expectedTypes) {
  let message = `Invalid args: type check failed for args "${name}". Expected ${expectedTypes.map(capitalize).join(", ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue$1(value, expectedType);
  const receivedValue = styleValue$1(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable$1(expectedType) && !isBoolean$1(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable$1(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function getType$1(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : "";
}
function styleValue$1(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable$1(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean$1(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
function tryCatch(fn) {
  return function() {
    try {
      return fn.apply(fn, arguments);
    } catch (e2) {
      console.error(e2);
    }
  };
}
let invokeCallbackId = 1;
const invokeCallbacks = {};
function addInvokeCallback(id, name, callback, keepAlive = false) {
  invokeCallbacks[id] = {
    name,
    keepAlive,
    callback
  };
  return id;
}
function invokeCallback(id, res, extras) {
  if (typeof id === "number") {
    const opts = invokeCallbacks[id];
    if (opts) {
      if (!opts.keepAlive) {
        delete invokeCallbacks[id];
      }
      return opts.callback(res, extras);
    }
  }
  return res;
}
const API_SUCCESS = "success";
const API_FAIL = "fail";
const API_COMPLETE = "complete";
function getApiCallbacks(args) {
  const apiCallbacks = {};
  for (const name in args) {
    const fn = args[name];
    if (isFunction$1(fn)) {
      apiCallbacks[name] = tryCatch(fn);
      delete args[name];
    }
  }
  return apiCallbacks;
}
function normalizeErrMsg$1(errMsg, name) {
  if (!errMsg || errMsg.indexOf(":fail") === -1) {
    return name + ":ok";
  }
  return name + errMsg.substring(errMsg.indexOf(":fail"));
}
function createAsyncApiCallback(name, args = {}, { beforeAll, beforeSuccess } = {}) {
  if (!isPlainObject(args)) {
    args = {};
  }
  const { success, fail, complete } = getApiCallbacks(args);
  const hasSuccess = isFunction$1(success);
  const hasFail = isFunction$1(fail);
  const hasComplete = isFunction$1(complete);
  const callbackId = invokeCallbackId++;
  addInvokeCallback(callbackId, name, (res) => {
    res = res || {};
    res.errMsg = normalizeErrMsg$1(res.errMsg, name);
    isFunction$1(beforeAll) && beforeAll(res);
    if (res.errMsg === name + ":ok") {
      isFunction$1(beforeSuccess) && beforeSuccess(res, args);
      hasSuccess && success(res);
    } else {
      hasFail && fail(res);
    }
    hasComplete && complete(res);
  });
  return callbackId;
}
const HOOK_SUCCESS = "success";
const HOOK_FAIL = "fail";
const HOOK_COMPLETE = "complete";
const globalInterceptors = {};
const scopedInterceptors = {};
function wrapperHook(hook, params) {
  return function(data) {
    return hook(data, params) || data;
  };
}
function queue$1(hooks2, data, params) {
  let promise = false;
  for (let i = 0; i < hooks2.length; i++) {
    const hook = hooks2[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      const res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then() {
          },
          catch() {
          }
        };
      }
    }
  }
  return promise || {
    then(callback) {
      return callback(data);
    },
    catch() {
    }
  };
}
function wrapperOptions(interceptors2, options = {}) {
  [HOOK_SUCCESS, HOOK_FAIL, HOOK_COMPLETE].forEach((name) => {
    const hooks2 = interceptors2[name];
    if (!isArray$1(hooks2)) {
      return;
    }
    const oldCallback = options[name];
    options[name] = function callbackInterceptor(res) {
      queue$1(hooks2, res, options).then((res2) => {
        return isFunction$1(oldCallback) && oldCallback(res2) || res2;
      });
    };
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  const returnValueHooks = [];
  if (isArray$1(globalInterceptors.returnValue)) {
    returnValueHooks.push(...globalInterceptors.returnValue);
  }
  const interceptor = scopedInterceptors[method];
  if (interceptor && isArray$1(interceptor.returnValue)) {
    returnValueHooks.push(...interceptor.returnValue);
  }
  returnValueHooks.forEach((hook) => {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  const interceptor = /* @__PURE__ */ Object.create(null);
  Object.keys(globalInterceptors).forEach((hook) => {
    if (hook !== "returnValue") {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  const scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach((hook) => {
      if (hook !== "returnValue") {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options, params) {
  const interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (isArray$1(interceptor.invoke)) {
      const res = queue$1(interceptor.invoke, options);
      return res.then((options2) => {
        return api(wrapperOptions(getApiInterceptorHooks(method), options2), ...params);
      });
    } else {
      return api(wrapperOptions(interceptor, options), ...params);
    }
  }
  return api(options, ...params);
}
function hasCallback(args) {
  if (isPlainObject(args) && [API_SUCCESS, API_FAIL, API_COMPLETE].find((cb) => isFunction$1(args[cb]))) {
    return true;
  }
  return false;
}
function handlePromise(promise) {
  return promise;
}
function promisify$1(name, fn) {
  return (args = {}, ...rest) => {
    if (hasCallback(args)) {
      return wrapperReturnValue(name, invokeApi(name, fn, args, rest));
    }
    return wrapperReturnValue(name, handlePromise(new Promise((resolve, reject) => {
      invokeApi(name, fn, extend$1(args, { success: resolve, fail: reject }), rest);
    })));
  };
}
function formatApiArgs(args, options) {
  const params = args[0];
  if (!options || !isPlainObject(options.formatArgs) && isPlainObject(params)) {
    return;
  }
  const formatArgs = options.formatArgs;
  const keys2 = Object.keys(formatArgs);
  for (let i = 0; i < keys2.length; i++) {
    const name = keys2[i];
    const formatterOrDefaultValue = formatArgs[name];
    if (isFunction$1(formatterOrDefaultValue)) {
      const errMsg = formatterOrDefaultValue(args[0][name], params);
      if (isString$1(errMsg)) {
        return errMsg;
      }
    } else {
      if (!hasOwn(params, name)) {
        params[name] = formatterOrDefaultValue;
      }
    }
  }
}
function invokeSuccess(id, name, res) {
  return invokeCallback(id, extend$1(res || {}, { errMsg: name + ":ok" }));
}
function invokeFail(id, name, errMsg, errRes) {
  return invokeCallback(id, extend$1({ errMsg: name + ":fail" + (errMsg ? " " + errMsg : "") }, errRes));
}
function beforeInvokeApi(name, args, protocol, options) {
  {
    validateProtocols(name, args, protocol);
  }
  if (options && options.beforeInvoke) {
    const errMsg2 = options.beforeInvoke(args);
    if (isString$1(errMsg2)) {
      return errMsg2;
    }
  }
  const errMsg = formatApiArgs(args, options);
  if (errMsg) {
    return errMsg;
  }
}
function normalizeErrMsg(errMsg) {
  if (!errMsg || isString$1(errMsg)) {
    return errMsg;
  }
  if (errMsg.stack) {
    console.error(errMsg.message + LINEFEED + errMsg.stack);
    return errMsg.message;
  }
  return errMsg;
}
function wrapperTaskApi(name, fn, protocol, options) {
  return (args) => {
    const id = createAsyncApiCallback(name, args, options);
    const errMsg = beforeInvokeApi(name, [args], protocol, options);
    if (errMsg) {
      return invokeFail(id, name, errMsg);
    }
    return fn(args, {
      resolve: (res) => invokeSuccess(id, name, res),
      reject: (errMsg2, errRes) => invokeFail(id, name, normalizeErrMsg(errMsg2), errRes)
    });
  };
}
function wrapperSyncApi(name, fn, protocol, options) {
  return (...args) => {
    const errMsg = beforeInvokeApi(name, args, protocol, options);
    if (errMsg) {
      throw new Error(errMsg);
    }
    return fn.apply(null, args);
  };
}
function wrapperAsyncApi(name, fn, protocol, options) {
  return wrapperTaskApi(name, fn, protocol, options);
}
function defineSyncApi(name, fn, protocol, options) {
  return wrapperSyncApi(name, fn, protocol, options);
}
function defineAsyncApi(name, fn, protocol, options) {
  return promisify$1(name, wrapperAsyncApi(name, fn, protocol, options));
}
const API_UPX2PX = "upx2px";
const Upx2pxProtocol = [
  {
    name: "upx",
    type: [Number, String],
    required: true
  }
];
const EPS = 1e-4;
const BASE_DEVICE_WIDTH = 750;
let isIOS = false;
let deviceWidth = 0;
let deviceDPR = 0;
function checkDeviceWidth() {
  const { platform, pixelRatio, windowWidth } = getBaseSystemInfo();
  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === "ios";
}
const upx2px = defineSyncApi(API_UPX2PX, (number, newDeviceWidth) => {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  let width = newDeviceWidth || deviceWidth;
  let result = number / BASE_DEVICE_WIDTH * width;
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}, Upx2pxProtocol);
const API_ADD_INTERCEPTOR = "addInterceptor";
const API_REMOVE_INTERCEPTOR = "removeInterceptor";
const AddInterceptorProtocol = [
  {
    name: "method",
    type: [String, Object],
    required: true
  }
];
const RemoveInterceptorProtocol = AddInterceptorProtocol;
function mergeInterceptorHook(interceptors2, interceptor) {
  Object.keys(interceptor).forEach((hook) => {
    if (isFunction$1(interceptor[hook])) {
      interceptors2[hook] = mergeHook(interceptors2[hook], interceptor[hook]);
    }
  });
}
function removeInterceptorHook(interceptors2, interceptor) {
  if (!interceptors2 || !interceptor) {
    return;
  }
  Object.keys(interceptor).forEach((name) => {
    const hooks2 = interceptors2[name];
    const hook = interceptor[name];
    if (isArray$1(hooks2) && isFunction$1(hook)) {
      remove(hooks2, hook);
    }
  });
}
function mergeHook(parentVal, childVal) {
  const res = childVal ? parentVal ? parentVal.concat(childVal) : isArray$1(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks2) {
  const res = [];
  for (let i = 0; i < hooks2.length; i++) {
    if (res.indexOf(hooks2[i]) === -1) {
      res.push(hooks2[i]);
    }
  }
  return res;
}
const addInterceptor = defineSyncApi(API_ADD_INTERCEPTOR, (method, interceptor) => {
  if (isString$1(method) && isPlainObject(interceptor)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), interceptor);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}, AddInterceptorProtocol);
const removeInterceptor = defineSyncApi(API_REMOVE_INTERCEPTOR, (method, interceptor) => {
  if (isString$1(method)) {
    if (isPlainObject(interceptor)) {
      removeInterceptorHook(scopedInterceptors[method], interceptor);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}, RemoveInterceptorProtocol);
const interceptors = {};
const API_ON = "$on";
const OnProtocol = [
  {
    name: "event",
    type: String,
    required: true
  },
  {
    name: "callback",
    type: Function,
    required: true
  }
];
const API_ONCE = "$once";
const OnceProtocol = OnProtocol;
const API_OFF = "$off";
const OffProtocol = [
  {
    name: "event",
    type: [String, Array]
  },
  {
    name: "callback",
    type: Function
  }
];
const API_EMIT = "$emit";
const EmitProtocol = [
  {
    name: "event",
    type: String,
    required: true
  }
];
const emitter = new E$1();
const $on = defineSyncApi(API_ON, (name, callback) => {
  emitter.on(name, callback);
  return () => emitter.off(name, callback);
}, OnProtocol);
const $once = defineSyncApi(API_ONCE, (name, callback) => {
  emitter.once(name, callback);
  return () => emitter.off(name, callback);
}, OnceProtocol);
const $off = defineSyncApi(API_OFF, (name, callback) => {
  if (!name) {
    emitter.e = {};
    return;
  }
  if (!isArray$1(name))
    name = [name];
  name.forEach((n) => emitter.off(n, callback));
}, OffProtocol);
const $emit = defineSyncApi(API_EMIT, (name, ...args) => {
  emitter.emit(name, ...args);
}, EmitProtocol);
let cid;
let cidErrMsg;
let enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e2) {
  }
  return message;
}
function invokePushCallback(args) {
  if (args.type === "enabled") {
    enabled = true;
  } else if (args.type === "clientId") {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === "pushMsg") {
    const message = {
      type: "receive",
      data: normalizePushMessage(args.message)
    };
    for (let i = 0; i < onPushMessageCallbacks.length; i++) {
      const callback = onPushMessageCallbacks[i];
      callback(message);
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === "click") {
    onPushMessageCallbacks.forEach((callback) => {
      callback({
        type: "click",
        data: normalizePushMessage(args.message)
      });
    });
  }
}
const getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid2, errMsg) {
  getPushCidCallbacks.forEach((callback) => {
    callback(cid2, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
const API_GET_PUSH_CLIENT_ID = "getPushClientId";
const getPushClientId = defineAsyncApi(API_GET_PUSH_CLIENT_ID, (_, { resolve, reject }) => {
  Promise.resolve().then(() => {
    if (typeof enabled === "undefined") {
      enabled = false;
      cid = "";
      cidErrMsg = "uniPush is not enabled";
    }
    getPushCidCallbacks.push((cid2, errMsg) => {
      if (cid2) {
        resolve({ cid: cid2 });
      } else {
        reject(errMsg);
      }
    });
    if (typeof cid !== "undefined") {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
});
const onPushMessageCallbacks = [];
const onPushMessage = (fn) => {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
const offPushMessage = (fn) => {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    const index2 = onPushMessageCallbacks.indexOf(fn);
    if (index2 > -1) {
      onPushMessageCallbacks.splice(index2, 1);
    }
  }
};
const SYNC_API_RE = /^\$|getLocale|setLocale|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getDeviceInfo|getAppBaseInfo|getWindowInfo|getSystemSetting|getAppAuthorizeSetting/;
const CONTEXT_API_RE = /^create|Manager$/;
const CONTEXT_API_RE_EXC = ["createBLEConnection"];
const ASYNC_API = ["createBLEConnection"];
const CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== "onPush";
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function(onfinally) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(onfinally && onfinally()).then(() => value), (reason) => promise.resolve(onfinally && onfinally()).then(() => {
      throw reason;
    }));
  };
}
function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  if (!isFunction$1(api)) {
    return api;
  }
  return function promiseApi(options = {}, ...rest) {
    if (isFunction$1(options.success) || isFunction$1(options.fail) || isFunction$1(options.complete)) {
      return wrapperReturnValue(name, invokeApi(name, api, options, rest));
    }
    return wrapperReturnValue(name, handlePromise(new Promise((resolve, reject) => {
      invokeApi(name, api, extend$1({}, options, {
        success: resolve,
        fail: reject
      }), rest);
    })));
  };
}
const CALLBACKS = ["success", "fail", "cancel", "complete"];
function initWrapper(protocols2) {
  function processCallback(methodName, method, returnValue) {
    return function(res) {
      return method(processReturnValue(methodName, res, returnValue));
    };
  }
  function processArgs(methodName, fromArgs, argsOption = {}, returnValue = {}, keepFromArgs = false) {
    if (isPlainObject(fromArgs)) {
      const toArgs = keepFromArgs === true ? fromArgs : {};
      if (isFunction$1(argsOption)) {
        argsOption = argsOption(fromArgs, toArgs) || {};
      }
      for (const key in fromArgs) {
        if (hasOwn(argsOption, key)) {
          let keyOption = argsOption[key];
          if (isFunction$1(keyOption)) {
            keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
          }
          if (!keyOption) {
            console.warn(`微信小程序 ${methodName} 暂不支持 ${key}`);
          } else if (isString$1(keyOption)) {
            toArgs[keyOption] = fromArgs[key];
          } else if (isPlainObject(keyOption)) {
            toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
          }
        } else if (CALLBACKS.indexOf(key) !== -1) {
          const callback = fromArgs[key];
          if (isFunction$1(callback)) {
            toArgs[key] = processCallback(methodName, callback, returnValue);
          }
        } else {
          if (!keepFromArgs && !hasOwn(toArgs, key)) {
            toArgs[key] = fromArgs[key];
          }
        }
      }
      return toArgs;
    } else if (isFunction$1(fromArgs)) {
      fromArgs = processCallback(methodName, fromArgs, returnValue);
    }
    return fromArgs;
  }
  function processReturnValue(methodName, res, returnValue, keepReturnValue = false) {
    if (isFunction$1(protocols2.returnValue)) {
      res = protocols2.returnValue(methodName, res);
    }
    return processArgs(methodName, res, returnValue, {}, keepReturnValue);
  }
  return function wrapper(methodName, method) {
    if (!hasOwn(protocols2, methodName)) {
      return method;
    }
    const protocol = protocols2[methodName];
    if (!protocol) {
      return function() {
        console.error(`微信小程序 暂不支持${methodName}`);
      };
    }
    return function(arg1, arg2) {
      let options = protocol;
      if (isFunction$1(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      const args = [arg1];
      if (typeof arg2 !== "undefined") {
        args.push(arg2);
      }
      const returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  };
}
const getLocale$1 = () => {
  const app = isFunction$1(getApp) && getApp({ allowDefault: true });
  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return normalizeLocale$1(wx.getSystemInfoSync().language) || LOCALE_EN;
};
const setLocale = (locale2) => {
  const app = isFunction$1(getApp) && getApp();
  if (!app) {
    return false;
  }
  const oldLocale = app.$vm.$locale;
  if (oldLocale !== locale2) {
    app.$vm.$locale = locale2;
    onLocaleChangeCallbacks.forEach((fn) => fn({ locale: locale2 }));
    return true;
  }
  return false;
};
const onLocaleChangeCallbacks = [];
const onLocaleChange = (fn) => {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
};
if (typeof global !== "undefined") {
  global.getLocale = getLocale$1;
}
const UUID_KEY = "__DC_STAT_UUID";
let deviceId;
function useDeviceId(global2 = wx) {
  return function addDeviceId(_, toRes) {
    deviceId = deviceId || global2.getStorageSync(UUID_KEY);
    if (!deviceId) {
      deviceId = Date.now() + "" + Math.floor(Math.random() * 1e7);
      wx.setStorage({
        key: UUID_KEY,
        data: deviceId
      });
    }
    toRes.deviceId = deviceId;
  };
}
function addSafeAreaInsets(fromRes, toRes) {
  if (fromRes.safeArea) {
    const safeArea = fromRes.safeArea;
    toRes.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: fromRes.windowWidth - safeArea.right,
      bottom: fromRes.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(fromRes, toRes) {
  const { brand = "", model = "", system = "", language = "", theme, version: version2, platform, fontSizeSetting, SDKVersion, pixelRatio, deviceOrientation } = fromRes;
  let osName = "";
  let osVersion = "";
  {
    osName = system.split(" ")[0] || "";
    osVersion = system.split(" ")[1] || "";
  }
  let hostVersion = version2;
  let deviceType = getGetDeviceType(fromRes, model);
  let deviceBrand = getDeviceBrand(brand);
  let _hostName = getHostName(fromRes);
  let _deviceOrientation = deviceOrientation;
  let _devicePixelRatio = pixelRatio;
  let _SDKVersion = SDKVersion;
  const hostLanguage = language.replace(/_/g, "-");
  const parameters = {
    appId: "",
    appName: "",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.8.4",
    uniRuntimeVersion: "3.8.4",
    uniPlatform: "mp-weixin",
    deviceBrand,
    deviceModel: model,
    deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion,
    hostTheme: theme,
    hostVersion,
    hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: void 0,
    osTheme: void 0,
    ua: void 0,
    hostPackageName: void 0,
    browserName: void 0,
    browserVersion: void 0
  };
  extend$1(toRes, parameters);
}
function getGetDeviceType(fromRes, model) {
  let deviceType = fromRes.deviceType || "phone";
  {
    const deviceTypeMaps = {
      ipad: "pad",
      windows: "pc",
      mac: "pc"
    };
    const deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    const _model = model.toLocaleLowerCase();
    for (let index2 = 0; index2 < deviceTypeMapsKeys.length; index2++) {
      const _m = deviceTypeMapsKeys[index2];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  let deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = deviceBrand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(fromRes) {
  const _platform = "WeChat";
  let _hostName = fromRes.hostName || _platform;
  {
    if (fromRes.environment) {
      _hostName = fromRes.environment;
    } else if (fromRes.host && fromRes.host.env) {
      _hostName = fromRes.host.env;
    }
  }
  return _hostName;
}
const getSystemInfo = {
  returnValue: (fromRes, toRes) => {
    addSafeAreaInsets(fromRes, toRes);
    useDeviceId()(fromRes, toRes);
    populateParameters(fromRes, toRes);
  }
};
const getSystemInfoSync = getSystemInfo;
const redirectTo = {};
const previewImage = {
  args(fromArgs, toArgs) {
    let currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    const urls = fromArgs.urls;
    if (!isArray$1(urls)) {
      return;
    }
    const len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      toArgs.current = urls[currentIndex];
      toArgs.urls = urls.filter((item, index2) => index2 < currentIndex ? item !== urls[currentIndex] : true);
    } else {
      toArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
const showActionSheet = {
  args(fromArgs, toArgs) {
    toArgs.alertText = fromArgs.title;
  }
};
const getDeviceInfo = {
  returnValue: (fromRes, toRes) => {
    const { brand, model } = fromRes;
    let deviceType = getGetDeviceType(fromRes, model);
    let deviceBrand = getDeviceBrand(brand);
    useDeviceId()(fromRes, toRes);
    toRes = sortObject(extend$1(toRes, {
      deviceType,
      deviceBrand,
      deviceModel: model
    }));
  }
};
const getAppBaseInfo = {
  returnValue: (fromRes, toRes) => {
    const { version: version2, language, SDKVersion, theme } = fromRes;
    let _hostName = getHostName(fromRes);
    let hostLanguage = language.replace(/_/g, "-");
    toRes = sortObject(extend$1(toRes, {
      hostVersion: version2,
      hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme,
      appId: "",
      appName: "",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage)
    }));
  }
};
const getWindowInfo = {
  returnValue: (fromRes, toRes) => {
    addSafeAreaInsets(fromRes, toRes);
    toRes = sortObject(extend$1(toRes, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
const getAppAuthorizeSetting = {
  returnValue: function(fromRes, toRes) {
    const { locationReducedAccuracy } = fromRes;
    toRes.locationAccuracy = "unsupported";
    if (locationReducedAccuracy === true) {
      toRes.locationAccuracy = "reduced";
    } else if (locationReducedAccuracy === false) {
      toRes.locationAccuracy = "full";
    }
  }
};
const baseApis = {
  $on,
  $off,
  $once,
  $emit,
  upx2px,
  interceptors,
  addInterceptor,
  removeInterceptor,
  onCreateVueApp,
  invokeCreateVueAppHook,
  getLocale: getLocale$1,
  setLocale,
  onLocaleChange,
  getPushClientId,
  onPushMessage,
  offPushMessage,
  invokePushCallback
};
function initUni(api, protocols2, platform = wx) {
  const wrapper = initWrapper(protocols2);
  const UniProxyHandlers = {
    get(target, key) {
      if (hasOwn(target, key)) {
        return target[key];
      }
      if (hasOwn(api, key)) {
        return promisify(key, api[key]);
      }
      if (hasOwn(baseApis, key)) {
        return promisify(key, baseApis[key]);
      }
      return promisify(key, wrapper(key, platform[key]));
    }
  };
  return new Proxy({}, UniProxyHandlers);
}
function initGetProvider(providers) {
  return function getProvider2({ service, success, fail, complete }) {
    let res;
    if (providers[service]) {
      res = {
        errMsg: "getProvider:ok",
        service,
        provider: providers[service]
      };
      isFunction$1(success) && success(res);
    } else {
      res = {
        errMsg: "getProvider:fail:服务[" + service + "]不存在"
      };
      isFunction$1(fail) && fail(res);
    }
    isFunction$1(complete) && complete(res);
  };
}
const objectKeys = [
  "qy",
  "env",
  "error",
  "version",
  "lanDebug",
  "cloud",
  "serviceMarket",
  "router",
  "worklet"
];
const singlePageDisableKey = ["lanDebug", "router", "worklet"];
const launchOption = wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof wx[key] === "function";
}
function initWx() {
  let global2 = wx;
  if (typeof globalThis !== "undefined" && globalThis.wx && wx !== globalThis.wx) {
    global2 = globalThis.wx;
  }
  const newWx = {};
  for (const key in global2) {
    if (isWxKey(key)) {
      newWx[key] = global2[key];
    }
  }
  if (typeof globalThis !== "undefined") {
    globalThis.wx = newWx;
  }
  return newWx;
}
const mocks$1 = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];
const getProvider = initGetProvider({
  oauth: ["weixin"],
  share: ["weixin"],
  payment: ["wxpay"],
  push: ["weixin"]
});
function initComponentMocks(component) {
  const res = /* @__PURE__ */ Object.create(null);
  mocks$1.forEach((name) => {
    res[name] = component[name];
  });
  return res;
}
function createSelectorQuery() {
  const query = wx$2.createSelectorQuery();
  const oldIn = query.in;
  query.in = function newIn(component) {
    return oldIn.call(this, initComponentMocks(component));
  };
  return query;
}
const wx$2 = initWx();
let baseInfo = wx$2.getAppBaseInfo && wx$2.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx$2.getSystemInfoSync();
}
const host = baseInfo ? baseInfo.host : null;
const shareVideoMessage = host && host.env === "SAAASDK" ? wx$2.miniapp.shareVideoMessage : wx$2.shareVideoMessage;
var shims = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  createSelectorQuery,
  getProvider,
  shareVideoMessage
});
const compressImage = {
  args(fromArgs, toArgs) {
    if (fromArgs.compressedHeight && !toArgs.compressHeight) {
      toArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !toArgs.compressWidth) {
      toArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  compressImage,
  getAppAuthorizeSetting,
  getAppBaseInfo,
  getDeviceInfo,
  getSystemInfo,
  getSystemInfoSync,
  getWindowInfo,
  previewImage,
  redirectTo,
  showActionSheet
});
const wx$1 = initWx();
var index = initUni(shims, protocols, wx$1);
function warn$1(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  get active() {
    return this._active;
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else {
      warn$1(`cannot run an inactive effect scope.`);
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
      this._active = false;
    }
  }
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    const eventInfo = { effect: activeEffect, target, type, key };
    trackEffects(dep, eventInfo);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (activeEffect.onTrack) {
      activeEffect.onTrack(Object.assign({ effect: activeEffect }, debuggerEventExtraInfo));
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray$1(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray$1(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray$1(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const eventInfo = { target, type, key, newValue, oldValue, oldTarget };
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0], eventInfo);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects), eventInfo);
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray$1(dep) ? dep : [...dep];
  for (const effect of effects) {
    if (effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
  for (const effect of effects) {
    if (!effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if (effect.onTrigger) {
      effect.onTrigger(extend$1({ effect }, debuggerEventExtraInfo));
    }
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
const get$1$1 = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty(key) {
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray$1(target);
    if (!isReadonly2) {
      if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject$1(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set$1$1 = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow) {
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray$1(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray$1(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function has$1(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray$1(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get: get$1$1,
  set: set$1$1,
  deleteProperty,
  has: has$1,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    {
      warn$1(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  },
  deleteProperty(target, key) {
    {
      warn$1(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend$1({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const shallowReadonlyHandlers = /* @__PURE__ */ extend$1({}, readonlyHandlers, {
  get: shallowReadonlyGet
});
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$3(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target[
    "__v_raw"
    /* ReactiveFlags.RAW */
  ];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has(key, isReadonly2 = false) {
  const target = this[
    "__v_raw"
    /* ReactiveFlags.RAW */
  ];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target[
    "__v_raw"
    /* ReactiveFlags.RAW */
  ];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add$2(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto2 = getProto(target);
  const hadKey = proto2.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$2(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = isMap(target) ? new Map(target) : new Set(target);
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
    }
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$3(this, key);
    },
    get size() {
      return size(this);
    },
    has,
    add: add$2,
    set: set$2,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$3(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has,
    add: add$2,
    set: set$2,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$3(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: createReadonlyMethod(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: createReadonlyMethod(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: createReadonlyMethod(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$3(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: createReadonlyMethod(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: createReadonlyMethod(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: createReadonlyMethod(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value[
    "__v_skip"
    /* ReactiveFlags.SKIP */
  ] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$1(target)) {
    {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target[
    "__v_raw"
    /* ReactiveFlags.RAW */
  ] && !(isReadonly2 && target[
    "__v_isReactive"
    /* ReactiveFlags.IS_REACTIVE */
  ])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ]);
  }
  return !!(value && value[
    "__v_isReactive"
    /* ReactiveFlags.IS_REACTIVE */
  ]);
}
function isReadonly(value) {
  return !!(value && value[
    "__v_isReadonly"
    /* ReactiveFlags.IS_READONLY */
  ]);
}
function isShallow(value) {
  return !!(value && value[
    "__v_isShallow"
    /* ReactiveFlags.IS_SHALLOW */
  ]);
}
function toRaw(observed) {
  const raw = observed && observed[
    "__v_raw"
    /* ReactiveFlags.RAW */
  ];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject$1(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$1(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()), {
        target: ref2,
        type: "get",
        key: "value"
      });
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  const dep = ref2.dep;
  if (dep) {
    {
      triggerEffects(dep, {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal
      });
    }
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this, newVal);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
var _a;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this[_a] = false;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this[
      "__v_isReadonly"
      /* ReactiveFlags.IS_READONLY */
    ] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
_a = "__v_isReadonly";
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction$1(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = () => {
      console.warn("Write operation failed: computed value is readonly");
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  if (debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}
const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
function warn$2(msg, ...args) {
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11, [
      msg + args.join(""),
      instance && instance.proxy,
      trace.map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
      trace
    ]);
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys2 = Object.keys(props);
  keys2.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys2.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString$1(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction$1(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
const ErrorTypeStrings = {
  [
    "sp"
    /* LifecycleHooks.SERVER_PREFETCH */
  ]: "serverPrefetch hook",
  [
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  ]: "beforeCreate hook",
  [
    "c"
    /* LifecycleHooks.CREATED */
  ]: "created hook",
  [
    "bm"
    /* LifecycleHooks.BEFORE_MOUNT */
  ]: "beforeMount hook",
  [
    "m"
    /* LifecycleHooks.MOUNTED */
  ]: "mounted hook",
  [
    "bu"
    /* LifecycleHooks.BEFORE_UPDATE */
  ]: "beforeUpdate hook",
  [
    "u"
    /* LifecycleHooks.UPDATED */
  ]: "updated",
  [
    "bum"
    /* LifecycleHooks.BEFORE_UNMOUNT */
  ]: "beforeUnmount hook",
  [
    "um"
    /* LifecycleHooks.UNMOUNTED */
  ]: "unmounted hook",
  [
    "a"
    /* LifecycleHooks.ACTIVATED */
  ]: "activated hook",
  [
    "da"
    /* LifecycleHooks.DEACTIVATED */
  ]: "deactivated hook",
  [
    "ec"
    /* LifecycleHooks.ERROR_CAPTURED */
  ]: "errorCaptured hook",
  [
    "rtc"
    /* LifecycleHooks.RENDER_TRACKED */
  ]: "renderTracked hook",
  [
    "rtg"
    /* LifecycleHooks.RENDER_TRIGGERED */
  ]: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction$1(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = ErrorTypeStrings[type] || type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    const info2 = ErrorTypeStrings[type] || type;
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn$2(`Unhandled error${info2 ? ` during execution of ${info2}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      console.error(err);
    } else {
      console.error(err);
    }
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick$1(fn) {
  const p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function hasQueueJob(job) {
  return queue.indexOf(job) > -1;
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray$1(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(seen, i = isFlushing ? flushIndex + 1 : 0) {
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.pre) {
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    {
      seen = seen || /* @__PURE__ */ new Map();
    }
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
  const diff2 = getId(a) - getId(b);
  if (diff2 === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff2;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  queue.sort(comparator);
  const check = (job) => checkRecursiveUpdates(seen, job);
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (check(job)) {
          continue;
        }
        callWithErrorHandling(
          job,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);
    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName(instance.type);
      warn$2(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`);
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
let devtools;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
  if (devtools) {
    devtools.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({ event, args });
  }
}
function setDevtoolsHook(hook, target) {
  var _a2, _b;
  devtools = hook;
  if (devtools) {
    devtools.enabled = true;
    buffer.forEach(({ event, args }) => devtools.emit(event, ...args));
    buffer = [];
  } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    // eslint-disable-next-line no-restricted-globals
    window.HTMLElement && // also exclude jsdom
    // eslint-disable-next-line no-restricted-globals
    !((_b = (_a2 = window.navigator) === null || _a2 === void 0 ? void 0 : _a2.userAgent) === null || _b === void 0 ? void 0 : _b.includes("jsdom"))
  ) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook(newHook, target);
    });
    setTimeout(() => {
      if (!devtools) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version2) {
  emit$1("app:init", app, version2, {
    Fragment,
    Text,
    Comment,
    Static
  });
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
);
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
);
const _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
);
const devtoolsComponentRemoved = (component) => {
  if (devtools && typeof devtools.cleanupBuffer === "function" && // remove the component if it wasn't buffered
  !devtools.cleanupBuffer(component)) {
    _devtoolsComponentRemoved(component);
  }
};
function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit$1(
      hook,
      component.appContext.app,
      component.uid,
      // fixed by xxxxxx
      // 为 0 是 App，无 parent 是 Page 指向 App
      component.uid === 0 ? void 0 : component.parent ? component.parent.uid : 0,
      component
    );
  };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
);
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function createDevtoolsPerformanceHook(hook) {
  return (component, type, time) => {
    emit$1(hook, component.appContext.app, component.uid, component, type, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit$1("component:emit", component.appContext.app, component, event, params);
}
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  {
    const { emitsOptions, propsOptions: [propsOptions] } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
          warn$2(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`);
        }
      } else {
        const validator = emitsOptions[event];
        if (isFunction$1(validator)) {
          const isValid2 = validator(...rawArgs);
          if (!isValid2) {
            warn$2(`Invalid event arguments: event validation failed for event "${event}".`);
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => isString$1(a) ? a.trim() : a);
    }
    if (number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  {
    devtoolsComponentEmit(instance, event, args);
  }
  {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn$2(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(event)}" instead of "${event}".`);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction$1(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend$1(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$1(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray$1(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend$1(normalized, raw);
  }
  if (isObject$1(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let currentRenderingInstance = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  instance && instance.type.__scopeId || null;
  return prev;
}
function provide(key, value) {
  if (!currentInstance) {
    {
      warn$2(`provide() can only be used inside setup().`);
    }
  } else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
    if (currentInstance.type.mpType === "app") {
      currentInstance.appContext.app.provide(key, value);
    }
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction$1(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else {
      warn$2(`injection "${String(key)}" not found.`);
    }
  } else {
    warn$2(`inject() can only be used inside setup() or functional components.`);
  }
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  if (!isFunction$1(cb)) {
    warn$2(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  if (!cb) {
    if (immediate !== void 0) {
      warn$2(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
    }
    if (deep !== void 0) {
      warn$2(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
    }
  }
  const warnInvalidSource = (s) => {
    warn$2(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
  };
  const instance = getCurrentScope() === (currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.scope) ? currentInstance : null;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray$1(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction$1(s)) {
        return callWithErrorHandling(
          s,
          instance,
          2
          /* ErrorCodes.WATCH_GETTER */
        );
      } else {
        warnInvalidSource(s);
      }
    });
  } else if (isFunction$1(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(
        source,
        instance,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
    warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(
        fn,
        instance,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  };
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect$1(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance)
      job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect = new ReactiveEffect(getter, scheduler);
  {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  }
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect$1(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }
  const unwatch = () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
  return unwatch;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction$1(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen) {
  if (!isObject$1(value) || value[
    "__v_skip"
    /* ReactiveFlags.SKIP */
  ]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray$1(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], seen);
    }
  }
  return value;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    if (isRootHook(type)) {
      target = target.root;
    }
    const hooks2 = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks2.unshift(wrappedHook);
    } else {
      hooks2.push(wrappedHook);
    }
    return wrappedHook;
  } else {
    const apiName = toHandlerKey((ErrorTypeStrings[type] || type.replace(/^on/, "")).replace(/ hook$/, ""));
    warn$2(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().`);
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
);
const onBeforeMount = createHook(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
);
const onMounted = createHook(
  "m"
  /* LifecycleHooks.MOUNTED */
);
const onBeforeUpdate = createHook(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
);
const onUpdated = createHook(
  "u"
  /* LifecycleHooks.UPDATED */
);
const onBeforeUnmount = createHook(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
);
const onUnmounted = createHook(
  "um"
  /* LifecycleHooks.UNMOUNTED */
);
const onServerPrefetch = createHook(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
);
const onRenderTriggered = createHook(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
);
const onRenderTracked = createHook(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn$2("Do not use built-in directive ids as custom directive id: " + name);
  }
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend$1(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    // fixed by xxxxxx vue-i18n 在 dev 模式，访问了 $el，故模拟一个假的
    // $el: i => i.vnode.el,
    $el: (i) => i.__$el || (i.__$el = {}),
    $data: (i) => i.data,
    $props: (i) => shallowReadonly(i.props),
    $attrs: (i) => shallowReadonly(i.attrs),
    $slots: (i) => shallowReadonly(i.slots),
    $refs: (i) => shallowReadonly(i.refs),
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
    // $nextTick: i => i.n || (i.n = nextTick.bind(i.proxy!)),// fixed by xxxxxx
    $watch: (i) => instanceWatch.bind(i)
  })
);
const isReservedPrefix = (key) => key === "_" || key === "$";
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if (key === "__isVue") {
      return true;
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
      ) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else if (currentRenderingInstance && (!isString$1(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn$2(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
      } else if (instance === currentRenderingInstance) {
        warn$2(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
      }
    }
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
      warn$2(`Cannot mutate <script setup> binding "${key}" from Options API.`);
      return false;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      warn$2(`Attempting to mutate prop "${key}". Props are readonly.`);
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      warn$2(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`);
      return false;
    } else {
      if (key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
{
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn$2(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
  };
}
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const { ctx, propsOptions: [propsOptions] } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const { ctx, setupState } = instance;
  Object.keys(toRaw(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn$2(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP
      });
    }
  });
}
function createDuplicateChecker() {
  const cache = /* @__PURE__ */ Object.create(null);
  return (type, key) => {
    if (cache[key]) {
      warn$2(`${type} property "${key}" is already defined in ${cache[key]}.`);
    } else {
      cache[key] = type;
    }
  };
}
let shouldCacheAccess = true;
function applyOptions$1(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(
      options.beforeCreate,
      instance,
      "bc"
      /* LifecycleHooks.BEFORE_CREATE */
    );
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = createDuplicateChecker();
  {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props", key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction$1(methodHandler)) {
        {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        }
        {
          checkDuplicateProperties("Methods", key);
        }
      } else {
        warn$2(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
      }
    }
  }
  if (dataOptions) {
    if (!isFunction$1(dataOptions)) {
      warn$2(`The data option must be a function. Plain object usage is no longer supported.`);
    }
    const data = dataOptions.call(publicThis, publicThis);
    if (isPromise(data)) {
      warn$2(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
    }
    if (!isObject$1(data)) {
      warn$2(`data() should return an object.`);
    } else {
      instance.data = reactive(data);
      {
        for (const key in data) {
          checkDuplicateProperties("Data", key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction$1(opt) ? opt.bind(publicThis, publicThis) : isFunction$1(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (get2 === NOOP) {
        warn$2(`Computed property "${key}" has no getter.`);
      }
      const set2 = !isFunction$1(opt) && isFunction$1(opt.set) ? opt.set.bind(publicThis) : () => {
        warn$2(`Write operation failed: computed property "${key}" is readonly.`);
      };
      const c = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
      {
        checkDuplicateProperties("Computed", key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  {
    if (provideOptions) {
      const provides = isFunction$1(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
  }
  {
    if (created) {
      callHook$1(
        created,
        instance,
        "c"
        /* LifecycleHooks.CREATED */
      );
    }
  }
  function registerLifecycleHook(register, hook) {
    if (isArray$1(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$1(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
  if (instance.ctx.$onApplyOptions) {
    instance.ctx.$onApplyOptions(options, instance, publicThis);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
  if (isArray$1(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$1(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
          /* treat default function as factory */
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v) => injected.value = v
        });
      } else {
        {
          warn$2(`injected property "${key}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`);
        }
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
    {
      checkDuplicateProperties("Inject", key);
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(isArray$1(hook) ? hook.map((h) => h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString$1(raw)) {
    const handler = ctx[raw];
    if (isFunction$1(handler)) {
      watch(getter, handler);
    } else {
      warn$2(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if (isFunction$1(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject$1(raw)) {
    if (isArray$1(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction$1(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction$1(handler)) {
        watch(getter, handler, raw);
      } else {
        warn$2(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else {
    warn$2(`Invalid watch option: "${key}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m2) => mergeOptions(resolved, m2, optionMergeStrategies, true));
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject$1(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to2, from2, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from2;
  if (extendsOptions) {
    mergeOptions(to2, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m2) => mergeOptions(to2, m2, strats, true));
  }
  for (const key in from2) {
    if (asMixin && key === "expose") {
      warn$2(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to2[key] = strat ? strat(to2[key], from2[key]) : from2[key];
    }
  }
  return to2;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray$1,
  created: mergeAsArray$1,
  beforeMount: mergeAsArray$1,
  mounted: mergeAsArray$1,
  beforeUpdate: mergeAsArray$1,
  updated: mergeAsArray$1,
  beforeDestroy: mergeAsArray$1,
  beforeUnmount: mergeAsArray$1,
  destroyed: mergeAsArray$1,
  unmounted: mergeAsArray$1,
  activated: mergeAsArray$1,
  deactivated: mergeAsArray$1,
  errorCaptured: mergeAsArray$1,
  serverPrefetch: mergeAsArray$1,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to2, from2) {
  if (!from2) {
    return to2;
  }
  if (!to2) {
    return from2;
  }
  return function mergedDataFn() {
    return extend$1(isFunction$1(to2) ? to2.call(this, this) : to2, isFunction$1(from2) ? from2.call(this, this) : from2);
  };
}
function mergeInject(to2, from2) {
  return mergeObjectOptions(normalizeInject(to2), normalizeInject(from2));
}
function normalizeInject(raw) {
  if (isArray$1(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray$1(to2, from2) {
  return to2 ? [...new Set([].concat(to2, from2))] : from2;
}
function mergeObjectOptions(to2, from2) {
  return to2 ? extend$1(extend$1(/* @__PURE__ */ Object.create(null), to2), from2) : from2;
}
function mergeWatchOptions(to2, from2) {
  if (!to2)
    return from2;
  if (!from2)
    return to2;
  const merged = extend$1(/* @__PURE__ */ Object.create(null), to2);
  for (const key in from2) {
    merged[key] = mergeAsArray$1(to2[key], from2[key]);
  }
  return merged;
}
function initProps$1(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId)
      return true;
    instance = instance.parent;
  }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const { props, attrs, vnode: { patchFlag } } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
              /* isAbsent */
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
              /* isAbsent */
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction$1(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[
      0
      /* BooleanFlags.shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* BooleanFlags.shouldCastTrue */
      ] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction$1(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys2] = normalizePropsOptions(raw2, appContext, true);
      extend$1(normalized, props);
      if (keys2)
        needCastKeys.push(...keys2);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$1(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray$1(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if (!isString$1(raw[i])) {
        warn$2(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject$1(raw)) {
      warn$2(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray$1(opt) || isFunction$1(opt) ? { type: opt } : Object.assign({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[
            0
            /* BooleanFlags.shouldCast */
          ] = booleanIndex > -1;
          prop[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject$1(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  } else {
    warn$2(`Invalid prop name: "${key}" is a reserved property.`);
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
  return match ? match[2] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray$1(expectedTypes)) {
    return expectedTypes.findIndex((t2) => isSameType(t2, type));
  } else if (isFunction$1(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = toRaw(props);
  const options = instance.propsOptions[0];
  for (const key in options) {
    let opt = options[key];
    if (opt == null)
      continue;
    validateProp(key, resolvedValues[key], opt, !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
  }
}
function validateProp(name, value, prop, isAbsent) {
  const { type, required, validator } = prop;
  if (required && isAbsent) {
    warn$2('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  if (type != null && type !== true) {
    let isValid2 = false;
    const types = isArray$1(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid2; i++) {
      const { valid, expectedType } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid2 = valid;
    }
    if (!isValid2) {
      warn$2(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value)) {
    warn$2('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
const isSimpleType = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol,BigInt");
function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (isSimpleType(expectedType)) {
    const t2 = typeof value;
    valid = t2 === expectedType.toLowerCase();
    if (!valid && t2 === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject$1(value);
  } else if (expectedType === "Array") {
    valid = isArray$1(value);
  } else if (expectedType === "null") {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction$1(rootComponent)) {
      rootComponent = Object.assign({}, rootComponent);
    }
    if (rootProps != null && !isObject$1(rootProps)) {
      warn$2(`root props passed to app.mount() must be an object.`);
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        {
          warn$2(`app.config cannot be replaced. Modify individual options instead.`);
        }
      },
      use(plugin2, ...options) {
        if (installedPlugins.has(plugin2)) {
          warn$2(`Plugin has already been applied to target app.`);
        } else if (plugin2 && isFunction$1(plugin2.install)) {
          installedPlugins.add(plugin2);
          plugin2.install(app, ...options);
        } else if (isFunction$1(plugin2)) {
          installedPlugins.add(plugin2);
          plugin2(app, ...options);
        } else {
          warn$2(`A plugin must either be a function or an object with an "install" function.`);
        }
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else {
            warn$2("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
          }
        }
        return app;
      },
      component(name, component) {
        {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if (context.components[name]) {
          warn$2(`Component "${name}" has already been registered in target app.`);
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if (context.directives[name]) {
          warn$2(`Directive "${name}" has already been registered in target app.`);
        }
        context.directives[name] = directive;
        return app;
      },
      // fixed by xxxxxx
      mount() {
      },
      // fixed by xxxxxx
      unmount() {
      },
      provide(key, value) {
        if (key in context.provides) {
          warn$2(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
        }
        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}
let supported;
let perf;
function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark(`vue-${type}-${instance.uid}`);
  }
  {
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    const startTag = `vue-${type}-${instance.uid}`;
    const endTag = startTag + `:end`;
    perf.mark(endTag);
    perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
  {
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function isSupported() {
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  return supported;
}
const queuePostRenderEffect$1 = queuePostFlushCb;
const Fragment = Symbol("Fragment");
const Text = Symbol("Text");
const Comment = Symbol("Comment");
const Static = Symbol("Static");
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = createDevRenderContext(instance);
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
const isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, config) {
  const appIsNativeTag = config.isNativeTag || NO;
  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn$2("Do not use built-in or reserved HTML elements as component id: " + name);
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const {
    props
    /*, children*/
  } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps$1(instance, props, isStateful, isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component2 = instance.type;
  {
    if (Component2.name) {
      validateComponentName(Component2.name, instance.appContext.config);
    }
    if (Component2.components) {
      const names = Object.keys(Component2.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component2.directives) {
      const names = Object.keys(Component2.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component2.compilerOptions && isRuntimeOnly()) {
      warn$2(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  {
    exposePropsOnRenderContext(instance);
  }
  const { setup } = Component2;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance, 0, [shallowReadonly(instance.props), setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      {
        warn$2(`setup() returned a Promise, but the version of Vue you are using does not support it yet.`);
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction$1(setupResult)) {
    {
      instance.render = setupResult;
    }
  } else if (isObject$1(setupResult)) {
    if (isVNode(setupResult)) {
      warn$2(`setup() should not return VNodes directly - return a render function instead.`);
    }
    {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (setupResult !== void 0) {
    warn$2(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
  }
  finishComponentSetup(instance, isSSR);
}
let compile;
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component2 = instance.type;
  if (!instance.render) {
    instance.render = Component2.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions$1(instance);
    resetTracking();
    unsetCurrentInstance();
  }
  if (!Component2.render && instance.render === NOOP && !isSSR) {
    if (Component2.template) {
      warn$2(
        `Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
        /* should not happen */
      );
    } else {
      warn$2(`Component is missing template or render function.`);
    }
  }
}
function createAttrsProxy(instance) {
  return new Proxy(
    instance.attrs,
    {
      get(target, key) {
        track(instance, "get", "$attrs");
        return target[key];
      },
      set() {
        warn$2(`setupContext.attrs is readonly.`);
        return false;
      },
      deleteProperty() {
        warn$2(`setupContext.attrs is readonly.`);
        return false;
      }
    }
  );
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    {
      if (instance.exposed) {
        warn$2(`expose() should be called only once per setup().`);
      }
      if (exposed != null) {
        let exposedType = typeof exposed;
        if (exposedType === "object") {
          if (isArray$1(exposed)) {
            exposedType = "array";
          } else if (isRef(exposed)) {
            exposedType = "ref";
          }
        }
        if (exposedType !== "object") {
          warn$2(`expose() should be passed a plain object, received ${exposedType}.`);
        }
      }
    }
    instance.exposed = exposed || {};
  };
  let attrs;
  {
    return Object.freeze({
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      get slots() {
        return shallowReadonly(instance.slots);
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        }
        return instance.proxy[key];
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component2, includeInferred = true) {
  return isFunction$1(Component2) ? Component2.displayName || Component2.name : Component2.name || includeInferred && Component2.__name;
}
function formatComponentName(instance, Component2, isRoot = false) {
  let name = getComponentName(Component2);
  if (!name && Component2.__file) {
    const match = Component2.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component2) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
const version = "3.2.47";
function unwrapper(target) {
  return unref(target);
}
const ARRAYTYPE = "[object Array]";
const OBJECTTYPE = "[object Object]";
function diff$1(current, pre) {
  const result = {};
  syncKeys(current, pre);
  _diff(current, pre, "", result);
  return result;
}
function syncKeys(current, pre) {
  current = unwrapper(current);
  if (current === pre)
    return;
  const rootCurrentType = toTypeString(current);
  const rootPreType = toTypeString(pre);
  if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
    for (let key in pre) {
      const currentValue = current[key];
      if (currentValue === void 0) {
        current[key] = null;
      } else {
        syncKeys(currentValue, pre[key]);
      }
    }
  } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
    if (current.length >= pre.length) {
      pre.forEach((item, index2) => {
        syncKeys(current[index2], item);
      });
    }
  }
}
function _diff(current, pre, path, result) {
  current = unwrapper(current);
  if (current === pre)
    return;
  const rootCurrentType = toTypeString(current);
  const rootPreType = toTypeString(pre);
  if (rootCurrentType == OBJECTTYPE) {
    if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
      setResult(result, path, current);
    } else {
      for (let key in current) {
        const currentValue = unwrapper(current[key]);
        const preValue = pre[key];
        const currentType = toTypeString(currentValue);
        const preType = toTypeString(preValue);
        if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
          if (currentValue != preValue) {
            setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
          }
        } else if (currentType == ARRAYTYPE) {
          if (preType != ARRAYTYPE) {
            setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
          } else {
            if (currentValue.length < preValue.length) {
              setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
            } else {
              currentValue.forEach((item, index2) => {
                _diff(item, preValue[index2], (path == "" ? "" : path + ".") + key + "[" + index2 + "]", result);
              });
            }
          }
        } else if (currentType == OBJECTTYPE) {
          if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
            setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
          } else {
            for (let subKey in currentValue) {
              _diff(currentValue[subKey], preValue[subKey], (path == "" ? "" : path + ".") + key + "." + subKey, result);
            }
          }
        }
      }
    }
  } else if (rootCurrentType == ARRAYTYPE) {
    if (rootPreType != ARRAYTYPE) {
      setResult(result, path, current);
    } else {
      if (current.length < pre.length) {
        setResult(result, path, current);
      } else {
        current.forEach((item, index2) => {
          _diff(item, pre[index2], path + "[" + index2 + "]", result);
        });
      }
    }
  } else {
    setResult(result, path, current);
  }
}
function setResult(result, k, v) {
  result[k] = v;
}
function hasComponentEffect(instance) {
  return queue.includes(instance.update);
}
function flushCallbacks(instance) {
  const ctx = instance.ctx;
  const callbacks = ctx.__next_tick_callbacks;
  if (callbacks && callbacks.length) {
    const copies = callbacks.slice(0);
    callbacks.length = 0;
    for (let i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }
}
function nextTick(instance, fn) {
  const ctx = instance.ctx;
  if (!ctx.__next_tick_pending && !hasComponentEffect(instance)) {
    return nextTick$1(fn && fn.bind(instance.proxy));
  }
  let _resolve;
  if (!ctx.__next_tick_callbacks) {
    ctx.__next_tick_callbacks = [];
  }
  ctx.__next_tick_callbacks.push(() => {
    if (fn) {
      callWithErrorHandling(
        fn.bind(instance.proxy),
        instance,
        14
        /* ErrorCodes.SCHEDULER */
      );
    } else if (_resolve) {
      _resolve(instance.proxy);
    }
  });
  return new Promise((resolve) => {
    _resolve = resolve;
  });
}
function clone$2(src, seen) {
  src = unwrapper(src);
  const type = typeof src;
  if (type === "object" && src !== null) {
    let copy = seen.get(src);
    if (typeof copy !== "undefined") {
      return copy;
    }
    if (isArray$1(src)) {
      const len = src.length;
      copy = new Array(len);
      seen.set(src, copy);
      for (let i = 0; i < len; i++) {
        copy[i] = clone$2(src[i], seen);
      }
    } else {
      copy = {};
      seen.set(src, copy);
      for (const name in src) {
        if (hasOwn(src, name)) {
          copy[name] = clone$2(src[name], seen);
        }
      }
    }
    return copy;
  }
  if (type !== "symbol") {
    return src;
  }
}
function deepCopy(src) {
  return clone$2(src, typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : /* @__PURE__ */ new Map());
}
function getMPInstanceData(instance, keys2) {
  const data = instance.data;
  const ret = /* @__PURE__ */ Object.create(null);
  keys2.forEach((key) => {
    ret[key] = data[key];
  });
  return ret;
}
function patch(instance, data, oldData) {
  if (!data) {
    return;
  }
  data = deepCopy(data);
  const ctx = instance.ctx;
  const mpType = ctx.mpType;
  if (mpType === "page" || mpType === "component") {
    data.r0 = 1;
    const mpInstance = ctx.$scope;
    const keys2 = Object.keys(data);
    const diffData = diff$1(data, oldData || getMPInstanceData(mpInstance, keys2));
    if (Object.keys(diffData).length) {
      ctx.__next_tick_pending = true;
      mpInstance.setData(diffData, () => {
        ctx.__next_tick_pending = false;
        flushCallbacks(instance);
      });
      flushPreFlushCbs();
    } else {
      flushCallbacks(instance);
    }
  }
}
function initAppConfig(appConfig) {
  appConfig.globalProperties.$nextTick = function $nextTick(fn) {
    return nextTick(this.$, fn);
  };
}
function onApplyOptions(options, instance, publicThis) {
  instance.appContext.config.globalProperties.$applyOptions(options, instance, publicThis);
  const computedOptions = options.computed;
  if (computedOptions) {
    const keys2 = Object.keys(computedOptions);
    if (keys2.length) {
      const ctx = instance.ctx;
      if (!ctx.$computedKeys) {
        ctx.$computedKeys = [];
      }
      ctx.$computedKeys.push(...keys2);
    }
  }
  delete instance.ctx.$onApplyOptions;
}
function setRef$1(instance, isUnmount = false) {
  const { setupState, $templateRefs, ctx: { $scope, $mpPlatform } } = instance;
  if ($mpPlatform === "mp-alipay") {
    return;
  }
  if (!$templateRefs || !$scope) {
    return;
  }
  if (isUnmount) {
    return $templateRefs.forEach((templateRef) => setTemplateRef(templateRef, null, setupState));
  }
  const check = $mpPlatform === "mp-baidu" || $mpPlatform === "mp-toutiao";
  const doSetByRefs = (refs) => {
    const mpComponents = (
      // 字节小程序 selectAllComponents 可能返回 null
      // https://github.com/dcloudio/uni-app/issues/3954
      ($scope.selectAllComponents(".r") || []).concat($scope.selectAllComponents(".r-i-f") || [])
    );
    return refs.filter((templateRef) => {
      const refValue = findComponentPublicInstance(mpComponents, templateRef.i);
      if (check && refValue === null) {
        return true;
      }
      setTemplateRef(templateRef, refValue, setupState);
      return false;
    });
  };
  const doSet = () => {
    const refs = doSetByRefs($templateRefs);
    if (refs.length && instance.proxy && instance.proxy.$scope) {
      instance.proxy.$scope.setData({ r1: 1 }, () => {
        doSetByRefs(refs);
      });
    }
  };
  if ($scope._$setRef) {
    $scope._$setRef(doSet);
  } else {
    nextTick(instance, doSet);
  }
}
function toSkip(value) {
  if (isObject$1(value)) {
    markRaw(value);
  }
  return value;
}
function findComponentPublicInstance(mpComponents, id) {
  const mpInstance = mpComponents.find((com) => com && (com.properties || com.props).uI === id);
  if (mpInstance) {
    const vm = mpInstance.$vm;
    if (vm) {
      return getExposeProxy(vm.$) || vm;
    }
    return toSkip(mpInstance);
  }
  return null;
}
function setTemplateRef({ r, f: f2 }, refValue, setupState) {
  if (isFunction$1(r)) {
    r(refValue, {});
  } else {
    const _isString = isString$1(r);
    const _isRef = isRef(r);
    if (_isString || _isRef) {
      if (f2) {
        if (!_isRef) {
          return;
        }
        if (!isArray$1(r.value)) {
          r.value = [];
        }
        const existing = r.value;
        if (existing.indexOf(refValue) === -1) {
          existing.push(refValue);
          if (!refValue) {
            return;
          }
          onBeforeUnmount(() => remove(existing, refValue), refValue.$);
        }
      } else if (_isString) {
        if (hasOwn(setupState, r)) {
          setupState[r] = refValue;
        }
      } else if (isRef(r)) {
        r.value = refValue;
      } else {
        warnRef(r);
      }
    } else {
      warnRef(r);
    }
  }
}
function warnRef(ref2) {
  warn$2("Invalid template ref type:", ref2, `(${typeof ref2})`);
}
var MPType;
(function(MPType2) {
  MPType2["APP"] = "app";
  MPType2["PAGE"] = "page";
  MPType2["COMPONENT"] = "component";
})(MPType || (MPType = {}));
const queuePostRenderEffect = queuePostFlushCb;
function mountComponent(initialVNode, options) {
  const instance = initialVNode.component = createComponentInstance(initialVNode, options.parentComponent, null);
  {
    instance.ctx.$onApplyOptions = onApplyOptions;
    instance.ctx.$children = [];
  }
  if (options.mpType === "app") {
    instance.render = NOOP;
  }
  if (options.onBeforeSetup) {
    options.onBeforeSetup(instance, options);
  }
  {
    pushWarningContext(initialVNode);
    startMeasure(instance, `mount`);
  }
  {
    startMeasure(instance, `init`);
  }
  setupComponent(instance);
  {
    endMeasure(instance, `init`);
  }
  {
    if (options.parentComponent && instance.proxy) {
      options.parentComponent.ctx.$children.push(getExposeProxy(instance) || instance.proxy);
    }
  }
  setupRenderEffect(instance);
  {
    popWarningContext();
    endMeasure(instance, `mount`);
  }
  return instance.proxy;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
function renderComponentRoot(instance) {
  const { type: Component2, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit: emit2, render, renderCache, data, setupState, ctx, uid: uid2, appContext: { app: { config: { globalProperties: { pruneComponentPropsCache: pruneComponentPropsCache2 } } } }, inheritAttrs } = instance;
  instance.$templateRefs = [];
  instance.$ei = 0;
  pruneComponentPropsCache2(uid2);
  instance.__counter = instance.__counter === 0 ? 1 : 0;
  let result;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      fallthroughAttrs(inheritAttrs, props, propsOptions, attrs);
      const proxyToUse = withProxy || proxy;
      result = render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx);
    } else {
      fallthroughAttrs(inheritAttrs, props, propsOptions, Component2.props ? attrs : getFunctionalFallthrough(attrs));
      const render2 = Component2;
      result = render2.length > 1 ? render2(props, { attrs, slots, emit: emit2 }) : render2(
        props,
        null
        /* we know it doesn't need it */
      );
    }
  } catch (err) {
    handleError(
      err,
      instance,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    );
    result = false;
  }
  setRef$1(instance);
  setCurrentRenderingInstance(prev);
  return result;
}
function fallthroughAttrs(inheritAttrs, props, propsOptions, fallthroughAttrs2) {
  if (props && fallthroughAttrs2 && inheritAttrs !== false) {
    const keys2 = Object.keys(fallthroughAttrs2).filter((key) => key !== "class" && key !== "style");
    if (!keys2.length) {
      return;
    }
    if (propsOptions && keys2.some(isModelListener)) {
      keys2.forEach((key) => {
        if (!isModelListener(key) || !(key.slice(9) in propsOptions)) {
          props[key] = fallthroughAttrs2[key];
        }
      });
    } else {
      keys2.forEach((key) => props[key] = fallthroughAttrs2[key]);
    }
  }
}
const updateComponentPreRender = (instance) => {
  pauseTracking();
  flushPreFlushCbs();
  resetTracking();
};
function componentUpdateScopedSlotsFn() {
  const scopedSlotsData = this.$scopedSlotsData;
  if (!scopedSlotsData || scopedSlotsData.length === 0) {
    return;
  }
  const mpInstance = this.ctx.$scope;
  const oldData = mpInstance.data;
  const diffData = /* @__PURE__ */ Object.create(null);
  scopedSlotsData.forEach(({ path, index: index2, data }) => {
    const oldScopedSlotData = getValueByDataPath(oldData, path);
    const diffPath = isString$1(index2) ? `${path}.${index2}` : `${path}[${index2}]`;
    if (typeof oldScopedSlotData === "undefined" || typeof oldScopedSlotData[index2] === "undefined") {
      diffData[diffPath] = data;
    } else {
      const diffScopedSlotData = diff$1(data, oldScopedSlotData[index2]);
      Object.keys(diffScopedSlotData).forEach((name) => {
        diffData[diffPath + "." + name] = diffScopedSlotData[name];
      });
    }
  });
  scopedSlotsData.length = 0;
  if (Object.keys(diffData).length) {
    mpInstance.setData(diffData);
  }
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function setupRenderEffect(instance) {
  const updateScopedSlots = componentUpdateScopedSlotsFn.bind(instance);
  instance.$updateScopedSlots = () => nextTick$1(() => queueJob(updateScopedSlots));
  const componentUpdateFn = () => {
    if (!instance.isMounted) {
      onBeforeUnmount(() => {
        setRef$1(instance, true);
      }, instance);
      {
        startMeasure(instance, `patch`);
      }
      patch(instance, renderComponentRoot(instance));
      {
        endMeasure(instance, `patch`);
      }
      {
        devtoolsComponentAdded(instance);
      }
    } else {
      const { next, bu, u } = instance;
      {
        pushWarningContext(next || instance.vnode);
      }
      toggleRecurse(instance, false);
      updateComponentPreRender();
      if (bu) {
        invokeArrayFns$1(bu);
      }
      toggleRecurse(instance, true);
      {
        startMeasure(instance, `patch`);
      }
      patch(instance, renderComponentRoot(instance));
      {
        endMeasure(instance, `patch`);
      }
      if (u) {
        queuePostRenderEffect(u);
      }
      {
        devtoolsComponentUpdated(instance);
      }
      {
        popWarningContext();
      }
    }
  };
  const effect = instance.effect = new ReactiveEffect(
    componentUpdateFn,
    () => queueJob(instance.update),
    instance.scope
    // track it in component's effect scope
  );
  const update = instance.update = effect.run.bind(effect);
  update.id = instance.uid;
  toggleRecurse(instance, true);
  {
    effect.onTrack = instance.rtc ? (e2) => invokeArrayFns$1(instance.rtc, e2) : void 0;
    effect.onTrigger = instance.rtg ? (e2) => invokeArrayFns$1(instance.rtg, e2) : void 0;
    update.ownerInstance = instance;
  }
  update();
}
function unmountComponent(instance) {
  const { bum, scope, update, um } = instance;
  if (bum) {
    invokeArrayFns$1(bum);
  }
  scope.stop();
  if (update) {
    update.active = false;
  }
  if (um) {
    queuePostRenderEffect(um);
  }
  queuePostRenderEffect(() => {
    instance.isUnmounted = true;
  });
  {
    devtoolsComponentRemoved(instance);
  }
}
const oldCreateApp = createAppAPI();
function getTarget() {
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof my !== "undefined") {
    return my;
  }
}
function createVueApp(rootComponent, rootProps = null) {
  const target = getTarget();
  target.__VUE__ = true;
  {
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  const app = oldCreateApp(rootComponent, rootProps);
  const appContext = app._context;
  initAppConfig(appContext.config);
  const createVNode = (initialVNode) => {
    initialVNode.appContext = appContext;
    initialVNode.shapeFlag = 6;
    return initialVNode;
  };
  const createComponent2 = function createComponent3(initialVNode, options) {
    return mountComponent(createVNode(initialVNode), options);
  };
  const destroyComponent = function destroyComponent2(component) {
    return component && unmountComponent(component.$);
  };
  app.mount = function mount() {
    rootComponent.render = NOOP;
    const instance = mountComponent(createVNode({ type: rootComponent }), {
      mpType: MPType.APP,
      mpInstance: null,
      parentComponent: null,
      slots: [],
      props: null
    });
    app._instance = instance.$;
    {
      devtoolsInitApp(app, version);
    }
    instance.$app = app;
    instance.$createComponent = createComponent2;
    instance.$destroyComponent = destroyComponent;
    appContext.$appInstance = instance;
    return instance;
  };
  app.unmount = function unmount() {
    warn$2(`Cannot unmount an app.`);
  };
  return app;
}
function injectLifecycleHook(name, hook, publicThis, instance) {
  if (isFunction$1(hook)) {
    injectHook(name, hook.bind(publicThis), instance);
  }
}
function initHooks$1(options, instance, publicThis) {
  const mpType = options.mpType || publicThis.$mpType;
  if (!mpType || mpType === "component") {
    return;
  }
  Object.keys(options).forEach((name) => {
    if (isUniLifecycleHook(name, options[name], false)) {
      const hooks2 = options[name];
      if (isArray$1(hooks2)) {
        hooks2.forEach((hook) => injectLifecycleHook(name, hook, publicThis, instance));
      } else {
        injectLifecycleHook(name, hooks2, publicThis, instance);
      }
    }
  });
}
function applyOptions$2(options, instance, publicThis) {
  initHooks$1(options, instance, publicThis);
}
function set$3(target, key, val) {
  return target[key] = val;
}
function createErrorHandler(app) {
  return function errorHandler(err, instance, _info) {
    if (!instance) {
      throw err;
    }
    const appInstance = app._instance;
    if (!appInstance || !appInstance.proxy) {
      throw err;
    }
    {
      appInstance.proxy.$callHook(ON_ERROR, err);
    }
  };
}
function mergeAsArray(to2, from2) {
  return to2 ? [...new Set([].concat(to2, from2))] : from2;
}
function initOptionMergeStrategies(optionMergeStrategies) {
  UniLifecycleHooks.forEach((name) => {
    optionMergeStrategies[name] = mergeAsArray;
  });
}
let realAtob;
const b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== "function") {
  realAtob = function(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, "");
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }
    str += "==".slice(2 - (str.length & 3));
    var bitmap;
    var result = "";
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length; ) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split("").map(function(c) {
    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}
function getCurrentUserInfo() {
  const token2 = index.getStorageSync("uni_id_token") || "";
  const tokenArr = token2.split(".");
  if (!token2 || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  let userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1e3;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(globalProperties) {
  globalProperties.uniIDHasRole = function(roleId) {
    const { role } = getCurrentUserInfo();
    return role.indexOf(roleId) > -1;
  };
  globalProperties.uniIDHasPermission = function(permissionId) {
    const { permission } = getCurrentUserInfo();
    return this.uniIDHasRole("admin") || permission.indexOf(permissionId) > -1;
  };
  globalProperties.uniIDTokenValid = function() {
    const { tokenExpired } = getCurrentUserInfo();
    return tokenExpired > Date.now();
  };
}
function initApp(app) {
  const appConfig = app._context.config;
  appConfig.errorHandler = invokeCreateErrorHandler(app, createErrorHandler);
  initOptionMergeStrategies(appConfig.optionMergeStrategies);
  const globalProperties = appConfig.globalProperties;
  {
    uniIdMixin(globalProperties);
  }
  {
    globalProperties.$set = set$3;
    globalProperties.$applyOptions = applyOptions$2;
  }
  {
    index.invokeCreateVueAppHook(app);
  }
}
const propsCaches = /* @__PURE__ */ Object.create(null);
function pruneComponentPropsCache(uid2) {
  delete propsCaches[uid2];
}
function findComponentPropsData(up) {
  if (!up) {
    return;
  }
  const [uid2, propsId] = up.split(",");
  if (!propsCaches[uid2]) {
    return;
  }
  return propsCaches[uid2][parseInt(propsId)];
}
var plugin = {
  install(app) {
    initApp(app);
    app.config.globalProperties.pruneComponentPropsCache = pruneComponentPropsCache;
    const oldMount = app.mount;
    app.mount = function mount(rootContainer) {
      const instance = oldMount.call(app, rootContainer);
      const createApp2 = getCreateApp();
      if (createApp2) {
        createApp2(instance);
      } else {
        if (typeof createMiniProgramApp !== "undefined") {
          createMiniProgramApp(instance);
        }
      }
      return instance;
    };
  }
};
function getCreateApp() {
  const method = "createApp";
  if (typeof global !== "undefined") {
    return global[method];
  } else if (typeof my !== "undefined") {
    return my[method];
  }
}
function vOn(value, key) {
  const instance = getCurrentInstance();
  const ctx = instance.ctx;
  const extraKey = typeof key !== "undefined" && (ctx.$mpPlatform === "mp-weixin" || ctx.$mpPlatform === "mp-qq") && (isString$1(key) || typeof key === "number") ? "_" + key : "";
  const name = "e" + instance.$ei++ + extraKey;
  const mpInstance = ctx.$scope;
  if (!value) {
    delete mpInstance[name];
    return name;
  }
  const existingInvoker = mpInstance[name];
  if (existingInvoker) {
    existingInvoker.value = value;
  } else {
    mpInstance[name] = createInvoker(value, instance);
  }
  return name;
}
function createInvoker(initialValue, instance) {
  const invoker = (e2) => {
    patchMPEvent(e2);
    let args = [e2];
    if (e2.detail && e2.detail.__args__) {
      args = e2.detail.__args__;
    }
    const eventValue = invoker.value;
    const invoke = () => callWithAsyncErrorHandling(patchStopImmediatePropagation(e2, eventValue), instance, 5, args);
    const eventTarget = e2.target;
    const eventSync = eventTarget ? eventTarget.dataset ? String(eventTarget.dataset.eventsync) === "true" : false : false;
    if (bubbles.includes(e2.type) && !eventSync) {
      setTimeout(invoke);
    } else {
      const res = invoke();
      if (e2.type === "input" && (isArray$1(res) || isPromise(res))) {
        return;
      }
      return res;
    }
  };
  invoker.value = initialValue;
  return invoker;
}
const bubbles = [
  // touch事件暂不做延迟，否则在 Android 上会影响性能，比如一些拖拽跟手手势等
  // 'touchstart',
  // 'touchmove',
  // 'touchcancel',
  // 'touchend',
  "tap",
  "longpress",
  "longtap",
  "transitionend",
  "animationstart",
  "animationiteration",
  "animationend",
  "touchforcechange"
];
function patchMPEvent(event) {
  if (event.type && event.target) {
    event.preventDefault = NOOP;
    event.stopPropagation = NOOP;
    event.stopImmediatePropagation = NOOP;
    if (!hasOwn(event, "detail")) {
      event.detail = {};
    }
    if (hasOwn(event, "markerId")) {
      event.detail = typeof event.detail === "object" ? event.detail : {};
      event.detail.markerId = event.markerId;
    }
    if (isPlainObject(event.detail) && hasOwn(event.detail, "checked") && !hasOwn(event.detail, "value")) {
      event.detail.value = event.detail.checked;
    }
    if (isPlainObject(event.detail)) {
      event.target = extend$1({}, event.target, event.detail);
    }
  }
}
function patchStopImmediatePropagation(e2, value) {
  if (isArray$1(value)) {
    const originalStop = e2.stopImmediatePropagation;
    e2.stopImmediatePropagation = () => {
      originalStop && originalStop.call(e2);
      e2._stopped = true;
    };
    return value.map((fn) => (e3) => !e3._stopped && fn(e3));
  } else {
    return value;
  }
}
function vFor(source, renderItem) {
  let ret;
  if (isArray$1(source) || isString$1(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, i);
    }
  } else if (typeof source === "number") {
    if (!Number.isInteger(source)) {
      warn$2(`The v-for range expect an integer value but got ${source}.`);
      return [];
    }
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, i);
    }
  } else if (isObject$1(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i) => renderItem(item, i, i));
    } else {
      const keys2 = Object.keys(source);
      ret = new Array(keys2.length);
      for (let i = 0, l = keys2.length; i < l; i++) {
        const key = keys2[i];
        ret[i] = renderItem(source[key], key, i);
      }
    }
  } else {
    ret = [];
  }
  return ret;
}
function withModelModifiers(fn, { number, trim }, isComponent = false) {
  if (isComponent) {
    return (...args) => {
      if (trim) {
        args = args.map((a) => a.trim());
      } else if (number) {
        args = args.map(toNumber);
      }
      return fn(...args);
    };
  }
  return (event) => {
    const value = event.detail.value;
    if (trim) {
      event.detail.value = value.trim();
    } else if (number) {
      event.detail.value = toNumber(value);
    }
    return fn(event);
  };
}
const o = (value, key) => vOn(value, key);
const f = (source, renderItem) => vFor(source, renderItem);
const e = (target, ...sources) => extend$1(target, ...sources);
const t = (val) => toDisplayString(val);
const m = (fn, modifiers, isComponent = false) => withModelModifiers(fn, modifiers, isComponent);
function createApp$1(rootComponent, rootProps = null) {
  rootComponent && (rootComponent.mpType = "app");
  return createVueApp(rootComponent, rootProps).use(plugin);
}
const createSSRApp = createApp$1;
const MP_METHODS = [
  "createSelectorQuery",
  "createIntersectionObserver",
  "selectAllComponents",
  "selectComponent"
];
function createEmitFn(oldEmit, ctx) {
  return function emit2(event, ...args) {
    const scope = ctx.$scope;
    if (scope && event) {
      const detail = { __args__: args };
      {
        scope.triggerEvent(event, detail);
      }
    }
    return oldEmit.apply(this, [event, ...args]);
  };
}
function initBaseInstance(instance, options) {
  const ctx = instance.ctx;
  ctx.mpType = options.mpType;
  ctx.$mpType = options.mpType;
  ctx.$mpPlatform = "mp-weixin";
  ctx.$scope = options.mpInstance;
  ctx.$mp = {};
  {
    ctx._self = {};
  }
  instance.slots = {};
  if (isArray$1(options.slots) && options.slots.length) {
    options.slots.forEach((name) => {
      instance.slots[name] = true;
    });
    if (instance.slots[SLOT_DEFAULT_NAME]) {
      instance.slots.default = true;
    }
  }
  ctx.getOpenerEventChannel = function() {
    {
      return options.mpInstance.getOpenerEventChannel();
    }
  };
  ctx.$hasHook = hasHook;
  ctx.$callHook = callHook;
  instance.emit = createEmitFn(instance.emit, ctx);
}
function initComponentInstance(instance, options) {
  initBaseInstance(instance, options);
  const ctx = instance.ctx;
  MP_METHODS.forEach((method) => {
    ctx[method] = function(...args) {
      const mpInstance = ctx.$scope;
      if (mpInstance && mpInstance[method]) {
        return mpInstance[method].apply(mpInstance, args);
      }
    };
  });
}
function initMocks(instance, mpInstance, mocks2) {
  const ctx = instance.ctx;
  mocks2.forEach((mock) => {
    if (hasOwn(mpInstance, mock)) {
      instance[mock] = ctx[mock] = mpInstance[mock];
    }
  });
}
function hasHook(name) {
  const hooks2 = this.$[name];
  if (hooks2 && hooks2.length) {
    return true;
  }
  return false;
}
function callHook(name, args) {
  if (name === "mounted") {
    callHook.call(this, "bm");
    this.$.isMounted = true;
    name = "m";
  }
  const hooks2 = this.$[name];
  return hooks2 && invokeArrayFns(hooks2, args);
}
const PAGE_INIT_HOOKS = [
  ON_LOAD,
  ON_SHOW,
  ON_HIDE,
  ON_UNLOAD,
  ON_RESIZE,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_ADD_TO_FAVORITES
  // 'onReady', // lifetimes.ready
  // 'onPageScroll', // 影响性能，开发者手动注册
  // 'onShareTimeline', // 右上角菜单，开发者手动注册
  // 'onShareAppMessage' // 右上角菜单，开发者手动注册
];
function findHooks(vueOptions, hooks2 = /* @__PURE__ */ new Set()) {
  if (vueOptions) {
    Object.keys(vueOptions).forEach((name) => {
      if (isUniLifecycleHook(name, vueOptions[name])) {
        hooks2.add(name);
      }
    });
    {
      const { extends: extendsOptions, mixins } = vueOptions;
      if (mixins) {
        mixins.forEach((mixin) => findHooks(mixin, hooks2));
      }
      if (extendsOptions) {
        findHooks(extendsOptions, hooks2);
      }
    }
  }
  return hooks2;
}
function initHook(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function(args) {
      return this.$vm && this.$vm.$callHook(hook, args);
    };
  }
}
const EXCLUDE_HOOKS = [ON_READY];
function initHooks(mpOptions, hooks2, excludes = EXCLUDE_HOOKS) {
  hooks2.forEach((hook) => initHook(mpOptions, hook, excludes));
}
function initUnknownHooks(mpOptions, vueOptions, excludes = EXCLUDE_HOOKS) {
  findHooks(vueOptions).forEach((hook) => initHook(mpOptions, hook, excludes));
}
function initRuntimeHooks(mpOptions, runtimeHooks) {
  if (!runtimeHooks) {
    return;
  }
  const hooks2 = Object.keys(MINI_PROGRAM_PAGE_RUNTIME_HOOKS);
  hooks2.forEach((hook) => {
    if (runtimeHooks & MINI_PROGRAM_PAGE_RUNTIME_HOOKS[hook]) {
      initHook(mpOptions, hook, []);
    }
  });
}
const findMixinRuntimeHooks = /* @__PURE__ */ once(() => {
  const runtimeHooks = [];
  const app = isFunction$1(getApp) && getApp({ allowDefault: true });
  if (app && app.$vm && app.$vm.$) {
    const mixins = app.$vm.$.appContext.mixins;
    if (isArray$1(mixins)) {
      const hooks2 = Object.keys(MINI_PROGRAM_PAGE_RUNTIME_HOOKS);
      mixins.forEach((mixin) => {
        hooks2.forEach((hook) => {
          if (hasOwn(mixin, hook) && !runtimeHooks.includes(hook)) {
            runtimeHooks.push(hook);
          }
        });
      });
    }
  }
  return runtimeHooks;
});
function initMixinRuntimeHooks(mpOptions) {
  initHooks(mpOptions, findMixinRuntimeHooks());
}
const HOOKS = [
  ON_SHOW,
  ON_HIDE,
  ON_ERROR,
  ON_THEME_CHANGE,
  ON_PAGE_NOT_FOUND,
  ON_UNHANDLE_REJECTION
];
function parseApp(instance, parseAppOptions) {
  const internalInstance = instance.$;
  const appOptions = {
    globalData: instance.$options && instance.$options.globalData || {},
    $vm: instance,
    onLaunch(options) {
      this.$vm = instance;
      const ctx = internalInstance.ctx;
      if (this.$vm && ctx.$scope) {
        return;
      }
      initBaseInstance(internalInstance, {
        mpType: "app",
        mpInstance: this,
        slots: []
      });
      ctx.globalData = this.globalData;
      instance.$callHook(ON_LAUNCH, options);
    }
  };
  initLocale(instance);
  const vueOptions = instance.$.type;
  initHooks(appOptions, HOOKS);
  initUnknownHooks(appOptions, vueOptions);
  {
    const methods = vueOptions.methods;
    methods && extend$1(appOptions, methods);
  }
  if (parseAppOptions) {
    parseAppOptions.parse(appOptions);
  }
  return appOptions;
}
function initCreateApp(parseAppOptions) {
  return function createApp2(vm) {
    return App(parseApp(vm, parseAppOptions));
  };
}
function initCreateSubpackageApp(parseAppOptions) {
  return function createApp2(vm) {
    const appOptions = parseApp(vm, parseAppOptions);
    const app = isFunction$1(getApp) && getApp({
      allowDefault: true
    });
    if (!app)
      return;
    vm.$.ctx.$scope = app;
    const globalData = app.globalData;
    if (globalData) {
      Object.keys(appOptions.globalData).forEach((name) => {
        if (!hasOwn(globalData, name)) {
          globalData[name] = appOptions.globalData[name];
        }
      });
    }
    Object.keys(appOptions).forEach((name) => {
      if (!hasOwn(app, name)) {
        app[name] = appOptions[name];
      }
    });
    initAppLifecycle(appOptions, vm);
  };
}
function initAppLifecycle(appOptions, vm) {
  if (isFunction$1(appOptions.onLaunch)) {
    const args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch(args);
  }
  if (isFunction$1(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow((args) => {
      vm.$callHook("onShow", args);
    });
  }
  if (isFunction$1(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide((args) => {
      vm.$callHook("onHide", args);
    });
  }
}
function initLocale(appVm) {
  const locale2 = ref(normalizeLocale$1(wx.getSystemInfoSync().language) || LOCALE_EN);
  Object.defineProperty(appVm, "$locale", {
    get() {
      return locale2.value;
    },
    set(v) {
      locale2.value = v;
    }
  });
}
function initVueIds(vueIds, mpInstance) {
  if (!vueIds) {
    return;
  }
  const ids = vueIds.split(",");
  const len = ids.length;
  if (len === 1) {
    mpInstance._$vueId = ids[0];
  } else if (len === 2) {
    mpInstance._$vueId = ids[0];
    mpInstance._$vuePid = ids[1];
  }
}
const EXTRAS = ["externalClasses"];
function initExtraOptions(miniProgramComponentOptions, vueOptions) {
  EXTRAS.forEach((name) => {
    if (hasOwn(vueOptions, name)) {
      miniProgramComponentOptions[name] = vueOptions[name];
    }
  });
}
const WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach((name) => {
      const matches = name.match(WORKLET_RE);
      if (matches) {
        const workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
function initWxsCallMethods(methods, wxsCallMethods) {
  if (!isArray$1(wxsCallMethods)) {
    return;
  }
  wxsCallMethods.forEach((callMethod) => {
    methods[callMethod] = function(args) {
      return this.$vm[callMethod](args);
    };
  });
}
function selectAllComponents(mpInstance, selector, $refs) {
  const components = mpInstance.selectAllComponents(selector);
  components.forEach((component) => {
    const ref2 = component.properties.uR;
    $refs[ref2] = component.$vm || component;
  });
}
function initRefs(instance, mpInstance) {
  Object.defineProperty(instance, "refs", {
    get() {
      const $refs = {};
      selectAllComponents(mpInstance, ".r", $refs);
      const forComponents = mpInstance.selectAllComponents(".r-i-f");
      forComponents.forEach((component) => {
        const ref2 = component.properties.uR;
        if (!ref2) {
          return;
        }
        if (!$refs[ref2]) {
          $refs[ref2] = [];
        }
        $refs[ref2].push(component.$vm || component);
      });
      return $refs;
    }
  });
}
function findVmByVueId(instance, vuePid) {
  const $children = instance.$children;
  for (let i = $children.length - 1; i >= 0; i--) {
    const childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  let parentVm;
  for (let i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
const builtInProps = [
  // 百度小程序,快手小程序自定义组件不支持绑定动态事件，动态dataset，故通过props传递事件信息
  // event-opts
  "eO",
  // 组件 ref
  "uR",
  // 组件 ref-in-for
  "uRIF",
  // 组件 id
  "uI",
  // 组件类型 m: 小程序组件
  "uT",
  // 组件 props
  "uP",
  // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
  "uS"
];
function initDefaultProps(options, isBehavior = false) {
  const properties = {};
  if (!isBehavior) {
    builtInProps.forEach((name) => {
      properties[name] = {
        type: null,
        value: ""
      };
    });
    properties.uS = {
      type: null,
      value: [],
      observer: function(newVal) {
        const $slots = /* @__PURE__ */ Object.create(null);
        newVal && newVal.forEach((slotName) => {
          $slots[slotName] = true;
        });
        this.setData({
          $slots
        });
      }
    };
  }
  if (options.behaviors) {
    if (options.behaviors.includes("wx://form-field")) {
      properties.name = {
        type: null,
        value: ""
      };
      properties.value = {
        type: null,
        value: ""
      };
    }
  }
  return properties;
}
function initVirtualHostProps(options) {
  const properties = {};
  {
    if (options && options.virtualHost) {
      properties.virtualHostStyle = {
        type: null,
        value: ""
      };
      properties.virtualHostClass = {
        type: null,
        value: ""
      };
    }
  }
  return properties;
}
function initProps(mpComponentOptions) {
  if (!mpComponentOptions.properties) {
    mpComponentOptions.properties = {};
  }
  extend$1(mpComponentOptions.properties, initDefaultProps(mpComponentOptions), initVirtualHostProps(mpComponentOptions.options));
}
const PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function parsePropType(type, defaultValue) {
  if (isArray$1(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function normalizePropType(type, defaultValue) {
  const res = parsePropType(type);
  return PROP_TYPES.indexOf(res) !== -1 ? res : null;
}
function initPageProps({ properties }, rawProps) {
  if (isArray$1(rawProps)) {
    rawProps.forEach((key) => {
      properties[key] = {
        type: String,
        value: ""
      };
    });
  } else if (isPlainObject(rawProps)) {
    Object.keys(rawProps).forEach((key) => {
      const opts = rawProps[key];
      if (isPlainObject(opts)) {
        let value = opts.default;
        if (isFunction$1(value)) {
          value = value();
        }
        const type = opts.type;
        opts.type = normalizePropType(type);
        properties[key] = {
          type: opts.type,
          value
        };
      } else {
        properties[key] = {
          type: normalizePropType(opts)
        };
      }
    });
  }
}
function findPropsData(properties, isPage2) {
  return (isPage2 ? findPagePropsData(properties) : findComponentPropsData(properties.uP)) || {};
}
function findPagePropsData(properties) {
  const propsData = {};
  if (isPlainObject(properties)) {
    Object.keys(properties).forEach((name) => {
      if (builtInProps.indexOf(name) === -1) {
        propsData[name] = properties[name];
      }
    });
  }
  return propsData;
}
function initFormField(vm) {
  const vueOptions = vm.$options;
  if (isArray$1(vueOptions.behaviors) && vueOptions.behaviors.includes("uni://form-field")) {
    vm.$watch("modelValue", () => {
      vm.$scope && vm.$scope.setData({
        name: vm.name,
        value: vm.modelValue
      });
    }, {
      immediate: true
    });
  }
}
function initData(_) {
  return {};
}
function initPropsObserver(componentOptions) {
  const observe = function observe2() {
    const up = this.properties.uP;
    if (!up) {
      return;
    }
    if (this.$vm) {
      updateComponentProps(up, this.$vm.$);
    } else if (this.properties.uT === "m") {
      updateMiniProgramComponentProperties(up, this);
    }
  };
  {
    if (!componentOptions.observers) {
      componentOptions.observers = {};
    }
    componentOptions.observers.uP = observe;
  }
}
function updateMiniProgramComponentProperties(up, mpInstance) {
  const prevProps = mpInstance.properties;
  const nextProps = findComponentPropsData(up) || {};
  if (hasPropsChanged(prevProps, nextProps, false)) {
    mpInstance.setData(nextProps);
  }
}
function updateComponentProps(up, instance) {
  const prevProps = toRaw(instance.props);
  const nextProps = findComponentPropsData(up) || {};
  if (hasPropsChanged(prevProps, nextProps)) {
    updateProps(instance, nextProps, prevProps, false);
    if (hasQueueJob(instance.update)) {
      invalidateJob(instance.update);
    }
    {
      instance.update();
    }
  }
}
function hasPropsChanged(prevProps, nextProps, checkLen = true) {
  const nextKeys = Object.keys(nextProps);
  if (checkLen && nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key]) {
      return true;
    }
  }
  return false;
}
function initBehaviors(vueOptions) {
  const vueBehaviors = vueOptions.behaviors;
  let vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  const behaviors = [];
  if (isArray$1(vueBehaviors)) {
    vueBehaviors.forEach((behavior) => {
      behaviors.push(behavior.replace("uni://", "wx://"));
      if (behavior === "uni://form-field") {
        if (isArray$1(vueProps)) {
          vueProps.push("name");
          vueProps.push("modelValue");
        } else {
          vueProps.name = {
            type: String,
            default: ""
          };
          vueProps.modelValue = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ""
          };
        }
      }
    });
  }
  return behaviors;
}
function applyOptions(componentOptions, vueOptions) {
  componentOptions.data = initData();
  componentOptions.behaviors = initBehaviors(vueOptions);
}
function parseComponent(vueOptions, { parse, mocks: mocks2, isPage: isPage2, initRelation: initRelation2, handleLink: handleLink2, initLifetimes: initLifetimes2 }) {
  vueOptions = vueOptions.default || vueOptions;
  const options = {
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true,
    pureDataPattern: /^uP$/
  };
  if (isArray$1(vueOptions.mixins)) {
    vueOptions.mixins.forEach((item) => {
      if (isObject$1(item.options)) {
        extend$1(options, item.options);
      }
    });
  }
  if (vueOptions.options) {
    extend$1(options, vueOptions.options);
  }
  const mpComponentOptions = {
    options,
    lifetimes: initLifetimes2({ mocks: mocks2, isPage: isPage2, initRelation: initRelation2, vueOptions }),
    pageLifetimes: {
      show() {
        this.$vm && this.$vm.$callHook("onPageShow");
      },
      hide() {
        this.$vm && this.$vm.$callHook("onPageHide");
      },
      resize(size2) {
        this.$vm && this.$vm.$callHook("onPageResize", size2);
      }
    },
    methods: {
      __l: handleLink2
    }
  };
  {
    applyOptions(mpComponentOptions, vueOptions);
  }
  initProps(mpComponentOptions);
  initPropsObserver(mpComponentOptions);
  initExtraOptions(mpComponentOptions, vueOptions);
  initWxsCallMethods(mpComponentOptions.methods, vueOptions.wxsCallMethods);
  {
    initWorkletMethods(mpComponentOptions.methods, vueOptions.methods);
  }
  if (parse) {
    parse(mpComponentOptions, { handleLink: handleLink2 });
  }
  return mpComponentOptions;
}
function initCreateComponent(parseOptions2) {
  return function createComponent2(vueComponentOptions) {
    return Component(parseComponent(vueComponentOptions, parseOptions2));
  };
}
let $createComponentFn;
let $destroyComponentFn;
function getAppVm() {
  return getApp().$vm;
}
function $createComponent(initialVNode, options) {
  if (!$createComponentFn) {
    $createComponentFn = getAppVm().$createComponent;
  }
  const proxy = $createComponentFn(initialVNode, options);
  return getExposeProxy(proxy.$) || proxy;
}
function $destroyComponent(instance) {
  if (!$destroyComponentFn) {
    $destroyComponentFn = getAppVm().$destroyComponent;
  }
  return $destroyComponentFn(instance);
}
function parsePage(vueOptions, parseOptions2) {
  const { parse, mocks: mocks2, isPage: isPage2, initRelation: initRelation2, handleLink: handleLink2, initLifetimes: initLifetimes2 } = parseOptions2;
  const miniProgramPageOptions = parseComponent(vueOptions, {
    mocks: mocks2,
    isPage: isPage2,
    initRelation: initRelation2,
    handleLink: handleLink2,
    initLifetimes: initLifetimes2
  });
  initPageProps(miniProgramPageOptions, (vueOptions.default || vueOptions).props);
  const methods = miniProgramPageOptions.methods;
  methods.onLoad = function(query) {
    this.options = query;
    this.$page = {
      fullPath: addLeadingSlash(this.route + stringifyQuery(query))
    };
    return this.$vm && this.$vm.$callHook(ON_LOAD, query);
  };
  initHooks(methods, PAGE_INIT_HOOKS);
  {
    initUnknownHooks(methods, vueOptions);
  }
  initRuntimeHooks(methods, vueOptions.__runtimeHooks);
  initMixinRuntimeHooks(methods);
  parse && parse(miniProgramPageOptions, { handleLink: handleLink2 });
  return miniProgramPageOptions;
}
function initCreatePage(parseOptions2) {
  return function createPage2(vuePageOptions) {
    return Component(parsePage(vuePageOptions, parseOptions2));
  };
}
function initCreatePluginApp(parseAppOptions) {
  return function createApp2(vm) {
    initAppLifecycle(parseApp(vm, parseAppOptions), vm);
  };
}
const MPPage = Page;
const MPComponent = Component;
function initTriggerEvent(mpInstance) {
  const oldTriggerEvent = mpInstance.triggerEvent;
  const newTriggerEvent = function(event, ...args) {
    return oldTriggerEvent.apply(mpInstance, [customizeEvent(event), ...args]);
  };
  try {
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initMiniProgramHook(name, options, isComponent) {
  const oldHook = options[name];
  if (!oldHook) {
    options[name] = function() {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function(...args) {
      initTriggerEvent(this);
      return oldHook.apply(this, args);
    };
  }
}
Page = function(options) {
  initMiniProgramHook(ON_LOAD, options);
  return MPPage(options);
};
Component = function(options) {
  initMiniProgramHook("created", options);
  const isVueComponent = options.properties && options.properties.uP;
  if (!isVueComponent) {
    initProps(options);
    initPropsObserver(options);
  }
  return MPComponent(options);
};
function initLifetimes({ mocks: mocks2, isPage: isPage2, initRelation: initRelation2, vueOptions }) {
  return {
    attached() {
      let properties = this.properties;
      initVueIds(properties.uI, this);
      const relationOptions = {
        vuePid: this._$vuePid
      };
      initRelation2(this, relationOptions);
      const mpInstance = this;
      const isMiniProgramPage = isPage2(mpInstance);
      let propsData = properties;
      this.$vm = $createComponent({
        type: vueOptions,
        props: findPropsData(propsData, isMiniProgramPage)
      }, {
        mpType: isMiniProgramPage ? "page" : "component",
        mpInstance,
        slots: properties.uS || {},
        parentComponent: relationOptions.parent && relationOptions.parent.$,
        onBeforeSetup(instance, options) {
          initRefs(instance, mpInstance);
          initMocks(instance, mpInstance, mocks2);
          initComponentInstance(instance, options);
        }
      });
      if (!isMiniProgramPage) {
        initFormField(this.$vm);
      }
    },
    ready() {
      if (this.$vm) {
        {
          this.$vm.$callHook("mounted");
          this.$vm.$callHook(ON_READY);
        }
      }
    },
    detached() {
      if (this.$vm) {
        pruneComponentPropsCache(this.$vm.$.uid);
        $destroyComponent(this.$vm);
      }
    }
  };
}
const mocks = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];
function isPage(mpInstance) {
  return !!mpInstance.route;
}
function initRelation(mpInstance, detail) {
  mpInstance.triggerEvent("__l", detail);
}
function handleLink(event) {
  const detail = event.detail || event.value;
  const vuePid = detail.vuePid;
  let parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  detail.parent = parentVm;
}
var parseOptions = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  handleLink,
  initLifetimes,
  initRelation,
  isPage,
  mocks
});
const createApp = initCreateApp();
const createPage = initCreatePage(parseOptions);
const createComponent = initCreateComponent(parseOptions);
const createPluginApp = initCreatePluginApp();
const createSubpackageApp = initCreateSubpackageApp();
{
  wx.createApp = global.createApp = createApp;
  wx.createPage = createPage;
  wx.createComponent = createComponent;
  wx.createPluginApp = global.createPluginApp = createPluginApp;
  wx.createSubpackageApp = global.createSubpackageApp = createSubpackageApp;
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var cnchar_minExports = {};
var cnchar_min = {
  get exports() {
    return cnchar_minExports;
  },
  set exports(v) {
    cnchar_minExports = v;
  }
};
(function(module2, exports2) {
  !function(n, e2) {
    module2.exports = e2();
  }(commonjsGlobal, function() {
    return function(n) {
      var e2 = {};
      function r(o2) {
        if (e2[o2])
          return e2[o2].exports;
        var t2 = e2[o2] = { i: o2, l: false, exports: {} };
        return n[o2].call(t2.exports, t2, t2.exports, r), t2.l = true, t2.exports;
      }
      return r.m = n, r.c = e2, r.d = function(n2, e3, o2) {
        r.o(n2, e3) || Object.defineProperty(n2, e3, { enumerable: true, get: o2 });
      }, r.r = function(n2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n2, "__esModule", { value: true });
      }, r.t = function(n2, e3) {
        if (1 & e3 && (n2 = r(n2)), 8 & e3)
          return n2;
        if (4 & e3 && "object" == typeof n2 && n2 && n2.__esModule)
          return n2;
        var o2 = /* @__PURE__ */ Object.create(null);
        if (r.r(o2), Object.defineProperty(o2, "default", { enumerable: true, value: n2 }), 2 & e3 && "string" != typeof n2)
          for (var t2 in n2)
            r.d(o2, t2, function(e4) {
              return n2[e4];
            }.bind(null, t2));
        return o2;
      }, r.n = function(n2) {
        var e3 = n2 && n2.__esModule ? function() {
          return n2.default;
        } : function() {
          return n2;
        };
        return r.d(e3, "a", e3), e3;
      }, r.o = function(n2, e3) {
        return Object.prototype.hasOwnProperty.call(n2, e3);
      }, r.p = "", r(r.s = 4);
    }([function(n) {
      n.exports = JSON.parse('{"ai":"0:艾9哎1哀1诶1唉9唉6埃1挨7挨6爱4砹4捱2皑2隘4嗌9嗳9嗳8嗳6嫒4矮3碍4暧4瑷4蔼3锿1噫9癌2霭3娭6","yi":"1:一1乙3义7义9亿4已3弋4刈4忆4艺4仡9以3仪2艾9议4亦4伊1圯2夷2屹4异4衣1钇3佚4医1呓4尾8役4抑4沂2矣3苡3译4诒2邑4佾4依8依6宜2峄4怡2怿4易4绎4诣4迤2饴2驿4咦2咿1奕4姨2弈4疫4羿4舣3荑7蚁3贻2轶4食9倚3悒4挹4益4眙2胰2谊4酏3埸4猗1痍2移2翊4翌4蛇7逸4铱1壹1揖1椅8椅6遗7嗌9意4溢4缢4肄4蛾8裔4颐2旖3漪1疑2瘗4蜴4毅4熠4镒4劓4噫9噫6殪4薏4嶷7翳4翼4臆4彝2癔4镱4黟1懿4祎1燚4昳9乂4","ding":"1:丁6仃1订4叮1玎1町6疔1盯1钉9钉6定4耵1顶3酊8酊6啶4铤9腚4鼎3碇4锭4奵3","zheng":"2:丁6正9正6争9争6证4征1怔9怔6诤9诤6郑4峥1拯3挣9挣6政9政6狰1症9症6钲1睁1铮9铮6筝1蒸1整3鲭6","qi":"1:七1丌2乞3亓2气4讫4企3屺3岂3汔4祁2芑3迄4齐7启3圻7岐2弃4杞3汽4沏1芪2亟9其7奇7妻9妻6歧2泣4祈2俟7契9柒1砌9荠7凄1栖6桤1耆2脐2起3颀2啐5崎2戚1淇2畦2绮3萁2萋1骐2骑2期1棋2欹1欺1琦2琪2祺2缉6葺4蛴2碛4嘁1旗2槭4漆1綦2綮8蜞2稽8蕲2器4憩4蹊6鳍2麒2碁2埼2祇2啟3棨3","nai":"1:乃3奶3艿8氖3佴9奈4哪8柰4耐4萘4鼐4","mie":"2:乜6灭4咩1蔑4篾4蠛4","nie":"2:乜9陧4捏1涅4聂4臬4啮4捻6嗫4镊4镍4颞4蹑4孽4蘖4","jiu":"2:九3久3旧4纠1臼4灸3玖3究1鸠1咎4疚4柩4赳1韭3桕4酒3阄1厩4救4啾1就4揪1湫6舅4僦4鹫4蹴5鬏1","le":"1:了5仂4乐9叻4肋6泐4勒9嘞6鳓4簕4玏4饹5","liao":"2:了8辽2尥4疗2钌9钌8料4聊2僚2寥2廖4撂4蓼8嘹2寮2撩7撩9撩8撩6潦7獠7缭2燎7燎9燎8镣4鹩2瞭9瞭8","er":"0:二4儿2尔3而2耳3佴9迩3洱3贰4饵3珥3铒9铒8鸸2鲕2","ren":"1:人2亻2刃4仁2壬2认4仞4任7任9纫4妊4忍3轫4韧4饪4荏3衽4葚9稔3","ru":"1:入4如2汝3乳3洳4茹2辱3铷2溽4缛4蓐4褥4儒2嚅2孺2濡2薷2襦2蠕2颥2","fan":"1:凡2反3犯4帆1泛4返3饭4矾2范4贩4钒2畈4烦2袢7梵4番6幡1樊2蕃6蕃7燔2繁7翻1藩1蹯2蘩2璠2","po":"1:叵3朴9朴6钋1陂6坡1泊6泼1迫9珀4破4钷3婆2笸3粕4颇1鄱2魄9皤2繁7","bo":"1:伯7孛7驳2帛2拨1泊7波1勃2柏7柏9玻1亳2剥6般6趵6钵1钹2铂2饽1啵5啵6脖2舶2菠1博2渤2跛3鹁2搏2鲅6箔2膊5膊7魄7播1蕃6踣2薄7薄9擘4檗4簸9簸8礴2卜5僰2","pa":"1:叭6扒7帕4怕4杷7爬2派6趴1耙7啪1琶2葩1筢2","ba":"1:八1巴1叭9叭6伯9吧6坝4岜1把8把9芭1拔2杷9爸4茇2疤1钯3捌1笆1粑1罢9耙9菝2跋2靶9靶8鲅9魃2霸4灞4扒6吧5罢5","jiong":"2:冂1炅8迥3扃1炯3窘3囧3","gei":"1:给8","xi":"1:习2夕1兮1戏9汐1西1吸1希1系9饩4昔1析1矽1穸1细4郄4洗8茜6郗1唏1奚1席2息1栖6浠1牺1玺3徙3悉1惜1欷1淅1烯1硒1菥1袭2觋2铣8阋4喜3晰1犀1稀1粞1翕1腊6舄4舾1葸3隙4媳2溪1皙1禊4裼6锡1僖1屣3熄1熙1蓰3蜥1嘻1嬉1膝1樨1歙6熹1禧3羲1螅1褶7隰2檄2蟋1蹊6醯1曦1鼷1晞1窸1潟4娭6囍3","ji":"1:辑2箕1几8几6己3及2计4讥1击1叽1记4饥1乩1伎4吉2圾1岌2机1汲2玑1级2纪9纪8肌1芨1齐9即2妓4忌4技4极2矶1系9芰4际4鸡1亟7佶2其6剂4奇6季4虮3咭1哜4急2挤3既4洎4济9济8笈2给8荠9迹4革7剞1唧1姬1屐1疾2积1笄1继4脊3觊4偈9基1寂4寄4悸4掎3祭9绩4嵇1戟3戢2棘2殛2犄1缉6赍1集2嫉2嵴2楫2畸1蒺2蓟4跻1麂3暨4跽4霁4鲚4畿1瘠2稷4稽6蕺2鲫4齑1冀4墼1激1髻4羁1藉7骥4籍2鱀4錤1漈4","kan":"1:凵3刊1坎3侃3看9看6砍3莰3龛1勘1堪1戡1槛8阚4瞰4磡4","dao":"1:刀1叨6忉1导3氘1岛3到4倒8倒9帱9捣3悼4焘9盗4祷3道4稻4蹈3纛4捯2","diao":"2:刁1叼1鸟8吊4钓4凋1调9掉4铞4铫9貂1碉1雕1鲷1屌3","li":"1:力4历4厉4礼3立4吏4丽7丽9利4励4呖4坜4李3沥4苈4里3例4戾4枥4疠4隶4俐4俚3俪4厘2栎9疬4荔4轹4郦4哩5哩6哩8娌3栗4梨2狸2猁4砺4砾4离2莅4莉4逦3骊2鬲9唳4犁2理3笠4粒4粝4蛎4傈4喱2痢4詈4跞9锂3雳4鹂2溧4漓2缡2蓠2蜊2嫠2璃2鲡2鲤3黎2澧3篥4篱2罹2藜2醴3黧2蠡7蠡8鳢3琍2栃4","pao":"1:刨7抛1咆2庖2泡9泡6狍2炮9炮7疱4袍2匏2脬1跑7跑8","bao":"1:勹1包1刨9报4孢1宝3抱4苞1饱3保3炮6胞1鸨3剥6豹4趵9堡8葆3煲1雹2鲍4龅1褓3暴9褒1薄7瀑9曝9爆4","bi":"1:匕3币4比3必4毕4闭4吡8妣3庇4芘9彼3泌9畀4哔4毖4秕3荜4贲9陛4俾3毙4狴4秘9笔3舭3荸2铋4婢4庳4敝4萆4弼4愎4筚4逼1滗4痹4睥9蓖4裨9跸4辟9鄙3弊4碧4箅4蔽4鼻2壁4嬖4篦4薜4避4濞4臂9髀4璧4襞4","can":"1:灿4参6残2蚕2惨3惭2掺9骖1孱9粲4餐1璨4黪3","shen":"2:什7申1伸1沈3身1参6呻1审3绅1肾4诜1哂3甚7甚9矧3神2胂4娠1砷1莘6谂3婶3深1渖3渗4葚9慎4椹9蜃4糁6燊1珅1屾1榊0","shi":"2:十2士4尸1什7氏9世4仕4史3失1市4矢3石7示4师1式4似9时2识7豕3事4使3侍4势4始3实2虱1视4试4诗1饰4驶3室4屎3峙9恃4拭4拾7施1是4柿4炻2狮1蚀2贳4适4食7埘2舐4莳7莳9轼4逝4铈4匙5弑4殖5湿1谥4释4嗜4筮4蓍1嘘6誓4酾6鲥2噬4鲺1螫9奭4","guang":"2:广8光1犷3咣1桄9桄6胱1逛4洸1","an":"0:厂6广6安1犴9岸4按4俺3案4桉1氨1胺9埯3庵1谙1铵3揞3暗4鹌1鞍1黯4垵3","zhang":"2:丈4仉1长8仗4帐4张9张6杖4胀4账4涨8涨9章1掌3鄣1障4嫜1嶂4幛4彰1漳1獐1樟1璋1瘴4蟑1","chang":"2:厂8长7伥1场7场8怅4肠2苌2昌1畅4尝2昶3倘7倡9倡6鬯4偿2唱4娼1常2徜2惝8猖1菖1阊1敞3嫦2裳7氅3鲳1","cha":"2:叉6叉7叉9叉8汊4岔4杈9杈6刹9衩8衩9诧4咤9姹4差9差6查7茬2茶2喳6插1搽2猹7馇1楂7槎7察2碴7碴6锸1嚓6檫2镲3査2剎4","ci":"1:次4此3伺9词2刺9刺6兹7呲1差6祠2茈7茨2瓷2疵1赐4慈2辞2磁2雌2鹚2糍2","si":"1:厶1巳4丝1司1四4寺4死3汜4伺9似9兕4姒4祀4私1厕5咝1泗4饲4驷4俟9思6食9鸶1笥4耜4斯1缌1蛳1嗣4肆4厮1锶1嘶1撕1澌1偲6","you":"1:又4尢7友3尤2右4幼4由2优1有8有9佑4卣3忧1攸1犹2邮2酉3侑4呦1油2囿4宥4幽1柚7柚9疣2诱4莜2莠3莸2铀2悠1蚰2蚴4铕3游2釉4鱿2猷2牖3蝣2蝤7繇7黝3鼬4祐4","mei":"1:每3没7妹4枚2玫2昧4眉2美3袂4浼3莓2梅2谜9媒2媚4寐4嵋2湄2猸2楣2煤2酶2镁3镅2魅4鹛2霉2糜7","wan":"1:万9丸2纨2芄2完2宛3玩2弯1剜1挽3晚3莞8顽2婉3惋3烷2绾3脘3菀8湾1琬3皖3腕4畹3碗3蔓9蜿1豌1","mo":"1:万8无7末4没9抹9抹8殁4沫4茉4陌9冒9脉9秣4莫9袜9谟2嫫2寞4摸1漠4蓦4貊4馍2摹2模7膜2麽2嘿9墨4摩7瘼4镆4磨7磨9默4嬷2貘4蘑2魔2耱4","san":"1:三1伞3叁1参6散9散8毵1糁8馓3","shang":"2:上9上8伤1汤6尚4垧3殇1晌3商1绱4觞1赏3墒1熵1裳5","ge":"1:个9个8戈1仡6各9各8合8圪1纥6疙1咯6虼4阁2革7哥1哿3格7格6胳7胳6鬲7盖8硌9舸3袼1铬4鸽1割1搁7搁6葛7葛8蛤7隔2嗝2塥2歌1搿2膈2镉2骼2饹6","ya":"1:丫1牙2疋3轧9亚4伢2压9压6厌6吖6讶4呀6岈2芽2迓4押1哑8哑6垭4娅4砑4鸦1桠1氩4琊2蚜2鸭1崖2涯2痖3揠4雅8雅6睚2衙2呀5","shuo":"3:妁4烁4说6朔4铄4硕4搠4蒴4槊4","tuo":"2:讬1乇1托1驮7佗7佗6妥3陀2坨2拓9拖1沱2驼2柁2柝4说6砣2鸵2唾4庹3脱1椭3跎2酡2箨4魄9橐2鼍2託1","me":"1:么0","ye":"1:也3业4叶9曳4爷2邪7页4冶3邺4夜4耶7耶6咽9拽9晔4烨4掖9掖6揶2液4谒4野3铘2椰1腋4噎6靥4","xiang":"2:乡1向4芗1享3详2降7响3巷9庠2相9相6项4饷3香1祥2厢1象4湘1缃1翔2葙1飨3像4想3鲞3橡4箱1蟓4襄1骧1镶1","chu":"2:亍4出1刍2处8处9初1助7怵4杵3绌4除2畜9础3储3厨2楮3滁2锄2搐4楚3蜍2褚8触4雏2樗1憷4橱2黜4躇2蹰2矗4俶9岀1","yu":"1:于2与7与9与8予7予8肀4玉4驭4伛3吁9吁6宇3屿3纡1羽3聿4芋4迂1余2妤2妪3欤2汩9谷9饫4於6盂2育9臾2郁4雨9雨8鱼2俞2俣3昱4狱4禹3禺7禺9竽2舁2语9语8圄3娱2峪4浴4狳2谀2钰4预4馀2圉3域4尉9庾3欲4淤1渔2菀9菸1萸2谕4阈4隅2雩2喁7喻4寓4嵛2御4愉2揄2渝2粥9腴2裕4逾2遇4鹆4愈4愚2榆2煜4瑜2瘀1瘐3蓣4虞2觎2誉4毓4窬2舆2蔚9蜮4熨9窳3蝓2豫4龉3燠4鹬4鬻4彧4畬7瑀3玙2堉4","kui":"2:亏1归9岿1奎2悝1傀3匮4盔1逵2隗7馗2喟4喹2愦4愧4揆2溃4葵2蒉4馈4暌2窥1跬3魁2睽2篑4聩4蝰2夔2","wang":"1:亡7尢6王7王9妄4网3忘4汪1往3旺4枉3罔3惘3望4辋3魍3","wu":"1:亡7兀9兀6乌9乌6五3勿4午3无7毋2务4戊4阢4仵3伍3圬1污1邬1吴2吾2呜1坞4妩3庑3忤3怃3杌4芜2芴9迕3巫1於6武3物4侮3屋1诬1误4钨1唔2恶9恶6悟4捂3梧2浯2晤4焐4牾3婺4痦4骛4蜈2雾4鹉3寤4舞3鹜4鋈4鼯2鹀2","shao":"2:勺2少3芍7劭4杓7邵4绍4苕7哨4捎9捎6梢1烧1稍9稍6筲1艄1蛸6韶2潲4鞘6","qian":"2:千1欠9欠5仟1阡1扦1纤9芊1迁1佥1岍1芡4浅8肷3钎1前2牵1茜9荨7钤2倩9悭1虔2钱2钳2铅6乾2堑4掮2嵌4椠4犍7谦1愆1慊9签1遣3骞1搴1歉4箝2潜2谴3缱3褰1黔2","wei":"1:卫4囗2为7为9韦2未4伟3伪3危1圩7位4围2尾8帏2沩2纬3苇3违2闱2味4委8委6炜8玮3威1洧3畏4胃4娓3桅2涠2诿3軎4偎1唯2尉9帷2惟2维2萎3谓4逶1隈1隗8喂4崴6嵬2渭4猥3猬4葳1遗9微1煨1痿3艉3韪3潍2蔚9鲔3慰4薇1魏4巍1韡3暐3","kou":"1:口3叩4扣4抠1芤1眍1寇4筘4蔻4","tu":"1:土3凸1吐9吐8秃1兔4图2钍3突1徒2涂2荼7途2堍4屠2菟7菟9酴2","da":"1:大9打7打8达2妲2怛2沓7哒1耷1惮7笪2搭1答7答6嗒6瘩7褡1靼2鞑2疸5瘩5跶2","dai":"1:大9歹3代4呆1呔6岱4甙4绐4迨4骀9带4待9待6怠4殆4玳4贷4埭4袋4逮9逮8傣3戴4黛4","nü":"1:女3钕3恧4衄4","zi":"1:子9子8仔8仔6字4自4吱6姊3孜1甾6兹6咨1姿1秭3籽3耔3茈8恣4笫3赀1资1梓3淄1渍4眦4缁1谘1孳1嵫1滋1粢1紫3辎1滓3觜6訾8訾6趑1锱1龇1髭1鲻1孖6嗞1","jie":"2:孑2介4节7节6讦2价5价9阶1劫2戒4疖1芥9姐3届4杰2诘2拮2洁2界4疥4皆1结7结6诫4借4家5桀2桔7蚧4偈7婕2捷2接7接6秸1喈1嗟1揭1街1颉2楷6睫2解9解8骱4截2碣2竭2鲒2羯2藉9劼2毑3堺4","jue":"2:孓2决2诀2抉2角7珏2绝2觉7倔7倔9崛2掘2桷2脚7觖2厥2阙7劂2谲2噘1撅1獗2蕨2噱7橛2爵2镢2蹶2嚼7矍2鳜7爝2攫2","cun":"1:寸4存2忖3村1皴1蹲7邨1","xiao":"2:小3孝4肖9肖6枭1削6哓1枵1骁1哮4宵1效4晓3校9消1笑4绡1逍1啸4崤2淆2萧1硝1销1筱3蛸6潇1箫1霄1魈1嚣6咲4鸮1","chuan":"3:巛1川1传7舛3串9氚1钏4穿1舡2船2喘3遄2椽2","gong":"1:工1廾3弓1公1功1共9共8共6巩3红6攻1汞3贡4供9供6肱1宫1拱3恭1珙3蚣1躬1龚1觥1赣9斤1","jin":"1:巾1仅9仅8今1钅1尽9尽8劲9妗4近4进4卺3金1津1矜6荩4衿1晋4浸4烬4紧3赆4堇3筋1缙4禁9禁6谨3锦3靳4廑8馑3槿3瑾3觐4噤4襟1浕4琎1","gan":"1:干9干6甘1奸6旰4杆8杆6肝1坩1泔1矸1秆3绀4苷1柑1竿1疳1赶3酐1敢3淦4尴1感8澉3橄3擀3赣9","nüe":"2:疟9虐4","yao":"1:幺1夭6爻2吆1尧2约6妖1侥7杳3疟9肴2咬3姚2荛7药4要9要6轺2钥9珧2窈3舀3陶7窑2铫7崾3谣2徭2摇2腰1遥2瑶2鹞4徼6邀1繇7曜4鳐2耀4垚2","cai":"1:才2材2财2采9采8彩3猜1菜4裁2睬3蔡4踩3採3偲6","fa":"1:乏2发6发9伐2法3垡2珐4罚2阀2砝3筏2","fei":"1:馡1飞1发9妃1吠4芾9废4怫9沸4狒4肥2肺4非1费4匪3诽3啡1悱3淝2绯1菲8菲6扉1斐3腓2痱4榧3翡3蜚8蜚6镄4篚3霏1鲱1騑1","ma":"1:马3吗7吗8妈1犸3杩4玛3抹6码3蚂9蚂8蚂6骂4唛4麻7麻6摩6蟆2吗5嘛0孖6","bu":"1:不4卟3布4步4补3怖4钚4哺3埔9捕3逋1部4钸1埠4晡1堡8瓿4簿4醭2卜8咘4埗4佈4","gai":"1:丐4改3芥9该1陔1垓1钙4赅1盖9溉4戤4概4","chou":"2:丑3仇7抽1俦2帱7臭9惆2绸2畴2愁2稠2筹2酬2瞅3踌2瘳1雠2","zhuan":"3:专1传9沌9转9转8砖1啭4赚9撰4篆4颛1馔4","zhong":"2:中6中9仲4众4忪6忠1终1肿3盅1种9种8重9钟1冢3舯1衷1锺1踵3螽1塚3","feng":"1:丰1凤4风6风9风8冯7讽3沣1奉4枫1封1疯1砜1俸4峰1逢2唪3烽1葑9葑6锋1缝7缝9蜂1酆1峯1","dan":"1:丹1旦4石9但4单6担9担6诞4眈1胆3疸8耽1郸1啖4弹9惮9掸8淡4聃1萏4蛋4殚1氮4赕3瘅9瘅6箪1儋9儋6澹9疍4","shan":"2:山1讪4闪3汕4删1杉6芟1单9姗1疝4苫9苫6衫1钐9钐6陕3栅6珊1舢1剡9扇9扇6掸9掺8掺6善4禅9跚1骟4煽1鄯4潸1缮4嬗4擅4膳4膻1赡4蟮4鳝4","zhi":"2:之1支1止3氏6卮1只8只6汁1执2旨3至4芝1吱6址3志4忮4纸3芷3识9豸4侄2制4帙4帜4枝1治4炙4直2知1祉3织9织6肢1质4郅4咫3峙9指3枳3栀1栉4祗1胝1轵3陟4值2挚4桎4秩4脂1致4贽4轾4埴2掷4痔4窒4职2趾3鸷4彘4智4植2殖7滞4痣4絷2蛭4跖2骘4黹3稚4置4酯3雉4摭2蜘1徵3膣4觯4踬4踯2製4","shu":"2:书1殳1术9戍4抒1束4纾1叔1枢1沭4述4姝1树4竖4倏1恕4殊1秫2荼6孰2庶9梳1淑1菽1属8暑3疏1舒1赎2黍3摅1数9数8毹1署3腧4输1鼠3塾2墅4漱4蜀3澍4熟7蔬1薯3曙3","yun":"1:云2允3匀2孕4员7员9狁3纭2芸7芸9运4昀2郓4恽4郧2陨3晕9晕6耘2殒3酝4愠4氲1筠7韫4韵4熨9蕴4赟1鋆2贇1","xia":"2:下4吓9匣2侠2呷6狎2峡2柙2狭2虾6夏4假7唬9硖2厦9葭7遐2暇2瑕2辖2瞎1罅4霞2黠2","he":"1:禾2合7吓9纥7何7何9诃1劾2呵6和7和9河2曷2贺4阂2害7核7盍2荷7荷9涸2盒2菏2喝6喝9颌2鹄9嗬1貉7阖2褐4赫4鹤4翮2壑4龢2饸2","hu":"1:互4户4乎1冱4戏6虍1囫2护4沪4芴6呼1和7岵4弧2忽1怙4戽4狐2虎9虎8浒8烀1祜4胡2轷1壶2核7笏4唬8唿1惚1扈4斛2瓠4湖2猢2琥3葫2雇9鹄7煳2瑚2滹1鹕2鹘7槲2糊7糊9糊6蝴2醐2觳2鹱4鄠4","jing":"1:井3阱3刭3劲9京1净4弪4径9径6泾1经9经6肼3茎1迳4胫4颈8荆1痉4竞4婧4惊1旌1竟4菁1敬4景3晶1腈1靓9睛1粳1靖4儆3兢1境4獍4精1静4憬3镜4鲸1警3璟3","kang":"1:亢4伉4扛7抗4闶4炕9钪4康1慷1糠1","ze":"1:仄4则2侧9咋7择7昃4泽2责7迮2啧2帻2笮7舴2箦2赜2","pu":"1:仆7仆6攴1攵1扑1朴8匍2圃3埔8浦3莆2脯7菩2堡9普3葡2铺9铺6溥3蒲2谱3噗1暴9氆3璞2濮2镤2镨3瀑9曝9蹼3","qiu":"2:仇7丘1囚2犰2求2虬2邱1龟6泅2俅2秋1酋2逑2球2蚯1赇2巯2湫6遒2楸1裘2蝤7糗3鼽2鳅1萩1","reng":"1:仍2扔1艿9","cong":"1:从2丛2匆1囱1苁1枞6淙2琮2葱1骢1璁1聪1","lun":"1:仑2伦2论7论9囵2抡7抡6沦2纶7轮2","cang":"1:仓1伧6沧1苍1舱1臧7藏7","yuan":"2:元2员7园2沅2芫7远3苑4鸢1垣2怨4爰2院4冤1原2圆2垸4眢1袁2鸳1渊1媛7媛9掾4援2缘7缘9鼋2塬2源2猿2瑗4愿4箢1辕2圜7橼2螈2贠2","liu":"2:六9刘2陆9柳3浏2流2留2琉2绺3硫2锍3旒2溜9溜6碌9遛7遛9馏7馏9骝2榴2熘1瘤2镏7镏9鹨4鎏2","lu":"1:六9卢2卤3庐2芦2陆9垆2录4泸2炉2虏3栌2胪2轳0赂4辂4鸬2掳3渌4绿9舻2逯4颅2鹿4禄4鲁3碌9路4鲈2漉4蓼9噜1戮4撸1辘4橹3氇0潞4璐4簏4镥3鹭4麓4露9勠4蕗4甪4","na":"1:内9那9那6呐9纳4肭4南6哪9哪8娜9衲4钠4拿2捺4镎2","nei":"1:内9那9哪8馁3","gang":"1:冈1刚1扛6岗9岗8岗6杠9杠6纲1肛1缸1钢9钢6罡1港3筻4戆9","rong":"1:冗3戎2肜2狨2绒2茸2荣2容2嵘2溶2蓉2榕2熔2蝾2融2镕2","xiong":"2:凶1兄1匈1芎1汹1胸1雄2熊2","fen":"1:分9分6份4吩1坟2汾2纷1芬1奋4忿4氛1玢6粉3偾4酚1愤4棼2焚2粪4鲼4鼢2瀵4棻1","qie":"2:切9切6且8伽7妾4怯4茄7砌9窃4挈4惬4慊9箧4锲4趄9","juan":"2:卷9卷8倦4娟1捐1桊4涓1狷4绢4隽9圈9圈6眷4鄄4鹃1锩3镌1蠲1劵4","quan":"2:劝4犬3全2权2券9卷7诠2泉2畎3荃2悛1拳2辁2圈6痊2绻3铨2筌2蜷2醛2鬈2颧2圏1佺2","ban":"1:办4半4阪3伴9坂3扮4扳6拌9板3版3绊4钣3班1舨3般6颁1斑1搬1瘢1癍1瓣4","gou":"1:勾9勾6句6佝1沟1岣3构4狗3苟3诟4购4垢4枸8枸6钩1够4笱3缑1媾4彀4遘4觏4篝1鞲1","hua":"2:化9化6划7划9华7华9华6花1画4话4哗7哗6砉6骅2桦4铧2滑2猾2鲑7嬅4","pi":"1:匹3丕1庀3皮2仳3圮3吡8否8屁4批1纰7纰6芘7邳1陂7坯1披1枇2毗2砒1疲2蚍2被6郫2铍7铍6陴2啤2埤7埤9淠4琵2痞3脾2媲4睥9裨7辟9罴2蜱2僻4劈8劈6噼1擗3甓4貔2癖3譬4霹1鼙2","ou":"0:区6讴1呕3怄4沤9沤6欧1殴1瓯1鸥1偶3耦3藕3","qu":"1:区6去4曲8曲6劬2岖1苣8诎1驱1取3屈1朐2祛1鸲2娶3渠2蛆6躯1蛐1趋1阒4蕖2觑4趣9磲2璩2龋3瞿2蘧2麴1黢1氍2癯2衢2蠼2","sa":"1:卅4仨1洒3飒4脎4萨4撒8撒6","sheng":"2:升1圣4生1声1牲1省8胜4乘9晟4眚3渑7盛9笙1绳2剩4甥1嵊4昇1陞1","bian":"2:卞4弁4边1忭4汴4苄4贬3便9变4扁8砭1窆3匾3笾1缏9编1遍4煸1碥3褊8蝙1辨4辩4辫4鳊1鞭1釆4","pian":"2:片9片6便7扁6骈2胼2偏1谝3缏7骗4犏1褊7篇1翩1蹁2","a":"0:吖6阿6阿9阿8呵6啊6啊7啊8啊9腌6锕1嗄7呵5啊5","e":"0:厄3讹2扼3苊3阿6轭3俄2垩3哦7娥2婀1屙1峨2恶9恶8胺8莪2饿3谔3鄂3阏8愕3萼3遏9遏8锇2鹅2腭3蛾7锷3鹗3颚4额2噩3鳄3呃4噁2","ting":"1:厅1汀1廷2听1町6亭2庭2挺3烃1莛2梃9梃8停2铤8婷2艇3葶2蜓2霆2珽3","shuang":"3:双1泷6爽6爽8霜1孀1","tian":"2:天1田2佃7忝3恬2殄3畋2钿7掭4添1甜2腆3嗔7填2阗2舔3湉2畑2","tai":"1:太4台7台6呔8汰4邰2态4抬2肽4苔7苔6骀7炱2胎1钛4泰4酞4跆2鲐2薹2","fu":"1:呒3夫7夫6父9父8讣4付4弗2伏2凫2妇4负4佛7呋1孚7孚6扶2抚3甫3芙2芾7附4咐4府3怫7拂2拊3斧3服7服9绂2绋2肤1苻2阜4驸4俘2复4氟2祓2罘2茯2赴4郛2俯3浮2砩2莩7蚨2釜3副4匐2桴2涪2符2脯8艴2菔2袱2趺1辅3麸1傅4富4幅2稃1腑3赋4跗7跗6滏3福2缚4腹4蜉2辐2鲋4孵1腐3赙4幞2敷1蝠2蝮4鳆4黻2覆4馥4黼3頫3巿2復4","ao":"0:夭8凹1岙4坳4拗9拗8袄3敖2傲4奥4媪3嗷2廒2獒2遨2骜4熬7熬6澳4懊4翱2聱2螯2嚣7鏊4鳌2鏖2","kong":"1:孔3空6空9空8倥1恐3崆1控4箜1","yin":"1:尹3引3印4因1阴1吟2吲3圻7饮9饮8茚4垠2姻1洇1胤4茵1荫4音1殷6氤1狺2蚓3寅2淫2铟1银2隐3喑1堙1鄞2夤2窨9龈2瘾3霪2","che":"2:尺8车6彻4扯3坼4砗1掣4撤4澈4","chi":"2:尺8叱4斥4吃1弛2池2驰2赤4迟2饬4侈3坻7茌2齿3持2炽4哧1翅4耻3蚩1鸱1匙7敕4眵1笞1豉3啻4傺4嗤1媸1痴1墀2瘛4褫3踟2篪2螭1魑1呎3","tun":"1:屯7氽3吞1囤7饨0豚2褪9暾1臀2","zhun":"2:屯6肫1窀1准3谆1","hai":"1:亥4还7咳7咳6孩2骇4害9氦4海3胲3嗨6骸2醢3","huan":"2:幻4欢1奂4还7环2郇7宦4洹2唤4换4桓2浣4涣4眩9患4焕4萑2逭4痪4缓3豢4漶4锾2鲩4圜7寰2擐4缳2獾1鬟2鹮2嬛2","nian":"2:廿4年2念4拈1埝4捻8粘7辇3鲇2蔫1辗8撵3碾3鲶2黏2","kai":"1:开1忾4凯3剀3垲3恺3铠3慨3揩1蒈3锎1楷8锴3闿3","xin":"1:心1囟4忻1芯9芯6辛1昕1欣1信4莘6衅4锌1新1歆1薪1镡2馨1鑫1炘1","shou":"2:手3守3收1寿4受4狩4首3兽4售4授4绶4瘦4熟7艏3","zha":"2:扎7扎6乍4札2轧7吒1诈4咋9咋6闸2咤9柞4查6栅9炸7炸9眨3哳1痄4砟3蚱4铡2喋7喳6揸1渣1猹6楂6槎9榨4蜡9齄1","za":"1:扎6匝1杂2咂1咋8拶6砸2","wen":"1:文2刎3问4免9吻3汶9纹2闻2紊3蚊2阌2温1雯2瘟1稳3璺4榅1","men":"1:门2们0扪2汶7闷6闷9钔2焖4懑4","dou":"1:斗9斗8抖3豆4钭3陡3蚪3读9逗4都6兜1渎9痘4窦4蔸1篼1吋4","fang":"1:方1仿8访3邡1防2坊7坊6妨2彷8纺3芳1房2放4枋1肪2钫1舫3鲂2昉3","ri":"1:日4","yue":"2:曰1月4乐9刖4约6岳4哕8栎9说9钥9悦4钺4阅4跃4粤4越4樾4龠4瀹4玥4戉4","mu":"1:木4仫4母3目4牟9亩3沐4牡3坶4姆3拇3牧4苜4姥8毪2莫9钼4募4墓4幕4睦4慕4模7暮4穆4","mao":"1:毛2卯3矛2峁3泖3牦2茂4茅2茆7茆8冒9昴3贸4旄7旄9耄4铆3猫6猫7袤4帽4瑁4锚2瞀4貌4髦2蝥2懋4蟊2冇3","shui":"3:水3说9谁7税4睡4","huo":"2:火3和9或4货4活2钬3获4祸4惑4耠1锪1夥3劐1霍4豁7豁9豁6镬4嚯4攉1藿4蠖4伙3和7和5漷3","zhua":"3:爪8抓1挝6","pang":"1:乓1仿7彷7庞2胖9逄2旁7滂1膀7膀6磅7耪3螃2","pan":"1:爿2伴9判4扳6拌9拌6拚9泮4叛4盼4胖7畔4般7袢9盘2番6潘1磐2蹒2蟠2攀1襻4槃2","niu":"2:牛2妞1忸3扭3狃3纽3拗9钮3","wa":"1:瓦9瓦8佤3哇6娃2挖1洼1娲1袜9蛙1腽4哇5","jian":"2:见9戋1件4囝8奸6尖1坚1歼1间6间9建4拣3枧3浅6肩1艰1饯4俭3剑4柬3牮4茧3荐4贱4健4兼1捡3涧4监9监6笕3舰4减3剪3检3渐9渐6笺1菅1谏4趼3楗4毽4湔1溅9溅6犍6睑3硷3缄1腱4裥3践4锏9锏8搛1煎1简3缣1蒹1谫3鉴4键4僭4戬3槛9碱3箭4翦3踺4鲣1鹣1謇3蹇3鞯1","xian":"2:见9仙1先1纤6县9岘4氙1苋4闲2冼3弦2现4祆1线4贤2限4咸2宪4显3洗8涎2籼1险3娴2猃3莶1蚬3陷4掀1舷2衔2铣8馅4痫2筅3羡4鹇2嫌2献4腺4跣3跹1酰1锨1鲜8鲜6暹1藓3燹3霰4","bei":"1:贝4北3呗5孛9狈4邶4陂6卑1备4杯1背9背6钡4倍4悖4被9悲1惫4焙4辈4碑1碚4蓓4鹎1褙4臂5鞴4鐾4","ju":"1:矩3车6且6句9巨4讵4局2拒4苣9具4咀8居1拘1柜8沮9沮8炬4狙1苴6驹1举3枸8莒3钜4俱4倨4剧4桔7疽1惧4据9据6掬1菊2蛆6距4椐1犋4琚1趄6锔7锔6飓4榉3榘3裾1锯4雎1龃3窭4聚4屦4踞4橘2踽3遽4鞠1鞫1醵4焗2泃1","shuan":"3:闩1拴1栓1涮4","dui":"2:队4对4兑4怼4堆1敦9碓4憝4镦9","ping":"1:冯7平2乒1评2凭2坪2苹2俜1屏7枰2娉6瓶2萍2鲆2","bing":"1:丙3冰1并9并6兵1邴3秉3屏8屏6柄3炳3饼3病4绠8摒4禀3槟6昺3","dong":"1:东1冬1动4冻4侗9咚1岽1垌9峒9恫9栋4氡1洞4胨4胴4鸫1硐4董3懂3","zai":"1:仔8再4在4灾1甾6哉1宰3栽1载9载8崽3","ta":"1:沓5遢5遢9他1它1她1拓9沓9挞4闼4趿1铊1塔3嗒9塌1溻1榻4漯9踏9踏6獭3蹋4鳎3遝4","tong":"1:仝2同7同9佟2彤2侗7侗8垌7峒7恫6恸4统3茼2捅3桐2砼2通9通6桶3铜2痛4童2筒3嗵1酮2僮7潼2瞳2曈2樋1","ling":"1:姈2令7令9令8另4伶2灵2呤7呤9囹2岭3泠2苓2柃2玲2瓴2凌2铃2陵2棂2绫2羚2翎2聆2菱2蛉2领3棱7零2龄2鲮2酃2","lan":"1:兰2岚2拦2栏2烂4览3婪2揽3缆3阑2榄3滥4蓝2漤3罱3谰2澜2褴2懒3斓2篮2镧2","ran":"1:冉3苒3染3蚺2然2髯2燃2","ce":"1:册4侧9厕9恻4测4策4","xie":"2:写8写9叶7协2血3邪7些1泄4泻4绁4胁2卸4契9挟2屑4偕2斜2械4谐2亵4渫4谢4携2楔1歇1解9榍4榭4鲑7勰2撷2缬2蝎1鞋2廨4懈4獬4薤4邂4燮4瀣4蟹4躞4","jia":"2:加1甲3价9夹7夹6伽6佳1岬3茄6迦1郏2驾4架4枷1浃1珈1胛3荚2家6恝2痂1贾9贾8钾3假8假9戛2笳1袈1铗2葭6蛱2跏1颊2嫁4嘉1嘏8瘕3稼4镓1","mai":"1:劢4买3迈4麦4卖4脉9荬3埋7霾2","hui":"2:卉4汇4会9回2戏6灰1讳4炜6诙1咴1哕9恢1挥1洄2浍9绘4茴2荟4虺8虺6诲4恚4悔3晖1桧9烩4珲6贿4堕6彗4晦4秽4喙4惠4缋4蛔2辉1毁3睢6慧4蕙4麾1徽1隳1蟪4翚1","ka":"1:卡8佧3咔8咔6咖6咯8胩3喀1","qia":"2:卡8洽4掐1袷1葜1髂4恰4","gu":"1:古3估9估6汩8诂3谷8呱6咕1固4姑1孤1沽1股3苦8故4牯3轱1骨8骨6家6罟3贾8钴3顾4鸪1崮4梏4牿4菇1菰1蛄8蛄6蛊3觚1辜1酤1雇9鹄8毂8毂6痼4锢4鼓3嘏8箍1鹘7鲴4臌3瞽3堌4","tao":"1:叨6讨3洮2逃2套4桃2涛1弢1绦1陶7啕2掏1淘2焘6萄2滔1韬1鼗2饕1","jiao":"2:叫4艽1交1角8佼3侥8郊1姣1娇1峤9挢3浇1狡3绞3茭1觉9饺3骄1校9胶1轿4较4教9教6皎3矫7矫8脚8铰3搅3椒1湫8焦1窖4蛟1剿8敫3跤1僬1酵4鲛1噍4蕉6徼9徼8徼6缴8礁1鹪1醮4嚼7嚼9滘4漖4藠4","ke":"1:可8可9克4壳7刻4呵6坷8坷6岢3苛1咳7客4恪4柯1珂1科1轲1疴1课4钶1氪4蚵1骒4棵1渴3缂4颏1嗑4溘4稞1窠1锞4颗1瞌1磕1蝌1髁1","zhe":"2:折7折6这9者3柘4哲2浙4着5辄2蛰2蜇7蜇6褚8谪2锗3摺2蔗4遮1磔2赭3褶8辙2鹧4螫6喆2","she":"2:叶9厍4舌2设4佘2折7社4舍8舍9拾9射4涉4奢6猞1蛇7赊1赦4揲7畲1慑4摄4滠4歙9麝4畬6","hao":"1:号9号7好8好9昊4郝3浩4皋7耗4蚝2毫2皓4嗥2蒿1貉7豪2镐9嚆1薅1嚎2壕2濠2颢4灏4","tan":"1:叹4坍1坛2忐3坦3昙2贪1炭4袒3谈2郯2钽3弹7探4毯3覃7摊1滩1痰2锬2碳4谭2潭7瘫1澹7檀2倓2怹1","wai":"1:外4歪6歪8崴8","yang":"1:央1仰8扬2羊2阳2杨2炀7炀9佯2怏4泱1疡2养3徉2殃1洋2恙4样4氧3烊7烊9秧1鸯1痒3蛘2漾4鞅9鞅6旸2飏2垟2","ben":"1:夯9本3坌4奔9奔6苯3贲6畚3笨4锛1犇1","tou":"1:头5头7投2透4偷1骰2","nu":"1:奴2努3呶8孥2弩3驽2怒4胬3","ning":"1:宁7宁9佞4咛2拧7拧9拧8泞4狞2柠2聍2甯2凝2","zhu":"2:主9主8宁9术7伫4朱1竹2住4助9苎4侏1拄3杼4注4竺2诛1贮4邾1驻4柚7柱9柱8洙1炷4祝9茱1株1烛2珠1疰4诸1逐2庶9渚3猪1舳5著4蛀4铢1属8煮3筑4蛛1铸4瘃2褚8槠1潴1箸4翥4嘱3橥1麈3瞩3躅7註4","gui":"2:宄3归6圭1轨3妫1庋3龟6刽4刿4匦3柜9炅9炔9规1诡3癸3皈1贵4闺1鬼3桂4桧9硅1晷3瑰1跪4鲑6簋3鳜9珪1","ga":"1:尕3轧7夹6旮1钆2伽6尬4呷6咖6尜2嘎8嘎6噶2","kao":"1:尻1考3拷3栲3烤3铐4犒4靠4","ni":"1:尼7尼8伲9伲8你3拟3呢7坭2妮1怩2泥7泥9昵4逆4倪2匿4铌2旎3猊2溺9睨4腻4霓2鲵2嶷9","zuo":"2:左3佐3作9作6坐4阼4怍4昨2祚4胙4唑4座4做4笮7琢7嘬6撮8","qiao":"2:巧3乔2壳9侨2俏4峤7荞2诮4峭4悄8悄6桥2窍4硗1雀8雀6愀3翘7翘9跷1劁7劁6敲1谯7谯9锹1憔2撬4蕉7鞒2樵2橇1缲1鞘9瞧2硚2","shuai":"3:帅4甩3衰1率9摔1蟀4","hong":"1:弘2讧4红7宏2闳2泓2轰1哄9哄8哄6洪2荭2虹2訇1烘1鸿2蕻7蕻9薨1黉2翃2竑2鋐2","di":"1:氐8氐6地9低1弟4狄2诋3邸3坻8底8抵3的7的9籴2迪2帝4柢3娣4敌2涤2砥3荻2递4笛2第4羝1谛4堤1提6棣4睇4缔4蒂4觌2嘀7嘀6嫡2滴1碲4翟7骶3镝7镝6頔2菂4啲1","de":"1:地5底5的5得7得5锝2德2徳2嘚6","min":"1:民2皿3闵3岷2抿3泯3玟2苠2黾8珉2闽3悯3敏3缗2愍3鳘3旻2慜3旼2","pie":"2:氕1苤3撇8撇6瞥1","yong":"1:永3用4佣9佣6甬3咏3拥1泳3俑3勇3涌8痈1邕1庸1恿3喁7蛹3雍1墉1慵1踊3壅1镛1臃1鳙1饔1埇3","han":"1:汉4邗2汗7汗9犴6含7含9旱4罕3邯2函2顸1悍4捍4晗2涵2焊4焓2菡4蚶1喊3寒2酣1韩2感9颔4撖4憨1憾4撼4翰4鼾1瀚4","xuan":"2:玄2县7轩1券9泫4宣1炫4绚4选3痃2眩9铉4悬2旋7旋9谖1喧1揎1渲4萱1暄1楦4煊1漩2碹4儇1璇2镟4癣3瑄1玹2禤1烜3","gua":"2:瓜1刮1卦4呱8呱6诖4剐3挂4胍1栝6鸹1褂4寡3","dian":"2:电4佃9甸4阽9典3坫4店4垫4点8点5玷4钿9惦4掂1淀4奠4殿4滇1碘3踮3靛4颠1癜4簟4巅1癫1槙1","bai":"1:白2百3伯8呗9佰3败4陌8拜4柏8捭3掰1摆3稗4栢3","xue":"2:穴2学2削6泶2谑4雪3靴1踅2噱7薛1鳕3","rang":"1:让4嚷8嚷6壤3攘3禳2瓤2穰7穰8","xun":"1:训4讯4寻2巡2旬2汛4迅4驯4询2郇7勋1峋2徇4恂2洵2荀2荤6荨7逊4埙1殉4浚9巽4循2熏9熏6窨6鲟2潭7蕈4獯1薰1曛1醺1浔2珣2","mang":"1:邙1忙2芒2氓7盲2茫2莽3硭2漭3蟒3","qiong":"2:邛2穷2穹2茕2筇2琼2蛩2跫2銎1","kuang":"2:邝4匡1圹4夼3纩4况4旷4狂2矿4诓1哐1诳2贶4框4眶4筐1","niao":"2:鸟8尿9茑3袅3脲4溺9嬲3","nong":"1:农2弄9侬2哝2浓2脓2","long":"1:龙2弄9陇3咙2垄3垅3拢3泷7茏2栊2珑2胧2砻2笼7笼8聋2隆2癃2窿2","cheng":"2:丞2成2呈2承2枨2诚2城2柽1乘7埕2秤9秤6称6称9逞3骋3盛7蛏1铖2铛6惩2程2裎7裎8塍2酲2噌6撑1樘6澄7橙2瞠1珵2澂2","deng":"1:邓4灯1登1等3戥3凳4噔1嶝4澄9瞪4磴4镫4簦1蹬9蹬6","diu":"2:丢1铥1","gen":"1:亘4艮9艮8哏7茛4根1跟1","chan":"2:产3忏4单7觇1谄3婵2掺6谗2铲3阐3孱7搀1禅7蒇3馋2缠2蝉2廛2潺2骣3澶2冁3蟾2颤9羼4躔2產3瀍2浐3襜1","zhan":"2:蘸4占9占6斩3沾1战4栈4毡1展3旃1盏3站4崭3粘6绽4湛4搌3詹1辗8谵1瞻1颤9佔4霑1","ang":"0:仰7昂2肮6盎4","kuai":"2:会9块4快4侩4郐4哙4浍9狯4脍4筷4蒯3","chen":"2:伧5尘2臣2忱2沉2辰2陈2抻1衬4宸2称9郴1龀4晨2谌2琛1趁4嗔6榇4碜3谶4","chong":"2:充1冲9冲6虫2忡1宠3种7茺1重7涌6崇2舂1铳4憧1艟1翀1","guan":"2:关1观9观6串9纶6官1贯4冠9冠6矜6倌1莞8莞6惯4掼4涫4馆3棺1管3盥4鳏1灌4鹳4罐4","xing":"1:兴9兴6刑2行7邢2饧2形2杏4陉2姓4幸4性4型2星1省8荇4荥7悻4硎2惺1猩1腥1醒3擤3","hang":"1:夯6行7行9吭7沆4杭2炕6肮7巷9绗2桁7珩7航2颃2","jun":"1:军1君1均1龟6俊4郡4钧1峻4捃4浚9隽9骏4皲1菌9菌6竣4筠6麇6珺4埈4","dang":"1:凼4当6当9宕4砀4挡9挡8荡4党3档4菪4裆1铛6谠3氹4","lie":"2:列4劣4冽4咧5咧9洌4埒4烈4捩4猎4裂8裂9趔4躐4鬣4","chuang":"3:创9创6闯3床2怆4疮1窗1幢7","yan":"1:厌9延2闫2严2妍2芫7言2阽7兖3奄3岩2沿2炎2俨3咽9咽6埏2彦4恹1研7研9砚4衍3剡8唁4宴4晏4殷6烟1盐2胭1艳4铅7验4偃3厣3崦1掩3淹1焉1眼3谚4郾3阉1阎2阏6堰4湮1焰4焱4琰3筵2腌6蜒2雁4滟4罨3鄢1嫣1演3酽4谳4颜2餍4魇3燕9燕6赝4檐2鼹3龑3棪3","xu":"1:吁6圩6旭4许3序4盱1诩3叙4恤4洫4浒8砉6胥1须1徐2栩3畜9勖4绪4续4虚1酗4婿4溆4絮4煦4蓄4嘘6蓿0需1墟1糈3醑3顼1谞1欻6","ming":"1:名2命4明2鸣2茗2冥2铭2溟2酩3暝2瞑2螟2洺2","hou":"1:后4吼3侯7侯9厚4後4逅4候4喉2堠4猴2鲎4瘊2篌2糇2骺2垕4","lü":"1:吕3驴2侣3律4闾2捋8旅3虑4偻8率9稆3绿9铝3屡3氯4缕3榈2滤4膂3褛3履3","nan":"1:囝6囡1男2南7难7难9赧3喃2楠2腩3蝻3","tuan":"2:团2抟2彖4湍1疃3","zhen":"2:圳4贞1阵4诊3针1侦1枕3帧1浈1珍1胗8胗6轸3鸩4振9振9朕4桢1畛3疹3真1砧1祯1赈4斟1椹6溱6甄1缜3蓁1榛1稹3箴1镇4震4臻1","zhuang":"3:壮4妆1庄1状4奘8桩1装1僮9幢9撞4戆9","su":"1:夙4苏1诉4肃4俗2涑4素4速4宿9粟4谡4酥1嗉4塑4愫4溯4稣1僳4缩9蔌4觫4簌4窣1甦1","xiu":"2:休1朽3秀4岫4修1咻1庥1绣4羞1臭9袖4宿9宿8鸺1锈4嗅4溴4貅1馐1髹1琇4脩1","kua":"2:夸1侉3垮3挎4胯4跨4","sun":"1:孙1狲1荪1损3笋3隼3飧1榫3","zhai":"2:宅2侧6择7责9债4斋1柴9窄3砦4祭9寨4摘1翟7瘵4","sui":"2:岁4尿6虽1祟4绥2荽0谇4眭1隋7隋6随2遂7遂9睢6碎4粹9隧4濉1燧4穗4邃4髓3","zhou":"2:州1纣4舟1肘3诌1周1咒4妯2宙4帚3绉4昼4洲1祝9胄4荮4轴7轴9皱4调6酎4啁6舳9粥6碡0繇9骤4籀4","qing":"1:庆4苘3青1顷3亲9氢1轻1倩9倾1卿1请3圊1情2清1晴2氰2箐4綮9蜻1擎2檠2磬4鲭6罄4謦3黥2","quxu":"3:戌1","kuo":"2:扩4括4栝9蛞4阔4廓4","sao":"1:扫9扫8埽4嫂3搔1骚1瘙4缫1燥9臊4鳋1","zao":"1:早3灶4皂4枣3蚤3唣4造4凿2遭1噪4澡3燥9糟1藻3躁4","la":"1:旯2垃1拉7拉8拉6剌7剌9砬2啦6喇7喇8喇6腊9落9瘌4蜡9辣4癞9邋1啦5","piao":"2:朴7莩8殍3票9票6剽1嘌9嘌6嫖2漂9漂8漂6缥8缥6骠9飘1瓢2瞟3螵1","sha":"2:杀1杉6沙9沙6纱1刹6砂1莎6唼4啥2奢7挲6铩1厦9痧1傻3嗄9歃4煞9煞6裟1噎6鲨1霎4","cuan":"2:汆1窜4撺1篡4镩9镩6攒7蹿1爨4","tang":"1:汤9汤6帑3倘8唐2烫4堂2惝8淌3铴9铴6傥3棠2塘2搪2溏2瑭2耥3樘7羰1膛2趟9趟6躺3糖2螗2镗7镗6螳2醣2蹚1","pin":"1:牝4拚6贫2品3姘1拼1娉9嫔2榀3聘4频2颦2","mou":"1:牟7侔2哞1某3眸2谋2蛑2缪7鍪2","mi":"1:米3糸4汨4芈3宓4弥2泌9觅4咪8咪6弭3祢2迷2敉3秘9脒3密4猕2眯7眯8眯6谜7幂4谧4嘧4蜜4醚2糜7縻2麋2靡7靡8蘼2沕4","fou":"1:缶3否8","lao":"1:老3劳2牢2佬3姥8络9唠7唠9崂2捞1栳3涝7涝9烙9铑3痨2落9铹2耢4酪4潦7潦9潦8獠8醪2","lei":"1:耒3肋9泪4诔3垒3类4勒5勒6累7累9累8雷7雷9嘞5嫘2漯8缧2酹4磊3擂7擂9蕾3儡7儡8檑4镭2羸2罍2","rou":"1:肉4柔2揉2糅2蹂2鞣2","sai":"1:思6塞9塞6腮1赛4噻1鳃1","se":"1:色9涩4啬4铯4塞9瑟4穑4","shai":"2:色8晒4筛1酾6","que":"2:芍9却4炔6缺1悫4雀9确4阕4阙9阙6鹊4榷4瘸2","du":"1:芏4妒4杜4肚9肚8度9毒2独2笃3读7都6堵3渎7椟2渡4牍2犊2赌3嘟1督1睹3镀4黩2髑2蠹4","duo":"2:多1夺2朵3驮8剁3咄1沲3哆1哚3垛8垛8度7铎2堕8缍3舵3惰4裰1跺3躲3踱2掇1","heng":"1:行7亨1恒2哼1桁7珩7横7横9衡2蘅2姮2恆2","ne":"1:讷4那9呐9呢5哪7","song":"1:讼4宋4忪6怂3松1诵4送4凇1悚3耸3颂4崧1淞1菘1竦3嵩1","guo":"2:过9过6呙1国2果3埚1涡6郭1崞1帼2掴2猓1椁3聒1锅1蜾3蝈1裹3虢2馘2粿3馃3囯2","nuo":"2:那7娜7挪2诺4喏9傩2搦4锘4懦4糯4","bang":"1:邦1帮1绑3旁9梆1浜1蚌9傍4棒4谤4蒡4榜9榜8膀9膀8磅9镑4","ruan":"2:阮3朊3软3","liang":"2:两3良2亮4俩8凉7凉9莨7谅4梁2辆4晾4椋2量7量9靓9粮2粱2墚2踉7踉9魉3樑2","luan":"2:乱4卵3娈2孪2峦2挛2栾2鸾2脔2滦2銮2","ti":"1:体8体6屉4剃4荑7倜4剔1悌4涕4绨7绨9逖4惕4梯1啼2提7替4缇2锑1鹈2裼9踢1题2蹄2醍7醍8嚏4俶9","fo":"1:佛7","mian":"2:免8沔3勉3眄3面4娩3眠2冕3渑8绵2棉2湎3缅3腼3","leng":"1:冷3塄2愣4棱6楞7楞9","bie":"2:别7别9憋1瘪8瘪6蹩2鳖1","lin":"1:吝4邻2拎1林2临7临9赁4啉7啉9淋7淋9琳2粼2蔺4凛3嶙2遴2廪3懔3膦4辚2霖2檩3瞵2磷2鳞2躏4麟2璘2","qin":"1:吣4沁4芩2芹2亲6侵1矜7钦1秦2衾1揿4琴2禽2覃7锓3勤2嗪2寝3溱7廑7噙2擒2檎2螓2琹2","dun":"1:吨1囤9沌9炖4盹3盾4砘4钝4趸3顿4敦6遁4墩1礅1镦6蹲6惇1","keng":"1:吭6坑1铿1","shun":"2:吮3顺4舜4瞬4","chao":"2:吵8吵6抄1怊1炒3钞1晁2耖4巢2绰6朝7焯6超1剿6嘲7潮2","zhao":"2:爪8召4兆4找3诏4钊1招1沼3昭1赵4笊4啁6着7着6朝6棹4照4罩4肇4嘲6曌4炤4","chui":"3:吹1垂2炊1陲2捶2棰2椎7槌2锤2","gao":"1:告4杲3诰4郜4皋6羔1高1锆4搞3缟3槁3槔1睾1膏9膏6稿3镐8篙1糕1藁3","qiang":"2:呛9呛6抢8抢6羌1戕1戗9戗6枪1炝4将6羟3跄9跄6强7强8腔1蜣1锖1墙2嫱2蔷2锵1樯2襁3镪8镪6","jiang":"2:匠4江1讲3降9奖3姜1将9将6洚4绛4茳1桨3浆1豇1强9蒋3酱4僵1犟4缰1耩3礓1糨4疆1","kun":"1:困4坤1昆1悃3捆3阃3琨1锟1髡1醌1鲲1堃1崑1焜1","huai":"2:坏4怀2徊2淮2槐2踝2","zhui":"3:坠4隹1追1缀4骓1惴4椎6缒4锥1赘4","lian":"2:奁2连2帘2怜2练4炼4恋4涟2莲2敛3殓4琏3脸3联2裢2裣3链4廉2楝4潋4蔹3鲢2濂2臁2镰2蠊2","miao":"2:妙4庙4杪3苗2眇3秒3喵1描2淼3渺3缈3瞄2鹋2缪9藐3邈3","ceng":"1:层2曾7噌6蹭4","cen":"1:岑2参6涔2","ku":"1:库4刳1苦8枯1绔4哭1堀1喾4裤4窟1酷4骷1","ying":"1:应9应6迎2英1茔2映4盈2荥7荧2郢3莹2莺1婴1萤2营2萦2瑛1硬4颍3媵4楹2滢2蓥2颖2嘤1撄1潆2缨1罂1蝇2影3樱1璎1嬴2瘿3鹦1膺1赢2鹰1瀛2","te":"1:忑4忒9特4铽4慝4","tui":"2:忒6退4推1煺4腿3蜕4颓2褪9","wo":"1:我3沃4肟4卧4挝6倭1涡6莴1喔1幄4握4渥4硪4窝1蜗1斡4龌4","rao":"1:扰3娆7娆8绕4荛7饶2桡2","geng":"1:更9更6庚1哽3埂3绠8耕1耿3梗3颈8赓1鲠3羹1","biao":"2:杓6表3彪1标1飑1髟1婊3裱3骠6膘1瘭1镖1飙1飚1鳔4镳1","tiao":"2:条2佻1苕7迢2挑8挑6祧1调7眺4窕3笤2粜4跳4龆2蜩2髫2鲦2","lai":"1:来7来6崃1徕7徕6涞1莱1赉2睐2铼1赖2濑2癞7籁2","pei":"1:沛4佩4呸1帔4胚1旆4配4陪2培2赔2辔4锫2裴2醅1霈4珮4","zhuo":"3:灼2卓2拙1茁2斫2浊2倬1捉1桌1浞2诼2酌2啄2涿1着7焯6琢7禚2缴7擢3濯2镯2躅7叕2","chun":"2:纯2春1唇2莼2淳2椿1鹑2蝽1醇2蠢3","zong":"1:纵4宗1枞6总3偬3综6棕1腙1粽4踪1鬃1","huang":"2:肓1恍3皇2荒1晃9晃8凰2谎3隍2黄2徨2惶2慌8慌6湟2遑2幌3煌2潢2璜2篁2蝗2癀2磺2簧2蟥2鳇2","rui":"2:芮4枘4蚋4锐4瑞4睿4蕊3蕤2叡4","zu":"1:诅3足2阻3卒7组3苴6俎3祖3租1族2菹1镞2","zou":"1:走3邹1驺1奏4诹1陬1揍4鄹1鲰1","zhei":"2:这9","run":"1:闰4润4","sang":"1:丧9丧6桑1嗓3搡3磉3颡3","guai":"2:乖1怪4拐3","chai":"2:侪2拆6钗1差9差6虿4柴7豺2瘥9","shua":"3:刷9刷6耍3唰1","cu":"1:卒9徂2促4殂2猝4粗1酢4蔟4趣9醋4簇4蹙4蹴9","ha":"1:呵6哈9哈8哈6虾7铪1蛤7","nao":"1:呶7闹4垴3恼3挠2孬1脑3淖4硇2铙2猱2蛲2瑙3","zui":"2:咀6最4罪4觜8蕞4醉4嘴3","meng":"1:孟4氓7黾8虻2勐3梦4猛3萌2盟2蒙7蒙8蒙6锰3甍2艋3蜢3瞢2朦2檬2懵3礞2艨2蠓3濛2獴3","tie":"2:帖9帖8帖6贴1铁3萜1餮4","peng":"1:怦1抨1朋2砰1堋2捧3烹1彭2棚2硼2碰4蓬2鹏2嘭1澎2篷2膨2蟛2芃2椪4","suo":"2:所3唆1唢3娑1索3莎6挲6桫1梭1琐3睃1锁3嗍1嗦0羧1蓑1缩6","ca":"1:拆6嚓6擦1礤3","pai":"1:拍1迫8哌4派9俳2徘2排7排8湃4牌2蒎4","hun":"1:昏1诨3浑7浑8荤6珲7婚1混7混8阍1馄2溷3魂2溷4棍9","luo":"2:泺4罗2咯9洛4络9荦4骆4倮3捋6烙9珞4猡2硌9脶2萝2逻2椤2落9落6跞9裸3锣2摞4漯9箩2雒4骡2瘰3镙2螺2蠃3蠡7啰5啰7啰6","bin":"1:玢6宾1彬1傧1斌1摈4滨1缤1槟6殡4膑4镔1濒1豳1髌4鬓4","weng":"1:瓮4翁1嗡1蓊3蕹4","ken":"1:肯3垦3恳3啃3裉4","yo":"1:育6哟5哟6唷1","re":"1:若8热4喏8惹3","ruo":"2:若9偌4弱4箬4叒4","zhuai":"3:转7拽9拽6","die":"2:迭2垤2爹1瓞2谍2喋7堞2揲7耋2跌1叠2牒2碟2蝶2蹀2鲽2昳7","lang":"1:郎2朗3浪4狼2莨7莨9阆4啷1廊2琅2榔2稂2锒2蒗4螂2崀4塱3蓢3","lou":"1:陋4娄2偻7喽5喽7嵝3搂8搂6蒌2楼2漏4瘘4镂4篓3耧2蝼2髅2露9","zang":"1:驵3奘9脏9脏6赃1葬4臧6藏9","lia":"2:俩8","lo":"1:咯5","zan":"1:咱2拶8昝3暂4糌1赞4錾4簪1攒8瓒4趱3","hen":"1:哏8很3恨4狠3痕2","zen":"1:怎3谮4","duan":"2:段4断4短3缎4椴4煅4端1锻4簖4","beng":"1:泵4甭2迸4蚌9崩1绷9绷8绷6嘣1甏4蹦4","pen":"1:盆2喷9喷6湓2","cao":"1:草3曹2嘈2漕2槽2操1糙1艚2螬2","pou":"1:剖1掊7掊8裒2","cuo":"2:厝4挫4措4脞3嵯2搓1痤2矬2锉4错4瘥7磋1撮6蹉1鹾2","sou":"1:叟8叟6嗖1搜1溲1馊1飕1嗽4嗾3瞍3锼1艘1螋1擞9擞8薮3","o":"0:哦7噢1","man":"1:埋7曼4蛮2满3谩7谩9墁4幔4慢4漫4缦4蔓7蔓9馒2熳4瞒2螨3镘4鞔2颟1鳗2嫚9嫚6","kuan":"2:宽1款3髋1","nen":"1:恁4嫩4","en":"0:恩1摁4蒽1","suan":"2:狻1蒜4算4酸1","teng":"1:疼2腾2誊2滕2藤2","neng":"1:能2","cui":"2:脆4啐9崔1悴4淬4萃4毳4催1瘁4摧1榱1粹9翠4璀3","gun":"1:衮3绲3棍9辊3滚3磙3鲧3","shei":"2:谁7","zei":"1:贼2","qun":"1:逡1裙2群2麇7","zuan":"2:钻9钻6赚9缵3纂3攥4躜1","cou":"1:凑4楱4腠4辏4","chuai":"3:啜9揣9揣8揣6搋1嘬9膪4踹4","chuo":"3:啜9辍4踔1龊4戳1绰9绰5","dei":"1:得8嘚6","nin":"1:您2","lüe":"2:掠4略4锊4","zeng":"1:综9曾6锃4增1憎1缯9缯6甑4赠4罾1","zun":"1:尊1撙3遵1樽1鳟1","sen":"1:森1","hei":"1:黑1嗨6嘿6","ng":"0:嗯9嗯7嗯8","n":"0:嗯7嗯8嗯9","dia":"2:嗲3","nuan":"2:暖3","miu":"2:谬4缪9","seng":"1:僧1","niang":"2:娘2酿4孃2嬢2","nou":"1:耨4","nang":"1:曩3囊7囊6馕7馕8囔1攮3齉4","den":"1:扥4扽4","tei":"1:忒6","rua":"2:挼2","nun":"1:黁2","eng":"0:鞥1","chua":"3:欻6"}');
    }, function(n) {
      n.exports = JSON.parse('{"0":"","1":"一乙","2":"丁七乃乜九了二人亻儿入八冂几凵刀刁力勹匕十厂厶又卜乂","3":"万丈三上下丌个丫丸久乇么义乞也习乡亍于亏亡亿兀凡刃勺千卫叉口囗土士夕大女子孑孓寸小尢尸山巛川工己已巳巾干幺广廾弋弓才门飞马与之及","4":"不丐丑专中丰丹为乌书予云互亓五井亢什仁仂仃仄仅仆仇仉今介仍从仑仓允元公六兮内冈冗凤凶分切刈劝办勾勿匀化匹区卅升午卞厄厅历友双反壬天太夫夭孔少尤尹尺屯巴币幻廿开引心忆戈户手扎支攴攵文斗斤方无日曰月木欠止歹殳毋比毛氏气水火爪父爻爿片牙牛犬王瓦肀艺见计订讣认讥贝车邓长闩队韦风乏以巨巿冇","5":"讬且丕世丘丙业丛东丝主乍乎乐仔仕他仗付仙仝仞仟仡代令仨仪仫们兄兰冉册写冬冯凸凹出击刊刍功加务劢包匆北匝卉半卟占卡卢卮卯厉去发古句另叨叩只叫召叭叮可台叱史右叵叶号司叹叻叼叽囚四圣处外央夯失头奴奶孕宁它宄对尔尕尻尼左巧市布帅平幼庀弁弗弘归必忉戊戋扑扒打扔斥旦旧未末本札术正母氐民氕永汀汁汇汉灭犯犰玄玉瓜甘生用甩田由甲申电疋白皮皿目矛矢石示礼禾穴立纠艽艾艿节讦讧讨让讪讫训议讯记轧边辽邗邙邛邝钅闪阡阢饥驭鸟龙印戉氹奵","6":"丞丢乒乓乔乩买争亘亚交亥亦产仰仲仳仵件价任份仿企伉伊伍伎伏伐休众优伙会伛伞伟传伢伤伥伦伧伪伫佤充兆先光全共关兴再军农冰冱冲决凫凼刎刑划刖列刘则刚创劣动匈匠匡华协危压厌厍吁吃各吆合吉吊同名后吏吐向吒吓吕吖吗囝回囟因囡团在圩圪圬圭圮圯地圳圹场圾壮夙多夷夸夹夺夼奸她好妁如妃妄妆妇妈字存孙宅宇守安寺寻导尖尘尥尧尽屹屺屿岁岂岌州巡巩帆师年并庄庆延廷异式弛当忏忖忙戌戍戎戏成托扛扣扦执扩扪扫扬收旨早旬旭旮旯曲曳有朱朴朵机朽杀杂权次欢此死毕氖氘氽汆汊汐汔汕汗汛汜汝江池污汤汲灯灰爷牝牟犴犷犸玎玑百祁竹米糸纡红纣纤纥约级纨纩纪纫缶网羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色芄芊芋芍芎芏芑芒芗芝芨虍虫血行衣西观讲讳讴讵讶讷许讹论讼讽设访诀贞负轨达迁迂迄迅过迈邡邢那邦邪邬钆钇闫闭问闯阪阮阱防阳阴阵阶页饧驮驯驰齐似吸芃邨吋贠孖屾叒玏岀甪","7":"两严串丽乱亨亩伯估伲伴伶伸伺伽佃但位低住佐佑体何佗佘余佚佛作佝佞佟你佣佥佧克免兑兕兵况冶冷冻初删判刨利别刭助努劫劬劭励劲劳匣医卣卤即却卵县君吝吞吟吠吡吣否吧吨吩含听吭吮启吱吲吴吵吹吻吼吾呀呃呆呈告呋呐呒呓呔呕呖呗员呙呛呜囤囫园困囱围囵圻址坂均坊坌坍坎坏坐坑块坚坛坜坝坞坟坠声壳奁奂妊妍妒妓妖妗妙妞妣妤妥妨妩妪妫姊姒孚孛孜孝宋完宏寿尬尾尿局屁层岈岍岐岑岔岖岗岘岙岚岛岜希帏帐庇床庋序庐庑库应弃弄弟张形彤彷役彻忌忍忐忑忒志忘忡忤忧忪快忭忮忱忸忻忾怀怃怄怅怆我戒扭扮扯扰扳扶批扼找技抄抉把抑抒抓投抖抗折抚抛抟抠抡抢护报拒拟攸改攻旰旱时旷更杆杈杉杌李杏材村杓杖杜杞束杠条来杨杩极欤步歼每氙氚求汞汨汩汪汰汴汶汹汽汾沁沂沃沅沆沈沉沌沏沐沔沙沛沟没沣沤沥沦沧沩沪泐泛灵灶灸灼灾灿炀牡牢状犹狁狂狃狄狈玖玛甫甬男甸町疔疖疗皂盯矣矶社祀秀私秃究穷系纬纭纯纰纱纲纳纵纶纷纸纹纺纽纾罕羌肓肖肘肚肛肜肝肟肠良芈芘芙芜芟芡芤芥芦芩芪芫芬芭芮芯芰花芳芴芷芸芹芽芾苁苄苇苈苊苋苌苍苎苏苡苣虬补角言证诂诃评诅识诈诉诊诋诌词诎诏译诒谷豆豕豸贡财赤走足身轩轫辛辰迎运近迓返迕还这进远违连迟邑邮邯邰邱邳邴邵邶邸邹邺邻酉里针钉钊钋钌闰闱闲闳间闵闶闷阻阼阽阿陀陂附际陆陇陈陉韧饨饩饪饫饬饭饮驱驳驴鸠鸡麦龟巫囧旸佔飏呎釆佈玙囯沕","8":"姈丧乖乳事些亟享京佩佬佯佰佳佴佶佻佼佾使侃侄侈侉例侍侏侑侔侗供依侠侣侥侦侧侨侩侪侬兔兖其具典冼冽净凭凯函刮到刳制刷券刹刺刻刽刿剀剁剂劾势匦卑卒卓单卖卦卧卷卺厕叁参叔取呢呤呦周呱味呵呶呷呸呻呼命咀咂咄咆咋和咎咏咐咒咔咕咖咙咚咛咝哎囹固国图坡坤坦坨坩坪坫坭坯坳坶坷坻坼垂垃垄垅垆备夜奄奇奈奉奋奔妮妯妲妹妻妾姆始姐姑姓委姗孟孢季孤孥学宓宕宗官宙定宛宜宝实宠审尚居屈屉届岢岣岩岫岬岭岱岳岵岷岸岽岿峁峄帑帔帕帖帘帙帚帛帜幸底庖店庙庚府庞废建弥弦弧弩弪录彼往征徂径忝忠念忽忿态怂怊怍怏怔怕怖怙怛怜怡怦性怩怪怫怯怵怿戕或戗戽戾房所承抨披抬抱抵抹抻押抽抿拂拄担拆拇拈拉拊拌拍拎拐拓拔拖拗拘拙拚招拢拣拥拦拧拨择放斧斩於旺昀昂昃昆昊昌明昏易昔昕昙朊朋服杪杭杯杰杲杳杵杷杼松板构枇枉枋析枕林枘枚果枝枞枢枣枥枧枨枪枫枭柜欣欧武歧殁殴氓氛沓沫沭沮沱沲河沸油治沼沽沾沿泄泅泊泌泓泔法泖泗泞泠泡波泣泥注泪泫泮泯泱泳泷泸泺泻泼泽泾浅炅炉炊炎炒炔炕炖炙炜炝炬爬爸版牦牧物狍狎狐狒狗狙狞玟玢玩玫玮环现瓮瓯甙画甾畀畅疙疚疝疟疠疡的盂盱盲直知矸矽矾矿砀码祆祈祉秆秉穸穹空竺籴线绀绁绂练组绅细织终绉绊绋绌绍绎经绐罔罗者耵耶肃股肢肤肥肩肪肫肭肮肯肱育肴肷肺肼肽肾肿胀胁臾舍艰苑苒苓苔苕苗苘苛苜苞苟苠苤若苦苫苯英苴苷苹苻茁茂范茄茅茆茇茉茌茎茏茑茔茕茚虎虏虮虱表衩衫衬规觅视诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩责贤败账货质贩贪贫贬购贮贯转轭轮软轰迢迤迥迦迨迩迪迫迭迮述迳邾郁郄郅郇郊郎郏郐郑郓采金钍钎钏钐钒钓钔钕钗闸闹阜陋陌降限陔陕隶隹雨青非顶顷饯饰饱饲饴驵驶驷驸驹驺驻驼驽驾驿骀鱼鸢鸣黾齿受变弢祎玥旻昇劼昉咘旼劵毑祇叕炘泃佺","9":"临举亭亮亲侮侯侵便促俄俅俊俎俏俐俑俗俘俚俜保俞俟信俣俦俨俩俪俭修兹养冒冠剃削剌前剐剑勃勇勉勋匍南卸厘厚叙叛呲咣咤咦咧咨咩咪咫咬咭咯咱咳咴咸咻咽咿哀品哂哄哆哇哈哉哌响哏哐哑哒哓哔哕哗哙哚哜哝哞哟哪囿型垌垒垓垛垠垡垢垣垤垦垧垩垫垭垮垲垴城埏复奎奏契奕奖姘姚姜姝姣姥姨姹姻姿威娃娄娅娆娇娈娜孩孪客宣室宥宦宪宫封将尜尝屋屎屏峋峒峙峡峤峥峦差巷帝带帧帮幽庠庥度庭弈弭弯彖彦待徇很徉徊律後怎怒思怠急怨总怼恂恃恍恒恢恤恨恪恫恬恸恹恺恻恼恽战扁扃拜括拭拮拯拱拴拶拷拼拽拾持挂指按挎挑挖挝挞挟挠挡挢挣挤挥挪挺政故斫施既昝星映春昧昨昭是昱昴昵昶昼显曷朐枯枰枳枵架枷枸柁柃柄柏某柑柒染柔柘柙柚柝柞柠柢查柩柬柯柰柱柳柽柿栀栅标栈栉栊栋栌栎栏树歪殂殃殄殆殇残段毒毖毗毡氟氡氢泉泵泶洁洄洇洋洌洎洒洗洙洚洛洞津洧洪洫洮洱洲洳洵洹活洼洽派浃浇浈浊测浍济浏浑浒浓浔涎炫炭炮炯炱炳炷炸点炻炼炽烀烁烂烃爰牮牯牲牵狠狡狨狩独狭狮狯狰狱狲玲玳玷玻珀珂珈珉珊珍珏珐珑瓴甚甭畈畋界畎畏疣疤疥疫疬疮疯癸皆皇皈盅盆盈相盹盼盾省眄眇眈眉看眍眨矜矧矩砂砉砌砍砑砒研砖砗砘砚砜砭祓祖祗祚祛祜祝神祠祢禹禺秋种科秒秕秭穿窀突窃窆竖竽竿笃笈类籼籽绑绒结绔绕绗绘给绚绛络绝绞统缸罘罚美羿耍耐耔耷胂胃胄胆背胍胎胖胗胙胚胛胜胝胞胡胤胥胧胨胩胪胫脉舁舡舢舣茈茗茛茜茧茨茫茬茭茯茱茳茴茵茶茸茹茺茼荀荃荆荇草荏荐荑荒荔荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莒莛虐虹虺虻虼虽虾虿蚀蚁蚂蚤衍衲衽衿袂袄要觇览觉訇诫诬语诮误诰诱诲诳说诵诶贰贱贲贳贴贵贶贷贸费贺贻赳赴赵趴轱轲轳轴轵轶轷轸轹轺轻迷迸迹追退送适逃逄逅逆选逊郗郛郜郝郡郢郦郧酊酋重钙钚钛钜钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯闺闻闼闽闾阀阁阂陛陟陡院除陧陨险面革韭音顸项顺须飑飒食饵饶饷饺饼首香骁骂骄骅骆骇骈骨鬼鸥鸦鸨鸩叟恰祐昺垚珅玹洸屌浕浐畑闿咲怹昳陞査洺栃垵炤姮垟恆饹竑剎饸垕","10":"袅乘亳俯俱俳俸俺俾倌倍倏倒倔倘候倚倜借倡倥倦倨倩倪倬倭倮债值倾偌健党兼冢冤冥凄准凇凉凋凌剔剖剜剞剡剥剧勐匪匿卿厝原哥哦哧哨哩哭哮哲哳哺哼哽哿唁唆唇唉唏唐唑唔唛唠唢唣唤唧啊圃圄圆垸埂埃埋埒埔埕埘埙埚壶夏套奘奚姬娉娌娑娓娘娟娠娣娥娩娱娲娴婀孬宰害宴宵家宸容宽宾射屐屑展屙峨峪峭峰峻崂崃席帱座弱徐徒徕恁恋恐恕恙恚恝恣恧恩恭息恳恶悃悄悌悍悒悔悖悚悛悝悟悦悭悯扇拳拿挈挚挛挨挫振挹挽捂捃捅捆捉捋捌捍捎捏捐捕捞损捡换捣效敉敌敖斋料旁旃旄旅旆晁晃晋晌晏晒晓晔晕晖晟朔朕朗柴栓栖栗栝校栩株栲栳样核根格栽栾桀桁桂桃桄桅框案桉桊桌桎桐桑桓桔桕桠桡桢档桤桥桦桧桨桩梃梆殉殊殷毙毪氤氦氧氨氩泰流浆浙浚浜浞浠浣浦浩浪浮浯浴海浸浼涂涅消涉涌涑涓涔涕涛涝涞涟涠涡涣涤润涧涨涩烈烊烘烙烛烟烤烦烧烨烩烫烬热爱爹特牺狳狴狷狸狺狻狼猁猃玺珙珞珠珥珧珩班珲琊瓞瓶瓷畔留畚畛畜疰疱疲疳疴疸疹疼疽疾痂痃痄病症痈痉皋皱益盍盎盏盐监眙眚真眠眢眩砝砟砣砥砧砩砬砰破砷砸砹砺砻砼砾础祟祥祧祯离秘租秣秤秦秧秩秫积称窄窈窍站竞笄笆笊笋笏笑笔笕笫粉粑紊素索紧绠绡绢绣绥绦继绨缺罟罡罢羔羞翁翅耄耆耕耖耗耘耙耸耻耽耿聂胭胯胰胱胲胳胴胶胸胺胼能脂脆脊脍脎脏脐脑脒脓臬臭致舀舐舨航舫般舭舯舰舱艳荷荸荻荼荽莅莆莉莎莓莘莜莞莠莨莩莪莫莰莱莲莳莴莶获莸莹莺莼莽虑虔蚊蚋蚌蚍蚓蚕蚜蚝蚣蚧蚨蚩蚪蚬衄衮衰衷衾袁袍袒袖袜袢被觊请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊豇豹豺贼贽贾贿赀赁赂赃资赅赆赶起趵趸趿躬軎轼载轾轿辁辂较辱逋逍透逐逑递途逖逗通逛逝逞速造逡逢逦邕部郫郭郯郴郸都酌配酎酏酐酒釜钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铌铍铎阃阄阅阆陪陬陲陴陵陶陷隼隽难顼顽顾顿颀颁颂颃预饽饿馀馁骊骋验骏高髟鬯鬲鸪鸫鸬鸭鸯鸱鸲鸳鸵鸶龀彧翀珮埇崀俶疍翃珣峯埗埈倓珪娭鸮栢烜託珽脩挼","11":"彪晚梢梧梨龛乾偃假偈偎偏偕做停偬偶偷偻偾偿傀兜兽冕减凑凰剪副勒勖勘匏匐匙匮匾厢厣厩唪唬售唯唰唱唳唷唼唾唿啁啃啄商啉啐啕啖啜啡啤啥啦啧啪啬啭啮啵啶啷啸喏喵圈圉圊埝域埠埤埭埯埴埸培基埽堀堂堆堇堋堍堑堕堵够奢娶娼婆婉婊婕婚婢婧婪婴婵婶孰宿寂寄寅密寇尉屠崆崇崎崔崖崛崞崤崦崧崩崭崮巢帷常帻帼庳庵庶康庸庹庾廊弹彗彩彬得徘徙徜恿悉悠患您悫悬悱悴悸悻悼情惆惊惋惕惘惚惜惝惟惦惧惨惬惭惮惯戚戛扈挲捧捩捭据捱捶捷捺捻掀掂掇授掉掊掎掏掐排掖掘掠探接控推掩措掬掭掮掳掴掷掸掺掼揶敏救敕教敛敝敢斛斜断旋旌旎族晗晡晤晦晨曹曼望桫桴桶桷梁梅梏梓梗梦梭梯械梳梵检棂欲欷殍殒殓毫氪涪涫涮涯液涵涸涿淀淄淅淆淇淋淌淑淖淘淙淝淞淠淡淤淦淫淬淮深淳混淹添清渊渌渍渎渐渑渔渖渗渚渠烯烷烹烽焉焊焐焓焕焖焘爽牾牿犁猊猎猓猕猖猗猛猜猝猞猡猪猫率球琅理琉琏琐瓠甜略畦疵痊痍痒痔痕痖皎皑皲盒盔盖盗盘盛眦眭眯眵眶眷眸眺眼着睁矫砦硅硇硌硎硐硒硕硖硗硭票祭祷祸秸移秽稆窑窒窕竟章笙笛笞笠笤笥符笨笪第笮笱笳笸笺笼笾筇粒粕粗粘粜粝累绩绪绫续绮绯绰绱绲绳维绵绶绷绸绺绻综绽绾绿缀缁缍羚羝羟翊翌翎耜聃聆聊聋职聍胬脖脘脚脞脬脯脱脲脶脸舂舳舴舵舶舷舸船舻艴菀菁菅菇菊菌菏菔菖菘菜菝菟菠菡菥菩菪菰菱菲菸菹菽萁萃萄萆萋萌萍萎萏萑萘萜萝萤营萦萧萨萸著虚蚯蚰蚱蚴蚵蚶蚺蛀蛄蛆蛇蛉蛊蛋蛎蛏衅衔袈袋袤袭袱袷袼裆裉觋觖谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝豉豚象赇赈赉赊赦赧趺趼趾跃跄距躯辄辅辆逭逮逯逵逶逸逻郾鄂鄄酗酚酝酞野铐铑铒铕铖铗铘铙铛铜铝铞铟铠铡铢铣铤铥铧铨铩铪铫铬铭铮铯铰铱铲铳铴铵银铷阈阉阊阋阌阍阎阏阐隅隆隈隋隍随隐隗雀雩雪颅领颇颈馄馅馆馗骐骑骒骓骖鸷鸸鸹鸺鸽鸾鸿鹿麸麻黄龚描珺堃產琍崑啰晞谞硚琇焗埼菂採馃偲琎啟啲堌捯珵惇棻堉","12":"亵傅傈傍傣傥傧储傩傲凿剩割募博厥厦厨啻啼啾喀喁喂喃善喇喈喉喊喋喑喔喘喙喜喝喟喧喱喳喷喹喻喽喾嗖嗟堙堞堠堡堤堪堰塄塔壹奠奥婷婺婿媒媚媛媪嫂孱孳富寐寒寓尊就属屡崴崽崾嵇嵋嵌嵘嵛嵝嵫嵬嵯巯巽帽幂幄幅弑强弼彘彭御徨循悲惑惠惩惫惰惴惶惹惺愀愉愎愕愠愣愤愦愧慌慨戟戢扉掌掣掰掾揄揆揉揍揎提插揖揞揠握揣揩揪揭揲援揸揽揿搀搁搂搅搓搔搜搭搽摒敞散敦敬斌斐斑斯普景晰晴晶晷智晾暂暑曾替最朝期棉棋棍棒棕棘棚棠棣森棰棱棵棹棺棼椁椅椋植椎椐椒椟椠椤椭椰楗楮榔欹欺款殖殚殛毯毳毵毽氮氯氰淼渝渡渣渤渥温渫渭港渲渴游渺湃湄湍湎湓湔湖湘湛湟湫湮湾湿溃溅溆溉溲滁滋滑滞焙焚焦焯焰焱然煮牌牍犀犄犊犋犍猢猥猩猬猱猴猸猹猾琚琛琢琥琦琨琪琬琮琰琳琴琵琶琼瑛瓿甥甯番畲畴疏痘痛痞痢痣痤痦痧痨痪痫登皓皖皴睃睇睐睑矬短硝硪硫硬确硷祺禄禅禽稀稂稃程稍税窖窗窘窜窝竣童竦筅等筋筌筏筐筑筒答策筘筚筛筝筵粞粟粢粤粥粪紫絮絷缂缃缄缅缆缇缈缉缋缌缎缏缑缒缓缔缕编缗缘羡翔翕翘耋耠聒联脔脾腆腈腊腋腌腑腓腔腕腙腚腱腴舄舒舜舾艇萱萼落葆葑葙葚葛葜葡董葩葫葬葭葱葳葵葶葸葺蒂蒇蒈蒉蒋蒌蒎蛐蛑蛔蛘蛙蛛蛞蛟蛤蛩蛭蛮蛰蛱蛲蛳蛴蜒蜓街裁裂装裎裒裕裙裢裣裤裥覃觌觚觞詈谟谠谡谢谣谤谥谦谧貂赋赌赍赎赏赐赓赔赕趁趄超越趋跆跋跌跎跏跑跖跗跚跛跞践辇辈辉辊辋辍辎辜逼逾遁遂遄遇遍遏遐遑遒道遗酡酢酣酤酥釉释量铸铹铺铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕阑阒阔阕隔隘隙雁雄雅集雇雯雳靓韩颉颊颌颍颏飓飧飨馇馈馊馋骗骘骚骛鱿鲁鲂鹁鹂鹃鹄鹅鹆鹇鹈黍黑黹鼋鼎嗒皙喆犇湉焜圏甦復萩畬琹棪鹀嗞椪翚註堺欻","13":"戡缙催傺傻像剽剿勤叠嗄嗅嗉嗌嗍嗑嗓嗔嗜嗝嗡嗣嗤嗥嗦嗨嗪嗫嗬嗯嗲嗳嗵嗷嘟塌塍塑塘塞塥填塬墓媲媳媵媸媾嫁嫉嫌嫒嫔嫫寝寞尴嵊嵩嵴幌幕廉廒廓彀徭微想愁愆愈愍意愚感愫慈慊慎慑戤戥搋搌搏搐搛搞搠搡搦搪搬携摁摄摅摆摇摈摊摸敫数斟新旒暄暇暌暖暗椴椹椽椿楂楔楚楝楞楠楣楦楫楱楷楸楹楼榀概榄榆榇榈榉榘槌槎槐歃歆歇殿毁毂毹氲溏源溘溜溟溢溥溧溪溯溱溴溶溷溺溻溽滂滇滏滓滔滗滚滟滠满滢滤滥滦滨滩漓漠漭煅煊煌煎煜煞煤煦照煨煲煳煸煺牒犏献猷猿瑁瑕瑗瑙瑚瑜瑞瑟瑰甄畸畹痰痱痴痹痼痿瘀瘁瘃瘅瘐盟睚睛睡睢督睥睦睨睫睬睹瞄矮硼碇碉碌碍碎碑碓碗碘碚碛碜碰禀禁禊福稔稗稚稞稠稣窟窠窥窦筠筢筮筱筲筷筹筻签简粮粱粲粳缚缛缜缝缟缠缡缢缣缤罨罩罪置署群羧耢聘肄肆腠腥腧腩腭腮腰腹腺腻腼腽腾腿舅艄艉蒗蒙蒜蒡蒯蒲蒴蒸蒹蒺蒽蒿蓁蓄蓉蓊蓍蓐蓑蓓蓖蓝蓟蓠蓣蓥蓦蓬虞蛸蛹蛾蜂蜃蜇蜈蜉蜊蜍蜕蜗蜣衙裔裘裟裨裰裱裸裼裾褂褚觎觜解觥触訾詹誉誊谨谩谪谫谬豢貅貉貊赖趑趔跟跣跤跨跪跫跬路跳跷跸跹跺跻躲辏辐辑输辔辞辟遘遛遢遣遥遨鄙鄞鄢鄣酩酪酬酮酯酰酱鉴锖锗锘错锚锛锝锞锟锡锢锣锤锥锦锨锩锪锫锬锭键锯锰锱阖阗阙障雉雍雎雏零雷雹雾靖靳靴靶韪韫韵颐频颓颔颖飕馍馏馐骜骝骞骟骰骱髡魁魂鲅鲆鲇鲈鲋鲍鲎鲐鹉鹊鹋鹌鹎鹏鹑麂鼓鼠龃龄龅龆蜀滘勠瑄嬅漷碁榅窣塱塚鄠瑀榊蓢暐跶","14":"歌獒僖僚僦僧僬僭僮僳儆兢凳劁劂厮嗽嗾嘀嘁嘈嘉嘌嘎嘏嘘嘛嘞嘣嘤嘧塾墁境墅墉墒墙墚夤夥嫖嫘嫜嫠嫡嫣嫦嫩嫱孵察寡寤寥寨屣嶂幔幛廑廖弊彰愿慕慝慢慵慷截戬搴搿摔摘摞摧摭摹摺撂撄撇撖敲斡旖旗暝暧暨榍榕榛榜榧榨榫榭榱榴榷榻槁槊槔槛槟槠模歉殡毓滴滹漂漆漉漏演漕漤漩漪漫漯漱漳漶漾潆潇潋潍潢潴澉煽熄熊熏熔熘熙熬犒獍獐瑭瑶瑷璃甍疑瘊瘌瘕瘗瘘瘙瘟瘥瘦瘩睽睾睿瞀瞅瞍碟碡碣碥碧碱碲碳碴碹磁磋禚稳窨窬窭竭端箅箍箐箔箕算箜箝管箢箦箧箨箩箪箫箬箸粹粼粽精糁綦綮缥缦缧缨缩缪缫罂罱罴翟翠翡翥耥聚肇腐膀膂膈膊膏膑膜臧舆舔舞艋蓰蓼蓿蔌蔑蔓蔗蔚蔟蔡蔫蔷蔸蔹蔺蔻蔼蔽蕖蜘蜚蜜蜞蜡蜢蜥蜩蜮蜱蜴蜷蜻蜾蜿蝇蝈蝉螂裳裴裹褊褐褓褙褛褡褪觏觫誓谭谮谯谰谱谲豪貌赘赙赚赛赫跽踅踉踊踌辕辖辗辣遭遮鄯鄱酲酴酵酶酷酸酹酽酾酿銎銮锲锴锵锶锷锸锹锺锻锼锾锿镀镁镂镄镅阚隧雌雒需霁霆静靼鞅韬韶颗馑馒骠骡骢骶骷髦魃魄魅鲑鲒鲔鲕鲚鲛鲜鲞鲟鹕鹗鹘鹚鹛鹜麽鼐鼻龇龈墟暮槃頔嫚徳嘚粿漈僰漖製槙樋","15":"槭僵僻儇儋凛劈劐勰嘬嘭嘱嘲嘶嘹嘻嘿噌噍噎噔噗噘噙噜噢噶墀增墨墩嬉寮履屦嶙嶝幞幡幢廛影徵德慧慰憋憎憔憧憨憬懂戮摩撅撑撒撕撙撞撤撩撬播撮撰撵撷撸撺擒敷暴暹槲槽槿樊樗樘樟横樯樱橄橡橥毅滕潘潜潦潭潮潲潸潺潼澄澈澌澍澎澜澳熟熠熨熳熵牖獗獠瑾璀璁璇璋璎璜畿瘛瘠瘢瘤瘪瘫瘼瞌瞎瞑瞒瞢碾磅磉磊磐磔磕磙稷稹稻稼稽稿窳箭箱箴篁篆篇篌篑篓糅糇糈糊糌糍缬缭缮缯羯羰翦翩耦耧聩聪膘膛膝膣艏艘蔬蕃蕈蕉蕊蕙蕞蕤蕨蕲蕴蕺虢蝌蝎蝓蝗蝙蝠蝣蝤蝥蝮蝰蝴蝶蝻蝼蝽蝾螋褒褥褫褴觐觑觯谳谴谵豌豫赜赭趟趣踏踔踝踞踟踢踣踩踪踬踮踯踺躺辘遴遵醅醇醉醋醌鋈镆镇镉镊镌镍镎镏镐镑镒镓镔霄震霈霉靠靥鞋鞍鞑鞒题颚颛颜额飘餍馓馔骣骸骺骼髫髯魇鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲫鹞鹣鹤麾黎齑龉龊懊镕頫慜樑鋆潟禤噁奭鋐澂","16":"儒冀凝劓嘴噤器噩噪噫噬噱噻噼嚆圜墼壁壅嬖嬗嬴寰廨廪徼憝憩憷憾懈懒懔撼擀擂擅操擎擐擗擞整斓暾樨樵樽樾橇橐橘橙橛橱橹橼檎檠歙殪氅氆氇潞澡澧澶澹激濂濉濑濒熹燃燎燔燕燠燧犟獬獭璞瓢甏甑瘭瘰瘳瘴瘵瘸瘾瘿癀癃盥瞟瞠瞥瞰磨磬磲磺禧穆穑窿篙篚篝篡篥篦篪篮篱篷糕糖糗糙缰缱缲缳缴罹羲翮翰翱耨耩耪聱膦膨膪膳臻蕹蕻蕾薄薅薇薏薛薜薤薨薪薮薯螃螅螈融螓螗螟螨螭螯蟆蟒衡褰褶赝赞赠踱踵踹踽蹀蹁蹂蹄蹉辙辚辨辩遽避邀邂鄹醍醐醑醒醚醛錾镖镗镘镙镛镜镝镞镟隰雕霍霎霏霓霖靛鞔鞘颞颟颠颡飙飚餐髭髹髻魈魉鲭鲮鲰鲱鲲鲳鲴鲵鲶鲷鲸鲺鲻鹦鹧鹨鹾麇麈黉黔默鼽璟赟燊嬛濛璠燚磡窸曌曈錤璘蕗嬢叡霑獴","17":"馡儡嚅嚎嚏嚓壑壕嬲嬷孺嶷徽懋懑懦戴擘擢擤擦曙朦檀檄檐檑檗檩檬濞濠濡濮濯燥燮爵獯璐璨璩甓疃癌癍皤瞧瞩瞪瞬瞳瞵磴磷礁礅穗篼篾簇簋簌簏簖簧糜糟糠縻繁繇罄罅罾羁翳翼膺膻臀臁臂臃臆臊臌艚薰薷薹藁藉藏藐藓螫螬螳螵螺螽蟀蟊蟋蟑蟓蟥襁襄觳謇豁豳貔貘赡赢蹇蹈蹊蹋蹑蹒辫邃邈醢醣鍪镡镢镣镤镥镦镧镨镩镪镫隳霜霞鞠馘骤髀髁魍魏鲼鲽鳃鳄鳅鳆鳇鳊鳋鹩鹪鹫鹬麋黏黛黜黻鼢鼾龋龌龠黝瞭簕","18":"冁嚣彝懵戳曛曜檫瀑燹璧癔癖癜癞瞻瞽瞿礓礞簟簦簪糨翻艟藕藜藤藩蟛蟠蟪蟮襟覆謦蹙蹦蹩躇邋醪鎏鏊镬镭镯镰镱雠鞣鞫鞭鞯颢餮馥髂髅鬃鬈鳌鳍鳎鳏鳐鹭鹰黟黠鼬鹱鹮蹚瀍藠鞥","19":"嚯孽巅攀攉攒曝瀚瀛瀣爆瓣疆癣礤簸簿籀籁缵羸羹艨藻藿蘅蘑蘧蟹蟾蠃蠊蠓蠖襞襦警谶蹬蹭蹯蹰蹲蹴蹶蹼蹿酃醭醮醯鏖镲霪霭靡鞲鞴颤骥髋髌鬏魑鳓鳔鳕鳖鳗鳘鳙麒麓麴黢黼鼗贇韡","20":"璺嚷嚼壤孀巍攘曦瀵瀹灌獾瓒矍籍糯纂耀蘖蘩蠕蠛譬躁躅酆醴醵镳霰颥馨骧鬓魔鳜鳝鳞鳟黥黧黩黪鼍鼯孃鱀龑黁","21":"夔曩灏爝癫礴禳羼蠡蠢赣躏醺鐾露霸霹颦髓鳢麝黯鼙罍","22":"囊懿氍瓤穰耱蘸蘼躐躔镶霾饔饕髑鬻鹳龢","23":"麟攥攫癯罐趱躜颧鬟鼷鼹齄蠲","24":"灞矗蠹衢襻躞鑫囍","25":"鬣馕囔戆攮纛","26":"蠼","27":"","28":"","29":"","30":"爨","31":"","32":"","33":"","34":"","35":"","36":"齉"}');
    }, function(n) {
      n.exports = JSON.parse('{"的":"de","咳":"ké","长":"cháng","广":"guǎng","厂":"chǎng","卜":"bo","无":"wú","蔚":"wèi","压":"yā","扎":"zhā","教":"jiāo","觉":"jiào","虎":"hǔ","熏":"xūn","陶":"táo","子":"zǐ","脯":"fǔ","抹":"mā","食":"shí","鸟":"niǎo","任":"rèn","假":"jiǎ","得":"de","膀":"bǎng","塞":"sāi","红":"hóng","区":"qū","帖":"tiē","提":"tí","汤":"tāng","沓":"tà","悄":"qiāo","落":"luò","分":"fēn","处":"chù","绿":"lǜ","累":"lèi","辟":"bì","苦":"kǔ","被":"bèi","厕":"cè","免":"miǎn","倘":"tǎng","张":"zhāng","哦":"ó","若":"ruò","归":"guī","谷":"gǔ","将":"jiāng","否":"fǒu","约":"yuē","助":"zhù","亲":"qīn","降":"jiàng","读":"dú","角":"jiǎo","呢":"ne","哪":"nǎ","秘":"mì","冒":"mào","乘":"chéng","络":"luò","缩":"suō","句":"jù","殖":"zhí","佛":"fó","圈":"quān","吁":"xū","敦":"dūn","纤":"xiān","侧":"cè","朴":"pǔ","柜":"guì","尾":"wěi","脉":"mài","柏":"bǎi","仔":"zǎi","尺":"chǐ","幢":"zhuàng","蛇":"shé","腊":"là","蔓":"màn","稽":"jī","邪":"xié","雀":"què","碌":"lù","尉":"wèi","琢":"zhuó","楷":"kǎi","粥":"zhōu","攒":"zǎn","瀑":"pù","扒":"bā","椎":"zhuī","龟":"guī","泌":"mì","涡":"wō","嚼":"jiáo","绰":"chuò","棱":"léng","堕":"duò","姥":"lǎo","伺":"sì","侥":"jiǎo","栅":"zhà","夯":"hāng","腌":"yān","蛾":"é","吭":"kēng","褪":"tuì","肋":"lèi","撮":"cuō","嘿":"hēi","吱":"zhī","铣":"xiǎn","蛤":"há","糜":"mí","捻":"niǎn","喳":"zhā","唬":"hǔ","铛":"dāng","佃":"diàn","柴":"chái","害":"hài","家":"jiā","忒":"tēi","欻":"chuā","南":"nán","棍":"gùn","叭":"bā","蹲":"dūn","靚":"liàng","刹":"shā","彷":"páng"}');
    }, function(n) {
      n.exports = JSON.parse('{"initial":["b","p","m","f","d","t","n","l","g","k","h","j","q","x","zh","ch","sh","r","z","c","s","y","w"],"polyWord":"唉挨嗳义艾依椅嗌噫钉酊丁正争怔诤挣政症铮妻乜了钌撩燎瞭佴铒任蕃朴繁泊柏啵膊魄薄簸叭伯把杷耙靶鲅扒吧罢栖蹊娭几纪齐系亟其奇济给荠缉稽看倒丽哩蠡泡炮跑刨剥趵参甚葚什食莳桄广张涨厂长场倡叉杈衩差碴刺伺似俟有柚万没抹磨散糁上裳个仡各革格胳鬲搁葛饹压哑雅呀佗说耶掖相处与予吁雨禺语菀尢王亡兀乌无於恶捎稍欠茜为尾委尉隗遗蔚吐菟打答瘩大待逮子仔兹茈訾节价结偈接解藉倔肖蛸共供仅尽禁干杆赣疟要铫繇采偲发菲蜚吗蚂麻摩孖堡卜芥盖帱传转中种风葑缝石担疸惮瘅儋单苫钐扇掸掺氏只吱识织峙殖荼数员芸晕熨合吓纥何和荷喝戏芴虎核唬鹄糊劲径经仆埔铺暴瀑曝仇湫蝤艿论抡媛缘溜遛馏镏六陆碌蓼那哪内扛岗杠钢分切砌慊卷圈般勾枸化划华哗吡纰芘陂铍埤睥裨辟劈沤区曲撒片便扁缏褊吖阿呵啊胺蛾町梃铤爽台呔苔骀夫父孚芾怫服脯跗夭拗熬嚣空圻饮尺匙屯咳害还圜捻楷芯莘熟扎轧咋咤查栅炸喳猹楂槎汶闷斗坊乐约栎钥莫模茆冒旄猫豁伙仿彷膀伴扳拌胖袢番瓦袜哇奸间浅监渐溅犍锏槛见纤洗铣鲜孛背被臂车且句苣沮桔据蛆趄锔冯并屏甾载沓遢拓嗒踏同侗垌峒恫通令呤侧厕写叶邪契鲑夹伽茄家贾假葭脉炜哕虺咔咯卡估汩谷骨蛄雇毂嘏鹘叨陶焘角侥觉校教矫脚徼嚼可坷折蜇褚褶螫舍拾蛇歙畬号好貉弹澹歪崴炀烊鞅奔贲头宁拧主术助柱庶属归龟柜炅桧鳜呷咖嘎尼伲泥嶷作笮壳峤悄雀翘劁谯蕉鞘红哄蕻氐坻的嘀镝地底得撇佣喁汗犴含感县券眩旋呱佃点钿呗陌削噱嚷穰郇荨熏窨潭鸟溺弄泷笼乘秤称盛裎澄蹬艮孱禅占粘辗颤仰会浍伧嗔冲虫重涌观串纶冠矜莞兴省夯行炕肮巷浚隽菌筠当挡铛咧裂创厌芫阽咽研剡殷铅阏腌燕圩浒砉畜嘘侯率绿囝南难胗振椹僮幢戆臭宿择责祭翟尿隋遂睢祝轴调舳粥倩綮鲭栝扫燥拉剌喇腊蜡啦莩票嘌漂缥杉沙刹奢厦嗄煞噎镩汤倘惝铴樘趟镗拚娉牟泌咪秘眯谜糜靡否姥唠涝落潦獠肋勒累雷嘞漯擂儡思塞色酾芍炔阙肚读都渎驮垛度堕桁珩横呐呢忪过娜旁榜磅凉量靓踉体荑绨提裼醍俶佛免渑棱楞别瘪临啉淋亲覃溱廑囤沌敦镦蹲吭吵剿爪啁着朝嘲皋膏镐呛抢戗跄强镪降将椎缪噌苦应荥忒褪挝涡娆荛更绠杓骠苕挑来徕癞焯琢缴躅枞晃慌苴这丧柴刷卒趣蹴哈虾蛤呶咀觜氓黾蒙帖莎挲缩拆嚓迫派排浑荤珲混络捋烙硌跞啰玢槟育哟喏若拽喋揲昳莨偻喽搂露奘脏臧藏俩拶攒哏蚌绷喷掊瘥撮叟擞哦埋谩蔓嫚啐粹棍谁麇钻赚揣嘬啜绰嘚综曾缯嗨嘿嗯囊馕遏"}');
    }, function(n, e2, r) {
      r.r(e2);
      var o2, t2 = { spell: r(0), stroke: r(1), spellDefault: r(2), info: r(3) }, a = { simple: "simple", trad: "trad", poly: "poly", alltone: "alltone", array: "array" }, i = function(n2) {
        var e3 = t2.info.initial;
        n2 = n2.toLowerCase();
        var r2 = o2.removeTone(n2, false);
        if (-1 === r2.index) {
          if (!t2.spell[r2.spell])
            throw new Error("【spellInfo】错误的拼音: " + n2 + ", 请检查字符是否正确");
          r2.index = parseInt(t2.spell[r2.spell][0]) + 1;
        }
        for (var a2 = "", i2 = r2.spell, u2 = 0; u2 < e3.length; u2++)
          if (0 === r2.spell.indexOf(e3[u2])) {
            a2 = e3[u2], i2 = r2.spell.substr(a2.length);
            break;
          }
        return { spell: r2.spell, tone: r2.tone, index: r2.index, initial: a2, final: i2 };
      };
      var u = function() {
        for (var n2 = 0, e3 = 0, r2 = arguments.length; e3 < r2; e3++)
          n2 += arguments[e3].length;
        var o3 = Array(n2), t3 = 0;
        for (e3 = 0; e3 < r2; e3++)
          for (var a2 = arguments[e3], i2 = 0, u2 = a2.length; i2 < u2; i2++, t3++)
            o3[t3] = a2[i2];
        return o3;
      };
      function l() {
        for (var n2 = [], e3 = 0; e3 < arguments.length; e3++)
          n2[e3] = arguments[e3];
        console.warn.apply(console, u(["CnChar Warning:"], n2));
      }
      var s = function(n2, e3, r2) {
        if ("object" != typeof n2)
          r2(n2, e3);
        else
          for (var o3 in n2)
            r2(o3, n2[o3]);
      };
      function f2(n2, e3) {
        if (void 0 === e3 && (e3 = 1), !n2 || 0 === n2.length || 0 === e3)
          return [];
        if (e3 >= n2.length)
          return c(Object.assign([], n2));
        for (var r2 = [], o3 = n2.length, t3 = []; t3.length < e3; ) {
          var a2 = p(0, o3 - 1);
          t3.includes(a2) || (t3.push(a2), r2.push(n2[a2]));
        }
        return r2;
      }
      function c(n2) {
        for (var e3, r2, o3 = n2.length; o3; )
          r2 = Math.floor(Math.random() * o3--), e3 = n2[o3], n2[o3] = n2[r2], n2[r2] = e3;
        return n2;
      }
      function p(n2, e3) {
        return n2 + Math.round(Math.random() * (e3 - n2));
      }
      var h = function(n2) {
        var e3;
        return 1 === n2.length ? !!n2.match(/[\u4e00-\u9fa5]/) : (null === (e3 = n2.match(/[\u4e00-\u9fa5]/g)) || void 0 === e3 ? void 0 : e3.join("").length) === n2.length;
      };
      var d = function(n2, e3) {
        return -1 !== n2.indexOf(e3);
      };
      var g, v = "āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ*ńňǹ", y = { array: "array", low: "low", up: "up", first: "first", poly: "poly", tone: "tone", simple: "simple", trad: "trad", flat: "flat" };
      function m2() {
        return g;
      }
      function x(n2, e3) {
        var r2 = e3[0].split(""), o3 = e3.splice(1);
        E2("spell", o3);
        var a2 = d(o3, y.poly), i2 = d(o3, y.tone), u2 = [];
        for (var l2 in n2)
          for (var s2 = n2[l2], f3 = parseInt(s2[0]), c2 = function(n3) {
            var e4 = r2[n3], o4 = function(r3) {
              C(e4, r3) ? u2[n3].unshift(r3) : u2[n3].push(r3);
            };
            if (h(e4)) {
              var c3 = s2.indexOf(e4);
              if (-1 !== c3) {
                var p3 = T(l2, s2, c3, a2, i2, f3);
                if (p3.poly) {
                  u2[n3] || (u2[n3] = []), o4(p3.res);
                  for (var d2 = s2, g3 = d2.match(new RegExp(e4, "g")).length, v3 = 1; v3 < g3; v3++)
                    c3 = (d2 = d2.substr(c3 + 2)).indexOf(e4), o4(T(l2, d2, c3, a2, i2, f3).res);
                } else
                  p3.isPolyWord && t2.spellDefault[e4] && (p3.res = S(t2.spellDefault[e4], i2).spell), u2[n3] = [p3.res], r2[n3] = "";
              }
            } else
              "" !== e4 && (u2[n3] = ["NOT_CNCHAR", e4]);
          }, p2 = 0; p2 < r2.length; p2++)
            c2(p2);
        w(u2, o3);
        var g2 = [];
        for (p2 = 0; p2 < r2.length; p2++) {
          var v2 = u2[p2];
          void 0 === v2 ? g2[p2] = r2[p2] : v2.length > 1 ? "NOT_CNCHAR" === v2[0] ? g2[p2] = v2[1] : g2[p2] = "(" + v2.join("|") + ")" : g2[p2] = v2[0], d(o3, y.flat) && d(o3, y.tone) && (g2[p2] = P(g2[p2], true));
        }
        return d(o3, y.array) ? g2 : g2.join("");
      }
      var w = function(n2, e3) {
        g._.poly && k(n2, O), d(e3, y.first) && k(n2, b), d(e3, y.up) ? k(n2, j) : d(e3, y.low) || k(n2, z);
      };
      function k(n2, e3) {
        n2.forEach(function(r2, o3) {
          "string" != typeof r2 ? "NOT_CNCHAR" !== r2[0] && r2.forEach(function(n3, o4) {
            r2[o4] = e3(n3);
          }) : n2[o3] = e3(r2);
        });
      }
      function b(n2) {
        return n2[0];
      }
      function j(n2) {
        return n2.toUpperCase();
      }
      function z(n2) {
        return j(n2[0]) + n2.substr(1);
      }
      function O(n2) {
        return n2.toLowerCase();
      }
      function T(n2, e3, r2, o3, t3, a2) {
        var i2 = parseInt(e3[r2 + 1]), u2 = { res: n2, poly: false, isPolyWord: i2 >= 5 };
        return o3 || t3 ? (u2.isPolyWord && (i2 -= 5, o3 && (u2.poly = true)), t3 && (u2.res = _(n2, a2, i2)), u2) : u2;
      }
      function C(n2, e3) {
        var r2 = t2.spellDefault[n2];
        return !!r2 && (r2 === e3 || P(r2, true).replace(/[0-4]/, "") === e3);
      }
      var S = function(n2, e3) {
        if (e3)
          return { spell: n2 };
        for (var r2 = 0; r2 < n2.length; r2++) {
          var o3 = v.indexOf(n2[r2]);
          if (-1 !== o3)
            return { spell: n2.substr(0, r2) + "aoeiuün"[Math.floor(o3 / 4)] + n2.substr(r2 + 1), tone: o3 % 4 + 1, index: r2 + 1 };
        }
        return { spell: n2, tone: 0, index: -1 };
      };
      function _(n2, e3, r2) {
        if (0 === r2)
          return n2;
        var o3 = n2[e3], t3 = v[4 * "aoeiuün".indexOf(o3) + (r2 - 1)];
        return o3 !== t3 ? n2.replace(o3, t3) : n2;
      }
      function q(n2, e3) {
        var r2 = e3[0].split(""), o3 = [], t3 = e3.splice(1);
        for (var a2 in E2("stroke", t3), n2)
          for (var i2 = 0; i2 < r2.length; i2++)
            r2[i2] && -1 !== n2[a2].indexOf(r2[i2]) && (r2[i2] = "", o3[i2] = parseInt(a2));
        return r2.forEach(function(n3, e4) {
          n3 && (o3[e4] = 0);
        }), d(t3, y.array) ? o3 : W(o3);
      }
      var W = function(n2) {
        var e3 = 0;
        return n2.forEach(function(n3) {
          e3 += n3;
        }), e3;
      }, A = false, E2 = function(n2, e3, r2) {
        if (g.check)
          if (A)
            A = false;
          else {
            r2 && (A = true);
            for (var o3 = [], t3 = e3.length - 1; t3 >= 0; t3--) {
              var a2 = e3[t3];
              g.type[n2][a2] || (o3.push(a2), e3.splice(t3, 1));
            }
            var i2 = [], u2 = [], l2 = function(n3, r3) {
              void 0 === r3 && (r3 = i2), n3 instanceof Array ? n3.forEach(function(n4) {
                l2(n4, r3);
              }) : d(e3, n3) && r3.push(n3);
            };
            -1 === g.plugins.indexOf("trad") && (d(e3, "simple") && i2.push("simple"), d(e3, "trad") && i2.push("trad")), "spell" === n2 ? d(e3, "up") && d(e3, "low") && i2.push("low") : "stroke" === n2 ? d(e3, "order") ? (l2("array", u2), d(e3, "letter") ? (l2(["detail", "shape", "name", "count"]), l2("letter", u2)) : d(e3, "detail") ? l2(["shape", "name", "count"]) : d(e3, "shape") ? l2(["name", "count"]) : d(e3, "name") && l2(["count"])) : (l2(["detail", "shape", "name", "letter"]), l2("count", u2)) : "orderToWord" === n2 ? d(e3, "match") ? l2(["matchorder", "contain", "start"]) : d(e3, "matchorder") ? l2(["contain", "start"]) : d(e3, "contain") && l2(["start"]) : "strokeToWord" === n2 || "spellToWord" === n2 || "idiom" === n2 && (d(e3, "spell") ? l2(["stroke", "char"]) : d(e3, "stroke") ? l2(["tone", "char"]) : l2(["tone"])), N(o3, "无效", n2, e3), N(i2, "被忽略", n2, e3), N(u2, "冗余", n2, e3);
          }
      };
      function N(n2, e3, r2, o3) {
        if (n2.length > 0) {
          var t3 = "以下参数" + e3 + ":" + JSON.stringify(n2) + ";";
          "被忽略" !== e3 || "stroke" !== r2 || d(o3, "order") ? t3 += " 可选值：[" + Object.keys(g.type[r2]) + "]" : t3 += " 要启用笔顺模式必须使用 order 参数", l(t3);
        }
      }
      function P(n2, e3) {
        void 0 === e3 && (e3 = false);
        var r2 = -1 !== "01234".indexOf(n2[n2.length - 1]);
        if (!e3)
          return r2 ? I(n2, true, "low").spell : n2;
        if (r2)
          return n2;
        var o3 = I(n2, false, "low");
        return -1 !== o3.spell.indexOf("ü") && (o3.spell = o3.spell.replace("ü", "v")), r2 ? n2 : o3.spell + o3.tone;
      }
      var I = function(n2, e3, r2) {
        void 0 === e3 && (e3 = false), void 0 === r2 && (r2 = "low"), -1 !== n2.indexOf("v") && (n2 = n2.replace("v", "ü"));
        var o3, t3, a2 = n2[n2.length - 1], u2 = -1, l2 = false;
        parseInt(a2).toString() === a2 ? (n2 = n2.substr(0, n2.length - 1), u2 = (t3 = i(n2)).index, o3 = parseInt(a2), l2 = true, e3 && (n2 = _(n2, u2 - 1, o3))) : (u2 = (t3 = i(n2)).index, o3 = t3.tone, e3 || 0 === o3 || (n2 = t3.spell));
        return "low" === r2 ? n2 = n2.toLowerCase() : "up" === r2 && (n2 = n2.toUpperCase()), { spell: n2, tone: o3, index: u2, isTrans: l2 };
      };
      var R = function(n2) {
        var e3 = n2.target, r2 = n2.key, o3 = n2.value, t3 = n2.isSpell, a2 = void 0 !== t3 && t3;
        s(r2, o3, function(n3, r3) {
          n3 && r3 && (e3[n3] = a2 ? P(r3) : r3);
        });
      };
      function M(n2, e3, r2, o3, a2) {
        if (void 0 === a2 && (a2 = false), "object" != typeof r2)
          if (o3 instanceof Array)
            o3.forEach(function(o4) {
              M(n2, e3, r2, o4, true);
            });
          else {
            var i2 = I(o3), u2 = n2[i2.spell];
            if ((e3 = e3).length >= 1) {
              for (var l2 = 0; l2 < e3.length; l2++) {
                var s2 = e3[l2];
                if (s2.spell === i2.spell && s2.tone === i2.tone)
                  return;
              }
              a2 || (a2 = true);
            }
            var f3 = "" + r2 + (i2.tone + (a2 ? 5 : 0));
            if (n2[i2.spell] = u2 ? u2 + f3 : i2.index + ":" + f3, 1 === e3.length) {
              var c2 = e3[0];
              n2[c2.spell] = n2[c2.spell].replace("" + r2 + c2.tone, "" + r2 + (c2.tone + 5));
            }
            a2 && function(n3) {
              -1 === t2.info.polyWord.indexOf(n3) && (t2.info.polyWord += n3);
            }(r2);
          }
        else
          for (var p2 in r2)
            M(n2, e3[p2], p2, r2[p2]);
      }
      function D(n2, e3) {
        var r2 = x(n2, [e3, y.tone, y.poly]);
        return r2 === e3 ? [] : (-1 !== r2.indexOf("|") ? r2.substring(1, r2.length - 1).split("|") : [r2]).map(function(n3) {
          return I(n3);
        });
      }
      var J, L, H = { simple: "simple", trad: "trad", array: "array" };
      function U(n2) {
        for (var e3 = [], r2 = 1; r2 < arguments.length; r2++)
          e3[r2 - 1] = arguments[r2];
        if ("number" != typeof n2 || n2 <= 0)
          throw new Error("strokeToWord: 输入必须是正整数");
        J.checkArgs("strokeToWord", e3);
        var o3 = "", a2 = { simple: J.has(e3, H.simple), trad: J.has(e3, H.trad) };
        return a2.simple || a2.trad || (a2.simple = a2.trad = true), a2.simple && (o3 += B(n2, t2.stroke)), a2.trad && J.dict.getTradCount && (o3 += B(n2, J.dict.getTradCount())), J.has(e3, H.array) ? o3.split("") : o3;
      }
      function B(n2, e3) {
        return void 0 === e3[n2] ? "" : e3[n2];
      }
      var F = [];
      function X(n2, e3) {
        if (void 0 === e3 && (e3 = false), !e3)
          return n2.charCodeAt(0);
        var r2 = function(n3) {
          var e4 = L._.tones.indexOf(n3);
          return -1 === e4 ? -1 : F[e4];
        }(n2);
        return -1 === r2 ? n2.charCodeAt(0) : r2;
      }
      var Y, Z = function() {
        for (var n2 = 0, e3 = 0, r2 = arguments.length; e3 < r2; e3++)
          n2 += arguments[e3].length;
        var o3 = Array(n2), t3 = 0;
        for (e3 = 0; e3 < r2; e3++)
          for (var a2 = arguments[e3], i2 = 0, u2 = a2.length; i2 < u2; i2++, t3++)
            o3[t3] = a2[i2];
        return o3;
      }, $ = "tone", G = "desc";
      function K(n2) {
        Y = n2, function(n3) {
          L = n3, "aoeiuvn".split("").forEach(function(n4) {
            for (var e3 = n4.charCodeAt(0), r2 = 1; r2 <= 4; r2++)
              F.push(e3 + 0.1 * r2);
          });
        }(n2);
      }
      var Q = "more", V = "less", nn = "even";
      function en(n2, e3) {
        var r2 = ["low"];
        if (e3 && r2.push("tone"), Y.isCnChar(n2))
          return Y.spell.apply(Y, Z([n2], r2));
        try {
          return Y._.transformTone(n2, e3).spell;
        } catch (n3) {
          return console.warn(n3.message), "";
        }
      }
      function rn(n2, e3, r2) {
        if (void 0 === r2 && (r2 = false), !(n2 = en(n2, r2)))
          return Q;
        if (!(e3 = en(e3, r2)))
          return V;
        for (var o3 = 0; o3 < n2.length; o3++) {
          if (!e3[o3])
            return Q;
          var t3 = X(n2[o3], r2), a2 = X(e3[o3], r2);
          if (t3 > a2)
            return Q;
          if (t3 < a2)
            return V;
        }
        return n2.length === e3.length ? nn : V;
      }
      function on(n2, e3) {
        return "string" == typeof n2 && (n2 = Y.stroke(n2)), "string" == typeof e3 && (e3 = Y.stroke(e3)), n2 > e3 ? Q : n2 < e3 ? V : nn;
      }
      var tn = function(n2) {
        var e3 = function() {
          l("请先调用 cnchar-" + n2);
        };
        return e3.__default = true, e3;
      }, an = [];
      function un(n2) {
        return -1 === an.indexOf(n2) && (an.push(n2), true);
      }
      var ln = "";
      var sn = "object" == typeof wx$1 && "object" == typeof __wxConfig ? "miniapp" : "object" == typeof window ? "web" : "node", fn = function() {
        return (fn = Object.assign || function(n2) {
          for (var e3, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
            for (var t3 in e3 = arguments[r2])
              Object.prototype.hasOwnProperty.call(e3, t3) && (n2[t3] = e3[t3]);
          return n2;
        }).apply(this, arguments);
      }, cn = function() {
        for (var n2 = 0, e3 = 0, r2 = arguments.length; e3 < r2; e3++)
          n2 += arguments[e3].length;
        var o3 = Array(n2), t3 = 0;
        for (e3 = 0; e3 < r2; e3++)
          for (var a2 = arguments[e3], i2 = 0, u2 = a2.length; i2 < u2; i2++, t3++)
            o3[t3] = a2[i2];
        return o3;
      };
      function pn() {
        for (var n2 = [], e3 = 0; e3 < arguments.length; e3++)
          n2[e3] = arguments[e3];
        return x(t2.spell, n2);
      }
      function hn() {
        for (var n2 = [], e3 = 0; e3 < arguments.length; e3++)
          n2[e3] = arguments[e3];
        return q(t2.stroke, n2);
      }
      var dn, gn, vn, yn, mn, xn = fn(fn({ env: sn, version: "3.2.4", spell: pn, stroke: hn, check: true, _origin: { spell: pn, stroke: hn }, plugins: an, hasPlugin: function(n2) {
        return -1 !== an.indexOf(n2);
      }, use: function() {
        for (var n2 = [], e3 = 0; e3 < arguments.length; e3++)
          n2[e3] = arguments[e3];
        var r2 = m2();
        n2.forEach(function(n3) {
          var e4 = n3.pluginName, o3 = n3.install, t3 = n3.args;
          if (e4) {
            if (un(e4)) {
              var a2 = r2;
              t3 && (a2.type[e4] = t3), n3.getCnChar = function() {
                return r2;
              }, n3.installed = true, a2[e4] = n3, o3 && o3(r2);
            }
          } else
            l("plugin name is required", n3);
        });
      }, _: { arg: y, has: d, _throw: function(n2) {
        throw new Error("CnChar Error:" + n2);
      }, tones: v, setIntoJson: R, _warn: l, dealUpLowFirst: w, removeTone: S, sumStroke: W, isCnChar: h, checkArgs: E2, transformTone: I, dict: {}, mapJson: s, checkTrad: function(n2, e3) {
        if (-1 === e3.indexOf("trad") || -1 === g.plugins.indexOf("trad"))
          return n2;
        var r2 = false;
        return n2 instanceof Array && (r2 = true, n2 = n2.join("")), n2 = g.convert.tradToSimple(n2), r2 ? n2.split("") : n2;
      }, getResourceBase: function() {
        return ln;
      }, pickRandomEle: f2, shuffle: c, randomNum: p, pickRandomChar: function(n2, e3) {
        return void 0 === e3 && (e3 = 1), n2 ? f2(n2.split(""), e3).join("") : "";
      } }, type: { spell: y, stroke: { array: y.array } }, transformTone: I, isCnChar: h, compareSpell: rn, compareStroke: on, sortSpell: function(n2) {
        for (var e3 = [], r2 = 1; r2 < arguments.length; r2++)
          e3[r2 - 1] = arguments[r2];
        var o3 = false;
        "string" == typeof n2 && (n2 = n2.split(""), o3 = true);
        var t3 = -1 !== e3.indexOf($), a2 = -1 !== e3.indexOf(G), i2 = a2 ? -1 : 1, u2 = -1 * i2, l2 = n2.sort(function(n3, e4) {
          var r3 = rn(n3, e4, t3);
          return r3 === Q ? i2 : r3 === V ? u2 : 0;
        });
        return o3 ? l2.join("") : l2;
      }, sortStroke: function(n2, e3) {
        var r2 = false;
        "string" == typeof n2 && (n2 = n2.split(""), r2 = true);
        var o3 = e3 === G ? -1 : 1, t3 = -1 * o3, a2 = n2.sort(function(n3, e4) {
          var r3 = on(n3, e4);
          return r3 === Q ? o3 : r3 === V ? t3 : 0;
        });
        return r2 ? a2.join("") : a2;
      }, setSpellDefault: function(n2, e3) {
        R({ target: t2.spellDefault, key: n2, value: e3, isSpell: true });
      }, setSpell: function(n2, e3) {
        !function(n3, e4, r2) {
          var o3;
          if ("object" == typeof e4)
            for (var t3 in o3 = {}, e4)
              o3[t3] = D(n3, t3);
          else
            o3 = D(n3, e4);
          M(n3, o3, e4, r2);
        }(t2.spell, n2, e3);
      }, setStrokeCount: function(n2, e3) {
        var r2 = t2.stroke;
        s(n2, e3, function(n3, o3) {
          var t3 = q(r2, [n3]);
          if (t3 !== e3) {
            if (0 !== t3) {
              var a2 = t3.toString();
              r2[a2] = r2[a2].replace(n3, "");
            }
            r2[o3] ? r2[o3] += n3 : r2[o3] = n3;
          }
        });
      }, isPolyWord: function(n2) {
        return "" !== n2 && (n2.length > 1 && (n2 = n2[0]), !!h(n2) && -1 !== t2.info.polyWord.indexOf(n2));
      }, shapeSpell: P, hasTone: function(n2) {
        return !n2.trim().match(/^[a-zA-Z]*$/);
      }, spellToWord: function() {
        for (var n2 = [], e3 = 0; e3 < arguments.length; e3++)
          n2[e3] = arguments[e3];
        var r2 = n2[0].toLowerCase();
        if ("string" != typeof r2)
          throw new Error("spellToWord: 输入必须是字符串");
        var i2 = o2.transformTone(r2, false), u2 = n2.splice(1);
        o2.checkArgs("spellToWord", u2);
        var l2 = { simple: o2.has(u2, a.simple), trad: o2.has(u2, a.trad), poly: o2.has(u2, a.poly), alltone: o2.has(u2, a.alltone) };
        l2.simple || l2.trad || (l2.simple = l2.trad = true);
        for (var s2 = "", f3 = t2.spell[i2.spell].substr(2), c2 = 0; c2 < f3.length; c2 += 2) {
          var p2 = f3[c2], h2 = parseInt(f3[c2 + 1]), d2 = h2 > 4;
          d2 && (h2 -= 5), -1 !== s2.indexOf(p2) || !l2.alltone && h2 !== i2.tone || l2.poly && !d2 || (s2 += p2);
        }
        if (l2.trad && o2.convert) {
          var g2 = "";
          for (c2 = 0; c2 < s2.length; c2++) {
            var v2 = o2.convert.simpleToTrad(s2[c2]);
            v2 !== s2[c2] && (g2 += v2);
          }
          l2.simple ? s2 += g2 : s2 = g2;
        }
        return o2.has(u2, a.array) ? s2.split("") : s2;
      }, strokeToWord: U, spellInfo: i, setResourceBase: function(n2) {
        var e3 = this;
        ln = n2, this.plugins.forEach(function(n3) {
          var r2, o3 = e3[n3];
          o3 && (null === (r2 = o3._refreshResource) || void 0 === r2 || r2.call(o3, e3));
        });
      } }, (dn = tn("draw"), gn = tn("idiom"), vn = tn("radical"), yn = tn("xhy"), "object" == typeof window && (window.CncharIdiom = gn, window.CncharDraw = dn, window.CncharRadical = vn, window.CncharXHY = yn), { idiom: gn, draw: dn, setOrder: tn("order"), orderToWord: tn("order"), setPolyPhrase: tn("poly"), radical: vn, convert: { type: { trad: "trad", simple: "simple", spark: "spark" }, simpleToSpark: function() {
        return tn("radical"), "";
      }, simpleToTrad: function() {
        return tn("radical"), "";
      }, sparkToSimple: function() {
        return tn("radical"), "";
      }, sparkToTrad: function() {
        return tn("radical"), "";
      }, tradToSimple: function() {
        return tn("radical"), "";
      }, tradToSpark: function() {
        return tn("radical"), "";
      } }, trad: tn("trad"), order: tn("order"), xhy: yn, words: tn("words"), explain: tn("explain"), voice: tn("voice"), code: tn("code"), input: tn("input"), random: tn("random"), info: tn("info"), poly: tn("poly"), name: tn("name") })), { pluginName: "cnchar", dict: t2 });
      String.prototype.spell = function() {
        for (var n2 = [], e3 = 0; e3 < arguments.length; e3++)
          n2[e3] = arguments[e3];
        return pn.apply(void 0, cn([this], n2));
      }, String.prototype.stroke = function() {
        for (var n2 = [], e3 = 0; e3 < arguments.length; e3++)
          n2[e3] = arguments[e3];
        return hn.apply(void 0, cn([this], n2));
      }, g = xn, o2 = (mn = xn)._, i.tones = o2.tones.split(""), i.initials = t2.info.initial, mn.spellInfo = i, mn.type.spellToWord = a, function(n2) {
        n2.strokeToWord = U, n2.type.strokeToWord = H, J = n2._;
      }(xn), K(xn), "undefined" != typeof window && (window.cnchar = window.CnChar = xn);
      e2.default = xn;
    }]).default;
  });
})(cnchar_min);
const cnchar = /* @__PURE__ */ getDefaultExportFromCjs(cnchar_minExports);
var cnchar_trad_minExports = {};
var cnchar_trad_min = {
  get exports() {
    return cnchar_trad_minExports;
  },
  set exports(v) {
    cnchar_trad_minExports = v;
  }
};
(function(module2, exports2) {
  !function(j, f2) {
    module2.exports = f2();
  }(commonjsGlobal, function() {
    return function(j) {
      var f2 = {};
      function c(k) {
        if (f2[k])
          return f2[k].exports;
        var s = f2[k] = { i: k, l: false, exports: {} };
        return j[k].call(s.exports, s, s.exports, c), s.l = true, s.exports;
      }
      return c.m = j, c.c = f2, c.d = function(j2, f3, k) {
        c.o(j2, f3) || Object.defineProperty(j2, f3, { enumerable: true, get: k });
      }, c.r = function(j2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(j2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(j2, "__esModule", { value: true });
      }, c.t = function(j2, f3) {
        if (1 & f3 && (j2 = c(j2)), 8 & f3)
          return j2;
        if (4 & f3 && "object" == typeof j2 && j2 && j2.__esModule)
          return j2;
        var k = /* @__PURE__ */ Object.create(null);
        if (c.r(k), Object.defineProperty(k, "default", { enumerable: true, value: j2 }), 2 & f3 && "string" != typeof j2)
          for (var s in j2)
            c.d(k, s, function(f4) {
              return j2[f4];
            }.bind(null, s));
        return k;
      }, c.n = function(j2) {
        var f3 = j2 && j2.__esModule ? function() {
          return j2.default;
        } : function() {
          return j2;
        };
        return c.d(f3, "a", f3), f3;
      }, c.o = function(j2, f3) {
        return Object.prototype.hasOwnProperty.call(j2, f3);
      }, c.p = "", c(c.s = 8);
    }([function(j) {
      j.exports = JSON.parse('{"0":"","1":"","2":"","3":"三","4":"戶內勻弔","5":"冊処氹囘氾","6":"丟扡汙兇伕亙攷阬阯迆吒","7":"貝別車沈沖囪兌夾見決呂沒刪禿吳災妝壯佔佈佇沍吶囯佘","8":"並長東兒岡矽糾屆況來兩侖門妳臥協亞軋爭狀廼於昇戔郃彿咼牀拋羋虯苧姍歿卹玨秈靣","9":"訂飛風負訃軌紅後級計紀勁荊軍侶卻紉陝屍帥韋俠洶彥頁約則柵貞陣茲迴為厛閂衹厙姦紆紂紇紈釓釔貟祐剋剄奐侷係陘姪兗剎巹牴枴盃洩郤郟俁坰恆凃祕垵炤耑","10":"剝狽畢財倉陳恥純島釘凍鬥紡紛剛個宮貢剮華記莢莖徑晉庫倆連陸倫馬脈們畝納紐豈氣訖殺紗閃師時書孫討條紋烏務峽狹挾脅軒訓訊陰郵娛員悅這針紙莊紥芻訌訕訐飢倣倀託唚唄垻峴紕紜紓莧軔釗釕釙珮哢倖弳涇眎玆脩浹毧唕皰涖旂","11":"敗絆閉貶缽參側産處從帶釣頂動隊訛釩販訪婦崗夠貫規國過貨堅將階淨進訣萊淚涼淩婁鹵掄淪麥覓鳥貧淒啓牽釺淺強氫頃區軟掃紹設紳視術訟貪屜烴脫偉問渦習細現鄉許敘啞訝陽異魚責紮斬張帳偵掙猙執終晝專著組乾產眾偽釦捫硃詎訥閆圇娬悵桿萇厠捲匭週崠絃唸崐梘訢梟紲紺紱紼絀紿捨軛埰鄆釷釤釵釧敍偺埡堊婭崢掛梔脛隉悽脣堝媧崍徠梱淶萵袞偸勗啗菴淥釬畧毬眥訦隄琍彫","12":"綁報備筆補殘廁測場鈔創詞湊達貸單盜棟鈍惡貳發琺飯費馮鈣稈臯給鈎貴賀壺畫換喚渙黃揮葷渾禍極幾間堿揀減絞痙廄傑結絕鈞開凱殼塊勞祿絡買貿悶鈉惱甯鈕評棲棄喬欽韌絨閏傘喪腎勝稅順絲訴筍湯貼統萬違圍爲葦無閑廂項虛須絢尋硯揚堯爺葉壹飲喲詠湧猶遊馭淵雲鄖隕運棗詐棧脹診幀衆軸貯鄒詛裡詆厤鉅傖喫嵗粬鄔堦躰睏媯嵐幃溈詁証訶詘詔詒閔閎閌靭飪飩飭飫剴喦棖註黽勛堖復惻惲湞硨絝絎絳腖揹葒葯葤覘貰賁貺貽軻軲軤軹軼軫軺鈈鈑鈦鈐鈁鈥鈧鈄鈀頇傢傚棬椏氬畱絛雋愜瑯硤牋腡啣崳蒐湣硶琯痠","13":"愛奧頒飽鉑蒼滄詫腸誠馳傳誕當搗滌遞電叠頓煩楓該蓋幹溝詭號嘩話煥毀賄會彙際賈鉀腳較節經絹僅誇裏蓮漣煉賃鈴虜賂亂媽嗎鉚夢滅腦農鉛鉗嗆搶傾傷聖獅詩勢飾試飼頌肅綏歲損塗蛻馱頑溫窩嗚塢廈羨詳詢馴遜煙楊搖遙業義詣蔭傭鈾與預園圓遠粵暈載賊閘債盞睜腫誅裝資匯傴鳧獁僉鉋徬愾愴煬暘鳩搆遝煒瑋骯塋煢誆誄詿詼詰詵詮詬諍詡牐閙飴禕嗶塏愷瑉猻竪蓽蓀廕跡嫋塚準嗩塤塒蓆暉慄楨琿禎綆筧綃綉綈蓧蒔蒓蜆貲賅賍輊軾輇輅鈺鈷鉦鈸鈳鉆鈽鉬鉭鉄鉕鈿鉞鈰鉈鉉鉍鈹鈮頊頎頏傯僂嗇摑瘂覜勣羥剷媼慍搇稜溼睞蛺煇耡鉲勦尲煖煆痺稟酧鄘搾","14":"幣賓餅駁蔔慚慘摻嘗暢塵稱綢綽蔥鄲鄧墊對奪墮爾餌罰閥瘋鳳輔複趕綱閣鉻構慣廣閨滾漢閡滬劃瘓誨夥監箋漸蔣鉸僥餃稭誡緊盡摳寬厲鄰領摟鋁屢綠綸瑪滿麽綿閩鳴銘瘧嘔漚頗齊塹槍僑寢輕認榮賒滲蝕實適壽說碩誦隨瑣態銅圖團窪網維僞聞撾蝸誣誤銑銜緒厭瘍養瑤銥銀熒誘漁語獄劄嶄綻漲趙鄭滯種墜綴漬綜寧塼厰麼僕勱嘆関薌滷獃嫗匲嶇誌慪摺摶槓榪蓯製凴徴戧熗碭綫膁蔦鳶慟暱滸碸滎犖誚誑誥誒颮颯餉滻餄餎嘜慳輓榿慇樺燁貍僨匱嘖幗綵幘愨摜殞璉皸槃緋緔綾綺綬綹緄綣綳綰綞緇蔆覡賕賑輒銬銪鋮鉺銱鋣銠銦鋌銓銖銩鉿錚銚銫銃銣銨蔴僳嘍嶁巰摣箠槨漵箏緍蔞僱慴瘉氳膃戩鞀髩","15":"皚罷輩鋇編標撥層廠徹撐遲齒廚鋤瘡賜撣憚彈蕩導敵締調賭緞餓範誹廢墳憤鋒膚撫賦鞏劊輥緩輝緝價駕緘儉踐賤劍澗漿槳獎膠澆嬌駒劇潔課褲儈潰撈澇樂憐練輛諒遼凜劉樓魯慮輪論碼罵賣邁貓冪緬廟憫撓鬧餒撚諾歐毆盤賠噴潑撲鋪遷潛請慶窮確熱銳潤賞審駛樞豎數誰慫撻談歎銻駝橢緯衛蕪蝦賢險線銷寫鋅噓選鴉樣窯遺儀億誼瑩憂緣閱暫賬摯幟質皺豬諸駐樁諄銼嘰戯儅餘嘸墰嶴廡憮蕓穀鄴敺儂劌颳噝樅氂甌蝨槼鄶駔駙駘駟噅噠嘵嬈嶠縂撟殤潯衚蕘蕎蕁蕒鴆鴇頫嘮嫺嶗噁曄潿蕕諏諛諑諉諗諂誶閫閬餑嬋慙慼樑慾澠墝賚鋏麩璡憒槧毿蝟緙緗緹緲緱緶緦縋潟蕆醃蕢褳賫賡輦賧輞輟輜舖鋱鋥鋰鋯銹鋨鋶錒鋟鋃鋦靚頡頦頜潁魷魴翬擕潷辤廝瘞篋踡鋂澂鋜","16":"辦鮑憊艙熾醜錘錯擔擋燈澱諜錠獨噸奮縫諷輻縛鋼館龜鍋駭橫還謊諱獲機積輯薊劑頰撿薦鍵餞頸靜舉據鋸錦墾窺賴勵曆龍盧擄錄駱螞瞞錨錳謎謀膩濃頻憑樸錢薔橋親薩篩燒輸樹壇燙縧頭頹鴕謂錫鍁縣餡憲蕭曉嘯諧興學勳鴨閹閻諺鴦頤彜憶隱螢營穎擁踴嶼鴛擇澤戰鍺築磚錐濁鄺儘璣儕嶧懌曇霑燉麅縐餚錶諢鍆隷儔鬨噦噲噥薑澮獪瞘篤薈螘駢橈獫緻薟賮鴣鴝鴟鴞燜縈謔謁諫諼諤諳諦諮諞諭醖閾閿閶閽閼舘餛諝餜儐殫燄禪篳螄諡錸黿縉嬡噯磧穌篠縟縝縞縭縊縑靦懞簑蕷覦輳鍩錁錛鋻錆鍀錕鍃錮錇錈錟錙頷鮁鮒鮃鮎鮐墻嬙糢橰瘺窶镟篛錼骾鮌廩懍燐","17":"襖幫謗繃斃濱擯燦償騁儲聰膽檔點鍍鍛糞擱鴿購韓鴻環燴擊績擠濟艱檢講矯舊駿顆懇虧擴闊藍闌濫禮隸聯斂臉療臨嶺簍縷鎂彌擬獰擰濘膿謙牆鍬趨賽澀聲濕聳雖縮擡濤謄濰甕戲轄嚇鮮謝壓謠嬰應優輿禦轅嶽醞鍘齋氈輾蟄擲鍾謅燭賺贅總縱嬭嚮壙獷襍縴餳歟霛磯闈璵嚀闆癘邇擧嚌檉櫛澩薺盪藎濜幬檜濬膾覬齔殮凟蹌鴰鴯鵂礄褻賸餵嶸匵癆癇縶襇謨謖謐闃濶餷闋颶餿餽嬪轂谿癉蹕曖縯璦簀糝縹縵縲繆繅蟈覯賻鍥鍇鍔鍤鍫鍶鎪鍰鎄鮫鮚鮭鮞鮪襆屨檣餱耬螻蟎魎檁嬤繈臒","18":"翺擺鎊邊蟬蟲雛礎闖叢竄禱斷鵝額豐鎬歸櫃穢雞繭簡檻濺醬鵑謹燼曠壘離鯉鏈糧獵餾隴濾謾謬攆聶鎳檸臍騎翹竅瓊軀擾繞繕嬸繩雙擻鎖題鎢霧瀉顔藥醫藝蠅雜鎮織職轉蹤鎸鼕檯謳毉癤餼鬆濼檾蟣釐懟懕瀏禰鞦蠆闓贄騐嚙瀋燾襠鎧鏵鎩鬩騏騍騅櫂瞼繢蟯襝觴蹠鵓鵒鵜鵠鵐攄霤瀅耮鎣謫闔闐闕韙韞饃颼饈檳殯瀦燻簞甖臏鯗嚕擼擷璿簣繒繚聵覲覰賾鏌鎘轆鎦鎰鎵顓顏顎鯇鯊鯽鎔穡藪懣蹣繙燿","19":"藹礙癟瀕鏟懲癡寵疇櫥辭顛犢關懷壞繪譏繳轎鯨鏡礦臘懶類麗瀝簾嚨壟攏蘆廬羅饅難龐鵬騙蘋譜簽勸鵲騷識獸爍蘇獺譚襪穩蠍繡嚴癢蟻繹願蘊韻贊贈轍證璽聼嚦壢藶隴壚瀘嚥櫟艤覈礪躉鶇厴鏇蟶牘鏗騗騖騭曡蹺醯穨鵪鵯鵡鶓鶉躂櫧瀠瀟簫羆藺譖譙譎鏘闞饉韜鏤譆櫫蘄襤觶嬾瀨氌櫞櫓繾繰繮繯轔鏨贋鏢鏜鏍鏑鏞鏝顙鏃鯖鯤鯫鯢鯛鯪鯧鯝鯡鯔鯴鯰贇簷羶騣韝","20":"寶辮攙闡襯籌觸黨礬護饑繼艦競覺饋攔籃蘭瀾礫鐐齡爐飄譴饒鰓贍釋騰犧鹹獻響懸議譯贏譽竈齣懺懽纊嚨壟寵龐櫪瀧蘢騶櫨臚鐘闥驊孃癥蠔獼糲聹蠣鐃鐋嚳蠐鐒鐧饗櫬櫸竇繽驀騮驁騫騸齙齟齠嚶攖瀲蘞衊鐨鶘鶚鶿鶻鶥鶩蠑譫饌飃饊譟顢鹺鐔蘚鐝鐓鏷鐠鐙鏹鰌鰈鰒鯿鰐鰉鰠髏","21":"辯纏躊顧鶴轟歡殲懼巋蠟欄覽爛鐳鐮騾齧驅權攝懾屬鐵囂攜鏽續櫻躍贓髒囈灃攏儸襯儷儼櫳瓏癧朧酈臟鶯鐸囀櫺纍鐺驂儺囁灄灕蘺闢躋驃驄齜齦攛瓔纈躑韃鞽鰱鰷鰣鷂鶼斕癮飈飆嚻癩籐鑊鐿顥鰲鰭鰩鰥鰨儹","22":"顫疊讀龔鑒驕驚聾籠巒孿蘿邏鷗竊灑贖攤灘體聽彎襲癬攢鑄囌糴孌轢驍礱邐玀艫鷙囉儻覿躒譾躚轡籜霽躓鑌驏鰹齪齬癭鷚鷓囅鑔躕籟鰻鰵鱈鱉鰳鰾鱅鼴","23":"變鼈蠱攪戀鱗攣黴曬纖顯驗纓癰驛轤籥欒鑠鷥龕籠聾襲龔欏鷳鱘靨饜魘齏讌鑥鱝鷦鷯鷲鷸讎巔髖髕鑣瓚顬鱖鱓鱒黲","24":"壩蠶讒贛觀鹼讕攬籬靈釀齲讓癱鹽鷹驟囑韆艷籩靂齶鱟黌籪羈齷鷺鸌讖靄灝癲顰鼉鱧","25":"饞躥顱籮蠻廳灣鑲鑰糶臠欖鱭躡鑭韉纘齇","26":"驢灤鑷顴釁矚讚鬮釅釃鑹驥躪趲躦","27":"纜鑼鑽鸕讜灧鱸鑾讞顳驤黷","28":"豔鑿鸚鸛戇","29":"鬱驪","30":"鸞鸝鱺饢","31":"","32":"籲"}');
    }, function(j) {
      j.exports = JSON.parse('{"皚":"sfcjjfbfjfcjksj","藹":"jffkjjjfcjfcjjsrskb","礙":"jsfcjsusjjskekefjsl","愛":"skksdedykksel","翺":"sfcjjjkiskjfrkirki","襖":"kefsksfcksjfskjsl","奧":"sfcsksjfskjsl","壩":"jfijdefkkkkjffjfcjjfsrjj","罷":"fcffjnkfrjjsusu","擺":"jgifcffjnkfrjjsusu","敗":"fcjjjsksjsl","頒":"skrsjsfcjjjsk","辦":"kjksjjsrskjksjjf","絆":"nnkdkkksjjf","幫":"jfjjfijgksfcjjfrf","綁":"nnkdkkjjjswf","鎊":"skjjfksikjksdekjrs","謗":"kjjjfcjkjksdekjrs","剝":"nejgkiskfg","飽":"skkcjjhksrcju","寶":"kdejjfisjjfbffcjjjsk","報":"jfjksjjfrfel","鮑":"sefcjfjdkkksrcju","輩":"fjjjfjjjjfcjjjf","貝":"fcjjjsk","鋇":"skjjfksifcjjjsk","狽":"stsfcjjjsk","備":"sfjffjsfrjjf","憊":"sfjffjsfrjjfdykk","繃":"nnkdkkfbfsrjjsrjj","筆":"sjksjkcjjjjf","畢":"fcjjjffjjf","斃":"ksfcfsksjsljseksu","幣":"ksfcfsksjslfrf","閉":"cjjffrjjjgs","邊":"sfcjjjkdeskkjrskal","編":"nnkdkkkcjsfrjff","貶":"fcjjjskskel","變":"kjjjfcjnnkdkknnkdkksjsl","辯":"kjksjjskjjjfcjkjksjjf","辮":"kjksjjsnnkgskkjksjjf","標":"jfskjfcffjjjgsk","鼈":"ksfcfsksjslfcjfcjjjujbj","別":"fcjrsfg","癟":"kjskisfcjjjsljfrjff","瀕":"kkifjfjfssjsfcjjjsk","濱":"kkikdejfssfcjjjsk","賓":"kdejfssfcjjjsk","擯":"jgikdejfssfcjjjsk","餅":"skkcjjhkksjjsf","並":"ksjffksj","撥":"jgieksslcjzsvek","缽":"sjjfbfjfslj","鉑":"skjjfksisfcjj","駁":"jfjjfrdkkksksl","蔔":"jffsrjfcjfcjfj","補":"kefskjfrjjfk","財":"fcjjjskjgs","參":"nknknkslsss","蠶":"jbshjbsufcjjfcjfjkfcjfjk","殘":"jsekjyskjysk","慚":"dkfjfcjjjfssjf","慘":"dkfnknknkslsss","燦":"dsskfjsekekksjfsl","蒼":"jffslkcjjsfcj","艙":"ssrkjkslkcjjsfcj","倉":"slkcjjsfcj","滄":"kkislkcjjsfcj","廁":"kjsfcjjjskfg","側":"sffcjjjskfg","冊":"frjff","測":"kkifcjjjskfg","層":"cjsksfcfksjfcjj","詫":"kjjjfcjkdesju","攙":"jgisefcjjhsusefcjsuk","摻":"jginknknkslsss","蟬":"fcjfjkfcjfcjfcjjjf","饞":"skkcjjhksefcjjhsusefcjsuk","讒":"kjjjfcjsefcjjhsusefcjsuk","纏":"nnkdkkkjsfcjjfjjskjfj","鏟":"skjjfksikjksjssjjfj","産":"kjksjssjjfj","闡":"cjjffrjjfcjfcjfcjjjf","顫":"kjfcfcjjfcjjijsfcjjjsk","場":"jfifcjjjsrss","嘗":"fksdefcjsufcjj","長":"jfjjjhsl","償":"sffksdefcjfcjjjsk","腸":"srjjfcjjjsrss","廠":"kjsfksfrfcjsjsl","暢":"fcjjffcjjjsrss","鈔":"skjjfksifdks","車":"jfcjjjf","徹":"ssfkjnkfrjjsjsl","塵":"kjscffjjhsujfj","沈":"kkidesu","陳":"wfjfcjjfsl","襯":"kefskkjksjjgskfcjjsu","撐":"jgifksdefcjjngs","稱":"sjfskskksfrfjj","懲":"ssffbfjjjfjsjsldykk","誠":"kjjjfcjjsrysk","騁":"jfjjfrdkkkfcjfjjz","癡":"kjskisusjjskekefjsl","遲":"cjsfkisksjjfkal","馳":"jfjjfrdkkkrfu","恥":"jffjjidykk","齒":"fjfjskskjskskbf","熾":"dsskkjksjfcjjysk","沖":"kkifcjf","蟲":"fcjfjkfcjfjkfcjfjk","寵":"kdekjksjfrjjjxjujjj","疇":"fcjfjjfjejfjjfcjjgk","躊":"fcjfjfijfjejfjjfcjjgk","籌":"sjksjkjfjejfjjfcjjgk","綢":"nnkdkksrjfjfcj","醜":"jfcsbjjsfcjjsunk","櫥":"jfskkjsjfjfcjksijgk","廚":"kjsjfjfcjksijgk","鋤":"skjjfksifcjjirs","雛":"srbfssrbfssfkjjjfj","礎":"jsfcjjfskjfslefjsl","儲":"sfkjjjfcjjfjsfcjj","觸":"sesrjjffcffjsrfcjfjk","處":"fjesjuselso","傳":"sfjfcjjfjkjgk","瘡":"kjskislkcjjsfcj","闖":"cjjffrjjjfjjfrdkkk","創":"skkcjjsfcjfg","錘":"skjjfksisjfjffjj","純":"nnkdkkjbfu","綽":"nnkdkkfjfcjjjf","辭":"skksekfrnkekkjksjjf","詞":"kjjjfcjrjfcj","賜":"fcjjjskfcjjsrss","聰":"jffjjisfcsekjdykk","蔥":"jffsfcsekjdykk","囪":"sfcsskj","從":"ssfskskfjsl","叢":"ffksjksjjfjffjjiel","湊":"kkijjjsljjsk","躥":"fcjfjfikdesksfjcjjhkkhkky","竄":"kdesksfjcjjhkkhkky","錯":"skjjfksijffjfcjj","達":"jfjksjjjfkal","帶":"jffjsudefrf","貸":"sfjykfcjjjsk","擔":"jgisejsskkjjjfcj","單":"fcjfcjfcjjjf","鄲":"fcjfcjfcjjjfwf","撣":"jgifcjfcjfcjjjf","膽":"srjjsejsskkjjjfcj","憚":"dkffcjfcjfcjjjf","誕":"kjjjfcjsfjbal","彈":"cjzfcjfcjfcjjjf","當":"fksdefcjfcjfj","擋":"jgifksdefcjfcjfj","黨":"fksdefcjfcksjfjjdkkk","蕩":"jffkkifcjjjsrss","檔":"jfskfksdefcjfcjfj","搗":"jgisfcjjjrfbf","島":"sfcjjjrfbf","禱":"kefkjfjejfjjfcjjgk","導":"ksjsfcjjjkaljgk","盜":"kkiseslfcffj","燈":"dsskekssljfcjksj","鄧":"eksskjfcjksiwf","敵":"kjksfrjffcjsjsl","滌":"kkisffseljgsk","遞":"ssfjesjusokal","締":"nnkdkkkjksdefrf","顛":"jffcjjjjskjsfcjjjsk","點":"fcksjfjidkkkfjfcj","墊":"jfjksjjfsokjfj","電":"jdefkkkkfcjju","澱":"kkicjsjffjsksvel","釣":"skjjfksisrk","調":"kjjjfcjsrjfjfcj","叠":"ekekekdefcjjj","諜":"kjjjfcjjffjbjfsl","疊":"fcjfjfcjfjfcjfjdefcjjj","釘":"skjjfksijg","頂":"jgjsfcjjjsk","錠":"skjjfksikdejfjsl","訂":"kjjjfcjjg","丟":"jjfjnk","東":"jfcjjfsl","動":"sjfcjjjfirs","棟":"jfskjfcjjfsl","凍":"kijfcjjfsl","鬥":"jjfjfjjfjg","犢":"sjfijfjfcffjfcjjjsk","獨":"stsfcffjsrfcjfjk","讀":"kjjjfcjjfjfcffjfcjjjsk","賭":"fcjjjskjfjsfcjj","鍍":"skjjfksikjsjffjel","鍛":"skjjfksisfjjisvel","斷":"nnknnkjnnknnkbssjf","緞":"nnkdkksfjjisvel","兌":"slfcjsu","隊":"wfksjstsssl","對":"ffksjksjjfijgk","噸":"fcjjbfhjsfcjjjsk","頓":"jbfhjsfcjjjsk","鈍":"skjjfksijbfu","奪":"jslsfkjjjfjjgk","墮":"wfjsjfjfrjjjfj","鵝":"sjgiysksfcjjjrdkkk","額":"kdesekfcjjsfcjjjsk","訛":"kjjjfcjsfsu","惡":"jfjxxjfjdykk","餓":"skkcjjhksjgiysk","兒":"sfjcjjsu","爾":"jskfrfsksksksk","餌":"skkcjjhkjffjjj","貳":"jjjfcjjjskyk","發":"eksslcjzsvek","罰":"fcffjkjjjfcjfg","閥":"cjjffrjjsfjysk","琺":"jjfikkijfjnk","礬":"jfskskskjfskjsljsfcj","釩":"skjjfksisok","煩":"dsskjsfcjjjsk","範":"sjksjkjfcjjjfru","販":"fcjjjskssel","飯":"skkcjjhkssel","訪":"kjjjfcjkjrs","紡":"nnkdkkkjrs","飛":"osksosksf","誹":"kjjjfcjfjjjfjjj","廢":"kjseksslcjzsvek","費":"cjzsffcjjjsk","紛":"nnkdkkslrs","墳":"jfijfjfffcjjjsk","奮":"jslsfkjjjfjfcjfj","憤":"dkfjfjfffcjjjsk","糞":"ksjfslfcjfjjffjsk","豐":"jjjffjjjfbfjfcjksj","楓":"jfsksosfcjfjk","鋒":"skjjfksiseljjjf","風":"sosfcjfjk","瘋":"kjskisosfcjfjk","馮":"kijfjjfrdkkk","縫":"nnkdkkseljjjfkal","諷":"kjjjfcjsosfcjfjk","鳳":"sojsfcjjjrdkkk","膚":"fjesjufcjfjfrjj","輻":"jfcjjjfjfcjfcjfj","撫":"jgisjjffffjdkkk","輔":"jfcjjjfjfrjjfk","賦":"fcjjjskjjfjfiyk","複":"kefsksjfcjjsel","負":"sefcjjjsk","訃":"kjjjfcjfk","婦":"msjcjjdefrf","縛":"nnkdkkjfcjjfkjgk","該":"kjjjfcjkjnssk","鈣":"skjjfksijfjz","蓋":"jffjfjnkfcffj","幹":"jffcjjjfsljjf","趕":"jfjfjslfcjjjjf","稈":"sjfskfcjjjjf","贛":"kjksjfcjjjfseljfjfcjjjsk","岡":"frksjfbf","剛":"frksjfbffg","鋼":"skjjfksifrksjfbf","綱":"nnkdkkfrksjfbf","崗":"fbffrksjfbf","臯":"sfcjjjkiskjf","鎬":"skjjfksikjfcjfrfcj","擱":"jgicjjffrjjselfcj","鴿":"skjfcjsfcjjjrdkkk","閣":"cjjffrjjselfcj","鉻":"skjjfksiselfcj","個":"sffcjffcjj","給":"nnkdkksljfcj","龔":"kjksjfrjjjxjujjjjffjsk","宮":"kdefcjsfcj","鞏":"jfisokjffjfcjjf","貢":"jfjfcjjjsk","鈎":"skjjfksisrnk","溝":"kkijjffjfrfjj","構":"jfskjjffjfrfjj","購":"fcjjjskjjffjfrfjj","夠":"sekseksrfcj","蠱":"fcjfjkfcjfjkfcjfjkfcffj","顧":"kcjssfkjjjfjjsfcjjjsk","剮":"fccfrfcjfg","關":"cjjffrjjnnknnkbsfjf","觀":"jfffcjfcjsfkjjjfjfcjjjsu","館":"skkcjjhkkdefcjcj","慣":"dkfbcfjfcjjjsk","貫":"bcfjfcjjjsk","廣":"kjsjffjfcjfjsk","規":"jjskfcjjjsu","矽":"jsfcjsek","歸":"sfcjcjfjficjjdefrf","龜":"sfcjfcskjucjjcjj","閨":"cjjffrjjjfjjfj","軌":"jfcjjjfso","詭":"kjjjfcjsejsru","櫃":"jfskjfcjfjfcjjjskb","貴":"fcjfjfcjjjsk","劊":"skjfcfksjfcjjfg","輥":"jfcjjjffcjjjhsu","滾":"kkikjskfcjshsl","鍋":"skjjfksifccfrfcj","國":"fcjfcjiyskj","過":"fccfrfcjkal","駭":"jfjjfrdkkkkjnssk","韓":"jffcjjjfcfjfcjjnf","漢":"kkijffjfcjjjsl","號":"fcjjzfjesjuso","閡":"cjjffrjjkjnssk","鶴":"desfkjjjfjsfcjjjrdkkk","賀":"rsfcjfcjjjsk","橫":"jfskjffjjfcjfjsk","轟":"jfcjjjfjfcjjjfjfcjjjf","鴻":"kkijfisfcjjjrdkkk","紅":"nnkdkkjfj","後":"ssfnnksel","壺":"jfjdefjxxjfj","護":"kjjjfcjjffsfkjjjfjel","滬":"kkikcjsfcjcfju","戶":"sscj","嘩":"fcjjffjjffjjf","華":"jffjjffjjf","畫":"cjjjfjfcjfjj","劃":"cjjjfjfcjfjifg","話":"kjjjfcjsjffcj","懷":"dkfkjfcffjfkiskshsl","壞":"jfikjfcffjfkiskshsl","歡":"jfffcjfcjsfkjjjfjsesl","環":"jjfifcffjjfcjshsl","還":"fcffjjfcjshskkal","緩":"nnkdkkskksjjsel","換":"jgisefcskjsl","喚":"fcjsefcskjsl","瘓":"kjskisefcskjsl","煥":"dssksefcskjsl","渙":"kkisefcskjsl","黃":"jffjjfcjfjsk","謊":"kjjjfcjjffkjbsfu","揮":"jgidejfcjjjf","輝":"fksjshdejfcjjjf","毀":"sfjcjjjfisvel","賄":"fcjjjskjsfrjj","穢":"sjfskfjfjjsjfssysk","會":"sljfcfksjfcjj","燴":"dssksljfcfksjfcjj","彙":"nejdefcjjjfsl","諱":"kjjjfcjcfjfcjjnf","誨":"kjjjfcjsjbrkjk","繪":"nnkdkksljfcfksjfcjj","葷":"jffdejfcjjjf","渾":"kkidejfcjjjf","夥":"fcjjjfskseksek","獲":"stsjffsfkjjjfjel","貨":"sfsufcjjjsk","禍":"kefkfccfrfcj","擊":"jfcjjjfbfsvelsjjg","機":"jfsknnknnkjskysk","積":"sjfskjjfjfcjjjsk","饑":"skkcjjhknnknnkjskysk","譏":"kjjjfcjnnknnkjskysk","雞":"skksnnkjsksfkjjjfj","績":"nnkdkkjjfjfcjjjsk","緝":"nnkdkkfcjjffjjj","極":"jfskegfcjekj","輯":"jfcjjjffcjjffjjj","級":"nnkdkksal","擠":"jgikjksfrsshlsfjj","幾":"nnknnkjskysk","薊":"jffsefcjfjdkkkfg","劑":"kjksfrsshlsfjjfg","濟":"kkikjksfrsshlsfjj","計":"kjjjfcjjf","記":"kjjjfcjcju","際":"wfsekkeljjgsk","繼":"nnkdkknnknnkjnnknnkb","紀":"nnkdkkcju","夾":"jsksksl","莢":"jffjsksksl","頰":"jskskskjsfcjjjsk","賈":"jfcffjfcjjjsk","鉀":"skjjfksifcjjf","價":"sfjfcffjfcjjjsk","駕":"rsfcjjfjjfrdkkk","殲":"jsekskskjfjjjfjjjiysk","監":"jfcjfbsjkfcffj","堅":"jfcjfbeljfj","箋":"sjksjkjyskjysk","間":"cjjffrjjfcjj","艱":"jffjfcjjjskcjjhsl","緘":"nnkdkkjsjfcjysk","繭":"jfffrfnnkdkkfcjfjk","檢":"jfsksljfcjfcjsksk","堿":"jfijsjfcjysk","鹼":"fjfcskkkkkjsljfcjfcjsksk","揀":"jgijfcksjfsl","撿":"jgisljfcjfcjsksk","簡":"sjksjkcjjffrjjfcjj","儉":"sfsljfcjfcjsksk","減":"kkijsjfcjysk","薦":"jffkjscffjjzdkkk","檻":"jfskjfcjfbsjkfcffj","鑒":"jfcjfbsjkfcffjsljjfksj","踐":"fcjfjfijyskjysk","賤":"fcjjjskjyskjysk","見":"fcjjjsu","鍵":"skjjfksicjjjjfal","艦":"ssrkjkjfcjfbsjkfcffj","劍":"skjfcjfcjskskfg","餞":"skkcjjhkjyskjysk","漸":"kkijfcjjjfssjf","濺":"kkifcjjjskjyskjysk","澗":"kkicjjffrjjfcjj","將":"bfjssekkjgk","漿":"bfjssekkjgkgesl","蔣":"jffbfjssekkjgk","槳":"bfjssekkjgkjfsl","獎":"bfjssekkjgkjslk","講":"kjjjfcjjjffjfrfjj","醬":"bfjssekkjgkjfcsbjj","膠":"srjjckickislsss","澆":"kkijfjjfijfjjsu","驕":"jfjjfrdkkksjslfcjfrfcj","嬌":"msjsjslfcjfrfcj","攪":"jgisfjjskskcjjdefcjjjsu","鉸":"skjjfksikjsksl","矯":"sjjsksjslfcjfrfcj","僥":"sfjfjjfijfjjsu","腳":"srjjskskfcjrf","餃":"skkcjjhkkjsksl","繳":"nnkdkksfcjjkjrssjsl","絞":"nnkdkkkjsksl","轎":"jfcjjjfsjslfcjfrfcj","較":"jfcjjjfkjsksl","稭":"sjfskjhsusfcjj","階":"wfjhsusfcjj","節":"sjksjkcjjhkrf","莖":"jffjmmmjfj","鯨":"sefcjfjdkkkkjfcjgsk","驚":"jffsrfcjsjsljfjjfrdkkk","經":"nnkdkkjmmmjfj","頸":"jmmmjfijsfcjjjsk","靜":"jjfjfrjjskkscjjg","鏡":"skjjfksikjksjfcjjsu","徑":"ssfjmmmjfj","痙":"kjskijmmmjfj","競":"kjksjfcjshkjksjfcjsu","淨":"kkiskkscjjg","糾":"nnkdkkhf","廄":"kjscjjhksvel","舊":"jffsfkjjjfjsfjcjj","駒":"jfjjfrdkkksrfcj","舉":"sfjjjxfcjjjsljjf","據":"jgifjesjujstsssl","鋸":"skjjfksicjsjffcj","懼":"dkffcjjjfcjjjsfkjjjfj","劇":"fjesjujstssskfg","鵑":"fcjfrjjsfcjjjrdkkk","絹":"nnkdkkfcjfrjj","傑":"sfsekjnfjfsl","潔":"kkijjjfrsnnkgsk","結":"nnkdkkjfjfcj","誡":"kjjjfcjjjsfysk","屆":"cjsjfjbf","緊":"jfcjfbelnnkgsk","錦":"skjjfksisfcjjfrf","僅":"sfjffjfcjjjfj","謹":"kjjjfcjjffjfcjjjfj","進":"sfkjjjfjkal","晉":"jnknkjfcjj","燼":"dsskcjjfjdkkkfcffj","盡":"cjjfjdkkkfcffj","勁":"jmmmjfirs","荊":"jffjjsffg","覺":"sfjjskskcjjdefcjjjsu","決":"kkicjsl","訣":"kjjjfcjcjsl","絕":"nnkdkkrscfju","鈞":"skjjfksisrki","軍":"dejfcjjjf","駿":"jfjjfrdkkknksksel","開":"cjjffrjjjjsf","凱":"fbfjfcjksiso","顆":"fcjjjfskjsfcjjjsk","殼":"jfjdejspsvel","課":"kjjjfcjfcjjjfsl","墾":"skkstsscjjhsljfj","懇":"skkstsscjjhsldykk","摳":"jgijfcjfcjfcjb","庫":"kjsjfcjjjf","褲":"kefskkjsjfcjjjf","誇":"kjjjfcjjsljjz","塊":"jfisfcjjsunk","儈":"sfsljfcfksjfcjj","寬":"kdejfffcjjjsuk","礦":"jsfcjkjsjffjfcjfjsk","曠":"fcjjkjsjffjfcjfjsk","況":"kkifcjsu","虧":"fjesjusfkjjjfjjjz","巋":"fbfsfcjcjfjficjjdefrf","窺":"kdeskjjskfcjjjsu","饋":"skkcjjhkfcjfjfcjjjsk","潰":"kkifcjfjfcjjjsk","擴":"jgikjsjffjfcjfjsk","闊":"cjjffrjjkkisjffcj","蠟":"fcjfjkmmmfcskjhkkhkky","臘":"srjjmmmfcskjhkkhkky","萊":"jffjskskfsl","來":"jskskfsl","賴":"jfcjfsksefcjjjsk","藍":"jffjfcjfbsjkfcffj","欄":"jfskcjjffrjjjfcksjfsk","攔":"jgicjjffrjjjfcksjfsk","籃":"sjksjkjfcjfbsjkfcffj","闌":"cjjffrjjjfcksjfsk","蘭":"jffcjjffrjjjfcksjfsk","瀾":"kkicjjffrjjjfcksjfsk","讕":"kjjjfcjcjjffrjjjfcksjfsk","攬":"jgijfcjfbsjkfcffjfcjjjsu","覽":"jfcjfbsjkfcffjfcjjjsu","懶":"dkfjfcjfsksefcjjjsk","纜":"nnkdkkjfcjfbsjkfcffjfcjjjsu","爛":"dsskcjjffrjjjfcksjfsk","濫":"kkijfcjfbsjkfcffj","撈":"jgidsskdsskders","勞":"dsskdsskders","澇":"kkidsskdsskders","樂":"sfcjjnnknnkjfsl","鐳":"skjjfksijdefkkkkfcjfj","壘":"fcjfjfcjfjfcjfjjfj","類":"ksjfskjskkjsfcjjjsk","淚":"kkikcjsjslk","籬":"sjksjkkjskbffrnksfkjjjfj","離":"kjskbffrnksfkjjjfj","裏":"kjfcjjfjjshsl","鯉":"sefcjfjdkkkfcjjfjj","禮":"kefkfcjffjjfcjksj","麗":"jfckjfckkjscffjjhsu","厲":"jsjfffcjjfrfik","勵":"jsjfffcjjfrfikrs","礫":"jsfcjsfcjjnnknnkjfsl","曆":"jssjfsksjfslfcjj","瀝":"kkijssjfsksjfslfjfj","隸":"jfskjjgskcjjgkisl","倆":"sfjfrfsksk","聯":"jffjjinnknnkhsffj","蓮":"jffjfcjjjfkal","連":"jfcjjjfkal","鐮":"skjjfksikjsksjcjjffsl","憐":"dkfksjfslsekjnf","漣":"kkijfcjjjfkal","簾":"sjksjkkjsksjcjjffsl","斂":"skjfcjfcjsksksjsl","臉":"srjjsljfcjfcjsksk","鏈":"skjjfksijfcjjjfkal","戀":"kjjjfcjnnkdkknnkdkkdykk","煉":"dsskjfcksjfsl","練":"nnkdkkjfcksjfsl","糧":"ksjfskfcjjjfcjjfjj","涼":"kkikjfcjgsk","兩":"jfrfsksk","輛":"jfcjjjfjfrfsksk","諒":"kjjjfcjkjfcjgsk","療":"kjskijslksfcjjgsk","遼":"jslksfcjjgskkal","鐐":"skjjfksijslksfcjjgsk","獵":"stsmmmfcskjhkkhkky","臨":"jfcjfbsjfcjfcjfcj","鄰":"ksjfsksekjnfwf","鱗":"sefcjfjdkkkksjfslsekjnf","凜":"kikjfcfcjjsjfsl","賃":"sfsjfjfcjjjsk","齡":"fjfjskskjskskbfslkek","鈴":"skjjfksislkek","淩":"kkijfjsksel","靈":"jdefkkkkfcjfcjfcjjfskskj","嶺":"fbfskkekjsfcjjjsk","領":"skkekjsfcjjjsk","餾":"skkcjjhkshkrsfcjfj","劉":"shkrsskjjfksifg","龍":"kjksjfrjjjxjujjj","聾":"kjksjfrjjjxjujjjjffjjj","嚨":"fcjkjksjfrjjjxjujjj","籠":"sjksjkkjksjfrjjjxjujjj","壟":"kjksjfrjjjxjujjjjfj","攏":"jgikjksjfrjjjxjujjj","隴":"wfkjksjfrjjjxjujjj","樓":"jfskfcjjfcjfmsj","婁":"fcjjfcjfmsj","摟":"jgifcjjfcjfmsj","簍":"sjksjkfcjjfcjfmsj","蘆":"jfffjesjufcjfjfcffj","盧":"fjesjufcjfjfcffj","顱":"fjesjufcjfjfcffijsfcjjjsk","廬":"kjsfjesjufcjfjfcffj","爐":"dsskfjesjufcjfjfcffj","擄":"jgifjesjufcjfjrs","鹵":"fjfcskkkkkj","虜":"fjesjufcjfjrs","魯":"sefcjfjdkkkfcjj","賂":"fcjjjskselfcj","祿":"kefknejgkisl","錄":"skjjfksinejgkisl","陸":"wfjfjskjfj","驢":"jfjjfrdkkkfjesjufcjfjfcffj","呂":"fcjsfcj","鋁":"skjjfksifcjfcj","侶":"sffcjsfcj","屢":"cjsfcjjfcjfmsj","縷":"nnkdkkfcjjfcjfmsj","慮":"fjesjufcjfjdykk","濾":"kkifjesjufcjfjdykk","綠":"nnkdkknejgkisl","巒":"kjjjfcjnnkdkknnkdkkfbf","攣":"kjjjfcjnnkdkknnkdkksjjg","孿":"kjjjfcjnnkdkknnkdkkegj","灤":"kkikjjjfcjnnkdkknnkdkkjfsl","亂":"skksekfrnkeku","掄":"jgisljfrjff","輪":"jfcjjjfsljfrjff","倫":"sfsljfrjff","侖":"sljfrjff","淪":"kkisljfrjff","綸":"nnkdkksljfrjff","論":"kjjjfcjsljfrjff","蘿":"jfffcffjnnkdkksfkjjjfj","羅":"fcffjnnkdkksfkjjjfj","邏":"fcffjnnkdkksfkjjjfjkal","鑼":"skjjfksifcffjnnkdkksfkjjjfj","籮":"sjksjkfcffjnnkdkksfkjjjfj","騾":"jfjjfrdkkkfcjfjnnkgsk","駱":"jfjjfrdkkkselfcj","絡":"nnkdkkselfcj","媽":"msjjfjjfrdkkk","瑪":"jjfijfjjfrdkkk","碼":"jsfcjjfjjfrdkkk","螞":"fcjfjkjfjjfrdkkk","馬":"jfjjfrdkkk","罵":"fcffjjfjjfrdkkk","嗎":"fcjjfjjfrdkkk","買":"fcffjfcjjjsk","麥":"jfskskslsek","賣":"jfjfcffjfcjjjsk","邁":"jfffcjjfrfikkal","脈":"srjjssshsl","瞞":"fcjjjjffjfrfsksk","饅":"skkcjjhkfcjjfcffjel","蠻":"kjjjfcjnnkdkknnkdkkfcjfjk","滿":"kkijffjfrfsksk","謾":"kjjjfcjfcjjfcffjel","貓":"skkstssjfffcjfj","錨":"skjjfksijfffcjfj","鉚":"skjjfksishsrf","貿":"shkrsfcjjjsk","麽":"kjsjfskjfslsnk","黴":"ssffbfjfcksjfjidkkksjsl","沒":"kkisrel","鎂":"skjjfksiksjjfjjsl","門":"cjjffrjj","悶":"cjjffrjjdykk","們":"sfcjjffrjj","錳":"skjjfksiegjfcffj","夢":"jfffcffjdesek","謎":"kjjjfcjksjfskkal","彌":"cjzjskfrfsksksksk","覓":"skksfcjjjsu","冪":"dejfffcjjjslfrf","綿":"nnkdkksfcjjfrf","緬":"nnkdkkjsfcffjjj","廟":"kjsjffcjjjfsrjj","滅":"kkijsjdsskysk","憫":"dkfcjjffrjjkjsk","閩":"cjjffrjjfcjfjk","鳴":"fcjsfcjjjrdkkk","銘":"skjjfksisekfcj","謬":"kjjjfcjckickislsss","謀":"kjjjfcjjffjjjfsl","畝":"kjfcjfjsel","鈉":"skjjfksifrsk","納":"nnkdkkfrsk","難":"jffjfcjjjsksfkjjjfj","撓":"jgijfjjfijfjjsu","腦":"srjjmmmsfcskj","惱":"dkfmmmsfcskj","鬧":"jjfjfjjfjgkjfrf","餒":"skkcjjhkskksmsj","內":"frsl","擬":"jgisusjjskekefjsl","妳":"msjsegsk","膩":"srjjjjjfcjjjskyk","攆":"jgijjskjjsljfcjjjf","撚":"jgisekkjslkdkkk","釀":"jfcsbjjkjfcjfcjjjffjshsl","鳥":"sfcjjjrdkkk","聶":"jffjjjjffjjijffjjj","齧":"jjjfrsfjfjskskjskskbf","鑷":"skjjfksijffjjjjffjjijffjjj","鎳":"skjjfksisfcjjjjfsl","檸":"jfskkdedykkfcffjjg","獰":"stskdedykkfcffjjg","甯":"kdedykkfrjjf","擰":"jgikdedykkfcffjjg","濘":"kkikdedykkfcffjjg","鈕":"skjjfksicfjj","紐":"nnkdkkcfjj","膿":"srjjfcjffjjsjjhsl","濃":"kkifcjffjjsjjhsl","農":"fcjffjjsjjhsl","瘧":"kjskifjesjujbj","諾":"kjjjfcjjffjsfcj","歐":"jfcjfcjfcjbsesl","鷗":"jfcjfcjfcjbsfcjjjrdkkk","毆":"jfcjfcjfcjbsvel","嘔":"fcjjfcjfcjfcjb","漚":"kkijfcjfcjfcjb","盤":"ssrkjksvelfcffj","龐":"kjskjksjfrjjjxjujjj","賠":"fcjjjskkjksjfcj","噴":"fcjjfjfffcjjjsk","鵬":"srjjsrjjsfcjjjrdkkk","騙":"jfjjfrdkkkkcjsfrjff","飄":"jfcffjjjgsksosfcjfjk","頻":"fjfjfssjsfcjjjsk","貧":"slrsfcjjjsk","蘋":"jfffjfjfssjsfcjjjsk","憑":"kijfjjfrdkkkdykk","評":"kjjjfcjjksjf","潑":"kkieksslcjzsvek","頗":"esfekjsfcjjjsk","撲":"jgiffksjksjjjsl","鋪":"skjjfksijfrjjfk","樸":"jfskffksjksjjjsl","譜":"kjjjfcjksjffksjfcjj","棲":"jfskjcjjfmsj","淒":"kkijcjjfmsj","臍":"srjjkjksfrsshlsfjj","齊":"kjksfrsshlsfjj","騎":"jfjjfrdkkkjskjfcjg","豈":"fbfjfcjksj","啓":"kcjssjslfcj","氣":"sjjoksjfsk","棄":"kjnkjffjjfsl","訖":"kjjjfcjsjo","牽":"kjnnkdesjjf","扡":"jgirfu","釺":"skjjfksisjf","鉛":"skjjfksisvfcj","遷":"jfcffjjskcjukal","簽":"sjksjksljfcjfcjsksk","謙":"kjjjfcjksjcjjffsl","錢":"skjjfksijyskjysk","鉗":"skjjfksijffjj","潛":"kkijbshjbsufcjj","淺":"kkijyskjysk","譴":"kjjjfcjfcjfjfcjcjkal","塹":"jfcjjjfssjfjfj","槍":"jfskslkcjjsfcj","嗆":"fcjslkcjjsfcj","牆":"bfjsjfskskjfcfcjj","薔":"jffjfskskjfcfcjj","強":"cjznkfcjfjk","搶":"jgislkcjjsfcj","鍬":"skjjfksisjfskdssl","橋":"jfsksjslfcjfrfcj","喬":"sjslfcjfrfcj","僑":"sfsjslfcjfrfcj","翹":"jfjjfijfjjsurkirki","竅":"kdesksfcjjkjrssjsl","竊":"kdesksksjfskfjfcskfrnk","欽":"skjjfksisesl","親":"kjksjjgskfcjjjsu","寢":"kdebfjscjjdeel","輕":"jfcjjjfjmmmjfj","氫":"sjjojmmmjfj","傾":"sfjhjsfcjjjsk","頃":"jhjsfcjjjsk","請":"kjjjfcjjjfjfrjj","慶":"kjscffjedykksel","瓊":"jjfisefcskfcjjjsel","窮":"kdesksfrjjjscjz","趨":"jfjfjslsrbfssrbfs","區":"jfcjfcjfcjb","軀":"sfrjjjsjfcjfcjfcjb","驅":"jfjjfrdkkkjfcjfcjfcjb","齲":"fjfjskskjskskbfsfcjfrfik","顴":"jfffcjfcjsfkjjjfjjsfcjjjsk","權":"jfskjfffcjfcjsfkjjjfj","勸":"jfffcjfcjsfkjjjfjrs","卻":"skskfcjrf","鵲":"jffjfcjjsfcjjjrdkkk","確":"jsfcjdesfkjjjfj","讓":"kjjjfcjkjfcjfcjjjffjshsl","饒":"skkcjjhkjfjjfijfjjsu","擾":"jgijsfcjjdedykksel","繞":"nnkdkkjfjjfijfjjsu","熱":"jfjskjfisokdkkk","韌":"cfjfcjjnfrsd","認":"kjjjfcjrsddykk","紉":"nnkdkkrsd","榮":"dsskdsskdejfsl","絨":"nnkdkkjjsysk","軟":"jfcjjjfsesl","銳":"skjjfksislfcjsu","閏":"cjjffrjjjjfj","潤":"kkicjjffrjjjjfj","灑":"kkijfckjfckkjscffjjhsu","薩":"jffwfkjksjssjjfj","鰓":"sefcjfjdkkkfcjfjdykk","賽":"kdejjffjslfcjjjsk","三":"jjj","傘":"slskskskskjf","喪":"jffcjfcjjhsl","騷":"jfjjfrdkkkelkfcjfjk","掃":"jgicjjdefrf","澀":"kkirsdrsdfjfifjfj","殺":"skjgsksvel","紗":"nnkdkkfsks","篩":"sjksjksfcjcjjfrf","曬":"fcjjjfckjfckkjscffjjhsu","刪":"frjfffg","閃":"cjjffrjjsk","陝":"wfjsksksl","贍":"fcjjjsksejsskkjjjfcj","繕":"nnkdkkksjjjfksjfcj","傷":"sfsjfcjjjsrss","賞":"fksdefcjfcjjjsk","燒":"dsskjfjjfijfjjsu","紹":"nnkdkkrsfcj","賒":"fcjjjsksljjgsk","攝":"jgijffjjjjffjjijffjjj","懾":"dkfjffjjjjffjjijffjjj","設":"kjjjfcjsvel","紳":"nnkdkkfcjjf","審":"kdesksjfslfcjfj","嬸":"msjkdesksjfslfcjfj","腎":"jfcjfbelfrjj","滲":"kkinknknkslsss","聲":"jfjcfjssveljffjjj","繩":"nnkdkkfcjfcjjjujbj","勝":"srjjksjjslrs","聖":"jffjjifcjjjfj","師":"sfcjcjjfrf","獅":"stssfcjcjjfrf","濕":"kkifcjjnnknnkdkkk","詩":"kjjjfcjjfjjgk","屍":"cjsjseksu","時":"fcjjjfjjgk","蝕":"skkcjjhkfcjfjk","實":"kdebcfjfcjjjsk","識":"kjjjfcjkjksjfcjjysk","駛":"jfjjfrdkkkfcjsl","勢":"jfjskjfisokrs","適":"kjksfrjffcjkal","釋":"sksjfskfcffjjfjksjjf","飾":"skkcjjhksjfrf","視":"kefkfcjjjsu","試":"kjjjfcjjjfiyk","壽":"jfjejfjjfcjjgk","獸":"fcjfcjfcjfjjfcjjslk","樞":"jfskjfcjfcjfcjb","輸":"jfcjjjfsljfrjjfg","書":"cjjjfjfcjj","贖":"fcjjjskjfjfcffjfcjjjsk","屬":"cjsfkiskfcffjsrfcjfjk","術":"ssfjfskkjjg","樹":"jfskjfjfcjksijgk","豎":"jfcjfbeljfcjksj","數":"fcjjfcjfmsjsjsl","帥":"sfcjcjfrf","雙":"sfkjjjfjsfkjjjfjel","誰":"kjjjfcjsfkjjjfj","稅":"sjfskslfcjsu","順":"sffjsfcjjjsk","說":"kjjjfcjslfcjsu","碩":"jsfcjjsfcjjjsk","爍":"dssksfcjjnnknnkjfsl","絲":"nnkdkknnkgsk","飼":"skkcjjhkrjfcj","聳":"ssfskskfjsljffjjj","慫":"ssfskskfjsldykk","頌":"sknkjsfcjjjsk","訟":"kjjjfcjslnk","誦":"kjjjfcjekfrjjf","擻":"jgifcjjfcjfmsjsjsl","蘇":"jffsefcjfjdkkksjfsl","訴":"kjjjfcjssjfk","肅":"cjjfsfjjcbfjf","雖":"fcjfcjfjksfkjjjfj","隨":"wfjsjfjfrjjkal","綏":"nnkdkkskksmsj","歲":"fjfjjsjfssysk","孫":"egisnnkgsk","損":"jgifcjfcjjjsk","筍":"sjksjksrfcjj","縮":"nnkdkkkdesfjsfcjj","瑣":"jjfifksfcjjjsk","鎖":"skjjfksifksfcjjjsk","獺":"stsjfcjfsksefcjjjsk","撻":"jgijfjksjjjfkal","擡":"jgijfjfcjdejnkjfj","態":"nkfrjjsusudykk","攤":"jgijffjfcjjjsksfkjjjfj","貪":"slkefcjjjsk","癱":"kjskijffjfcjjjsksfkjjjfj","灘":"kkijffjfcjjjsksfkjjjfj","壇":"jfikjfcfcjjfcjjj","譚":"kjjjfcjjfcffjfcjjjf","談":"kjjjfcjdsskdssl","歎":"jffjfcjjjsksesl","湯":"kkifcjjjsrss","燙":"kkifcjjjsrssdssl","濤":"kkijfjejfjjfcjjgk","縧":"nnkdkksffseljgsk","討":"kjjjfcjjgk","騰":"srjjksjjsljfjjfrdkkk","謄":"srjjksjjslkjjjfcj","銻":"skjjfksikscjzfs","題":"fcjjjfjsljsfcjjjsk","體":"fccdefrjjfcjffjjfcjksj","屜":"cjsssfjffjb","條":"sffseljgsk","貼":"fcjjjskfjfcj","鐵":"skjjfksijfjfcjjjfiysk","廳":"kjsjffjjjjjfijsfcffjjdykk","聽":"jffjjjjjfijsfcffjjdykk","烴":"dsskjmmmjfj","銅":"skjjfksifrjfcj","統":"nnkdkkkjnksu","頭":"jfcjksijsfcjjjsk","禿":"sjfslsu","圖":"fcfcjjffcfcjjj","塗":"kkisljjgskjfj","團":"fcjfcjjfikjgkj","頹":"sjfskshjsfcjjjsk","蛻":"fcjfjkslfcjsu","脫":"srjjslfcjsu","鴕":"sfcjjjrdkkkkdesu","馱":"jfjjfrdkkkjsl","駝":"jfjjfrdkkkkdesu","橢":"jfskwfjsjfjfrjj","窪":"kdeskkkijfjjfj","襪":"kefskjfffcffjjskysk","彎":"kjjjfcjnnkdkknnkdkkcjz","灣":"kkikjjjfcjnnkdkknnkdkkcjz","頑":"jjshjsfcjjjsk","萬":"jfffcjjfrfik","網":"nnkdkkfrksjkjb","韋":"cfjfcjjnf","違":"cfjfcjjnfkal","圍":"fccfjfcjjnfj","爲":"skkssccrdkkk","濰":"kkinnkdkksfkjjjfj","維":"nnkdkksfkjjjfj","葦":"jffcfjfcjjnf","偉":"sfcfjfcjjnf","僞":"sfskkssccrdkkk","緯":"nnkdkkcfjfcjjnf","謂":"kjjjfcjfcjfjfrjj","衛":"ssfcfjfcjjnfjjg","溫":"kkifcskjfcffj","聞":"cjjffrjjjffjjj","紋":"nnkdkkkjsl","穩":"sjfskskksjfjcjjdykk","問":"cjjffrjjfcj","甕":"kjnnssfkjjjfjjhok","撾":"jgifccfrfcjkal","蝸":"fcjfjkfccfrfcj","渦":"kkifccfrfcj","窩":"kdeskfccfrfcj","臥":"jfcjfbsl","嗚":"fcjsfcjjrdkkk","鎢":"skjjfksisfcjjrdkkk","烏":"sfcjjrdkkk","汙":"kkijjg","誣":"kjjjfcjjfskskj","無":"sjjffffjdkkk","蕪":"jffsjjffffjdkkk","吳":"fcjxjsl","塢":"jfisfcjjrdkkk","霧":"jdefkkkkekegsselrs","務":"ekegsselrs","誤":"kjjjfcjfcjjjsl","錫":"skjjfksifcjjsrss","犧":"sjfiksjjfjsjfskjzysk","襲":"kjksjfrjjjxjujjjkjshsl","習":"ckickisfcjj","銑":"skjjfksisjfjsu","戲":"fjesjujfcjksijysk","細":"nnkdkkfcjfj","蝦":"fcjfjkcjfjjcjel","轄":"jfcjjjfkdejjjffcj","峽":"fbfjsksksl","俠":"sfjsksksl","狹":"stsjsksksl","廈":"kjsjsfcjjjsel","嚇":"fcjjfjsgskjfjsgsk","鍁":"skjjfksissjfsesl","鮮":"sefcjfjdkkkksjjjf","纖":"nnkdkkskskjfjjjfjjjiysk","鹹":"fjfcskkkkkjjsjfcjysk","賢":"jfcjfbelfcjjjsk","銜":"ssfskjjfksijjg","閑":"cjjffrjjjfsk","顯":"fcjjnnknnkdkkkjsfcjjjsk","險":"wfsljfcjfcjsksk","現":"jjfifcjjjsu","獻":"fjesjujfcjfrksjfjslk","縣":"fcjjjjgsksnnkgsk","餡":"skkcjjhksesfjcjj","羨":"ksjjfjkkisesl","憲":"kdejjfjfcffjdykk","線":"nnkdkksfcjjgesl","廂":"kjsjfskfcjjj","鑲":"skjjfksikjfcjfcjjjffjshsl","鄉":"nnskcjjhkwf","詳":"kjjjfcjksjjjf","響":"nnskcjjhkwfkjksjfcjj","項":"jfijsfcjjjsk","蕭":"jffcjjfsfjjcbfjf","囂":"fcjfcjjsfcjjjskfcjfcj","銷":"skjjfksifksfrjj","曉":"fcjjjfjjfijfjjsu","嘯":"fcjcjjfsfjjcbfjf","蠍":"fcjfjkfcjjsrskbsesl","協":"jfrsrsrs","挾":"jgijsksksl","攜":"jgifbfsfkjjjfjfrskfcj","脅":"rsrsrsfrjj","諧":"kjjjfcjjhsusfcjj","寫":"kdesfjcjjsrdkkk","瀉":"kkikdesfjcjjsrdkkk","謝":"kjjjfcjsfrjjjsjgk","鋅":"skjjfksikjksjjf","釁":"sfjjfcjfcjcjjdejfcsbjjslrs","興":"sfjjfcjfcjcjjjsk","洶":"kkisrskbf","鏽":"skjjfksicjjfsfjjcbfjf","繡":"nnkdkkcjjfsfjjcbfjf","虛":"fjesjuffbfjj","噓":"fcjfjesjuffbfjj","須":"sssjsfcjjjsk","許":"kjjjfcjsjjf","敘":"skjjgsksjsl","緒":"nnkdkkjfjsfcjj","續":"nnkdkkjfjfcffjfcjjjsk","軒":"jfcjjjfjjf","懸":"fcjjjjgsksnnkgskdykk","選":"cjucjujffjskkal","癬":"kjskisefcjfjdkkkksjjjf","絢":"nnkdkksrfcjj","學":"sfjjskskcjjdeegj","勳":"sjfcksjfjjdkkkrs","詢":"kjjjfcjsrfcjj","尋":"cjjjfifcjjgk","馴":"jfjjfrdkkksff","訓":"kjjjfcjsff","訊":"kjjjfcjojf","遜":"egisnnkgskkal","壓":"jsfcjjfrjjjslkjfj","鴉":"jngssfcjjjrdkkk","鴨":"fcjjfsfcjjjrdkkk","啞":"fcjjfjxxjfj","亞":"jfjxxjfj","訝":"kjjjfcjjngs","閹":"cjjffrjjjslfcjju","煙":"dsskjfcffjjfj","鹽":"jfcjfbsjfjfcskkkkkjfcffj","嚴":"fcjfcjjsejffjjisjsl","顔":"kjksjssssjsfcjjjsk","閻":"cjjffrjjsesfjcjj","豔":"jjjffjjjfbfjfcjksijfjnkfcffj","厭":"jsfcjjfrjjjslk","硯":"jsfcjfcjjjsu","彥":"kjskjssss","諺":"kjjjfcjkjksjssss","驗":"jfjjfrdkkksljfcjfcjsksk","鴦":"fcjslsfcjjjrdkkk","楊":"jfskfcjjjsrss","揚":"jgifcjjjsrss","瘍":"kjskifcjjjsrss","陽":"wffcjjjsrss","癢":"kjskiksjjjslkcjjhsk","養":"ksjjjslkcjjhsk","樣":"jfskksjjfjkresl","瑤":"jjfisekksjjfbf","搖":"jgisekksjjfbf","堯":"jfjjfijfjjsu","遙":"sekksjjfbfkal","窯":"kdeskksjjfjdkkk","謠":"kjjjfcjsekksjjfbf","藥":"jffsfcjjnnknnkjfsl","爺":"sksljffjjiwf","頁":"jsfcjjjsk","業":"ffksjksjjjfsl","葉":"jffjffjbjfsl","壹":"jfjdejfcjksj","醫":"jsjjskbsvekjfcsbjj","銥":"skjjfksikjshsl","頤":"jffcjfbjsfcjjjsk","遺":"fcjfjfcjjjskkal","儀":"sfksjjfjsjgiysk","彜":"nejksjfskslrsjsf","蟻":"fcjfjkksjjfjsjgiysk","藝":"jffjfjskjfisokjjnk","億":"sfkjksjfcjjdykk","憶":"dkfkjksjfcjjdykk","義":"ksjjfjsjgiysk","詣":"kjjjfcjsufcjj","議":"kjjjfcjksjjfjsjgiysk","誼":"kjjjfcjkdefcjjj","譯":"kjjjfcjfcffjjfjksjjf","異":"fcjfjjffjsk","繹":"nnkdkkfcffjjfjksjjf","蔭":"jffwfslkejjnk","陰":"wfslkejjnk","銀":"skjjfksicjjhsl","飲":"skkcjjhksesl","隱":"wfskksjfjcjjdykk","櫻":"jfskfcjjjskfcjjjskmsj","嬰":"fcjjjskfcjjjskmsj","鷹":"kjssfsfkjjjfjsfcjjjrdkkk","應":"kjssfsfkjjjfjdykk","纓":"nnkdkkfcjjjskfcjjjskmsj","瑩":"dsskdsskdejjfjk","螢":"dsskdsskdefcjfjk","營":"dsskdsskdefcjfcj","熒":"dsskdsskdedssl","蠅":"fcjfjkfcjfcjjjujbj","贏":"kjbfcjsrjjfcjjjsksok","穎":"susjfskjsfcjjjsk","喲":"fcjnnkdkksrk","擁":"jgikjnnssfkjjjfj","傭":"sfkjscjjfrjjf","癰":"kjskimmmfcjcfjusfkjjjfj","踴":"fcjfjfiekfcjjfrs","詠":"kjjjfcjkresl","湧":"kkiekfcjjfrs","優":"sfjsfcjjdedykksel","憂":"jsfcjjdedykksel","郵":"sjfjffjiwf","鈾":"skjjfksifcjfj","猶":"stsksjfcsbjj","遊":"kjrssjegjkal","誘":"kjjjfcjsjfslws","輿":"sfjjjfcjjjfcjjjsk","魚":"sefcjfjdkkk","漁":"kkisefcjfjdkkk","娛":"msjfcjxjsl","與":"sfjjjxfcjjjsk","嶼":"fbfsfjjjxfcjjjsk","語":"kjjjfcjjfcjfcj","籲":"sjksjkskjfcjfcjfcjfrjffjsfcjjjsk","禦":"ssfsjjfjfirfjjgsk","獄":"stskjjjfcjjslk","譽":"sfjjjxfcjjjslkjjjfcj","預":"ekegjsfcjjjsk","馭":"jfjjfrdkkkel","鴛":"sekrusfcjjjrdkkk","淵":"kkisjfjcbfjf","轅":"jfcjjjfjfjfcjshsl","園":"fcjfjfcjsfskj","員":"fcjfcjjjsk","圓":"fcfcjfcjjjskj","緣":"nnkdkknejstsssl","遠":"jfjfcjsfskkal","願":"jssfcjjgskjsfcjjjsk","約":"nnkdkksrk","躍":"fcjfjfickickisfkjjjfj","鑰":"skjjfksisljfcjfcjfcjfrjff","嶽":"fbfstskjjjfcjjslk","粵":"sfcsksjfskjjz","悅":"dkfslfcjsu","閱":"cjjffrjjskfcjsu","雲":"jdefkkkkjjnk","鄖":"fcjfcjjjskwf","勻":"srjj","隕":"wffcjfcjjjsk","運":"dejfcjjjfkal","蘊":"jffnnkdkkfcskjfcffj","醞":"jfcsbjjfcskjfcffj","暈":"fcjjdejfcjjjf","韻":"kjksjfcjjfcjfcjjjsk","雜":"kjskskjgsksfkjjjfj","災":"mmmdssl","載":"jfjjfcjjjfysk","攢":"jgisjfjshsjfjsufcjjjsk","暫":"jfcjjjfssjffcjj","贊":"sjfjshsjfjsufcjjjsk","贓":"fcjjjskjsbjsjfcjfbysk","髒":"fccdefrjjjffjseksujsf","鑿":"ffksjksjjfsfjcjjsveksljjfksj","棗":"jfcfskjfcfsl","竈":"kdeskjfjfcjfcjjjujbj","責":"jjfjfcjjjsk","擇":"jgifcffjjfjksjjf","則":"fcjjjskfg","澤":"kkifcffjjfjksjjf","賊":"fcjjjskjjsysk","贈":"fcjjjskksfcfksjfcjj","紮":"jfskunnkgsk","劄":"sjksjkskjfcjfg","軋":"jfcjjjfu","鍘":"skjjfksifcjjjskfg","閘":"cjjffrjjfcjjf","柵":"jfskfrjff","詐":"kjjjfcjsjfjj","齋":"kjksfrsshlsfjjfsk","債":"sfjjfjfcjjjsk","氈":"kjfcfcjjfcjjisjju","盞":"jyskjyskfcffj","斬":"jfcjjjfssjf","輾":"jfcjjjfcjsjffjhsl","嶄":"fbfjfcjjjfssjf","棧":"jfskjyskjysk","戰":"fcjfcjfcjjjfjysk","綻":"nnkdkkkdejfjsl","張":"cjzjfjjjhsl","漲":"kkicjzjfjjjhsl","帳":"frfjfjjjhsl","賬":"fcjjjskjfjjjhsl","脹":"srjjjfjjjhsl","趙":"jfjfjslfksfrjj","蟄":"jfjksjjfsokfcjfjk","轍":"jfcjjjfkjnkfrjjsjsl","鍺":"skjjfksijfjsfcjj","這":"kjjjfcjkal","貞":"fjfcjjjsk","針":"skjjfksijf","偵":"sffjfcjjjsk","診":"kjjjfcjslsss","鎮":"skjjfksijffcjjjjsk","陣":"wfjfcjjjf","掙":"jgiskkscjjg","睜":"fcjjjskkscjjg","猙":"stsskkscjjg","爭":"skkscjjg","幀":"frffjfcjjjsk","鄭":"ksjfcsbjjjskwf","證":"kjjjfcjekssljfcjksj","織":"nnkdkkkjksjfcjjysk","職":"jffjjikjksjfcjjysk","執":"jfjksjjfsok","紙":"nnkdkkshjy","摯":"jfjksjjfsoksjjg","擲":"jgiksjfcsbjjjskwf","幟":"frfkjksjfcjjysk","質":"ssjfssjffcjjjsk","滯":"kkijffjsudefrf","鍾":"skjjfksisjfcjjjfj","終":"nnkdkkselkk","種":"sjfsksjfcjjjfj","腫":"srjjsjfcjjjfj","衆":"sfcffjsfsssl","謅":"kjjjfcjsrbfssrbfs","軸":"jfcjjjffcjfj","皺":"srbfssrbfsesfel","晝":"cjjjfjfcjjj","驟":"jfjjfrdkkkjffjjieksfsssl","豬":"jstssskjfjsfcjj","諸":"kjjjfcjjfjsfcjj","誅":"kjjjfcjsjjfsl","燭":"dsskfcffjsrfcjfjk","矚":"fcjjjcjsfkiskfcffjsrfcjfjk","囑":"fcjcjsfkiskfcffjsrfcjfjk","貯":"fcjjjskkdejg","鑄":"skjjfksijfjejfjjfcjjgk","築":"sjksjkjfisokjfsl","駐":"jfjjfrdkkkkjjfj","專":"jfcjjfjkjgk","磚":"jsfcjjfcjjfjkjgk","轉":"jfcjjjfjfcjjfikjgk","賺":"fcjjjskksjcjjffsl","樁":"jfskjjjslsfjcjj","莊":"jffbfjsjfj","裝":"bfjsjfjkjshsl","妝":"bfjsmsj","壯":"bfjsjfj","狀":"bfjsjslk","錐":"skjjfksisfkjjjfj","贅":"jjfjrssjslfcjjjsk","墜":"wfksjstsssljfj","綴":"nnkdkkekekekel","諄":"kjjjfcjkjfcjegj","著":"jffjfjsfcjj","濁":"kkifcffjsrfcjfjk","茲":"jffnnknnk","資":"kiseslfcjjjsk","漬":"kkijjfjfcjjjsk","蹤":"fcjfjfissfskskfjsl","綜":"nnkdkkkdejjgsk","總":"nnkdkksfcsekjdykk","縱":"nnkdkkssfskskfjsl","鄒":"srbfssrbfswf","詛":"kjjjfcjfcjjj","組":"nnkdkkfcjjj","鑽":"skjjfksisjfjshsjfjsufcjjjsk","裡":"kefskfcjjfjj","迴":"fcfcjjkal","讚":"kjjjfcjsjfjshsjfjsufcjjjsk","寧":"kdedykkfcffjjg","儂":"sffcjffjjsjjhsl","鴰":"sjffcjsfcjjjrdkkk","銼":"skjjfksiskskjfj","塼":"jfijfcjjfikjgk","詆":"kjjjfcjshjyk","鎸":"skjjfksisfkjjjfjws","厰":"jsfksfrfcjsjsl","廼":"jfcsbjal","麼":"kjsjfskjfslnnk","璽":"jskfrfskskskskjjfjk","於":"kjrsslkk","韆":"jffjfcjjfjfcffjjskcjukal","乾":"jffcjjjfsjo","為":"ksccrdkkk","僕":"sfffksjksjjjsl","昇":"fcjjsjsf","兇":"skbfsu","厛":"jsfcjssjf","厤":"jssjfsksjfsl","伕":"sfjjsl","紥":"jgiunnkgsk","閂":"cjjffrjjj","鉅":"skjjfksijcjb","鼕":"jfjfcjksijfekselkk","芻":"srbfssrbfs","佔":"sffjfcj","齣":"fjfjskskjskskbfsrfcj","勱":"jfffcjjfrfikrs","衹":"kefskshjy","嘰":"fcjnnknnkjskysk","檯":"jfskjfjfcjdejnkjfj","処":"selso","嘆":"fcjjffjfcjjjsl","嬭":"msjjskfrfsksksksk","佈":"sfjsfrf","匯":"jkkisfkjjjfjb","戔":"jyskjysk","訌":"kjjjfcjjfj","訕":"kjjjfcjfbf","訐":"kjjjfcjjjf","飢":"skkcjjhkso","鄺":"kjsjffjfcjfjskwf","亙":"jfckkj","產":"kjskjssjjfj","倣":"sfkjrssjsl","眾":"fcffjsfsksl","傴":"sfjfcjfcjfcjb","倀":"sfjfjjjhsl","傖":"sfslkcjjsfcj","佇":"sfkdejg","偽":"sfksccrdkkk","関":"cjjffrjjksjjsk","鳧":"sfcjjjrdkkkso","沍":"kkijnej","氹":"ogesk","厙":"jsjfcjjjf","弔":"cjzf","喫":"fcjjjjfrsjsl","郃":"skjfcjwf","嚮":"nnskcjjhkwfsfrfcj","囘":"frcju","壙":"jfikjsjffjfcjfjsk","姦":"msjmsjmsj","儘":"sfcjjfjdkkkfcffj","嵗":"fbfjsjfssysk","戯":"fjesjuffksijysk","儅":"sffksdefcjfcjfj","託":"kjjjfcjsju","釦":"skjjfksifcj","懺":"dkfskskjfjjjfjjjiysk","粬":"ksjfskfcjffj","捫":"jgicjjffrjj","硃":"jsfcjsjjfsl","獷":"stskjsjffjfcjfjsk","懽":"dkfjfffcjfcjsfkjjjfj","襍":"kefsksfkjjjfjjfsl","璣":"jjfinnknnkjskysk","紆":"nnkdkkjjg","紂":"nnkdkkjgk","縴":"nnkdkkkjnnkdesjjf","紇":"nnkdkksjo","紈":"nnkdkksok","獁":"stsjfjjfrdkkk","纊":"nnkdkkkjsjffjfcjfjsk","攷":"jzsjsl","詎":"kjjjfcjjcjb","謳":"kjjjfcjjfcjfcjfcjb","訥":"kjjjfcjfrsk","薌":"jffnnskcjjhkwf","釓":"skjjfksiu","鄔":"sfcjjrdkkkwf","釔":"skjjfksio","閆":"cjjffrjjjjj","堦":"jfijhsusfcjj","餳":"skkcjjhkfcjjjsrss","貟":"nkfcjjjsk","餘":"skkcjjhksljjgsk","祐":"kefkjsfcj","躰":"sfrjjjsjfslj","僉":"sljfcjfcjsksk","彿":"ssfcjzsf","剋":"jffcjsufg","剄":"jmmmjfifg","鉋":"skjjfksisrcju","滷":"kkifjfcskkkkkj","毉":"jsjjskbsveljfskskj","獃":"fbfjfcjksijslk","唚":"fcjcjjdeel","吶":"fcjfrsl","嘸":"fcjsjjffffjdkkk","唄":"fcjfcjjjsk","聼":"ejffjjijsfcffjjdykk","嚦":"fcjjssjfsksjfslfjfj","囈":"fcjjffjfjskjfisokjjnk","咼":"fccfrfcj","睏":"fcjjjfcjfskj","圇":"fcsljfrjffj","阬":"wfkjso","阯":"wffjfj","墰":"jfijfcffjfcjjjf","壢":"jfijssjfsksjfslfjfj","垻":"jfifcjjjsk","奐":"sefcskjsl","媯":"msjksccrdkkk","嫗":"msjjfcjfcjfcjb","侷":"sfcjsrfcj","匲":"jjslfcjfcjfcjb","嶇":"fbfjfcjfcjfcjb","嶴":"sfcksjfskjslfbf","娬":"msjjjfjfiyk","峴":"fbffcjjjsu","嵐":"fbfsosfcjfjk","幃":"frfcfjfcjjnf","牀":"bfjsjfsl","廡":"kjssjjffffjdkkk","徬":"ssfkjksdekjrs","憮":"dkfsjjffffjdkkk","愾":"dkfsjjoksjfsk","悵":"dkfjfjjjhsl","誌":"kjjjfcjjfjdykk","愴":"dkfslkcjjsfcj","拋":"jgisors","慪":"dkfjfcjfcjfcjb","摺":"jgickickisfcjj","摶":"jgijfcjjfikjgk","桿":"jfskfcjjjjf","槓":"jfskjfjfcjjjsk","歟":"sfjjjxfcjjjsksesl","灃":"kkijjjffjjjfbfjfcjksj","榪":"jfskjfjjfrdkkk","溈":"kkiksccrdkkk","氾":"kkiru","煬":"dsskfcjjjsrss","霛":"jdefkkkkcjzcjzcjz","癤":"kjskisjksjkcjjhkrf","係":"sfsnnkgsk","磯":"jsfcjnnknnkjskysk","紕":"nnkdkkjhsu","紜":"nnkdkkjjnk","紓":"nnkdkkekeg","羋":"fjffjjjf","藶":"jffjssjfsksjfslfjfj","萇":"jffjfjjjhsl","虯":"fcjfjkhf","蕓":"jffjdefkkkkjjnk","莧":"jfffcjjjsu","詁":"kjjjfcjjffcj","囌":"fcjjffsefcjfjdkkksjfsl","苧":"jffkdejg","証":"kjjjfcjjfjfj","訶":"kjjjfcjjfcjg","詘":"kjjjfcjbffbf","詔":"kjjjfcjrsfcj","穀":"jfjdejsjfsksvel","詒":"kjjjfcjnkfcj","軔":"jfcjjjfrsd","鄴":"ffksjksjjjfskwf","釗":"skjjfksifg","釕":"skjjfksieg","釙":"skjjfksifk","闈":"cjjffrjjcfjfcjjnf","閔":"cjjffrjjkjsk","閎":"cjjffrjjjsnk","閌":"cjjffrjjkjso","陘":"wfjmmmjfj","靭":"jffjfcjjfrsd","飪":"skkcjjhksjfj","飩":"skkcjjhkjbfu","餼":"skkcjjhksjjoksjfsk","飭":"skkcjjhksjrs","敺":"jfcjfcjfcjbfjel","飫":"skkcjjhksjsl","蓯":"jffssfskskfjsl","暘":"fcjjfcjjjsrss","鳩":"spsfcjjjrdkkk","珮":"jjfisojfrf","璵":"jjfisfjjjxfcjjjsk","姪":"msjjnkjfj","儕":"sfkjksfrsshlsfjj","兗":"kjskfcjsu","製":"sjjfrffgkjshsl","凴":"kijfjjfrdkkkso","剴":"fbfjfcjksifg","劌":"fjfjjsjfssyskfg","剎":"skjfskkfg","颳":"sosfcjfjksjffcj","厠":"jsfcjjjskfg","捲":"jgiksjjslru","匭":"jjfcjjjfsob","週":"srjfjfcjkal","巹":"egesljcju","嚀":"fcjkdedykkfcffjjg","噝":"fcjnnkdkknnkgsk","哢":"fcjjjfjjsf","囯":"fcjjfjj","壚":"jfifjesjufcjfjfcffj","姍":"msjfrjff","喦":"fcjfcjfcjfbf","嶧":"fbffcffjjfjksjjf","崠":"fbfjfcjjfsl","倖":"sfjfjksjjf","絃":"nnkdkkkjnnk","弳":"cjzjmmmjfj","唸":"fcjslkedykk","徴":"ssffbfjjfjsjsl","戧":"skkcjjsfcjjysk","懌":"dkffcffjjfjksjjf","牴":"sjfishjyk","枴":"jfskfcjrs","盃":"jsfkfcffj","崐":"fbffcjjjhsu","曇":"fcjjjdefkkkkjjnk","搆":"jgijjffjfrfjj","鬆":"jfjjjnksssjfskslnk","闆":"cjjffrjjfcjfcjfcj","梘":"jfskfcjjjsu","櫪":"jfskjssjfsksjfslfjfj","樅":"jfskssfskskfjsl","棖":"jfskjfjjjhsl","歿":"jseksrel","訢":"kjjjfcjssjf","梟":"sfcjjjrjfsl","瀧":"kkikjksjfrjjjxjujjj","瀘":"kkifjesjufcjfjfcffj","洩":"kkifcjjys","遝":"fcffjfsskkkal","註":"kjjjfcjkjjfj","濼":"kkisfcjjnnknnkjfsl","霑":"jdefkkkkkkifjfcj","涇":"kkijmmmjfj","燉":"dsskkjfcjegisjsl","熗":"dsskslkcjjsfcj","煒":"dsskcfjfcjjnf","氂":"jjfsksjsljssjju","甌":"jfcjfcjfcjbjhok","瑋":"jjficfjfcjjnf","癘":"kjskijfffcjjfrfik","麅":"kjscffjjhsusrcju","碭":"jsfcjfcjjjsrss","紲":"nnkdkkjffjb","紺":"nnkdkkjffjj","糴":"skksjfskckickisfkjjjfj","紱":"nnkdkkjselk","綫":"nnkdkkjyskjysk","紼":"nnkdkkcjzsf","絀":"nnkdkkbffbf","縐":"nnkdkksrbfssrbfs","儸":"sffcffjnnkdkksfkjjjfj","紿":"nnkdkknkfcj","餚":"skkcjjhkskjsfrjj","骯":"fccdefrjjkjso","捨":"jgisljjffcj","膁":"srjjksjcjjffsl","檾":"dsskdsskdejfskjfsl","蘢":"jffkjksjfrjjjxjujjj","蔦":"jffsfcjjjrdkkk","蝨":"ojffcjfjkfcjfjk","塋":"dsskdsskdejfj","煢":"dsskdsskdeojf","蟣":"fcjfjknnknnkjskysk","槼":"jjskfcjjjsujfsl","誆":"kjjjfcjjjjfjb","錶":"skjjfksijjfjshsl","眎":"fcjjjjjgsk","誄":"kjjjfcjjjjfsl","詿":"kjjjfcjjfjjfj","詼":"kjjjfcjjsdssl","詰":"kjjjfcjjfjfcj","詵":"kjjjfcjsjfjsu","詮":"kjjjfcjsljjfj","詬":"kjjjfcjssjfcj","諢":"kjjjfcjdejfcjjjf","諍":"kjjjfcjsecjjg","詡":"kjjjfcjrkirki","軛":"jfcjjjfjsru","迆":"rfukal","邇":"jskfrfskskskskkal","鄶":"skjfcfksjfcjjwf","郤":"skskfcjwf","郟":"jskskskwf","埰":"jfiskksjfsl","鄆":"dejfcjjjfwf","鬱":"jfsksjjfbfjfskdeskkkkkbfsusss","釷":"skjjfksijfj","鍆":"skjjfksicjjffrjj","釤":"skjjfksisss","釵":"skjjfksielk","釧":"skjjfksisff","隷":"jfjjjgskcjjgkis","牐":"sfjcsjfsfjcjj","閙":"cjjffrjjkjfrf","飴":"skkcjjhknkfcj","駔":"jfjjfrdkkkfcjjj","騶":"jfjjfrdkkksrbfssrbfs","駙":"jfjjfrdkkksfjgk","驛":"jfjjfrdkkkfcffjjfjksjjf","駘":"jfjjfrdkkknkfcj","駟":"jfjjfrdkkkfcsbj","鳶":"jyksfcjjjrdkkk","禕":"kefkcfjfcjjnf","黽":"fcjfcjjjujbj","擧":"sfjjjxfcjjjslsjjg","儔":"sfjfjejfjjfcjjgk","儷":"sfjfckjfckkjscffjjhsu","儼":"sffcjfcjjsejffjjisjsl","俁":"sffcjxjsl","玆":"kjnnkkjnnk","吒":"fcjsju","脩":"sffselfrjj","釐":"jjfsksjsljsfcjjfjj","勛":"fcjfcjjjskrs","噅":"fcjskkssccrdkkk","敍":"skjjgskfjel","偺":"sfselfkfcjj","嚥":"fcjjffjfcjfjisudkkk","鬨":"jjfjfjjfjgjffjsk","噠":"fcjjfjksjjjfkal","噦":"fcjfjfjjsjfssysk","噲":"fcjsljfcfksjfcjj","嘵":"fcjjfjjfijfjjsu","嗶":"fcjfcjjjffjjf","嚌":"fcjkjksfrsshlsfjj","坰":"jfifrfcj","噥":"fcjfcjffjjsjjhsl","埡":"jfijfjxxjfj","堊":"jfjxxjfjjfj","堖":"jfimmmsfcskj","薑":"jffjfcjfjjfcjfjj","塏":"jfifbfjfcjksj","婭":"msjjfjxxjfj","復":"ssfsjfcjjsel","嬈":"msjjfjjfijfjjsu","孌":"kjjjfcjnnkdkknnkdkkmsj","嶠":"fbfsjslfcjfrfcj","崢":"fbfskkscjjg","恆":"dkfjfckkj","卹":"sfcffirf","縂":"nnkdkkksfcjdykk","懟":"ffksjksjjfijgkdykk","慟":"dkfsjfcjjjfirs","愷":"dkffbfjfcjksj","懕":"jsfcjjfrjjjslkdykk","惻":"dkffcjjjskfg","掛":"jgijfjjfifk","惲":"dkfdejfcjjjf","撟":"jgisjslfcjfrfcj","暱":"fcjjjjffjsfcjb","梔":"jfskssjcfju","檉":"jfskjffjjifcjjjfj","櫳":"jfskkjksjfrjjjxjujjj","櫛":"jfsksjksjkcjjhkrf","櫟":"jfsksfcjjnnknnkjfsl","櫨":"jfskfjesjufcjfjfcffj","殤":"jseksjfcjjjsrss","澩":"sfjjskskcjjdegesl","浹":"kkijsksksl","瀏":"kkishkrsskjjfksifg","澮":"kkisljfcfksjfcjj","湞":"kkifjfcjjjsk","滸":"kkikjjjfcjsjjf","潯":"kkicjjjfifcjjgk","玨":"jjfijjfj","獪":"stssljfcfksjfcjj","瓏":"jjfikjksjfrjjjxjujjj","癧":"kjskijssjfsksjfslfjfj","瑉":"jjficjhjyfcjj","瞘":"fcjjjjfcjfcjfcjb","猻":"stsegisnnkgsk","硨":"jsfcjjfcjjjf","篤":"sjksjkjfjjfrdkkk","竪":"jfcjfbelkjksj","禰":"kefkjskfrfsksksksk","毧":"sjjujjsysk","鞦":"jffjfcjjfsjfskdssl","碸":"jsfcjsosfcjfjk","秈":"sjfskfbf","絝":"nnkdkkjsljjz","絎":"nnkdkkssfjjg","絳":"nnkdkkseljnf","腖":"srjjjfcjjfsl","揹":"jgifjisufrjj","朧":"srjjkjksjfrjjjxjujjj","脛":"srjjjmmmjfj","艤":"ssrkjkksjjfjsjgiysk","衚":"ssfjffcjsrjjjjg","臚":"srjjfjesjufcjfjfcffj","蕘":"jffjfjjfijfjjsu","薈":"jffsljfcfksjfcjj","蓽":"jfffcjjjffjjf","薺":"jffkjksfrsshlsfjj","蕎":"jffsjslfcjfrfcj","滎":"dsskdsskdegesl","犖":"dsskdsskdesjjf","盪":"kkifcjjjsrssfcffj","蕁":"jffcjjjfifcjjgk","蓀":"jffegisnnkgsk","葒":"jffnnkdkkjfj","藎":"jffcjjfjdkkkfcffj","蕒":"jfffcffjfcjjjsk","廕":"kjswfslkejjnk","葯":"jffnnkdkksrk","葤":"jffnnkdkkjgk","蠆":"jfffcjjfrfikfcjfjk","螘":"fcjfjkfbfjfcjksj","覘":"fjfcjfcjjjsu","誚":"kjjjfcjfksfrjj","誑":"kjjjfcjstsjjfj","誥":"kjjjfcjsjfjfcj","誒":"kjjjfcjnksjjsl","貰":"jffjbfcjjjsk","賁":"jfjfffcjjjsk","貺":"fcjjjskfcjsu","貽":"fcjjjsknkfcj","軻":"jfcjjjfjfcjg","轤":"jfcjjjffjesjufcjfjfcffj","軲":"jfcjjjfjffcj","軤":"jfcjjjfsksjg","軹":"jfcjjjffcjsk","軼":"jfcjjjfsjjsl","轢":"jfcjjjfsfcjjnnknnkjfsl","軫":"jfcjjjfslsss","軺":"jfcjjjfrsfcj","跡":"fcjfjfikjsgsk","酈":"jfckjfckkjscffjjhshwf","鈈":"skjjfksijsfk","鐘":"skjjfksikjksjfcjjfjj","鈑":"skjjfksissel","鈦":"skjjfksijslk","鈐":"skjjfksislke","籥":"sjksjksljfcjfcjfcjfrjff","鈁":"skjjfksikjrs","鈥":"skjjfksidssl","鈧":"skjjfksikjso","鈄":"skjjfksikkjf","鈀":"skjjfksicfju","闥":"cjjffrjjjfjksjjjfkal","頇":"jjfjsfcjjjsk","靣":"jsfcfcjj","隉":"wfsfjcjjjfj","颮":"sosfcjfjksrcju","颯":"kjksisosfcjfjk","餉":"skkcjjhksfrfcj","驊":"jfjjfrdkkkjffjjffjjf","驍":"jfjjfrdkkkjfjjfijfjjsu","駢":"jfjjfrdkkkksjjsf","滻":"kkikjksjssjjfj","鴆":"deshsfcjjjrdkkk","濜":"kkicjjfjdkkkfcffj","鴇":"sujfsfcjjjrdkkk","餄":"skkcjjhksljfcj","餎":"skkcjjhkselfcj","嫋":"msjcjzkicjzki","頫":"skihskjsfcjjjsk","闓":"cjjffrjjfbfjfcjksj","悽":"dkfjcjjfmsj","塚":"jfidejstssksl","準":"kkisfkjjjfjjf","脣":"jsjjhslfrjj","嗩":"fcjfksfcjjjsk","嘜":"fcjjfskskslsek","嘮":"fcjdsskdsskders","塤":"jfifcjfcjjjsk","塒":"jfifcjjjfjjgk","堝":"jfifccfrfcj","媧":"msjfccfrfcj","孃":"msjkjfcjfcjjjffjshsl","唕":"fcjsfcjjjf","嫺":"msjcjjffrjjsrjj","傢":"sfkdejstsssl","崍":"fbfjskskfsl","嶗":"fbfdsskdsskders","蓆":"jffkjsjffjfrf","幬":"frfjfjejfjjfcjjgk","噁":"fcjjfjxxjfjdykk","徠":"ssfjskskfsl","慳":"dkfjfcjfbeljfj","輓":"jfcjjjfsefcjsu","梱":"jfskfcjfskj","傚":"sfkjsksksjsl","曄":"fcjjjffjjffjjf","暉":"fcjjdejfcjjjf","覈":"jfcffjsfcjjkjrssjsl","欒":"kjjjfcjnnkdkknnkdkkjfsl","慄":"dkfjfcffjjfsl","棬":"jfskksjjslru","椏":"jfskjfjxxjfj","楨":"jfskfjfcjjjsk","檜":"jfsksljfcfksjfcjj","榿":"jfskfbfjfcjksj","橈":"jfskjfjjfijfjjsu","慇":"sscjjrsveldykk","樺":"jfskjffjjffjjf","氬":"sjjojfjxxjfj","凃":"kisljjgsk","濬":"kkifjdejskslfcjjj","潿":"kkifccfjfcjjnfj","淶":"kkijskskfsl","獫":"stssljfcjfcjsksk","燁":"dsskjffjjffjjf","琿":"jjfidejfcjjjf","畱":"jffjbcjfcjfj","貍":"skkstssfcjjfjj","癥":"kjskissffbfjjjfjsjsl","皰":"esfeksrcju","礱":"kjksjfrjjjxjujjjjsfcj","礪":"jsfcjjsjfffcjjfrfik","祕":"kefkdyksk","禎":"kefkfjfcjjjsk","綆":"nnkdkkjfcjjsl","筧":"sjksjkfcjjjsu","綃":"nnkdkkfksfrjj","綉":"nnkdkksjfslws","膾":"srjjsljfcfksjfcjj","臟":"srjjjffjsbjsjfcjfbysk","絛":"sffselnnkgsk","綈":"nnkdkkkscjzfs","艷":"jjjffjjjfbfjfcjksisecfju","蓧":"jffsffseljgsk","涖":"kkisfkjksj","萵":"jfffccfrfcj","蒔":"jfffcjjjfjjgk","緻":"nnkdkkjnkjfisjsl","蕕":"jffstsksjfcsbjj","薟":"jffsljfcjfcjsksk","蒓":"jffnnkdkkjbfu","蠔":"fcjfjkkjfcjdejstsssl","覬":"fbfjfcjksifcjjjsu","鶯":"dsskdsskdesfcjjjrdkkk","袞":"kjskfcjshsl","諏":"kjjjfcjjffjjiel","蜆":"fcjfjkfcjjjsu","諛":"kjjjfcjsfjcjjsl","諑":"kjjjfcjjstssksl","諉":"kjjjfcjsjfslmsj","諗":"kjjjfcjslkedykk","諂":"kjjjfcjsesfjcjj","贄":"jfjksjjfsokfcjjjsk","誶":"kjjjfcjkjskskjf","貲":"fjfisufcjjjsk","賅":"fcjjjskkjnssk","賍":"fcjjjskkjsjfj","輊":"jfcjjjfjnkjfj","躉":"jfffcjjfrfikfcjfjsl","軾":"jfcjjjfjjfiyk","輇":"jfcjjjfsljjfj","賮":"cjjfjdkkkfcjjjsk","輅":"jfcjjjfselfcj","邐":"jfckjfckkjscffjjhsukal","鈺":"skjjfksijjfjk","鈷":"skjjfksijffcj","鉦":"skjjfksijfjfj","鈸":"skjjfksijselk","鈳":"skjjfksijfcjg","鉆":"skjjfksifjfcj","鈽":"skjjfksijsfrf","鉬":"skjjfksifcjjj","鉭":"skjjfksifcjjj","鉄":"skjjfksisjjsl","鉕":"skjjfksijfcjb","鈿":"skjjfksifcjfj","鉞":"skjjfksijhysk","鈰":"skjjfksikjfrf","鑠":"skjjfksisfcjjnnknnkjfsl","鉈":"skjjfksikdesu","鉉":"skjjfksikjnnk","鉍":"skjjfksidyksk","鈹":"skjjfksiesfel","鐸":"skjjfksifcffjjfjksjjf","閫":"cjjffrjjfcjfskj","閬":"cjjffrjjkcjjhsk","鈮":"skjjfksicjssu","雋":"sfkjjjfjfvfr","鬮":"jjfjfjjfjgsfcjfcskjucjjcjj","頊":"jjfijsfcjjjsk","餑":"skkcjjhkjfdeegj","頎":"ssjfjsfcjjjsk","頏":"kjspjsfcjjjsk","驪":"jfjjfrdkkkjfckjfckkjscffjjhsu","騐":"jfjjfrdkkkslkedykk","鴣":"jffcjsfcjjjrdkkk","鶇":"jfcjjfsksfcjjjrdkkk","鸕":"fjesjufcjfjfcffisfcjjjrdkkk","鴝":"srfcjsfcjjjrdkkk","鴟":"shjyksfcjjjrdkkk","鷥":"nnkdkknnkgsksfcjjjrdkkk","齔":"fjfjskskjskskbfsu","傯":"sfsfcsekjdykk","偸":"sfsljfrjjmm","僂":"sffcjjfcjfmsj","鴞":"fcjjzsfcjjjrdkkk","僨":"sfjfjfffcjjjsk","龕":"sljfcjkjksjfrjjjxjujjj","匱":"jfcjfjfcjjjskb","勗":"fcjjfcjjirs","嘖":"fcjjjfjfcjjjsk","厴":"jsfcjjfrjjjslkfcjjf","啗":"fcjsesfjcjj","嚙":"fcjfjfjskskjskskbf","垵":"jfikdemsj","囀":"fcjjfcjjjfjfcjjfikjgk","嗇":"jfskskjfcfcjj","幗":"frffcjfcjiyskj","嬋":"msjfcjfcjfcjjjf","菴":"jffjslfcjju","綵":"nnkdkkskksjfsl","幘":"frfjjfjfcjjjsk","慙":"jfcjjjfssjfdykk","摑":"jgifcjfcjiyskj","愨":"jfjdejsveldykk","愜":"dkfjjskskskb","慼":"jsfjjgskyskdykk","樑":"jfskkkirsdkjfsl","鏇":"skjjfksikjrssjefjsl","摜":"jgibcfjfcjjjsk","櫺":"jfskjdefkkkkfcjfcjfcj","殞":"jsekfcjfcjjjsk","慾":"skskfcjsesldykk","殮":"jseksljfcjfcjsksk","淥":"kkinejgkisl","凟":"kijfjfcffjfcjjjsk","瀋":"kkikdesksjfslfcjfj","燾":"jfjejfjjfcjjgkdkkk","澠":"kkifcjfcjjjujbj","玀":"stsfcffjnnkdkksfkjjjfj","釬":"skjjfksijjf","獼":"stscjzjskfrfsksksksk","燜":"dsskcjjffrjjdykk","畧":"fcjfjselfcj","璉":"jjfijfcjjjfkal","毬":"sjjujgkiskk","瘂":"kjskijfjxxjfj","瑯":"jjfikcjjhkwf","眥":"fjfisufcjjj","皸":"dejfcjjjfesfel","槃":"ssrkjksvekjfsl","覜":"skihskfcjjjsu","墝":"jfijfjjfijfjjsu","硤":"jsfcjjsksksl","糶":"bffbfksjfskckickisfkjjjfj","牋":"sfjcjyskjysk","糲":"ksjfskjsjfffcjjfrfik","纍":"fcjfjfcjfjfcjfjnnkgsk","籩":"sjksjksfcjjjkdeskkjrskal","勣":"jjfjfcjjjskrs","緋":"nnkdkkfjjjfjjj","緔":"nnkdkkfksfrfcj","綾":"nnkdkkjfjsksel","綺":"nnkdkkjskjfcjg","綬":"nnkdkkskksdeel","綹":"nnkdkkselfkfcj","緄":"nnkdkkfcjjjhsu","綣":"nnkdkkksjjslru","綳":"nnkdkksrjjsrjj","綰":"nnkdkkkdefcjcj","綞":"nnkdkksjfjffjj","羥":"ksjjjsjmmmjfj","緇":"nnkdkkmmmfcjfj","聹":"jffjjikdedykkfcffjjg","蔆":"jffkkijfjsksel","腡":"srjjfccfrfcj","縈":"dsskdsskdennkgsk","蠣":"fcjfjkjsjfffcjjfrfik","襠":"kefskfksdefcjfcjfj","蟶":"fcjfjkjffjjifcjjjfj","啣":"fcjsjjfjfirf","覡":"jfskskifcjjjsu","訦":"kjjjfcjdesu","謔":"kjjjfcjfjesjujbj","謁":"kjjjfcjfcjjsrskb","諫":"kjjjfcjjfcksjfsl","諼":"kjjjfcjskksjjsel","諤":"kjjjfcjfcjfcjjjz","諳":"kjjjfcjkjksjfcjj","諦":"kjjjfcjkjksdrfrf","諮":"kjjjfcjkiseslfcj","賕":"fcjjjskjgkislk","賑":"fcjjjskjsjjhsl","諞":"kjjjfcjkcjsfrjff","賚":"jskskfslfcjjjsk","諭":"kjjjfcjsljfrjjfg","輒":"jfcjjjfjffjjiu","醖":"jfcsbjjfcjjfcffj","銬":"skjjfksijfjsjz","蹌":"fcjfjfislkcjjsfcj","銪":"skjjfksijsfrjj","鋮":"skjjfksijsrysk","鉺":"skjjfksijffjjj","鐃":"skjjfksijfjjfijfjjsu","銱":"skjjfksifcjfrf","鋣":"skjjfksijngswf","鋏":"skjjfksijsksksl","銠":"skjjfksijfjssu","鐺":"skjjfksifksdefcjfcjfj","銦":"skjjfksifcjskj","鎧":"skjjfksifbfjfcjksj","鋌":"skjjfksisjfjal","銓":"skjjfksisljjfj","銖":"skjjfksisjjfsl","銩":"skjjfksisjfjnk","鏵":"skjjfksijffjjffjjf","鉿":"skjjfksisljfcj","鎩":"skjjfksiskjgsksvel","錚":"skjjfksisecjjg","銚":"skjjfksiskiusk","銫":"skjjfksisecfju","剷":"kjksjssjjfifg","銃":"skjjfksikjnksu","銣":"skjjfksimsjfcj","艫":"ssrkjkfjesjufcjfjfcffj","銨":"skjjfksikdemsj","鐋":"skjjfksikkifcjjjsrss","閾":"cjjffrjjjfcjiysk","閿":"cjjffrjjskksdeek","閶":"cjjffrjjfcjjfcjj","鬩":"jjfjfjjfjgsfjcjjsu","閽":"cjjffrjjshjyfcjj","閼":"cjjffrjjkjrsslkk","舘":"skjjffcjkdefcjcj","餛":"skkcjjhkfcjjjhsu","騏":"jfjjfrdkkkjffjjjsk","騍":"jfjjfrdkkkfcjjjfsl","騅":"jfjjfrdkkksfkjjjfj","鷙":"jfjksjjfsoksfcjjjrdkkk","鴯":"jsfrffsfcjjjrdkkk","鵂":"sfjfsksfcjjjrdkkk","驂":"jfjjfrdkkknknknkslsss","蔴":"jffkjsjfskjfsl","鸞":"kjjjfcjnnkdkknnkdkksfcjjjrdkkk","麩":"jfsksksksekjjsl","礄":"jsfcjsjslfcjfrfcj","諝":"kjjjfcjefjslfrjj","璡":"jjfisfkjjjfjkal","囉":"fcjfcffjnnkdkksfkjjjfj","褻":"kjjfjskjfisokshsl","餜":"skkcjjhkfcjjjfsl","儐":"sfkdejfssfcjjjsk","僳":"sfjfcffjksjfsl","儻":"sffksdefcjfcksjfjjdkkk","賸":"srjjksjjslfcjjjsk","嘍":"fcjfcjjfcjfmsj","嚳":"sfjjskskcjjdesjfjfcj","隄":"wffcjjjfjsl","餵":"skkcjjhkfcjfjjhsl","儺":"sfjffjfcjjjsksfkjjjfj","媼":"msjfcskjfcffj","嶁":"fbffcjjfcjfmsj","嶸":"fbfdsskdsskdejfsl","巰":"jmmmjfikjnksfu","崳":"fbfsljfrjjfg","慍":"dkffcskjfcffj","憒":"dkffcjfjfcjjjsk","摣":"jgifjesjufcjjj","搇":"jgislkekjshsl","蒐":"jffsfcjjsunk","稜":"sjfskjfjsksel","箠":"sjksjksjfjffjj","匵":"jjfjfcffjfcjjjskb","槨":"jfskkjfcjegiwf","槧":"jfcjjjfssjfjfsl","櫂":"jfskckickisfkjjjfj","欏":"jfskfcffjnnkdkksfkjjjfj","溼":"kkijnnknnkjfj","毿":"nknknkslssssjju","殫":"jsekfcjfcjfcjjjf","牘":"sfjcjfjfcffjfcjjjsk","燄":"sesfjcjjdsskdssl","漵":"kkiskjjgsksjsl","佘":"sljjgsk","蝟":"fcjfjkfcjfjfrjj","癆":"kjskidsskdsskders","癇":"kjskicjjffrjjsrjj","睞":"fcjjjjskskfsl","禪":"kefkfcjfcjfcjjjf","瞼":"fcjjjsljfcjfcjsksk","篳":"sjksjkfcjjjffjjf","箏":"sjksjkskkscjjg","縶":"jfjksjjfsoknnkgsk","緙":"nnkdkkjffjfcjjf","緗":"nnkdkkjfskfcjjj","緹":"nnkdkkfcjjjfjsl","繢":"nnkdkkfcjfjfcjjjsk","緲":"nnkdkkfcjjjfsks","緱":"nnkdkksfcjsjjsl","緶":"nnkdkksfjfcjjsl","緦":"nnkdkkfcjfjdykk","縋":"nnkdkksfcjcjkal","緍":"nnkdkkshjyfcjj","潟":"kkisfjcjjsrdkkk","蕆":"jffjsfcjjjskysk","醃":"jfcsbjjjslfcjju","蕢":"jfffcjfjfcjjjsk","蔞":"jfffcjjfcjfmsj","臠":"kjjjfcjnnkdkknnkdkkfrsksk","蛺":"fcjfjkjsksksl","螄":"fcjfjksfcjcjjfrf","蠐":"fcjfjkkjksfrsshlsfjj","蟯":"fcjfjkjfjjfijfjjsu","褳":"kefskjfcjjjfkal","襇":"kefskcjjffrjjfcjj","襝":"kefsksljfcjfcjsksk","覿":"jfjfcffjfcjjjskfcjjjsu","謨":"kjjjfcjjfffcjjjsl","觴":"sesrjfjsjfcjjjsrss","謖":"kjjjfcjfcjfjsksel","讜":"kjjjfcjfksdefcjfcksjfjjdkkk","諡":"kjjjfcjsljzfcffj","賫":"jfskskdefcjjjsk","謐":"kjjjfcjdykskfcffj","賡":"kjscjjslfcjjjsk","躒":"fcjfjfisfcjjnnknnkjfsl","蹠":"fcjfjfikjsjffjdkkk","輦":"jjskjjsljfcjjjf","煇":"dsskdejfcjjjf","賧":"fcjjjskdsskdssl","輞":"jfcjjjffrksjkjb","輟":"jfcjjjfekekekel","鐒":"skjjfksidsskdsskders","輜":"jfcjjjfmmmfcjfj","錸":"skjjfksijskskfsl","舖":"skjjffcjjfrjjfk","鋱":"skjjfksijdykkyk","鏗":"skjjfksijfcjfbeljfj","耡":"jjjfskfcjjirs","鋥":"skjjfksifcjjjfj","鋰":"skjjfksifcjjfjj","鋯":"skjjfksisjfjfcj","銹":"skjjfksisjfslws","鋨":"skjjfksisjgiysk","鋶":"skjjfksikjnksfu","鉲":"skjjfksifjjfk","鐧":"skjjfksicjjffrjjfcjj","錒":"skjjfksiwfjfcjg","鋟":"skjjfksicjjdeel","鋃":"skjjfksikcjjhsl","僱":"sfkcjssfkjjjfj","闃":"cjjffrjjfcjjjjskk","濶":"kkicjjffrjjsjffcj","鋦":"skjjfksicjsrfcj","靂":"jdefkkkkjssjfsksjfslfjfj","靚":"jjfjfrjjfcjjjsu","頡":"jfjfcjjsfcjjjsk","頦":"kjnsskjsfcjjjsk","頜":"skjfcjjsfcjjjsk","潁":"sugeskjsfcjjjsk","饗":"nnskcjjhkwfslkcjjhsk","餷":"skkcjjhkjfslfcjjj","闋":"cjjffrjjekssljjsk","颶":"sosfcjfjkfcjjjjsk","餿":"skkcjjhksfjcjjfel","騗":"kcjsfrjffjfjjfrdkkk","魷":"sefcjfjdkkkjsuk","騖":"ekegssjsljfjjfrdkkk","騭":"wffjfjfssjfjjfrdkkk","餽":"skkcjjhksfcjjsunk","魴":"sefcjfjdkkkkjrs","鵓":"jfdeegisfcjjjrdkkk","鵒":"skskfcjsfcjjjrdkkk","鸝":"jfckjfckkjscffjjhshsfcjjjrdkkk","鷳":"cjjffrjjsrjjsfcjjjrdkkk","鵜":"kscjzfssfcjjjrdkkk","鵠":"sjfjfcjsfcjjjrdkkk","鵐":"jfskskisfcjjjrdkkk","黿":"jjsufcjfcjjjujbj","縉":"nnkdkkjffksjfcjj","嬡":"msjskksdedykksel","噯":"fcjskksdedykksel","勦":"mmmfcjjjfskrs","嬪":"msjkdejfssfcjjjsk","翬":"ckickidejfcjjjf","曡":"fcjjfcjjfcjjdefcjjj","尲":"jsuksjcjjffsk","囁":"fcjjffjjjjffjjijffjjj","慴":"dkfckickisfcjj","湣":"kkicjhjyfcjj","瘉":"kjskisljfrjjfg","攄":"jgifjesjufcjfjdykk","擕":"jgisfkjjjfjfvfr","櫬":"jfskkjksjjgskfcjjjsu","櫸":"jfsksfjjjxfcjjjsljjf","煖":"dsskskksjjsel","欖":"jfskjfcjfbsjkfcffjfcjjjsu","氳":"sjjofcskjfcffj","霤":"jdefkkkkshkrsfcjfj","轂":"jfjdejjfcjjjfsvel","灧":"kkijjjffjjjfbfjfcjksisecfju","潷":"kkisjksjkcjjjjf","灄":"kkijffjjjjffjjijffjjj","谿":"skksnnkjskskslfcj","瀅":"kkidsskdsskdejjfjk","灕":"kkikjskbffrnksfkjjjfj","煆":"dsskcjfjjcjel","炤":"dsskrsfcj","硶":"jsfcjfbfslke","磧":"jsfcjjjfjfcjjjsk","癉":"kjskifcjfcjfcjjjf","痺":"kjskisfcjjsjf","穌":"sefcjfjdkkksjfsl","稟":"kjfcfcjjsjfsl","篠":"sjksjksffseljgsk","竇":"kdeskjfjfcffjfcjjjsk","縟":"nnkdkkjsjjhsljgk","縝":"nnkdkkjffcjjjjsk","縞":"nnkdkkkjfcjfrfcj","縭":"nnkdkkkjskbffrnk","縊":"nnkdkkksjskfcffj","繽":"nnkdkkkdejfssfcjjjsk","齶":"fjfjskskjskskbffcjfcjjjz","耮":"jjjfskdsskdsskders","縑":"nnkdkkksjcjjffsl","靦":"jsfcffjjjfcjjjsu","膃":"srjjfcskjfcffj","懞":"dkfjffdejjstsssl","簑":"sjksjkkjfcjjshsl","蕷":"jffekegjsfcjjjsk","蘺":"jffkjskbffrnksfkjjjfj","鎣":"dsskdsskdesljjfksj","驀":"jfffcjjjsljfjjfrdkkk","覦":"skjfrjjfgfcjjjsu","謫":"kjjjfcjkjksfrjffcj","譾":"kjjjfcjksjfrjjfgrkirki","蹕":"fcjfjfifcjjjffjjf","躚":"fcjfjfijfcffjjskcjukal","蹺":"fcjfjfijfjjfijfjjsu","輳":"jfcjjjfjjjsljjsk","辤":"skksdeekkjksjjf","酧":"jfcsbjjkdejgk","闢":"cjjffrjjcjsfcjkjksjjf","躋":"fcjfjfikjksfrsshlsfjj","轡":"nnkdkkjfcjjjfnnkdkkfcj","鍩":"skjjfksijffjsfcj","錁":"skjjfksifcjjjfsl","錛":"skjjfksijsljfjsf","鋻":"jfcjfbeksljjfksj","錆":"skjjfksijjfjfrjj","醯":"jfcsbjjkjnksfufcffj","鍀":"skjjfksifcjjjjgk","錕":"skjjfksifcjjjhsu","鍃":"skjjfksisrssdykk","錮":"skjjfksifcjffcjj","錇":"skjjfksikjksjfcj","錈":"skjjfksiksjjslru","闔":"cjjffrjjjfjnkfcffj","闐":"cjjffrjjjffcjjjjsk","錟":"skjjfksidsskdssl","闕":"cjjffrjjksjbfssesk","錙":"skjjfksimmmfcjfj","韙":"fcjjjfjslcfjfcjjnf","韞":"cfjfcjjnffcjjfcffj","饃":"skkcjjhkjfffcjjjsl","頷":"skkefcjjsfcjjjsk","颼":"sosfcjfjksfjcjjfek","穨":"sjfskspfcjfjfcjjjsk","饈":"skkcjjhkksjjjscfjj","騮":"jfjjfrdkkkshkrsfcjfj","鮁":"sefcjfjdkkkjselk","驁":"jjfjrssjsljfjjfrdkkk","騫":"kdejjffjsljfjjfrdkkk","騸":"jfjjfrdkkkkcjsrkirki","鱸":"sefcjfjdkkkfjesjufcjfjfcffj","鮒":"sefcjfjdkkksfjgk","鮃":"sefcjfjdkkkjksjf","鮎":"sefcjfjdkkkfjfcj","鮐":"sefcjfjdkkknkfcj","鱟":"sfjjskskcjjdesefcjfjdkkk","鵪":"jskfcjjhsfcjjjrdkkk","鵯":"sfcjjsjfsfcjjjrdkkk","鵡":"jjfjfiyksfcjjjrdkkk","鶓":"jfffcjfjsfcjjjrdkkk","鶉":"kjfcjegisfcjjjrdkkk","齙":"fjfjskskjskskbfsrcju","躂":"fcjfjfijfjksjjjfkal","齟":"fjfjskskjskskbffcjjj","齠":"fjfjskskjskskbfrsfcj","廝":"kjsjffjjjskssjf","嚶":"fcjfcjjjskfcjjjskmsj","墻":"jfijfskskjfcfcjj","攖":"jgifcjjjskfcjjjskmsj","鄘":"kjscjjfrjjfwf","戩":"jnknkjfcjjjysk","曖":"fcjjskksdedykksel","嬙":"msjjfskskjfcfcjj","搾":"jgikdesksjfjj","旂":"kjrssjssjf","櫧":"jfskkjjjfcjjfjsfcjj","縯":"nnkdkkkdejfcjfjsk","瀠":"kkidsskdsskdennkgsk","檳":"jfskkdejfssfcjjjsk","瀲":"kkiskjfcjfcjsksksjsl","糢":"ksjfskjfffcjjjsl","殯":"jsekkdejfssfcjjjsk","瀟":"kkijffcjjfsfjjcbfjf","橰":"jfsksfcjjjkiskjf","琍":"jjfisjfskfg","瘞":"kjskijsksksljfj","瀦":"kkijstssskjfjsfcjj","瘺":"kjskicjsjfrfkkkk","璦":"jjfiskksdedykksel","窶":"kdeskfcjjfcjfmsj","耑":"fbfjsfrff","琯":"jjfikdefcjcj","燻":"dssksjfcksjfjjdkkk","簀":"sjksjkjjfjfcjjjsk","镟":"sjjjhkjrssjefjsl","篋":"sjksjkjjskskskb","篛":"sjksjkcjzkicjzki","糝":"ksjfsknknknkslsss","縹":"nnkdkkjfcffjjjgsk","縵":"nnkdkkfcjjfcffjel","簞":"sjksjkfcjfcjfcjjjf","籜":"sjksjkjgifcffjjfjksjjf","簫":"sjksjkcjjfsfjjcbfjf","縲":"nnkdkkfcjfjnnkgsk","甖":"fcjjjskfcjjjskjhok","繆":"nnkdkkckickislsss","臏":"srjjkdejfssfcjjjsk","繅":"nnkdkkmmmfcjjjfsl","羆":"fcffjnkfrjjsusudkkk","藺":"jffcjjffrjjsfkjjjfj","蘞":"jffskjfcjfcjsksksjsl","衊":"sfcffijfffcffjjskysk","踡":"fcjfjfiksjjslru","蟈":"fcjfjkfcjfcjiyskj","覯":"jjffjfrfjjfcjjjsu","譖":"kjjjfcjjbshjbsufcjj","譙":"kjjjfcjsfkjjjfjdkkk","譎":"kjjjfcjekegsfrskfcj","賻":"fcjjjskjfcjjfkjgk","釅":"jfcsbjjfcjfcjjsejffjjisjsl","釃":"jfcsbjjjfckjfckkjscffjjhsu","鍥":"skjjfksijjjfrsjsl","鍇":"skjjfksijhsusfcjj","鍔":"skjjfksifcjfcjjjz","鏘":"skjjfksibfjssekkjgk","痠":"kjskinksksel","鍤":"skjjfksisjfsfjcjj","鍫":"sjfskdssksljjfksj","鍶":"skjjfksifcjfjdykk","鑾":"kjjjfcjnnkdkknnkdkksljjfksj","鎪":"skjjfksisfjcjjfel","鍰":"skjjfksiskksjjsel","鎄":"skjjfksikjfcjshsl","鐨":"skjjfksicjzsffcjjjsk","闞":"cjjffrjjejffjjisjsk","鋂":"skjjfksisjbrkjk","霽":"jdefkkkkkjksfrsshlsfjj","饉":"skkcjjhkjffjfcjjjfj","韜":"cfjfcjjnfskkssfjcjj","鏤":"skjjfksifcjjfcjfmsj","驃":"jfjjfrdkkkjfcffjjjgsk","鮫":"sefcjfjdkkkkjsksl","鮚":"sefcjfjdkkkjfjfcj","鮭":"sefcjfjdkkkjfjjfj","鮞":"sefcjfjdkkkjsfrff","鮪":"sefcjfjdkkkjsfrjj","鱭":"sefcjfjdkkkkjksfrsshlsfjj","鯗":"ksjjjslsefcjfjdkkk","鱘":"sefcjfjdkkkcjjjfifcjjgk","驄":"jfjjfrdkkksfcsekjdykk","鶘":"jffcjsrjjsfcjjjrdkkk","鶚":"fcjfcjjjzsfcjjjrdkkk","齜":"fjfjskskjskskbffjfisu","鶿":"ksjnnknnksfcjjjrdkkk","鶻":"fccdefrjjsfcjjjrdkkk","鶥":"cfjsfcjjjsfcjjjrdkkk","鶩":"ekegssjslsfcjjjrdkkk","齦":"fjfjskskjskskbfcjjhsl","譆":"kjjjfcjjfjfcjksjfcj","襆":"kefskffksjksjjjsl","嚕":"fcjsefcjfjdkkkfcjj","屨":"cjsssffcjjfcjfmsj","擼":"jgisefcjfjdkkkfcjj","擷":"jgijfjfcjjsfcjjjsk","攛":"jgikdesksfjcjjhkkhkky","櫫":"jstssskjfjsfcjjjfsl","檣":"jfskjfskskjfcfcjj","璿":"jjfifjdejskslfcjjj","澂":"kkifbfjjjfjsjsl","瓔":"jjfifcjjjskfcjjjskmsj","餱":"skkcjjhksfejsjjsl","纈":"nnkdkkjfjfcjjsfcjjjsk","簣":"sjksjkfcjfjfcjjjsk","繒":"nnkdkkksfcfksjfcjj","耬":"jjjfskfcjjfcjfmsj","繚":"nnkdkkjslksfcjjgsk","蘄":"jfffcjfcjfcjjjfssjf","聵":"jffjjifcjfjfcjjjsk","蠑":"fcjfjkdsskdsskdejfsl","覲":"jffjfcjjjfifcjjjsu","螻":"fcjfjkfcjjfcjfmsj","襤":"kefskjfcjfbsjkfcffj","觶":"sesrjjffcjfcjfcjjjf","覰":"fjesjufcjjifcjjjsu","讞":"kjjjfcjfjesjujfcjfrksjfjslk","譫":"kjjjfcjsejsskkjjjfcj","賾":"jffcjfbjjfjfcjjjsk","躑":"fcjfjfiksjfcsbjjjskwf","鏌":"skjjfksijfffcjjjsl","鎘":"skjjfksijfcjfrksjf","轆":"jfcjjjfkjscffjjhsu","躓":"fcjfjfissjfssjffcjjjsk","鎦":"skjjfksishkrsfcjfj","鎰":"skjjfksiksjskfcffj","錼":"skjjfksijsljjgsk","靨":"jsfcjjfrjjjslkjsfcffjjj","韃":"jffjfcjjfjfjksjjjfkal","鎵":"skjjfksikdejstsssl","鑌":"skjjfksikdejfssfcjjjsk","鞽":"jffjfcjjfsjslfcjfrfcj","顓":"fbfjsfrffjsfcjjjsk","顏":"kjskjssssjsfcjjjsk","顎":"fcjfcjjjzjsfcjjjsk","饌":"skkcjjhkcjucjujffjsk","飃":"sosfcjfjkjfcffjjjgsk","饜":"jsfcjjfrjjjskkslkcjjhsk","饊":"skkcjjhkjffjfrjjsjsl","鱺":"sefcjfjdkkkjfckjfckkjscffjjhsu","骾":"fccdefrjjjfcjjsl","驏":"jfjjfrdkkkcjsegjegiegj","鰱":"sefcjfjdkkkjfcjjjfkal","鰷":"sefcjfjdkkksffseljgsk","鰹":"sefcjfjdkkkjfcjfbeljfj","魘":"jsfcjjfrjjjslksfcjjsunk","鰣":"sefcjfjdkkkfcjjjfjjgk","鮌":"sefcjfjdkkkkjnnk","鯇":"sefcjfjdkkkkdejjsu","鯊":"kkifskssefcjfjdkkk","鯽":"sefcjfjdkkkcjjhkrf","齪":"fjfjskskjskskbffcjfjsl","鎔":"skjjfksikdeskslfcj","齏":"kjksfrsshlsfjjfjjjfjjjj","鷂":"skkssjjfbfsfcjjjrdkkk","鶼":"ksjcjjffsksfcjjjrdkkk","齬":"fjfjskskjskskbfjfcjfcj","譟":"kjjjfcjfcjfcjfcjjfsl","廩":"kjskjfcfcjjsjfsl","斕":"kjskcjjffrjjjfcksjfsk","嬾":"msjjfcjfsksefcjjjsk","瀨":"kkijfcjfsksefcjjjsk","氌":"sjjusefcjfjdkkkfcjj","懍":"dkfkjfcfcjjsjfsl","櫞":"jfsknnkdkknejstsssl","櫓":"jfsksefcjfjdkkkfcjj","讌":"kjjjfcjjffjfcjfjisudkkk","癭":"kjskifcjjjskfcjjjskmsj","穡":"sjfskjfskskjfcfcjj","繾":"nnkdkkfcjfjfcjcjkal","繰":"nnkdkkfcjfcjfcjjfsl","繮":"nnkdkkjfcjfjjfcjfjj","癮":"kjskiwfskksjfjcjjdykk","繯":"nnkdkkfcffjjfcjshsl","蟎":"fcjfjkjffjfrfsksk","藪":"jfffcjjfcjfmsjsjsl","轔":"jfcjjjfksjfslsekjnf","鏨":"jfcjjjfssjfsljjfksj","贋":"jssfsfkjjjfjfcjjjsk","鏢":"skjjfksijfcffjjjgsk","鏜":"skjjfksifksdefcjjfj","顳":"jffjjjjffjjijffjjijsfcjjjsk","彫":"srjfjfcjsss","鏍":"skjjfksifcjfjnnkgsk","鏑":"skjjfksikjksfrjffcj","鏞":"skjjfksikjscjjfrjjf","顢":"jffjfrfskskjsfcjjjsk","鏝":"skjjfksifcjjfcffjel","顙":"ekekekjfskjsfcjjjsk","鏃":"skjjfksikjrssjsjjsl","飈":"sosfcjfjkdsskdsskdssk","飆":"jskkjskkjskksosfcjfjk","鯖":"sefcjfjdkkkjjfjfrjj","魎":"sfcjjsunkjfrfsksk","鯤":"sefcjfjdkkkfcjjjhsu","鯫":"sefcjfjdkkkjffjjiel","鯢":"sefcjfjdkkksfjcjjsu","鯛":"sefcjfjdkkksrjfjfcj","鯪":"sefcjfjdkkkjfjsksel","鯧":"sefcjfjdkkkfcjjfcjj","鯝":"sefcjfjdkkkfcjffcjj","鯡":"sefcjfjdkkkfjjjfjjj","鯔":"sefcjfjdkkkmmmfcjfj","鯴":"sefcjfjdkkkosfcjfjk","鸚":"fcjjjskfcjjjskmsjsfcjjjrdkkk","鯰":"sefcjfjdkkkslkedykk","鷚":"ckickiskssssfcjjjrdkkk","贇":"kjskjjfjfiykfcjjjsk","鹺":"fjfcskkkkkjksjjjsjfj","鷓":"kjsjffjdkkksfcjjjrdkkk","懣":"kkijffjfrfskskdykk","簷":"sjksjksejsskkjjjfcj","黌":"sfjjskskcjjdejffjfcjfjsk","檁":"jfskkjfcfcjjsjfsl","嬤":"msjkjsjfskjfslnnk","燐":"dsskksjfslsekjnf","籪":"sjksjknnknnkjnnknnkbssjf","羶":"ksjjjskjfcfcjjfcjjj","羈":"fcffjjffjfcjjfjfjjfrdkkk","鐔":"skjjfksijfcffjfcjjjf","蘚":"jffsefcjfjdkkkksjjjf","繈":"nnkdkkcjznkfcjfjk","鐝":"skjjfksijsksjbfssesl","躡":"fcjfjfijffjjjjffjjijffjjj","蹣":"fcjfjfijffjfrfsksk","鑥":"skjjfksisefcjfjdkkkfcjj","鐓":"skjjfksikjfcjegisjsl","鏷":"skjjfksiffksjksjjjsl","鐠":"skjjfksiksjffksjfcjj","鑹":"skjjfksikdesksfjcjjhkkhkky","鐙":"skjjfksiekssljfcjksj","鑭":"skjjfksicjjffrjjjfcksjfsk","鏹":"skjjfksicjzfcjfcjfjk","鰌":"sefcjfjdkkkksjfcsbjj","鰈":"sefcjfjdkkkjffjbjfsl","鱝":"sefcjfjdkkkjfjfffcjjjsk","鰒":"sefcjfjdkkksjfcjjsel","鯿":"sefcjfjdkkkkcjsfrjff","鰐":"sefcjfjdkkkfcjfcjjjz","鰉":"sefcjfjdkkksfcjjjjfj","鷦":"sfkjjjfjdkkksfcjjjrdkkk","鰠":"sefcjfjdkkkelkfcjfjk","鷯":"jskksfcjjgsksfcjjjrdkkk","鷲":"kjfcjgskjsuksfcjjjrdkkk","鷸":"ekegsfrskfcjsfcjjjrdkkk","嚻":"fcjfcjjsfcjjjskfcjfcj","齷":"fjfjskskjskskbfcjsjnkjfj","癩":"kjskijfcjfsksefcjjjsk","囅":"fcjfcjfcjjjfcjsjffjhsl","籐":"sjksjksrjjksjjslgkisk","鑊":"skjjfksijffsfkjjjfjel","繙":"nnkdkksksjfslfcjfj","鋜":"skjjfksifcjfjsl","鐿":"skjjfksikjksjfcjjdykk","韉":"jffjfcjjfjffkjscffjjzdkkk","顥":"fcjjkjfcjgskjsfcjjjsk","髏":"fccdefrjjfcjjfcjfmsj","鰲":"jjfjrssjslsefcjfjdkkk","讎":"sfkjjjfjkjjjfcjsfkjjjfj","騣":"jfjjfrdkkkskbfsksel","鰭":"sefcjfjdkkkjfjssufcjj","鷺":"fcjfjfiselfcjsfcjjjrdkkk","鰩":"sefcjfjdkkkskkssjjfbf","鰥":"sefcjfjdkkkfcffjfsskk","鰨":"sefcjfjdkkkfcjjrkirki","儹":"sfsjfjshsjfjsufcjjjsk","鸌":"sfcjjjrdkkkjffsfkjjjfjel","巔":"fbfjffcjjjjskjsfcjjjsk","鑔":"skjjfksikdesekkeljjgsk","躕":"fcjfjfikjsjfjfcjksijgk","纘":"nnkdkksjfjshsjfjsufcjjjsk","讖":"kjjjfcjskskjfjjjfjjjiysk","籟":"sjksjkjfcjfsksefcjjjsk","靄":"jdefkkkkkjjjfcjfcjjsrskb","韝":"cfjfcjjnfjjffjfrfjj","髖":"fccdefrjjkdejfffcjjjsuk","驥":"jfjjfrdkkkfjisufcjfjjffjsk","鰻":"sefcjfjdkkkfcjjfcffjel","髕":"fccdefrjjkdejfssfcjjjsk","鰵":"sjbckjksjslsefcjfjdkkk","鱈":"sefcjfjdkkkjdefkkkkcjj","鱉":"ksfcfsksjslsefcjfjdkkk","鰳":"sefcjfjdkkkjffjfcjjfrs","鰾":"sefcjfjdkkkjfcffjjjgsk","鑣":"skjjfksikjscffjjhsudkkk","鱅":"sefcjfjdkkkkjscjjfrjjf","燿":"dsskckickisfkjjjfj","鞀":"jffjfcjjfrsfcj","瓚":"jjfisjfjshsjfjsufcjjjsk","髩":"jfjjjnksssjfbr","顬":"jdefkkkkjsfrffjsfcjjjsk","鱖":"sefcjfjdkkkjsksjbfssesl","驤":"jfjjfrdkkkkjfcjfcjjjffjshsl","鱓":"sefcjfjdkkkfcjfcjfcjjjf","灝":"kkifcjjkjfcjgskjsfcjjjsk","癲":"kjskijffcjjjjskjsfcjjjsk","鱒":"sefcjfjdkkkksjfcsbjjjgk","黷":"fcksjfjidkkkjfjfcffjfcjjjsk","顰":"fjfjfssjsfcjjjsksfcjjsjf","躪":"fcjfjfijffcjjffrjjsfkjjjfj","鼉":"fcjfcjfcjfjjfcjfcjjjujbj","黲":"fcksjfjidkkknknknkslsss","鸛":"jfffcjfcjsfkjjjfjsfcjjjrdkkk","趲":"jfjfjslsjfjshsjfjsufcjjjsk","鱧":"sefcjfjdkkkfcjffjjfcjksj","齇":"sfcjjjfcjfjjsffjesjufcjjj","戇":"kjksjfcjjjfseljfjfcjjjskdykk","饢":"skkcjjhkjfcjfdefcjfcjjjffjshsl","臒":"srjjjffsfkjjjfjel","躦":"fcjfjfisjfjshsjfjsufcjjjsk","鼴":"sfjcjjhkkhkkyjfcjjmsjb"}');
    }, function(j) {
      j.exports = JSON.parse('{"simple":"出饥才制皑蔼碍爱肮翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙币闭辟边编贬变辩辫标鳖别瘪濒滨宾摈饼并拨钵铂驳卜补财采参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮床闯创锤唇纯绰辞词赐聪葱囱从丛凑蹿窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔颠点垫电淀钓调迭谍叠钉顶锭订丢东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺堕鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞诽废费纷坟奋愤粪丰枫峰锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗杠皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾雇剐挂关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉号阂鹤贺横恒轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥迹讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧将浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎鲸惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪厘篱离里鲤礼栗丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥秘觅幂绵缅庙灭悯闽鸣铭谬谋亩呐钠纳难挠脑恼闹馁内拟你腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞抛赔喷鹏骗飘频贫苹凭评泼颇扑铺仆朴谱栖凄脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲寝轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊确群让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀刹纱筛晒删闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸虱时蚀实识驶势适释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲松耸怂颂讼诵擞苏诉肃虽随绥岁孙损笋缩琐锁獭挞抬台态摊贪瘫滩坛谭谈叹汤烫涛绦讨腾誊锑题体屉条贴铁厅听烃铜统头秃图涂团颓蜕托脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝卧呜钨乌污诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦吓锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧嚣销晓啸蝎协挟携胁谐写泻谢锌衅兴凶汹锈绣虚嘘须许叙绪续轩悬选癣绚学勋熏询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严岩颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮隐樱婴鹰应缨莹萤营荧蝇赢颖哟拥佣痈踊咏涌优忧邮铀犹游诱于舆余鱼渔娱与屿语郁吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣皂灶责择则泽贼赠扎札轧铡闸栅诈斋债毡盏斩辗崭栈占战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁征狰争帧郑证织职执纸挚掷帜质滞钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆准着浊兹咨资渍踪综总纵邹诅组钻闩刍劢叽戋讦讧讪邝钅亘伛伥伧伫凫厍圹忏扪犷犸玑纡纣纥纨纩芗讴讵讷邬钆钇闫饧佥刭吣呒呓呖呗呙囵坂坜奁奂妩妪妫岖岘岙岚帏庑忾怃怄怅怆抟杩欤沣沩炀疖矶纭纰纾芈苁苈苋苌苎虬诂诃诋诎诏诒轫邺钊钋钌闱闳闵闶陉饨饩饪饫饬鸠侪侬兖刿剀匦卺咛咝垅垆姗岽峄弪怿戗昙枞枥枧枨枭殁泷泸泺泾炖炜炝牦玮瓯疠砀籴绀绁绂绉绋绌绐肴苘茏茑茔茕虮诓诔诖诘诙诜诟诠诤诨诩轭迩迳郏郐郓钍钏钐钔钕钗饴驵驷驸驺驽驿骀鸢黾祎俣俦俨俪咤哒哓哔哕哙哜哝垩垭垲垴姹娅娆娈峤峥怼恸恹恺恻恽挢昵柽栀栉栊栌栎殇泶浃浈浍浏浒浔狯狲珑疬眍砗砜祢笃籼绔绗绛胧胨胪胫舣荛荜荞荟荠荥荦荨荩荪荬荭荮虿觇诮诰诳诶贲贳贶贻轱轲轳轵轶轷轸轹轺郦钚钛钜钣钤钪钫钬钭钯闼闾陧顸飑飒饷骁骅骈鸨鸩袅唛唠唢埘埙埚娲娴崂崃帱徕悭晔晖栾桠桡桢桤桦桧氩涞涠烨猃玺珲疱疴砺砻祯笕绠绡绨脍莅莳莴莶莸莺莼蚝蚬衮觊诹诼诿谀谂谄谇贽赀赅赆趸轼轾辁辂逦钰钲钴钶钷钸钹钺钼钽钿铄铈铉铊铋铌铍铎阃阄阆隽顼颀颃饽馀骊鸪鸫鸬鸱鸲鸶龀龛偬偻偾匮厣啧啬啭埯婵帻帼悫惬掴掼棂殒殓渌渎渑渖焖焘猕猡琏痖皲眦硖硗稆笾粜粝绫绮绯绱绲绶绺绻绾缁缍羟聍脶舻萦蛎蛏裆觋谌谏谑谒谔谕谖谘谙谛谝赇赈赉跄辄铐铑铒铕铖铗铘铙铛铞铟铠铢铤铥铧铨铩铪铫铮铯铳铴铵铷阈阊阋阌阍阏馄骐骒骓骖鸷鸸鸹鸺鸾麸亵傥傧傩喽喾媪嵘嵝巯弑愠愦揿椁椟椠椤殚毵溆牍猬痨痫睐睑禅筚筝絷缂缃缇缈缋缌缏缑缒缗脔腌蒇蒉蒌蛱蛲蛳蛴裢裣裥觌觞谟谠谡谥谧赍赓赕跞辇辋辍辎铹铼铽铿锂锃锆锇锉锊锍锎锏锒锓锔锕阒阕雳靓颉颌颍颏飓飨馇馊骘骛鱿鲂鹁鹂鹄鹆鹇鹈鼋缙嗫嗳嫒嫔尴摅榄榇榈榉毂氲滗滟滠滢瘅碛碜禀稣窦缛缜缟缡缢缣缤耢腭腼腽蓠蓣蓥蓦觎谪谫跷跸跹跻辏辔锖锘锛锝锞锟锢锩锪锫锬锱阖阗阙韪韫颔飕馍馐骜骝骞骟鲅鲆鲇鲈鲋鲎鲐鹉鹋鹌鹎鹑龃龅龆厮嘤嫱戬撄暧槟槠殡潆潇潋潴瑷瘗瘘窭箦箧箨箪箫粽糁缥缦缧缪缫罂罴膑蔹蔺蝈褛觏谮谯谲赙酽酾銮锲锴锵锶锷锸锺锼锾锿镂镄镅阚霁韬馑骠骢鲑鲒鲔鲕鲚鲛鲞鲟鹕鹗鹘鹚鹛鹜麽龇龈噜屦幞撷撸撺樯橥璎篑糇糍缬缭缯耧聩蕲蝼蝾褴觐觑觯谳谵赜踬踯辘镆镉镌镎镏镒镓镔靥鞑鞒颚颛餍馓馔骣魇鲠鲡鲢鲣鲥鲦鲧鲨鲩鲫鹞鹣齑龉龊廪懔斓橹橼氇濑瘾瘿穑缰缱缲缳薮螨赝辚錾镖镗镘镙镛镝镞镟颞颟颡飙飚魉鲭鲮鲰鲱鲲鲳鲴鲵鲶鲷鲺鲻鹦鹧鹨鹾黉嬷懑檩簖羁膻藓蹑蹒镡镢镤镥镦镧镨镩镪镫鲼鲽鳄鳅鳆鳇鳊鳋鹩鹪鹫鹬龌冁癞镬镯镱雠鞯颢髅鳌鳍鳎鳏鳐鹭鹱巅籁缵谶蹰镲霭鞲骥髋髌鳓鳔鳕鳗鳘鳙鼗瓒蘖镳颥骧鬓鳜鳝鳟黩黪鼍灏癫躏颦鳢鹳趱躜鼹齄馕戆里回赞砖厂乃千干为升厅历夫扎冬只台处奶布仿众伪关冱凼吊吃合向回奸尽岁戏当扣曲朱欢杂纤考阶贠佑体佛克刨医呆听困坑址坛坝妫局奁妩彷志折杆沩泛灵系芸苏证谷闲韧驱旸佩玙侄凭刮厕卷周咔国岩岽幸弦念征抵拐杯昆构板欣泄沓注沾牦狍线罗舍肷规表视迤郄采隶闸闹举兹修勋咴叙咱咽哄哗垧姜恤总恹珏珉竖绒秋背胡荡荫药蚁钟钥钩面浐浕饸饹俯闿冢埙娘唣家席恶挽捆效核桊殷涂浚留狸症绣脏艳莜莅致莼赃赆钵钻铁验偷鸮勖啖啮庵彩惭戚欲渎焊略球琅盘眺硗笺累绩绱绷菱衔谌酝铲馆麻硚谞琎啰馃傈剩堤喂嵛揸揿搜棱棰椟棹焰畲缗舄裥赍跖辉铺锄锈锎锏阔骗馈鹀剿翚叠尴慑愍愈携暖溜滟溪漓煅照碜痹筱签蒙蓑辞酬鉴酰锨颓跶墙墉榨旗演模槔璃瘘碱端管熏碹箬罂蔑蜷酸锹镅嘻璇澄觑镎飘鲠鲧镕噪懒燕赞赝雕鲶赟檐磷襁镢鳅鳄嚣藤翻镯鬃攒耀鬓鳝癯","trad":"齣饑纔製皚藹礙愛骯翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃幣閉闢邊編貶變辯辮標鱉別癟瀕濱賓擯餅並撥鉢鉑駁蔔補財採參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟產闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡牀闖創錘脣純綽辭詞賜聰蔥囪從叢湊躥竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締顛點墊電澱釣調叠諜疊釘頂錠訂丟東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪墮鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛誹廢費紛墳奮憤糞豐楓峯鋒風瘋馮縫諷鳳膚輻撫輔賦復負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗槓臯鎬擱鴿閣鉻個給龔宮鞏貢鉤溝構購夠蠱顧僱剮掛關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢號閡鶴賀橫恆轟鴻紅後壺護滬戶譁華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴匯諱誨繪葷渾夥獲貨禍擊機積飢跡譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢鹼礆揀撿簡儉減薦檻鑑踐賤見鍵艦劍餞漸濺澗將漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖鯨驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚釐籬離裏鯉禮慄麗厲勵礫歷瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄滷虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麼黴沒鎂門悶們錳夢謎彌祕覓冪綿緬廟滅憫閩鳴銘謬謀畝吶鈉納難撓腦惱鬧餒內擬妳膩攆撚釀鳥聶齧鑷鎳檸獰寧擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐拋賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪僕樸譜棲悽臍齊騎豈啓氣棄訖牽扡釺鉛遷籤謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親寢輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲確羣讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺剎紗篩曬刪閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅溼詩屍蝨時蝕實識駛勢適釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼鬆聳慫頌訟誦擻蘇訴肅雖隨綏歲孫損筍縮瑣鎖獺撻擡臺態攤貪癱灘壇譚談嘆湯燙濤絛討騰謄銻題體屜條貼鐵廳聽烴銅統頭禿圖塗團頹蛻託脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩臥嗚鎢烏汙誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈嚇杴鮮纖鹹賢銜閒顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭囂銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興兇洶鏽繡虛噓須許敘緒續軒懸選癬絢學勳薰詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴巖顏閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲隱櫻嬰鷹應纓瑩螢營熒蠅贏穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘於輿餘魚漁娛與嶼語鬱籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗皁竈責擇則澤賊贈紮劄軋鍘閘柵詐齋債氈盞斬輾嶄棧佔戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜徵猙爭幀鄭證織職執紙摯擲幟質滯鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄準著濁茲諮資漬蹤綜總縱鄒詛組鑽閂芻勱嘰戔訐訌訕鄺釒亙傴倀傖佇鳧厙壙懺捫獷獁璣紆紂紇紈纊薌謳詎訥鄔釓釔閆餳僉剄唚嘸囈嚦唄咼圇阪壢奩奐嫵嫗嬀嶇峴嶴嵐幃廡愾憮慪悵愴摶榪歟灃潙煬癤磯紜紕紓羋蓯藶莧萇苧虯詁訶詆詘詔詒軔鄴釗釙釕闈閎閔閌陘飩餼飪飫飭鳩儕儂兗劌剴匭巹嚀噝壠壚姍崬嶧弳懌戧曇樅櫪梘棖梟歿瀧瀘濼涇燉煒熗犛瑋甌癘碭糴紺紲紱縐紼絀紿餚檾蘢蔦塋煢蟣誆誄詿詰詼詵詬詮諍諢詡軛邇逕郟鄶鄆釷釧釤鍆釹釵飴駔駟駙騶駑驛駘鳶黽禕俁儔儼儷吒噠嘵嗶噦噲嚌噥堊埡塏堖奼婭嬈孌嶠崢懟慟懨愷惻惲撟暱檉梔櫛櫳櫨櫟殤澩浹湞澮瀏滸潯獪猻瓏癧瞘硨碸禰篤秈絝絎絳朧腖臚脛艤蕘蓽蕎薈薺滎犖蕁藎蓀蕒葒葤蠆覘誚誥誑誒賁貰貺貽軲軻轤軹軼軤軫轢軺酈鈈鈦鉅鈑鈐鈧鈁鈥鈄鈀闥閭隉頇颮颯餉驍驊駢鴇鴆嫋嘜嘮嗩塒壎堝媧嫺嶗崍幬徠慳曄暉欒椏橈楨榿樺檜氬淶潿燁獫璽琿皰痾礪礱禎筧綆綃綈膾蒞蒔萵薟蕕鶯蓴蠔蜆袞覬諏諑諉諛諗諂誶贄貲賅贐躉軾輊輇輅邐鈺鉦鈷鈳鉕鈽鈸鉞鉬鉭鈿鑠鈰鉉鉈鉍鈮鈹鐸閫鬮閬雋頊頎頏餑餘驪鴣鶇鸕鴟鴝鷥齔龕傯僂僨匱厴嘖嗇囀垵嬋幘幗愨愜摑摜櫺殞殮淥瀆澠瀋燜燾獼玀璉瘂皸眥硤磽穭籩糶糲綾綺緋鞝緄綬綹綣綰緇綞羥聹腡艫縈蠣蟶襠覡諶諫謔謁諤諭諼諮諳諦諞賕賑賚蹌輒銬銠鉺銪鋮鋏鋣鐃鐺銱銦鎧銖鋌銩鏵銓鎩鉿銚錚銫銃鐋銨銣閾閶鬩閿閽閼餛騏騍騅驂鷙鴯鴰鵂鸞麩褻儻儐儺嘍嚳媼嶸嶁巰弒慍憒撳槨櫝槧欏殫毿漵牘蝟癆癇睞瞼禪篳箏縶緙緗緹緲繢緦緶緱縋緡臠醃蕆蕢蔞蛺蟯螄蠐褳襝襉覿觴謨讜謖諡謐齎賡賧躒輦輞輟輜鐒錸鋱鏗鋰鋥鋯鋨銼鋝鋶鐦鐗鋃鋟鋦錒闃闋靂靚頡頜潁頦颶饗餷餿騭騖魷魴鵓鸝鵠鵒鷳鵜黿縉囁噯嬡嬪尷攄欖櫬櫚櫸轂氳潷灩灄瀅癉磧磣稟穌竇縟縝縞縭縊縑繽耮齶靦膃蘺蕷鎣驀覦謫譾蹺蹕躚躋輳轡錆鍩錛鍀錁錕錮錈鍃錇錟錙闔闐闕韙韞頷颼饃饈驁騮騫騸鮁鮃鮎鱸鮒鱟鮐鵡鶓鵪鵯鶉齟齙齠廝嚶嬙戩攖曖檳櫧殯瀠瀟瀲瀦璦瘞瘻窶簀篋籜簞簫糉糝縹縵縲繆繅罌羆臏蘞藺蟈褸覯譖譙譎賻釅釃鑾鍥鍇鏘鍶鍔鍤鍾鎪鍰鎄鏤鐨鎇闞霽韜饉驃驄鮭鮚鮪鮞鱭鮫鯗鱘鶘鶚鶻鶿鶥鶩麼齜齦嚕屨襆擷擼攛檣櫫瓔簣餱餈纈繚繒耬聵蘄螻蠑襤覲覷觶讞譫賾躓躑轆鏌鎘鎸鎿鎦鎰鎵鑌靨韃鞽顎顓饜饊饌驏魘鯁鱺鰱鰹鰣鰷鯀鯊鯇鯽鷂鶼齏齬齪廩懍斕櫓櫞氌瀨癮癭穡繮繾繰繯藪蟎贗轔鏨鏢鏜鏝鏍鏞鏑鏃鏇顳顢顙飆飈魎鯖鯪鯫鯡鯤鯧鯝鯢鮎鯛鯴鯔鸚鷓鷚鹺黌嬤懣檁籪羈羶蘚躡蹣鐔钁鏷鑥鐓鑭鐠鑹鏹鐙鱝鰈鱷鰍鰒鰉鯿鰠鷯鷦鷲鷸齷囅癩鑊鐲鐿讎韉顥髏鰲鰭鰨鰥鰩鷺鸌巔籟纘讖躕鑔靄韝驥髖髕鰳鰾鱈鰻鰵鱅鞀瓚櫱鑣顬驤鬢鱖鱔鱒黷黲鼉灝癲躪顰鱧鸛趲躦鼴齇饢戇裡迴贊塼厰廼韆乾為昇厛厤伕紥鼕衹檯処嬭佈倣眾偽関沍氹弔喫郃嚮囘姦儘嵗戯儅釦粬硃懽襍縴攷堦貟祐躰彿剋鉋毉獃聼睏阬阯墰垻媯侷匲娬徬誌摺桿溈氾霛係蕓囌証穀閑靭敺暘珮璵姪凴颳厠捲週哢囯喦崠倖絃唸徴牴枴盃崐搆闆訢洩遝註霑氂麅綫儸捨膁槼錶眎迆郤埰隷牐閙擧玆脩勛噅敍偺嚥鬨嘩坰薑卹縂懕玨瑉竪毧鞦揹衚盪廕葯螘鐘籥鈎靣滻濜餄餎頫闓塚塤孃唕傢蓆噁輓梱傚覈棬慇凃濬畱貍癥綉臟艷蓧涖緻蒓賍賮缽鉆鉄騐偸鴞勗啗嚙菴綵慙慼慾凟釬畧毬瑯槃覜墝牋纍勣緔綳蔆啣訦醖剷舘蔴礄諝璡囉餜僳賸隄餵崳摣搇蒐稜箠匵櫂燄佘緍潟襇賫蹠煇舖耡銹鉲鐧濶騗餽鵐勦翬曡尲慴湣瘉擕煖霤灧谿灕煆炤硶痺篠簽懞簑辤酧鋻醯鍁穨躂墻鄘搾旂縯糢橰琍瘺堿耑琯燻镟篛甖衊踡痠鍫鋂譆璿澂覰錼飃骾鮌鎔譟嬾讌讚贋彫鯰贇簷燐繈鐝鰌鰐嚻籐繙鋜騣儹燿髩鱓臒"}');
    }, function(j) {
      j.exports = JSON.parse('{"simple":"啊阿哎唉矮艾爱安俺按昂敖袄傲懊澳芭扒叭吧八巴拔跋把霸爸白百拜斑班般板版扮拌伴半办邦帮榜膀绑棒磅傍胞包保饱抱报暴爆杯悲卑北背贝倍奔本笨崩蹦迸逼鼻比鄙笔蔽毕敝必辟避边编扁便辨辩遍标彪膘表别滨宾兵冰柄丙病玻播拨波驳捕哺补不布步部擦材才睬踩彩菜餐参蚕惭惨苍仓沧藏操糙曹草厕策测蹭插叉茶查碴察差柴掺馋缠产昌场尝常长唱超抄朝嘲潮巢吵撤彻澈臣辰晨沉城成呈乘程澄诚逞吃持池迟弛驰齿尺赤翅充崇抽酬畴踌稠愁筹绸丑臭出橱滁除楚础揣川穿传喘串窗吹捶锤垂春醇淳纯戳绰茨磁慈此刺次葱匆从丛醋促摧崔催粹淬翠村存寸搓错搭达答打大呆戴代逮担丹单胆旦但淡蛋挡档刀蹈倒到稻道德得的蹬登瞪邓堤低滴迪笛底地蒂第帝弟典店碉叼雕凋掉吊钓调跌爹碟蝶谍叠丁盯叮钉顶定订东冬董懂动栋冻洞兜抖斗陡豆逗痘都毒犊读堵赌杜度渡端锻段缎堆对吨蹲钝多躲朵惰堕蛾峨俄娥恶厄饿恩而儿耳尔饵二发罚伐乏法帆番翻繁凡范犯饭泛坊芳方防仿访纺放菲非肥匪肺费芬吩分纷粉份愤丰封枫锋风逢冯缝奉凤佛否夫扶幅符伏服浮福俯斧府副付负富附嘎该改概盖溉干甘竿赶感敢冈刚缸肛纲岗杠篙高羔糕搞稿告哥歌割革葛格各根跟耕更庚工攻功恭供躬公宫弓拱共钩勾沟狗构购估沽孤姑鼓古骨谷股故固刮瓜挂褂拐棺关官冠管馆罐惯灌贯光广逛龟轨鬼桂柜跪滚棍锅郭果哈孩海害含涵函喊罕旱焊汗杭豪好耗号浩呵喝荷核禾和何合盒河贺嘿黑很狠恨哼亨衡哄虹洪宏弘红喉侯猴吼候呼乎忽葫胡蝴糊湖虎护互沪花哗华猾滑画化徊淮环患幻荒慌黄皇凰惶煌晃幌谎灰挥辉徽回毁悔晦会绘昏婚混活伙火获或霍基机激鸡吉集及急即挤几季济记既际纪家加甲假稼架嫁歼监间兼奸检简俭剪减贱键健建僵姜浆江疆奖降焦胶交骄狡缴绞教较叫接皆节睛晶京精井警景境敬镜竟净炯窘揪久九酒救就疚拘居菊局矩聚拒据巨具距锯俱句炬剧捐娟倦卷绢撅抉掘倔爵捷戒界借介巾筋斤金今津襟锦谨进禁近浸尽决诀绝均菌钧君峻俊竣骏卡开楷凯刊砍康慷糠扛抗亢炕考拷烤苛棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空孔控口扣寇枯窟苦库夸块快款筐狂矿眶旷亏奎馈愧坤昆捆困括扩廓垃拉蜡啦来赖婪栏篮揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老姥酪烙涝勒乐雷镭蕾磊累擂肋泪冷梨离丽厉历利例立力俩联莲连敛链练粮良两辆量晾亮谅撩聊僚燎了廖列裂烈劣琳林磷鳞淋吝拎玲菱零铃羚凌陵岭另令溜榴留刘瘤流柳六龙咙笼隆垄拢陇楼娄搂篓漏芦鲁露路鹿录驴吕铝侣旅律率滤绿峦挛掠略抡轮伦沦论萝罗逻锣箩洛骆麻玛码蚂马嘛吗买脉瞒馒满蔓曼慢漫芒茫盲忙莽茅毛矛卯冒帽貌么玫梅霉煤没眉每美妹门萌蒙盟猛孟眯迷谜米蜜密棉绵免面苗描瞄藐秒渺庙妙蔑灭民敏明鸣铭名命谬摸蘑模膜磨摩魔抹末莫墨沫漠陌谋牟某母墓幕木目拿呐钠那娜纳乃奶耐奈南男囊脑恼闹呢馁内嫩倪泥尼拟你匿逆拈年念鸟尿捏聂孽镊宁牛扭钮纽脓浓农弄奴努怒女暖虐懦糯诺哦欧鸥殴藕偶趴爬帕怕拍排牌徘派攀潘盼畔判叛庞旁胖咆刨炮袍跑泡呸培赔陪配佩喷盆砰彭蓬棚朋捧碰霹批披劈脾皮匹屁篇偏片飘漂票撇瞥拼品聘坪苹萍平瓶屏坡泼颇婆破迫扑铺仆葡菩埔朴谱瀑期欺戚妻七其棋奇歧齐骑乞企启器泣掐牵千签谦乾前潜欠歉枪呛墙蔷抢敲悄桥瞧侨撬翘俏切茄且怯窃侵亲秦琴勤擒禽寝青清晴情请秋丘球求酋区曲驱取娶去圈泉全犬劝缺裙然燃冉染嚷饶绕热仁人忍任刃日蓉融熔溶容揉柔肉茹儒如辱汝入阮蕊闰若弱撒萨塞赛三散桑嗓骚嫂色森莎砂杀刹沙啥煞珊山删衫闪善汕扇商上尚梢捎稍勺少邵绍蛇舌舍摄涉社设申伸身深绅神沈审甚渗声生牲升省盛剩胜师失狮施湿尸十石拾时食屎驶式示士世柿事逝是市室试收手首守授受瘦兽殊抒输叔舒淑熟暑鼠术述束竖数刷衰栓霜双爽水睡税瞬舜说斯撕嘶思私司丝死寺四似松送宋搜素速塑宿肃蒜算隋绥碎岁遂梭唆琐索锁所塌他它她塔踏抬台泰太态汰坛潭坦碳炭汤塘堂棠唐糖掏滔萄桃逃淘陶藤腾疼梯提题蹄啼体替涕剃屉天添填田甜舔腆挑跳贴铁帖厅听廷停亭庭挺通桐同铜彤童桶捅筒痛偷突徒途涂屠土吐兔推腿褪退吞拖托鸵陀驮驼妥拓洼娃瓦外弯湾玩丸完碗挽晚婉万汪王亡枉网往旺望忘威巍微危唯为维萎委伪尾未蔚味畏胃喂魏位谓尉慰卫蚊文纹吻稳嗡翁蜗涡窝我握巫污诬屋无吾吴武五捂午舞伍雾物勿悟昔熙析西吸锡牺稀希夕惜溪喜洗系戏瞎霞暇峡侠狭下夏吓掀先仙纤闲弦嫌险现馅陷相香箱乡响享项橡像向象萧削哮晓小孝鞋协邪谐写械卸懈泄谢薪欣辛新心星腥猩惺刑型邢行醒幸杏性姓兄胸熊休修羞嗅锈秀墟需虚嘘须徐许叙旭序婿轩喧宣旋玄眩学穴雪血勋循旬询寻驯巡殉汛讯迅押呀丫芽牙雅讶焉淹研岩延言颜炎掩演艳燕焰宴验央杨扬羊洋仰漾邀腰妖瑶摇遥窑谣姚咬药要椰耶野也业叶夜一医依伊衣移疑姨椅倚已乙以艺易亦意毅益茵因音阴姻吟银淫寅饮尹引隐印英樱婴迎盈颖硬映拥佣庸雍咏泳涌永勇用幽优悠忧由犹油有友右佑又幼迂淤于余俞逾鱼愉渝娱与宇语玉郁遇愈欲育誉渊冤元袁原援园员圆源远苑愿怨院约越跃岳月悦耘云匀陨允蕴孕砸杂栽哉载再在咱攒赞赃脏葬遭糟枣早澡躁噪造皂燥责择则增憎曾赠扎渣眨榨乍炸诈摘窄粘沾展占站湛章掌杖丈帐仗招照兆召遮折哲者这浙珍真贞侦枕诊振阵蒸挣睁征争怔正政证芝枝支吱蜘知肢汁之织职直植执值址指止只纸志至致制智稚治中忠钟终肿重舟周州洲珠蛛朱猪诸逐竹煮嘱主柱助筑住注祝拽专转庄撞壮状追准捉拙卓桌咨资姿滋紫子自字棕踪宗综总纵走奏揍租足族祖诅阻组嘴醉最罪尊遵昨左做作坐座","spark":"娿婀餀呃婑銰嬡鮟唵洝昻獓仸謸襖奧妑朳朳妑仈妑菝柭妑覇妑皛咟湃癍癍瘢闆蝂汾絆柈柈刅綁幇徬嫎垹蜯嫎徬菢笣湺怉砲蕔懪嚗柸蕜萆苝揹赑俻渀夲苯镚嘣逬腷嬶仳啚毣幣滭獙怭澼鐴笾揙碥楩辧辮猵摽滮鏢錶莂璸濱娦栤窉眪疒箥譒妭菠訤峬誧卟芣鈽荹蔀攃財財棌棌埰婇爘傪蛬慙參芲仺獊蔵懆鐰蓸愺厠憡恻竲揷紁嗏楂楂镲槎枈傪镵瀍浐誯畼甞瑺萇晿趫莏謿謿謿漅訬徹沏瞮烥宸曟冗峸荿珵塖珵僜諴浧阣歭肔呎肔肔歯呎哧趐茺漴菗絒帱帱婤僽薵皗忸溴炪廚蒢篨椘绌遄巛瑏伝遄賗囱欥腄腄箠舂錞錞蒓戥焯垐濨濨泚剌佽茐茐苁苁齰娖凗慛慛濢濢濢籿洊籿髊措溚垯荅咑汏槑瀻笩曃泹冄啴狚狚泹惔疍澢澢叨稲箌菿稲檤徳嘚哋簦憕簦郰諟彽嘀廸廸疧哋渧苐渧弚敟扂淍汈鵰蜩鋽铞銱蜩瓞嗲渫渫媟疉玎饤汀町嵿萣忊崬笗蓳慬憅崬岽狪兠鬦乧跿荳浢哣嘟毐渎渎陼帾荰喥喥鍴葮葮葮碓怼沌壿沌哆躱朶媠憜睋睋皒皒悪苊皒慁洏ル洱尒聶②潑藅浌疺琺汎畨飜瀿汎笵氾粄疺汸淓汸汸汸汸汸倣婔悱萉厞腓曊棼玢汾妢帉妢濆仹崶猦峯颩漨溤漨唪鳯仏娝玞荴諨苻茯棴捊湢椨釡椨諨苻萯冨胕嗄姟妀漑葢漑迀苷芉迀憾噉罓碙矼釭罁罓釭禞滈餻溔鎬鎬哠滒戨剨愅噶咯茖艮茛畊浭菮笁糼糼塨栱匑厷営弖珙珙溝芶芶豞媾媾诂钴箛菇鼔咕嗗唂骰诂凅剮呱啩啩枴菅関菅蒄涫菅潅遦潅遦洸広迋亀匦媿蓕匱蛫蔉輥煱漷淉铪陔嗨嗐浛凾凾諴癷猂猂汙忼濠恏秏呺滘哬曷嗬劾秝啝哬匼盉菏哿潶嫼佷哏悢涥悙蘅晎渱葓宖宖葒糇糇糇犼糇苸苸唿煳箶箶煳煳唬戶沍戶埖蕐澕磆磆畵囮佪准寰漶抝巟巟曂瑝瑝瑝瑝愰縨巟洃媈媈幑冋毇珻珻浍浍涽殙婫萿钬焱镬戓靃樭僟噭鶏咭潗彶喼旣哜凢悸哜汜旣漈汜傢咖曱徦糘泇糘姧盬簡凲奷撿彅倹彅諴濺楗揵踺壃葁槳茳彊奨夅潐烄茭嬌烄儌烄嘋珓嘂帹湝兯聙瞐倞棈丼檠憬璄擏傹獍凈泂僒啾玖勼氿慦僦咎佝劇匊挶怇藂岠琚姖倶岠涺倶呴岠涺涓涓惓捲涓瘚決崛崛嚼啑悈鎅徣夰凧荕釿唫妗珒噤婂殣琎噤菦锓浕吷吷蕝汮箘呁焄浚浚浚浚鉲閞揩剀刋歃嫝嵻嵻摃忼囥忼栲洘栲岢錁溘錁萪涜嗑妸渇尅尅愙錁肻肻恳垦妔妔涳芤啌囗釦簆喖崫楛厙洿赽赽窾筺誑纩洭纩扝喹潰隗堒崐涃涃葀拡霩柆菈臘菈唻攋漤孄藍灠灠攋灠灡嚂哴蓈哴蓢蓢蓢烺崂崂窂荖粩絡絡崂嘞泺檑檑檑藞蔂檑叻汨唥悡蓠婯疠呖悡唎竝劦唡聅嗹涟潋嗹煉悢悢倆唡糧涼煷涼嫽窷獠獠孒漻烮煭烮挘啉啉潾潾啉悋柃玪夌蕶玪玪夌夌玪叧泠媹媹畱嚠媹蓅栁陸瀧茏茏湰泷泷茏溇溇嵝溇屚廬噜蕗蕗蔍淥馿焒焒佀膂侓卛慮淥欒孌稤畧囵囵囵囵囵囉囉羅囉儸詻詻嫲犸犸犸骉嫲嬤荬霡慲獌慲嫚嫚嫚嫚笀汒吂杧漭罞毝罞茆萺萺邈庅坆烸苺湈莈葿烸羙妺閄萠懞擝掹掹侎洣洣洣滵滵婂婂凂媔媌媌媌邈仯緲庿仯篾搣姄勄眀嘄佲洺掵繆嗼嚤嗼嗼嚤嚤嚤沬沬嗼嚜沬嗼帞湈哞湈毋募募朩朩嗱妠妠哪哪妠釢艿恧柰遖莮灢悩悩閙迡浽禸嫰淣狔胒抳沵嫟屰秥姩淰茑杘涅嗫糵嗫苧犇沑妞狃哝哝哝挵伮怓伮囡煖疟穤穤喏呃瓯瓯瓯耦耦汃瓟啪啪啪棑簰棑哌襻瀋昐溿叛判厐臱眫垉铇垉垉垉垉怌掊婄婄蓜姵濆湓泙憉莑堋萠唪湴噼纰怶噼裨怶苉庇萹媥爿彯慓嘌潎潎拚闆娉岼泙泙岼甁屛岥秡櫇嘙岥廹圤舗圤匍箁逋圤鐠鑤剘剘嘁悽⑦娸諆渏忮斉騏阣佱晵噐淇拤撁芉簽嗛墘湔濳芡嗛熗濸嫱嫱熗毃佾喬趭喬毳趬佾苆苆苴愜苆埐儭蓁噖懄檎噙寑圊凊啨凊埥偢坵浗浗媨岖浀駆掫婜厾圜葲洤吠勧蒛峮嘫嘫姌媣孃隢隢慹芢亾涊姙刄ㄖ嫆瀜嫆嫆嫆渘渘禸筎濡洳媷肗叺朊惢潤婼弜潵蕯噻噻彡潵鎟鎟騒溲脃潹莏唦摋閷乷倽繺姍屾剼釤閁僐訕傓啇仩尙哨哨哨汋仯卲袑虵舙舎摂渉涻蔎妽訷裑堔訷鉮瀋谉卙椮殸泩狌圱渻墭乗夝溮妷浉湤濕迉拾坧湁溡喰屍馶鉽沶仕迣枾倳迣湜巿厔鉽荍掱渞垨涭辤痩獣姝杼瀭埱忬蔋孰濐癙朮沭娕竪薮唰缞拴灀叒摤渁腄挩橓橓説凘凘凘偲俬呞噝屍峙④姒菘鎹浨溲嫊趚愬蹜歗祘匴陏浽誶嵗嬘逡逡鎖鎍鎻葰禢彵咜咜嗒沓孡珆溙忲忲呔墵憛钽湠湠饧溏漟橖瑭溏匋瑫匋洮洮匋匋駦駦庝珶諟趧渧渧軆櫕珶珶屟兲婖瑱甶甛婖睓狣朓萜鉄萜廰厛侹渟渟侹侹嗵秱哃恫浵僮硧硧茼痌偸湥徙蒤凃廜汢汢兎蓷蹆蹆蹆昋柂仛袉拕駞袉鋖沰哇哇咓迯塆塆琓汍唍涴梚脕啘萭忹迋匄忹蛧暀忹朢莣媙蘶嶶佹惟潙惟崣逶沩屗沬墛菋嵔媦嵔蘶莅媦墛墛衞螡妏鈫沕穏滃暡窩煱窉莪楃莁汚莁偓嘸圄呉娬伍圄吘橆⑤霚粅匢圄厝凞唽覀扱唶犠浠唏汐厝渓禧冼係戱磍葭叚浹浹浹芐嗄圷锨姺佡汘娴妶溓険哯陥陥楿萫葙芗姠啍頙潒潒姠潒簘萷涍哓尒涍嚡拹峫喈冩悈啣澥绁塮蕲俽厗噺杺暒睲睲瑆鉶侀郉垳瑆圉莕悻狌兇洶熋咻俢饈溴琇莠歔濡歔歔湏俆汻溆旮垿胥蓒媗媗嫙玆妶敩泬膤洫勛揗洵咰浔紃廵咰卂卂卂呷吖吖厊厊蕥冴漹殗妍啱娫訁顔烾殗湮滟嬿熖匽験姎昜婸咩樣卬羕撽崾岆愮愮滛窰愮烑吆葯婹倻倻嘢竾鄴旪液①悘畩吚扆簃寲侇掎掎巳乁姒兿昜洂嬑藙谥筃洇堷隂絪荶檭婬夤飮吚吲陻茚渶璎璎迊盁颕哽眏砽砽滽澭怺怺悀怺湧鼡豳沋滺沋甴沋怞洧伖祐祐叒孧扜菸纡悇揄揄渔揄揄娯玙荢娪砡喐喁匬慾唷謍棩寃沅媴厡瑗圎園園羱逺夗蒝葾阮箹樾跞捳仴哾秐囩枃殒狁藴夃咂卆酨酨酨侢茬洎瓒瓒賍賍髒蹧蹧栆皁璪璪璪慥唣璪嫧萚荝熷璔嶒熷紥碴喳搾咋怍怍擿搾秥跕蹍颭跕偡嶂礃粀扙賬扙妱燳狣佋嗻菥悊鍺適淅沴嫃浈浈忱沴桭俥篜諍諍姃踭姃囸炡姃芷汥伎汥倁倁汥汥と枳轵矗淔秇惪歮栺圵呮衹梽臸臸淛潪雉菭狆筗妕蔠妕偅洀淍詶詶咮咮咮蕏渚豩艸煑瞩炷炷莇茿炷炷柷跩抟啭圧獞匨匨搥痽浞炪婥棹恣粢恣稵橴ふ洎牸琮琮崈琮縂枞趉楱楱蒩娖蔟袓蒩蒩蒩觜酔朂嶵澊噂葃咗莋莋唑蓙"}');
    }, function(j) {
      j.exports = JSON.parse('{"銼":"88114 COOG -","蔣":"44242 TVMI -","萬":"44227 TWLB -","塼":"45143 GJII -","詆":"02640 YRHPM -","鎸":"80127 COGS -","厰":"71248 MFBK -","臥":"78700 SLO -","兒":"77212 HXHU -","幾":"22453 VIHI -","廼":"11406 NKMCW -","個":"26200 OWJR -","麼":"00232 IDVI -","蔔":"44627 TPMW -","璽":"10103 MBMGI -","義":"80553 TGHQI -","習":"17602 SMHA -","於":"08233 YSOY 6751","鄉":"27227 VHIIL -","億":"20236 OYTP -","虧":"21227 YGMMS -","韆":"41531 TJYMU -","衛":"21221 HODQN -","屍":"77212 SMNP -","乾":"48417 JJON 2215","門":"77001 AN -","廣":"00286 ITMC -","與":"77801 HXYC -","醜":"16613 MWHI -","專":"50343 JIDI -","馬":"71327 SQSF -","為":"34327 IKNF -","豐":"22108 UJMRT -","飛":"12413 NOHTO -","烏":"27327 HRYF -","雲":"10732 MBMMI -","倉":"80267 OIAR -","書":"50601 LGA -","內":"40227 OB -","僅":"24215 OTLM -","僕":"22285 OTCO -","侖":"80227 OMBT -","鳳":"77210 HNMAF -","從":"28281 HOOOO -","昇":"60440 AHT 6703","岡":"77772 BTU -","兇":"22212 UKHU -","區":"71716 SRRR -","勻":"27120 PIM -","辦":"00441 YJKSJ -","厛":"71221 MRHL -","勸":"44227 TGKS -","雙":"20407 OGE -","厤":"71294 MHDD -","戶":"20207 HS -","伕":"25280 OQO -","無":"80331 OTF -","憶":"90036 PYTP -","計":"04600 YRJ -","鬥":"77001 LN -","開":"77441 ANMT -","見":"60212 BUHU -","訂":"01620 YRMN -","藝":"44732 TGII -","氣":"80917 ONFD -","紥":"52903 QUVIF -","鄧":"17127 NTNL -","長":"71732 SMV -","隊":"78232 NLTPO -","認":"07632 YRSIP -","訃":"03600 YRY -","車":"50006 JWJ -","貝":"60800 BUC -","閂":"77101 ANM -","韋":"47506 DMRQ -","風":"77210 HNHLI -","業":"32905 TCTD -","東":"50906 DW -","鉅":"81117 CSS -","絲":"22993 VFVIF -","叢":"32447 TCTE -","們":"27220 OAN -","蘭":"44227 TANW -","樂":"22904 VID -","儀":"28253 OTGI -","鼕":"44303 GEHEY -","冊":"77440 BT -","馮":"31127 IMSQF -","芻":"27427 PUPU -","寫":"30327 JHXF -","佔":"21260 OYR -","齣":"27720 YUPR -","擊":"57502 JEQ -","勱":"44227 TBKS -","發":"12247 NONHE -","厲":"71227 MTWB -","盧":"21212 YPWBT -","衹":"32240 LHVP -","葉":"44904 TPTD -","嘰":"62053 RVII -","聖":"16104 SRHG -","務":"17227 NHOKS -","號":"61217 RSYPU -","檯":"44914 DGRG -","処":"27401 HEHN -","嘆":"64085 RTLO -","爾":"10227 MFBK -","嬭":"41427 VMFB -","帥":"24727 HRLB -","對":"34100 TGDI -","寧":"30201 JPBN -","頭":"11186 MTMBC -","佈":"24227 OKLB -","劄":"82600 HRLN 7841","匯":"71711 SEOG -","戔":"53503 II -","撲":"52085 QTCO -","術":"21221 HOICN -","漢":"34185 ETLO -","舊":"44777 TOGX -","滅":"33150 EIHF -","歸":"27127 HMSMB -","禮":"35218 IFTWT -","電":"10716 MBWU -","訌":"01612 YRM -","討":"04600 YRDI -","訕":"02670 YRU -","訐":"01640 YRMJ -","糾":"22900 VFVL -","節":"88727 HAIL -","訓":"02600 YRLLL -","訖":"08617 YRON -","議":"08653 YRTGI -","訊":"07610 YRNJ -","記":"07617 YRSU -","遼":"34309 YKCF -","軋":"52010 JJU -","閃":"77801 ANO -","讓":"00632 YRYRV -","飢":"87710 OIHN -","鄺":"07227 ICNL -","邊":"36302 YHUS -","鳥":"27327 HAYF -","喬":"20227 HKRBR -","譏":"02653 YRVII -","爭":"20507 BSD -","馭":"77340 SFE -","丟":"10732 HGI -","亙":"10102 MBM -","買":"60806 WLBUC -","產":"00215 YHHQM -","龍":"01211 YBYSP -","亞":"10102 MLLM -","倣":"28240 OYSK -","會":"80606 OMWA -","夥":"67927 WDNIN 7818","眾":"60832 WLOOO -","價":"21286 OMWC -","優":"21247 OMBE -","傴":"21216 OSRR -","傘":"80408 OOOJ -","傳":"25243 OJII -","倀":"21232 OSMV -","傖":"28267 OOIR -","傷":"28227 OOAH -","佇":"23221 OJMN -","偽":"24227 OIKF -","偉":"24256 ODMQ -","倫":"28227 OOMB -","興":"77801 HXBC -","関":"77804 ANTK -","沖":"35106 EL -","農":"55232 TWMMV -","決":"35180 EDK -","劉":"72100 HCLN -","鳧":"27217 HFHN -","沍":"31112 EMVM -","軍":"37506 BJWJ -","劃":"52100 LMLN -","氹":"12719 NE -","則":"62800 BCLN -","創":"82200 ORLN -","華":"44504 TMTJ -","剛":"72700 BULN -","厙":"71256 MJWJ -","協":"44027 JKSS -","厭":"71284 MABK -","動":"24127 HGKS -","壓":"71214 MKG -","籲":"88286 HOBC -","弔":"17527 NL -","喫":"67084 RQHK -","郃":"87627 ORNL 6740","嚇":"64031 RGCC -","嚮":"27227 VLHBR -","囘":"77220 BRU -","場":"46127 GAMH -","嗎":"61027 RSQF -","壯":"24210 VMG -","後":"22247 HOVIE -","團":"60343 WJII -","誇":"04627 YRKMS -","壙":"40186 GITC -","奪":"40341 KOGI -","姦":"40444 VVV -","婦":"47427 VSMB -","妝":"24240 VMV -","孫":"12493 NDHVF -","尋":"17346 SMMRI -","儘":"25212 OLMT -","導":"38343 YUDI -","媽":"41427 VSQF -","堯":"40212 GGGU -","塵":"00214 IPG -","豈":"22108 UMRT -","夾":"40808 KOO -","嶼":"27781 UHXC -","嵗":"22253 UIHH -","並":"80102 TTC 6752","師":"21727 HRMLB -","異":"60801 WTC -","莊":"44214 TVMG -","戯":"23250 YCI -","儅":"29266 OFBW -","託":"02614 YRHP -","扡":"54012 QPD -","鞏":"17506 MNTLJ -","慶":"00247 IXE -","釦":"86100 CR -","懺":"93050 POIM -","擴":"50086 QITC -","執":"45417 GJKNI -","粬":"95960 FDTW -","捫":"57020 QAN -","揚":"56027 QAMH -","掃":"57027 QSMB -","樸":"42985 DTCO -","硃":"15690 MRHJD 7238","畢":"60500 WTJ -","湯":"36127 EAMH -","權":"44915 DTRG -","爺":"80427 CKSJL -","獷":"40286 KHITC -","燈":"92818 FNOT -","汙":"31140 EMD -","懽":"94015 PTRG -","襍":"30294 LOGD -","機":"42953 DVII -","璣":"12153 MGVII -","紆":"21940 VFMD -","約":"27920 VFPI -","紂":"24900 VFDI -","級":"27947 VFNHE -","紅":"21912 VFM -","縴":"20953 VFYVQ -","紇":"28917 VFON -","紈":"25917 VFKNI -","獁":"41227 KHSQF -","纊":"20986 VFITC -","紀":"27917 VFSU -","攷":"18240 MSOK -","網":"27920 VFBTV -","觀":"46212 TGBUU -","蟲":"50136 LILII -","詎":"01617 YRSS -","謳":"01616 YRSRR -","訝":"01640 YRMVH -","講":"05647 YRTTB -","諱":"04656 YRDMQ -","訛":"04610 YROP -","訥":"04627 YROB -","許":"08640 YROJ -","薌":"44227 TVHL -","諷":"07610 YRHNI -","論":"08627 YROMB -","訪":"00627 YRYHS -","設":"07647 YRHNE -","訟":"08632 YRCI -","軌":"54017 JJKN -","訣":"05680 YRDK -","達":"34305 YGTQ -","貞":"21806 YBUC -","釓":"82110 CU -","鄔":"27327 HFNL -","邁":"34302 YTWB -","過":"37302 YBBR -","閉":"77247 ANDH -","遷":"31301 YMWU -","問":"77601 ANR -","釔":"87110 CN -","閆":"77101 ANMMM -","堦":"42162 GPPA -","陣":"75206 NLJWJ -","陰":"78232 NLOII -","闖":"77327 ANSQF -","陽":"76227 NLAMH -","餳":"86727 OIAMH -","頁":"10806 MBUC -","馴":"72300 SFLLL -","馱":"74380 SFK -","馳":"74312 SFPD -","貟":"23806 IBUC -","兩":"10227 MLBO -","嚴":"66248 RRMMK -","齊":"00223 YX -","畝":"07680 YWNO -","餘":"88794 OIOMD -","祐":"34260 IFKR 6963","亂":"22210 BBU -","麗":"11212 MMBBP -","躰":"25230 HHDM -","僉":"80886 OMRO -","彿":"25227 HOLLN -","剋":"42210 JULN 4135","兌":"80212 CRHU -","況":"36112 ERHU -","別":"62200 RSLN -","剄":"12100 MMLN -","傭":"20227 OILB -","刪":"72400 BTLN -","勁":"14127 MMKS -","鉋":"87112 CPRU -","滷":"31160 EYWI -","勵":"74227 MBKS -","勞":"99427 FFBKS -","凍":"35196 IMDW -","縣":"72993 BFHVF -","毉":"77108 SEMOO -","吳":"26804 RVNK -","噸":"61086 RPUC -","獃":"23184 UTIK -","啓":"38604 IKR -","唚":"67047 RSME -","吶":"64027 ROB -","嘸":"68031 ROTF -","唄":"66080 RBUC -","聼":"14431 NJJWP -","卻":"87620 CRSL -","嚦":"61011 RMDM -","員":"60806 RBUC -","嘔":"61016 RSRR -","紉":"27920 VFSHI -","囈":"64031 RTGI -","嗚":"67027 RHRF -","咼":"77227 BBR -","嗆":"68067 ROIR -","睏":"66000 BUWD -","圇":"60227 WOMB -","園":"60232 WGRV -","堅":"77104 SEG -","阬":"70217 NLYHN -","壞":"40132 GYWV -","阯":"71210 NLYLM -","圍":"60506 WDMQ -","墰":"41146 GMWJ -","負":"27806 NBUC -","塢":"47127 GHRF -","塊":"46113 GHI -","墳":"44186 GJTC -","壢":"41111 GMDM -","垻":"46180 GBUC -","聲":"47401 GESJ -","墜":"78104 NOG -","殼":"47247 GNHNE -","奐":"27804 NBK -","媯":"44427 VIKF -","層":"77266 SCWA -","嫗":"41416 VSRR -","侷":"27227 OSSR -","壽":"40641 GNMI -","崗":"22227 UBTU -","匲":"71716 SKRR -","嶇":"21716 USRR -","嶴":"27772 HKU -","島":"27727 HAYU -","娬":"43440 VMPM -","峴":"26712 UBUU -","嵐":"22217 UHNI -","幃":"44256 LBDMQ -","牀":"24290 VMD -","廬":"00212 IYPT -","帳":"41232 LBSMV -","應":"00231 IGP -","廡":"00231 IOTF -","庫":"00256 IJWJ -","徹":"28240 HOYBK -","棄":"00904 YITD -","徬":"20227 HOYBS -","張":"11232 NSMV -","憮":"98031 POTF -","懷":"90032 PYWV -","愾":"98017 POND -","悵":"91032 PSMV -","憂":"10407 MBPHE -","誌":"04631 YRGP -","愴":"98067 POIR -","拋":"54012 QKUS -","擾":"51047 QMBE -","摳":"51016 QSRR -","撫":"58031 QOTF -","慪":"91016 PSRR -","搶":"58067 QOIR -","摺":"57062 QSMA -","摶":"55043 QJII -","掄":"58027 QOMB -","桿":"46941 DAMJ -","報":"47447 GJSLE -","擬":"57081 QPKO -","曠":"60086 AITC -","時":"64041 AGDI -","條":"27294 OLOD -","護":"04647 YRTOE -","楊":"46927 DAMH -","來":"40908 DOO -","槓":"41986 DMBC -","歟":"77882 HCNO -","極":"47914 DMEM -","溝":"35147 ETTB -","沒":"37147 ENE -","灃":"32118 EUJT -","漚":"31116 ESRR -","瀝":"31111 EMDM -","榪":"41927 DSQF -","殲":"13250 MNOIM -","淪":"38127 EOMB -","洶":"37120 EPUK -","滄":"38167 EOIR -","溈":"34127 EIKF -","災":"22809 VVF -","氾":"37112 ESU 6518","狀":"23284 VMIK -","煬":"96827 FAMH -","滬":"33117 EHSU -","燦":"97894 FYED -","霛":"10227 MBNNN -","竈":"30717 JCGRU -","猶":"48264 KHTCW -","囪":"26000 HWKK -","癤":"00127 KHAL -","療":"00196 KKCF -","係":"22293 OHVF -","狽":"46280 KHBUC -","窮":"30227 JCHHN -","緯":"24956 VFDMQ -","磯":"12653 MRVII -","禿":"20212 HDHU -","瑪":"11127 MGSQF -","紕":"22910 VFPP -","縱":"28981 VFHOO -","紗":"29920 VFFH -","綱":"27920 VFBTU -","純":"25917 VFPU -","納":"24927 VFOB -","紙":"22940 VFHVP -","紜":"21932 VFMMI -","紛":"28927 VFCSH -","綸":"28927 VFOMB -","紐":"27912 VFNG -","紋":"20940 VFYK -","蕭":"44227 TLX -","紓":"27922 VFNIN -","羋":"11502 LMYQ -","腸":"76227 BAMH -","蘆":"44212 TYPT -","紡":"20927 VFYHS -","葦":"44506 TDMQ -","蕪":"44331 TOTF -","藶":"44211 TMDM -","萇":"44732 TSMV -","虯":"52100 LIVL -","蕓":"44731 TMBI -","莧":"44212 TBUU -","詁":"04660 YRJR -","蒼":"44267 TOIR -","囌":"64094 RTND -","苧":"44201 TJMN 6688","証":"01611 YRMYM -","訶":"01620 YRMNR -","補":"33227 LIJB -","識":"03650 YRYIA -","評":"01649 YRMFJ -","詐":"08611 YRHS -","詛":"07612 YRBM -","診":"08622 YROHH -","謅":"07627 YRPUU -","詞":"07620 YRSMR -","詘":"02672 YRUU -","訴":"02641 YRHMY -","譯":"06641 YRWLJ -","詔":"07662 YRSHR -","貢":"10806 MBUC -","穀":"47947 GDHNE -","財":"64800 BCDH -","詒":"03660 YRIR -","還":"36303 YWLV -","軔":"57020 JJSHI -","軒":"51040 JJMJ -","進":"30301 YOG -","違":"34305 YDMQ -","運":"37305 YBJJ -","這":"30306 YYMR -","連":"35300 YJWJ -","鄒":"27427 PUNL -","裏":"00732 YWGV -","郵":"27127 HMNL -","鄴":"37927 TDNL -","遲":"37305 YSYQ -","針":"84100 CJ -","釘":"81120 CMN -","鄰":"97227 FQNL -","遠":"34303 YGRV -","釗":"82100 CLN -","釕":"87127 CNN -","閏":"77104 ANMG -","間":"77601 ANA -","釙":"83100 CY -","闈":"77506 ANDMQ -","閔":"77400 ANYK -","閎":"77732 ANKI -","閌":"77217 ANYHN -","閑":"77904 AND -","悶":"77331 ANP -","際":"77291 NLBOF -","陘":"71212 NLMVM -","陸":"74214 NLGCG -","陳":"75296 NLDW -","靭":"47520 TJSHI -","隴":"71211 NLYBP -","飪":"82714 OIHG -","飩":"85717 OIPU -","餼":"88717 OIOND -","飭":"88727 OIOKS -","飯":"82747 OIHE -","敺":"71747 SRYE -","飫":"82784 OIHK -","飲":"87782 OINO -","蓯":"44281 THOO -","暘":"66027 AAMH -","麥":"40407 JONI -","雞":"20815 BKOG -","鳩":"47027 KNHAF -","駁":"74340 SFKK -","龜":"27117 NXU -","珮":"17110 MGHNB -","俠":"24288 OKOO -","璵":"17181 MGHXC -","側":"22200 OBCN -","姪":"41414 VMIG -","僥":"24212 OGGU -","儈":"28266 OOMA -","喪":"40732 GRRV -","偵":"21286 OYBC -","儕":"20223 OYX -","兗":"00212 YCRHU -","僑":"22227 OHKB -","儂":"25232 OTWV -","淨":"32157 EBSD -","凱":"27110 UTHN -","製":"22732 HNYHV -","凴":"31217 IFHN -","剴":"22100 UTLN -","劊":"82600 OALN -","劌":"22200 YHLN -","劑":"02200 YXLN -","剎":"42900 KCLN -","颳":"72216 HNHJR -","勢":"45427 GIKS -","單":"66500 RRWJ -","賣":"40806 GWLC -","厠":"71220 MBCN -","捲":"59012 QFQU -","匭":"71711 SJJN -","週":"37302 YBGR -","巹":"17717 NEMSU -","參":"23202 IIIH -","嚀":"63021 RJPN -","噝":"62093 RVFF -","嚨":"61011 RYBP -","哢":"61041 RMGT 7050","詠":"03692 YRINE -","壟":"01104 YPG -","備":"24227 OTHB -","囯":"60104 WMG -","壚":"41112 GYPT -","姍":"47440 VBT -","寶":"30806 JMUC -","圖":"60604 WRYW -","奮":"40601 KOGW -","寵":"30211 JYBP -","學":"77407 HBND -","屜":"77217 SHOT -","屆":"77272 SUG -","審":"30609 JHDW -","喦":"60772 RRRU -","巋":"22127 UHMB -","實":"30806 JWJC -","嶽":"22284 UKHK -","嶺":"22386 UOIC -","嶧":"26741 UWLJ -","簾":"88237 HITC -","崠":"25796 UDW -","廟":"00227 IJJB -","幟":"43250 LBYIA -","倖":"24241 OGTJ -","絃":"20932 VFYVI -","龐":"00211 IYBP -","彌":"11227 NMFB -","廢":"00247 INOE -","錄":"87192 CVNE -","弳":"11212 NMVM -","唸":"68032 ROIP -","徴":"28240 XHOUG -","徑":"21212 HOMVM -","憐":"99059 PFDQ -","戧":"83250 ORI -","慫":"28338 HOP -","擡":"54014 QGRG -","懌":"96041 PWLJ -","態":"22331 IPP -","攏":"51011 QYBP -","牴":"22540 HQHPM -","枴":"46927 DRSH -","擔":"57061 QNCR -","攔":"57020 QANW -","擁":"50015 QYVG -","揀":"55096 QDWF -","擰":"53021 QJPN -","盃":"10102 MFBT -","崐":"26712 UAPP -","曇":"60731 AMBI -","擇":"56041 QWLJ -","撥":"52047 QNOE -","傑":"25294 ONQD -","斬":"52021 JJHML -","搆":"55047 QTTB -","鬆":"72932 SHDCI -","闆":"77666 ANRRR -","梘":"46912 DBUU -","樞":"41916 DSRR -","楓":"47910 DHNI -","櫪":"41911 DMDM -","棗":"50902 DBDB -","櫃":"41918 DSLC -","樅":"48981 DHOO -","棖":"41932 DSMV -","歿":"17247 MNNE -","歐":"77782 SRNO -","訢":"02621 YRHML -","梟":"27904 HAYD -","毆":"77747 SRHNE -","瀧":"31111 EYBP -","瀘":"31112 EYPT -","洩":"35106 ELWP -","遝":"36309 YWLE -","淚":"33184 EHSK -","濘":"33121 EJPN -","註":"00614 YRYG -","瀉":"33127 EJHF -","濼":"32194 EVID -","潑":"32147 ENOE -","霑":"10161 MBEYR -","爐":"91812 FYPT -","涇":"31112 EMVM -","澤":"36141 EWLJ -","淺":"33153 EII -","燉":"98840 FYDK -","熗":"98867 FOIR -","煒":"94856 FDMQ -","氂":"58214 JKMHU -","甌":"71717 SRMVN -","環":"16132 MGWLV -","甕":"00717 YVGN -","瑋":"14156 MGDMQ -","獰":"43221 KHJPN -","現":"16112 MGBUU -","畫":"50106 LGWM -","瘧":"00114 KYPM -","癘":"00127 KTWB -","麅":"00212 IPPRU -","礦":"10686 MRITC -","碭":"16627 MRAMH -","礬":"44602 DDKMR -","瘍":"00127 KAMH -","暢":"56027 LLAMH -","紲":"24917 VFPT -","紺":"24970 VFTM -","糴":"87915 ODSMG -","練":"25996 VFDWF -","組":"27912 VFBM -","紱":"23947 VFIKK -","稈":"26941 HDAMJ -","綫":"23953 VFII -","細":"26900 VFW -","終":"27933 VFHEY -","紳":"25906 VFLWL -","織":"23950 VFYIA -","碼":"11627 MRSQF -","絆":"29950 VFFQ -","紼":"25927 VFLLN -","絀":"22972 VFUU -","繹":"26941 VFWLJ -","縐":"27927 VFPUU -","紹":"27962 VFSHR -","肅":"50222 LX -","儸":"26215 OWLG -","紿":"23960 VFIR -","經":"21912 VFMVM -","膚":"21227 YPWB -","餚":"84727 OIKKB -","骯":"70217 BBYHN -","脹":"71232 BSMV -","脅":"40227 KSKSB -","艱":"47832 TOAV -","捨":"58064 QOMR -","膁":"78237 BTXC -","腫":"72215 BHJG -","腎":"77227 SEB -","檾":"99994 FFBDD -","莖":"44102 TMVM -","蘢":"44211 TYBP -","範":"88512 HJJU -","蔦":"44327 THAF -","蝨":"17136 NJLII -","塋":"99104 FFBG -","煢":"99417 FFBNJ -","蘋":"44286 TYHC 8000","襯":"36212 LYDU -","蟣":"52153 LIVII -","虜":"21227 YPWKS -","槼":"56904 QUD -","誆":"01611 YRSMG -","錶":"85132 CQMV -","覓":"20212 BBUU -","眎":"61091 BUMMF -","試":"03640 YRIPM -","誄":"05690 YRQD -","詩":"04641 YRGDI -","詿":"04614 YRGG -","詼":"04689 YRKF -","誠":"03650 YRIHS -","詰":"04661 YRGR -","話":"02664 YRHJR -","詵":"04612 YRHGU -","誕":"02641 YRNKM -","詮":"08614 YROMG -","誅":"05690 YRHJD -","詳":"08651 YRTQ -","詣":"02661 YRPA -","詫":"03614 YRJHP -","詢":"07620 YRPA -","詬":"02661 YRHMR -","諢":"07652 YRBJJ -","該":"00682 YRYVO -","諍":"07657 YRBSD -","敗":"68840 BCOK -","賢":"77806 SEBUC -","責":"50806 QMBUC -","賬":"61832 BCSMV -","販":"62847 BCHE -","貪":"80806 OINC -","貨":"24806 OPBUC -","質":"72806 HLBUC -","詡":"07620 YRSMM -","購":"65847 BCTTB -","貧":"80806 CSHC -","貯":"63821 BCJMN -","貶":"62832 BCHIO -","貫":"77806 WJBUC -","軛":"51012 JJMSU -","輪":"58027 JJOMB -","轉":"55043 JJJII -","迆":"34301 YPD -","軟":"57082 JJNO -","邇":"31302 YMFB -","轟":"50550 JJJJJ -","鄶":"87627 OANL -","郤":"87627 CRNL 4275","鄭":"87827 TKNL -","郟":"47827 KONL -","埰":"42194 GBD -","鄆":"37527 BJNL -","鬱":"44722 DDBUH -","釷":"84110 CG -","疊":"60102 WWWM -","釺":"82140 CHJ -","鍆":"87120 CAN -","釤":"82122 CHHH -","釩":"87110 CHNI -","釣":"87120 CPI -","釵":"87143 CEI -","釧":"82100 CLLL -","頂":"11286 MNMBC -","隷":"45999 GFLE -","牐":"22077 LLHJX -","陝":"74288 NLKOO -","閙":"77227 ANYLB -","飴":"83760 OIIR -","頃":"21786 PMBC -","飽":"87712 OIPRU -","駛":"75306 SFLK -","飼":"87720 OISMR -","飾":"88727 OIOLB -","駔":"77312 SFBM -","餞":"83753 OIII -","駕":"46327 KRSQF -","駒":"77320 SFPR -","駝":"73312 SFJP -","騶":"77327 SFPUU -","駙":"74300 SFODI -","驛":"76341 SFWLJ -","駘":"73360 SFIR -","駟":"76300 SFWC -","駐":"70314 SFYG -","鳶":"43327 IPHAF -","禕":"34256 IFDMQ -","齒":"21772 YMUOO -","鳴":"67027 RHAF -","魚":"27336 NWF -","黽":"77717 RXU -","擧":"77502 HCQ -","儔":"24241 OGNI -","變":"22408 VFOK -","親":"06912 YDBUU -","倆":"21227 OMLB -","儷":"21212 OMMP -","儼":"26248 ORRK -","臨":"78766 SLORR -","儉":"28286 OOMO -","俁":"26284 ORVK -","玆":"00732 YIYVI -","剮":"72200 BBLN -","吒":"62014 RHP 6535","養":"80732 TOIAV -","詭":"07612 YRNMU -","脩":"27227 OLOB 7085","釐":"58215 JKMWG 8159","勛":"64827 RCKS -","噅":"62027 RIKF -","鹹":"23650 YWIHR -","敍":"81947 ODYE -","偺":"23264 OHOA -","嚥":"64031 RTLF -","鬨":"77801 LNTC -","噠":"64035 RYGQ -","響":"27601 VLYTA -","嘩":"64054 RTMJ -","啞":"61012 RMLM -","噦":"61053 RYMH -","噲":"68066 ROMA -","嘵":"64012 RGGU -","嗶":"66054 RWTJ -","嚌":"60023 RYX -","坰":"47120 GBR 6679","喲":"67020 RVFI -","噥":"65032 RTWV -","墾":"27104 BVG -","埡":"41112 GMLM -","壘":"60104 WWWG -","堊":"10104 MMG -","堖":"42162 GVVW -","薑":"44106 TMWM -","塏":"42118 GUMT -","獎":"27804 VIIK -","婭":"41412 VMLM -","復":"28247 HOOAE -","嬌":"42427 VHKB -","嬈":"44412 VGGU -","宮":"30602 JRHR -","婁":"50404 LWLV -","憲":"30336 JQMP -","孌":"22404 VFV -","孿":"22407 VFND -","嘗":"90601 FBRPA -","嶠":"22727 UHKB -","巒":"22772 VFU -","帶":"44227 KPBLB -","將":"27242 VMBDI -","峽":"24788 UKOO -","幀":"41286 LBYBC -","幫":"44227 GIHAB -","彎":"22027 VFN -","崢":"22757 UBSD -","恆":"91012 PMBM -","卹":"27120 HTSL -","縂":"28936 VFCRP -","懟":"34330 TIP -","彥":"00222 YHHHH -","慟":"94027 PHGS -","愷":"92018 PUMT -","懕":"71238 XXMKP -","惻":"92000 PBCN -","掛":"53000 QGGY -","戰":"63550 RJI -","惱":"92062 PVVW -","撻":"54035 QYGQ -","撾":"57032 QYBB -","惲":"97052 PBJJ -","挾":"54088 QKOO -","掙":"52057 QBSD -","擋":"59066 QFBW -","撟":"52027 QHKB -","暱":"61016 ASTR -","揮":"57052 QBJJ -","撓":"54012 QGGU -","擠":"50023 QYX -","晝":"50106 LGAM -","檸":"43921 DJPN -","梔":"42917 DHMU -","標":"41991 DMWF -","棧":"43953 DII -","檉":"46914 DSRG -","棟":"45996 DDW -","顯":"61386 AFMBC -","櫳":"41911 DYBP -","櫛":"48927 DHAL -","柵":"47940 DBT -","櫟":"42994 DVID -","樹":"44900 DGTI -","櫨":"41912 DYPT -","殤":"18227 MNOAH -","殘":"13253 MNII -","氫":"80117 ONMVM -","灑":"31112 EMMP -","澩":"77902 HBE -","氈":"02114 YMHQU -","欄":"47920 DANW -","窪":"30114 JCEGG -","浹":"34188 EKOO -","澆":"34112 EGGU -","潔":"37193 EQHF -","瀏":"32100 EHCN -","濁":"36127 EWLI -","濟":"30123 EYX -","測":"32100 EBCN -","澮":"38166 EOMA -","湞":"31186 EYBC -","渾":"37152 EBJJ -","煉":"95896 FDWF -","滸":"38140 EYRJ -","濃":"35132 ETWV -","點":"61362 WFYR -","熾":"93850 FYIA -","爛":"97820 FANW -","墊":"45104 GIG -","潯":"37146 ESMI -","牽":"00503 YVBQ -","獨":"46227 KHWLI -","狹":"44288 KHKOO -","烴":"91812 FMVM -","爍":"92894 FVID -","猙":"42257 KHBSD -","獄":"43284 KHYRK -","獅":"41227 KHHRB -","玨":"11114 MGMG -","獪":"48266 KHOMA -","瘡":"00167 KOIR -","瓏":"11111 MGYBP -","癧":"00111 KMDM -","瑉":"17164 MGRPA -","瞘":"61016 BUSRR -","瘋":"00117 KHNI -","猻":"42293 KHNDF -","琺":"14132 MGEGI -","硨":"15606 MRJWJ -","硯":"16612 MRBUU -","篤":"88327 HSQF -","竪":"77108 SEYT -","種":"22915 HDHJG -","禰":"31227 IFMFB -","竊":"30927 JCHDB -","類":"91886 FKMBC -","綁":"27927 VFQJL -","毧":"23715 HUIJ -","鞦":"49580 TJHDF -","碸":"17610 MRHNI -","秈":"22970 HDU -","繞":"24912 VFGGU -","結":"24961 VFGR -","絝":"24927 VFKMS -","絎":"21921 VFHON -","絢":"27920 VFPA -","繪":"28966 VFOMA -","絳":"27954 VFHEQ -","給":"28961 VFOMR -","絡":"27964 VFHER -","統":"20912 VFYIU -","絕":"27917 VFSHU -","罰":"60620 WLYRN -","絞":"20948 VFYCK -","勝":"79227 BFQS -","膽":"77261 BNCR -","腖":"75296 BDW -","揹":"52027 QLPB -","朧":"71211 BYBP -","脛":"71212 BMVM -","脈":"72232 BHHV -","艤":"28453 HYTGI -","衚":"21221 HOJRN -","薦":"44227 TIXF -","臚":"71212 BYPT -","蕘":"44212 TGGU -","繭":"44227 TBLI -","薈":"44606 TOMA -","蓽":"44504 TWTJ -","莢":"44808 TKOO -","荊":"44402 TMTN -","薺":"44223 TYX -","蕎":"44227 THKB -","葷":"44502 TBJJ -","熒":"99809 FFBF -","榮":"99904 FFBD -","滎":"99902 FFBE -","犖":"99502 FFBHQ -","盪":"36102 EHBT -","蕁":"44346 TSMI -","蓀":"44493 TNDF -","葒":"44912 TVFM -","藎":"44102 TLMT -","蕒":"44806 TWLC -","廕":"00232 INLI -","葯":"44927 TVFI -","蝦":"57147 LIRYE -","雖":"60115 RIOG -","葤":"44940 TVFI -","蠆":"44136 TWBI -","螘":"52118 LIUMT -","蝕":"85736 OILMI -","覘":"26612 YRBUU -","襖":"37284 LHBK -","誡":"03650 YRIT -","螞":"51127 LISQF -","覺":"77212 HBBUU -","語":"01661 YRMMR -","誚":"09627 YRFB -","誤":"06684 YRRVK -","誘":"02627 YRHDS -","誣":"01618 YRMOO -","誑":"01614 YRKHG -","誨":"08657 YROWY -","誥":"04661 YRHGR -","覽":"78212 SWBUU -","說":"08612 YRCRU -","誒":"03684 YRIOK -","貳":"43810 IPMMC -","誦":"07627 YRNIB -","賤":"63853 BCII -","貴":"50806 LMBUC -","貰":"44806 PTBUC -","貼":"61860 BCYR -","賁":"40806 JTBC -","貸":"23806 OPBUC -","貺":"66812 BCRHU -","貿":"77806 HHBUC -","趙":"49802 GOFB -","貽":"63860 BCIR -","費":"55806 LNBUC -","軻":"51020 JJMNR -","賀":"46806 KRBUC -","轤":"51012 JJYPT -","軲":"54060 JJJR -","軤":"52049 JJHFD -","軹":"56080 JJRC -","軸":"55060 JJLW -","軼":"55080 JJHQO -","轢":"52094 JJVID -","軫":"58022 JJOHH -","軺":"57062 JJSHR -","輕":"51012 JJMVM -","適":"30302 YYCB -","跡":"60130 RMYLC -","酈":"17227 MPNL -","選":"37308 YRUC -","鈣":"81127 CMYS -","鄖":"67827 RCNL -","鈈":"81190 CMF -","鐘":"80115 CYTG -","遜":"32309 YNDF -","鈑":"82147 CHE -","鈦":"84130 CKI -","鈐":"88127 COIN -","鋼":"87120 CAPP -","鈉":"84127 COB -","鈍":"85117 CPU -","欽":"87182 CNO -","鋇":"86180 CBUC -","鈞":"87120 CPIM -","籥":"88227 HOMB 8293","鈁":"80127 CYHS -","鈥":"89180 CF -","鈧":"80117 CYHN -","鈎":"87120 CPI -","鈄":"84100 CYJ -","鈕":"87112 CNG -","聞":"77401 ANSJ -","鎢":"87127 CHRF -","鈀":"87117 CAU -","閨":"77104 ANGG -","闥":"77305 ANYGQ -","閣":"77604 ANHER -","閥":"77253 ANOI -","隕":"76286 NLRBC -","頇":"11486 MJMBC -","靣":"10602 MWR -","險":"78286 NLOMO -","隉":"77212 NLHXG -","閩":"77136 ANLMI -","閡":"77802 ANYVO -","項":"11186 MMBC -","順":"21086 LLLC -","颮":"77211 HNPRU -","饒":"84712 OIGGU -","餌":"81740 OISJ -","須":"21286 HHMBC -","餃":"80748 OIYCK -","颯":"07110 YTHNI -","餅":"88741 OITT -","餉":"87720 OIHBR -","驊":"74354 SFTMJ -","驍":"74312 SFGGU -","驕":"72327 SFHKB -","罵":"60327 WLSQF -","駢":"78341 SFTT -","駱":"77364 SFHER -","鷗":"77727 SRHAF -","駭":"70382 SFYVO -","鴉":"77227 MHHAF -","滻":"30115 EYHM -","鴆":"47027 LUHAF -","濜":"35112 ELMT -","鴇":"27427 PJHAF -","餄":"88761 OIOMR -","餎":"87764 OIHER -","嫋":"47427 VNMM -","頫":"31186 LMUOC 7526","闓":"77108 ANUMT -","債":"25286 OQMC -","淩":"34147 EGCE -","悽":"95044 PJLV -","涼":"30196 EYRF -","塚":"47132 GBMO -","準":"30401 EGJ -","劇":"22200 YOLN -","傾":"21286 OPMC -","脣":"71227 MVB -","剝":"22900 VELN -","嗩":"69086 RFBC -","黨":"90331 FBRWF -","嘜":"64047 RJON -","嘮":"69027 RFFS -","圓":"60806 WRBC -","壺":"40107 GBLM -","喚":"67084 RNBK -","塤":"46186 GRBC -","塒":"44141 GAGI -","娛":"46484 VRVK -","堝":"47127 GBBR -","媧":"47427 VBBR -","孃":"40432 VYRV -","唕":"66040 XXRHA -","嫺":"47420 VANB -","賓":"30806 JMHC -","傢":"23232 OJMO -","崍":"24798 UDOO -","戀":"22339 VFP -","嶗":"29727 UFFS -","蓆":"44227 TITB -","悅":"98012 PCRU -","幬":"44241 LBGNI -","噁":"61031 RMMP 7664","寬":"30213 JTBI -","徠":"24298 HODOO -","慳":"97014 PSEG -","懇":"27333 BVP -","攣":"22502 VFQ -","憫":"97020 PANK -","摯":"45502 GIQ -","撈":"59027 QFFS -","輓":"57012 JJNAU -","損":"56086 QRBC -","搗":"57027 QHAU -","梱":"46900 DWD -","敵":"08240 YBOK -","晉":"10601 MIIA -","傚":"28240 OYKK -","曉":"64012 AGGU -","換":"57084 QNBK -","撿":"58086 QOMO -","暈":"60502 ABJJ -","曄":"64054 ATMJ -","棲":"45944 DJLV -","暉":"67052 ABJJ -","曬":"61012 AMMP -","覈":"10248 MWHSK -","樣":"48992 DTGE -","欒":"22904 VFD -","慄":"91094 PMWD 5587","齋":"00223 YXF -","棬":"49912 DFQU 7450","椏":"41912 DMLM -","檔":"49966 DFBW -","楨":"41986 DYBC -","橋":"42927 DHKB -","檜":"48966 DOMA -","榿":"42918 DUMT -","橈":"44912 DGGU -","慇":"27334 HEP -","樺":"44954 DTMJ -","斃":"98212 FKMNP -","槳":"27904 VID -","樁":"45977 DQKX -","氬":"80117 ONMLM -","澇":"39127 EFFS -","凃":"38194 IMOMD -","湧":"37127 ENBS -","漿":"27902 VIE -","渦":"37127 EBBR -","濬":"31168 EYBU -","潿":"36100 EWDQ -","濤":"34141 EGNI -","漣":"35130 EYJJ -","滌":"37194 EOLD -","渙":"37184 ENBK -","澗":"37120 EANA -","漲":"31132 ENSV -","燭":"96827 FWLI -","煙":"91814 FMWG -","潤":"37120 EANG -","煩":"91886 FMBC -","淶":"34198 EDOO -","燒":"94812 FGGU -","澀":"37111 ESIM -","熱":"45331 GIF -","獫":"48286 KHOMO -","燴":"98866 FOMA -","犧":"28553 HQTGS -","燁":"94854 FTMJ -","琿":"17152 MGBJJ -","畱":"10607 XMLLW -","燼":"95812 FLMT -","燙":"36809 EHF -","貍":"26215 BHWG -","癥":"00148 KHOK -","癰":"00115 KVUG -","愛":"20407 BBPE -","皰":"47212 DEPRU -","盞":"53102 IIBT -","痙":"00112 KMVM -","礱":"01602 YPMR -","皺":"24447 PUDHE -","礪":"11627 MRMTB -","監":"78102 SIBT -","離":"00215 YBOG -","臯":"26409 HUIOJ -","祕":"33204 IFPH 6964","礫":"12694 MRVID -","積":"25986 HDQMC -","鹽":"78102 SWBT -","禎":"31286 IFYBC -","礎":"14681 MRDDO -","竅":"30248 JCHSK -","稱":"22947 HDBGB -","綆":"21946 VFMLK -","競":"00212 YUYTU -","絹":"26927 VFRB -","綏":"22944 VFBV -","筧":"88212 HBUU -","繼":"22913 VFVVI -","筆":"88507 HLQ -","緊":"77903 SEVIF -","綃":"29927 VFFB -","筍":"88627 HPA -","罷":"60212 WLIBP -","聳":"28401 HOSJ -","恥":"13400 SJP -","綉":"22927 VFHDS -","聶":"10441 SJSJJ -","臍":"70223 BYX -","膠":"77222 BSMH -","膾":"78266 BOMA -","腦":"72262 BVVW -","膿":"75232 BTWV -","臟":"74253 BTIS -","絛":"27293 OLOF -","綈":"28927 VFCNH -","艙":"28467 HYOIR -","艷":"27117 UTNAU -","蓧":"44294 TOLD -","蓮":"44305 TYJJ -","涖":"30118 EOYT -","萵":"44227 TBBR -","蒔":"44641 TAGI -","艦":"28412 HYSIT -","獲":"44247 KHTOE -","萊":"44908 TDOO -","緻":"28940 VFMGK -","蕕":"44264 TKHW -","薟":"44886 TOMO -","瑩":"99103 FFBMG -","蒓":"44917 TVFU -","蠔":"50132 LIYRO -","蠶":"11136 MUALI -","覬":"26112 UTBUU -","襪":"34253 LTWI -","諸":"04660 YRJKA -","鶯":"99327 FFBHF -","諾":"04664 YRTKR -","袞":"00732 YCRHV -","諏":"07640 YRSJE -","蜆":"56112 LIBUU -","讀":"04686 YRGWC -","請":"05627 YRQMB -","誹":"01611 YRLMY -","課":"06694 YRWD -","諛":"07687 YRHXO -","諑":"01632 YRMSO -","調":"07620 YRBGR -","諉":"02644 YRHDV -","諗":"08632 YROIP -","諒":"00696 YRYRF -","諄":"00647 YRYRD -","誰":"00615 YROG -","諂":"07677 YRNHX -","贄":"45806 GIBUC -","誼":"03612 YRJBM -","誶":"00648 YRYOJ -","談":"09689 YRFF -","賃":"22806 OGBUC -","賊":"63850 BCIJ -","貲":"22806 YPBUC -","資":"37806 IOBUC -","賂":"67864 BCHER -","賅":"60882 BCYVO -","賄":"64827 BCKB -","賍":"60814 BCIG -","趕":"46804 GOAMJ -","輊":"51014 JJMIG -","躉":"44801 TWBO -","軾":"53040 JJIPM -","賈":"10806 MWBUC -","輇":"58014 JJOMG -","賮":"50806 LMFBC -","載":"43550 JIJWJ -","輅":"57064 JJHER -","邐":"31301 YMMP -","鈺":"81113 CMGI -","鄲":"67527 RJNL -","鉗":"84170 CTM -","鈷":"84160 CJR -","鉦":"81111 CMYM -","遞":"32301 YHYU -","轎":"52027 JJHKB -","鈸":"83147 CIKK -","缽":"85730 OUDM -","較":"50048 JJYCK -","鈳":"81120 CMNR -","鉆":"81160 CYR -","鈽":"84127 CKLB -","鉬":"86100 CBU -","鉭":"86110 CAM -","鉀":"86150 CWL -","鉄":"85180 CHQO -","鉕":"81116 CSR -","鈿":"86100 CW -","鉞":"83150 CIV -","鉑":"86102 CHA -","鈾":"85160 CLW -","鈰":"80127 CYLB -","鑠":"82194 CVID -","鈴":"88132 COII -","鉈":"83112 CJP -","鉉":"80132 CYVI -","鉍":"83104 CPH -","鉚":"87120 CHHL -","鈹":"84147 CDHE -","鐸":"86141 CWLJ -","閫":"77601 ANWD -","閬":"77732 ANIAV -","閱":"77212 ANCRU -","鈮":"87112 CSP -","頑":"11286 MUMBC -","鉛":"87161 CCR -","雋":"20227 OGLMS -","鬮":"77117 LNNXU -","頊":"11186 MGMBC -","頓":"51786 PUMBC -","顧":"31286 HGMBC -","難":"40815 TOOG -","頒":"81286 CHMBC -","預":"11286 NNMBC -","餑":"84747 OIJBD -","頌":"81786 CIMBC -","頎":"71286 HLMBC -","頏":"01286 YNMBC -","餓":"83750 OIHQI -","餒":"82744 OIBV -","驪":"71312 SFMMP -","騐":"78332 SFOIP -","鴣":"47627 JRHAF -","駿":"73347 SFICE -","騁":"75327 SFLWS -","鶇":"57927 DWHAF -","鴦":"50327 LKHAF -","鸕":"27227 YTHAF -","鴨":"67527 WLHAF -","鴝":"27627 PRHAF -","鴟":"77727 HMHAF -","鷥":"22327 VFHAF -","齔":"24710 YUP -","鴛":"27327 NUHAF -","鴕":"23312 HFJP -","傯":"26230 OHWP -","偸":"28232 OOMV -","僂":"25244 OLWV -","鴞":"67227 RSHAF -","獸":"63684 RRIK -","減":"33150 EIHR -","償":"29286 OFBC -","僨":"24286 OJTC -","龕":"80211 OMRP -","湊":"35184 EQKK -","匱":"71718 SLMC -","勗":"60127 ABMS -","嘖":"65086 RQMC -","廂":"00260 IDBU -","厴":"71256 MKWL -","啗":"67077 RNHX -","嚙":"61072 RYMU -","廄":"00247 IAIE -","垵":"43144 GJV -","嘯":"65027 RLX -","塹":"52104 JLG -","囀":"65043 RJJI -","墮":"74104 NBG -","嗇":"40601 GOWR -","嬰":"66404 BCV -","夠":"27220 NNPR -","幗":"46200 LBWIM -","嬋":"46456 VRRJ -","嶄":"22521 UJJL -","菴":"44716 TKLU -","綵":"22994 VFBD -","嬸":"43469 VJHW -","懸":"72339 BFP -","驚":"48327 TKSQF -","慘":"93022 PIIH -","懼":"96015 PBUG -","幘":"45286 LBQMC -","慙":"52332 JLP -","慣":"97086 PWJC -","摑":"56000 QWIM -","據":"51032 QYPO -","愨":"47334 GEP -","擲":"57027 QTKL -","撚":"53038 QBKF -","愜":"91018 PSKO -","慼":"53330 IFP -","擄":"51027 QYPS -","撣":"56056 QRRJ -","斂":"88840 OOOK -","憚":"96056 PRRJ -","樑":"43994 DEID -","鏇":"88181 CYSO -","摜":"57086 QWJC -","摻":"53022 QIIH -","櫺":"41961 DMBR -","斷":"22721 VIHML -","殞":"16286 MNRBC -","夢":"44207 TWLN -","淵":"32100 ELXL -","檢":"48986 DOMO -","慾":"87338 COP -","漬":"35186 EQMC -","漸":"32121 EJJL -","殮":"18286 MNOMO -","澱":"37147 ESCE -","淥":"37192 EVNE -","凟":"34186 IMGWC -","瀋":"33169 EJHW -","獵":"42212 KHVVV -","煥":"97884 FNBK -","燾":"40334 GNMF -","漁":"37136 ENWF -","澠":"37117 ERXU -","玀":"46215 KHWLG -","釬":"81140 CMJ -","獼":"41227 KHNMB -","燜":"97820 FANP -","滲":"33122 EIIH -","畧":"60604 WHER -","癢":"00132 KTOV -","璉":"15130 MGYJJ -","豬":"14260 MOJKA -","毬":"23719 HUIJE -","皚":"22618 HAUMT -","瘂":"00112 KMLM -","貓":"24260 BHTW -","瑣":"19186 MGFBC -","瑯":"17127 MGIIL -","盜":"37102 EOBT -","眥":"22601 YPBU -","皸":"34547 BJDHE -","蓋":"44102 TGIT -","著":"44604 TJKA 2198","槃":"27904 HED 7848","覜":"36112 LMUOU -","矯":"82827 OKHKB -","睜":"62057 BUBSD -","碩":"11686 MRMBC -","禱":"34241 IFGNI -","墝":"44112 GGGU -","矽":"17620 MRNI -","稭":"22962 HDPPA -","穢":"21953 HDYMH -","硤":"14688 MRKOO -","禍":"37227 IFBBR -","窯":"30331 JCTGF -","糶":"27915 UDSMG -","籠":"88211 HYBP -","牋":"23053 LLII -","糲":"91927 FDMTB -","纍":"60903 WWWF -","籩":"88302 HYHS -","勣":"54827 QCKS 6995","緒":"24960 VFJKA -","緋":"21911 VFLMY -","續":"24986 VFGWC -","緔":"29927 VFFBR -","綾":"24947 VFGCE -","綽":"21946 VFYAJ -","綺":"24921 VFKMR -","綬":"22947 VFBBE -","繩":"27917 VFRXU -","綹":"23964 VFHOR -","維":"20915 VFOG -","綿":"26927 VFHAB -","緄":"26912 VFAPP -","綢":"27920 VFBGR -","綣":"29912 VFFQU -","綳":"27920 VFBB -","綰":"23977 VFJRR -","綜":"23991 VFJMF -","綻":"23981 VFJMO -","綠":"27992 VFVNE -","綞":"22915 VFHJM -","綴":"27947 VFEEE -","羥":"81512 TQMVM -","職":"13450 SJYIA -","緇":"22963 VFVVW -","聹":"13421 SJJPN -","腳":"77220 BCRL -","蔆":"44147 TEGE -","脫":"78212 BCRU -","腡":"77227 BBBR -","聾":"01401 YPSJ -","縈":"99903 FFBVF -","臉":"78286 BOMO -","螢":"99136 FFBLI -","營":"99606 FFBRR -","蠱":"50102 LILIT -","蘿":"44915 TWLG -","蠣":"51127 LIMTB -","虛":"21217 YPTM -","薩":"44215 TNLM -","襲":"01732 YPYHV -","襠":"39266 LFBW -","蟶":"56114 LISRG -","啣":"67020 ROML -","釁":"77227 HBMCH -","覡":"16112 MOBUU -","謀":"04694 YRTMD -","訦":"04612 YRLBU -","諜":"04694 YRPTD -","諧":"02662 YRPPA -","謔":"01614 YRYPM -","謊":"04612 YRTYU -","謁":"06627 YRAPV -","謂":"06627 YRWB -","諫":"05696 YRDWF -","諼":"02647 YRBME -","諤":"06627 YRRRS -","諳":"00661 YRYTA -","諦":"00627 YRYBB -","諺":"00622 YRYHH -","讒":"07613 YRNRI -","謎":"09639 YRYFD -","諮":"07668 YRIOR -","賕":"63899 BCIJE -","賑":"61832 BCMMV -","諞":"03627 YRHSB -","賚":"40806 DOBUC -","諭":"08621 YROMN -","軀":"21216 HHSRR -","輔":"53027 JJIJB -","賒":"68891 BCOMF -","躍":"67115 RMSMG -","輒":"51012 JJSJU -","醖":"16612 MWABT -","銬":"84127 CJKS -","輛":"51027 JJMLB -","蹌":"68167 RMOIR -","銪":"84127 CKB -","邏":"36301 YWLG -","鋮":"83150 CIHS -","鉺":"81140 CSJ -","鐃":"84112 CGGU -","銅":"87120 CBMR -","銱":"86127 CRLB -","鋣":"87127 CMHL -","鋏":"84188 CKOO -","銠":"84112 CJKP -","鐺":"89166 CFBW -","銦":"86100 CWK -","鎧":"82118 CUMT -","鋌":"82141 CNKG -","銓":"88114 COMG -","銖":"85190 CHJD -","銑":"84112 CHGU -","銩":"82132 CHGI -","鍘":"82100 CBCN -","鏵":"84154 CTMJ -","鉿":"88161 COMR -","鉻":"87164 CHER -","鎩":"87147 CKCE -","錚":"87157 CBSD -","銚":"82113 CLMO -","銘":"87162 CNIR -","鉸":"80148 CYCK -","銫":"87117 CNAU -","銥":"80132 CYHV -","剷":"02200 YMLN -","銃":"80112 CYIU -","銣":"86100 CVR -","銀":"87132 CAV -","艫":"21412 HYYPT -","銨":"83144 CJV -","閹":"77716 ANKLU -","鐋":"86127 CEAH -","閾":"77153 ANIRM -","閿":"77407 ANBBE -","閶":"77606 ANAA -","閻":"77777 ANNHX -","鬩":"77212 LNHXU -","閽":"77604 ANHPA -","閼":"77233 ANYSY -","隨":"74232 NLYKB -","顱":"21286 YTMBC -","闡":"77506 ANRRJ -","頸":"11186 MMMBC -","領":"81386 OIMBC -","隱":"72237 NLBMP -","餡":"87777 OINHX -","舘":"83677 ORJRR -","餛":"86712 OIAPP -","騎":"74321 SFKMR -","騏":"74381 SFTMC -","騍":"76394 SFWD -","騅":"70315 SFOG -","鴰":"27627 HRHAF -","鷙":"45327 GIHAF -","鴯":"17227 MBHAF -","鵂":"27227 ODHF -","驂":"73322 SFIIH -","鴻":"37127 EMHF -","蔴":"44294 TIDD -","鸞":"22327 VFHAF -","鴿":"87627 ORHAF -","龔":"01801 YPTC -","麩":"45480 JNQO -","黃":"44806 TMWC -","礄":"12627 MRHKB -","諝":"07627 YRNOB -","璡":"10131 MGYOG -","囉":"66015 RWLG -","褻":"00732 YGIV -","餜":"86794 OIWD -","儐":"23286 OJMC -","僳":"21294 OMWD 5755","儲":"24260 OYRA -","儻":"29231 OFBF -","廈":"00247 IMUE -","廚":"00240 IGTI -","賸":"79286 BFQC 7850","噴":"64086 RJTC -","鑿":"37109 TEC -","嘍":"65044 RLWV -","嚳":"77601 HBHGR -","隄":"76281 NLAMO -","奧":"27804 HBK -","餵":"86732 OIWMV -","儺":"20215 OTOG -","媼":"46412 VWOT -","屬":"77227 SYYI -","嶁":"25744 ULWV -","嶸":"29794 UFFD -","禦":"27901 HLMMF -","巰":"10112 MMYIU -","冪":"37227 BTAB -","懲":"28334 HKP -","崳":"28721 UOMN -","強":"13236 NILI -","慍":"96012 PWOT -","憤":"94086 PJTC -","憒":"95086 PLMC -","摣":"51012 QYPM -","攙":"57013 QNRI -","憊":"24332 OBP -","擱":"57020 QANR -","攬":"58012 QSWU -","搇":"58032 QOIV -","蒐":"44513 THI 7430","暫":"52602 JLA -","摟":"55044 QLWV -","稜":"24947 HDGCE -","箠":"88105 HHJM -","攪":"57012 QHBU -","匵":"71718 SGWC -","槨":"47927 DYDL -","槧":"52904 JLD -","櫂":"47915 DSMG -","欏":"46915 DWLG -","灣":"32127 EVFN -","橢":"44927 DNLB -","溫":"36112 EWOT -","溼":"31114 EMVG -","遊":"38304 YYSD -","毿":"22214 IHHQU -","殫":"16256 MNRRJ -","潰":"35186 ELMC -","濺":"33153 EBCI -","牘":"24086 LLGWC -","燄":"29789 NXFF -","疇":"64041 WGNI -","漵":"38140 EODK -","佘":"80901 OMMF 3737","蝟":"56127 LIWB -","滯":"34127 EKPB -","癆":"00127 KFFS -","頗":"41286 DEMBC -","瓊":"17147 MGNBE -","犢":"24586 HQGWC -","瘓":"00184 KNBK -","癇":"00127 KANB -","睞":"64098 BUDOO -","鹼":"28686 YWOMO -","祿":"37292 IFVNE -","確":"14615 MROBG -","竄":"30712 JCHXV -","禪":"36256 IFRRJ -","瞼":"68086 BUOMO -","窩":"30227 JCBBR -","稅":"28912 HDCRU -","築":"88904 HMND -","篳":"88504 HWTJ -","粵":"26027 HWMVS -","箏":"88507 HBSD -","緘":"23950 VFIHR -","篩":"88727 HHRB -","縶":"45903 GIVIF -","緙":"24956 VFTLJ -","糞":"90801 FDWTC -","緗":"26900 VFDBU -","緹":"26981 VFAMO -","纜":"28912 VFSWU -","緬":"21962 VFMWL -","緝":"26941 VFRSJ -","繢":"25986 VFLMC -","緲":"29920 VFBUH -","緱":"27984 VFONK -","緶":"21946 VFOMK -","緩":"22947 VFBME -","緦":"26930 VFWP -","縋":"27937 VFYHR -","締":"20927 VFYBB -","緍":"22964 VFHPA -","編":"23927 VFHSB -","緞":"27947 VFHJE -","聯":"12472 SJVIT -","翹":"47212 GUSMM -","緣":"27932 VFVNO -","潟":"37127 EHXF 6001","羨":"80182 TGENO -","蔥":"44336 THWP -","蕆":"44253 TIHC -","醃":"14616 MWKLU -","蕢":"44806 TLMC -","蔞":"44404 TLWV -","臠":"22227 VFOBO -","蛺":"54188 LIKOO -","臘":"72212 BVVV -","蟄":"45136 GILMI -","螄":"51127 LIHRB -","蠻":"22136 VFLMI -","蠐":"50123 LIYX -","蟯":"54112 LIGGU -","褳":"35230 LYJJ -","襇":"37220 LANA -","褲":"30250 LIJJ -","襝":"38286 LOMO -","覿":"46812 GCBUU -","裝":"24732 VGYHV -","謨":"04684 YRTAK -","觴":"28227 NBOAH -","謝":"04600 YRHHI -","謖":"06647 YRWCE -","謠":"07672 YRBOU -","讜":"09631 YRFBF -","謙":"08637 YRTXC -","諡":"08612 YRCMT -","賫":"40806 JBBUC -","贖":"64886 BCGWC -","賞":"90806 FBRBC -","謐":"03612 YRPHT -","謗":"00627 YRYBS -","賡":"00286 ILOC -","賜":"66827 BCAPH -","賠":"60861 BCYTR -","躒":"62194 RMVID -","蹠":"60137 RMITF -","輦":"55506 QOJWJ -","趨":"47802 GOPUU -","煇":"97852 FBJJ -","賧":"69889 BCFF -","踐":"63153 RMII -","輞":"57020 JJBTV -","輥":"56012 JJAPP -","輩":"11506 LYJWJ -","輟":"57047 JJEEE -","遺":"35308 YLMC -","鐒":"89127 CFFS -","鑄":"84141 CGNI -","輜":"52063 JJVVW -","釋":"26941 HDWLJ -","錸":"84198 CDOO -","舖":"83627 ORIJB -","鋱":"83140 CIPP -","鏗":"87114 CSEG -","鎖":"89186 CFBC -","耡":"54927 QDBMS -","鋥":"86114 CRHG -","銷":"89127 CFB -","鋰":"86115 CWG -","鍋":"87127 CBBR -","鋯":"84161 CHGR -","銹":"82127 CHDH -","鏈":"85130 CYJJ -","鋨":"83150 CHQI -","鋶":"80112 CYIU -","鉲":"81131 CYMY -","鋒":"87154 CHEJ -","鐧":"87120 CANA -","鋅":"80141 CYTJ -","銻":"88127 CCNH -","銳":"88112 CCRU -","錒":"81120 CNLR -","鋟":"87147 CSME -","鋃":"83132 CIAV -","僱":"23215 OHSG -","闃":"77804 ANBUK -","濶":"37161 EANR -","鋦":"87127 CSSR -","靂":"10211 MBMDM -","闌":"77906 ANDWF -","靚":"56212 QBBUU -","頡":"41686 GRMBC -","頰":"41886 KOMBC -","頦":"01886 YOMBC -","頜":"81686 ORMBC -","潁":"21986 PEMBC -","饗":"27732 VLOIV -","餷":"84716 OIDAM -","闋":"77804 ANNOK -","颶":"77218 HNBMC -","韓":"44456 JJDMQ -","餿":"87747 OIHXE -","饞":"87713 OINRI -","騗":"31227 IBSQF -","魷":"23312 NFIKU -","騖":"18327 NKSQF -","騭":"71327 NHSQF -","餽":"86713 OIHI -","騷":"77336 SFEII -","魴":"20327 NFYHS -","魯":"27603 NWFA -","鵓":"47427 JDHAF -","賦":"63840 BCMPM -","鵒":"87627 CRHAF -","鵑":"67227 RBHAF -","鵝":"27527 HIHAF -","鸝":"17227 MPHAF -","鷳":"77227 ABHAF -","鵜":"87227 CHHAF -","鵠":"27627 HRHAF -","鵐":"17127 MOHAF -","黿":"10717 MMUU -","縉":"21961 VFMIA -","嬡":"42447 VBBE -","噯":"62047 RBBE -","寢":"30247 JVME -","勦":"24927 VDKS -","嬪":"43486 VJMC -","翬":"17502 SMBJJ -","曡":"60102 AAAM -","尲":"48013 KUTXC -","囁":"61041 RSJJ -","慴":"97062 PSMA -","湣":"37164 ERPA 7567","瘉":"00121 KOMN -","攄":"51036 QYPP -","搖":"57072 QBOU -","擺":"56012 QWLP -","擕":"50027 XQOGS -","攝":"51041 QSJJ -","擯":"53086 QJMC -","攤":"50015 QTOG -","數":"58440 LVOK -","樓":"45944 DLWV -","櫬":"46912 DYDU -","櫸":"47958 DHCQ -","煖":"92847 FBME -","欖":"48912 DSWU -","氳":"80117 ONWOT -","霤":"10602 MBHHW -","轂":"47547 GJHNE 5640","毀":"77147 HGHNE -","灧":"37117 EUTU -","潷":"38150 EHLQ -","灄":"31141 ESJJ -","谿":"28868 BKCOR 8131","濫":"38112 ESIT -","瀅":"39113 EFFG -","滾":"30132 EYCV -","灤":"32194 EVFD -","灘":"30115 ETOG -","灕":"30115 EYBG -","煆":"97847 FRYE -","滿":"34127 ETLB -","癡":"00181 KPKO -","濱":"33186 EJMC -","炤":"97862 FSHR -","獻":"23284 YBIK -","硶":"12627 MRUON -","礙":"17681 MRPKO -","磧":"15686 MRQMC -","癉":"00156 KRRJ -","窺":"30812 JCQOU -","痺":"00146 KHHJ -","穌":"22394 NFHD -","稟":"00904 YWRD -","篠":"88294 HOLD -","簽":"88886 HOMO -","竇":"30806 JCGWC -","糧":"96915 FDAMG -","籌":"88641 HGNI -","縟":"21943 VFMVI -","縛":"23942 VFIBI -","簡":"88227 HANA -","縝":"24981 VFJBC -","縞":"20927 VFYRB -","縭":"20927 VFYUB -","縊":"28912 VFTCT -","繽":"23986 VFJMC -","縫":"27935 VFYHJ -","纏":"20914 VFIWG -","齶":"26727 YURRS -","耮":"59927 QDFFS -","縑":"28937 VFTXC -","靦":"16612 MWBUU -","膃":"76212 BWOT -","懞":"94032 PTBO -","膩":"73240 BIPC -","薊":"44302 TNFN -","騰":"79227 BFQF -","簑":"88732 HYWV -","蕷":"44286 TNNC -","藍":"44102 TSIT -","蘺":"44215 TYBG -","蝸":"57127 LIBBR -","鎣":"99109 FFBC -","驀":"44327 TAKF -","覦":"86212 ONBUU -","譽":"77601 HCYMR -","謾":"06647 YRAWE -","謫":"00627 YRYCB -","觸":"26227 NBWLI -","譾":"08627 YRTBM -","謄":"79261 BFQR -","蛻":"58112 LICRU -","謹":"04615 YRTLM -","蹕":"66154 RMWTJ -","賴":"57986 DLSHC -","謬":"07622 YRSMH -","躚":"61131 RMYMU -","蹺":"64112 RMGGU -","輳":"55084 JJQKK -","辤":"20441 BEYTJ -","遙":"37306 YBOU -","輸":"58021 JJOMN -","輻":"51066 JJMRW -","酧":"13642 MWJDI -","輯":"56041 JJRSJ -","闢":"77241 ANSRJ -","躋":"60123 RMYX -","轡":"22609 VFR -","鍺":"84160 CJKA -","鍩":"84164 CTKR -","錨":"84160 CTW -","錯":"84161 CTA -","醬":"27604 VIMCW -","錁":"86194 CWD -","錛":"84144 CKJT -","鋻":"77109 SEC -","錆":"85127 CQMB -","醯":"10612 MWYUT 6376","鍀":"86141 CAMI -","錕":"86112 HRHPM -","錘":"82115 CHJM -","鍃":"87132 CPHP -","錦":"86127 CHAB -","錮":"86100 CWJR -","鑼":"86115 CWLG -","錇":"80161 CYTR -","錫":"86127 CAPH -","錈":"89112 CFQU -","鍁":"87182 CHLO -","錐":"80115 COG -","錠":"83181 CJMO -","錳":"87112 CNDT -","鍵":"85140 CNKQ -","闔":"77102 ANGIT -","闐":"77801 ANJBC -","錟":"89189 CFF -","雛":"20415 PUOG -","闕":"77482 ANTUO -","鋸":"87164 CSJR -","霧":"10227 MBNHS -","錙":"82163 CVVW -","韙":"64805 AODMQ -","韻":"06686 YARBC -","韞":"46512 DQWOT -","饃":"84784 OITAK -","頷":"81686 ORMBC -","穎":"21986 PDMBC -","頤":"71786 SLMBC -","頻":"21286 YHMBC -","颼":"77214 HNHXE -","餾":"87762 OIHHW -","穨":"25286 HULMC -","饈":"88712 OITQG -","騮":"77362 SFHHW -","鮁":"23347 NFIKK -","驁":"58327 GKSQF -","騫":"30327 JTCF -","騸":"73327 SFHSM -","鱸":"21312 NFYPT -","鮒":"24300 NFODI -","鮑":"27312 NFPRU -","鮃":"21349 NFMFJ -","鮎":"21360 NFYR -","鮐":"23360 NFIR -","鱟":"77336 HBNWF -","鵪":"47727 KUHAF -","鵯":"27427 HJHAF -","鵡":"17127 MMHAF -","鵲":"47627 TAHAF -","鵬":"77227 BBHF -","鶓":"47627 TWHAF -","齡":"28732 YUOII -","鶉":"07427 YDHAF -","齙":"27712 YUPRU -","躂":"64135 RMYGQ -","齟":"27712 YUBM -","願":"71286 MFMBC -","齠":"27762 YUSHR -","廝":"00221 ITCL -","嚶":"66044 RBCV -","墻":"44161 GGOW -","噓":"61017 RYPM -","攖":"56044 QBCV -","鄘":"07227 IBNL 7722","戩":"13650 MAI -","曖":"62047 ABBE -","嬙":"44461 VGOW -","搾":"53011 QJCS -","旂":"08221 YSOHL -","櫧":"44960 DYRA -","檻":"48912 DSIT -","縯":"23986 VFJMC 7896","瀠":"39193 EFFF -","檳":"43986 DJMC -","瀲":"38140 EOOK -","糢":"94984 FDTAK -","殯":"13286 MNJMC -","瀟":"34127 ETLX -","橰":"46948 DHUJ -","琍":"12100 MGHDN -","瘞":"00114 KKOG -","濰":"30115 EVFG -","瀦":"34160 EMOA -","瑤":"17172 MGBOU -","瘺":"00127 KSMB -","堿":"43150 GIHR -","璦":"12147 MGBBE -","窶":"30404 JCLWV -","耑":"22227 UMBL -","穩":"22937 HDBMP -","琯":"13177 MGJRR 5053","燻":"92831 FHGF -","簀":"88806 HQMC -","镟":"88781 XCYSO -","籮":"88915 HWLG -","篋":"88718 HSKO -","篛":"88127 HNMM -","糝":"93922 FDIIH -","縹":"21991 VFMWF -","縵":"26947 VFAWE -","簞":"88506 HRRJ -","籜":"88541 HQWJ -","簫":"88227 HLX -","纓":"26944 VFBCV -","縲":"26993 VFWVF -","甖":"66717 BCMVN -","縮":"23962 VFJOA -","繆":"27922 VFSMH -","臏":"73286 BJMC -","繅":"22994 VFVVD -","羆":"60331 WLIPF -","藺":"44227 TANG -","蘞":"44848 TOOK -","薔":"44601 TGOW -","輿":"77801 HXJC -","衊":"24153 HTTWI -","踡":"69112 RMFQU -","蠟":"52112 LIVVV -","藹":"44627 TYRV -","蟈":"56100 LIWIM -","蠅":"57117 LIRXU -","覯":"56412 TBBUU -","蟬":"56156 LIRRJ -","譜":"08661 YRTCA -","譖":"01661 YRMUA -","譙":"00631 YROGF -","譚":"01646 YRMWJ -","讕":"07620 YRANW -","贅":"58806 GKBUC -","譎":"07627 YRNHB -","賻":"63842 BCIBI -","踴":"67127 RMNBS -","躊":"64141 RMGNI -","轄":"53065 JJJQR -","賺":"68837 BCTXC -","轅":"54032 JJGRV -","賽":"30806 JTCC -","釀":"10632 MWYRV -","釅":"16648 MWRRK -","輾":"57032 JJSTV -","釃":"11612 MWMMP -","鍥":"87184 CQHK -","鍇":"82162 CPPA -","鍔":"86127 CRRS -","鏘":"87142 CVMI -","痠":"00147 KICE -","鍤":"82177 CHJX -","鍛":"87147 CHJE -","鍫":"29109 HFC -","鍶":"86130 CWP -","鑾":"22109 VFC -","鎪":"87147 CHXE -","鍰":"82147 CBME -","鍾":"82115 CHJG -","鎂":"88184 CTGK -","鎄":"80132 CYRV -","鍍":"80147 CITE -","鐨":"85186 CLNC -","顆":"61986 WDMBC -","闞":"77448 ANMJK -","鋂":"88157 COWY -","霽":"10223 MBYX -","饉":"84715 OITLM -","靜":"52257 QBBSD -","韜":"42577 DQBHX -","饅":"86747 OIAWE -","鏤":"85144 CLWV -","驃":"71391 SFMWF -","騾":"76393 SFWVF -","鮮":"28351 NFTQ -","鮫":"20348 NFYCK -","鮚":"24361 NFGR -","鮭":"24314 NFGG -","鮞":"21327 NFMBL -","鮪":"24327 NFKB -","鱭":"20323 NFYX -","鯗":"80336 TONWF -","鱘":"27346 NFSMI -","驄":"76330 SFHWP -","鶘":"47627 JRBHF -","鶚":"67227 RSHAF -","齜":"22710 YUYMP -","鶿":"80327 TVIF -","鶻":"77227 BBHAF -","鶥":"77227 AUHAF -","凜":"30194 IMYWD -","囑":"67027 RSYI -","鶩":"18327 NKHAF -","齦":"27732 YUAV -","譆":"04661 YRGRR -","攆":"55056 QQOJ -","襆":"32285 LTCO -","嚕":"67063 RNWA -","撐":"59041 QFBQ -","屨":"77244 SHOV -","橫":"44986 DTMC -","櫻":"46944 DBCV -","擼":"57063 QNWA -","潛":"31161 EMUA -","擷":"51086 QGRC -","攛":"53017 QJCV -","櫫":"14904 MAD -","瀾":"37120 EANW -","檣":"44961 DGOW -","璿":"11168 MGYBU -","癱":"00115 KTOG -","澂":"38140 EUGK -","瓔":"16144 MGBCV -","癟":"00127 KHUB -","簍":"88404 HLWV -","餱":"87784 OIONK -","瞞":"64027 BUTLB -","纈":"21986 VFGRC -","簣":"88806 HLMC -","繒":"28966 VFCWA -","耬":"55944 QDLWV -","聰":"16430 SJHWP -","繕":"28961 VFTGR -","繚":"24996 VFKCF -","蘄":"44521 TRJL -","聵":"15486 SJLMC -","蠑":"59194 LIFFD -","覲":"46112 TMBUU -","螻":"55144 LILWV -","襤":"38212 LSIT -","觶":"26256 NBRRJ -","蘊":"44912 TVFT -","蠍":"57182 LIAVO -","覰":"26212 YMBUU -","讞":"03684 YRYBK -","譫":"07661 YRNCR -","賾":"75786 SLQMC -","譴":"05637 YRYLR -","躑":"67127 RMTKL -","鏌":"84184 CTAK -","鎘":"81127 CMRB -","轆":"50012 JJIXP -","蹤":"68181 RMHOO -","鑷":"81141 CSJJ -","鎮":"84181 CJBC -","躓":"62186 RMHLC -","鎦":"87162 CHHW -","鎰":"88112 CTCT -","錼":"84191 CKMF -","鎳":"86194 CHUD -","鎬":"80127 CYRB -","鎊":"80127 CYBS -","靨":"71262 MKMWL -","黴":"28240 HOUFK -","韃":"44535 TJYGQ -","鎵":"83132 CJMO -","鑌":"83186 CJMC -","鞽":"42527 TJHKB -","顓":"21286 UBMBC -","顏":"01286 YHMBC -","顎":"61286 RSMBC -","饌":"87781 OIRUC -","題":"61808 AOMBC -","額":"31686 JRMBC -","飃":"71219 HNMWF -","饜":"71232 MKOIV -","饊":"88740 OITBK -","鱺":"21312 NFMMP -","骾":"71246 BBMLK -","驏":"77347 SFSND -","鰱":"25330 NFYJJ -","鰷":"27394 NFOLD -","鰹":"27314 NFSEG -","魘":"71213 MKHI -","鰣":"24341 NFAGI -","鮌":"20332 NFYVI -","鯉":"26315 NFWG -","鶴":"47227 OGHAF -","鯇":"23312 NFJMU -","鯊":"39336 EHNWF -","鯽":"27320 NFAIL -","齪":"26781 YURYO -","鎔":"83168 CJCR -","齏":"00223 YXLMM -","鷂":"27727 BUHAF -","鶼":"87227 TCHAF -","齬":"21761 YUMMR -","譟":"06694 YRRRD -","廩":"00294 IYWD -","斕":"07420 YKANW -","嬾":"47486 VDLC -","櫥":"40940 DIGI -","擻":"58040 QLVK -","瀨":"37186 EDLC -","氌":"27716 HUNWA -","懍":"90094 PYWD -","櫞":"47932 DVFO -","瀕":"31186 EYHC -","櫓":"47963 DNWA -","讌":"04631 YRTLF -","癭":"00144 KBCV -","籃":"88102 HSIT -","穡":"24961 HDGOW -","繾":"25937 VFYLR -","繰":"26994 VFRRD -","籬":"88215 HYBG -","獺":"47286 KHDLC -","繮":"21916 VFMWM -","癮":"00137 KNLP -","繯":"26932 VFWLV -","繳":"28940 VFHSK -","蟎":"54127 LITLB -","藪":"44448 TLVK -","讚":"04686 YRHUC -","翺":"27420 HJSMM -","轔":"59059 JJFDQ -","贈":"68866 BCCWA -","鏨":"52109 JLC -","轍":"58040 JJYBK -","贋":"71286 MOGC -","辯":"00441 YJYRJ -","鏢":"81191 CMWF -","鏜":"89114 CFBG -","鏡":"80112 CYTU -","顳":"11486 SJMBC -","彫":"72222 BRHHH -","鏍":"86193 CWVF -","鏑":"80127 CYCB -","鏞":"80127 CILB -","顢":"41286 TBMBC -","鏝":"86147 CAWE -","顙":"71986 EDMBC -","鏃":"88184 CYSK -","飈":"79218 HNFFF -","飆":"47810 IKHNI -","顛":"41886 JCMBC -","鯖":"25327 NFQMB -","魎":"21512 HIMLB -","鯤":"26312 NFAPP -","鯫":"27340 NFSJE -","鯢":"27312 NFHXU -","鯛":"27320 NFBGR -","鯪":"24347 NFGCE -","鯧":"26360 NFAA -","鯝":"26300 NFWJR -","鯨":"20396 NFYRF -","鯡":"21311 NFLMY -","鯔":"22363 NFVVW -","鯴":"27310 NFNMI -","鸚":"67427 BVHAF -","鯰":"28332 NFOIP -","鷚":"17227 SHHAF -","贇":"03806 YMBUC -","鹺":"28612 YWTQM -","鷓":"07227 IFHAF -","懣":"34332 EBP -","簷":"88261 HNCR -","黌":"77806 HBTMC -","檁":"40994 DYWD -","矚":"67027 BUSYI -","嬤":"40432 VIDI -","燐":"99859 FFDQ -","籪":"88721 HVIL -","羶":"80516 TQYWM -","羈":"60527 WLTJF -","贍":"67861 BCNCR -","鐔":"81146 CMWJ -","蘚":"44351 TNFQ -","繈":"23936 VFNII -","辮":"00441 YJVFJ -","鐝":"81182 CMTO -","贏":"00212 YRBBN -","躡":"61141 RMSJJ -","蹣":"64127 RMTLB -","鐐":"84196 CKCF -","鑥":"87163 CNWA -","鐓":"88140 CYDK -","鏷":"82185 CTCO -","鐠":"88161 CTCA -","鑹":"83117 CJCV -","鐙":"82118 CNOT -","鑭":"87120 CANW -","鏹":"86136 CNII -","驟":"77332 SFSEO -","鰌":"28364 NFTCW -","鰓":"26330 NFWP -","鰈":"24394 NFPTD -","鱝":"24386 NFJTC -","鰒":"28347 NFOAE -","鯿":"23327 NFISB -","鰐":"26327 NFRRS -","鰉":"26314 NFHAG -","鷦":"27327 OFHAF -","鰠":"27336 NFEII -","鷯":"47927 KFHAF -","鷲":"03327 YUHAF -","齲":"22727 YUHLB -","鷸":"17227 NBHAF -","嚻":"66660 XRRMC -","彜":"27442 VMFHT -","齷":"27714 YUSMG -","癩":"00186 KDLC -","囅":"67532 RJSTV -","籐":"88299 HBFE -","鐳":"81161 CMBW -","鑊":"84147 CTOE -","繙":"22969 VFHDW -","鋜":"86181 CRYO -","鐿":"80136 CYTP -","韉":"44527 TJTIF -","顥":"61986 AFMBC -","髏":"75244 BBLWV -","鐮":"80137 CITC -","鰲":"58336 GKNWF -","讎":"20215 OGYRG -","騣":"72347 SFUCE -","鰭":"24361 NFJPA -","鷺":"67327 RRHAF -","鰩":"22372 NFBOU -","鰥":"26399 NFWLE -","鰨":"26327 NFASM -","鷹":"00227 IGHAF -","儹":"24286 OHUC -","鸌":"24347 HFTOE -","癬":"00151 KNFQ -","巔":"22886 UJCC -","鑔":"83191 CJBF -","躕":"60140 RMIGI -","纘":"24986 VFHUC -","讖":"03650 YROIM -","籟":"88986 HDLC -","靄":"10627 MBYRV -","躥":"63117 RMJCV -","韝":"45547 DQTTB -","髖":"73213 BBJTI -","驥":"72381 SFLPC -","顫":"01186 YMMBC -","鰻":"26347 NFAWE -","髕":"73286 BBJMC -","鰵":"88336 OKNWF -","鱈":"21377 NFMBM -","鱉":"98336 FKNWF -","鰳":"24327 NFTJS -","鰾":"21391 NFMWF -","鑣":"80131 CIPF -","鱅":"20327 NFILB -","燿":"97815 FSMG -","鞀":"47562 TJSHR -","瓚":"14186 MGHUC -","髩":"72027 SHMLS -","顬":"11286 MBMBC -","鱖":"21382 NFMTO -","驤":"70332 SFYRV -","鱓":"26356 NFRRJ -","灝":"31186 EAFC -","癲":"00186 KJCC -","鱒":"28346 NFTWI -","黷":"64386 WFGWC -","顰":"21406 YCHHJ -","躪":"64127 RMTAG -","鼉":"66717 RRWMU -","黲":"63322 WFIIH -","鱗":"29359 NFFDQ -","贛":"07486 YJHEC -","鑲":"80132 CYRV -","鸛":"47227 TGHAF -","趲":"44808 GOHUC -","顴":"41286 TGMBC -","鱧":"25318 NFTWT -","齇":"21212 HLYPM 8298","戇":"07338 YCP -","饢":"85732 OIJBV -","臒":"74247 BTOE -","躦":"64186 RMHUC -","鼴":"71714 HVSAV -","纔":"27913 VFNRI -","廠":"00248 IFBK -","繃":"22927 VFUBB -","幣":"98227 FKLB -","鉢":"85130 CDM -","饑":"82753 OIVII -","鏟":"80115 CYHM -","壩":"41127 GMBB -","慚":"92021 PJJL -","廁":"00220 IBCN -","處":"21241 YPHEN -","鈔":"89120 CFH -","辭":"20241 BBYTJ -","幹":"48441 JJOMJ -","彈":"16256 NRRJ -","蕩":"44127 TEAH -","鋤":"84127 CBMS -","當":"90606 FBRW -","賭":"64860 BCJKA -","歡":"47282 TGNO -","構":"45947 DTTB -","鉤":"87120 CPR -","譁":"04654 YRTMJ -","惡":"10331 MMP -","關":"77772 ANVIT -","礆":"18686 MROMO -","輝":"97252 FUBJJ -","館":"83777 OIJRR -","績":"25986 VFQMC -","劍":"82800 OOLN -","規":"56812 QOBUU -","鑑":"88112 CSIT 7774","箋":"88503 HII -","舉":"77508 HCQ -","歷":"71211 MDYLM -","饋":"85786 OILMC -","階":"72262 NLPPA -","隸":"45999 DFLE -","驢":"71312 SFYPT -","鋁":"86160 CRHR -","屢":"77244 SLLV -","懶":"97086 PDLC -","盡":"50102 LMFBT -","侶":"26262 ORHR -","呂":"60602 RHR -","齧":"57772 QHYMU -","羅":"60915 WLVFG -","縷":"25944 VFLLV -","鬧":"77227 LNYLB -","靈":"10108 MBRRM -","闊":"77164 ANEHR -","濾":"31136 EYPP -","慮":"21236 YPWP -","憑":"31332 IFP -","飄":"17910 MFHNI -","騙":"73327 SFHSB -","鋪":"83127 CIJB -","羣":"17501 SRTQ -","牆":"24261 VMGOW -","槍":"48967 DOIR -","盤":"27102 HEBT -","鍬":"89180 CHDF -","籤":"88153 HOIM -","錢":"83153 CII -","絨":"23950 VFIJ -","驅":"71316 SFSRR -","殺":"47947 KCHNE -","蘇":"44394 TNFD -","歲":"21253 YMIHH -","鐵":"83150 CJIG -","韌":"47520 DQSHI -","視":"36212 IFBUU -","壇":"40116 GYWM -","懾":"91041 PSJJ -","臺":"40104 GRBG -","爲":"20227 BHNF -","塗":"38104 EDG -","廳":"00231 ISGP -","體":"75218 BBTWT -","聽":"14131 SGJWP -","僞":"22227 OBHF -","豎":"77108 SEMRT -","頹":"21286 HUMBC -","銜":"21221 HOCMN -","閒":"77227 ANB -","杴":"47982 DNO -","戲":"23250 YTI -","線":"26992 VFHAE -","纖":"23950 VFOIM -","囂":"66668 RRMCR -","攜":"52027 QUOB -","勳":"24327 HFKS -","繡":"25927 VFLX -","醫":"77604 SEMCW -","鏽":"85127 CLX -","豔":"24112 UTGIT -","鑰":"88127 COMB -","驗":"78386 SFOMO -","敘":"88940 ODOK -","贊":"24806 HUBUC -","蟻":"58153 LITGI -","醞":"16612 MWWOT -","巖":"22248 URRK -","皁":"26400 HAJ -","雜":"00915 YDOG -","蔭":"44232 TNLI -","藥":"44904 TVID -","贓":"63850 BCIMS -","證":"02618 YRNOT -","髒":"74241 BBTMT -","茲":"44732 TVII -","總":"26930 VFHWP -","閘":"77506 ANWL -","鑽":"84186 CHUC -","攢":"54086 QHUC -","磚":"15643 MRJII -","紮":"42903 DUVIF -","奩":"40716 KSRR -","嫵":"48431 VOTF -","潙":"32127 EBHF -","衆":"27232 HTOHO -","釒":"80109 OMGC -","嬀":"42427 VBHF -","奼":"42414 VHP -","逕":"31301 YMVM -","犛":"58251 JKMHQ -","崬":"22906 UDW -","駑":"47327 VESQF -","壎":"42131 GHGF -","壠":"41111 GYBP -","懨":"91084 PMAK -","閭":"77606 ANRHR -","蒞":"44118 TEOT -","穭":"27963 HDNWA -","贐":"65812 BCLMT -","釹":"84140 CV -","鞝":"49527 TJFBR -","蓴":"44343 TJII -","痾":"00121 KNLR -","磽":"14612 MRGGU -","撳":"57082 QCNO -","瀆":"34186 EGWC -","櫝":"44986 DGWC -","弒":"43940 KCIPM -","諶":"04618 YRTMV -","鐗":"87120 CANB -","齎":"00223 YXBUC -","鐦":"87120 CANT -","櫚":"47920 DANR -","緡":"27964 VFRPA -","鋝":"82149 CBDI -","灩":"34112 EUTT -","磣":"13622 MRIIH -","襉":"37220 LANB -","褸":"35244 LLLV -","尷":"48011 KUSIT -","罌":"66772 BCOJU -","餈":"37732 IOOIV -","瘻":"00144 KLWV -","鎿":"88152 COMQ -","糉":"92947 FDUCE -","鎇":"87167 CAHU -","覷":"26212 YMBUU -","鐲":"86127 CWLI -","鯀":"22393 NFHVF -","鯁":"21346 NFMLK -","钁":"86147 CBUE -","贗":"71286 MFBUC -","櫱":"20904 UJD -","鰍":"29380 NFHDF -","鬢":"72806 SHJMC -","迴":"36300 YWR -","鱷":"21316 NFMGR -","鱔":"28361 NFTGR -","裡":"36215 LWG -"}');
    }, function(j) {
      j.exports = JSON.parse('{"銼":"caㄘㄨㄛˋ","蔣":"cbㄐㄧㄤˇ","萬":"cbㄨㄢˋ","塼":"ceㄓㄨㄢ","詆":"cdㄉㄧˇ","鎸":"cdㄐㄩㄢ","厰":"caㄔㄤˇ","臥":"caㄨㄛˋ","兒":"cbㄋㄧˊ","幾":"cdㄐㄧ","廼":"cdㄋㄞˇ","個":"cbㄍㄜˋ","麼":"ccㄇㄛˊ","蔔":"cbo","璽":"caㄒㄧˇ","義":"caㄧˋ","習":"caㄒㄧˊ","於":"aeㄨ","鄉":"caㄒㄧㄤ","億":"caㄧˋ","虧":"cbㄎㄨㄟ","韆":"cdㄑㄧㄢ","衛":"cdㄨㄟˋ","屍":"caㄕ","乾":"abㄑㄧㄢˊ","門":"ccㄇㄣˊ","廣":"cbㄍㄨㄤˇ","與":"caㄩˇ","醜":"caㄔㄡˇ","專":"caㄓㄨㄢ","馬":"ccㄇㄚˇ","為":"cbㄨㄟˊ","豐":"ccㄈㄥ","飛":"ccㄈㄟ","烏":"cdㄨ","雲":"ccㄩㄣˊ","倉":"cdㄘㄤ","書":"caㄕㄨ","內":"cdㄋㄟˋ","僅":"cdㄐㄧㄣˇ","僕":"ccㄆㄨˊ","侖":"cdㄌㄩㄣˊ","鳳":"ccㄈㄥˋ","從":"cdㄘㄨㄥˊ","昇":"caㄕㄥ","岡":"ceㄍㄤ","兇":"caㄒㄩㄥ","區":"cbㄑㄩ","勻":"cdㄩㄣˊ","辦":"ccㄅㄢˋ","厛":"cdㄊㄧㄥ","勸":"cdㄑㄩㄢˋ","雙":"caㄕㄨㄤ","厤":"cdㄌㄧˋ","戶":"cbㄏㄨˋ","伕":"ccㄈㄨ","無":"ccㄨˊ","憶":"caㄧˋ","計":"cdㄐㄧˋ","鬥":"cdㄉㄡˋ","開":"cbㄎㄞ","見":"cdㄐㄧㄢˋ","訂":"cdㄉㄧㄥˋ","藝":"cbㄧˋ","氣":"cdㄑㄧˋ","紥":"caㄓㄚ","鄧":"cdㄉㄥˋ","長":"caㄔㄤˊ","隊":"cdㄉㄨㄟˋ","認":"caㄖㄣˋ","訃":"ccㄈㄨˋ","車":"caㄔㄜ","貝":"ccㄅㄟˋ","閂":"caㄕㄨㄢ","韋":"cbㄨㄟˊ","風":"ccㄈㄥ","業":"cbㄧㄝˋ","東":"cbㄉㄨㄥ","鉅":"cdㄐㄩˋ","絲":"cdㄙ","叢":"cdㄘㄨㄥˊ","們":"ccㄇㄣˊ","蘭":"cbㄌㄢˊ","樂":"cbㄌㄜˋ","儀":"caㄧˊ","鼕":"cdㄉㄨㄥ","冊":"cdㄘㄜˋ","馮":"ccㄈㄥˊ","芻":"cbㄔㄨˊ","寫":"caㄒㄧㄝˇ","佔":"cdㄓㄢˋ","齣":"caㄔㄨ","擊":"cdㄐㄧ","勱":"ccㄇㄞˋ","發":"ccㄈㄚ","厲":"cdㄌㄧˋ","盧":"cdㄌㄩˊ","衹":"cdㄓˇ","葉":"cbㄧㄝˋ","嘰":"cdㄐㄧ","聖":"caㄕㄥˋ","務":"ccㄨˋ","號":"cbㄏㄠˋ","檯":"cbㄊㄞˊ","処":"caㄔㄨˋ","嘆":"cdㄊㄢˋ","爾":"ccㄦˇ","嬭":"ceㄋㄞˇ","帥":"caㄕㄨㄞˋ","對":"cdㄉㄨㄟˋ","寧":"cdㄋㄧㄥˊ","頭":"cdㄊㄡˊ","佈":"ccㄅㄨˋ","劄":"caㄓㄚˊ","匯":"cbㄏㄨㄟˋ","戔":"cdㄐㄧㄢ","撲":"ccㄆㄨ","術":"caㄕㄨˋ","漢":"cbㄏㄢˋ","舊":"cdㄐㄧㄡˋ","滅":"ccㄇㄧㄝˋ","歸":"cbㄍㄨㄟ","禮":"cdㄌㄧˇ","電":"ccㄉㄧㄢˋ","訌":"cbㄏㄨㄥˋ","討":"cdㄊㄠˇ","訕":"caㄕㄢˋ","訐":"cdㄐㄧㄝˊ","糾":"cdㄐㄧㄡ","節":"cbㄐㄧㄝˊ","訓":"caㄒㄩㄣˋ","訖":"cdㄑㄧˋ","議":"caㄧˋ","訊":"caㄒㄩㄣˋ","記":"cdㄐㄧˋ","遼":"cdㄌㄧㄠˊ","軋":"cbㄧㄚˋ","閃":"caㄕㄢˇ","讓":"caㄖㄤˋ","飢":"cdㄐㄧ","鄺":"cbㄎㄨㄤˋ","邊":"cfㄅㄧㄢ","鳥":"cdㄋㄧㄠˇ","喬":"cdㄑㄧㄠˊ","譏":"cdㄐㄧ","爭":"caㄓㄥ","馭":"caㄩˋ","丟":"cdㄉㄧㄡ","亙":"cbㄍㄣˋ","買":"ccㄇㄞˇ","產":"caㄔㄢˇ","龍":"cdㄌㄨㄥˊ","亞":"cdㄧㄚˋ","倣":"ccㄈㄤˇ","會":"cbㄏㄨㄟˋ","夥":"cbㄏㄨㄛˇ","眾":"caㄓㄨㄥˋ","價":"cdㄐㄧㄚˋ","優":"cdㄧㄡ","傴":"caㄩˇ","傘":"cdㄙㄢˇ","傳":"caㄔㄨㄢˊ","倀":"caㄔㄤ","傖":"cdㄘㄤ","傷":"caㄕㄤ","佇":"caㄓㄨˋ","偽":"ceㄨㄟˇ","偉":"caㄨㄟˇ","倫":"cdㄌㄩㄣˊ","興":"caㄒㄧㄥ","関":"cbㄍㄨㄢ","沖":"caㄔㄨㄥ","農":"cdㄋㄨㄥˊ","決":"cdㄐㄩㄝˊ","劉":"caㄌㄧㄡˊ","鳧":"ccㄈㄨˊ","沍":"acㄏㄨˋ","軍":"cdㄐㄩㄣ","劃":"cbㄏㄨㄚˊ","氹":"cdㄉㄤˋ","則":"caㄗㄜˊ","創":"caㄔㄨㄤˋ","華":"cbㄏㄨㄚˊ","剛":"caㄍㄤ","厙":"caㄕㄜˋ","協":"caㄒㄧㄝˊ","厭":"caㄧㄢˋ","動":"cdㄉㄨㄥˋ","壓":"ceㄧㄚ","籲":"cbㄩˋ","弔":"cdㄉㄧㄠˋ","喫":"caㄔ","郃":"ccㄏㄜˊ","嚇":"cbㄏㄜˋ","嚮":"caㄒㄧㄤˋ","囘":"cbㄏㄨㄟˊ","場":"caㄔㄤˊ","嗎":"ccㄇㄚˊ","壯":"caㄓㄨㄤˋ","後":"cbㄏㄡˋ","團":"caㄊㄨㄢˊ","誇":"cbㄎㄨㄚ","壙":"ceㄎㄨㄤˋ","奪":"cdㄉㄨㄛˊ","姦":"cdㄐㄧㄢ","婦":"ccㄈㄨˋ","妝":"caㄓㄨㄤ","孫":"caㄙㄨㄣ","尋":"caㄒㄩㄣˊ","儘":"cdㄐㄧㄣˇ","導":"cdㄉㄠˇ","媽":"ccㄇㄚ","堯":"ceㄧㄠˊ","塵":"ceㄔㄣˊ","豈":"cbㄑㄧˇ","夾":"cdㄐㄧㄚ","嶼":"ceㄩˇ","嵗":"ceㄙㄨㄟˋ","並":"ccㄅㄧㄥˋ","師":"caㄕ","異":"caㄧˋ","莊":"cbㄓㄨㄤ","戯":"cbㄒㄧˋ","儅":"cdㄉㄤ","託":"cdㄊㄨㄛ","扡":"caㄊㄨㄛ","鞏":"cbㄍㄨㄥˇ","慶":"cdㄑㄧㄥˋ","釦":"caㄎㄡˋ","懺":"caㄔㄢˋ","擴":"cbㄎㄨㄛˋ","執":"ceㄓˊ","粬":"cdㄑㄩ","捫":"ccㄇㄣˊ","揚":"caㄧㄤˊ","掃":"cdㄙㄠˇ","樸":"cbㄆㄨˇ","硃":"ceㄓㄨ","畢":"ccㄅㄧˋ","湯":"ccㄊㄤ","權":"cbㄑㄩㄢˊ","爺":"cdㄧㄝˊ","獷":"cbㄍㄨㄤˇ","燈":"cdㄉㄥ","汙":"ccㄨ","懽":"cbㄏㄨㄢ","襍":"cdㄗㄚˊ","機":"cbㄐㄧ","璣":"cdㄐㄧ","紆":"ccㄩ","約":"cdㄩㄝ","紂":"caㄓㄡˋ","級":"cdㄐㄧˊ","紅":"cdㄏㄨㄥˊ","縴":"cdㄑㄧㄢˋ","紇":"cbㄏㄜˊ","紈":"cdㄨㄢˊ","獁":"ccㄇㄚˇ","纊":"cbㄎㄨㄤˋ","紀":"cdㄐㄧˋ","攷":"cbㄎㄠˇ","網":"cdㄨㄤˇ","觀":"cbㄍㄨㄢ","蟲":"caㄔㄨㄥˊ","詎":"cdㄐㄩˋ","謳":"ccㄡ","訝":"caㄧㄚˋ","講":"cdㄐㄧㄤˇ","諱":"cbㄏㄨㄟˋ","訛":"ceㄜˊ","訥":"cdㄋㄜˋ","許":"cbㄒㄩ","薌":"cbㄒㄧㄤ","諷":"ccㄈㄥˇ","論":"cdㄌㄩㄣˋ","訪":"ccㄈㄤˇ","設":"caㄕㄜˋ","訟":"cdㄙㄨㄥˋ","軌":"cbㄍㄨㄟˇ","訣":"cdㄐㄩㄝˊ","達":"cdㄉㄚˊ","貞":"caㄓㄣ","釓":"caㄍㄚˊ","鄔":"cdㄨ","邁":"ccㄇㄞˋ","過":"cbㄍㄨㄛˋ","閉":"ccㄅㄧˋ","遷":"cdㄑㄧㄢ","問":"caㄨㄣˋ","釔":"caㄧˇ","閆":"cdㄧㄢˊ","堦":"cdㄐㄧㄝ","陣":"caㄓㄣˋ","陰":"ceㄧㄣ","闖":"caㄔㄨㄤˇ","陽":"caㄧㄤˊ","餳":"cdㄒㄧㄥˊ","頁":"cdㄧㄝˋ","馴":"caㄒㄩㄣˋ","馱":"cdㄊㄨㄛˊ","馳":"caㄔˊ","貟":"caㄩㄢˊ","兩":"cdㄌㄧㄤˇ","嚴":"caㄧㄢˊ","齊":"cdㄑㄧˊ","畝":"ccㄇㄨˇ","餘":"caㄩˊ","祐":"ceㄧㄡˋ","亂":"cdㄌㄨㄢˋ","麗":"cdㄌㄧˋ","躰":"cdㄊㄧˇ","僉":"cdㄑㄧㄢ","彿":"ccㄈㄨˋ","剋":"cf","兌":"cdㄉㄨㄟˋ","況":"ccㄎㄨㄤˋ","別":"caㄅㄧㄝˊ","剄":"caㄐㄧㄥˇ","傭":"caㄩㄥ","刪":"caㄕㄢ","勁":"cdㄐㄧㄣˋ","鉋":"caㄅㄠˋ","滷":"cdㄌㄩˇ","勵":"cdㄌㄧˋ","勞":"cdㄌㄠˊ","凍":"ccㄉㄨㄥˋ","縣":"caㄒㄧㄢˋ","毉":"cdㄧ","吳":"caㄨˊ","噸":"cdㄉㄨㄣ","獃":"cdㄉㄞ","啓":"cdㄑㄧˇ","唚":"cdㄑㄧㄣˋ","吶":"cdㄋㄚˋ","嘸":"ccㄈㄨˇ","唄":"cci","聼":"cdㄊㄧㄥ","卻":"cdㄑㄩㄝˋ","嚦":"cdㄌㄧˋ","員":"cdㄩㄢˊ","嘔":"caㄡˇ","紉":"caㄖㄣˋ","囈":"cdㄧˋ","嗚":"caㄨ","咼":"cbㄨㄞ","嗆":"caㄑㄧㄤˋ","睏":"cbㄎㄨㄣˋ","圇":"cdㄌㄩㄣˊ","園":"caㄩㄢˊ","堅":"ceㄐㄧㄢ","阬":"cbㄎㄥ","壞":"ceㄏㄨㄞˋ","阯":"caㄓˇ","圍":"ccㄨㄟˊ","墰":"ceㄊㄢˊ","負":"ccㄈㄨˋ","塢":"ccㄨˋ","塊":"ceㄎㄨㄞˋ","墳":"ceㄈㄣˊ","壢":"ceㄌㄧˋ","垻":"ceㄅㄚˋ","聲":"caㄕㄥ","墜":"ceㄓㄨㄟˋ","殼":"cdㄎㄜˊ","奐":"cbㄏㄨㄢˋ","媯":"cbㄍㄨㄟ","層":"cdㄘㄥˊ","嫗":"cbㄩˋ","侷":"cdㄐㄩˊ","壽":"caㄕㄡˋ","崗":"ceㄍㄤˇ","匲":"cdㄌㄧㄢˊ","嶇":"ceㄑㄩ","嶴":"ceㄠˋ","島":"ceㄉㄠˇ","娬":"caㄨˇ","峴":"ceㄒㄧㄢˋ","嵐":"ceㄌㄢˊ","幃":"caㄨㄟˊ","牀":"caㄔㄨㄤˊ","廬":"cfㄌㄩˊ","帳":"caㄓㄤˋ","應":"cdㄧㄥ","廡":"caㄨˇ","庫":"cbㄎㄨˋ","徹":"caㄔㄜˋ","棄":"cbㄑㄧˋ","徬":"ccㄆㄤˊ","張":"caㄓㄤ","憮":"caㄨˇ","懷":"cbㄏㄨㄞˊ","愾":"cdㄎㄞˋ","悵":"caㄔㄤˋ","憂":"caㄧㄡ","誌":"caㄓˋ","愴":"caㄔㄨㄤˋ","拋":"ccㄆㄠ","擾":"caㄖㄠˇ","摳":"cbㄎㄡ","撫":"ccㄈㄨˇ","慪":"cdㄡˋ","搶":"caㄑㄧㄤˇ","摺":"cdㄓㄜˊ","摶":"cdㄊㄨㄢˊ","掄":"cdㄌㄩㄣ","桿":"cbㄍㄢˇ","報":"ceㄅㄠˋ","擬":"cdㄋㄧˇ","曠":"cbㄎㄨㄤˋ","時":"caㄕˊ","條":"cbㄊㄧㄠˊ","護":"cbㄏㄨˋ","楊":"cbㄧㄤˊ","來":"cdㄌㄞˊ","槓":"cbㄍㄤˋ","歟":"caㄩˊ","極":"cbㄐㄧˊ","溝":"ccㄍㄡ","沒":"ccㄇㄟˊ","灃":"ccㄈㄥ","漚":"ccㄡˋ","瀝":"ccㄌㄧˋ","榪":"cbㄇㄚˋ","殲":"cdㄐㄧㄢ","淪":"ccㄌㄩㄣˊ","洶":"ccㄒㄩㄥ","滄":"ccㄘㄤ","溈":"ccㄨㄟˊ","災":"cdㄗㄞ","氾":"ccㄈㄢˋ","狀":"caㄓㄨㄤˋ","煬":"cdㄧㄤˊ","滬":"ccㄏㄨˋ","燦":"cdㄘㄢˋ","霛":"ccㄌㄧㄥˊ","竈":"cdㄗㄠˋ","猶":"cdㄧㄡˊ","囪":"caㄘㄨㄥ","癤":"cdㄐㄧㄝ","療":"cdㄌㄧㄠˊ","係":"caㄒㄧˋ","狽":"ccㄅㄟˋ","窮":"cdㄑㄩㄥˊ","緯":"cdㄨㄟˇ","磯":"ceㄐㄧ","禿":"cbㄊㄨ","瑪":"ccㄇㄚˇ","紕":"ccㄆㄧ","縱":"cdㄗㄨㄥˋ","紗":"ccㄕㄚ","綱":"cbㄍㄤ","純":"caㄔㄨㄣˊ","納":"cdㄋㄚˋ","紙":"caㄓˇ","紜":"caㄩㄣˊ","紛":"ccㄈㄣ","綸":"cbㄌㄩㄣˊ","紐":"cdㄋㄧㄡˇ","紋":"caㄨㄣˊ","蕭":"cbㄒㄧㄠ","紓":"caㄕㄨ","羋":"ccㄇㄧˇ","腸":"caㄔㄤˊ","蘆":"cbㄌㄩˊ","紡":"ccㄈㄤˇ","葦":"cbㄨㄟˇ","蕪":"cbㄨˊ","藶":"cbㄌㄧˋ","萇":"cbㄔㄤˊ","虯":"cdㄑㄧㄡˊ","蕓":"cbㄩㄣˊ","莧":"cbㄒㄧㄢˋ","詁":"cbㄍㄨˇ","蒼":"cbㄘㄤ","囌":"cdㄙㄨ","苧":"abㄋㄧㄥˊ","証":"caㄓㄥˋ","訶":"cbㄏㄜ","補":"ccㄅㄨˇ","識":"caㄕˊ","評":"ccㄆㄧㄥˊ","詐":"caㄓㄚˋ","詛":"cdㄗㄨˇ","診":"caㄓㄣˇ","謅":"caㄓㄡ","詞":"cdㄘˊ","詘":"caㄑㄩ","訴":"cdㄙㄨˋ","譯":"cdㄧˋ","詔":"caㄓㄠˋ","貢":"cbㄍㄨㄥˋ","穀":"cbㄍㄨˇ","財":"cdㄘㄞˊ","詒":"ceㄧˊ","還":"cbㄏㄨㄢˊ","軔":"caㄖㄣˋ","軒":"cbㄒㄩㄢ","進":"cdㄐㄧㄣˋ","違":"cbㄨㄟˊ","運":"cdㄩㄣˋ","這":"caㄓㄜˋ","連":"cdㄌㄧㄢˊ","鄒":"cdㄗㄡ","裏":"cdㄌㄧˇ","郵":"caㄧㄡˊ","鄴":"caㄧㄝˋ","遲":"caㄔˊ","針":"caㄓㄣ","釘":"caㄉㄧㄥ","鄰":"cdㄌㄧㄣˊ","遠":"caㄩㄢˇ","釗":"caㄓㄠ","釕":"caㄌㄧㄠˇ","閏":"caㄖㄨㄣˋ","間":"cdㄐㄧㄢ","釙":"caㄆㄛ","闈":"caㄨㄟˊ","閔":"ccㄇㄧㄣˇ","閎":"cbㄏㄨㄥˊ","閌":"cbㄎㄤ","閑":"caㄒㄧㄢˊ","悶":"ccㄇㄣˋ","際":"cdㄐㄧˋ","陘":"cdㄒㄧㄥˊ","陸":"cdㄌㄩˋ","陳":"caㄔㄣˊ","靭":"caㄖㄣˋ","隴":"cdㄌㄨㄥˇ","飪":"caㄖㄣˋ","飩":"cdㄊㄨㄣˊ","餼":"caㄒㄧˋ","飭":"caㄔˋ","飯":"ccㄈㄢˋ","敺":"cdㄑㄩ","飫":"cdㄩˋ","飲":"caㄧㄣˇ","蓯":"cbㄘㄨㄥ","暘":"cdㄧㄤˊ","麥":"ccㄇㄞˋ","雞":"cdㄐㄧ","鳩":"cdㄐㄧㄡ","駁":"ccㄅㄛˊ","龜":"cdㄍㄨㄟ","珮":"caㄆㄟˋ","俠":"caㄒㄧㄚˊ","璵":"caㄩˊ","側":"cdㄘㄜˋ","姪":"caㄓˊ","僥":"cdㄐㄧㄠˇ","儈":"cbㄎㄨㄞˋ","喪":"cdㄙㄤ","偵":"caㄓㄣ","儕":"caㄔㄞˊ","兗":"caㄧㄢˇ","僑":"cdㄑㄧㄠˊ","儂":"cdㄋㄨㄥˊ","淨":"caㄐㄧㄥˋ","凱":"cbㄎㄞˇ","製":"caㄓˋ","凴":"ccㄆㄧㄥˊ","剴":"caㄎㄞˇ","劊":"caㄍㄨㄟˋ","劌":"caㄍㄨㄟˋ","劑":"caㄐㄧˋ","剎":"caㄔㄚˋ","颳":"cbㄍㄨㄚ","勢":"caㄕˋ","單":"caㄉㄢ","賣":"ccㄇㄞˋ","厠":"cdㄘㄜˋ","捲":"cdㄐㄩㄢˇ","匭":"cbㄍㄨㄟˇ","週":"caㄓㄡ","巹":"cdㄐㄧㄣˇ","參":"cdㄘㄢ","嚀":"cdㄋㄧㄥˊ","噝":"cdㄙ","嚨":"cdㄌㄨㄥˊ","哢":"cdㄌㄨㄥˋ","詠":"cdㄩㄥˇ","壟":"cdㄌㄨㄥˇ","備":"ccㄅㄟˋ","囯":"cbㄍㄨㄛˊ","壚":"ceㄌㄩˊ","姍":"ccㄕㄢ","寶":"ccㄅㄠˇ","圖":"cdㄊㄨˊ","奮":"ccㄈㄣˋ","寵":"caㄔㄨㄥˇ","學":"cbㄒㄩㄝˊ","屜":"caㄊㄧˋ","屆":"cdㄐㄧㄝˋ","審":"ccㄕㄣˇ","喦":"cdㄧㄢˊ","巋":"ceㄎㄨㄟ","實":"caㄕˊ","嶽":"ceㄩㄝˋ","嶺":"ceㄌㄧㄥˇ","嶧":"ceㄧˋ","簾":"cbㄌㄧㄢˊ","崠":"cdㄉㄨㄥ","廟":"ccㄇㄧㄠˋ","幟":"caㄓˋ","倖":"caㄒㄧㄥˋ","絃":"caㄒㄧㄢˊ","龐":"cdㄆㄤˊ","彌":"ccㄇㄧˊ","廢":"ccㄈㄟˋ","錄":"cdㄌㄩˋ","弳":"cdㄐㄧㄥˋ","唸":"cdㄋㄧㄢˋ","徴":"caㄓˇ","徑":"cdㄐㄧㄥˋ","憐":"cdㄌㄧㄢˊ","戧":"caㄑㄧㄤ","慫":"cdㄙㄨㄥˇ","擡":"cdㄊㄞˊ","懌":"caㄧˋ","態":"cdㄊㄞˋ","攏":"cdㄌㄨㄥˇ","牴":"cdㄉㄧˇ","枴":"cbㄍㄨㄞˇ","擔":"cdㄉㄢ","攔":"cdㄌㄢˊ","擁":"caㄩㄥ","揀":"cdㄐㄧㄢˇ","擰":"cdㄋㄧㄥˊ","盃":"ccㄅㄟ","崐":"cbㄎㄨㄣ","曇":"cdㄊㄢˊ","擇":"cdㄗㄜˊ","撥":"ccㄅㄛ","傑":"cdㄐㄧㄝˊ","斬":"caㄓㄢˇ","搆":"cbㄍㄡˋ","鬆":"cdㄙㄨㄥ","闆":"ccㄅㄢˇ","梘":"cbㄐㄧㄢˇ","樞":"cbㄕㄨ","楓":"cbㄈㄥ","櫪":"cbㄌㄧˋ","棗":"cbㄗㄠˇ","櫃":"cbㄍㄨㄟˋ","樅":"cbㄘㄨㄥ","棖":"cbㄔㄥˊ","歿":"ccㄇㄛˋ","歐":"ceㄡ","訢":"caㄒㄧㄣ","梟":"cbㄒㄧㄠ","毆":"cbㄡ","瀧":"ccㄌㄨㄥˊ","瀘":"ccㄌㄩˊ","洩":"ccㄒㄧㄝˋ","遝":"cdㄊㄚˋ","淚":"cdㄌㄟˋ","濘":"ccㄋㄧㄥˋ","註":"caㄓㄨˋ","瀉":"ccㄒㄧㄝˋ","濼":"ccㄌㄨㄛˋ","潑":"ccㄆㄛ","霑":"ccㄓㄢ","爐":"cdㄌㄩˊ","涇":"ccㄐㄧㄥ","澤":"ccㄉㄨㄛˊ","淺":"ccㄑㄧㄢˇ","燉":"cdㄉㄨㄣˋ","熗":"cdㄑㄧㄤˋ","煒":"cdㄨㄟˇ","氂":"cdㄇㄠˊ","甌":"caㄡ","環":"cbㄏㄨㄢˊ","甕":"cdㄨㄥˋ","瑋":"cdㄨㄟˇ","獰":"cdㄋㄧㄥˊ","現":"caㄒㄧㄢˋ","畫":"cbㄏㄨㄚˋ","瘧":"cf","癘":"cdㄌㄧˋ","麅":"ccㄆㄠˊ","礦":"cbㄎㄨㄤˋ","碭":"ceㄉㄤˋ","礬":"ceㄈㄢˊ","瘍":"cdㄧㄤˊ","暢":"cdㄔㄤˋ","紲":"caㄒㄧㄝˋ","紺":"cbㄍㄢˋ","糴":"cdㄉㄧˊ","練":"cdㄌㄧㄢˋ","組":"cdㄗㄨˇ","紱":"ccㄈㄨˊ","稈":"cbㄍㄢˇ","綫":"caㄒㄧㄢˋ","細":"caㄒㄧˋ","終":"caㄓㄨㄥ","紳":"caㄕㄣ","織":"caㄓ","碼":"ceㄇㄚˇ","絆":"ccㄅㄢˋ","紼":"ccㄈㄨˊ","絀":"caㄔㄨˋ","繹":"caㄧˋ","縐":"caㄓㄡˋ","紹":"caㄕㄠˋ","肅":"cdㄙㄨˋ","儸":"cdㄌㄨㄛˊ","紿":"cdㄉㄞˋ","經":"cdㄐㄧㄥ","膚":"ccㄈㄨ","餚":"caㄧㄠˊ","骯":"ceㄤ","脹":"caㄓㄤˋ","脅":"caㄒㄧㄝˊ","艱":"cdㄐㄧㄢ","捨":"caㄕㄜˇ","膁":"cdㄑㄧㄢˇ","腫":"caㄓㄨㄥˇ","腎":"caㄕㄣˋ","檾":"cbㄑㄧㄥˇ","莖":"cbㄐㄧㄥˋ","蘢":"cbㄌㄨㄥˊ","範":"cbㄈㄢˋ","蔦":"cbㄋㄧㄠˇ","蝨":"caㄕ","塋":"ceㄧㄥˊ","煢":"cdㄑㄩㄥˊ","蘋":"cbㄆㄧㄣˊ","襯":"caㄔㄣˋ","蟣":"cdㄐㄧˇ","虜":"cdㄌㄩˇ","槼":"cbㄍㄨㄟ","誆":"cbㄎㄨㄤ","錶":"caㄅㄧㄠˇ","覓":"ccㄇㄧˋ","眎":"caㄕˋ","試":"caㄕˋ","誄":"cdㄌㄟˇ","詩":"caㄕ","詿":"cbㄍㄨㄚˋ","詼":"cbㄏㄨㄟ","誠":"caㄔㄥˊ","詰":"cdㄐㄧㄝˊ","話":"cbㄏㄨㄚˋ","詵":"caㄕㄣ","誕":"cdㄉㄢˋ","詮":"cdㄑㄩㄢˊ","誅":"caㄓㄨ","詳":"caㄒㄧㄤˊ","詣":"caㄧˋ","詫":"caㄔㄚˋ","詢":"caㄒㄩㄣˊ","詬":"cbㄍㄡˋ","諢":"cbㄏㄨㄣˋ","該":"cbㄍㄞ","諍":"caㄓㄥˋ","敗":"ccㄅㄞˋ","賢":"caㄒㄧㄢˊ","責":"caㄗㄜˊ","賬":"caㄓㄤˋ","販":"ccㄈㄢˋ","貪":"cdㄊㄢ","貨":"cbㄏㄨㄛˋ","質":"caㄓˋ","詡":"caㄒㄩˇ","購":"cbㄍㄡˋ","貧":"ccㄆㄧㄣˊ","貯":"caㄓㄨˋ","貶":"cfㄅㄧㄢˇ","貫":"cbㄍㄨㄢˋ","軛":"cbㄜˋ","輪":"cdㄌㄩㄣˊ","轉":"caㄓㄨㄢˇ","迆":"cdㄧˇ","軟":"caㄖㄨㄢˇ","邇":"cdㄦˇ","轟":"cbㄏㄨㄥ","鄶":"cbㄎㄨㄞˋ","郤":"caㄒㄧˋ","鄭":"caㄓㄥˋ","郟":"cdㄐㄧㄚˊ","埰":"cdㄘㄞˇ","鄆":"caㄩㄣˋ","鬱":"cdㄩˋ","釷":"caㄊㄨˇ","疊":"cdㄉㄧㄝˊ","釺":"caㄑㄧㄢ","鍆":"caㄇㄣˊ","釤":"caㄕㄢ","釩":"caㄈㄢˊ","釣":"caㄉㄧㄠˋ","釵":"caㄔㄞ","釧":"caㄔㄨㄢˋ","頂":"cdㄉㄧㄥˇ","隷":"cdㄌㄧˋ","牐":"caㄓㄚˊ","陝":"caㄕㄢˇ","閙":"cdㄋㄠˋ","飴":"cdㄧˊ","頃":"cdㄑㄧㄥˇ","飽":"ccㄅㄠˇ","駛":"caㄕˇ","飼":"cdㄙˋ","飾":"caㄕˋ","駔":"cdㄗㄤˇ","餞":"cdㄐㄧㄢˋ","駕":"cdㄐㄧㄚˋ","駒":"cdㄐㄩ","駝":"cdㄊㄨㄛˊ","騶":"cdㄗㄡ","駙":"ccㄈㄨˋ","驛":"caㄧˋ","駘":"cdㄊㄞˊ","駟":"cdㄙˋ","駐":"caㄓㄨˋ","鳶":"caㄩㄢ","禕":"caㄧ","齒":"caㄔˇ","鳴":"ccㄇㄧㄥˊ","魚":"caㄩˊ","黽":"ccㄇㄧㄣˇ","擧":"cdㄐㄩˇ","儔":"caㄔㄡˊ","變":"cfㄅㄧㄢˋ","親":"cdㄑㄧㄣ","倆":"cdㄌㄧㄤˇ","儷":"cdㄌㄧˋ","儼":"cdㄧㄢˇ","臨":"cdㄌㄧㄣˊ","儉":"cdㄐㄧㄢˇ","俁":"caㄩˇ","玆":"caㄗ","剮":"caㄍㄨㄚˇ","吒":"aaㄓㄚ","養":"caㄧㄤˇ","詭":"cbㄍㄨㄟˇ","脩":"caㄒㄧㄡ","釐":"cdㄌㄧˊ","勛":"caㄒㄩㄣ","噅":"cbㄏㄨㄟ","鹹":"cdㄒㄧㄢˊ","敍":"caㄒㄩˋ","偺":"cdㄗㄢˊ","嚥":"cdㄧㄢˋ","鬨":"cbㄏㄨㄥˋ","噠":"cdㄉㄚ","響":"caㄒㄧㄤˇ","嘩":"cbㄏㄨㄚˊ","啞":"cbㄧㄚˇ","噦":"cbㄩㄝˇ","噲":"cbㄎㄨㄞˋ","嘵":"caㄒㄧㄠ","嗶":"ccㄅㄧˋ","嚌":"cdㄐㄧˋ","坰":"cdㄐㄩㄥ","喲":"ca","噥":"cdㄋㄨㄥˊ","墾":"ceㄎㄣˇ","埡":"ceㄧㄚˋ","壘":"ceㄌㄟˇ","堊":"ceㄜˋ","堖":"ceㄋㄠˇ","薑":"cdㄐㄧㄤ","塏":"ceㄎㄞˇ","獎":"cdㄐㄧㄤˇ","婭":"caㄧㄚˋ","復":"ccㄈㄨˋ","嬌":"cdㄐㄧㄠ","嬈":"caㄖㄠˊ","宮":"cbㄍㄨㄥ","婁":"cdㄌㄡˊ","憲":"caㄒㄧㄢˋ","孌":"cdㄌㄨㄢˊ","孿":"cdㄌㄨㄢˊ","嘗":"caㄔㄤˊ","嶠":"ceㄐㄧㄠˋ","巒":"ceㄌㄨㄢˊ","帶":"cdㄉㄞˋ","將":"cdㄐㄧㄤ","峽":"ceㄒㄧㄚˊ","幀":"caㄓㄣ","幫":"ccㄅㄤ","彎":"cdㄨㄢ","崢":"ceㄓㄥ","恆":"cbㄏㄥˊ","卹":"cdㄒㄩˋ","縂":"cdㄗㄨㄥˇ","懟":"cdㄉㄨㄟˋ","彥":"cdㄧㄢˋ","慟":"cdㄊㄨㄥˋ","愷":"cbㄎㄞˇ","懕":"cdㄧㄢ","惻":"cdㄘㄜˋ","掛":"cbㄍㄨㄚˋ","戰":"caㄓㄢˋ","惱":"cdㄋㄠˇ","撻":"cdㄊㄚˋ","撾":"caㄓㄨㄚ","惲":"caㄩㄣˋ","挾":"cdㄒㄧㄝˊ","掙":"caㄓㄥ","擋":"cdㄉㄤˇ","撟":"cdㄐㄧㄠˇ","暱":"cdㄋㄧˋ","揮":"cbㄏㄨㄟ","撓":"cdㄋㄠˊ","擠":"cdㄐㄧˇ","晝":"caㄓㄡˋ","檸":"cbㄋㄧㄥˊ","梔":"cbㄓ","標":"cbㄅㄧㄠ","棧":"cbㄓㄢˋ","檉":"cbㄔㄥ","棟":"cbㄉㄨㄥˋ","顯":"caㄒㄧㄢˇ","櫳":"cbㄌㄨㄥˊ","櫛":"cbㄓˋ","柵":"cdㄕㄢ","櫟":"cbㄌㄧˋ","樹":"cbㄕㄨˋ","櫨":"cfㄌㄩˊ","殤":"caㄕㄤ","殘":"cdㄘㄢˊ","氫":"cdㄑㄧㄥ","灑":"ccㄙㄚˇ","澩":"ccㄒㄩㄝˊ","氈":"caㄓㄢ","欄":"cbㄌㄢˊ","窪":"cdㄨㄚ","浹":"ccㄐㄧㄚ","澆":"ccㄐㄧㄠ","潔":"cdㄐㄧㄝˊ","瀏":"ccㄌㄧㄡˊ","濁":"ccㄓㄨㄛˊ","濟":"ccㄐㄧˋ","測":"ccㄘㄜˋ","澮":"ccㄎㄨㄞˋ","湞":"ccㄓㄣ","渾":"ccㄏㄨㄣˊ","煉":"cdㄌㄧㄢˋ","滸":"ccㄏㄨˇ","濃":"ccㄋㄨㄥˊ","點":"cdㄉㄧㄢˇ","熾":"cdㄔˋ","爛":"cdㄌㄢˋ","墊":"ceㄉㄧㄢˋ","潯":"ccㄒㄩㄣˊ","牽":"cdㄑㄧㄢ","獨":"cdㄉㄨˊ","狹":"caㄒㄧㄚˊ","烴":"cdㄊㄧㄥ","爍":"cdㄕㄨㄛˋ","猙":"caㄓㄥ","獄":"caㄩˋ","獅":"caㄕ","玨":"cdㄐㄩㄝˊ","獪":"cbㄎㄨㄞˋ","瘡":"caㄔㄨㄤ","瓏":"cdㄌㄨㄥˊ","癧":"cdㄌㄧˋ","瑉":"ccㄇㄧㄣˊ","瞘":"cbㄎㄡ","瘋":"ccㄈㄥ","猻":"cdㄙㄨㄣ","琺":"ccㄈㄚˋ","硨":"ceㄔㄜ","硯":"ceㄧㄢˋ","篤":"cbㄉㄨˇ","竪":"caㄕㄨˋ","種":"cbㄓㄨㄥˇ","禰":"cdㄇㄧˊ","竊":"cdㄑㄧㄝˋ","類":"cdㄌㄟˋ","綁":"ccㄅㄤˇ","毧":"caㄖㄨㄥˊ","鞦":"cdㄑㄧㄡ","碸":"ceㄈㄥ","秈":"cbㄒㄧㄢ","繞":"caㄖㄠˋ","結":"cdㄐㄧㄝˊ","絝":"cbㄎㄨˋ","絎":"cbㄏㄤˊ","絢":"caㄒㄩㄢˋ","繪":"cbㄏㄨㄟˋ","絳":"cdㄐㄧㄤˋ","給":"cdㄍㄟˇ","絡":"cdㄌㄨㄛˋ","統":"cdㄊㄨㄥˇ","絕":"cdㄐㄩㄝˊ","罰":"ccㄈㄚˊ","絞":"cdㄐㄧㄠˇ","勝":"caㄕㄥˋ","膽":"cdㄉㄢˇ","腖":"cdㄉㄨㄥˋ","揹":"ccㄅㄟ","朧":"cdㄌㄨㄥˊ","脛":"cbㄐㄧㄥˋ","脈":"ccㄇㄞˋ","艤":"caㄧˇ","衚":"cbㄏㄨˊ","薦":"cdㄐㄧㄢˋ","臚":"cdㄌㄩˊ","蕘":"cbㄖㄠˊ","繭":"cdㄐㄧㄢˇ","薈":"cbㄏㄨㄟˋ","蓽":"cbㄅㄧˋ","莢":"cbㄐㄧㄚˊ","荊":"cdㄐㄧㄥ","薺":"cbㄐㄧˋ","蕎":"cbㄑㄧㄠˊ","葷":"cbㄏㄨㄣ","熒":"cdㄧㄥˊ","榮":"cbㄖㄨㄥˊ","滎":"ccㄒㄧㄥˊ","犖":"cdㄌㄨㄛˋ","盪":"cdㄉㄤˋ","蕁":"cbㄑㄧㄢˊ","蓀":"cbㄙㄨㄣ","葒":"cbㄏㄨㄥˊ","藎":"cbㄐㄧㄣˋ","蕒":"cb","廕":"caㄧㄣˋ","葯":"cbㄧㄠˋ","蝦":"cbㄒㄧㄚ","雖":"cdㄙㄨㄟ","葤":"cbㄓㄡˋ","蠆":"caㄔㄞˋ","螘":"cdㄧˇ","蝕":"cdㄕˊ","覘":"caㄔㄢ","襖":"ceㄠˇ","誡":"cdㄐㄧㄝˋ","螞":"ccㄇㄚˇ","覺":"cdㄐㄩㄝˊ","語":"caㄩˇ","誚":"cdㄑㄧㄠˋ","誤":"caㄨˋ","誘":"cdㄧㄡˋ","誣":"caㄨ","誑":"cbㄎㄨㄤˊ","誨":"cbㄏㄨㄟˋ","誥":"cbㄍㄠˋ","覽":"cdㄌㄢˇ","說":"caㄕㄨㄛ","誒":"ca","貳":"cdㄦˋ","誦":"cdㄙㄨㄥˋ","賤":"cdㄐㄧㄢˋ","貴":"cbㄍㄨㄟˋ","貰":"caㄕˋ","貼":"cdㄊㄧㄝ","賁":"ccㄅㄧˋ","貸":"cdㄉㄞˋ","貺":"cbㄎㄨㄤˋ","貿":"ccㄇㄠˋ","趙":"cdㄓㄠˋ","貽":"caㄧˊ","費":"ccㄈㄟˋ","軻":"cbㄎㄜ","賀":"cbㄏㄜˋ","轤":"cdu","軲":"cbㄍㄨ","軤":"cbㄏㄨ","軹":"aaㄓˇ","軸":"caㄓㄡˊ","軼":"cdㄧˋ","轢":"cdㄌㄧˋ","軫":"caㄓㄣˇ","軺":"cdㄧㄠˊ","輕":"cdㄑㄧㄥ","適":"cdㄕˋ","跡":"cdㄐㄧˋ","酈":"cdㄌㄧˋ","選":"caㄒㄩㄢˇ","鈣":"caㄍㄞˋ","鄖":"cdㄩㄣˊ","鈈":"caㄅㄨˋ","鐘":"caㄓㄨㄥ","遜":"caㄒㄩㄣˋ","鈑":"caㄅㄢˇ","鈦":"caㄊㄞˋ","鈐":"caㄑㄧㄢˊ","鋼":"caㄍㄤ","鈉":"caㄋㄚˋ","鈍":"caㄉㄨㄣˋ","欽":"cdㄑㄧㄣ","鋇":"caㄅㄟˋ","鈞":"caㄐㄩㄣ","籥":"cbㄩㄝˋ","鈁":"caㄈㄤ","鈥":"caㄏㄨㄛˇ","鈧":"caㄎㄤˋ","鈎":"caㄍㄡ","鈄":"caㄉㄡˇ","鈕":"caㄋㄧㄡˇ","聞":"caㄨㄣˊ","鎢":"caㄨ","鈀":"caㄅㄚˇ","閨":"cbㄍㄨㄟ","闥":"cdㄊㄚˋ","閣":"cbㄍㄜˊ","閥":"ccㄈㄚˊ","隕":"cdㄩㄣˇ","頇":"ceㄏㄢ","靣":"ccㄇㄧㄢˋ","險":"cdㄒㄧㄢˇ","隉":"cdㄋㄧㄝˋ","閩":"ccㄇㄧㄣˇ","閡":"ceㄏㄜˊ","項":"caㄒㄧㄤˋ","順":"caㄕㄨㄣˋ","颮":"ccㄅㄧㄠ","饒":"caㄖㄠˊ","餌":"cdㄦˇ","須":"caㄒㄩ","餃":"cdㄐㄧㄠˇ","颯":"cdㄙㄚˋ","餅":"ccㄅㄧㄥˇ","餉":"caㄒㄧㄤˇ","驊":"cbㄏㄨㄚˊ","驍":"caㄒㄧㄠ","驕":"cdㄐㄧㄠ","罵":"ccㄇㄚˋ","駢":"ccㄆㄧㄢˊ","駱":"cdㄌㄨㄛˋ","鷗":"cdㄡ","駭":"cbㄏㄞˋ","鴉":"caㄧㄚ","滻":"ccㄔㄢˇ","鴆":"caㄓㄣˋ","濜":"cdㄐㄧㄣˋ","鴇":"ccㄅㄠˇ","餄":"cdㄏㄜˊ","餎":"cdㄌㄜˋ","嫋":"cdㄋㄧㄠˇ","頫":"ccㄈㄨˇ","闓":"cbㄎㄞˇ","債":"caㄓㄞˋ","淩":"ccㄌㄧㄥˊ","悽":"cdㄑㄧ","涼":"ccㄌㄧㄤˊ","塚":"ceㄓㄨㄥˇ","準":"ccㄓㄨㄣˇ","劇":"caㄐㄩˋ","傾":"cdㄑㄧㄥ","脣":"caㄔㄨㄣˊ","剝":"caㄅㄠ","嗩":"cdㄙㄨㄛˇ","黨":"caㄉㄤˇ","嘜":"ccㄇㄚˋ","嘮":"caㄌㄠˋ","圓":"cdㄩㄢˊ","壺":"cbㄏㄨˊ","喚":"cbㄏㄨㄢˋ","塤":"ceㄒㄩㄣ","塒":"ceㄕˊ","娛":"caㄩˊ","堝":"ceㄍㄨㄛ","媧":"caㄨㄚ","孃":"cdㄋㄧㄤˊ","唕":"cdㄗㄠˋ","嫺":"caㄒㄧㄢˊ","賓":"ccㄅㄧㄣ","傢":"cdㄐㄧㄚ","崍":"ceㄌㄞˊ","戀":"cdㄌㄧㄢˋ","嶗":"ceㄌㄠˊ","蓆":"cbㄒㄧˊ","悅":"caㄩㄝˋ","幬":"caㄔㄡˊ","噁":"ceㄜˊ","寬":"cbㄎㄨㄢ","徠":"cdㄌㄞˊ","慳":"cdㄑㄧㄢ","懇":"cbㄎㄣˇ","攣":"cdㄌㄨㄢˊ","憫":"ccㄇㄧㄣˇ","摯":"caㄓˋ","撈":"cdㄌㄠ","輓":"caㄨㄢˇ","損":"cdㄙㄨㄣˇ","搗":"cdㄉㄠˇ","梱":"cbㄎㄨㄣˇ","敵":"cdㄉㄧˊ","晉":"cdㄐㄧㄣˋ","傚":"caㄒㄧㄠˋ","曉":"caㄒㄧㄠˇ","換":"cbㄏㄨㄢˋ","撿":"cdㄐㄧㄢˇ","暈":"caㄩㄣˋ","曄":"cdㄧㄝˋ","棲":"cbㄑㄧ","暉":"cbㄏㄨㄟ","曬":"caㄕㄞˋ","覈":"cbㄏㄜˊ","樣":"cbㄧㄤˋ","欒":"cbㄌㄨㄢˊ","慄":"cdㄌㄧˋ","齋":"caㄓㄞ","棬":"cdㄑㄩㄢ","椏":"cbㄧㄚ","檔":"cbㄉㄤˋ","楨":"cbㄓㄣ","橋":"cbㄑㄧㄠˊ","檜":"cbㄍㄨㄟˋ","榿":"cbㄑㄧ","橈":"cbㄖㄠˊ","慇":"cdㄧㄣ","樺":"cbㄏㄨㄚˋ","斃":"ccㄅㄧˋ","槳":"cbㄐㄧㄤˇ","樁":"cbㄓㄨㄤ","氬":"caㄧㄚˋ","澇":"ccㄌㄠˋ","凃":"cdㄊㄨˊ","湧":"ccㄩㄥˇ","漿":"ccㄐㄧㄤ","渦":"ccㄨㄛ","濬":"ccㄐㄩㄣˋ","潿":"ccㄨㄟˊ","濤":"ccㄊㄠ","漣":"ccㄌㄧㄢˊ","滌":"ccㄉㄧˊ","渙":"cbㄏㄨㄢˋ","澗":"ccㄐㄧㄢˋ","漲":"ccㄓㄤˇ","燭":"cdㄓㄨˊ","煙":"cdㄧㄢ","潤":"ccㄖㄨㄣˋ","煩":"cdㄈㄢˊ","淶":"ccㄌㄞˊ","燒":"cdㄕㄠ","澀":"ccㄙㄜˋ","熱":"caㄖㄜˋ","獫":"caㄒㄧㄢˇ","燴":"cdㄏㄨㄟˋ","犧":"cdㄒㄧ","燁":"cdㄧㄝˋ","琿":"cbㄏㄨㄣˊ","畱":"cdㄌㄧㄡˊ","燼":"cdㄐㄧㄣˋ","燙":"cdㄊㄤˋ","貍":"ccㄌㄧˊ","癥":"caㄓㄥ","癰":"caㄩㄥ","愛":"ceㄞˋ","皰":"ccㄆㄠˋ","盞":"caㄓㄢˇ","痙":"cdㄐㄧㄥˋ","礱":"ceㄌㄨㄥˊ","皺":"caㄓㄡˋ","礪":"ceㄌㄧˋ","監":"cdㄐㄧㄢˋ","離":"caㄌㄧˊ","臯":"cbㄍㄠ","祕":"ccㄇㄧˋ","礫":"ceㄌㄧˋ","積":"cdㄐㄧ","鹽":"cdㄧㄢˊ","禎":"caㄓㄣ","礎":"ceㄔㄨˇ","竅":"cdㄑㄧㄠˋ","稱":"cbㄔㄥ","綆":"ccㄍㄥˇ","競":"cdㄐㄧㄥˋ","絹":"cdㄐㄩㄢˋ","綏":"caㄙㄨㄟˊ","筧":"cbㄐㄧㄢˇ","繼":"cdㄐㄧˋ","筆":"cbㄅㄧˇ","緊":"cdㄐㄧㄣˇ","綃":"caㄒㄧㄠ","筍":"cbㄙㄨㄣˇ","罷":"ccㄅㄚˋ","聳":"cdㄙㄨㄥˇ","恥":"caㄔˇ","綉":"cdㄒㄧㄡˋ","聶":"cdㄋㄧㄝˋ","臍":"cdㄑㄧˊ","膠":"cdㄐㄧㄠ","膾":"cbㄎㄨㄞˋ","腦":"cdㄋㄠˇ","膿":"cdㄋㄨㄥˊ","臟":"cdㄗㄤˋ","絛":"cdㄊㄠ","綈":"cdㄊㄧˊ","艙":"cdㄘㄤ","艷":"caㄧㄢˋ","蓧":"cdㄉㄧㄠˋ","蓮":"cbㄌㄧㄢˊ","涖":"cdㄌㄧˋ","萵":"cbㄨㄛ","蒔":"caㄕˋ","艦":"cdㄐㄧㄢˋ","獲":"cbㄏㄨㄛˋ","萊":"cbㄌㄞˊ","緻":"caㄓˋ","蕕":"cbㄧㄡˊ","薟":"cbㄒㄧㄢ","瑩":"caㄧㄥˊ","蒓":"caㄔㄨㄣˊ","蠔":"cbㄏㄠˊ","蠶":"cdㄘㄢˊ","覬":"cdㄐㄧˋ","襪":"cdㄨㄚˋ","諸":"caㄓㄨ","鶯":"cdㄧㄥ","諾":"cdㄋㄨㄛˋ","袞":"cbㄍㄨㄣˇ","諏":"cdㄗㄡ","蜆":"caㄒㄧㄢˇ","讀":"cdㄉㄨˊ","請":"cdㄑㄧㄥˇ","誹":"ccㄈㄟˇ","課":"cbㄎㄜˋ","諛":"caㄩˊ","諑":"caㄓㄨㄛˊ","調":"cdㄉㄧㄠˋ","諉":"cdㄨㄟˇ","諗":"cdㄕㄣˇ","諒":"cdㄌㄧㄤˋ","諄":"caㄓㄨㄣ","誰":"caㄕㄨㄟˊ","諂":"caㄔㄢˇ","贄":"caㄓˋ","誼":"cdㄧˋ","誶":"cdㄙㄨㄟˋ","談":"cdㄊㄢˊ","賃":"cdㄌㄧㄣˋ","賊":"cdㄗㄟˊ","貲":"cdㄗ","資":"cdㄗ","賂":"cdㄌㄩˋ","賅":"cbㄍㄞ","賄":"cbㄏㄨㄟˋ","賍":"cdㄗㄤ","趕":"cbㄍㄢˇ","輊":"caㄓˋ","躉":"cdㄉㄨㄣˇ","軾":"caㄕˋ","賈":"cdㄐㄧㄚˇ","輇":"caㄑㄩㄢˊ","賮":"cdㄐㄧㄣˋ","載":"cdㄗㄞˋ","輅":"cbㄌㄩˋ","邐":"cdㄌㄧˇ","鈺":"caㄩˋ","鄲":"cdㄉㄢ","鉗":"caㄑㄧㄢˊ","鈷":"caㄍㄨˇ","鉦":"caㄓㄥ","遞":"cdㄉㄧˋ","轎":"cdㄐㄧㄠˋ","鈸":"caㄅㄛˊ","缽":"ccㄅㄛ","較":"cdㄐㄧㄠˋ","鈳":"caㄎㄜ","鉆":"caㄗㄨㄢ","鈽":"caㄅㄨ","鉬":"caㄇㄨˋ","鉭":"caㄊㄢˇ","鉀":"caㄐㄧㄚˇ","鉄":"caㄊㄧㄝˇ","鉕":"caㄆㄛˇ","鈿":"caㄉㄧㄢˋ","鉞":"caㄩㄝˋ","鉑":"caㄅㄛˊ","鈾":"caㄧㄡˊ","鈰":"caㄕˋ","鑠":"caㄕㄨㄛˋ","鈴":"caㄌㄧㄥˊ","鉈":"caㄊㄚ","鉉":"caㄒㄩㄢˋ","鉍":"caㄅㄧˋ","鉚":"caㄇㄠˇ","鈹":"caㄆㄧˊ","鐸":"caㄉㄨㄛˊ","閫":"cbㄎㄨㄣˇ","閬":"cdㄌㄤˋ","閱":"caㄩㄝˋ","鈮":"caㄋㄧˊ","頑":"cbㄨㄢˊ","鉛":"caㄑㄧㄢ","雋":"cdㄐㄩㄣˋ","鬮":"cdㄐㄧㄡ","頊":"caㄒㄩ","頓":"cdㄉㄨㄣˋ","顧":"cbㄍㄨˋ","難":"cdㄋㄢˊ","頒":"ccㄅㄢ","預":"caㄩˋ","餑":"ccㄅㄛ","頌":"caㄙㄨㄥˋ","頎":"cbㄑㄧˊ","頏":"cbㄏㄤˊ","餓":"cbㄜˋ","餒":"cdㄋㄟˇ","驪":"caㄌㄧˊ","騐":"caㄧㄢˋ","鴣":"cbㄍㄨ","駿":"cdㄐㄩㄣˋ","騁":"caㄔㄥˇ","鶇":"cdㄉㄨㄥ","鴦":"cdㄧㄤ","鸕":"cdㄌㄩˊ","鴨":"caㄧㄚ","鴝":"cbㄑㄩˊ","鴟":"caㄔ","鷥":"cdㄙ","齔":"caㄔㄣˋ","鴛":"caㄩㄢ","鴕":"cdㄊㄨㄛˊ","傯":"cdㄗㄨㄥˇ","偸":"cdㄊㄡ","僂":"cdˇ","鴞":"caㄒㄧㄠ","獸":"caㄕㄡˋ","減":"cdㄐㄧㄢˇ","償":"caㄔㄤˊ","僨":"ccㄈㄣˋ","龕":"cbㄎㄢ","湊":"cdㄘㄡˋ","匱":"cbㄎㄨㄟˋ","勗":"caㄒㄩˋ","嘖":"cdㄗㄜˊ","廂":"caㄒㄧㄤ","厴":"caㄧㄢˇ","啗":"cdㄉㄢˋ","嚙":"cdㄋㄧㄝˋ","廄":"cdㄐㄧㄡˋ","垵":"ceㄢˇ","嘯":"caㄒㄧㄠˋ","塹":"ceㄑㄧㄢˋ","囀":"caㄓㄨㄢˋ","墮":"cdㄉㄨㄛˋ","嗇":"cdㄙㄜˋ","嬰":"caㄧㄥ","夠":"cbㄍㄡˋ","幗":"cbㄍㄨㄛˊ","嬋":"caㄔㄢˊ","嶄":"caㄓㄢˇ","菴":"cbㄢ","綵":"caㄘㄞˇ","嬸":"caㄕㄣˇ","懸":"caㄒㄩㄢˊ","驚":"cdㄐㄧㄥ","慘":"cdㄘㄢˇ","懼":"cdㄐㄩˋ","幘":"cdㄗㄜˊ","慙":"cdㄘㄢˊ","慣":"cbㄍㄨㄢˋ","摑":"cbㄍㄨㄞ","據":"cdㄐㄩˋ","愨":"cdㄑㄩㄝˋ","擲":"caㄓˋ","撚":"cdㄋㄧㄢˇ","愜":"cdㄑㄧㄝˋ","慼":"cdㄑㄧ","擄":"cdㄌㄩˇ","撣":"caㄉㄢˇ","斂":"cdㄌㄧㄢˇ","憚":"caㄉㄢˋ","樑":"cbㄌㄧㄤˊ","鏇":"caㄒㄩㄢˋ","摜":"cbㄍㄨㄢˋ","摻":"caㄔㄢ","櫺":"cdㄌㄧㄥˊ","斷":"cdㄉㄨㄢˋ","殞":"caㄩㄣˇ","夢":"ccㄇㄥˋ","淵":"ccㄩㄢ","檢":"cdㄐㄧㄢˇ","慾":"caㄩˋ","漬":"ccㄗˋ","漸":"ccㄐㄧㄢˋ","殮":"cdㄌㄧㄢˋ","澱":"cdㄉㄧㄢˋ","淥":"cdㄌㄩˋ","凟":"cdㄉㄨˊ","瀋":"caㄕㄣˇ","獵":"cdㄌㄧㄝˋ","煥":"cbㄏㄨㄢˋ","燾":"cdㄉㄠˋ","漁":"ccㄩˊ","澠":"ccㄇㄧㄢˇ","玀":"cbㄌㄨㄛˊ","釬":"caㄏㄢˋ","獼":"ccㄇㄧˊ","燜":"cdㄇㄣˋ","滲":"ccㄕㄣˋ","畧":"cdˋ","癢":"caㄧㄤˇ","璉":"cdㄌㄧㄢˇ","豬":"caㄓㄨ","毬":"cdㄑㄧㄡˊ","皚":"ceㄞˊ","瘂":"caㄧㄚˇ","貓":"ccㄇㄠ","瑣":"cdㄙㄨㄛˇ","瑯":"cdㄌㄤˊ","盜":"cdㄉㄠˋ","眥":"cdㄗˋ","皸":"cdㄐㄩㄣ","蓋":"cbㄍㄞˋ","著":"abㄓㄨˋ","槃":"ccㄆㄢˊ","覜":"cdㄊㄧㄠˋ","矯":"cdㄐㄧㄠˇ","睜":"caㄓㄥ","碩":"ceㄕㄨㄛˋ","禱":"cdㄉㄠˇ","墝":"ceㄑㄧㄠ","矽":"aeㄒㄧ","稭":"cbㄐㄧㄝ","穢":"cbㄏㄨㄟˋ","硤":"ceㄒㄧㄚˊ","禍":"cbㄏㄨㄛˋ","窯":"cdㄧㄠˊ","糶":"cdㄊㄧㄠˋ","籠":"cbㄌㄨㄥˊ","牋":"cdㄐㄧㄢ","糲":"cdㄌㄧˋ","纍":"cdㄌㄟˊ","籩":"cfㄅㄧㄢ","勣":"cdㄐㄧˋ","緒":"caㄒㄩˋ","緋":"ccㄈㄟ","續":"caㄒㄩˋ","緔":"caㄕㄤˋ","綾":"cdㄌㄧㄥˊ","綽":"caㄔㄨㄛˋ","綺":"cdㄑㄧˇ","綬":"caㄕㄡˋ","繩":"ccㄕㄥˊ","綹":"cdㄌㄧㄡˇ","維":"cdㄨㄟˊ","綿":"ccㄇㄧㄢˊ","緄":"cbㄍㄨㄣˇ","綢":"caㄔㄡˊ","綣":"cdㄑㄩㄢˇ","綳":"ccㄅㄥ","綰":"cdㄨㄢˇ","綜":"cdㄗㄨㄥ","綻":"caㄓㄢˋ","綠":"cfˋ","綞":"cdㄉㄨㄛˇ","綴":"caㄓㄨㄟˋ","羥":"cdㄑㄧㄤˇ","職":"cdㄓˊ","緇":"cdㄗ","聹":"cdㄋㄧㄥˊ","腳":"cdㄐㄧㄠˇ","蔆":"cdㄌㄧㄥˊ","脫":"cdㄊㄨㄛ","腡":"cdㄌㄨㄛˊ","聾":"cdㄌㄨㄥˊ","縈":"caㄧㄥˊ","臉":"cdㄌㄧㄢˇ","螢":"caㄧㄥˊ","營":"cdㄧㄥˊ","蠱":"cbㄍㄨˇ","蘿":"cbㄌㄨㄛˊ","蠣":"cdㄌㄧˋ","虛":"caㄒㄩ","薩":"cbㄙㄚˋ","襲":"caㄒㄧˊ","襠":"cdㄉㄤ","蟶":"caㄔㄥ","啣":"caㄒㄧㄢˊ","釁":"caㄒㄧㄣˋ","覡":"caㄒㄧ","謀":"ccㄇㄡˊ","訦":"caㄔㄣˊ","諜":"cdㄉㄧㄝˊ","諧":"caㄒㄧㄝˊ","謔":"caㄒㄩㄝˋ","謊":"cbㄏㄨㄤˇ","謁":"caㄧㄝˋ","謂":"caㄨㄟˋ","諫":"cdㄐㄧㄢˋ","諼":"caㄒㄩㄢ","諤":"cbㄜˋ","諳":"ceㄢ","諦":"cdㄉㄧˋ","諺":"caㄧㄢˋ","讒":"caㄔㄢˊ","謎":"ccㄇㄧˊ","諮":"cdㄗ","賕":"cdㄑㄧㄡˊ","賑":"caㄓㄣˋ","諞":"ccㄆㄧㄢˇ","賚":"cdㄌㄞˋ","諭":"cdㄩˋ","軀":"cdㄑㄩ","輔":"ccㄈㄨˇ","賒":"caㄕㄜ","躍":"cdㄩㄝˋ","輒":"cfㄓㄜˊ","醖":"caㄩㄣˋ","銬":"caㄎㄠˋ","輛":"cdㄌㄧㄤˋ","蹌":"cdㄑㄧㄤ","銪":"caㄧㄡˇ","邏":"cdㄌㄨㄛˊ","鋮":"caㄔㄥˊ","鉺":"caㄦˇ","鐃":"cdㄋㄠˊ","銅":"caㄊㄨㄥˊ","銱":"caㄉㄧㄠˋ","鋣":"caㄧㄝˊ","鋏":"caㄐㄧㄚˊ","銠":"caㄌㄠˇ","鐺":"caㄉㄤ","銦":"caㄧㄣ","鎧":"caㄎㄞˇ","鋌":"caㄊㄧㄥˇ","銓":"caㄑㄩㄢˊ","銖":"caㄓㄨ","銑":"caㄒㄧㄢˇ","銩":"caㄉㄧㄡ","鍘":"caㄓㄚˊ","鏵":"caㄏㄨㄚˊ","鉿":"caㄏㄚ","鉻":"caㄍㄜˋ","鎩":"caㄕㄚ","錚":"caㄓㄥ","銚":"caㄉㄧㄠˋ","銘":"caㄇㄧㄥˊ","鉸":"caㄐㄧㄠˇ","銫":"caㄙㄜˋ","銥":"caㄧ","剷":"caㄔㄢˇ","銃":"caㄔㄨㄥˋ","銣":"caㄖㄨˊ","銀":"caㄧㄣˊ","艫":"cdㄌㄩˊ","銨":"caㄢˇ","閹":"cdㄧㄢ","鐋":"caㄊㄤˋ","閾":"caㄩˋ","閿":"cdㄨㄣˊ","閶":"caㄔㄤ","閻":"caㄧㄢˊ","鬩":"cbㄒㄧˋ","閽":"cbㄏㄨㄣ","閼":"ccㄜˋ","隨":"cdㄙㄨㄟˊ","顱":"cdㄌㄩˊ","闡":"caㄔㄢˇ","頸":"cdㄐㄧㄥˇ","領":"cdㄌㄧㄥˇ","隱":"caㄧㄣˇ","餡":"cbㄒㄧㄢˋ","舘":"cbㄍㄨㄢˇ","餛":"cbㄏㄨㄣˊ","騎":"cdㄑㄧˊ","騏":"cdㄑㄧˊ","騍":"cbㄎㄜˋ","騅":"caㄓㄨㄟ","鴰":"cbㄍㄨㄚ","鷙":"caㄓˋ","鴯":"ccㄦˊ","鵂":"caㄒㄧㄡ","驂":"cdㄘㄢ","鴻":"cbㄏㄨㄥˊ","蔴":"ccㄇㄚˊ","鸞":"cdㄌㄨㄢˊ","鴿":"cbㄍㄜ","龔":"cbㄍㄨㄥ","麩":"ccㄈㄨ","黃":"cbㄏㄨㄤˊ","礄":"cdㄑㄧㄠˊ","諝":"caㄒㄩ","璡":"cdㄐㄧㄣ","囉":"cdㄌㄨㄛ","褻":"caㄒㄧㄝˋ","餜":"cbㄍㄨㄛˇ","儐":"ccㄅㄧㄣ","僳":"caㄙㄨˋ","儲":"caㄔㄨˇ","儻":"caㄊㄤˇ","廈":"caㄕㄚˋ","廚":"caㄔㄨˊ","賸":"caㄕㄥˋ","噴":"ccㄆㄣ","鑿":"caㄗㄠˊ","嘍":"cdㄌㄡˊ","嚳":"cbㄎㄨˋ","隄":"cdㄉㄧ","奧":"ceㄠˋ","餵":"caㄨㄟˋ","儺":"cdㄋㄨㄛˊ","媼":"ceㄠˇ","屬":"caㄕㄨˇ","嶁":"ceㄌㄡˇ","嶸":"ceㄖㄨㄥˊ","禦":"caㄩˋ","巰":"cdㄑㄧㄡˊ","冪":"ccㄇㄧˋ","懲":"caㄔㄥˊ","崳":"ceㄩˊ","強":"cdㄑㄧㄤˊ","慍":"cdㄩㄣˋ","憤":"ccㄈㄣˋ","憒":"cbㄎㄨㄟˋ","摣":"caㄓㄚ","攙":"caㄔㄢ","憊":"ccㄅㄟˋ","擱":"cbㄍㄜ","攬":"cdㄌㄢˇ","搇":"cdㄑㄧㄣˋ","蒐":"cbㄙㄡ","暫":"cdㄗㄢˋ","摟":"cdㄌㄡˇ","稜":"cdㄌㄥˊ","箠":"cbㄔㄨㄟˊ","攪":"cdㄐㄧㄠˇ","匵":"cdㄉㄨˊ","槨":"cbㄍㄨㄛˇ","槧":"cbㄑㄧㄢˋ","櫂":"cbㄓㄠˋ","欏":"cbㄌㄨㄛˊ","灣":"ccㄨㄢ","橢":"cdㄊㄨㄛˇ","溫":"ccㄨㄣ","溼":"ccㄕ","遊":"caㄧㄡˊ","毿":"cdㄙㄢ","殫":"cdㄉㄢ","潰":"ccㄎㄨㄟˋ","濺":"ccㄐㄧㄢˋ","牘":"cdㄉㄨˊ","燄":"cdㄧㄢˋ","疇":"caㄔㄡˊ","漵":"ccㄒㄩˋ","佘":"baㄕㄜˊ","蝟":"cdㄨㄟˋ","滯":"ccㄓˋ","癆":"cdㄌㄠˊ","頗":"ccㄆㄛ","瓊":"cdㄑㄩㄥˊ","犢":"cdㄉㄨˊ","瘓":"cbㄏㄨㄢˋ","癇":"caㄒㄧㄢˊ","睞":"cdㄌㄞˋ","鹼":"cdㄐㄧㄢˇ","祿":"cdㄌㄩˋ","確":"ceㄑㄩㄝˋ","竄":"cdㄘㄨㄢˋ","禪":"caㄕㄢˋ","瞼":"cdㄐㄧㄢˇ","窩":"caㄨㄛ","稅":"cdㄕㄨㄟˋ","築":"cbㄓㄨˋ","篳":"cbㄅㄧˋ","粵":"caㄩㄝˋ","箏":"cbㄓㄥ","緘":"cdㄐㄧㄢ","篩":"cbㄕㄞ","縶":"caㄓˊ","緙":"cbㄎㄜˋ","糞":"ccㄈㄣˋ","緗":"caㄒㄧㄤ","緹":"cdㄊㄧˊ","纜":"cdㄌㄢˇ","緬":"ccㄇㄧㄢˇ","緝":"cdㄐㄧ","繢":"cbㄏㄨㄟˋ","緲":"ccㄇㄧㄠˇ","緱":"ccㄍㄡ","緶":"cfㄅㄧㄢˋ","緩":"cbㄏㄨㄢˇ","緦":"cdㄙ","縋":"caㄓㄨㄟˋ","締":"cdㄉㄧˋ","緍":"ccㄇㄧㄣˊ","編":"cfㄅㄧㄢ","緞":"cdㄉㄨㄢˋ","聯":"cdㄌㄧㄢˊ","翹":"cdㄑㄧㄠˊ","緣":"cdㄩㄢˊ","潟":"ccㄒㄧˋ","羨":"caㄒㄧㄢˋ","蔥":"cbㄘㄨㄥ","蕆":"cbㄔㄢˇ","醃":"ceㄧㄢ","蕢":"cbㄎㄨㄟˋ","蔞":"cbㄌㄡˊ","臠":"cdㄌㄨㄢˊ","蛺":"cdㄐㄧㄚˊ","臘":"cdㄌㄚˋ","蟄":"caㄓㄜˊ","螄":"cdㄙ","蠻":"ccㄇㄢˊ","蠐":"cdㄑㄧˊ","蟯":"cdㄋㄠˊ","褳":"cdㄌㄧㄢˊ","襇":"cdㄐㄧㄢˇ","褲":"cbㄎㄨˋ","襝":"caㄌㄧㄢˇ","覿":"cdㄉㄧˊ","裝":"caㄓㄨㄤ","謨":"ccㄇㄛˊ","觴":"caㄕㄤ","謝":"caㄒㄧㄝˋ","謖":"cdㄙㄨˋ","謠":"caㄧㄠˊ","讜":"cdㄉㄤˇ","謙":"cdㄑㄧㄢ","諡":"caㄕˋ","賫":"cdㄌㄞˋ","贖":"caㄕㄨˊ","賞":"caㄕㄤˇ","謐":"ccㄇㄧˋ","謗":"ccㄅㄤˋ","賡":"cbㄍㄥ","賜":"cdㄘˋ","賠":"ccㄆㄟˊ","躒":"cdㄌㄧˋ","蹠":"caㄓˊ","輦":"cdㄋㄧㄢˇ","趨":"cdㄑㄩ","煇":"cbㄏㄨㄟ","賧":"cdㄉㄢˇ","踐":"cdㄐㄧㄢˋ","輞":"caㄨㄤˇ","輥":"cbㄍㄨㄣˇ","輩":"ccㄅㄟˋ","輟":"caㄔㄨㄛˋ","遺":"caㄧˊ","鐒":"caㄌㄠˊ","鑄":"caㄓㄨˋ","輜":"cdㄗ","釋":"caㄕˋ","錸":"caㄌㄞˊ","舖":"ccㄆㄨˋ","鋱":"caㄊㄜˋ","鏗":"caㄎㄥ","鎖":"caㄙㄨㄛˇ","耡":"caㄔㄨˊ","鋥":"caㄗㄥˋ","銷":"caㄒㄧㄠ","鋰":"caㄌㄧˇ","鍋":"caㄍㄨㄛ","鋯":"caㄍㄠˋ","銹":"caㄒㄧㄡˋ","鏈":"caㄌㄧㄢˋ","鋨":"caㄜˊ","鋶":"caㄌㄧㄡˇ","鉲":"cbㄎㄚˇ","鋒":"caㄈㄥ","鐧":"cdㄐㄧㄢˇ","鋅":"caㄒㄧㄣ","銻":"caㄊㄧ","銳":"cdㄖㄨㄟˋ","錒":"caㄚ","鋟":"caㄑㄧㄣˇ","鋃":"caㄌㄤˊ","僱":"cbㄍㄨˋ","闃":"cdㄑㄩˋ","濶":"cbㄎㄨㄛˋ","鋦":"caㄐㄩ","靂":"ccㄌㄧˋ","闌":"cdㄌㄢˊ","靚":"cdㄐㄧㄥˋ","頡":"cdㄐㄧㄝˊ","頰":"cdㄐㄧㄚˊ","頦":"cbㄎㄜ","頜":"cbㄏㄜˊ","潁":"ccㄧㄥˇ","饗":"caㄒㄧㄤˇ","餷":"caㄔㄚ","闋":"cdㄑㄩㄝˋ","颶":"cdㄐㄩˋ","韓":"cbㄏㄢˊ","餿":"cdㄙㄡ","饞":"caㄔㄢˊ","騗":"ccㄆㄧㄢˋ","魷":"caㄧㄡˊ","騖":"cdㄨˋ","騭":"caㄓˋ","餽":"cbㄎㄨㄟˋ","騷":"cdㄙㄠ","魴":"ccㄈㄤˊ","魯":"cfㄌㄩˇ","鵓":"ccㄅㄛˊ","賦":"ccㄈㄨˋ","鵒":"cdㄩˋ","鵑":"cdㄐㄧㄢ","鵝":"cbㄜˊ","鸝":"cdㄌㄧˊ","鷳":"caㄒㄧㄢˊ","鵜":"cdㄊㄧˊ","鵠":"cbㄏㄨˊ","鵐":"cdㄨˊ","黿":"cdㄩㄢˊ","縉":"cdㄐㄧㄣˋ","嬡":"ceㄞˋ","噯":"ceㄞˇ","寢":"cdㄑㄧㄣˇ","勦":"caㄐㄧㄠˇ","嬪":"ccㄆㄧㄣˊ","翬":"cbㄏㄨㄟ","曡":"cdㄉㄧㄝˊ","尲":"cbㄍㄢ","囁":"cdㄋㄧㄝˋ","慴":"caㄕㄜˋ","湣":"acㄇㄧㄣˇ","瘉":"cdㄩˋ","攄":"cdㄕㄨ","搖":"caㄧㄠˊ","擺":"ccㄅㄞˇ","擕":"caㄒㄧㄝˊ","攝":"cdㄕㄜˋ","擯":"ccㄅㄧㄣˋ","攤":"cdㄊㄢ","數":"caㄕㄨˋ","樓":"cbㄌㄡˊ","櫬":"cbㄔㄣˋ","櫸":"cbㄐㄩˇ","煖":"cdㄒㄩㄢ","欖":"cbㄌㄢˇ","氳":"caㄩㄣ","霤":"ccㄌㄧㄡˋ","轂":"cbㄍㄨˇ","毀":"cbㄏㄨㄟˇ","灧":"ccㄧㄢˋ","潷":"ccㄅㄧˋ","灄":"ccㄕㄜˋ","谿":"caㄒㄧ","濫":"ccㄌㄢˋ","瀅":"ccㄧㄥˊ","滾":"ccㄍㄨㄣˇ","灤":"ccㄌㄨㄢˊ","灘":"ccㄊㄢ","灕":"ccㄌㄧˊ","煆":"cdㄒㄧㄚ","滿":"ccㄇㄢˇ","癡":"caㄔ","濱":"ccㄅㄧㄣ","炤":"cdㄓㄠˋ","獻":"cdㄒㄧㄢˋ","硶":"cdㄔㄣˇ","礙":"ceㄞˋ","磧":"ceㄑㄧˋ","癉":"cdㄉㄢˋ","窺":"cbㄎㄨㄟ","痺":"ccㄅㄧˋ","穌":"cbㄙㄨ","稟":"cbㄅㄧㄥˇ","篠":"cbㄒㄧㄠˇ","簽":"cbㄑㄧㄢ","竇":"cdㄉㄡˋ","糧":"cdㄌㄧㄤˊ","籌":"cbㄔㄡˊ","縟":"caㄖㄨˋ","縛":"ccㄈㄨˋ","簡":"cbㄐㄧㄢˇ","縝":"caㄓㄣˇ","縞":"cbㄍㄠˇ","縭":"cdㄌㄧˊ","縊":"caㄧˋ","繽":"ccㄅㄧㄣ","縫":"ccㄈㄥˊ","纏":"caㄔㄢˊ","齶":"cbㄜˋ","耮":"cdㄌㄠˋ","縑":"cdㄐㄧㄢ","靦":"ccㄇㄧㄢˇ","膃":"caㄨㄚˋ","懞":"ccㄇㄥˊ","膩":"cdㄋㄧˋ","薊":"cbㄐㄧˋ","騰":"cdㄊㄥˊ","簑":"cbㄙㄨㄛ","蕷":"cbㄩˋ","藍":"cbㄌㄢˊ","蘺":"cbㄌㄧˊ","蝸":"cbㄨㄛ","鎣":"caㄧㄥˊ","驀":"ccㄇㄛˋ","覦":"caㄩˊ","譽":"caㄩˋ","謾":"ccㄇㄢˊ","謫":"caㄓㄜˊ","觸":"caㄔㄨˋ","譾":"cdㄐㄧㄢˇ","謄":"cdㄊㄥˊ","蛻":"cdㄊㄨㄟˋ","謹":"cdㄐㄧㄣˇ","蹕":"ccㄅㄧˋ","賴":"cdㄌㄞˋ","謬":"ccㄇㄧㄡˋ","躚":"caㄒㄧㄢ","蹺":"cdㄑㄧㄠ","輳":"cdㄘㄡˋ","辤":"cdㄘˊ","遙":"cdㄧㄠˊ","輸":"caㄕㄨ","輻":"ccㄈㄨˊ","酧":"caㄔㄡˊ","輯":"cdㄐㄧˊ","闢":"ccㄆㄧˋ","躋":"cdㄐㄧ","轡":"ccㄆㄟˋ","鍺":"caㄓㄜˇ","鍩":"caㄋㄨㄛˋ","錨":"caㄇㄠˊ","錯":"caㄘㄨㄛˋ","醬":"cdㄐㄧㄤˋ","錁":"caㄎㄜˋ","錛":"caㄅㄣ","鋻":"cdㄐㄧㄢ","錆":"caㄑㄧㄥ","醯":"aaㄒㄧ","鍀":"caㄉㄜˊ","錕":"caㄎㄨㄣ","錘":"caㄔㄨㄟˊ","鍃":"caㄏㄨㄛˋ","錦":"caㄐㄧㄣˇ","錮":"caㄍㄨˋ","鑼":"caㄌㄨㄛˊ","錇":"caㄆㄟˊ","錫":"caㄒㄧ","錈":"caㄐㄩㄢˇ","鍁":"caㄒㄧㄢ","錐":"caㄓㄨㄟ","錠":"caㄉㄧㄥˋ","錳":"caㄇㄥˇ","鍵":"caㄐㄧㄢˋ","闔":"cbㄏㄜˊ","闐":"cdㄊㄧㄢˊ","錟":"caㄊㄢˊ","雛":"caㄔㄨˊ","闕":"cdㄑㄩㄝˋ","鋸":"caㄐㄩˋ","霧":"ccㄨˋ","錙":"caㄗ","韙":"caㄨㄟˇ","韻":"caㄩㄣˋ","韞":"caㄩㄣˋ","饃":"ccㄇㄛˊ","頷":"cbㄏㄢˋ","穎":"cbㄧㄥˇ","頤":"caㄧˊ","頻":"ccㄅㄧㄣ","颼":"cdㄙㄡ","餾":"cdㄌㄧㄡˋ","穨":"cbㄊㄨㄟˊ","饈":"caㄒㄧㄡ","騮":"cdㄌㄧㄡˊ","鮁":"ccㄅㄚˋ","驁":"ceㄠˋ","騫":"cdㄑㄧㄢ","騸":"caㄕㄢˋ","鱸":"cdㄌㄩˊ","鮒":"ccㄈㄨˋ","鮑":"ccㄅㄠˋ","鮃":"ccㄆㄧㄥˊ","鮎":"cdㄋㄧㄢˊ","鮐":"cdㄊㄞˊ","鱟":"cbㄏㄡˋ","鵪":"ceㄢ","鵯":"ccㄅㄟ","鵡":"cdㄨˇ","鵲":"cdㄑㄩㄝˋ","鵬":"ccㄆㄥˊ","鶓":"ccㄇㄧㄠˊ","齡":"cdㄌㄧㄥˊ","鶉":"caㄔㄨㄣˊ","齙":"ccㄅㄠ","躂":"cda","齟":"cdㄐㄩˇ","願":"caㄩㄢˋ","齠":"cdㄊㄧㄠˊ","廝":"cdㄙ","嚶":"cdㄧㄥ","墻":"cdㄑㄧㄤˊ","噓":"caㄒㄩ","攖":"cdㄧㄥ","鄘":"aeㄩㄥ","戩":"cdㄐㄧㄢˇ","曖":"ceㄞˋ","嬙":"cdㄑㄧㄤˊ","搾":"caㄓㄚˋ","旂":"cbㄑㄧˊ","櫧":"cbㄓㄨ","檻":"cbㄐㄧㄢˋ","縯":"cdㄧㄢˇ","瀠":"ccㄧㄥˊ","檳":"cbㄅㄧㄣ","瀲":"ccㄌㄧㄢˋ","糢":"ccㄇㄛˊ","殯":"ccㄅㄧㄣˋ","瀟":"ccㄒㄧㄠ","橰":"cbㄍㄠ","琍":"cdㄌㄧˊ","瘞":"cdㄧˋ","濰":"ccㄨㄟˊ","瀦":"ccㄓㄨ","瑤":"cdㄧㄠˊ","瘺":"cdㄌㄡˋ","堿":"cbㄐㄧㄢˇ","璦":"ceㄞˋ","窶":"cdㄐㄩˋ","耑":"cdㄉㄨㄢ","穩":"cbㄨㄣˇ","琯":"cbㄍㄨㄢˇ","燻":"cdㄒㄩㄣ","簀":"cbㄗㄜˊ","镟":"caㄒㄩㄢˋ","籮":"cbㄌㄨㄛˊ","篋":"cdㄑㄧㄝˋ","篛":"cdㄖㄨㄛˋ","糝":"cdㄙㄢˇ","縹":"ccㄆㄧㄠˇ","縵":"ccㄇㄢˋ","簞":"cbㄉㄢ","籜":"cbㄊㄨㄛˋ","簫":"cbㄒㄧㄠ","纓":"cdㄧㄥ","縲":"cdㄌㄟˊ","甖":"caㄧㄥ","縮":"cdㄙㄨㄛ","繆":"cdㄇㄡˊ","臏":"ccㄅㄧㄣˋ","繅":"cdㄙㄠ","羆":"ccㄆㄧˊ","藺":"cbㄌㄧㄣˋ","蘞":"cbㄌㄧㄢˇ","薔":"cdㄑㄧㄤˊ","輿":"caㄩˊ","衊":"ccㄇㄧㄝˋ","踡":"cdㄐㄩㄢˇ","蠟":"cdㄌㄚˋ","藹":"cbㄞˇ","蟈":"cbㄍㄨㄛ","蠅":"caㄧㄥˊ","覯":"cbㄍㄡˋ","蟬":"caㄔㄢˊ","譜":"ccㄆㄨˇ","譖":"cdㄗㄣˋ","譙":"cdㄑㄧㄠˊ","譚":"cdㄊㄢˊ","讕":"cdㄌㄢˊ","贅":"caㄓㄨㄟˋ","譎":"cdㄐㄩㄝˊ","賻":"ccㄈㄨˋ","踴":"caㄩㄥˇ","躊":"caㄔㄡˊ","轄":"cbㄒㄧㄚˊ","賺":"caㄓㄨㄢˋ","轅":"caㄩㄢˊ","賽":"cdㄙㄞˋ","釀":"cdㄋㄧㄤˋ","釅":"cdㄧㄢˋ","輾":"cdㄓㄢˇ","釃":"cdㄕ","鍥":"caㄑㄧㄝˋ","鍇":"caㄎㄞˇ","鍔":"caㄜˋ","鏘":"caㄑㄧㄤ","痠":"cdㄙㄨㄢ","鍤":"caㄔㄚ","鍛":"caㄉㄨㄢˋ","鍫":"cdㄑㄧㄠ","鍶":"caㄙ","鑾":"caㄌㄨㄢˊ","鎪":"caㄙㄡ","鍰":"caㄏㄨㄢˊ","鍾":"caㄓㄨㄥ","鎂":"caㄇㄟˇ","鎄":"caㄞ","鍍":"caㄉㄨˋ","鐨":"caㄈㄟˋ","顆":"cbㄎㄜ","闞":"cbㄎㄢˋ","鋂":"ccㄇㄟˊ","霽":"ccㄐㄧˋ","饉":"cdㄐㄧㄣˇ","靜":"cdㄐㄧㄥˋ","韜":"cdㄊㄠ","饅":"ccㄇㄢˊ","鏤":"cfㄌㄡˋ","驃":"ccㄆㄧㄠˋ","騾":"cdㄌㄨㄛˊ","鮮":"caㄒㄧㄢ","鮫":"cdㄐㄧㄠ","鮚":"cdㄐㄧㄝˊ","鮭":"cbㄍㄨㄟ","鮞":"ccㄦˊ","鮪":"caㄨㄟˇ","鱭":"cdㄐㄧˋ","鯗":"caㄒㄧㄤˇ","鱘":"caㄒㄩㄣˊ","驄":"cdㄘㄨㄥ","鶘":"cbㄏㄨˊ","鶚":"cdㄜˋ","齜":"caㄗ","鶿":"cdㄘˊ","鶻":"cbㄍㄨˇ","鶥":"ccㄇㄟˊ","凜":"cdㄌㄧㄣˇ","囑":"caㄓㄨˇ","鶩":"cdㄨˋ","齦":"cbㄧㄣˊ","譆":"caㄒㄧ","攆":"cdㄋㄧㄢˇ","襆":"acㄈㄨˊ","嚕":"cdㄌㄩ","撐":"caㄔㄥ","屨":"cdㄐㄩˋ","橫":"cbㄏㄥˊ","櫻":"cbㄧㄥ","擼":"cdㄌㄩ","潛":"ccㄑㄧㄢˊ","擷":"caㄒㄧㄝˊ","攛":"cdㄘㄨㄢ","櫫":"cbㄓㄨ","瀾":"ccㄌㄢˊ","檣":"cbㄑㄧㄤˊ","璿":"caㄒㄩㄢˊ","癱":"cdㄊㄢ","澂":"ccㄔㄥˊ","瓔":"cdㄧㄥ","癟":"ccㄅㄧㄝ","簍":"cbㄌㄡˇ","餱":"cbㄏㄡˊ","瞞":"ccㄇㄢˊ","纈":"caㄒㄧㄝˋ","簣":"cbㄎㄨㄟˋ","繒":"cdㄗㄥ","耬":"cdㄌㄡˊ","聰":"cdㄘㄨㄥ","繕":"caㄕㄢˋ","繚":"cdㄌㄧㄠˊ","蘄":"cbㄑㄧˊ","聵":"cbㄎㄨㄟˋ","蠑":"caㄖㄨㄥˊ","覲":"cdㄐㄧㄣˋ","螻":"cdㄌㄡˊ","襤":"cdㄌㄢˊ","觶":"caㄓˋ","蘊":"cbㄩㄣˋ","蠍":"caㄒㄧㄝ","覰":"cdㄑㄩ","讞":"caㄧㄢˋ","譫":"caㄓㄢ","賾":"cdㄗㄜˊ","譴":"cdㄑㄧㄢˇ","躑":"caㄓˊ","鏌":"caㄇㄛˋ","鎘":"caㄍㄜˊ","轆":"cdㄌㄩˋ","蹤":"cdㄗㄨㄥ","鑷":"caㄋㄧㄝˋ","鎮":"caㄓㄣˋ","躓":"caㄓˋ","鎦":"caㄌㄧㄡˊ","鎰":"caㄧˋ","錼":"cdㄋㄞˋ","鎳":"caㄋㄧㄝˋ","鎬":"caㄍㄠˇ","鎊":"caㄅㄤˋ","靨":"cdㄧㄝˋ","黴":"ccㄇㄟˊ","韃":"cdㄉㄚˊ","鎵":"caㄐㄧㄚ","鑌":"caㄅㄧㄣ","鞽":"cdㄑㄧㄠˊ","顓":"caㄓㄨㄢ","顏":"caㄧㄢˊ","顎":"ccㄜˋ","饌":"caㄓㄨㄢˋ","題":"cdㄊㄧˊ","額":"cbㄜˊ","飃":"ccㄆㄧㄠ","饜":"caㄧㄢˋ","饊":"cdㄙㄢˇ","鱺":"cdㄌㄧˊ","骾":"cbㄍㄥˇ","驏":"caㄓㄢˋ","鰱":"cdㄌㄧㄢˊ","鰷":"cdㄊㄧㄠˊ","鰹":"cdㄐㄧㄢ","魘":"cdㄧㄢˇ","鰣":"caㄕˊ","鮌":"cbㄍㄨㄣˇ","鯉":"cdㄌㄧˇ","鶴":"cbㄏㄜˋ","鯇":"cbㄏㄨㄢˋ","鯊":"caㄕㄚ","鯽":"cdㄐㄧˋ","齪":"caㄔㄨㄛˋ","鎔":"caㄖㄨㄥˊ","齏":"cdㄐㄧ","鷂":"cdㄧㄠˋ","鶼":"cdㄐㄧㄢ","齬":"cdㄩˇ","譟":"cdㄗㄠˋ","廩":"cdㄌㄧㄣˇ","斕":"cdㄌㄢˊ","嬾":"cdㄌㄢˇ","櫥":"caㄔㄨˊ","擻":"cdㄙㄡˋ","瀨":"ccㄌㄞˋ","氌":"cdㄌㄩˇ","懍":"cdㄌㄧㄣˇ","櫞":"cbㄩㄢˊ","瀕":"ccㄅㄧㄣ","櫓":"cdㄌㄩˇ","讌":"caㄧㄢˋ","癭":"cdㄧㄥˇ","籃":"cbㄌㄢˊ","穡":"cbㄙㄜˋ","繾":"cdㄑㄧㄢˇ","繰":"cdㄑㄧㄠ","籬":"cbㄌㄧˊ","獺":"cdㄊㄚˇ","繮":"cdㄐㄧㄤ","癮":"caㄧㄣˇ","繯":"cbㄏㄨㄢˊ","繳":"cdㄐㄧㄠˇ","蟎":"ccㄇㄢˇ","藪":"cbㄙㄡˇ","讚":"cdㄗㄢˋ","翺":"ceㄠˊ","轔":"cdㄌㄧㄣˊ","贈":"cdㄗㄥˋ","鏨":"caㄗㄢˋ","轍":"caㄓㄜˊ","贋":"caㄧㄢˋ","辯":"ccㄅㄧㄢˋ","鏢":"caㄅㄧㄠ","鏜":"cfㄊㄤ","鏡":"caㄐㄧㄥˋ","顳":"cdㄋㄧㄝˋ","彫":"cdㄉㄧㄠ","鏍":"cdㄌㄨㄛˊ","鏑":"caㄉㄧˊ","鏞":"caㄩㄥ","顢":"ccㄇㄢ","鏝":"caㄇㄢˋ","顙":"cdㄙㄤˇ","鏃":"caㄗㄨˊ","飈":"ccㄅㄧㄠ","飆":"ccㄅㄧㄠ","顛":"cdㄉㄧㄢ","鯖":"cdㄑㄧㄥ","魎":"cdㄌㄧㄤˇ","鯤":"cbㄎㄨㄣ","鯫":"cdㄗㄡ","鯢":"cdㄋㄧˊ","鯛":"cdㄉㄧㄠ","鯪":"cdㄌㄧㄥˊ","鯧":"caㄔㄤ","鯝":"cbㄍㄨˋ","鯨":"cdㄐㄧㄥ","鯡":"ccㄈㄟ","鯔":"cdㄗ","鯴":"caㄕ","鸚":"caㄧㄥ","鯰":"cdㄋㄧㄢˊ","鷚":"cdㄌㄧㄡˋ","贇":"ccㄩㄣ","鹺":"cdㄘㄨㄛˊ","鷓":"caㄓㄜˋ","懣":"ccㄇㄣˋ","簷":"cbㄧㄢˊ","黌":"cbㄏㄨㄥˊ","檁":"cdㄌㄧㄣˇ","矚":"caㄓㄨˇ","嬤":"ccㄇㄛˊ","燐":"cdㄌㄧㄣˊ","籪":"cbㄉㄨㄢˋ","羶":"caㄕㄢ","羈":"cdㄐㄧ","贍":"cdㄕㄢˋ","鐔":"caㄒㄧㄣˊ","蘚":"cbㄒㄧㄢˇ","繈":"cdㄑㄧㄤˇ","辮":"cfㄅㄧㄢˋ","鐝":"caㄐㄩㄝˊ","贏":"caㄧㄥˊ","躡":"cdㄋㄧㄝˋ","蹣":"ccㄆㄢˊ","鐐":"caㄌㄧㄠˋ","鑥":"caㄌㄩˇ","鐓":"caㄉㄨㄟ","鏷":"caㄆㄨˊ","鐠":"caㄆㄨˇ","鑹":"caㄘㄨㄢ","鐙":"caㄉㄥˋ","鑭":"caㄌㄢˊ","鏹":"caㄑㄧㄤˇ","驟":"caㄓㄡˋ","鰌":"cdㄑㄧㄡ","鰓":"cdㄙㄞ","鰈":"cdㄉㄧㄝˊ","鱝":"ccㄈㄣˋ","鰒":"ccㄈㄨˋ","鯿":"cfㄅㄧㄢ","鰐":"cdㄜˋ","鰉":"cbㄏㄨㄤˊ","鷦":"cdㄐㄧㄠ","鰠":"cdㄙㄠ","鷯":"cdㄌㄧㄠˊ","鷲":"cdㄐㄧㄡˋ","齲":"cdㄑㄩˇ","鷸":"caㄩˋ","嚻":"ceㄒㄧㄠ","彜":"cdㄧˊ","齷":"cdㄨㄛˋ","癩":"cdㄌㄞˋ","囅":"caㄔㄢˇ","籐":"cdㄊㄥˊ","鐳":"caㄌㄟˊ","鑊":"caㄏㄨㄛˋ","繙":"ccㄈㄢ","鋜":"caㄓㄨㄛˊ","鐿":"caㄧˋ","韉":"cdㄐㄧㄢ","顥":"cbㄏㄠˋ","髏":"cdㄌㄡˊ","鐮":"cdㄌㄧㄢˊ","鰲":"ceㄠˊ","讎":"caㄔㄡˊ","騣":"cdㄗㄨㄥ","鰭":"cdㄑㄧˊ","鷺":"cdㄌㄩˋ","鰩":"caㄧㄠˊ","鰥":"cbㄍㄨㄢ","鰨":"cdㄊㄚˇ","鷹":"caㄧㄥ","儹":"caㄗㄢˇ","鸌":"cbㄏㄨˋ","癬":"caㄒㄩㄢˇ","巔":"cdㄉㄧㄢ","鑔":"caㄔㄚˇ","躕":"caㄔㄨˊ","纘":"cdㄗㄨㄢˇ","讖":"caㄔㄣˋ","籟":"cbㄌㄞˋ","靄":"ccㄞˇ","躥":"cdㄘㄨㄢ","韝":"cbㄍㄡ","髖":"cbㄎㄨㄢ","驥":"cdㄐㄧˋ","顫":"caㄔㄢˋ","鰻":"ccㄇㄢˊ","髕":"ccㄅㄧㄣˋ","鰵":"ccㄇㄧㄣˇ","鱈":"caㄒㄩㄝˇ","鱉":"ccㄅㄧㄝ","鰳":"cdㄌㄜˋ","鰾":"ccㄆㄧㄠˋ","鑣":"caㄅㄧㄠ","鱅":"caㄩㄥ","燿":"cdㄧㄠˋ","鞀":"cdㄊㄠˊ","瓚":"cdㄗㄢˋ","髩":"ccㄅㄧㄣˋ","顬":"caㄖㄨˊ","鱖":"cdㄍㄨㄟˋ","驤":"caㄒㄧㄤ","鱓":"caㄕㄢˋ","灝":"ccㄏㄠˋ","癲":"cdㄉㄧㄢ","鱒":"cdㄗㄨㄣ","黷":"cdㄉㄨˊ","顰":"ccㄆㄧㄣˊ","躪":"cdㄌㄧㄣˋ","鼉":"cdㄊㄨㄛˊ","黲":"caㄘㄢˇ","鱗":"cdㄌㄧㄣˊ","贛":"cbㄍㄢˋ","鑲":"caㄒㄧㄤ","鸛":"cbㄍㄨㄢˋ","趲":"cdㄗㄢˇ","顴":"cdㄑㄩㄢˊ","鱧":"cdㄌㄧˇ","齇":"caㄓㄚ","戇":"cbㄍㄤˋ","饢":"cdㄋㄤˊ","臒":"ccㄨㄛˋ","躦":"cdㄗㄨㄢ","鼴":"caㄧㄢˇ","纔":"cdㄘㄞˊ","廠":"caㄔㄤˇ","繃":"ccㄅㄥ","幣":"ccㄅㄧˋ","鉢":"caㄅㄛ","饑":"cdㄐㄧ","鏟":"caㄔㄢˇ","壩":"ceㄅㄚˋ","慚":"cdㄘㄢˊ","廁":"cdㄘㄜˋ","處":"caㄔㄨˇ","鈔":"caㄔㄠ","辭":"cdㄘˊ","幹":"cbㄍㄢˋ","彈":"cdㄉㄢˋ","蕩":"cbㄉㄤˋ","鋤":"caㄔㄨˊ","當":"cdㄉㄤ","賭":"cdㄉㄨˇ","歡":"cbㄏㄨㄢ","構":"cbㄍㄡˋ","鉤":"caㄍㄡ","譁":"cbㄏㄨㄚˊ","惡":"cdㄜˋ","關":"cbㄍㄨㄢ","礆":"cdㄐㄧㄢˇ","輝":"cbㄏㄨㄟ","館":"cbㄍㄨㄢˇ","績":"cdㄐㄧˋ","劍":"cdㄐㄧㄢˋ","規":"cbㄍㄨㄟ","鑑":"cdㄐㄧㄢˋ","箋":"cdㄐㄧㄢ","舉":"cdㄐㄩˇ","歷":"cdㄌㄧˋ","饋":"cbㄎㄨㄟˋ","階":"cdㄐㄧㄝ","隸":"cdㄌㄧˋ","驢":"cfㄌㄩˊ","鋁":"cfㄌㄩˇ","屢":"cfㄌㄩˇ","懶":"cdㄌㄢˇ","盡":"cdㄐㄧㄣˋ","侶":"cfㄌㄩˇ","呂":"cfㄌㄩˇ","齧":"cdㄋㄧㄝˋ","羅":"cdㄌㄨㄛˊ","縷":"cfㄌㄩˇ","鬧":"cdㄋㄠˋ","靈":"ccㄌㄧㄥˋ","闊":"cbㄎㄨㄛˋ","濾":"cfㄌㄩˋ","慮":"cfㄌㄩˋ","憑":"ccㄆㄧㄥˊ","飄":"ccㄆㄧㄠ","騙":"ccㄆㄧㄢˋ","鋪":"ccㄆㄨ","羣":"cdㄑㄩㄣˊ","牆":"cdㄑㄧㄤˊ","槍":"caㄑㄧㄤ","盤":"ccㄆㄢˊ","鍬":"caㄑㄧㄠ","籤":"cbㄑㄧㄢ","錢":"caㄑㄧㄢˊ","絨":"caㄖㄨㄥˊ","驅":"cdㄑㄩ","殺":"caㄕㄚ","蘇":"cbㄙㄨ","歲":"cdㄙㄨㄟˋ","鐵":"cdㄊㄧㄝˇ","韌":"caㄖㄣˋ","視":"caㄕˋ","壇":"ceㄊㄢˊ","懾":"caㄕㄜˋ","臺":"cdㄊㄞˊ","爲":"caㄨㄟˊ","塗":"cdㄊㄨˊ","廳":"cdㄊㄧㄥ","體":"cdㄊㄧˇ","聽":"cdㄊㄧㄥ","僞":"ceㄨㄟˇ","豎":"caㄕㄨˋ","頹":"cdㄊㄨㄟˊ","銜":"caㄒㄧㄢˊ","閒":"cdㄒㄧㄢˊ","杴":"cdㄒㄧㄢ","戲":"cbㄒㄧˋ","線":"caㄒㄧㄢˋ","纖":"cdㄒㄧㄢ","囂":"ceㄒㄧㄠ","攜":"caㄒㄧㄝˊ","勳":"caㄒㄩㄣ","繡":"caㄒㄧㄡˋ","醫":"caㄧ","鏽":"caㄒㄧㄡˋ","豔":"cdㄧㄢˋ","鑰":"caㄩㄝˋ","驗":"caㄧㄢˋ","敘":"caㄒㄩˋ","贊":"cdㄗㄢˋ","蟻":"cdㄧˇ","醞":"cdㄩㄣˋ","巖":"ceㄧㄢˊ","皁":"cdㄗㄠˋ","雜":"cdㄗㄚˊ","蔭":"cbㄧㄣ","藥":"cbㄧㄠˋ","贓":"cdㄗㄤ","證":"caㄓㄥˋ","髒":"cdㄗㄤ","茲":"cbㄗ","總":"cdㄗㄨㄥˇ","閘":"cbㄓㄚˊ","鑽":"caㄗㄨㄢ","攢":"cdㄗㄢˇ","磚":"ceㄓㄨㄢ","紮":"caㄓㄚ","奩":"cdㄌㄧㄢˊ","嫵":"caㄨˇ","潙":"ccㄨㄟˊ","衆":"caㄓㄨㄥˋ","釒":"caㄐㄧㄣ","嬀":"cbㄍㄨㄟ","奼":"caㄔㄚˋ","逕":"cdㄐㄧㄥˋ","犛":"cdㄌㄧˊ","崬":"cdㄉㄨㄥ","駑":"cdㄋㄩˊ","壎":"ceㄒㄩㄣ","壠":"cdㄌㄨㄥˇ","懨":"caㄧㄢ","閭":"cfㄌㄩˊ","蒞":"cdㄌㄧˋ","穭":"cfㄌㄩˇ","贐":"cdㄐㄧㄣˋ","釹":"cfㄋㄩˇ","鞝":"caㄕㄤˋ","蓴":"caㄔㄨㄣˊ","痾":"cbㄎㄜ","磽":"ceㄑㄧㄠ","撳":"cdㄑㄧㄣˋ","瀆":"ccㄉㄨˊ","櫝":"cbㄉㄨˊ","弒":"caㄕˋ","諶":"caㄔㄣˊ","鐗":"cdㄐㄧㄢˇ","齎":"cdㄐㄧˊ","鐦":"caㄎㄞ","櫚":"cfㄌㄩˊ","緡":"cbㄇㄧㄣˊ","鋝":"caˋ","灩":"ccㄧㄢˋ","磣":"cdㄔㄣˇ","襉":"cdㄐㄧㄢˇ","褸":"cfㄌㄩˇ","尷":"cbㄍㄢ","罌":"caㄧㄥ","餈":"cdㄘˊ","瘻":"cdㄌㄡˋ","鎿":"caㄋㄚˊ","糉":"cdㄗㄨㄥˋ","鎇":"caㄇㄟˊ","覷":"cdㄑㄩˋ","鐲":"caㄓㄨㄛˊ","鯀":"cbㄍㄨㄣˇ","鯁":"cbㄍㄥˇ","钁":"cdㄐㄩㄝˊ","贗":"cdㄧㄢˋ","櫱":"cbㄋㄧㄝˋ","鰍":"cdㄑㄧㄡ","鬢":"ccㄅㄧㄣˋ","迴":"cbㄏㄨㄟˊ","鱷":"cdㄜˋ","鱔":"caㄕㄢˋ","裡":"cdㄌㄧˇ"}');
    }, function(j) {
      j.exports = JSON.parse('{"*":"見b7車d7貝b7靣d8釒a8門c8長d8韋b9風c9頁b9馬d10鬥a10鳥a11麥b11魚b11黽b12齊b14齒a15龍a16","釒":"8:銼a鎸a鉅a釦a釓a釔a鉋a針a釘a釗a釕a釙a錄a錶a釷a釺a鍆a釤a釩a釣a釵a釧a鈣a鈈a鐘a鈑a鈦a鈐a鋼a鈉a鈍a鋇a鈞a鈁a鈥a鈧a鈎a鈄a鈕a鎢a鈀a鈺a鉗a鈷a鉦a鈸a鈳a鉆a鈽a鉬a鉭a鉀a鉄a鉕a鈿a鉞a鉑a鈾a鈰a鑠a鈴a鉈a鉉a鉍a鉚a鈹a鐸a鈮a鉛a鏇a釬a銬a銪a鋮a鉺a鐃a銅a銱a鋣a鋏a銠a鐺a銦a鎧a鋌a銓a銖a銑a銩a鍘a鏵a鉿a鉻a鎩a錚a銚a銘a鉸a銫a銥a銃a銣a銀a銨a鐋a鐒a鑄a錸a鋱a鏗a鎖a鋥a銷a鋰a鍋a鋯a銹a鏈a鋨a鋶a鉲a鋒a鐧a鋅a銻a銳a錒a鋟a鋃a鋦a鍺a鍩a錨a錯a錁a錛a錆a鍀a錕a錘a鍃a錦a錮a鑼a錇a錫a錈a鍁a錐a錠a錳a鍵a錟a鋸a錙a鍥a鍇a鍔a鏘a鍤a鍛a鍶a鎪a鍰a鍾a鎂a鎄a鍍a鐨a鋂a鏤a鏌a鎘a鑷a鎮a鎦a鎰a錼a鎳a鎬a鎊a鎵a鑌a鎔a鏢a鏜a鏡a鏍a鏑a鏞a鏝a鏃a鐔a鐝a鐐a鑥a鐓a鏷a鐠a鑹a鐙a鑭a鏹a鐳a鑊a鋜a鐿a鐮a鑔a鑣a鑲a鉢a鏟a鈔a鋤a鉤a鑑a鋁a鋪a鍬a錢a鐵a銜a鏽a鑰a鑽a釹a鐗a鐦a鋝a鎿a鎇a鐲a钁a","艹":"3:蔣b萬b蔔b藝b蘭b葉b華b莊b薌b蕭b蘆b葦b蕪b藶b萇b蕓b莧b蒼b苧b蓯b莖b蘢b蔦b蘋b薑b薦b蕘b薈b蓽b莢b荊b薺b蕎b葷b蕁b蓀b葒b藎b蕒b葯b葤b蓆b蓧b蓮b萵b蒔b萊b蕕b薟b蒓b菴b蓋b著b蔆b蘿b薩b蔴b蒐b蔥b蕆b蕢b蔞b薊b蕷b藍b蘺b藺b蘞b薔b藹b蘄b蘊b藪b蘚b蕩b蘇b蔭b藥b茲b蒞b蓴b","土":"3:塼a壓b場a壙a堯a塵b執a堦a堅b壞a墰a塢a塊a墳a壢a垻a墜b報a壟b壚a塋b埰a坰a墾b埡a壘b堊b堖a塏a墊b塚a塤a塒a堝a垵a塹b墮b墝a墻a堿a壩a壇a塗b壎a壠a","言":"7:詆a計a訂a認a訃a訌a討a訕a訐a訓a訖a議a訊a記a讓a譏a誇a託a詎a謳a訝a講a諱a訛a訥a許a諷a論a訪a設a訟a訣a誌a護a詁a証a訶a識a評a詐a詛a診a謅a詞a詘a訴a譯a詔a詒a詠a訢a註a誆a試a誄a詩a詿a詼a誠a詰a話a詵a誕a詮a誅a詳a詣a詫a詢a詬a諢a該a諍a詡a變b詭a誡a語a誚a誤a誘a誣a誑a誨a誥a說a誒a誦a諸a諾a諏a讀a請a誹a課a諛a諑a調a諉a諗a諒a諄a誰a諂a誼a誶a談a謀a訦a諜a諧a謔a謊a謁a謂a諫a諼a諤a諳a諦a諺a讒a謎a諮a諞a諭a諝a謨a謝a謖a謠a讜a謙a諡a謐a謗a譽a謾a謫a譾a謄a謹a謬a譜a譖a譙a譚a讕a譎a譆a讞a譫a譴a譟a讌a讚a讎a讖a譁a證a諶a","厂":"2:厰c厛c厤c厲c厙c厭c厠c厴c","臣":"6:臥a臨a","儿":"2:兒d兇d","幺":"3:幾d","廴":"2:廼b","亻":"2:個a億a僅a僕a伕a們a儀a佔a佈a倣a價a優a傴a傳a倀a傖a傷a佇a偽a偉a倫a儘a儅a傭a侷a來d係a俠a側a僥a儈a偵a儕a僑a儂a備a倖a傑a儸a儔a倆a儷a儼a儉a俁a偺a債a傾a傢a傚a傯a偸a僂a償a僨a儐a僳a儲a儻a儺a僱a儹a侶a僞a","麻":"11:麼c","玉":"5:璽b瑩b","八":"2:義b兌b羨b","羽":"6:習b翹c翬b翺a","方":"4:於a旂a","阝":"2:鄉a鄧a隊a鄺a郃a鄔a陣a陰a陽a阬a阯a鄒a郵a鄴a鄰a際a陘a陸a陳a隴a鄶a郤a鄭a郟a鄆a陝a酈a鄖a隕a險a隉a鄲a隨a隱a隄a鄘a階a","虍":"6:虧a號a虜c虛c處d","革":"9:韆a鞏b靭a鞦a韃a鞽a韉a鞀a鞝a","行":"6:衛a術a衚a","尸":"3:屍c層c屜c屆c屬c屨c屢c","乙":"1:乾a","广":"3:廣c廬c廡c庫c廟c廢c廕c廂c廄c廈c廚c廝c廩c廠d廁d廳d","臼":"6:與d舊b興d舉b","酉":"7:醜a釁b醖a醃a酧a醬b醯a釀a釅a釃a醫b醞a","寸":"3:專b對a尋b導b將a","灬":"4:為b烏b無b熱b燾b","豆":"7:豐b豈b豎b豔a","飞":"3:飛b","雨":"8:雲b電b霛b霑b靂b霤b霧b霽b靄b靈b","人":"2:倉b侖b傘b僉b佘b","曰":"4:書b會b","入":"2:內d","鳥":"11:鳳c鳧b鳩a鳶b鳴a鷗a鴉a鴆a鴇a鶯b鴣a鶇a鴦b鸕a鴨a鴝a鴟a鷥b鴛b鴕a鴞a鴰a鷙b鴯a鵂a鴻a鸞b鴿a鵓a鵒a鵑a鵝a鸝a鷳a鵜a鵠a鵐a鵪a鵯a鵡a鵲a鵬a鶓a鶉a鶘a鶚a鶿b鶻a鶥a鶩b鶴a鷂a鶼a鸚a鷚a鷓a鷦a鷯a鷲a鷸a鷺b鷹b鸌a鸛a","彳":"3:從a後a彿a徹a徬a徴a徑a復a徠a","日":"4:昇b曠a時a暘a曇b暢a暱a晝b晉b曉a暈b曄a暉a曬a暫b曡b曖a","山":"3:岡c嶼a嵗b崗b嶇a嶴b島b峴a嵐b巋b嶽b嶺b嶧a崠a崐a嶠a巒b峽a崢a崍a嶗a嶄b嶁a嶸a崳a巔b巖b崬b","匚":"2:區c匯c匲c匭c匱c匵c","勹":"2:勻c","辛":"7:辦a辤a辯a辮f辭a","力":"2:勸a勱a務a動a勁a勵a勞b勢b勛a勝a勗b勣a勦a勳a","隹":"8:雙b雞a雖a離a雋b難a雛a雜a","户":"4:戶d","忄":"3:憶a懺a懽a憮a懷a愾a悵a愴a慪a悶c憐a懌a恆a慟a愷a惻a惱a惲a悽a悅a慳a憫a慄a慘a懼a慙a慣a愜a憚a慍a憤a憒a慴a懞a懍a慚a懶a懾a懨a","門":"8:開c閂c閃c関c閉c閆c闖c閏c間c闈c閔c閎c閌c閑c闆c閙c閨c闥c閣c閥c閩c閡c闓c閫c閬c閱c閹c閾c閿c閶c閻c閽c閼c闡c闃c闌c闋c闢c闔c闐c闕c闞c關d闊d閒d閘d閭d","气":"4:氣b氫c氬c氳c","糸":"6:紥b縣a緊b絛a纍b縈b縶b紮b","木":"4:業b東d樂b檯a樸a權a機a棄b桿a條a楊a槓a極a榪a枴a梘a樞a楓a櫪a棗b櫃a樅a棖a梟b檾b槼a檸a梔a標a棧a檉a棟a櫳a櫛a柵a櫟a樹a櫨a欄a榮b梱a棲a樣a欒b棬a椏a檔a楨a橋a檜a榿a橈a樺a槳a樁a樑a櫺a檢a槃b槨a槧b櫂a欏a橢a樓a櫬a櫸a欖a櫧a檻a檳a橰a橫a櫻a櫫b檣a櫥a櫞a櫓a檁a構a槍a杴a櫝a櫚a櫱b","糹":"6:絲a糾a紆a約a紂a級a紅a縴a紇a紈a纊a紀a網a紉a緯a紕a縱a紗a綱a純a納a紙a紜a紛a綸a紐a紋a紓a紡a絃a紲a紺a練a組a紱a綫a細a終a紳a織a絆a紼a絀a繹a縐a紹a紿a經a縂a綁a繞a結a絝a絎a絢a繪a絳a給a絡a統a絕a絞a繭b綆a絹a綏a繼a綃a綉a綈a緻a綵a緒a緋a續a緔a綾a綽a綺a綬a繩a綹a維a綿a緄a綢a綣a綳a綰a綜a綻a綠a綞a綴a緇a緘a緙a緗a緹a纜a緬a緝a繢a緲a緱a緶a緩a緦a縋a締a緍a編a緞a緣a縉a縟a縛a縝a縞a縭a縊a繽a縫a纏a縑a縯a縹a縵a纓a縲a縮a繆a繅a纈a繒a繕a繚a繾a繰a繮a繯a繳a繈a繙a纘a纔a繃a績a縷a絨a線a纖a繡a總a緡a","又":"2:叢b","鼓":"13:鼕b","冂":"2:冊d","馬":"10:馮a馭a馴a馱a馳a駁a駛a駔a駕b駒a駝a騶a駙a驛a駘a駟a駐a驊a驍a驕a駢a駱a駭a驪a騐a駿a騁a驚b騎a騏a騍a騅a驂a騗a騖b騭b騷a騰a驀b騮a驁b騫b騸a驃a騾a驄a驏a驟a騣a驥a驤a驢a騙a驅a驗a駑b","艸":"6:芻b","宀":"3:寫b寧b寶b寵b審b實b宮b寬b寢b","齒":"15:齣a齔a齶a齡a齙a齟a齠a齜a齦a齪a齬a齲a齷a齧a","手":"4:擊b擧b攣b摯b","癶":"5:發b","皿":"5:盧c盃b盪b盞b監b盜b盡b盤b","衤":"5:衹a襍a補a襯a襖a襪a襠a褳a襇a褲a襝a襆a襤a襉a褸a裡a","口":"3:嘰a嘆a喬b喫a嚇a嚮a嗎a問c嚴b吳b噸a啓b唚a吶a嘸a唄a嚦a員b嘔a囈a嗚a咼b嗆a囌a單b嚀a噝a嚨a哢a喦b唸a吒a噅a嚥a噠a嘩a啞a噦a噲a嘵a嗶a嚌a喲a噥a嘗a嗩a嘜a嘮a喚a唕a噁a嘖a啗a嚙a嘯a囀a嗇b啣a囉a噴a嘍a嚳a噯a囁a嚶a噓a囑a嚕a嚻a囅a呂b囂b","耳":"6:聖b聼a聲b聞c聳b聶b職a聹a聾b聯a聰a聵a聽a","几":"2:処c凴b","爻":"4:爾b","女":"3:嬭a姦b婦a妝a媽a媯a嫗a娬a姪a姍a婭a嬌a嬈a婁b孌b嫋a娛a媧a孃a嫺a嬰a嬋a嬸a媼a嬡a嬪a嬙a嬾b嬤a妳a嫵a嬀a奼a","巾":"3:帥a師a幃a帳a幟a帶a幀a幫a幬a幗a幘a幣a","頁":"9:頭a頂a頃a顯a類a頇a項a順a須a頫a頑a頊a頓a顧a頒a預a頌a頎a頏a顱a頸a領a頗a頡a頰a頦a頜a頷a頤a頻a願a顆a顓a顏a顎a題a額a顳a顢a顙a顛a顥a顫a顬a顰b顴a頹a","刂":"2:劄a劉a劃a則a創a剛a剋c別a剄a刪a剴a劊a劌a劑a剎a剮a劇a剝a剷a劍a","戈":"4:戔b戯a戧a戰a戩a戲a","扌":"3:撲a扡a擴f捫a揚a掃a拋f擾a摳a撫a搶a摺a摶a掄a擬a捲a擡a攏a擔a攔a擁a揀a擰a擇a撥a搆a捨a掛a撻f撾f挾a掙a擋a撟a揮a撓a擠a揹a撈a損a搗a換a撿a摑a據a擲f撚a擄a撣a摜a摻a摣a攙a擱a攬a搇a摟a攪a攄a搖a擺a擕a攝a擯a攤f攖a搾a攆a撐a擼a擷a攛a擻f攜a攢a撳h","氵":"3:漢a滅d沖a決a沍a湯d汙a況a滷d溝a沒d灃a漚a瀝f淪a洶a滄a溈a氾a滬a淨a瀧d瀘d洩d淚a濘d瀉a濼a潑a涇a澤a淺a灑a浹a澆a潔d瀏f濁a濟a測a澮a湞a渾a滸f濃a潯a滻a濜d淩a涼d準f澇a湧a渦a濬a潿a濤a漣f滌f渙a澗a漲f潤a淶a澀d涖f減a湊a淵a漬d漸a澱a淥a瀋a漁a澠a滲a灣a溫a溼a潰a濺f漵f滯a潟a濶a湣a灧f潷a灄d濫a瀅a滾d灤d灘f灕f滿a濱a瀠a瀲d瀟a濰f瀦f潛d瀾d澂f瀨f瀕f灝f濾a潙a瀆a灩h","止":"4:歸a歷d歲b","礻":"4:禮a祐a禕a禰a祕a禎a禱a禍a祿a禪a","竹":"6:節b籲a簾b範b篤b籥b筧b筆b筍b籠b籩b箠b築b篳b箏b篩b篠b簽b籌b簡b簑b籮b篋b篛b簞b籜b簫b簍b簣b籃b籬b簷b籪b籐b籟b箋b籤b","辶":"3:遼c邊c達c邁c過c遷c還c進c違c運c這c連c遲c遠c週c遝c迆c邇c適c選c遜c邐c遞c邏c遊c遺c遙c逕d迴d","車":"7:軋a軍b軌a軔a軒a軛a輪b轉b軟b轟d軻b轤b軲b軤b軹a軸b軼b轢b軫b軺b輕b輓b輊b軾b輇b載b輅b轎b較b輔b輒a輛b輦d輞b輥b輩d輟b輜b轂b輳b輸b輻b輯b轡d輿d轄b轅b輾b轆b轔b轍b輝b","飠":"8:飢a餳a餘a飪a飩a餼a飭a飯a飫a飲a餚a飴a飽a飼a飾a餞a養b饒a餌a餃a餅a餉a餄a餎a餑a餓a餒a餡a餛a餜a餵a饗b餷a餿a饞a餽a饃a餾a饈a饉a饅a餱a饌a饜b饊a饢a饑a館a饋a餈b","爫":"4:爭b爲b","一":"1:丟d並d兩d","二":"2:亙d亞d","貝":"7:買b貞b貟b負a貢b財a賣b賢b責b賬a販a貪b貨b質b購a貧b貯a貶a貫b貳b賤a貴b貰b貼a賁b貸b貺a貿b貽a費b賀b賓b贄b賃b賊a貲b資b賂a賅a賄a賍a賈b賮b賕a賑a賚b賒a賸a賫b贖a賞b賡b賜a賠a賧a賦a賴a簀b贅b賻b賺a賽b賾a贈a贋c贇b贍a贏b贛b賭a贊b贓a贐a贗d","生":"5:產b","夕":"3:夥a夠a夢b","目":"5:眾b睏a眎a瞘a眥b睜a睞a瞼a瞞a矚a","辰":"7:農b","水":"4:氹c澩b滎b漿b潁a","十":"2:協a喪b","弓":"3:弔d張a彌a弳a彎b強a彈a","囗":"3:囘c團e圇e園e圍e囪e囯e圖e圓e國e","士":"3:壯a壽b壺b","大":"3:奪b夾d奐b奮g奧b奩b","子":"3:孫a學b孿b","田":"5:異b畢b畝a畫b疊b畱b畧b疇a當b","心":"4:慶b應b憂b慫b態b憲b懟b懕b戀b懇b慇b愛b恥a懸b愨b慼b慾b懲b憊b懣b戇b惡b慮d憑b","米":"6:粬a糴a糶a糲a粵b糞b糧a糢a糝a糉a","石":"5:硃a磯a礦a碭a礬a碼a硨a硯a碸a礱b礪a礫a礎a碩a矽a硤a礄a確a硶a礙a磧a礆a磚a磽a磣a","父":"4:爺b","犭":"3:獷a獁a猶a狽a獰a獨a狹a猙a獄a獅a獪a猻a獫a獲a獵a玀a獼a獺a","火":"4:燈a災b煬a燦a爐a燉a熗a煒a煢a煉a熾a爛a烴a爍a熒b燭a煙a煩a燒a燴a燁a燼a燙b煥a燜a營b燄a煇a煖a煆a炤a燻a燐a燿a","王":"4:璣a瑪a珮a璵a環a瑋a玨a瓏a瑉a琺a璉a瑣a瑯a璡a瓊a琍a瑤a璦a琯a璿a瓔a瓚a","攵":"4:攷a敗a敵a斃b斂a數a敘a","見":"7:觀a覓b親a覘a覺b覽b覬a覜a覡a覿a覦a覯a覲a覰a規a視a覷a","虫":"6:蟲b虯a蝨b蟣a蝦a蠆b螘a蝕a螞a蠔a蠶b蜆a螢b蠱b蠣a蟶a蝟a蛺a蟄b螄a蠻b蠐a蟯a蝸a蛻a蠟a蟈a蠅a蟬a蠑a螻a蠍a蟎a蟻a","乚":"1:亂a","鹿":"11:麗c麅c","身":"7:躰a軀a","冫":"2:凍a凃a凟a凜a","殳":"4:毉b殼a毆a毀a殺a","犬":"4:獃a狀a獎b獸a獻a","卩":"2:卻a卹a","爿":"4:牀a牆a","欠":"4:歟a歐a欽a歡a","歹":"4:殲a歿a殤a殘a殞a殮a殫a殯a","穴":"5:竈b窮b窪b竊b竅b窯b竄b窩b窺b竇b窶b","疒":"5:癤c療c瘧c癘c瘍c瘡c癧c瘋c癥c癰c痙c癢c瘂c癆c瘓c癇c瘉c癡c癉c痺c瘞c瘺c痠c癱c癟c癭c癮c癩c癬c癲c痾d瘻d","禾":"5:禿b穀a稈a種a秈a積a稱a稭a穢a稜a稅a穌a稟b穎a穨a穩a穡a穭a","难检字":":羋d龜b","月":"4:腸a膚b脹a脅b膁a腫a腎b脩a膽a腖a朧a脛a脈a臚a脣b臍a膠a膾a腦a膿a臟a腳a脫a腡a臉a臘a膃a膩a臏a臒a","衣":"6:裏b製b袞a襲b褻b裝b","攴":"4:敺a敍a","亠":"2:兗b","己":"3:凱a巹b","風":"9:颳c颮c颯a颶c颼c飃c飈c飆c飄a","厶":"2:參b","龍":"16:龐c龕b龔b","牜":"4:牴a犧a犢a","斤":"4:斬a斷a","髟":"10:鬆b髩b鬢b","毛":"4:氂a氈a毧c毬c毿a氌c","瓦":"4:甌a甕b甖b","见":"4:現a","聿":"6:肅b","骨":"9:骯a骾a髏a髖a髕a體a髒a","艮":"6:艱a","鬯":"10:鬱b","隶":"8:隷a隸a","片":"4:牐a牋a牘a","玄":"5:玆a","里":"7:釐b","鹵":"11:鹹a鹽b鹼a鹺a","鬥":"10:鬨c鬮c鬩c鬧d","音":"9:響b韻a","彡":"3:彥b彫a","黑":"12:點a黨b黴a黷a黲a","牛":"4:牽b犖b犛b","立":"5:竪b競a","罒":"5:罰b罵b罷b羆b羈b羅b","舟":"6:艤a艙a艦a艫a","走":"7:趙c趕c趨c趲c","足":"7:跡a躉a躍a蹌a躒a蹠a踐a蹕a躚a蹺a躋a躂a踡a踴a躊a躑a蹤a躓a躡a蹣a躕a躥a躪a躦a","覀":"6:覈b","齊":"14:齋b齏b齎b","车":"4:琿a","豸":"7:貍a貓a","皮":"5:皰a皺a皸a","自":"6:臯b","色":"6:艷a","缶":"6:缽a罌b","豕":"7:豬a","白":"5:皚a皁b","矢":"5:矯a","羊":"6:羥a羶a羣b","舌":"6:舘a舖a","麥":"11:麩a","黄":"11:黃b黌a","金":"8:鑿b鎣b鋻b鍫b鑾b鏨b","示":"5:禦b","工":"3:巰a","冖":"2:冪b","肉":"6:臠b","角":"7:觴a觸a觶a","采":"8:釋a","耒":"6:耡a耮a耬a","青":"8:靚a靜a","韋":"9:韓a韙a韞a韜a韝a韌a","魚":"11:魷a魴a魯b鮁a鱸a鮒a鮑a鮃a鮎a鮐a鱟a鮮a鮫a鮚a鮭a鮞a鮪a鱭a鯗b鱘a鱺a鰱a鰷a鰹a鰣a鮌a鯉a鯇a鯊b鯽a鯖a鯤a鯫a鯢a鯛a鯪a鯧a鯝a鯨a鯡a鯔a鯴a鯰a鰌a鰓a鰈a鱝a鰒a鯿a鰐a鰉a鰠a鰲b鰭a鰩a鰥a鰨a鰻a鰵a鱈a鱉a鰳a鰾a鱅a鱖a鱓a鱒a鱗a鱧a鯀a鯁a鰍a鱷a鱔a","黽":"12:黿b鼉b","尢":"3:尲c尷d","谷":"7:谿a","面":"9:靦a靨c","而":"6:耑b","钅":"5:镟a","血":"6:衊a衆b","鬼":"9:魘c魎c","文":"4:斕a","彑":"3:彜b","鼻":"14:齇a","鼠":"13:鼴a","干":"3:幹a","至":"6:臺c","弋":"3:弒a"}');
    }, function(j) {
      j.exports = JSON.parse('{"銼":"QWWF","蔣":"ANHF AUQF","萬":"AJMY","塼":"FGJF","詆":"YQAY","鎸":"QWYE QWYB","厰":"DIMT","臥":"AHNW","兒":"VQB EQB","幾":"XXDT XXAW","廼":"SPD","個":"WLDG","麼":"YSSX OSSX","蔔":"AQGL","璽":"GWMY","義":"UGTT UGTY","習":"NRF","於":"YWUY","鄉":"XTYB","億":"WUJN","虧":"HAWN HWYN","韆":"AFSP","衛":"TNHH TNKS","屍":"NGQX","乾":"FJTN","門":"UHNG","廣":"YAMW OAMW","與":"WFGW EGNW","醜":"SGRC","專":"GJHF","馬":"CGHY COI","為":"YTNO","豐":"DHDU MDHU","飛":"NUTH NURH","烏":"WNGO QOI","雲":"FFCU","倉":"WYVK","書":"VFJF","內":"MTYI","僅":"WAKG","僕":"WOGY WOUG","侖":"WGMA","鳳":"MDHO WGQO","從":"TWWH","昇":"JTAJ","岡":"MUMK","兇":"QBQB RBQB","區":"AKKK","勻":"QFD","辦":"ULUH UEUH","厛":"DKRK","勸":"AKKL AKKE","雙":"WYWC","厤":"DTTI","戶":"RND TNE","伕":"WFWY WGY","無":"RLGO TGLO","憶":"NUJN","計":"YFH","鬥":"HGGH","開":"UGAK","見":"HQB","訂":"YSH","藝":"AFWC","氣":"RNOU ROI","紥":"RNXI","鄧":"WGKB","長":"DEU","隊":"BUEY","認":"YVYN","訃":"YHY","車":"LGHH","貝":"MHNY","閂":"UGD","韋":"NHKH NKGJ","風":"MTJI WTJI","業":"OGUW OUFU","東":"GJII SJD","鉅":"QANG","絲":"XXIY","叢":"OGUC OUFC","們":"WUG","蘭":"AUGI AUSL","樂":"XRXS RXXS","儀":"WUGT WUGY","鼕":"FKUU","冊":"MAK","馮":"UCY UCOY","芻":"QBTT","寫":"PVQO PEQO","佔":"WHKG","齣":"HWWK HBQK","擊":"LBMR LBWR","勱":"AJML AJME","發":"WXMC WXWC","厲":"DAJY","盧":"HALL HLLD","衹":"PUQA","葉":"AANS","嘰":"KXXT KXXW","聖":"BKGF","務":"CBTL CNHE","號":"KGNM KGNW","檯":"SFKF","処":"TMV TWV","嘆":"KAKW KAKG","爾":"GWMQ GWMR","嬭":"VGWQ VGWR","帥":"WNNH TNMH","對":"OGUF OUGF","寧":"PNLS","頭":"GKUM","佈":"WDMH","劄":"TWGJ","匯":"AIWY","戔":"AAR AAU","撲":"ROGY ROUG","術":"TSYH TSYS","漢":"IAKW IAKG","舊":"AWYV AWYE","滅":"IDGT IDGO","歸":"WNNH TNHH","禮":"PYMU","電":"FJNB","訌":"YAG","討":"YFY","訕":"YMH","訐":"YFH","糾":"XNHH","節":"TVCB TVBJ","訓":"YKH","訖":"YTNN","議":"YUGT YUGY","訊":"YNFH","記":"YNN","遼":"DUJP","軋":"LNN","閃":"UWI","讓":"YYKE","飢":"WYVM WVWN","鄺":"YAMB OAMB","邊":"THPP","鳥":"WVGO QOI","喬":"TDKK","譏":"YXXT YXXW","爭":"EVHJ","馭":"CCY COCY","丟":"GCU","亙":"GHNG","買":"LMU","產":"YDTG","龍":"UEGD","亞":"GHGG GFGD","倣":"WYTY","會":"WGLJ","夥":"JSQQ","眾":"LWWY LWWW","價":"WSMY","優":"WDET","傴":"WAKK","傘":"WWWF","傳":"WGJF","倀":"WDEY","傖":"WWYK","傷":"WTJR","佇":"WPSH","偽":"WYTO","偉":"WNHH WNKG","倫":"WWGA","興":"WFMW EMGW","関":"UUDI","沖":"IKHH","農":"MADE","決":"INWY","劉":"QYVJ","鳧":"WVGM QOWB","沍":"IGXG","軍":"PLJ","劃":"VFLJ","氹":"NII","則":"MJH","創":"WYVJ","華":"AGAF AGAG","剛":"MUMJ","厙":"DLK","協":"FLLL FEEE","厭":"DJED","動":"TGJL TGJE","壓":"DJEF","籲":"TWGM","弔":"XHK","喫":"KDHD","郃":"WGKB","嚇":"KFOO","嚮":"XTYK","囘":"MNV","場":"FJGR","嗎":"KCY KCOY","壯":"NHDF UFG","後":"TXTY","團":"LGJF","誇":"YDFN","壙":"FYAW FOAW","奪":"DWYF","姦":"VVVF","婦":"VVPH","妝":"NHDV UVG","孫":"BTXI","尋":"VAKF","儘":"WVHL","導":"UTHF","媽":"VCY VCOY","堯":"FFFQ","塵":"YNJF OXXF","豈":"MGKU","夾":"DWWI","嶼":"MWFW MEGW","嵗":"MDGT MDGH","並":"UOGF UOF","師":"WNNH TNGH","異":"LAWU","莊":"ANHF AUFF","戯":"HAOA HOAY","儅":"WIPL","託":"YTAN","扡":"RBN","鞏":"AMYF AWYF","慶":"YNJT ONNT","釦":"QKG","懺":"NWWG","擴":"RYAW ROAW","執":"FUFY","粬":"OMAG","捫":"RUG","揚":"RJGR","掃":"RVPH","樸":"SOGY SOUG","硃":"DRIY DTFY","畢":"JAFK JAGK","湯":"IJGR","權":"SAKY","爺":"WQBB WRBB","獷":"QTYW QTOW","燈":"OWGU","汙":"IGFH","懽":"NAKY","襍":"PUWS","機":"SXXT SXXW","璣":"GXXT GXXW","紆":"XGFH","約":"XQYY","紂":"XFY","級":"XEYY XBYY","紅":"XAG","縴":"XYXH XYXG","紇":"XTNN","紈":"XVYY","獁":"QTCY QTCO","纊":"XYAW XOAW","紀":"XNN","攷":"GNTY","網":"XMUN","觀":"AKKQ","蟲":"JJJU","詎":"YANG","謳":"YAKK","訝":"YAHT","講":"YFJF YAMF","諱":"YNHH YNKG","訛":"YWXN","訥":"YMWY","許":"YTFH","薌":"AXTB","諷":"YMTJ YWTJ","論":"YWGA","訪":"YYN YYT","設":"YMCY YWCY","訟":"YWCY","軌":"LVN","訣":"YNWY","達":"FUDP FUPK","貞":"HMU","釓":"QNN","鄔":"WNGB QOBH","邁":"AJMP","過":"MNMP","閉":"UFTE","遷":"SDNP","問":"UKD","釔":"QNN","閆":"UDD","堦":"FXXR","陣":"BLH","陰":"BWYC","闖":"UCI UCOI","陽":"BJGR","餳":"WYVR WVJR","頁":"DMU","馴":"CKH COKH","馱":"CDY CODY","馳":"CBN COBN","貟":"CMU","兩":"GMHY","嚴":"KKDT","齊":"YVUF YJF","畝":"YLQY","餘":"WYVT WVWS","祐":"PYDK","亂":"ECMN","麗":"GMYX","躰":"TMDG","僉":"WGKW","彿":"TXJH","剋":"DQJK","兌":"WKQB","況":"IKQN","別":"KQJH","剄":"GVAJ","傭":"WYVH WOVH","刪":"MAJH","勁":"GVAL GVAE","鉋":"QQNN","滷":"IHLO","勵":"DAJL DAJE","勞":"OOPL OOPE","凍":"UGJI USJG","縣":"HITI","毉":"ATDW","吳":"KNDU","噸":"KGBM","獃":"MGKD","啓":"YNTK","唚":"KVPC","吶":"KMTY","嘸":"KRLO KTGO","唄":"KMY","聼":"NBFN","卻":"WWKB","嚦":"KDTH","員":"KMU","嘔":"KAKK","紉":"XVYY","囈":"KAFC","嗚":"KWNO KQOY","咼":"MNMK","嗆":"KWYK","睏":"HLSY","圇":"LWGA","園":"LFKE","堅":"AHNF","阬":"BYMN BYWN","壞":"FYLE","阯":"BHG","圍":"LNHH LNKG","墰":"FSJH","負":"QMU","塢":"FWNO FQOY","塊":"FRQC","墳":"FFAM","壢":"FDTH","垻":"FMY","聲":"FNMB FNWB","墜":"BUEF","殼":"FPGC","奐":"QMWD","媯":"VYTO","層":"NULJ","嫗":"VAKK","侷":"WNNK","壽":"FNAF","崗":"MMUM","匲":"ADKK","嶇":"MAKK","嶴":"TMOM","島":"WVGM QMK","娬":"VGAH VGAY","峴":"MHQN","嵐":"MMTJ MWTJ","幃":"MHNH MHNG","牀":"NHDS USY","廬":"YHAL OHLL","帳":"MHDE","應":"YWWN OWWN","廡":"YRLO OTGO","庫":"YLK OLK","徹":"TYCT","棄":"YCAS","徬":"TUPY TYUY","張":"XDEY","憮":"NRLO NTGO","懷":"NYLE","愾":"NRNO NROY","悵":"NDEY","憂":"DEPT","誌":"YFNY","愴":"NWYK","拋":"RDNL RDNE","擾":"RDET","摳":"RAKK","撫":"RRLO RTGO","慪":"NAKK","搶":"RWYK","摺":"RNRG","摶":"RGJF","掄":"RWGA","桿":"SJFH","報":"FUFC","擬":"RXTH","曠":"JYAW JOAW","時":"JFFY","條":"WHTS","護":"YAWC","楊":"SJGR","來":"SWWI","槓":"SAMY","歟":"WFGW EGNW","極":"SBKG","溝":"IFJF IAMF","沒":"IQCY","灃":"IDHU IMDU","漚":"IAKK","瀝":"IDTH","榪":"SCY SCOY","殲":"GQWG","淪":"IWGA","洶":"IQQB IQRB","滄":"IWYK","溈":"IYTO","災":"VOU","氾":"IBN","狀":"NHDD UDY","煬":"OJGR","滬":"IYNC","燦":"OHQO","霛":"FXXX","竈":"PWFV PWFX","猶":"QTUG","囪":"TLRY","癤":"UTVB","療":"UDUI","係":"WTXI","狽":"QTMY","窮":"PWTX","緯":"XNHH XNKG","磯":"DXXT DXXW","禿":"TQB","瑪":"GCY GCOY","紕":"XXXN","縱":"XTWH","紗":"XITT","綱":"XMUM","純":"XGBN","納":"XMWY","紙":"XQAN","紜":"XFCY","紛":"XWVN XWVT","綸":"XWGA","紐":"XNFG XNHG","紋":"XYY","蕭":"AVHH AVFJ","紓":"XCBH XCNH","羋":"GKGH HGHG","腸":"EJGR","蘆":"AHAL AHLL","紡":"XYN XYT","葦":"ANHH ANKG","蕪":"ARLO ATGO","藶":"ADTH","萇":"ADEU","虯":"JNHH","蕓":"AFFC","莧":"AHQB","詁":"YDG","蒼":"AWYK","囌":"KAQT","苧":"APSJ","証":"YGHG","訶":"YSKG","補":"PUGY PUSY","識":"YUAJ YYUJ","評":"YGUH YGUF","詐":"YTHF","詛":"YEGG","診":"YWET","謅":"YQBT","詞":"YNGK","詘":"YBMH","訴":"YRYY","譯":"YLFF","詔":"YVKG","貢":"AMU","穀":"FPGC","財":"MFTT","詒":"YCKG","還":"LGKP","軔":"LVYY","軒":"LFH","進":"WYPD","違":"NHKP NKGP","運":"PLPK","這":"YPD","連":"LPK","鄒":"QBTB","裏":"YJFE","郵":"TGAB","鄴":"OGUB OUFB","遲":"NIRP NITP","針":"QFH","釘":"QSH","鄰":"OQAB OQGB","遠":"FKEP","釗":"QJH","釕":"QBH","閏":"UGD","間":"UJD","釙":"QHY","闈":"UNHH UNKG","閔":"UYI","閎":"UDCI","閌":"UYMV UYWV","閑":"USI","悶":"UNI","際":"BWFI","陘":"BGVA","陸":"BFWF","陳":"BGJI BSJG","靭":"AFVY","隴":"BUED","飪":"WYVF WVTF","飩":"WYVN WVGN","餼":"WYVO WVRO","飭":"WYVL WVTE","飯":"WYVC WVRC","敺":"AKKC","飫":"WYVD WVTD","飲":"WYVW WVQW","蓯":"ATWH","暘":"JJGR","麥":"SWWT SWWQ","雞":"EXDY","鳩":"VWVO VQOY","駁":"CQQY CORR","龜":"TMGG TXD","珮":"GMGH GWGH","俠":"WDWW","璵":"GWFW GEGW","側":"WMJH","姪":"VGCF","僥":"WFFQ","儈":"WWGJ","喪":"FKKE","偵":"WHMY","儕":"WYVF WYJG","兗":"UKQB","僑":"WTDK","儂":"WMAE","淨":"IEVH","凱":"MGKM MGKW","製":"RMHE TGME","凴":"UCMB UCOW","剴":"MGKJ","劊":"WGLJ","劌":"HDGJ","劑":"YVUJ YJJH","剎":"QSYJ RSYJ","颳":"MTJD WTJD","勢":"FWFL FWFE","單":"KKJF","賣":"FLMU","厠":"DMJK","捲":"RUDB RUGB","匭":"ALVV","週":"MFKP","巹":"BIGN","參":"CCCE","嚀":"KPNS","噝":"KXXI","嚨":"KUED","哢":"KGAH","詠":"YYNI","壟":"UEGF","備":"WATE","囯":"LGD","壚":"FHAL FHLL","姍":"VMAH","寶":"PGRM PGTM","圖":"LKFK","奮":"DWYL","寵":"PUED","學":"WFQB ERRB","屜":"NTAN","屆":"NFBK","審":"PTOL","喦":"KKKM","巋":"MWNH MTNH","實":"PXFM PXMU","嶽":"MQTD","嶺":"MWYM","嶧":"MLFF","簾":"TYUO TOUW","崠":"MGJI MSJG","廟":"YFJE OFJE","幟":"MHUJ MHYJ","倖":"WFUF","絃":"XYXY","龐":"YUED OUED","彌":"XGWQ XGWR","廢":"YWXC OWXC","錄":"QXGI QXIY","弳":"XGVA","唸":"KWYN","徴":"TMGT","徑":"TGVA","憐":"NOQH NOQG","戧":"WYVA","慫":"TWWN","擡":"RFKF","懌":"NLFF","態":"CEXN","攏":"RUED","牴":"TRQY CQAY","枴":"SKVN SKVT","擔":"RQDY","攔":"RUGI RUSL","擁":"RYXY","揀":"RGLI RSLG","擰":"RPNS","盃":"GILF DHLF","崐":"MJXX","曇":"JFFC","擇":"RLFF","撥":"RWXC","傑":"WQAS WQGS","斬":"LRH","搆":"RFJF RAMF","鬆":"DESC","闆":"UKKK","梘":"SHQN","樞":"SAKK","楓":"SMTJ SWTJ","櫪":"SDTH","棗":"GMII SMSM","櫃":"SAKM","樅":"STWH","棖":"SDEY","歿":"GQQC","歐":"AKKW","訢":"YRH","梟":"TVGS QSU","毆":"AKKC","瀧":"IUED","瀘":"IHAL IHLL","洩":"IJXT IJNT","遝":"LIPI","淚":"IYND","濘":"IPNS","註":"YYGG","瀉":"IPVO IPEO","濼":"IXRS IRXS","潑":"IWXC","霑":"FIHK","爐":"OHAL OHLL","涇":"IGVA","澤":"ILFF","淺":"IAAT IAAY","燉":"OYBT","熗":"OWYK","煒":"ONHH ONKG","氂":"FITN FTDE","甌":"AKKN AKKY","環":"GLGE","甕":"YXTN YXTY","瑋":"GNHH GNKG","獰":"QTPS","現":"GHQN","畫":"VFLG","瘧":"UHAG","癘":"UAJY","麅":"YNJN OXXN","礦":"DYAW DOAW","碭":"DJGR","礬":"SQQD SRRD","瘍":"UJGR","暢":"JHJR","紲":"XANN","紺":"XAFG XFG","糴":"TYOY","練":"XGLI XSLG","組":"XEGG","紱":"XDCY","稈":"TJFH","綫":"XAAT XAAY","細":"XLG","終":"XTUY","紳":"XJHH","織":"XUAJ XYUJ","碼":"DCY DCOY","絆":"XUFH XUGH","紼":"XXJH","絀":"XBMH","繹":"XLFF","縐":"XQBT","紹":"XVKG","肅":"VHTH VFJK","儸":"WLXY","紿":"XCKG","經":"XGVA","膚":"HALE HLED","餚":"WYVE WVRE","骯":"MEYM MEYW","脹":"EDEY","脅":"LLLE EEEE","艱":"AKFE AKGV","捨":"RWFK","膁":"EUVO EUVW","腫":"ETGF","腎":"AHNE","檾":"OOPS","莖":"AGVA","蘢":"AUED","範":"TLBB","蔦":"AWVO AQOU","蝨":"NFJJ","塋":"OOPF","煢":"OOPF","蘋":"AHIM AHHM","襯":"PUUQ","蟣":"JXXT JXXW","虜":"HALL HLEE","槼":"FWHS GHQS","誆":"YAGG","錶":"QGEY","覓":"EHQB","眎":"HFIY","試":"YAAG YAAY","誄":"YDIY YFSY","詩":"YFFY","詿":"YFFG","詼":"YDOY","誠":"YDNT YDNN","詰":"YFKG","話":"YTDG","詵":"YTFQ","誕":"YTHP","詮":"YWGG","誅":"YRIY YTFY","詳":"YUDH YUH","詣":"YXJG","詫":"YPTA","詢":"YQJG","詬":"YRGK","諢":"YPLH","該":"YYNW","諍":"YQVH","敗":"MTY","賢":"AHNM","責":"GMU","賬":"MDEY","販":"MRCY","貪":"WYNM","貨":"WXMU","質":"RRMU","詡":"YNG","購":"MFJF MAMF","貧":"WVMU","貯":"MPSH","貶":"MTPY","貫":"XFMU XMU","軛":"LDBN","輪":"LWGA","轉":"LGJF","迆":"BPV","軟":"LQWY","邇":"GWMP","轟":"LLLJ","鄶":"WGLB","郤":"WWKB","鄭":"USGB","郟":"DWWB","埰":"FESY","鄆":"PLBH","鬱":"SRME STFE","釷":"QFG","疊":"LLLG","釺":"QTFH","鍆":"QUG","釤":"QET","釩":"QMYY QWYY","釣":"QQYY","釵":"QCYY","釧":"QKH","頂":"SDMY","隷":"FFII","牐":"THGV THGE","陝":"BDTY","閙":"UYMH","飴":"WYVK WVCK","頃":"XDMY","飽":"WYVN WVQN","駛":"CKQY COKR","飼":"WYVK WVNK","飾":"WYVH WVTH","駔":"CEGG COEG","餞":"WYVA WVAA","駕":"LKCU EKCO","駒":"CQKG COQK","駝":"CPXN COPX","騶":"CQBT COQT","駙":"CWFY COWF","驛":"CLFF COLF","駘":"CCKG COCK","駟":"CLG COLG","駐":"CYGG COYG","鳶":"AWVO AYQO","禕":"PYNH PYNG","齒":"HWWB HBJ","鳴":"KWVO KQOY","魚":"QOU","黽":"MGGV XNNG","擧":"WFGR EGNR","儔":"WFNF","變":"XYXT YXXT","親":"USHQ","倆":"WGMY","儷":"WGMX","儼":"WKKT","臨":"AHNK","儉":"WWGW","俁":"WKND","玆":"YXYX","剮":"MNMJ","吒":"KTAN","養":"UDYE UGYV","詭":"YQDB","脩":"WHTE","釐":"FITF FTDF","勛":"KMLN KMET","噅":"KETO","鹹":"HLQT HLOK","敍":"WTHC WGSC","偺":"WTHJ","嚥":"KAUO KAKO","鬨":"HGGW","噠":"KFUP","響":"XTYJ","嘩":"KAGF KAGG","啞":"KGHG KGFG","噦":"KHDT KHDH","噲":"KWGJ","嘵":"KFFQ","嗶":"KJAF KJAG","嚌":"KYVF KYJG","坰":"FMKG","喲":"KXQY","噥":"KMAE","墾":"EEVF EVFF","埡":"FGHG FGFG","壘":"LLLF","堊":"GHGF GFGF","堖":"FVTQ FVTR","薑":"AGLG","塏":"FMGU","獎":"NHDD UQFD","婭":"VGHG VGFG","復":"TTJT","嬌":"VTDK","嬈":"VFFQ","宮":"PKTK","婁":"KGKV LVF","憲":"PGLN","孌":"XYXV YXXV","孿":"XYXB YXXB","嘗":"IPKJ","嶠":"MTDK","巒":"XYXM YXXM","帶":"AQPH","將":"NHDF UQFY","峽":"MDWW","幀":"MHHM","幫":"FFFH","彎":"XYXX YXXX","崢":"MEVH","恆":"NGHG","卹":"TLBH","縂":"XUKN","懟":"OGUN OUGN","彥":"YDER","慟":"NTGL NTGE","愷":"NMGU","懕":"DJEN","惻":"NMJH","掛":"RFFH","戰":"KKJA","惱":"NVTQ NVTR","撻":"RFUP","撾":"RMNP","惲":"NPLH","挾":"RDWW","掙":"REVH","擋":"RIPL","撟":"RTDK","暱":"JAAK","揮":"RPLH","撓":"RFFQ","擠":"RYVF RYJG","晝":"VFJG","檸":"SPNS","梔":"SRGC","標":"SSFI","棧":"SAAT SAAY","檉":"SBKG","棟":"SGJI SSJG","顯":"JXXM","櫳":"SUED","櫛":"STVB","柵":"SMAH","櫟":"SXRS SRXS","樹":"SFKF","櫨":"SHAL SHLL","殤":"GQTR","殘":"GQAA","氫":"RNGA RGVA","灑":"IGMX","澩":"WFQI ERRI","氈":"YLKN YLKE","欄":"SUGI SUSL","窪":"PWIF","浹":"IDWW","澆":"IFFQ","潔":"IDHI","瀏":"IQYJ","濁":"ILQJ","濟":"IYVF IYJG","測":"IMJH","澮":"IWGJ","湞":"IHMY","渾":"IPLH","煉":"OGLI OSLG","滸":"IYTF","濃":"IMAE","點":"LFOK","熾":"OUAJ OYUJ","爛":"OUGI OUSL","墊":"FUFF","潯":"IVAF","牽":"YXPH YXPG","獨":"QTLJ","狹":"QTDW","烴":"OGVA","爍":"OXRS ORXS","猙":"QTEH","獄":"QTYD","獅":"QTWH QTTH","玨":"GGG","獪":"QTWJ","瘡":"UWYK","瓏":"GUED","癧":"UDTH","瑉":"GNAJ","瞘":"HAKK","瘋":"UMTJ UWTJ","猻":"QTBI","琺":"GIFC","硨":"DLH","硯":"DHQN","篤":"TCU TCOU","竪":"AHNU","種":"TTGF","禰":"PYGQ PYGR","竊":"PWTC","類":"ODDM","綁":"XDTB","毧":"TFND EADE","鞦":"AFTO","碸":"DMTJ DWTJ","秈":"TMH","繞":"XFFQ","結":"XFKG","絝":"XDFN","絎":"XTFH XTGS","絢":"XQJG","繪":"XWGJ","絳":"XTAH XTGH","給":"XWGK","絡":"XTKG","統":"XYCQ","絕":"XVCN","罰":"LYJJ","絞":"XUQY XURY","勝":"EUDL EUGE","膽":"EQDY","腖":"EGJI ESJG","揹":"RUXE","朧":"EUED","脛":"EGVA","脈":"EREY","艤":"TEUT TUUY","衚":"TDEH TDES","薦":"AYNO AOGO","臚":"EHAL EHLL","蕘":"AFFQ","繭":"AMHJ","薈":"AWGJ","蓽":"AJAF AJAG","莢":"ADWW","荊":"AGAJ","薺":"AYVF AYJF","蕎":"ATDK","葷":"APLJ","熒":"OOPO","榮":"OOPS","滎":"OOPI","犖":"OOPH OOPG","盪":"IJGL","蕁":"AVAF","蓀":"ABTI","葒":"AXAF","藎":"AVHL","蕒":"ALMU","廕":"YBWC OBWC","葯":"AXQY","蝦":"JNHC","雖":"KJWY","葤":"AXFU","蠆":"AJMJ","螘":"JMGU","蝕":"WPJY WVJY","覘":"HKHQ","襖":"PUTD","誡":"YAAH","螞":"JCY JCOY","覺":"WFQQ ERRQ","語":"YGKG","誚":"YIEG","誤":"YKGD","誘":"YTEN YTBT","誣":"YAWW","誑":"YQTG","誨":"YTXU YTXY","誥":"YTFK","覽":"AHNQ","說":"YWKQ","誒":"YCTD","貳":"AFMI AFMY","誦":"YCEH","賤":"MAAT MAAY","貴":"KHGM","貰":"ANMU","貼":"MHKG","賁":"FAMU","貸":"WAMU WAYM","貺":"MKQN","貿":"QYVM","趙":"FHIE","貽":"MCKG","費":"XJMU","軻":"LSKG","賀":"LKMU EKMU","轤":"LHAL LHLL","軲":"LDG","軤":"LTUH LTUF","軹":"LKWY","軸":"LMG","軼":"LRWY LTGY","轢":"LXRS LRXS","軫":"LWET","軺":"LVKG","輕":"LGVA","適":"UMDP YUMP","跡":"KHYO","酈":"GMYB","選":"NNAP","鈣":"QGHN","鄖":"KMBH","鈈":"QGIY QDHY","鐘":"QUJF","遜":"BTXP","鈑":"QRCY","鈦":"QDYY","鈐":"QWYN","鋼":"QMUM","鈉":"QMWY","鈍":"QGBN","欽":"QQWY","鋇":"QMY","鈞":"QQUG","籥":"TWGA","鈁":"QYN QYT","鈥":"QOY","鈧":"QYMN QYWN","鈎":"QQCY","鈄":"QUFH","鈕":"QNFG QNHG","聞":"UBD","鎢":"QWNO QQOY","鈀":"QCN","閨":"UFFD","闥":"UFUP","閣":"UTKD","閥":"UWAE UWAI","隕":"BKMY","頇":"FDMY","靣":"DLKF","險":"BWGW","隉":"BVAG BEAG","閩":"UJI","閡":"UYNW","項":"ADMY","順":"KDMY","颮":"MTJN WTJN","饒":"WYVQ WVFQ","餌":"WYVB WVBG","須":"EDMY","餃":"WYVQ WVUR","颯":"UMTJ UWTJ","餅":"WYVA WVUA","餉":"WYVK WVTK","驊":"CAGF COAG","驍":"CFFQ COFQ","驕":"CTDK COTK","罵":"LCU LCOU","駢":"CUAH COUA","駱":"CTKG COTK","鷗":"AKKO","駭":"CYNW COYW","鴉":"AHTO","滻":"IUTG","鴆":"PQWO PQQO","濜":"IVHL","鴇":"XFWO XFQO","餄":"WYVK WVWK","餎":"WYVK WVTK","嫋":"VXUU","頫":"IQDM QIDM","闓":"UMGU","債":"WGMY","淩":"IFWT","悽":"NGVV","涼":"IYIY","塚":"FPEY FPGY","準":"IWYF","劇":"HAEJ HGEJ","傾":"WXDM","脣":"DFEE","剝":"XGIJ XIJH","嗩":"KIMY","黨":"IPKO","嘜":"KSWT KSWQ","嘮":"KOOL KOOE","圓":"LKMI","壺":"FPHG FPFG","喚":"KQMD","塤":"FKMY","塒":"FJFF","娛":"VKND","堝":"FMNK","媧":"VMNK","孃":"VYKE","唕":"KRFH","嫺":"VUEG","賓":"PGIM PGHM","傢":"WPEY WPGE","崍":"MSWW","戀":"XYXN YXXN","嶗":"MOOL MOOE","蓆":"AYAH AOAH","悅":"NWKQ","幬":"MHFF","噁":"KGHN KGFN","寬":"PAHY","徠":"TSWW","慳":"NAHF","懇":"EEVN EVNU","攣":"XYXR YXXR","憫":"NUYY","摯":"FUFR","撈":"ROOL ROOE","輓":"LQKQ","損":"RKMY","搗":"RWVM RQMH","梱":"SLSY","敵":"UMDT YUMT","晉":"GCCJ","傚":"WUQT WURT","曉":"JFFQ","換":"RQMD","撿":"RWGW","暈":"JPLJ","曄":"JAGF JAGG","棲":"SGVV","暉":"JPLH","曬":"JGMX","覈":"SRYT","樣":"SUGI","欒":"XYXS YXXS","慄":"NSSY","齋":"YVUI YJIU","棬":"SUDB SUGB","椏":"SGHG SGFG","檔":"SIPL","楨":"SHMY","橋":"STDK","檜":"SWGJ","榿":"SMGU","橈":"SFFQ","慇":"RVNN","樺":"SAGF SAGG","斃":"UMIX ITGX","槳":"NHDS UQFS","樁":"SDWV SDWE","氬":"RNGG RGFG","澇":"IOOL IOOE","凃":"UWTY UWGS","湧":"ICEL ICEE","漿":"NHDI UQFI","渦":"IMNK","濬":"IHPH","潿":"ILNH ILNG","濤":"IFNF","漣":"ILPY","滌":"IWHS","渙":"IQMD","澗":"IUJG","漲":"IXDE","燭":"OLQJ","煙":"OSFG","潤":"IUGG","煩":"ODMY","淶":"ISWW","燒":"OFFQ","澀":"IVYH","熱":"FWFO","獫":"QTWW","燴":"OWGJ","犧":"TRUT CUGY","燁":"OAGF OAGG","琿":"GPLH","畱":"GAJL GJAL","燼":"OVHL","燙":"IJGO","貍":"EEJF EJFG","癥":"UTMT","癰":"UVKY","愛":"EPNT","皰":"HCQN BQNN","盞":"AALF","痙":"UGVA","礱":"UEGD","皺":"QBTC QBTB","礪":"DDAY","監":"AHNL","離":"YBMY YRBY","臯":"THIF","祕":"PYNT","礫":"DXRS DRXS","積":"TGMY","鹽":"AHNL","禎":"PYHM","礎":"DSSH","竅":"PWRT","稱":"TEMF","綆":"XGJQ XGJR","競":"UKQQ","絹":"XKEG","綏":"XEVG","筧":"THQB","繼":"XXXN","筆":"TVFH TVGJ","緊":"AHNI","綃":"XIEG","筍":"TQJF","罷":"LCEX","聳":"TWWB","恥":"BNY","綉":"XTEN XTBT","聶":"BBBF","臍":"EYVF EYJG","膠":"ENWE","膾":"EWGJ","腦":"EVTQ EVTR","膿":"EMAE","臟":"EADT EAAH","絛":"WHTI","綈":"XUXT","艙":"TEWK TUWK","艷":"DHDC MDHC","蓧":"AWHS","蓮":"ALPU","涖":"IWUG","萵":"AMNK","蒔":"AJFF","艦":"TEAL TUAL","獲":"QTAC","萊":"ASWW","緻":"XGCT","蕕":"AQTG","薟":"AWGW","瑩":"OOPY","蒓":"AXGN","蠔":"JYPE","蠶":"AQAJ","覬":"MGKQ","襪":"PUAT PUAW","諸":"YFTJ","鶯":"OOPO","諾":"YADK","袞":"UKEU","諏":"YBCY","蜆":"JHQN","讀":"YFLM","請":"YGEG","誹":"YDJD YHDD","課":"YJSY","諛":"YVWY YEWY","諑":"YEYY YGEY","調":"YMFK","諉":"YTVG","諗":"YWYN","諒":"YYIY","諄":"YYBG","誰":"YWYG","諂":"YQVG YQEG","贄":"FUFM","誼":"YPEG","誶":"YYWF","談":"YOOY","賃":"WTFM","賊":"MADT","貲":"HXMU","資":"UQWM","賂":"MTKG","賅":"MYNW","賄":"MDEG","賍":"MYFG MOFG","趕":"FHJF","輊":"LGCF","躉":"AJMH","軾":"LAAG LAAY","賈":"SMU","輇":"LWGG","賮":"VHGM","載":"FALK","輅":"LTKG","邐":"GMYP","鈺":"QGYY","鄲":"KKJB","鉗":"QAFG QFG","鈷":"QDG","鉦":"QGHG","遞":"RHAP RHWP","轎":"LTDK","鈸":"QDCY","缽":"RMSG TFBG","較":"LUQY LURY","鈳":"QSKG","鉆":"QHKG","鈽":"QDMH","鉬":"QHG","鉭":"QJGG","鉀":"QLH","鉄":"QRWY QTGY","鉕":"QAKG","鈿":"QLG","鉞":"QANT QANN","鉑":"QRG","鈾":"QMG","鈰":"QYMH","鑠":"QXRS QRXS","鈴":"QWYC","鉈":"QPXN","鉉":"QYXY","鉍":"QNTT","鉚":"QQTB","鈹":"QHCY QBY","鐸":"QLFF","閫":"ULSI","閬":"UYVE UYVI","閱":"UWKQ","鈮":"QNXN","頑":"FQDM","鉛":"QMKG QWKG","雋":"WYMM WYHN","鬮":"HGGG HGGX","頊":"GDMY","頓":"GBNM","顧":"YNWM","難":"AKFY AKGY","頒":"WVDM","預":"CBDM CNHM","餑":"WYVB WVFB","頌":"WCDM","頎":"RDMY","頏":"YMDM YWDM","餓":"WYVT WVTY","餒":"WYVV WVEV","驪":"CGMX COGX","騐":"CWYN COWN","鴣":"DWVO DQOY","駿":"CCWT COCT","騁":"CMGN COMN","鶇":"GJIO SJQO","鴦":"MDWO MDQO","鸕":"HALO HLLO","鴨":"LWVO LQOY","鴝":"QKWO QKQO","鴟":"QAYO","鷥":"XXIO","齔":"HWWX HBXN","鴛":"QBWO QBQO","鴕":"WVGX QOPX","傯":"WTLN","偸":"WWGB","僂":"WLVG","鴞":"KGNO","獸":"KKLD","減":"IDGT IDGK","償":"WIPM","僨":"WFAM","龕":"WGKD","湊":"IDWD","匱":"AKHM","勗":"JEGL JEGE","嘖":"KGMY","廂":"YSHD OSHD","厴":"DJEL","啗":"KQVG KQEG","嚙":"KHWB KHBH","廄":"YVCC OVWC","垵":"FPVG","嘯":"KVHH KVFJ","塹":"LRFF","囀":"KLGF","墮":"BDAF","嗇":"FWWK","嬰":"MMVF","夠":"QQQK","幗":"MHLG","嬋":"VKKF","嶄":"MLRJ","菴":"ADJN","綵":"XESY","嬸":"VPTL","懸":"HITN","驚":"AQKC AQKO","慘":"NCCE","懼":"NHHY","幘":"MHGM","慙":"LRNU","慣":"NXFM NXMY","摑":"RLAG","據":"RHAE RHGE","愨":"FPGN","擲":"RUSB","撚":"RQDO","愜":"NADW","慼":"DHIN","擄":"RHAL RHLE","撣":"RKKF","斂":"WGKT","憚":"NKKF","樑":"SIVS","鏇":"QYTH","摜":"RXFM RXMY","摻":"RCCE","櫺":"SFKK","斷":"XXGR","殞":"GQKM","夢":"ALPQ","淵":"ITHH IJGG","檢":"SWGW","慾":"WWKN","漬":"IGMY","漸":"ILRH","殮":"GQWW","澱":"INAC","淥":"IXGI IXIY","凟":"UFLM","瀋":"IPTL","獵":"QTVN","煥":"OQMD","燾":"FNAO","漁":"IQOY","澠":"IMGV IXG","玀":"QTLY","釬":"QFH","獼":"QTXQ QTXR","燜":"OUNY","滲":"ICCE","畧":"LTKF","癢":"UUDE UUGV","璉":"GLPY","豬":"EFTJ GEFJ","毬":"TFNY EGIY","皚":"RMGU","瘂":"UGHG UGFG","貓":"EEAL EALG","瑣":"GIMY","瑯":"GYVB","盜":"IQWL","眥":"HXHF","皸":"PLHC PLBY","蓋":"AFCL","著":"AFTJ","槃":"TEMS TUWS","覜":"IQHQ QIHQ","矯":"TDTK","睜":"HEVH","碩":"DDMY","禱":"PYFF","墝":"FFFQ","矽":"DQY","稭":"TXXR","穢":"THDT THDH","硤":"DDWW","禍":"PYMK","窯":"PWUO","糶":"BMOY","籠":"TUED","牋":"THGA","糲":"ODAY","纍":"LLLI","籩":"TTHP","勣":"GMLN GMET","緒":"XFTJ","緋":"XDJD XHDD","續":"XFLM","緔":"XIMK","綾":"XFWT","綽":"XHJH","綺":"XDSK","綬":"XEPC","繩":"XMGV XXG","綹":"XTHK","維":"XWYG","綿":"XRMH","緄":"XJXX","綢":"XMFK","綣":"XUDB XUGB","綳":"XEEG","綰":"XPNN XPNG","綜":"XPFI","綻":"XPGH","綠":"XXGI XXIY","綞":"XTGF","綴":"XCCC","羥":"UDGA UGVA","職":"BUAJ BYUJ","緇":"XVLG","聹":"BPNS","腳":"EWWB","蔆":"AIFT","脫":"EWKQ","腡":"EMNK","聾":"UEGB","縈":"OOPI","臉":"EWGW","螢":"OOPJ","營":"OOPK","蠱":"JJJL","蘿":"ALXY","蠣":"JDAY","虛":"HANG HJNG","薩":"ABUG","襲":"UEGE","襠":"PUIL","蟶":"JBKG","啣":"KRHB KTGB","釁":"WFMV EMGV","覡":"AWWQ","謀":"YAFS YFSY","訦":"YPQN","諜":"YANS","諧":"YXXR","謔":"YHAG","謊":"YAYQ YAYK","謁":"YJQN","謂":"YLEG","諫":"YGLI YSLG","諼":"YEFC YEGC","諤":"YKKN","諳":"YUJG","諦":"YUPH YYUH","諺":"YUTE","讒":"YQKY","謎":"YOPY","諮":"YUQK","賕":"MFIY MGIY","賑":"MDFE","諞":"YYNA","賚":"SWWM","諭":"YWGJ","軀":"TMDK","輔":"LGEY LSY","賒":"MWFI","躍":"KHNY","輒":"LBNN","醖":"SGJL","銬":"QFTN","輛":"LGMY","蹌":"KHWK","銪":"QDEG","邏":"LXWP","鋮":"QDNT QDNN","鉺":"QBG","鐃":"QFFQ","銅":"QMGK","銱":"QKMH","鋣":"QAHB","鋏":"QDWW","銠":"QFTX","鐺":"QIPL","銦":"QLDY","鎧":"QMGU","鋌":"QTFP","銓":"QWGG","銖":"QRIY QTFY","銑":"QTFQ","銩":"QTFC","鍘":"QMJH","鏵":"QAGF QAGG","鉿":"QWGK","鉻":"QTKG","鎩":"QQSC QRSC","錚":"QQVH","銚":"QIQN QQIY","銘":"QQKG","鉸":"QUQY QURY","銫":"QQCN","銥":"QYEY","剷":"UTTJ","銃":"QYCQ","銣":"QVKG","銀":"QVEY QVY","艫":"TEHL TUHL","銨":"QPVG","閹":"UDJN","鐋":"QIJR","閾":"UAKG","閿":"UEPC","閶":"UJJD","閻":"UQVD UQED","鬩":"HGGQ","閽":"UQAJ","閼":"UYWU","隨":"BDAP","顱":"HALM HLLM","闡":"UKKF","頸":"GVAM","領":"WYCM","隱":"BEAN","餡":"WYVV WVQE","舘":"WFKN","餛":"WYVX WVJX","騎":"CDSK CODK","騏":"CADW CODW","騍":"CJSY COJS","騅":"CWYG COWY","鴰":"TDWO TDQO","鷙":"FUFO","鴯":"DMJO","鵂":"WSWO WSQO","驂":"CCCE COCE","鴻":"IAWO IAQO","蔴":"AYSS AOSS","鸞":"XYXO YXXO","鴿":"WGKO","龔":"UEGW","麩":"SWWW SWWG","黃":"AGMW","礄":"DTDK","諝":"YNHE","璡":"GWYP","囉":"KLXY","褻":"YFWE","餜":"WYVS WVJS","儐":"WPGM","僳":"WSOY","儲":"WYFJ","儻":"WIPO","廈":"YDHT ODHT","廚":"YFKF OFKF","賸":"EUDM EUGM","噴":"KFAM","鑿":"OGUQ OUFQ","嘍":"KKGV KLVG","嚳":"WFQK ERRK","隄":"BJGH","奧":"TMTD","餵":"WYVE WVLE","儺":"WAKY","媼":"VLWL","屬":"NILJ","嶁":"MKGV MLVG","嶸":"MOOS","禦":"TRHI TTGI","巰":"GVAQ GVAK","冪":"PAJH","懲":"TMGN","崳":"MWGJ","強":"XCJY","慍":"NLWL","憤":"NFAM","憒":"NKHM","摣":"RHAG RHEG","攙":"RQKY","憊":"WATN","擱":"RUTK","攬":"RAHQ","搇":"RWYE","蒐":"ARQC","暫":"LRJF","摟":"RKGV RLVG","稜":"TFWT","箠":"TTGF","攪":"RWFQ RERQ","匵":"AFLM","槨":"SYBB","槧":"LRSU","櫂":"SNWY","欏":"SLXY","灣":"IXYX IYXX","橢":"SBDE","溫":"ILWL","溼":"IGXF","遊":"YTBP","毿":"CCCN CCCE","殫":"GQKF","潰":"IKHM","濺":"IMAA","牘":"THGM","燄":"QVOO QEOO","疇":"LFNF","漵":"IWTT IWGT","佘":"WFIU","蝟":"JLEG","滯":"IAQH","癆":"UOOL UOOE","頗":"HCDM BDMY","瓊":"GQMT","犢":"TRFM CFLM","瘓":"UQMD","癇":"UUED","睞":"HSWW","鹼":"HLQW HLOW","祿":"PYXI","確":"DPWY","竄":"PWVN PWEN","禪":"PYKF","瞼":"HWGW","窩":"PWMK","稅":"TWKQ","築":"TAMS TAWS","篳":"TJAF TJAG","粵":"TMTN","箏":"TEVH","緘":"XDGT XDGK","篩":"TWNH TTNH","縶":"FUFI","緙":"XAFH","糞":"OLAW","緗":"XSHG","緹":"XJGH","纜":"XAHQ","緬":"XDMD XDLF","緝":"XKBG","繢":"XKHM","緲":"XHIT","緱":"XWND","緶":"XWGQ XWGR","緩":"XEFC XEGC","緦":"XLNY","縋":"XWNP XTNP","締":"XUPH XYUH","緍":"XQAJ","編":"XYNA","緞":"XWDC XTHC","聯":"BXXG","翹":"FFFN","緣":"XXEY","潟":"IVQO IEQO","羨":"UGIW","蔥":"ATLN","蕆":"ADMT ADMU","醃":"SGDN","蕢":"AKHM","蔞":"AKGV ALVF","臠":"XYXW YXXW","蛺":"JDWW","臘":"EVLN","蟄":"FUFJ","螄":"JWNH JTNH","蠻":"XYXJ YXXJ","蠐":"JYVF JYJG","蟯":"JFFQ","褳":"PULP","襇":"PUUJ","褲":"PUYL PUOL","襝":"PUWW","覿":"FLMQ","裝":"NHDE UFYE","謨":"YAJD","觴":"QMFR QETR","謝":"YTMF","謖":"YLWT","謠":"YQRM YQTB","讜":"YIPO","謙":"YUVO YUVW","諡":"YWGL","賫":"FWWM","贖":"MFLM","賞":"IPKM","謐":"YNTL","謗":"YUPY YYUY","賡":"YVWM OVWM","賜":"MJQR","賠":"MUKG","躒":"KHXS KHRS","蹠":"KHYO KHOO","輦":"FWFL GGLJ","趨":"FHQT","煇":"OPLH","賧":"MOOY","踐":"KHAA","輞":"LMUN","輥":"LJXX","輩":"DJDL HDHL","輟":"LCCC","遺":"KHGP","鐒":"QOOL QOOE","鑄":"QFNF","輜":"LVLG","釋":"TOLF","錸":"QSWW","舖":"WFKY WFKS","鋱":"QANY","鏗":"QAHF","鎖":"QIMY","耡":"DIEL FSEE","鋥":"QKGG","銷":"QIEG","鋰":"QJFG","鍋":"QMNK","鋯":"QTFK","銹":"QTEN QTBT","鏈":"QLPY","鋨":"QTRT QTRY","鋶":"QYCQ QYCK","鉲":"QHHY","鋒":"QTDH","鐧":"QUJG","鋅":"QUH","銻":"QUXT","銳":"QWKQ","錒":"QBSK","鋟":"QVPC","鋃":"QYVE QYVY","僱":"WYNY","闃":"UHDI","濶":"IUTD","鋦":"QNNK","靂":"FDTH","闌":"UGLI USLD","靚":"GEHQ","頡":"FKDM","頰":"DWWM","頦":"YNTM","頜":"WGKM","潁":"XIDM","饗":"XTYE XTYV","餷":"WYVG WVSG","闋":"UWGD","颶":"MTJW WTJW","韓":"FJNH FJNG","餿":"WYVC WVEC","饞":"WYVY WVQY","騗":"YNMC YNMO","魷":"QODN QODY","騖":"CBTC CNHO","騭":"BHIC BHHO","餽":"WYVC WVRC","騷":"CCYJ COCJ","魴":"QOYN QOYT","魯":"QOJF","鵓":"FPBO","賦":"MGAH MGAY","鵒":"WWKO","鵑":"KEWO KEQO","鵝":"TRNO","鸝":"GMYO","鷳":"UEWO UEQO","鵜":"UXHO","鵠":"TFKO","鵐":"AWWO","黿":"FQMV FQXF","縉":"XGOJ","嬡":"VEPT","噯":"KEPT","寢":"PNHC PUVC","勦":"VJSL VJSE","嬪":"VPGM","翬":"NPLJ","曡":"JJJG","尲":"DNUO DNUW","囁":"KBBB","慴":"NNRG","湣":"INAJ","瘉":"UWGJ","攄":"RHAN RHLN","搖":"RQRM RQTB","擺":"RLCX","擕":"RWYM RWYN","攝":"RBBB","擯":"RPGM","攤":"RAKY","數":"KGKT LVTY","樓":"SKGV SLVG","櫬":"SUSQ","櫸":"SWFH SEGG","煖":"OEFC OEGC","欖":"SAHQ","氳":"RNLL RLWL","霤":"FQYL","轂":"FPGC","毀":"VFMC EFWC","灧":"IDHC IMDC","潷":"ITVH ITVG","灄":"IBBB","谿":"EXDK","濫":"IAHL","瀅":"IOOY","滾":"IUKE","灤":"IXYS IYXS","灘":"IAKY","灕":"IYBY IYRY","煆":"ONHC","滿":"IAMY","癡":"UXTH","濱":"IPGM","炤":"OVKG","獻":"HAGD HGKD","硶":"DMWN","礙":"DXTH","磧":"DGMY","癉":"UKKF","窺":"PWFQ PWGQ","痺":"URTF","穌":"QOTY","稟":"YLKT","篠":"TWHS","簽":"TWGW","竇":"PWFM","糧":"OJGF","籌":"TFNF","縟":"XDFF","縛":"XGEF XSFY","簡":"TUJF","縝":"XFHW","縞":"XYMK","縭":"XYBC XYRC","縊":"XUWL","繽":"XPGM","縫":"XTDP","纏":"XYJF XOJF","齶":"HWWN HBKN","耮":"DIOL FSOE","縑":"XUVO XUVW","靦":"DMJQ DLJQ","膃":"ELWL","懞":"NAPE","膩":"EAFM EAFY","薊":"AQOJ","騰":"EUDC EUGO","簑":"TYKE","蕷":"ACBM ACNM","藍":"AAHL","蘺":"AYBY AYRY","蝸":"JMNK","鎣":"OOPQ","驀":"AJDC AJDO","覦":"WGEQ","譽":"WFGY EGNY","謾":"YJLC","謫":"YUMD YYUD","觸":"QELJ","譾":"YUEN","謄":"EUDY EUGY","蛻":"JWKQ","謹":"YAKG","蹕":"KHJF KHJG","賴":"GKIM SKQM","謬":"YNWE","躚":"KHSP","蹺":"KHFQ","輳":"LDWD","辤":"EPCU","遙":"QRMP QTFP","輸":"LWGJ","輻":"LGKL","酧":"SGPF","輯":"LKBG","闢":"UNKU","躋":"KHYF KHYJ","轡":"XLXK","鍺":"QFTJ","鍩":"QADK","錨":"QALG","錯":"QAJG","醬":"NHDG UQFG","錁":"QJSY","錛":"QDFA","鋻":"AHNQ","錆":"QGEG","醯":"SGYL","鍀":"QJGF","錕":"QJXX","錘":"QTGF","鍃":"QQRN","錦":"QRMH","錮":"QLDG","鑼":"QLXY","錇":"QUKG","錫":"QJQR","錈":"QUDB QUGB","鍁":"QRQW","錐":"QWYG","錠":"QPGH","錳":"QBLG","鍵":"QVFP QVGP","闔":"UFCL","闐":"UFHW","錟":"QOOY","雛":"QBTY","闕":"UUBW","鋸":"QNDG","霧":"FCBL FCNE","錙":"QVLG","韙":"JGHH JGHG","韻":"UJKM","韞":"NHKL NKGL","饃":"WYVD WVAD","頷":"WYNM","穎":"XTDM","頤":"AHKM","頻":"HIDM HHDM","颼":"MTJC WTJC","餾":"WYVL WVQL","穨":"TMKM TWKM","饈":"WYVF WVUG","騮":"CQYL COQL","鮁":"QODC QODY","驁":"GQTC GQTO","騫":"PFJC PAWO","騸":"CYNN COYN","鱸":"QOHL","鮒":"QOWF","鮑":"QOQN","鮃":"QOGH QOGF","鮎":"QOHK","鮐":"QOCK","鱟":"WFQO ERRO","鵪":"DJNO","鵯":"RTFO","鵡":"GAHO","鵲":"AJWO AJQO","鵬":"EEWO EEQO","鶓":"ALWO ALQO","齡":"HWWC HBWC","鶉":"YBWO YBQO","齙":"HWWN HBQN","躂":"KHFP","齟":"HWWG HBEG","願":"DRIM","齠":"HWWK HBVK","廝":"YADR ODWR","嚶":"KMMV","墻":"FFWK","噓":"KHAG KHJG","攖":"RMMV","鄘":"YVEB OVEB","戩":"GCCA","曖":"JEPT","嬙":"VFWK","搾":"RPWF","旂":"YTRH","櫧":"SYFJ","檻":"SAHL","縯":"XPGW","瀠":"IOOI","檳":"SPGM","瀲":"IWGT","糢":"OAJD","殯":"GQPM","瀟":"IAVH IAVJ","橰":"STHF","琍":"GTJH","瘞":"UDWF","濰":"IXWY","瀦":"IEFJ IGEJ","瑤":"GQRM GQTB","瘺":"UNFI","堿":"FDGT FDGK","璦":"GEPT","窶":"PWKV PWLV","耑":"MDMJ","穩":"TEAN","琯":"GPNN GPNG","燻":"OTGO","簀":"TGMU","镟":"QYTH","籮":"TLXY","篋":"TADW","篛":"TXUU","糝":"OCCE","縹":"XSFI","縵":"XJLC","簞":"TKKF","籜":"TRLF","簫":"TVHH TVFJ","纓":"XMMV","縲":"XLXI","甖":"MMGN MMGY","縮":"XPWJ","繆":"XNWE","臏":"EPGM","繅":"XVJS","羆":"LCEO","藺":"AUWY","蘞":"AWGT","薔":"AFWK","輿":"WFLW ELGW","衊":"TLAT TLAW","踡":"KHUB","蠟":"JVLN","藹":"AYJN","蟈":"JLAG","蠅":"JMGV JXG","覯":"FJGQ AMFQ","蟬":"JKKF","譜":"YUOJ","譖":"YAQJ","譙":"YWYO","譚":"YSJH","讕":"YUGI YUSL","贅":"GQTM","譎":"YCBK YCNK","賻":"MGEF MSFY","踴":"KHCL KHCE","躊":"KHFF","轄":"LPDK","賺":"MUVO MUVW","轅":"LFKE","賽":"PFJM PAWM","釀":"SGYE","釅":"SGKT","輾":"LNAE","釃":"SGGX","鍥":"QDHD","鍇":"QXXR","鍔":"QKKN","鏘":"QNHF QUQF","痠":"UCWT","鍤":"QTFV QTFE","鍛":"QWDC QTHC","鍫":"TOQF","鍶":"QLNY","鑾":"XYXQ YXXQ","鎪":"QVHC QEHC","鍰":"QEFC QEGC","鍾":"QTGF","鎂":"QUGD","鎄":"QYEY","鍍":"QYAC QOAC","鐨":"QXJM","顆":"JSDM","闞":"UNBT","鋂":"QTXU QTXY","霽":"FYVF FYJF","饉":"WYVG WVAG","靜":"GEEH","韜":"NHKV NKGE","饅":"WYVC WVJC","鏤":"QKGV QLVG","驃":"CSFI COSI","騾":"CLXI COLI","鮮":"QOUD QOUH","鮫":"QOUQ QOUR","鮚":"QOFK","鮭":"QOFF","鮞":"QODJ","鮪":"QODE","鱭":"QOYF QOYJ","鯗":"UDYO UGQO","鱘":"QOVF","驄":"CTLN COTN","鶘":"DEWO DEQO","鶚":"KKFO","齜":"HWWX HBHX","鶿":"UXXO","鶻":"MEWO MEQO","鶥":"NHWO NHQO","凜":"UYLT","囑":"KNIJ","鶩":"CBTO CNHO","齦":"HWWE HBVY","譆":"YFKK","攆":"RFWL RGGL","襆":"PUOY PUOG","嚕":"KQOJ","撐":"RIPT","屨":"NTKV NTLV","橫":"SAGW","櫻":"SMMV","擼":"RQOJ","潛":"IAQJ","擷":"RFKM","攛":"RPWN","櫫":"EFTS GEFS","瀾":"IUGI IUSL","檣":"SFWK","璿":"GHPH","癱":"UAKY","澂":"IMGT","瓔":"GMMV","癟":"UTHA","簍":"TKGV TLVF","餱":"WYVD WVWD","瞞":"HAMY","纈":"XFKM","簣":"TKHM","繒":"XULJ","耬":"DIKV FSLV","聰":"BTLN","繕":"XUDK XUUK","繚":"XDUI","蘄":"AKKR","聵":"BKHM","蠑":"JOOS","覲":"AKGQ","螻":"JKGV JLVG","襤":"PUAL","觶":"QEKF","蘊":"AXLL","蠍":"JJQW","覰":"HAEQ HEGQ","讞":"YHAD YHGD","譫":"YQDY","賾":"AHKM","譴":"YKHP","躑":"KHUB","鏌":"QAJD","鎘":"QGKH","轆":"LYNX LOXX","蹤":"KHTH","鑷":"QBBB","鎮":"QFHW","躓":"KHRM","鎦":"QQYL","鎰":"QUWL","錼":"QDFI","鎳":"QTHS","鎬":"QYMK","鎊":"QUPY QYUY","靨":"DJED DJEF","黴":"TMGT","韃":"AFFP","鎵":"QPEY QPGE","鑌":"QPGM","鞽":"AFTK","顓":"MDMM","顏":"YDEM","顎":"KKFM","饌":"WYVW WVNW","題":"JGHM","額":"PTKM","飃":"MTJI WTJI","饜":"DJEE DJEV","饊":"WYVT WVAT","鱺":"QOGX","骾":"MEGQ MEGR","驏":"CNBB CONB","鰱":"QOLP","鰷":"QOWS","鰹":"QOAF","魘":"DJEC","鰣":"QOJF","鮌":"QOYX","鯉":"QOJF","鶴":"PWYO","鯇":"QOPQ","鯊":"IITO","鯽":"QOVB","齪":"HWWH HBKH","鎔":"QPWK","齏":"YVUG YJHG","鷂":"ERMO ETFO","鶼":"UVOO UVJO","齬":"HWWK HBGK","譟":"YKKS","廩":"YYLT OYLT","斕":"YUGI YUSL","嬾":"VGKM VSKM","櫥":"SYFF SOFF","擻":"RKGT RLVT","瀨":"IGKM ISKM","氌":"TFNJ EQOJ","懍":"NYLT","櫞":"SXXE","瀕":"IHIM IHHM","櫓":"SQOJ","讌":"YAUO YAKO","癭":"UMMV","籃":"TAHL","穡":"TFWK","繾":"XKHP","繰":"XKKS","籬":"TYBY TYRY","獺":"QTGM QTSM","繮":"XGLG","癮":"UBEN","繯":"XLGE","繳":"XRYT","蟎":"JAMY","藪":"AKGT ALVT","讚":"YTFM","翺":"THIN","轔":"LOQH LOQG","贈":"MULJ","鏨":"LRQF","轍":"LYCT","贋":"DWWM","辯":"UYUH","鏢":"QSFI","鏜":"QIPF","鏡":"QUJQ","顳":"BBBM","彫":"MFKE","鏍":"QLXI","鏑":"QUMD QYUD","鏞":"QYVH QOVH","顢":"AMHM","鏝":"QJLC","顙":"CCCM","鏃":"QYTD","飈":"MTJO WTJO","飆":"DDDJ","顛":"FHWM","鯖":"QOGE","魎":"RQCY","鯤":"QOJX","鯫":"QOBC","鯢":"QOVQ QOEQ","鯛":"QOMK","鯪":"QOFT","鯧":"QOJJ","鯝":"QOLD","鯨":"QOYI","鯡":"QODD QOHD","鯔":"QOVL","鯴":"QONJ","鸚":"MMVO","鯰":"QOWN","鷚":"NWEO","贇":"YGAM","鹺":"HLQA HLOA","鷓":"YAOO OAOO","懣":"IAMN","簷":"TQDY","黌":"WFQW ERRW","檁":"SYLT","矚":"HNIJ","嬤":"VYSX VOSX","燐":"OOQH OOQG","籪":"TXXR","羶":"UDYG UYLG","羈":"LAFC LAFO","贍":"MQDY","鐔":"QSJH","蘚":"AQOD AQOU","繈":"XXCJ","辮":"UXIU","鐝":"QDUW","贏":"YNKY YEMY","躡":"KHBB","蹣":"KHAY","鐐":"QDUI","鑥":"QQOJ","鐓":"QYBT","鏷":"QOGY QOUG","鐠":"QUOJ","鑹":"QPWN","鐙":"QWGU","鑭":"QUGI QUSL","鏹":"QXKJ","驟":"CBCI COBI","鰌":"QOUG","鰓":"QOLN","鰈":"QOAS","鱝":"QOFM","鰒":"QOTT","鯿":"QOYA","鰐":"QOKN","鰉":"QORG","鷦":"WYOO","鰠":"QOCJ","鷯":"DUJO","鷲":"YIDO","齲":"HWWY HBTY","鷸":"CBTO CNHO","嚻":"KKDK","彜":"XGOA XOWA","齷":"HWWF HBNF","癩":"UGKM USKM","囅":"KKJE","籐":"TEUI","鐳":"QFLG","鑊":"QAWC","繙":"XTOL","鋜":"QKHY","鐿":"QUJN","韉":"AFAO","顥":"JYIM","髏":"MEKV MELV","鐮":"QYUO QOUW","鰲":"GQTO","讎":"WYYY","騣":"CQBT CORT","鰭":"QOFJ","鷺":"KHTO","鰩":"QOEM QOEB","鰥":"QOLI","鰨":"QOJN","鷹":"YWWO OWWO","儹":"WTFM","鸌":"WVGC QOAC","癬":"UQOD UQOU","巔":"MFHM","鑔":"QPWI","躕":"KHYF KHOF","纘":"XTFM","讖":"YWWG","籟":"TGKM TSKM","靄":"FYJN","躥":"KHPN","韝":"NHKF NKGF","髖":"MEPY","驥":"CUXW COUW","顫":"YLKM","鰻":"QOJC","髕":"MEPM","鰵":"TXGO TXTO","鱈":"QOFV","鱉":"UMIO ITQO","鰳":"QOAL QOAE","鰾":"QOSI","鑣":"QYNO QOXO","鱅":"QOYH QOOH","燿":"ONWY","鞀":"AFVK","瓚":"GTFM","髩":"DEGN","顬":"FDMM","鱖":"QODW","驤":"CYKE COYE","鱓":"QOKF","灝":"IJYM","癲":"UFHM","鱒":"QOUF","黷":"LFOM","顰":"HIDF HHDF","躪":"KHAY","鼉":"KKLV KKLX","黲":"LFOE","鱗":"QOOH QOOG","贛":"UJTM","鑲":"QYKE","鸛":"AKKO","趲":"FHTM","顴":"AKKM","鱧":"QOMU","齇":"THLG","戇":"UJTN","饢":"WYVE WVGE","臒":"EAWC","躦":"KHTM","鼴":"VNUV ENUV","纔":"XQKY","廠":"YIMT OIMT","繃":"XMEE","幣":"UMIH ITMH","鉢":"QSGG","饑":"WYVT WVXW","鏟":"QUTG","壩":"FFAE","慚":"NLRH","廁":"YMJK OMJK","處":"HATM HTWV","鈔":"QITT","辭":"ECMU","幹":"FJWF","彈":"XKKF","蕩":"AIJR","鋤":"QEGL QEGE","當":"IPKL","賭":"MFTJ","歡":"AKKW","構":"SFJF SAMF","鉤":"QQKG","譁":"YAGF YAGG","惡":"GHGN GFGN","關":"UXXG","礆":"DWGW","輝":"IQPL IGQL","館":"WYVN WVPN","績":"XGMY","劍":"WGKJ","規":"FWHQ GHQN","鑑":"QAHL","箋":"TAAR TAAU","舉":"WFGH EGNG","歷":"DTTH","饋":"WYVM WVKM","階":"BXXR","隸":"SFII","懶":"NGKM NSKM","盡":"VHGL","齧":"DHVB","羅":"LXWY","鬧":"HGGH","靈":"FKKW","闊":"UITD","憑":"UCNU UCON","飄":"SFIJ","騙":"CYNA COYA","鋪":"QGEY QSY","羣":"VTKD VTKU","牆":"NHDK UFWK","槍":"SWYK","盤":"TEML TUWL","鍬":"QTOY","籤":"TWWG","錢":"QAAT QAAY","絨":"XADT","驅":"CAKK COAK","殺":"QSMC RSWC","蘇":"AQOT","歲":"HDGT HDGH","鐵":"QFAG","韌":"NHKY NKGY","視":"PYHQ","壇":"FYLG","懾":"NBBB","臺":"FKPF","爲":"ETNO","塗":"IWTF IWGF","廳":"YBGN OBGN","體":"MEMU","聽":"BGFN","僞":"WETO","豎":"AHNU","頹":"TQDM","銜":"TQFH TQGS","閒":"UED","杴":"SQWY","戲":"HAGA HGKA","線":"XRIY","纖":"XWWG","囂":"KKDK","攜":"RMWK","勳":"TGLL TGLE","繡":"XVHH XVFJ","醫":"ATDG","鏽":"QVHH QVFJ","豔":"DHDL MDHL","鑰":"QWGA","驗":"CWGW COWW","敘":"WTTY WGST","贊":"TFQM","蟻":"JUGT JUGY","醞":"SGLL","巖":"MKKT","皁":"RFJ","雜":"YWWY","蔭":"ABWC","藥":"AXRS ARXS","贓":"MDNT MAUH","證":"YWGU","髒":"MEAA","茲":"AXXU","總":"XTLN","閘":"ULK","鑽":"QTFM","攢":"RTFM","磚":"DGJF","紮":"SNXI","奩":"DAKK","嫵":"VRLO VTGO","潙":"IETO","衆":"TLTI TLIU","釒":"QTYG","嬀":"VETO","奼":"VTAN","逕":"GVAP","犛":"FITH FTDG","崬":"MGJI MSJF","駑":"VCCU VCCO","壎":"FTGO","壠":"FUED","懨":"NDJD","蒞":"AIWU","贐":"MVHL","鞝":"AFIK","蓴":"AGJF","痾":"UBSK","磽":"DFFQ","撳":"RQQW","瀆":"IFLM","櫝":"SFLM","弒":"QSYA RSYY","諶":"YADN YDWN","鐗":"QUEG","齎":"YVUM YJMU","鐦":"QUGA","緡":"XNAJ","鋝":"QEFY","灩":"IDHL IMDL","磣":"DCCE","襉":"PUUE","尷":"DNAL","罌":"MMRM MMTB","餈":"UQWE UQWV","瘻":"UKGV ULVD","鎿":"QWGR","糉":"OQBT ORBT","鎇":"QNHG","覷":"HAOQ HOHQ","鐲":"QLQJ","鯀":"QOTI","鯁":"QOGQ QOGR","钁":"QHHC","贗":"DWWM DWQM","櫱":"BTWS BTTS","鰍":"QOTO","鬢":"DEPM","迴":"LKPD","鱷":"QOGK","鱔":"QOUK","裡":"PUJF"}');
    }, function(j, f2, c) {
      c.r(f2);
      var k = c(0), s = c(1), a = c(2), d = c(3), Y = c(4), M = c(5), F = c(6), G = c(7), H = k, b = s, O = a, W = d;
      var T = { trad: "trad", simple: "simple", spark: "spark" };
      function e2(j2, f3, c2) {
        if (void 0 === f3 || !T[f3])
          throw new Error("convert 参数类型错误： to=" + f3);
        if (void 0 === c2 || !T[c2])
          throw new Error("convert 参数类型错误： from=" + c2);
        var k2 = "", s2 = "";
        if (f3 === T.simple)
          c2 === T.trad ? (k2 = O.simple, s2 = O.trad) : (k2 = W.simple, s2 = W.spark);
        else if (f3 === T.trad) {
          if (c2 !== T.simple)
            return e2(e2(j2, T.simple, T.spark), T.trad, T.simple);
          k2 = O.trad, s2 = O.simple;
        } else {
          if (c2 === T.trad)
            return e2(e2(j2, T.simple, T.trad), T.spark, T.simple);
          k2 = W.spark, s2 = W.simple;
        }
        for (var a2 = "", d2 = 0; d2 < j2.length; d2++) {
          var Y2 = s2.indexOf(j2[d2]);
          a2 += -1 !== Y2 ? k2[Y2] : j2[d2];
        }
        return a2;
      }
      var r, N = { type: T, simpleToTrad: function(j2) {
        return e2(j2, T.trad, T.simple);
      }, simpleToSpark: function(j2) {
        return e2(j2, T.spark, T.simple);
      }, tradToSimple: function(j2) {
        return e2(j2, T.simple, T.trad);
      }, tradToSpark: function(j2) {
        return e2(j2, T.spark, T.trad);
      }, sparkToSimple: function(j2) {
        return e2(j2, T.simple, T.spark);
      }, sparkToTrad: function(j2) {
        return e2(j2, T.trad, T.spark);
      } }, C = function() {
        for (var j2 = 0, f3 = 0, c2 = arguments.length; f3 < c2; f3++)
          j2 += arguments[f3].length;
        var k2 = Array(j2), s2 = 0;
        for (f3 = 0; f3 < c2; f3++)
          for (var a2 = arguments[f3], d2 = 0, Y2 = a2.length; d2 < Y2; d2++, s2++)
            k2[s2] = a2[d2];
        return k2;
      }, Q = "trad", R = "simple", n = "array", i = "order";
      var B = { pluginName: "trad", install: function(j2) {
        j2.convert = N;
        var f3 = String.prototype;
        "object" == typeof j2.type.spell && (j2.type.spell.simple = R, j2.type.spell.trad = Q), "object" == typeof j2.type.stroke && (j2.type.stroke.simple = R, j2.type.stroke.trad = Q), function(j3, f4) {
          var c2 = f4.spell, k2 = function(j4) {
            for (var f5 = [], k3 = 1; k3 < arguments.length; k3++)
              f5[k3 - 1] = arguments[k3];
            if (r.has(f5, R))
              return c2.apply(void 0, C([j4], f5));
            if (r.has(f5, Q)) {
              var s2 = r.has(f5, n);
              s2 || f5.push(n);
              for (var a2 = N.tradToSimple(j4), d2 = [], Y2 = "", M2 = 0; M2 < a2.length; M2++)
                a2[M2] !== j4[M2] ? Y2 += a2[M2] : d2.push({ index: M2, str: j4[M2] });
              var F2 = c2.apply(void 0, C([Y2], f5));
              for (M2 = 0; M2 < d2.length; M2++)
                F2.splice(d2[M2].index, 0, d2[M2].str);
              return s2 ? F2 : F2.join("");
            }
            return j4 = N.tradToSimple(j4), c2.apply(void 0, C([j4], f5));
          };
          j3.spell = function() {
            for (var j4 = [], f5 = 0; f5 < arguments.length; f5++)
              j4[f5] = arguments[f5];
            return k2.apply(void 0, C([this], j4));
          }, f4.spell = function() {
            for (var j4 = [], f5 = 0; f5 < arguments.length; f5++)
              j4[f5] = arguments[f5];
            return k2.apply(void 0, j4);
          }, f4._.poly || (f4._._reinitSpellPoly = function() {
            c2 = f4.spell, j3.spell = function() {
              for (var j4 = [], f5 = 0; f5 < arguments.length; f5++)
                j4[f5] = arguments[f5];
              return k2.apply(void 0, C([this], j4));
            }, f4.spell = function() {
              for (var j4 = [], f5 = 0; f5 < arguments.length; f5++)
                j4[f5] = arguments[f5];
              return k2.apply(void 0, j4);
            };
          });
        }(f3, j2), function(j3, f4) {
          var c2 = f4.stroke, k2 = function(j4) {
            for (var f5 = [], k3 = 1; k3 < arguments.length; k3++)
              f5[k3 - 1] = arguments[k3];
            r.checkArgs("stroke", f5, true);
            var s2 = r.has(f5, n), a2 = r.has(f5, i);
            s2 || f5.push(n);
            var d2 = c2.apply(void 0, C([j4], f5));
            if (a2) {
              if (r.has(f5, R))
                return d2;
              r.has(f5, Q);
              var Y2 = [];
              for (F2 = 0; F2 < d2.length; F2++)
                void 0 === d2[F2] ? d2[F2] = b[j4[F2]] : Y2.push(F2);
              return r.orderWithLetters(d2, j4, f5, Y2);
            }
            if (r.has(f5, R))
              return s2 ? d2 : r.sumStroke(d2);
            if (r.has(f5, Q))
              for (var M2 = 0; M2 < d2.length; M2++)
                0 !== d2[M2] && (d2[M2] = -1);
            for (var F2 in H) {
              var G2 = parseInt(F2);
              for (M2 = 0; M2 < d2.length; M2++)
                0 === d2[M2] && -1 !== H[G2].indexOf(j4[M2]) && (d2[M2] = G2);
            }
            if (r.has(f5, Q))
              for (M2 = 0; M2 < d2.length; M2++)
                -1 === d2[M2] && (d2[M2] = 0);
            return s2 ? d2 : r.sumStroke(d2);
          };
          j3.stroke = function() {
            for (var j4 = [], f5 = 0; f5 < arguments.length; f5++)
              j4[f5] = arguments[f5];
            return k2.apply(void 0, C([this], j4));
          }, f4.stroke = function() {
            for (var j4 = [], f5 = 0; f5 < arguments.length; f5++)
              j4[f5] = arguments[f5];
            return k2.apply(void 0, j4);
          }, f4._.order || (f4._._reinitStrokeOrder = function() {
            c2 = f4.stroke, j3.stroke = function() {
              for (var j4 = [], f5 = 0; f5 < arguments.length; f5++)
                j4[f5] = arguments[f5];
              return k2.apply(void 0, C([this], j4));
            }, f4.stroke = function() {
              for (var j4 = [], f5 = 0; f5 < arguments.length; f5++)
                j4[f5] = arguments[f5];
              return k2.apply(void 0, j4);
            };
          });
        }(f3, j2), f3.convertSimpleToTrad = function() {
          return N.simpleToTrad(this);
        }, f3.convertSimpleToSpark = function() {
          return N.simpleToSpark(this);
        }, f3.convertTradToSimple = function() {
          return N.tradToSimple(this);
        }, f3.convertTradToSpark = function() {
          return N.tradToSpark(this);
        }, f3.convertSparkToSimple = function() {
          return N.sparkToSimple(this);
        }, f3.convertSparkToTrad = function() {
          return N.sparkToTrad(this);
        }, (r = j2._).convert = N, r.dict.getTradOrders = function() {
          return b;
        }, r.dict.getTradCount = function() {
          return H;
        };
      }, convert: N, dict: { code: Y, count: H, order: b, trad: O, spark: W, radical: F, info: M, wubi: G } };
      "object" == typeof window && window.CnChar && (window.CncharTrad = B, window.CnChar.use(B));
      f2.default = B;
    }]).default;
  });
})(cnchar_trad_min);
const trad = /* @__PURE__ */ getDefaultExportFromCjs(cnchar_trad_minExports);
var cnchar_radical_minExports = {};
var cnchar_radical_min = {
  get exports() {
    return cnchar_radical_minExports;
  },
  set exports(v) {
    cnchar_radical_minExports = v;
  }
};
(function(module2, exports2) {
  !function(a, b) {
    module2.exports = b();
  }(commonjsGlobal, function() {
    return function(a) {
      var b = {};
      function d(c) {
        if (b[c])
          return b[c].exports;
        var r = b[c] = { i: c, l: false, exports: {} };
        return a[c].call(r.exports, r, r.exports, d), r.l = true, r.exports;
      }
      return d.m = a, d.c = b, d.d = function(a2, b2, c) {
        d.o(a2, b2) || Object.defineProperty(a2, b2, { enumerable: true, get: c });
      }, d.r = function(a2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a2, "__esModule", { value: true });
      }, d.t = function(a2, b2) {
        if (1 & b2 && (a2 = d(a2)), 8 & b2)
          return a2;
        if (4 & b2 && "object" == typeof a2 && a2 && a2.__esModule)
          return a2;
        var c = /* @__PURE__ */ Object.create(null);
        if (d.r(c), Object.defineProperty(c, "default", { enumerable: true, value: a2 }), 2 & b2 && "string" != typeof a2)
          for (var r in a2)
            d.d(c, r, function(b3) {
              return a2[b3];
            }.bind(null, r));
        return c;
      }, d.n = function(a2) {
        var b2 = a2 && a2.__esModule ? function() {
          return a2.default;
        } : function() {
          return a2;
        };
        return d.d(b2, "a", b2), b2;
      }, d.o = function(a2, b2) {
        return Object.prototype.hasOwnProperty.call(a2, b2);
      }, d.p = "", d(d.s = 2);
    }([function(a) {
      a.exports = JSON.parse('{"a":"左右结构","b":"上下结构","c":"独体结构","d":"半包围结构","e":"全包围结构","f":"品字结构","g":"上中下结构","h":"左中右结构"}');
    }, function(a) {
      a.exports = JSON.parse('{"*":"一c1乙c1二c2人c2亻c2儿c2入c2八c2冂c2几c2凵c2力c2勹d2匕c2十c2厂c2厶c2又c2卜c2口c3囗c3土c3士c3夕c3大c3女c3子c3寸c3小c3尢c3尸c3山c3巛c3川c3工c3己c3巳c3巾c3干c3幺c3广c3廾c3弋c3弓c3门c3飞c3马c3心c4戈c4户c4手c4支b4攵c4文c4斗c4斤c4方c4日c4曰c4月c4木c4欠c4止c4歹c4殳b4毋c4比a4毛c4氏c4气c4水c4火c4爪c4父c4爻b4爿c4片c4牙c4牛c4犬c4王c4瓦c4肀c4见b4贝c4车c4长c4韦c4风d4母c5玄c5玉c5瓜c5甘c5生c5用c5田c5疋c5白c5皮c5皿c5目c5矛b5矢c5石d5示c5禾c5穴c5立c5钅c5鸟c5龙c5竹c6米c6糸c6缶c6羊c6羽a6而c6耒c6耳c6聿c6肉c6臣c6自c6至b6臼c6舌c6舟c6艮c6色b6虍c6虫c6血c6行a6衣c6页c6齐b6角c7言c7谷b7豆c7豕c7豸c7赤c7走b7足b7身c7辛c7辰c7邑b7酉c7里b7麦c7采b8金b8阜c8隶c8隹a8雨c8青b8非c8鱼b8齿b8面c9革c9韭c9音b9首b9香b9骨b9鬼c9高b10髟a10鬯b10鬲g10鹿d11麻d11黄g11黍b12黑b12黹b12鼎b12鼓a13鼠b13鼻g14龠b17","卜":"2:卧a卞b卟a占b卢b卣c卤c卦a","口":"3:呤a古b句d另b叨a叩a只b叫a召b叭a叮a可d台b叱a史c右d叵d叶a号b司d叹a叻a叼a叽a吁a吃a各b吆a合g吉b吊b同d名b后d吏b吐a向d吒a吓a吕b吖a吗a吸a吋a君b吝b吞b吟a吠a吡a吣a否b吧a吨a吩a含b听a吭a吮a启d吱a吲a吴b吵a吹a吻a吼h吾b呀a呃a呆b呈b告b呋a呐a呒a呓a呔a呕a呖a呗a员b呙b呛a呜a呎a呢a呦h周d呱a味a呵a呶a呷a呸a呻a呼a命b咀a咂a咄a咆a咋a和a咎b咏a咐a咒b咔a咕a咖a咙a咚a咛a咝a哎a黾b咘a呲a咣a咤a咦a咧a咨b咩a咪a咫d咬a咭a咯a咱a咳a咴a咸d咻a咽a咿h哀b品f哂a哄a哆a哇a哈a哉d哌a响a哏a哐a哑a哒a哓a哔a哕a哗a哙a哚a哜a哝a哞a哟h哪a咲a哥b哦a哧a哨a哩a哭b哮a哲b哳a哺a哼a哽a哿b唁a唆a唇d唉a唏a唐d唑a唔a唛a唠a唢a唣a唤a唧a啊h唪a唬a售b唯a唰a唱a唳a唷a唼a唾a唿a啁a啃a啄a商b啉a啐a啕a啖a啜a啡a啤a啥a啦h啧a啪a啬b啭h啮a啵a啶a啷h啸a喏a喵a啰a啟a啲a啻b啼a啾a喀a喁a喂a喃a善b喇h喈a喉a喊a喋a喑a喔a喘a喙a喜b喝a喟a喧a喱a喳a喷a喹a喻a喽a喾b嗖a嗟a嗒a喆b嗞a嗄a嗅a嗉a嗌a嗍h嗑a嗓a嗔a嗜a嗝a嗡a嗣a嗤a嗥a嗦a嗨a嗪a嗫a嗬a嗯a嗲a嗳a嗵a嗷a嘟a嗽h嗾h嘀a嘁a嘈a嘉b嘌a嘎a嘏a嘘a嘛a嘞h嘣a嘤a嘧a嘚a嘬a嘭a嘱a嘲h嘶h嘹a嘻a嘿a噌a噍a噎a噔a噗a噘a噙a噜a噢a噶a噁a嘴a噤a器b噩c噪a噫a噬a噱a噻a噼a嚆a嚅a嚎a嚏a嚓a嚣g嚯a嚷a嚼a囊b囍c囔a","又":"2:叔a及c友d双a反d发c叒c取a受b变b叕b叙a叛a叟b叠b叡a","玉":"5:玺b璧b璺b","月":"4:胺a有b肋a肌a肓b肖b肘a肚a肛a肜a肝a肟a肠a朊a朋a服a股a肢a肤a肥a肩d肪a肫a肭a肮a肯b肱a育b肴b肷a肺a肼a肽a肾b肿a胀a胁a朐a胂a胃b胄b胆a背b胍a胎a胖a胗a胙a胚a胛a胜a胝a胞a胡a胤a胥b胧a胨a胩a胪a胫a脉a朔a朕a朗a胭a胯a胰a胱a胲a胳a胴a胶a胸a胼a能a脂a脆a脊b脍a脎a脏a脐a脑a脒a脓a脩a望b脖a脘a脚h脞a脬a脯a脱a脲a脶a脸a朝a期a脾a腆a腈a腊a腋a腌a腑a腓a腔a腕a腙a腚a腱a腴a腠a腥a腧a腩a腭a腮a腰a腹a腺a腻a腼a腽a腾a腿a膀a膂b膈a膊a膏b膑a膜a膘a膛a膝a膣a膦a膨h膪a膳a朦a膺d膻a臀b臁a臂b臃a臆a臊a臌a","一":"1:画d丁c七c万c丈c三c上c下c丌c与c不c丐c丑c专c无c且c丕b世c丙c业c丛b东c丝b丞b两c严b丽b丧b","丿":"1:乃c九c乂c丸c久c乇c么c丹c乌c乏c丘c乍c乎c乐c册c丢b乒b乓b乔b乖c乘c","乙":"1:乜c了c乞c也c习c乡c书c予c乩a买b乱a乾a","刀":"2:刁c刃c分b切a刍b争b免b初a龟b兔b券b剪b劈b","人":"2:个c仄d今b介b从a仑b仓b以a仝b令b企b众f会b伞b佘b余b佥b俎a俞b僰b","丨":"1:丫c中c丰c卡b串c临a","丶":"1:义c之c为c主c举b","二":"2:亍c于c亏c云c互c亓c五c井c元c亘c亚c些b亟c","亠":"2:亡c亢b交b亥c亦c产c充b亨g亩b享b京g兖b亭b亮b亲b亳b亵b","亻":"2:亿a什a仁a仂a仃a仅a仆a仉a仍a化a仔a仕a他a仗a付a仙a仞a仟a仡a代a仨a仪a仫a们a仰a仲a仳a仵a件a价a任a份a仿a伉a伊a伍a伎a伏a伐a休a优a伙a伛a伟a传a伢a伤a伥a伦a伧a伪a伫a佤a似a伯a估a伲a伴a伶a伸a伺a伽a佃a但a位a低a住a佐a佑a体a何a佗a佚a佛a作a佝a佞a佟a你a佣a佧a佔a佈a佩a佬a佯a佰a佳a佴a佶a佻a佼a佾a使a侃a侄a侈a侉a例h侍a侏a侑a侔a侗a供a依a侠a侣a侥a侦a侧h侨a侩a侪a侬a佺a侮a侯a侵a便a促a俄a俅a俊a俏a俐h俑a俗a俘a俚a俜a保a俟a信a俣a俦a俨a俩a俪a俭a修a俯a俱a俳a俸a俺a俾a倌a倍a倏a倒a倔a倘a候a倚a倜a借a倡a倥a倦a倨a倩a倪a倬a倭a倮a债a值a倾a偌a健a俶a倓a偃a假h偈a偎a偏a偕a做h停a偬a偶a偷a偻a偾a偿a傀a偲a傅a傈a傍a傣a傥a傧a储h傩a傲h催a傺a傻a像a僖a僚a僦a僧a僬a僭a僮a僳a儆a僵a僻a儇a儋a儒a儡a","儿":"2:兀b允c兄b兆a先b光b兕b党b兜b兢a","几":"2:凡c凤d凫b凭b凯a凰d凳b","勹":"2:勺c勾d勿d匀d包d匆c匈d匍d匏a匐d","十":"2:千b卅c升c午c卉b半c华b协a克g卑b卒b卓b单b卖b南b博a","卩":"2:卫c卯a印a即a却a卵a卸a卿h","子":"3:孑c孓c孔a孕b字b存d孙a孖a孚b孛g孜a孝b孟b孢a季b孤a孥b学b孩a孪b孬b孰a孱d孳b孵a孺a孽g","己":"3:已c","扌":"3:才c扎a扑a扒a打a扔a托a扛a扣a扦a执a扩a扪a扫a扬a扭a扮a扯a扰a扳a扶a批a扼a找a技a抄a抉a把a抑h抒a抓a投a抖a抗a折a抚a抛a抟a抠a抡a抢a护a报a拒a拟a抨a披a抬a抱a抵a抹a抻a押a抽a抿a拂a拄a担a拆a拇a拈a拉a拊h拌a拍a拎a拐a拓a拔a拖a拗a拘a拙a拚a招a拢a拣a拥a拦a拧a拨a择a括a拭a拮a拯a拱a拴a拶a拷a拼a拽a拾a持a挂a指a按a挎a挑a挖a挝a挞a挟a挠a挡a挢a挣a挤a挥a挪a挺a挨a挫a振a挹a挽a捂a捃a捅a捆a捉a捋a捌a捍a捎a捏a捐a捕a捞a损a捡a换a捣a挼a捧a捩a捭a据a捱a捶a捷a捺a捻a掀h掂a掇a授a掉a掊a掎a掏a掐a排a掖a掘a掠a探a接a控a推a掩a措a掬a掭a掮a掳a掴a掷h掸a掺a掼a揶h描a採a捯a掾a揄a揆a揉a揍a揎a提a插a揖a揞a揠a握a揣a揩a揪a揭a揲a援a揸a揽a揿h搀a搁a搂a搅a搓a搔a搜a搭a搽a摒a搋a搌a搏a搐a搛a搞a搠a搡a搦h搪a搬h携a摁a摄a摅a摆a摇a摈a摊h摸a摔a摘a摞a摧a摭a摺a撂a撄a撇h撖a撅a撑a撒h撕h撙a撞a撤h撩a撬a播a撮a撰a撵a撷h撸a撺a擒a撼a擀h擂a擅a操a擐a擗a擞h擢a擤a擦a攉a攒a攘a攥a攫a攮a","八":"2:公b六b兮b共b兴b兵b羌b其c具b典b美b羡b冀g","冂":"2:内c冈d冇c冉c再b网d罔d冒b冕b","冖":"2:冗b写b军b农c罕b冠b冢b冤b冥b","凵":"2:凶d凸c凹c出c击c凼d函d凿b","刂":"2:刈a刊a刎a刑a划a刖a列a刘a则a刚a创a删a判a刨a利a别a刭a刮a到a刳a制a刷a刹a刻a刽a刿a剀a剁a剂a剃a削a剌a前b剐a剎a剔a剖a剜a剞a剡a剥a剧a副a剩a割a剽a剿a劁a劂a劐a劓a","力":"2:劝a办c功a加a务b劢a劣b动a助a努b劫a劬a劭a励a劲a劳b劾a势b劼a劵b勃a勇b勉d勋a勐a勒a勖a勘a募b勤a勠a勰a","匚":"2:匹d区d匝d匠d匡d匣d医d匦d匪d匿d匮d匾d","厂":"2:厄d厅d历d厉d压d厌d厍d厕d厘d厚d厝d原d厢d厣d厩d厥d厦d厨d厮d","士":"3:壬c壮a声b壳b壶b壹g","大":"3:天b太c夫c夭c央c夯b失c头c夷c夸b夹c夺b夼b奁b奂b奄b奇b奈b奉b奋b奔b奎b奏d契b奕b奖b套b奘b奚g奢b奠b奥b奭c","小":"3:少b尔c尕b尖b尘b尚b忝b尜g尝b恭b慕b","尢":"3:尤c尥d尬d就a尴d","尸":"3:尹a尺c尻d尼d尽b尾d尿d局d屁d层d居d屈d屉d届d屋d屎d屏d屌d屐d屑d展d屙d屠d属d屡d屣d履d屦d","屮":"3:屯c","巳":"3:巴c巷b巽b","幺":"3:幻a幼a幽d","廾":"3:廿c开c弁b异b弃b弄b弈b弊b","弓":"3:引a弗c弘a弛a弟c张a弥a弦a弧a弩b弪a弢a弭a弯b弱a强a弼h彀a","忄":"3:忆a忉a忏a忖a忙a忡a忤a忧a忪a快a忭a忮a忱a忸a忻a忾a怀a怃a怄a怅a怆a怊a怍a怏a怔a怕a怖a怙a怛a怜a怡a怦a性a怩a怪a怫a怯a怵a怿a恂a恃a恍a恒a恢a恤a恨a恪a恫a恬a恸a恹a恺a恻h恼a恽a禹c禺a恰a恆a悃a悄a悌a悍a悒a悔a悖a悚a悛a悝a悟a悦a悭a悯a离b悱a悴a悸a悻a悼a情a惆a惊a惋a惕a惘a惚a惜a惝a惟a惦a惧a惨a惬a惭h惮a惯a惇a悲b惰a惴a惶a惺a愀a愉a愎a愕a愠a愣a愤a愦a愧a慌a慨h禽b愫a慊a慎a慑a慢a慵a慷a憎a憔a憧a憬a懂a懊a憷a憾a懈h懒h懔a懦a懵a","攵":"4:攴c收a攸a改a攻a放a玫a政a故a效a敉a敌a敖a敏a救a敕a教a敛a敝a敢a敞a散a敦a敬a敫a数a敷a整b","艹":"3:艺b艽b艾b艿b节b芄b芊b芋b芍b芎b芏b芑b芒b芗b芝b芨b芃b芘b芙b芜b芟b芡b芤b芥b芦b芩b芪b芫b芬b芭b芮b芯b芰b花b芳b芴b芷b芸b芹b芽b芾b苁b苄b苇b苈b苊b苋b苌b苍b苎b苏b苡b苣b苑b苒b苓b苔g苕g苗b苘b苛b苜b苞b苟b苠b苤a若b苦b苫b苯b英b苴b苷b苹b苻b茁b茂b范b茄b茅b茆b茇b茉b茌b茎b茏b茑b茔g茕b茚b茈b茗b茛b茜b茧b茨b茫b茬b茭b茯b茱b茳b茴b茵b茶b茸b茹b茺b茼b荀b荃b荆a荇b草b荏b荐b荑a荒b荔b荚b荛g荜g荞b荟b荠b荡b荣b荤b荥b荦b荧g荨b荩b荪b荫b荬b荭b荮b药b莒b莛b荷b荸g荻b荼b荽b莅b莆b莉b莎b莓b莘b莜b莞b莠b莨b莩b莪b莫b莰b莱b莲b莳b莴b莶b获b莸b莹b莺g莼b莽g菀b菁b菅b菇b菊b菌b菏b菔b菖b菘b菜b菝b菟b菠b菡b菥b菩g菪b菰b菱b菲b菸b菹b菽b萁b萃b萄b萆b萋g萌b萍a萎b萏b萑b萘b萜b萝b萤g营g萦g萧b萨b萸b著b菂b萱b萼b落b葆b葑b葙b葚b葛b葜b葡b董b葩b葫b葬g葭b葱g葳b葵b葶b葸b葺b蒂b蒇b蒈b蒉b蒋b蒌b蒎b萩b蒗b蒙b蒜b蒡b蒯a蒲b蒴b蒸g蒹b蒺b蒽b蒿b蓁b蓄b蓉b蓊b蓍b蓐b蓑b蓓b蓖b蓝b蓟b蓠b蓣b蓥b蓦b蓬b蓢b箫b蓰b蓼b蓿b蔌b蔑g蔓b蔗b蔚b蔟b蔡b蔫b蔷b蔸b蔹b蔺b蔻b蔼b蔽b蕖b蔬b蕃b蕈b蕉b蕊b蕙b蕞b蕤b蕨b蕲b蕴b蕺b蕹b蕻b蕾b薄b薅b薇b薏b薛b薜b薤b薨b薪b薮b薯g蕗b薰b薷b薹g藁g藉b藏b藐b藓b藕b藜b藤b藩b藠b藻b藿b蘅b蘑b蘧b蘖b蘩b蘸b蘼b","讠":"2:计a订a讣a认a讥a讬a讦a讧a讨a让a讪a讫a训a议a讯a记a讲a讳a讴a讵a讶a讷a许a讹a论a讼a讽a设a访a诀a证a诂a诃a评a诅a识a诈a诉a诊a诋a诌a词a诎a诏a译a诒a诓a诔a试a诖a诗a诘a诙a诚a诛a诜a话a诞a诟a诠a诡a询a诣a诤a该a详a诧a诨a诩a诫a诬a语a诮a误a诰a诱a诲a诳h说a诵a诶a请a诸a诹a诺a读a诼a诽a课a诿a谀a谁a谂a调a谄a谅a谆a谇a谈a谊a谋a谌a谍a谎a谏a谐a谑a谒a谓a谔a谕a谖a谗a谘a谙a谚a谛a谜a谝a谞a谟a谠a谡a谢h谣a谤a谥a谦a谧a谨a谩a谪a谫a谬a谭a谮a谯a谰a谱a谲a谳h谴a谵a谶a","阝":"2:邓a队a邗a邙a邛a邝a阡a阢a邡a邢a那a邦a邪a邬a阪a阮a阱a防a阳a阴a阵a阶a邨a邮a邯a邰a邱a邳a邴a邵a邶a邸a邹a邺a邻a阻a阼a阽a阿a陀a陂a附a际a陆a陇a陈a陉a邾a郁a郄a郅a郇a郊a郎a郏a郐a郑a郓a陋a陌a降a限a陔a陕a郗a郛a郜a郝a郡a郢a郦a郧a陛a陟a陡a院a除a陧a陨a险a陞a部a郫a郭a郯a郴a郸a都a陪a陬a陲a陴a陵a陶a陷a郾a鄂a鄄a隅a隆a隈a隋a隍a随a隐a隗a隔a隘a隙a鄙a鄞a鄢a鄣a障a鄠a鄯a鄱a隧a鄹a隰a隳b酃a酆a","门":"3:闩d闪d闫d闭d问d闯d闰d闱d闲d闳d间d闵d闶d闷d闸d闹d闺d闻d闼d闽d闾d阀d阁d阂d闿d阃d阄d阅d阆d阈d阉d阊d阋d阌d阍d阎d阏d阐d阑d阒d阔d阕d阖d阗d阙d阚d","工":"3:巨c左d巧a巩a巫d差b巯a","巾":"3:巿c市b布d帅a帆a师a希b帏a帐a帑b帔a帕a帖a帘b帙a帚g帛b帜a帝b带b帧a帮b席d帱a帷a常b帻a帼a帽a幂b幄a幅a幌a幕b幔a幛a幞a幡a幢a","丷":"2:兰b关b兑g兹b养b兼b兽g冁a","夂":"3:冬b处d备b复b夏b夔b","冫":"2:冯a冰a冱a冲a决a况a冶a冷a冻a冼a冽a净a凄a准a凇a凉a凋a凌a减a凑a凛a凝h","匕":"2:北a匙d","厄":"4:卮d危b卷b卺b","厶":"2:去b县b叁b参b","囗":"3:囚e四e囝e回e囟c因e囡e团e囤e囫e园e困e囱c围e囵e囧e囯e囹e固e国e图e囿e圃e圄e圆e圈e圉e圊e圏e圜e","土":"3:圣b在d圩a圪a圬a圭b圮a圯a地a圳a圹a场a圾a圻a址a坂a均a坊a坌b坍a坎a坏a坐b坑a块a坚b坛a坜a坝a坞a坟a坠b坡a坤a坦a坨a坩a坪a坫a坭a坯a坳a坶a坷a坻a坼a垂c垃a垄b垅a垆a型b垌a垒b垓a垛a垠a垡b垢a垣a垤a垦b垧a垩b垫b垭a垮a垲a垴a城a埏a垚b垵a垟a垕b垸a埂a埃a埋a埒a埔a埕a埘a埙a埚a埇a埗a埈a埝a域a埠a埤a埭a埯a埴a埸a培a基b埽a堀a堂b堆a堇b堋a堍a堑b堕b堵a堃b埼a堌a堉a堙a堞a堠a堡b堤a堪a堰a塄a塔a堺a塌a塍a塑b塘a塞g塥a填a塬a墓b塱b塚a塾b墁a境a墅b墉a墒a墙a墚a墟a墀a增a墨b墩h墼b壁b壅b壑b壕a壤a","夕":"3:外a夙d多b舛a夜b够a舜b夤b夥a舞b","女":"3:姈a奴a奶a奵c奸a她a好a妁a如a妃a妄b妆a妇a妈a妊a妍a妒a妓a妖a妗a妙a妞a妣a妤a妥b妨a妩a妪a妫a姊a姒a妮a妯a妲a妹a妻b妾b姆a始a姐a姑a姓a委b姗a姘a姚a姜b姝a姣a姥a姨a姹a姻a姿b威d娃a娄b娅a娆a娇a娈e娜a姮a姬a娉a娌a娑b娓a娘a娟a娠a娣a娥a娩a娱a娲a娴a婀h娭a娶b娼a婆b婉a婊a婕a婚a婢a婧a婪b婴b婵a婶a婷a婺b婿a媒a媚a媛a媪a嫂a媲a媳a媵a媸a媾a嫁a嫉a嫌a嫒a嫔a嫫a嬅a嫖a嫘a嫜a嫠a嫡a嫣a嫦a嫩h嫱a嫚a嬉a嬖b嬗a嬴b嬛a嬢a嬲h嬷a孀a孃a","宀":"3:宁b它b宄b宅b宇b守b安b宋b完b宏b宓b宕b宗b官b宙b定b宛b宜b宝b实b宠b审b客b宣b室b宥b宦b宪b宫b宰b害g宴g宵b家b宸b容b宽b宾b宿b寂b寄b寅b密b寇b富b寐b寒b寓b寝b寞b察b寡b寤b寥b寨g寮b寰b","寸":"3:对a寺b寻b导b寿b封a将a射a尉a尊b","干":"3:平c年b并b幸b","广":"3:庀d庄d庆d庇d床d庋d序d庐d庑d库d应d底d庖d店d庙d庚d府d庞d废d庠d庥d度d庭d座d庳d庵d庶d康d庸d庹d庾d廊d廉d廒d廓d廑d廖d廛d廨d廪d","彐":"3:归a当b录b彗b","心":"4:必c忌b忍b忐b忑b忒d志b忘b忠b念b忽b忿b态b怂b怎b怒b思b怠b急b怨b总b怼b怹b恁b恋b恐b恕b恙b恚b恝b恣b恧b恩b息b恳b恶b恿b悉b悠b患b您b悫b悬b惑b惠b惩b惫b惹g想b愁b愆b愈b愍b意g愚b感b慈b愿d慝b慧b慰b憋b憨b慜b憝b憩b懋b懑b懿a戆b","戈":"4:戊a戋c戉c戌c戍c戎d戏a成c我a戒d戕a或d戗a战a戚d戛b戟a戢a戡a戤a戥a截d戬a戮a戴d戳a","斤":"4:斥c斧b斩a斫a断a斯a新a","日":"4:旦b旧a旨b早b旬d旭d旮b旯b旰a旱b时a旷a旸a旺a昀a昂b昃b昆b昊b昌b明a昏b易b昔b昕a昙b旻b昇b昉a旼a昝b星b映a春b昧a昨a昭a是b昱b昴b昵a昶d昼b显b昺b昳a晁b晃b晋b晌a晏g晒a晓a晔a晕b晖a晟b晚a晗a晡a晤a晦a晨b晞a普b景b晰h晴a晶f晷g智b晾a暂b暑b暄a暇a暌a暖a暗a暐a暝a暧a暨b暮b暴b暹d暾a曌b曈a曙a曛a曜a簪g曝a曦a曩b","木":"4:未c末c本c札a术c朱c朴a朵b机a朽a杂b权a杆a杈a杉a杌a李b杏b材a村a杓a杖a杜a杞a束b杠a条b来c杨a杩a极a杪a杭a杯a杰b杲b杳b杵a杷a杼a松a板a构a枇a枉a枋a析a枕a林a枘a枚a果b枝a枞a枢a枣b枥a枧a枨a枫a枭b柜a枯a枰a枳a枵a架b枷a枸a柁a柃a柄a柏a某b柑a柒b染b柔b柘a柙a柚a柝a柞a柠a柢a查b柩a柬c柯a柰b柱a柳a柽a柿a栀a栅a标a栈a栉a栊a栋a栌a栎a栏a树h査b栃a柴b栓a栖a栗b栝a校a栩a株a栲a栳a样a核a根a格a栽d栾b桀b桁a桂a桃a桄a桅a框a案b桉a桊b桌b桎a桐a桑b桓a桔a桕a桠a桡a桢a档a桤a桥a桦a桧a桨b桩a梃a梆a栢a梢a梧a梨b桫a桴a桶a桷a梁b梅a梏a梓a梗a梦b梭a梯a械a梳a梵b检a棂a棻g棉a棋a棕a棘a棚h棠b棣a森f棰a棱a棵a棹a棺a棼b椁a椅a椋a植a椎a椐a椒a椟a椠b椤a椭h椰h楗a楮a榔h琹a棪a椪a椴a椹a椽a椿a楂a楔a楚b楝a楞a楠a楣a楦a楫a楱a楷a楸h楹a楼a榀a概a榄a榆a榇a榈a榉a榘b槌a槎a槐a榅a榊a榍a榕a榛a榜a榧a榨a榫a榭h榱a榴a榷a榻a槁a槊b槔a槛a槟a槠a模a槃b槙a樋a槭a槲a槽a槿a樊b樗a樘a樟a横a樯a樱a橄a橡a橥b樑a樨a樵a樽a樾a橇a橐g橘a橙a橛a橱a橹a橼a檎a檠b檀a檄h檐a檑a檗b檩a檬a檫a","止":"4:正b此a步b武d歧a歪b","氏":"4:氐c民c氓a","气":"4:氕d氖d氘d氙d氚d氛d氟d氡d氢d氤d氦d氧d氨d氩d氪d氮d氯d氰d氲d","水":"4:永c氹d氽b汆b求c汞b沓b泉b泵b泶b泰b浆b淼f滕a","氵":"3:汀a汁a汇a汉a汊a汐a汔a汕a汗a汛a汜a汝a江a池a污a汤a汲a汨a汩a汪a汰a汴a汶a汹a汽a汾a沁a沂a沃a沅a沆a沈a沉a沌a沏h沐a沔a沙a沛a沟a没a沣a沤a沥a沦a沧a沩a沪a泐a泛a沕a沫a沭a沮a沱a沲a河a沸a油a治a沼a沽a沾a沿a泄a泅a泊a泌a泓a泔a法a泖a泗a泞a泠a泡a波a泣a泥a注a泪a泫a泮a泯a泱a泳a泷a泸a泺a泻a泼a泽a泾a浅a泃a洁a洄a洇a洋a洌a洎a洒a洗a洙a洚a洛a洞a津a洧a洪a洫a洮a洱a洲a洳a洵a洹a活a洼a洽a派a浃a浇a浈a浊a测h浍a济a浏h浑a浒h浓a浔a涎a洸a浕a浐a洺a流a浙h浚a浜a浞a浠a浣a浦a浩a浪a浮a浯a浴a海a浸a浼a涂a涅a消a涉a涌a涑a涓a涔a涕a涛a涝a涞a涟a涠a涡a涣a涤a润a涧a涨h涩a涪a涫a涮h涯a液a涵a涸a涿a淀a淄a淅h淆a淇a淋h淌a淑h淖a淘a淙a淝a淞h淠a淡a淤h淦a淬a淮a深a淳a混a淹a添a清a渊a渌a渍a渎a渐h渑a渔a渖a渗a渚a渠b渝a渡a渣a渤a渥a温a渫a渭a港a渲a渴a游h渺a湃a湄a湍a湎a湓a湔a湖h湘h湛a湟a湫a湮a湾a湿a溃a溅a溆h溉a溲a滁a滋a滑a滞a湉h溏a源a溘a溜a溟a溢a溥a溧a溪a溯h溱a溴a溶a溷a溺a溻a溽a滂a滇a滏a滓a滔a滗a滚a滟a滠a满a滢a滤a滥a滦a滨a滩h漓a漠a漭a滘a漷h滴a滹a漂a漆a漉a漏a演a漕a漤a漩h漪h漫a漯a漱h漳a漶a漾a潆a潇a潋a潍a潢a潴a澉a漈a漖h潘a潜a潦a潭a潮h潲h潸a潺a潼a澄a澈a澌h澍h澎h澜a澳a潟a澂h潞a澡a澧a澶a澹a激a濂a濉h濑h濒a濛c濞a濠a濡a濮a濯a瀑a瀍a瀚h瀛a瀣a瀵a瀹a灌a灏h灞a","火":"4:灭b灯a灰d灵b灶a灸b灼a灾b灿a炀a炅b炉a炊a炎b炒a炔a炕a炖a炙b炜a炝a炬a炘a炫a炭b炯a炱g炳a炷a炻a炼a炽a烀a烁a烂a烃a炤a烊a烘a烙a烛a烟a烤a烦a烧a烨a烩a烫b烬a烜a烯a烷a烽a焊a焐a焓a焕a焖a焗a焙a焚b焯a焰a焱b焜a煅a煊a煌a煜a煤a煨a煲b煳a煸a煺a煽a熄a熔a熘a熠a熨b熳a熵a燃a燎a燔a燠a燧a燊a燚a燥a燮b燹b爝a爨b","犭":"3:犯a犰a犴a犷a犸a犹a狁a狂a狃a狄a狈a狍a狎a狐a狒a狗a狞a狠a狡a狨a狩a独a狭a狮a狯a狰a狱h狲h狳a狴b狷a狸a狺a狻a狼a猁a猃a猊a猎a猓a猕h猖a猗a猛a猜a猝a猞a猡a猪a猫a猢a猥a猩a猬a猱a猴a猸a猹a猾a猿a獍a獐a獗a獠a獬a獭h獴a獯a獾a","用":"5:甩c甪d甫c甬b甭b甯b","田":"5:由c甲c申c电c男b甸d町a甾b畀b畅a畈a畋a界b畎a畏b畑a畔a留b畚b畛a畜b略a畦a番b畲b畴a畬b畸a畹a畿b疃a疆a","礻":"4:礼a祁a社a祀a祆a祈a祉a祎a祇a祓a祖a祗a祚a祛a祜a祝a神a祠a祢a祐a祥a祧a祯a祷a祸a祺a禄a禅a禊a福a禚a禤a禧a禳a","纟":"3:纠a纡a红a纣a纤a纥a约a级a纨a纩a纪a纫a纬a纭a纯a纰a纱a纲a纳a纵a纶a纷a纸a纹a纺a纽a纾a线a绀a绁a绂a练a组a绅a细a织a终a绉a绊a绋a绌a绍a绎a经a绐a绑h绒a结a绔a绕a绗a绘a给a绚a绛a络a绝a绞a统a绠a绡a绢a绣a绥a绦a继a绨a绩a绪a绫a续a绮a绯a绰a绱a绲a绳a维a绵a绶a绷a绸a绺a绻a综a绽a绾a绿a缀a缁a缍a缂a缃a缄a缅a缆a缇a缈a缉a缋a缌a缎a缏a缑a缒a缓a缔a缕a编a缗a缘a缙a缚a缛a缜a缝a缟a缠a缡a缢a缣a缤a缥a缦a缧a缨a缩a缪a缫a缬h缭a缮a缯a缰a缱a缲a缳a缴a缵a","车":"4:轧a轨a轩a轫a转a轭a轮a软a轰b轱a轲a轳a轴a轵a轶a轷a轸a轹a轺a轻a珲a轼a载d轾a轿a辁a辂a较a辄h辅a辆a辇b辈b辉a辊a辋a辍a辎a辏a辐a辑a输a辔b辕a辖a辗a辘a辙h辚a","辶":"3:边d辽d达d迁d迂d迄d迅d过d迈d迎d运d近d迓d返d迕d还d这d进d远d违d连d迟d迢d迤d迥d迦d迨d迩d迪d迫d迭d迮d述d迳d迷d迸d迹d追d退d送d适d逃d逄d逅d逆d选d逊d逋d逍d透d逐d逑d递d途d逖d逗d通d逛d逝d逞d速d造d逡d逢d逦d逭d逮d逯d逵d逶d逸d逻d逼d逾d遁d遂d遄d遇d遍d遏d遐d遑d遒d道d遗d遘d遛d遢d遣d遥d遨d遭d遮d遴d遵d遽d避d邀d邂d邃d邈d邋d","饣":"3:饥a饧a饨a饩a饪a饫a饬a饭a饮a饯a饰a饱a饲a饴a饵a饶a饷a饺a饼a饹a饸a饽a饿a馀a馁a馄a馅a馆a馃a馇a馈a馊a馋a馍a馏a馐a馑a馒a馓a馔a馕a","马":"3:驭a驮a驯a驰a驱a驳a驴a驵a驶a驷a驸a驹a驺a驻a驼a驾b驿a骀a骁a骂b骄a骅a骆a骇a骈a骊a骋a验a骏a骐a骑a骒a骓a骖a骗a骘b骚a骛b骜b骝a骞b骟a骠a骡a骢a骣a骤a骥a骧a","入":"2:全b","兀":"3:尧b","山":"3:屹a屺a屿a岁b岂b岌b屾a岀c岈a岍a岐a岑b岔b岖a岗b岘a岙b岚b岛b岜b岢b岣a岩b岫a岬a岭a岱b岳b岵a岷a岸b岽b岿b峁b峄a峋a峒a峙a峡a峤a峥a峦b峨a峪a峭a峰a峻a崂a崃a崀b峯b崆a崇b崎a崔b崖b崛a崞a崤a崦a崧b崩b崭b崮b崑b崴b崽g崾a嵇a嵋a嵌b嵘a嵛b嵝a嵫a嵬b嵯a嵊a嵩b嵴a嶂a嶙a嶝a嶷b巅b巍b","川":"3:州c","巛":"3:巡d巢b","廴":"2:延d廷d建d","弋":"3:式d弑a","曰":"4:曲c曳c更c曷b曹b曼g曾b替b最b","欠":"4:次a欢a欤a欣a欧a欲a欷a欹a欺a款a欻a歃a歆a歇a歌a歉a歙a","比":"4:毕b毖b毗a毙b琵b","父":"4:爷b爸b爹b","牜":"4:牝a牡a牦a牧a物a牯a牲a特a牺a牾a牿a犄a犊a犋a犍a犏a犒a","牛":"4:牟b牢b牮b牵b犁b犀d犇b犟b","王":"4:玎a玑a玏a玖a玛a玙a玟a玢a玩a玮a环a玥a玲a玳a玷a玻a珀a珂a珈a珉a珊a珍a珏a珐a珑a珅a玹a珙a珞a珠a珥a珧a珩a班h琊a珮a珣a珪a珽a球a琅a理a琉a琏a琐a珺a琍a琇a琎a珵a琚a琛a琢a琥a琦a琨a琪a琬a琮a琰a琳h琴b琶b琼a瑛a瑁a瑕a瑗a瑙a瑚h瑜a瑞a瑟b瑰a瑄a瑀a瑭a瑶a瑷a璃a瑾a璀a璁a璇h璋a璎a璜b璞a璟a璠a璘a璐a璨a璩a瓒a","白":"5:百b皂b的a皆b皇b皈a皋g皎a皑a皓a皖a皙b皤a","耂":"4:老b考b者b耄b耆b耋b","覀":"6:西c要b覃b覆b","见":"4:观a现a规a觅b视a觇a览b觉b笕b觊a觋a觌a觎a觏a觐a觑a","贝":"4:贞b负b贠b贡b财a责b贤b败a账a货b质d贩a贪b贫b贬a购a贮a贯b贰d贱a贲g贳b贴a贵b贶a贷b贸b费b贺b贻a贼a贽b贾b贿a赀b赁b赂a赃a资b赅a赆a赇a赈a赉b赊a赋a赍b赎a赏b赐a赓d赔a赕a赖a箦b赘b赙a赚a赛b赜a赝d赞b赠a赟b赡a赢g赣a","钅":"5:钱a钆a钇a针a钉a钊a钋a钌a钍a钎a钏a钐a钒a钓a钔a钕a钗a钙a钚a钛a钜a钝a钟a钠a钡a钢a钣a钤a钥a钦a钧a钨a钩a钪a钫a钬a钭a钮a钯a钰a钲a钳a钴a钵a钶a钷a钸a钹a钺a钻a钼a钽a钾a钿a铀a铁a铂a铃a铄a铅a铆a铈a铉a铊a铋a铌a铍a铎a铐a铑a铒a铕a铖a铗a铘a铙a铛a铜a铝a铞a铟a铠a铡a铢a铣a铤a铥a铧a铨a铩a铪a铫a铬a铭a铮a铯a铰a铱a铲a铳a铴a铵a银a铷a铸a铹a铺a铼a铽a链a铿a销a锁a锂a锃a锄a锅a锆a锇a锈a锉a锊a锋a锌a锍a锎a锏a锐a锑a锒a锓a锔a锕h锖a锗a锘a错a锚a锛a锝a锞a锟a锡a锢a锣a锤a锥a锦a锨a锩a锪a锫a锬a锭a键a锯a锰a锱a锲a锴a锵a锶a锷a锸a锹h锺a锻a锼a锾a锿a镀a镁a镂a镄a镅a镆a镇a镉a镊a镌a镍a镎a镏a镐a镑a镒a镓a镔a镕a镖a镗a镘a镙a镛a镜a镝a镞h镟a镡a镢a镣a镤a镥a镦a镧a镨a镩a镪h镫a镬a镭a镯a镰a镱a镲a镳a镶a","彡":"3:形a彤a彦b彧c彪d彩a彬h彭a彰a影a","彳":"3:彷a役a彻h彼a往a征a徂a径a待a徇a很a徉a徊a律a後a徐a徒a徕a得a徘a徙a徜a御a徨a循a復a徭a微h徳a徵a德a徼a徽h","歹":"4:歼a殁a殂a殃a殄a殆a殇a残a殉a殊a殍a殒a殓a殖a殚a殛a殡a殪a","母":"5:每b毑a毓a","犬":"4:状a献a猷a獒b","疒":"5:疔d疖d疗d疙d疚d疝d疟d疠d疡d疣d疤d疥d疫d疬d疮d疯d疰d疱d疲d疳d疴d疸d疹d疼d疽d疾d痂d痃d痄d病d症d痈d痉d疵d痊d痍d痒d痔d痕d痖d痘d痛d痞d痢d痣d痤a痦d痧d痨d痪d痫d痰d痱d痴d痹d痼d痿d瘀d瘁d瘃d瘅d瘐d瘊d瘌d瘕d瘗d瘘d瘙d瘟d瘥d瘦d瘩d瘛d瘠d瘢d瘤d瘪d瘫d瘼d瘭d瘰d瘳d瘴d瘵d瘸d瘾d瘿d癀d癃d癌d癍d癔d癖d癜d癞d癣d癫d癯d","目":"5:盯a盱a盲b直b相a盹a盼a盾d省b眄a眇a眈a眉d看b眍a眨a眙a眚b真g眠a眢b眩a眦a眭a眯a眵a眶a眷b眸a眺a眼a着b睁a睃a睇a睐a睑a睚a睛a睡a睢a督b睥a睦a睨a睫a睬a睹a瞄a睽a睾b睿b瞀b瞅a瞍a瞌a瞎a瞑a瞒a瞢g瞟a瞠a瞥b瞰h瞧a瞩a瞪a瞬a瞳a瞵a瞭a瞻a瞽b瞿b矍g矗b","矢":"5:矣b知a矧a矩a矫a矬a短a矮a","石":"5:矶a矸a矽a矾a矿a砀a码a砂a砉b砌a砍a砑a砒a研a砖a砗a砘a砚a砜a砭a砝a砟a砣a砥a砧a砩a砬a砰a破a砷a砸a砹a砺a砻b砼a砾a础a砦b硅a硇a硌a硎h硐a硒a硕a硖a硗a硭a硚a硪a硫a硬a确a硷a硼h碇a碉a碌a碍a碎a碑a碓a碗a碘a碚a碛a碜a碰a碁a碟a碡a碣a碥a碧b碱a碲a碳a碴a碹a磁a磋a碾a磅a磉a磊f磐b磔a磕a磙a磨d磬b磲a磺a磡a磴a磷a礁a礅a礓a礞a礤a礴a","禾":"5:秀b私a秃b秆a秉c秋a种a科a秒a秕a秭a秘a租a秣a秤a秦b秧a秩a秫a积a称a秸a移a秽a稆a稀a稂a稃a程a稍a税a稔a稗a稚a稞a稠a稣a稳a稷a稹a稻a稼a稽a稿a穆a穑a穗a穰a","穴":"5:究b穷b穸b穹b空b穿b窀b突b窃b窆b窄b窈b窍b窑b窒b窕b窖b窗b窘b窜b窝b窟b窠b窥b窦b窣b窨b窬b窭b窳b窿b窸g","糸":"6:系b紊b素b索b紧b累b紫b絮b絷b綦b綮b縻d繁b繇a纂g纛b","艮":"6:良c艰a","卝":"4:芈c","虫":"6:虬a虮a虱d虹a虺d虻a虼a虽b虾a虿b蚀a蚁a蚂a蚤b蚊a蚋a蚌a蚍a蚓a蚕b蚜a蚝a蚣a蚧a蚨a蚩b蚪a蚬a蚯a蚰a蚱a蚴a蚵a蚶a蚺a蛀a蛄a蛆a蛇a蛉a蛊b蛋b蛎a蛏a蛐a蛑a蛔a蛘a蛙a蛛a蛞a蛟a蛤a蛩b蛭a蛮b蛰b蛱a蛲a蛳a蛴a蜒a蜓a蛸a蛹a蛾a蜂a蜃d蜇b蜈a蜉a蜊a蜍a蜕a蜗a蜣a蜀b蜘h蜚b蜜b蜞a蜡a蜢a蜥a蜩a蜮a蜱a蜴a蜷a蜻a蜾a蜿a蝇a蝈a蝉a螂h蝌a蝎a蝓a蝗a蝙a蝠a蝣a蝤a蝥b蝮a蝰a蝴h蝶a蝻a蝼a蝽a蝾a螋a螃a螅a螈a融a螓a螗a螟a螨a螭a螯b蟆a蟒a螫b螬a螳a螵a螺a螽b蟀a蟊b蟋a蟑a蟓a蟥a蟛a蟠a蟪a蟮a蟹b蟾a蠃b蠊a蠓a蠖a蠕a蠛a蠡b蠢f蠲a蠹g蠼a","衤":"5:补a衩a衫a衬a衲a衽a衿a袂a袄a袍a袒a袖a袜a袢a被a袱a袷a袼a裆a裉a裎a裕a裙a裢a裣a裤a裥a裨a裰a裱a裸a裼a裾a褂h褚a褊a褐a褓h褙a褛a褡a褪a褥a褫a褴a褶a襁a襟a襦a襻a","韦":"4:韧a韩a韪d韫a韬a","鸟":"5:鸠a鸡a鸢b鸣a鸥a鸦a鸨a鸩a鸪a鸫a鸬a鸭a鸯b鸱a鸲a鸳b鸵a鸶b鸮a鸷b鸸a鸹a鸺a鸽a鸾b鸿h鹁a鹂a鹃a鹄a鹅a鹆a鹇a鹈a鹀a鹉a鹊a鹋a鹌a鹎a鹏h鹑a鹕a鹗a鹘a鹚a鹛a鹜b鹞a鹣a鹤a鹦a鹧a鹨a鹩a鹪a鹫b鹬a鹭b鹰d鹱a鹮a鹳a","风":"4:飏d飑d飒a飓d飕a飘a飙a飚d","采":"8:釆c釉a释a","乚":"1:乳a","亅":"1:事b","户":"4:戽d戾d房d所a扁d扃d扇d扈d扉d","手":"4:承c拜a拳b拿b挈b挚b挛b挲b掌b掣b掰h搴b搿h摹b摩d擎b擘b攀b","方":"4:於a施a旁g旃a旄a旅a旆a旋a旌a旎a族a旒a旖a旗a","殳":"4:殴a段a殷a殿a毁a毂a毅a","爪":"4:爬a","片":"4:版a牌a牍a牒a牖a","瓦":"4:瓮b瓯a瓴a瓶a瓷b瓿a甄a甍b甏b甑a甓b","甘":"5:甙d甚b甜a","皿":"5:盂b盅b盆b盈b益b盍b盎b盏b盐b监b盒b盔b盖b盗b盘b盛b盟b盥b簋g","竹":"6:笔b笼b竺b竽b竿b笃b笈b笄b笆b笊b笋b笏b笑b笫b笙b笛b笞b笠b笤b笥b符b笨b笪b第b笮b笱b笳b笸b笺b笾b筇b筅b等b筋b筌b筏b筐b筑b筒b答b策b筘b筚b筛b筝b筵b筠b筢b筮b筱b筲b筷b筹b筻b签b简b箅g箍b箐b箔b箕b算b箜b箝b管b箢b箧b箨b箩b箪b箬g箸b箱b箴b篁b篆b篇b篌b篑b篓b篙b篚b篝b篡b篥b篦b篪b篮b篱b篷b篼b篾g簇b簌b簏b簖b簧b簕b簟g簦b簸b簿b籀b籁b籍b","米":"6:籴b类b籼a籽a粉a粑a粒a粕a粗a粘a粜b粝a粞a粟b粢b粤b粥h粪b粮a粱b粲b粳a粹a粼a粽a精a糁a粿a糅a糇a糈a糊h糌a糍a糕a糖a糗a糙a糜d糟a糠a糨a糯a","罒":"5:罗b罘b罚b罟b罡b罢b罨b罩b罪b置b署b罱b罴g罹b罾b羁b","耳":"6:耵a耶a耷b耸b耻a耽a耿a聂b聃a聆a聊a聋b职a聍a聒a联a聘a聚b聩a聪a聱b","聿":"6:肃b肄a肆a肇b","臼":"6:臾b舁b舀b舂b舄b舅b舆b","舌":"6:舍b舐a舒a舔a","虍":"6:虎d虏d虐d虑d虔d虚d虞d虢a","衣":"6:表b袅b衮b衰b衷g衾b袁b袈b袋b袤b袭b裁d裂b装b裒b裔b裘b裟b裳b裴b裹g製b褒g褰b襄b襞b","页":"6:顶a顷a顸a项a顺a须a顼a顽a顾a顿a颀a颁a颂a颃a预a颅a领a颇a颈a颉a颊a颌a颍a颏a颐a频a颓a颔a颖a颗a题d颚a颛a颜a额a颞a颟a颠a颡a颢a颤a颥a颦b颧a","彑":"3:彖b彘b彝g","旡":"4:既a","毛":"4:毡d毪d毫b毯d毳b毵a毽d毹a氅b氆d氇d氍a","灬":"4:点b烈b热b羔b烹b焉b焘b焦b然b煮b煎b煞b煦b照b熊b熏b熙b熬b熟b熹b燕g","爫":"4:爰b爱b爵b","癶":"5:癸b登b","矛":"5:矜a","立":"5:竖b竑a站a竞g竟g章g竣a童b竦a竭a端a","缶":"6:缸a缺a罂b罄b罅a罍b罐a","羽":"6:羿b翁b翅d翀a翃a翊a翌b翎a翔a翕b翘d翚b翟b翠b翡b翥b翦b翩a翮a翰a翱a翳b翼g翻a耀a","而":"6:耍b耐a","耒":"6:耔a耕a耖a耗a耘a耙a耜a耠a耢a耥a耦a耧a耨a耩a耪a耱a","舟":"6:舡a舢a舣a舨a航a舫a般a舭a舯a舰a舱a舳a舴a舵a舶a舷a舸a船a舻a舾a艇a艄a艉a艋a艏a艘a艚a艟a艨a","行":"6:衍h衔h街h衙h衡h衢a","言":"7:訇d託a詈b註a訾b詹b誉b誊b誓b謇b謦b警b譬b","走":"7:赳d赴d赵d赶d起d趁d趄d超d越d趋d趑d趔d趟d趣d趱d","足":"7:趴a趵a趸b趿a趺a趼a趾a跃a跄a距a跆a跋a跌a跎a跏a跑a跖a跗a跚a跛a跞a践a跟a跣a跤a跨a跪a跫b跬a路a跳a跷a跸a跹a跺a跻a跶a跽a踅b踉a踊a踌a踏a踔a踝a踞a踟a踢a踣a踩a踪a踬a踮a踯a踺a踱a踵a踹a踽a蹀a蹁a蹂a蹄a蹉a蹇b蹈a蹊a蹋a蹑a蹒a蹙b蹦a蹩b躇a蹚a蹬a蹭a蹯a蹰a蹲a蹴a蹶a蹼a蹿a躁a躅a躏a躐a躔a躜a躞a","酉":"7:酊a酋c酌a配a酎a酏a酐a酒a酗a酚a酝a酞a酡a酢a酣a酤a酥a酩a酪a酬a酯a酰a酱b酲a酴a酵a酶a酷a酸a酹a酽a酾a酿a醅a醇a醉a醋a醌a醍a醐a醑a醒a醚a醛a醢a醣a醪a醭a醮a醯a醴a醵a醺a","里":"7:重c野a量b","飠":"8:食b飧a飨a餍d餐b餮b饔b饕b","文":"4:斋b斌a斐b斑h斓a","斗":"4:料a斛a斜a斟a斡a","瓜":"5:瓞a瓠a瓢a瓣h瓤a","皮":"5:皱a皲a皴a","示":"5:祟b票b祭b禀g禁b","羊":"6:羞b羚a羝a羟a群a羧a羯a羰a羲b羸g羹b羼d","自":"6:臬b臭b","至":"6:致a臻a","色":"6:艳a艴a","血":"4:衄a衅a","豆":"7:豇a豉a豌a","豸":"7:豹a豺a貂a貅h貉a貊a貌a貔a貘a","身":"7:躬a躯a躲a躺a","車":"7:軎b","辰":"7:辱b","邑":"7:邕g","金":"8:釜b鉴b銎b銮b鋈b鋆b錾b鍪b鎏b鏊b鏖d鐾b鑫b","隹":"8:隼b隽b难a雀b雁d雄a雅a集b雇d雉a雍b雎a雏a雌a雒a雕a雠a","齿":"8:龀a龃a龄a龅a龆a龇a龈a龉a龊a龋a龌a","疋":"5:疍b疏a疑a","龙":"5:龛b龚b","爻":"4:爽c","玄":"5:率b","肉":"6:胬b脔b腐d","角":"7:觖a觚a觞a觜b解a觥a触a觫a觯a觳a","豕":"7:豚a象b豢b豪b豫a豳d","赤":"7:赦a赧a赫a赭a","雨":"8:雩b雪b雯b雳b零b雷b雹b雾b需b霁b霆b霄b震b霈b霉b霍b霎g霏b霓b霖b霑b霜b霞b霪b霭b霰b露b霸b霹b霾b","首":"9:馗d馘a","麦":"7:麸a","生":"5:產b甥a甦a","辛":"7:辜b辞a辟a辣a辨h辩h辫h","青":"8:靓a靖a静a靛a","鱼":"8:鱿a鲁b鲂a鲅a鲆a鲇a鲈a鲋a鲍a鲎b鲐a鲑a鲒a鲔a鲕a鲚a鲛a鲜a鲞b鲟a鲠a鲡a鲢a鲣a鲤a鲥a鲦a鲧a鲨b鲩a鲫a鲭a鲮a鲰a鲱a鲲a鲳a鲴a鲵a鲶a鲷a鲸a鲺a鲻a鲼a鲽a鳃a鳄a鳅a鳆a鳇a鳊a鳋a鳌b鳍a鳎a鳏a鳐a鳓a鳔a鳕a鳖b鳗a鳘b鳙a鳜a鳝a鳞a鳟a鳢a","黽":"12:鼋b鼍b","革":"9:靳a靴a靶a靼a鞅a鞋a鞍a鞑a鞒a鞔a鞘a鞠a鞣a鞫a鞭a鞯a鞥a鞲a鞴a","音":"9:韵a韶a","骨":"9:骰a骱a骶a骷a骸a骺a骼a髀a髁a髂a髅a髋a髌a髓a髑a","髟":"10:髡b髦b髫b髯b髭b髹b髻b鬃b鬈b鬏b鬓b鬟b鬣b","鬼":"9:魁d魂a魃d魄a魅d魇d魈d魉d魍d魏a魑d魔d","鹿":"11:麂d麇d麈d麋d麒a麓b麝d麟a","攴":"4:敲a","臣":"6:臧d","麻":"11:麽d麾d黁d","鼎":"12:鼐b","頁":"9:頔a頫a","非":"8:靠b靡d","面":"9:靥d","黍":"12:黎b黏a","齐":"6:齑b","釒":"8:鋐a錤a","卤":"7:鹾a","黄":"11:黉b","黑":"12:黔a默a黛b黜a黝h黟a黠a黢a黥a黧b黩a黪a黯a","鼻":"14:鼽a鼾a齄a齉a","谷":"7:豁a","黹":"12:黻a黼a","鼠":"13:鼢a鼬a鼯a鼷a鼹a","香":"9:馥a馨b馡a","麥":"11:麴a","鼓":"13:鼗b鼙b","貝":"7:贇b","韋":"9:韡a","魚":"11:鱀a","龍":"16:龑b","鬲":"10:鬻b","龠":"17:龢a"}');
    }, function(a, b, d) {
      d.r(b);
      var c = d(1), r = d(0), e2 = function() {
        for (var a2 = 0, b2 = 0, d2 = arguments.length; b2 < d2; b2++)
          a2 += arguments[b2].length;
        var c2 = Array(a2), r2 = 0;
        for (b2 = 0; b2 < d2; b2++)
          for (var e3 = arguments[b2], h2 = 0, n2 = e3.length; h2 < n2; h2++, r2++)
            c2[r2] = e3[h2];
        return c2;
      };
      var h, n = c;
      function t2(a2) {
        var b2;
        return h && h.hasPlugin("trad") ? o2(null === (b2 = h.trad.dict) || void 0 === b2 ? void 0 : b2.radical, a2) : null;
      }
      function o2(a2, b2) {
        for (var d2 in a2) {
          var c2 = a2[d2], e3 = c2.indexOf(b2);
          if (-1 !== e3) {
            var h2 = r[c2.substr(e3 + 1, 1)];
            return "*" === d2 ? { radicalCount: parseInt(c2.substr(e3 + 2, 2)), radical: b2, struct: h2 } : { radicalCount: parseInt(c2.substring(0, c2.indexOf(":"))), radical: d2, struct: h2 };
          }
        }
        return { radicalCount: 0, struct: "", radical: "" };
      }
      function i(a2) {
        return !("*" === a2 || !n[a2]);
      }
      function g(a2, b2) {
        var d2 = b2[a2];
        if (!d2)
          return function() {
            for (var a3 = [], b3 = 0; b3 < arguments.length; b3++)
              a3[b3] = arguments[b3];
            console.warn.apply(console, e2(["CnChar Warning:"], a3));
          }("错误的偏旁部首：" + a2), [];
        var c2 = 2, h2 = 2;
        "*" === a2 && (c2 = 0, h2 = 3);
        for (var n2 = [], t3 = c2; t3 < d2.length; t3 += h2)
          "*" === a2 && 3 === h2 && /[0-9]{2}/.test(d2.substr(t3 + 2, 2)) && (h2 = 4), n2.push({ word: d2[t3], struct: r[d2[t3 + 1]] });
        return n2;
      }
      var u = Object.assign(function(a2) {
        for (var b2 = [], d2 = 0; d2 < a2.length; d2++) {
          var c2 = o2(n, a2[d2]);
          c2.radical || (c2 = t2(a2[d2]) || c2), b2.push(c2);
        }
        return b2;
      }, { pluginName: "radical", install: function(a2) {
        !function(a3) {
          h = a3;
        }(a2);
      }, setRadical: function(a2, b2) {
        h._.mapJson(a2, b2, function(a3, b3) {
          a3.length > 1 && (a3 = a3[0]), -1 !== Object.values(c).join("").indexOf(a3) && function(a4) {
            for (var b4 in n)
              if (-1 !== n[b4].indexOf(a4))
                return void (n[b4] = n[b4].replace(new RegExp(a4 + "[a-z][0-9]{0,2}"), ""));
          }(a3), function(a4, b4) {
            var d2 = b4.radical, c2 = b4.struct, e3 = b4.radicalCount, h2 = function(a5, b5) {
              for (var d3 in a5)
                if (a5[d3] === b5)
                  return d3;
              return "";
            }(r, c2);
            h2 || (h2 = "*", console.warn("struct [" + c2 + "] not found in " + JSON.stringify(Object.values(r))));
            a4 === d2 ? n["*"] += "" + a4 + (h2 || "*") + (e3 || 0) : n[d2] ? n[d2] += "" + a4 + h2 : n[d2] = e3 + ":" + a4 + h2;
          }(a3, b3);
        });
      }, getRadicalCount: function(a2) {
        return i(a2) ? parseInt(n[a2][0]) : 0;
      }, radicalToWord: function(a2, b2) {
        var d2;
        void 0 === b2 && (b2 = false);
        var c2 = g(a2, n);
        return b2 && h && h.hasPlugin("trad") ? c2.concat(g(a2, null === (d2 = h.trad.dict) || void 0 === d2 ? void 0 : d2.radical)) : c2;
      }, isRadical: i, dict: { radical: c, struct: r } });
      "object" == typeof window && (window.CncharRadical = u, window.CnChar && window.CnChar.use(u));
      b.default = u;
    }]).default;
  });
})(cnchar_radical_min);
const radical = /* @__PURE__ */ getDefaultExportFromCjs(cnchar_radical_minExports);
var cnchar_order_minExports = {};
var cnchar_order_min = {
  get exports() {
    return cnchar_order_minExports;
  },
  set exports(v) {
    cnchar_order_minExports = v;
  }
};
(function(module2, exports2) {
  !function(j, f2) {
    module2.exports = f2();
  }(commonjsGlobal, function() {
    return function(j) {
      var f2 = {};
      function s(k) {
        if (f2[k])
          return f2[k].exports;
        var c = f2[k] = { i: k, l: false, exports: {} };
        return j[k].call(c.exports, c, c.exports, s), c.l = true, c.exports;
      }
      return s.m = j, s.c = f2, s.d = function(j2, f3, k) {
        s.o(j2, f3) || Object.defineProperty(j2, f3, { enumerable: true, get: k });
      }, s.r = function(j2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(j2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(j2, "__esModule", { value: true });
      }, s.t = function(j2, f3) {
        if (1 & f3 && (j2 = s(j2)), 8 & f3)
          return j2;
        if (4 & f3 && "object" == typeof j2 && j2 && j2.__esModule)
          return j2;
        var k = /* @__PURE__ */ Object.create(null);
        if (s.r(k), Object.defineProperty(k, "default", { enumerable: true, value: j2 }), 2 & f3 && "string" != typeof j2)
          for (var c in j2)
            s.d(k, c, function(f4) {
              return j2[f4];
            }.bind(null, c));
        return k;
      }, s.n = function(j2) {
        var f3 = j2 && j2.__esModule ? function() {
          return j2.default;
        } : function() {
          return j2;
        };
        return s.d(f3, "a", f3), f3;
      }, s.o = function(j2, f3) {
        return Object.prototype.hasOwnProperty.call(j2, f3);
      }, s.p = "", s(s.s = 2);
    }([function(j) {
      j.exports = JSON.parse('{"一":"j","乙":"o","丁":"jg","七":"ju","乃":"ws","乜":"ru","九":"so","了":"eg","二":"jj","人":"sl","亻":"sf","儿":"su","入":"sl","八":"sl","冂":"fr","几":"so","凵":"bf","刀":"rs","刁":"ri","力":"rs","勹":"sr","匕":"su","十":"jf","厂":"js","厶":"nk","又":"el","万":"jrs","丈":"jsl","三":"jjj","上":"fjj","下":"jfk","丌":"jsf","个":"slf","丫":"ksf","丸":"sok","久":"sel","乇":"sju","么":"snk","义":"ksl","乞":"sjo","也":"rfu","习":"rki","乡":"nns","亍":"jjg","于":"jjg","亏":"jjz","亡":"kjb","亿":"sfo","兀":"jsu","凡":"sok","刃":"rsd","勺":"srk","千":"sjf","卫":"rfj","叉":"elk","口":"fcj","囗":"fcj","土":"jfj","士":"jfj","夕":"sek","大":"jsl","女":"msj","子":"egj","孑":"egi","孓":"egl","寸":"jgk","小":"gsk","尢":"jsu","尸":"cjs","山":"fbf","巛":"mmm","川":"sff","工":"jfj","己":"cju","已":"cju","巳":"cju","巾":"frf","干":"jjf","幺":"nnk","广":"kjs","廾":"jsf","弋":"jyk","弓":"cjz","才":"jgs","门":"kfr","飞":"osk","马":"czj","不":"jsfk","与":"jzj","丐":"jfjz","丑":"cfjj","专":"jjxk","中":"fcjf","丰":"jjjf","丹":"srkj","为":"ksrk","之":"kel","乌":"srzj","书":"crfk","予":"ekeg","云":"jjnk","互":"jnej","亓":"jjsf","五":"jfcj","井":"jjsf","亢":"kjso","什":"sfjf","仁":"sfjj","仂":"sfrs","仃":"sfjg","仄":"jssl","仅":"sfel","仆":"sffk","仇":"sfso","仉":"sfso","今":"slke","介":"slsf","仍":"sfws","从":"sksl","仑":"slsu","仓":"slru","允":"nksu","元":"jjsu","公":"slnk","六":"kjsk","兮":"sljz","内":"frsk","冈":"frsk","冗":"deso","凤":"soek","凶":"skbf","分":"slrs","切":"jhrs","刈":"skfg","劝":"ekrs","办":"rsdk","勾":"srnk","勿":"srss","匀":"srki","化":"sfsu","匹":"jsub","区":"jskb","卅":"jsff","升":"sjsf","午":"sjjf","卞":"kjfk","厄":"jsru","厅":"jsjg","历":"jsrs","及":"sal","友":"jsel","双":"ekel","反":"ssel","壬":"sjfj","天":"jjsl","太":"jslk","夫":"jjsl","夭":"sjsl","孔":"egiu","少":"fsks","尤":"jsuk","尹":"cjjs","尺":"cjsl","屯":"jbfu","巴":"cfju","币":"sfrf","幻":"nnkr","廿":"jffj","开":"jjsf","引":"cjzf","心":"dykk","忆":"dkfo","戈":"jysk","户":"kcjs","手":"sjjg","扎":"jgiu","支":"jfel","攴":"fjel","攵":"sjsl","文":"kjsl","斗":"kkjf","斤":"ssjf","方":"kjrs","无":"jjsu","日":"fcjj","曰":"fcjj","月":"srjj","木":"jfsl","欠":"sesl","止":"fjfj","歹":"jsek","殳":"svel","毋":"brsj","比":"jhsu","毛":"sjju","氏":"shjy","气":"sjjo","水":"gesl","火":"dssl","爪":"ssfl","父":"sksl","爻":"sksl","爿":"bfjs","片":"sfjc","牙":"jngs","牛":"sjjf","犬":"jslk","王":"jjfj","瓦":"jhok","肀":"cjjf","艺":"jffo","见":"fcsu","计":"kpjf","订":"kpjg","讣":"kpfk","认":"kpsl","讥":"kpso","贝":"fcsk","车":"jnjf","邓":"ekwf","长":"sjhl","闩":"kfrj","队":"wfsl","韦":"jjrf","风":"sosk","且":"fcjjj","丕":"jsfkj","世":"jffjb","丘":"sfjfj","丙":"jfrsk","业":"ffksj","丛":"skslj","东":"jngsk","丝":"nnnnj","主":"kjjfj","乍":"sjfjj","乎":"sksjg","乏":"skel","乐":"sbgsk","仔":"sfegj","仕":"sfjfj","他":"sfrfu","仗":"sfjsl","付":"sfjgk","仙":"sffbf","仝":"sljfj","仞":"sfrsd","仟":"sfsjf","仡":"sfsjo","代":"sfjyk","令":"slkek","以":"hksk","仨":"sfjjj","仪":"sfksl","仫":"sfsnk","们":"sfkfr","兄":"fcjsu","兰":"ksjjj","冉":"frfjj","册":"srsrj","写":"dejzj","冬":"selkk","冯":"kiczj","凸":"fjfqj","凹":"fvfcj","出":"bffbf","击":"jjfbf","刊":"jjffg","刍":"secjj","功":"jfirs","加":"rsfcj","务":"selrs","劢":"jrsrs","包":"srcju","匆":"srssk","北":"fjisu","匝":"jfrfb","卉":"jfjsf","半":"ksjjf","卟":"fcjfk","占":"fjfcj","卡":"fjjfk","卢":"fjcjs","卮":"ssjru","卯":"shsrf","厉":"jsjrs","去":"jfjnk","发":"nselk","古":"jffcj","句":"srfcj","另":"fcjrs","叨":"fcjrs","叩":"fcjrf","只":"fcjsk","叫":"fcjhf","召":"rsfcj","叭":"fcjsl","叮":"fcjjg","可":"jfcjg","台":"nkfcj","叱":"fcjsu","史":"fcjsl","右":"jsfcj","叵":"jfcjb","叶":"fcjjf","号":"fcjjz","司":"rjfcj","叹":"fcjel","叻":"fcjrs","叼":"fcjri","叽":"fcjso","囚":"fcskj","四":"fcsbj","圣":"eljfj","处":"selfk","外":"sekfk","央":"fcjsl","夯":"jslrs","失":"sjjsl","头":"kkjsk","奴":"msjel","奶":"msjws","孕":"wsegj","宁":"kdejg","它":"kdesu","宄":"kdeso","对":"ekjgk","尔":"segsk","尕":"wsgsk","尻":"cjsso","尼":"cjssu","左":"jsjfj","巧":"jfijz","巨":"jcjb","市":"kjfrf","布":"jsfrf","帅":"fsfrf","平":"jksjf","幼":"nnkrs","庀":"kjssu","弁":"nkjsf","弗":"cjzsf","弘":"cjznk","归":"fscjj","必":"dyksk","忉":"dkfrs","戊":"jsysk","戋":"jjysk","扑":"jgifk","扒":"jgisl","打":"jgijg","扔":"jgiws","斥":"ssjfk","旦":"fcjjj","旧":"ffcjj","未":"jjfsl","末":"jjfsl","本":"jfslj","札":"jfsku","术":"jfslk","正":"jfjfj","母":"brkjk","氐":"shjyk","民":"cjhjy","氕":"sjjos","永":"kresl","汀":"kkijg","汁":"kkijf","汇":"kkijb","汉":"kkiel","灭":"jdssl","犯":"stsru","犰":"stsso","玄":"kjnnk","玉":"jjfjk","瓜":"sshkl","甘":"jffjj","生":"sjjfj","用":"srjjf","甩":"srjju","田":"fcjfj","由":"fcjfj","甲":"fcjjf","申":"fcjjf","电":"fcjju","疋":"efjsl","白":"sfcjj","皮":"esfel","皿":"fcffj","目":"fcjjj","矛":"ekegs","矢":"sjjsl","石":"jsfcj","示":"jjgsk","礼":"kefku","禾":"sjfsl","穴":"kdesl","立":"kjksj","纠":"nnihf","艽":"jffso","艾":"jffsl","艿":"jffws","节":"jffrf","讦":"kpjjf","讧":"kpjfj","讨":"kpjgk","让":"kpfjj","讪":"kpfbf","讫":"kpsjo","训":"kpsff","议":"kpksl","讯":"kpojf","记":"kpcju","轧":"jnfiu","边":"rskal","辽":"egkal","邗":"jjfwf","邙":"kjbwf","邛":"jfiwf","邝":"kjswf","钅":"sjjjh","闪":"kfrsk","阡":"wfsjf","阢":"wfjsu","饥":"sehso","驭":"cziel","鸟":"srkzj","龙":"jsusk","丞":"egeslj","丢":"sjfjnk","乒":"sfjfjs","乓":"sfjfjk","乔":"sjslsf","乩":"fjfcju","买":"ekkjsk","争":"secjjg","亘":"jfcjjj","亚":"jffksj","交":"kjsksl","亥":"kjnssk","亦":"kjsgsk","产":"kjksjs","仰":"sfshrf","仲":"sffcjf","仳":"sfjhsu","仵":"sfsjjf","件":"sfsjjf","价":"sfslsf","任":"sfsjfj","份":"sfslrs","仿":"sfkjrs","企":"slfjfj","伉":"sfkjso","伊":"sfcjjs","伍":"sfjfcj","伎":"sfjfel","伏":"sfjslk","伐":"sfjysk","休":"sfjfsl","众":"slsksl","优":"sfjsuk","伙":"sfdssl","会":"sljjnk","伛":"sfjskb","伞":"slksjf","伟":"sfjjrf","传":"sfjjxk","伢":"sfjngs","伤":"sfsjrs","伥":"sfsjhl","伦":"sfslsu","伧":"sfslru","伪":"sfksrk","伫":"sfkdej","佤":"sfjhok","充":"kjnksu","兆":"skiusk","先":"sjfjsu","光":"fksjsu","全":"sljjfj","共":"jffjsk","关":"ksjjsl","兴":"kksjsk","再":"jfrfjj","军":"dejnjf","农":"deshsl","冰":"kigesl","冱":"kijnej","冲":"kifcjf","决":"kicjsl","凫":"srkzso","凼":"geskbf","刎":"srssfg","刑":"jjsffg","划":"jyskfg","刖":"srjjfg","列":"jsekfg","刘":"kjskfg","则":"fcskfg","刚":"frskfg","创":"skrufg","劣":"fsksrs","动":"jjnkrs","匈":"srskbf","匠":"jssjfb","匡":"jjjfjb","华":"sfsujf","协":"jfrsdk","印":"shjrf","危":"sejsru","压":"jsjfjk","厌":"jsjslk","厍":"jsjnjf","吁":"fcjjjg","吃":"fcjsjo","各":"selfcj","吆":"fcjnnk","合":"sljfcj","吉":"jfjfcj","吊":"fcjfrf","同":"frjfcj","名":"sekfcj","后":"ssjfcj","吏":"jfcjsl","吐":"fcjjfj","向":"sfrfcj","吒":"fcjsju","吓":"fcjjfk","吕":"fcjfcj","吖":"fcjksf","吗":"fcjczj","囝":"fcegjj","回":"fcfcjj","囟":"sfcskj","因":"fcjskj","囡":"fcmsjj","团":"fcjgsj","在":"jsfjfj","圩":"jfijjg","圪":"jfisjo","圬":"jfijjz","圭":"jfjjfj","圮":"jficju","圯":"jficju","地":"jfirfu","圳":"jfisff","圹":"jfikjs","场":"jfiwss","圾":"jfisal","壮":"kifjfj","夙":"sojsek","多":"seksek","夷":"jcjzsl","夸":"jsljjz","夹":"jksjsl","夺":"jsljgk","夼":"jslsff","奸":"msjjjf","她":"msjrfu","好":"msjegj","妁":"msjsrk","如":"msjfcj","妃":"msjcju","妄":"kjbmsj","妆":"kifmsj","妇":"msjcjj","妈":"msjczj","字":"kdeegj","存":"jsfegj","孙":"egigsk","宅":"kdesju","宇":"kdejjg","守":"kdejgk","安":"kdemsj","寺":"jfjjgk","寻":"cjjjgk","导":"cjujgk","尖":"fskjsl","尘":"fskjfj","尥":"jsusrk","尧":"jysjsu","尽":"cjslkk","屹":"fbfsjo","屺":"fbfcju","屿":"fbfjzj","岁":"fbfsek","岂":"fbfcju","岌":"fbfsal","州":"dskfkf","巡":"mmmkal","巩":"jfisok","帆":"frfsok","师":"fsjfrf","年":"sjjfjf","并":"ksjjsf","庄":"kjsjfj","庆":"kjsjsl","延":"sfjbal","廷":"sjfjal","异":"cjujsf","式":"jjfiyk","弛":"cjzrfu","当":"fkscjj","忏":"dkfsjf","忖":"dkfjgk","忙":"dkfkjb","戌":"jsjysk","戍":"jskysk","戎":"jjsysk","戏":"ekjysk","成":"jsrysk","托":"jgisju","扛":"jgijfj","扣":"jgifcj","扦":"jgisjf","执":"jgisok","扩":"jgikjs","扪":"jgikfr","扫":"jgicjj","扬":"jgiwss","收":"hfsjsl","旨":"sufcjj","早":"fcjjjf","旬":"srfcjj","旭":"sofcjj","旮":"sofcjj","旯":"fcjjso","曲":"fcjffj","曳":"fcjjys","有":"jsfrjj","朱":"sjjfsl","朴":"jfskfk","朵":"svjfsl","机":"jfskso","朽":"jfskjz","杀":"skjgsk","杂":"sojgsk","权":"jfskel","次":"kisesl","欢":"eksesl","此":"fjfisu","死":"jseksu","毕":"jhsujf","氖":"sjjows","氘":"sjjosf","氽":"slgesl","汆":"slgesl","汊":"kkielk","汐":"kkisek","汔":"kkisjo","汕":"kkifbf","汗":"kkijjf","汛":"kkiojf","汜":"kkicju","汝":"kkimsj","江":"kkijfj","池":"kkirfu","污":"kkijjz","汤":"kkiwss","汲":"kkisal","灯":"dsskjg","灰":"jsdssl","爷":"skslrf","牝":"sjfisu","牟":"nksjjf","犴":"stsjjf","犷":"stskjs","犸":"stsczj","玎":"jjfijg","玑":"jjfiso","百":"jsfcjj","祁":"kefkwf","竹":"sjfsjg","米":"ksjfsl","糸":"nnkgsk","纡":"nnijjg","红":"nnijfj","纣":"nnijgk","纤":"nnisjf","纥":"nnisjo","约":"nnisrk","级":"nnisal","纨":"nnisok","纩":"nnikjs","纪":"nnicju","纫":"nnirsd","缶":"sjjfbf","网":"frsksk","羊":"ksjjjf","羽":"rkirki","老":"jfjssu","考":"jfjsjz","而":"jsfrff","耒":"jjjfsl","耳":"jffjjj","聿":"cjjjjf","肉":"frsksk","肋":"srjjrs","肌":"srjjso","臣":"jfcjfb","自":"sfcjjj","至":"jnkjfj","臼":"sfjcjj","舌":"sjffcj","舛":"sekjnf","舟":"ssrkjk","艮":"cjjhsl","色":"secfju","芄":"jffsok","芊":"jffsjf","芋":"jffjjg","芍":"jffsrk","芎":"jffcjz","芏":"jffjfj","芑":"jffcju","芒":"jffkjb","芗":"jffnns","芝":"jffkel","芨":"jffsal","虍":"fjesju","虫":"fcjfjk","血":"sfcffj","行":"ssfjjg","衣":"kjshsl","西":"jfcsbj","观":"ekfcsu","讲":"kpjjsf","讳":"kpjjrf","讴":"kpjskb","讵":"kpjcjb","讶":"kpjngs","讷":"kpfrsk","许":"kpsjjf","讹":"kpsfsu","论":"kpslsu","讼":"kpslnk","讽":"kpsosk","设":"kpsvel","访":"kpkjrs","诀":"kpcjsl","贞":"fjfcsk","负":"sefcsk","轨":"jnfiso","达":"jskkal","迁":"sjfkal","迂":"jjgkal","迄":"sjokal","迅":"ojfkal","过":"jgkkal","迈":"jrskal","邡":"kjrswf","邢":"jjsfwf","那":"rjjswf","邦":"jjjswf","邪":"jngswf","邬":"srziwf","钆":"sjjjhu","钇":"sjjjho","闫":"kfrjjj","闭":"kfrjgs","问":"kfrfcj","闯":"kfrczj","阪":"wfssel","阮":"wfjjsu","阱":"wfjjsf","防":"wfkjrs","阳":"wffcjj","阴":"wfsrjj","阵":"wfjnjf","阶":"wfslsf","页":"jsfcsk","饧":"sehwss","驮":"czijsl","驯":"czisff","驰":"czirfu","齐":"kjslsf","两":"jfrsksk","严":"jffksjs","串":"fcjfcjf","丽":"jfrkfrk","乱":"sjffcju","亨":"kjfcjeg","亩":"kjfcjfj","伯":"sfsfcjj","估":"sfjffcj","伲":"sfcjssu","伴":"sfksjjf","伶":"sfslkek","伸":"sffcjjf","伺":"sfrjfcj","似":"sfhksk","伽":"sfrsfcj","佃":"sffcjfj","但":"sffcjjj","位":"sfkjksj","低":"sfshjyk","住":"sfkjjfj","佐":"sfjsjfj","佑":"sfjsfcj","体":"sfjfslj","何":"sfjfcjg","佗":"sfkdesu","佘":"sljjgsk","余":"sljjgsk","佚":"sfsjjsl","佛":"sfcjzsf","作":"sfsjfjj","佝":"sfsrfcj","佞":"sfjjmsj","佟":"sfselkk","你":"sfsegsk","佣":"sfsrjjf","佥":"sljkksj","佧":"sffjjfk","克":"jffcjsu","免":"sefcjsu","兑":"ksfcjsu","兕":"fvfcjsu","兵":"sfjfjsk","况":"kifcjsu","冶":"kinkfcj","冷":"kislkek","冻":"kijngsk","初":"kefskrs","删":"srsrjfg","判":"ksjjsfg","刨":"srcjufg","利":"sjfskfg","别":"fcjrsfg","刭":"ekjfifg","助":"fcjjirs","努":"msjelrs","劫":"jfjnkrs","劬":"srfcjrs","劭":"rsfcjrs","励":"jsjrsrs","劲":"ekjfirs","劳":"jffders","匣":"jfcjjfb","医":"jsjjskb","卣":"fjfccjj","卤":"fjfcskj","即":"cjjhkrf","却":"jfjnkrf","卵":"shksrfk","县":"fcjjjnk","君":"cjjsfcj","吝":"kjslfcj","吞":"jjslfcj","吟":"fcjslke","吠":"fcjjslk","吡":"fcjjhsu","吣":"fcjdykk","否":"jsfkfcj","吧":"fcjcfju","吨":"fcjjbfu","吩":"fcjslrs","含":"slkefcj","听":"fcjssjf","吭":"fcjkjso","吮":"fcjnksu","启":"kcjsfcj","吱":"fcjjfel","吲":"fcjcjzf","吴":"fcjjjsl","吵":"fcjfsks","吸":"fcjsal","吹":"fcjsesl","吻":"fcjsrss","吼":"fcjegiu","吾":"jfcjfcj","呀":"fcjjngs","呃":"fcjjsru","呆":"fcjjfsl","呈":"fcjjjfj","告":"sjfjfcj","呋":"fcjjjsl","呐":"fcjfrsk","呒":"fcjjjsu","呓":"fcjjffo","呔":"fcjjslk","呕":"fcjjskb","呖":"fcjjsrs","呗":"fcjfcsk","员":"fcjfcsk","呙":"fcjfrsk","呛":"fcjslru","呜":"fcjsrzj","囤":"fcjbfuj","囫":"fcsrssj","园":"fcjjsuj","困":"fcjfskj","囱":"sfcsekj","围":"fcjjrfj","囵":"fcslsuj","圻":"jfissjf","址":"jfifjfj","坂":"jfissel","均":"jfisrki","坊":"jfikjrs","坌":"slrsjfj","坍":"jfisrkj","坎":"jfisesl","坏":"jfijsfk","坐":"skskjfj","坑":"jfikjso","块":"jficjsl","坚":"ffeljfj","坛":"jfijjnk","坜":"jfijsrs","坝":"jfifcsk","坞":"jfisrzj","坟":"jfikjsl","坠":"wfsljfj","声":"jfjcfjs","壳":"jfjdeso","奁":"jsljskb","奂":"sefcjsl","妊":"msjsjfj","妍":"msjjjsf","妒":"msjkcjs","妓":"msjjfel","妖":"msjsjsl","妗":"msjslke","妙":"msjfsks","妞":"msjcfjj","妣":"msjjhsu","妤":"msjekeg","妥":"skksmsj","妨":"msjkjrs","妩":"msjjjsu","妪":"msjjskb","妫":"msjksrk","姊":"msjszfs","姒":"msjhksk","孚":"skksegj","孛":"jfdeegj","孜":"egisjsl","孝":"jfjsegj","宋":"kdejfsl","完":"kdejjsu","宏":"kdejsnk","寿":"jjjsjgk","尬":"jsuslsf","尾":"cjssjju","尿":"cjsgesl","局":"cjsrfcj","屁":"cjsjhsu","层":"cjsjjnk","岈":"fbfjngs","岍":"fbfjjsf","岐":"fbfjfel","岑":"fbfslke","岔":"slrsfbf","岖":"fbfjskb","岗":"fbffrsk","岘":"fbffcsu","岙":"sjslfbf","岚":"fbfsosk","岛":"srkzfbf","岜":"fbfcfju","希":"skjsfrf","帏":"frfjjrf","帐":"frfsjhl","庇":"kjsjhsu","床":"kjsjfsl","庋":"kjsjfel","序":"kjsekeg","庐":"kjskcjs","庑":"kjsjjsu","库":"kjsjnjf","应":"kjskksj","弃":"kjnkjsf","弄":"jjfjjsf","弟":"kscjzfs","张":"cjzsjhl","形":"jjsfsss","彤":"srkjsss","彷":"ssfkjrs","役":"ssfsvel","彻":"ssfjhrs","忌":"cjudykk","忍":"rsddykk","忐":"fjjdykk","忑":"jfkdykk","忒":"jdykkyk","志":"jfjdykk","忘":"kjbdykk","忡":"dkffcjf","忤":"dkfsjjf","忧":"dkfjsuk","忪":"dkfslnk","快":"dkfcjsl","忭":"dkfkjfk","忮":"dkfjfel","忱":"dkfdesu","忸":"dkfcfjj","忻":"dkfssjf","忾":"dkfsjjo","怀":"dkfjsfk","怃":"dkfjjsu","怄":"dkfjskb","怅":"dkfsjhl","怆":"dkfslru","我":"sjgiysk","戒":"jjsfysk","扭":"jgicfjj","扮":"jgislrs","扯":"jgifjfj","扰":"jgijsuk","扳":"jgissel","扶":"jgijjsl","批":"jgijhsu","扼":"jgijsru","找":"jgijysk","技":"jgijfel","抄":"jgifsks","抉":"jgicjsl","把":"jgicfju","抑":"jgishrf","抒":"jgiekeg","抓":"jgissfl","投":"jgisvel","抖":"jgikkjf","抗":"jgikjso","折":"jgissjf","抚":"jgijjsu","抛":"jgisors","抟":"jgijjxk","抠":"jgijskb","抡":"jgislsu","抢":"jgislru","护":"jgikcjs","报":"jgirfel","拒":"jgijcjb","拟":"jgihksk","攸":"sffsjsl","改":"cjhsjsl","攻":"jfisjsl","旰":"fcjjjjf","旱":"fcjjjjf","时":"fcjjjgk","旷":"fcjjkjs","更":"jfcjjsl","杆":"jfskjjf","杈":"jfskelk","杉":"jfsksss","杌":"jfskjsu","李":"jfslegj","杏":"jfslfcj","材":"jfskjgs","村":"jfskjgk","杓":"jfsksrk","杖":"jfskjsl","杜":"jfskjfj","杞":"jfskcju","束":"jfcjfsl","杠":"jfskjfj","条":"seljgsk","来":"jksjfsl","杨":"jfskwss","杩":"jfskczj","极":"jfsksal","欤":"jzisesl","步":"fjfjfss","歼":"jseksjf","每":"sjbrkjk","氙":"sjjofbf","氚":"sjjosff","求":"jgkislk","汞":"jfjgesl","汨":"kkifcjj","汩":"kkifcjj","汪":"kkijjfj","汰":"kkijslk","汴":"kkikjfk","汶":"kkikjsl","汹":"kkiskbf","汽":"kkisjjo","汾":"kkislrs","沁":"kkidykk","沂":"kkissjf","沃":"kkisjsl","沅":"kkijjsu","沆":"kkikjso","沈":"kkidesu","沉":"kkideso","沌":"kkijbfu","沏":"kkijhrs","沐":"kkijfsl","沔":"kkijfbr","沙":"kkifsks","沛":"kkijfrf","沟":"kkisrnk","没":"kkisvel","沣":"kkijjjf","沤":"kkijskb","沥":"kkijsrs","沦":"kkislsu","沧":"kkislru","沩":"kkiksrk","沪":"kkikcjs","泐":"kkiwfrs","泛":"kkiskel","灵":"cjjdssl","灶":"dsskjfj","灸":"sekdssl","灼":"dssksrk","灾":"kdedssl","灿":"dsskfbf","炀":"dsskwss","牡":"sjfijfj","牢":"kdesjjf","状":"kifjslk","犹":"stsjsuk","狁":"stsnksu","狂":"stsjjfj","狃":"stscfjj","狄":"stsdssl","狈":"stsfcsk","玖":"jjfisel","玛":"jjficzj","甫":"jfrjjfk","甬":"ekfrjjf","男":"fcjfjrs","甸":"srfcjfj","町":"fcjfjjg","疔":"kjskijg","疖":"kjskirf","疗":"kjskieg","皂":"sfcjjju","盯":"fcjjjjg","矣":"nksjjsl","矶":"jsfcjso","社":"kefkjfj","祀":"kefkcju","秀":"sjfslws","私":"sjfsknk","秃":"sjfslso","究":"kdeskso","穷":"kdeskrs","系":"snnkgsk","纬":"nnijjrf","纭":"nnijjnk","纯":"nnijbfu","纰":"nnijhsu","纱":"nnifsks","纲":"nnifrsk","纳":"nnifrsk","纵":"nnisksl","纶":"nnislsu","纷":"nnislrs","纸":"nnishjy","纹":"nnikjsl","纺":"nnikjrs","纽":"nnicfjj","纾":"nniekeg","罕":"deskjjf","羌":"ksjjjsu","肓":"kjbfrjj","肖":"fksfrjj","肘":"srjjjgk","肚":"srjjjfj","肛":"srjjjfj","肜":"srjjsss","肝":"srjjjjf","肟":"srjjjjz","肠":"srjjwss","良":"kcjjhsl","芈":"fjfjjjf","芘":"jffjhsu","芙":"jffjjsl","芜":"jffjjsu","芟":"jffsvel","芡":"jffsesl","芤":"jffegiu","芥":"jffslsf","芦":"jffkcjs","芩":"jffslke","芪":"jffshjy","芫":"jffjjsu","芬":"jffslrs","芭":"jffcfju","芮":"jfffrsk","芯":"jffdykk","芰":"jffjfel","花":"jffsfsu","芳":"jffkjrs","芴":"jffsrss","芷":"jfffjfj","芸":"jffjjnk","芹":"jffssjf","芽":"jffjngs","芾":"jffjfrf","苁":"jffsksl","苄":"jffkjfk","苇":"jffjjrf","苈":"jffjsrs","苊":"jffjsru","苋":"jfffcsu","苌":"jffsjhl","苍":"jffslru","苎":"jffkdej","苏":"jffrsdk","苡":"jffhksk","苣":"jffjcjb","虬":"fcjfjku","补":"kefskfk","角":"sesrjjf","言":"kjjjfcj","证":"kpjfjfj","诂":"kpjffcj","诃":"kpjfcjg","评":"kpjksjf","诅":"kpfcjjj","识":"kpfcjsk","诈":"kpsjfjj","诉":"kpssjfk","诊":"kpslsss","诋":"kpshjyk","诌":"kpsecjj","词":"kprjfcj","诎":"kpbffbf","诏":"kprsfcj","译":"kpeljjf","诒":"kpnkfcj","谷":"skslfcj","豆":"jfcjksj","豕":"jstsssl","豸":"skkstss","贡":"jfjfcsk","财":"fcskjgs","赤":"jfjsgsk","走":"jfjfjsl","足":"fcjfjsl","身":"sfrjjjs","轩":"jnfijjf","轫":"jnfirsd","辛":"kjksjjf","辰":"jsjjhsl","迎":"shrfkal","运":"jjnkkal","近":"ssjfkal","迓":"jngskal","返":"ssekkal","迕":"sjjfkal","还":"jsfkkal","这":"kjskkal","进":"jjsfkal","远":"jjsukal","违":"jjrfkal","连":"jnjfkal","迟":"cjskkal","邑":"fcjcfju","邮":"fcjfjwf","邯":"jffjjwf","邰":"nkfcjwf","邱":"sfjfiwf","邳":"jsfkiwf","邴":"jfrskwf","邵":"rsfcjwf","邶":"fjijhwf","邸":"shjykwf","邹":"secjjwf","邺":"ffksiwf","邻":"skkekwf","酉":"jfcsbjj","里":"fcjjfjj","针":"sjjjhjf","钉":"sjjjhjg","钊":"sjjjhfg","钋":"sjjjhfk","钌":"sjjjheg","闰":"kfrjjfj","闱":"kfrjjrf","闲":"kfrjfsk","闳":"kfrjsnk","间":"kfrfcjj","闵":"kfrkjsk","闶":"kfrkjso","闷":"kfrdykk","阻":"wffcjjj","阼":"wfsjfjj","阽":"wffjfcj","阿":"wfjfcjg","陀":"wfkdesu","陂":"wfesfel","附":"wfsfjgk","际":"wfjjgsk","陆":"wfjjfbf","陇":"wfjsusk","陈":"wfjngsk","陉":"wfekjfj","韧":"jjrfrsd","饨":"sehjbfu","饩":"sehsjjo","饪":"sehsjfj","饫":"sehsjsl","饬":"sehsjrs","饭":"sehssel","饮":"sehsesl","驱":"czijskb","驳":"czisksl","驴":"czikcjs","鸠":"sosrkzj","鸡":"eksrkzj","麦":"jjfjsel","龟":"sefcjju","丧":"jfksjhsl","乖":"sjffjisu","乳":"skksegiu","事":"jfcjcjjg","些":"fjfisujj","亟":"egfcjekj","享":"kjfcjegj","京":"kjfcjgsk","佩":"sfsojfrf","佬":"sfjfjssu","佯":"sfksjjjf","佰":"sfjsfcjj","佳":"sfjfjjfj","佴":"sfjffjjj","佶":"sfjfjfcj","佻":"sfskiusk","佼":"sfkjsksl","佾":"sfslfrjj","使":"sfjfcjsl","侃":"sffcjsfu","侄":"sfjnkjfj","侈":"sfseksek","侉":"sfjsljjz","例":"sfjsekfg","侍":"sfjfjjgk","侏":"sfsjjfsl","侑":"sfjsfrjj","侔":"sfnksjjf","侗":"sffrjfcj","供":"sfjffjsk","依":"sfkjshsl","侠":"sfjksjsl","侣":"sffcjfcj","侥":"sfjysjsu","侦":"sffjfcsk","侧":"sffcskfg","侨":"sfsjslsf","侩":"sfsljjnk","侪":"sfkjslsf","侬":"sfdeshsl","兔":"sefcjsuk","兖":"kjsknksu","其":"jffjjjsk","具":"fcjjjjsk","典":"fcjffjsk","冼":"kisjfjsu","冽":"kijsekfg","净":"kisecjjg","凭":"sfsjfjso","凯":"fbfcjhso","函":"egkiskbf","刮":"sjffcjfg","到":"jnkjfifg","刳":"jskjjzfg","制":"sjjfrffg","刷":"cjsfrffg","券":"ksjjslrs","刹":"skjgskfg","刺":"jfrfskfg","刻":"kjnsskfg","刽":"skjjnkfg","刿":"fbfsekfg","剀":"fbfcjhfg","剁":"svjfskfg","剂":"kjsksffg","劾":"kjnsskrs","势":"jgisokrs","匦":"jjnfisob","卑":"sfcjjsjf","卒":"kjskskjf","卓":"fjfcjjjf","单":"ksfcjjjf","卖":"jfekkjsk","卦":"jfjjfifk","卧":"jfcjfbfk","卷":"ksjjslru","卺":"egesljru","厕":"jsfcskfg","叁":"nkjsljjj","参":"nkjslsss","叔":"fjjgskel","取":"jffjjiel","呢":"fcjcjssu","呤":"fcjslkek","呦":"fcjnnkrs","周":"srjfjfcj","呱":"fcjsshkl","味":"fcjjjfsl","呵":"fcjjfcjg","呶":"fcjmsjel","呷":"fcjfcjjf","呸":"fcjjsfkj","呻":"fcjfcjjf","呼":"fcjsksjg","命":"sljfcjrf","咀":"fcjfcjjj","咂":"fcjjfrfb","咄":"fcjbffbf","咆":"fcjsrcju","咋":"fcjsjfjj","和":"sjfskfcj","咎":"selfkfcj","咏":"fcjkresl","咐":"fcjsfjgk","咒":"fcjfcjso","咔":"fcjfjjfk","咕":"fcjjffcj","咖":"fcjrsfcj","咙":"fcjjsusk","咚":"fcjselkk","咛":"fcjkdejg","咝":"fcjnnnnj","哎":"fcjjffsl","囹":"fcslkekj","固":"fcjffcjj","国":"fcjjfjkj","图":"fcselkkj","坡":"jfiesfel","坤":"jfifcjjf","坦":"jfifcjjj","坨":"jfikdesu","坩":"jfijffjj","坪":"jfijksjf","坫":"jfifjfcj","坭":"jficjssu","坯":"jfijsfkj","坳":"jfinnkrs","坶":"jfibrkjk","坷":"jfijfcjg","坻":"jfishjyk","坼":"jfissjfk","垂":"sjfjffjj","垃":"jfikjksj","垄":"jsuskjfj","垅":"jfijsusk","垆":"jfifjcjs","备":"selfcjfj","夜":"kjsfsekl","奄":"jslfcjju","奇":"jskjfcjg","奈":"jsljjgsk","奉":"jjjsljjf","奋":"jslfcjfj","奔":"jsljfjsf","妮":"msjcjssu","妯":"msjfcjfj","妲":"msjfcjjj","妹":"msjjjfsl","妻":"jcjjfmsj","妾":"kjksjmsj","姆":"msjbrkjk","始":"msjnkfcj","姐":"msjfcjjj","姑":"msjjffcj","姓":"msjsjjfj","委":"sjfslmsj","姗":"msjsrsrj","孟":"egjfcffj","孢":"egisrcju","季":"sjfslegj","孤":"egisshkl","孥":"msjelegj","学":"kksdeegj","宓":"kdedyksk","宕":"kdejsfcj","宗":"kdejjgsk","官":"kdefcjcj","宙":"kdefcjfj","定":"kdejfjsl","宛":"kdesekru","宜":"kdefcjjj","宝":"kdejjfjk","实":"kdekkjsk","宠":"kdejsusk","审":"kdefcjjf","尚":"fksfrfcj","居":"cjsjffcj","屈":"cjsbffbf","屉":"cjsjffjb","届":"cjsfcjfj","岢":"fbfjfcjg","岣":"fbfsrfcj","岩":"fbfjsfcj","岫":"fbffcjfj","岬":"fbffcjjf","岭":"fbfslkek","岱":"sfjykfbf","岳":"sfjfjfbf","岵":"fbfjffcj","岷":"fbfcjhjy","岸":"fbfjsjjf","岽":"fbfjngsk","岿":"fbffscjj","峁":"fbfshsrf","峄":"fbfeljjf","巫":"jfskskj","帑":"msjelfrf","帔":"frfesfel","帕":"frfsfcjj","帖":"frffjfcj","帘":"kdeskfrf","帙":"frfsjjsl","帚":"cjjdefrf","帛":"sfcjjfrf","帜":"frffcjsk","幸":"jfjksjjf","底":"kjsshjyk","庖":"kjssrcju","店":"kjsfjfcj","庙":"kjsfcjfj","庚":"kjscjjsl","府":"kjssfjgk","庞":"kjsjsusk","废":"kjsnselk","建":"cjjjjfal","弥":"cjzsegsk","弦":"cjzkjnnk","弧":"cjzsshkl","弩":"msjelcjz","弪":"cjzekjfj","录":"cjjgkisl","彼":"ssfesfel","往":"ssfkjjfj","征":"ssfjfjfj","徂":"ssffcjjj","径":"ssfekjfj","忝":"jjslgdkk","忠":"fcjfdykk","念":"slkedykk","忽":"srssdykk","忿":"slrsdykk","态":"jslkdykk","怂":"sksldykk","怊":"dkfrsfcj","怍":"dkfsjfjj","怏":"dkffcjsl","怔":"dkfjfjfj","怕":"dkfsfcjj","怖":"dkfjsfrf","怙":"dkfjffcj","怛":"dkffcjjj","怜":"dkfslkek","怡":"dkfnkfcj","怦":"dkfjksjf","性":"dkfsjjfj","怩":"dkfcjssu","怪":"dkfeljfj","怫":"dkfcjzsf","怯":"dkfjfjnk","怵":"dkfjfslk","怿":"dkfeljjf","戕":"bfjsjysk","或":"jfcjiysk","戗":"skrujysk","戽":"kcjskkjf","戾":"kcjsjslk","房":"kcjskjrs","所":"sscjssjf","承":"egjjjesl","抨":"jgijksjf","披":"jgiesfel","抬":"jginkfcj","抱":"jgisrcju","抵":"jgishjyk","抹":"jgijjfsl","抻":"jgifcjjf","押":"jgifcjjf","抽":"jgifcjfj","抿":"jgicjhjy","拂":"jgicjzsf","拄":"jgikjjfj","担":"jgifcjjj","拆":"jgissjfk","拇":"jgibrkjk","拈":"jgifjfcj","拉":"jgikjksj","拊":"jgisfjgk","拌":"jgiksjjf","拍":"jgisfcjj","拎":"jgislkek","拐":"jgifcjrs","拓":"jgijsfcj","拔":"jgijselk","拖":"jgisjrfu","拗":"jginnkrs","拘":"jgisrfcj","拙":"jgibffbf","拚":"jginkjsf","招":"jgirsfcj","拢":"jgijsusk","拣":"jgijnrsk","拥":"jgisrjjf","拦":"jgiksjjj","拧":"jgikdejg","拨":"jginselk","择":"jgieljjf","放":"kjrssjsl","斧":"skslssjf","斩":"jnfissjf","於":"kjrsslkk","旺":"fcjjjjfj","昀":"fcjjsrki","昂":"fcjjshrf","昃":"fcjjjssl","昆":"fcjjjhsu","昊":"fcjjjjsl","昌":"fcjjfcjj","明":"fcjjsrjj","昏":"shjyfcjj","易":"fcjjsrss","昔":"jffjfcjj","昕":"fcjjssjf","昙":"fcjjjjnk","朊":"srjjjjsu","朋":"srjjsrjj","服":"srjjrfel","杪":"jfskfsks","杭":"jfskkjso","杯":"jfskjsfk","杰":"jfsldkkk","杲":"fcjjjfsl","杳":"jfslfcjj","杵":"jfsksjjf","杷":"jfskcfju","杼":"jfskekeg","松":"jfskslnk","板":"jfskssel","构":"jfsksrnk","枇":"jfskjhsu","枉":"jfskjjfj","枋":"jfskkjrs","析":"jfskssjf","枕":"jfskdesu","林":"jfskjfsl","枘":"jfskfrsk","枚":"jfsksjsl","果":"fcjjjfsl","枝":"jfskjfel","枞":"jfsksksl","枢":"jfskjskb","枣":"jfcfslkk","枥":"jfskjsrs","枧":"jfskfcsu","枨":"jfsksjhl","枪":"jfskslru","枫":"jfsksosk","枭":"srkzjfsl","柜":"jfskjcjb","欣":"ssjfsesl","欧":"jskbsesl","武":"jjfjfiyk","歧":"fjfijfel","殁":"jseksvel","殴":"jskbsvel","氓":"kjbcjhjy","氛":"sjjoslrs","沓":"geslfcjj","沫":"kkijjfsl","沭":"kkijfslk","沮":"kkifcjjj","沱":"kkikdesu","沲":"kkisjrfu","河":"kkijfcjg","沸":"kkicjzsf","油":"kkifcjfj","治":"kkinkfcj","沼":"kkirsfcj","沽":"kkijffcj","沾":"kkifjfcj","沿":"kkisvfcj","泄":"kkijffjb","泅":"kkifcskj","泊":"kkisfcjj","泌":"kkidyksk","泓":"kkicjznk","泔":"kkijffjj","法":"kkijfjnk","泖":"kkishsrf","泗":"kkifcsbj","泞":"kkikdejg","泠":"kkislkek","泡":"kkisrcju","波":"kkiesfel","泣":"kkikjksj","泥":"kkicjssu","注":"kkikjjfj","泪":"kkifcjjj","泫":"kkikjnnk","泮":"kkiksjjf","泯":"kkicjhjy","泱":"kkifcjsl","泳":"kkikresl","泷":"kkijsusk","泸":"kkifjcjs","泺":"kkisbgsk","泻":"kkidejzj","泼":"kkinselk","泽":"kkieljjf","泾":"kkiekjfj","浅":"kkijjysk","炅":"fcjjdssl","炉":"dsskkcjs","炊":"dssksesl","炎":"dsskdssl","炒":"dsskfsks","炔":"dsskcjsl","炕":"dsskkjso","炖":"dsskjbfu","炙":"sekkdssl","炜":"dsskjjrf","炝":"dsskslru","炬":"dsskjcjb","爬":"ssflcfju","爸":"skslcfju","版":"sfjcssel","牦":"sjfisjju","牧":"sjfisjsl","物":"sjfisrss","狍":"stssrcju","狎":"stsfcjjf","狐":"stssshkl","狒":"stscjzsf","狗":"stssrfcj","狙":"stsfcjjj","狞":"stskdejg","玟":"jjfikjsl","玢":"jjfislrs","玩":"jjfijjsu","玫":"jjfisjsl","玮":"jjfijjrf","环":"jjfijsfk","现":"jjfifcsu","瓮":"slnkjhok","瓯":"jskbjhok","甙":"jjffjjyk","画":"jfcjfjbf","甾":"mmmfcjfj","畀":"fcjfjjsf","畅":"fcjjfwss","疙":"kjskisjo","疚":"kjskisel","疝":"kjskifbf","疟":"kjskijbj","疠":"kjskijrs","疡":"kjskiwss","的":"sfcjjsrk","盂":"jjgfcffj","盱":"fcjjjjjg","盲":"kjbfcjjj","直":"jffcjjjj","知":"sjjskfcj","矸":"jsfcjjjf","矽":"jsfcjsek","矾":"jsfcjsok","矿":"jsfcjkjs","砀":"jsfcjwss","码":"jsfcjczj","祆":"kefkjjsl","祈":"kefkssjf","祉":"kefkfjfj","祎":"kefkjjrf","秆":"sjfskjjf","秉":"sjcjjfsl","穸":"kdesksek","穹":"kdeskcjz","空":"kdeskjfj","竺":"sjksjkjj","籴":"slksjfsl","线":"nnijjysk","绀":"nnijffjj","绁":"nnijffjb","绂":"nnijselk","练":"nnijnrsk","组":"nnifcjjj","绅":"nnifcjjf","细":"nnifcjfj","织":"nnifcjsk","终":"nniselkk","绉":"nnisecjj","绊":"nniksjjf","绋":"nnicjzsf","绌":"nnibffbf","绍":"nnirsfcj","绎":"nnieljjf","经":"nniekjfj","绐":"nninkfcj","罔":"frksjkjb","罗":"fcffjsek","者":"jfjsfcjj","耵":"jffjjijg","耶":"jffjjiwf","肃":"cjjfsfsk","股":"srjjsvel","肢":"srjjjfel","肤":"srjjjjsl","肥":"srjjcfju","肩":"kcjsfrjj","肪":"srjjkjrs","肫":"srjjjbfu","肭":"srjjfrsk","肮":"srjjkjso","肯":"fjfjfrjj","肱":"srjjjsnk","育":"kjnkfrjj","肴":"skjsfrjj","肷":"srjjsesl","肺":"srjjjfrf","肼":"srjjjjsf","肽":"srjjjslk","肾":"ffelfrjj","肿":"srjjfcjf","胀":"srjjsjhl","胁":"srjjrsdk","臾":"sfjcjjsl","舍":"sljjffcj","艰":"ekcjjhsl","苑":"jffsekru","苒":"jfffrfjj","苓":"jffslkek","苔":"jffnkfcj","苕":"jffrsfcj","苗":"jfffcjfj","苘":"jfffrfcj","苛":"jffjfcjg","苜":"jfffcjjj","苞":"jffsrcju","苟":"jffsrfcj","苠":"jffcjhjy","苤":"jffjsfkj","若":"jffjsfcj","苦":"jffjffcj","苫":"jfffjfcj","苯":"jffjfslj","英":"jfffcjsl","苴":"jfffcjjj","苷":"jffjffjj","苹":"jffjksjf","苻":"jffsfjgk","茁":"jffbffbf","茂":"jffjsysk","范":"jffkkiru","茄":"jffrsfcj","茅":"jffekegs","茆":"jffshsrf","茇":"jffjselk","茉":"jffjjfsl","茌":"jffsfjfj","茎":"jffekjfj","茏":"jffjsusk","茑":"jffsrkzj","茔":"jffdejfj","茕":"jffdeojf","茚":"jffshjrf","虎":"fjesjuso","虏":"fjesjurs","虮":"fcjfjkso","虱":"osfcjfjk","表":"jjfjshsl","衩":"kefskelk","衫":"kefsksss","衬":"kefskjgk","规":"jjskfcsu","觅":"skksfcsu","视":"kefkfcsu","诓":"kpjjjfjb","诔":"kpjjjfsl","试":"kpjjfiyk","诖":"kpjfjjfj","诗":"kpjfjjgk","诘":"kpjfjfcj","诙":"kpjsdssl","诚":"kpjsrysk","诛":"kpsjjfsl","诜":"kpsjfjsu","话":"kpsjffcj","诞":"kpsfjbal","诟":"kpssjfcj","诠":"kpsljjfj","诡":"kpsejsru","询":"kpsrfcjj","诣":"kpsufcjj","诤":"kpsecjjg","该":"kpkjnssk","详":"kpksjjjf","诧":"kpkdesju","诨":"kpdejnjf","诩":"kprkirki","责":"jjfjfcsk","贤":"ffelfcsk","败":"fcsksjsl","账":"fcsksjhl","货":"sfsufcsk","质":"ssjffcsk","贩":"fcskssel","贪":"slkefcsk","贫":"slrsfcsk","贬":"fcskskel","购":"fcsksrnk","贮":"fcskkdej","贯":"bcfjfcsk","转":"jnfijjxk","轭":"jnfijsru","轮":"jnfislsu","软":"jnfisesl","轰":"jnjfekel","迢":"rsfcjkal","迤":"sjrfukal","迥":"frfcjkal","迦":"rsfcjkal","迨":"nkfcjkal","迩":"segskkal","迪":"fcjfjkal","迫":"sfcjjkal","迭":"sjjskkal","迮":"sjfjjkal","述":"jfskkkal","迳":"ekjfjkal","邾":"sjjfskwf","郁":"jsfrjjwf","郄":"skjsnkwf","郅":"jnkjfiwf","郇":"srfcjjwf","郊":"kjskskwf","郎":"kcjjhkwf","郏":"jksjskwf","郐":"skjjnkwf","郑":"ksjjskwf","郓":"dejnfiwf","采":"skksjfsl","金":"sljjfksj","钍":"sjjjhjfj","钎":"sjjjhsjf","钏":"sjjjhsff","钐":"sjjjhsss","钒":"sjjjhsok","钓":"sjjjhsrk","钔":"sjjjhkfr","钕":"sjjjhmsj","钗":"sjjjhelk","闸":"kfrfcjjf","闹":"kfrkjfrf","阜":"sfcjcjjf","陋":"wfjfrskb","陌":"wfjsfcjj","降":"wfseljnf","限":"wfcjjhsl","陔":"wfkjnssk","陕":"wfjksjsl","隶":"cjjgkisl","隹":"sfkjjjfj","雨":"jfrfkkkk","青":"jjfjfrjj","非":"fjjjfjjj","顶":"jgjsfcsk","顷":"jhjsfcsk","饯":"sehjjysk","饰":"sehsjfrf","饱":"sehsrcju","饲":"sehrjfcj","饴":"sehnkfcj","驵":"czifcjjj","驶":"czifcjsl","驷":"czifcsbj","驸":"czisfjgk","驹":"czisrfcj","驺":"czisecjj","驻":"czikjjfj","驼":"czikdesu","驽":"msjelczj","驾":"rsfcjczj","驿":"czieljjf","骀":"czinkfcj","鱼":"sefcjfjj","鸢":"jyksrkzj","鸣":"fcjsrkzj","黾":"fcjfcjju","齿":"fjfjskbf","临":"ffsjkfcfj","举":"kksjsljjf","亭":"kjfcjdejg","亮":"kjfcjdeso","亲":"kjksjjgsk","侮":"sfsjbrkjk","侯":"sfcjsjjsl","侵":"sfcjjdeel","便":"sfjfcjjsl","促":"sffcjfjsl","俄":"sfsjgiysk","俅":"sfjgkislk","俊":"sfnksksel","俎":"skskfcjjj","俏":"sffksfrjj","俐":"sfsjfskfg","俑":"sfekfrjjf","俗":"sfskslfcj","俘":"sfskksegj","俚":"sffcjjfjj","俜":"sffcjfjjz","保":"sffcjjfsl","俞":"sljfrjjfg","俟":"sfnksjjsl","信":"sfkjjjfcj","俣":"sffcjjjsl","俦":"sfjjjsjgk","俨":"sfjffksjs","俩":"sfjfrsksk","俪":"sfjfrkfrk","俭":"sfsljkksj","修":"sffselsss","兹":"ksjnnknnk","养":"ksjjjslsf","冒":"fcjjfcjjj","冠":"dejjsujgk","剃":"kscjzfsfg","削":"fksfrjjfg","剌":"jfcjfskfg","前":"ksjfrjjfg","剐":"fcjfrskfg","剑":"skjkksifg","勃":"jfdeegirs","勇":"ekfcjjfrs","勉":"sefcjsurs","勋":"fcjfcskrs","匍":"srjfrjjfk","南":"jffrksjjf","卸":"sjjfjfirf","厘":"jsfcjjfjj","厚":"jsfcjjegj","受":"skksdeel","变":"kjffskel","叙":"skjjgskel","叛":"ksjjsssel","呲":"fcjfjfisu","咣":"fcjfksjsu","咤":"fcjkdesju","咦":"fcjjcjzsl","咧":"fcjjsekfg","咨":"kiseslfcj","咩":"fcjksjjjf","咪":"fcjksjfsl","咫":"cjslfcjsk","咬":"fcjkjsksl","咭":"fcjjfjfcj","咯":"fcjselfcj","咱":"fcjsfcjjj","咳":"fcjkjnssk","咴":"fcjjsdssl","咸":"jsjfcjysk","咻":"fcjsfjfsl","咽":"fcjfcjskj","咿":"fcjsfcjjs","哀":"kjfcjshsl","品":"fcjfcjfcj","哂":"fcjjfcsbj","哄":"fcjjffjsk","哆":"fcjseksek","哇":"fcjjfjjfj","哈":"fcjsljfcj","哉":"jfjfcjysk","哌":"fcjssshsl","响":"fcjsfrfcj","哏":"fcjcjjhsl","哐":"fcjjjjfjb","哑":"fcjjffksj","哒":"fcjjskkal","哓":"fcjjysjsu","哔":"fcjjhsujf","哕":"fcjfbfsek","哗":"fcjsfsujf","哙":"fcjsljjnk","哚":"fcjsvjfsl","哜":"fcjkjslsf","哝":"fcjdeshsl","哞":"fcjnksjjf","哟":"fcjnnisrk","哪":"fcjrjjswf","囿":"fcjsfrjjj","型":"jjsffgjfj","垌":"jfifrjfcj","垒":"nknknkjfj","垓":"jfikjnssk","垛":"jfisvjfsl","垠":"jficjjhsl","垡":"sfjyskjfj","垢":"jfissjfcj","垣":"jfijfcjjj","垤":"jfijnkjfj","垦":"cjjhsljfj","垧":"jfisfrfcj","垩":"jffksjjfj","垫":"jgisokjfj","垭":"jfijffksj","垮":"jfijsljjz","垲":"jfifbfcju","垴":"jfikjskbf","城":"jfijsrysk","埏":"jfisfjbal","复":"sjfcjjsel","奎":"jsljfjjfj","奏":"jjjsljjsk","契":"jjjfrsjsl","奕":"kjsgskjsl","奖":"kifsekjsl","姘":"msjksjjsf","姚":"msjskiusk","姜":"ksjjfjmsj","姝":"msjsjjfsl","姣":"msjkjsksl","姥":"msjjfjssu","姨":"msjjcjzsl","姹":"msjkdesju","姻":"msjfcjskj","姿":"kiseslmsj","威":"jsjmsjysk","娃":"msjjfjjfj","娄":"ksjfslmsj","娅":"msjjffksj","娆":"msjjysjsu","娇":"msjsjslsf","娈":"kjffskmsj","娜":"msjrjjswf","孩":"egikjnssk","孪":"kjffskegj","客":"kdeselfcj","宣":"kdejfcjjj","室":"kdejnkjfj","宥":"kdejsfrjj","宦":"kdejfcjfb","宪":"kdesjfjsu","宫":"kdefcjfcj","封":"jfjjfijgk","将":"kifsekjgk","尜":"fskjslgsk","尝":"fksdejjnk","屋":"cjsjnkjfj","屎":"cjsksjfsl","屏":"cjsksjjsf","峋":"fbfsrfcjj","峒":"fbffrjfcj","峙":"fbfjfjjgk","峡":"fbfjksjsl","峤":"fbfsjslsf","峥":"fbfsecjjg","峦":"kjffskfbf","差":"ksjjjsjfj","巷":"jffjslcju","帝":"kjksdefrf","带":"jfffdefrf","帧":"frffjfcsk","帮":"jjjswffrf","幽":"fnnknnkbf","庠":"kjsksjjjf","庥":"kjssfjfsl","度":"kjsjffjel","庭":"kjssjfjal","弈":"kjsgskjsf","弭":"cjzjffjjj","弯":"kjffskcjz","彖":"nejstsssl","彦":"kjksjssss","彪":"fjesjusosss","待":"ssfjfjjgk","徇":"ssfsrfcjj","很":"ssfcjjhsl","徉":"ssfksjjjf","徊":"ssffcfcjj","律":"ssfcjjjjf","後":"ssfnnksel","怎":"sjfjjdykk","怒":"msjeldykk","思":"fcjfjdykk","怠":"nkfcjdykk","急":"secjjdykk","怨":"sekrudykk","总":"ksfcjdykk","怼":"ekjgkdykk","恂":"dkfsrfcjj","恃":"dkfjfjjgk","恍":"dkffksjsu","恒":"dkfjfcjjj","恢":"dkfjsdssl","恤":"dkfsfcffj","恨":"dkfcjjhsl","恪":"dkfselfcj","恫":"dkffrjfcj","恬":"dkfsjffcj","恸":"dkfjjnkrs","恹":"dkfjsjslk","恺":"dkffbfcju","恻":"dkffcskfg","恼":"dkfkjskbf","恽":"dkfdejnjf","战":"fjfcjjysk","扁":"kcjsfrjff","扃":"kcjsfrfcj","拜":"sjjsjjjjf","括":"jgisjffcj","拭":"jgijjfiyk","拮":"jgijfjfcj","拯":"jgiegeslj","拱":"jgijffjsk","拴":"jgisljjfj","拶":"jgimmmsek","拷":"jgijfjsjz","拼":"jgiksjjsf","拽":"jgifcjjys","拾":"jgisljfcj","持":"jgijfjjgk","挂":"jgijfjjfj","指":"jgisufcjj","按":"jgikdemsj","挎":"jgijsljjz","挑":"jgiskiusk","挖":"jgikdesko","挝":"jgijgkkal","挞":"jgijskkal","挟":"jgijksjsl","挠":"jgijysjsu","挡":"jgifkscjj","挢":"jgisjslsf","挣":"jgisecjjg","挤":"jgikjslsf","挥":"jgidejnjf","挪":"jgirjjswf","挺":"jgisjfjal","政":"jfjfisjsl","故":"jffcjsjsl","斫":"jsfcjssjf","施":"kjrssjrfu","既":"cjjhkjnsu","昝":"selfkfcjj","星":"fcjjsjjfj","映":"fcjjfcjsl","春":"jjjslfcjj","昧":"fcjjjjfsl","昨":"fcjjsjfjj","昭":"fcjjrsfcj","是":"fcjjjfjsl","昱":"fcjjkjksj","昴":"fcjjshsrf","昵":"fcjjcjssu","昶":"kreslfcjj","昼":"cjslfcjjj","显":"fcjjffksj","曷":"fcjjsrskb","朐":"srjjsrfcj","枯":"jfskjffcj","枰":"jfskjksjf","枳":"jfskfcjsk","枵":"jfskfcjjz","架":"rsfcjjfsl","枷":"jfskrsfcj","枸":"jfsksrfcj","柁":"jfskkdesu","柃":"jfskslkek","柄":"jfskjfrsk","柏":"jfsksfcjj","某":"jffjjjfsl","柑":"jfskjffjj","柒":"kkijujfsl","染":"kkisojfsl","柔":"ekegsjfsl","柘":"jfskjsfcj","柙":"jfskfcjjf","柚":"jfskfcjfj","柝":"jfskssjfk","柞":"jfsksjfjj","柠":"jfskkdejg","柢":"jfskshjyk","查":"jfslfcjjj","柩":"jfskjsekb","柬":"jfcksjfsl","柯":"jfskjfcjg","柰":"jfsljjgsk","柱":"jfskkjjfj","柳":"jfskshsrf","柽":"jfskeljfj","柿":"jfskkjfrf","栀":"jfskssjru","栅":"jfsksrsrj","标":"jfskjjgsk","栈":"jfskjjysk","栉":"jfskjffrf","栊":"jfskjsusk","栋":"jfskjngsk","栌":"jfskfjcjs","栎":"jfsksbgsk","栏":"jfskksjjj","树":"jfskekjgk","歪":"jsfkjfjfj","殂":"jsekfcjjj","殃":"jsekfcjsl","殄":"jsekslsss","殆":"jseknkfcj","殇":"jseksjwss","残":"jsekjjysk","段":"sfjjisvel","毒":"jjfjbrkjk","毖":"jhsudyksk","毗":"fcjfjjhsu","毡":"sjjufjfcj","氟":"sjjocjzsf","氡":"sjjoselkk","氢":"sjjoekjfj","泉":"sfcjjgesl","泵":"jsfcjgesl","泶":"kksdegesl","洁":"kkijfjfcj","洄":"kkifcfcjj","洇":"kkifcjskj","洋":"kkiksjjjf","洌":"kkijsekfg","洎":"kkisfcjjj","洒":"kkijfcsbj","洗":"kkisjfjsu","洙":"kkisjjfsl","洚":"kkiseljnf","洛":"kkiselfcj","洞":"kkifrjfcj","津":"kkicjjjjf","洧":"kkijsfrjj","洪":"kkijffjsk","洫":"kkisfcffj","洮":"kkiskiusk","洱":"kkijffjjj","洲":"kkidskfkf","洳":"kkimsjfcj","洵":"kkisrfcjj","洹":"kkijfcjjj","活":"kkisjffcj","洼":"kkijfjjfj","洽":"kkisljfcj","派":"kkissshsl","浃":"kkijksjsl","浇":"kkijysjsu","浈":"kkifjfcsk","浊":"kkifcjfjk","测":"kkifcskfg","浍":"kkisljjnk","济":"kkikjslsf","浏":"kkikjskfg","浑":"kkidejnjf","浒":"kkikpsjjf","浓":"kkideshsl","浔":"kkicjjjgk","涎":"kkisfjbal","炫":"dsskkjnnk","炭":"fbfjsdssl","炮":"dssksrcju","炯":"dsskfrfcj","炱":"nkfcjdssl","炳":"dsskjfrsk","炷":"dsskkjjfj","炸":"dssksjfjj","点":"fjfcjdkkk","炻":"dsskjsfcj","炼":"dsskjnrsk","炽":"dsskfcjdk","烀":"dssksksjg","烁":"dssksbgsk","烂":"dsskksjjj","烃":"dsskekjfj","爰":"skksjjsel","牮":"sfjyksjjf","牯":"sjfijffcj","牲":"sjfisjjfj","牵":"jskdesjjf","狠":"stscjjhsl","狡":"stskjsksl","狨":"stsjjsysk","狩":"stskdejgk","独":"stsfcjfjk","狭":"stsjksjsl","狮":"stsfsjfrf","狯":"stssljjnk","狰":"stssecjjg","狱":"stskpjslk","狲":"stsegigsk","玲":"jjfislkek","玳":"jjfisfjyk","玷":"jjfifjfcj","玻":"jjfiesfel","珀":"jjfisfcjj","珂":"jjfijfcjg","珈":"jjfirsfcj","珉":"jjficjhjy","珊":"jjfisrsrj","珍":"jjfislsss","珏":"jjfijjfjk","珐":"jjfijfjnk","珑":"jjfijsusk","瓴":"skkekjhok","甚":"jffjjjskb","甭":"jsfksrjjf","畈":"fcjfjssel","畋":"fcjfjsjsl","界":"fcjfjslsf","畎":"fcjfjjslk","畏":"fcjfjjhsl","疣":"kjskijsuk","疤":"kjskicfju","疥":"kjskislsf","疫":"kjskisvel","疬":"kjskijsrs","疮":"kjskislru","疯":"kjskisosk","癸":"ekssljjsk","皆":"jhsusfcjj","皇":"sfcjjjjfj","皈":"sfcjjssel","盅":"fcjffcffj","盆":"slrsfcffj","盈":"wsekfcffj","相":"jfskfcjjj","盹":"fcjjjjbfu","盼":"fcjjjslrs","盾":"ssjffcjjj","省":"fsksfcjjj","眄":"fcjjjjfbr","眇":"fcjjjfsks","眈":"fcjjjdesu","眉":"cfjsfcjjj","看":"sjjsfcjjj","眍":"fcjjjjskb","眨":"fcjjjskel","矜":"ekegsslke","矧":"sjjskcjzf","矩":"sjjskjcjb","砂":"jsfcjfsks","砉":"jjjfjsfcj","砌":"jsfcjjhrs","砍":"jsfcjsesl","砑":"jsfcjjngs","砒":"jsfcjjhsu","研":"jsfcjjjsf","砖":"jsfcjjjxk","砗":"jsfcjjnjf","砘":"jsfcjjbfu","砚":"jsfcjfcsu","砜":"jsfcjsosk","砭":"jsfcjskel","祓":"kefkjselk","祖":"kefkfcjjj","祗":"kefkshjyk","祚":"kefksjfjj","祛":"kefkjfjnk","祜":"kefkjffcj","祝":"kefkfcjsu","神":"kefkfcjjf","祠":"kefkrjfcj","祢":"kefksegsk","禹":"sfcjfrfik","禺":"fcjjfrfik","秋":"sjfskdssl","种":"sjfskfcjf","科":"sjfskkkjf","秒":"sjfskfsks","秕":"sjfskjhsu","秭":"sjfskszfs","穿":"kdeskjngs","窀":"kdeskjbfu","突":"kdeskjslk","窃":"kdeskjhrs","窆":"kdeskskel","竖":"ffelkjksj","竽":"sjksjkjjg","竿":"sjksjkjjf","笃":"sjksjkczj","笈":"sjksjksal","类":"ksjfskjsl","籼":"ksjfskfbf","籽":"ksjfskegj","绑":"nnijjjswf","绒":"nnijjsysk","结":"nnijfjfcj","绔":"nnijsljjz","绕":"nnijysjsu","绗":"nnissfjjg","绘":"nnisljjnk","给":"nnisljfcj","绚":"nnisrfcjj","绛":"nniseljnf","络":"nniselfcj","绝":"nnisecfju","绞":"nnikjsksl","统":"nnikjnksu","缸":"sjjfbfjfj","罘":"fcffjjsfk","罚":"fcffjkpfg","美":"ksjjfjjsl","羿":"ckickijsf","耍":"jsfrffmsj","耐":"jsfrffjgk","耔":"jjjfskegj","耷":"jsljffjjj","胂":"srjjfcjjf","胃":"fcjfjfrjj","胄":"fcjfjfrjj","胆":"srjjfcjjj","背":"fjisufrjj","胍":"srjjsshkl","胎":"srjjnkfcj","胖":"srjjksjjf","胗":"srjjslsss","胙":"srjjsjfjj","胚":"srjjjsfkj","胛":"srjjfcjjf","胜":"srjjsjjfj","胝":"srjjshjyk","胞":"srjjsrcju","胡":"jffcjsrjj","胤":"snnkfrjju","胥":"efjslfrjj","胧":"srjjjsusk","胨":"srjjjngsk","胩":"srjjfjjfk","胪":"srjjfjcjs","胫":"srjjekjfj","脉":"srjjkresl","舁":"sfjcjjjsf","舡":"ssrkjkjfj","舢":"ssrkjkfbf","舣":"ssrkjkksl","茈":"jfffjfisu","茗":"jffsekfcj","茛":"jffcjjhsl","茜":"jffjfcsbj","茧":"jfffcjfjk","茨":"jffkisesl","茫":"jffkkikjb","茬":"jffjsfjfj","茭":"jffkjsksl","茯":"jffsfjslk","茱":"jffsjjfsl","茳":"jffkkijfj","茴":"jfffcfcjj","茵":"jfffcjskj","茶":"jffsljgsk","茸":"jffjffjjj","茹":"jffmsjfcj","茺":"jffkjnksu","茼":"jfffrjfcj","荀":"jffsrfcjj","荃":"jffsljjfj","荆":"jffjjsffg","荇":"jffssfjjg","草":"jfffcjjjf","荏":"jffsfsjfj","荐":"jffjsfegj","荑":"jffjcjzsl","荒":"jffkjbsfu","荔":"jffrsrsrs","荚":"jffjksjsl","荛":"jffjysjsu","荜":"jffjhsujf","荞":"jffsjslsf","荟":"jffsljjnk","荠":"jffkjslsf","荡":"jffkkiwss","荣":"jffdejfsl","荤":"jffdejnjf","荥":"jffdegesl","荦":"jffdesjjf","荧":"jffdedssl","荨":"jffcjjjgk","荩":"jffcjslkk","荪":"jffegigsk","荫":"jffwfsrjj","荬":"jffekkjsk","荭":"jffnnijfj","荮":"jffnnijgk","药":"jffnnisrk","莒":"jfffcjfcj","莛":"jffsjfjal","虐":"fjesjujbj","虹":"fcjfjkjfj","虺":"jsufcjfjk","虻":"fcjfjkkjb","虼":"fcjfjksjo","虽":"fcjfcjfjk","虾":"fcjfjkjfk","虿":"jrsfcjfjk","蚀":"sehfcjfjk","蚁":"fcjfjkksl","蚂":"fcjfjkczj","蚤":"elkfcjfjk","衍":"ssfkkijjg","衲":"kefskfrsk","衽":"kefsksjfj","衿":"kefskslke","袂":"kefskcjsl","袄":"kefsksjsl","袅":"srkzkjshsl","要":"jfcffjmsj","觇":"fjfcjfcsu","览":"ffsjkfcsu","觉":"kksdefcsu","訇":"srkjjjfcj","诫":"kpjjsfysk","诬":"kpjfskskj","语":"kpjfcjfcj","诮":"kpfksfrjj","误":"kpfcjjjsl","诰":"kpsjfjfcj","诱":"kpsjfslws","诲":"kpsjbrkjk","诳":"kpstsjjfj","说":"kpksfcjsu","诵":"kpekfrjjf","诶":"kpnksjjsl","贰":"jjjfcskyk","贱":"fcskjjysk","贲":"jfjfffcsk","贳":"jffjbfcsk","贴":"fcskfjfcj","贵":"fcjfjfcsk","贶":"fcskfcjsu","贷":"sfjykfcsk","贸":"shkrsfcsk","费":"cjzsffcsk","贺":"rsfcjfcsk","贻":"fcsknkfcj","赳":"jfjfjslhf","赴":"jfjfjslfk","赵":"jfjfjslsk","趴":"fcjfjfisl","轱":"jnfijffcj","轲":"jnfijfcjg","轳":"jnfifjcjs","轴":"jnfifcjfj","轵":"jnfifcjsk","轶":"jnfisjjsl","轷":"jnfisksjg","轸":"jnfislsss","轹":"jnfisbgsk","轺":"jnfirsfcj","轻":"jnfiekjfj","迷":"ksjfskkal","迸":"ksjjsfkal","迹":"kjsgskkal","追":"sfcjcjkal","退":"cjjhskkal","送":"ksjjskkal","适":"sjffcjkal","逃":"skiuskkal","逄":"seljnfkal","逅":"ssjfcjkal","逆":"ksjbfskal","选":"sjfjsukal","逊":"egigskkal","郗":"skjsfrfwf","郛":"skksegiwf","郜":"sjfjfcjwf","郝":"jfjsgskwf","郡":"cjjsfcjwf","郢":"fcjjjfiwf","郦":"jfrkfrkwf","郧":"fcjfcskwf","酊":"jfcsbjjjg","酋":"ksjfcsbjj","重":"sjfcjjfjj","钙":"sjjjhjfjz","钚":"sjjjhjsfk","钛":"sjjjhjslk","钜":"sjjjhjcjb","钝":"sjjjhjbfu","钞":"sjjjhfsks","钟":"sjjjhfcjf","钠":"sjjjhfrsk","钡":"sjjjhfcsk","钢":"sjjjhfrsk","钣":"sjjjhssel","钤":"sjjjhslke","钥":"sjjjhsrjj","钦":"sjjjhsesl","钧":"sjjjhsrki","钨":"sjjjhsrzj","钩":"sjjjhsrnk","钪":"sjjjhkjso","钫":"sjjjhkjrs","钬":"sjjjhdssl","钭":"sjjjhkkjf","钮":"sjjjhcfjj","钯":"sjjjhcfju","闺":"kfrjfjjfj","闻":"kfrjffjjj","闼":"kfrjskkal","闽":"kfrfcjfjk","闾":"kfrfcjfcj","阀":"kfrsfjysk","阁":"kfrselfcj","阂":"kfrkjnssk","陛":"wfjhsujfj","陟":"wffjfjfss","陡":"wfjfjfjsl","院":"wfkdejjsu","除":"wfsljjgsk","陧":"wffcjjjfj","陨":"wffcjfcsk","险":"wfsljkksj","面":"jsfcffjjj","革":"jffjfcjjf","韭":"fjjjfjjjj","音":"kjksjfcjj","顸":"jjfjsfcsk","项":"jfijsfcsk","顺":"sffjsfcsk","须":"sssjsfcsk","飑":"sosksrcju","飒":"kjksisosk","食":"slkcjjhsk","饵":"sehjffjjj","饶":"sehjysjsu","饷":"sehsfrfcj","饺":"sehkjsksl","饼":"sehksjjsf","首":"ksjsfcjjj","香":"sjfslfcjj","骁":"czijysjsu","骂":"fcjfcjczj","骄":"czisjslsf","骅":"czisfsujf","骆":"cziselfcj","骇":"czikjnssk","骈":"cziksjjsf","骨":"fccdefrjj","鬼":"sfcjjsunk","鸥":"jskbsrkzj","鸦":"jngssrkzj","鸨":"sujfsrkzj","鸩":"deshsrkzj","乘":"sjffjisusl","亳":"kjfcjdesju","俯":"sfkjssfjgk","俱":"sffcjjjjsk","俳":"sffjjjfjjj","俸":"sfjjjsljjf","俺":"sfjslfcjju","俾":"sfsfcjjsjf","倌":"sfkdefcjcj","倍":"sfkjksjfcj","倏":"sffseljskk","倒":"sfjnkjfifg","倔":"sfcjsbffbf","倘":"sffksfrfcj","候":"sffcjsjjsl","倚":"sfjskjfcjg","倜":"sfsrjfjfcj","借":"sfjffjfcjj","倡":"sffcjjfcjj","倥":"sfkdeskjfj","倦":"sfksjjslru","倨":"sfcjsjffcj","倩":"sfjjfjfrjj","倪":"sfsfjcjjsu","倬":"sffjfcjjjf","倭":"sfsjfslmsj","倮":"sffcjjjfsl","债":"sfjjfjfcsk","值":"sfjffcjjjj","倾":"sfjhjsfcsk","偌":"sfjffjsfcj","健":"sfcjjjjfal","党":"fksdefcjsu","兼":"ksjcjjffsl","冢":"dejstssksl","冤":"desefcjsuk","冥":"defcjjkjsk","凄":"kijcjjfmsj","准":"kisfkjjjfj","凇":"kijfskslnk","凉":"kikjfcjgsk","凋":"kisrjfjfcj","凌":"kijfjsksel","剔":"fcjjsrssfg","剖":"kjksjfcjfg","剜":"kdesekrhfg","剞":"jskjfcjgfg","剡":"dsskdsskfg","剥":"cjjgkiskfg","剧":"cjsjffcjfg","勐":"egjfcffirs","匪":"jfjjjfjjjb","匿":"jjffjsfcjb","卿":"shscjjhkrf","厝":"jsjffjfcjj","原":"jssfcjjgsk","叟":"sfjcjjfel","哥":"jfcjfjfcjg","哦":"fcjsjgiysk","哧":"fcjjfjsgsk","哨":"fcjfksfrjj","哩":"fcjfcjjfjj","哭":"fcjfcjjslk","哮":"fcjjfjsegj","哲":"jgissjffcj","哳":"fcjjgissjf","哺":"fcjjfrjjfk","哼":"fcjkjfcjeg","哽":"fcjjfcjjsl","哿":"rsfcjjfcjg","唁":"fcjkjjjfcj","唆":"fcjnksksel","唇":"jsjjhslfcj","唉":"fcjnksjjsl","唏":"fcjskjsfrf","唐":"kjscjjffcj","唑":"fcjskskjfj","唔":"fcjjfcjfcj","唛":"fcjjjfjsel","唠":"fcjjffders","唢":"fcjfksfcsk","唣":"fcjsfcjjju","唤":"fcjsefcjsl","唧":"fcjcjjhkrf","啊":"fcjwfjfcjg","圃":"fcjfrjjfkj","圄":"fcjfcjfcjj","圆":"fcfcjfcskj","垸":"jfikdejjsu","埂":"jfijfcjjsl","埃":"jfinksjjsl","埋":"jfifcjjfjj","埒":"jfiskksjgk","埔":"jfijfrjjfk","埕":"jfifcjjjfj","埘":"jfifcjjjgk","埙":"jfifcjfcsk","埚":"jfifcjfrsk","壶":"jfjdeffksj","夏":"jsfcjjjsel","套":"jsljfjjjnk","奘":"bfjsjfjjsl","奚":"skksnnkjsl","姬":"msjjffcjfb","娉":"msjfcjfjjz","娌":"msjfcjjfjj","娑":"kkifsksmsj","娓":"msjcjssjju","娘":"msjkcjjhsl","娟":"msjfcjfrjj","娠":"msjjsjjhsl","娣":"msjkscjzfs","娥":"msjsjgiysk","娩":"msjsefcjsu","娱":"msjfcjjjsl","娲":"msjfcjfrsk","娴":"msjkfrjfsk","婀":"msjwfjfcjg","孬":"jsfkmsjegj","宰":"kdekjksjjf","害":"kdejjjffcj","宴":"kdefcjjmsj","宵":"kdefksfrjj","家":"kdejstsssl","宸":"kdejsjjhsl","容":"kdeskslfcj","宽":"kdejfffcsu","宾":"kdesfjfjsk","射":"sfrjjjsjgk","屐":"cjsssfjfel","屑":"cjsfksfrjj","展":"cjsjffjhsl","屙":"cjswfjfcjg","峨":"fbfsjgiysk","峪":"fbfskslfcj","峭":"fbffksfrjj","峰":"fbfseljjjf","峻":"fbfnksksel","崂":"fbfjffders","崃":"fbfjksjfsl","席":"kjsjffjfrf","帱":"frfjjjsjgk","座":"kjsskskjfj","弱":"cjzkicjzki","徐":"ssfsljjgsk","徒":"ssfjfjfjsl","徕":"ssfjksjfsl","恁":"sfsjfjdykk","恋":"kjffskdykk","恐":"jfisokdykk","恕":"msjfcjdykk","恙":"ksjjfjdykk","恚":"jfjjfjdykk","恝":"jjjfrsdykk","恣":"kisesldykk","恧":"jsfrffdykk","恩":"fcjskjdykk","恭":"jffjslgdkk","息":"sfcjjjdykk","恳":"cjjhsldykk","恶":"jffksjdykk","悃":"dkffcjfskj","悄":"dkffksfrjj","悌":"dkfkscjzfs","悍":"dkffcjjjjf","悒":"dkffcjcfju","悔":"dkfsjbrkjk","悖":"dkfjfdeegj","悚":"dkfjfcjfsl","悛":"dkfnksksel","悝":"dkffcjjfjj","悟":"dkfjfcjfcj","悦":"dkfksfcjsu","悭":"dkfffeljfj","悯":"dkfkfrkjsk","扇":"kcjsrkirki","拳":"ksjjslsjjg","拿":"sljfcjsjjg","挈":"jjjfrssjjg","挚":"jgisoksjjg","挛":"kjffsksjjg","挨":"jginksjjsl","挫":"jgiskskjfj","振":"jgijsjjhsl","挹":"jgifcjcfju","挽":"jgisefcjsu","捂":"jgijfcjfcj","捃":"jgicjjsfcj","捅":"jgiekfrjjf","捆":"jgifcjfskj","捉":"jgifcjfjsl","捋":"jgiskksjgk","捌":"jgifcjrsfg","捍":"jgifcjjjjf","捎":"jgifksfrjj","捏":"jgifcjjjfj","捐":"jgifcjfrjj","捕":"jgijfrjjfk","捞":"jgijffders","损":"jgifcjfcsk","捡":"jgisljkksj","换":"jgisefcjsl","捣":"jgisrkzfbf","效":"kjsksksjsl","敉":"ksjfsksjsl","敌":"sjffcjsjsl","敖":"jjfjrssjsl","斋":"kjsljsfrff","料":"ksjfskkkjf","旁":"kjksdekjrs","旃":"kjrssjsrkj","旄":"kjrssjsjju","旅":"kjrssjshsl","旆":"kjrssjjfrf","晁":"fcjjskiusk","晃":"fcjjfksjsu","晋":"jffksjfcjj","晌":"fcjjsfrfcj","晏":"fcjjkdemsj","晒":"fcjjjfcsbj","晓":"fcjjjysjsu","晔":"fcjjsfsujf","晕":"fcjjdejnjf","晖":"fcjjdejnjf","晚":"fcjjsefcjsu","晟":"fcjjjsrysk","朔":"ksjbfssrjj","朕":"srjjksjjsl","朗":"kcjjhksrjj","柴":"fjfisujfsl","栓":"jfsksljjfj","栖":"jfskjfcsbj","栗":"jfcffjjfsl","栝":"jfsksjffcj","校":"jfskkjsksl","栩":"jfskrkirki","株":"jfsksjjfsl","栲":"jfskjfjsjz","栳":"jfskjfjssu","样":"jfskksjjjf","核":"jfskkjnssk","根":"jfskcjjhsl","格":"jfskselfcj","栽":"jfjjfskysk","栾":"kjffskjfsl","桀":"sekjnfjfsl","桁":"jfskssfjjg","桂":"jfskjfjjfj","桃":"jfskskiusk","桄":"jfskfksjsu","桅":"jfsksejsru","框":"jfskjjjfjb","案":"kdemsjjfsl","桉":"jfskkdemsj","桊":"ksjjsljfsl","桌":"fjfcjjjfsl","桎":"jfskjnkjfj","桐":"jfskfrjfcj","桑":"ekekekjfsl","桓":"jfskjfcjjj","桔":"jfskjfjfcj","桕":"jfsksfjcjj","桠":"jfskjffksj","桡":"jfskjysjsu","桢":"jfskfjfcsk","档":"jfskfkscjj","桤":"jfskfbfcju","桥":"jfsksjslsf","桦":"jfsksfsujf","桧":"jfsksljjnk","桨":"kifsekjfsl","桩":"jfskkjsjfj","梃":"jfsksjfjal","梆":"jfskjjjswf","梢":"jfskfksfrjj","梧":"jfskjfcjfcj","梨":"sjfskfgjfsl","殉":"jseksrfcjj","殊":"jseksjjfsl","殷":"sscjjrsvel","毙":"jhsujseksu","毪":"sjjunksjjf","氤":"sjjofcjskj","氦":"sjjokjnssk","氧":"sjjoksjjjf","氨":"sjjokdemsj","氩":"sjjojffksj","泰":"jjjslgkisk","流":"kkikjnksfu","浆":"kifsekgesl","浙":"kkijgissjf","浚":"kkinksksel","浜":"kkisfjfjsk","浞":"kkifcjfjsl","浠":"kkiskjsfrf","浣":"kkikdejjsu","浦":"kkijfrjjfk","浩":"kkisjfjfcj","浪":"kkikcjjhsl","浮":"kkiskksegj","浯":"kkijfcjfcj","浴":"kkiskslfcj","海":"kkisjbrkjk","浸":"kkicjjdeel","浼":"kkisefcjsu","涂":"kkisljjgsk","涅":"kkifcjjjfj","消":"kkifksfrjj","涉":"kkifjfjfss","涌":"kkiekfrjjf","涑":"kkijfcjfsl","涓":"kkifcjfrjj","涔":"kkifbfslke","涕":"kkikscjzfs","涛":"kkijjjsjgk","涝":"kkijffders","涞":"kkijksjfsl","涟":"kkijnjfkal","涠":"kkifcjjrfj","涡":"kkifcjfrsk","涣":"kkisefcjsl","涤":"kkiseljgsk","润":"kkikfrjjfj","涧":"kkikfrfcjj","涨":"kkicjzsjhl","涩":"kkirsdfjfj","烈":"jsekfgdkkk","烊":"dsskksjjjf","烘":"dsskjffjsk","烙":"dsskselfcj","烛":"dsskfcjfjk","烟":"dsskfcjskj","烤":"dsskjfjsjz","烦":"dsskjsfcsk","烧":"dsskjysjsu","烨":"dssksfsujf","烩":"dssksljjnk","烫":"kkiwssdssl","烬":"dsskcjslkk","热":"jgisokdkkk","爱":"skksdejsel","爹":"skslseksek","特":"sjfijfjjgk","牺":"sjfijfcsbj","狳":"stssljjgsk","狴":"stsjhsujfj","狷":"stsfcjfrjj","狸":"stsfcjjfjj","狺":"stskjjjfcj","狻":"stsnksksel","狼":"stskcjjhsl","猁":"stssjfskfg","猃":"stssljkksj","玺":"segskjjfjk","珙":"jjfijffjsk","珞":"jjfiselfcj","珠":"jjfisjjfsl","珥":"jjfijffjjj","珧":"jjfiskiusk","珩":"jjfissfjjg","班":"jjfidsjjfj","珲":"jjfidejnjf","琊":"jjfijngswf","瓞":"sshklsjjsk","瓶":"ksjjsfjhok","瓷":"kisesljhok","畔":"fcjfjksjjf","留":"shkrsfcjfj","畚":"nkjslfcjfj","畛":"fcjfjslsss","畜":"kjnnkfcjfj","疰":"kjskikjjfj","疱":"kjskisrcju","疲":"kjskiesfel","疳":"kjskijffjj","疴":"kjskijfcjg","疸":"kjskifcjjj","疹":"kjskislsss","疼":"kjskiselkk","疽":"kjskifcjjj","疾":"kjskisjjsl","痂":"kjskirsfcj","痃":"kjskikjnnk","痄":"kjskisjfjj","病":"kjskijfrsk","症":"kjskijfjfj","痈":"kjskisrjjf","痉":"kjskiekjfj","皋":"sfcjjjsljf","皱":"secjjesfel","益":"ksjskfcffj","盍":"jfjnkfcffj","盎":"fcjslfcffj","盏":"jjyskfcffj","盐":"jfifkfcffj","监":"ffsjkfcffj","眙":"fcjjjnkfcj","眚":"sjjfjfcjjj","真":"jffcjjjjsk","眠":"fcjjjcjhjy","眢":"sekrufcjjj","眩":"fcjjjkjnnk","砝":"jsfcjjfjnk","弢":"cjzfbfel","砟":"jsfcjsjfjj","砣":"jsfcjkdesu","砥":"jsfcjshjyk","砧":"jsfcjfjfcj","砩":"jsfcjcjzsf","砬":"jsfcjkjksj","砰":"jsfcjjksjf","破":"jsfcjesfel","砷":"jsfcjfcjjf","砸":"jsfcjjfrfb","砹":"jsfcjjffsl","砺":"jsfcjjsjrs","砻":"jsuskjsfcj","砼":"jsfcjsljfj","砾":"jsfcjsbgsk","础":"jsfcjbffbf","祟":"bffbfjjgsk","祥":"kefkksjjjf","祧":"kefkskiusk","祯":"kefkfjfcsk","离":"kjskbffrnk","秘":"sjfskdyksk","租":"sjfskfcjjj","秣":"sjfskjjfsl","秤":"sjfskjksjf","秦":"jjjslsjfsk","秧":"sjfskfcjsl","秩":"sjfsksjjsl","秫":"sjfskjfslk","积":"sjfskfcjsk","称":"sjfsksegsk","窄":"kdesksjfjj","窈":"kdesknnkrs","窍":"kdeskjfijz","站":"kjksifjfcj","竞":"kjksjfcjsu","笄":"sjksjkjjsf","笆":"sjksjkcfju","笊":"sjksjkssfl","笋":"sjksjkcjjs","笏":"sjksjksrss","笑":"sjksjksjsl","笔":"sjksjksjju","笕":"sjksjkfcsu","笫":"sjksjkszfs","粉":"ksjfskslrs","粑":"ksjfskcfju","紊":"kjslnnkgsk","素":"jjfjnnkgsk","索":"jfdennkgsk","紧":"ffelnnkgsk","绠":"nnijfcjjsl","绡":"nnifksfrjj","绢":"nnifcjfrjj","绣":"nnisjfslws","绥":"nniskksmsj","绦":"nniseljgsk","继":"nniksjfskb","绨":"nnikscjzfs","缺":"sjjfbfcjsl","罟":"fcffjjffcj","罡":"fcffjjfjfj","罢":"fcffjjfjnk","羔":"ksjjfjdkkk","羞":"ksjjjscfjj","翁":"slnkrkirki","翅":"jfelrkirki","耄":"jfjssusjju","耆":"jfjssufcjj","耕":"jjjfskjjsf","耖":"jjjfskfsks","耗":"jjjfsksjju","耘":"jjjfskjjnk","耙":"jjjfskcfju","耸":"sksljffjjj","耻":"jffjjifjfj","耽":"jffjjidesu","耿":"jffjjidssl","聂":"jffjjjekel","胭":"srjjfcjskj","胯":"srjjjsljjz","胰":"srjjjcjzsl","胱":"srjjfksjsu","胲":"srjjkjnssk","胳":"srjjselfcj","胴":"srjjfrjfcj","胶":"srjjkjsksl","胸":"srjjsrskbf","胺":"srjjkdemsj","胼":"srjjksjjsf","能":"nkfrjjsusu","脂":"srjjsufcjj","脆":"srjjsejsru","脊":"kiskslfrjj","脍":"srjjsljjnk","脎":"srjjskjgsk","脏":"srjjkjsjfj","脐":"srjjkjslsf","脑":"srjjkjskbf","脒":"srjjksjfsl","脓":"srjjdeshsl","臬":"sfcjjjjfsl","臭":"sfcjjjjslk","致":"jnkjfisjsl","舀":"skkssfjcjj","舐":"sjffcjshjy","舨":"ssrkjkssel","航":"ssrkjkkjso","舫":"ssrkjkkjrs","般":"ssrkjksvel","舭":"ssrkjkjhsu","舯":"ssrkjkfcjf","舰":"ssrkjkfcsu","舱":"ssrkjkslru","艳":"jjjfsecfju","荷":"jffsfjfcjg","荸":"jffjfdeegj","荻":"jffstsdssl","荼":"jffsljjgsk","荽":"jffskksmsj","莅":"jffsfkjksj","莆":"jffjfrjjfk","莉":"jffsjfskfg","莎":"jffkkifsks","莓":"jffsjbrkjk","莘":"jffkjksjjf","莜":"jffsffsjsl","莞":"jffkdejjsu","莠":"jffsjfslws","莨":"jffkcjjhsl","莩":"jffskksegj","莪":"jffsjgiysk","莫":"jfffcjjjsl","莰":"jffjfisesl","莱":"jffjksjfsl","莲":"jffjnjfkal","莳":"jfffcjjjgk","莴":"jfffcjfrsk","莶":"jffsljkksj","获":"jffstsjslk","莸":"jffstsjsuk","莹":"jffdejjfjk","莺":"jffdesrkzj","莼":"jffnnijbfu","莽":"jffjslkjsf","虑":"fjesjudykk","虔":"fjesjukjsl","蚊":"fcjfjkkjsl","蚋":"fcjfjkfrsk","蚌":"fcjfjkjjjf","蚍":"fcjfjkjhsu","蚓":"fcjfjkcjzf","蚕":"jjslfcjfjk","蚜":"fcjfjkjngs","蚝":"fcjfjksjju","蚣":"fcjfjkslnk","蚧":"fcjfjkslsf","蚨":"fcjfjkjjsl","蚩":"bffjfcjfjk","蚪":"fcjfjkkkjf","蚬":"fcjfjkfcsu","衄":"sfcfficfjj","衮":"kjsknkshsl","衰":"kjfcjjshsl","衷":"kjfcjfshsl","衾":"slkekjshsl","袁":"jfjfcjshsl","袍":"kefsksrcju","袒":"kefskfcjjj","袖":"kefskfcjfj","袜":"kefskjjfsl","袢":"kefskksjjf","被":"kefskesfel","觊":"fbfcjhfcsu","请":"kpjjfjfrjj","诸":"kpjfjsfcjj","诹":"kpjffjjiel","诺":"kpjffjsfcj","读":"kpjfekkjsk","诼":"kpjstssksl","诽":"kpfjjjfjjj","课":"kpfcjjjfsl","诿":"kpsjfslmsj","谀":"kpsfjcjjsl","谁":"kpsfkjjjfj","谂":"kpslkedykk","调":"kpsrjfjfcj","谄":"kpsesfjcjj","谅":"kpkjfcjgsk","谆":"kpkjfcjegj","谇":"kpkjskskjf","谈":"kpdsskdssl","谊":"kpkdefcjjj","豇":"jfcjksijfj","豹":"skkstsssrk","豺":"skkstssjgs","贼":"fcskjjsysk","贽":"jgisokfcsk","贾":"jfcffjfcsk","贿":"fcskjsfrjj","赀":"fjfisufcsk","赁":"sfsjfjfcsk","赂":"fcskselfcj","赃":"fcskkjsjfj","资":"kiseslfcsk","赅":"fcskkjnssk","赆":"fcskcjslkk","赶":"jfjfjsljjf","起":"jfjfjslcju","趵":"fcjfjfisrk","趸":"jrsfcjfjsl","趿":"fcjfjfisal","躬":"sfrjjjscjz","軎":"jfcjjjffcj","轼":"jnfijjfiyk","载":"jfjjnfiysk","轾":"jnfijnkjfj","轿":"jnfisjslsf","辁":"jnfisljjfj","辂":"jnfiselfcj","较":"jnfikjsksl","辱":"jsjjhsljgk","逋":"jfrjjfkkal","逍":"fksfrjjkal","透":"sjfslwskal","逐":"jstssskkal","逑":"jgkiskkkal","递":"kscjzfskal","途":"sljjgskkal","逖":"stsdsskkal","逗":"jfcjksjkal","通":"ekfrjjfkal","逛":"stsjjfjkal","逝":"jgissjfkal","逞":"fcjjjfjkal","速":"jfcjfskkal","造":"sjfjfcjkal","逡":"nksksekkal","逢":"seljjjfkal","逦":"jfrkfrkkal","邕":"mmmfcjcfju","部":"kjksjfcjwf","郫":"sfcjjsjfwf","郭":"kjfcjegiwf","郯":"dsskdsskwf","郴":"jfskjfskwf","郸":"ksfcjjjfwf","都":"jfjsfcjjwf","酌":"jfcsbjjsrk","配":"jfcsbjjcju","酎":"jfcsbjjjgk","酏":"jfcsbjjrfu","酐":"jfcsbjjjjf","酒":"kkijfcsbjj","釜":"sksljjfksj","钰":"sjjjhjjfjk","钱":"sjjjhjjysk","钲":"sjjjhjfjfj","钳":"sjjjhjffjj","钴":"sjjjhjffcj","钵":"sjjjhjfslj","钶":"sjjjhjfcjg","钷":"sjjjhjfcjb","钸":"sjjjhjsfrf","钹":"sjjjhjselk","钺":"sjjjhjhysk","钻":"sjjjhfjfcj","钼":"sjjjhfcjjj","钽":"sjjjhfcjjj","钾":"sjjjhfcjjf","钿":"sjjjhfcjfj","铀":"sjjjhfcjfj","铁":"sjjjhsjjsl","铂":"sjjjhsfcjj","铃":"sjjjhslkek","铄":"sjjjhsbgsk","铅":"sjjjhsvfcj","铆":"sjjjhshsrf","铈":"sjjjhkjfrf","铉":"sjjjhkjnnk","铊":"sjjjhkdesu","铋":"sjjjhdyksk","铌":"sjjjhcjssu","铍":"sjjjhesfel","铎":"sjjjheljjf","阃":"kfrfcjfskj","阄":"kfrsefcjju","阅":"kfrksfcjsu","阆":"kfrkcjjhsk","陪":"wfkjksjfcj","陬":"wfjffjjiel","陲":"wfsjfjffjj","陴":"wfsfcjjsjf","陵":"wfjfjsksel","陶":"wfsrsjjfbf","陷":"wfsesfjcjj","隼":"sfkjjjfjjf","隽":"sfkjjjfjws","难":"eksfkjjjfj","顼":"jjfijsfcsk","顽":"jjshjsfcsk","顾":"jsrhjsfcsk","顿":"jbfhjsfcsk","颀":"ssjfjsfcsk","颁":"skrsjsfcsk","颂":"sknkjsfcsk","颃":"kjspjsfcsk","预":"ekegjsfcsk","饽":"sehjfdeegj","饿":"sehsjgiysk","馀":"sehsljjgsk","馁":"sehskksmsj","骊":"czijfrkfrk","骋":"czifcjfjjz","验":"czisljkksj","骏":"czinksksel","高":"kjfcjfrfcj","髟":"jfjjjnksss","鬯":"skkkkkbfsu","鬲":"jfcjfrksjf","鸪":"jffcjsrkzj","鸫":"jngsksrkzj","鸬":"fjcjssrkzj","鸭":"fcjjfsrkzj","鸯":"fcjslsrkzj","鸱":"shjyksrkzj","鸲":"srfcjsrkzj","鸳":"sekrusrkzj","鸵":"srkzikdesu","龛":"sljfcjjsusk","鸶":"nnnnjsrkzj","龀":"fjfjskbfsu","乾":"jffcjjjfsjo","偃":"sfjfcjjmsjb","假":"sfcjfjjcjel","偈":"sffcjjsrskb","偎":"sffcjfjjhsl","偏":"sfkcjsfrjff","偕":"sfjhsusfcjj","做":"sfjffcjsjsl","停":"sfkjfcjdejg","偬":"sfsrsskdykk","偶":"sffcjjfrfik","偷":"sfsljfrjjfg","偻":"sfksjfslmsj","偾":"sfjfjfffcsk","偿":"sffksdejjnk","傀":"sfsfcjjsunk","兜":"sfcjjshcjsu","兽":"ksfcjfjjfcj","冕":"fcjjsefcjsu","减":"kijsjfcjysk","凑":"kijjjsljjsk","凰":"sosfcjjjjfj","剪":"ksjfrjjfgrs","副":"jfcjfcjfjfg","勒":"jffjfcjjfrs","勖":"fcjjfcjjjrs","勘":"jffjjjskbrs","匏":"jskjjzsrcju","匐":"srjfcjfcjfj","匙":"fcjjjfjslsu","匮":"jfcjfjfcskb","匾":"jkcjsfrjffb","厢":"jsjfskfcjjj","厣":"jsjslkfcjjf","厩":"jscjjhkjnsu","唪":"fcjjjjsljjf","唬":"fcjfjesjuso","售":"sfkjjjfjfcj","唯":"fcjsfkjjjfj","唰":"fcjcjsfrffg","唱":"fcjfcjjfcjj","唳":"fcjkcjsjslk","唷":"fcjkjnkfrjj","唼":"fcjkjksjmsj","唾":"fcjsjfjffjj","唿":"fcjsrssdykk","啁":"fcjsrjfjfcj","啃":"fcjfjfjfrjj","啄":"fcjjstssksl","商":"kjksfrskfcj","啉":"fcjjfskjfsl","啐":"fcjkjskskjf","啕":"fcjsrsjjfbf","啖":"fcjdsskdssl","啜":"fcjekekekel","啡":"fcjfjjjfjjj","啤":"fcjsfcjjsjf","啥":"fcjsljjffcj","啦":"fcjjgikjksj","啧":"fcjjjfjfcsk","啪":"fcjjgisfcjj","啬":"jfksjfcfcjj","啭":"fcjjnfijjxk","啮":"fcjfjfjskbf","啵":"fcjkkiesfel","啶":"fcjkdejfjsl","啷":"fcjkcjjhkwf","啸":"fcjcjjfsfsk","喏":"fcjjffjsfcj","喵":"fcjjfffcjfj","圈":"fcksjjslruj","圉":"fcjfjksjjfj","圊":"fcjjfjfrjjj","埝":"jfislkedykk","域":"jfijfcjiysk","埠":"jfisfcjcjjf","埤":"jfisfcjjsjf","埭":"jficjjgkisl","埯":"jfijslfcjju","埴":"jfijffcjjjj","埸":"jfifcjjsrss","培":"jfikjksjfcj","基":"jffjjjsljfj","埽":"jficjjdefrf","堀":"jficjsbffbf","堂":"fksdefcjjfj","堆":"jfisfkjjjfj","堇":"jffjfcjjjfj","堋":"jfisrjjsrjj","堍":"jfisefcjsuk","堑":"jnfissjfjfj","堕":"wfjsfrjjjfj","堵":"jfijfjsfcjj","够":"srfcjseksek","奢":"jsljfjsfcjj","娶":"jffjjielmsj","娼":"msjfcjjfcjj","婆":"kkiesfelmsj","婉":"msjkdesekru","婊":"msjjjfjshsl","婕":"msjjcjjfjsl","婚":"msjshjyfcjj","婢":"msjsfcjjsjf","婧":"msjjjfjfrjj","婪":"jfskjfslmsj","婴":"fcskfcskmsj","婵":"msjksfcjjjf","婶":"msjkdefcjjf","孰":"kjfcjegisok","宿":"kdesfjsfcjj","寂":"kdefjjgskel","寄":"kdejskjfcjg","寅":"kdejfcjfjsk","密":"kdedykskfbf","寇":"kdejjsufjek","尉":"cjsjjgskjgk","屠":"cjsjfjsfcjj","崆":"fbfkdeskjfj","崇":"fbfkdejjgsk","崎":"fbfjskjfcjg","崔":"fbfsfkjjjfj","崖":"fbfjsjfjjfj","崛":"fbfcjsbffbf","崞":"fbfkjfcjegj","崤":"fbfskjsfrjj","崦":"fbfjslfcjju","崧":"fbfjfskslnk","崩":"fbfsrjjsrjj","崭":"fbfjnfissjf","崮":"fbffcjffcjj","巢":"mmmfcjjjfsl","帷":"frfsfkjjjfj","常":"fksdefcjfrf","帻":"frfjjfjfcsk","帼":"frffcjjfjkj","庳":"kjssfcjjsjf","庵":"kjsjslfcjju","庶":"kjsjffjdkkk","康":"kjscjjgkisl","庸":"kjscjjfrjjf","庹":"kjsjffjcjsl","庾":"kjssfjcjjsl","廊":"kjskcjjhkwf","弹":"cjzksfcjjjf","彗":"jjjfjjjfcjj","彩":"skksjfsksss","彬":"jfskjfsksss","得":"ssffcjjjjgk","徘":"ssffjjjfjjj","徙":"ssffjfjfjsl","徜":"ssffksfrfcj","恿":"ekfrjjfdykk","悉":"sksjfsldykk","悠":"sffsjsldykk","患":"fcjfcjfdykk","您":"sfsegskdykk","悫":"jfjdesodykk","悬":"fcjjjnkdykk","悱":"dkffjjjfjjj","悴":"dkfkjskskjf","悸":"dkfsjfslegj","悻":"dkfjfjksjjf","悼":"dkffjfcjjjf","情":"dkfjjfjfrjj","惆":"dkfsrjfjfcj","惊":"dkfkjfcjgsk","惋":"dkfkdesekru","惕":"dkffcjjsrss","惘":"dkffrksjkjb","惚":"dkfsrssdykk","惜":"dkfjffjfcjj","惝":"dkffksfrfcj","惟":"dkfsfkjjjfj","惦":"dkfkjsfjfcj","惧":"dkffcjjjjsk","惨":"dkfnkjslsss","惬":"dkfjjksjskb","惭":"dkfjnfissjf","惮":"dkfksfcjjjf","惯":"dkfbcfjfcsk","戚":"jsfjjgskysk","戛":"jsfcjjjjysk","扈":"kcjsfcjcfju","挲":"kkifskssjjg","捧":"jgijjjsljjf","捩":"jgikcjsjslk","捭":"jgisfcjjsjf","据":"jgicjsjffcj","捱":"jgijsjfjjfj","捶":"jgisjfjffjj","捷":"jgijcjjfjsl","捺":"jgijsljjgsk","捻":"jgislkedykk","掀":"jgissjfsesl","掂":"jgikjsfjfcj","掇":"jgiekekekel","授":"jgiskksdeel","掉":"jgifjfcjjjf","掊":"jgikjksjfcj","掎":"jgijskjfcjg","掏":"jgisrsjjfbf","掐":"jgisesfjcjj","排":"jgifjjjfjjj","掖":"jgikjsfsekl","掘":"jgicjsbffbf","掠":"jgikjfcjgsk","探":"jgideskjfsl","接":"jgikjksjmsj","控":"jgikdeskjfj","推":"jgisfkjjjfj","掩":"jgijslfcjju","措":"jgijffjfcjj","掬":"jgisrksjfsk","掭":"jgijjslgdkk","掮":"jgikcjsfrjj","掳":"jgifjesjurs","掴":"jgifcjjfjkj","掷":"jgiksjjskwf","掸":"jgiksfcjjjf","掺":"jginkjslsss","掼":"jgibcfjfcsk","揶":"jgijffjjiwf","敏":"sjbrkjksjsl","救":"jgkiskksjsl","敕":"jfcjfsksjsl","教":"jfjsegisjsl","敛":"skjkksisjsl","敝":"ksfrfsksjsl","敢":"ejffjjisjsl","斛":"sesrjjfkkjf","斜":"skjjgskkkjf","断":"ksjfskbssjf","旋":"kjrssjefjsl","旌":"kjrssjsjjfj","旎":"kjrssjcjssu","族":"kjrssjsjjsl","晗":"fcjjslkefcj","晡":"fcjjjfrjjfk","晤":"fcjjjfcjfcj","晦":"fcjjsjbrkjk","晨":"fcjjjsjjhsl","曹":"jfcjffjfcjj","曼":"fcjjfcffjel","望":"kjhsrjjjjfj","桫":"jfskkkifsks","桴":"jfskskksegj","桶":"jfskekfrjjf","桷":"jfsksesrjjf","梁":"kkirsdkjfsl","梅":"jfsksjbrkjk","梏":"jfsksjfjfcj","梓":"jfskkjksjjf","梗":"jfskjfcjjsl","梦":"jfskjfslsek","梭":"jfsknksksel","梯":"jfskkscjzfs","械":"jfskjjsfysk","梳":"jfskkjnksfu","梵":"jfskjfslsok","检":"jfsksljkksj","棂":"jfskcjjdssl","欲":"skskfcjsesl","欷":"skjsfrfsesl","殍":"jsekskksegj","殒":"jsekfcjfcsk","殓":"jseksljkksj","毫":"kjfcjdesjju","氪":"sjjojffcjsu","涪":"kkikjksjfcj","涫":"kkikdefcjcj","涮":"kkicjsfrffg","涯":"kkijsjfjjfj","液":"kkikjsfsekl","涵":"kkiegkiskbf","涸":"kkifcjffcjj","涿":"kkijstssksl","淀":"kkikdejfjsl","淄":"kkimmmfcjfj","淅":"kkijfskssjf","淆":"kkiskjsfrjj","淇":"kkijffjjjsk","淋":"kkijfskjfsl","淌":"kkifksfrfcj","淑":"kkifjjgskel","淖":"kkifjfcjjjf","淘":"kkisrsjjfbf","淙":"kkikdejjgsk","淝":"kkisrjjcfju","淞":"kkijfskslnk","淠":"kkifcjfjjsf","淡":"kkidsskdssl","淤":"kkikjrsslkk","淦":"kkisljjfksj","淫":"kkiskkssjfj","淬":"kkikjskskjf","淮":"kkisfkjjjfj","深":"kkideskjfsl","淳":"kkikjfcjegj","混":"kkifcjjjhsu","淹":"kkijslfcjju","添":"kkijjslgdkk","清":"kkijjfjfrjj","渊":"kkisksjfskf","渌":"kkicjjgkisl","渍":"kkijjfjfcsk","渎":"kkijfekkjsk","渐":"kkijnfissjf","渑":"kkifcjfcjju","渔":"kkisefcjfjj","渖":"kkikdefcjjf","渗":"kkinkjslsss","渚":"kkijfjsfcjj","渠":"kkijcjbjfsl","烯":"dsskskjsfrf","烷":"dsskkdejjsu","烹":"kjfcjegdkkk","烽":"dsskseljjjf","焉":"jfjfjjzdkkk","焊":"dsskfcjjjjf","焐":"dsskjfcjfcj","焓":"dsskslkefcj","焕":"dssksefcjsl","焖":"dsskkfrdykk","焘":"jjjsjgkdkkk","爽":"jsksksksksl","牾":"sjfijfcjfcj","牿":"sjfisjfjfcj","犁":"sjfskfgsjjf","猊":"stssfjcjjsu","猎":"stsjffjfcjj","猓":"stsfcjjjfsl","猕":"stscjzsegsk","猖":"stsfcjjfcjj","猗":"stsjskjfcjg","猛":"stsegjfcffj","猜":"stsjjfjfrjj","猝":"stskjskskjf","猞":"stssljjffcj","猡":"stsfcffjsek","猪":"stsjfjsfcjj","猫":"stsjfffcjfj","率":"kjnnkkiskjf","球":"jjfijgkislk","琅":"jjfikcjjhsl","理":"jjfifcjjfjj","琉":"jjfikjnksfu","琏":"jjfijnjfkal","琐":"jjfifksfcsk","瓠":"jsljjzsshkl","甜":"sjffcjjffjj","略":"fcjfjselfcj","畦":"fcjfjjfjjfj","疵":"kjskifjfisu","痊":"kjskisljjfj","痍":"kjskijcjzsl","痒":"kjskiksjjjf","痔":"kjskijfjjgk","痕":"kjskicjjhsl","痖":"kjskijffksj","皎":"sfcjjkjsksl","皑":"sfcjjfbfcju","皲":"dejnfiesfel","盒":"sljfcjfcffj","盔":"jsdsslfcffj","盖":"ksjjfjfcffj","盗":"kiseslfcffj","盘":"ssrkjkfcffj","盛":"jsryskfcffj","眦":"fcjjjfjfisu","眭":"fcjjjjfjjfj","眯":"fcjjjksjfsl","眵":"fcjjjseksek","眶":"fcjjjjjjfjb","眷":"ksjjslfcjjj","眸":"fcjjjnksjjf","眺":"fcjjjskiusk","眼":"fcjjjcjjhsl","着":"ksjjjsfcjjj","睁":"fcjjjsecjjg","矫":"sjjsksjslsf","砦":"fjfisujsfcj","硅":"jsfcjjfjjfj","硇":"jsfcjsfcskj","硌":"jsfcjselfcj","硎":"jsfcjjjsffg","硐":"jsfcjfrjfcj","硒":"jsfcjjfcsbj","硕":"jsfcjjsfcsk","硖":"jsfcjjksjsl","硗":"jsfcjjysjsu","硭":"jsfcjjffkjb","票":"jfcffjjjgsk","祭":"sekkeljjgsk","祷":"kefkjjjsjgk","祸":"kefkfcjfrsk","秸":"sjfskjfjfcj","移":"sjfskseksek","秽":"sjfskfbfsek","稆":"sjfskfcjfcj","窑":"kdesksjjfbf","窒":"kdeskjnkjfj","窕":"kdeskskiusk","竟":"kjksjfcjjsu","章":"kjksjfcjjjf","笙":"sjksjksjjfj","笛":"sjksjkfcjfj","笞":"sjksjknkfcj","笠":"sjksjkkjksj","笤":"sjksjkrsfcj","笥":"sjksjkrjfcj","符":"sjksjksfjgk","笨":"sjksjkjfslj","笪":"sjksjkfcjjj","第":"sjksjkcjzfs","笮":"sjksjksjfjj","笱":"sjksjksrfcj","笳":"sjksjkrsfcj","笸":"sjksjkjfcjb","笺":"sjksjkjjysk","笼":"sjksjkjsusk","笾":"sjksjkrskal","筇":"sjksjkjfiwf","粒":"ksjfskkjksj","粕":"ksjfsksfcjj","粗":"ksjfskfcjjj","粘":"ksjfskfjfcj","粜":"bffbfksjfsl","粝":"ksjfskjsjrs","累":"fcjfjnnkgsk","绩":"nnijjfjfcsk","绪":"nnijfjsfcjj","绫":"nnijfjsksel","续":"nnijfekkjsk","绮":"nnijskjfcjg","绯":"nnifjjjfjjj","绰":"nnifjfcjjjf","绱":"nnifksfrfcj","绲":"nnifcjjjhsu","绳":"nnifcjfcjju","维":"nnisfkjjjfj","绵":"nnisfcjjfrf","绶":"nniskksdeel","绷":"nnisrjjsrjj","绸":"nnisrjfjfcj","绺":"nniselfkfcj","绻":"nniksjjslru","综":"nnikdejjgsk","绽":"nnikdejfjsl","绾":"nnikdefcjcj","绿":"nnicjjgkisl","缀":"nniekekekel","缁":"nnimmmfcjfj","缍":"nnisjfjffjj","羚":"ksjjjsslkek","羝":"ksjjjsshjyk","羟":"ksjjjsekjfj","翊":"kjksirkirki","翌":"ckickikjksj","翎":"skkekrkirki","耜":"jjjfskfcjcj","聃":"jffjjifrfjj","聆":"jffjjislkek","聊":"jffjjishsrf","聋":"jsuskjffjjj","职":"jffjjifcjsk","聍":"jffjjikdejg","胬":"msjelfrsksk","脖":"srjjjfdeegj","脘":"srjjkdejjsu","脚":"srjjjfjnkrf","脞":"srjjskskjfj","脬":"srjjskksegj","脯":"srjjjfrjjfk","脱":"srjjksfcjsu","脲":"srjjcjsgesl","脶":"srjjfcjfrsk","脸":"srjjsljkksj","舂":"jjjslsfjcjj","舳":"ssrkjkfcjfj","舴":"ssrkjksjfjj","舵":"ssrkjkkdesu","舶":"ssrkjksfcjj","舷":"ssrkjkkjnnk","舸":"ssrkjkjfcjg","船":"ssrkjksvfcj","舻":"ssrkjkfjcjs","艴":"cjzsfsecfju","菀":"jffkdesekru","菁":"jffjjfjfrjj","菅":"jffkdefcjcj","菇":"jffmsjjffcj","菊":"jffsrksjfsk","菌":"jfffcsjfskj","菏":"jffkkijfcjg","菔":"jffsrjjrfel","菖":"jfffcjjfcjj","菘":"jffjfskslnk","菜":"jffskksjfsl","菝":"jffjgijselk","菟":"jffsefcjsuk","菠":"jffkkiesfel","菡":"jffegkiskbf","菥":"jffjfskssjf","菩":"jffkjksjfcj","菪":"jffkdejsfcj","菰":"jffegisshkl","菱":"jffjfjsksel","菲":"jfffjjjfjjj","菸":"jffkjrsslkk","菹":"jffkkifcjjj","菽":"jfffjjgskel","萁":"jffjffjjjsk","萃":"jffkjskskjf","萄":"jffsrsjjfbf","萆":"jffsfcjjsjf","萋":"jffjcjjfmsj","萌":"jfffcjjsrjj","萍":"jffkkijksjf","萎":"jffsjfslmsj","萏":"jffsesfjcjj","萑":"jffsfkjjjfj","萘":"jffjsljjgsk","萜":"jfffrffjfcj","萝":"jfffcffjsek","萤":"jffdefcjfjk","营":"jffdefcjfcj","萦":"jffdennkgsk","萧":"jffcjjfsfsk","萨":"jffwfkjksjs","萸":"jffsfjcjjsl","著":"jffjfjsfcjj","虚":"fjesjuffksj","蚯":"fcjfjksfjfj","蚰":"fcjfjkfcjfj","蚱":"fcjfjksjfjj","蚴":"fcjfjknnkrs","蚵":"fcjfjkjfcjg","蚶":"fcjfjkjffjj","蚺":"fcjfjkfrfjj","蛀":"fcjfjkkjjfj","蛄":"fcjfjkjffcj","蛆":"fcjfjkfcjjj","蛇":"fcjfjkkdesu","蛉":"fcjfjkslkek","蛊":"fcjfjkfcffj","蛋":"efjslfcjfjk","蛎":"fcjfjkjsjrs","蛏":"fcjfjkeljfj","衅":"sfcffiksjjf","衔":"ssfsjjjhjjg","袈":"rsfcjkjshsl","袋":"sfjykkjshsl","袤":"kjekegsshsl","袭":"jsuskkjshsl","袱":"kefsksfjslk","袷":"kefsksljfcj","袼":"kefskselfcj","裆":"kefskfkscjj","裉":"kefskcjjhsl","觋":"jfskskifcsu","觖":"sesrjjfcjsl","谋":"kpjffjjjfsl","谌":"kpjffjjjskb","谍":"kpjffjbjfsl","谎":"kpjffkjbsfu","谏":"kpjfcksjfsl","谐":"kpjhsusfcjj","谑":"kpfjesjujbj","谒":"kpfcjjsrskb","谓":"kpfcjfjfrjj","谔":"kpfcjfcjjjz","谕":"kpsljfrjjfg","谖":"kpskksjjsel","谗":"kpsefcjsukk","谘":"kpkiseslfcj","谙":"kpkjksjfcjj","谚":"kpkjksjssss","谛":"kpkjksdefrf","谜":"kpksjfskkal","谝":"kpkcjsfrjff","豉":"jfcjksijfel","豚":"srjjjstsssl","象":"sefcjstsssl","赇":"fcskjgkiskk","赈":"fcskjsjjhsl","赉":"jksjfslfcsk","赊":"fcsksljjgsk","赦":"jfjsgsksjsl","赧":"jfjsgskrfel","趺":"fcjfjfijjsl","趼":"fcjfjfijjsf","趾":"fcjfjfifjfj","跃":"fcjfjfisjsl","跄":"fcjfjfislru","距":"fcjfjfijcjb","躯":"sfrjjjsjskb","辄":"jnfijffjjiu","辅":"jnfijfrjjfk","辆":"jnfijfrsksk","逭":"kdefcjcjkal","逮":"cjjgkiskkal","逯":"cjjgkiskkal","逵":"jfjskjfjkal","逶":"sjfskmsjkal","逸":"sefcjsukkal","逻":"fcffjsekkal","郾":"jfcjjmsjbwf","鄂":"fcjfcjjjzwf","鄄":"jfcffjjfiwf","酗":"jfcsbjjskbf","酚":"jfcsbjjslrs","酝":"jfcsbjjjjnk","酞":"jfcsbjjjslk","野":"fcjjfjiekeg","铐":"sjjjhjfjsjz","铑":"sjjjhjfjssu","铒":"sjjjhjffjjj","铕":"sjjjhjsfrjj","铖":"sjjjhjsrysk","铗":"sjjjhjksjsl","铘":"sjjjhjngswf","铙":"sjjjhjysjsu","铛":"sjjjhfkscjj","铜":"sjjjhfrjfcj","铝":"sjjjhfcjfcj","铞":"sjjjhfcjfrf","铟":"sjjjhfcjskj","铠":"sjjjhfbfcju","铡":"sjjjhfcskfg","铢":"sjjjhsjjfsl","铣":"sjjjhsjfjsu","铤":"sjjjhsjfjal","铥":"sjjjhsjfjnk","铧":"sjjjhsfsujf","铨":"sjjjhsljjfj","铩":"sjjjhskjgsk","铪":"sjjjhsljfcj","铫":"sjjjhskiusk","铬":"sjjjhselfcj","铭":"sjjjhsekfcj","铮":"sjjjhsecjjg","铯":"sjjjhsecfju","铰":"sjjjhkjsksl","铱":"sjjjhkjshsl","铲":"sjjjhkjksjs","铳":"sjjjhkjnksu","铴":"sjjjhkkiwss","铵":"sjjjhkdemsj","银":"sjjjhcjjhsl","铷":"sjjjhmsjfcj","阈":"kfrjfcjiysk","阉":"kfrjslfcjju","阊":"kfrfcjjfcjj","阋":"kfrsfjcjjsu","阌":"kfrskksdeek","阍":"kfrshjyfcjj","阎":"kfrsesfjcjj","阏":"kfrkjrsslkk","阐":"kfrksfcjjjf","隅":"wffcjjfrfik","隆":"wfseljsjjfj","隈":"wffcjfjjhsl","隋":"wfjsjfjfrjj","隍":"wfsfcjjjjfj","随":"wfjsfrjjkal","隐":"wfsecjjdykk","隗":"wfsfcjjsunk","雀":"fsksfkjjjfj","雩":"jdefkkkkjjz","雪":"jdefkkkkcjj","颅":"fjcjsjsfcsk","领":"skkekjsfcsk","颇":"esfekjsfcsk","颈":"ekjfijsfcsk","馄":"sehfcjjjhsu","馅":"sehsesfjcjj","馆":"sehkdefcjcj","馗":"soksjsfcjjj","骐":"czijffjjjsk","骑":"czijskjfcjg","骒":"czifcjjjfsl","骓":"czisfkjjjfj","骖":"czinkjslsss","鸷":"jgisoksrkzj","鸸":"jsfrffsrkzj","鸹":"sjffcjsrkzj","鸺":"sfjfsksrkzj","鸽":"skjfcjsrkzj","鸾":"kjffsksrkzj","鸿":"kkijfisrkzj","鹿":"kjscffjjhsu","麸":"jjfjsekjjsl","麻":"kjsjfskjfsl","黄":"jffjfcjfjsk","龚":"jsuskjffjsk","亵":"kjjgisokshsl","傅":"sfjfcjjfkjgk","傈":"sfjfcffjjfsl","傍":"sfkjksdekjrs","傣":"sfjjjslgkisk","傥":"sffksdefcjsu","傧":"sfkdesfjfjsk","储":"sfkpjfjsfcjj","傩":"sfeksfkjjjfj","傲":"sfjjfjrssjsl","凿":"ffksjksjjfbf","剩":"sjffjisuskfg","割":"kdejjjffcjfg","募":"jfffcjjjslrs","博":"jfjfcjjfkjgk","厥":"jsksjbfssesl","厦":"jsjsfcjjjsel","厨":"jsjfcjksijgk","啻":"kjksdefrffcj","啼":"fcjkjksdefrf","啾":"fcjsjfskdssl","喀":"fcjkdeselfcj","喁":"fcjfcjjfrfik","喂":"fcjfcjfjjhsl","喃":"fcjjffrksjjf","善":"ksjjjfksjfcj","喇":"fcjjfcjfskfg","喈":"fcjjhsusfcjj","喉":"fcjsfcjsjjsl","喊":"fcjjsjfcjysk","喋":"fcjjffjbjfsl","喑":"fcjkjksjfcjj","喔":"fcjcjsjnkjfj","喘":"fcjfbfjsfrff","喙":"fcjnejstsssl","喜":"jfjfcjksjfcj","喝":"fcjfcjjsrskb","喟":"fcjfcjfjfrjj","喧":"fcjkdejfcjjj","喱":"fcjjsfcjjfjj","喳":"fcjjfslfcjjj","喷":"fcjjfjfffcsk","喹":"fcjjsljfjjfj","喻":"fcjsljfrjjfg","喽":"fcjksjfslmsj","喾":"kksdesjfjfcj","嗖":"fcjsfjcjjfel","嗟":"fcjksjjjsjfj","堙":"jfijfcffjjfj","堞":"jfijffjbjfsl","堠":"jfisfcjsjjsl","堡":"sffcjjfsljfj","堤":"jfifcjjjfjsl","堪":"jfijffjjjskb","堰":"jfijfcjjmsjb","塄":"jfifcffjkjrs","塔":"jfijffsljfcj","壹":"jfjdejfcjksj","奠":"ksjfcsbjjjsl","奥":"sfcksjfskjsl","婷":"msjkjfcjdejg","婺":"ekegssjslmsj","婿":"msjefjslfrjj","媒":"msjjffjjjfsl","媚":"msjcfjsfcjjj","媛":"msjskksjjsel","媪":"msjfcjjfcffj","嫂":"msjsfjcjjfel","孱":"cjsegjegiegj","孳":"ksjnnknnkegj","富":"kdejfcjfcjfj","寐":"kdebfjsjjfsl","寒":"kdejjffjslkk","寓":"kdefcjjfrfik","尊":"ksjfcsbjjjgk","就":"kjfcjgskjsuk","属":"cjssfcjfrfik","屡":"cjsksjfslmsj","崴":"fbfjsjmsjysk","崽":"fbffcjfjdykk","崾":"fbfjfcffjmsj","嵇":"sjfskjsukfbf","嵋":"fbfcfjsfcjjj","嵌":"fbfjffjjsesl","嵘":"fbfjffdejfsl","嵛":"fbfsljfrjjfg","嵝":"fbfksjfslmsj","嵫":"fbfksjnnknnk","嵬":"fbfsfcjjsunk","嵯":"fbfksjjjsjfj","巯":"ekjfikjnksfu","巽":"cjucjujffjsk","帽":"frffcjjfcjjj","幂":"defcjjjslfrf","幄":"frfcjsjnkjfj","幅":"frfjfcjfcjfj","弑":"skjgskjjfiyk","强":"cjzfcjfcjfjk","弼":"cjzjsfcjjcjz","彘":"nejjhsjjsksu","彭":"jfjfcjksisss","御":"ssfsjjfjfirf","徨":"ssfsfcjjjjfj","循":"ssfssjffcjjj","悲":"fjjjfjjjdykk","惑":"jfcjiyskdykk","惠":"jfcjjfjkdykk","惩":"ssfjfjfjdykk","惫":"selfcjfjdykk","惰":"dkfjsjfjfrjj","惴":"dkffbfjsfrff","惶":"dkfsfcjjjjfj","惹":"jffjsfcjdykk","惺":"dkffcjjsjjfj","愀":"dkfsjfskdssl","愉":"dkfsljfrjjfg","愎":"dkfsjfcjjsel","愕":"dkffcjfcjjjz","愠":"dkffcjjfcffj","愣":"dkffcffjkjrs","愤":"dkfjfjfffcsk","愦":"dkffcjfjfcsk","愧":"dkfsfcjjsunk","慌":"dkfjffkjbsfu","慨":"dkfcjjhkjnsu","戟":"jffcjjjfjysk","戡":"jffjjjskbjysk","戢":"fcjjffjjiysk","扉":"kcjsfjjjfjjj","掌":"fksdefcjsjjg","掣":"sjjfrffgsjjg","掰":"sjjsslrssjjg","掾":"jginejstsssl","揄":"jgisljfrjjfg","揆":"jgiekssljjsk","揉":"jgiekegsjfsl","揍":"jgijjjsljjsk","揎":"jgikdejfcjjj","描":"jgijfffcjfj","提":"jgifcjjjfjsl","插":"jgisjfsfjcjj","揖":"jgifcjjffjjj","揞":"jgikjksjfcjj","揠":"jgijfcjjmsjb","握":"jgicjsjnkjfj","揣":"jgifbfjsfrff","揩":"jgijhsusfcjj","揪":"jgisjfskdssl","揭":"jgifcjjsrskb","揲":"jgijffjbjfsl","援":"jgiskksjjsel","揸":"jgijfslfcjjj","揽":"jgiffsjkfcsu","揿":"jgisjjjhsesl","搀":"jgisefcjsukk","搁":"jgikfrselfcj","搂":"jgiksjfslmsj","搅":"jgikksdefcsu","搓":"jgiksjjjsjfj","搔":"jgielkfcjfjk","搜":"jgisfjcjjfel","搭":"jgijffsljfcj","搽":"jgijffsljgsk","摒":"jgicjsksjjsf","敞":"fksfrfcjsjsl","散":"jffjfrjjsjsl","敦":"kjfcjegisjsl","敬":"jffsrfcjsjsl","斌":"kjskjjfjfiyk","斐":"fjjjfjjjkjsl","斑":"jjfikjskjjfj","斯":"jffjjjskssjf","普":"ksjffksjfcjj","景":"fcjjkjfcjgsk","晰":"fcjjjfskssjf","晴":"fcjjjjfjfrjj","晶":"fcjjfcjjfcjj","晷":"fcjjselfkfcj","智":"sjjskfcjfcjj","晾":"fcjjkjfcjgsk","暂":"jnfissjffcjj","暑":"fcjjjfjsfcjj","曾":"ksfcfksjfcjj","替":"jjskjjslfcjj","最":"fcjjjffjjiel","朝":"jffcjjjfsrjj","期":"jffjjjsksrjj","棉":"jfsksfcjjfrf","棋":"jfskjffjjjsk","棍":"jfskfcjjjhsu","棒":"jfskjjjsljjf","棕":"jfskkdejjgsk","棘":"jfrfskjfrfsl","棚":"jfsksrjjsrjj","棠":"fksdefcjjfsl","棣":"jfskcjjgkisl","森":"jfsljfskjfsl","棰":"jfsksjfjffjj","棱":"jfskjfjsksel","棵":"jfskfcjjjfsl","棹":"jfskfjfcjjjf","棺":"jfskkdefcjcj","棼":"jfskjfskslrs","椁":"jfskkjfcjegj","椅":"jfskjskjfcjg","椋":"jfskkjfcjgsk","植":"jfskjffcjjjj","椎":"jfsksfkjjjfj","椐":"jfskcjsjffcj","椒":"jfskfjjgskel","椟":"jfskjfekkjsk","椠":"jnfissjfjfsl","椤":"jfskfcffjsek","椭":"jfskwfjsfrjj","椰":"jfskjffjjiwf","楗":"jfskcjjjjfal","楮":"jfskjfjsfcjj","榔":"jfskkcjjhkwf","欹":"jskjfcjgsesl","欺":"jffjjjsksesl","款":"jfjjjgsksesl","殖":"jsekjffcjjjj","殚":"jsekksfcjjjf","殛":"jsekegfcjekj","毯":"sjjudsskdssk","毳":"sjjusjjhsjju","毵":"nkjskssssjju","毽":"sjjucjjjjfal","氮":"sjjodsskdssk","氯":"sjjocjjgkisk","氰":"sjjojjfjfrjj","淼":"geslgeskgesl","渝":"kkisljfrjjfg","渡":"kkikjsjffjel","渣":"kkijfslfcjjj","渤":"kkijfdeegirs","渥":"kkicjsjnkjfj","温":"kkifcjjfcffj","渫":"kkijffjbjfsl","渭":"kkifcjfjfrjj","港":"kkijffjslcju","渲":"kkikdejfcjjj","渴":"kkifcjjsrskb","游":"kkikjrssjegj","渺":"kkifcjjjfsks","湃":"kkisjjsjjjjf","湄":"kkicfjsfcjjj","湍":"kkifbfjsfrff","湎":"kkijsfcffjjj","湓":"kkislrsfcffj","湔":"kkiksjfrjjfg","湖":"kkijffcjsrjj","湘":"kkijfskfcjjj","湛":"kkijffjjjskb","湟":"kkisfcjjjjfj","湫":"kkisjfskdssl","湮":"kkijfcffjjfj","湾":"kkikjffskcjz","湿":"kkifcjjffksj","溃":"kkifcjfjfcsk","溅":"kkifcskjjysk","溆":"kkiskjjgskel","溉":"kkicjjhkjnsu","溲":"kkisfjcjjfel","滁":"kkiwfsljjgsk","滋":"kkiksjnnknnk","滑":"kkifccdefrjj","滞":"kkijfffdefrf","焙":"dsskkjksjfcj","焚":"jfskjfskdssl","焦":"sfkjjjfjdkkk","焯":"dsskfjfcjjjf","焰":"dssksesfjcjj","焱":"dssldsskdssl","然":"sekkjslkdkkk","煮":"jfjsfcjjdkkk","牌":"sfjcsfcjjsjf","牍":"sfjcjfekkjsk","犀":"cjsfkisksjjf","犄":"sjfijskjfcjg","犊":"sjfijfekkjsk","犋":"sjfifcjjjjsk","犍":"sjficjjjjfal","猢":"stsjffcjsrjj","猥":"stsfcjfjjhsl","猩":"stsfcjjsjjfj","猬":"stsfcjfjfrjj","猱":"stsekegsjfsl","猴":"stssfcjsjjsl","猸":"stscfjsfcjjj","猹":"stsjfslfcjjj","猾":"stsfccdefrjj","琚":"jjficjsjffcj","琛":"jjfideskjfsl","琢":"jjfijstssksl","琥":"jjfifjesjuso","琦":"jjfijskjfcjg","琨":"jjfifcjjjhsu","琪":"jjfijffjjjsk","琬":"jjfikdesekru","琮":"jjfikdejjgsk","琰":"jjfidsskdssl","琳":"jjfijfskjfsl","琴":"jjfjjjfjslke","琵":"jjfjjjfjjhsu","琶":"jjfjjjfjcfju","琼":"jjfikjfcjgsk","瑛":"jjfijfffcjsl","瓿":"kjksjfcjjhok","甥":"sjjfifcjfjrs","甯":"kdedykkfrjjf","番":"sksjfslfcjfj","畲":"sljjgskfcjfj","畴":"fcjfjjjjsjgk","疏":"efjfikjnksfu","痘":"kjskijfcjksj","痛":"kjskiekfrjjf","痞":"kjskijsfkfcj","痢":"kjskisjfskfg","痣":"kjskijfjdykk","痤":"kjskiskskjfj","痦":"kjskijfcjfcj","痧":"kjskikkifsks","痨":"kjskijffders","痪":"kjskisefcjsl","痫":"kjskikfrjfsk","登":"ekssljfcjksj","皓":"sfcjjsjfjfcj","皖":"sfcjjkdejjsu","皴":"nksksekesfel","睃":"fcjjjnksksel","睇":"fcjjjkscjzfs","睐":"fcjjjjksjfsl","睑":"fcjjjsljkksj","矬":"sjjskskskjfj","短":"sjjskjfcjksj","硝":"jsfcjfksfrjj","硪":"jsfcjsjgiysk","硫":"jsfcjkjnksfu","硬":"jsfcjjfcjjsl","确":"jsfcjsesrjjf","硷":"jsfcjsljkksj","祺":"kefkjffjjjsk","禄":"kefkcjjgkisl","禅":"kefkksfcjjjf","禽":"slkjskbffrnk","稀":"sjfskskjsfrf","稂":"sjfskkcjjhsl","稃":"sjfskskksegj","程":"sjfskfcjjjfj","稍":"sjfskfksfrjj","税":"sjfskksfcjsu","窖":"kdesksjfjfcj","窗":"kdesksfcsekj","窘":"kdeskcjjsfcj","窜":"kdeskfcjfcjf","窝":"kdeskfcjfrsk","竣":"kjksinksksel","童":"kjksjfcjjfjj","竦":"kjksijfcjfsl","筅":"sjksjksjfjsu","等":"sjksjkjfjjgk","筋":"sjksjksrjjrs","筌":"sjksjksljjfj","筏":"sjksjksfjysk","筐":"sjksjkjjjfjb","筑":"sjksjkjfisok","筒":"sjksjkfrjfcj","答":"sjksjksljfcj","策":"sjksjkjfrfsl","筘":"sjksjkjgifcj","筚":"sjksjkjhsujf","筛":"sjksjkfsjfrf","筝":"sjksjksecjjg","筵":"sjksjksfjbal","粞":"ksjfskjfcsbj","粟":"jfcffjksjfsl","粢":"kiseslksjfsl","粤":"sfcksjfskjjz","粥":"cjzksjfskcjz","粪":"ksjfsljffjsk","紫":"fjfisunnkgsk","絮":"msjfcjnnkgsk","絷":"jgisoknnkgsk","缂":"nnijffjfcjjf","缃":"nnijfskfcjjj","缄":"nnijsjfcjysk","缅":"nnijsfcffjjj","缆":"nniffsjkfcsu","缇":"nnifcjjjfjsl","缈":"nnifcjjjfsks","缉":"nnifcjjffjjj","缋":"nnifcjfjfcsk","缌":"nnifcjfjdykk","缎":"nnisfjjisvel","缏":"nnisfjfcjjsl","缑":"nnisfcjsjjsl","缒":"nnisfcjcjkal","缓":"nniskksjjsel","缔":"nnikjksdefrf","缕":"nniksjfslmsj","编":"nnikcjsfrjff","缗":"nnicjhjyfcjj","缘":"nninejstsssl","缙":"nnijffksjfcjj","羡":"ksjjfjkisesl","翔":"ksjjjsrkirki","翕":"sljfcjrkirki","翘":"jysjsurkirki","耋":"jfjssujnkjfj","耠":"jjjfsksljfcj","聒":"jffjjisjffcj","联":"jffjjiksjjsl","脔":"kjffskfrsksk","脾":"srjjsfcjjsjf","腆":"srjjfcjffjsk","腈":"srjjjjfjfrjj","腊":"srjjjffjfcjj","腋":"srjjkjsfsekl","腌":"srjjjslfcjju","腑":"srjjkjssfjgk","腓":"srjjfjjjfjjj","腔":"srjjkdeskjfj","腕":"srjjkdesekru","腙":"srjjkdejjgsk","腚":"srjjkdejfjsl","腱":"srjjcjjjjfal","腴":"srjjsfjcjjsl","舄":"sfjcjjsrdkkk","舒":"skjjffcjekeg","舜":"skksdesekjnf","舾":"ssrkjkjfcsbj","艇":"ssrkjksjfjal","萱":"jffkdejfcjjj","萼":"jfffcjfcjjjz","落":"jffkkiselfcj","葆":"jffsffcjjfsl","葑":"jffjfjjfijgk","葙":"jffjfskfcjjj","葚":"jffjffjjjskb","葛":"jfffcjjsrskb","葜":"jffjjjfrsjsl","葡":"jffsrjfrjjfk","董":"jffsjfcjjfjj","葩":"jffsfcjjcfju","葫":"jffjffcjsrjj","葬":"jffjseksujsf","葭":"jffcjfjjcjel","葱":"jffsrsskdykk","葳":"jffjsjmsjysk","葵":"jffekssljjsk","葶":"jffkjfcjdejg","葸":"jfffcjfjdykk","葺":"jfffcjjffjjj","蒂":"jffkjksdefrf","蒇":"jffjsfcskysk","蒈":"jffjhsusfcjj","蒉":"jfffcjfjfcsk","蒋":"jffkifsekjgk","蒌":"jffksjfslmsj","蒎":"jffkkissshsl","蛐":"fcjfjkfcjffj","蛑":"fcjfjknksjjf","蛔":"fcjfjkfcfcjj","蛘":"fcjfjkksjjjf","蛙":"fcjfjkjfjjfj","蛛":"fcjfjksjjfsl","蛞":"fcjfjksjffcj","蛟":"fcjfjkkjsksl","蛤":"fcjfjksljfcj","蛩":"jfisokfcjfjk","蛭":"fcjfjkjnkjfj","蛮":"kjffskfcjfjk","蛰":"jgisokfcjfjk","蛱":"fcjfjkjksjsl","蛲":"fcjfjkjysjsu","蛳":"fcjfjkfsjfrf","蛴":"fcjfjkkjslsf","蜒":"fcjfjksfjbal","蜓":"fcjfjksjfjal","街":"ssfjfjjfijjg","裁":"jfjkjshskysk","裂":"jsekfgkjshsl","装":"kifjfjkjshsl","裎":"kefskfcjjjfj","裒":"kjsfjcjjshsl","裕":"kefskskslfcj","裙":"kefskcjjsfcj","裢":"kefskjnjfkal","裣":"kefsksljkksj","裤":"kefskkjsjnjf","裥":"kefskkfrfcjj","覃":"jfcffjfcjjjf","觌":"jfekkjskfcsu","觚":"sesrjjfsshkl","觞":"sesrjjfsjwss","詈":"fcffjkjjjfcj","谟":"kpjfffcjjjsl","谠":"kpfksdefcjsu","谡":"kpfcjfjsksel","谢":"kpsfrjjjsjgk","谣":"kpskkssjjfbf","谤":"kpkjksdekjrs","谥":"kpksjskfcffj","谦":"kpksjcjjffsl","谧":"kpdykskfcffj","貂":"skkstssrsfcj","赋":"fcskjjfjfiyk","赌":"fcskjfjsfcjj","赍":"jfskskdefcsk","赎":"fcskjfekkjsk","赏":"fksdefcjfcsk","赐":"fcskfcjjsrss","赓":"kjscjjslfcsk","赔":"fcskkjksjfcj","赕":"fcskdsskdssl","趁":"jfjfjslslsss","趄":"jfjfjslfcjjj","超":"jfjfjslrsfcj","越":"jfjfjsljhysk","趋":"jfjfjslsecjj","跆":"fcjfjfinkfcj","跋":"fcjfjfijselk","跌":"fcjfjfisjjsl","跎":"fcjfjfikdesu","跏":"fcjfjfirsfcj","跑":"fcjfjfisrcju","跖":"fcjfjfijsfcj","跗":"fcjfjfisfjgk","跚":"fcjfjfisrsrj","跛":"fcjfjfiesfel","跞":"fcjfjfisbgsk","践":"fcjfjfijjysk","辇":"jjskjjsljnjf","辈":"fjjjfjjjjnjf","辉":"fksjshdejnjf","辊":"jnfifcjjjhsu","辋":"jnfifrksjkjb","辍":"jnfiekekekel","辎":"jnfimmmfcjfj","辜":"jffcjkjksjjf","逼":"jfcjfcjfjkal","逾":"sljfrjjfgkal","遁":"ssjffcjjjkal","遂":"ksjstssskkal","遄":"fbfjsfrffkal","遇":"fcjjfrfikkal","遍":"kcjsfrjffkal","遏":"fcjjsrskbkal","遐":"cjfjjcjekkal","遑":"sfcjjjjfjkal","遒":"ksjfcsbjjkal","道":"ksjsfcjjjkal","遗":"fcjfjfcskkal","酡":"jfcsbjjkdesu","酢":"jfcsbjjsjfjj","酣":"jfcsbjjjffjj","酤":"jfcsbjjjffcj","酥":"jfcsbjjsjfsl","釉":"sksjfskfcjfj","释":"sksjfskeljjf","量":"fcjjjfcjjfjj","铸":"sjjjhjjjsjgk","铹":"sjjjhjffders","铺":"sjjjhjfrjjfk","铼":"sjjjhjksjfsl","铽":"sjjjhjdykkyk","链":"sjjjhjnjfkal","铿":"sjjjhffeljfj","销":"sjjjhfksfrjj","锁":"sjjjhfksfcsk","锂":"sjjjhfcjjfjj","锃":"sjjjhfcjjjfj","锄":"sjjjhfcjjirs","锅":"sjjjhfcjfrsk","锆":"sjjjhsjfjfcj","锇":"sjjjhsjgiysk","锈":"sjjjhsjfslws","锉":"sjjjhskskjfj","锊":"sjjjhskksjgk","锋":"sjjjhseljjjf","锌":"sjjjhkjksjjf","锍":"sjjjhkjnksfu","锎":"sjjjhkfrjjsf","锏":"sjjjhkfrfcjj","锐":"sjjjhksfcjsu","锑":"sjjjhkscjzfs","锒":"sjjjhkcjjhsl","锓":"sjjjhcjjdeel","锔":"sjjjhcjsrfcj","锕":"sjjjhwfjfcjg","阑":"kfrjfcksjfsk","阒":"kfrfcjjjjskk","阔":"kfrkkisjffcj","阕":"kfrekssljjsk","隔":"wfjfcjfrksjf","隘":"wfksjskfcffj","隙":"wffskfcjjgsk","雁":"jssfsfkjjjfj","雄":"jsnksfkjjjfj","雅":"jngssfkjjjfj","集":"sfkjjjfjjfsl","雇":"kcjssfkjjjfj","雯":"jdefkkkkkjsl","雳":"jdefkkkkjsrs","靓":"jjfjfrjjfcsu","韩":"jffcjjjfjjrf","颉":"jfjfcjjsfcsk","颊":"jksjskjsfcsk","颌":"skjfcjjsfcsk","颍":"sugeskjsfcsk","颏":"kjnsskjsfcsk","飓":"soskfcjjjjsk","飧":"sekslkcjjhsl","飨":"nnsslkcjjhsk","馇":"sehjfslfcjjj","馈":"sehfcjfjfcsk","馊":"sehsfjcjjfel","馋":"sehsefcjsukk","骗":"czikcjsfrjff","骘":"wffjfjfssczj","骚":"czielkfcjfjk","骛":"ekegssjslczj","鱿":"sefcjfjijsuk","鲁":"sefcjfjjfcjj","鲂":"sefcjfjikjrs","鹁":"jfdeegisrkzj","鹂":"jfrkfrksrkzj","鹃":"fcjfrjjsrkzj","鹄":"sjfjfcjsrkzj","鹅":"sjgiysksrkzj","鹆":"skskfcjsrkzj","鹇":"kfrjfsksrkzj","鹈":"kscjzfssrkzj","黍":"sjfskslgkisk","黑":"fcksjfjjdkkk","黹":"ffksjksfrfsk","鼋":"jjsufcjfcjju","鼎":"fcjjjxjsfjfc","催":"sffbfsfkjjjfj","傺":"sfsekkeljjgsk","傻":"sfsfcskjsksel","像":"sfsefcjstsssl","剽":"jfcffjjjgskfg","剿":"mmmfcjjjfskfg","勤":"jffjfcjjjfirs","叠":"ekekekdefcjjj","嗄":"fcjjsfcjjjsel","嗅":"fcjsfcjjjjslk","嗉":"fcjjjfjnnkgsk","嗌":"fcjksjskfcffj","嗍":"fcjksjbfssrjj","嗑":"fcjjfjnkfcffj","嗒":"fcjjffsljfcj","嗓":"fcjekekekjfsl","嗔":"fcjjffcjjjjsk","嗜":"fcjjfjssufcjj","嗝":"fcjjfcjfrksjf","嗡":"fcjslnkrkirki","嗣":"fcjfrjffrjfcj","嗤":"fcjbffjfcjfjk","嗥":"fcjsfcjjjsljf","嗦":"fcjjfdennkgsk","嗨":"fcjkkisjbrkjk","嗪":"fcjjjjslsjfsk","嗫":"fcjjffjjjekel","嗬":"fcjjffsfjfcjg","嗯":"fcjfcjskjdykk","嗲":"fcjskslseksek","嗳":"fcjskksdejsel","嗵":"fcjekfrjjfkal","嗷":"fcjjjfjrssjsl","嘟":"fcjjfjsfcjjwf","塌":"jfifcjjrkirki","塍":"srjjksjjsljfj","塑":"ksjbfssrjjjfj","塘":"jfikjscjjffcj","塞":"kdejjffjsljfj","塥":"jfijfcjfrksjf","填":"jfijffcjjjjsk","塬":"jfijssfcjjgsk","墓":"jfffcjjjsljfj","媲":"msjsfcskjjhsu","媳":"msjsfcjjjdykk","媵":"srjjksjjslmsj","媸":"msjbffjfcjfjk","媾":"msjjjffjfrjfj","嫁":"msjkdejstsssl","嫉":"msjkjskisjjsl","嫌":"msjksjcjjffsl","嫒":"msjskksdejsel","嫔":"msjkdesfjfjsk","嫫":"msjjfffcjjjsl","寝":"kdekifcjjdeel","寞":"kdejfffcjjjsl","尴":"jsuffsjkfcffj","嵊":"fbfsjffjisusl","嵩":"fbfkjfcjfrfcj","嵴":"fbfkiskslfrjj","幌":"frffcjjfksjsu","幕":"jfffcjjjslfrf","廉":"kjsksjcjjffsl","廒":"kjsjjfjrssjsl","廓":"kjskjfcjegiwf","彀":"jfjdejcjzsvel","徭":"ssfskkssjjfbf","微":"ssffbfjspsjsl","想":"jfskfcjjjdykk","愁":"sjfskdssldykk","愆":"ssfkkijjgdykk","愈":"sljfrjjfgdykk","愍":"cjhjysjsldykk","意":"kjksjfcjjdykk","愚":"fcjjfrfikdykk","感":"jsjfcjyskdykk","愫":"dkfjjfjnnkgsk","慈":"ksjnnknnkdykk","慊":"dkfksjcjjffsl","慎":"dkfjffcjjjjsk","慑":"dkfjffjjjekel","戤":"wsekfcffijysk","戥":"fcjjsjjfijysk","搋":"jgissfjesjuso","搌":"jgicjsjffjhsl","搏":"jgijfcjjfkjgk","搐":"jgikjnnkfcjfj","搛":"jgiksjcjjffsl","搞":"jgikjfcjfrfcj","搠":"jgiksjbfssrjj","搡":"jgiekekekjfsl","搦":"jgicjzkicjzki","搪":"jgikjscjjffcj","搬":"jgissrkjksvel","携":"jgisfkjjjfjws","摁":"jgifcjskjdykk","摄":"jgijffjjjekel","摅":"jgifjesjudykk","摆":"jgifcffjjfjnk","摇":"jgiskkssjjfbf","摈":"jgikdesfjfjsk","摊":"jgieksfkjjjfj","摸":"jgijfffcjjjsl","敫":"sfcjjkjrssjsl","数":"ksjfskmsjsjsl","斟":"jffjjjskbkkjf","新":"kjksjjgskssjf","旒":"kjrssjkjnksfu","暄":"fcjjkdejfcjjj","暇":"fcjjcjfjjcjel","暌":"fcjjekssljjsk","暖":"fcjjskksjjsel","暗":"fcjjkjksjfcjj","椴":"jfsksfjjisvel","椹":"jfskjffjjjskb","椽":"jfsknejstsssl","椿":"jfskjjjslfcjj","楂":"jfskjfslfcjjj","楔":"jfskjjjfrsjsl","楚":"jfskjfskefjsl","楝":"jfskjfcksjfsl","楞":"jfskfcffjkjrs","楠":"jfskjffrksjjf","楣":"jfskcfjsfcjjj","楦":"jfskkdejfcjjj","楫":"jfskfcjjffjjj","楱":"jfskjjjsljjsk","楷":"jfskjhsusfcjj","楸":"jfsksjfskdssl","楹":"jfskwsekfcffj","楼":"jfskksjfslmsj","榀":"jfskfcjfcjfcj","概":"jfskcjjhkjnsu","榄":"jfskffsjkfcsu","榆":"jfsksljfrjjfg","榇":"jfskkjksjjgsk","榈":"jfskkfrfcjfcj","榉":"jfskkksjsljjf","榘":"sjjskjcjbjfsl","槌":"jfsksfcjcjkal","槎":"jfskksjjjsjfj","槐":"jfsksfcjjsunk","歃":"sjfsfjcjjsesl","歆":"kjksjfcjjsesl","歇":"fcjjsrskbsesl","歌":"jfcjfjfcjgsesl","殿":"cjsjffjsksvel","毁":"sfjcjjjfisvel","毂":"jfjdejnfisvel","毹":"skjfrjjfgsjju","氲":"sjjofcjjfcffj","溏":"kkikjscjjffcj","源":"kkijssfcjjgsk","溘":"kkijfjnkfcffj","溜":"kkishkrsfcjfj","溟":"kkidefcjjkjsk","溢":"kkiksjskfcffj","溥":"kkijfcjjfkjgk","溧":"kkijfcffjjfsl","溪":"kkiskksnnkjsl","溯":"kkiksjbfssrjj","溱":"kkijjjslsjfsk","溴":"kkisfcjjjjslk","溶":"kkikdeskslfcj","溷":"kkifcjstssskj","溺":"kkicjzkicjzki","溻":"kkifcjjrkirki","溽":"kkijsjjhsljgk","滂":"kkikjksdekjrs","滇":"kkijffcjjjjsk","滏":"kkisksljjfksj","滓":"kkikdekjksjjf","滔":"kkiskkssfjcjj","滗":"kkisjksjksjju","滚":"kkikjsknkshsl","滟":"kkijjjfsecfju","滠":"kkijffjjjekel","满":"kkijffjfrsksk","滢":"kkijffdejjfjk","滤":"kkifjesjudykk","滥":"kkiffsjkfcffj","滦":"kkikjffskjfsl","滨":"kkikdesfjfjsk","滩":"kkieksfkjjjfj","漓":"kkikjskbffrnk","漠":"kkijfffcjjjsl","漭":"kkijffjslkjsf","煅":"dssksfjjisvel","煊":"dsskkdejfcjjj","煌":"dssksfcjjjjfj","煎":"ksjfrjjfgdkkk","煜":"dsskfcjjkjksj","煞":"secjjsjsldkkk","煤":"dsskjffjjjfsl","煦":"fcjjsrfcjdkkk","照":"fcjjrsfcjdkkk","煨":"dsskfcjfjjhsl","煲":"sffcjjfskdssl","煳":"dsskjffcjsrjj","煸":"dsskkcjsfrjff","煺":"dsskcjjhskkal","牒":"sfjcjffjbjfsl","犏":"sjfikcjsfrjff","献":"jffrksjjfjslk","猷":"ksjfcsbjjjslk","猿":"stsjfjfcjshsl","獒":"jjfjrssjskjslk","瑁":"jjfifcjjfcjjj","瑕":"jjficjfjjcjel","瑗":"jjfiskksjjsel","瑙":"jjfimmmsfcskj","瑚":"jjfijffcjsrjj","瑜":"jjfisljfrjjfg","瑞":"jjfifbfjsfrff","瑟":"jjfjjjfjdyksk","瑰":"jjfisfcjjsunk","甄":"jfcffjjfijhok","畸":"fcjfjjskjfcjg","畹":"fcjfjkdesekru","痰":"kjskidsskdssl","痱":"kjskifjjjfjjj","痴":"kjskisjjskfcj","痹":"kjskifcjfjjsf","痼":"kjskifcjffcjj","痿":"kjskisjfslmsj","瘀":"kjskikjrsslkk","瘁":"kjskikjskskjf","瘃":"kjskijstssksl","瘅":"kjskiksfcjjjf","瘐":"kjskisfjcjjsl","皙":"jfskssjffcjj","盟":"fcjjsrjjfcffj","睚":"fcjjjjsjfjjfj","睛":"fcjjjjjfjfrjj","睡":"fcjjjsjfjffjj","睢":"fcjjjsfkjjjfj","督":"fjjfskelfcjjj","睥":"fcjjjsfcjjsjf","睦":"fcjjjjfjskjfj","睨":"fcjjjsfjcjjsu","睫":"fcjjjjcjjfjsl","睬":"fcjjjskksjfsl","睹":"fcjjjjfjsfcjj","瞄":"fcjjjjfffcjfj","矮":"sjjsksjfslmsj","硼":"jsfcjsrjjsrjj","碇":"jsfcjkdejfjsl","碉":"jsfcjsrjfjfcj","碌":"jsfcjcjjgkisl","碍":"jsfcjfcjjjjgk","碎":"jsfcjkjskskjf","碑":"jsfcjsfcjjsjf","碓":"jsfcjsfkjjjfj","碗":"jsfcjkdesekru","碘":"jsfcjfcjffjsk","碚":"jsfcjkjksjfcj","碛":"jsfcjjjfjfcsk","碜":"jsfcjnkjslsss","碰":"jsfcjksjffksj","禀":"kjfcfcjjjjgsk","禁":"jfskjfsljjgsk","禊":"kefkjjjfrsjsl","福":"kefkjfcjfcjfj","稔":"sjfskslkedykk","稗":"sjfsksfcjjsjf","稚":"sjfsksfkjjjfj","稞":"sjfskfcjjjfsl","稠":"sjfsksrjfjfcj","稣":"sefcjfjisjfsl","窟":"kdeskcjsbffbf","窠":"kdeskfcjjjfsl","窥":"kdeskjjskfcsu","窦":"kdeskjfekkjsk","筠":"sjksjkjfisrki","筢":"sjksjkjgicfju","筮":"sjksjkjfskskj","筱":"sjksjksffsjsl","筲":"sjksjkfksfrjj","筷":"sjksjkdkfcjsl","筹":"sjksjkjjjsjgk","筻":"sjksjkjfcjjsl","签":"sjksjksljkksj","简":"sjksjkkfrfcjj","粮":"ksjfskkcjjhsl","粱":"kkirsdkksjfsl","粲":"fjsekekksjfsl","粳":"ksjfskjfcjjsl","缚":"nnijfcjjfkjgk","缛":"nnijsjjhsljgk","缜":"nnijffcjjjjsk","缝":"nniseljjjfkal","缟":"nnikjfcjfrfcj","缠":"nnikjsfcjjfjj","缡":"nnikjskbffrnk","缢":"nniksjskfcffj","缣":"nniksjcjjffsl","缤":"nnikdesfjfjsk","罨":"fcffjjslfcjju","罩":"fcffjfjfcjjjf","罪":"fcffjfjjjfjjj","置":"fcffjjffcjjjj","署":"fcffjjfjsfcjj","群":"cjjsfcjksjjjf","羧":"ksjjjsnksksel","耢":"jjjfskjffders","聘":"jffjjifcjfjjz","肄":"susjjskcjjjjf","肆":"jfjjjnkcjjjjf","腠":"srjjjjjsljjsk","腥":"srjjfcjjsjjfj","腧":"srjjsljfrjjfg","腩":"srjjjffrksjjf","腭":"srjjfcjfcjjjz","腮":"srjjfcjfjdykk","腰":"srjjjfcffjmsj","腹":"srjjsjfcjjsel","腺":"srjjsfcjjgesl","腻":"srjjjjjfcskyk","腼":"srjjjsfcffjjj","腽":"srjjfcjjfcffj","腾":"srjjksjjslczj","腿":"srjjcjjhskkal","舅":"sfjcjjfcjfjrs","艄":"ssrkjkfksfrjj","艉":"ssrkjkcjssjju","蒗":"jffkkikcjjhsl","蒙":"jffdejjstsssl","蒜":"jffjjgskjjgsk","蒡":"jffkjksdekjrs","蒯":"jffsrjjsrjjfg","蒲":"jffkkijfrjjfk","蒴":"jffksjbfssrjj","蒸":"jffegesljdkkk","蒹":"jffksjcjjffsl","蒺":"jffkjskisjjsl","蒽":"jfffcjskjdykk","蒿":"jffkjfcjfrfcj","蓁":"jffjjjslsjfsk","蓄":"jffkjnnkfcjfj","蓉":"jffkdeskslfcj","蓊":"jffslnkrkirki","蓍":"jffjfjssufcjj","蓐":"jffjsjjhsljgk","蓑":"jffkjfcjjshsl","蓓":"jffsfkjksjfcj","蓖":"jffsfcskjjhsu","蓝":"jffffsjkfcffj","蓟":"jffsefcjfjifg","蓠":"jffkjskbffrnk","蓣":"jffekegjsfcsk","蓥":"jffdesljjfksj","蓦":"jfffcjjjslczj","蓬":"jffseljjjfkal","虞":"fjesjufcjjjsl","蛸":"fcjfjkfksfrjj","蛹":"fcjfjkekfrjjf","蛾":"fcjfjksjgiysk","蜂":"fcjfjkseljjjf","蜃":"jsjjhslfcjfjk","蜇":"jgissjffcjfjk","蜈":"fcjfjkfcjjjsl","蜉":"fcjfjkskksegj","蜊":"fcjfjksjfskfg","蜍":"fcjfjksljjgsk","蜕":"fcjfjkksfcjsu","蜗":"fcjfjkfcjfrsk","蜣":"fcjfjkksjjjsu","衙":"ssfjfcjfcjjjg","裔":"kjshslfrskfcj","裘":"jfkiskkkjshsl","裟":"kkifskskjshsl","裨":"kefsksfcjjsjf","裰":"kefskekekekel","裱":"kefskjjfjshsl","裸":"kefskfcjjjfsl","裼":"kefskfcjjsrss","裾":"kefskcjsjffcj","褂":"kefskjfjjfifk","褚":"kefskjfjsfcjj","觎":"skjfrjjfgfcsu","觜":"fjfisusesrjjf","解":"sesrjjfrssjjf","觥":"sesrjjffksjsu","触":"sesrjjffcjfjk","訾":"fjfisukjjjfcj","詹":"sejsskkjjjfcj","誉":"kksjslkjjjfcj","誊":"ksjjslkjjjfcj","谨":"kpjffjfcjjjfj","谩":"kpfcjjfcffjel","谪":"kpkjksfrjffcj","谫":"kpksjfrjjfgrs","谬":"kpckickislsss","豢":"ksjjsljstsssk","貅":"skkstsssfjfsl","貉":"skkstssselfcj","貊":"skkstssjsfcjj","赖":"jfcjfsksefcsk","趑":"jfjfjslkisesk","趔":"jfjfjsljsekfg","跟":"fcjfjficjjhsl","跣":"fcjfjfisjfjsu","跤":"fcjfjfikjsksl","跨":"fcjfjfijsljjz","跪":"fcjfjfisejsru","跫":"jfisokfcjfjsl","跬":"fcjfjfijfjjfj","路":"fcjfjfiselfcj","跳":"fcjfjfiskiusk","跷":"fcjfjfijysjsu","跸":"fcjfjfijhsujf","跹":"fcjfjfisjfkal","跺":"fcjfjfisvjfsl","跻":"fcjfjfikjslsf","躲":"sfrjjjssvjfsl","辏":"jnfijjjsljjsk","辐":"jnfijfcjfcjfj","辑":"jnfifcjjffjjj","输":"jnfisljfrjjfg","辔":"nnijnjfnnifcj","辞":"sjffcjkjksjjf","辟":"cjsfcjkjksjjf","遘":"jjffjfrfjjkal","遛":"shkrsfcjfjkal","遢":"fcjjrkirkikal","遣":"fcjfjfcjcjkal","遥":"skkssjjfbfkal","遨":"jjfjrssjskkal","鄙":"fcjjffcfcjjwf","鄞":"jffjfcjjjfiwf","鄢":"jfjfjjzdkkkwf","鄣":"kjksjfcjjjfwf","酩":"jfcsbjjsekfcj","酪":"jfcsbjjselfcj","酬":"jfcsbjjdskfkf","酮":"jfcsbjjfrjfcj","酯":"jfcsbjjsufcjj","酰":"jfcsbjjsjfjsu","酱":"kifsekjfcsbjj","鉴":"ffsjksljjfksj","锖":"sjjjhjjfjfrjj","锗":"sjjjhjfjsfcjj","锘":"sjjjhjffjsfcj","错":"sjjjhjffjfcjj","锚":"sjjjhjfffcjfj","锛":"sjjjhjsljfjsf","锝":"sjjjhfcjjjjgk","锞":"sjjjhfcjjjfsl","锟":"sjjjhfcjjjhsu","锡":"sjjjhfcjjsrss","锢":"sjjjhfcjffcjj","锣":"sjjjhfcffjsek","锤":"sjjjhsjfjffjj","锥":"sjjjhsfkjjjfj","锦":"sjjjhsfcjjfrf","锨":"sjjjhssjfsesl","锩":"sjjjhksjjslru","锪":"sjjjhsrssdykk","锫":"sjjjhkjksjfcj","锬":"sjjjhdsskdssl","锭":"sjjjhkdejfjsl","键":"sjjjhcjjjjfal","锯":"sjjjhcjsjffcj","锰":"sjjjhegjfcffj","锱":"sjjjhmmmfcjfj","阖":"kfrjfjnkfcffj","阗":"kfrjffcjjjjsk","阙":"kfrksjbfssesk","障":"wfkjksjfcjjjf","雉":"sjjsksfkjjjfj","雍":"kjnnssfkjjjfj","雎":"fcjjisfkjjjfj","雏":"secjjsfkjjjfj","零":"jdefkkkkslkek","雷":"jdefkkkkfcjfj","雹":"jdefkkkksrcju","雾":"jdefkkkkselrs","靖":"kjksijjfjfrjj","靳":"jffjfcjjfssjf","靴":"jffjfcjjfsfsu","靶":"jffjfcjjfcfju","韪":"fcjjjfjsljjrf","韫":"jjrffcjjfcffj","韵":"kjksjfcjjsrki","颐":"jffcjfbjsfcsk","频":"fjfjfssjsfcsk","颓":"sjfskspjsfcsk","颔":"skkefcjjsfcsk","颖":"susjfskjsfcsk","飕":"sosksfjcjjfek","馍":"sehjfffcjjjsl","馏":"sehshkrsfcjfj","馐":"sehksjjjscfjj","骜":"jjfjrssjslczj","骝":"czishkrsfcjfj","骞":"kdejjffjslczj","骟":"czikcjsrkirki","骰":"fccdefrjjsvel","骱":"fccdefrjjslsf","髡":"jfjjjnksssjsu","魁":"sfcjjsunkkkjf","魂":"jjnksfcjjsunk","鲅":"sefcjfjijselk","鲆":"sefcjfjijksjf","鲇":"sefcjfjifjfcj","鲈":"sefcjfjifjcjs","鲋":"sefcjfjisfjgk","鲍":"sefcjfjisrcju","鲎":"kksdesefcjfjj","鲐":"sefcjfjinkfcj","鹉":"jjfjfiyksrkzj","鹊":"jffjfcjjsrkzj","鹋":"jfffcjfjsrkzj","鹌":"jskfcjjhsrkzj","鹎":"sfcjjsjfsrkzj","鹏":"srjjsrjjsrkzj","鹑":"kjfcjegisrkzj","麂":"kjscffjjhsuso","鼓":"jfjfcjksijfel","鼠":"sfjcjjhkkhkky","龃":"fjfjskbffcjjj","龄":"fjfjskbfslkek","龅":"fjfjskbfsrcju","龆":"fjfjskbfrsfcj","僖":"sfjfjfcjksjfcj","僚":"sfjslksfcjjgsk","僦":"sfkjfcjgskjsuk","僧":"sfksfcfksjfcjj","僬":"sfsfkjjjfjdkkk","僭":"sfjnshjnsufcjj","僮":"sfkjksjfcjjfjj","僳":"sfjfcffjksjfsl","儆":"sfjffsrfcjsjsl","兢":"jffcjshjffcjsu","凳":"ekssljfcjksjso","劁":"sfkjjjfjdkkkfg","劂":"jsksjbfsseskfg","厮":"jsjffjjjskssjf","嗽":"fcjjfcjfsksesl","嗾":"fcjkjrssjsjjsl","嘀":"fcjkjksfrjffcj","嘁":"fcjjsfjjgskysk","嘈":"fcjjfcjffjfcjj","嘉":"jfjfcjksjrsfcj","嘌":"fcjjfcffjjjgsk","嘎":"fcjjsfcjjjjysk","嘏":"jffcjcjfjjcjel","嘘":"fcjfjesjuffksj","嘛":"fcjkjsjfskjfsl","嘞":"fcjjffjfcjjfrs","嘣":"fcjfbfsrjjsrjj","嘤":"fcjfcskfcskmsj","嘧":"fcjkdedykskfbf","塾":"kjfcjegisokjfj","墁":"jfifcjjfcffjel","境":"jfikjksjfcjjsu","墅":"fcjjfjiekegjfj","墉":"jfikjscjjfrjjf","墒":"jfikjksfrskfcj","墙":"jfijfksjfcfcjj","墚":"jfikkirsdkjfsl","夤":"sekkdejfcjfjsk","夥":"fcjjjfskseksek","嫖":"msjjfcffjjjgsk","嫘":"msjfcjfjnnkgsk","嫜":"msjkjksjfcjjjf","嫠":"jjfsksjsljsmsj","嫡":"msjkjksfrjffcj","嫣":"msjjfjfjjzdkkk","嫦":"msjfksdefcjfrf","嫩":"msjjfcjfsksjsl","嫱":"msjjfksjfcfcjj","孵":"shksrfkskksegj","察":"kdesekkeljjgsk","寡":"kdejsfcjjjslrs","寤":"kdebfjsjfcjfcj","寥":"kdeckickislsss","寨":"kdejjffjsljgsk","屣":"cjsssffjfjfjsl","嶂":"fbfkjksjfcjjjf","幔":"frffcjjfcffjel","幛":"frfkjksjfcjjjf","廑":"kjsjffjfcjjjfj","廖":"kjsckickislsss","弊":"ksfrfsksjsljsf","彰":"kjksjfcjjjfsss","愿":"jssfcjjgskdykk","慕":"jfffcjjjslgdkk","慝":"jjffjsfcjbdykk","慢":"dkffcjjfcffjel","慵":"dkfkjscjjfrjjf","慷":"dkfkjscjjgkisl","截":"jfjsfkjjjfjysk","戬":"jffksjfcjjjysk","搴":"kdejjffjslsjjg","搿":"sjjsskjfcjsjjg","摔":"jgikjnnkkiskjf","摘":"jgikjksfrjffcj","摞":"jgifcjfjnnkgsk","摧":"jgifbfsfkjjjfj","摭":"jgikjsjffjdkkk","摹":"jfffcjjjslsjjg","摺":"jgickickisfcjj","撂":"jgifcjfjselfcj","撄":"jgifcskfcskmsj","撇":"jgiksfrfsksjsl","撖":"jgiejffjjisjsl","敲":"kjfcjfrfcjfjel","斡":"jffcjjjfslkkjf","旖":"kjrssjjskjfcjg","旗":"kjrssjjffjjjsk","暝":"fcjjdefcjjkjsk","暧":"fcjjskksdejsel","暨":"cjjhkjnsufcjjj","榍":"jfskcjsfksfrjj","榕":"jfskkdeskslfcj","榛":"jfskjjjslsjfsk","榜":"jfskkjksdekjrs","榧":"jfskjfjjjfjjjb","榨":"jfskkdesksjfjj","榫":"jfsksfkjjjfjjf","榭":"jfsksfrjjjsjgk","榱":"jfskkjfcjjshsl","榴":"jfskshkrsfcjfj","榷":"jfskdesfkjjjfj","榻":"jfskfcjjrkirki","槁":"jfskkjfcjfrfcj","槊":"ksjbfssrjjjfsl","槔":"jfsksfcjjjsljf","槛":"jfskffsjkfcffj","槟":"jfskkdesfjfjsk","槠":"jfskkpjfjsfcjj","槭":"jfskjsfjjgskysk","模":"jfskjfffcjjjsl","歉":"ksjcjjffsksesl","殡":"jsekkdesfjfjsk","毓":"sjbrkjkkjnksfu","滴":"kkikjksfrjffcj","滹":"kkifjesjusksjg","漂":"kkijfcffjjjgsk","漆":"kkijfskslgkisk","漉":"kkikjscffjjhsu","漏":"kkicjsjfrfkkkk","演":"kkikdejfcjfjsk","漕":"kkijfcjffjfcjj","漤":"kkijfskjfslmsj","漩":"kkikjrssjefjsl","漪":"kkistsjskjfcjg","漫":"kkifcjjfcffjel","漯":"kkifcjfjnnkgsk","漱":"kkijfcjfsksesl","漳":"kkikjksjfcjjjf","漶":"kkifcjfcjfdykk","漾":"kkiksjjfjkresl","潆":"kkijffdennkgsk","潇":"kkijffcjjfsfsk","潋":"kkiskjkksisjsl","潍":"kkinnisfkjjjfj","潢":"kkijffjfcjfjsk","潴":"kkistsjfjsfcjj","澉":"kkiejffjjisjsl","煽":"dsskkcjsrkirki","熄":"dssksfcjjjdykk","熊":"nkfrjjsusudkkk","熏":"sjfcksjfjjdkkk","熔":"dsskkdeskslfcj","熘":"dsskshkrsfcjfj","熙":"jffcjfbcjudkkk","熬":"jjfjrssjsldkkk","犒":"sjfikjfcjfrfcj","獍":"stskjksjfcjjsu","獐":"stskjksjfcjjjf","瑭":"jjfikjscjjffcj","瑶":"jjfiskkssjjfbf","瑷":"jjfiskksdejsel","璃":"jjfikjskbffrnk","甍":"jfffcffjdejhok","疑":"susjjskekefjsl","瘊":"kjskisfcjsjjsl","瘌":"kjskijfcjfskfg","瘕":"kjskicjfjjcjel","瘗":"kjskijksjsljfj","瘘":"kjskiksjfslmsj","瘙":"kjskielkfcjfjk","瘟":"kjskifcjjfcffj","瘥":"kjskiksjjjsjfj","瘦":"kjskisfjcjjfel","瘩":"kjskijffsljfcj","睽":"fcjjjekssljjsk","睾":"sfcffjjfjksjjf","睿":"fjdejskslfcjjj","瞀":"ekegssjslfcjjj","瞅":"fcjjjsjfskdssl","瞍":"fcjjjsfjcjjfel","碟":"jsfcjjffjbjfsl","碡":"jsfcjjjfjbrkjk","碣":"jsfcjfcjjsrskb","碥":"jsfcjkcjsfrjff","碧":"jjfisfcjjjsfcj","碱":"jsfcjjsjfcjysk","碲":"jsfcjkjksdefrf","碳":"jsfcjfbfjsdssl","碴":"jsfcjjfslfcjjj","碹":"jsfcjkdejfcjjj","磁":"jsfcjksjnnknnk","磋":"jsfcjksjjjsjfj","禚":"kefkksjjfjdkkk","稳":"sjfsksecjjdykk","窨":"kdeskkjksjfcjj","窬":"kdesksljfrjjfg","窭":"kdeskksjfslmsj","竭":"kjksifcjjsrskb","端":"kjksifbfjsfrff","箅":"sjksjkfcjfjjsf","箍":"sjksjkjgijfrfb","箐":"sjksjkjjfjfrjj","箔":"sjksjkkkisfcjj","箕":"sjksjkjffjjjsk","算":"sjksjkfcjjjjsf","箜":"sjksjkkdeskjfj","箝":"sjksjkjgijffjj","管":"sjksjkkdefcjcj","箢":"sjksjkkdesekru","箦":"sjksjkjjfjfcsk","箧":"sjksjkjjksjskb","箨":"sjksjkjgieljjf","箩":"sjksjkfcffjsek","箪":"sjksjkksfcjjjf","箫":"sjksjkcjjfsfsk","箬":"sjksjkjffjsfcj","箸":"sjksjkjfjsfcjj","粹":"ksjfskkjskskjf","粼":"ksjfsksekjnfmm","粽":"ksjfskkdejjgsk","精":"ksjfskjjfjfrjj","糁":"ksjfsknkjslsss","綦":"jffjjjslnnkgsk","綮":"kcjssjslnnkgsk","缥":"nnijfcffjjjgsk","缦":"nnifcjjfcffjel","缧":"nnifcjfjnnkgsk","缨":"nnifcskfcskmsj","缩":"nnikdesfjsfcjj","缪":"nnickickislsss","缫":"nnimmmfcjjjfsl","罂":"fcskfcsksjjfbf","罱":"fcffjjffrksjjf","罴":"fcffjjfjnkdkkk","翟":"ckickisfkjjjfj","翠":"ckickikjskskjf","翡":"fjjjfjjjrkirki","翥":"jfjsfcjjrkirki","耥":"jjjfskfksfrfcj","聚":"jffjjieksfsssl","肇":"kcjssjslcjjjjf","腐":"kjssfjgkfrsksk","膀":"srjjkjksdekjrs","膂":"kjrssjshslfrjj","膈":"srjjjfcjfrksjf","膊":"srjjjfcjjfkjgk","膏":"kjfcjdefcjfrjj","膑":"srjjkdesfjfjsk","膜":"srjjjfffcjjjsl","臧":"jsbjsjfcjfbysk","舆":"sfjjjnjfcjjjsk","舔":"sjffcjjjslgdkk","舞":"sjjffffjsekjnf","艋":"ssrkjkegjfcffj","蓰":"jffssffjfjfjsl","蓼":"jffckickislsss","蓿":"jffkdesfjsfcjj","蔌":"jffjfcjfsksesl","蔑":"jfffcffjjskysk","蔓":"jfffcjjfcffjel","蔗":"jffkjsjffjdkkk","蔚":"jffcjsjjgskjgk","蔟":"jffkjrssjsjjsl","蔡":"jffsekkeljjgsk","蔫":"jffjfjfjjzdkkk","蔷":"jffjfksjfcfcjj","蔸":"jffsfcjjshcjsu","蔹":"jffsljkksisjsl","蔺":"jffkfrsfkjjjfj","蔻":"jffkdejjsufjek","蔼":"jffkpfcjjsrskb","蔽":"jffksfrfsksjsl","蕖":"jffkkijcjbjfsl","蜀":"fcffjsrfcjfjk","蜘":"fcjfjksjjskfcj","蜚":"fjjjfjjjfcjfjk","蜜":"kdedykskfcjfjk","蜞":"fcjfjkjffjjjsk","蜡":"fcjfjkjffjfcjj","蜢":"fcjfjkegjfcffj","蜥":"fcjfjkjfskssjf","蜩":"fcjfjksrjfjfcj","蜮":"fcjfjkjfcjiysk","蜱":"fcjfjksfcjjsjf","蜴":"fcjfjkfcjjsrss","蜷":"fcjfjkksjjslru","蜻":"fcjfjkjjfjfrjj","蜾":"fcjfjkfcjjjfsl","蜿":"fcjfjkkdesekru","蝇":"fcjfjkfcjfcjju","蝈":"fcjfjkfcjjfjkj","蝉":"fcjfjkksfcjjjf","螂":"fcjfjkkcjjhkwf","裳":"fksdefcjkjshsl","裴":"fjjjfjjjkjshsl","裹":"kjfcjjjfskshsl","褊":"kefskkcjsfrjff","褐":"kefskfcjjsrskb","褓":"kefsksffcjjfsl","褙":"kefskfjisufrjj","褛":"kefskksjfslmsj","褡":"kefskjffsljfcj","褪":"kefskcjjhskkal","觏":"jjffjfrfjjfcsu","觫":"sesrjjfjfcjfsl","誓":"jgissjfkjjjfcj","谭":"kpjfcffjfcjjjf","谮":"kpjnshjnsufcjj","谯":"kpsfkjjjfjdkkk","谰":"kpkfrjfcksjfsk","谱":"kpksjffksjfcjj","谲":"kpekegsfrskfcj","豪":"kjfcjdejstsssl","貌":"skkstsssfcjjsu","赘":"jjfjrssjslfcsk","赙":"fcskjfcjjfkjgk","赚":"fcskksjcjjffsl","赛":"kdejjffjslfcsk","赫":"jfjsgskjfjsgsk","跽":"fcjfjficjudykk","踅":"jgissjffcjfjsl","踉":"fcjfjfikcjjhsl","踊":"fcjfjfiekfrjjf","踌":"fcjfjfijjjsjgk","辕":"jnfijfjfcjshsl","辖":"jnfikdejjjffcj","辗":"jnficjsjffjhsl","辣":"kjksjjsjfcjfsl","遭":"jfcjffjfcjjkal","遮":"kjsjffjdkkkkal","鄯":"ksjjjfksjfcjwf","鄱":"sksjfskfcjfjwf","酲":"jfcsbjjfcjjjfj","酴":"jfcsbjjsljjgsk","酵":"jfcsbjjjfjsegj","酶":"jfcsbjjsjbrkjk","酷":"jfcsbjjsjfjfcj","酸":"jfcsbjjnksksel","酹":"jfcsbjjskksjgk","酽":"jfcsbjjjffksjs","酾":"jfcsbjjjfrkfrk","酿":"jfcsbjjkcjjhsl","銎":"jfisoksljjfksj","銮":"kjffsksljjfksj","锲":"sjjjhjjjfrsjsl","锴":"sjjjhjhsusfcjj","锵":"sjjjhkifsekjgk","锶":"sjjjhfcjfjdykk","锷":"sjjjhfcjfcjjjz","锸":"sjjjhsjfsfjcjj","锹":"sjjjhsjfskdssl","锺":"sjjjhsjfcjjjfj","锻":"sjjjhsfjjisvel","锼":"sjjjhsfjcjjfel","锾":"sjjjhskksjjsel","锿":"sjjjhkjfcjshsl","镀":"sjjjhkjsjffjel","镁":"sjjjhksjjfjjsl","镂":"sjjjhksjfslmsj","镄":"sjjjhcjzsffcsk","镅":"sjjjhcfjsfcjjj","阚":"kfrejffjjisjsk","隧":"wfksjstssskkal","雌":"fjfijhsfkjjjfj","雒":"sekfcjsfkjjjfj","需":"jdefkkkkjsfrff","霁":"jdefkkkkkjslsf","霆":"jdefkkkksjfjal","静":"jjfjfrjjsecjjg","靼":"jffjfcjjffcjjj","鞅":"jffjfcjjffcjsl","韬":"jjrfskkssfjcjj","韶":"kjksjfcjjrsfcj","颗":"fcjjjfskjsfcsk","馑":"sehjffjfcjjjfj","馒":"sehfcjjfcffjel","骠":"czijfcffjjjgsk","骡":"czifcjfjnnkgsk","骢":"czisfcsekjdykk","骶":"fccdefrjjshjyk","骷":"fccdefrjjjffcj","髦":"jfjjjnkssssjju","魃":"sfcjjsunkjsekk","魄":"sfcjjsfcjjsunk","魅":"sfcjjsunkjjfsl","鲑":"sefcjfjijfjjfj","鲒":"sefcjfjijfjfcj","鲔":"sefcjfjijsfrjj","鲕":"sefcjfjijsfrff","鲚":"sefcjfjikjslsf","鲛":"sefcjfjikjsksl","鲜":"sefcjfjiksjjjf","鲞":"ksjjslsefcjfjj","鲟":"sefcjfjicjjjgk","鹕":"jffcjsrjjsrkzj","鹗":"fcjfcjjjzsrkzj","鹘":"fccdefrjjsrkzj","鹚":"ksjnnknnksrkzj","鹛":"cfjsfcjjjsrkzj","鹜":"ekegssjslsrkzj","麽":"kjsjfskjfslsnk","鼐":"wsfcjjjxjsfjfc","鼻":"sfcjjjfcjfjjsf","龇":"fjfjskbffjfisu","龈":"fjfjskbfcjjhsl","僵":"sfjfcjfjjfcjfjj","僻":"sfcjsfcjkjksjjf","儇":"sffcffjjfcjshsl","儋":"sfsejsskkjjjfcj","凛":"kikjfcfcjjjjgsk","劈":"cjsfcjkjksjjfrs","劐":"jffsfkjjjfjekfg","勰":"rsrsrsfcjfjdykk","嘬":"fcjfcjjjffjjiel","嘭":"fcjjfjfcjksisss","嘱":"fcjcjssfcjfrfik","嘲":"fcjjffcjjjfsrjj","嘶":"fcjjffjjjskssjf","嘹":"fcjjslksfcjjgsk","嘻":"fcjjfjfcjksjfcj","嘿":"fcjfcksjfjjdkkk","噌":"fcjksfcfksjfcjj","噍":"fcjsfkjjjfjdkkk","噎":"fcjjfjdejfcjksj","噔":"fcjekssljfcjksj","噗":"fcjffksjksjjjsl","噘":"fcjjsksjbfssesl","噙":"fcjslkjskbffrnk","噜":"fcjsefcjfjjfcjj","噢":"fcjsfcksjfskjsl","噶":"fcjjfffcjjsrskb","墀":"jficjsfkisksjjf","增":"jfiksfcfksjfcjj","墟":"jfifjesjuffksj","墨":"fcksjfjjdkkkjfj","墩":"jfikjfcjegisjsl","嬉":"msjjfjfcjksjfcj","寮":"kdejslksfcjjgsk","履":"cjsssfsjfcjjsel","屦":"cjsssfksjfslmsj","嶙":"fbfksjfslsekjnf","嶝":"fbfekssljfcjksj","幞":"frfffksjksjjjsl","幡":"frfsksjfslfcjfj","幢":"frfkjksjfcjjfjj","廛":"kjsfcjjfjjskjfj","影":"fcjjkjfcjgsksss","徵":"ssffbfjjjfjsjsl","德":"ssfjsfcffjjdykk","慧":"jjjfjjjfcjjdykk","慰":"cjsjjgskjgkdykk","憋":"ksfrfsksjsldykk","憎":"dkfksfcfksjfcjj","憔":"dkfsfkjjjfjdkkk","憧":"dkfkjksjfcjjfjj","憨":"ejffjjisjsldykk","憬":"dkffcjjkjfcjgsk","懂":"dkfjffsjfcjjfjj","戮":"ckickisksssjysk","摩":"kjsjfskjfslsjjg","撅":"jgijsksjbjssesl","撑":"jgifksdefcjsjjg","撒":"jgijffjfrjjsjsl","撕":"jgijffjjjskssjf","撙":"jgiksjfcsbjjjgk","撞":"jgikjksjfcjjfjj","撤":"jgikjnkfrjjsjsl","撩":"jgijslksfcjjgsk","撬":"jgisjjusjjhsjju","播":"jgisksjfslfcjfj","撮":"jgifcjjjffjjiel","撰":"jgicjucjujffjsk","撵":"jgijjskjjsljnjf","撷":"jgijfjfcjjsfcsk","撸":"jgisefcjfjjfcjj","撺":"jgikdeskfcjfcjf","擒":"jgislkjskbffrnk","敷":"jfcjjfkkjrssjsl","暮":"jfffcjjjslfcjj","暴":"fcjjjffjslgkisk","暹":"fcjjsfkjjjfjkal","槲":"jfsksesrjjfkkjf","槽":"jfskjfcjffjfcjj","槿":"jfskjffjfcjjjfj","樊":"jfskskskjfskjsl","樗":"jfskjdefkkkkjjz","樘":"jfskfksdefcjjfj","樟":"jfskkjksjfcjjjf","横":"jfskjffjfcjfjsk","樯":"jfskjfksjfcfcjj","樱":"jfskfcskfcskmsj","橄":"jfskejffjjisjsl","橡":"jfsksefcjstsssl","橥":"stsjfjsfcjjjfsl","毅":"kjksjstsssksvel","滕":"srjjksjjslgkisk","潘":"kkisksjfslfcjfj","潜":"kkijjskjjslfcjj","潦":"kkijslksfcjjgsk","潭":"kkijfcffjfcjjjf","潮":"kkijffcjjjfsrjj","潲":"kkisjfskfksfrjj","潸":"kkijfskjfslfrjj","潺":"kkicjsegjegiegj","潼":"kkikjksjfcjjfjj","澄":"kkiekssljfcjksj","澈":"kkikjnkfrjjsjsl","澌":"kkijffjjjskssjf","澍":"kkijfjfcjksijgk","澎":"kkijfjfcjksisss","澜":"kkikfrjfcksjfsk","澳":"kkisfcksjfskjsl","熟":"kjfcjegisokdkkk","熠":"dsskckickisfcjj","熨":"cjsjjgskjgkdssl","熳":"dsskfcjjfcffjel","熵":"dsskkjksfrskfcj","牖":"sfjckcjsjfrjjfk","獗":"stsjsksjbfssesl","獠":"stsjslksfcjjgsk","瑾":"jjfijffjfcjjjfj","璀":"jjfifbfsfkjjjfj","璁":"jjfisfcsekjdykk","璇":"jjfikjrssjefjsl","璋":"jjfikjksjfcjjjf","璎":"jjfifcskfcskmsj","璜":"jjfijffjfcjfjsk","畿":"nnknnkjfcjfjysk","瘛":"kjskijjjfrsdykk","瘠":"kjskikiskslfrjj","瘢":"kjskissrkjksvel","瘤":"kjskishkrsfcjfj","瘪":"kjskisfcjjjslsu","瘫":"kjskieksfkjjjfj","瘼":"kjskijfffcjjjsl","瞌":"fcjjjjfjnkfcffj","瞎":"fcjjjkdejjjffcj","瞑":"fcjjjdefcjjkjsk","瞒":"fcjjjjffjfrsksk","瞢":"jfffcffjdefcjjj","碾":"jsfcjcjsjffjhsl","磅":"jsfcjkjksdekjrs","磉":"jsfcjekekekjfsl","磊":"jsfcjjsfcjjsfcj","磐":"ssrkjksveljsfcj","磔":"jsfcjsekjnfjfsl","磕":"jsfcjjfjnkfcffj","磙":"jsfcjkjsknkshsl","稷":"sjfskfcjfjsksel","稹":"sjfskjffcjjjjsk","稻":"sjfskskkssfjcjj","稼":"sjfskkdejstsssl","稽":"sjfskjsuksufcjj","稿":"sjfskkjfcjfrfcj","窳":"kdesksshkksshkl","箭":"sjksjkksjfrjjfg","箱":"sjksjkjfskfcjjj","箴":"sjksjkjsjfcjysk","篁":"sjksjksfcjjjjfj","篆":"sjksjknejstsssl","篇":"sjksjkkcjsfrjff","篌":"sjksjksfcjsjjsl","篑":"sjksjkfcjfjfcsk","篓":"sjksjkksjfslmsj","糅":"ksjfskekegsjfsl","糇":"ksjfsksfcjsjjsl","糈":"ksjfskefjslfrjj","糊":"ksjfskjffcjsrjj","糌":"ksjfskselfkfcjj","糍":"ksjfskksjnnknnk","缬":"nnijfjfcjjsfcsk","缭":"nnijslksfcjjgsk","缮":"nniksjjjfksjfcj","缯":"nniksfcfksjfcjj","羯":"ksjjjsfcjjsrskb","羰":"ksjjjsfbfjsdssl","翦":"ksjfrjjfgrkirki","翩":"kcjsfrjffrkirki","耦":"jjjfskfcjjfrfik","耧":"jjjfskksjfslmsj","聩":"jffjjifcjfjfcsk","聪":"jffjjiksfcjdykk","膘":"srjjjfcffjjjgsk","膛":"srjjfksdefcjjfj","膝":"srjjjfskslgkidk","膣":"srjjkdeskjnkjfj","艏":"ssrkjkksjsfcjjj","艘":"ssrkjksfjcjjfel","蔬":"jffefjfikjnksfu","蕃":"jffsksjfslfcjfj","蕈":"jffjfcffjfcjjjf","蕉":"jffsfkjjjfjdkkk","蕊":"jffdykkdykkdykk","蕙":"jffjfcjjfjkdykk","蕞":"jfffcjjjffjjiel","蕤":"jffjstssslsjjfj","蕨":"jffjsksjbfssesl","蕲":"jffksfcjjjfssjf","蕴":"jffnnifcjjfcffj","蕺":"jfffcjjffjjiysk","虢":"skksjgkfjesjuso","蝌":"fcjfjksjfskkkjf","蝎":"fcjfjkfcjjsrskb","蝓":"fcjfjksljfrjjfg","蝗":"fcjfjksfcjjjjfj","蝙":"fcjfjkkcjsfrjff","蝠":"fcjfjkjfcjfcjfj","蝣":"fcjfjkkjrssjegj","蝤":"fcjfjkksjfcsbjj","蝥":"ekegssjslfcjfjk","蝮":"fcjfjksjfcjjsel","蝰":"fcjfjkjsljfjjfj","蝴":"fcjfjkjffcjsrjj","蝶":"fcjfjkjffjbjfsl","蝻":"fcjfjkjffrksjjf","蝼":"fcjfjkksjfslmsj","蝽":"fcjfjkjjjslfcjj","蝾":"fcjfjkjffdejfsl","螋":"fcjfjksfjcjjfel","褒":"kjsffcjjfskshsl","褥":"kefskjsjjhsljgk","褫":"kefskssfjesjuso","褴":"kefskffsjkfcffj","觐":"jffjfcjjjfifcsu","觑":"fjesjuffksifcsu","觯":"sesrjjfksfcjjjf","谳":"kpjffrksjjfjslk","谴":"kpfcjfjfcjcjkal","谵":"kpsejsskkjjjfcj","豌":"jfcjksikdesekru","豫":"ekegsefcjstsssl","赜":"jffcjfbjjfjfcsk","赭":"jfjsgskjfjsfcjj","趟":"jfjfjslfksfrfcj","趣":"jfjfjsljffjjiek","踏":"fcjfjfigeslfcjj","踔":"fcjfjfifjfcjjjf","踝":"fcjfjfifcjjjfsl","踞":"fcjfjficjsjffcj","踟":"fcjfjfisjjskfcj","踢":"fcjfjfifcjjsrss","踣":"fcjfjfikjksjfcj","踩":"fcjfjfiskksjfsl","踪":"fcjfjfikdejjgsk","踬":"fcjfjfissjffcsk","踮":"fcjfjfikjsfjfcj","踯":"fcjfjfiksjjskwf","踺":"fcjfjficjjjjfal","躺":"sfrjjjsfksfrfcj","辘":"jnfikjscffjjhsu","遴":"ksjfsksekjnfkal","遵":"ksjfcsbjjjgkkal","醅":"jfcsbjjkjksjfcj","醇":"jfcsbjjkjfcjegj","醉":"jfcsbjjkjskskjf","醋":"jfcsbjjjffjfcjj","醌":"jfcsbjjfcjjjhsu","鋈":"kkisjsksljjfksj","镆":"sjjjhjfffcjjjsl","镇":"sjjjhjffcjjjjsk","镉":"sjjjhjfcjfrksjf","镊":"sjjjhjffjjjekel","镌":"sjjjhsfkjjjfjws","镍":"sjjjhsfcjjjjfsl","镎":"sjjjhsljfcjsjjg","镏":"sjjjhshkrsfcjfj","镐":"sjjjhkjfcjfrfcj","镑":"sjjjhkjksdekjrs","镒":"sjjjhksjskfcffj","镓":"sjjjhkdejstsssl","镔":"sjjjhkdesfjfjsk","霄":"jdefkkkkfksfrjj","震":"jdefkkkkjsjjhsl","霈":"jdefkkkkkkijfrf","霉":"jdefkkkksjbrkjk","靠":"sjfjfcjfjjjfjjj","靥":"jsjslkjsfcffjjj","鞋":"jffjfcjjfjfjjfj","鞍":"jffjfcjjfkdemsj","鞑":"jffjfcjjfjskkal","鞒":"jffjfcjjfsjslsf","题":"fcjjjfjsljsfcsk","颚":"fcjfcjjjzjsfcsk","颛":"fbfjsfrffjsfcsk","颜":"kjksjssssjsfcsk","额":"kdesekfcjjsfcsk","飘":"jfcffjjjgsksosk","餍":"jsjskkslkcjjhsk","馓":"sehjffjfrjjsjsl","馔":"sehcjhcjujffjsk","骣":"czicjsegjegiegj","骸":"fccdefrjjkjnssk","骺":"fccdefrjjssjfcj","骼":"fccdefrjjselfcj","髫":"jfjjjnksssrsfcj","髯":"jfjjjnksssfrfjj","魇":"jsjslksfcjjsunk","鲠":"sefcjfjijfcjjsl","鲡":"sefcjfjijfrkfrk","鲢":"sefcjfjijnjfkal","鲣":"sefcjfjiffeljfj","鲤":"sefcjfjifcjjfjj","鲥":"sefcjfjifcjjjgk","鲦":"sefcjfjiseljgsk","鲧":"sefcjfjisnnkgsk","鲨":"kkifskssefcjfjj","鲩":"sefcjfjikdejjsu","鲫":"sefcjfjicjjhkrf","鹞":"skkssjjfbfsrkzj","鹣":"ksjcjjffsksrkzj","鹤":"desfkjjjfjsrkzj","麾":"kjsjfskjfslsjju","黎":"sjfsksrsslgkisk","齑":"kjslsffjjjfjjjj","龉":"fjfjskbfjfcjfcj","龊":"fjfjskbffcjfjsl","儒":"sfjdefkkkkjsfrff","冀":"fjisufcjfjjffjsk","凝":"kisusjjskekefjsl","劓":"sfcjjjfcjfjjsffg","嘴":"fcjfjfisusesrjjf","噤":"fcjjfskjfsljjgsk","器":"fcjfcjjslkfcjfcj","噩":"jffcjfcjjfcjfcjj","噪":"fcjfcjfcjfcjjfsl","噫":"fcjkjksjfcjjdykk","噬":"fcjsjksjkjfskskj","噱":"fcjfjesjujstsssl","噻":"fcjkdejjffjsljfj","噼":"fcjcjsfcjkjksjjf","嚆":"fcjjffkjfcjfrfcj","圜":"fcfcffjjfcjshskj","墼":"jfcjjjfbfsveljfj","壁":"cjsfcjkjksjjfjfj","壅":"kjnnssfkjjjfjjfj","嬖":"cjsfcjkjksjjfmsj","嬗":"msjkjfcfcjjfcjjj","嬴":"kjbfcjsrjjmsjsok","寰":"kdefcffjjfcjshsl","廨":"kjssesrjjfrssjjf","廪":"kjskjfcfcjjjjgsk","徼":"ssfsfcjjkjrssjsl","憝":"kjfcjegisjsldykk","憩":"sjffcjsfcjjjdykk","憷":"dkfjfskjfskefjsl","憾":"dkfjsjfcjyskdykk","懈":"dkfsesrjjfrssjjf","懊":"dkfsfcksjfskjsl","懒":"dkfjfcjfsksefcsk","懔":"dkfkjfcfcjjjjgsk","撼":"jgijsjfcjyskdykk","擀":"jgijffcjjjfsljjf","擂":"jgijdefkkkkfcjfj","擅":"jgikjfcfcjjfcjjj","操":"jgifcjfcjfcjjfsl","擎":"jffsrfcjsjslsjjg","擐":"jgifcffjjfcjshsl","擗":"jgicjsfcjkjksjjf","擞":"jgiksjfskmsjsjsl","整":"jfcjfsksjsljfjfj","斓":"kjskkfrjfcksjfsk","暾":"fcjjkjfcjegisjsl","樨":"jfskcjsfkisksjjf","樵":"jfsksfkjjjfjdkkk","樽":"jfskksjfcsbjjjgk","樾":"jfskjfjfjsljhysk","橇":"jfsksjjusjjhsjju","橐":"jfcjfdejsfcjjfsl","橘":"jfskekegsfrskfcj","橙":"jfskekssljfcjksj","橛":"jfskjsksjbfssesl","橱":"jfskjsjfcjksijgk","橹":"jfsksefcjfjjfcjj","橼":"jfsknninejstsssl","檎":"jfskslkjskbffrnk","檠":"jffsrfcjsjskjfsl","歙":"skjfcjrkirkisesl","殪":"jsekjfjdejfcjksj","氅":"fksfrfcjsjslsjju","氆":"sjjuksjffksjfcjj","氇":"sjjusefcjfjjfcjj","潞":"kkifcjfjfiselfcj","澡":"kkifcjfcjfcjjfsl","澧":"kkifcjffjjfcjksj","澶":"kkikjfcfcjjfcjjj","澹":"kkisejsskkjjjfcj","激":"kkisfcjjkjrssjsl","濂":"kkikjsksjcjjffsl","濉":"kkifcjjjsfkjjjfj","濑":"kkijfcjfsksefcsk","濒":"kkifjfjfssjsfcsk","熹":"jfjfcjksjfcjdkkk","燃":"dssksekkjslkdkkk","燎":"dsskjslksfcjjgsk","燔":"dssksksjfslfcjfj","燕":"jffjfcjfjisudkkk","燠":"dssksfcksjfskjsl","燧":"dsskksjstssskkal","犟":"cjzfcjfcjfjksjjf","獬":"stssesrjjfrssjjf","獭":"stsjfcjfsksefcsk","璞":"jjfiffksjksjjjsl","瓢":"jfcffjjjgsksshkl","甏":"jfjfcjksisssjhok","甑":"ksfcfksjfcjjjhok","瘭":"kjskijfcffjjjgsk","瘰":"kjskifcjfjnnkgsk","瘳":"kjskickickislsss","瘴":"kjskikjksjfcjjjf","瘵":"kjskisekkeljjgsk","瘸":"kjskirsfcjfrsksk","瘾":"kjskiwfsecjjdykk","瘿":"kjskifcskfcskmsj","癀":"kjskijffjfcjfjsk","癃":"kjskiwfseljsjjfj","盥":"sfjjgeskcjjfcffj","瞟":"fcjjjjfcffjjjgsk","瞠":"fcjjjfksdefcjjfj","瞥":"ksfrfsksjslfcjjj","瞰":"fcjjjejffjjisjsl","磨":"kjsjfskjfsljsfcj","磬":"jfjcfjssvekjsfcj","磲":"jsfcjkkijcjbjfsl","磺":"jsfcjjffjfcjfjsk","禧":"kefkjfjfcjksjfcj","穆":"sjfsksfcjjfsksss","穑":"sjfskjfksjfcfcjj","窿":"kdeskwfseljsjjfj","篙":"sjksjkkjfcjfrfcj","篚":"sjksjkjfjjjfjjjb","篝":"sjksjkjjffjfrfjj","篡":"sjksjkfcjjjjslnk","篥":"sjksjkjfcffjjfsl","篦":"sjksjksfcskjjhsu","篪":"sjksjkssfjesjuso","篮":"sjksjkffsjkfcffj","篱":"sjksjkkjskbffrnk","篷":"sjksjkseljjjfkal","糕":"ksjfskksjjfjdkkk","糖":"ksjfskkjscjjffcj","糗":"ksjfsksfcjjjjslk","糙":"ksjfsksjfjfcjkal","缰":"nnijfcjfjjfcjfjj","缱":"nnifcjfjfcjcjkal","缲":"nnifcjfcjfcjjfsl","缳":"nnifcffjjfcjshsl","缴":"nnisfcjjkjrssjsl","罹":"fcffjdkfsfkjjjfj","羲":"ksjjfjsjfskjzysk","翮":"jfcjfrksjfrkirki","翰":"jffcjjjfslrkirki","翱":"sfcjjjskjfrkirki","耨":"jjjfskjsjjhsljgk","耩":"jjjfskjjffjfrfjj","耪":"jjjfskkjksdekjrs","聱":"jjfjrssjsljffjjj","膦":"srjjksjfslsekjnf","膨":"srjjjfjfcjksisss","膪":"srjjkjksdefrffcj","膳":"srjjksjjjfksjfcj","臻":"jnkjfijjjslsjfsk","蕹":"jffkjnnssfkjjjfj","蕻":"jffjfjjjnkjffjsk","蕾":"jffjdefkkkkfcjfj","薄":"jffkkijfcjjfkjgk","薅":"jffmsjjsjjhsljgk","薇":"jffssffbfjspsjsl","薏":"jffkjksjfcjjdykk","薛":"jffsfcjcjkjksjjf","薜":"jffcjsfcjkjksjjf","薤":"jffjsekfjjjfjjjj","薨":"jfffcffjdejseksu","薪":"jffkjksjjgskssjf","薮":"jffksjfskmsjsjsl","薯":"jfffcffjjfjsfcjj","螃":"fcjfjkkjksdekjrs","螅":"fcjfjksfcjjjdykk","螈":"fcjfjkjssfcjjgsk","融":"jfcjfrksjffcjfjk","螓":"fcjfjkjjjslsjfsk","螗":"fcjfjkkjscjjffcj","螟":"fcjfjkdefcjjkjsk","螨":"fcjfjkjffjfrsksk","螭":"fcjfjkkjskbffrnk","螯":"jjfjrssjslfcjfjk","蟆":"fcjfjkjfffcjjjsl","蟒":"fcjfjkjffjslkjsf","衡":"ssfsefcjfjjskjjg","褰":"kdejjffjslkjshsl","褶":"kefskckickisfcjj","赝":"jssfsfkjjjfjfcsk","赞":"sjfjshsjfjsufcsk","赠":"fcskksfcfksjfcjj","踱":"fcjfjfikjsjffjel","踵":"fcjfjfisjfcjjfjj","踹":"fcjfjfifbfjsfrff","踽":"fcjfjfisfcjfrfik","蹀":"fcjfjfijffjbjfsl","蹁":"fcjfjfikcjsfrjff","蹂":"fcjfjfiekegsjfsl","蹄":"fcjfjfikjksdefrf","蹉":"fcjfjfiksjjjsjfj","辙":"jnfikjnkfrjjsjsl","辚":"jnfiksjfslsekjnf","辨":"kjksjjsdskjksjjf","辩":"kjksjjskpkjksjjf","遽":"fjesjujstssskkal","避":"cjsfcjkjksjjfkal","邀":"sfcjjkjrssjskkal","邂":"sesrjjfrssjjfkal","鄹":"jffjjieksfssskwf","醍":"jfcsbjjfcjjjfjsl","醐":"jfcsbjjjffcjsrjj","醑":"jfcsbjjefjslfrjj","醒":"jfcsbjjfcjjsjjfj","醚":"jfcsbjjksjfskkal","醛":"jfcsbjjjffsljjfj","錾":"jnfissjfsljjfksj","镖":"sjjjhjfcffjjjgsk","镗":"sjjjhfksdefcjjfj","镘":"sjjjhfcjjfcffjel","镙":"sjjjhfcjfjnnkgsk","镛":"sjjjhkjscjjfrjjf","镜":"sjjjhkjksjfcjjsu","镝":"sjjjhkjksfrjffcj","镞":"sjjjhkjrssjsjjsl","镟":"sjjjhkjrssjefjsl","隰":"wffcjjnnknnkdkkk","雕":"srjfjfcjsfkjjjfj","霍":"jdefkkkksfkjjjfj","霎":"jdefkkkkkjksjmsj","霏":"jdefkkkkfjjjfjjj","霓":"jdefkkkksfjcjjsu","霖":"jdefkkkkjfskjfsl","靛":"jjfjfrjjkdejfjsl","鞔":"jffjfcjjfsefcjsu","鞘":"jffjfcjjffksfrjj","颞":"jffjjjekekjsfcsk","颟":"jffjfrskskjsfcsk","颠":"jffcjjjjskjsfcsk","颡":"ekekekjfskjsfcsk","飙":"jskkjskkjskksosk","飚":"soskdsskdsskdssk","餐":"fjsekekslkcjjhsk","髭":"jfjjjnksssfjfisu","髹":"jfjjjnkssssfjfsl","髻":"jfjjjnksssjfjfcj","魈":"sfcjjsunkfksfrjj","魉":"sfcjjsunkjfrsksk","鲭":"sefcjfjijjfjfrjj","鲮":"sefcjfjijfjsksel","鲰":"sefcjfjijffjjiel","鲱":"sefcjfjifjjjfjjj","鲲":"sefcjfjifcjjjhsu","鲳":"sefcjfjifcjjfcjj","鲴":"sefcjfjifcjffcjj","鲵":"sefcjfjisfjcjjsu","鲶":"sefcjfjislkedykk","鲷":"sefcjfjisrjfjfcj","鲸":"sefcjfjikjfcjgsk","鲺":"sefcjfjiojfcjfjk","鲻":"sefcjfjimmmfcjfj","鹦":"fcskfcskmsjsrkzj","鹧":"kjsjffjdkkksrkzj","鹨":"ckickiskssssrkzj","鹾":"fjfcskjksjjjsjfj","麇":"kjscffjjhsusjfsl","麈":"kjscffjjhsukjjfj","黉":"kksdejffjfcjfjsk","黔":"fcksjfjidkkkslke","默":"fcksjfjidkkkjslk","鼽":"sfcjjjfcjfjjsfso","儡":"sffcjfjfcjfjfcjfj","嚅":"fcjjdefkkkkjsfrff","嚎":"fcjkjfcjdejstsssl","嚏":"fcjjfdefcjfjefjsl","嚓":"fcjkdesekkeljjgsk","壑":"fjdejskslfcjeljfj","壕":"jfikjfcjdejstsssl","嬲":"fcjfjrsmsjfcjfjrs","嬷":"msjkjsjfskjfslsnk","孺":"egijdefkkkkjsfrff","嶷":"fbfsusjjskekefjsl","徽":"ssffbfjnnkgsksjsl","懋":"jfskekegsjfsldykk","懑":"kkijffjfrskskdykk","懦":"dkfjdefkkkkjsfrff","戴":"jfjfcjfjjffjskysk","擘":"cjsfcjkjksjjfsjjg","擢":"jgickickisfkjjjfj","擤":"jgisfcjjjfcjfjjsf","擦":"jgikdesekkeljjgsk","曙":"fcjjfcffjjfjsfcjj","朦":"srjjjffdejjstsssl","檀":"jfskkjfcfcjjfcjjj","檄":"jfsksfcjjkjrssjsl","檐":"jfsksejsskkjjjfcj","檑":"jfskjdefkkkkfcjfj","檗":"cjsfcjkjksjjfjfsl","檩":"jfskkjfcfcjjjjgsk","檬":"jfskjffdejjstsssl","濞":"kkisfcjjjfcjfjjsf","濠":"kkikjfcjdejstsssl","濡":"kkijdefkkkkjsfrff","濮":"kkisfffksjksjjjsl","濯":"kkickickisfkjjjfj","燥":"dsskfcjfcjfcjjfsl","燮":"kjjjfcjdsskdsskel","爵":"skksfcffjcjjhkjgk","獯":"stssjfcksjfjjdkkk","璐":"jjfifcjfjfiselfcj","璨":"jjfifjsekekksjfsl","璩":"jjfifjesjujstsssl","甓":"cjsfcjkjksjjfjhok","疃":"fcjfjkjksjfcjjfjj","癌":"kjskifcjfcjfcjfbf","癍":"kjskijjfikjskjjfj","皤":"sfcjjsksjfslfcjfj","瞧":"fcjjjsfkjjjfjdkkk","瞩":"fcjjjcjssfcjfrfik","瞪":"fcjjjekssljfcjksj","瞬":"fcjjjskksdesekjnf","瞳":"fcjjjkjksjfcjjfjj","瞵":"fcjjjksjfslsekjnf","磴":"jsfcjekssljfcjksj","磷":"jsfcjksjfslsekjnf","礁":"jsfcjsfkjjjfjdkkk","礅":"jsfcjkjfcjegisjsl","穗":"sjfskjfcjjfjkdykk","篼":"sjksjksfcjjshcjsu","篾":"sjksjkfcffjjskysk","簇":"sjksjkkjrssjsjjsl","簋":"sjksjkcjjhslfcffj","簌":"sjksjkjfcjfsksesl","簏":"sjksjkkjscffjjhsu","簖":"sjksjkksjfskbssjf","簧":"sjksjkjffjfcjfjsk","糜":"kjsjfskjfslksjfsl","糟":"ksjfskjfcjffjfcjj","糠":"ksjfskkjscjjgkisl","縻":"kjsjfskjfslnnkgsk","繁":"sjbrkjksjslnnkgsk","繇":"skkssjjfbfsnnkgsk","罄":"jfjcfjssveksjjfbf","罅":"sjjfbffjesjusksjg","罾":"fcffjksfcfksjfcjj","羁":"fcffjjffjfcjjfczj","翳":"jsjjskbsvelrkirki","翼":"ckickifcjfjjffjsk","膺":"kjssfsfkjjjfjfrjj","膻":"srjjkjfcfcjjfcjjj","臀":"cjsjffjsksvelfrjj","臁":"srjjkjsksjcjjffsl","臂":"cjsfcjkjksjjffrjj","臃":"srjjkjnnssfkjjjfj","臆":"srjjkjksjfcjjdykk","臊":"srjjfcjfcjfcjjfsl","臌":"srjjjfjfcjksijfel","艚":"ssrkjkjfcjffjfcjj","薰":"jffsjfcksjfjjdkkk","薷":"jffjdefkkkkjsfrff","薹":"jffjfjfcjdejnkjfj","藁":"jffkjfcjfrfcjjfsl","藉":"jffjjjfskjffjfcjj","藏":"jffjsbjsjfcjfbysk","藐":"jffskkstsssfcjjsu","藓":"jffsefcjfjiksjjjf","螫":"jfjsgsksjslfcjfjk","螬":"fcjfjkjfcjffjfcjj","螳":"fcjfjkfksdefcjjfj","螵":"fcjfjkjfcffjjjgsk","螺":"fcjfjkfcjfjnnkgsk","螽":"selkkfcjfjkfcjfjk","蟀":"fcjfjkkjnnkkiskjf","蟊":"ekegsfcjfjkfcjfjk","蟋":"fcjfjksksjfsldykk","蟑":"fcjfjkkjksjfcjjjf","蟓":"fcjfjksefcjstsssl","蟥":"fcjfjkjffjfcjfjsk","襁":"kefskcjzfcjfcjfjk","襄":"kjfcjfcjjjffjshsl","觳":"jfjdejsesrjjfsvel","謇":"kdejjffjslkjjjfcj","豁":"kdejjjffcjskslfcj","豳":"fjstssskjstssskbf","貔":"skkstsssfcskjjhsu","貘":"skkstssjfffcjjjsl","赡":"fcsksejsskkjjjfcj","赢":"kjbfcjsrjjfcsksok","蹇":"kdejjffjslfcjfjsl","蹈":"fcjfjfiskkssfjcjj","蹊":"fcjfjfiskksnnkjsl","蹋":"fcjfjfifcjjrkirki","蹑":"fcjfjfijffjjjekel","蹒":"fcjfjfijffjfrsksk","辫":"kjksjjsnnikjksjjf","邃":"kdeskksjstssskkal","邈":"skkstsssfcjjsukal","醢":"jfcsbjjjsfcjfcffj","醣":"jfcsbjjkjscjjffcj","鍪":"ekegssjsksljjfksj","镡":"sjjjhjfcffjfcjjjf","镢":"sjjjhjsksjbfssesl","镣":"sjjjhjslksfcjjgsk","镤":"sjjjhffksjksjjjsl","镥":"sjjjhsefcjfjjfcjj","镦":"sjjjhkjfcjegisjsl","镧":"sjjjhkfrjfcksjfsk","镨":"sjjjhksjffksjfcjj","镩":"sjjjhkdeskfcjfcjf","镪":"sjjjhcjzfcjfcjfjk","镫":"sjjjhekssljfcjksj","隳":"wfjsjfjfrjjslgdkk","霜":"jdefkkkkjfskfcjjj","霞":"jdefkkkkcjfjjcjel","鞠":"jffjfcjjfsrksjfsk","馘":"ksjsfcjjjjfcjiysk","骤":"czijffjjieksfsssl","髀":"fccdefrjjsfcjjsjf","髁":"fccdefrjjfcjjjfsl","魍":"sfcjjsunkfrksjkjb","魏":"sjfskmsjsfcjjsunk","鲼":"sefcjfjijfjfffcsk","鲽":"sefcjfjijffjbjfsl","鳃":"sefcjfjifcjfjdykk","鳄":"sefcjfjifcjfcjjjz","鳅":"sefcjfjisjfskdssl","鳆":"sefcjfjisjfcjjsel","鳇":"sefcjfjisfcjjjjfj","鳊":"sefcjfjikcjsfrjff","鳋":"sefcjfjielkfcjfjk","鹩":"jslksfcjjgsksrkzj","鹪":"sfkjjjfjdkkksrkzj","鹫":"kjfcjgskjsuksrkzj","鹬":"ekegsfrskfcjsrkzj","麋":"kjscffjjhsuksjfsl","黏":"sjfskskgkidkfjfcj","黛":"sfjykfcksjfjjdkkk","黜":"fcksjfjidkkkbffbf","黻":"ffksjksfrfskjselk","鼢":"sfjcjjhkkhkkyslrs","鼾":"sfcjjjfcjfjjsfjjf","龋":"fjfjskbfsfcjfrfik","龌":"fjfjskbfcjsjnkjfj","龠":"sljfcjfcjfcjfrjff","冁":"ksfcjjjfcjsjffjhsl","嚣":"fcjfcjjsfcskfcjfcj","彝":"nejksjfsknnkgskjsf","懵":"dkfjfffcffjdefcjjj","戳":"ckickisfkjjjfjjysk","曛":"fcjjsjfcksjfjjdkkk","曜":"fcjjckickisfkjjjfj","檫":"jfskkdesekkeljjgsk","瀑":"kkifcjjjffjslgkisk","燹":"jstssskjstssskdssl","璧":"cjsfcjkjksjjfjjfjk","癔":"kjskikjksjfcjjdykk","癖":"kjskicjsfcjkjksjjf","癜":"kjskicjsjffjsksvel","癞":"kjskijfcjfsksefcsk","瞻":"fcjjjsejsskkjjjfcj","瞽":"jfjfcjksijfelfcjjj","瞿":"fcjjjfcjjjsfkjjjfj","礓":"jsfcjjfcjfjjfcjfjj","礞":"jsfcjjffdejjstsssk","簟":"sjksjkjfcffjfcjjjf","簦":"sjksjkekssljfcjksj","簪":"sjksjkjnshjnsufcjj","糨":"ksjfskcjzfcjfcjfjk","翻":"sksjfskfcjfjrkirki","艟":"ssrkjkkjksjfcjjfjj","藕":"jffjjjfskfcjjfrfik","藜":"jffsjfsksrsslgkisk","藤":"jffsrjjksjjslgkisk","藩":"jffkkisksjfslfcjfj","蟛":"fcjfjkjfjfcjksisss","蟠":"fcjfjksksjfslfcjfj","蟪":"fcjfjkjfcjjfjkdykk","蟮":"fcjfjkksjjjfksjfcj","襟":"kefskjfskjfsljjgsk","覆":"jfcffjssfsjfcjjsel","謦":"jfjcfjssvekkjjjfcj","蹙":"jsfjjgskyskfcjfjsl","蹦":"fcjfjfifbfsrjjsrjj","蹩":"ksfrfsksjslfcjfjsl","躇":"fcjfjfijffjfjsfcjj","邋":"mmmfcskjhkkhkkykal","醪":"jfcsbjjckickislsss","鎏":"kkikjnksfusljjfksj","鏊":"jjfjrssjsksljjfksj","镬":"sjjjhjffsfkjjjfjel","镭":"sjjjhjdefkkkkfcjfj","镯":"sjjjhfcffjsrfcjfjk","镰":"sjjjhkjsksjcjjffsl","镱":"sjjjhkjksjfcjjdykk","雠":"sfkjjjfjkpsfkjjjfj","鞣":"jffjfcjjfekegsjfsl","鞫":"jffjfcjjfsrkjjjfcj","鞭":"jffjfcjjfsfjfcjjsl","鞯":"jffjfcjjfjffjsfegj","颢":"fcjjkjfcjgskjsfcsk","餮":"jsekslsssslkcjjhsk","馥":"sjfskfcjjsjfcjjsel","髂":"fccdefrjjkdeselfcj","髅":"fccdefrjjksjfslmsj","鬃":"jfjjjnkssskdejjgsk","鬈":"jfjjjnksssksjjslru","鳌":"jjfjrssjslsefcjfjj","鳍":"sefcjfjijfjssufcjj","鳎":"sefcjfjifcjjrkirki","鳏":"sefcjfjifcffjfsskk","鳐":"sefcjfjiskkssjjfbf","鹭":"fcjfjfiselfcjsrkzj","鹰":"kjssfsfkjjjfjsrkzj","黝":"fcksjfjidkkknnkrs","黟":"fcksjfjidkkkseksek","黠":"fcksjfjidkkkjfjfcj","鼬":"sfjcjjhkkhkkyfcjfj","嚯":"fcjjdefkkkksfkjjjfj","孽":"jffsfcjcjkjksjjfegj","巅":"fbfjffcjjjjskjsfcsk","攀":"jfskskskjfskjslsjjg","攉":"jgijdefkkkksfkjjjfj","攒":"jgisjfjshsjfjsufcsk","曝":"fcjjfcjjjffjslgkisk","瀚":"kkijffcjjjfslrkirki","瀛":"kkikjbfcjsrjjmsjsok","瀣":"kkifjsekelfjjjfjjjj","爆":"dsskfcjjjffjslgkisk","璺":"sfjjfcjfcjcjjdejjfjk","瓣":"kjksjjssshklkjksjjf","疆":"cjzjfijfcjfjjfcjfjj","癣":"kjskisefcjfjiksjjjf","礤":"jsfcjjffsekkeljjgsk","簸":"sjksjkjffjjjskesfel","簿":"sjksjkkkijfcjjfkjgk","籀":"sjksjkjgishkrsfcjfj","籁":"sjksjkjfcjfsksefcsk","缵":"nnisjfjshsjfjsufcsk","羸":"kjbfcjsrjjksjjjfsok","羹":"ksjjfjdkkkksjjfjjsl","艨":"ssrkjkjffdejjstsssl","藻":"jffkkifcjfcjfcjjfsl","藿":"jffjdefkkkksfkjjjfj","蘅":"jffssfsefcjfjjskjjg","蘑":"jffkjsjfskjfsljsfcj","蘧":"jfffjesjujstssskkal","蟹":"sesrjjfrssjjffcjfjk","蟾":"fcjfjksejsskkjjjfcj","蠃":"kjbfcjsrjjfcjfjksok","蠊":"fcjfjkkjsksjcjjffsl","蠓":"fcjfjkjffdejjstsssl","蠖":"fcjfjkjffsfkjjjfjel","襞":"cjsfcjkjksjjfkjshsl","襦":"kefskjdefkkkkjsfrff","警":"jffsrfcjsjslkjjjfcj","谶":"kpskskjfjjjfjjjiysk","蹬":"fcjfjfiekssljfcjksj","蹭":"fcjfjfiksfcfksjfcjj","蹯":"fcjfjfisksjfslfcjfj","蹰":"fcjfjfijsjfcjksijgk","蹲":"fcjfjfiksjfcsbjjjgk","蹴":"fcjfjfikjfcjgskjsuk","蹶":"fcjfjfijsksjbfssesl","蹼":"fcjfjfiffksjksjjjsl","蹿":"fcjfjfikdeskfcjfcjf","酃":"jdefkkkkfcjfcjfcjwf","醭":"jfcsbjjffksjksjjjsl","醮":"jfcsbjjsfkjjjfjdkkk","醯":"jfcsbjjkjnksfufcffj","鏖":"kjscffjjhsusljjfksj","镲":"sjjjhkdesekkeljjgsk","霪":"jdefkkkkkkiskkssjfj","霭":"jdefkkkkkpfcjjsrskb","靡":"kjsjfskjfslfjjjfjjj","鞲":"jffjfcjjfjjffjfrfjj","鞴":"jffjfcjjfjffjsfrjjf","颤":"kjfcfcjjfcjjijsfcsk","骥":"czifjisufcjfjjffjsk","髋":"fccdefrjjkdejfffcsu","髌":"fccdefrjjkdesfjfjsk","鬏":"jfjjjnkssssjfskdssl","魑":"sfcjjsunkkjskbffrnk","鳓":"sefcjfjijffjfcjjfrs","鳔":"sefcjfjijfcffjjjgsk","鳕":"sefcjfjijdefkkkkcjj","鳖":"ksfrfsksjslsefcjfjj","鳗":"sefcjfjifcjjfcffjel","鳘":"sjbckjksjslsefcjfjj","鳙":"sefcjfjikjscjjfrjjf","鹱":"srkzijffsfkjjjfjel","麒":"kjscffjjhjhjffjjjsk","麓":"jfskjfslkjscffjjhsu","麴":"jfskskskseksrksjfsk","黢":"fcksjfjidkkknksksel","黼":"ffksjksfrfskjfrjjfk","鼗":"skiuskjfjfcjksijfel","嚷":"fcjkjfcjfcjjjffjshsl","嚼":"fcjskksfcffjcjjhkjgk","壤":"jfikjfcjfcjjjffjshsl","孀":"msjjdefkkkkjfskfcjjj","巍":"fbfsjfskmsjsfcjjsunk","攘":"jgikjfcjfcjjjffjshsl","曦":"fcjjksjjfjsjfskjzysk","瀵":"kkiksjfslfcjfjjffjsk","瀹":"kkisljfcjfcjfcjfrjff","灌":"kkijfffcjfcjsfkjjjfj","獾":"stsjfffcjfcjsfkjjjfj","瓒":"jjfisjfjshsjfjsufcsk","矍":"fcjjjfcjjjsfkjjjfjel","籍":"sjksjkjjjfskjffjfcjj","糯":"ksjfskjdefkkkkjsfrff","纂":"sjksjkfcjjjjslnnkgsk","耀":"fksjshckickisfkjjjfj","蘖":"jffsfcjcjkjksjjfjfsl","蘩":"jffsjbckjksjslnnkgsk","蠕":"fcjfjkjdefkkkkjsfrff","蠛":"fcjfjkjfffcffjjskysk","譬":"cjsfcjkjksjjfkjjjfcj","躁":"fcjfjfifcjfcjfcjjfsl","躅":"fcjfjfifcffjsrfcjfjk","酆":"fjjjfjjjfbfjfcjksiwf","醴":"jfcsbjjfcjffjjfcjksj","醵":"jfcsbjjfjesjujstsssl","镳":"sjjjhkjscffjjhsudkkk","霰":"jdefkkkkjffjfrjjsjsl","颥":"jdefkkkkjsfrffjsfcsk","馨":"jfjcfjssveksjfslfcjj","骧":"czikjfcjfcjjjffjshsl","鬓":"jfjjjnkssskdesfjfjsk","魔":"kjsjfskjfslsfcjjsunk","鳜":"sefcjfjijsksjbfssesl","鳝":"sefcjfjiksjjjfksjfcj","鳞":"sefcjfjiksjfslsekjnf","鳟":"sefcjfjiksjfcsbjjjgk","黥":"fcksjfjidkkkkjfcjgsk","黧":"sjfsksrsfcksjfjjdkkk","黩":"fcksjfjidkkkjfekkjsk","黪":"fcksjfjidkkknkjslsss","鼍":"fcjfcjfcjfjjfcjfcjju","鼯":"sfjcjjhkkhkkyjfcjfcj","夔":"ksjsfcjjjfjficjusksel","曩":"fcjjkjfcjfcjjjffjshsl","灏":"kkifcjjkjfcjgskjsfcsk","爝":"dsskskksfcffjcjjhkjgk","癫":"kjskijffcjjjjskjsfcsk","礴":"jsfcjjffkkijfcjjfkjgk","禳":"kefkkjfcjfcjjjffjshsl","羼":"cjsksjjjfksjjjsksjjjf","蠡":"nejstssslfcjfjkfcjfjk","蠢":"jjjslfcjjfcjfjkfcjfjk","赣":"kjksjfcjjjfseljfjfcsk","躏":"fcjfjfijffkfrsfkjjjfj","醺":"jfcsbjjsjfcksjfjjdkkk","鐾":"cjsfcjkjksjjfsljjfksj","露":"jdefkkkkfcjfjfiselfcj","霸":"jdefkkkkjffjfcjjfsrjj","霹":"jdefkkkkcjsfcjkjksjjf","颦":"fjfjfssjsfcsksfcjjsjf","髓":"fccdefrjjjsjfjfrjjkal","鳢":"sefcjfjifcjffjjfcjksj","麝":"kjscffjjhsusfrjjjsjgk","黯":"fcksjfjidkkkkjksjfcjj","鼙":"jfjfcjksijfelsfcjjsjf","囊":"jfcjfdefcjfcjjjffjshsl","懿":"jfjdejfcjksikisesldykk","氍":"fcjjjfcjjjsfkjjjfjsjju","瓤":"kjfcjfcjjjffjshsksshkl","穰":"sjfskkjfcjfcjjjffjshsl","耱":"jjjfskkjsjfskjfsljsfcj","蘸":"jffjfcsbjjsfkjjjfjdkkk","蘼":"jffkjsjfskjfslfjjjfjjj","躐":"fcjfjfimmmfcskjhkkhkky","躔":"fcjfjfikjsfcjjfjjskjfj","镶":"sjjjhkjfcjfcjjjffjshsl","霾":"jdefkkkkskkstssfcjjfjj","饔":"kjnnssfkjjjfjslkcjjhsk","饕":"fcjjzfjesjusoslkcjjhsk","髑":"fccdefrjjfcffjsrfcjfjk","鬻":"cjzksjfskcjzjfcjfrksjf","鹳":"jfffcjfcjsfkjjjfjsrkzj","麟":"kjscffjjhjhksjfslsekjnf","攥":"jgisjksjkfcjjjjslnnkgsk","攫":"jgifcjjjfcjjjsfkjjjfjel","癯":"kjskifcjjjfcjjjsfkjjjfj","罐":"sjjfbfjfffcjfcjsfkjjjfj","趱":"jfjfjslsjfjshsjfjsufcsk","躜":"fcjfjfisjfjshsjfjsufcsk","颧":"jfffcjfcjsfkjjjfjjsfcsk","鬟":"jfjjjnksssfcffjjfcjshsl","鼷":"sfjcjjhkkhkkyskksnnkjsl","鼹":"sfjcjjhkkhkkyfcjjkdemsj","齄":"sfcjjjfcjfjjsfjfslfcjjj","灞":"kkijdefkkkkjffjfcjjfsrjj","矗":"jffcjjjjjffcjjjijffcjjjj","蠲":"ksjskfcffifcffjsrfcjfjk","蠹":"jfcjfdejsfcjfcjfjkfcjfjk","衢":"ssffcjjjfcjjjsfkjjjfjjjg","襻":"kefskjfskskskjfskjslsjjg","躞":"fcjfjfikjjjfcjdsskdsskel","鑫":"sljjfksjsljjfksisljjfksj","鬣":"jfjjjnksssmmmfcskjhkkhkky","馕":"sehjfcjfdefcjfcjjjffjshsl","囔":"fcjjfcjfdefcjfcjjjffjshsl","戆":"kjksjfcjjjfseljfjfcskdykk","攮":"jgijfcjfdefcjfcjjjffjshsl","纛":"jjfjbckjkfcjjjjgsksnnkgsk","蠼":"fcjfjkfcjjjfcjjjsfkjjjfjel","爨":"sfjjfcjfcjcjjdejfskjfskjsldssk","恰":"dkfsljfcj","卜":"fk","喆":"jfjfcjjfjfcj","玥":"jjfisrjj","镕":"sjjjhkdeskslfcj","滘":"kkideskjfjfcj","璟":"jjfifcjjkjfcjgsk","芃":"jffsok","珺":"jjficjjsfcj","旻":"fcjjkjsl","赟":"kjskjjfjfiykfcsk","瞭":"fcjjjjslksfcjjgsk","祐":"kefkjsfcj","堃":"kjrskjrsjfj","槃":"ssrkjksvekjfsl","囧":"fcskfcj","昇":"fcjjsjsf","燊":"dsskdsskdsskjfsl","昺":"fcjjjfrsk","劼":"jfjfcjrs","彧":"jfcjiysssk","垚":"jfjjfijfj","產":"kjskjssjjfj","琍":"jjfisjfskfg","鹮":"fcffjjfcjshsksrkzj","昉":"fcjjkjrs","嬛":"msjfcffjjfcjshsl","翀":"rkirkifcjf","崑":"fbffcjjjhsu","啰":"fcjfcffjsek","勠":"ckickisksssrs","珮":"jjfisojfrf","旸":"fcjjwss","頫":"skihskjsfcjjjsk","濛":"kkijffdejjstsssl","犇":"sjjfsjfisjjf","蹚":"fcjfjfifksdefcjjfj","珅":"jjfifcjjf","璠":"jjfisksjfslfcjfj","頔":"fcjfjjsfcjjjsk","邨":"jbfhwf","咘":"fcjjsfrf","佔":"sffjfcj","慜":"sjbckjksjsldykk","埇":"jfiekfrjjf","燚":"dsskdsskdsskdssl","瑄":"jjfikdejfcjjj","嬅":"msjjffjjffjjf","玹":"jjfikjnnk","晞":"fcjjskjsfrf","崀":"fbfkcjjhsl","旼":"fcjjkjsl","俶":"sffjjgskel","吋":"fcjjgk","湉":"kkidkfsjffcj","洸":"kkifksjsu","樑":"jfskkkirsdkjfsl","簕":"sjksjkjffjfcjjfrs","贠":"nkfcsk","屌":"cjsfcjfrf","疍":"efjslfcjjj","焜":"dsskfcjjjhsu","戉":"jhysk","圏":"fcksjjslcjuj","翃":"jsnkrkirki","孃":"msjkjfcjfcjjjffjshsl","漷":"kkikjfcjegiwf","谞":"kpefjslfrjj","磡":"jsfcjjffjjjskbrs","硚":"jsfcjsjslsf","浕":"kkicjslkk","嫚":"msjfcjjfcffjel","琇":"jjfisjfslws","珣":"jjfisrfcjj","峯":"fbfseljjjf","埗":"jfifjfjfss","徳":"ssfjffcffjdykk","埈":"jfinksksel","嘚":"fcjssffcjjjjgk","劵":"ksjjslrs","焗":"dsskcjsrfcj","粿":"ksjfskfcjjjfsl","瀍":"kkikjsfcjjfjjskjfj","浐":"kkikjksjs","倓":"sfdsskdssl","碁":"jffjjjsljsfcj","榅":"jfskfcjjfcffj","窣":"kdeskkjskskjf","孖":"egiegj","飏":"soskwss","窸":"kdesksksjfsldykk","塱":"kcjjhksrjjjfj","畑":"dsskfcjfj","闿":"kfrfbfcju","鋆":"jfisrkisljjfksj","曌":"fcjjsrjjkdeskjfj","呎":"fcjcjsl","巿":"jfrf","鱀":"cjjhkjbsusefcjfjdkkk","潟":"kkisfjcjjsrdkkk","龑":"kjksjfrjjjxjujjjjjsl","埼":"jfijskjfcjg","咲":"fcjksjjsl","甦":"jfcjjslsjjfj","毑":"brkjkrfu","曈":"fcjjkjksjfcjjfjj","菂":"jffsfcjjsrk","錤":"skjjfksijffjjjsk","璘":"jjfiksjfslsekjnf","採":"jgiskksjfsl","屾":"fbffbf","釆":"sksjfsl","馃":"sehfcjjjfsl","珪":"jjfijfjjfj","怹":"sfrfudykk","塚":"jfidejstssksl","娭":"msjnksjjsl","蕗":"jfffcjfjfiselfcj","禤":"kefkfcffjrkirki","復":"ssfsjfcjjsel","叒":"ekekel","玏":"jjfirs","偲":"sffcjfjdykk","佈":"sfjsfrf","萩":"jffsjfskdssl","鄠":"jdefkkkkjjzwf","畬":"sljjgskfcjfj","漈":"kkisekkeljjgsk","岀":"fbffbf","昳":"fcjjsjjsl","鸮":"fcjjzsrkzj","栢":"jfskjsfcjj","氹":"ogesk","琎":"jjfijjsfkal","祇":"kefkshjy","啟":"kcjsfcjsjsl","噁":"fcjjfjxxjfjdykk","陞":"wfsjsfjfj","贇":"kjskjjfjfiykfcjjjsk","査":"jfslfcjjj","瑀":"jjfisfcjfrfik","琹":"jjfjjjfjjfsl","洺":"kkisekfcj","僰":"jfcfskjfcfsksl","栃":"jfskssjrs","啲":"fcjsfcjjsrk","奵":"msjjg","嬢":"msjkjskjjffjshsl","叡":"fjdejskslfcjjjel","囍":"jfjfcjksjfcjjfjfcjksjfcj","垵":"jfikdemsj","棪":"jfskdsskdssl","炤":"dsskrsfcj","叕":"ekekekel","榊":"jfskkefkfcjjf","烜":"dsskjfcjjj","龢":"skjfcjfcjfcjfrjffsjfsl","甪":"ssrjjf","託":"kjjjfcjsju","鹀":"jfskskisrkzj","乂":"sl","姮":"msjjfcjjj","垟":"jfiksjjjf","玙":"jjfijzj","霑":"jdefkkkkkkifjfcj","嗞":"fcjksjnnknnk","漖":"kkijfjsegisjsl","囯":"fcjjfjj","藠":"jffsfcjjsfcjjsfcjj","製":"sjjfrffgkjshsl","恆":"dkfjfckkj","蓢":"jffkcjjhksrjj","堌":"jfifcjffcjj","饹":"sehselfcj","韡":"cfjfcjjnfjffjjffjjf","炘":"dsskssjf","泃":"kkisrfcj","佺":"sfsljjfj","竑":"kjksijsnk","椪":"jfskksjffksj","捯":"jgijnkjfifg","翚":"ckickidejnjf","註":"kjjjfcjkjjfj","剎":"skjfskkfg","槙":"jfskjffcjjjjsk","獴":"stsjffdejjstsssl","暐":"fcjjcfjfcjjnf","堺":"jfifcjfjslsf","冇":"jsfr","沕":"kkisrss","跶":"fcjfjfijskkal","奭":"jjsfcjjjsfcjjsl","罍":"fcjfjfcjfjfcjfjsjjfbf","珵":"jjfifcjjjfj","鋐":"skjjfksikdejsnk","珽":"jjfisjfjal","澂":"kkifbfjjjfjsjsl","惇":"dkfkjfcjegj","棻":"jffskrsjfsl","饸":"sehsljfcj","垕":"ssjfcjjfj","樋":"jfskekfrjjfkal","脩":"sffselfrjj","堉":"jfikjnkfrjj","齉":"sfcjjjfcjfjjsfjfcjfdefcjfcjjjffjshsl","馡":"sjfslfcjjfjjjfjjj","姈":"msjslkek"}');
    }, function(j) {
      j.exports = JSON.parse('{"a":{"shape":"㇋","type":"折笔","foldCount":"3","name":"横折折撇"},"b":{"shape":"㇄","type":"折笔","foldCount":"1","name":"竖弯"},"c":{"shape":"𠃍","type":"折笔","foldCount":"1","name":"横折"},"d":{"shape":"㇀","type":"平笔","foldCount":"0","name":"点2"},"o":{"shape":"⺄","type":"折笔","foldCount":"2","name":"横斜钩"},"j":{"shape":"一","type":"平笔","foldCount":"0","name":"横"},"l":{"shape":"㇏","type":"平笔","foldCount":"0","name":"捺"},"r":{"shape":"𠃌","type":"折笔","foldCount":"2","name":"横折钩"},"f":{"shape":"丨","type":"平笔","foldCount":"0","name":"竖"},"g":{"shape":"亅","type":"折笔","foldCount":"1","name":"竖钩"},"k":{"shape":"丶","type":"平笔","foldCount":"0","name":"点"},"s":{"shape":"丿","type":"平笔","foldCount":"0","name":"撇"},"n":{"shape":"𠃋","type":"折笔","foldCount":"1","name":"撇折"},"x":{"shape":"ㄣ|𠃑","type":"折笔","foldCount":"2","name":"竖折撇|竖折折"},"w":{"shape":"𠄎|㇌","type":"折笔","foldCount":"4","name":"横折折折钩|横撇弯钩"},"z":{"shape":"㇉","type":"折笔","foldCount":"3","name":"竖折折钩"},"i":{"shape":"㇀","type":"平笔","foldCount":"0","name":"提"},"t":{"shape":"㇁","type":"折笔","foldCount":"1","name":"弯钩"},"y":{"shape":"㇂|㇃","type":"折笔","foldCount":"1","name":"斜钩|卧钩"},"v":{"shape":"㇅|㇍","type":"折笔","foldCount":"2","name":"横折折|横折弯"},"e":{"shape":"㇇|乛","type":"折笔","foldCount":"1","name":"横撇|横钩"},"p":{"shape":"㇊","type":"折笔","foldCount":"2","name":"横折提"},"q":{"shape":"㇎","type":"折笔","foldCount":"3","name":"横折折折"},"h":{"shape":"𠄌","type":"折笔","foldCount":"1","name":"竖提"},"m":{"shape":"𡿨","type":"折笔","foldCount":"1","name":"撇点"},"u":{"shape":"乚","type":"折笔","foldCount":"2","name":"竖弯钩"}}');
    }, function(j, f2, s) {
      s.r(f2);
      var k = s(0), c = s(1), l = k, e2 = c;
      for (var i in e2)
        e2[i].letter = i;
      var r, d = { start: "start", contain: "contain", match: "match", matchorder: "matchorder", simple: "simple", trad: "trad", array: "array" };
      var n = function(j2) {
        for (var f3 = [], s2 = 1; s2 < arguments.length; s2++)
          f3[s2 - 1] = arguments[s2];
        "string" == typeof j2 && (j2 = j2.split(" ")), r.checkArgs("orderToWord", f3);
        var k2 = [], c2 = "";
        if (j2.forEach(function(j3) {
          n.orders[j3] ? c2 += n.orders[j3].letter : k2.push(j3);
        }), k2.length > 0)
          return console.error("orderToWord: 参数笔画名数组有误：" + k2.join(",")), [];
        var e3 = [], i2 = { start: r.has(f3, d.start), match: r.has(f3, d.match), matchorder: r.has(f3, d.matchorder), contain: r.has(f3, d.contain), simple: r.has(f3, d.simple), trad: r.has(f3, d.trad), array: r.has(f3, d.array) };
        return i2.simple || i2.trad || (i2.simple = i2.trad = true), i2.simple && g(e3, c2, i2, l), i2.trad && r.dict.getTradOrders && g(e3, c2, i2, r.dict.getTradOrders()), r.has(f3, d.array) ? e3 : e3.join("");
      }, g = function(j2, f3, s2, k2) {
        if (s2.match)
          for (var c2 in k2) {
            for (var l2 = false, e3 = 0; e3 < f3.length; e3++)
              if (-1 === k2[c2].indexOf(f3[e3])) {
                l2 = true;
                break;
              }
            l2 || j2.push(c2);
          }
        else if (s2.matchorder)
          for (var c2 in k2) {
            l2 = false;
            var i2 = k2[c2];
            for (e3 = 0; e3 < f3.length; e3++) {
              var r2 = i2.indexOf(f3[e3]);
              if (-1 === r2) {
                l2 = true;
                break;
              }
              i2 = i2.substr(r2 + 1);
            }
            l2 || j2.push(c2);
          }
        else if (s2.contain)
          for (var c2 in k2)
            -1 !== k2[c2].indexOf(f3) && j2.push(c2);
        else if (s2.start)
          for (var c2 in k2)
            0 === k2[c2].indexOf(f3) && j2.push(c2);
        else
          for (var c2 in k2)
            k2[c2] === f3 && j2.push(c2);
        return j2;
      };
      function u(j2, f3, s2, k2) {
        var c2 = { shape: f3, letter: s2, sameLetterTo: k2 };
        k2 || delete c2.sameLetterTo, n.orders[j2] = c2;
      }
      !function() {
        for (var j2 in n.orders = {}, n._base = g, e2) {
          var f3 = e2[j2], s2 = f3.name, k2 = f3.shape;
          if (-1 !== s2.indexOf("|")) {
            var c2 = s2.split("|"), l2 = k2.split("|");
            u(c2[0], l2[0], j2, c2[1]), u(c2[1], l2[1], j2, c2[0]);
          } else
            u(s2, k2, j2);
        }
      }();
      var h, b = function() {
        for (var j2 = 0, f3 = 0, s2 = arguments.length; f3 < s2; f3++)
          j2 += arguments[f3].length;
        var k2 = Array(j2), c2 = 0;
        for (f3 = 0; f3 < s2; f3++)
          for (var l2 = arguments[f3], e3 = 0, i2 = l2.length; e3 < i2; e3++, c2++)
            k2[c2] = l2[e3];
        return k2;
      }, t2 = { letter: "letter", shape: "shape", count: "count", name: "name", detail: "detail", array: "array", order: "order" };
      function o2(j2, f3) {
        h.mapJson(j2, f3, function(j3, f4) {
          l[j3] = f4;
        });
      }
      function y(j2) {
        for (var f3 = [], s2 = 1; s2 < arguments.length; s2++)
          f3[s2 - 1] = arguments[s2];
        var k2 = j2.split("");
        h.checkArgs("stroke", f3);
        for (var c2 = [], e3 = 0; e3 < k2.length; e3++)
          c2[e3] = l[k2[e3]];
        return a(c2, k2, f3);
      }
      function a(j2, f3, s2, k2) {
        if (void 0 === k2 && (k2 = []), k2 = k2 || [], h.has(s2, t2.letter))
          return j2;
        for (var c2 = 0; c2 < j2.length; c2++)
          -1 === k2.indexOf(c2) && "string" == typeof j2[c2] && (j2[c2] = m2(f3[c2], j2[c2], s2));
        return j2;
      }
      function m2(j2, f3, s2) {
        if (void 0 === f3)
          return j2;
        var k2 = h.has(s2, t2.detail), c2 = t2.letter;
        if (k2 ? c2 = t2.detail : h.has(s2, t2.shape) ? c2 = t2.shape : h.has(s2, t2.name) ? c2 = t2.name : h.has(s2, t2.count) && (c2 = t2.count), c2 === t2.count)
          return f3.length;
        if (c2 === t2.letter)
          return f3;
        for (var l2 = [], i2 = 0; i2 < f3.length; i2++)
          l2[i2] = k2 ? e2[f3[i2]] : e2[f3[i2]][c2];
        return l2;
      }
      var p = { pluginName: "order", setOrder: o2, orderToWord: n, install: function(j2) {
        var f3 = j2._origin.stroke;
        h = j2._, j2.setOrder = o2;
        var s2 = function(j3) {
          for (var s3 = [], k2 = 1; k2 < arguments.length; k2++)
            s3[k2 - 1] = arguments[k2];
          return h.has(s3, t2.order) ? y.apply(void 0, b([j3], s3)) : f3.apply(void 0, b([j3], s3));
        };
        j2.stroke = s2, String.prototype.stroke = function() {
          for (var j3 = [], f4 = 0; f4 < arguments.length; f4++)
            j3[f4] = arguments[f4];
          return s2.apply(void 0, b([this], j3));
        }, j2._.order = true, j2.type.stroke = t2, j2._.orderWithLetters = a, j2._._reinitStrokeOrder && (j2._._reinitStrokeOrder(), delete j2._._reinitStrokeOrder), function(j3) {
          j3.orderToWord = n, j3.type.orderToWord = d, r = j3._;
        }(j2);
      }, dict: { orders: l, strokeTable: e2 } };
      "object" == typeof window && window.CnChar && (window.CncharOrder = p, window.CnChar.use(p));
      f2.default = p;
    }]).default;
  });
})(cnchar_order_min);
const order = /* @__PURE__ */ getDefaultExportFromCjs(cnchar_order_minExports);
var cnchar_info_minExports = {};
var cnchar_info_min = {
  get exports() {
    return cnchar_info_minExports;
  },
  set exports(v) {
    cnchar_info_minExports = v;
  }
};
(function(module2, exports2) {
  !function(a, c) {
    module2.exports = c();
  }(commonjsGlobal, function() {
    return function(a) {
      var c = {};
      function b(d) {
        if (c[d])
          return c[d].exports;
        var e2 = c[d] = { i: d, l: false, exports: {} };
        return a[d].call(e2.exports, e2, e2.exports, b), e2.l = true, e2.exports;
      }
      return b.m = a, b.c = c, b.d = function(a2, c2, d) {
        b.o(a2, c2) || Object.defineProperty(a2, c2, { enumerable: true, get: d });
      }, b.r = function(a2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a2, "__esModule", { value: true });
      }, b.t = function(a2, c2) {
        if (1 & c2 && (a2 = b(a2)), 8 & c2)
          return a2;
        if (4 & c2 && "object" == typeof a2 && a2 && a2.__esModule)
          return a2;
        var d = /* @__PURE__ */ Object.create(null);
        if (b.r(d), Object.defineProperty(d, "default", { enumerable: true, value: a2 }), 2 & c2 && "string" != typeof a2)
          for (var e2 in a2)
            b.d(d, e2, function(c3) {
              return a2[c3];
            }.bind(null, e2));
        return d;
      }, b.n = function(a2) {
        var c2 = a2 && a2.__esModule ? function() {
          return a2.default;
        } : function() {
          return a2;
        };
        return b.d(c2, "a", c2), c2;
      }, b.o = function(a2, c2) {
        return Object.prototype.hasOwnProperty.call(a2, c2);
      }, b.p = "", b(b.s = 3);
    }([function(a) {
      a.exports = JSON.parse('{"a":"金","b":"木","c":"水","d":"火","e":"土","f":"-"}');
    }, function(a) {
      a.exports = JSON.parse('{"a":"形声","b":"会意","c":"-"}');
    }, function(a) {
      a.exports = JSON.parse('{"卧":"bbㄨㄛˋ","呤":"cdㄌㄧㄥˊ","叔":"caㄕㄨ","玺":"adㄒㄧˇ","胺":"ceㄢˋ","一":"ceㄧ","乙":"ceㄧˇ","丁":"cdㄉㄧㄥ","七":"baㄑㄧ","乃":"cdㄋㄞˇ","乜":"bcㄇㄧㄝ","九":"cbㄐㄧㄡˇ","了":"cdㄌㄧㄠˇ","二":"cdㄦˋ","人":"caㄖㄣˊ","亻":"cfㄖㄣˊ","儿":"caㄦˊ","入":"caㄖㄨˋ","八":"ccㄅㄚ","冂":"cfㄐㄩㄥ","几":"cbㄐㄧˇ","凵":"cfㄎㄢˇ","刁":"cdㄉㄧㄠ","力":"cdㄌㄧˋ","勹":"ccㄅㄠ","匕":"caㄅㄧˇ","十":"caㄕˊ","厂":"caㄢ","厶":"caㄙ","又":"ceㄧㄡˋ","卜":"ccㄅㄨˇ","乂":"ceㄧˋ","万":"acㄇㄛˋ","丈":"bdㄓㄤˋ","三":"caㄙㄢ","上":"caㄕㄤˋ","下":"ccㄒㄧㄚˋ","丌":"cbㄑㄧˊ","个":"ceㄍㄜˋ","丫":"ceㄧㄚ","丸":"ceㄨㄢˊ","久":"cbㄐㄧㄡˇ","乇":"cdㄊㄨㄛ","么":"cce","义":"cbㄧˊ","乞":"cbㄑㄧˇ","也":"ceㄧㄝˇ","习":"ccㄒㄧˊ","乡":"bcㄒㄧㄤ","亍":"caㄔㄨˋ","于":"ceㄩˊ","亏":"cbㄎㄨㄟ","亡":"bcㄨㄤˊ","亿":"aeㄧˋ","兀":"beㄨˋ","凡":"ccㄈㄢˊ","刃":"caㄖㄣˋ","勺":"cdㄕㄠˊ","千":"aaㄑㄧㄢ","卫":"beㄨㄟˋ","口":"cbㄎㄡˇ","囗":"cfㄨㄟˊ","土":"ceㄊㄨˇ","士":"baㄕˋ","夕":"caㄒㄧ","大":"cdㄉㄚ","女":"cfˇ","子":"ccㄗˋ","孑":"cbㄐㄧㄝˊ","孓":"cdㄐㄩㄝˊ","寸":"caㄘㄨㄣˋ","小":"caㄒㄧㄠˇ","尢":"ceㄨㄤ","尸":"caㄕ","山":"ceㄕㄢ","巛":"caㄔㄨㄢ","川":"caㄔㄨㄢ","工":"cbㄍㄨㄥ","己":"ceㄐㄧˇ","已":"cbㄧˇ","巳":"cdㄙˋ","巾":"cbㄐㄧㄣ","干":"cbㄍㄢˋ","幺":"cdㄧㄠ","广":"cbㄢ","廾":"cfㄍㄨㄥˇ","弋":"cdㄧˋ","弓":"cbㄍㄨㄥ","才":"caㄘㄞˊ","门":"ccㄇㄣˊ","飞":"ccㄈㄟ","马":"ccㄇㄚˇ","与":"beㄩˊ","之":"cdㄓ","及":"bbㄐㄧˊ","不":"cfㄅㄨˋ","丐":"abㄍㄞˋ","丑":"adㄔㄡˇ","专":"caㄓㄨㄢ","中":"cdㄓㄨㄥˋ","丰":"cdㄈㄥ","丹":"cdㄉㄢ","为":"beㄨㄟˊ","乌":"cdㄨˋ","书":"caㄕㄨ","予":"ceㄩˊ","云":"ccㄩㄣˊ","互":"ccㄏㄨˋ","亓":"cbㄑㄧˊ","五":"bbㄨˇ","井":"cdㄐㄧㄥˇ","亢":"cbㄎㄤˋ","什":"baㄕㄣˊ","仁":"baㄖㄣˊ","仂":"adㄌㄜˋ","仃":"adㄉㄧㄥ","仄":"baㄗㄜˋ","仅":"cbㄐㄧㄣˋ","仆":"acㄆㄨˊ","仉":"adㄓㄤ","今":"bbㄐㄧㄣ","介":"cbㄐㄧㄝˋ","仍":"aaㄖㄥˊ","从":"bdㄘㄨㄥˊ","仑":"bdㄌㄩㄣˊ","仓":"caㄘㄤ","允":"beㄩㄣˇ","元":"cbㄩㄢˊ","公":"bbㄍㄨㄥ","六":"bdㄌㄧㄡˋ","兮":"baㄒㄧ","内":"bdㄋㄚˋ","冈":"ccㄍㄤ","冗":"caㄖㄨㄥˇ","凤":"bcㄈㄥˋ","凶":"ccㄒㄩㄥ","分":"bcㄈㄣˋ","切":"aeㄑㄧㄝˋ","刈":"aaㄧˋ","劝":"cbㄑㄩㄢˋ","办":"acㄅㄢˋ","勾":"bbㄍㄡˋ","勿":"ccㄨˋ","匀":"bbㄩㄣˊ","化":"bcㄏㄨㄚˋ","匹":"bcㄆㄧˇ","区":"bbㄡ","卅":"ccㄙㄚˋ","升":"caㄕㄥ","午":"cdㄨˇ","卞":"cfㄅㄧㄢˋ","厄":"beㄜˇ","厅":"adㄊㄧㄥ","历":"adㄌㄧˋ","友":"beㄧㄡˇ","双":"caㄕㄨㄤ","反":"bcㄈㄢˇ","壬":"ccㄖㄣˊ","天":"cdㄊㄧㄢ","太":"cdㄊㄞˋ","夫":"ccㄈㄨˊ","夭":"ceㄠˇ","孔":"bbㄎㄨㄥˇ","少":"aaㄕㄠˇ","尤":"aeㄧㄡˊ","尹":"beㄧㄣˇ","尺":"bdㄔㄜˇ","屯":"bdㄊㄨㄣˊ","巴":"ccㄅㄚ","幻":"bcㄏㄨㄢˋ","廿":"bbㄋㄧㄢˋ","开":"bbㄎㄞ","引":"ceㄧㄣˇ","心":"caㄒㄧㄣ","忆":"aeㄧˋ","戈":"caㄍㄜ","户":"ccㄏㄨˋ","手":"caㄕㄡˇ","扎":"aaㄗㄚ","支":"cdㄓ","攴":"ccㄆㄨ","攵":"cfㄆㄨ","文":"ccㄨㄣˊ","斗":"cdㄉㄡˋ","斤":"bbㄐㄧㄣ","方":"ccㄈㄤ","无":"bcㄇㄛˊ","日":"cdㄖˋ","曰":"ceㄩㄝ","月":"cbㄩㄝˋ","木":"cbㄇㄨˋ","欠":"cbㄑㄧㄢˋ","止":"cdㄓˇ","歹":"ccㄉㄞˇ","殳":"caㄕㄨ","毋":"acㄨˊ","比":"bcㄅㄧˇ","毛":"ccㄇㄠˊ","氏":"caㄕˋ","气":"cbㄑㄧˋ","水":"ccㄕㄨㄟˇ","火":"cdㄏㄨㄛˇ","爪":"caㄓㄠˇ","父":"ccㄈㄨˋ","爻":"cdㄧㄠˊ","爿":"ccㄆㄢˊ","片":"ccㄆㄧㄢˋ","牙":"cbㄧㄚˊ","牛":"cbㄋㄧㄡˊ","犬":"cbㄑㄩㄢˇ","王":"beㄨㄤˊ","瓦":"ceㄨㄚˋ","肀":"cfㄩˋ","艺":"abㄧˋ","见":"bbㄐㄧㄢˋ","计":"bcㄐㄧˋ","订":"adㄉㄧㄥˋ","讣":"acㄈㄨˋ","认":"aaㄖㄣˋ","讥":"cbㄐㄧ","贝":"ccㄅㄟˋ","车":"caㄔㄜ","邓":"cdㄉㄥˋ","长":"cdㄔㄤˊ","闩":"caㄕㄨㄢ","队":"adㄉㄨㄟˋ","韦":"aeㄨㄟˊ","风":"acㄈㄥˋ","乏":"caㄈㄚˊ","以":"ceㄧˇ","巨":"cfㄐㄩˋ","巿":"ccㄈㄨˊ","冇":"ccㄇㄠˇ","讬":"cdㄊㄨㄛ","且":"caㄐㄩ","丕":"acㄆㄧ","世":"caㄕˋ","丘":"cbㄑㄧㄡ","丙":"cdㄅㄧㄥˇ","业":"bbㄧㄝˋ","丛":"adㄘㄨㄥˊ","东":"cbㄉㄨㄥ","丝":"baㄙ","主":"caㄓㄨˋ","乍":"baㄓㄚˋ","乎":"bcㄏㄨ","乐":"cdㄌㄜˋ","仔":"aeㄗㄞˇ","仕":"aaㄕˋ","他":"adㄊㄚ","仗":"adㄓㄤˋ","付":"bcㄈㄨˋ","仙":"baㄒㄧㄢ","仝":"cdㄊㄨㄥˊ","仞":"aaㄖㄣˋ","仟":"aaㄑㄧㄢ","仡":"abㄍㄜ","代":"bdㄉㄞˋ","令":"bdㄌㄧㄥˊ","仨":"acㄙㄚ","仪":"abㄧˊ","仫":"ccㄇㄨˋ","们":"ac","兄":"bcㄒㄩㄥ","兰":"cbㄌㄢˊ","冉":"cdㄖㄢˇ","册":"caㄘㄜˋ","写":"ccㄒㄧㄝˋ","冬":"bdㄉㄨㄥ","冯":"acㄈㄥˊ","凸":"caㄊㄨ","凹":"ceㄠ","出":"baㄔㄨ","击":"cbㄐㄧ","刊":"aaㄎㄢ","刍":"baㄔㄨˊ","功":"abㄍㄨㄥ","加":"bbㄐㄧㄚ","务":"acㄨˋ","劢":"acㄇㄞˋ","包":"acㄅㄠ","匆":"ccㄘㄨㄥ","北":"bcㄅㄟˇ","匝":"bcㄗㄚ","卉":"cbㄏㄨㄟˋ","半":"bcㄅㄢˋ","卟":"acㄅㄨˇ","占":"baㄓㄢˋ","卡":"bbㄎㄚˇ","卢":"adㄌㄩˊ","卮":"caㄓ","卯":"cbㄇㄠˇ","厉":"cdㄌㄧˋ","去":"cbㄑㄩˋ","发":"acㄈㄚˋ","古":"bbㄍㄨˇ","句":"cfㄍㄡ","另":"bdㄌㄧㄥˋ","叨":"adㄉㄠ","叩":"abㄎㄡˋ","只":"cdㄓˇ","叫":"abㄐㄧㄠˋ","召":"adㄓㄠˋ","叭":"acㄅㄚˋ","叮":"adㄉㄧㄥ","可":"bbㄎㄜˋ","台":"adㄊㄞˊ","叱":"aaㄔˋ","史":"baㄕˇ","右":"beㄧㄡˋ","叵":"bcㄆㄛˇ","叶":"beㄕㄜˋ","号":"bcㄏㄠˋ","司":"baㄙ","叹":"cdㄊㄢˋ","叻":"adㄌㄜˋ","叼":"aaㄉㄧㄠ","叽":"abㄐㄧ","囚":"bbㄑㄧㄡˊ","四":"baㄙˋ","圣":"ceㄕㄥˋ","处":"aaㄔㄨˊ","外":"bbㄨㄞˋ","央":"beㄧㄤ","夯":"bcㄅㄣˋ","失":"caㄕ","头":"cdㄊㄡˊ","奴":"bdㄋㄩˊ","奶":"adㄋㄞˇ","孕":"beㄩㄣˋ","宁":"cdㄋㄧㄥˊ","它":"cdㄊㄚ","宄":"abㄍㄨㄟˇ","对":"bdㄉㄨㄟˋ","尔":"cdㄦˇ","尕":"bbㄍㄚˇ","尻":"caㄎㄠ","尼":"bdㄋㄧˊ","左":"bdㄗㄨㄛˇ","巧":"abㄑㄧㄠˇ","市":"baㄕˋ","布":"acㄅㄨˋ","帅":"aaㄕㄨㄞˋ","平":"bcㄆㄧㄥˊ","幼":"beㄧㄡˋ","庀":"acㄆㄧˇ","弁":"bfㄅㄧㄢˋ","弗":"ccㄈㄨˊ","弘":"acㄏㄨㄥˊ","归":"cbㄍㄨㄟ","必":"bcㄅㄧˋ","忉":"adㄉㄠ","戊":"aeㄨˋ","戋":"baㄐㄧㄢ","扑":"acㄆㄨ","扒":"acㄆㄚˊ","打":"adㄉㄚˊ","扔":"aaㄖㄥ","斥":"caㄔˋ","旦":"cdㄉㄢˋ","旧":"cbㄐㄧㄡˋ","未":"cbㄨㄟˋ","末":"ccㄇㄛˋ","本":"cbㄅㄣˇ","札":"abㄓㄚˊ","术":"cbㄕㄨˋ","正":"caㄓㄥˋ","母":"ccㄇㄨˇ","氐":"bdㄉㄧˇ","民":"ccㄇㄧㄣˊ","氕":"bcㄆㄧㄝ","永":"ceㄩㄥˇ","汀":"acㄊㄧㄥ","汁":"acㄓ","汇":"ccㄏㄨㄟˋ","汉":"ccㄏㄢˋ","灭":"acㄇㄧㄝˋ","犯":"acㄈㄢˋ","犰":"abㄑㄧㄡˊ","玄":"ccㄒㄩㄢˊ","玉":"cbㄩˋ","瓜":"cbㄍㄨㄚ","甘":"cbㄍㄢ","生":"baㄕㄥ","用":"ceㄩㄥˋ","甩":"baㄕㄨㄞˇ","田":"cdㄊㄧㄢˊ","由":"ceㄧㄡˊ","甲":"cbㄐㄧㄚˊ","申":"caㄕㄣ","电":"adㄉㄧㄢˋ","疋":"bcㄧㄚˇ","白":"ccㄅㄞˊ","皮":"bcㄆㄧˊ","皿":"ccㄇㄧㄣˇ","目":"ccㄇㄨˋ","矛":"ccㄇㄠˊ","矢":"caㄕˇ","石":"caㄉㄢˋ","示":"baㄕˋ","礼":"adㄌㄧˇ","禾":"ccㄏㄜˊ","穴":"ccㄒㄩㄝˊ","立":"cdㄌㄧˋ","纠":"abㄐㄧㄡ","艽":"cbㄐㄧㄠ","艾":"aeㄞˋ","艿":"cbㄋㄞˇ","节":"aaㄐㄧㄝˊ","讦":"abㄐㄧㄝˊ","讧":"abㄏㄨㄥˋ","讨":"bdㄊㄠˇ","让":"adㄖㄤˋ","讪":"aaㄕㄢˋ","讫":"acㄑㄧˋ","训":"ccㄒㄩㄣˋ","议":"abㄧˋ","讯":"adㄒㄩㄣˋ","记":"abㄐㄧˋ","轧":"baㄍㄚˊ","边":"cfㄅㄧㄢ","辽":"adㄌㄧㄠˊ","邗":"ccㄏㄢˊ","邙":"acㄇㄤˊ","邛":"aaㄑㄩㄥˊ","邝":"abㄎㄨㄤˋ","钅":"cfㄐㄧㄣ","闪":"baㄕㄢˇ","阡":"aaㄑㄧㄢ","阢":"ceㄨˋ","饥":"abㄐㄧ","驭":"bbㄩˋ","鸟":"ceㄉㄧㄠˇ","龙":"cdㄌㄨㄥˊ","印":"bcㄧㄣˋ","戉":"caㄩㄝˋ","氹":"cdㄉㄤˋ","奵":"cdㄉㄧㄥˇ","丞":"baㄔㄥˊ","丢":"baㄉㄧㄡ","乒":"ccㄆㄧㄥ","乓":"cdㄆㄤ","乔":"abㄑㄧㄠˊ","乩":"abㄐㄧ","买":"ccㄇㄞˇ","争":"bdㄓㄥˋ","亘":"bdㄍㄣˋ","亚":"ceㄧㄚˋ","交":"cbㄐㄧㄠ","亥":"ccㄏㄞˋ","亦":"ceㄧˋ","产":"caㄔㄢˇ","仰":"cbㄤˊ","仲":"cdㄓㄨㄥˋ","仳":"acㄆㄧˇ","仵":"ceㄨˇ","件":"bbㄐㄧㄢˋ","价":"abㄐㄧㄚˋ","任":"aaㄖㄣˊ","份":"acㄈㄣˋ","仿":"acㄈㄤˇ","企":"bbㄑㄧˇ","伉":"abㄎㄤˋ","伊":"aeㄧ","伍":"beㄨˇ","伎":"abㄐㄧˋ","伏":"bcㄈㄨˊ","伐":"bcㄈㄚˊ","休":"bcㄒㄧㄡ","众":"baㄓㄨㄥˋ","优":"aeㄧㄡ","伙":"adㄏㄨㄛˇ","会":"bcㄏㄨㄟˋ","伛":"aaㄩˇ","伞":"caㄙㄢˇ","伟":"aeㄨㄟˇ","传":"adㄔㄨㄢˊ","伢":"ceㄧㄚˊ","伤":"aaㄕㄤ","伥":"aaㄔㄤ","伦":"adㄌㄩㄣˊ","伧":"aaㄘㄤ","伪":"abㄨㄟˇ","伫":"baㄓㄨˋ","佤":"adㄨㄚˇ","充":"aeㄔㄨㄥ","兆":"cdㄓㄠˋ","先":"baㄒㄧㄢ","光":"bdㄍㄨㄤ","全":"bdㄑㄩㄢˊ","共":"cbㄍㄨㄥˋ","关":"abㄍㄨㄢ","兴":"ccㄒㄧㄥˋ","再":"baㄗㄞˋ","军":"bbㄐㄩㄣ","农":"cdㄋㄨㄥˊ","冰":"bcㄅㄧㄥ","冱":"ccㄏㄨˋ","冲":"aaㄔㄨㄥˋ","决":"adㄐㄩㄝˊ","凫":"bcㄈㄨˊ","凼":"bcㄉㄤˋ","刎":"caㄨㄣˇ","刑":"acㄒㄧㄥˊ","划":"baㄏㄨㄚˊ","刖":"aaㄩㄝˋ","列":"aaㄌㄧㄝˋ","刘":"cdㄌㄧㄡˊ","则":"baㄗㄜˊ","刚":"aaㄍㄤ","创":"aaㄔㄨㄤˋ","劣":"bdㄌㄧㄝˋ","动":"adㄉㄨㄥˋ","匈":"caㄒㄩㄥ","匠":"cdㄐㄧㄤˋ","匡":"abㄎㄨㄤ","华":"acㄏㄨㄚˊ","协":"bcㄒㄧㄝˊ","危":"bcㄨㄟ","压":"ceㄧㄚˋ","厌":"abㄧㄚ","厍":"aaㄕㄜˋ","吁":"abㄒㄩ","吃":"adㄔ","各":"bbㄍㄜˋ","吆":"adㄧㄠ","合":"bcㄍㄜˇ","吉":"bbㄐㄧˊ","吊":"cdㄉㄧㄠˋ","同":"bdㄊㄨㄥˊ","名":"bcㄇㄧㄥˊ","后":"bcㄏㄡˋ","吏":"baㄌㄧˋ","吐":"aeㄊㄨˋ","向":"bcㄒㄧㄤˋ","吒":"aaㄓㄚ","吓":"abㄏㄜˋ","吕":"cfㄌㄩˇ","吖":"ceㄚ","吗":"acㄇㄚˊ","囝":"bbㄐㄧㄢˇ","回":"ccㄏㄨㄟˊ","囟":"caㄒㄧㄣˋ","因":"beㄧㄣ","囡":"bdㄋㄢ","团":"cdㄊㄨㄢˊ","在":"aaㄗㄞˋ","圩":"aeㄨㄟˊ","圪":"aeㄍㄜ","圬":"aeㄨ","圭":"beㄍㄨㄟ","圮":"aeㄆㄧˇ","圯":"ceㄧˊ","地":"aeㄉㄧˋ","圳":"beㄓㄣˋ","圹":"aeㄎㄨㄤˋ","场":"adㄔㄤˊ","圾":"aeㄐㄧ","壮":"aaㄓㄨㄤˋ","夙":"baㄙㄨˋ","多":"bdㄉㄨㄛ","夷":"ceㄧˊ","夸":"abㄎㄨㄚ","夹":"cbㄍㄚ","夺":"bdㄉㄨㄛˊ","夼":"bbㄎㄨㄤˇ","奸":"bbㄍㄢ","她":"adㄊㄚ","好":"bcㄏㄠˋ","妁":"aaㄕㄨㄛˋ","如":"baㄖㄨˊ","妃":"acㄈㄟ","妄":"adㄨㄤˋ","妆":"aaㄓㄨㄤ","妇":"bcㄈㄨˋ","妈":"acㄇㄚ","字":"aaㄗˋ","存":"aaㄘㄨㄣˊ","孙":"aaㄙㄨㄣ","宅":"adㄓㄞˊ","宇":"aeㄩˇ","守":"baㄕㄡˇ","安":"beㄢ","寺":"aaㄙˋ","寻":"cdㄒㄩㄣˊ","导":"adㄉㄠˇ","尖":"bdㄐㄧㄢ","尘":"bdㄔㄣˊ","尥":"bdㄌㄧㄠˋ","尧":"cbㄧㄠˊ","尽":"cdㄐㄧㄣˋ","屹":"aeㄧˋ","屺":"aeㄑㄧˇ","屿":"aeㄩˇ","岁":"caㄙㄨㄟˋ","岂":"cbㄑㄧˇ","岌":"aeㄐㄧˊ","州":"baㄓㄡ","巡":"aaㄒㄩㄣˊ","巩":"abㄍㄨㄥˇ","帆":"acㄈㄢ","师":"baㄕ","年":"adㄋㄧㄢˊ","并":"ccㄅㄧㄥˋ","庄":"caㄓㄨㄤ","庆":"cbㄑㄧㄥˋ","延":"aeㄧㄢˊ","廷":"adㄊㄧㄥˊ","异":"beㄧˋ","式":"aaㄕˋ","弛":"adㄔˊ","当":"adㄉㄤˋ","忏":"aaㄔㄢˋ","忖":"aaㄘㄨㄣˇ","忙":"acㄇㄤˊ","戌":"ceㄒㄩ","戍":"beㄕㄨˋ","戎":"bbㄖㄨㄥˊ","戏":"caㄏㄨ","成":"baㄔㄥˊ","托":"adㄊㄨㄛ","扛":"abㄍㄤ","扣":"abㄎㄡˋ","扦":"abㄑㄧㄢ","执":"bdㄓˊ","扩":"bbㄎㄨㄛˋ","扪":"acㄇㄣˊ","扫":"baㄙㄠˋ","扬":"adㄧㄤˊ","收":"acㄕㄡ","旨":"bdㄓˇ","早":"baㄗㄠˇ","旬":"baㄒㄩㄣˊ","旭":"abㄒㄩˋ","旮":"bdㄍㄚ","旯":"bdㄌㄚˊ","曲":"cbㄑㄩˇ","曳":"aaㄧㄝˋ","有":"beㄧㄡˋ","朱":"cbㄓㄨ","朴":"abㄆㄧㄠˊ","朵":"cbㄉㄨㄛˇ","机":"abㄐㄧ","朽":"abㄒㄧㄡˇ","杂":"ccㄗㄚˊ","权":"cbㄑㄩㄢˊ","次":"aaㄘˋ","欢":"acㄏㄨㄢ","此":"baㄘˇ","毕":"bcㄅㄧˋ","氖":"adㄋㄞˇ","氘":"adㄉㄠ","氽":"bdㄊㄨㄣˇ","汆":"caㄘㄨㄢ","汊":"acㄔㄚˋ","汐":"acㄒㄧ","汔":"acㄑㄧˋ","汕":"acㄕㄢˋ","汗":"acㄏㄢˊ","汛":"acㄒㄩㄣˋ","汜":"acㄙˋ","汝":"acㄖㄨˇ","江":"acㄐㄧㄤ","池":"acㄔˊ","污":"acㄨ","汤":"acㄕㄤ","汲":"acㄐㄧˊ","灯":"adㄉㄥ","灰":"beㄏㄨㄟ","爷":"ceㄧㄝˊ","牝":"acㄆㄧㄣˋ","牟":"bcㄇㄡˊ","犴":"cdㄢˋ","犷":"abㄍㄨㄤˇ","犸":"acㄇㄚˇ","玎":"adㄉㄧㄥ","玑":"abㄐㄧ","百":"bcㄅㄞˇ","祁":"abㄑㄧˊ","竹":"cbㄓㄨˊ","米":"ccㄇㄧˇ","糸":"ccㄇㄧˋ","纡":"aeㄩ","红":"acㄍㄨㄥ","纣":"bdㄓㄡˋ","纤":"aaㄑㄧㄢˋ","纥":"abㄍㄜ","约":"aeㄧㄠ","级":"abㄐㄧˊ","纨":"adㄨㄢˊ","纩":"abㄎㄨㄤˋ","纪":"abㄐㄧˋ","纫":"aaㄖㄣˋ","缶":"ccㄈㄡˇ","网":"ccㄨㄤˇ","羊":"ceㄧㄤˊ","羽":"ceㄩˇ","老":"cdㄌㄠˇ","考":"abㄎㄠˇ","而":"caㄦˊ","耒":"cdㄌㄟˇ","耳":"cdㄦˇ","聿":"cbㄩˋ","肉":"cdㄖㄡˋ","肋":"adㄌㄜ","肌":"abㄐㄧ","臣":"caㄔㄣˊ","自":"cdㄗˋ","至":"bdㄓˋ","臼":"cbㄐㄧㄡˋ","舌":"caㄕㄜˊ","舛":"baㄔㄨㄢˇ","舟":"caㄓㄡ","艮":"ceㄍㄣˋ","色":"baㄙㄜˋ","芄":"abㄨㄢˊ","芊":"abㄑㄧㄢ","芋":"abㄩˋ","芍":"abㄑㄩㄝˋ","芎":"abㄒㄩㄥ","芏":"abㄉㄨˋ","芑":"abㄑㄧˇ","芒":"abㄇㄤˊ","芗":"bbㄒㄧㄤ","芝":"abㄓ","芨":"cbㄐㄧ","虍":"cfㄏㄨ","虫":"bdㄔㄨㄥˊ","血":"ccㄒㄧㄝˇ","行":"bcㄏㄤˊ","衣":"ceㄧ","西":"caㄒㄧ","观":"abㄍㄨㄢˋ","讲":"abㄐㄧㄤˇ","讳":"acㄏㄨㄟˋ","讴":"aeㄡ","讵":"afㄐㄩˋ","讶":"aeㄧㄚˋ","讷":"bdㄋㄜˋ","许":"abㄒㄩˇ","讹":"acㄜˊ","论":"adㄌㄩㄣˊ","讼":"aaㄙㄨㄥˋ","讽":"acㄈㄥˇ","设":"baㄕㄜˋ","访":"acㄈㄤˇ","诀":"adㄐㄩㄝˊ","贞":"bdㄓㄣ","负":"bcㄈㄨˋ","轨":"abㄍㄨㄟˇ","达":"adㄉㄚˊ","迁":"aaㄑㄧㄢ","迂":"aeㄩ","迄":"acㄑㄧˋ","迅":"adㄒㄩㄣˋ","过":"abㄍㄨㄛˋ","迈":"acㄇㄞˋ","邡":"acㄈㄤ","邢":"baㄒㄧㄥˊ","那":"adㄋㄚˋ","邦":"acㄅㄤ","邪":"acㄒㄧㄝˊ","邬":"ceㄨ","钆":"aaㄍㄚˊ","钇":"caㄧˇ","闫":"ceㄧㄢˊ","闭":"bcㄅㄧˋ","问":"aaㄨㄣˋ","闯":"bcㄔㄨㄤˇ","阪":"ccㄅㄢˇ","阮":"abㄖㄨㄢˇ","阱":"cbㄐㄧㄥˇ","防":"acㄈㄤˊ","阳":"ceㄧㄤˊ","阴":"aeㄧㄣ","阵":"bdㄓㄣˋ","阶":"abㄐㄧㄝ","页":"caㄧㄝˋ","饧":"cdㄒㄧㄥˊ","驮":"adㄉㄨㄛˇ","驯":"aaㄒㄩㄣˋ","驰":"adㄔˊ","齐":"caㄐㄧˋ","似":"aeㄙˋ","吸":"aaㄒㄧ","芃":"bbㄆㄥˊ","邨":"cdㄘㄨㄣ","吋":"adㄉㄡˋ","贠":"caㄩㄢˊ","孖":"bcㄇㄚ","屾":"ceㄕㄣ","叒":"caㄖㄨㄛˋ","玏":"cdㄌㄜˋ","岀":"caㄔㄨ","甪":"cdㄌㄩˋ","两":"cdㄌㄧㄤˇ","严":"abㄧㄢˊ","串":"caㄔㄨㄢˋ","丽":"adㄌㄧˊ","乱":"cdㄌㄨㄢˋ","亨":"ccㄏㄥ","亩":"ccㄇㄨˇ","伯":"acㄅㄚˋ","估":"abㄍㄨˋ","伲":"cbㄋㄧˋ","伴":"acㄅㄢˋ","伶":"adㄌㄧㄥˊ","伸":"aaㄕㄣ","伺":"aaㄘˋ","伽":"abㄍㄚ","佃":"adㄉㄧㄢˋ","但":"adㄉㄢˋ","位":"beㄨㄟˋ","低":"adㄉㄧ","住":"adㄓㄨˋ","佐":"aaㄗㄨㄛˇ","佑":"aeㄧㄡˋ","体":"bdㄊㄧˇ","何":"abㄏㄜˊ","佗":"adㄊㄨㄛˊ","佘":"baㄕㄜˊ","余":"aeㄩˊ","佚":"ceㄧˋ","佛":"acㄈㄛˊ","作":"baㄗㄨㄛˋ","佝":"acㄍㄡ","佞":"bdㄋㄧㄥˋ","佟":"adㄊㄨㄥˊ","你":"abㄋㄧˇ","佣":"aeㄩㄥˋ","佥":"cbㄑㄧㄢ","佧":"abㄎㄚˇ","克":"cbㄎㄜˋ","免":"bdㄇㄧㄢˇ","兑":"aaㄉㄨㄟˋ","兕":"caㄙˋ","兵":"bcㄅㄧㄥ","况":"acㄎㄨㄤˋ","冶":"aeㄧㄝˇ","冷":"acㄌㄥˇ","冻":"adㄉㄨㄥˋ","初":"baㄔㄨ","删":"aaㄕㄢ","判":"aaㄆㄢˋ","刨":"aaㄅㄠˋ","利":"bdㄌㄧˋ","别":"bcㄅㄧㄝˊ","刭":"caㄐㄧㄥˇ","助":"aaㄔㄨˊ","努":"adㄋㄩˇ","劫":"bbㄐㄧㄝˊ","劬":"abㄑㄩˊ","劭":"aaㄕㄠˋ","励":"adㄌㄧˋ","劲":"abㄐㄧㄣˋ","劳":"bdㄌㄠˊ","匣":"abㄒㄧㄚˊ","医":"beㄧ","卣":"ceㄧㄡˇ","卤":"cdㄌㄩˇ","即":"bcㄐㄧˊ","却":"abㄑㄩㄝˋ","卵":"cdㄌㄨㄢˇ","县":"cbㄒㄧㄢˋ","君":"bbㄐㄩㄣ","吝":"adㄌㄧㄣˋ","吞":"adㄊㄨㄣ","吟":"abㄧㄣˊ","吠":"bcㄈㄟˋ","吡":"acㄅㄧˇ","吣":"aaㄑㄧㄣˋ","否":"bcㄈㄡˇ","吧":"acㄅㄚ","吨":"adㄉㄨㄣ","吩":"acㄈㄣ","含":"acㄏㄢˊ","听":"adㄊㄧㄥ","吭":"adㄏㄤˊ","吮":"aaㄕㄨㄣˇ","启":"bbㄑㄧˇ","吱":"aaㄗ","吲":"aeㄧㄣˇ","吴":"bbㄨˊ","吵":"aaㄔㄠˇ","吹":"aaㄔㄨㄟ","吻":"aaㄨㄣˇ","吼":"abㄏㄡˇ","吾":"abㄨˊ","呀":"aeㄧㄚ","呃":"abㄜˇ","呆":"bcㄉㄞ","呈":"adㄔㄥˊ","告":"bbㄍㄠˋ","呋":"acㄈㄨ","呐":"adㄋㄚˋ","呒":"cc","呓":"ceㄧˋ","呔":"adㄉㄞ","呕":"aeㄡˇ","呖":"adㄌㄧˋ","呗":"acㄅㄞˋ","员":"beㄩㄢˊ","呙":"abㄍㄨㄛ","呛":"abㄑㄧㄤˋ","呜":"aeㄨ","囤":"adㄉㄨㄣˋ","囫":"acㄏㄨˊ","园":"aeㄩㄢˊ","困":"bbㄎㄨㄣˋ","囱":"baㄘㄨㄥ","围":"aeㄨㄟˊ","囵":"adㄌㄩㄣˊ","圻":"aeㄑㄧˊ","址":"aeㄓˇ","坂":"aeㄅㄢˇ","均":"aeㄐㄩㄣ","坊":"aeㄈㄤˊ","坌":"aeㄅㄣˋ","坍":"aeㄊㄢ","坎":"beㄎㄢˇ","坏":"aeㄏㄨㄞˋ","坐":"baㄗㄨㄛˋ","坑":"aeㄎㄥ","块":"aeㄎㄨㄞˋ","坚":"bbㄐㄧㄢ","坛":"aeㄊㄢˊ","坜":"ceㄌㄧˋ","坝":"aeㄅㄚˋ","坞":"aeㄨˋ","坟":"aeㄈㄣˊ","坠":"aeㄓㄨㄟˋ","声":"aaㄕㄥ","壳":"cbㄎㄜˊ","奁":"bdㄌㄧㄢˊ","奂":"ccㄏㄨㄢˋ","妊":"aaㄖㄣˋ","妍":"acㄧㄢˊ","妒":"adㄉㄨˋ","妓":"abㄐㄧˋ","妖":"adㄧㄠ","妗":"abㄐㄧㄣˋ","妙":"ccㄇㄧㄠˋ","妞":"acㄋㄧㄡ","妣":"acㄅㄧˇ","妤":"ccㄩˊ","妥":"bdㄊㄨㄛˇ","妨":"acㄈㄤˊ","妩":"abㄨˇ","妪":"abㄩˇ","妫":"abㄍㄨㄟ","姊":"adㄗˇ","姒":"caㄙˋ","孚":"bcㄈㄨˊ","孛":"bcㄅㄟˋ","孜":"aaㄗ","孝":"bcㄒㄧㄠˋ","宋":"baㄙㄨㄥˋ","完":"aeㄨㄢˊ","宏":"acㄏㄨㄥˊ","寿":"caㄕㄡˋ","尬":"abㄍㄚˋ","尾":"ccㄨㄟˇ","尿":"bcㄋㄧㄠˋ","局":"bfㄐㄩˊ","屁":"acㄆㄧˋ","层":"adㄘㄥˊ","岈":"aeㄧㄚˊ","岍":"aeㄑㄧㄢ","岐":"aeㄑㄧˊ","岑":"abㄘㄣˊ","岔":"baㄔㄚˋ","岖":"ceㄑㄩ","岗":"aeㄍㄤˋ","岘":"aeㄒㄧㄢˋ","岙":"aeㄠˋ","岚":"aeㄌㄢˊ","岛":"adㄉㄠˇ","岜":"aeㄅㄚ","希":"bcㄒㄧ","帏":"aeㄨㄟˊ","帐":"adㄓㄤˋ","庇":"acㄅㄧˋ","床":"bbㄔㄨㄤˊ","庋":"bbㄍㄨㄟˇ","序":"aaㄒㄩˋ","庐":"adㄌㄩˊ","庑":"aeㄨˇ","库":"bbㄎㄨˋ","应":"ceㄧㄥˋ","弃":"cbㄑㄧˋ","弄":"bdㄌㄨㄥˋ","弟":"cdㄉㄧˋ","张":"adㄓㄤˋ","形":"acㄒㄧㄥˊ","彤":"bdㄊㄨㄥˊ","彷":"acㄈㄤˇ","役":"beㄧˋ","彻":"adㄔㄜˋ","忌":"abㄐㄧˋ","忍":"aaㄖㄣˇ","忐":"bdㄊㄢˇ","忑":"bdㄊㄜˋ","忒":"aaㄊㄜˋ","志":"adㄓˋ","忘":"acㄨㄤˋ","忡":"aaㄔㄨㄥ","忤":"aeㄨˇ","忧":"aeㄧㄡ","忪":"aaㄙㄨㄥ","快":"abㄎㄨㄞˋ","忭":"afㄅㄧㄢˋ","忮":"caㄓˋ","忱":"aaㄔㄣˊ","忸":"acㄋㄧㄡˇ","忻":"acㄒㄧㄣ","忾":"abㄎㄞˋ","怀":"acㄏㄨㄞˊ","怃":"aeㄨˇ","怄":"aeㄡˋ","怅":"aaㄔㄤˋ","怆":"aaㄔㄨㄤˋ","我":"bbㄨㄛˇ","戒":"bcㄐㄧㄝˋ","扭":"acㄋㄧㄡˇ","扮":"acㄅㄢˋ","扯":"aaㄔㄜˇ","扰":"acㄖㄠˇ","扳":"acㄅㄢ","扶":"acㄈㄨˊ","批":"acㄆㄧ","扼":"abㄜˇ","找":"bdㄓㄠˇ","技":"abㄐㄧˋ","抄":"aaㄔㄠ","抉":"cdㄐㄩㄝˊ","把":"acㄅㄚˋ","抑":"beㄧˋ","抒":"aaㄕㄨ","抓":"aaㄓㄨㄚ","投":"bdㄊㄡˊ","抖":"adㄉㄡˇ","抗":"abㄎㄤˋ","折":"bdㄕㄜˊ","抚":"acㄈㄨˇ","抛":"acㄆㄠ","抟":"adㄊㄨㄢˊ","抠":"abㄎㄡ","抡":"adㄌㄩㄣˊ","抢":"aaㄑㄧㄤˇ","护":"acㄏㄨˋ","报":"bcㄅㄠˋ","拒":"afㄐㄩˋ","拟":"abㄋㄧˇ","攸":"beㄧㄡ","改":"bbㄍㄞˇ","攻":"abㄍㄨㄥ","旰":"cdㄍㄢˋ","旱":"abㄏㄢˋ","时":"caㄕˊ","旷":"abㄎㄨㄤˋ","更":"bbㄍㄥˋ","杆":"abㄍㄢˇ","杈":"abㄔㄚˋ","杉":"abㄕㄚ","杌":"abㄨˋ","李":"bbㄌㄧˇ","杏":"cbㄒㄧㄥˋ","材":"abㄘㄞˊ","村":"abㄘㄨㄣ","杓":"cbㄅㄧㄠ","杖":"abㄓㄤˋ","杜":"abㄉㄨˋ","杞":"abㄑㄧˇ","束":"baㄕㄨˋ","杠":"abㄍㄤˋ","条":"adㄊㄧㄠˊ","来":"cdㄌㄞˊ","杨":"abㄧㄤˊ","杩":"cbㄇㄚˋ","极":"abㄐㄧˊ","欤":"aeㄩˊ","步":"bcㄅㄨˋ","歼":"abㄐㄧㄢ","每":"acㄇㄟˇ","氙":"aeㄒㄧㄢ","氚":"aaㄔㄨㄢ","求":"cdㄑㄧㄡˊ","汞":"acㄍㄨㄥˇ","汨":"acㄇㄧˋ","汩":"acㄍㄨˇ","汪":"acㄨㄤ","汰":"acㄊㄞˋ","汴":"afㄅㄧㄢˋ","汶":"acㄇㄣˊ","汹":"acㄒㄩㄥ","汽":"acㄑㄧˋ","汾":"acㄈㄣˊ","沁":"acㄑㄧㄣˋ","沂":"bcㄧˊ","沃":"acㄨㄛˋ","沅":"acㄩㄢˊ","沆":"acㄏㄤˋ","沈":"acㄕㄣˇ","沉":"acㄔㄣˊ","沌":"acㄉㄨㄣˋ","沏":"acㄑㄧ","沐":"acㄇㄨˋ","沔":"acㄇㄧㄢˇ","沙":"bcㄕㄚˋ","沛":"acㄆㄟˋ","沟":"acㄍㄡ","没":"bcㄇㄟˊ","沣":"acㄈㄥ","沤":"acㄡˋ","沥":"acㄌㄧˋ","沦":"acㄌㄩㄣˊ","沧":"acㄘㄤ","沩":"acㄨㄟˊ","沪":"acㄏㄨˋ","泐":"acㄌㄜˋ","泛":"acㄈㄢˋ","灵":"adㄌㄧㄥˊ","灶":"bdㄗㄠˋ","灸":"adㄐㄧㄡˇ","灼":"adㄓㄨㄛˊ","灾":"bdㄗㄞ","灿":"adㄘㄢˋ","炀":"adㄧㄤˊ","牡":"aeㄇㄨˇ","牢":"bdㄌㄠˊ","状":"acㄓㄨㄤˋ","犹":"aeㄧㄡˊ","狁":"ceㄩㄣˇ","狂":"abㄎㄨㄤˊ","狃":"acㄋㄧㄡˇ","狄":"adㄉㄧˊ","狈":"acㄅㄟˋ","玖":"abㄐㄧㄡˇ","玛":"acㄇㄚˇ","甫":"ccㄈㄨˇ","甬":"aeㄩㄥˇ","男":"bdㄋㄢˊ","甸":"adㄉㄧㄢˋ","町":"adㄉㄧㄥ","疔":"adㄉㄧㄥ","疖":"abㄐㄧㄝ","疗":"adㄌㄧㄠˊ","皂":"baㄗㄠˋ","盯":"adㄉㄧㄥ","矣":"aeㄧˇ","矶":"aeㄐㄧ","社":"baㄕㄜˋ","祀":"aaㄙˋ","秀":"baㄒㄧㄡˋ","私":"aaㄙ","秃":"ceㄊㄨ","究":"abㄐㄧㄡ","穷":"cbㄑㄩㄥˊ","系":"baㄐㄧˋ","纬":"aeㄨㄟˇ","纭":"abㄩㄣˊ","纯":"aaㄔㄨㄣˊ","纰":"acㄆㄧˊ","纱":"acㄕㄚ","纲":"abㄍㄤ","纳":"adㄋㄚˋ","纵":"adㄗㄨㄥˋ","纶":"adㄍㄨㄢ","纷":"acㄈㄣ","纸":"aaㄓˇ","纹":"acㄨㄣˊ","纺":"acㄈㄤˇ","纽":"acㄋㄧㄡˇ","纾":"aaㄕㄨ","罕":"acㄏㄢˇ","羌":"cbㄑㄧㄤ","肓":"abㄏㄨㄤ","肖":"abㄒㄧㄠˋ","肘":"baㄓㄡˇ","肚":"aeㄉㄨˋ","肛":"abㄍㄤ","肜":"caㄖㄨㄥˊ","肝":"abㄍㄢ","肟":"adㄨㄛˋ","肠":"aaㄔㄤˊ","良":"bdㄌㄧㄤˊ","芈":"ccㄇㄧˇ","芘":"cbㄅㄧˋ","芙":"abㄈㄨˊ","芜":"abㄨˊ","芟":"bbㄕㄢ","芡":"abㄑㄧㄢˋ","芤":"abㄎㄡ","芥":"abㄍㄞˋ","芦":"abㄌㄩˊ","芩":"abㄑㄧㄣˊ","芪":"abㄑㄧˊ","芫":"abㄧㄢˊ","芬":"abㄈㄣ","芭":"abㄅㄚ","芮":"abㄖㄨㄟˋ","芯":"abㄒㄧㄣˋ","芰":"abㄐㄧˋ","花":"abㄏㄨㄚ","芳":"abㄈㄤ","芴":"abㄏㄨ","芷":"cbㄓˇ","芸":"abㄩㄣˊ","芹":"abㄑㄧㄣˊ","芽":"abㄧㄚˊ","芾":"abㄈㄟˋ","苁":"abㄘㄨㄥ","苄":"cfㄅㄧㄢˋ","苇":"abㄨㄟˇ","苈":"cbㄌㄧˋ","苊":"abㄜˇ","苋":"abㄒㄧㄢˋ","苌":"abㄔㄤˊ","苍":"abㄘㄤ","苎":"cbㄓㄨˋ","苏":"cbㄙㄨ","苡":"cbㄧˇ","苣":"afㄐㄩˋ","虬":"abㄑㄧㄡˊ","补":"acㄅㄨˇ","角":"cbㄐㄧㄠˇ","言":"cbㄧㄢˊ","证":"adㄓㄥˋ","诂":"abㄍㄨˇ","诃":"ccㄏㄜ","评":"acㄆㄧㄥˊ","诅":"aaㄗㄨˇ","识":"aaㄕˊ","诈":"aaㄓㄚˋ","诉":"aaㄙㄨˋ","诊":"adㄓㄣˇ","诋":"adㄉㄧˇ","诌":"aaㄓㄡ","词":"aaㄘˊ","诎":"abㄑㄩ","诏":"caㄓㄠˋ","译":"aaㄧˋ","诒":"aeㄧˊ","谷":"bbㄍㄨˇ","豆":"cdㄉㄡˋ","豕":"caㄕˇ","豸":"cdㄓˋ","贡":"abㄍㄨㄥˋ","财":"aaㄘㄞˊ","赤":"baㄔˋ","走":"baㄗㄡˇ","足":"bdㄗㄨˊ","身":"caㄕㄣ","轩":"aeㄒㄩㄢ","轫":"aaㄖㄣˋ","辛":"caㄒㄧㄣ","辰":"ceㄔㄣˊ","迎":"aeㄧㄥˊ","运":"aeㄩㄣˋ","近":"abㄐㄧㄣˋ","迓":"aeㄧㄚˋ","返":"acㄈㄢˇ","迕":"aeㄨˇ","还":"ccㄏㄞˊ","这":"cdㄓㄜˋ","进":"adㄐㄧㄣˋ","远":"aeㄩㄢˇ","违":"aeㄨㄟˊ","连":"bdㄌㄧㄢˊ","迟":"aaㄔˊ","邑":"beㄧˋ","邮":"aeㄧㄡˊ","邯":"acㄏㄢˊ","邰":"adㄊㄞˊ","邱":"abㄑㄧㄡ","邳":"acㄆㄧ","邴":"acㄅㄧㄥˇ","邵":"aaㄕㄠˋ","邶":"acㄅㄟˋ","邸":"adㄉㄧˇ","邹":"aaㄗㄡ","邺":"ceㄧㄝˋ","邻":"adㄌㄧㄣˊ","酉":"caㄧㄡˇ","里":"bdㄌㄧˇ","针":"baㄓㄣ","钉":"aaㄉㄧㄥˋ","钊":"baㄓㄠ","钋":"aaㄆㄛ","钌":"aaㄌㄧㄠˋ","闰":"bdㄖㄨㄣˋ","闱":"aeㄨㄟˊ","闲":"bcㄒㄧㄢˊ","闳":"cbㄏㄨㄥˊ","间":"bbㄐㄧㄢˋ","闵":"acㄇㄧㄣˇ","闶":"abㄎㄤˋ","闷":"acㄇㄣˋ","阻":"aaㄗㄨˇ","阼":"aaㄗㄨㄛˋ","阽":"adㄉㄧㄢˋ","阿":"aeㄚˋ","陀":"adㄊㄨㄛˊ","陂":"acㄅㄟ","附":"aeㄈㄨˋ","际":"adㄐㄧˋ","陆":"bdㄌㄧㄡˋ","陇":"cdㄌㄨㄥˇ","陈":"cdㄔㄣˊ","陉":"baㄒㄧㄥˊ","韧":"aaㄖㄣˋ","饨":"ad","饩":"aaㄒㄧˋ","饪":"aaㄖㄣˋ","饫":"cbㄩˋ","饬":"aaㄔˋ","饭":"ccㄈㄢˋ","饮":"beㄧㄣˋ","驱":"abㄑㄩ","驳":"bcㄅㄛˊ","驴":"cfㄌㄩˊ","鸠":"acㄐㄧㄡ","鸡":"bbㄐㄧ","麦":"ccㄇㄞˋ","龟":"cbㄍㄨㄟ","巫":"cdㄨ","囧":"bdㄐㄩㄥˇ","旸":"adㄧㄤˊ","佔":"cdㄓㄢˋ","飏":"caㄧㄤˊ","呎":"aaㄔˇ","釆":"cfㄅㄧㄢˋ","佈":"ccㄅㄨˋ","玙":"aeㄩˊ","囯":"cbㄍㄨㄛˊ","沕":"ccㄇㄧˋ","丧":"baㄙㄤˋ","乖":"bbㄍㄨㄞ","乳":"bdㄖㄨˇ","事":"aaㄕˋ","些":"baㄒㄧㄝ","亟":"bbㄐㄧˊ","享":"bcㄒㄧㄤˇ","京":"cbㄐㄧㄥ","佩":"bcㄆㄟˋ","佬":"adㄌㄠˇ","佯":"adㄧㄤˊ","佰":"adㄅㄞˇ","佳":"bbㄐㄧㄚ","佴":"adㄦˋ","佶":"cbㄐㄧˊ","佻":"adㄊㄧㄠ","佼":"abㄐㄧㄠˇ","佾":"beㄧˋ","使":"aaㄕˇ","侃":"baㄎㄢˇ","侄":"aaㄓˊ","侈":"adㄔˇ","侉":"abㄎㄨㄚˇ","例":"adㄌㄧˋ","侍":"adㄕˋ","侏":"aaㄓㄨ","侑":"aeㄧㄡˋ","侔":"acㄇㄡˊ","侗":"adㄉㄨㄥˋ","供":"abㄍㄨㄥˋ","依":"aeㄧˇ","侠":"abㄒㄧㄚˊ","侣":"cfㄌㄩˇ","侥":"abㄐㄧㄠˇ","侦":"adㄓㄣ","侧":"aaㄘㄜˋ","侨":"abㄑㄧㄠˊ","侩":"abㄎㄨㄞˋ","侪":"baㄔㄞˊ","侬":"adㄋㄨㄥˊ","兔":"caㄊㄨˋ","兖":"bbㄧㄢˇ","其":"cbㄐㄧ","具":"bfㄐㄩˋ","典":"bdㄉㄧㄢˇ","冼":"acㄒㄧㄢˇ","冽":"adㄌㄧㄝˋ","净":"aaㄐㄧㄥˋ","凭":"baㄆㄧㄥˊ","凯":"abㄎㄞˇ","函":"ccㄏㄢˊ","刮":"baㄍㄨㄚ","到":"adㄉㄠˋ","刳":"aaㄎㄨ","制":"cdㄓˋ","刷":"aaㄕㄨㄚˋ","券":"abㄑㄩㄢˋ","刹":"aaㄔㄚˋ","刻":"aaㄎㄜˋ","刽":"aaㄍㄨㄟˋ","刿":"aaㄍㄨㄟˋ","剀":"aaㄎㄞˇ","剁":"adㄉㄨㄛˇ","剂":"abㄐㄧˋ","劾":"ccㄏㄜˊ","势":"aaㄕˋ","匦":"abㄍㄨㄟˇ","卑":"bcㄅㄟ","卒":"baㄘㄨˋ","卓":"bdㄓㄨㄛˊ","单":"cdㄔㄢˊ","卖":"ccㄇㄞˋ","卦":"acㄍㄨㄚˋ","卷":"abㄐㄩㄢˋ","卺":"bbㄐㄧㄣˇ","厕":"aaㄘㄜˋ","叁":"aaㄙㄢ","参":"caㄘㄢ","取":"baㄑㄩˇ","呢":"abㄋㄧˊ","呦":"aeㄧㄡ","周":"caㄓㄡ","呱":"abㄍㄨ","味":"acㄨㄟˋ","呵":"acㄚ","呶":"cdㄋㄠˊ","呷":"abㄍㄚ","呸":"acㄆㄟ","呻":"aaㄕㄣ","呼":"acㄏㄨ","命":"bcㄇㄧㄥˋ","咀":"cfㄐㄩˇ","咂":"acㄗㄚ","咄":"adㄉㄨㄛ","咆":"acㄆㄠˊ","咋":"aaㄗㄚˇ","和":"acㄏㄜˊ","咎":"bdㄐㄧㄡˋ","咏":"aeㄩㄥˇ","咐":"ccㄈㄨˋ","咒":"baㄓㄡˋ","咔":"abㄎㄚˇ","咕":"abㄍㄨ","咖":"abㄍㄚ","咙":"cdㄌㄨㄥˊ","咚":"adㄉㄨㄥ","咛":"adㄋㄧㄥˊ","咝":"aaㄙ","哎":"adㄞ","囹":"adㄌㄧㄥˊ","固":"abㄍㄨˋ","国":"bbㄍㄨㄛˊ","图":"cdㄊㄨˊ","坡":"aeㄆㄛ","坤":"aeㄎㄨㄣ","坦":"aeㄊㄢˇ","坨":"aeㄊㄨㄛˊ","坩":"aeㄍㄢ","坪":"aeㄆㄧㄥˊ","坫":"aeㄉㄧㄢˋ","坭":"aeㄋㄧˊ","坯":"aeㄆㄧ","坳":"aeㄠˋ","坶":"ceㄇㄨˋ","坷":"aeㄎㄜˇ","坻":"aeㄔˊ","坼":"adㄔㄜˋ","垂":"aaㄔㄨㄟˊ","垃":"aeㄌㄚ","垄":"aeㄌㄨㄥˇ","垅":"ceㄌㄨㄥˇ","垆":"aeㄌㄩˊ","备":"bcㄅㄟˋ","夜":"aeㄧㄝˋ","奄":"beㄧㄢˇ","奇":"abㄐㄧ","奈":"bdㄋㄞˋ","奉":"bcㄈㄥˋ","奋":"acㄈㄣˋ","奔":"bcㄅㄣˋ","妮":"adㄋㄧ","妯":"aaㄓㄡˊ","妲":"adㄉㄚˊ","妹":"ccㄇㄟˋ","妻":"baㄑㄧˋ","妾":"bdㄑㄧㄝˋ","姆":"ac","始":"aaㄕˇ","姐":"adㄐㄧㄝˇ","姑":"abㄍㄨ","姓":"caㄒㄧㄥˋ","委":"beㄨㄟˇ","姗":"aaㄕㄢ","孟":"acㄇㄥˋ","孢":"acㄅㄠ","季":"bbㄐㄧˋ","孤":"abㄍㄨ","孥":"aaㄋㄩˊ","学":"ccㄒㄩㄝˊ","宓":"acㄇㄧˋ","宕":"bdㄉㄤˋ","宗":"baㄗㄨㄥ","官":"bbㄍㄨㄢ","宙":"aaㄓㄡˋ","定":"bdㄉㄧㄥˋ","宛":"aeㄨㄢˇ","宜":"bbㄧˊ","宝":"bdㄅㄠˇ","实":"baㄕˊ","宠":"aaㄔㄨㄥˇ","审":"caㄕㄣˇ","尚":"baㄕㄤˋ","居":"cfㄐㄩ","屈":"abㄑㄩ","屉":"bdㄊㄧˋ","届":"bbㄐㄧㄝˋ","岢":"ceㄎㄜˇ","岣":"aeㄍㄡˇ","岩":"beㄧㄢˊ","岫":"aeㄒㄧㄡˋ","岬":"ceㄐㄧㄚˇ","岭":"aeㄌㄧㄥˇ","岱":"adㄉㄞˋ","岳":"bbㄩㄝˋ","岵":"ceㄏㄨˋ","岷":"aeㄇㄧㄣˊ","岸":"acㄢˋ","岽":"aeㄉㄨㄥ","岿":"aeㄎㄨㄟ","峁":"ceㄇㄠˇ","峄":"beㄧˋ","帑":"adㄊㄤˇ","帔":"acㄆㄟˋ","帕":"aeㄆㄚˋ","帖":"adㄊㄧㄝˋ","帘":"bdㄌㄧㄢˊ","帙":"adㄓˋ","帚":"caㄓㄡˇ","帛":"acㄅㄛˊ","帜":"aaㄓˋ","幸":"bcㄒㄧㄥˋ","底":"cdㄉㄧˇ","庖":"acㄆㄠˊ","店":"adㄉㄧㄢˋ","庙":"acㄇㄧㄠˋ","庚":"caㄍㄥ","府":"acㄈㄨˇ","庞":"adㄆㄤˊ","废":"aeㄈㄟˋ","建":"bbㄐㄧㄢˋ","弥":"acㄇㄧˊ","弦":"acㄒㄧㄢˊ","弧":"acㄏㄨˊ","弩":"cdㄋㄩˇ","弪":"cbㄐㄧㄥˋ","录":"adㄌㄩˋ","彼":"acㄅㄧˇ","往":"beㄨㄤˇ","征":"adㄓㄥ","徂":"adㄘㄨˊ","径":"abㄐㄧㄥˋ","忝":"adㄊㄧㄢˇ","忠":"adㄓㄨㄥ","念":"adㄋㄧㄢˋ","忽":"abㄏㄨ","忿":"acㄈㄣˋ","态":"adㄊㄞˋ","怂":"aaㄙㄨㄥˇ","怊":"aaㄔㄠ","怍":"aaㄗㄨㄛˋ","怏":"aeㄧㄤˋ","怔":"aaㄓㄥˋ","怕":"aeㄆㄚˋ","怖":"acㄅㄨˋ","怙":"acㄏㄨˋ","怛":"adㄉㄚˊ","怜":"adㄌㄧㄢˊ","怡":"aeㄧˊ","怦":"acㄆㄥ","性":"aaㄒㄧㄥˋ","怩":"abㄋㄧˊ","怪":"aaㄍㄨㄞˋ","怫":"acㄈㄟˋ","怯":"aaㄑㄧㄝˋ","怵":"aaㄔㄨˋ","怿":"aeㄧˋ","戕":"baㄑㄧㄤ","或":"bcㄏㄨㄛˋ","戗":"aaㄑㄧㄤˋ","戽":"adㄏㄨˋ","戾":"bdㄌㄧˋ","房":"acㄈㄤˊ","所":"aaㄙㄨㄛˇ","承":"baㄔㄥˊ","抨":"acㄆㄥ","披":"acㄆㄧ","抬":"adㄊㄞˊ","抱":"acㄅㄠˋ","抵":"adㄉㄧˇ","抹":"acㄇㄚ","抻":"aaㄔㄣ","押":"aeㄧㄚ","抽":"adㄔㄡ","抿":"acㄇㄧㄣˇ","拂":"acㄈㄨˊ","拄":"aaㄓㄨˇ","担":"adㄉㄢˋ","拆":"aaㄘㄚ","拇":"acㄇㄨˇ","拈":"abㄋㄧㄢ","拉":"adㄌㄚˊ","拊":"acㄈㄨˇ","拌":"acㄅㄢˋ","拍":"acㄆㄞ","拎":"adㄌㄧㄣ","拐":"bdㄍㄨㄞˇ","拓":"cdㄊㄚˋ","拔":"acㄅㄚˊ","拖":"adㄊㄨㄛ","拗":"aeㄠˋ","拘":"afㄐㄩ","拙":"aaㄓㄨㄛ","拚":"acㄆㄢˋ","招":"adㄓㄠ","拢":"adㄌㄨㄥˇ","拣":"abㄐㄧㄢˇ","拥":"aeㄩㄥ","拦":"abㄌㄢˊ","拧":"aaㄋㄧㄥˊ","拨":"acㄅㄛ","择":"adㄗㄜˊ","放":"acㄈㄤˋ","斧":"abㄈㄨˇ","斩":"bdㄓㄢˇ","於":"aeㄨ","旺":"aeㄨㄤˋ","昀":"ceㄩㄣˊ","昂":"abㄤˊ","昃":"aaㄗㄜˋ","昆":"bdㄎㄨㄣ","昊":"bdㄏㄠˋ","昌":"baㄔㄤ","明":"bdㄇㄧㄥˊ","昏":"bbㄏㄨㄣ","易":"cdㄧˋ","昔":"baㄒㄧ","昕":"adㄒㄧㄣ","昙":"bdㄊㄢˊ","朊":"adㄖㄨㄢˇ","朋":"ccㄆㄥˊ","服":"bcㄈㄨˊ","杪":"cbㄇㄧㄠˇ","杭":"abㄏㄤˊ","杯":"abㄅㄟ","杰":"cbㄐㄧㄝˊ","杲":"bbㄍㄠˇ","杳":"bbㄧㄠˇ","杵":"abㄔㄨˇ","杷":"abㄅㄚˋ","杼":"abㄓㄨˋ","松":"abㄙㄨㄥ","板":"abㄅㄢˇ","构":"abㄍㄡˋ","枇":"abㄆㄧˊ","枉":"abㄨㄤˇ","枋":"abㄈㄤ","析":"bbㄒㄧ","枕":"abㄓㄣˇ","林":"bbㄌㄧㄣˊ","枘":"abㄖㄨㄟˋ","枚":"abㄇㄟˊ","果":"cbㄍㄨㄛˇ","枝":"abㄓ","枞":"abㄘㄨㄥ","枢":"abㄕㄨ","枣":"baㄗㄠˇ","枥":"abㄌㄧˋ","枧":"abㄐㄧㄢˇ","枨":"abㄔㄥˊ","枫":"abㄈㄥ","枭":"bbㄒㄧㄠ","柜":"abㄍㄨㄟˋ","欣":"abㄒㄧㄣ","欧":"aeㄡ","武":"bcㄨˇ","歧":"abㄑㄧˊ","殁":"acㄇㄛˋ","殴":"aeㄡ","氓":"acㄇㄤˊ","氛":"acㄈㄣ","沓":"bdㄉㄚˊ","沫":"acㄇㄛˋ","沭":"ccㄕㄨˋ","沮":"afㄐㄩˋ","沱":"acㄊㄨㄛˊ","沲":"ccㄉㄨㄛˇ","河":"acㄏㄜˊ","沸":"acㄈㄟˋ","油":"acㄧㄡˊ","治":"acㄓˋ","沼":"acㄓㄠˇ","沽":"acㄍㄨ","沾":"acㄓㄢ","沿":"acㄧㄢˊ","泄":"acㄒㄧㄝˋ","泅":"acㄑㄧㄡˊ","泊":"acㄅㄛˊ","泌":"acㄅㄧˋ","泓":"acㄏㄨㄥˊ","泔":"acㄍㄢ","法":"bcㄈㄚˇ","泖":"ccㄇㄠˇ","泗":"acㄙˋ","泞":"acㄋㄧㄥˋ","泠":"acㄌㄧㄥˊ","泡":"acㄆㄠˋ","波":"acㄅㄛ","泣":"acㄑㄧˋ","泥":"acㄋㄧˊ","注":"acㄓㄨˋ","泪":"ccㄌㄟˋ","泫":"acㄒㄩㄢˋ","泮":"acㄆㄢˋ","泯":"acㄇㄧㄣˇ","泱":"acㄧㄤ","泳":"acㄩㄥˇ","泷":"acㄌㄨㄥˊ","泸":"acㄌㄩˊ","泺":"ccㄌㄨㄛˋ","泻":"acㄒㄧㄝˋ","泼":"acㄆㄛ","泽":"acㄗㄜˊ","泾":"acㄐㄧㄥ","浅":"acㄐㄧㄢ","炅":"bdㄍㄨㄟˋ","炉":"adㄌㄩˊ","炊":"adㄔㄨㄟ","炎":"bdㄧㄢˊ","炒":"adㄔㄠˇ","炔":"cdㄍㄨㄟˋ","炕":"adㄏㄤ","炖":"adㄉㄨㄣˋ","炙":"bdㄓˋ","炜":"cdㄏㄨㄟ","炝":"adㄑㄧㄤˋ","炬":"afㄐㄩˋ","爬":"aeㄆㄚˊ","爸":"acㄅㄚˋ","版":"acㄅㄢˇ","牦":"ccㄇㄠˊ","牧":"bcㄇㄨˋ","物":"acㄨˋ","狍":"acㄆㄠˊ","狎":"abㄒㄧㄚˊ","狐":"acㄏㄨˊ","狒":"acㄈㄟˋ","狗":"abㄍㄡˇ","狞":"aaㄋㄧㄥˊ","玟":"ccㄇㄧㄣˊ","玢":"acㄅㄧㄣ","玩":"abㄨㄢˊ","玫":"acㄇㄟˊ","玮":"ceㄨㄟˇ","环":"aaㄏㄨㄢˊ","现":"acㄒㄧㄢˋ","瓮":"aeㄨㄥˋ","瓯":"aeㄡ","甙":"adㄉㄞˋ","画":"ceㄏㄨㄚˋ","甾":"caㄗㄞ","畀":"bcㄅㄧˋ","畅":"adㄔㄤˋ","疙":"abㄍㄜ","疚":"abㄐㄧㄡˋ","疝":"aaㄕㄢˋ","疟":"bfˋ","疠":"cdㄌㄧˋ","疡":"adㄧㄤˊ","的":"adㄉㄧˊ","盂":"aeㄩˊ","盱":"aeㄒㄩ","盲":"acㄇㄤˊ","直":"bdㄓˊ","知":"bdㄓ","矸":"aeㄍㄢ","矽":"aeㄒㄧ","矾":"aeㄈㄢˊ","矿":"aeㄎㄨㄤˋ","砀":"adㄉㄤˋ","码":"acㄇㄚˇ","祆":"aaㄒㄧㄢ","祈":"abㄑㄧˊ","祉":"cdㄓˇ","秆":"cbㄍㄢˇ","秉":"ccㄅㄧㄥˇ","穸":"aaㄒㄧ","穹":"abㄑㄩㄥˊ","空":"abㄎㄨㄥˋ","竺":"cbㄓㄨˊ","籴":"bdㄉㄧˊ","线":"aaㄒㄧㄢˋ","绀":"abㄍㄢˋ","绁":"acㄒㄧㄝˋ","绂":"bcㄈㄨˊ","练":"adㄌㄧㄢˋ","组":"aaㄗㄨˇ","绅":"aaㄕㄣ","细":"aaㄒㄧˋ","织":"aaㄓˋ","终":"aaㄓㄨㄥ","绉":"aaㄓㄡˋ","绊":"acㄅㄢˋ","绋":"acㄈㄨˊ","绌":"aaㄔㄨˋ","绍":"aaㄕㄠˋ","绎":"adㄧˋ","经":"abㄐㄧㄥˋ","绐":"cdㄉㄞˋ","罔":"adㄨㄤˇ","罗":"cdㄌㄨㄛˊ","者":"adㄓㄜˇ","耵":"adㄉㄧㄥ","耶":"aeㄧㄝˊ","肃":"baㄙㄨˋ","股":"abㄍㄨˇ","肢":"adㄓ","肤":"acㄈㄨ","肥":"bcㄈㄟˊ","肩":"bbㄐㄧㄢ","肪":"ccㄈㄤˊ","肫":"aeㄓㄨㄣ","肭":"cdㄋㄚˋ","肮":"aeㄤ","肯":"bbㄎㄣˇ","肱":"abㄍㄨㄥ","育":"be","肴":"ceㄧㄠˊ","肷":"abㄑㄧㄢˇ","肺":"acㄈㄟˋ","肼":"abㄐㄧㄥˇ","肽":"adㄊㄞˋ","肾":"caㄕㄣˋ","肿":"cdㄓㄨㄥˇ","胀":"cdㄓㄤˋ","胁":"acㄒㄧㄝˊ","臾":"beㄩˊ","舍":"caㄕㄜˋ","艰":"bbㄐㄧㄢ","苑":"abㄩㄢˋ","苒":"abㄖㄢˇ","苓":"abㄌㄧㄥˊ","苔":"abㄊㄞˊ","苕":"abㄕㄠˊ","苗":"bcㄇㄧㄠˊ","苘":"abㄑㄧㄥˇ","苛":"abㄎㄜ","苜":"abㄇㄨˋ","苞":"abㄅㄠ","苟":"abㄍㄡˇ","苠":"abㄇㄧㄣˊ","苤":"abㄆㄧㄝˇ","若":"cbㄖㄜˇ","苦":"abㄍㄨˇ","苫":"abㄕㄢˋ","苯":"abㄅㄣˇ","英":"abㄧㄥ","苴":"cfㄐㄩ","苷":"cbㄍㄢ","苹":"abㄆㄧㄥˊ","苻":"cbㄈㄨˊ","茁":"abㄓㄨㄛˊ","茂":"abㄇㄠˋ","范":"acㄈㄢˋ","茄":"abㄐㄧㄚ","茅":"abㄇㄠˊ","茆":"abㄇㄠˊ","茇":"abㄅㄚˊ","茉":"abㄇㄛˋ","茌":"abㄔˊ","茎":"abㄐㄧㄥ","茏":"abㄌㄨㄥˊ","茑":"abㄋㄧㄠˇ","茔":"aeㄧㄥˊ","茕":"abㄑㄩㄥˊ","茚":"abㄧㄣˋ","虎":"ccㄏㄨˋ","虏":"adㄌㄩˇ","虮":"abㄐㄧˇ","虱":"baㄕ","表":"bcㄅㄧㄠˇ","衩":"aeㄔㄚˋ","衫":"aaㄕㄢ","衬":"aaㄔㄣˋ","规":"bbㄍㄨㄟ","觅":"bcㄇㄧˋ","视":"caㄕˋ","诓":"abㄎㄨㄤ","诔":"adㄌㄟˇ","试":"aaㄕˋ","诖":"abㄍㄨㄚˋ","诗":"aaㄕ","诘":"cbㄐㄧㄝˊ","诙":"adㄏㄨㄟ","诚":"aaㄔㄥˊ","诛":"aaㄓㄨ","诜":"caㄕㄣ","话":"aeㄏㄨㄚˋ","诞":"aeㄉㄢˋ","诟":"abㄍㄡˋ","诠":"abㄑㄩㄢˊ","诡":"abㄍㄨㄟˇ","询":"aaㄒㄩㄣˊ","诣":"aeㄧˋ","诤":"adㄓㄥˋ","该":"abㄍㄞ","详":"aaㄒㄧㄤˊ","诧":"aaㄔㄚˋ","诨":"acㄏㄨㄣˇ","诩":"aeㄒㄩˇ","责":"aaㄗㄜˊ","贤":"abㄒㄧㄢˊ","败":"acㄅㄞˋ","账":"cdㄓㄤˋ","货":"acㄏㄨㄛˋ","质":"cdㄓˋ","贩":"acㄈㄢˋ","贪":"adㄊㄢ","贫":"acㄆㄧㄣˊ","贬":"afㄅㄧㄢˇ","购":"abㄍㄡˋ","贮":"aaㄓㄨˋ","贯":"bbㄍㄨㄢˋ","转":"adㄓㄨㄞˊ","轭":"abㄜˇ","轮":"adㄌㄩㄣˊ","软":"adㄖㄨㄢˇ","轰":"bcㄏㄨㄥ","迢":"adㄊㄧㄠˊ","迤":"aeㄧˊ","迥":"abㄐㄩㄥˇ","迦":"abㄐㄧㄚ","迨":"adㄉㄞˋ","迩":"adㄦˇ","迪":"adㄉㄧˊ","迫":"acㄆㄞˇ","迭":"abㄉㄧㄝˊ","迮":"aaㄗㄜˊ","述":"aaㄕㄨˋ","迳":"cbㄐㄧㄥˋ","邾":"aaㄓㄨ","郁":"acㄩˋ","郄":"aaㄒㄧˋ","郅":"cdㄓˋ","郇":"acㄏㄨㄢˊ","郊":"abㄐㄧㄠ","郎":"cdㄌㄤˊ","郏":"abㄐㄧㄚˊ","郐":"abㄎㄨㄞˋ","郑":"adㄓㄥˋ","郓":"aeㄩㄣˋ","采":"bdㄘㄞˋ","金":"baㄐㄧㄣ","钍":"aaㄊㄨˇ","钎":"aaㄑㄧㄢ","钏":"aaㄔㄨㄢˋ","钐":"aaㄕㄢˋ","钒":"aaㄈㄢˊ","钓":"aaㄉㄧㄠˋ","钔":"aaㄇㄣˊ","钕":"cfㄋㄩˇ","钗":"aaㄔㄞ","闸":"aaㄓㄚˊ","闹":"bdㄋㄠˋ","阜":"ccㄈㄨˋ","陋":"adㄌㄡˋ","陌":"acㄅㄞˇ","降":"abㄐㄧㄤˋ","限":"aaㄒㄧㄢˋ","陔":"abㄍㄞ","陕":"aaㄕㄢˇ","隶":"cdㄌㄧˋ","隹":"adㄓㄨㄟ","雨":"ccㄩˋ","青":"baㄑㄧㄥ","非":"ccㄈㄟ","顶":"adㄉㄧㄥˇ","顷":"bbㄑㄧㄥˇ","饯":"aaㄐㄧㄢˋ","饰":"aaㄕˋ","饱":"acㄅㄠˇ","饲":"acㄙˋ","饴":"aeㄧˊ","驵":"aaㄗㄤˇ","驶":"aaㄕˇ","驷":"aaㄙˋ","驸":"acㄈㄨˋ","驹":"afㄐㄩ","驺":"aaㄗㄡ","驻":"adㄓㄨˋ","驼":"adㄊㄨㄛˊ","驾":"abㄐㄧㄚˋ","驿":"abㄧˋ","骀":"adㄉㄞˋ","鱼":"ccㄩˊ","鸢":"beㄩㄢ","鸣":"ccㄇㄧㄥˊ","黾":"bcㄇㄥˇ","齿":"adㄔˇ","受":"baㄕㄡˋ","变":"cfㄅㄧㄢˋ","弢":"cdㄊㄠ","祎":"aeㄧ","玥":"aeㄩㄝˋ","旻":"adㄇㄧㄣˊ","昇":"caㄕㄥ","劼":"adㄐㄧㄝˊ","昉":"adㄈㄤˇ","咘":"ccㄅㄨˋ","旼":"ccㄇㄧㄣˊ","劵":"cdㄐㄩㄢˋ","毑":"cdㄐㄧㄝˇ","祇":"aaㄑㄧˊ","叕":"cdㄓㄨㄛˊ","炘":"cdㄒㄧㄣ","泃":"adㄐㄩ","佺":"cdㄑㄩㄢˊ","临":"cdㄌㄧㄣˊ","举":"afㄐㄩˇ","亭":"cdㄊㄧㄥˊ","亮":"cdㄌㄧㄤˋ","亲":"cbㄑㄧㄣ","侮":"aeㄨˇ","侯":"ccㄏㄡˊ","侵":"baㄑㄧㄣ","便":"bfㄅㄧㄢˋ","促":"aaㄘㄨˋ","俄":"abㄜˊ","俅":"abㄑㄧㄡˊ","俊":"adㄐㄩㄣˋ","俎":"baㄗㄨˇ","俏":"abㄑㄧㄠˋ","俐":"adㄌㄧˋ","俑":"aeㄩㄥˇ","俗":"aaㄙㄨˊ","俘":"acㄈㄨˊ","俚":"adㄌㄧˇ","俜":"acㄆㄧㄥ","保":"bcㄅㄠˇ","俞":"baㄩˊ","俟":"aaㄑㄧˊ","信":"baㄒㄧㄣˋ","俣":"aaㄩˇ","俦":"adㄔㄡˊ","俨":"abㄧㄢˇ","俩":"adㄌㄧㄚˇ","俪":"adㄌㄧˋ","俭":"abㄐㄧㄢˇ","修":"aaㄒㄧㄡ","兹":"caㄘˊ","养":"ceㄧㄤˇ","冒":"ccㄇㄠˋ","冠":"bbㄍㄨㄢˋ","剃":"aaㄊㄧˋ","削":"aaㄒㄧㄠ","剌":"bdㄌㄚˊ","前":"baㄑㄧㄢˊ","剐":"aaㄍㄨㄚˇ","勃":"acㄅㄛˊ","勇":"aeㄩㄥˇ","勉":"acㄇㄧㄢˇ","勋":"ceㄒㄩㄣ","匍":"acㄆㄨˊ","南":"cdㄋㄚ","卸":"bcㄒㄧㄝˋ","厘":"adㄌㄧˊ","厚":"bcㄏㄡˋ","叙":"aaㄒㄩˋ","叛":"acㄆㄢˋ","呲":"aaㄘ","咣":"abㄍㄨㄤ","咤":"aaㄔㄚˋ","咦":"aeㄧˊ","咧":"adㄌㄧe","咨":"aaㄗ","咩":"bcㄇㄧㄝ","咪":"acㄇㄧˇ","咫":"aaㄓˇ","咬":"adㄧㄠˇ","咭":"abㄐㄧ","咯":"abㄍㄜ","咱":"aaㄗㄢˊ","咳":"abㄏㄞˊ","咴":"cdㄏㄨㄟ","咸":"bcㄒㄧㄢˊ","咻":"aaㄒㄧㄡ","咽":"aeㄧㄢˋ","咿":"aeㄧ","哀":"aeㄞ","品":"bcㄆㄧㄣˇ","哂":"baㄕㄣˇ","哄":"abㄏㄨㄥˋ","哆":"bdㄉㄨㄛ","哇":"aeㄨㄚ","哈":"acㄏㄚˋ","哉":"aaㄗㄞ","哌":"acㄆㄞˋ","响":"acㄒㄧㄤˇ","哏":"abㄍㄣˊ","哐":"abㄎㄨㄤ","哑":"aeㄧㄚˇ","哒":"adㄉㄚ","哓":"aaㄒㄧㄠ","哔":"acㄅㄧˋ","哕":"acㄏㄨㄟˋ","哗":"acㄏㄨㄚˊ","哙":"abㄎㄨㄞˋ","哚":"adㄉㄨㄛˇ","哜":"cbㄐㄧˋ","哝":"adㄋㄨㄥˊ","哞":"acㄇㄡ","哟":"abo","哪":"adㄋㄚˋ","囿":"aeㄧㄡˋ","型":"aeㄒㄧㄥˊ","垌":"aeㄉㄨㄥˋ","垒":"ceㄌㄟˇ","垓":"aeㄍㄞ","垛":"aeㄉㄨㄛˇ","垠":"aeㄧㄣˊ","垡":"aeㄈㄚˊ","垢":"aeㄍㄡˋ","垣":"aeㄩㄢˊ","垤":"aeㄉㄧㄝˊ","垦":"aeㄎㄣˇ","垧":"aeㄕㄤˇ","垩":"aeㄜˇ","垫":"aeㄉㄧㄢˋ","垭":"aeㄧㄚˋ","垮":"aeㄎㄨㄚˇ","垲":"aeㄎㄞˇ","垴":"ceㄋㄠˇ","城":"aeㄔㄥˊ","埏":"aeㄧㄢˊ","复":"acㄈㄨˋ","奎":"aeㄎㄨㄟˊ","奏":"bdㄗㄡˋ","契":"bbㄑㄧˋ","奕":"abㄧˋ","奖":"adㄐㄧㄤˇ","姘":"acㄆㄧㄣ","姚":"aeㄧㄠˊ","姜":"abㄐㄧㄤ","姝":"aaㄕㄨ","姣":"abㄐㄧㄠ","姥":"acㄌㄠˇ","姨":"aeㄧˊ","姹":"aaㄔㄚˋ","姻":"aeㄧㄣ","姿":"aaㄗ","威":"aeㄨㄟ","娃":"aeㄨㄚˊ","娄":"bdㄌㄡˊ","娅":"aeㄧㄚˋ","娆":"acㄖㄠˊ","娇":"abㄐㄧㄠ","娈":"aeㄌㄨㄢˊ","娜":"adㄋㄚˋ","孩":"acㄏㄞˊ","孪":"cdㄌㄨㄢˊ","客":"abㄎㄜˋ","宣":"aaㄒㄩㄢ","室":"baㄕˋ","宥":"aeㄧㄡˋ","宦":"bcㄏㄨㄢˋ","宪":"ccㄒㄧㄢˋ","宫":"caㄍㄨㄥ","封":"bcㄈㄥ","将":"adㄐㄧㄤˋ","尜":"bbㄍㄚˊ","尝":"abㄔㄤˊ","屋":"beㄨ","屎":"aaㄕˇ","屏":"acㄅㄧㄥˇ","峋":"aeㄒㄩㄣˊ","峒":"aeㄉㄨㄥˋ","峙":"aaㄕˋ","峡":"aeㄒㄧㄚˊ","峤":"aeㄐㄧㄠˋ","峥":"aeㄓㄥ","峦":"ceㄌㄨㄢˊ","差":"baㄘ","巷":"bcㄏㄤˋ","帝":"cdㄉㄧˋ","带":"cdㄉㄞˋ","帧":"aaㄓㄣ","帮":"acㄅㄤ","幽":"ceㄧㄡ","庠":"aaㄒㄧㄤˊ","庥":"aaㄒㄧㄡ","度":"aaㄉㄨˋ","庭":"adㄊㄧㄥˊ","弈":"abㄧˋ","弭":"acㄇㄧˇ","弯":"adㄨㄢ","彖":"bdㄊㄨㄢˋ","彦":"abㄧㄢˋ","待":"adㄉㄞˋ","徇":"acㄒㄩㄣˋ","很":"acㄏㄣˇ","徉":"cdㄧㄤˊ","徊":"acㄏㄨㄞˊ","律":"cfㄌㄩˋ","後":"cbㄏㄡˋ","怎":"aaㄗㄣˇ","怒":"adㄋㄩˋ","思":"caㄙㄞ","怠":"adㄉㄞˋ","急":"bbㄐㄧˊ","怨":"adㄩㄢˋ","总":"caㄗㄨㄥˇ","怼":"adㄉㄨㄟˋ","恂":"acㄒㄩㄣˊ","恃":"aaㄕˋ","恍":"adㄏㄨㄤˇ","恒":"bcㄏㄥˊ","恢":"abㄏㄨㄟ","恤":"acㄒㄩˋ","恨":"acㄏㄣˋ","恪":"abㄎㄜˋ","恫":"adㄉㄨㄥˋ","恬":"adㄊㄧㄢˊ","恸":"aaㄊㄨㄥˋ","恹":"aeㄧㄢ","恺":"adㄎㄞˇ","恻":"aaㄘㄜˋ","恼":"adㄋㄠˇ","恽":"aeㄩㄣˋ","战":"aaㄓㄢˋ","扁":"bfㄅㄧㄢˇ","扃":"abㄐㄩㄥ","拜":"bcㄅㄞˋ","括":"abㄎㄨㄛˋ","拭":"aaㄕˋ","拮":"abㄐㄧㄝˊ","拯":"aaㄓㄥˇ","拱":"abㄍㄨㄥˇ","拴":"aaㄕㄨㄢ","拶":"ccㄗㄚ","拷":"abㄎㄠˇ","拼":"acㄆㄧㄣ","拽":"caㄧㄝˋ","拾":"aaㄕㄜˋ","持":"aaㄔˊ","挂":"abㄍㄨㄚˋ","指":"aaㄓˇ","按":"aeㄢˋ","挎":"abㄎㄨㄚˋ","挑":"adㄊㄧㄠˇ","挖":"adㄨㄚ","挝":"adㄨㄛ","挞":"adㄊㄚˋ","挟":"acㄒㄧㄝˊ","挠":"adㄋㄠˊ","挡":"adㄉㄤˋ","挢":"abㄐㄧㄠˇ","挣":"aaㄓㄥˋ","挤":"abㄐㄧˇ","挥":"acㄏㄨㄟ","挪":"adㄋㄨㄛˊ","挺":"adㄊㄧㄥˇ","政":"adㄓㄥˋ","故":"abㄍㄨˋ","斫":"abㄓㄨㄛˊ","施":"aaㄕ","既":"bbㄐㄧˋ","昝":"aaㄗㄢˇ","星":"caㄒㄧㄥ","映":"adㄧㄥˋ","春":"baㄔㄨㄣ","昧":"ccㄇㄟˋ","昨":"aaㄗㄨㄛˊ","昭":"adㄓㄠ","是":"baㄕˋ","昱":"cdㄩˋ","昴":"ccㄇㄠˇ","昵":"abㄋㄧˋ","昶":"beㄔㄤˇ","昼":"caㄓㄡˋ","显":"cdㄒㄧㄢˇ","曷":"cdㄏㄜˊ","朐":"abㄑㄩˊ","枯":"aaㄎㄨ","枰":"abㄆㄧㄥˊ","枳":"abㄓˇ","枵":"abㄒㄧㄠ","架":"abㄐㄧㄚˋ","枷":"abㄐㄧㄚ","枸":"abㄍㄡˇ","柁":"abㄊㄨㄛˊ","柃":"cbㄌㄧㄥˊ","柄":"abㄅㄧㄥˇ","柏":"abㄅㄞˇ","某":"ccㄇㄡˇ","柑":"abㄍㄢ","柒":"acㄑㄧ","染":"acㄖㄢˇ","柔":"aaㄖㄡˊ","柘":"abㄓㄜˋ","柙":"abㄒㄧㄚˊ","柚":"abㄧㄡˊ","柝":"abㄊㄨㄛˋ","柞":"abㄓㄚˋ","柠":"abㄋㄧㄥˊ","柢":"abㄉㄧˇ","查":"aaㄔㄚˊ","柩":"abㄐㄧㄡˋ","柬":"bdㄐㄧㄢˇ","柯":"abㄎㄜ","柰":"cdㄋㄞˋ","柱":"abㄓㄨˋ","柳":"abㄌㄧㄡˇ","柽":"abㄔㄥ","柿":"abㄕˋ","栀":"aaㄓ","栅":"abㄕㄢ","标":"cbㄅㄧㄠ","栈":"abㄓㄢˋ","栉":"abㄓˋ","栊":"abㄌㄨㄥˊ","栋":"abㄉㄨㄥˋ","栌":"abㄌㄩˊ","栎":"abㄌㄧˋ","栏":"abㄌㄢˊ","树":"abㄕㄨˋ","歪":"bdㄨㄞˇ","殂":"aaㄘㄨˊ","殃":"adㄧㄤ","殄":"adㄊㄧㄢˇ","殆":"adㄉㄞˋ","殇":"aaㄕㄤ","残":"aaㄘㄢˊ","段":"adㄉㄨㄢˋ","毖":"acㄅㄧˋ","毗":"acㄆㄧˊ","毡":"aaㄓㄢ","氟":"ccㄈㄨˊ","氡":"adㄉㄨㄥ","氢":"aaㄑㄧㄥ","泉":"ccㄑㄩㄢˊ","泵":"bcㄅㄥˋ","泶":"ccㄒㄩㄝˊ","洁":"acㄐㄧㄝˊ","洄":"acㄏㄨㄟˊ","洇":"acㄧㄣ","洋":"acㄧㄤˊ","洌":"acㄌㄧㄝˋ","洎":"acㄐㄧˋ","洒":"acㄙㄚˇ","洗":"acㄒㄧˇ","洙":"acㄓㄨ","洚":"ccㄐㄧㄤˋ","洛":"acㄌㄨㄛˋ","洞":"acㄉㄨㄥˋ","津":"bcㄐㄧㄣ","洧":"acㄨㄟˇ","洪":"acㄏㄨㄥˊ","洫":"acㄒㄩˋ","洮":"acㄊㄠˊ","洱":"ccㄦˇ","洲":"acㄓㄡ","洳":"ccㄖㄨˋ","洵":"acㄒㄩㄣˊ","洹":"acㄏㄨㄢˊ","活":"acㄏㄨㄛˊ","洼":"acㄨㄚ","洽":"acㄑㄧㄚˋ","派":"acㄆㄚ","浃":"ccㄐㄧㄚ","浇":"acㄐㄧㄠ","浈":"acㄓㄣ","浊":"ccㄓㄨㄛˊ","测":"acㄘㄜˋ","浍":"acㄏㄨㄟˋ","济":"acㄐㄧˋ","浏":"acㄌㄧㄡˊ","浑":"acㄏㄨㄣˊ","浒":"acㄏㄨˇ","浓":"acㄋㄨㄥˊ","浔":"acㄒㄩㄣˊ","涎":"acㄒㄧㄢˊ","炫":"adㄒㄩㄢˋ","炭":"adㄊㄢˋ","炯":"adㄐㄩㄥˇ","炱":"adㄊㄞˊ","炳":"adㄅㄧㄥˇ","炷":"adㄓㄨˋ","点":"acㄉㄧㄢˇ","炻":"cdㄕˊ","炼":"adㄌㄧㄢˋ","炽":"adㄔˋ","烀":"adㄏㄨ","烁":"adㄕㄨㄛˋ","烂":"adㄌㄢˋ","烃":"cdㄊㄧㄥ","爰":"beㄩㄢˊ","牮":"bbㄐㄧㄢˋ","牯":"cbㄍㄨˇ","牲":"aaㄕㄥ","牵":"aeㄑㄧㄢ","狠":"acㄏㄣˇ","狡":"abㄐㄧㄠˇ","狨":"aaㄖㄨㄥˊ","狩":"aaㄕㄡˋ","独":"aaㄉㄨˊ","狭":"abㄒㄧㄚˊ","狮":"aaㄕ","狯":"abㄎㄨㄞˋ","狰":"aaㄓㄥ","狱":"bbㄩˋ","狲":"aaㄙㄨㄣ","玲":"adㄌㄧㄥˊ","玳":"cdㄉㄞˋ","玷":"adㄉㄧㄢˋ","玻":"acㄅㄛ","珀":"acㄆㄛˋ","珂":"abㄎㄜ","珈":"abㄐㄧㄚ","珉":"acㄇㄧㄣˊ","珊":"aaㄕㄢ","珍":"adㄓㄣ","珏":"bdㄐㄩㄝˊ","珐":"aaㄈㄚˋ","珑":"adㄌㄨㄥˊ","瓴":"adㄌㄧㄥˊ","甚":"baㄕㄣˊ","甭":"bcㄅㄥˊ","畈":"acㄈㄢˋ","畋":"cdㄊㄧㄢˊ","界":"abㄐㄧㄝˋ","畎":"abㄑㄩㄢˇ","畏":"beㄨㄟˋ","疣":"aeㄧㄡˊ","疤":"acㄅㄚ","疥":"abㄐㄧㄝˋ","疫":"abㄧˋ","疬":"cdㄌㄧˋ","疮":"aaㄔㄨㄤ","疯":"acㄈㄥ","癸":"cbㄍㄨㄟˇ","皆":"bbㄐㄧㄝ","皇":"ccㄏㄨㄤˊ","皈":"cbㄍㄨㄟ","盅":"adㄓㄨㄥ","盆":"aeㄆㄣˊ","盈":"bcㄧㄥˊ","相":"bbㄒㄧㄤˋ","盹":"adㄉㄨㄣˇ","盼":"acㄆㄢˋ","盾":"cdㄉㄨㄣˋ","省":"baㄕㄥˇ","眄":"acㄇㄧㄢˇ","眇":"ccㄇㄧㄠˇ","眈":"adㄉㄢ","眉":"ccㄇㄟˊ","看":"bbㄎㄢˋ","眍":"abㄎㄡ","眨":"aaㄓㄚˇ","矜":"abㄍㄨㄢ","矧":"aaㄕㄣˇ","矩":"afㄐㄩˇ","砂":"aaㄕㄚ","砉":"beㄏㄨㄚ","砌":"aeㄑㄧˋ","砍":"aeㄎㄢˇ","砑":"ceㄧㄚˋ","砒":"aeㄆㄧ","研":"abㄧㄢˊ","砖":"aeㄓㄨㄢ","砗":"aeㄔㄜ","砘":"aeㄉㄨㄣˋ","砚":"aeㄧㄢˋ","砜":"aeㄈㄥ","砭":"afㄅㄧㄢ","祓":"bcㄈㄨˊ","祖":"aaㄗㄨˇ","祗":"abㄓ","祚":"aaㄗㄨㄛˋ","祛":"abㄑㄩ","祜":"ccㄏㄨˋ","祝":"bdㄓㄡˋ","神":"aaㄕㄣˊ","祠":"aaㄘˊ","祢":"acㄇㄧˊ","禹":"ceㄩˇ","禺":"cbㄩˊ","秋":"caㄑㄧㄡ","种":"cdㄔㄨㄥˊ","科":"bbㄎㄜ","秒":"acㄇㄧㄠˇ","秕":"acㄅㄧˇ","秭":"adㄗˇ","穿":"baㄔㄨㄢ","窀":"aeㄓㄨㄣ","突":"bdㄊㄨ","窃":"aeㄑㄧㄝˋ","窆":"afㄅㄧㄢˇ","竖":"abㄕㄨˋ","竽":"abㄩˊ","竿":"abㄍㄢ","笃":"abㄉㄨˇ","笈":"abㄐㄧˊ","类":"adㄌㄟˋ","籼":"aaㄒㄧㄢ","籽":"adㄗˇ","绑":"acㄅㄤˇ","绒":"aaㄖㄨㄥˊ","结":"abㄐㄧㄝˊ","绔":"abㄎㄨˋ","绕":"abㄖㄠˋ","绗":"acㄏㄤˊ","绘":"acㄏㄨㄟˋ","给":"abㄍㄟˇ","绚":"aaㄒㄩㄢˋ","绛":"cbㄐㄧㄤˋ","络":"abㄌㄠˋ","绝":"baㄐㄩㄝˊ","绞":"abㄐㄧㄠˇ","统":"abㄊㄨㄥˇ","缸":"abㄍㄤ","罘":"ccㄈㄨˊ","罚":"baㄈㄚˊ","美":"bcㄇㄟˇ","羿":"cbㄧˋ","耍":"baㄕㄨㄚˇ","耐":"bdㄋㄞˋ","耔":"adㄗˇ","耷":"bdㄉㄚ","胂":"aaㄕㄣˋ","胃":"ceㄨㄟˋ","胄":"adㄓㄡˋ","胆":"cdㄉㄢˇ","背":"acㄅㄟˋ","胍":"cbㄍㄨㄚ","胎":"adㄊㄞ","胖":"acㄆㄢˊ","胗":"aaㄓㄣˇ","胙":"aaㄗㄨㄛˋ","胚":"acㄆㄟ","胛":"cbㄐㄧㄚˇ","胜":"aaㄕㄥˋ","胝":"caㄓ","胞":"acㄅㄠ","胡":"aeㄏㄨˊ","胤":"cbㄧㄣˋ","胥":"caㄒㄩ","胧":"adㄌㄨㄥˊ","胨":"adㄉㄨㄥˋ","胩":"cfㄎㄚˇ","胪":"adㄌㄩˊ","胫":"cbㄐㄧㄥˋ","脉":"ccㄇㄞˋ","舁":"ceㄩˊ","舡":"caㄔㄨㄢˊ","舢":"aaㄕㄢ","舣":"aeㄧˇ","茈":"abㄘˊ","茗":"abㄇㄧㄥˊ","茛":"abㄍㄣˋ","茜":"abㄑㄧㄢˋ","茧":"bbㄐㄧㄢˇ","茨":"abㄘˊ","茫":"acㄇㄤˊ","茬":"abㄔㄚˊ","茭":"abㄐㄧㄠ","茯":"abㄈㄨˊ","茱":"abㄓㄨ","茳":"ccㄐㄧㄤ","茴":"abㄏㄨㄟˊ","茵":"abㄧㄣ","茶":"bbㄔㄚˊ","茸":"abㄖㄨㄥˊ","茹":"cbㄖㄨˊ","茺":"abㄔㄨㄥ","茼":"cbㄊㄨㄥˊ","荀":"abㄒㄩㄣˊ","荃":"abㄑㄩㄢˊ","荆":"acㄐㄧㄥ","荇":"abㄒㄧㄥˋ","草":"abㄘㄠˇ","荏":"abㄖㄣˇ","荐":"bbㄐㄧㄢˋ","荑":"abㄊㄧˊ","荒":"abㄏㄨㄤ","荔":"abㄌㄧˋ","荚":"abㄐㄧㄚˊ","荛":"abㄖㄠˊ","荜":"abㄅㄧˋ","荞":"abㄑㄧㄠˊ","荟":"abㄏㄨㄟˋ","荠":"abㄐㄧˋ","荡":"acㄉㄤˋ","荣":"abㄖㄨㄥˊ","荤":"abㄏㄨㄣ","荥":"acㄒㄧㄥˊ","荦":"abㄌㄨㄛˋ","荧":"bdㄧㄥˊ","荨":"abㄑㄧㄢˊ","荩":"cbㄐㄧㄣˋ","荪":"abㄙㄨㄣ","荫":"abㄧㄣˋ","荬":"abㄇㄞˇ","荭":"abㄏㄨㄥˊ","荮":"cbㄓㄡˋ","药":"abㄧㄠˋ","莒":"abㄐㄩˇ","莛":"abㄊㄧㄥˊ","虐":"cfㄋㄩㄝˋ","虹":"abㄏㄨㄥˊ","虺":"ccㄏㄨㄟˇ","虻":"acㄇㄥˊ","虼":"abㄍㄜˋ","虽":"caㄙㄨㄟ","虾":"acㄏㄚˊ","虿":"baㄔㄞˋ","蚀":"baㄕˊ","蚁":"abㄧˇ","蚂":"acㄇㄚˋ","蚤":"aaㄗㄠˇ","衍":"bcㄧㄢˇ","衲":"adㄋㄚˋ","衽":"aaㄖㄣˋ","衿":"abㄐㄧㄣ","袂":"ccㄇㄟˋ","袄":"aeㄠˇ","要":"ceㄧㄠˋ","觇":"baㄔㄢ","览":"bdㄌㄢˇ","觉":"abㄐㄧㄠˋ","訇":"cbㄏㄨㄥ","诫":"abㄐㄧㄝˋ","诬":"aeㄨ","语":"abㄩˋ","诮":"abㄑㄧㄠˋ","误":"aeㄨˋ","诰":"abㄍㄠˋ","诱":"aeㄧㄡˋ","诲":"acㄏㄨㄟˋ","诳":"abㄎㄨㄤˊ","说":"aaㄕㄨㄟˋ","诵":"aaㄙㄨㄥˋ","诶":"cdㄞ","贰":"aaㄦˋ","贱":"abㄐㄧㄢˋ","贲":"bcㄅㄣ","贳":"aaㄕˋ","贴":"adㄊㄧㄝ","贵":"abㄍㄨㄟˋ","贶":"abㄎㄨㄤˋ","贷":"adㄉㄞˋ","贸":"acㄇㄠˋ","费":"aeㄈㄟˋ","贺":"bcㄏㄜˋ","贻":"aeㄧˊ","赳":"abㄐㄧㄡ","赴":"adㄈㄨˋ","赵":"adㄓㄠˋ","趴":"aeㄆㄚ","轱":"cbㄍㄨ","轲":"abㄎㄜ","轳":"adu","轴":"adㄓㄡˊ","轵":"caㄓˇ","轶":"adㄧˋ","轷":"ccㄏㄨ","轸":"adㄓㄣˇ","轹":"cdㄌㄧˋ","轺":"adㄧㄠˊ","轻":"abㄑㄧㄥ","迷":"acㄇㄧˊ","迸":"acㄅㄥˋ","迹":"adㄐㄧˋ","追":"adㄓㄨㄟ","退":"bdㄊㄨㄟˋ","送":"baㄙㄨㄥˋ","适":"cdㄕˋ","逃":"adㄊㄠˊ","逄":"adㄆㄤˊ","逅":"abㄏㄡˋ","逆":"abㄋㄧˋ","选":"aaㄒㄩㄢˇ","逊":"aaㄒㄩㄣˋ","郗":"acㄒㄧ","郛":"acㄈㄨˊ","郜":"abㄍㄠˋ","郝":"aaㄏㄠˇ","郡":"abㄐㄩㄣˋ","郢":"abㄧㄥˇ","郦":"cdㄌㄧˋ","郧":"aeㄩㄣˊ","酊":"adㄉㄧㄥˇ","酋":"bbㄑㄧㄡˊ","重":"cdㄔㄨㄥˊ","钙":"caㄍㄞˋ","钚":"acㄅㄨˋ","钛":"aaㄊㄞˋ","钜":"cfㄐㄩˋ","钝":"aaㄉㄨㄣˋ","钟":"aaㄓㄨㄥ","钠":"aaㄋㄚˋ","钡":"aaㄅㄟˋ","钢":"aaㄍㄤˋ","钣":"aaㄅㄢˇ","钤":"aaㄑㄧㄢˊ","钥":"caㄧㄠˋ","钦":"aaㄑㄧㄣ","钧":"aaㄐㄩㄣ","钨":"aaㄨ","钩":"aaㄍㄡ","钪":"abㄎㄤˋ","钫":"aaㄈㄤ","钬":"adㄏㄨㄛˇ","钭":"aaㄉㄡˇ","钮":"aaㄋㄧㄡˇ","钯":"aaㄅㄚˇ","闺":"aeㄍㄨㄟ","闻":"acㄨㄣˊ","闼":"adㄊㄚˋ","闽":"acㄇㄧㄣˇ","闾":"cfㄌㄩˊ","阀":"aaㄈㄚˊ","阁":"acㄍㄜˊ","阂":"acㄏㄜˊ","陛":"acㄅㄧˋ","陟":"caㄓˋ","陡":"adㄉㄡˇ","院":"aeㄩㄢˋ","除":"adㄔㄨˊ","陧":"caㄋㄧㄝˋ","陨":"aeㄩㄣˇ","险":"aaㄒㄧㄢˇ","面":"cbㄇㄧㄢˋ","革":"cbㄍㄜˊ","韭":"cbㄐㄧㄡˇ","音":"ceㄧㄣ","顸":"acㄏㄢ","项":"acㄒㄧㄤˋ","顺":"baㄕㄨㄣˋ","须":"baㄒㄩ","飑":"acㄅㄧㄠ","飒":"acㄙㄚˋ","食":"baㄙˋ","饵":"adㄦˇ","饶":"abㄖㄠˊ","饷":"ccㄒㄧㄤˇ","饺":"abㄐㄧㄠˇ","饼":"acㄅㄧㄥˇ","首":"caㄕㄡˇ","香":"bcㄒㄧㄤ","骁":"aaㄒㄧㄠ","骂":"acㄇㄚˋ","骄":"abㄐㄧㄠ","骅":"ccㄏㄨㄚˊ","骆":"adㄌㄨㄛˋ","骇":"acㄏㄞˋ","骈":"acㄆㄧㄢˊ","骨":"cbㄍㄨˇ","鬼":"cbㄍㄨㄟˇ","鸥":"aeㄡ","鸦":"aeㄧㄚ","鸨":"ccㄅㄠˇ","鸩":"adㄓㄣˋ","叟":"baㄙㄡˇ","恰":"abㄑㄧㄚˋ","祐":"ceㄧㄡˋ","昺":"acㄅㄧㄥˇ","垚":"ceㄧㄠˊ","珅":"aaㄕㄣ","玹":"caㄒㄩㄢˊ","洸":"cbㄍㄨㄤ","屌":"adㄉㄧㄠˇ","浕":"adㄐㄧㄣˋ","浐":"acㄔㄢˇ","畑":"cdㄊㄧㄢˊ","闿":"abㄎㄞˇ","咲":"caㄒㄧㄠˋ","怹":"cdㄊㄢ","昳":"adㄉㄧㄝˊ","陞":"caㄕㄥ","査":"caㄔㄚˊ","洺":"acㄇㄧㄥˊ","栃":"cdㄌㄧˋ","垵":"ceㄢˇ","炤":"cdㄓㄠˋ","姮":"abㄏㄥˊ","垟":"aeㄧㄤˊ","恆":"cbㄏㄥˊ","饹":"adㄍㄜ","竑":"ccㄏㄨㄥˊ","剎":"caㄔㄚˋ","饸":"adㄏㄜˊ","垕":"abㄏㄡˋ","袅":"aeㄋㄧㄠˇ","乘":"caㄔㄥˊ","亳":"ccㄅㄛˊ","俯":"acㄈㄨˇ","俱":"afㄐㄩˋ","俳":"acㄆㄞˊ","俸":"acㄈㄥˋ","俺":"aeㄢˇ","俾":"acㄅㄧˇ","倌":"abㄍㄨㄢ","倍":"acㄅㄟˋ","倏":"abㄕㄨ","倒":"adㄉㄠˋ","倔":"adㄐㄩㄝˊ","倘":"cdㄔㄤˊ","候":"acㄏㄡˋ","倚":"abㄧˇ","倜":"bdㄊㄧˋ","借":"baㄐㄧㄝˋ","倡":"aaㄔㄤˋ","倥":"cbㄎㄨㄥ","倦":"abㄐㄩㄢˋ","倨":"afㄐㄩˋ","倩":"aaㄑㄧㄢˋ","倪":"aaㄋㄧˊ","倬":"adㄓㄨㄛ","倭":"adㄨㄛ","倮":"cdㄌㄨㄛˇ","债":"aaㄓㄞˋ","值":"adㄓˊ","倾":"cbㄑㄧㄥ","偌":"adㄖㄨㄛˋ","健":"abㄐㄧㄢˋ","党":"adㄉㄤˇ","兼":"bbㄐㄧㄢ","冢":"adㄓㄨㄥˇ","冤":"beㄩㄢ","冥":"bcㄇㄧㄥˊ","凄":"acㄑㄧ","准":"aeㄓㄨㄣˇ","凇":"cbㄙㄨㄥ","凉":"adㄌㄧㄤˊ","凋":"aaㄉㄧㄠ","凌":"adㄌㄧㄥˊ","剔":"adㄊㄧ","剖":"aaㄆㄡ","剜":"aaㄨㄢ","剞":"caㄐㄧ","剡":"aaㄕㄢˋ","剥":"baㄅㄠ","剧":"afㄐㄩˋ","勐":"acㄇㄥˇ","匪":"acㄈㄟˇ","匿":"abㄋㄧˋ","卿":"bbㄑㄧㄥ","厝":"aaㄘㄨㄛˋ","原":"bbㄩㄢˊ","哥":"bbㄍㄜ","哦":"adㄜˊ","哧":"adㄔ","哨":"aaㄕㄠˋ","哩":"adㄌㄧ","哭":"bbㄎㄨ","哮":"abㄒㄧㄠˋ","哲":"adㄓㄜˊ","哳":"caㄓㄚ","哺":"acㄅㄨˇ","哼":"acㄏㄥ","哽":"abㄍㄥˇ","哿":"abㄍㄜˇ","唁":"abㄧㄢˋ","唆":"aaㄙㄨㄛ","唇":"acㄔㄨㄣˊ","唉":"aeㄞˋ","唏":"aaㄒㄧ","唐":"adㄊㄤˊ","唑":"aaㄗㄨㄛˋ","唔":"ceㄨˊ","唛":"acㄇㄚˋ","唠":"adㄌㄠˊ","唢":"aaㄙㄨㄛˇ","唣":"caㄗㄠˋ","唤":"acㄏㄨㄢˋ","唧":"abㄐㄧ","啊":"aeㄚˊ","圃":"acㄆㄨˇ","圄":"abㄩˇ","圆":"aeㄩㄢˊ","垸":"abㄩㄢˋ","埂":"aeㄍㄥˇ","埃":"aeㄞ","埋":"aeㄇㄞˊ","埒":"aeㄌㄧㄝˋ","埔":"aeㄅㄨˋ","埕":"ceㄔㄥˊ","埘":"aaㄕˊ","埙":"aeㄒㄩㄣ","埚":"aeㄍㄨㄛ","壶":"caㄏㄨˊ","夏":"bdㄒㄧㄚˋ","套":"bdㄊㄠˋ","奘":"aaㄗㄤˋ","奚":"bbㄒㄧ","姬":"abㄐㄧ","娉":"acㄆㄧㄣˋ","娌":"adㄌㄧˇ","娑":"acㄙㄨㄛ","娓":"aeㄨㄟˇ","娘":"adㄋㄧㄤˊ","娟":"abㄐㄩㄢ","娠":"aaㄕㄣ","娣":"adㄉㄧˋ","娥":"acㄜˊ","娩":"abㄇㄧㄢˇ","娱":"abㄩˊ","娲":"adㄨㄚ","娴":"aeㄒㄧㄢˊ","婀":"abㄜ","孬":"bdㄋㄠ","宰":"baㄗㄞˇ","害":"acㄏㄞˋ","宴":"aeㄧㄢˋ","宵":"aaㄒㄧㄠ","家":"bbㄍㄨ","宸":"aaㄔㄣˊ","容":"ceㄖㄨㄥˊ","宽":"abㄎㄨㄢ","宾":"acㄅㄧㄣ","射":"baㄕㄜˋ","屐":"abㄐㄧ","屑":"acㄒㄧㄝˋ","展":"adㄓㄢˇ","屙":"abㄜ","峨":"aeㄜˊ","峪":"abㄩˋ","峭":"aeㄑㄧㄠˋ","峰":"acㄈㄥ","峻":"aaㄐㄩㄣˋ","崂":"aeㄌㄠˊ","崃":"aeㄌㄞ","席":"baㄒㄧˊ","帱":"aaㄔㄡˊ","座":"aaㄗㄨㄛˋ","弱":"baㄖㄨㄛˋ","徐":"aaㄒㄩˊ","徒":"adㄊㄨˊ","徕":"adㄌㄞˊ","恁":"adㄋㄣˋ","恋":"adㄌㄧㄢˋ","恐":"abㄎㄨㄥˇ","恕":"adㄕㄨˋ","恙":"aeㄧㄤˋ","恚":"acㄏㄨㄟˋ","恝":"abㄐㄧㄚˊ","恣":"adㄗˋ","恧":"cfㄋㄩˋ","恩":"aeㄣ","恭":"abㄍㄨㄥ","息":"caㄒㄧ","恳":"abㄎㄣˇ","恶":"aeㄜˊ","悃":"abㄎㄨㄣˇ","悄":"abㄑㄧㄠˇ","悌":"adㄊㄧˋ","悍":"abㄏㄢˋ","悒":"abㄧˋ","悔":"acㄏㄨㄟˇ","悖":"acㄅㄟˋ","悚":"aaㄙㄨㄥˇ","悛":"abㄑㄩㄢ","悝":"abㄎㄨㄟ","悟":"abㄨˋ","悦":"aaㄩㄝˋ","悭":"abㄑㄧㄢ","悯":"acㄇㄧㄣˇ","扇":"baㄕㄢˋ","拳":"abㄑㄩㄢˊ","拿":"bdㄋㄚˊ","挈":"aaㄑㄧㄝˋ","挚":"aaㄓˋ","挛":"cdㄌㄨㄢˊ","挨":"aeㄞˊ","挫":"aaㄘㄨㄛˋ","振":"adㄓㄣˋ","挹":"abㄧˋ","挽":"adㄨㄢˇ","捂":"aeㄨˇ","捃":"abㄐㄩㄣˋ","捅":"aaㄊㄨㄥˇ","捆":"cbㄎㄨㄣˇ","捉":"adㄓㄨㄛ","捋":"adˇ","捌":"acㄅㄚ","捍":"abㄏㄢˋ","捎":"aaㄕㄠˋ","捏":"aaㄋㄧㄝ","捐":"abㄐㄩㄢ","捕":"acㄅㄨˇ","捞":"adㄌㄠ","损":"aaㄙㄨㄣˇ","捡":"abㄐㄧㄢˇ","换":"acㄏㄨㄢˋ","捣":"adㄉㄠˇ","效":"acㄒㄧㄠˋ","敉":"acㄇㄧˇ","敌":"adㄉㄧˊ","敖":"aeㄠˊ","斋":"aaㄓㄞ","料":"bdㄌㄧㄠˋ","旁":"acㄅㄤˋ","旃":"adㄓㄢ","旄":"ccㄇㄠˊ","旅":"cfㄌㄩˇ","旆":"ccㄆㄟˋ","晁":"aaㄔㄠˊ","晃":"adㄏㄨㄤˋ","晋":"bdㄐㄧㄣˋ","晌":"adㄕㄤˇ","晏":"aeㄧㄢˋ","晒":"cdㄕㄞˋ","晓":"adㄒㄧㄠˇ","晔":"cdㄧㄝˋ","晕":"aeㄩㄣˋ","晖":"acㄏㄨㄟ","晟":"adㄕㄥˋ","朔":"adㄕㄨㄛˋ","朕":"cdㄓㄣˋ","朗":"adㄌㄤˇ","柴":"abㄔㄞˊ","栓":"abㄕㄨㄢ","栖":"abㄑㄧ","栗":"cbㄌㄧˋ","栝":"abㄍㄨㄚ","校":"abㄐㄧㄠˋ","栩":"abㄒㄩˇ","株":"abㄓㄨ","栲":"abㄎㄠˇ","栳":"cbㄌㄠˇ","样":"abㄧㄤˋ","核":"abㄏㄜˊ","根":"abㄍㄣ","格":"abㄍㄜˊ","栽":"aaㄗㄞ","栾":"cdㄌㄨㄢˊ","桀":"bbㄐㄧㄝˊ","桁":"abㄏㄤˊ","桂":"abㄍㄨㄟˋ","桃":"abㄊㄠˊ","桄":"abㄍㄨㄤˋ","桅":"abㄨㄟˊ","框":"abㄎㄨㄤˋ","案":"aeㄢˋ","桉":"cbㄢ","桊":"cbㄐㄩㄢˋ","桌":"abㄓㄨㄛ","桎":"abㄓˋ","桐":"abㄊㄨㄥˊ","桑":"cbㄙㄤ","桓":"abㄏㄨㄢˊ","桔":"afㄐㄧㄝˊ","桕":"abㄐㄧㄡˋ","桠":"abㄧㄚ","桡":"abㄖㄠˊ","桢":"abㄓㄣ","档":"abㄉㄤˋ","桤":"abㄑㄧ","桥":"abㄑㄧㄠˊ","桦":"abㄏㄨㄚˋ","桧":"abㄍㄨㄟˋ","桨":"abㄐㄧㄤˇ","桩":"abㄓㄨㄤ","梃":"abㄊㄧㄥˋ","梆":"cbㄅㄤ","殉":"aaㄒㄩㄣˋ","殊":"aaㄕㄨ","殷":"aeㄧㄢ","毙":"acㄅㄧˋ","毪":"acㄇㄨˊ","氤":"aeㄧㄣ","氦":"acㄏㄞˋ","氧":"aeㄧㄤˇ","氨":"ccㄢ","氩":"aeㄧㄚˋ","泰":"ccㄊㄞˋ","流":"acㄌㄧㄡˊ","浆":"acㄐㄧㄤ","浙":"acㄓㄜˋ","浚":"acㄐㄩㄣˋ","浜":"acㄅㄤ","浞":"acㄓㄨㄛˊ","浠":"acㄒㄧ","浣":"ccㄏㄨㄢˋ","浦":"acㄆㄨˇ","浩":"acㄏㄠˋ","浪":"acㄌㄤˋ","浮":"acㄈㄨˊ","浯":"acㄨˊ","浴":"acㄩˋ","海":"acㄏㄞˇ","浸":"acㄐㄧㄣˋ","浼":"acㄇㄟˇ","涂":"acㄊㄨˊ","涅":"acㄋㄧㄝˋ","消":"acㄒㄧㄠ","涉":"bcㄕㄜˋ","涌":"acㄔㄨㄥ","涑":"acㄙㄨˋ","涓":"acㄐㄩㄢ","涔":"acㄘㄣˊ","涕":"acㄊㄧˋ","涛":"acㄊㄠ","涝":"acㄌㄠˊ","涞":"acㄌㄞ","涟":"acㄌㄧㄢˊ","涠":"acㄨㄟˊ","涡":"acㄍㄨㄛ","涣":"acㄏㄨㄢˋ","涤":"acㄉㄧˊ","润":"acㄖㄨㄣˋ","涧":"acㄐㄧㄢˋ","涨":"acㄓㄤˋ","涩":"acㄙㄜˋ","烈":"adㄌㄧㄝˋ","烊":"adㄧㄤˊ","烘":"adㄏㄨㄥ","烙":"adㄌㄠˋ","烛":"adㄓㄨˊ","烟":"adㄧㄢ","烤":"adㄎㄠˇ","烦":"bdㄈㄢˊ","烧":"adㄕㄠ","烨":"bdㄧㄝˋ","烩":"adㄏㄨㄟˋ","烫":"acㄊㄤˋ","烬":"cdㄐㄧㄣˋ","热":"adㄖㄜˋ","爱":"aeㄞˋ","爹":"adㄉㄧㄝ","特":"adㄊㄜˋ","牺":"abㄒㄧ","狳":"ceㄩˊ","狴":"acㄅㄧˋ","狷":"adㄐㄩㄢˋ","狸":"adㄌㄧˊ","狺":"beㄧㄣˊ","狻":"aaㄙㄨㄢ","狼":"adㄌㄤˊ","猁":"cdㄌㄧˋ","猃":"aaㄒㄧㄢˇ","珙":"abㄍㄨㄥˇ","珞":"adㄌㄨㄛˋ","珠":"aaㄓㄨ","珥":"adㄦˇ","珧":"cdㄧㄠˊ","珩":"acㄏㄤˊ","班":"bcㄅㄢ","珲":"ccㄏㄨㄟ","琊":"ceㄧㄚˊ","瓞":"adㄉㄧㄝˊ","瓶":"acㄆㄧㄥˊ","瓷":"aaㄘˊ","畔":"acㄆㄢˋ","留":"adㄌㄧㄡˊ","畚":"acㄅㄣˇ","畛":"aaㄓㄣˇ","畜":"bdㄔㄨˋ","疰":"aaㄓㄨˋ","疱":"acㄆㄠˋ","疲":"acㄆㄧˊ","疳":"abㄍㄢ","疴":"cbㄎㄜ","疸":"adㄉㄢˇ","疹":"aaㄓㄣˇ","疼":"adㄊㄥˊ","疽":"afㄐㄩ","疾":"bdㄐㄧˊ","痂":"abㄐㄧㄚ","痃":"aaㄒㄩㄢˊ","痄":"aaㄓㄚˋ","病":"acㄅㄧㄥˋ","症":"aaㄓㄥˋ","痈":"abㄩㄥ","痉":"abㄐㄧㄥˋ","皋":"bbㄍㄠ","皱":"aaㄓㄡˋ","益":"beㄧˋ","盍":"ccㄏㄜˊ","盎":"aeㄤˋ","盏":"adㄓㄢˇ","盐":"aeㄧㄢˊ","监":"beㄐㄧㄢˋ","眙":"aeㄧˊ","眚":"caㄕㄥˇ","真":"baㄓㄣ","眠":"acㄇㄧㄢˊ","眢":"aeㄩㄢ","眩":"aaㄏㄨㄢˋ","砝":"aeㄈㄚˇ","砟":"aeㄓㄚˇ","砣":"aeㄊㄨㄛˊ","砥":"aeㄉㄧˇ","砧":"aeㄓㄣ","砩":"ceㄈㄨˊ","砬":"beㄌㄚˊ","砰":"aeㄆㄥ","破":"aeㄆㄛˋ","砷":"aeㄕㄣ","砸":"aeㄗㄚˊ","砹":"ceㄞˋ","砺":"ceㄌㄧˋ","砻":"aeㄌㄨㄥˊ","砼":"abㄊㄨㄥˊ","砾":"aeㄌㄧˋ","础":"aeㄔㄨˇ","祟":"baㄙㄨㄟˋ","祥":"aaㄒㄧㄤˊ","祧":"adㄊㄧㄠ","祯":"adㄓㄣ","离":"adㄌㄧˊ","秘":"acㄅㄧˋ","租":"aaㄗㄨ","秣":"acㄇㄛˋ","秤":"ccㄔㄥˋ","秦":"bdㄑㄧㄣˊ","秧":"adㄧㄤ","秩":"adㄓˋ","秫":"abㄕㄨˊ","积":"adㄐㄧ","称":"caㄔㄣˋ","窄":"aaㄓㄞˇ","窈":"adㄧㄠˇ","窍":"abㄑㄧㄠˋ","站":"adㄓㄢˋ","竞":"bbㄐㄧㄥˋ","笄":"abㄐㄧ","笆":"abㄅㄚ","笊":"abㄓㄠˋ","笋":"abㄙㄨㄣˇ","笏":"abㄏㄨˋ","笑":"aaㄒㄧㄠˋ","笔":"bbㄅㄧˇ","笕":"cbㄐㄧㄢˇ","笫":"adㄗˇ","粉":"abㄈㄣˇ","粑":"acㄅㄚ","紊":"aaㄨㄣˇ","素":"baㄙㄨˋ","索":"baㄙㄨㄛˇ","紧":"bbㄐㄧㄣˇ","绠":"abㄅㄧㄥˇ","绡":"aaㄒㄧㄠ","绢":"abㄐㄩㄢˋ","绣":"aaㄒㄧㄡˋ","绥":"bcㄙㄨㄟˊ","绦":"adㄊㄠ","继":"abㄐㄧˋ","绨":"adㄊㄧˊ","缺":"abㄑㄩㄝ","罟":"abㄍㄨˇ","罡":"baㄍㄤ","罢":"bcㄅㄚˋ","羔":"bbㄍㄠ","羞":"caㄒㄧㄡ","翁":"aeㄨㄥ","翅":"aaㄔˋ","耄":"adㄇㄠˋ","耆":"abㄑㄧˊ","耕":"abㄍㄥ","耖":"aaㄔㄠˋ","耗":"acㄏㄠˋ","耘":"acㄩㄣˊ","耙":"abㄅㄚˋ","耸":"aaㄙㄨㄥˇ","耻":"adㄔˇ","耽":"adㄉㄢ","耿":"adㄍㄥˇ","聂":"baㄋㄧㄝˋ","胭":"aeㄧㄢ","胯":"abㄎㄨㄚˋ","胰":"aeㄧˊ","胱":"cbㄍㄨㄤ","胲":"ccㄏㄞˇ","胳":"abㄍㄜˊ","胴":"adㄉㄨㄥˋ","胶":"cbㄐㄧㄠ","胸":"aaㄒㄩㄥ","胼":"acㄆㄧㄢˊ","能":"cdㄋㄥˊ","脂":"aaㄓ","脆":"aaㄘㄨㄟˋ","脊":"bbㄐㄧˇ","脍":"cbㄎㄨㄞˋ","脎":"acㄙㄚˋ","脏":"aaㄗㄤˋ","脐":"cbㄑㄧˊ","脑":"adㄋㄠˇ","脒":"acㄇㄧˇ","脓":"cdㄋㄨㄥˊ","臬":"bbㄋㄧㄝˋ","臭":"acㄔㄡˋ","致":"adㄓˋ","舀":"cdㄧㄠˇ","舐":"aaㄕˋ","舨":"ccㄅㄢˇ","航":"acㄏㄤˊ","舫":"acㄈㄤˇ","般":"bcㄅㄢ","舭":"acㄅㄧˇ","舯":"cdㄓㄨㄥ","舰":"abㄐㄧㄢˋ","舱":"aaㄘㄤ","艳":"beㄧㄢˋ","荷":"abㄏㄜˊ","荸":"abㄅㄧˊ","荻":"abㄉㄧˊ","荼":"abㄕㄨ","荽":"cb","莅":"abㄌㄧˋ","莆":"abㄆㄨˊ","莉":"abㄌㄧˋ","莎":"abㄙㄨㄛ","莓":"abㄇㄟˊ","莘":"abㄕㄣ","莜":"abㄧㄡˊ","莞":"abㄍㄨㄢˇ","莠":"abㄧㄡˇ","莨":"abㄌㄤˊ","莩":"abㄈㄨˊ","莪":"cbㄜˊ","莫":"bcㄇㄛˋ","莰":"abㄎㄢˇ","莱":"abㄌㄞ","莲":"abㄌㄧㄢˊ","莳":"abㄕˊ","莴":"abㄨㄛ","莶":"abㄒㄧㄢ","获":"cbㄏㄨㄛˋ","莸":"abㄧㄡˊ","莹":"abㄧㄥˊ","莺":"abㄧㄥ","莼":"abㄔㄨㄣˊ","莽":"bbㄇㄤˇ","虑":"cfㄌㄩˋ","虔":"abㄑㄧㄢˊ","蚊":"acㄨㄣˊ","蚋":"adㄖㄨㄟˋ","蚌":"acㄅㄤˋ","蚍":"acㄆㄧˊ","蚓":"aeㄧㄣˇ","蚕":"aaㄘㄢˊ","蚜":"aeㄧㄚˊ","蚝":"acㄏㄠˊ","蚣":"abㄍㄨㄥ","蚧":"cbㄐㄧㄝˋ","蚨":"acㄈㄨˊ","蚩":"aaㄔ","蚪":"adㄉㄡˇ","蚬":"aaㄒㄧㄢˇ","衄":"cfㄋㄩˋ","衮":"ab","衰":"baㄕㄨㄞ","衷":"adㄓㄨㄥ","衾":"abㄑㄧㄣ","袁":"aeㄩㄢˊ","袍":"acㄆㄠˊ","袒":"adㄊㄢˇ","袖":"aaㄒㄧㄡˋ","袜":"bdㄇㄛˋ","袢":"acㄈㄢˊ","被":"acㄅㄟˋ","觊":"abㄐㄧˋ","请":"aaㄑㄧㄥˇ","诸":"aaㄓㄨ","诹":"aaㄗㄡ","诺":"adㄋㄨㄛˋ","读":"adㄉㄡˋ","诼":"aaㄓㄨㄛˊ","诽":"acㄈㄟˇ","课":"abㄎㄜˋ","诿":"aeㄨㄟˇ","谀":"aeㄩˊ","谁":"aaㄕㄟˊ","谂":"aaㄕㄣˇ","调":"adㄉㄧㄠˋ","谄":"aaㄔㄢˇ","谅":"adㄌㄧㄤˋ","谆":"aaㄓㄨㄣ","谇":"baㄙㄨㄟˋ","谈":"adㄊㄢˊ","谊":"cbㄧˋ","豇":"abㄐㄧㄤ","豹":"acㄅㄠˋ","豺":"aaㄔㄞˊ","贼":"aaㄗㄟˊ","贽":"adㄓˋ","贾":"acㄍㄨˇ","贿":"acㄏㄨㄟˋ","赀":"adㄗ","赁":"adㄌㄧㄣˋ","赂":"adㄌㄩˋ","赃":"aaㄗㄤ","资":"aaㄗ","赅":"abㄍㄞ","赆":"abㄐㄧㄣˋ","赶":"abㄍㄢˇ","起":"abㄑㄧˇ","趵":"acㄅㄠˋ","趸":"cdㄉㄨㄣˇ","趿":"adㄊㄚ","躬":"abㄍㄨㄥ","軎":"ceㄨㄟˋ","轼":"caㄕˋ","载":"aaㄗㄞˋ","轾":"ceㄓˋ","轿":"abㄐㄧㄠˋ","辁":"abㄑㄩㄢˊ","辂":"adㄌㄩˋ","较":"acㄐㄧㄠˋ","辱":"baㄖㄨˇ","逋":"acㄅㄨ","逍":"aaㄒㄧㄠ","透":"adㄊㄡˋ","逐":"bdㄓㄨˊ","逑":"abㄑㄧㄡˊ","递":"adㄉㄧˋ","途":"aaㄊㄨˊ","逖":"adㄊㄧˋ","逗":"adㄉㄡˋ","通":"adㄊㄨㄥˋ","逛":"abㄍㄨㄤˋ","逝":"aaㄕˋ","逞":"adㄔㄥˇ","速":"aaㄙㄨˋ","造":"aaㄗㄠˋ","逡":"aaㄑㄩㄣ","逢":"acㄈㄥˊ","逦":"adㄌㄧˇ","邕":"bbㄩㄥ","部":"acㄅㄨˋ","郫":"acㄆㄧˊ","郭":"abㄍㄨㄛ","郯":"adㄊㄢˊ","郴":"cbㄔㄣ","郸":"adㄉㄢ","都":"adㄉㄡ","酌":"aaㄓㄨㄛˊ","配":"acㄆㄟˋ","酎":"caㄓㄡˋ","酏":"ceㄧˇ","酐":"abㄍㄢ","酒":"bcㄐㄧㄡˇ","釜":"acㄈㄨˇ","钰":"aaㄩˋ","钲":"aaㄓㄥ","钳":"aaㄑㄧㄢˊ","钴":"caㄍㄨˇ","钵":"aaㄅㄛ","钶":"caㄎㄜ","钷":"aaㄆㄛˇ","钸":"caㄅㄨ","钹":"aaㄅㄛˊ","钺":"aaㄩㄝˋ","钻":"aaㄗㄨㄢˋ","钼":"aaㄇㄨˋ","钽":"aaㄊㄢˇ","钾":"aaㄐㄧㄚˇ","钿":"aaㄉㄧㄢˋ","铀":"aaㄧㄡˊ","铁":"aaㄊㄧㄝˇ","铂":"aaㄅㄛˊ","铃":"aaㄌㄧㄥˊ","铄":"aaㄕㄨㄛˋ","铅":"aaㄑㄧㄢ","铆":"aaㄇㄠˇ","铈":"aaㄕˋ","铉":"aaㄒㄩㄢˋ","铊":"aaㄊㄚ","铋":"aaㄅㄧˋ","铌":"aaㄋㄧˊ","铍":"aaㄆㄧˊ","铎":"aaㄉㄨㄛˊ","阃":"abㄎㄨㄣˇ","阄":"bbㄐㄧㄡ","阅":"aeㄩㄝˋ","阆":"adㄌㄤˋ","陪":"acㄆㄟˊ","陬":"aaㄗㄡ","陲":"aaㄔㄨㄟˊ","陴":"ccㄆㄧˊ","陵":"adㄌㄧㄥˊ","陶":"adㄊㄠˊ","陷":"aaㄒㄧㄢˋ","隼":"caㄙㄨㄣˇ","隽":"abㄐㄩㄢˋ","难":"cbㄋㄢˊ","顼":"aeㄒㄩ","顽":"adㄨㄢˊ","顾":"abㄍㄨˋ","顿":"adㄉㄨㄣˋ","颀":"abㄑㄧˊ","颁":"acㄅㄢ","颂":"abㄙㄨㄥˋ","颃":"cc","预":"abㄩˋ","饽":"acㄅㄛ","饿":"abㄜˇ","馀":"aeㄩˊ","馁":"adㄋㄟˇ","骊":"adㄌㄧˊ","骋":"adㄔㄥˇ","验":"abㄧㄢˋ","骏":"aaㄐㄩㄣˋ","高":"cbㄍㄠ","髟":"cfㄅㄧㄠ","鬯":"caㄔㄤˋ","鬲":"bbㄍㄜˊ","鸪":"abㄍㄨ","鸫":"adㄉㄨㄥ","鸬":"adㄌㄩˊ","鸭":"aeㄧㄚ","鸯":"adㄧㄤ","鸱":"adㄔ","鸲":"abㄑㄩˊ","鸳":"aeㄩㄢ","鸵":"adㄊㄨㄛˊ","鸶":"caㄙ","龀":"adㄔㄣˋ","彧":"ceㄩˋ","翀":"adㄔㄨㄥ","珮":"caㄆㄟˋ","埇":"ceㄩㄥˇ","崀":"adㄌㄤˋ","俶":"aaㄔㄨˋ","疍":"adㄉㄢˋ","翃":"cbㄏㄨㄥˊ","珣":"adㄒㄩㄣˊ","峯":"ceㄈㄥ","埗":"ceㄅㄨˋ","埈":"cdㄐㄩㄣˋ","倓":"adㄊㄢˊ","珪":"cbㄍㄨㄟ","娭":"cdㄞ","鸮":"aaㄒㄧㄠ","栢":"cbㄅㄞˇ","烜":"adㄒㄩㄢˇ","託":"cdㄊㄨㄛ","珽":"adㄊㄧㄥˇ","脩":"caㄒㄧㄡ","挼":"aaㄖㄨㄛˊ","彪":"bcㄅㄧㄠ","晚":"acㄨㄢˇ","梢":"abㄕㄠ","梧":"abㄨˊ","梨":"adㄌㄧˊ","龛":"adㄎㄢ","乾":"abㄑㄧㄢˊ","偃":"aeㄧㄢˇ","假":"abㄐㄧㄚˋ","偈":"abㄐㄧˋ","偎":"acㄨㄟ","偏":"acㄆㄧㄢ","偕":"abㄒㄧㄝˊ","做":"baㄗㄨㄛˋ","停":"adㄊㄧㄥˊ","偬":"cdㄗㄨㄥˇ","偶":"abㄡˇ","偷":"aaㄊㄡ","偻":"adㄌㄡˊ","偾":"acㄈㄣˋ","偿":"aaㄔㄤˊ","傀":"abㄎㄨㄟˇ","兜":"bbㄉㄡ","兽":"caㄕㄡˋ","冕":"acㄇㄧㄢˇ","减":"abㄐㄧㄢˇ","凑":"adㄘㄡˋ","凰":"acㄏㄨㄤˊ","剪":"aaㄐㄧㄢˇ","副":"aaㄈㄨˋ","勒":"adㄌㄜˋ","勖":"aeㄒㄩˋ","勘":"caㄎㄢ","匏":"acㄆㄠˊ","匐":"acㄈㄨˊ","匙":"aaㄔˊ","匮":"abㄎㄨㄟˋ","匾":"afㄅㄧㄢˇ","厢":"abㄒㄧㄤ","厣":"bbㄧㄢˇ","厩":"abㄐㄧㄡˋ","唪":"acㄈㄥˇ","唬":"acㄏㄨˇ","售":"aaㄕㄡˋ","唯":"aeㄨㄟˊ","唰":"caㄕㄨㄚ","唱":"aaㄔㄤˋ","唳":"adㄌㄧˋ","唷":"ab","唼":"aaㄕㄚˋ","唾":"adㄊㄨㄛˋ","唿":"acㄏㄨ","啁":"adㄓㄠ","啃":"abㄎㄣˇ","啄":"adㄓㄨㄛˊ","商":"baㄕㄤ","啉":"abㄌㄧㄣˊ","啐":"aaㄘㄨㄟˋ","啕":"adㄊㄠˊ","啖":"adㄉㄢˋ","啜":"aaㄔㄨㄞˋ","啡":"acㄈㄟ","啤":"acㄆㄧˊ","啥":"aaㄕㄚˊ","啦":"adㄌㄚ","啧":"aaㄗㄜˊ","啪":"aeㄆㄚ","啬":"bbㄙㄜˋ","啭":"adㄓㄨㄢˋ","啮":"baㄋㄧㄝˋ","啵":"acㄅㄛ","啶":"adㄉㄧㄥˋ","啷":"adㄌㄤ","啸":"abㄒㄧㄠˋ","喏":"adㄋㄨㄛˋ","喵":"acㄇㄧㄠ","圈":"abㄐㄩㄢˋ","圉":"bbㄩˇ","圊":"aaㄑㄧㄥ","埝":"aeㄋㄧㄢˋ","域":"aeㄩˋ","埠":"aeㄅㄨˋ","埤":"aeㄆㄧˊ","埭":"aeㄉㄞˋ","埯":"aeㄢˇ","埴":"ceㄓˊ","埸":"aeㄧˋ","培":"aeㄆㄟˊ","基":"aeㄐㄧ","埽":"beㄙㄠˋ","堀":"ceㄎㄨ","堂":"aeㄊㄤˊ","堆":"aeㄉㄨㄟ","堇":"cbㄐㄧㄣˇ","堋":"aeㄆㄥˊ","堍":"aeㄊㄨˋ","堑":"aeㄑㄧㄢˋ","堕":"aeㄉㄨㄛˇ","堵":"aaㄉㄨˇ","够":"acㄍㄡˋ","奢":"aaㄕㄚˊ","娶":"abㄑㄩˇ","娼":"aaㄔㄤ","婆":"acㄆㄛˊ","婉":"aeㄨㄢˇ","婊":"acㄅㄧㄠˇ","婕":"cbㄐㄧㄝˊ","婚":"acㄏㄨㄣ","婢":"acㄅㄧˋ","婧":"abㄐㄧㄥˋ","婪":"abㄌㄢˊ","婴":"aeㄧㄥ","婵":"aaㄔㄢˊ","婶":"aaㄕㄣˇ","孰":"baㄕㄨˊ","宿":"aaㄙㄨˋ","寂":"baㄐㄧˋ","寄":"abㄐㄧˋ","寅":"ceㄧㄣˊ","密":"acㄇㄧˋ","寇":"bbㄎㄡˋ","尉":"beㄨㄟˋ","屠":"adㄊㄨˊ","崆":"ceㄎㄨㄥ","崇":"aaㄔㄨㄥˊ","崎":"aeㄑㄧˊ","崔":"abㄘㄨㄟ","崖":"aeㄧㄚˊ","崛":"aeㄐㄩㄝˊ","崞":"aeㄍㄨㄛ","崤":"aeㄒㄧㄠˊ","崦":"aeㄧㄢ","崧":"cbㄙㄨㄥ","崩":"aeㄅㄥ","崭":"aeㄓㄢˇ","崮":"ceㄍㄨˋ","巢":"caㄔㄠˊ","帷":"aeㄨㄟˊ","常":"aaㄔㄤˊ","帻":"aaㄗㄜˊ","帼":"abㄍㄨㄛˊ","庳":"acㄅㄧˋ","庵":"ceㄢ","庶":"baㄕㄨˋ","康":"cbㄎㄤ","庸":"beㄩㄥ","庹":"bdㄊㄨㄛˇ","庾":"cbㄩˇ","廊":"adㄌㄤˊ","彗":"bcㄏㄨㄟˋ","彩":"aaㄘㄞˇ","彬":"abㄅㄧㄣ","得":"baㄉㄜˊ","徘":"acㄆㄞˊ","徙":"aaㄒㄧˇ","徜":"aaㄔㄤˊ","恿":"aeㄩㄥˇ","悉":"baㄒㄧ","悠":"aeㄧㄡ","患":"acㄏㄨㄢˋ","您":"bdㄋㄧㄣˊ","悫":"baㄑㄩㄝˋ","悬":"abㄒㄩㄢˊ","悱":"acㄈㄟˇ","悴":"aaㄘㄨㄟˋ","悸":"abㄐㄧˋ","悻":"abㄒㄧㄥˋ","悼":"adㄉㄠˋ","情":"aaㄑㄧㄥˊ","惆":"aaㄔㄡˊ","惊":"cbㄐㄧㄥ","惋":"adㄨㄢˇ","惕":"adㄊㄧˋ","惘":"adㄨㄤˇ","惚":"acㄏㄨ","惜":"aaㄒㄧ","惝":"aaㄔㄤˇ","惟":"aeㄨㄟˊ","惦":"adㄉㄧㄢˋ","惧":"afㄐㄩˋ","惨":"aaㄘㄢˇ","惬":"aaㄑㄧㄝˋ","惭":"aaㄘㄢˊ","惮":"adㄉㄚˊ","惯":"aeㄍㄨㄢˋ","戚":"adㄑㄧ","戛":"abㄐㄧㄚˊ","扈":"acㄏㄨˋ","挲":"acㄙㄨㄛ","捧":"acㄆㄥˇ","捩":"adㄌㄧㄝˋ","捭":"adㄅㄞˇ","据":"afㄐㄩˋ","捱":"ceㄞˊ","捶":"aaㄔㄨㄟˊ","捷":"aaㄐㄧㄝˊ","捺":"adㄋㄚˋ","捻":"adㄋㄧㄢˇ","掀":"aaㄒㄧㄢ","掂":"adㄉㄧㄢ","掇":"adㄉㄨㄛ","授":"aaㄕㄡˋ","掉":"aaㄉㄧㄠˋ","掊":"aaㄆㄡˊ","掎":"abㄐㄧˇ","掏":"adㄊㄠ","掐":"abㄑㄧㄚ","排":"acㄆㄞˊ","掖":"aeㄧㄝˋ","掘":"abㄐㄩㄝˊ","掠":"cfㄌㄩㄝˋ","探":"adㄊㄢˋ","接":"adㄐㄧㄝˊ","控":"abㄎㄨㄥˋ","推":"aaㄊㄨㄟ","掩":"abㄧㄢˇ","措":"aaㄘㄨㄛˋ","掬":"afㄐㄩ","掭":"adㄊㄧㄢˋ","掮":"abㄑㄧㄢˊ","掳":"adㄌㄩˇ","掴":"abㄍㄨㄛˊ","掷":"adㄓˋ","掸":"adㄉㄢˇ","掺":"aaㄘㄢˋ","掼":"abㄍㄨㄢˋ","揶":"aeㄧㄝˊ","敏":"acㄇㄧㄣˇ","救":"abㄐㄧㄡˋ","敕":"adㄔˋ","教":"abㄐㄧㄠˋ","敛":"abㄌㄧㄢˇ","敝":"bcㄅㄧˋ","敢":"bbㄍㄢˇ","斛":"bdㄏㄨˊ","斜":"aaㄒㄧㄝˊ","断":"bdㄉㄨㄢˋ","旋":"baㄒㄩㄢˊ","旌":"aaㄐㄧㄥ","旎":"abㄋㄧˇ","族":"baㄗㄨˊ","晗":"cdㄏㄢˊ","晡":"adㄅㄨ","晤":"abㄨˋ","晦":"acㄏㄨㄟˋ","晨":"aaㄔㄣˊ","曹":"baㄘㄠˊ","曼":"acㄇㄢˋ","望":"bcㄨㄤˋ","桫":"abㄙㄨㄛ","桴":"abㄈㄨˊ","桶":"abㄊㄨㄥˇ","桷":"abㄐㄩㄝˊ","梁":"adㄌㄧㄤˊ","梅":"abㄇㄟˊ","梏":"abㄍㄨˋ","梓":"abㄗˇ","梗":"abㄍㄥˇ","梦":"bbㄇㄥˋ","梭":"abㄙㄨㄛ","梯":"abㄊㄧ","械":"abㄒㄧㄝˋ","梳":"abㄕㄨ","梵":"abㄈㄢˋ","检":"abㄐㄧㄢˇ","棂":"abㄌㄧㄥˊ","欲":"aeㄩˋ","欷":"aaㄒㄧ","殍":"acㄆㄧㄠˇ","殒":"aeㄩㄣˇ","殓":"adㄌㄧㄢˋ","毫":"bcㄏㄠˊ","氪":"abㄎㄜˋ","涪":"bcㄈㄨˊ","涫":"acㄍㄨㄢˋ","涮":"acㄕㄨㄢˋ","涯":"acㄧㄚˊ","液":"acㄧㄝˋ","涵":"acㄏㄢˊ","涸":"acㄏㄜˊ","涿":"acㄓㄨㄛ","淀":"acㄉㄧㄢˋ","淄":"acㄗ","淅":"acㄒㄧ","淆":"acㄒㄧㄠˊ","淇":"acㄑㄧˊ","淋":"acㄌㄧㄣˊ","淌":"acㄊㄤˇ","淑":"acㄕㄨ","淖":"acㄋㄠˋ","淘":"acㄊㄠˊ","淙":"acㄘㄨㄥˊ","淝":"acㄈㄟˊ","淞":"acㄙㄨㄥ","淠":"ccㄆㄧˋ","淡":"acㄉㄢˋ","淤":"acㄩ","淦":"ccㄍㄢˋ","淬":"acㄘㄨㄟˋ","淮":"acㄏㄨㄞˊ","深":"acㄕㄣ","淳":"acㄔㄨㄣˊ","混":"acㄏㄨㄣˊ","淹":"acㄧㄢ","添":"acㄊㄧㄢ","清":"acㄑㄧㄥ","渊":"ccㄩㄢ","渌":"acㄌㄩˋ","渍":"acㄗˋ","渎":"acㄉㄡˋ","渐":"acㄐㄧㄢˋ","渑":"acㄇㄧㄢˇ","渔":"acㄩˊ","渖":"ccㄕㄣˇ","渗":"acㄕㄣˋ","渚":"acㄓㄨˇ","渠":"acㄑㄩˊ","烯":"adㄒㄧ","烷":"adㄨㄢˊ","烹":"acㄆㄥ","烽":"adㄈㄥ","焉":"ceㄧㄢ","焊":"adㄏㄢˋ","焐":"adㄨˋ","焓":"adㄏㄢˊ","焕":"adㄏㄨㄢˋ","焖":"adㄇㄣˋ","焘":"adㄉㄠˋ","爽":"baㄕㄨㄤ","牾":"aeㄨˇ","牿":"cbㄍㄨˋ","犁":"adㄌㄧˊ","猊":"cbㄋㄧˊ","猎":"acㄌㄧㄝˋ","猓":"cbㄍㄨㄛ","猕":"acㄇㄧˊ","猖":"aaㄔㄤ","猗":"aeㄧ","猛":"acㄇㄥˇ","猜":"aaㄘㄞ","猝":"aaㄘㄨˋ","猞":"aaㄕㄜ","猡":"adㄌㄨㄛˊ","猪":"adㄓㄨ","猫":"acㄇㄠˊ","率":"cfˋ","球":"abㄑㄧㄡˊ","琅":"adㄌㄤˊ","理":"adㄌㄧˇ","琉":"adㄌㄧㄡˊ","琏":"adㄌㄧㄢˇ","琐":"aaㄙㄨㄛˇ","瓠":"ccㄏㄨˋ","甜":"bdㄊㄧㄢˊ","略":"adㄌㄩㄝˋ","畦":"aeㄑㄧˊ","疵":"aaㄘ","痊":"abㄑㄩㄢˊ","痍":"aeㄧˊ","痒":"aeㄧㄤˇ","痔":"adㄓˋ","痕":"acㄏㄣˊ","痖":"aeㄧㄚˇ","皎":"abㄐㄧㄠˇ","皑":"adㄞˊ","皲":"abㄐㄩㄣ","盒":"acㄏㄜˊ","盔":"abㄎㄨㄟ","盖":"abㄍㄞˋ","盗":"bdㄉㄠˋ","盘":"ccㄆㄢˊ","盛":"caㄔㄥˊ","眦":"adㄗˋ","眭":"beㄙㄨㄟ","眯":"acㄇㄧˊ","眵":"adㄔ","眶":"abㄎㄨㄤˋ","眷":"abㄐㄩㄢˋ","眸":"acㄇㄡˊ","眺":"aeㄊㄧㄠˋ","眼":"abㄧㄢˇ","着":"baㄓㄠˊ","睁":"aaㄓㄥ","矫":"abㄐㄧㄠˊ","砦":"caㄓㄞˋ","硅":"aeㄍㄨㄟ","硇":"cdㄋㄠˊ","硌":"aeㄍㄜˋ","硎":"aeㄒㄧㄥˊ","硐":"aeㄉㄨㄥˋ","硒":"aeㄒㄧ","硕":"aeㄕㄨㄛˋ","硖":"aeㄒㄧㄚˊ","硗":"aeㄑㄧㄠ","硭":"aeㄇㄤˊ","票":"bcㄆㄧㄠˋ","祭":"baㄐㄧˋ","祷":"aaㄉㄠˇ","祸":"acㄏㄨㄛˋ","秸":"abㄐㄧㄝ","移":"aeㄧˊ","秽":"aaㄏㄨㄟˋ","稆":"cfㄌㄩˇ","窑":"bbㄧㄠˊ","窒":"adㄓˋ","窕":"aeㄊㄧㄠˇ","竟":"bbㄐㄧㄥˋ","章":"bdㄓㄤ","笙":"abㄕㄥ","笛":"abㄉㄧˊ","笞":"abㄔ","笠":"abㄌㄧˋ","笤":"abㄊㄧㄠˊ","笥":"abㄙˋ","符":"abㄈㄨˊ","笨":"abㄅㄣˋ","笪":"abㄉㄚˊ","第":"cbㄉㄧˋ","笮":"abㄗㄜˊ","笱":"bbㄍㄡˇ","笳":"cbㄐㄧㄚ","笸":"abㄆㄛˇ","笺":"abㄐㄧㄢ","笼":"abㄌㄨㄥˊ","笾":"afㄅㄧㄢ","筇":"abㄑㄩㄥˊ","粒":"adㄌㄧˋ","粕":"acㄆㄛˋ","粗":"aaㄘㄨ","粘":"aaㄋㄧㄢˊ","粜":"cdㄊㄧㄠˋ","粝":"cdㄌㄧˋ","累":"bdㄌㄟˊ","绩":"adㄐㄧˋ","绪":"aaㄒㄩˋ","绫":"adㄌㄧㄥˊ","续":"aaㄒㄩˋ","绮":"abㄑㄧˇ","绯":"acㄈㄟ","绰":"cdㄔㄠ","绱":"aaㄕㄤˋ","绲":"abㄍㄨㄣˇ","绳":"aaㄕㄥˊ","维":"aeㄨㄟˊ","绵":"bcㄇㄧㄢˊ","绶":"aaㄕㄡˋ","绷":"acㄅㄥˋ","绸":"aaㄔㄡˊ","绺":"adㄌㄧㄡˇ","绻":"cbㄑㄩㄢˇ","综":"aaㄗㄥˋ","绽":"adㄓㄢˋ","绾":"adㄨㄢˇ","绿":"afㄌㄩˋ","缀":"adㄓㄨㄟˋ","缁":"adㄗ","缍":"cdㄉㄨㄛˇ","羚":"adㄌㄧㄥˊ","羝":"adㄉㄧ","羟":"bb","翊":"abㄧˋ","翌":"aeㄧˋ","翎":"adㄌㄧㄥˊ","耜":"abㄙˋ","聃":"adㄉㄢ","聆":"adㄌㄧㄥˊ","聊":"adㄌㄧㄠˊ","聋":"adㄌㄨㄥˊ","职":"adㄓˊ","聍":"aaㄋㄧㄥˊ","胬":"adㄋㄩˇ","脖":"acㄅㄛˊ","脘":"adㄨㄢˇ","脚":"bbㄐㄧㄠˇ","脞":"aaㄘㄨㄛˇ","脬":"ccㄆㄠ","脯":"acㄈㄨˇ","脱":"adㄊㄨㄛ","脲":"acㄋㄧㄠˋ","脶":"bdㄌㄨㄛˊ","脸":"cdㄌㄧㄢˇ","舂":"aaㄔㄨㄥ","舳":"adㄓㄨˊ","舴":"aaㄗㄜˊ","舵":"adㄉㄨㄛˇ","舶":"acㄅㄛˊ","舷":"caㄒㄧㄢˊ","舸":"abㄍㄜˇ","船":"aaㄔㄨㄢˊ","舻":"adㄌㄩˊ","艴":"acㄈㄨˊ","菀":"abㄨㄢˇ","菁":"abㄐㄧㄥ","菅":"abㄐㄧㄢ","菇":"abㄍㄨ","菊":"afㄐㄩˊ","菌":"abㄐㄩㄣˋ","菏":"ccㄏㄜˊ","菔":"abㄈㄨˊ","菖":"abㄔㄤ","菘":"cbㄙㄨㄥ","菜":"abㄘㄞˋ","菝":"abㄅㄚˊ","菟":"cbㄊㄨˊ","菠":"acㄅㄛ","菡":"abㄏㄢˋ","菥":"abㄒㄧ","菩":"abㄆㄨˊ","菪":"abㄉㄤˋ","菰":"cbㄍㄨ","菱":"abㄌㄧㄥˊ","菲":"abㄈㄟˇ","菸":"cbㄩ","菹":"bbㄗㄨ","菽":"abㄕㄨ","萁":"abㄑㄧˊ","萃":"abㄘㄨㄟˋ","萄":"abㄊㄠˊ","萆":"cbㄅㄧˋ","萋":"abㄑㄧ","萌":"abㄇㄥˊ","萍":"acㄆㄧㄥˊ","萎":"abㄨㄟˇ","萏":"abㄉㄢˋ","萑":"cbㄏㄨㄢˊ","萘":"abㄋㄞˋ","萜":"abㄊㄧㄝ","萝":"abㄌㄨㄛˊ","萤":"abㄧㄥˊ","营":"abㄧㄥˊ","萦":"abㄧㄥˊ","萧":"abㄒㄧㄠ","萨":"abㄙㄚˋ","萸":"abㄩˊ","著":"abㄓㄨˋ","虚":"acㄒㄩ","蚯":"abㄑㄧㄡ","蚰":"ceㄧㄡˊ","蚱":"caㄓㄚˋ","蚴":"aeㄧㄡˋ","蚵":"ccㄎㄜ","蚶":"acㄏㄢ","蚺":"caㄖㄢˊ","蛀":"aaㄓㄨˋ","蛄":"abㄍㄨˇ","蛆":"abㄐㄩ","蛇":"aaㄕㄜˊ","蛉":"cdㄌㄧㄥˊ","蛊":"bbㄍㄨˇ","蛋":"bdㄉㄢˋ","蛎":"cdㄌㄧˋ","蛏":"cdㄔㄥ","衅":"caㄒㄧㄣˋ","衔":"baㄒㄧㄢˊ","袈":"abㄐㄧㄚ","袋":"adㄉㄞˋ","袤":"acㄇㄠˋ","袭":"aaㄒㄧˊ","袱":"acㄈㄨˊ","袷":"cbㄑㄧㄚ","袼":"abㄍㄜ","裆":"adㄉㄤ","裉":"abㄎㄣˋ","觋":"baㄒㄧˊ","觖":"cdㄐㄩㄝˊ","谋":"acㄇㄡˊ","谌":"aaㄔㄣˊ","谍":"adㄉㄧㄝˊ","谎":"abㄏㄨㄤˇ","谏":"abㄐㄧㄢˋ","谐":"abㄒㄧㄝˊ","谑":"afㄒㄩㄝˋ","谒":"aaㄧㄝˋ","谓":"aeㄨㄟˋ","谔":"abㄜˇ","谕":"aaㄩˋ","谖":"aaㄒㄩㄢ","谗":"aaㄔㄢˊ","谘":"adㄗ","谙":"aeㄢ","谚":"abㄧㄢˋ","谛":"adㄉㄧˋ","谜":"acㄇㄟˋ","谝":"acㄆㄧㄢˇ","豉":"aaㄔˇ","豚":"adㄊㄨㄣˊ","象":"caㄒㄧㄤˋ","赇":"abㄑㄧㄡˊ","赈":"aaㄓㄣˋ","赉":"cdㄌㄞˊ","赊":"aaㄕㄜ","赦":"aaㄕㄜˋ","赧":"adㄋㄢˇ","趺":"ccㄈㄨ","趼":"abㄐㄧㄢˇ","趾":"aaㄓˇ","跃":"aeㄩㄝˋ","跄":"aaㄑㄧㄤˋ","距":"afㄐㄩˋ","躯":"abㄑㄩ","辄":"adㄓㄜˊ","辅":"acㄈㄨˇ","辆":"adㄌㄧㄤˋ","逭":"acㄏㄨㄢˋ","逮":"adㄉㄞˋ","逯":"adㄌㄩˋ","逵":"aeㄎㄨㄟˊ","逶":"acㄨㄟ","逸":"beㄧˋ","逻":"adㄌㄨㄛˊ","郾":"adㄧㄢˇ","鄂":"abㄜˇ","鄄":"cbㄐㄩㄢˋ","酗":"aaㄒㄩˋ","酚":"acㄈㄣ","酝":"aeㄩㄣˋ","酞":"adㄊㄞˋ","野":"aeㄧㄝˇ","铐":"caㄎㄠˋ","铑":"aaㄌㄠˇ","铒":"aaㄦˋ","铕":"aaㄧㄡˇ","铖":"caㄔㄥˊ","铗":"aaㄐㄧㄚˊ","铘":"caㄧㄝˊ","铙":"adㄋㄠˊ","铛":"aaㄔㄥ","铜":"aaㄊㄨㄥˊ","铝":"cfㄌㄩˇ","铞":"aaㄉㄧㄠˋ","铟":"aaㄧㄣ","铠":"aaㄎㄞˇ","铡":"aaㄓㄚˊ","铢":"aaㄓㄨ","铣":"aaㄒㄧˇ","铤":"aaㄉㄧㄥˋ","铥":"aaㄉㄧㄡ","铧":"aaㄏㄨㄚˊ","铨":"aaㄑㄩㄢˊ","铩":"aaㄕㄚ","铪":"aaㄏㄚ","铫":"aaㄉㄧㄠˋ","铬":"aaㄍㄜˋ","铭":"aaㄇㄧㄥˊ","铮":"aaㄓㄥˋ","铯":"caㄙㄜˋ","铰":"aaㄐㄧㄠˇ","铱":"aaㄧ","铲":"aaㄔㄢˇ","铳":"aaㄔㄨㄥˋ","铴":"caㄊㄤˋ","铵":"caㄢˇ","银":"aaㄧㄣˊ","铷":"caㄖㄨˊ","阈":"cbㄩˋ","阉":"aeㄧㄢ","阊":"aaㄔㄤ","阋":"baㄒㄧˋ","阌":"ccㄨㄣˊ","阍":"acㄏㄨㄣ","阎":"abㄧㄢˊ","阏":"bbㄜˇ","阐":"adㄔㄢˇ","隅":"aeㄩˊ","隆":"cdㄌㄨㄥˊ","隈":"acㄨㄟ","隋":"aaㄙㄨㄟˊ","隍":"abㄏㄨㄤˊ","随":"aaㄙㄨㄟˊ","隐":"aeㄧㄣˇ","隗":"abㄎㄨㄟˊ","雀":"baㄑㄧㄠˇ","雩":"ccㄩˊ","雪":"acㄒㄩㄝˇ","颅":"adㄌㄩˊ","领":"adㄌㄧㄥˇ","颇":"acㄆㄛ","颈":"abㄍㄥˇ","馄":"acㄏㄨㄣˊ","馅":"aaㄒㄧㄢˋ","馆":"abㄍㄨㄢˇ","馗":"caㄎㄨㄟˊ","骐":"abㄑㄧˊ","骑":"abㄑㄧˊ","骒":"abㄎㄜˋ","骓":"adㄓㄨㄟ","骖":"aaㄘㄢ","鸷":"adㄓˋ","鸸":"cdㄦˊ","鸹":"cbㄍㄨㄚ","鸺":"caㄒㄧㄡ","鸽":"abㄍㄜ","鸾":"cdㄌㄨㄢˊ","鸿":"acㄏㄨㄥˊ","鹿":"cdㄌㄩˋ","麸":"acㄈㄨ","麻":"bcㄇㄚˊ","黄":"ceㄏㄨㄤˊ","龚":"abㄍㄨㄥ","描":"acㄇㄧㄠˊ","珺":"abㄐㄩㄣˋ","堃":"ceㄎㄨㄣ","產":"caㄔㄢˇ","琍":"cdㄌㄧˊ","崑":"cbㄎㄨㄣ","啰":"adㄌㄩo","晞":"adㄒㄧ","谞":"aaㄒㄩ","硚":"adㄑㄧㄠˊ","琇":"caㄒㄧㄡˋ","焗":"cdㄐㄩˊ","埼":"adㄑㄧˊ","菂":"adㄉㄧˋ","採":"cdㄘㄞˇ","馃":"abㄍㄨㄛˇ","偲":"aaㄘㄞ","琎":"adㄐㄧㄣ","啟":"cdㄑㄧˇ","啲":"cdㄉㄧ","堌":"aeㄍㄨˋ","捯":"adㄉㄠˊ","珵":"cdㄔㄥˊ","惇":"adㄉㄨㄣ","棻":"acㄈㄣ","堉":"aeㄩˋ","亵":"acㄒㄧㄝˋ","傅":"acㄈㄨˋ","傈":"adㄌㄧˋ","傍":"acㄅㄤˋ","傣":"adㄉㄞˇ","傥":"adㄊㄤˇ","傧":"acㄅㄧㄣ","储":"aaㄔㄨˇ","傩":"adㄋㄨㄛˊ","傲":"aeㄠˋ","凿":"caㄗㄠˊ","剩":"aaㄕㄥˋ","割":"aaㄍㄜ","募":"abㄇㄨˋ","博":"acㄅㄛˊ","厥":"adㄐㄩㄝˊ","厦":"abㄕㄚˋ","厨":"caㄔㄨˊ","啻":"aaㄔˋ","啼":"adㄊㄧˊ","啾":"abㄐㄧㄡ","喀":"abㄎㄚ","喁":"aeㄩㄥˊ","喂":"aeㄨㄟˋ","喃":"cdㄋㄢˊ","善":"baㄕㄢˋ","喇":"adㄌㄚˊ","喈":"bbㄐㄧㄝ","喉":"abㄏㄡˊ","喊":"acㄏㄢˇ","喋":"adㄉㄧㄝˊ","喑":"aeㄧㄣ","喔":"adㄨㄛ","喘":"aaㄔㄨㄢˇ","喙":"ccㄏㄨㄟˋ","喜":"bcㄒㄧˇ","喝":"acㄏㄜˋ","喟":"abㄎㄨㄟˋ","喧":"aaㄒㄩㄢ","喱":"adㄌㄧˊ","喳":"aaㄔㄚ","喷":"acㄆㄣˋ","喹":"ceㄎㄨㄟˊ","喻":"aaㄩˋ","喽":"cdㄌㄡˊ","喾":"cbㄎㄨˋ","嗖":"aaㄙㄡ","嗟":"adㄐㄧㄝ","堙":"aeㄧㄣ","堞":"aeㄉㄧㄝˊ","堠":"aeㄏㄡˋ","堡":"aeㄅㄠˇ","堤":"aeㄉㄧ","堪":"aeㄎㄢ","堰":"aeㄧㄢˋ","塄":"ceㄌㄥˊ","塔":"adㄊㄚˇ","壹":"aeㄧ","奠":"ceㄉㄧㄢˋ","奥":"beㄠˋ","婷":"adㄊㄧㄥˊ","婺":"ceㄨˋ","婿":"aaㄒㄩˋ","媒":"acㄇㄟˊ","媚":"acㄇㄟˋ","媛":"cdㄩㄢˊ","媪":"aeㄠˇ","嫂":"caㄙㄠˇ","孱":"baㄘㄢˋ","孳":"abㄗ","富":"acㄈㄨˋ","寐":"acㄇㄟˋ","寒":"bcㄏㄢˊ","寓":"abㄩˋ","尊":"baㄗㄨㄣ","就":"bdㄐㄧㄡˋ","属":"aaㄕㄨˇ","屡":"cfㄌㄩˇ","崴":"aeㄨㄞˇ","崽":"aeㄗㄞˇ","崾":"ceㄧㄠˇ","嵇":"cbㄐㄧ","嵋":"aeㄇㄟˊ","嵌":"abㄑㄧㄢˋ","嵘":"aeㄖㄨㄥˊ","嵛":"ceㄩˊ","嵝":"aeㄌㄡˇ","嵫":"aeㄗ","嵬":"aeㄨㄟˊ","嵯":"aaㄘㄨㄛˊ","巯":"abㄑㄧㄡˊ","巽":"bdㄒㄩㄣˋ","帽":"acㄇㄠˋ","幂":"acㄇㄧˋ","幄":"adㄨㄛˋ","幅":"acㄈㄨˊ","弑":"caㄕˋ","强":"bbㄐㄧㄤˋ","弼":"bcㄅㄧˋ","彘":"adㄓˋ","彭":"ccㄆㄥˊ","御":"bbㄩˋ","徨":"acㄏㄨㄤˊ","循":"adㄒㄩㄣˊ","悲":"acㄅㄟ","惑":"acㄏㄨㄛˋ","惠":"bcㄏㄨㄟˋ","惩":"aaㄔㄥˊ","惫":"acㄅㄟˋ","惰":"adㄉㄨㄛˋ","惴":"adㄓㄨㄟˋ","惶":"acㄏㄨㄤˊ","惹":"acㄖㄜˇ","惺":"aaㄒㄧㄥ","愀":"abㄑㄧㄠˇ","愉":"aaㄩˊ","愎":"bcㄅㄧˋ","愕":"abㄜˇ","愠":"aeㄩㄣˋ","愣":"adㄌㄥˋ","愤":"acㄈㄣˋ","愦":"abㄎㄨㄟˋ","愧":"abㄎㄨㄟˋ","慌":"abㄏㄨㄤˇ","慨":"abㄎㄞˇ","戟":"baㄐㄧˇ","戢":"cbㄐㄧˊ","扉":"acㄈㄟ","掌":"aaㄓㄤˇ","掣":"adㄔㄜˋ","掰":"bdㄅㄞ","掾":"aaㄩㄢˋ","揄":"aaㄩˊ","揆":"abㄎㄨㄟˊ","揉":"aaㄖㄡˊ","揍":"aaㄗㄡˋ","揎":"aaㄒㄩㄢ","提":"adㄉㄧ","插":"aaㄔㄚ","揖":"aeㄧ","揞":"aeㄢˇ","揠":"aeㄧㄚˋ","握":"aeㄨㄛˋ","揣":"aaㄔㄨㄞˋ","揩":"abㄎㄞ","揪":"abㄐㄧㄡ","揭":"abㄐㄧㄝ","揲":"adㄉㄧㄝˊ","援":"aeㄩㄢˊ","揸":"aaㄓㄚ","揽":"adㄌㄢˇ","揿":"aaㄑㄧㄣˋ","搀":"aaㄔㄢ","搁":"abㄍㄜˊ","搂":"adㄌㄡˇ","搅":"abㄐㄧㄠˇ","搓":"aaㄘㄨㄛ","搔":"aaㄙㄠ","搜":"aaㄙㄡ","搭":"adㄉㄚ","搽":"abㄔㄚˊ","摒":"acㄅㄧㄥˋ","敞":"aaㄔㄤˇ","散":"aaㄙㄢˋ","敦":"adㄉㄨㄟˋ","敬":"bbㄐㄧㄥˋ","斌":"bcㄅㄧㄣ","斐":"acㄈㄟˇ","斑":"acㄅㄢ","斯":"aaㄙ","普":"ccㄆㄨˇ","景":"abㄐㄧㄥˇ","晰":"aaㄒㄧ","晴":"adㄑㄧㄥˊ","晶":"bdㄐㄧㄥ","晷":"abㄍㄨㄟˇ","智":"cdㄓˋ","晾":"adㄌㄧㄤˋ","暂":"adㄗㄢˋ","暑":"aaㄕㄨˇ","曾":"aaㄘㄥˊ","替":"aaㄊㄧˋ","最":"bbㄗㄨㄟˋ","朝":"baㄔㄠˊ","期":"abㄑㄧ","棉":"bbㄇㄧㄢˊ","棋":"abㄑㄧˊ","棕":"abㄗㄨㄥ","棘":"bbㄐㄧˊ","棚":"abㄆㄥˊ","棠":"abㄊㄤˊ","棣":"abㄉㄧˋ","森":"bbㄙㄣ","棰":"abㄔㄨㄟˊ","棱":"abㄌㄥ","棵":"abㄎㄜ","棹":"abㄓㄠˋ","棺":"abㄍㄨㄢ","棼":"abㄈㄣˊ","椁":"abㄍㄨㄛˇ","椅":"abㄧˇ","椋":"abㄌㄧㄤˊ","植":"abㄓˊ","椎":"abㄔㄨㄟˊ","椐":"afㄐㄩ","椒":"abㄐㄧㄠ","椟":"abㄉㄨˊ","椠":"abㄑㄧㄢˋ","椤":"cbㄌㄨㄛˊ","椭":"abㄊㄨㄛˇ","椰":"abㄧㄝ","楗":"abㄐㄧㄢˋ","楮":"abㄔㄨˇ","榔":"abㄌㄤˊ","欹":"ccㄑㄧ","欺":"abㄑㄧ","款":"bbㄎㄨㄢˇ","殖":"aaㄓˊ","殚":"adㄉㄢ","殛":"abㄐㄧˊ","毯":"adㄊㄢˇ","毳":"baㄘㄨㄟˋ","毵":"caㄙㄢ","毽":"abㄐㄧㄢˋ","氮":"adㄉㄢˋ","氯":"cfㄌㄩˋ","氰":"aaㄑㄧㄥˊ","淼":"bcㄇㄧㄠˇ","渝":"acㄩˊ","渡":"acㄉㄨˋ","渣":"acㄓㄚ","渤":"acㄅㄛˊ","渥":"ccㄨㄛˋ","温":"aeㄨㄣ","渫":"bcㄒㄧㄝˋ","渭":"acㄨㄟˋ","港":"acㄍㄤˇ","渲":"ccㄒㄩㄢˋ","渴":"acㄎㄜˇ","游":"acㄧㄡˊ","渺":"acㄇㄧㄠˇ","湃":"acㄆㄞˋ","湄":"ccㄇㄟˊ","湍":"acㄊㄨㄢ","湎":"acㄇㄧㄢˇ","湓":"acㄆㄣˊ","湔":"acㄐㄧㄢ","湖":"acㄏㄨˊ","湘":"acㄒㄧㄤ","湛":"acㄓㄢˋ","湟":"acㄏㄨㄤˊ","湫":"acㄐㄧㄠˇ","湮":"acㄧㄢ","湾":"acㄨㄢ","湿":"acㄕ","溃":"acㄎㄨㄟˋ","溅":"acㄐㄧㄢˋ","溆":"acㄒㄩˋ","溉":"acㄍㄞˋ","溲":"acㄙㄡ","滁":"acㄔㄨˊ","滋":"acㄗ","滑":"acㄏㄨㄚˊ","滞":"acㄓˋ","焙":"adㄅㄟˋ","焚":"bdㄈㄣˊ","焦":"bdㄐㄧㄠ","焯":"adㄔㄠ","焰":"adㄧㄢˋ","焱":"bdㄧㄢˋ","然":"aaㄖㄢˊ","煮":"acㄓㄨˇ","牌":"acㄆㄞˊ","牍":"aaㄉㄨˊ","犀":"baㄒㄧ","犄":"abㄐㄧ","犊":"aaㄉㄨˊ","犋":"afㄐㄩˋ","犍":"abㄐㄧㄢ","猢":"acㄏㄨˊ","猥":"aeㄨㄟˇ","猩":"aaㄒㄧㄥ","猬":"aeㄨㄟˋ","猱":"adㄋㄠˊ","猴":"abㄏㄡˊ","猸":"acㄇㄟˊ","猹":"abㄔㄚˊ","猾":"acㄏㄨㄚˊ","琚":"afㄐㄩ","琛":"aaㄔㄣ","琢":"adㄗㄨㄛˊ","琥":"acㄏㄨˇ","琦":"abㄑㄧˊ","琨":"abㄎㄨㄣ","琪":"abㄑㄧˊ","琬":"aeㄨㄢˇ","琮":"aaㄘㄨㄥˊ","琰":"adㄧㄢˇ","琳":"abㄌㄧㄣˊ","琴":"cbㄑㄧㄣˊ","琵":"acㄆㄧˊ","琶":"acㄆㄚˊ","琼":"abㄑㄩㄥˊ","瑛":"ceㄧㄥ","瓿":"acㄅㄨˋ","甥":"aaㄕㄥ","甯":"caㄋㄧㄥˊ","番":"ccㄈㄢ","畲":"aaㄕㄜ","畴":"aaㄔㄡˊ","疏":"aaㄕㄨ","痘":"adㄉㄡˋ","痛":"adㄊㄨㄥˋ","痞":"acㄆㄧˇ","痢":"adㄌㄧˋ","痣":"adㄓˋ","痤":"aaㄘㄨㄛˊ","痦":"ceㄨˋ","痧":"aaㄕㄚ","痨":"adㄌㄠˊ","痪":"acㄏㄨㄢˋ","痫":"aaㄒㄧㄢˊ","登":"bdㄉㄥ","皓":"abㄏㄠˋ","皖":"abㄨㄢˇ","皴":"aaㄘㄨㄣ","睃":"aaㄙㄨㄛ","睇":"cdㄉㄧˋ","睐":"adㄌㄞˊ","睑":"abㄐㄧㄢˇ","矬":"aaㄘㄨㄛˊ","短":"adㄉㄨㄢˇ","硪":"aeㄨㄛˋ","硫":"adㄌㄧㄡˊ","硬":"abㄧㄥˋ","确":"aeㄑㄩㄝˋ","硷":"ceㄐㄧㄢˇ","祺":"abㄑㄧˊ","禄":"adㄌㄩˋ","禅":"aaㄔㄢˊ","禽":"caㄑㄧㄣˊ","稀":"abㄒㄧ","稂":"adㄌㄤˊ","稃":"acㄈㄨ","程":"adㄔㄥˊ","稍":"aaㄕㄠˋ","税":"aaㄕㄨㄟˋ","窖":"abㄐㄧㄠˋ","窗":"aaㄔㄨㄤ","窘":"abㄐㄩㄥˇ","窜":"aaㄘㄨㄢˋ","窝":"adㄨㄛ","竣":"aaㄐㄩㄣˋ","童":"aaㄊㄨㄥˊ","竦":"baㄙㄨㄥˇ","筅":"abㄒㄧㄢˇ","等":"abㄉㄥˇ","筋":"bbㄐㄧㄣ","筌":"abㄑㄩㄢˊ","筏":"abㄈㄚˊ","筐":"abㄎㄨㄤ","筑":"abㄓㄨˋ","筒":"abㄊㄨㄥˇ","答":"abㄉㄚˊ","策":"abㄘㄜˋ","筘":"cbㄎㄡˋ","筚":"abㄅㄧˋ","筛":"abㄕㄞ","筝":"abㄓㄥ","筵":"abㄧㄢˊ","粞":"aaㄒㄧ","粟":"baㄙㄨˋ","粢":"adㄗ","粤":"ceㄩㄝˋ","粥":"acㄩˋ","粪":"bcㄈㄣˋ","紫":"aaㄗˇ","絮":"aaㄒㄩˋ","絷":"aaㄓˊ","缂":"cbㄎㄜˋ","缃":"bbㄒㄧㄤ","缄":"aaㄐㄧㄢ","缅":"acㄇㄧㄢˇ","缆":"adㄌㄢˇ","缇":"adㄊㄧˊ","缈":"acㄇㄧㄠˇ","缉":"abㄐㄧ","缋":"ccㄏㄨㄟˋ","缌":"aaㄙ","缎":"adㄉㄨㄢˋ","缏":"afㄅㄧㄢˋ","缑":"acㄍㄡ","缒":"adㄓㄨㄟˋ","缓":"adㄏㄨㄢˇ","缔":"adㄉㄧˋ","缕":"cfㄌㄩˇ","编":"afㄅㄧㄢ","缗":"acㄇㄧㄣˊ","缘":"aeㄩㄢˊ","羡":"caㄒㄧㄢˋ","翔":"aeㄒㄧㄤˊ","翕":"aeㄒㄧ","翘":"abㄑㄧㄠˊ","耋":"adㄉㄧㄝˊ","耠":"acㄏㄨㄛ","聒":"abㄍㄨㄛ","联":"abㄌㄧㄢˊ","脔":"bdㄌㄨㄢˊ","脾":"acㄆㄧˊ","腆":"adㄊㄧㄢˇ","腈":"abㄐㄧㄥ","腊":"adㄌㄚˋ","腋":"aeㄧㄝˋ","腌":"aeㄚ","腑":"acㄈㄨˇ","腓":"acㄈㄟˊ","腔":"caㄑㄧㄤ","腕":"adㄨㄢˋ","腙":"aaㄗㄨㄥ","腚":"adㄉㄧㄥˋ","腱":"abㄐㄧㄢˋ","腴":"aaㄩˊ","舄":"baㄒㄧˋ","舒":"caㄕㄨ","舜":"baㄕㄨㄣˋ","舾":"aaㄒㄧ","艇":"adㄊㄧㄥˇ","萱":"abㄒㄩㄢ","萼":"abㄜˇ","落":"acㄌㄚˋ","葆":"abㄅㄠˇ","葑":"abㄈㄥˋ","葙":"cbㄒㄧㄤ","葚":"abㄖㄣˋ","葛":"abㄍㄜˊ","葜":"cbㄑㄧㄚ","葡":"abㄆㄨˊ","董":"adㄉㄨㄥˇ","葩":"cbㄆㄚ","葫":"abㄏㄨˊ","葬":"bbㄗㄤˋ","葭":"cbㄐㄧㄚ","葱":"abㄘㄨㄥ","葳":"abㄨㄟ","葵":"abㄎㄨㄟˊ","葶":"cbㄊㄧㄥˊ","葸":"abㄒㄧˇ","葺":"abㄑㄧˋ","蒂":"abㄉㄧˋ","蒇":"cbㄔㄢˇ","蒈":"abㄎㄞˇ","蒉":"abㄎㄨㄟˋ","蒋":"abㄐㄧㄤˇ","蒌":"abㄌㄡˊ","蒎":"acㄆㄞˋ","蛐":"abㄑㄩ","蛑":"ccㄇㄡˊ","蛔":"acㄏㄨㄟˊ","蛘":"adㄧㄤˊ","蛙":"aeㄨㄚ","蛛":"aaㄓㄨ","蛞":"cbㄎㄨㄛˋ","蛟":"abㄐㄧㄠ","蛤":"acㄍㄜˊ","蛩":"aaㄑㄩㄥˊ","蛭":"aeㄓˋ","蛮":"ccㄇㄢˊ","蛰":"adㄓㄜˊ","蛱":"abㄐㄧㄚˊ","蛲":"adㄋㄠˊ","蛳":"caㄙ","蛴":"abㄑㄧˊ","蜒":"aeㄧㄢˊ","蜓":"adㄊㄧㄥˊ","街":"abㄐㄧㄝ","裁":"aaㄘㄞˊ","裂":"adㄌㄧㄝˇ","装":"aaㄓㄨㄤ","裎":"adㄔㄥˊ","裒":"baㄆㄡˊ","裕":"aaㄩˋ","裙":"abㄑㄩㄣˊ","裢":"adㄌㄧㄢˊ","裣":"adㄌㄧㄢˇ","裤":"abㄎㄨˋ","裥":"abㄐㄧㄢˇ","覃":"bbㄑㄧㄣˊ","觌":"adㄉㄧˊ","觚":"abㄍㄨ","觞":"aaㄕㄤ","詈":"bdㄌㄧˋ","谟":"acㄇㄛˊ","谠":"adㄉㄤˇ","谡":"aaㄙㄨˋ","谢":"aaㄒㄧㄝˋ","谣":"adㄧㄠˊ","谤":"acㄅㄤˋ","谥":"aaㄕˋ","谦":"abㄑㄧㄢ","谧":"acㄇㄧˋ","貂":"caㄉㄧㄠ","赋":"acㄈㄨˋ","赍":"cbㄐㄧ","赎":"adㄕㄨˊ","赏":"aaㄕㄤˇ","赐":"aaㄘˋ","赓":"abㄍㄥ","赔":"acㄆㄟˊ","赕":"adㄉㄢˇ","趁":"abㄔㄣˋ","趄":"afㄐㄩ","超":"aaㄔㄠ","越":"aeㄩㄝˋ","趋":"abㄑㄩ","跆":"adㄊㄞˊ","跋":"acㄅㄚˊ","跌":"adㄉㄧㄝ","跎":"cdㄊㄨㄛˊ","跏":"cbㄐㄧㄚ","跑":"acㄆㄠˊ","跖":"aeㄓˊ","跗":"acㄈㄨˊ","跚":"aaㄕㄢ","跛":"acㄅㄛˇ","跞":"cdㄌㄧˋ","践":"adㄐㄧㄢˋ","辇":"bdㄋㄧㄢˇ","辈":"acㄅㄟˋ","辉":"acㄏㄨㄟ","辊":"abㄍㄨㄣˇ","辋":"adㄨㄤˇ","辍":"adㄔㄨㄛˋ","辎":"adㄗ","辜":"aaㄍㄨ","逼":"acㄅㄧ","逾":"aaㄩˊ","遁":"adㄉㄨㄣˋ","遂":"adㄙㄨㄟˊ","遄":"aaㄔㄨㄢˊ","遇":"abㄩˋ","遍":"afㄅㄧㄢˋ","遏":"abㄜˇ","遐":"aeㄒㄧㄚˊ","遑":"acㄏㄨㄤˊ","遒":"abㄑㄧㄡˊ","道":"adㄉㄠˋ","遗":"abㄨㄟˋ","酡":"adㄊㄨㄛˊ","酢":"aaㄘㄨˋ","酣":"acㄏㄢ","酤":"abㄍㄨ","酥":"baㄙㄨ","釉":"aeㄧㄡˋ","释":"aaㄕˋ","量":"adㄌㄧㄤˊ","铸":"aaㄓㄨˋ","铹":"aaㄌㄠˊ","铺":"aaㄆㄨˋ","铼":"aaㄌㄞ","铽":"adㄊㄜˋ","链":"aaㄌㄧㄢˋ","铿":"aaㄎㄥ","销":"aaㄒㄧㄠ","锁":"aaㄙㄨㄛˇ","锂":"aaㄌㄧˇ","锃":"aaㄗㄥˋ","锄":"aaㄔㄨˊ","锅":"aaㄍㄨㄛ","锆":"aaㄍㄠˋ","锇":"aaㄜˊ","锈":"aaㄒㄧㄡˋ","锉":"aaㄘㄨㄛˋ","锊":"cfㄌㄩㄝˋ","锋":"aaㄈㄥ","锌":"aaㄒㄧㄣ","锍":"aaㄌㄧㄡˇ","锎":"aaㄎㄞ","锏":"aaㄐㄧㄢˋ","锐":"aaㄖㄨㄟˋ","锑":"aaㄊㄧ","锒":"aaㄌㄤˊ","锓":"aaㄑㄧㄣˇ","锔":"afㄐㄩˊ","锕":"aaㄚ","阑":"adㄌㄢˊ","阒":"abㄑㄩˋ","阔":"acㄎㄨㄛˋ","阕":"aaㄑㄩㄝˋ","隔":"abㄍㄜˊ","隘":"aeㄞˋ","隙":"acㄒㄧˋ","雁":"abㄧㄢˋ","雄":"acㄒㄩㄥˊ","雅":"abㄧㄚˇ","集":"bbㄐㄧˊ","雇":"abㄍㄨˋ","雯":"acㄨㄣˊ","雳":"adㄌㄧˋ","靓":"aaㄐㄧㄥˋ","韩":"acㄏㄢˊ","颉":"abㄐㄧㄝˊ","颊":"abㄐㄧㄚˊ","颌":"acㄏㄜˊ","颍":"ac","颏":"abㄎㄜ","飓":"afㄐㄩˋ","飧":"baㄙㄨㄣ","飨":"ccㄒㄧㄤˇ","馇":"aaㄔㄚ","馈":"abㄎㄨㄟˋ","馊":"aaㄙㄡ","馋":"aaㄔㄢˊ","骗":"acㄆㄧㄢˋ","骘":"adㄓˋ","骚":"aaㄙㄠ","骛":"aeㄨˋ","鱿":"ceㄧㄡˊ","鲁":"bdㄌㄩˇ","鲂":"acㄈㄤˊ","鹁":"acㄅㄛˊ","鹂":"adㄌㄧˊ","鹃":"cbㄐㄩㄢ","鹄":"abㄍㄨˇ","鹅":"abㄜˊ","鹆":"cbㄩˋ","鹇":"aaㄒㄧㄢˊ","鹈":"cdㄊㄧˊ","黍":"aaㄕㄨˇ","黑":"beㄏㄟ","黹":"caㄓˇ","鼋":"aeㄩㄢˊ","鼎":"cdㄉㄧㄥˇ","嗒":"adㄉㄚ","皙":"bbㄒㄧ","喆":"caㄓㄜˊ","犇":"bcㄅㄣ","湉":"ccㄊㄧㄢˊ","焜":"adㄎㄨㄣ","圏":"cdㄑㄩㄢ","甦":"cdㄙㄨ","復":"ccㄈㄨˋ","萩":"abㄑㄧㄡ","畬":"caㄕㄜ","琹":"cdㄑㄧㄣˊ","棪":"cbㄧㄢˇ","鹀":"aaㄨˊ","嗞":"adㄗ","椪":"acㄆㄥˋ","翚":"cbㄏㄨㄟ","註":"caㄓㄨˋ","堺":"cdㄐㄧㄝˋ","欻":"bd","戡":"abㄎㄢ","缙":"cbㄐㄧㄣˋ","催":"aaㄘㄨㄟ","傺":"aaㄔˋ","傻":"aaㄕㄚˇ","像":"aaㄒㄧㄤˋ","剽":"acㄆㄧㄠ","剿":"aaㄔㄠ","勤":"abㄑㄧㄣˊ","叠":"bdㄉㄧㄝˊ","嗄":"abㄚˊ","嗅":"aaㄒㄧㄡˋ","嗉":"aaㄙㄨˋ","嗌":"ceㄞˋ","嗍":"aaㄙㄨㄛ","嗑":"abㄎㄜˋ","嗓":"abㄙㄤˇ","嗔":"aaㄔㄣ","嗜":"aaㄕˋ","嗝":"abㄍㄜˊ","嗡":"aeㄨㄥ","嗣":"aaㄙˋ","嗤":"adㄔ","嗥":"acㄏㄠˊ","嗦":"aa","嗨":"acㄏㄞ","嗪":"aaㄑㄧㄣˊ","嗫":"aaㄋㄧㄝˋ","嗬":"abㄏㄜ","嗯":"ae","嗲":"adˇ","嗳":"aeㄞˋ","嗵":"adㄊㄨㄥ","嗷":"aeㄠˊ","嘟":"aaㄉㄨ","塌":"aeㄊㄚ","塍":"adㄔㄥˊ","塑":"aeㄙㄨˋ","塘":"aeㄊㄤˊ","塞":"caㄙㄞˋ","塥":"abㄍㄜˊ","填":"aeㄊㄧㄢˊ","塬":"ceㄩㄢˊ","墓":"abㄇㄨˋ","媲":"acㄆㄧˋ","媳":"aaㄒㄧˊ","媵":"abㄧㄥˋ","媸":"adㄔ","媾":"abㄍㄡˋ","嫁":"abㄐㄧㄚˋ","嫉":"cbㄐㄧˊ","嫌":"aaㄒㄧㄢˊ","嫒":"ceㄞˋ","嫔":"acㄆㄧㄣˊ","嫫":"acㄇㄛˊ","寝":"aaㄑㄧㄣˇ","寞":"acㄇㄛˋ","尴":"abㄍㄢ","嵊":"ceㄕㄥˋ","嵩":"ceㄙㄨㄥ","嵴":"ceㄐㄧˊ","幌":"adㄏㄨㄤˇ","幕":"abㄇㄨˋ","廉":"abㄌㄧㄢˊ","廒":"aeㄠˊ","廓":"abㄎㄨㄛˋ","彀":"cbㄍㄡˋ","徭":"adㄧㄠˊ","微":"acㄨㄟ","想":"aaㄒㄧㄤˇ","愁":"aaㄔㄡˊ","愆":"abㄑㄧㄢ","愈":"aaㄩˋ","愍":"ccㄇㄧㄣˇ","意":"beㄧˋ","愚":"abㄩˊ","感":"abㄍㄢˇ","愫":"aaㄙㄨˋ","慈":"aaㄘˊ","慊":"aaㄑㄧㄢˋ","慎":"aaㄕㄣˋ","慑":"aaㄕㄜˋ","戤":"cbㄍㄞˋ","戥":"bbㄉㄥˇ","搋":"aaㄔㄨㄞ","搌":"adㄓㄢˇ","搏":"acㄅㄛˊ","搐":"aaㄔㄨˋ","搛":"abㄐㄧㄢ","搞":"abㄍㄠˇ","搠":"aaㄕㄨㄛˋ","搡":"aaㄙㄤˇ","搦":"bdㄋㄨㄛˋ","搪":"adㄊㄤˊ","搬":"acㄅㄢ","携":"acㄒㄧㄝˊ","摁":"abㄣˋ","摄":"adㄕㄜˋ","摅":"aaㄕㄨ","摆":"adㄅㄞˇ","摇":"adㄧㄠˊ","摈":"acㄅㄧㄣˋ","摊":"adㄊㄢ","摸":"acㄇㄛ","敫":"bbㄐㄧㄠˇ","数":"aaㄕㄨˋ","斟":"aaㄓㄣ","新":"aaㄒㄧㄣ","旒":"adㄌㄧㄡˊ","暄":"aaㄒㄩㄢ","暇":"abㄒㄧㄚˊ","暌":"cbㄎㄨㄟˊ","暖":"adㄋㄨㄢˇ","暗":"aeㄢˋ","椴":"abㄉㄨㄢˋ","椹":"abㄕㄣˋ","椽":"abㄔㄨㄢˊ","椿":"abㄔㄨㄣ","楂":"abㄔㄚˊ","楔":"abㄒㄧㄝ","楚":"aaㄔㄨˇ","楝":"abㄌㄧㄢˋ","楞":"abㄌㄥˊ","楠":"abㄋㄢˊ","楣":"abㄇㄟˊ","楦":"abㄒㄩㄢˋ","楫":"cbㄐㄧˊ","楱":"cbㄘㄡˋ","楷":"abㄐㄧㄝ","楸":"abㄑㄧㄡ","楹":"abㄧㄥˊ","楼":"abㄌㄡˊ","榀":"abㄆㄧㄣˇ","概":"abㄍㄞˋ","榄":"abㄌㄢˇ","榆":"abㄩˊ","榇":"abㄔㄣˋ","榈":"cfㄌㄩˊ","榉":"afㄐㄩˇ","榘":"cfㄐㄩˇ","槌":"abㄔㄨㄟˊ","槎":"abㄔㄚˊ","槐":"abㄏㄨㄞˊ","歃":"aaㄕㄚˋ","歆":"aaㄒㄧㄣ","歇":"abㄒㄧㄝ","殿":"adㄉㄧㄢˋ","毁":"acㄏㄨㄟˇ","毂":"cbㄍㄨˇ","毹":"caㄕㄨ","氲":"aeㄩㄣ","溏":"ccㄊㄤˊ","源":"acㄩㄢˊ","溘":"ccㄎㄜˋ","溜":"acㄌㄧㄡˋ","溟":"acㄇㄧㄥˊ","溢":"acㄧˋ","溥":"acㄆㄨˇ","溧":"acㄌㄧˋ","溪":"acㄒㄧ","溯":"acㄙㄨˋ","溱":"acㄑㄧㄣˊ","溴":"acㄒㄧㄡˋ","溶":"acㄖㄨㄥˊ","溷":"ccㄏㄨㄣˇ","溺":"bcㄋㄧˋ","溻":"acㄊㄚ","溽":"acㄖㄨˋ","滂":"acㄆㄤ","滇":"acㄉㄧㄢ","滏":"acㄈㄨˇ","滓":"acㄗˇ","滔":"acㄊㄠ","滗":"acㄅㄧˋ","滚":"acㄍㄨㄣˇ","滟":"acㄧㄢˋ","滠":"acㄕㄜˋ","满":"acㄇㄢˇ","滢":"acㄧㄥˊ","滤":"cfㄌㄩˋ","滥":"acㄌㄢˋ","滦":"acㄌㄨㄢˊ","滨":"acㄅㄧㄣ","滩":"acㄊㄢ","漓":"acㄌㄧˊ","漠":"acㄇㄛˋ","漭":"acㄇㄤˇ","煅":"adㄉㄨㄢˋ","煊":"adㄒㄩㄢ","煌":"adㄏㄨㄤˊ","煎":"adㄐㄧㄢ","煜":"cdㄩˋ","煞":"aaㄕㄚˋ","煤":"adㄇㄟˊ","煦":"aaㄒㄩˋ","照":"adㄓㄠˋ","煨":"adㄨㄟ","煲":"adㄅㄠ","煳":"adㄏㄨˊ","煸":"afㄅㄧㄢ","煺":"adㄊㄨㄟˋ","牒":"adㄉㄧㄝˊ","犏":"acㄆㄧㄢ","献":"cbㄒㄧㄢˋ","猷":"aeㄧㄡˊ","猿":"aeㄩㄢˊ","瑁":"acㄇㄠˋ","瑕":"aeㄒㄧㄚˊ","瑗":"abㄩㄢˋ","瑙":"cdㄋㄠˇ","瑚":"acㄏㄨˊ","瑜":"aaㄩˊ","瑞":"aaㄖㄨㄟˋ","瑟":"cbㄙㄜˋ","瑰":"abㄍㄨㄟ","甄":"aaㄓㄣ","畸":"abㄐㄧ","畹":"adㄨㄢˇ","痰":"adㄊㄢˊ","痱":"aeㄈㄟˋ","痴":"adㄔ","痹":"acㄅㄧˋ","痼":"abㄍㄨˋ","痿":"aeㄨㄟˇ","瘀":"aeㄩ","瘁":"aaㄘㄨㄟˋ","瘃":"aaㄓㄨˊ","瘅":"adㄉㄢˋ","瘐":"cbㄩˇ","盟":"acㄇㄥˊ","睚":"aeㄧㄚˊ","睛":"abㄐㄧㄥ","睡":"baㄕㄨㄟˋ","睢":"aaㄏㄨㄟ","督":"adㄉㄨ","睥":"ccㄅㄧˋ","睦":"adㄇㄨˋ","睨":"abㄋㄧˋ","睫":"abㄐㄧㄝˊ","睬":"aaㄘㄞˇ","睹":"aaㄉㄨˇ","瞄":"acㄇㄧㄠˊ","矮":"aeㄞˇ","硼":"aeㄆㄥˊ","碇":"aeㄉㄧㄥˋ","碉":"aeㄉㄧㄠ","碌":"aeㄌㄧㄡˋ","碍":"aeㄞˋ","碎":"aeㄙㄨㄟˋ","碑":"aeㄅㄟ","碓":"aeㄉㄨㄟˋ","碗":"aeㄨㄢˇ","碘":"aeㄉㄧㄢˇ","碚":"aeㄅㄟˋ","碛":"aeㄑㄧˋ","碜":"aeㄔㄣˇ","碰":"aeㄆㄥˋ","禀":"bcㄅㄧㄥˇ","禁":"abㄐㄧㄣˋ","禊":"baㄒㄧˋ","福":"acㄈㄨˊ","稔":"adㄖㄣˇ","稗":"adㄅㄞˋ","稚":"aeㄓˋ","稞":"abㄎㄜ","稠":"aaㄔㄡˊ","稣":"aaㄙㄨ","窟":"abㄎㄨ","窠":"abㄎㄜ","窥":"abㄎㄨㄟ","窦":"adㄉㄡˋ","筠":"abㄐㄩㄣ","筢":"abㄆㄚˊ","筮":"bbㄕˋ","筱":"abㄒㄧㄠˇ","筲":"abㄕㄠ","筷":"abㄎㄨㄞˋ","筹":"abㄔㄡˊ","筻":"cbㄍㄤˋ","签":"abㄑㄧㄢ","简":"abㄐㄧㄢˇ","粮":"adㄌㄧㄤˊ","粱":"acㄌㄧㄤˊ","粲":"aaㄘㄢˋ","粳":"acㄐㄧㄥ","缚":"acㄈㄨˋ","缛":"aaㄖㄨˋ","缜":"aaㄓㄣˇ","缝":"acㄈㄥˊ","缟":"abㄍㄠˇ","缠":"adㄔㄢˊ","缡":"adㄌㄧˊ","缢":"cbㄧˋ","缣":"abㄐㄧㄢ","缤":"acㄅㄧㄣ","罨":"abㄧㄢˇ","罩":"adㄓㄠˋ","罪":"bbㄗㄨㄟˋ","置":"adㄓˋ","署":"aaㄕㄨˇ","群":"abㄑㄩㄣˊ","羧":"aaㄙㄨㄛ","耢":"adㄌㄠˋ","聘":"acㄆㄧㄣˋ","肄":"abㄧˋ","肆":"aaㄙˋ","腠":"cdㄘㄡˋ","腥":"aaㄒㄧㄥ","腧":"aaㄕㄨˋ","腩":"adㄋㄢˇ","腭":"abㄜˇ","腮":"aaㄙㄞ","腰":"adㄧㄠ","腹":"acㄈㄨˋ","腺":"aaㄒㄧㄢˋ","腻":"cbㄋㄧˋ","腼":"acㄇㄧㄢˇ","腽":"adㄨㄚˋ","腾":"adㄊㄥˊ","腿":"aaㄊㄨㄟˇ","舅":"abㄐㄧㄡˋ","艄":"aaㄕㄠ","艉":"ceㄨㄟˇ","蒗":"acㄌㄤˋ","蒙":"acㄇㄥˊ","蒜":"abㄙㄨㄢˋ","蒡":"cbㄅㄤˋ","蒯":"abㄎㄨㄞˇ","蒲":"abㄆㄨˊ","蒴":"abㄕㄨㄛˋ","蒸":"abㄓㄥ","蒹":"abㄐㄧㄢ","蒺":"cbㄐㄧˊ","蒽":"abㄣ","蒿":"abㄏㄠ","蓁":"abㄓㄣ","蓄":"abㄒㄩˋ","蓉":"abㄖㄨㄥˊ","蓊":"cbㄨㄥˇ","蓍":"abㄕ","蓐":"abㄖㄨˋ","蓑":"abㄙㄨㄛ","蓓":"abㄅㄟˋ","蓖":"abㄅㄧˋ","蓝":"abㄌㄢˊ","蓟":"cbㄐㄧˋ","蓠":"cbㄌㄧˊ","蓣":"cbㄩˋ","蓥":"abㄧㄥˊ","蓦":"abㄇㄛˋ","蓬":"abㄆㄥˊ","虞":"adㄩˊ","蛸":"aaㄕㄠ","蛹":"aeㄩㄥˇ","蛾":"abㄜˊ","蜂":"acㄈㄥ","蜃":"aaㄕㄣˋ","蜇":"adㄓㄜˊ","蜈":"aeㄨˊ","蜉":"acㄈㄨˊ","蜊":"adㄌㄧˊ","蜍":"aaㄔㄨˊ","蜕":"adㄊㄨㄟˋ","蜗":"adㄨㄛ","蜣":"aaㄑㄧㄤ","衙":"aeㄧㄚˊ","裔":"aeㄧˋ","裘":"ccㄑㄧㄡˊ","裟":"aaㄕㄚ","裨":"acㄅㄧˋ","裰":"adㄉㄨㄛ","裱":"acㄅㄧㄠˇ","裸":"adㄌㄨㄛˇ","裼":"adㄊㄧˋ","裾":"afㄐㄩ","褂":"abㄍㄨㄚˋ","褚":"cdㄔㄨˇ","觎":"caㄩˊ","觜":"adㄗ","解":"bbㄐㄧㄝˋ","觥":"adㄍㄨㄥ","触":"aaㄔㄨˋ","訾":"adㄗˇ","詹":"adㄓㄢ","誉":"aeㄩˋ","誊":"cdㄊㄥˊ","谨":"abㄐㄧㄣˇ","谩":"acㄇㄢˊ","谪":"adㄓㄜˊ","谫":"abㄐㄧㄢˇ","谬":"adㄇㄧㄡˋ","豢":"bcㄏㄨㄢˋ","貅":"aaㄒㄧㄡ","貉":"acㄏㄠˊ","貊":"ccㄇㄛˋ","赖":"adㄌㄞˊ","趑":"adㄗ","趔":"adㄌㄧㄝˋ","跟":"abㄍㄣ","跣":"aaㄒㄧㄢˇ","跤":"abㄐㄧㄠ","跨":"abㄎㄨㄚˋ","跪":"abㄍㄨㄟˋ","跫":"caㄑㄩㄥˊ","跬":"aeㄎㄨㄟˇ","路":"adㄌㄩˋ","跳":"adㄊㄧㄠˋ","跷":"abㄑㄧㄠ","跸":"acㄅㄧˋ","跹":"aaㄒㄧㄢ","跺":"cdㄉㄨㄛˇ","跻":"adㄐㄧ","躲":"adㄉㄨㄛˇ","辏":"adㄘㄡˋ","辐":"aaㄈㄨˊ","辑":"aaㄐㄧˊ","输":"aaㄕㄨ","辔":"bcㄆㄟˋ","辞":"baㄘˊ","辟":"bcㄅㄧˋ","遘":"cbㄍㄡˋ","遛":"adㄌㄧㄡˊ","遢":"ad","遣":"aaㄑㄧㄢˇ","遥":"adㄧㄠˊ","遨":"aeㄠˊ","鄙":"acㄅㄧˇ","鄞":"ceㄧㄣˊ","鄢":"aeㄧㄢ","鄣":"adㄓㄤ","酩":"acㄇㄧㄥˇ","酪":"adㄌㄠˋ","酬":"aaㄔㄡˊ","酯":"caㄓˇ","酰":"aaㄒㄧㄢ","酱":"abㄐㄧㄤˋ","鉴":"aaㄐㄧㄢˋ","锖":"aaㄑㄧㄤ","锗":"caㄓㄜˇ","锘":"aaㄋㄨㄛˋ","错":"aaㄘㄨㄛˋ","锚":"aaㄇㄠˊ","锛":"aaㄅㄣ","锝":"aaㄉㄜˊ","锞":"aaㄎㄜˋ","锟":"aaㄎㄨㄣ","锡":"aaㄒㄧ","锢":"caㄍㄨˋ","锣":"aaㄌㄨㄛˊ","锤":"aaㄔㄨㄟˊ","锥":"aaㄓㄨㄟ","锦":"aaㄐㄧㄣˇ","锨":"aaㄒㄧㄢ","锩":"aaㄐㄩㄢˇ","锪":"aaㄏㄨㄛ","锫":"caㄆㄟˊ","锬":"aaㄊㄢˊ","锭":"aaㄉㄧㄥˋ","键":"aaㄐㄧㄢˋ","锯":"afㄐㄩˋ","锰":"aaㄇㄥˇ","锱":"aaㄗ","阖":"acㄏㄜˊ","阗":"adㄊㄧㄢˊ","阙":"aaㄐㄩㄝˊ","障":"adㄓㄤˋ","雉":"cdㄓˋ","雍":"beㄩㄥ","雎":"afㄐㄩ","雏":"aaㄔㄨˊ","零":"adㄌㄧㄥˊ","雷":"bcㄌㄟˊ","雹":"acㄅㄠˊ","雾":"acㄨˋ","靖":"aaㄐㄧㄥˋ","靳":"cbㄐㄧㄣˋ","靴":"abㄒㄩㄝ","靶":"acㄅㄚˋ","韪":"aeㄨㄟˇ","韫":"ceㄩㄣˋ","韵":"aeㄩㄣˋ","颐":"aeㄧˊ","频":"bcㄆㄧㄣˊ","颓":"aaㄊㄨㄟˊ","颔":"acㄏㄢˋ","颖":"abㄧㄥˊ","飕":"aaㄙㄡ","馍":"acㄇㄛˊ","馏":"adㄌㄧㄡˊ","馐":"aaㄒㄧㄡ","骜":"aeㄠˋ","骝":"adㄌㄧㄡˊ","骞":"abㄑㄧㄢ","骟":"aaㄕㄢˋ","骰":"caㄊㄡˊ","骱":"cbㄐㄧㄝˋ","髡":"cbㄎㄨㄣ","魁":"abㄎㄨㄟˊ","魂":"acㄏㄨㄣˊ","鲅":"ccㄅㄚˋ","鲆":"acㄆㄧㄥˊ","鲇":"cdㄋㄧㄢˊ","鲈":"adㄌㄩˊ","鲋":"ccㄈㄨˋ","鲍":"acㄅㄠˋ","鲎":"cbㄏㄡˋ","鲐":"adㄊㄞˊ","鹉":"aeㄨˇ","鹊":"aaㄑㄩㄝˋ","鹋":"acㄇㄧㄠˊ","鹌":"aeㄢ","鹎":"acㄅㄟ","鹏":"acㄆㄥˊ","鹑":"acㄔㄨㄣˊ","麂":"abㄐㄧˇ","鼓":"bbㄍㄨˇ","鼠":"caㄕㄨˇ","龃":"afㄐㄩˇ","龄":"cdㄌㄧㄥˊ","龅":"acㄅㄠ","龆":"adㄊㄧㄠˊ","蜀":"aaㄕㄨˇ","滘":"cdㄐㄧㄠˋ","勠":"cdㄌㄩˋ","瑄":"adㄒㄩㄢ","嬅":"cbㄏㄨㄚˋ","漷":"cbㄏㄨㄛˇ","碁":"cdㄑㄧˊ","榅":"abㄨㄣ","窣":"adㄙㄨ","塱":"cdㄌㄤˇ","塚":"ceㄓㄨㄥˇ","鄠":"ccㄏㄨˋ","瑀":"aeㄩˇ","榊":"cb","蓢":"cdㄌㄤˇ","暐":"cdㄨㄟˇ","跶":"adㄉㄚˊ","歌":"abㄍㄜ","獒":"aeㄠˊ","僖":"aaㄒㄧ","僚":"adㄌㄧㄠˊ","僦":"abㄐㄧㄡˋ","僧":"aaㄙㄥ","僬":"cbㄐㄧㄠ","僭":"cbㄐㄧㄢˋ","僮":"aaㄊㄨㄥˊ","僳":"caㄙㄨˋ","儆":"abㄐㄧㄥˇ","兢":"bbㄐㄧㄥ","凳":"abㄉㄥˋ","劁":"aaㄑㄧㄠˊ","劂":"caㄐㄩㄝˊ","厮":"adㄙ","嗽":"aaㄙㄡˋ","嗾":"aaㄙㄡˇ","嘀":"adㄉㄧˊ","嘁":"abㄑㄧ","嘈":"aaㄘㄠˊ","嘉":"abㄐㄧㄚ","嘌":"acㄆㄧㄠˋ","嘎":"abㄍㄚˇ","嘏":"ccㄍㄨˇ","嘘":"aeㄕ","嘛":"ac","嘞":"adㄌㄜ","嘣":"acㄅㄥ","嘤":"aeㄧㄥ","嘧":"acㄇㄧˋ","塾":"aeㄕㄨˊ","墁":"aeㄇㄢˋ","境":"aeㄐㄧㄥˋ","墅":"beㄕㄨˋ","墉":"ceㄩㄥ","墒":"aeㄕㄤ","墙":"aeㄑㄧㄤˊ","墚":"ceㄌㄧㄤˊ","夤":"aeㄧㄣˊ","夥":"cbㄏㄨㄛˇ","嫖":"acㄆㄧㄠˊ","嫘":"cdㄌㄟˊ","嫜":"adㄓㄤ","嫠":"bdㄌㄧˊ","嫡":"adㄉㄧˊ","嫣":"aeㄧㄢ","嫦":"aaㄔㄤˊ","嫩":"adㄋㄣˋ","嫱":"aaㄑㄧㄤˊ","孵":"acㄈㄨ","察":"aaㄔㄚˊ","寡":"bcㄍㄨㄚˇ","寤":"aeㄨˋ","寥":"adㄌㄧㄠˊ","寨":"abㄓㄞˋ","屣":"aaㄒㄧˇ","嶂":"aeㄓㄤˋ","幔":"acㄇㄢˋ","幛":"adㄓㄤˋ","廑":"cbㄐㄧㄣˇ","廖":"cdㄌㄧㄠˋ","弊":"acㄅㄧˋ","彰":"adㄓㄤ","愿":"abㄩㄢˋ","慕":"acㄇㄨˋ","慝":"adㄊㄜˋ","慢":"acㄇㄢˋ","慵":"aeㄩㄥ","慷":"abㄎㄤ","截":"abㄐㄧㄝˊ","戬":"abㄐㄧㄢˇ","搴":"abㄑㄧㄢ","搿":"bbㄍㄜˊ","摔":"aaㄕㄨㄞ","摘":"adㄓㄞ","摞":"adㄌㄨㄛˋ","摧":"aaㄘㄨㄟ","摭":"aaㄓˊ","摹":"acㄇㄛˊ","摺":"cdㄓㄜˊ","撂":"adㄌㄧㄠˋ","撄":"aeㄧㄥ","撇":"acㄆㄧㄝˇ","撖":"acㄏㄢˋ","敲":"abㄑㄧㄠ","斡":"abㄨㄛˋ","旖":"beㄧˇ","旗":"abㄑㄧˊ","暝":"acㄇㄧㄥˊ","暧":"adㄞˋ","暨":"abㄐㄧˋ","榍":"abㄒㄧㄝˋ","榕":"abㄖㄨㄥˊ","榛":"abㄓㄣ","榜":"abㄅㄤˋ","榧":"abㄈㄟˇ","榨":"abㄓㄚˋ","榫":"abㄙㄨㄣˇ","榭":"abㄒㄧㄝˋ","榱":"cbㄘㄨㄟ","榴":"abㄌㄧㄡˊ","榷":"abㄑㄩㄝˋ","榻":"abㄊㄚˋ","槁":"abㄍㄠˇ","槊":"abㄕㄨㄛˋ","槔":"abㄍㄠ","槛":"abㄐㄧㄢˋ","槟":"abㄅㄧㄣ","槠":"abㄓㄨ","模":"abㄇㄛˊ","歉":"abㄑㄧㄢˋ","殡":"acㄅㄧㄣˋ","毓":"cdㄩˋ","滴":"acㄉㄧ","滹":"ccㄏㄨ","漂":"acㄆㄧㄠˋ","漆":"acㄑㄧ","漉":"acㄌㄩˋ","漏":"acㄌㄡˋ","演":"acㄧㄢˇ","漕":"acㄘㄠˊ","漤":"bcㄌㄢˇ","漩":"acㄒㄩㄢˊ","漪":"acㄧ","漫":"acㄇㄢˋ","漯":"acㄌㄟˇ","漱":"acㄕㄨˋ","漳":"acㄓㄤ","漶":"acㄏㄨㄢˋ","漾":"acㄧㄤˋ","潆":"acㄧㄥˊ","潇":"acㄒㄧㄠ","潋":"acㄌㄧㄢˋ","潍":"acㄨㄟˊ","潢":"acㄏㄨㄤˊ","潴":"acㄓㄨ","澉":"acㄍㄢˇ","煽":"adㄕㄢ","熄":"adㄒㄧ","熊":"acㄒㄩㄥˊ","熏":"bcㄒㄩㄣˋ","熔":"adㄖㄨㄥˊ","熘":"adㄌㄧㄡ","熙":"acㄒㄧ","熬":"adㄠˊ","犒":"abㄎㄠˋ","獍":"abㄐㄧㄥˋ","獐":"adㄓㄤ","瑭":"adㄊㄤˊ","瑶":"adㄧㄠˊ","瑷":"ceㄞˋ","璃":"adㄌㄧˊ","甍":"abㄇㄥˊ","疑":"abㄧˊ","瘊":"cbㄏㄡˊ","瘌":"bdㄌㄚˋ","瘕":"cbㄐㄧㄚˇ","瘗":"bbㄧˋ","瘘":"adㄌㄡˋ","瘙":"aaㄙㄠˋ","瘟":"acㄨㄣ","瘥":"baㄘㄨㄛˊ","瘦":"aaㄕㄡˋ","瘩":"adㄉㄚˊ","睽":"abㄎㄨㄟˊ","睾":"cbㄍㄠ","睿":"baㄖㄨㄟˋ","瞀":"acㄇㄠˋ","瞅":"adㄔㄡˇ","瞍":"aaㄙㄡˇ","碟":"aeㄉㄧㄝˊ","碡":"aa","碣":"aeㄐㄧㄝˊ","碥":"afㄅㄧㄢˇ","碧":"acㄅㄧˋ","碱":"aeㄐㄧㄢˇ","碲":"aeㄉㄧˋ","碳":"aeㄊㄢˋ","碴":"aeㄔㄚˊ","碹":"aeㄒㄩㄢˋ","磁":"aeㄘˊ","磋":"aeㄘㄨㄛ","禚":"cdㄓㄨㄛˊ","稳":"aeㄨㄣˇ","窨":"acㄒㄩㄣ","窬":"caㄩˊ","窭":"afㄐㄩˋ","竭":"abㄐㄧㄝˊ","端":"adㄉㄨㄢ","箅":"abㄅㄧˋ","箍":"abㄍㄨ","箐":"abㄑㄧㄥˋ","箔":"acㄅㄛˊ","箕":"abㄐㄧ","算":"bbㄙㄨㄢˋ","箜":"cbㄎㄨㄥ","箝":"cbㄑㄧㄢˊ","管":"abㄍㄨㄢˇ","箢":"abㄩㄢ","箦":"abㄗㄜˊ","箧":"abㄑㄧㄝˋ","箨":"adㄊㄨㄛˋ","箩":"abㄌㄨㄛˊ","箪":"abㄉㄢ","箫":"abㄒㄧㄠ","箬":"abㄖㄨㄛˋ","箸":"abㄓㄨˋ","粹":"aaㄘㄨㄟˋ","粼":"adㄌㄧㄣˊ","粽":"aaㄗㄨㄥˋ","精":"aaㄐㄧㄥ","糁":"aaㄙㄢˇ","綦":"abㄑㄧˊ","綮":"aaㄑㄧˇ","缥":"acㄆㄧㄠˇ","缦":"acㄇㄢˋ","缧":"adㄌㄟˊ","缨":"aeㄧㄥ","缩":"aaㄙㄨˋ","缪":"adㄇㄧㄠˋ","缫":"aaㄙㄠ","罂":"aeㄧㄥ","罱":"bdㄌㄢˇ","罴":"acㄆㄧˊ","翟":"beㄉㄧˊ","翠":"aaㄘㄨㄟˋ","翡":"acㄈㄟˇ","翥":"aaㄓㄨˋ","耥":"cdㄊㄤˇ","聚":"afㄐㄩˋ","肇":"abㄓㄠˋ","腐":"acㄈㄨˇ","膀":"acㄅㄤˋ","膂":"cfㄌㄩˇ","膈":"abㄍㄜˊ","膊":"acㄅㄛˊ","膏":"abㄍㄠˋ","膑":"ccㄅㄧㄣˋ","膜":"acㄇㄛˊ","臧":"aaㄘㄤˊ","舆":"aaㄩˊ","舔":"adㄊㄧㄢˇ","舞":"acㄨˇ","艋":"acㄇㄥˇ","蓰":"abㄒㄧˇ","蓼":"abㄌㄧㄠˇ","蓿":"ab","蔌":"abㄙㄨˋ","蔑":"bbㄇㄧㄝˋ","蔓":"abㄇㄢˊ","蔗":"abㄓㄜˋ","蔚":"abㄨㄟˋ","蔟":"abㄘㄨˋ","蔡":"abㄘㄞˋ","蔫":"abㄋㄧㄢ","蔷":"abㄑㄧㄤˊ","蔸":"abㄉㄡ","蔹":"abㄌㄧㄢˇ","蔺":"abㄌㄧㄣˋ","蔻":"abㄎㄡˋ","蔼":"abㄞˇ","蔽":"abㄅㄧˋ","蕖":"cbㄑㄩˊ","蜘":"aaㄓ","蜚":"acㄈㄟˇ","蜜":"acㄇㄧˋ","蜞":"ccㄑㄧˊ","蜡":"adㄌㄚˋ","蜢":"acㄇㄥˇ","蜥":"aaㄒㄧ","蜩":"adㄊㄧㄠˊ","蜮":"cbㄩˋ","蜱":"acㄆㄧˊ","蜴":"abㄧˋ","蜷":"abㄑㄩㄢˊ","蜻":"aaㄑㄧㄥ","蜾":"abㄍㄨㄛˇ","蜿":"adㄨㄢ","蝇":"abㄧㄥˊ","蝈":"cbㄍㄨㄛ","蝉":"aaㄔㄢˊ","螂":"adㄌㄤˊ","裳":"adㄔㄤˊ","裴":"abㄆㄟˊ","裹":"adㄍㄨㄛˇ","褊":"afㄅㄧㄢˇ","褐":"acㄏㄜˋ","褓":"acㄅㄠˇ","褙":"acㄅㄟˋ","褛":"cfㄌㄩˇ","褡":"adㄉㄚ","褪":"adㄊㄨㄟˋ","觏":"cbㄍㄡˋ","觫":"caㄙㄨˋ","誓":"aaㄕˋ","谭":"adㄊㄢˊ","谮":"aaㄗㄣˋ","谯":"aaㄑㄧㄠˊ","谰":"adㄌㄢˊ","谱":"acㄆㄨˇ","谲":"cdㄐㄩㄝˊ","豪":"acㄏㄠˊ","貌":"ccㄇㄠˋ","赘":"bdㄓㄨㄟˋ","赙":"acㄈㄨˋ","赚":"abㄗㄨㄢˋ","赛":"aaㄙㄞˋ","赫":"bbㄏㄜˋ","跽":"abㄐㄧˋ","踅":"bcㄒㄩㄝˊ","踉":"adㄌㄧㄤˊ","踊":"aeㄩㄥˇ","踌":"adㄔㄡˊ","辕":"aeㄩㄢˊ","辖":"abㄒㄧㄚˊ","辗":"adㄋㄧㄢˇ","辣":"adㄌㄚˋ","遭":"aaㄗㄠ","遮":"adㄓㄜ","鄯":"aaㄕㄢˋ","鄱":"acㄆㄛˊ","酲":"caㄔㄥˊ","酴":"aaㄊㄨˊ","酵":"abㄐㄧㄠˋ","酶":"acㄇㄟˊ","酷":"abㄎㄨˋ","酸":"aaㄙㄨㄢ","酹":"adㄌㄟˋ","酽":"abㄧㄢˋ","酾":"aaㄕㄞ","酿":"abㄋㄧㄤˋ","銎":"aaㄑㄩㄥ","銮":"baㄌㄨㄢˊ","锲":"aaㄑㄧㄝˋ","锴":"aaㄎㄞˇ","锵":"aaㄑㄧㄤ","锶":"aaㄙ","锷":"aaㄜˇ","锸":"aaㄔㄚ","锹":"aaㄑㄧㄠ","锺":"caㄓㄨㄥ","锻":"aaㄉㄨㄢˋ","锼":"aaㄙㄡ","锾":"caㄏㄨㄢˊ","锿":"caㄞ","镀":"aaㄉㄨˋ","镁":"aaㄇㄟˇ","镂":"aaㄌㄡˋ","镄":"aaㄈㄟˋ","镅":"aaㄇㄟˊ","阚":"abㄎㄢˋ","隧":"aaㄙㄨㄟˋ","雌":"aaㄘˊ","雒":"adㄌㄨㄛˋ","需":"baㄒㄩ","霁":"acㄐㄧˋ","霆":"acㄊㄧㄥˊ","静":"caㄐㄧㄥˋ","靼":"adㄉㄚˊ","鞅":"adㄧㄤˋ","韬":"adㄊㄠ","韶":"aaㄕㄠˊ","颗":"abㄎㄜ","馑":"abㄐㄧㄣˇ","馒":"acㄇㄢˊ","骠":"acㄅㄧㄠ","骡":"adㄌㄨㄛˊ","骢":"aaㄘㄨㄥ","骶":"adㄉㄧˇ","骷":"abㄎㄨ","髦":"acㄇㄠˊ","魃":"ccㄅㄚˊ","魄":"acㄅㄛˊ","魅":"acㄇㄟˋ","鲑":"aeㄍㄨㄟ","鲒":"cbㄐㄧㄝˊ","鲔":"aeㄨㄟˇ","鲕":"cdㄦˊ","鲚":"abㄐㄧˋ","鲛":"abㄐㄧㄠ","鲜":"baㄒㄧㄢˇ","鲞":"bcㄒㄧㄤˇ","鲟":"acㄒㄩㄣˊ","鹕":"ccㄏㄨˊ","鹗":"abㄜˇ","鹘":"abㄍㄨˊ","鹚":"aaㄘˊ","鹛":"acㄇㄟˊ","鹜":"aeㄨˋ","麽":"ccㄇㄛˊ","鼐":"adㄋㄞˋ","鼻":"bcㄅㄧˊ","龇":"adㄗ","龈":"abㄧㄣˊ","墟":"aeㄒㄩ","暮":"acㄇㄨˋ","槃":"ccㄆㄢˊ","頔":"cdㄉㄧˊ","嫚":"acㄇㄢˋ","徳":"cdㄉㄜˊ","嘚":"cdㄉㄜ","粿":"cbㄍㄨㄛˇ","漈":"cdㄐㄧˋ","僰":"bcㄅㄛˊ","漖":"cdㄐㄧㄠˋ","製":"caㄓˋ","槙":"cdㄉㄧㄢ","樋":"cbㄊㄨㄥ","槭":"abㄑㄧˋ","僵":"abㄐㄧㄤ","僻":"adㄆㄧˋ","儇":"aaㄒㄩㄢ","儋":"adㄉㄢˋ","凛":"acㄌㄧㄣˇ","劈":"aaㄆㄧˇ","劐":"caㄏㄨㄛ","勰":"bcㄒㄧㄝˊ","嘬":"caㄔㄨㄞˋ","嘭":"acㄆㄥ","嘱":"aaㄓㄨˇ","嘲":"adㄔㄠˊ","嘶":"aaㄙ","嘹":"adㄌㄧㄠˊ","嘻":"aaㄒㄧ","嘿":"ceㄏㄟ","噌":"adㄘㄥ","噍":"abㄐㄧㄠˋ","噎":"aeㄕㄚ","噔":"abㄉㄥ","噗":"acㄆㄨ","噘":"cdㄐㄩㄝ","噙":"aaㄑㄧㄣˊ","噜":"adㄌㄩ","噢":"adㄛ","噶":"cbㄍㄚˊ","墀":"aeㄔˊ","增":"aeㄗㄥ","墨":"ccㄇㄛˋ","墩":"aeㄉㄨㄣ","嬉":"acㄒㄧ","寮":"adㄌㄧㄠˊ","履":"cfㄌㄩˇ","屦":"afㄐㄩˋ","嶙":"aeㄌㄧㄣˊ","嶝":"aeㄉㄥˋ","幞":"ccㄈㄨˊ","幡":"ccㄈㄢ","幢":"aaㄔㄨㄤˊ","廛":"baㄔㄢˊ","影":"aeㄧㄥˇ","徵":"ceㄓˇ","德":"adㄉㄜˊ","慧":"acㄏㄨㄟˋ","慰":"aeㄨㄟˋ","憋":"acㄅㄧㄝ","憎":"aaㄗㄥ","憔":"abㄑㄧㄠˊ","憧":"aaㄔㄨㄥ","憨":"acㄏㄢ","憬":"cbㄐㄧㄥˇ","懂":"abㄉㄨㄥˇ","戮":"adㄌㄩˋ","摩":"acㄇㄚ","撅":"adㄐㄩㄝ","撑":"adㄔㄥ","撒":"acㄙㄚˇ","撕":"aaㄙ","撙":"aaㄗㄨㄣˇ","撞":"aaㄓㄨㄤˋ","撤":"adㄔㄜˋ","撩":"adㄌㄧㄠˊ","撬":"abㄑㄧㄠˋ","播":"acㄅㄛ","撮":"adㄘㄨㄛ","撰":"adㄓㄨㄢˋ","撵":"adㄋㄧㄢˇ","撷":"abㄒㄧㄝˊ","撸":"cdㄌㄩ","撺":"aaㄘㄨㄢ","擒":"abㄑㄧㄣˊ","敷":"aaㄈㄨ","暴":"bcㄅㄠˋ","暹":"caㄒㄧㄢ","槲":"abㄏㄨˊ","槽":"abㄘㄠˊ","槿":"cbㄐㄧㄣˇ","樊":"abㄈㄢˊ","樗":"abㄔㄨ","樘":"abㄔㄥ","樟":"abㄓㄤ","横":"abㄏㄥˊ","樯":"abㄑㄧㄤˊ","樱":"abㄧㄥ","橄":"abㄍㄢˇ","橡":"abㄒㄧㄤˋ","橥":"abㄓㄨ","毅":"abㄧˋ","滕":"adㄊㄥˊ","潘":"acㄆㄢ","潜":"acㄑㄧㄢˊ","潦":"acㄌㄠˊ","潭":"acㄊㄢˊ","潮":"acㄔㄠˊ","潲":"acㄕㄠˋ","潸":"acㄕㄢ","潺":"acㄔㄢˊ","潼":"acㄊㄨㄥˊ","澄":"acㄔㄥˊ","澈":"acㄔㄜˋ","澌":"acㄙ","澍":"acㄕㄨˋ","澎":"acㄆㄥˊ","澜":"acㄌㄢˊ","澳":"acㄠˋ","熟":"aaㄕㄡˊ","熠":"adㄧˋ","熨":"adㄩˋ","熳":"adㄇㄢˋ","熵":"adㄕㄤ","牖":"beㄧㄡˇ","獗":"adㄐㄩㄝˊ","獠":"adㄌㄠˇ","瑾":"adㄐㄧㄣˇ","璀":"aaㄘㄨㄟˇ","璁":"aaㄘㄨㄥ","璇":"adㄒㄩㄢˊ","璋":"adㄓㄤ","璎":"aeㄧㄥ","璜":"acㄏㄨㄤˊ","畿":"abㄐㄧ","瘛":"baㄔˋ","瘠":"cbㄐㄧˊ","瘢":"acㄅㄢ","瘤":"adㄌㄧㄡˊ","瘪":"bcㄅㄧㄝˇ","瘫":"adㄊㄢ","瘼":"acㄇㄛˋ","瞌":"abㄎㄜ","瞎":"abㄒㄧㄚ","瞑":"acㄇㄧㄥˊ","瞒":"acㄇㄢˊ","瞢":"abㄇㄥˊ","碾":"aeㄋㄧㄢˇ","磅":"aeㄅㄤˋ","磉":"caㄙㄤˇ","磊":"beㄌㄟˇ","磐":"aeㄆㄢˊ","磔":"aeㄓㄜˊ","磕":"aeㄎㄜ","磙":"aeㄍㄨㄣˇ","稷":"bbㄐㄧˋ","稹":"aaㄓㄣˇ","稻":"abㄉㄠˋ","稼":"abㄐㄧㄚˋ","稽":"abㄐㄧ","稿":"abㄍㄠˇ","窳":"cbㄩˇ","箱":"abㄒㄧㄤ","箴":"abㄓㄣ","篁":"abㄏㄨㄤˊ","篆":"abㄓㄨㄢˋ","篇":"abㄆㄧㄢ","篌":"cbㄏㄡˊ","篑":"abㄎㄨㄟˋ","篓":"abㄌㄡˇ","糅":"aaㄖㄡˊ","糇":"abㄏㄡˊ","糈":"aeㄒㄩˇ","糊":"aeㄏㄨˊ","糌":"caㄗㄢ","糍":"aaㄘˊ","缬":"acㄒㄧㄝˊ","缭":"adㄌㄧㄠˊ","缮":"aaㄕㄢˋ","缯":"aaㄗㄥˋ","羯":"cbㄐㄧㄝˊ","羰":"cd","翦":"abㄐㄧㄢˇ","翩":"acㄆㄧㄢ","耦":"abㄡˇ","耧":"adㄌㄡˊ","聩":"abㄎㄨㄟˋ","聪":"aaㄘㄨㄥ","膘":"acㄅㄧㄠ","膛":"adㄊㄤˊ","膝":"aaㄒㄧ","膣":"cdㄓˋ","艏":"caㄕㄡˇ","艘":"aaㄙㄡ","蔬":"abㄕㄨ","蕃":"abㄅㄛ","蕈":"abㄒㄩㄣˋ","蕉":"abㄐㄧㄠ","蕊":"abㄖㄨㄟˇ","蕙":"abㄏㄨㄟˋ","蕞":"abㄗㄨㄟˋ","蕤":"abㄖㄨㄟˊ","蕨":"abㄐㄩㄝˊ","蕲":"abㄑㄧˊ","蕴":"abㄩㄣˋ","蕺":"cbㄐㄧˊ","虢":"bcㄍㄨㄛˊ","蝌":"abㄎㄜ","蝎":"abㄒㄧㄝ","蝓":"caㄩˊ","蝗":"abㄏㄨㄤˊ","蝙":"afㄅㄧㄢ","蝠":"acㄈㄨˊ","蝣":"ceㄧㄡˊ","蝤":"abㄑㄧㄡˊ","蝥":"acㄇㄠˊ","蝮":"ccㄈㄨˋ","蝰":"aeㄎㄨㄟˊ","蝴":"aeㄏㄨˊ","蝶":"adㄉㄧㄝˊ","蝻":"adㄋㄢˇ","蝼":"adㄌㄡˊ","蝽":"acㄔㄨㄣ","蝾":"caㄖㄨㄥˊ","螋":"caㄙㄡ","褒":"acㄅㄠ","褥":"aaㄖㄨˋ","褫":"baㄔˇ","褴":"adㄌㄢˊ","觐":"abㄐㄧㄣˋ","觑":"abㄑㄩˋ","觯":"bdㄓˋ","谳":"abㄧㄢˋ","谴":"aaㄑㄧㄢˇ","谵":"aaㄓㄢ","豌":"aeㄨㄢ","豫":"aeㄩˋ","赜":"aaㄗㄜˊ","赭":"adㄓㄜˇ","趟":"adㄊㄤˋ","趣":"aaㄘㄨˋ","踏":"adㄊㄚˋ","踔":"adㄔㄨㄛ","踝":"ccㄏㄨㄞˊ","踞":"afㄐㄩˋ","踟":"adㄔˊ","踢":"adㄊㄧ","踣":"acㄅㄛˊ","踩":"aaㄘㄞˇ","踪":"aaㄗㄨㄥ","踬":"adㄓˋ","踮":"adㄉㄧㄢˇ","踯":"caㄓˊ","踺":"abㄐㄧㄢˋ","躺":"adㄊㄤˇ","辘":"adㄌㄩˋ","遴":"adㄌㄧㄣˊ","遵":"aaㄗㄨㄣ","醅":"acㄆㄟ","醇":"acㄔㄨㄣˊ","醉":"bbㄗㄨㄟˋ","醋":"aaㄘㄨˋ","醌":"abㄎㄨㄣ","鋈":"aaㄨˋ","镆":"caㄇㄛˋ","镇":"aaㄓㄣˋ","镉":"aaㄍㄜˊ","镊":"aaㄋㄧㄝˋ","镌":"aaㄐㄩㄢ","镍":"aaㄋㄧㄝˋ","镎":"aaㄋㄚˊ","镏":"aaㄌㄧㄡˊ","镐":"aaㄍㄠˇ","镑":"aaㄅㄤˋ","镒":"aaㄧˋ","镓":"aaㄐㄧㄚ","镔":"aaㄅㄧㄣ","霄":"acㄒㄧㄠ","震":"acㄓㄣˋ","霈":"acㄆㄟˋ","霉":"acㄇㄟˊ","靠":"abㄎㄠˋ","靥":"beㄧㄝˋ","鞋":"aeㄒㄧㄝˊ","鞍":"aeㄢ","鞑":"adㄉㄚˊ","鞒":"abㄑㄧㄠˊ","题":"adㄊㄧˊ","颚":"abㄜˋ","颛":"aaㄓㄨㄢ","颜":"abㄧㄢˊ","额":"abㄜˊ","飘":"adㄆㄧㄠ","餍":"aaㄧㄢˋ","馓":"aaㄙㄢˇ","馔":"adㄓㄨㄢˋ","骣":"aaㄔㄢˇ","骸":"acㄏㄞˊ","骺":"abㄏㄡˊ","骼":"abㄍㄜˊ","髫":"adㄊㄧㄠˊ","髯":"aaㄖㄢˊ","魇":"abㄧㄢˇ","鲠":"abㄍㄥˇ","鲡":"adㄌㄧˊ","鲢":"adㄌㄧㄢˊ","鲣":"abㄐㄧㄢ","鲤":"cdㄌㄧˇ","鲥":"acㄕˊ","鲦":"adㄊㄧㄠˊ","鲧":"abㄍㄨㄣˇ","鲨":"acㄕㄚ","鲩":"acㄏㄨㄢˋ","鲫":"abㄐㄧˋ","鹞":"adㄧㄠˋ","鹣":"abㄐㄧㄢ","鹤":"acㄏㄜˋ","麾":"acㄏㄨㄟ","黎":"adㄌㄧˊ","齑":"cdㄐㄧ","龉":"abㄩˇ","龊":"bdㄔㄨㄛˋ","懊":"aeㄠˋ","镕":"caㄖㄨㄥˊ","頫":"ccㄈㄨˇ","慜":"ccㄇㄧㄣˇ","樑":"cbㄌㄧㄤˊ","鋆":"cdㄩㄣˊ","潟":"ccㄒㄧˋ","禤":"aaㄒㄩㄢ","噁":"ceㄜˊ","奭":"baㄕˋ","鋐":"cbㄏㄨㄥˊ","澂":"ccㄔㄥˊ","儒":"aaㄖㄨˊ","冀":"abㄐㄧˋ","凝":"acㄋㄧㄥˊ","劓":"caㄧˋ","嘴":"abㄗㄨㄟˇ","噤":"abㄐㄧㄣˋ","器":"bbㄑㄧˋ","噩":"cbㄜˋ","噪":"aaㄗㄠˋ","噫":"aeㄞˋ","噬":"baㄕˋ","噱":"acㄐㄩㄝˊ","噻":"cfㄙㄞ","噼":"acㄆㄧ","嚆":"abㄏㄠ","圜":"cbㄏㄨㄢˊ","墼":"cbㄐㄧ","壁":"aeㄅㄧˋ","壅":"aeㄩㄥ","嬖":"acㄅㄧˋ","嬗":"aaㄕㄢˋ","嬴":"cbㄧㄥˊ","寰":"acㄏㄨㄢˊ","廨":"acㄒㄧㄝˋ","廪":"adㄌㄧㄣˇ","徼":"abㄐㄧㄠˋ","憝":"adㄉㄨㄟˋ","憩":"bcㄑㄧˋ","憷":"aaㄔㄨˋ","憾":"acㄏㄢˋ","懈":"acㄒㄧㄝˋ","懒":"adㄌㄢˇ","懔":"adㄌㄧㄣˇ","撼":"acㄏㄢˋ","擀":"abㄍㄢˇ","擂":"adㄌㄟˊ","擅":"aaㄕㄢˋ","操":"aaㄘㄠ","擎":"abㄑㄧㄥˊ","擐":"ccㄏㄨㄢˋ","擗":"acㄆㄧˇ","擞":"aaㄙㄡˋ","整":"caㄓㄥˇ","斓":"adㄌㄢˊ","暾":"adㄊㄨㄣ","樨":"abㄒㄧ","樵":"abㄑㄧㄠˊ","樽":"abㄗㄨㄣ","樾":"abㄩㄝˋ","橇":"abㄑㄧㄠ","橐":"adㄊㄨㄛˊ","橘":"afㄐㄩˊ","橙":"abㄔㄥˊ","橛":"abㄐㄩㄝˊ","橱":"abㄔㄨˊ","橹":"abㄌㄩˇ","橼":"cbㄩㄢˊ","檎":"cbㄑㄧㄣˊ","檠":"abㄑㄧㄥˊ","歙":"aeㄕㄜˋ","殪":"aeㄧˋ","氅":"aaㄔㄤˇ","氆":"acㄆㄨˇ","氇":"cdu","潞":"acㄌㄩˋ","澡":"acㄗㄠˇ","澧":"acㄌㄧˇ","澶":"acㄔㄢˊ","澹":"acㄉㄢˋ","激":"abㄐㄧ","濂":"acㄌㄧㄢˊ","濉":"acㄙㄨㄟ","濑":"acㄌㄞˊ","濒":"acㄅㄧㄣ","熹":"adㄒㄧ","燃":"adㄖㄢˊ","燎":"adㄌㄧㄠˊ","燔":"adㄈㄢˊ","燕":"ceㄧㄢˋ","燠":"adㄩˋ","燧":"adㄙㄨㄟˋ","犟":"abㄐㄧㄤˋ","獬":"acㄒㄧㄝˋ","獭":"adㄊㄚˇ","璞":"acㄆㄨˊ","瓢":"acㄆㄧㄠˊ","甏":"acㄅㄥˋ","甑":"aaㄗㄥˋ","瘭":"acㄅㄧㄠ","瘰":"cdㄌㄨㄛˇ","瘳":"aaㄔㄡ","瘴":"adㄓㄤˋ","瘵":"aa","瘸":"baㄑㄩㄝˊ","瘾":"aeㄧㄣˇ","瘿":"abㄧㄥˇ","癀":"abㄏㄨㄤˊ","癃":"adㄌㄨㄥˊ","盥":"bcㄍㄨㄢˋ","瞟":"acㄆㄧㄠˇ","瞠":"adㄔㄥ","瞥":"acㄆㄧㄝ","瞰":"abㄎㄢˋ","磨":"aeㄇㄛˊ","磬":"bbㄑㄧㄥˋ","磲":"cbㄑㄩˊ","磺":"aeㄏㄨㄤˊ","禧":"acㄒㄧˇ","穆":"aaㄇㄨˋ","穑":"abㄙㄜˋ","窿":"adㄌㄨㄥˊ","篙":"abㄍㄠ","篚":"abㄈㄟˇ","篝":"abㄍㄡ","篡":"abㄘㄨㄢˋ","篥":"cbㄌㄧˋ","篦":"abㄅㄧˋ","篪":"bbㄔˊ","篮":"abㄌㄢˊ","篱":"abㄌㄧˊ","篷":"abㄆㄥˊ","糕":"abㄍㄠ","糖":"adㄊㄤˊ","糗":"cbㄑㄧㄡˇ","糙":"aaㄘㄠ","缰":"abㄐㄧㄤ","缱":"caㄑㄧㄢˇ","缲":"abㄑㄧㄠ","缳":"ccㄏㄨㄢˊ","缴":"abㄐㄧㄠˇ","罹":"bdㄌㄧˊ","羲":"baㄒㄧ","翮":"acㄏㄜˊ","翰":"acㄏㄢˋ","翱":"aaㄠˊ","耨":"adˋ","耩":"abㄐㄧㄤˇ","耪":"acㄆㄤˇ","聱":"aeㄠˊ","膦":"adㄌㄧㄣˋ","膨":"acㄆㄥˊ","膪":"aaㄔㄨㄞˋ","膳":"aaㄕㄢˋ","臻":"adㄓㄣ","蕹":"abㄨㄥˋ","蕻":"cbㄏㄨㄥˊ","蕾":"abㄌㄟˇ","薄":"acㄅㄠˊ","薅":"abㄏㄠ","薇":"cbㄨㄟ","薏":"abㄧˋ","薛":"abㄒㄩㄝ","薜":"abㄅㄧˋ","薤":"bbㄒㄧㄝˋ","薨":"cbㄏㄨㄥ","薪":"abㄒㄧㄣ","薮":"abㄙㄡˇ","薯":"abㄕㄨˇ","螃":"acㄆㄤˊ","螅":"aaㄒㄧ","螈":"aeㄩㄢˊ","融":"aeㄖㄨㄥˊ","螓":"cbㄑㄧㄣˊ","螗":"adㄊㄤˊ","螟":"ccㄇㄧㄥˊ","螨":"acㄇㄢˇ","螭":"adㄔ","螯":"aeㄠˊ","蟆":"adㄇㄚˊ","蟒":"acㄇㄤˇ","衡":"aeㄏㄥˊ","褰":"abㄑㄧㄢ","褶":"adㄒㄧˊ","赝":"abㄧㄢˋ","赞":"baㄗㄢˋ","赠":"adㄗㄥˋ","踱":"adㄉㄨㄛˊ","踵":"adㄓㄨㄥˇ","踹":"aaㄔㄨㄞˋ","踽":"cfㄐㄩˇ","蹀":"adㄉㄧㄝˊ","蹁":"acㄆㄧㄢˊ","蹂":"aaㄖㄡˊ","蹄":"adㄊㄧˊ","蹉":"aaㄘㄨㄛ","辙":"adㄓㄜˊ","辚":"adㄌㄧㄣˊ","辨":"afㄅㄧㄢˋ","辩":"afㄅㄧㄢˋ","遽":"afㄐㄩˋ","避":"acㄅㄧˋ","邀":"abㄧㄠ","邂":"acㄒㄧㄝˋ","鄹":"aaㄗㄡ","醍":"adㄊㄧˊ","醐":"ccㄏㄨˊ","醑":"aaㄒㄩˇ","醒":"caㄒㄧㄥˇ","醚":"cfㄇㄧˊ","醛":"abㄑㄩㄢˊ","錾":"aaㄗㄢˋ","镖":"aaㄅㄧㄠ","镗":"aaㄊㄤˊ","镘":"aaㄇㄢˋ","镙":"caㄌㄨㄛˊ","镛":"aaㄩㄥ","镜":"aaㄐㄧㄥˋ","镝":"aaㄉㄧˊ","镞":"aaㄗㄨˊ","镟":"caㄒㄩㄢˋ","隰":"baㄒㄧˊ","雕":"aaㄉㄧㄠ","霍":"acㄏㄨㄛˋ","霎":"acㄕㄚˋ","霏":"acㄈㄟ","霓":"acㄋㄧˊ","霖":"acㄌㄧㄣˊ","靛":"adㄉㄧㄢˋ","鞔":"ccㄇㄢˊ","鞘":"abㄑㄧㄠˋ","颞":"aaㄋㄧㄝˋ","颟":"ccㄇㄢ","颠":"aaㄉㄧㄢ","颡":"ca","飙":"bcㄅㄧㄠ","飚":"ccㄅㄧㄠ","餐":"aaㄘㄢ","髭":"adㄗ","髹":"aaㄒㄧㄡ","髻":"abㄐㄧˋ","魈":"abㄒㄧㄠ","魉":"adㄌㄧㄤˇ","鲭":"aaㄑㄧㄥ","鲮":"adㄌㄧㄥˊ","鲰":"aaㄗㄡ","鲱":"acㄈㄟ","鲲":"abㄎㄨㄣ","鲳":"aaㄔㄤ","鲴":"acㄍㄨˋ","鲵":"abㄋㄧˊ","鲶":"cdㄋㄧㄢˊ","鲷":"adㄉㄧㄠ","鲸":"abㄐㄧㄥ","鲺":"acㄕ","鲻":"adㄗ","鹦":"aeㄧㄥ","鹧":"adㄓㄜˋ","鹨":"cdㄌㄧㄡˋ","鹾":"caㄘㄨㄛˊ","麇":"abㄐㄩㄣ","麈":"aaㄓㄨˇ","黉":"cbㄏㄨㄥˊ","黔":"abㄑㄧㄢˊ","默":"acㄇㄛˋ","鼽":"cbㄑㄧㄡˊ","璟":"abㄐㄧㄥˇ","赟":"ccㄩㄣ","燊":"bdㄕㄣ","嬛":"cdㄏㄨㄢˊ","濛":"ccㄇㄥˊ","璠":"acㄈㄢˊ","燚":"cdㄧˋ","磡":"cbㄎㄢˋ","窸":"aaㄒㄧ","曌":"caㄓㄠˋ","曈":"adㄊㄨㄥˊ","錤":"cdㄐㄧ","璘":"adㄌㄧㄣˊ","蕗":"adㄌㄩˋ","嬢":"cdㄋㄧㄤˊ","叡":"caㄖㄨㄟˋ","霑":"ccㄓㄢ","獴":"acㄇㄥˇ","儡":"adㄌㄟˊ","嚅":"caㄖㄨˊ","嚎":"acㄏㄠˊ","嚏":"adㄊㄧˋ","嚓":"aaㄘㄚ","壑":"aeㄏㄜˋ","壕":"aeㄏㄠˊ","嬲":"beㄋㄧㄠˇ","嬷":"acㄇㄛˊ","孺":"aaㄖㄨˊ","嶷":"aeㄋㄧˋ","徽":"aaㄏㄨㄟ","懋":"abㄇㄠˋ","懑":"acㄇㄣˋ","懦":"adㄋㄨㄛˋ","戴":"adㄉㄞˋ","擘":"acㄅㄛˋ","擢":"adㄓㄨㄛˇ","擤":"caㄒㄧㄥˇ","擦":"aaㄘㄚ","曙":"adㄕㄨˇ","朦":"acㄇㄥˊ","檀":"abㄊㄢˊ","檄":"abㄒㄧˊ","檐":"abㄧㄢˊ","檑":"abㄌㄟˋ","檗":"cbㄅㄛˋ","檩":"abㄌㄧㄣˇ","檬":"abㄇㄥˊ","濞":"acㄅㄧˋ","濠":"acㄏㄠˊ","濡":"acㄖㄨˊ","濮":"acㄆㄨˊ","濯":"acㄓㄨㄛˊ","燥":"adㄙㄠˋ","燮":"bdㄒㄧㄝˋ","爵":"adㄐㄩㄝˊ","獯":"acㄒㄩㄣ","璐":"adㄌㄩˋ","璨":"aaㄘㄢˋ","璩":"abㄑㄩˊ","甓":"acㄆㄧˋ","疃":"adㄊㄨㄢˇ","癌":"aeㄞˊ","癍":"acㄅㄢ","皤":"acㄆㄛˊ","瞧":"abㄑㄧㄠˊ","瞩":"aaㄓㄨˇ","瞪":"cbㄉㄥˋ","瞬":"aaㄕㄨㄣˋ","瞳":"adㄊㄨㄥˊ","瞵":"cdㄌㄧㄣˊ","磴":"aeㄉㄥˋ","磷":"adㄌㄧㄣˊ","礁":"aeㄐㄧㄠ","礅":"aeㄉㄨㄣ","穗":"acㄙㄨㄟˋ","篼":"abㄉㄡ","篾":"abㄇㄧㄝˋ","簇":"abㄘㄨˋ","簋":"bbㄍㄨㄟˇ","簌":"abㄙㄨˋ","簏":"cbㄌㄩˋ","簖":"abㄉㄨㄢˋ","簧":"cbㄏㄨㄤˊ","糜":"acㄇㄟˊ","糟":"aaㄗㄠ","糠":"abㄎㄤ","縻":"aaㄇㄧˊ","繁":"acㄈㄢˊ","繇":"adㄧㄠˊ","罄":"abㄑㄧㄥˋ","罅":"abㄒㄧㄚˋ","罾":"caㄗㄥ","羁":"bbㄐㄧ","翳":"aeㄧˋ","翼":"aaㄧˋ","膺":"aeㄧㄥ","膻":"aaㄕㄢ","臀":"cdㄊㄨㄣˊ","臁":"adㄌㄧㄢˊ","臂":"acㄅㄧˋ","臃":"aeㄩㄥ","臆":"aeㄧˋ","臊":"aaㄙㄠˋ","臌":"abㄍㄨˇ","艚":"aaㄘㄠˊ","薰":"abㄒㄩㄣ","薷":"abㄖㄨˊ","薹":"abㄊㄞˊ","藁":"abㄍㄠˇ","藉":"abㄐㄧˊ","藏":"abㄘㄤˊ","藐":"abㄇㄧㄠˇ","藓":"abㄒㄧㄢˇ","螫":"aaㄕˋ","螬":"aaㄘㄠˊ","螳":"adㄊㄤˊ","螵":"acㄆㄧㄠ","螺":"adㄌㄨㄛˊ","螽":"cdㄓㄨㄥ","蟀":"aaㄕㄨㄞˋ","蟊":"acㄇㄠˊ","蟋":"aaㄒㄧ","蟑":"cdㄓㄤ","蟓":"aaㄒㄧㄤˋ","蟥":"abㄏㄨㄤˊ","襁":"abㄑㄧㄤˇ","襄":"bdㄒㄧㄤ","觳":"ccㄏㄨˊ","謇":"cbㄐㄧㄢˇ","豁":"abㄏㄨㄛˊ","豳":"bcㄅㄧㄣ","貔":"acㄆㄧˊ","貘":"acㄇㄛˋ","赡":"adㄕㄢˋ","赢":"adㄧㄥˊ","蹇":"baㄐㄧㄢˇ","蹈":"adㄉㄠˇ","蹊":"abㄑㄧ","蹋":"adㄊㄚˋ","蹑":"aaㄋㄧㄝˋ","蹒":"acㄆㄢˊ","辫":"afㄅㄧㄢˋ","邃":"aaㄙㄨㄟˋ","邈":"acㄇㄧㄠˇ","醢":"ccㄏㄞˇ","醣":"cdㄊㄤˊ","鍪":"aaㄇㄡˊ","镡":"aaㄒㄧㄣˊ","镢":"aaㄐㄩㄝˊ","镣":"aaㄌㄧㄠˋ","镤":"aaㄆㄨˊ","镥":"aaㄌㄩˇ","镦":"aaㄉㄨㄟˋ","镧":"aaㄌㄢˊ","镨":"aaㄆㄨˇ","镩":"aaㄘㄨㄢˋ","镪":"aaㄑㄧㄤˇ","镫":"aaㄉㄥˋ","隳":"ccㄏㄨㄟ","霜":"acㄕㄨㄤ","霞":"acㄒㄧㄚˊ","鞠":"afㄐㄩ","馘":"abㄍㄨㄛˊ","骤":"aaㄓㄡˋ","髀":"acㄅㄧˋ","髁":"abㄎㄜ","魍":"adㄨㄤˇ","魏":"abㄨㄟˋ","鲼":"ccㄈㄣˋ","鲽":"adㄉㄧㄝˊ","鳃":"aaㄙㄞ","鳄":"abㄜˇ","鳅":"cbㄑㄧㄡ","鳆":"acㄈㄨˋ","鳇":"abㄏㄨㄤˊ","鳊":"afㄅㄧㄢ","鳋":"caㄙㄠ","鹩":"adㄌㄧㄠˊ","鹪":"abㄐㄧㄠ","鹫":"abㄐㄧㄡˋ","鹬":"abㄩˋ","麋":"adㄇㄧˊ","黏":"adㄋㄧㄢˊ","黛":"adㄉㄞˋ","黜":"aaㄔㄨˋ","黻":"bcㄈㄨˊ","鼢":"acㄈㄣˊ","鼾":"acㄏㄢ","龋":"abㄑㄩˇ","龌":"adㄨㄛˋ","龠":"ceㄩㄝˋ","黝":"aeㄧㄡˇ","瞭":"cdㄌㄧㄠˋ","簕":"adㄌㄜˋ","冁":"caㄔㄢˇ","嚣":"bbㄠˊ","彝":"aeㄧˊ","懵":"acㄇㄥˇ","戳":"adㄔㄨㄛ","曛":"adㄒㄩㄣ","曜":"adㄧㄠˋ","檫":"abㄔㄚˊ","瀑":"acㄅㄠˋ","燹":"baㄒㄧㄢˇ","璧":"aeㄅㄧˋ","癔":"aeㄧˋ","癖":"acㄆㄧˇ","癜":"adㄉㄧㄢˋ","癞":"adㄌㄚˋ","瞻":"adㄓㄢ","瞽":"abㄍㄨˇ","瞿":"cfㄑㄩˊ","礓":"ceㄐㄧㄤ","礞":"aeㄇㄥˊ","簟":"abㄉㄧㄢˋ","簦":"abㄉㄥ","簪":"abㄗㄢ","糨":"abㄐㄧㄤˋ","翻":"acㄈㄢ","艟":"aaㄔㄨㄥ","藕":"abㄡˇ","藜":"abㄌㄧˊ","藤":"abㄊㄥˊ","藩":"acㄈㄢ","蟛":"acㄆㄥˊ","蟠":"acㄆㄢˊ","蟪":"ccㄏㄨㄟˋ","蟮":"aaㄕㄢˋ","襟":"abㄐㄧㄣ","覆":"acㄈㄨˋ","謦":"caㄑㄧㄥˇ","蹙":"aaㄘㄨˋ","蹦":"aeㄅㄥˋ","蹩":"acㄅㄧㄝˊ","躇":"aaㄔㄨˊ","邋":"adㄌㄚ","醪":"adㄌㄠˊ","鎏":"aaㄌㄧㄡˊ","鏊":"caㄠˋ","镬":"caㄏㄨㄛˋ","镭":"aaㄌㄟˊ","镯":"aaㄓㄨㄛˊ","镰":"aaㄌㄧㄢˊ","镱":"aaㄧˋ","雠":"cdㄔㄡˊ","鞣":"aaㄖㄡˊ","鞫":"afㄐㄩ","鞭":"afㄅㄧㄢ","鞯":"abㄐㄧㄢ","颢":"abㄏㄠˋ","餮":"adㄊㄧㄝˋ","馥":"acㄈㄨˋ","髂":"abㄑㄧㄚˋ","髅":"adㄌㄡˊ","鬃":"aaㄗㄨㄥ","鬈":"cbㄑㄩㄢˊ","鳌":"aeㄠˊ","鳍":"acㄑㄧˊ","鳎":"adㄊㄚˇ","鳏":"abㄍㄨㄢ","鳐":"adㄧㄠˊ","鹭":"adㄌㄩˋ","鹰":"abㄧㄥ","黟":"ceㄧ","黠":"abㄒㄧㄚˊ","鼬":"ceㄧㄡˋ","鹱":"ccㄏㄨˋ","鹮":"cbㄏㄨㄢˊ","蹚":"cdㄊㄤ","瀍":"acㄔㄢˊ","藠":"cdㄐㄧㄠˋ","鞥":"cd","嚯":"ccㄏㄨㄛˋ","孽":"abㄋㄧㄝˋ","巅":"aeㄉㄧㄢ","攀":"abㄆㄢ","攉":"abㄏㄨㄛ","攒":"aaㄘㄨㄢˊ","曝":"adㄅㄠˋ","瀚":"acㄏㄢˋ","瀛":"acㄧㄥˊ","瀣":"acㄒㄧㄝˋ","瓣":"acㄅㄢˋ","疆":"aeㄐㄧㄤ","癣":"aaㄒㄩㄢˇ","礤":"aeㄘㄚˇ","簸":"abㄅㄛˋ","簿":"acㄅㄨˋ","籀":"abㄓㄡˋ","籁":"abㄌㄞˊ","缵":"abㄗㄨㄢˇ","羸":"adㄌㄟˊ","羹":"bcㄍㄥ","艨":"ccㄇㄥˊ","藻":"acㄗㄠˇ","藿":"cbㄏㄨㄛˋ","蘅":"abㄏㄥˊ","蘑":"abㄇㄛˊ","蘧":"abㄑㄩˊ","蟹":"abㄒㄧㄝˋ","蟾":"aaㄔㄢˊ","蠃":"bdㄌㄨㄛˇ","蠊":"adㄌㄧㄢˊ","蠓":"acㄇㄥˇ","蠖":"cbㄏㄨㄛˋ","襞":"acㄅㄧˋ","襦":"aaㄖㄨˊ","警":"abㄐㄧㄥˇ","谶":"baㄔㄣˋ","蹬":"abㄉㄥˋ","蹭":"adㄘㄥˋ","蹯":"acㄈㄢˊ","蹰":"aaㄔㄨˊ","蹲":"adㄘㄨㄣˊ","蹴":"aaㄘㄨˋ","蹶":"adㄐㄩㄝˊ","蹼":"acㄆㄨˇ","蹿":"aaㄘㄨㄢ","酃":"cdㄌㄧㄥˊ","醭":"acㄅㄨˊ","醮":"abㄐㄧㄠˋ","醯":"aaㄒㄧ","鏖":"aaㄠˊ","镲":"aaㄔㄚˇ","霪":"acㄧㄣˊ","霭":"abㄞˇ","靡":"acㄇㄧˊ","鞲":"ccㄍㄡ","鞴":"acㄅㄟˋ","颤":"adㄔㄢˋ","骥":"aaㄐㄧˋ","髋":"abㄎㄨㄢ","髌":"acㄅㄧㄣˋ","鬏":"abㄐㄧㄡ","魑":"adㄔ","鳓":"adㄌㄜˋ","鳔":"acㄅㄧㄠˋ","鳕":"acㄒㄩㄝˇ","鳖":"acㄅㄧㄝ","鳗":"acㄇㄢˊ","鳘":"acㄇㄧㄣˇ","鳙":"aeㄩㄥ","麒":"abㄑㄧˊ","麓":"abㄌㄩˋ","麴":"cbㄑㄩ","黢":"abㄑㄩ","黼":"ccㄈㄨˇ","鼗":"adㄊㄠˊ","贇":"ccㄩㄣ","韡":"caㄨㄟˇ","璺":"caㄨㄣˋ","嚷":"acㄖㄤˇ","嚼":"adㄐㄧㄠˊ","壤":"aeㄖㄤˇ","孀":"aaㄕㄨㄤ","巍":"aeㄨㄟ","攘":"acㄖㄤˇ","曦":"adㄒㄧ","瀵":"ccㄈㄣˋ","瀹":"ccㄩㄝˋ","灌":"acㄍㄨㄢˋ","獾":"ccㄏㄨㄢ","瓒":"aaㄗㄢˋ","矍":"bdㄐㄩㄝˊ","籍":"abㄐㄧˊ","糯":"adㄋㄨㄛˋ","纂":"abㄗㄨㄢˇ","耀":"adㄧㄠˋ","蘖":"abㄋㄧㄝˋ","蘩":"cbㄈㄢˊ","蠕":"aaㄖㄨˊ","蠛":"acㄇㄧㄝˋ","譬":"acㄆㄧˋ","躁":"aaㄗㄠˋ","躅":"adㄓㄨˊ","酆":"acㄈㄥ","醴":"adㄌㄧˇ","醵":"afㄐㄩˋ","镳":"aaㄅㄧㄠ","霰":"aaㄒㄧㄢˋ","颥":"caㄖㄨˊ","馨":"aaㄒㄧㄣ","骧":"adㄒㄧㄤ","鬓":"acㄅㄧㄣˋ","魔":"acㄇㄛˊ","鳜":"abㄍㄨㄟˋ","鳝":"aaㄕㄢˋ","鳞":"adㄌㄧㄣˊ","鳟":"caㄗㄨㄣ","黥":"caㄑㄧㄥˊ","黧":"adㄌㄧˊ","黩":"aaㄉㄨˊ","黪":"aaㄘㄢˇ","鼍":"cdㄊㄨㄛˊ","鼯":"aeㄨˊ","孃":"cdㄋㄧㄤˊ","鱀":"cdㄐㄧˋ","龑":"cdㄧㄢˇ","黁":"cdˊ","夔":"cbㄎㄨㄟˊ","曩":"adㄋㄤˇ","灏":"acㄏㄠˋ","爝":"adㄐㄩㄝˊ","癫":"adㄉㄧㄢ","礴":"aeㄅㄛˊ","禳":"acㄖㄤˊ","羼":"aaㄔㄢˋ","蠡":"beㄌㄧˊ","蠢":"aaㄔㄨㄣˇ","赣":"abㄍㄢˋ","躏":"adㄌㄧㄣˋ","醺":"acㄒㄩㄣ","鐾":"aaㄅㄟˋ","露":"acㄌㄡˋ","霸":"acㄅㄚˋ","霹":"acㄆㄧ","颦":"acㄆㄧㄣˊ","髓":"aaㄙㄨㄟˇ","鳢":"adㄌㄧˇ","麝":"aaㄕㄜˋ","黯":"acㄢˋ","鼙":"acㄆㄧˊ","罍":"cdㄌㄟˊ","囊":"adㄋㄤˊ","懿":"aeㄧˋ","氍":"cbㄑㄩˊ","瓤":"acㄖㄤˊ","穰":"acㄖㄤˊ","耱":"acㄇㄛˋ","蘸":"ab","蘼":"acㄇㄧˊ","躐":"adㄌㄧㄝˋ","躔":"aaㄔㄢˊ","镶":"aaㄒㄧㄤ","霾":"acㄇㄞˊ","饔":"aeㄩㄥ","饕":"adㄊㄠ","髑":"aaㄉㄨˊ","鬻":"abㄩˋ","鹳":"ceㄍㄨㄢˋ","龢":"cbㄏㄜˊ","麟":"adㄌㄧㄣˊ","攥":"abㄗㄨㄢˋ","攫":"adㄐㄩㄝˊ","癯":"abㄑㄩˊ","罐":"aeㄍㄨㄢˋ","趱":"aaㄗㄢˇ","躜":"abㄗㄨㄢ","颧":"abㄑㄩㄢˊ","鬟":"ccㄏㄨㄢˊ","鼷":"aaㄒㄧ","鼹":"cbㄧㄢˇ","齄":"caㄓㄚ","蠲":"abㄐㄩㄢ","灞":"acㄅㄚˋ","矗":"baㄔㄨˋ","蠹":"adㄉㄨˋ","衢":"abㄑㄩˊ","襻":"acㄆㄢˋ","躞":"bcㄒㄧㄝˋ","鑫":"baㄒㄧㄣ","囍":"cfㄒㄧˇ","鬣":"adㄌㄧㄝˋ","馕":"adㄋㄤˊ","囔":"adㄋㄤ","戆":"abㄍㄤˋ","攮":"adㄋㄤˇ","纛":"adㄉㄠˋ","蠼":"cbㄑㄩˊ","爨":"caㄘㄨㄢˋ","齉":"adㄋㄤˋ"}');
    }, function(a, c, b) {
      b.r(c);
      var d = b(0), e2 = b(1), f2 = b(2);
      function n(a2, c2) {
        for (var b2 in a2)
          if (a2[b2] === c2)
            return b2;
        return "";
      }
      var t2;
      var r = function(a2) {
        for (var c2 = [], b2 = 0; b2 < a2.length; b2++) {
          var d2 = a2[b2], e3 = o2(f2, d2);
          c2.push(e3);
        }
        return c2;
      };
      function o2(a2, c2) {
        var b2, f3, n2 = a2[c2];
        return n2 || (null == t2 ? void 0 : t2.hasPlugin("trad")) && (n2 = null === (f3 = null === (b2 = t2.trad.dict) || void 0 === b2 ? void 0 : b2.info) || void 0 === f3 ? void 0 : f3[c2]), n2 ? { method: e2[n2[0]], fiveElement: d[n2[1]], markSpell: n2.substring(2) } : { method: "", fiveElement: "", markSpell: "" };
      }
      r.setInfo = function(a2, c2) {
        !function(a3, c3, b2) {
          if ("object" != typeof a3)
            b2(a3, c3);
          else
            for (var d2 in a3)
              b2(d2, a3[d2]);
        }(a2, c2, function(a3, c3) {
          var b2 = n(e2, c3.method || "-"), t3 = n(d, c3.fiveElement || "-");
          f2[a3] = "" + b2 + t3 + c3.markSpell;
        });
      };
      var i = Object.assign(r, { pluginName: "info", install: function(a2) {
        t2 = a2;
      }, dict: { fiveElementMap: d, methodMap: e2, info: f2 } });
      "object" == typeof window && (window.CncharInfo = i, window.CnChar && window.CnChar.use(i));
      c.default = i;
    }]).default;
  });
})(cnchar_info_min);
const info = /* @__PURE__ */ getDefaultExportFromCjs(cnchar_info_minExports);
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var hookCallback;
function hooks() {
  return hookCallback.apply(null, arguments);
}
function setHookCallback(callback) {
  hookCallback = callback;
}
function isArray(input) {
  return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
}
function isObject(input) {
  return input != null && Object.prototype.toString.call(input) === "[object Object]";
}
function hasOwnProp(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
function isObjectEmpty(obj) {
  if (Object.getOwnPropertyNames) {
    return Object.getOwnPropertyNames(obj).length === 0;
  } else {
    var k;
    for (k in obj) {
      if (hasOwnProp(obj, k)) {
        return false;
      }
    }
    return true;
  }
}
function isUndefined(input) {
  return input === void 0;
}
function isNumber(input) {
  return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
}
function isDate(input) {
  return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
}
function map(arr, fn) {
  var res = [], i, arrLen = arr.length;
  for (i = 0; i < arrLen; ++i) {
    res.push(fn(arr[i], i));
  }
  return res;
}
function extend(a, b) {
  for (var i in b) {
    if (hasOwnProp(b, i)) {
      a[i] = b[i];
    }
  }
  if (hasOwnProp(b, "toString")) {
    a.toString = b.toString;
  }
  if (hasOwnProp(b, "valueOf")) {
    a.valueOf = b.valueOf;
  }
  return a;
}
function createUTC(input, format2, locale2, strict) {
  return createLocalOrUTC(input, format2, locale2, strict, true).utc();
}
function defaultParsingFlags() {
  return {
    empty: false,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: false,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: false,
    userInvalidated: false,
    iso: false,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: false,
    weekdayMismatch: false
  };
}
function getParsingFlags(m2) {
  if (m2._pf == null) {
    m2._pf = defaultParsingFlags();
  }
  return m2._pf;
}
var some;
if (Array.prototype.some) {
  some = Array.prototype.some;
} else {
  some = function(fun) {
    var t2 = Object(this), len = t2.length >>> 0, i;
    for (i = 0; i < len; i++) {
      if (i in t2 && fun.call(this, t2[i], i, t2)) {
        return true;
      }
    }
    return false;
  };
}
function isValid(m2) {
  if (m2._isValid == null) {
    var flags = getParsingFlags(m2), parsedParts = some.call(flags.parsedDateParts, function(i) {
      return i != null;
    }), isNowValid = !isNaN(m2._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
    if (m2._strict) {
      isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
    }
    if (Object.isFrozen == null || !Object.isFrozen(m2)) {
      m2._isValid = isNowValid;
    } else {
      return isNowValid;
    }
  }
  return m2._isValid;
}
function createInvalid(flags) {
  var m2 = createUTC(NaN);
  if (flags != null) {
    extend(getParsingFlags(m2), flags);
  } else {
    getParsingFlags(m2).userInvalidated = true;
  }
  return m2;
}
var momentProperties = hooks.momentProperties = [], updateInProgress = false;
function copyConfig(to2, from2) {
  var i, prop, val, momentPropertiesLen = momentProperties.length;
  if (!isUndefined(from2._isAMomentObject)) {
    to2._isAMomentObject = from2._isAMomentObject;
  }
  if (!isUndefined(from2._i)) {
    to2._i = from2._i;
  }
  if (!isUndefined(from2._f)) {
    to2._f = from2._f;
  }
  if (!isUndefined(from2._l)) {
    to2._l = from2._l;
  }
  if (!isUndefined(from2._strict)) {
    to2._strict = from2._strict;
  }
  if (!isUndefined(from2._tzm)) {
    to2._tzm = from2._tzm;
  }
  if (!isUndefined(from2._isUTC)) {
    to2._isUTC = from2._isUTC;
  }
  if (!isUndefined(from2._offset)) {
    to2._offset = from2._offset;
  }
  if (!isUndefined(from2._pf)) {
    to2._pf = getParsingFlags(from2);
  }
  if (!isUndefined(from2._locale)) {
    to2._locale = from2._locale;
  }
  if (momentPropertiesLen > 0) {
    for (i = 0; i < momentPropertiesLen; i++) {
      prop = momentProperties[i];
      val = from2[prop];
      if (!isUndefined(val)) {
        to2[prop] = val;
      }
    }
  }
  return to2;
}
function Moment(config) {
  copyConfig(this, config);
  this._d = new Date(config._d != null ? config._d.getTime() : NaN);
  if (!this.isValid()) {
    this._d = new Date(NaN);
  }
  if (updateInProgress === false) {
    updateInProgress = true;
    hooks.updateOffset(this);
    updateInProgress = false;
  }
}
function isMoment(obj) {
  return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
}
function warn(msg) {
  if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
    console.warn("Deprecation warning: " + msg);
  }
}
function deprecate(msg, fn) {
  var firstTime = true;
  return extend(function() {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(null, msg);
    }
    if (firstTime) {
      var args = [], arg, i, key, argLen = arguments.length;
      for (i = 0; i < argLen; i++) {
        arg = "";
        if (typeof arguments[i] === "object") {
          arg += "\n[" + i + "] ";
          for (key in arguments[0]) {
            if (hasOwnProp(arguments[0], key)) {
              arg += key + ": " + arguments[0][key] + ", ";
            }
          }
          arg = arg.slice(0, -2);
        } else {
          arg = arguments[i];
        }
        args.push(arg);
      }
      warn(
        msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
      );
      firstTime = false;
    }
    return fn.apply(this, arguments);
  }, fn);
}
var deprecations = {};
function deprecateSimple(name, msg) {
  if (hooks.deprecationHandler != null) {
    hooks.deprecationHandler(name, msg);
  }
  if (!deprecations[name]) {
    warn(msg);
    deprecations[name] = true;
  }
}
hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;
function isFunction(input) {
  return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
}
function set(config) {
  var prop, i;
  for (i in config) {
    if (hasOwnProp(config, i)) {
      prop = config[i];
      if (isFunction(prop)) {
        this[i] = prop;
      } else {
        this["_" + i] = prop;
      }
    }
  }
  this._config = config;
  this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function mergeConfigs(parentConfig, childConfig) {
  var res = extend({}, parentConfig), prop;
  for (prop in childConfig) {
    if (hasOwnProp(childConfig, prop)) {
      if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
        res[prop] = {};
        extend(res[prop], parentConfig[prop]);
        extend(res[prop], childConfig[prop]);
      } else if (childConfig[prop] != null) {
        res[prop] = childConfig[prop];
      } else {
        delete res[prop];
      }
    }
  }
  for (prop in parentConfig) {
    if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
      res[prop] = extend({}, res[prop]);
    }
  }
  return res;
}
function Locale(config) {
  if (config != null) {
    this.set(config);
  }
}
var keys;
if (Object.keys) {
  keys = Object.keys;
} else {
  keys = function(obj) {
    var i, res = [];
    for (i in obj) {
      if (hasOwnProp(obj, i)) {
        res.push(i);
      }
    }
    return res;
  };
}
var defaultCalendar = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function calendar(key, mom, now2) {
  var output = this._calendar[key] || this._calendar["sameElse"];
  return isFunction(output) ? output.call(mom, now2) : output;
}
function zeroFill(number, targetLength, forceSign) {
  var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
  return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
function addFormatToken(token2, padded, ordinal2, callback) {
  var func = callback;
  if (typeof callback === "string") {
    func = function() {
      return this[callback]();
    };
  }
  if (token2) {
    formatTokenFunctions[token2] = func;
  }
  if (padded) {
    formatTokenFunctions[padded[0]] = function() {
      return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
    };
  }
  if (ordinal2) {
    formatTokenFunctions[ordinal2] = function() {
      return this.localeData().ordinal(
        func.apply(this, arguments),
        token2
      );
    };
  }
}
function removeFormattingTokens(input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|\]$/g, "");
  }
  return input.replace(/\\/g, "");
}
function makeFormatFunction(format2) {
  var array = format2.match(formattingTokens), i, length;
  for (i = 0, length = array.length; i < length; i++) {
    if (formatTokenFunctions[array[i]]) {
      array[i] = formatTokenFunctions[array[i]];
    } else {
      array[i] = removeFormattingTokens(array[i]);
    }
  }
  return function(mom) {
    var output = "", i2;
    for (i2 = 0; i2 < length; i2++) {
      output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
    }
    return output;
  };
}
function formatMoment(m2, format2) {
  if (!m2.isValid()) {
    return m2.localeData().invalidDate();
  }
  format2 = expandFormat(format2, m2.localeData());
  formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
  return formatFunctions[format2](m2);
}
function expandFormat(format2, locale2) {
  var i = 5;
  function replaceLongDateFormatTokens(input) {
    return locale2.longDateFormat(input) || input;
  }
  localFormattingTokens.lastIndex = 0;
  while (i >= 0 && localFormattingTokens.test(format2)) {
    format2 = format2.replace(
      localFormattingTokens,
      replaceLongDateFormatTokens
    );
    localFormattingTokens.lastIndex = 0;
    i -= 1;
  }
  return format2;
}
var defaultLongDateFormat = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function longDateFormat(key) {
  var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
  if (format2 || !formatUpper) {
    return format2;
  }
  this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
    if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
      return tok.slice(1);
    }
    return tok;
  }).join("");
  return this._longDateFormat[key];
}
var defaultInvalidDate = "Invalid date";
function invalidDate() {
  return this._invalidDate;
}
var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
function ordinal(number) {
  return this._ordinal.replace("%d", number);
}
var defaultRelativeTime = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function relativeTime(number, withoutSuffix, string, isFuture) {
  var output = this._relativeTime[string];
  return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
}
function pastFuture(diff2, output) {
  var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
  return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
}
var aliases = {};
function addUnitAlias(unit, shorthand) {
  var lowerCase = unit.toLowerCase();
  aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
}
function normalizeUnits(units) {
  return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
}
function normalizeObjectUnits(inputObject) {
  var normalizedInput = {}, normalizedProp, prop;
  for (prop in inputObject) {
    if (hasOwnProp(inputObject, prop)) {
      normalizedProp = normalizeUnits(prop);
      if (normalizedProp) {
        normalizedInput[normalizedProp] = inputObject[prop];
      }
    }
  }
  return normalizedInput;
}
var priorities = {};
function addUnitPriority(unit, priority) {
  priorities[unit] = priority;
}
function getPrioritizedUnits(unitsObj) {
  var units = [], u;
  for (u in unitsObj) {
    if (hasOwnProp(unitsObj, u)) {
      units.push({ unit: u, priority: priorities[u] });
    }
  }
  units.sort(function(a, b) {
    return a.priority - b.priority;
  });
  return units;
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function absFloor(number) {
  if (number < 0) {
    return Math.ceil(number) || 0;
  } else {
    return Math.floor(number);
  }
}
function toInt(argumentForCoercion) {
  var coercedNumber = +argumentForCoercion, value = 0;
  if (coercedNumber !== 0 && isFinite(coercedNumber)) {
    value = absFloor(coercedNumber);
  }
  return value;
}
function makeGetSet(unit, keepTime) {
  return function(value) {
    if (value != null) {
      set$1(this, unit, value);
      hooks.updateOffset(this, keepTime);
      return this;
    } else {
      return get(this, unit);
    }
  };
}
function get(mom, unit) {
  return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
}
function set$1(mom, unit, value) {
  if (mom.isValid() && !isNaN(value)) {
    if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
      value = toInt(value);
      mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](
        value,
        mom.month(),
        daysInMonth(value, mom.month())
      );
    } else {
      mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
    }
  }
}
function stringGet(units) {
  units = normalizeUnits(units);
  if (isFunction(this[units])) {
    return this[units]();
  }
  return this;
}
function stringSet(units, value) {
  if (typeof units === "object") {
    units = normalizeObjectUnits(units);
    var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
    for (i = 0; i < prioritizedLen; i++) {
      this[prioritized[i].unit](units[prioritized[i].unit]);
    }
  } else {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
      return this[units](value);
    }
  }
  return this;
}
var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
regexes = {};
function addRegexToken(token2, regex, strictRegex) {
  regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
    return isStrict && strictRegex ? strictRegex : regex;
  };
}
function getParseRegexForToken(token2, config) {
  if (!hasOwnProp(regexes, token2)) {
    return new RegExp(unescapeFormat(token2));
  }
  return regexes[token2](config._strict, config._locale);
}
function unescapeFormat(s) {
  return regexEscape(
    s.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
      }
    )
  );
}
function regexEscape(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var tokens = {};
function addParseToken(token2, callback) {
  var i, func = callback, tokenLen;
  if (typeof token2 === "string") {
    token2 = [token2];
  }
  if (isNumber(callback)) {
    func = function(input, array) {
      array[callback] = toInt(input);
    };
  }
  tokenLen = token2.length;
  for (i = 0; i < tokenLen; i++) {
    tokens[token2[i]] = func;
  }
}
function addWeekParseToken(token2, callback) {
  addParseToken(token2, function(input, array, config, token3) {
    config._w = config._w || {};
    callback(input, config._w, config, token3);
  });
}
function addTimeToArrayFromToken(token2, input, config) {
  if (input != null && hasOwnProp(tokens, token2)) {
    tokens[token2](input, config._a, config, token2);
  }
}
var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
function mod(n, x) {
  return (n % x + x) % x;
}
var indexOf;
if (Array.prototype.indexOf) {
  indexOf = Array.prototype.indexOf;
} else {
  indexOf = function(o2) {
    var i;
    for (i = 0; i < this.length; ++i) {
      if (this[i] === o2) {
        return i;
      }
    }
    return -1;
  };
}
function daysInMonth(year, month) {
  if (isNaN(year) || isNaN(month)) {
    return NaN;
  }
  var modMonth = mod(month, 12);
  year += (month - modMonth) / 12;
  return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
}
addFormatToken("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
addFormatToken("MMM", 0, 0, function(format2) {
  return this.localeData().monthsShort(this, format2);
});
addFormatToken("MMMM", 0, 0, function(format2) {
  return this.localeData().months(this, format2);
});
addUnitAlias("month", "M");
addUnitPriority("month", 8);
addRegexToken("M", match1to2);
addRegexToken("MM", match1to2, match2);
addRegexToken("MMM", function(isStrict, locale2) {
  return locale2.monthsShortRegex(isStrict);
});
addRegexToken("MMMM", function(isStrict, locale2) {
  return locale2.monthsRegex(isStrict);
});
addParseToken(["M", "MM"], function(input, array) {
  array[MONTH] = toInt(input) - 1;
});
addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
  var month = config._locale.monthsParse(input, token2, config._strict);
  if (month != null) {
    array[MONTH] = month;
  } else {
    getParsingFlags(config).invalidMonth = input;
  }
});
var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
function localeMonths(m2, format2) {
  if (!m2) {
    return isArray(this._months) ? this._months : this._months["standalone"];
  }
  return isArray(this._months) ? this._months[m2.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m2.month()];
}
function localeMonthsShort(m2, format2) {
  if (!m2) {
    return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
  }
  return isArray(this._monthsShort) ? this._monthsShort[m2.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m2.month()];
}
function handleStrictParse(monthName, format2, strict) {
  var i, ii, mom, llc = monthName.toLocaleLowerCase();
  if (!this._monthsParse) {
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];
    for (i = 0; i < 12; ++i) {
      mom = createUTC([2e3, i]);
      this._shortMonthsParse[i] = this.monthsShort(
        mom,
        ""
      ).toLocaleLowerCase();
      this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
    }
  }
  if (strict) {
    if (format2 === "MMM") {
      ii = indexOf.call(this._shortMonthsParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._longMonthsParse, llc);
      return ii !== -1 ? ii : null;
    }
  } else {
    if (format2 === "MMM") {
      ii = indexOf.call(this._shortMonthsParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._longMonthsParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._longMonthsParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._shortMonthsParse, llc);
      return ii !== -1 ? ii : null;
    }
  }
}
function localeMonthsParse(monthName, format2, strict) {
  var i, mom, regex;
  if (this._monthsParseExact) {
    return handleStrictParse.call(this, monthName, format2, strict);
  }
  if (!this._monthsParse) {
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];
  }
  for (i = 0; i < 12; i++) {
    mom = createUTC([2e3, i]);
    if (strict && !this._longMonthsParse[i]) {
      this._longMonthsParse[i] = new RegExp(
        "^" + this.months(mom, "").replace(".", "") + "$",
        "i"
      );
      this._shortMonthsParse[i] = new RegExp(
        "^" + this.monthsShort(mom, "").replace(".", "") + "$",
        "i"
      );
    }
    if (!strict && !this._monthsParse[i]) {
      regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
      this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
    }
    if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
      return i;
    } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
      return i;
    } else if (!strict && this._monthsParse[i].test(monthName)) {
      return i;
    }
  }
}
function setMonth(mom, value) {
  var dayOfMonth;
  if (!mom.isValid()) {
    return mom;
  }
  if (typeof value === "string") {
    if (/^\d+$/.test(value)) {
      value = toInt(value);
    } else {
      value = mom.localeData().monthsParse(value);
      if (!isNumber(value)) {
        return mom;
      }
    }
  }
  dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
  mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
  return mom;
}
function getSetMonth(value) {
  if (value != null) {
    setMonth(this, value);
    hooks.updateOffset(this, true);
    return this;
  } else {
    return get(this, "Month");
  }
}
function getDaysInMonth() {
  return daysInMonth(this.year(), this.month());
}
function monthsShortRegex(isStrict) {
  if (this._monthsParseExact) {
    if (!hasOwnProp(this, "_monthsRegex")) {
      computeMonthsParse.call(this);
    }
    if (isStrict) {
      return this._monthsShortStrictRegex;
    } else {
      return this._monthsShortRegex;
    }
  } else {
    if (!hasOwnProp(this, "_monthsShortRegex")) {
      this._monthsShortRegex = defaultMonthsShortRegex;
    }
    return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
  }
}
function monthsRegex(isStrict) {
  if (this._monthsParseExact) {
    if (!hasOwnProp(this, "_monthsRegex")) {
      computeMonthsParse.call(this);
    }
    if (isStrict) {
      return this._monthsStrictRegex;
    } else {
      return this._monthsRegex;
    }
  } else {
    if (!hasOwnProp(this, "_monthsRegex")) {
      this._monthsRegex = defaultMonthsRegex;
    }
    return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
  }
}
function computeMonthsParse() {
  function cmpLenRev(a, b) {
    return b.length - a.length;
  }
  var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
  for (i = 0; i < 12; i++) {
    mom = createUTC([2e3, i]);
    shortPieces.push(this.monthsShort(mom, ""));
    longPieces.push(this.months(mom, ""));
    mixedPieces.push(this.months(mom, ""));
    mixedPieces.push(this.monthsShort(mom, ""));
  }
  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);
  for (i = 0; i < 12; i++) {
    shortPieces[i] = regexEscape(shortPieces[i]);
    longPieces[i] = regexEscape(longPieces[i]);
  }
  for (i = 0; i < 24; i++) {
    mixedPieces[i] = regexEscape(mixedPieces[i]);
  }
  this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._monthsShortRegex = this._monthsRegex;
  this._monthsStrictRegex = new RegExp(
    "^(" + longPieces.join("|") + ")",
    "i"
  );
  this._monthsShortStrictRegex = new RegExp(
    "^(" + shortPieces.join("|") + ")",
    "i"
  );
}
addFormatToken("Y", 0, 0, function() {
  var y = this.year();
  return y <= 9999 ? zeroFill(y, 4) : "+" + y;
});
addFormatToken(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
addFormatToken(0, ["YYYY", 4], 0, "year");
addFormatToken(0, ["YYYYY", 5], 0, "year");
addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
addUnitAlias("year", "y");
addUnitPriority("year", 1);
addRegexToken("Y", matchSigned);
addRegexToken("YY", match1to2, match2);
addRegexToken("YYYY", match1to4, match4);
addRegexToken("YYYYY", match1to6, match6);
addRegexToken("YYYYYY", match1to6, match6);
addParseToken(["YYYYY", "YYYYYY"], YEAR);
addParseToken("YYYY", function(input, array) {
  array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken("YY", function(input, array) {
  array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken("Y", function(input, array) {
  array[YEAR] = parseInt(input, 10);
});
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
hooks.parseTwoDigitYear = function(input) {
  return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
};
var getSetYear = makeGetSet("FullYear", true);
function getIsLeapYear() {
  return isLeapYear(this.year());
}
function createDate(y, m2, d, h, M, s, ms) {
  var date;
  if (y < 100 && y >= 0) {
    date = new Date(y + 400, m2, d, h, M, s, ms);
    if (isFinite(date.getFullYear())) {
      date.setFullYear(y);
    }
  } else {
    date = new Date(y, m2, d, h, M, s, ms);
  }
  return date;
}
function createUTCDate(y) {
  var date, args;
  if (y < 100 && y >= 0) {
    args = Array.prototype.slice.call(arguments);
    args[0] = y + 400;
    date = new Date(Date.UTC.apply(null, args));
    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }
  } else {
    date = new Date(Date.UTC.apply(null, arguments));
  }
  return date;
}
function firstWeekOffset(year, dow, doy) {
  var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
}
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
  var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
  if (dayOfYear <= 0) {
    resYear = year - 1;
    resDayOfYear = daysInYear(resYear) + dayOfYear;
  } else if (dayOfYear > daysInYear(year)) {
    resYear = year + 1;
    resDayOfYear = dayOfYear - daysInYear(year);
  } else {
    resYear = year;
    resDayOfYear = dayOfYear;
  }
  return {
    year: resYear,
    dayOfYear: resDayOfYear
  };
}
function weekOfYear(mom, dow, doy) {
  var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
  if (week < 1) {
    resYear = mom.year() - 1;
    resWeek = week + weeksInYear(resYear, dow, doy);
  } else if (week > weeksInYear(mom.year(), dow, doy)) {
    resWeek = week - weeksInYear(mom.year(), dow, doy);
    resYear = mom.year() + 1;
  } else {
    resYear = mom.year();
    resWeek = week;
  }
  return {
    week: resWeek,
    year: resYear
  };
}
function weeksInYear(year, dow, doy) {
  var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
  return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}
addFormatToken("w", ["ww", 2], "wo", "week");
addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
addUnitAlias("week", "w");
addUnitAlias("isoWeek", "W");
addUnitPriority("week", 5);
addUnitPriority("isoWeek", 5);
addRegexToken("w", match1to2);
addRegexToken("ww", match1to2, match2);
addRegexToken("W", match1to2);
addRegexToken("WW", match1to2, match2);
addWeekParseToken(
  ["w", "ww", "W", "WW"],
  function(input, week, config, token2) {
    week[token2.substr(0, 1)] = toInt(input);
  }
);
function localeWeek(mom) {
  return weekOfYear(mom, this._week.dow, this._week.doy).week;
}
var defaultLocaleWeek = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function localeFirstDayOfWeek() {
  return this._week.dow;
}
function localeFirstDayOfYear() {
  return this._week.doy;
}
function getSetWeek(input) {
  var week = this.localeData().week(this);
  return input == null ? week : this.add((input - week) * 7, "d");
}
function getSetISOWeek(input) {
  var week = weekOfYear(this, 1, 4).week;
  return input == null ? week : this.add((input - week) * 7, "d");
}
addFormatToken("d", 0, "do", "day");
addFormatToken("dd", 0, 0, function(format2) {
  return this.localeData().weekdaysMin(this, format2);
});
addFormatToken("ddd", 0, 0, function(format2) {
  return this.localeData().weekdaysShort(this, format2);
});
addFormatToken("dddd", 0, 0, function(format2) {
  return this.localeData().weekdays(this, format2);
});
addFormatToken("e", 0, 0, "weekday");
addFormatToken("E", 0, 0, "isoWeekday");
addUnitAlias("day", "d");
addUnitAlias("weekday", "e");
addUnitAlias("isoWeekday", "E");
addUnitPriority("day", 11);
addUnitPriority("weekday", 11);
addUnitPriority("isoWeekday", 11);
addRegexToken("d", match1to2);
addRegexToken("e", match1to2);
addRegexToken("E", match1to2);
addRegexToken("dd", function(isStrict, locale2) {
  return locale2.weekdaysMinRegex(isStrict);
});
addRegexToken("ddd", function(isStrict, locale2) {
  return locale2.weekdaysShortRegex(isStrict);
});
addRegexToken("dddd", function(isStrict, locale2) {
  return locale2.weekdaysRegex(isStrict);
});
addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
  var weekday = config._locale.weekdaysParse(input, token2, config._strict);
  if (weekday != null) {
    week.d = weekday;
  } else {
    getParsingFlags(config).invalidWeekday = input;
  }
});
addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
  week[token2] = toInt(input);
});
function parseWeekday(input, locale2) {
  if (typeof input !== "string") {
    return input;
  }
  if (!isNaN(input)) {
    return parseInt(input, 10);
  }
  input = locale2.weekdaysParse(input);
  if (typeof input === "number") {
    return input;
  }
  return null;
}
function parseIsoWeekday(input, locale2) {
  if (typeof input === "string") {
    return locale2.weekdaysParse(input) % 7 || 7;
  }
  return isNaN(input) ? null : input;
}
function shiftWeekdays(ws, n) {
  return ws.slice(n, 7).concat(ws.slice(0, n));
}
var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
function localeWeekdays(m2, format2) {
  var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m2 && m2 !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
  return m2 === true ? shiftWeekdays(weekdays, this._week.dow) : m2 ? weekdays[m2.day()] : weekdays;
}
function localeWeekdaysShort(m2) {
  return m2 === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m2 ? this._weekdaysShort[m2.day()] : this._weekdaysShort;
}
function localeWeekdaysMin(m2) {
  return m2 === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m2 ? this._weekdaysMin[m2.day()] : this._weekdaysMin;
}
function handleStrictParse$1(weekdayName, format2, strict) {
  var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._minWeekdaysParse = [];
    for (i = 0; i < 7; ++i) {
      mom = createUTC([2e3, 1]).day(i);
      this._minWeekdaysParse[i] = this.weekdaysMin(
        mom,
        ""
      ).toLocaleLowerCase();
      this._shortWeekdaysParse[i] = this.weekdaysShort(
        mom,
        ""
      ).toLocaleLowerCase();
      this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
    }
  }
  if (strict) {
    if (format2 === "dddd") {
      ii = indexOf.call(this._weekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else if (format2 === "ddd") {
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    }
  } else {
    if (format2 === "dddd") {
      ii = indexOf.call(this._weekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else if (format2 === "ddd") {
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._weekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._minWeekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._weekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    }
  }
}
function localeWeekdaysParse(weekdayName, format2, strict) {
  var i, mom, regex;
  if (this._weekdaysParseExact) {
    return handleStrictParse$1.call(this, weekdayName, format2, strict);
  }
  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._minWeekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._fullWeekdaysParse = [];
  }
  for (i = 0; i < 7; i++) {
    mom = createUTC([2e3, 1]).day(i);
    if (strict && !this._fullWeekdaysParse[i]) {
      this._fullWeekdaysParse[i] = new RegExp(
        "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
        "i"
      );
      this._shortWeekdaysParse[i] = new RegExp(
        "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
        "i"
      );
      this._minWeekdaysParse[i] = new RegExp(
        "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
        "i"
      );
    }
    if (!this._weekdaysParse[i]) {
      regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
      this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
    }
    if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
      return i;
    }
  }
}
function getSetDayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  if (input != null) {
    input = parseWeekday(input, this.localeData());
    return this.add(input - day, "d");
  } else {
    return day;
  }
}
function getSetLocaleDayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return input == null ? weekday : this.add(input - weekday, "d");
}
function getSetISODayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  if (input != null) {
    var weekday = parseIsoWeekday(input, this.localeData());
    return this.day(this.day() % 7 ? weekday : weekday - 7);
  } else {
    return this.day() || 7;
  }
}
function weekdaysRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysStrictRegex;
    } else {
      return this._weekdaysRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      this._weekdaysRegex = defaultWeekdaysRegex;
    }
    return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
  }
}
function weekdaysShortRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysShortStrictRegex;
    } else {
      return this._weekdaysShortRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysShortRegex")) {
      this._weekdaysShortRegex = defaultWeekdaysShortRegex;
    }
    return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
  }
}
function weekdaysMinRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysMinStrictRegex;
    } else {
      return this._weekdaysMinRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysMinRegex")) {
      this._weekdaysMinRegex = defaultWeekdaysMinRegex;
    }
    return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
  }
}
function computeWeekdaysParse() {
  function cmpLenRev(a, b) {
    return b.length - a.length;
  }
  var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
  for (i = 0; i < 7; i++) {
    mom = createUTC([2e3, 1]).day(i);
    minp = regexEscape(this.weekdaysMin(mom, ""));
    shortp = regexEscape(this.weekdaysShort(mom, ""));
    longp = regexEscape(this.weekdays(mom, ""));
    minPieces.push(minp);
    shortPieces.push(shortp);
    longPieces.push(longp);
    mixedPieces.push(minp);
    mixedPieces.push(shortp);
    mixedPieces.push(longp);
  }
  minPieces.sort(cmpLenRev);
  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);
  this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._weekdaysShortRegex = this._weekdaysRegex;
  this._weekdaysMinRegex = this._weekdaysRegex;
  this._weekdaysStrictRegex = new RegExp(
    "^(" + longPieces.join("|") + ")",
    "i"
  );
  this._weekdaysShortStrictRegex = new RegExp(
    "^(" + shortPieces.join("|") + ")",
    "i"
  );
  this._weekdaysMinStrictRegex = new RegExp(
    "^(" + minPieces.join("|") + ")",
    "i"
  );
}
function hFormat() {
  return this.hours() % 12 || 12;
}
function kFormat() {
  return this.hours() || 24;
}
addFormatToken("H", ["HH", 2], 0, "hour");
addFormatToken("h", ["hh", 2], 0, hFormat);
addFormatToken("k", ["kk", 2], 0, kFormat);
addFormatToken("hmm", 0, 0, function() {
  return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});
addFormatToken("hmmss", 0, 0, function() {
  return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
});
addFormatToken("Hmm", 0, 0, function() {
  return "" + this.hours() + zeroFill(this.minutes(), 2);
});
addFormatToken("Hmmss", 0, 0, function() {
  return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
});
function meridiem(token2, lowercase) {
  addFormatToken(token2, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      lowercase
    );
  });
}
meridiem("a", true);
meridiem("A", false);
addUnitAlias("hour", "h");
addUnitPriority("hour", 13);
function matchMeridiem(isStrict, locale2) {
  return locale2._meridiemParse;
}
addRegexToken("a", matchMeridiem);
addRegexToken("A", matchMeridiem);
addRegexToken("H", match1to2);
addRegexToken("h", match1to2);
addRegexToken("k", match1to2);
addRegexToken("HH", match1to2, match2);
addRegexToken("hh", match1to2, match2);
addRegexToken("kk", match1to2, match2);
addRegexToken("hmm", match3to4);
addRegexToken("hmmss", match5to6);
addRegexToken("Hmm", match3to4);
addRegexToken("Hmmss", match5to6);
addParseToken(["H", "HH"], HOUR);
addParseToken(["k", "kk"], function(input, array, config) {
  var kInput = toInt(input);
  array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(["a", "A"], function(input, array, config) {
  config._isPm = config._locale.isPM(input);
  config._meridiem = input;
});
addParseToken(["h", "hh"], function(input, array, config) {
  array[HOUR] = toInt(input);
  getParsingFlags(config).bigHour = true;
});
addParseToken("hmm", function(input, array, config) {
  var pos = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos));
  array[MINUTE] = toInt(input.substr(pos));
  getParsingFlags(config).bigHour = true;
});
addParseToken("hmmss", function(input, array, config) {
  var pos1 = input.length - 4, pos2 = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos1));
  array[MINUTE] = toInt(input.substr(pos1, 2));
  array[SECOND] = toInt(input.substr(pos2));
  getParsingFlags(config).bigHour = true;
});
addParseToken("Hmm", function(input, array, config) {
  var pos = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos));
  array[MINUTE] = toInt(input.substr(pos));
});
addParseToken("Hmmss", function(input, array, config) {
  var pos1 = input.length - 4, pos2 = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos1));
  array[MINUTE] = toInt(input.substr(pos1, 2));
  array[SECOND] = toInt(input.substr(pos2));
});
function localeIsPM(input) {
  return (input + "").toLowerCase().charAt(0) === "p";
}
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
function localeMeridiem(hours2, minutes2, isLower) {
  if (hours2 > 11) {
    return isLower ? "pm" : "PM";
  } else {
    return isLower ? "am" : "AM";
  }
}
var baseConfig = {
  calendar: defaultCalendar,
  longDateFormat: defaultLongDateFormat,
  invalidDate: defaultInvalidDate,
  ordinal: defaultOrdinal,
  dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
  relativeTime: defaultRelativeTime,
  months: defaultLocaleMonths,
  monthsShort: defaultLocaleMonthsShort,
  week: defaultLocaleWeek,
  weekdays: defaultLocaleWeekdays,
  weekdaysMin: defaultLocaleWeekdaysMin,
  weekdaysShort: defaultLocaleWeekdaysShort,
  meridiemParse: defaultLocaleMeridiemParse
};
var locales = {}, localeFamilies = {}, globalLocale;
function commonPrefix(arr1, arr2) {
  var i, minl = Math.min(arr1.length, arr2.length);
  for (i = 0; i < minl; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return i;
    }
  }
  return minl;
}
function normalizeLocale(key) {
  return key ? key.toLowerCase().replace("_", "-") : key;
}
function chooseLocale(names) {
  var i = 0, j, next, locale2, split;
  while (i < names.length) {
    split = normalizeLocale(names[i]).split("-");
    j = split.length;
    next = normalizeLocale(names[i + 1]);
    next = next ? next.split("-") : null;
    while (j > 0) {
      locale2 = loadLocale(split.slice(0, j).join("-"));
      if (locale2) {
        return locale2;
      }
      if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
        break;
      }
      j--;
    }
    i++;
  }
  return globalLocale;
}
function isLocaleNameSane(name) {
  return name.match("^[^/\\\\]*$") != null;
}
function loadLocale(name) {
  var oldLocale = null, aliasedRequire;
  if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
    try {
      oldLocale = globalLocale._abbr;
      aliasedRequire = require;
      aliasedRequire("./locale/" + name);
      getSetGlobalLocale(oldLocale);
    } catch (e2) {
      locales[name] = null;
    }
  }
  return locales[name];
}
function getSetGlobalLocale(key, values) {
  var data;
  if (key) {
    if (isUndefined(values)) {
      data = getLocale(key);
    } else {
      data = defineLocale(key, values);
    }
    if (data) {
      globalLocale = data;
    } else {
      if (typeof console !== "undefined" && console.warn) {
        console.warn(
          "Locale " + key + " not found. Did you forget to load it?"
        );
      }
    }
  }
  return globalLocale._abbr;
}
function defineLocale(name, config) {
  if (config !== null) {
    var locale2, parentConfig = baseConfig;
    config.abbr = name;
    if (locales[name] != null) {
      deprecateSimple(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      );
      parentConfig = locales[name]._config;
    } else if (config.parentLocale != null) {
      if (locales[config.parentLocale] != null) {
        parentConfig = locales[config.parentLocale]._config;
      } else {
        locale2 = loadLocale(config.parentLocale);
        if (locale2 != null) {
          parentConfig = locale2._config;
        } else {
          if (!localeFamilies[config.parentLocale]) {
            localeFamilies[config.parentLocale] = [];
          }
          localeFamilies[config.parentLocale].push({
            name,
            config
          });
          return null;
        }
      }
    }
    locales[name] = new Locale(mergeConfigs(parentConfig, config));
    if (localeFamilies[name]) {
      localeFamilies[name].forEach(function(x) {
        defineLocale(x.name, x.config);
      });
    }
    getSetGlobalLocale(name);
    return locales[name];
  } else {
    delete locales[name];
    return null;
  }
}
function updateLocale(name, config) {
  if (config != null) {
    var locale2, tmpLocale, parentConfig = baseConfig;
    if (locales[name] != null && locales[name].parentLocale != null) {
      locales[name].set(mergeConfigs(locales[name]._config, config));
    } else {
      tmpLocale = loadLocale(name);
      if (tmpLocale != null) {
        parentConfig = tmpLocale._config;
      }
      config = mergeConfigs(parentConfig, config);
      if (tmpLocale == null) {
        config.abbr = name;
      }
      locale2 = new Locale(config);
      locale2.parentLocale = locales[name];
      locales[name] = locale2;
    }
    getSetGlobalLocale(name);
  } else {
    if (locales[name] != null) {
      if (locales[name].parentLocale != null) {
        locales[name] = locales[name].parentLocale;
        if (name === getSetGlobalLocale()) {
          getSetGlobalLocale(name);
        }
      } else if (locales[name] != null) {
        delete locales[name];
      }
    }
  }
  return locales[name];
}
function getLocale(key) {
  var locale2;
  if (key && key._locale && key._locale._abbr) {
    key = key._locale._abbr;
  }
  if (!key) {
    return globalLocale;
  }
  if (!isArray(key)) {
    locale2 = loadLocale(key);
    if (locale2) {
      return locale2;
    }
    key = [key];
  }
  return chooseLocale(key);
}
function listLocales() {
  return keys(locales);
}
function checkOverflow(m2) {
  var overflow, a = m2._a;
  if (a && getParsingFlags(m2).overflow === -2) {
    overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
    if (getParsingFlags(m2)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
      overflow = DATE;
    }
    if (getParsingFlags(m2)._overflowWeeks && overflow === -1) {
      overflow = WEEK;
    }
    if (getParsingFlags(m2)._overflowWeekday && overflow === -1) {
      overflow = WEEKDAY;
    }
    getParsingFlags(m2).overflow = overflow;
  }
  return m2;
}
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, false],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, false],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, false],
  ["YYYY", /\d{4}/, false]
], isoTimes = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function configFromISO(config) {
  var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
  if (match) {
    getParsingFlags(config).iso = true;
    for (i = 0, l = isoDatesLen; i < l; i++) {
      if (isoDates[i][1].exec(match[1])) {
        dateFormat = isoDates[i][0];
        allowTime = isoDates[i][2] !== false;
        break;
      }
    }
    if (dateFormat == null) {
      config._isValid = false;
      return;
    }
    if (match[3]) {
      for (i = 0, l = isoTimesLen; i < l; i++) {
        if (isoTimes[i][1].exec(match[3])) {
          timeFormat = (match[2] || " ") + isoTimes[i][0];
          break;
        }
      }
      if (timeFormat == null) {
        config._isValid = false;
        return;
      }
    }
    if (!allowTime && timeFormat != null) {
      config._isValid = false;
      return;
    }
    if (match[4]) {
      if (tzRegex.exec(match[4])) {
        tzFormat = "Z";
      } else {
        config._isValid = false;
        return;
      }
    }
    config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
    configFromStringAndFormat(config);
  } else {
    config._isValid = false;
  }
}
function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = [
    untruncateYear(yearStr),
    defaultLocaleMonthsShort.indexOf(monthStr),
    parseInt(dayStr, 10),
    parseInt(hourStr, 10),
    parseInt(minuteStr, 10)
  ];
  if (secondStr) {
    result.push(parseInt(secondStr, 10));
  }
  return result;
}
function untruncateYear(yearStr) {
  var year = parseInt(yearStr, 10);
  if (year <= 49) {
    return 2e3 + year;
  } else if (year <= 999) {
    return 1900 + year;
  }
  return year;
}
function preprocessRFC2822(s) {
  return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function checkWeekday(weekdayStr, parsedInput, config) {
  if (weekdayStr) {
    var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
      parsedInput[0],
      parsedInput[1],
      parsedInput[2]
    ).getDay();
    if (weekdayProvided !== weekdayActual) {
      getParsingFlags(config).weekdayMismatch = true;
      config._isValid = false;
      return false;
    }
  }
  return true;
}
function calculateOffset(obsOffset, militaryOffset, numOffset) {
  if (obsOffset) {
    return obsOffsets[obsOffset];
  } else if (militaryOffset) {
    return 0;
  } else {
    var hm = parseInt(numOffset, 10), m2 = hm % 100, h = (hm - m2) / 100;
    return h * 60 + m2;
  }
}
function configFromRFC2822(config) {
  var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
  if (match) {
    parsedArray = extractFromRFC2822Strings(
      match[4],
      match[3],
      match[2],
      match[5],
      match[6],
      match[7]
    );
    if (!checkWeekday(match[1], parsedArray, config)) {
      return;
    }
    config._a = parsedArray;
    config._tzm = calculateOffset(match[8], match[9], match[10]);
    config._d = createUTCDate.apply(null, config._a);
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    getParsingFlags(config).rfc2822 = true;
  } else {
    config._isValid = false;
  }
}
function configFromString(config) {
  var matched = aspNetJsonRegex.exec(config._i);
  if (matched !== null) {
    config._d = new Date(+matched[1]);
    return;
  }
  configFromISO(config);
  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return;
  }
  configFromRFC2822(config);
  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return;
  }
  if (config._strict) {
    config._isValid = false;
  } else {
    hooks.createFromInputFallback(config);
  }
}
hooks.createFromInputFallback = deprecate(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(config) {
    config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
  }
);
function defaults(a, b, c) {
  if (a != null) {
    return a;
  }
  if (b != null) {
    return b;
  }
  return c;
}
function currentDateArray(config) {
  var nowValue = new Date(hooks.now());
  if (config._useUTC) {
    return [
      nowValue.getUTCFullYear(),
      nowValue.getUTCMonth(),
      nowValue.getUTCDate()
    ];
  }
  return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}
function configFromArray(config) {
  var i, date, input = [], currentDate, expectedWeekday, yearToUse;
  if (config._d) {
    return;
  }
  currentDate = currentDateArray(config);
  if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
    dayOfYearFromWeekInfo(config);
  }
  if (config._dayOfYear != null) {
    yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
    if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
      getParsingFlags(config)._overflowDayOfYear = true;
    }
    date = createUTCDate(yearToUse, 0, config._dayOfYear);
    config._a[MONTH] = date.getUTCMonth();
    config._a[DATE] = date.getUTCDate();
  }
  for (i = 0; i < 3 && config._a[i] == null; ++i) {
    config._a[i] = input[i] = currentDate[i];
  }
  for (; i < 7; i++) {
    config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
  }
  if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
    config._nextDay = true;
    config._a[HOUR] = 0;
  }
  config._d = (config._useUTC ? createUTCDate : createDate).apply(
    null,
    input
  );
  expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
  if (config._tzm != null) {
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
  }
  if (config._nextDay) {
    config._a[HOUR] = 24;
  }
  if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
    getParsingFlags(config).weekdayMismatch = true;
  }
}
function dayOfYearFromWeekInfo(config) {
  var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
  w = config._w;
  if (w.GG != null || w.W != null || w.E != null) {
    dow = 1;
    doy = 4;
    weekYear = defaults(
      w.GG,
      config._a[YEAR],
      weekOfYear(createLocal(), 1, 4).year
    );
    week = defaults(w.W, 1);
    weekday = defaults(w.E, 1);
    if (weekday < 1 || weekday > 7) {
      weekdayOverflow = true;
    }
  } else {
    dow = config._locale._week.dow;
    doy = config._locale._week.doy;
    curWeek = weekOfYear(createLocal(), dow, doy);
    weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
    week = defaults(w.w, curWeek.week);
    if (w.d != null) {
      weekday = w.d;
      if (weekday < 0 || weekday > 6) {
        weekdayOverflow = true;
      }
    } else if (w.e != null) {
      weekday = w.e + dow;
      if (w.e < 0 || w.e > 6) {
        weekdayOverflow = true;
      }
    } else {
      weekday = dow;
    }
  }
  if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
    getParsingFlags(config)._overflowWeeks = true;
  } else if (weekdayOverflow != null) {
    getParsingFlags(config)._overflowWeekday = true;
  } else {
    temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
    config._a[YEAR] = temp.year;
    config._dayOfYear = temp.dayOfYear;
  }
}
hooks.ISO_8601 = function() {
};
hooks.RFC_2822 = function() {
};
function configFromStringAndFormat(config) {
  if (config._f === hooks.ISO_8601) {
    configFromISO(config);
    return;
  }
  if (config._f === hooks.RFC_2822) {
    configFromRFC2822(config);
    return;
  }
  config._a = [];
  getParsingFlags(config).empty = true;
  var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
  tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
  tokenLen = tokens2.length;
  for (i = 0; i < tokenLen; i++) {
    token2 = tokens2[i];
    parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
    if (parsedInput) {
      skipped = string.substr(0, string.indexOf(parsedInput));
      if (skipped.length > 0) {
        getParsingFlags(config).unusedInput.push(skipped);
      }
      string = string.slice(
        string.indexOf(parsedInput) + parsedInput.length
      );
      totalParsedInputLength += parsedInput.length;
    }
    if (formatTokenFunctions[token2]) {
      if (parsedInput) {
        getParsingFlags(config).empty = false;
      } else {
        getParsingFlags(config).unusedTokens.push(token2);
      }
      addTimeToArrayFromToken(token2, parsedInput, config);
    } else if (config._strict && !parsedInput) {
      getParsingFlags(config).unusedTokens.push(token2);
    }
  }
  getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
  if (string.length > 0) {
    getParsingFlags(config).unusedInput.push(string);
  }
  if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
    getParsingFlags(config).bigHour = void 0;
  }
  getParsingFlags(config).parsedDateParts = config._a.slice(0);
  getParsingFlags(config).meridiem = config._meridiem;
  config._a[HOUR] = meridiemFixWrap(
    config._locale,
    config._a[HOUR],
    config._meridiem
  );
  era = getParsingFlags(config).era;
  if (era !== null) {
    config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
  }
  configFromArray(config);
  checkOverflow(config);
}
function meridiemFixWrap(locale2, hour, meridiem2) {
  var isPm;
  if (meridiem2 == null) {
    return hour;
  }
  if (locale2.meridiemHour != null) {
    return locale2.meridiemHour(hour, meridiem2);
  } else if (locale2.isPM != null) {
    isPm = locale2.isPM(meridiem2);
    if (isPm && hour < 12) {
      hour += 12;
    }
    if (!isPm && hour === 12) {
      hour = 0;
    }
    return hour;
  } else {
    return hour;
  }
}
function configFromStringAndArray(config) {
  var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
  if (configfLen === 0) {
    getParsingFlags(config).invalidFormat = true;
    config._d = new Date(NaN);
    return;
  }
  for (i = 0; i < configfLen; i++) {
    currentScore = 0;
    validFormatFound = false;
    tempConfig = copyConfig({}, config);
    if (config._useUTC != null) {
      tempConfig._useUTC = config._useUTC;
    }
    tempConfig._f = config._f[i];
    configFromStringAndFormat(tempConfig);
    if (isValid(tempConfig)) {
      validFormatFound = true;
    }
    currentScore += getParsingFlags(tempConfig).charsLeftOver;
    currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
    getParsingFlags(tempConfig).score = currentScore;
    if (!bestFormatIsValid) {
      if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
        if (validFormatFound) {
          bestFormatIsValid = true;
        }
      }
    } else {
      if (currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }
  }
  extend(config, bestMoment || tempConfig);
}
function configFromObject(config) {
  if (config._d) {
    return;
  }
  var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
  config._a = map(
    [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
    function(obj) {
      return obj && parseInt(obj, 10);
    }
  );
  configFromArray(config);
}
function createFromConfig(config) {
  var res = new Moment(checkOverflow(prepareConfig(config)));
  if (res._nextDay) {
    res.add(1, "d");
    res._nextDay = void 0;
  }
  return res;
}
function prepareConfig(config) {
  var input = config._i, format2 = config._f;
  config._locale = config._locale || getLocale(config._l);
  if (input === null || format2 === void 0 && input === "") {
    return createInvalid({ nullInput: true });
  }
  if (typeof input === "string") {
    config._i = input = config._locale.preparse(input);
  }
  if (isMoment(input)) {
    return new Moment(checkOverflow(input));
  } else if (isDate(input)) {
    config._d = input;
  } else if (isArray(format2)) {
    configFromStringAndArray(config);
  } else if (format2) {
    configFromStringAndFormat(config);
  } else {
    configFromInput(config);
  }
  if (!isValid(config)) {
    config._d = null;
  }
  return config;
}
function configFromInput(config) {
  var input = config._i;
  if (isUndefined(input)) {
    config._d = new Date(hooks.now());
  } else if (isDate(input)) {
    config._d = new Date(input.valueOf());
  } else if (typeof input === "string") {
    configFromString(config);
  } else if (isArray(input)) {
    config._a = map(input.slice(0), function(obj) {
      return parseInt(obj, 10);
    });
    configFromArray(config);
  } else if (isObject(input)) {
    configFromObject(config);
  } else if (isNumber(input)) {
    config._d = new Date(input);
  } else {
    hooks.createFromInputFallback(config);
  }
}
function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
  var c = {};
  if (format2 === true || format2 === false) {
    strict = format2;
    format2 = void 0;
  }
  if (locale2 === true || locale2 === false) {
    strict = locale2;
    locale2 = void 0;
  }
  if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
    input = void 0;
  }
  c._isAMomentObject = true;
  c._useUTC = c._isUTC = isUTC;
  c._l = locale2;
  c._i = input;
  c._f = format2;
  c._strict = strict;
  return createFromConfig(c);
}
function createLocal(input, format2, locale2, strict) {
  return createLocalOrUTC(input, format2, locale2, strict, false);
}
var prototypeMin = deprecate(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var other = createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other < this ? this : other;
    } else {
      return createInvalid();
    }
  }
), prototypeMax = deprecate(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var other = createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other > this ? this : other;
    } else {
      return createInvalid();
    }
  }
);
function pickBy(fn, moments) {
  var res, i;
  if (moments.length === 1 && isArray(moments[0])) {
    moments = moments[0];
  }
  if (!moments.length) {
    return createLocal();
  }
  res = moments[0];
  for (i = 1; i < moments.length; ++i) {
    if (!moments[i].isValid() || moments[i][fn](res)) {
      res = moments[i];
    }
  }
  return res;
}
function min() {
  var args = [].slice.call(arguments, 0);
  return pickBy("isBefore", args);
}
function max() {
  var args = [].slice.call(arguments, 0);
  return pickBy("isAfter", args);
}
var now = function() {
  return Date.now ? Date.now() : +new Date();
};
var ordering = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function isDurationValid(m2) {
  var key, unitHasDecimal = false, i, orderLen = ordering.length;
  for (key in m2) {
    if (hasOwnProp(m2, key) && !(indexOf.call(ordering, key) !== -1 && (m2[key] == null || !isNaN(m2[key])))) {
      return false;
    }
  }
  for (i = 0; i < orderLen; ++i) {
    if (m2[ordering[i]]) {
      if (unitHasDecimal) {
        return false;
      }
      if (parseFloat(m2[ordering[i]]) !== toInt(m2[ordering[i]])) {
        unitHasDecimal = true;
      }
    }
  }
  return true;
}
function isValid$1() {
  return this._isValid;
}
function createInvalid$1() {
  return createDuration(NaN);
}
function Duration(duration) {
  var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
  this._isValid = isDurationValid(normalizedInput);
  this._milliseconds = +milliseconds2 + seconds2 * 1e3 + // 1000
  minutes2 * 6e4 + // 1000 * 60
  hours2 * 1e3 * 60 * 60;
  this._days = +days2 + weeks2 * 7;
  this._months = +months2 + quarters * 3 + years2 * 12;
  this._data = {};
  this._locale = getLocale();
  this._bubble();
}
function isDuration(obj) {
  return obj instanceof Duration;
}
function absRound(number) {
  if (number < 0) {
    return Math.round(-1 * number) * -1;
  } else {
    return Math.round(number);
  }
}
function compareArrays(array1, array2, dontConvert) {
  var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
  for (i = 0; i < len; i++) {
    if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
      diffs++;
    }
  }
  return diffs + lengthDiff;
}
function offset(token2, separator) {
  addFormatToken(token2, 0, 0, function() {
    var offset2 = this.utcOffset(), sign2 = "+";
    if (offset2 < 0) {
      offset2 = -offset2;
      sign2 = "-";
    }
    return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
  });
}
offset("Z", ":");
offset("ZZ", "");
addRegexToken("Z", matchShortOffset);
addRegexToken("ZZ", matchShortOffset);
addParseToken(["Z", "ZZ"], function(input, array, config) {
  config._useUTC = true;
  config._tzm = offsetFromString(matchShortOffset, input);
});
var chunkOffset = /([\+\-]|\d\d)/gi;
function offsetFromString(matcher, string) {
  var matches = (string || "").match(matcher), chunk, parts, minutes2;
  if (matches === null) {
    return null;
  }
  chunk = matches[matches.length - 1] || [];
  parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
  minutes2 = +(parts[1] * 60) + toInt(parts[2]);
  return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
}
function cloneWithOffset(input, model) {
  var res, diff2;
  if (model._isUTC) {
    res = model.clone();
    diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
    res._d.setTime(res._d.valueOf() + diff2);
    hooks.updateOffset(res, false);
    return res;
  } else {
    return createLocal(input).local();
  }
}
function getDateOffset(m2) {
  return -Math.round(m2._d.getTimezoneOffset());
}
hooks.updateOffset = function() {
};
function getSetOffset(input, keepLocalTime, keepMinutes) {
  var offset2 = this._offset || 0, localAdjust;
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  if (input != null) {
    if (typeof input === "string") {
      input = offsetFromString(matchShortOffset, input);
      if (input === null) {
        return this;
      }
    } else if (Math.abs(input) < 16 && !keepMinutes) {
      input = input * 60;
    }
    if (!this._isUTC && keepLocalTime) {
      localAdjust = getDateOffset(this);
    }
    this._offset = input;
    this._isUTC = true;
    if (localAdjust != null) {
      this.add(localAdjust, "m");
    }
    if (offset2 !== input) {
      if (!keepLocalTime || this._changeInProgress) {
        addSubtract(
          this,
          createDuration(input - offset2, "m"),
          1,
          false
        );
      } else if (!this._changeInProgress) {
        this._changeInProgress = true;
        hooks.updateOffset(this, true);
        this._changeInProgress = null;
      }
    }
    return this;
  } else {
    return this._isUTC ? offset2 : getDateOffset(this);
  }
}
function getSetZone(input, keepLocalTime) {
  if (input != null) {
    if (typeof input !== "string") {
      input = -input;
    }
    this.utcOffset(input, keepLocalTime);
    return this;
  } else {
    return -this.utcOffset();
  }
}
function setOffsetToUTC(keepLocalTime) {
  return this.utcOffset(0, keepLocalTime);
}
function setOffsetToLocal(keepLocalTime) {
  if (this._isUTC) {
    this.utcOffset(0, keepLocalTime);
    this._isUTC = false;
    if (keepLocalTime) {
      this.subtract(getDateOffset(this), "m");
    }
  }
  return this;
}
function setOffsetToParsedOffset() {
  if (this._tzm != null) {
    this.utcOffset(this._tzm, false, true);
  } else if (typeof this._i === "string") {
    var tZone = offsetFromString(matchOffset, this._i);
    if (tZone != null) {
      this.utcOffset(tZone);
    } else {
      this.utcOffset(0, true);
    }
  }
  return this;
}
function hasAlignedHourOffset(input) {
  if (!this.isValid()) {
    return false;
  }
  input = input ? createLocal(input).utcOffset() : 0;
  return (this.utcOffset() - input) % 60 === 0;
}
function isDaylightSavingTime() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function isDaylightSavingTimeShifted() {
  if (!isUndefined(this._isDSTShifted)) {
    return this._isDSTShifted;
  }
  var c = {}, other;
  copyConfig(c, this);
  c = prepareConfig(c);
  if (c._a) {
    other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
    this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
  } else {
    this._isDSTShifted = false;
  }
  return this._isDSTShifted;
}
function isLocal() {
  return this.isValid() ? !this._isUTC : false;
}
function isUtcOffset() {
  return this.isValid() ? this._isUTC : false;
}
function isUtc() {
  return this.isValid() ? this._isUTC && this._offset === 0 : false;
}
var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function createDuration(input, key) {
  var duration = input, match = null, sign2, ret, diffRes;
  if (isDuration(input)) {
    duration = {
      ms: input._milliseconds,
      d: input._days,
      M: input._months
    };
  } else if (isNumber(input) || !isNaN(+input)) {
    duration = {};
    if (key) {
      duration[key] = +input;
    } else {
      duration.milliseconds = +input;
    }
  } else if (match = aspNetRegex.exec(input)) {
    sign2 = match[1] === "-" ? -1 : 1;
    duration = {
      y: 0,
      d: toInt(match[DATE]) * sign2,
      h: toInt(match[HOUR]) * sign2,
      m: toInt(match[MINUTE]) * sign2,
      s: toInt(match[SECOND]) * sign2,
      ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
      // the millisecond decimal point is included in the match
    };
  } else if (match = isoRegex.exec(input)) {
    sign2 = match[1] === "-" ? -1 : 1;
    duration = {
      y: parseIso(match[2], sign2),
      M: parseIso(match[3], sign2),
      w: parseIso(match[4], sign2),
      d: parseIso(match[5], sign2),
      h: parseIso(match[6], sign2),
      m: parseIso(match[7], sign2),
      s: parseIso(match[8], sign2)
    };
  } else if (duration == null) {
    duration = {};
  } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
    diffRes = momentsDifference(
      createLocal(duration.from),
      createLocal(duration.to)
    );
    duration = {};
    duration.ms = diffRes.milliseconds;
    duration.M = diffRes.months;
  }
  ret = new Duration(duration);
  if (isDuration(input) && hasOwnProp(input, "_locale")) {
    ret._locale = input._locale;
  }
  if (isDuration(input) && hasOwnProp(input, "_isValid")) {
    ret._isValid = input._isValid;
  }
  return ret;
}
createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;
function parseIso(inp, sign2) {
  var res = inp && parseFloat(inp.replace(",", "."));
  return (isNaN(res) ? 0 : res) * sign2;
}
function positiveMomentsDifference(base, other) {
  var res = {};
  res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
  if (base.clone().add(res.months, "M").isAfter(other)) {
    --res.months;
  }
  res.milliseconds = +other - +base.clone().add(res.months, "M");
  return res;
}
function momentsDifference(base, other) {
  var res;
  if (!(base.isValid() && other.isValid())) {
    return { milliseconds: 0, months: 0 };
  }
  other = cloneWithOffset(other, base);
  if (base.isBefore(other)) {
    res = positiveMomentsDifference(base, other);
  } else {
    res = positiveMomentsDifference(other, base);
    res.milliseconds = -res.milliseconds;
    res.months = -res.months;
  }
  return res;
}
function createAdder(direction, name) {
  return function(val, period) {
    var dur, tmp;
    if (period !== null && !isNaN(+period)) {
      deprecateSimple(
        name,
        "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
      );
      tmp = val;
      val = period;
      period = tmp;
    }
    dur = createDuration(val, period);
    addSubtract(this, dur, direction);
    return this;
  };
}
function addSubtract(mom, duration, isAdding, updateOffset) {
  var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
  if (!mom.isValid()) {
    return;
  }
  updateOffset = updateOffset == null ? true : updateOffset;
  if (months2) {
    setMonth(mom, get(mom, "Month") + months2 * isAdding);
  }
  if (days2) {
    set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
  }
  if (milliseconds2) {
    mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
  }
  if (updateOffset) {
    hooks.updateOffset(mom, days2 || months2);
  }
}
var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
function isString(input) {
  return typeof input === "string" || input instanceof String;
}
function isMomentInput(input) {
  return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
}
function isMomentInputObject(input) {
  var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], i, property, propertyLen = properties.length;
  for (i = 0; i < propertyLen; i += 1) {
    property = properties[i];
    propertyTest = propertyTest || hasOwnProp(input, property);
  }
  return objectTest && propertyTest;
}
function isNumberOrStringArray(input) {
  var arrayTest = isArray(input), dataTypeTest = false;
  if (arrayTest) {
    dataTypeTest = input.filter(function(item) {
      return !isNumber(item) && isString(input);
    }).length === 0;
  }
  return arrayTest && dataTypeTest;
}
function isCalendarSpec(input) {
  var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], i, property;
  for (i = 0; i < properties.length; i += 1) {
    property = properties[i];
    propertyTest = propertyTest || hasOwnProp(input, property);
  }
  return objectTest && propertyTest;
}
function getCalendarFormat(myMoment, now2) {
  var diff2 = myMoment.diff(now2, "days", true);
  return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
}
function calendar$1(time, formats) {
  if (arguments.length === 1) {
    if (!arguments[0]) {
      time = void 0;
      formats = void 0;
    } else if (isMomentInput(arguments[0])) {
      time = arguments[0];
      formats = void 0;
    } else if (isCalendarSpec(arguments[0])) {
      formats = arguments[0];
      time = void 0;
    }
  }
  var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
  return this.format(
    output || this.localeData().calendar(format2, this, createLocal(now2))
  );
}
function clone() {
  return new Moment(this);
}
function isAfter(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input);
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() > localInput.valueOf();
  } else {
    return localInput.valueOf() < this.clone().startOf(units).valueOf();
  }
}
function isBefore(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input);
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() < localInput.valueOf();
  } else {
    return this.clone().endOf(units).valueOf() < localInput.valueOf();
  }
}
function isBetween(from2, to2, units, inclusivity) {
  var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
  if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
    return false;
  }
  inclusivity = inclusivity || "()";
  return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
}
function isSame(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input), inputMs;
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() === localInput.valueOf();
  } else {
    inputMs = localInput.valueOf();
    return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
  }
}
function isSameOrAfter(input, units) {
  return this.isSame(input, units) || this.isAfter(input, units);
}
function isSameOrBefore(input, units) {
  return this.isSame(input, units) || this.isBefore(input, units);
}
function diff(input, units, asFloat) {
  var that, zoneDelta, output;
  if (!this.isValid()) {
    return NaN;
  }
  that = cloneWithOffset(input, this);
  if (!that.isValid()) {
    return NaN;
  }
  zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
  units = normalizeUnits(units);
  switch (units) {
    case "year":
      output = monthDiff(this, that) / 12;
      break;
    case "month":
      output = monthDiff(this, that);
      break;
    case "quarter":
      output = monthDiff(this, that) / 3;
      break;
    case "second":
      output = (this - that) / 1e3;
      break;
    case "minute":
      output = (this - that) / 6e4;
      break;
    case "hour":
      output = (this - that) / 36e5;
      break;
    case "day":
      output = (this - that - zoneDelta) / 864e5;
      break;
    case "week":
      output = (this - that - zoneDelta) / 6048e5;
      break;
    default:
      output = this - that;
  }
  return asFloat ? output : absFloor(output);
}
function monthDiff(a, b) {
  if (a.date() < b.date()) {
    return -monthDiff(b, a);
  }
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
  if (b - anchor < 0) {
    anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
    adjust = (b - anchor) / (anchor - anchor2);
  } else {
    anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
    adjust = (b - anchor) / (anchor2 - anchor);
  }
  return -(wholeMonthDiff + adjust) || 0;
}
hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function toString() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function toISOString(keepOffset) {
  if (!this.isValid()) {
    return null;
  }
  var utc = keepOffset !== true, m2 = utc ? this.clone().utc() : this;
  if (m2.year() < 0 || m2.year() > 9999) {
    return formatMoment(
      m2,
      utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
    );
  }
  if (isFunction(Date.prototype.toISOString)) {
    if (utc) {
      return this.toDate().toISOString();
    } else {
      return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m2, "Z"));
    }
  }
  return formatMoment(
    m2,
    utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function inspect() {
  if (!this.isValid()) {
    return "moment.invalid(/* " + this._i + " */)";
  }
  var func = "moment", zone = "", prefix, year, datetime, suffix;
  if (!this.isLocal()) {
    func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
    zone = "Z";
  }
  prefix = "[" + func + '("]';
  year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
  datetime = "-MM-DD[T]HH:mm:ss.SSS";
  suffix = zone + '[")]';
  return this.format(prefix + year + datetime + suffix);
}
function format(inputString) {
  if (!inputString) {
    inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
  }
  var output = formatMoment(this, inputString);
  return this.localeData().postformat(output);
}
function from(time, withoutSuffix) {
  if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
    return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
  } else {
    return this.localeData().invalidDate();
  }
}
function fromNow(withoutSuffix) {
  return this.from(createLocal(), withoutSuffix);
}
function to(time, withoutSuffix) {
  if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
    return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
  } else {
    return this.localeData().invalidDate();
  }
}
function toNow(withoutSuffix) {
  return this.to(createLocal(), withoutSuffix);
}
function locale(key) {
  var newLocaleData;
  if (key === void 0) {
    return this._locale._abbr;
  } else {
    newLocaleData = getLocale(key);
    if (newLocaleData != null) {
      this._locale = newLocaleData;
    }
    return this;
  }
}
var lang = deprecate(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(key) {
    if (key === void 0) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  }
);
function localeData() {
  return this._locale;
}
var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
function mod$1(dividend, divisor) {
  return (dividend % divisor + divisor) % divisor;
}
function localStartOfDate(y, m2, d) {
  if (y < 100 && y >= 0) {
    return new Date(y + 400, m2, d) - MS_PER_400_YEARS;
  } else {
    return new Date(y, m2, d).valueOf();
  }
}
function utcStartOfDate(y, m2, d) {
  if (y < 100 && y >= 0) {
    return Date.UTC(y + 400, m2, d) - MS_PER_400_YEARS;
  } else {
    return Date.UTC(y, m2, d);
  }
}
function startOf(units) {
  var time, startOfDate;
  units = normalizeUnits(units);
  if (units === void 0 || units === "millisecond" || !this.isValid()) {
    return this;
  }
  startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
  switch (units) {
    case "year":
      time = startOfDate(this.year(), 0, 1);
      break;
    case "quarter":
      time = startOfDate(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      time = startOfDate(this.year(), this.month(), 1);
      break;
    case "week":
      time = startOfDate(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      time = startOfDate(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      time = startOfDate(this.year(), this.month(), this.date());
      break;
    case "hour":
      time = this._d.valueOf();
      time -= mod$1(
        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
        MS_PER_HOUR
      );
      break;
    case "minute":
      time = this._d.valueOf();
      time -= mod$1(time, MS_PER_MINUTE);
      break;
    case "second":
      time = this._d.valueOf();
      time -= mod$1(time, MS_PER_SECOND);
      break;
  }
  this._d.setTime(time);
  hooks.updateOffset(this, true);
  return this;
}
function endOf(units) {
  var time, startOfDate;
  units = normalizeUnits(units);
  if (units === void 0 || units === "millisecond" || !this.isValid()) {
    return this;
  }
  startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
  switch (units) {
    case "year":
      time = startOfDate(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      time = startOfDate(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      time = startOfDate(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      time = startOfDate(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      time = startOfDate(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      time = this._d.valueOf();
      time += MS_PER_HOUR - mod$1(
        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
        MS_PER_HOUR
      ) - 1;
      break;
    case "minute":
      time = this._d.valueOf();
      time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
      break;
    case "second":
      time = this._d.valueOf();
      time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
      break;
  }
  this._d.setTime(time);
  hooks.updateOffset(this, true);
  return this;
}
function valueOf() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function unix() {
  return Math.floor(this.valueOf() / 1e3);
}
function toDate() {
  return new Date(this.valueOf());
}
function toArray() {
  var m2 = this;
  return [
    m2.year(),
    m2.month(),
    m2.date(),
    m2.hour(),
    m2.minute(),
    m2.second(),
    m2.millisecond()
  ];
}
function toObject() {
  var m2 = this;
  return {
    years: m2.year(),
    months: m2.month(),
    date: m2.date(),
    hours: m2.hours(),
    minutes: m2.minutes(),
    seconds: m2.seconds(),
    milliseconds: m2.milliseconds()
  };
}
function toJSON() {
  return this.isValid() ? this.toISOString() : null;
}
function isValid$2() {
  return isValid(this);
}
function parsingFlags() {
  return extend({}, getParsingFlags(this));
}
function invalidAt() {
  return getParsingFlags(this).overflow;
}
function creationData() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
addFormatToken("N", 0, 0, "eraAbbr");
addFormatToken("NN", 0, 0, "eraAbbr");
addFormatToken("NNN", 0, 0, "eraAbbr");
addFormatToken("NNNN", 0, 0, "eraName");
addFormatToken("NNNNN", 0, 0, "eraNarrow");
addFormatToken("y", ["y", 1], "yo", "eraYear");
addFormatToken("y", ["yy", 2], 0, "eraYear");
addFormatToken("y", ["yyy", 3], 0, "eraYear");
addFormatToken("y", ["yyyy", 4], 0, "eraYear");
addRegexToken("N", matchEraAbbr);
addRegexToken("NN", matchEraAbbr);
addRegexToken("NNN", matchEraAbbr);
addRegexToken("NNNN", matchEraName);
addRegexToken("NNNNN", matchEraNarrow);
addParseToken(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(input, array, config, token2) {
    var era = config._locale.erasParse(input, token2, config._strict);
    if (era) {
      getParsingFlags(config).era = era;
    } else {
      getParsingFlags(config).invalidEra = input;
    }
  }
);
addRegexToken("y", matchUnsigned);
addRegexToken("yy", matchUnsigned);
addRegexToken("yyy", matchUnsigned);
addRegexToken("yyyy", matchUnsigned);
addRegexToken("yo", matchEraYearOrdinal);
addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
addParseToken(["yo"], function(input, array, config, token2) {
  var match;
  if (config._locale._eraYearOrdinalRegex) {
    match = input.match(config._locale._eraYearOrdinalRegex);
  }
  if (config._locale.eraYearOrdinalParse) {
    array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
  } else {
    array[YEAR] = parseInt(input, 10);
  }
});
function localeEras(m2, format2) {
  var i, l, date, eras = this._eras || getLocale("en")._eras;
  for (i = 0, l = eras.length; i < l; ++i) {
    switch (typeof eras[i].since) {
      case "string":
        date = hooks(eras[i].since).startOf("day");
        eras[i].since = date.valueOf();
        break;
    }
    switch (typeof eras[i].until) {
      case "undefined":
        eras[i].until = Infinity;
        break;
      case "string":
        date = hooks(eras[i].until).startOf("day").valueOf();
        eras[i].until = date.valueOf();
        break;
    }
  }
  return eras;
}
function localeErasParse(eraName, format2, strict) {
  var i, l, eras = this.eras(), name, abbr, narrow;
  eraName = eraName.toUpperCase();
  for (i = 0, l = eras.length; i < l; ++i) {
    name = eras[i].name.toUpperCase();
    abbr = eras[i].abbr.toUpperCase();
    narrow = eras[i].narrow.toUpperCase();
    if (strict) {
      switch (format2) {
        case "N":
        case "NN":
        case "NNN":
          if (abbr === eraName) {
            return eras[i];
          }
          break;
        case "NNNN":
          if (name === eraName) {
            return eras[i];
          }
          break;
        case "NNNNN":
          if (narrow === eraName) {
            return eras[i];
          }
          break;
      }
    } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
      return eras[i];
    }
  }
}
function localeErasConvertYear(era, year) {
  var dir = era.since <= era.until ? 1 : -1;
  if (year === void 0) {
    return hooks(era.since).year();
  } else {
    return hooks(era.since).year() + (year - era.offset) * dir;
  }
}
function getEraName() {
  var i, l, val, eras = this.localeData().eras();
  for (i = 0, l = eras.length; i < l; ++i) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i].since <= val && val <= eras[i].until) {
      return eras[i].name;
    }
    if (eras[i].until <= val && val <= eras[i].since) {
      return eras[i].name;
    }
  }
  return "";
}
function getEraNarrow() {
  var i, l, val, eras = this.localeData().eras();
  for (i = 0, l = eras.length; i < l; ++i) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i].since <= val && val <= eras[i].until) {
      return eras[i].narrow;
    }
    if (eras[i].until <= val && val <= eras[i].since) {
      return eras[i].narrow;
    }
  }
  return "";
}
function getEraAbbr() {
  var i, l, val, eras = this.localeData().eras();
  for (i = 0, l = eras.length; i < l; ++i) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i].since <= val && val <= eras[i].until) {
      return eras[i].abbr;
    }
    if (eras[i].until <= val && val <= eras[i].since) {
      return eras[i].abbr;
    }
  }
  return "";
}
function getEraYear() {
  var i, l, dir, val, eras = this.localeData().eras();
  for (i = 0, l = eras.length; i < l; ++i) {
    dir = eras[i].since <= eras[i].until ? 1 : -1;
    val = this.clone().startOf("day").valueOf();
    if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
      return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
    }
  }
  return this.year();
}
function erasNameRegex(isStrict) {
  if (!hasOwnProp(this, "_erasNameRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasNameRegex : this._erasRegex;
}
function erasAbbrRegex(isStrict) {
  if (!hasOwnProp(this, "_erasAbbrRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasAbbrRegex : this._erasRegex;
}
function erasNarrowRegex(isStrict) {
  if (!hasOwnProp(this, "_erasNarrowRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasNarrowRegex : this._erasRegex;
}
function matchEraAbbr(isStrict, locale2) {
  return locale2.erasAbbrRegex(isStrict);
}
function matchEraName(isStrict, locale2) {
  return locale2.erasNameRegex(isStrict);
}
function matchEraNarrow(isStrict, locale2) {
  return locale2.erasNarrowRegex(isStrict);
}
function matchEraYearOrdinal(isStrict, locale2) {
  return locale2._eraYearOrdinalRegex || matchUnsigned;
}
function computeErasParse() {
  var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
  for (i = 0, l = eras.length; i < l; ++i) {
    namePieces.push(regexEscape(eras[i].name));
    abbrPieces.push(regexEscape(eras[i].abbr));
    narrowPieces.push(regexEscape(eras[i].narrow));
    mixedPieces.push(regexEscape(eras[i].name));
    mixedPieces.push(regexEscape(eras[i].abbr));
    mixedPieces.push(regexEscape(eras[i].narrow));
  }
  this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
  this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
  this._erasNarrowRegex = new RegExp(
    "^(" + narrowPieces.join("|") + ")",
    "i"
  );
}
addFormatToken(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
addFormatToken(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function addWeekYearFormatToken(token2, getter) {
  addFormatToken(0, [token2, token2.length], 0, getter);
}
addWeekYearFormatToken("gggg", "weekYear");
addWeekYearFormatToken("ggggg", "weekYear");
addWeekYearFormatToken("GGGG", "isoWeekYear");
addWeekYearFormatToken("GGGGG", "isoWeekYear");
addUnitAlias("weekYear", "gg");
addUnitAlias("isoWeekYear", "GG");
addUnitPriority("weekYear", 1);
addUnitPriority("isoWeekYear", 1);
addRegexToken("G", matchSigned);
addRegexToken("g", matchSigned);
addRegexToken("GG", match1to2, match2);
addRegexToken("gg", match1to2, match2);
addRegexToken("GGGG", match1to4, match4);
addRegexToken("gggg", match1to4, match4);
addRegexToken("GGGGG", match1to6, match6);
addRegexToken("ggggg", match1to6, match6);
addWeekParseToken(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(input, week, config, token2) {
    week[token2.substr(0, 2)] = toInt(input);
  }
);
addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
  week[token2] = hooks.parseTwoDigitYear(input);
});
function getSetWeekYear(input) {
  return getSetWeekYearHelper.call(
    this,
    input,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function getSetISOWeekYear(input) {
  return getSetWeekYearHelper.call(
    this,
    input,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function getISOWeeksInYear() {
  return weeksInYear(this.year(), 1, 4);
}
function getISOWeeksInISOWeekYear() {
  return weeksInYear(this.isoWeekYear(), 1, 4);
}
function getWeeksInYear() {
  var weekInfo = this.localeData()._week;
  return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}
function getWeeksInWeekYear() {
  var weekInfo = this.localeData()._week;
  return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
}
function getSetWeekYearHelper(input, week, weekday, dow, doy) {
  var weeksTarget;
  if (input == null) {
    return weekOfYear(this, dow, doy).year;
  } else {
    weeksTarget = weeksInYear(input, dow, doy);
    if (week > weeksTarget) {
      week = weeksTarget;
    }
    return setWeekAll.call(this, input, week, weekday, dow, doy);
  }
}
function setWeekAll(weekYear, week, weekday, dow, doy) {
  var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
  this.year(date.getUTCFullYear());
  this.month(date.getUTCMonth());
  this.date(date.getUTCDate());
  return this;
}
addFormatToken("Q", 0, "Qo", "quarter");
addUnitAlias("quarter", "Q");
addUnitPriority("quarter", 7);
addRegexToken("Q", match1);
addParseToken("Q", function(input, array) {
  array[MONTH] = (toInt(input) - 1) * 3;
});
function getSetQuarter(input) {
  return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}
addFormatToken("D", ["DD", 2], "Do", "date");
addUnitAlias("date", "D");
addUnitPriority("date", 9);
addRegexToken("D", match1to2);
addRegexToken("DD", match1to2, match2);
addRegexToken("Do", function(isStrict, locale2) {
  return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
});
addParseToken(["D", "DD"], DATE);
addParseToken("Do", function(input, array) {
  array[DATE] = toInt(input.match(match1to2)[0]);
});
var getSetDayOfMonth = makeGetSet("Date", true);
addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
addUnitAlias("dayOfYear", "DDD");
addUnitPriority("dayOfYear", 4);
addRegexToken("DDD", match1to3);
addRegexToken("DDDD", match3);
addParseToken(["DDD", "DDDD"], function(input, array, config) {
  config._dayOfYear = toInt(input);
});
function getSetDayOfYear(input) {
  var dayOfYear = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
}
addFormatToken("m", ["mm", 2], 0, "minute");
addUnitAlias("minute", "m");
addUnitPriority("minute", 14);
addRegexToken("m", match1to2);
addRegexToken("mm", match1to2, match2);
addParseToken(["m", "mm"], MINUTE);
var getSetMinute = makeGetSet("Minutes", false);
addFormatToken("s", ["ss", 2], 0, "second");
addUnitAlias("second", "s");
addUnitPriority("second", 15);
addRegexToken("s", match1to2);
addRegexToken("ss", match1to2, match2);
addParseToken(["s", "ss"], SECOND);
var getSetSecond = makeGetSet("Seconds", false);
addFormatToken("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
addFormatToken(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
addFormatToken(0, ["SSS", 3], 0, "millisecond");
addFormatToken(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
addFormatToken(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
addFormatToken(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
addFormatToken(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
addUnitAlias("millisecond", "ms");
addUnitPriority("millisecond", 16);
addRegexToken("S", match1to3, match1);
addRegexToken("SS", match1to3, match2);
addRegexToken("SSS", match1to3, match3);
var token, getSetMillisecond;
for (token = "SSSS"; token.length <= 9; token += "S") {
  addRegexToken(token, matchUnsigned);
}
function parseMs(input, array) {
  array[MILLISECOND] = toInt(("0." + input) * 1e3);
}
for (token = "S"; token.length <= 9; token += "S") {
  addParseToken(token, parseMs);
}
getSetMillisecond = makeGetSet("Milliseconds", false);
addFormatToken("z", 0, 0, "zoneAbbr");
addFormatToken("zz", 0, 0, "zoneName");
function getZoneAbbr() {
  return this._isUTC ? "UTC" : "";
}
function getZoneName() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var proto = Moment.prototype;
proto.add = add;
proto.calendar = calendar$1;
proto.clone = clone;
proto.diff = diff;
proto.endOf = endOf;
proto.format = format;
proto.from = from;
proto.fromNow = fromNow;
proto.to = to;
proto.toNow = toNow;
proto.get = stringGet;
proto.invalidAt = invalidAt;
proto.isAfter = isAfter;
proto.isBefore = isBefore;
proto.isBetween = isBetween;
proto.isSame = isSame;
proto.isSameOrAfter = isSameOrAfter;
proto.isSameOrBefore = isSameOrBefore;
proto.isValid = isValid$2;
proto.lang = lang;
proto.locale = locale;
proto.localeData = localeData;
proto.max = prototypeMax;
proto.min = prototypeMin;
proto.parsingFlags = parsingFlags;
proto.set = stringSet;
proto.startOf = startOf;
proto.subtract = subtract;
proto.toArray = toArray;
proto.toObject = toObject;
proto.toDate = toDate;
proto.toISOString = toISOString;
proto.inspect = inspect;
if (typeof Symbol !== "undefined" && Symbol.for != null) {
  proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">";
  };
}
proto.toJSON = toJSON;
proto.toString = toString;
proto.unix = unix;
proto.valueOf = valueOf;
proto.creationData = creationData;
proto.eraName = getEraName;
proto.eraNarrow = getEraNarrow;
proto.eraAbbr = getEraAbbr;
proto.eraYear = getEraYear;
proto.year = getSetYear;
proto.isLeapYear = getIsLeapYear;
proto.weekYear = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;
proto.quarter = proto.quarters = getSetQuarter;
proto.month = getSetMonth;
proto.daysInMonth = getDaysInMonth;
proto.week = proto.weeks = getSetWeek;
proto.isoWeek = proto.isoWeeks = getSetISOWeek;
proto.weeksInYear = getWeeksInYear;
proto.weeksInWeekYear = getWeeksInWeekYear;
proto.isoWeeksInYear = getISOWeeksInYear;
proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
proto.date = getSetDayOfMonth;
proto.day = proto.days = getSetDayOfWeek;
proto.weekday = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear = getSetDayOfYear;
proto.hour = proto.hours = getSetHour;
proto.minute = proto.minutes = getSetMinute;
proto.second = proto.seconds = getSetSecond;
proto.millisecond = proto.milliseconds = getSetMillisecond;
proto.utcOffset = getSetOffset;
proto.utc = setOffsetToUTC;
proto.local = setOffsetToLocal;
proto.parseZone = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST = isDaylightSavingTime;
proto.isLocal = isLocal;
proto.isUtcOffset = isUtcOffset;
proto.isUtc = isUtc;
proto.isUTC = isUtc;
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;
proto.dates = deprecate(
  "dates accessor is deprecated. Use date instead.",
  getSetDayOfMonth
);
proto.months = deprecate(
  "months accessor is deprecated. Use month instead",
  getSetMonth
);
proto.years = deprecate(
  "years accessor is deprecated. Use year instead",
  getSetYear
);
proto.zone = deprecate(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  getSetZone
);
proto.isDSTShifted = deprecate(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  isDaylightSavingTimeShifted
);
function createUnix(input) {
  return createLocal(input * 1e3);
}
function createInZone() {
  return createLocal.apply(null, arguments).parseZone();
}
function preParsePostFormat(string) {
  return string;
}
var proto$1 = Locale.prototype;
proto$1.calendar = calendar;
proto$1.longDateFormat = longDateFormat;
proto$1.invalidDate = invalidDate;
proto$1.ordinal = ordinal;
proto$1.preparse = preParsePostFormat;
proto$1.postformat = preParsePostFormat;
proto$1.relativeTime = relativeTime;
proto$1.pastFuture = pastFuture;
proto$1.set = set;
proto$1.eras = localeEras;
proto$1.erasParse = localeErasParse;
proto$1.erasConvertYear = localeErasConvertYear;
proto$1.erasAbbrRegex = erasAbbrRegex;
proto$1.erasNameRegex = erasNameRegex;
proto$1.erasNarrowRegex = erasNarrowRegex;
proto$1.months = localeMonths;
proto$1.monthsShort = localeMonthsShort;
proto$1.monthsParse = localeMonthsParse;
proto$1.monthsRegex = monthsRegex;
proto$1.monthsShortRegex = monthsShortRegex;
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;
proto$1.weekdays = localeWeekdays;
proto$1.weekdaysMin = localeWeekdaysMin;
proto$1.weekdaysShort = localeWeekdaysShort;
proto$1.weekdaysParse = localeWeekdaysParse;
proto$1.weekdaysRegex = weekdaysRegex;
proto$1.weekdaysShortRegex = weekdaysShortRegex;
proto$1.weekdaysMinRegex = weekdaysMinRegex;
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;
function get$1(format2, index2, field, setter) {
  var locale2 = getLocale(), utc = createUTC().set(setter, index2);
  return locale2[field](utc, format2);
}
function listMonthsImpl(format2, index2, field) {
  if (isNumber(format2)) {
    index2 = format2;
    format2 = void 0;
  }
  format2 = format2 || "";
  if (index2 != null) {
    return get$1(format2, index2, field, "month");
  }
  var i, out = [];
  for (i = 0; i < 12; i++) {
    out[i] = get$1(format2, i, field, "month");
  }
  return out;
}
function listWeekdaysImpl(localeSorted, format2, index2, field) {
  if (typeof localeSorted === "boolean") {
    if (isNumber(format2)) {
      index2 = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
  } else {
    format2 = localeSorted;
    index2 = format2;
    localeSorted = false;
    if (isNumber(format2)) {
      index2 = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
  }
  var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
  if (index2 != null) {
    return get$1(format2, (index2 + shift) % 7, field, "day");
  }
  for (i = 0; i < 7; i++) {
    out[i] = get$1(format2, (i + shift) % 7, field, "day");
  }
  return out;
}
function listMonths(format2, index2) {
  return listMonthsImpl(format2, index2, "months");
}
function listMonthsShort(format2, index2) {
  return listMonthsImpl(format2, index2, "monthsShort");
}
function listWeekdays(localeSorted, format2, index2) {
  return listWeekdaysImpl(localeSorted, format2, index2, "weekdays");
}
function listWeekdaysShort(localeSorted, format2, index2) {
  return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysShort");
}
function listWeekdaysMin(localeSorted, format2, index2) {
  return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysMin");
}
getSetGlobalLocale("en", {
  eras: [
    {
      since: "0001-01-01",
      until: Infinity,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -Infinity,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(number) {
    var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
    return number + output;
  }
});
hooks.lang = deprecate(
  "moment.lang is deprecated. Use moment.locale instead.",
  getSetGlobalLocale
);
hooks.langData = deprecate(
  "moment.langData is deprecated. Use moment.localeData instead.",
  getLocale
);
var mathAbs = Math.abs;
function abs() {
  var data = this._data;
  this._milliseconds = mathAbs(this._milliseconds);
  this._days = mathAbs(this._days);
  this._months = mathAbs(this._months);
  data.milliseconds = mathAbs(data.milliseconds);
  data.seconds = mathAbs(data.seconds);
  data.minutes = mathAbs(data.minutes);
  data.hours = mathAbs(data.hours);
  data.months = mathAbs(data.months);
  data.years = mathAbs(data.years);
  return this;
}
function addSubtract$1(duration, input, value, direction) {
  var other = createDuration(input, value);
  duration._milliseconds += direction * other._milliseconds;
  duration._days += direction * other._days;
  duration._months += direction * other._months;
  return duration._bubble();
}
function add$1(input, value) {
  return addSubtract$1(this, input, value, 1);
}
function subtract$1(input, value) {
  return addSubtract$1(this, input, value, -1);
}
function absCeil(number) {
  if (number < 0) {
    return Math.floor(number);
  } else {
    return Math.ceil(number);
  }
}
function bubble() {
  var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
  if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
    milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
    days2 = 0;
    months2 = 0;
  }
  data.milliseconds = milliseconds2 % 1e3;
  seconds2 = absFloor(milliseconds2 / 1e3);
  data.seconds = seconds2 % 60;
  minutes2 = absFloor(seconds2 / 60);
  data.minutes = minutes2 % 60;
  hours2 = absFloor(minutes2 / 60);
  data.hours = hours2 % 24;
  days2 += absFloor(hours2 / 24);
  monthsFromDays = absFloor(daysToMonths(days2));
  months2 += monthsFromDays;
  days2 -= absCeil(monthsToDays(monthsFromDays));
  years2 = absFloor(months2 / 12);
  months2 %= 12;
  data.days = days2;
  data.months = months2;
  data.years = years2;
  return this;
}
function daysToMonths(days2) {
  return days2 * 4800 / 146097;
}
function monthsToDays(months2) {
  return months2 * 146097 / 4800;
}
function as(units) {
  if (!this.isValid()) {
    return NaN;
  }
  var days2, months2, milliseconds2 = this._milliseconds;
  units = normalizeUnits(units);
  if (units === "month" || units === "quarter" || units === "year") {
    days2 = this._days + milliseconds2 / 864e5;
    months2 = this._months + daysToMonths(days2);
    switch (units) {
      case "month":
        return months2;
      case "quarter":
        return months2 / 3;
      case "year":
        return months2 / 12;
    }
  } else {
    days2 = this._days + Math.round(monthsToDays(this._months));
    switch (units) {
      case "week":
        return days2 / 7 + milliseconds2 / 6048e5;
      case "day":
        return days2 + milliseconds2 / 864e5;
      case "hour":
        return days2 * 24 + milliseconds2 / 36e5;
      case "minute":
        return days2 * 1440 + milliseconds2 / 6e4;
      case "second":
        return days2 * 86400 + milliseconds2 / 1e3;
      case "millisecond":
        return Math.floor(days2 * 864e5) + milliseconds2;
      default:
        throw new Error("Unknown unit " + units);
    }
  }
}
function valueOf$1() {
  if (!this.isValid()) {
    return NaN;
  }
  return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
}
function makeAs(alias) {
  return function() {
    return this.as(alias);
  };
}
var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
function clone$1() {
  return createDuration(this);
}
function get$2(units) {
  units = normalizeUnits(units);
  return this.isValid() ? this[units + "s"]() : NaN;
}
function makeGetter(name) {
  return function() {
    return this.isValid() ? this._data[name] : NaN;
  };
}
var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
function weeks() {
  return absFloor(this.days() / 7);
}
var round = Math.round, thresholds = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
  return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}
function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
  var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
  if (thresholds2.w != null) {
    a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
  }
  a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
  a[2] = withoutSuffix;
  a[3] = +posNegDuration > 0;
  a[4] = locale2;
  return substituteTimeAgo.apply(null, a);
}
function getSetRelativeTimeRounding(roundingFunction) {
  if (roundingFunction === void 0) {
    return round;
  }
  if (typeof roundingFunction === "function") {
    round = roundingFunction;
    return true;
  }
  return false;
}
function getSetRelativeTimeThreshold(threshold, limit) {
  if (thresholds[threshold] === void 0) {
    return false;
  }
  if (limit === void 0) {
    return thresholds[threshold];
  }
  thresholds[threshold] = limit;
  if (threshold === "s") {
    thresholds.ss = limit - 1;
  }
  return true;
}
function humanize(argWithSuffix, argThresholds) {
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }
  var withSuffix = false, th = thresholds, locale2, output;
  if (typeof argWithSuffix === "object") {
    argThresholds = argWithSuffix;
    argWithSuffix = false;
  }
  if (typeof argWithSuffix === "boolean") {
    withSuffix = argWithSuffix;
  }
  if (typeof argThresholds === "object") {
    th = Object.assign({}, thresholds, argThresholds);
    if (argThresholds.s != null && argThresholds.ss == null) {
      th.ss = argThresholds.s - 1;
    }
  }
  locale2 = this.localeData();
  output = relativeTime$1(this, !withSuffix, th, locale2);
  if (withSuffix) {
    output = locale2.pastFuture(+this, output);
  }
  return locale2.postformat(output);
}
var abs$1 = Math.abs;
function sign(x) {
  return (x > 0) - (x < 0) || +x;
}
function toISOString$1() {
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }
  var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
  if (!total) {
    return "P0D";
  }
  minutes2 = absFloor(seconds2 / 60);
  hours2 = absFloor(minutes2 / 60);
  seconds2 %= 60;
  minutes2 %= 60;
  years2 = absFloor(months2 / 12);
  months2 %= 12;
  s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
  totalSign = total < 0 ? "-" : "";
  ymSign = sign(this._months) !== sign(total) ? "-" : "";
  daysSign = sign(this._days) !== sign(total) ? "-" : "";
  hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
  return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
}
var proto$2 = Duration.prototype;
proto$2.isValid = isValid$1;
proto$2.abs = abs;
proto$2.add = add$1;
proto$2.subtract = subtract$1;
proto$2.as = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds = asSeconds;
proto$2.asMinutes = asMinutes;
proto$2.asHours = asHours;
proto$2.asDays = asDays;
proto$2.asWeeks = asWeeks;
proto$2.asMonths = asMonths;
proto$2.asQuarters = asQuarters;
proto$2.asYears = asYears;
proto$2.valueOf = valueOf$1;
proto$2._bubble = bubble;
proto$2.clone = clone$1;
proto$2.get = get$2;
proto$2.milliseconds = milliseconds;
proto$2.seconds = seconds;
proto$2.minutes = minutes;
proto$2.hours = hours;
proto$2.days = days;
proto$2.weeks = weeks;
proto$2.months = months;
proto$2.years = years;
proto$2.humanize = humanize;
proto$2.toISOString = toISOString$1;
proto$2.toString = toISOString$1;
proto$2.toJSON = toISOString$1;
proto$2.locale = locale;
proto$2.localeData = localeData;
proto$2.toIsoString = deprecate(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  toISOString$1
);
proto$2.lang = lang;
addFormatToken("X", 0, 0, "unix");
addFormatToken("x", 0, 0, "valueOf");
addRegexToken("x", matchSigned);
addRegexToken("X", matchTimestamp);
addParseToken("X", function(input, array, config) {
  config._d = new Date(parseFloat(input) * 1e3);
});
addParseToken("x", function(input, array, config) {
  config._d = new Date(toInt(input));
});
//! moment.js
hooks.version = "2.29.4";
setHookCallback(createLocal);
hooks.fn = proto;
hooks.min = min;
hooks.max = max;
hooks.now = now;
hooks.utc = createUTC;
hooks.unix = createUnix;
hooks.months = listMonths;
hooks.isDate = isDate;
hooks.locale = getSetGlobalLocale;
hooks.invalid = createInvalid;
hooks.duration = createDuration;
hooks.isMoment = isMoment;
hooks.weekdays = listWeekdays;
hooks.parseZone = createInZone;
hooks.localeData = getLocale;
hooks.isDuration = isDuration;
hooks.monthsShort = listMonthsShort;
hooks.weekdaysMin = listWeekdaysMin;
hooks.defineLocale = defineLocale;
hooks.updateLocale = updateLocale;
hooks.locales = listLocales;
hooks.weekdaysShort = listWeekdaysShort;
hooks.normalizeUnits = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat = getCalendarFormat;
hooks.prototype = proto;
hooks.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
exports._export_sfc = _export_sfc;
exports.cnchar = cnchar;
exports.createSSRApp = createSSRApp;
exports.e = e;
exports.f = f;
exports.hooks = hooks;
exports.info = info;
exports.m = m;
exports.o = o;
exports.order = order;
exports.radical = radical;
exports.t = t;
exports.trad = trad;
exports.wx$1 = wx$1;