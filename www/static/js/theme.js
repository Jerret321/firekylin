webpackJsonp([2],{

/***/ 1164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ReactCSS=exports.loop=exports.handleActive=exports.handleHover=exports.hover=exports.Component=void 0;var _objectAssign=__webpack_require__(591),_objectAssign2=_interopRequireDefault(_objectAssign),_flattenNames=__webpack_require__(1738),_flattenNames2=_interopRequireDefault(_flattenNames),_mergeClasses=__webpack_require__(1740),_mergeClasses2=_interopRequireDefault(_mergeClasses),_autoprefix=__webpack_require__(1729),_autoprefix2=_interopRequireDefault(_autoprefix),_Component2=__webpack_require__(1732),_Component3=_interopRequireDefault(_Component2),_hover2=__webpack_require__(1731),_hover3=_interopRequireDefault(_hover2),_active=__webpack_require__(1730),_active2=_interopRequireDefault(_active),_loop2=__webpack_require__(1739),_loop3=_interopRequireDefault(_loop2);exports.Component=_Component3["default"],exports.hover=_hover3["default"],exports.handleHover=_hover3["default"],exports.handleActive=_active2["default"],exports.loop=_loop3["default"];var ReactCSS=exports.ReactCSS=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];var a=(0,_flattenNames2["default"])(r),s=(0,_mergeClasses2["default"])(e,a);return(0,_autoprefix2["default"])(s)};ReactCSS.m=_objectAssign2["default"],exports["default"]=ReactCSS;

/***/ }),

/***/ 1165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Alpha = __webpack_require__(1658);

Object.defineProperty(exports, 'Alpha', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Alpha).default;
  }
});

var _Checkboard = __webpack_require__(1399);

Object.defineProperty(exports, 'Checkboard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Checkboard).default;
  }
});

var _EditableInput = __webpack_require__(1659);

Object.defineProperty(exports, 'EditableInput', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_EditableInput).default;
  }
});

var _Hue = __webpack_require__(1660);

Object.defineProperty(exports, 'Hue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Hue).default;
  }
});

var _Saturation = __webpack_require__(1661);

Object.defineProperty(exports, 'Saturation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Saturation).default;
  }
});

var _ColorWrap = __webpack_require__(1400);

Object.defineProperty(exports, 'ColorWrap', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ColorWrap).default;
  }
});

var _Swatch = __webpack_require__(1662);

Object.defineProperty(exports, 'Swatch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Swatch).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 1167:
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 1169:
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(1369);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(1358),
    baseIteratee = __webpack_require__(1547),
    baseMap = __webpack_require__(1550),
    isArray = __webpack_require__(1169);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ 1180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.red = undefined;

var _each = __webpack_require__(1616);

var _each2 = _interopRequireDefault(_each);

var _tinycolor = __webpack_require__(1698);

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  simpleCheckForValidColor: function simpleCheckForValidColor(data) {
    var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'a', 'v'];
    var checked = 0;
    var passed = 0;
    (0, _each2.default)(keysToCheck, function (letter) {
      if (data[letter]) {
        checked++;
        if (!isNaN(data[letter])) {
          passed++;
        }
      }
    });
    return checked === passed ? data : false;
  },
  toState: function toState(data, oldHue) {
    var color = data.hex ? (0, _tinycolor2.default)(data.hex) : (0, _tinycolor2.default)(data);
    var hsl = color.toHsl();
    var hsv = color.toHsv();
    if (hsl.s === 0) {
      hsl.h = oldHue || 0;
      hsv.h = oldHue || 0;
    }

    return {
      hsl: hsl,
      hex: '#' + color.toHex(),
      rgb: color.toRgb(),
      hsv: hsv,
      oldHue: data.h || oldHue || hsl.h,
      source: data.source
    };
  },
  isValidHex: function isValidHex(hex) {
    return (0, _tinycolor2.default)(hex).isValid();
  }
};
var red = exports.red = {
  hsl: { a: 1, h: 0, l: 0.5, s: 1 },
  hex: '#ff0000',
  rgb: { r: 255, g: 0, b: 0, a: 1 },
  hsv: { h: 0, s: 1, v: 1, a: 1 }
};

/***/ }),

/***/ 1186:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(1206),
    getRawTag = __webpack_require__(1578),
    objectToString = __webpack_require__(1605);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(1545),
    getValue = __webpack_require__(1579);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ 1188:
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 1206:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1172);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 1207:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(1357),
    baseKeys = __webpack_require__(1548),
    isArrayLike = __webpack_require__(1237);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 1231:
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(1591),
    listCacheDelete = __webpack_require__(1592),
    listCacheGet = __webpack_require__(1593),
    listCacheHas = __webpack_require__(1594),
    listCacheSet = __webpack_require__(1595);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 1232:
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(1283);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 1233:
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(1361),
    baseAssignValue = __webpack_require__(1362);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ 1234:
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(1589);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 1235:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1187);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 1236:
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(1238);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ 1237:
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(1383),
    isLength = __webpack_require__(1285);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 1238:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1186),
    isObjectLike = __webpack_require__(1188);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 1275:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1187),
    root = __webpack_require__(1172);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 1276:
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(1596),
    mapCacheDelete = __webpack_require__(1597),
    mapCacheGet = __webpack_require__(1598),
    mapCacheHas = __webpack_require__(1599),
    mapCacheSet = __webpack_require__(1600);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 1277:
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(1231),
    stackClear = __webpack_require__(1608),
    stackDelete = __webpack_require__(1609),
    stackGet = __webpack_require__(1610),
    stackHas = __webpack_require__(1611),
    stackSet = __webpack_require__(1612);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ 1278:
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(1355);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ 1279:
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(1377);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 1280:
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(1533),
    stubArray = __webpack_require__(1386);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ 1281:
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1169),
    isSymbol = __webpack_require__(1238);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ 1282:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 1283:
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 1284:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1172),
    stubFalse = __webpack_require__(1625);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(594)(module)))

/***/ }),

/***/ 1285:
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 1286:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1186),
    isArray = __webpack_require__(1169),
    isObjectLike = __webpack_require__(1188);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ 1325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true,
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libComponentsRaised = __webpack_require__(1694);

var _libComponentsRaised2 = _interopRequireDefault(_libComponentsRaised);

var _libComponentsTile = __webpack_require__(1697);

var _libComponentsTile2 = _interopRequireDefault(_libComponentsTile);

var _libComponentsTabs = __webpack_require__(1696);

var _libComponentsTabs2 = _interopRequireDefault(_libComponentsTabs);

exports.Raised = _libComponentsRaised2['default'];
exports.Tile = _libComponentsTile2['default'];
exports.Tabs = _libComponentsTabs2['default'];


/***/ }),

/***/ 1355:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1172);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 1356:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ 1357:
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(1555),
    isArguments = __webpack_require__(1382),
    isArray = __webpack_require__(1169),
    isBuffer = __webpack_require__(1284),
    isIndex = __webpack_require__(1373),
    isTypedArray = __webpack_require__(1384);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 1358:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 1359:
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 1360:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ 1361:
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(1362),
    eq = __webpack_require__(1283);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 1362:
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(1573);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 1363:
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(1540),
    createBaseEach = __webpack_require__(1571);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 1364:
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(1367),
    toKey = __webpack_require__(1236);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ 1365:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(1359),
    isArray = __webpack_require__(1169);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ 1366:
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(1543),
    isObjectLike = __webpack_require__(1188);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ 1367:
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1169),
    isKey = __webpack_require__(1281),
    stringToPath = __webpack_require__(1613),
    toString = __webpack_require__(1629);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ 1368:
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(1529),
    arraySome = __webpack_require__(1534),
    cacheHas = __webpack_require__(1558);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ 1369:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(147)))

/***/ }),

/***/ 1370:
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(1365),
    getSymbols = __webpack_require__(1280),
    keys = __webpack_require__(1207);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ 1371:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(1359),
    getPrototype = __webpack_require__(1279),
    getSymbols = __webpack_require__(1280),
    stubArray = __webpack_require__(1386);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ 1372:
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(1525),
    Map = __webpack_require__(1275),
    Promise = __webpack_require__(1527),
    Set = __webpack_require__(1528),
    WeakMap = __webpack_require__(1530),
    baseGetTag = __webpack_require__(1186),
    toSource = __webpack_require__(1379);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ 1373:
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 1374:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1167);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ 1375:
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ 1376:
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ 1377:
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 1378:
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ 1379:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 1380:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1167),
    now = __webpack_require__(1622),
    toNumber = __webpack_require__(1387);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 1381:
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 1382:
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(1542),
    isObjectLike = __webpack_require__(1188);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 1383:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1186),
    isObject = __webpack_require__(1167);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 1384:
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(1546),
    baseUnary = __webpack_require__(1557),
    nodeUtil = __webpack_require__(1604);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 1385:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(1357),
    baseKeysIn = __webpack_require__(1549),
    isArrayLike = __webpack_require__(1237);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ 1386:
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 1387:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1167),
    isSymbol = __webpack_require__(1238);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 1388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pink", function() { return pink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple", function() { return purple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepPurple", function() { return deepPurple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo", function() { return indigo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightBlue", function() { return lightBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cyan", function() { return cyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal", function() { return teal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green", function() { return green; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightGreen", function() { return lightGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lime", function() { return lime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow", function() { return yellow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amber", function() { return amber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orange", function() { return orange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepOrange", function() { return deepOrange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brown", function() { return brown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey", function() { return grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueGrey", function() { return blueGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkText", function() { return darkText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightText", function() { return lightText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkIcons", function() { return darkIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightIcons", function() { return lightIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return white; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "black", function() { return black; });
var red = {"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80","a200":"#ff5252","a400":"#ff1744","a700":"#d50000"};
var pink = {"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80ab","a200":"#ff4081","a400":"#f50057","a700":"#c51162"};
var purple = {"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fc","a200":"#e040fb","a400":"#d500f9","a700":"#aa00ff"};
var deepPurple = {"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ff","a200":"#7c4dff","a400":"#651fff","a700":"#6200ea"};
var indigo = {"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9eff","a200":"#536dfe","a400":"#3d5afe","a700":"#304ffe"};
var blue = {"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ff","a200":"#448aff","a400":"#2979ff","a700":"#2962ff"};
var lightBlue = {"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ff","a200":"#40c4ff","a400":"#00b0ff","a700":"#0091ea"};
var cyan = {"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffff","a200":"#18ffff","a400":"#00e5ff","a700":"#00b8d4"};
var teal = {"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeb","a200":"#64ffda","a400":"#1de9b6","a700":"#00bfa5"};
var green = {"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6ca","a200":"#69f0ae","a400":"#00e676","a700":"#00c853"};
var lightGreen = {"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90","a200":"#b2ff59","a400":"#76ff03","a700":"#64dd17"};
var lime = {"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81","a200":"#eeff41","a400":"#c6ff00","a700":"#aeea00"};
var yellow = {"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8d","a200":"#ffff00","a400":"#ffea00","a700":"#ffd600"};
var amber = {"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57f","a200":"#ffd740","a400":"#ffc400","a700":"#ffab00"};
var orange = {"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180","a200":"#ffab40","a400":"#ff9100","a700":"#ff6d00"};
var deepOrange = {"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80","a200":"#ff6e40","a400":"#ff3d00","a700":"#dd2c00"};
var brown = {"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"};
var grey = {"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"};
var blueGrey = {"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"};
var darkText = {"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","dividers":"rgba(0, 0, 0, 0.12)"};
var lightText = {"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","dividers":"rgba(255, 255, 255, 0.12)"};
var darkIcons = {"active":"rgba(0, 0, 0, 0.54)","inactive":"rgba(0, 0, 0, 0.38)"};
var lightIcons = {"active":"rgba(255, 255, 255, 1)","inactive":"rgba(255, 255, 255, 0.5)"};
var white = "#ffffff";
var black = "#000000";

/* harmony default export */ __webpack_exports__["default"] = {
  red: red,
  pink: pink,
  purple: purple,
  deepPurple: deepPurple,
  indigo: indigo,
  blue: blue,
  lightBlue: lightBlue,
  cyan: cyan,
  teal: teal,
  green: green,
  lightGreen: lightGreen,
  lime: lime,
  yellow: yellow,
  amber: amber,
  orange: orange,
  deepOrange: deepOrange,
  brown: brown,
  grey: grey,
  blueGrey: blueGrey,
  darkText: darkText,
  lightText: lightText,
  darkIcons: darkIcons,
  lightIcons: lightIcons,
  white: white,
  black: black
};


/***/ }),

/***/ 1389:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*!
 * @name JavaScript/NodeJS Merge v1.2.0
 * @author yeikos
 * @repository https://github.com/yeikos/js.merge

 * Copyright 2014 yeikos - MIT license
 * https://raw.github.com/yeikos/js.merge/master/LICENSE
 */

;(function(isNode) {

	/**
	 * Merge one or more objects 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	var Public = function(clone) {

		return merge(clone === true, false, arguments);

	}, publicName = 'merge';

	/**
	 * Merge two or more objects recursively 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	Public.recursive = function(clone) {

		return merge(clone === true, true, arguments);

	};

	/**
	 * Clone the input removing any reference
	 * @param mixed input
	 * @return mixed
	 */

	Public.clone = function(input) {

		var output = input,
			type = typeOf(input),
			index, size;

		if (type === 'array') {

			output = [];
			size = input.length;

			for (index=0;index<size;++index)

				output[index] = Public.clone(input[index]);

		} else if (type === 'object') {

			output = {};

			for (index in input)

				output[index] = Public.clone(input[index]);

		}

		return output;

	};

	/**
	 * Merge two objects recursively
	 * @param mixed input
	 * @param mixed extend
	 * @return mixed
	 */

	function merge_recursive(base, extend) {

		if (typeOf(base) !== 'object')

			return extend;

		for (var key in extend) {

			if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

				base[key] = merge_recursive(base[key], extend[key]);

			} else {

				base[key] = extend[key];

			}

		}

		return base;

	}

	/**
	 * Merge two or more objects
	 * @param bool clone
	 * @param bool recursive
	 * @param array argv
	 * @return object
	 */

	function merge(clone, recursive, argv) {

		var result = argv[0],
			size = argv.length;

		if (clone || typeOf(result) !== 'object')

			result = {};

		for (var index=0;index<size;++index) {

			var item = argv[index],

				type = typeOf(item);

			if (type !== 'object') continue;

			for (var key in item) {

				var sitem = clone ? Public.clone(item[key]) : item[key];

				if (recursive) {

					result[key] = merge_recursive(result[key], sitem);

				} else {

					result[key] = sitem;

				}

			}

		}

		return result;

	}

	/**
	 * Get type of variable
	 * @param mixed input
	 * @return string
	 *
	 * @see http://jsperf.com/typeofvar
	 */

	function typeOf(input) {

		return ({}).toString.call(input).slice(8, -1).toLowerCase();

	}

	if (isNode) {

		module.exports = Public;

	} else {

		window[publicName] = Public;

	}

})(typeof module === 'object' && module && typeof module.exports === 'object' && module.exports);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(594)(module)))

/***/ }),

/***/ 1399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkboard = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _checkboard = __webpack_require__(1689);

var checkboard = _interopRequireWildcard(_checkboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkboard = exports.Checkboard = function Checkboard(_ref) {
  var white = _ref.white,
      grey = _ref.grey,
      size = _ref.size,
      renderers = _ref.renderers;

  var styles = (0, _reactcss2.default)({
    'default': {
      grid: {
        absolute: '0px 0px 0px 0px',
        background: 'url(' + checkboard.get(white, grey, size, renderers.canvas) + ') center left'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.grid });
};

Checkboard.defaultProps = {
  size: 8,
  white: 'transparent',
  grey: 'rgba(0,0,0,.08)',
  renderers: {}
};

exports.default = Checkboard;

/***/ }),

/***/ 1400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorWrap = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _debounce = __webpack_require__(1380);

var _debounce2 = _interopRequireDefault(_debounce);

var _color = __webpack_require__(1180);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorWrap = exports.ColorWrap = function ColorWrap(Picker) {
  var ColorPicker = function (_ref) {
    _inherits(ColorPicker, _ref);

    function ColorPicker(props) {
      _classCallCheck(this, ColorPicker);

      var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));

      _this.handleChange = function (data, event) {
        var isValidColor = _color2.default.simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = _color2.default.toState(data, data.h || _this.state.oldHue);
          _this.setState(colors);
          _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors, event);
          _this.props.onChange && _this.props.onChange(colors, event);
        }
      };

      _this.state = _extends({}, _color2.default.toState(props.color, 0), {
        visible: props.display
      });

      _this.debounce = (0, _debounce2.default)(function (fn, data, event) {
        fn(data, event);
      }, 100);
      return _this;
    }

    _createClass(ColorPicker, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.setState(_extends({}, _color2.default.toState(nextProps.color, this.state.oldHue), {
          visible: nextProps.display
        }));
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Picker, _extends({}, this.props, this.state, { onChange: this.handleChange }));
      }
    }]);

    return ColorPicker;
  }(_react.PureComponent || _react.Component);

  ColorPicker.defaultProps = {
    color: {
      h: 250,
      s: 0.50,
      l: 0.20,
      a: 1
    }
  };

  return ColorPicker;
};

exports.default = ColorWrap;

/***/ }),

/***/ 1449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__(1166);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(1194);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(64);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(66);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(65);

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = __webpack_require__(78);

var _base2 = _interopRequireDefault(_base);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _breadcrumb = __webpack_require__(590);

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _reactCodemirror = __webpack_require__(1398);

var _reactCodemirror2 = _interopRequireDefault(_reactCodemirror);

var _tip = __webpack_require__(184);

var _tip2 = _interopRequireDefault(_tip);

var _theme = __webpack_require__(1248);

var _theme2 = _interopRequireDefault(_theme);

var _reactColor = __webpack_require__(1692);

var _theme3 = __webpack_require__(1223);

var _theme4 = _interopRequireDefault(_theme3);

var _reactBootstrapValidation = __webpack_require__(186);

__webpack_require__(1411);

__webpack_require__(1412);

__webpack_require__(1253);

__webpack_require__(1254);

__webpack_require__(1351);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (_Base) {
  (0, _inherits3.default)(_class2, _Base);

  function _class2() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Base.call.apply(_Base, [this].concat(args))), _this), _this.state = _this.initialState(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  _class2.prototype.initialState = function initialState() {
    return {
      list: [],
      themeConfig: {},
      theme: window.SysConfig.options.theme || 'firekylin'
    };
  };

  _class2.prototype.componentWillMount = function componentWillMount() {
    this.listenTo(_theme2.default, this.handleTrigger.bind(this));
    _theme4.default.list();
    this.state.themeConfig = {};
    if (window.SysConfig.options.themeConfig) {
      try {
        this.state.themeConfig = JSON.parse(window.SysConfig.options.themeConfig);
      } catch (e) {
        console.log(e);
      }
    }
  };

  _class2.prototype.handleTrigger = function handleTrigger(data, type) {
    switch (type) {
      case 'getThemeSuccess':
        this.setState({ list: data });
        break;
      case 'saveThemeSuccess':
      case 'saveThemeConfigSuccess':
        _tip2.default.success('设置成功');
        break;
    }
  };

  _class2.prototype.onValidSubmit = function onValidSubmit() {
    window.SysConfig.options.theme = this.state.theme;
    _theme4.default.save(this.state.theme);
  };

  _class2.prototype.saveThemeConfig = function saveThemeConfig(vals) {
    var data = (0, _assign2.default)({}, this.state.themeConfig, vals);
    window.SysConfig.options.themeConfig = data;
    _theme4.default.saveThemeConfig(data);
  };

  _class2.prototype.renderConfigElement = function renderConfigElement(element, i) {
    var _this2 = this;

    if (element.type === 'html') {
      element.type = 'htmlmixed';
    }

    switch (element.type) {
      case 'url':
      case 'text':
      case 'email':
      case 'textarea':
      case 'password':
        return _react2.default.createElement(_reactBootstrapValidation.ValidatedInput, (0, _extends3.default)({}, element, { key: i }));
        break;

      case 'radio':
        if (!Array.isArray(element.options)) {
          return null;
        }

        return _react2.default.createElement(
          RadioGroup,
          (0, _extends3.default)({}, element, { key: i }),
          element.options.map(function (opt, j) {
            return _react2.default.createElement(Radio, (0, _extends3.default)({}, opt, { key: j }));
          })
        );
        break;

      case 'checkbox':
        if (!Array.isArray(element.options)) {
          return null;
        }

        return _react2.default.createElement(
          'div',
          { className: 'form-group', key: i },
          _react2.default.createElement(
            'label',
            null,
            element.label
          ),
          _react2.default.createElement(
            'div',
            null,
            element.options.map(function (opt, j) {
              return _react2.default.createElement(
                'label',
                null,
                _react2.default.createElement('input', {
                  key: j,
                  type: 'checkbox',
                  className: 'form-control',
                  name: 'element.name[]',
                  value: opt.value ? opt.value : opt,
                  checked: Array.isArray(_this2.state.themeConfig[element.name]) && _this2.state.themeConfig[element.name].includes(opt.value || opt),
                  onChange: function onChange(e) {
                    var checked = e.target.checked;
                    var val = opt.value ? opt.value : opt;
                    if (Array.isArray(_this2.state.themeConfig[element.name])) {
                      if (checked) {
                        _this2.state.themeConfig[element.name].push(val);
                      } else {
                        _this2.state.themeConfig[element.name] = _this2.state.themeConfig[element.name].filter(function (v) {
                          return v !== val;
                        });
                      }
                    } else {
                      _this2.state.themeConfig[element.name] = [val];
                    }
                    return _this2.forceUpdate();
                  }
                }),
                opt.label ? opt.label : opt
              );
            })
          )
        );
        break;

      case 'select':
        if (!Array.isArray(element.options)) {
          return null;
        }

        return _react2.default.createElement(
          'div',
          { className: 'form-group', key: i },
          _react2.default.createElement(
            'label',
            null,
            element.label
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'select',
              {
                name: element.name,
                className: 'form-control',
                value: this.state.themeConfig[element.name],
                onChange: function onChange(e) {
                  _this2.state.themeConfig[element.name] = e.target.value;
                  _this2.forceUpdate();
                }
              },
              element.options.map(function (opt, j) {
                return _react2.default.createElement(
                  'option',
                  { key: j, value: opt.value ? opt.value : opt },
                  opt.label ? opt.label : opt
                );
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'help-block' },
              element.help ? element.help : ''
            )
          )
        );
        break;

      case 'color':
        return _react2.default.createElement(
          'div',
          { className: 'form-group react-color-picker', key: i },
          _react2.default.createElement(
            'label',
            null,
            element.label
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'swatch', onClick: function onClick() {
                  var _this2$setState;

                  return _this2.setState((_this2$setState = {}, _this2$setState['display' + element.name] = !_this2.state['display' + element.name], _this2$setState));
                } },
              _react2.default.createElement('div', { className: 'color', style: { backgroundColor: this.state.themeConfig[element.name] } })
            ),
            this.state['display' + element.name] ? _react2.default.createElement(
              'div',
              { className: 'popover-color' },
              _react2.default.createElement('div', { className: 'cover', onClick: function onClick() {
                  var _this2$setState2;

                  return _this2.setState((_this2$setState2 = {}, _this2$setState2['display' + element.name] = false, _this2$setState2));
                } }),
              _react2.default.createElement(_reactColor.SketchPicker, { color: this.state.themeConfig[element.name], onChangeComplete: function onChangeComplete(color) {
                  _this2.state.themeConfig[element.name] = color.hex;
                  _this2.forceUpdate();
                } })
            ) : null
          )
        );
        break;

      case 'css':
      case 'htmlmixed':
      case 'javascript':
        return _react2.default.createElement(
          'div',
          { className: 'form-group', key: i },
          _react2.default.createElement(
            'label',
            null,
            element.label
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reactCodemirror2.default, {
              options: {
                theme: 'monokai',
                lineNumbers: true,
                mode: element.type
              },
              value: this.state.themeConfig[element.name],
              onChange: function onChange(val) {
                _this2.state.themeConfig[element.name] = val;
                _this2.forceUpdate();
              }
            }),
            _react2.default.createElement(
              'div',
              { className: 'help-block' },
              element.help ? element.help : ''
            )
          )
        );
        break;
    }
  };

  _class2.prototype.renderThemeConfig = function renderThemeConfig() {
    var _this3 = this;

    if (this.state.list.length === 0) {
      return null;
    }

    var theme = this.state.list.filter(function (theme) {
      return theme.id === _this3.state.theme;
    })[0];
    if (!theme.configElements || !Array.isArray(theme.configElements)) {
      return null;
    }

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h3',
        { style: { marginBottom: '20px' } },
        theme.name,
        ' \u4E3B\u9898\u9009\u9879'
      ),
      _react2.default.createElement(
        _reactBootstrapValidation.Form,
        {
          model: this.state.themeConfig,
          className: 'clearfix options-general',
          onValidSubmit: this.saveThemeConfig.bind(this)
        },
        theme.configElements.map(this.renderConfigElement.bind(this)),
        _react2.default.createElement(
          'button',
          { type: 'submit', className: 'btn btn-primary' },
          '\u4FDD\u5B58\u914D\u7F6E'
        )
      )
    );
  };

  _class2.prototype.render = function render() {
    var _this4 = this;

    return _react2.default.createElement(
      'div',
      { className: 'fk-content-wrap' },
      _react2.default.createElement(_breadcrumb2.default, this.props),
      _react2.default.createElement(
        'div',
        { className: 'manage-container' },
        _react2.default.createElement(
          'h3',
          { style: { marginBottom: '20px' } },
          '\u4E3B\u9898\u8BBE\u7F6E'
        ),
        _react2.default.createElement(
          _reactBootstrapValidation.Form,
          {
            className: 'clearfix options-general',
            onValidSubmit: this.onValidSubmit.bind(this)
          },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              '\u4E3B\u9898\u9009\u62E9\uFF1A'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'select',
                {
                  className: 'form-control',
                  value: this.state.theme,
                  onChange: function onChange(e) {
                    return _this4.setState({ theme: e.target.value });
                  }
                },
                this.state.list.map(function (opt, i) {
                  return _react2.default.createElement(
                    'option',
                    { key: i, value: opt.id },
                    opt.name,
                    ' - ',
                    opt.version
                  );
                })
              )
            )
          ),
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'btn btn-primary' },
            '\u63D0\u4EA4'
          )
        ),
        this.renderThemeConfig()
      )
    );
  };

  return _class2;
}(_base2.default);

/***/ }),

/***/ 1525:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1187),
    root = __webpack_require__(1172);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 1526:
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(1581),
    hashDelete = __webpack_require__(1582),
    hashGet = __webpack_require__(1583),
    hashHas = __webpack_require__(1584),
    hashSet = __webpack_require__(1585);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 1527:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1187),
    root = __webpack_require__(1172);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 1528:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1187),
    root = __webpack_require__(1172);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 1529:
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(1276),
    setCacheAdd = __webpack_require__(1606),
    setCacheHas = __webpack_require__(1607);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 1530:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1187),
    root = __webpack_require__(1172);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 1531:
/***/ (function(module, exports) {

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;


/***/ }),

/***/ 1532:
/***/ (function(module, exports) {

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;


/***/ }),

/***/ 1533:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ 1534:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ 1535:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1233),
    keys = __webpack_require__(1207);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ 1536:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1233),
    keysIn = __webpack_require__(1385);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ 1537:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(1277),
    arrayEach = __webpack_require__(1356),
    assignValue = __webpack_require__(1361),
    baseAssign = __webpack_require__(1535),
    baseAssignIn = __webpack_require__(1536),
    cloneBuffer = __webpack_require__(1560),
    copyArray = __webpack_require__(1567),
    copySymbols = __webpack_require__(1568),
    copySymbolsIn = __webpack_require__(1569),
    getAllKeys = __webpack_require__(1370),
    getAllKeysIn = __webpack_require__(1576),
    getTag = __webpack_require__(1372),
    initCloneArray = __webpack_require__(1586),
    initCloneByTag = __webpack_require__(1587),
    initCloneObject = __webpack_require__(1588),
    isArray = __webpack_require__(1169),
    isBuffer = __webpack_require__(1284),
    isObject = __webpack_require__(1167),
    keys = __webpack_require__(1207);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ 1538:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1167);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ 1539:
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(1572);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ 1540:
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(1539),
    keys = __webpack_require__(1207);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ 1541:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ 1542:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1186),
    isObjectLike = __webpack_require__(1188);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 1543:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(1277),
    equalArrays = __webpack_require__(1368),
    equalByTag = __webpack_require__(1574),
    equalObjects = __webpack_require__(1575),
    getTag = __webpack_require__(1372),
    isArray = __webpack_require__(1169),
    isBuffer = __webpack_require__(1284),
    isTypedArray = __webpack_require__(1384);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ 1544:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(1277),
    baseIsEqual = __webpack_require__(1366);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ 1545:
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(1383),
    isMasked = __webpack_require__(1590),
    isObject = __webpack_require__(1167),
    toSource = __webpack_require__(1379);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 1546:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1186),
    isLength = __webpack_require__(1285),
    isObjectLike = __webpack_require__(1188);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 1547:
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(1551),
    baseMatchesProperty = __webpack_require__(1552),
    identity = __webpack_require__(1381),
    isArray = __webpack_require__(1169),
    property = __webpack_require__(1624);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ 1548:
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(1282),
    nativeKeys = __webpack_require__(1602);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ 1549:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1167),
    isPrototype = __webpack_require__(1282),
    nativeKeysIn = __webpack_require__(1603);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ 1550:
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(1363),
    isArrayLike = __webpack_require__(1237);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ 1551:
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(1544),
    getMatchData = __webpack_require__(1577),
    matchesStrictComparable = __webpack_require__(1376);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ 1552:
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(1366),
    get = __webpack_require__(1618),
    hasIn = __webpack_require__(1619),
    isKey = __webpack_require__(1281),
    isStrictComparable = __webpack_require__(1374),
    matchesStrictComparable = __webpack_require__(1376),
    toKey = __webpack_require__(1236);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ 1553:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ 1554:
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(1364);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ 1555:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ 1556:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(1206),
    arrayMap = __webpack_require__(1358),
    isArray = __webpack_require__(1169),
    isSymbol = __webpack_require__(1238);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 1557:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 1558:
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ 1559:
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(1381);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ 1560:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1172);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(594)(module)))

/***/ }),

/***/ 1561:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(1278);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ 1562:
/***/ (function(module, exports, __webpack_require__) {

var addMapEntry = __webpack_require__(1531),
    arrayReduce = __webpack_require__(1360),
    mapToArray = __webpack_require__(1375);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

module.exports = cloneMap;


/***/ }),

/***/ 1563:
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ 1564:
/***/ (function(module, exports, __webpack_require__) {

var addSetEntry = __webpack_require__(1532),
    arrayReduce = __webpack_require__(1360),
    setToArray = __webpack_require__(1378);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

module.exports = cloneSet;


/***/ }),

/***/ 1565:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(1206);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ 1566:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(1278);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ 1567:
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ 1568:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1233),
    getSymbols = __webpack_require__(1280);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ 1569:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1233),
    getSymbolsIn = __webpack_require__(1371);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ 1570:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1172);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 1571:
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(1237);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 1572:
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ 1573:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1187);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ 1574:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(1206),
    Uint8Array = __webpack_require__(1355),
    eq = __webpack_require__(1283),
    equalArrays = __webpack_require__(1368),
    mapToArray = __webpack_require__(1375),
    setToArray = __webpack_require__(1378);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ 1575:
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(1370);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ 1576:
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(1365),
    getSymbolsIn = __webpack_require__(1371),
    keysIn = __webpack_require__(1385);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ 1577:
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(1374),
    keys = __webpack_require__(1207);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ 1578:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(1206);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 1579:
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 1580:
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(1367),
    isArguments = __webpack_require__(1382),
    isArray = __webpack_require__(1169),
    isIndex = __webpack_require__(1373),
    isLength = __webpack_require__(1285),
    toKey = __webpack_require__(1236);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ 1581:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(1235);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 1582:
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 1583:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(1235);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ 1584:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(1235);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 1585:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(1235);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 1586:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ 1587:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(1278),
    cloneDataView = __webpack_require__(1561),
    cloneMap = __webpack_require__(1562),
    cloneRegExp = __webpack_require__(1563),
    cloneSet = __webpack_require__(1564),
    cloneSymbol = __webpack_require__(1565),
    cloneTypedArray = __webpack_require__(1566);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ 1588:
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(1538),
    getPrototype = __webpack_require__(1279),
    isPrototype = __webpack_require__(1282);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ 1589:
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 1590:
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(1570);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 1591:
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 1592:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1232);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ 1593:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1232);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 1594:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1232);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 1595:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1232);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ 1596:
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(1526),
    ListCache = __webpack_require__(1231),
    Map = __webpack_require__(1275);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 1597:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(1234);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 1598:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(1234);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 1599:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(1234);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 1600:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(1234);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 1601:
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(1621);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ 1602:
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(1377);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 1603:
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 1604:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(1369);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(594)(module)))

/***/ }),

/***/ 1605:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 1606:
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ 1607:
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ 1608:
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(1231);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ 1609:
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ 1610:
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ 1611:
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ 1612:
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(1231),
    Map = __webpack_require__(1275),
    MapCache = __webpack_require__(1276);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ 1613:
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(1601);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ 1614:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(1628);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

module.exports = before;


/***/ }),

/***/ 1615:
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(1537);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ 1616:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1617);


/***/ }),

/***/ 1617:
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(1356),
    baseEach = __webpack_require__(1363),
    castFunction = __webpack_require__(1559),
    isArray = __webpack_require__(1169);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ 1618:
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(1364);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ 1619:
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(1541),
    hasPath = __webpack_require__(1580);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ 1620:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1186),
    getPrototype = __webpack_require__(1279),
    isObjectLike = __webpack_require__(1188);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 1621:
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(1276);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ 1622:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1172);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 1623:
/***/ (function(module, exports, __webpack_require__) {

var before = __webpack_require__(1614);

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

module.exports = once;


/***/ }),

/***/ 1624:
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(1553),
    basePropertyDeep = __webpack_require__(1554),
    isKey = __webpack_require__(1281),
    toKey = __webpack_require__(1236);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ 1625:
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 1626:
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(1380),
    isObject = __webpack_require__(1167);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ 1627:
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(1387);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ 1628:
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(1627);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ 1629:
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(1556);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 1648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlphaPicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1165);

var _AlphaPointer = __webpack_require__(1649);

var _AlphaPointer2 = _interopRequireDefault(_AlphaPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlphaPicker = exports.AlphaPicker = function AlphaPicker(_ref) {
  var rgb = _ref.rgb,
      hsl = _ref.hsl,
      width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      direction = _ref.direction,
      style = _ref.style,
      renderers = _ref.renderers,
      pointer = _ref.pointer;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      alpha: {
        radius: '2px',
        style: style
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'alpha-picker' },
    _react2.default.createElement(_common.Alpha, _extends({}, styles.alpha, {
      rgb: rgb,
      hsl: hsl,
      pointer: pointer,
      renderers: renderers,
      onChange: onChange,
      direction: direction
    }))
  );
};

AlphaPicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
  pointer: _AlphaPointer2.default
};

exports.default = (0, _common.ColorWrap)(AlphaPicker);

/***/ }),

/***/ 1649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlphaPointer = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlphaPointer = exports.AlphaPointer = function AlphaPointer(_ref) {
  var direction = _ref.direction;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    },
    'vertical': {
      picker: {
        transform: 'translate(-3px, -9px)'
      }
    }
  }, { vertical: direction === 'vertical' });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = AlphaPointer;

/***/ }),

/***/ 1650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(1180);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(1165);

var _BlockSwatches = __webpack_require__(1651);

var _BlockSwatches2 = _interopRequireDefault(_BlockSwatches);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Block = exports.Block = function Block(_ref) {
  var onChange = _ref.onChange,
      hex = _ref.hex,
      colors = _ref.colors,
      width = _ref.width,
      triangle = _ref.triangle;

  var handleChange = function handleChange(hexCode, e) {
    _color2.default.isValidHex(hexCode) && onChange({
      hex: hexCode,
      source: 'hex'
    }, e);
  };

  var styles = (0, _reactcss2.default)({
    'default': {
      card: {
        width: width,
        background: '#fff',
        boxShadow: '0 1px rgba(0,0,0,.1)',
        borderRadius: '6px',
        position: 'relative'
      },
      head: {
        height: '110px',
        background: hex,
        borderRadius: '6px 6px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      body: {
        padding: '10px'
      },
      label: {
        fontSize: '18px',
        color: '#fff'
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 10px 10px 10px',
        borderColor: 'transparent transparent ' + hex + ' transparent',
        position: 'absolute',
        top: '-10px',
        left: '50%',
        marginLeft: '-10px'
      },
      input: {
        width: '100%',
        fontSize: '12px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '22px',
        boxShadow: 'inset 0 0 0 1px #ddd',
        borderRadius: '4px',
        padding: '0 7px',
        boxSizing: 'border-box'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      }
    }
  }, { 'hide-triangle': triangle === 'hide' });

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'block-picker' },
    _react2.default.createElement('div', { style: styles.triangle }),
    _react2.default.createElement(
      'div',
      { style: styles.head },
      _react2.default.createElement(
        'div',
        { style: styles.label },
        hex
      )
    ),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      _react2.default.createElement(_BlockSwatches2.default, { colors: colors, onClick: handleChange }),
      _react2.default.createElement(_common.EditableInput, {
        placeholder: 'Hex Code',
        style: { input: styles.input },
        value: '',
        onChange: handleChange
      })
    )
  );
};

Block.defaultProps = {
  width: '170px',
  colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8'],
  triangle: 'top'
};

exports.default = (0, _common.ColorWrap)(Block);

/***/ }),

/***/ 1651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockSwatches = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(1173);

var _map2 = _interopRequireDefault(_map);

var _common = __webpack_require__(1165);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockSwatches = exports.BlockSwatches = function BlockSwatches(_ref) {
  var colors = _ref.colors,
      onClick = _ref.onClick;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatches: {
        marginRight: '-10px'
      },
      swatch: {
        width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.swatches },
    (0, _map2.default)(colors, function (c) {
      return _react2.default.createElement(_common.Swatch, {
        key: c,
        color: c,
        style: styles.swatch,
        onClick: onClick
      });
    }),
    _react2.default.createElement('div', { style: styles.clear })
  );
};

exports.default = BlockSwatches;

/***/ }),

/***/ 1652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chrome = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1165);

var _ChromeFields = __webpack_require__(1653);

var _ChromeFields2 = _interopRequireDefault(_ChromeFields);

var _ChromePointer = __webpack_require__(1654);

var _ChromePointer2 = _interopRequireDefault(_ChromePointer);

var _ChromePointerCircle = __webpack_require__(1655);

var _ChromePointerCircle2 = _interopRequireDefault(_ChromePointerCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chrome = exports.Chrome = function Chrome(_ref) {
  var onChange = _ref.onChange,
      disableAlpha = _ref.disableAlpha,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hsv = _ref.hsv,
      hex = _ref.hex,
      renderers = _ref.renderers;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        background: '#fff',
        borderRadius: '2px',
        boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
        boxSizing: 'initial',
        width: '225px',
        fontFamily: 'Menlo'
      },
      saturation: {
        width: '100%',
        paddingBottom: '55%',
        position: 'relative',
        borderRadius: '2px 2px 0 0',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '2px 2px 0 0'
      },
      body: {
        padding: '16px 16px 12px'
      },
      controls: {
        display: 'flex'
      },
      color: {
        width: '32px'
      },
      swatch: {
        marginTop: '6px',
        width: '16px',
        height: '16px',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden'
      },
      active: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
        background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + rgb.a + ')',
        zIndex: '2'
      },
      toggles: {
        flex: '1'
      },
      hue: {
        height: '10px',
        position: 'relative',
        marginBottom: '8px'
      },
      Hue: {
        radius: '2px'
      },
      alpha: {
        height: '10px',
        position: 'relative'
      },
      Alpha: {
        radius: '2px'
      }
    },
    'disableAlpha': {
      color: {
        width: '22px'
      },
      alpha: {
        display: 'none'
      },
      hue: {
        marginBottom: '0px'
      },
      swatch: {
        width: '10px',
        height: '10px',
        marginTop: '0px'
      }
    }
  }, { disableAlpha: disableAlpha });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'chrome-picker' },
    _react2.default.createElement(
      'div',
      { style: styles.saturation },
      _react2.default.createElement(_common.Saturation, {
        style: styles.Saturation,
        hsl: hsl,
        hsv: hsv,
        pointer: _ChromePointerCircle2.default,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      _react2.default.createElement(
        'div',
        { style: styles.controls, className: 'flexbox-fix' },
        _react2.default.createElement(
          'div',
          { style: styles.color },
          _react2.default.createElement(
            'div',
            { style: styles.swatch },
            _react2.default.createElement('div', { style: styles.active }),
            _react2.default.createElement(_common.Checkboard, { renderers: renderers })
          )
        ),
        _react2.default.createElement(
          'div',
          { style: styles.toggles },
          _react2.default.createElement(
            'div',
            { style: styles.hue },
            _react2.default.createElement(_common.Hue, {
              style: styles.Hue,
              hsl: hsl,
              pointer: _ChromePointer2.default,
              onChange: onChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.alpha },
            _react2.default.createElement(_common.Alpha, {
              style: styles.Alpha,
              rgb: rgb,
              hsl: hsl,
              pointer: _ChromePointer2.default,
              renderers: renderers,
              onChange: onChange
            })
          )
        )
      ),
      _react2.default.createElement(_ChromeFields2.default, {
        rgb: rgb,
        hsl: hsl,
        hex: hex,
        onChange: onChange,
        disableAlpha: disableAlpha
      })
    )
  );
};

exports.default = (0, _common.ColorWrap)(Chrome);

/***/ }),

/***/ 1653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChromeFields = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(1180);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(1165);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-did-mount-set-state, no-param-reassign */

var ChromeFields = exports.ChromeFields = function (_React$Component) {
  _inherits(ChromeFields, _React$Component);

  function ChromeFields() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChromeFields);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChromeFields.__proto__ || Object.getPrototypeOf(ChromeFields)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: ''
    }, _this.toggleViews = function () {
      if (_this.state.view === 'hex') {
        _this.setState({ view: 'rgb' });
      } else if (_this.state.view === 'rgb') {
        _this.setState({ view: 'hsl' });
      } else if (_this.state.view === 'hsl') {
        if (_this.props.hsl.a === 1) {
          _this.setState({ view: 'hex' });
        } else {
          _this.setState({ view: 'rgb' });
        }
      }
    }, _this.handleChange = function (data, e) {
      if (data.hex) {
        _color2.default.isValidHex(data.hex) && _this.props.onChange({
          hex: data.hex,
          source: 'hex'
        }, e);
      } else if (data.r || data.g || data.b) {
        _this.props.onChange({
          r: data.r || _this.props.rgb.r,
          g: data.g || _this.props.rgb.g,
          b: data.b || _this.props.rgb.b,
          source: 'rgb'
        }, e);
      } else if (data.a) {
        if (data.a < 0) {
          data.a = 0;
        } else if (data.a > 1) {
          data.a = 1;
        }

        _this.props.onChange({
          h: _this.props.hsl.h,
          s: _this.props.hsl.s,
          l: _this.props.hsl.l,
          a: Math.round(data.a * 100) / 100,
          source: 'rgb'
        }, e);
      } else if (data.h || data.s || data.l) {
        _this.props.onChange({
          h: data.h || _this.props.hsl.h,
          s: data.s && data.s.replace('%', '') || _this.props.hsl.s,
          l: data.l && data.l.replace('%', '') || _this.props.hsl.l,
          source: 'hsl'
        }, e);
      }
    }, _this.showHighlight = function (e) {
      e.target.style.background = '#eee';
    }, _this.hideHighlight = function (e) {
      e.target.style.background = 'transparent';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChromeFields, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.hsl.a === 1 && this.state.view !== 'hex') {
        this.setState({ view: 'hex' });
      } else if (this.state.view !== 'rgb' && this.state.view !== 'hsl') {
        this.setState({ view: 'rgb' });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.hsl.a !== 1 && this.state.view === 'hex') {
        this.setState({ view: 'rgb' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = (0, _reactcss2.default)({
        'default': {
          wrap: {
            paddingTop: '16px',
            display: 'flex'
          },
          fields: {
            flex: '1',
            display: 'flex',
            marginLeft: '-6px'
          },
          field: {
            paddingLeft: '6px',
            width: '100%'
          },
          alpha: {
            paddingLeft: '6px',
            width: '100%'
          },
          toggle: {
            width: '32px',
            textAlign: 'right',
            position: 'relative'
          },
          icon: {
            marginRight: '-4px',
            marginTop: '12px',
            cursor: 'pointer',
            position: 'relative'
          },
          iconHighlight: {
            position: 'absolute',
            width: '24px',
            height: '28px',
            background: '#eee',
            borderRadius: '4px',
            top: '10px',
            left: '12px',
            display: 'none'
          },
          input: {
            fontSize: '11px',
            color: '#333',
            width: '100%',
            borderRadius: '2px',
            border: 'none',
            boxShadow: 'inset 0 0 0 1px #dadada',
            height: '21px',
            textAlign: 'center'
          },
          label: {
            textTransform: 'uppercase',
            fontSize: '11px',
            lineHeight: '11px',
            color: '#969696',
            textAlign: 'center',
            display: 'block',
            marginTop: '12px'
          },
          svg: {
            width: '24px',
            height: '24px',
            border: '1px transparent solid',
            borderRadius: '5px'
          }
        },
        'disableAlpha': {
          alpha: {
            display: 'none'
          }
        }
      }, this.props, this.state);

      var fields = void 0;
      if (this.state.view === 'hex') {
        fields = _react2.default.createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'hex', value: this.props.hex,
              onChange: this.handleChange
            })
          )
        );
      } else if (this.state.view === 'rgb') {
        fields = _react2.default.createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'r',
              value: this.props.rgb.r,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'g',
              value: this.props.rgb.g,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'b',
              value: this.props.rgb.b,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.alpha },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'a',
              value: this.props.rgb.a,
              arrowOffset: 0.01,
              onChange: this.handleChange
            })
          )
        );
      } else if (this.state.view === 'hsl') {
        fields = _react2.default.createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'h',
              value: Math.round(this.props.hsl.h),
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 's',
              value: Math.round(this.props.hsl.s * 100) + '%',
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'l',
              value: Math.round(this.props.hsl.l * 100) + '%',
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.alpha },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'a',
              value: this.props.hsl.a,
              arrowOffset: 0.01,
              onChange: this.handleChange
            })
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { style: styles.wrap, className: 'flexbox-fix' },
        fields,
        _react2.default.createElement(
          'div',
          { style: styles.toggle },
          _react2.default.createElement(
            'div',
            { style: styles.icon, onClick: this.toggleViews, ref: 'icon' },
            _react2.default.createElement(
              'svg',
              {
                style: styles.svg,
                viewBox: '0 0 24 24',
                onMouseOver: this.showHighlight,
                onMouseEnter: this.showHighlight,
                onMouseOut: this.hideHighlight
              },
              _react2.default.createElement('path', {
                ref: 'iconUp',
                fill: '#333',
                d: 'M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z'
              }),
              _react2.default.createElement('path', {
                ref: 'iconDown',
                fill: '#333',
                d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15Z'
              })
            )
          )
        )
      );
    }
  }]);

  return ChromeFields;
}(_react2.default.Component);

exports.default = ChromeFields;

/***/ }),

/***/ 1654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChromePointer = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChromePointer = exports.ChromePointer = function ChromePointer() {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        transform: 'translate(-6px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = ChromePointer;

/***/ }),

/***/ 1655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChromePointerCircle = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChromePointerCircle = exports.ChromePointerCircle = function ChromePointerCircle() {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fff',
        transform: 'translate(-6px, -6px)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = ChromePointerCircle;

/***/ }),

/***/ 1656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(1173);

var _map2 = _interopRequireDefault(_map);

var _materialColors = __webpack_require__(1388);

var material = _interopRequireWildcard(_materialColors);

var _common = __webpack_require__(1165);

var _CircleSwatch = __webpack_require__(1657);

var _CircleSwatch2 = _interopRequireDefault(_CircleSwatch);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Circle = exports.Circle = function Circle(_ref) {
  var width = _ref.width,
      onChange = _ref.onChange,
      colors = _ref.colors,
      hex = _ref.hex,
      circleSize = _ref.circleSize,
      circleSpacing = _ref.circleSpacing;

  var styles = (0, _reactcss2.default)({
    'default': {
      card: {
        width: width,
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: -circleSpacing,
        marginBottom: -circleSpacing
      }
    }
  });

  var handleChange = function handleChange(hexCode, e) {
    return onChange({ hex: hexCode, source: 'hex' }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'circle-picker' },
    (0, _map2.default)(colors, function (c) {
      return _react2.default.createElement(_CircleSwatch2.default, {
        key: c,
        color: c,
        onClick: handleChange,
        active: hex === c.toLowerCase(),
        circleSize: circleSize,
        circleSpacing: circleSpacing
      });
    })
  );
};

Circle.defaultProps = {
  width: '252px',
  circleSize: 28,
  circleSpacing: 14,
  colors: [material.red['500'], material.pink['500'], material.purple['500'], material.deepPurple['500'], material.indigo['500'], material.blue['500'], material.lightBlue['500'], material.cyan['500'], material.teal['500'], material.green['500'], material.lightGreen['500'], material.lime['500'], material.yellow['500'], material.amber['500'], material.orange['500'], material.deepOrange['500'], material.brown['500'], material.blueGrey['500']]
};

exports.default = (0, _common.ColorWrap)(Circle);

/***/ }),

/***/ 1657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircleSwatch = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1165);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircleSwatch = exports.CircleSwatch = function CircleSwatch(_ref) {
  var color = _ref.color,
      onClick = _ref.onClick,
      hover = _ref.hover,
      active = _ref.active,
      circleSize = _ref.circleSize,
      circleSpacing = _ref.circleSpacing;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        width: circleSize,
        height: circleSize,
        marginRight: circleSpacing,
        marginBottom: circleSpacing,
        transform: 'scale(1)',
        transition: '100ms transform ease'
      },
      Swatch: {
        borderRadius: '50%',
        background: 'transparent',
        boxShadow: 'inset 0 0 0 ' + circleSize / 2 + 'px ' + color,
        transition: '100ms box-shadow ease'
      }
    },
    'hover': {
      swatch: {
        transform: 'scale(1.2)'
      }
    },
    'active': {
      Swatch: {
        boxShadow: 'inset 0 0 0 3px ' + color
      }
    }
  }, { hover: hover, active: active });

  return _react2.default.createElement(
    'div',
    { style: styles.swatch },
    _react2.default.createElement(_common.Swatch, { style: styles.Swatch, color: color, onClick: onClick })
  );
};

CircleSwatch.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
};

exports.default = (0, _reactcss.hover)(CircleSwatch);

/***/ }),

/***/ 1658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alpha = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _alpha = __webpack_require__(1688);

var alpha = _interopRequireWildcard(_alpha);

var _Checkboard = __webpack_require__(1399);

var _Checkboard2 = _interopRequireDefault(_Checkboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alpha = exports.Alpha = function (_ref) {
  _inherits(Alpha, _ref);

  function Alpha() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Alpha);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Alpha.__proto__ || Object.getPrototypeOf(Alpha)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e, skip) {
      var change = alpha.calculateChange(e, skip, _this.props, _this.refs.container);
      change && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e, true);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleChange);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alpha, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var rgb = this.props.rgb;
      var styles = (0, _reactcss2.default)({
        'default': {
          alpha: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius
          },
          checkboard: {
            absolute: '0px 0px 0px 0px',
            overflow: 'hidden'
          },
          gradient: {
            absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to right, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)',
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          container: {
            position: 'relative',
            height: '100%',
            margin: '0 3px'
          },
          pointer: {
            position: 'absolute',
            left: rgb.a * 100 + '%'
          },
          slider: {
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            marginTop: '1px',
            transform: 'translateX(-2px)'
          }
        },
        'vertical': {
          gradient: {
            background: 'linear-gradient(to bottom, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)'
          },
          pointer: {
            left: 0,
            top: rgb.a * 100 + '%'
          }
        },
        'overwrite': _extends({}, this.props.style)
      }, {
        vertical: this.props.direction === 'vertical',
        overwrite: true
      });

      return _react2.default.createElement(
        'div',
        { style: styles.alpha },
        _react2.default.createElement(
          'div',
          { style: styles.checkboard },
          _react2.default.createElement(_Checkboard2.default, { renderers: this.props.renderers })
        ),
        _react2.default.createElement('div', { style: styles.gradient }),
        _react2.default.createElement(
          'div',
          {
            style: styles.container,
            ref: 'container',
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleChange,
            onTouchStart: this.handleChange
          },
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })
          )
        )
      );
    }
  }]);

  return Alpha;
}(_react.PureComponent || _react.Component);

exports.default = Alpha;

/***/ }),

/***/ 1659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditableInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditableInput = exports.EditableInput = function (_ref) {
  _inherits(EditableInput, _ref);

  function EditableInput(props) {
    _classCallCheck(this, EditableInput);

    var _this = _possibleConstructorReturn(this, (EditableInput.__proto__ || Object.getPrototypeOf(EditableInput)).call(this));

    _this.handleBlur = function () {
      if (_this.state.blurValue) {
        _this.setState({ value: _this.state.blurValue, blurValue: null });
      }
    };

    _this.handleChange = function (e) {
      if (!!_this.props.label) {
        _this.props.onChange(_defineProperty({}, _this.props.label, e.target.value), e);
      } else {
        _this.props.onChange(e.target.value, e);
      }

      _this.setState({ value: e.target.value });
    };

    _this.handleKeyDown = function (e) {
      var number = Number(e.target.value);
      if (number) {
        var amount = _this.props.arrowOffset || 1;

        // Up
        if (e.keyCode === 38) {
          if (_this.props.label !== null) {
            _this.props.onChange(_defineProperty({}, _this.props.label, number + amount), e);
          } else {
            _this.props.onChange(number + amount, e);
          }

          _this.setState({ value: number + amount });
        }

        // Down
        if (e.keyCode === 40) {
          if (_this.props.label !== null) {
            _this.props.onChange(_defineProperty({}, _this.props.label, number - amount), e);
          } else {
            _this.props.onChange(number - amount, e);
          }

          _this.setState({ value: number - amount });
        }
      }
    };

    _this.handleDrag = function (e) {
      if (_this.props.dragLabel) {
        var newValue = Math.round(_this.props.value + e.movementX);
        if (newValue >= 0 && newValue <= _this.props.dragMax) {
          _this.props.onChange(_defineProperty({}, _this.props.label, newValue), e);
        }
      }
    };

    _this.handleMouseDown = function (e) {
      if (_this.props.dragLabel) {
        e.preventDefault();
        _this.handleDrag(e);
        window.addEventListener('mousemove', _this.handleDrag);
        window.addEventListener('mouseup', _this.handleMouseUp);
      }
    };

    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };

    _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleDrag);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    };

    _this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase()
    };
    return _this;
  }

  _createClass(EditableInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var input = this.refs.input;
      if (nextProps.value !== this.state.value) {
        if (input === document.activeElement) {
          this.setState({ blurValue: String(nextProps.value).toUpperCase() });
        } else {
          this.setState({ value: String(nextProps.value).toUpperCase() });
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = (0, _reactcss2.default)({
        'default': {
          wrap: {
            position: 'relative'
          }
        },
        'user-override': {
          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
          input: this.props.style && this.props.style.input ? this.props.style.input : {},
          label: this.props.style && this.props.style.label ? this.props.style.label : {}
        },
        'dragLabel-true': {
          label: {
            cursor: 'ew-resize'
          }
        }
      }, {
        'user-override': true
      }, this.props);

      return _react2.default.createElement(
        'div',
        { style: styles.wrap },
        _react2.default.createElement('input', {
          style: styles.input,
          ref: 'input',
          value: this.state.value,
          onKeyDown: this.handleKeyDown,
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          placeholder: this.props.placeholder
        }),
        this.props.label ? _react2.default.createElement(
          'span',
          { style: styles.label, onMouseDown: this.handleMouseDown },
          this.props.label
        ) : null
      );
    }
  }]);

  return EditableInput;
}(_react.PureComponent || _react.Component);

exports.default = EditableInput;

/***/ }),

/***/ 1660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hue = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _hue = __webpack_require__(1690);

var hue = _interopRequireWildcard(_hue);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hue = exports.Hue = function (_ref) {
  _inherits(Hue, _ref);

  function Hue() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Hue);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Hue.__proto__ || Object.getPrototypeOf(Hue)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e, skip) {
      var change = hue.calculateChange(e, skip, _this.props, _this.refs.container);
      change && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e, true);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Hue, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = (0, _reactcss2.default)({
        'default': {
          hue: {
            absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%,\n            #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
            borderRadius: this.props.radius,
            boxShadow: this.props.shadow
          },
          container: {
            margin: '0 2px',
            position: 'relative',
            height: '100%'
          },
          pointer: {
            position: 'absolute',
            left: this.props.hsl.h * 100 / 360 + '%'
          },
          slider: {
            marginTop: '1px',
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            transform: 'translateX(-2px)'
          }
        },
        'vertical': {
          hue: {
            background: 'linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n            #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)'
          },
          pointer: {
            left: '0px',
            top: -(this.props.hsl.h * 100 / 360) + 100 + '%'
          }
        }
      }, { vertical: this.props.direction === 'vertical' });

      return _react2.default.createElement(
        'div',
        { style: styles.hue },
        _react2.default.createElement(
          'div',
          {
            style: styles.container,
            ref: 'container',
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleChange,
            onTouchStart: this.handleChange
          },
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })
          )
        )
      );
    }
  }]);

  return Hue;
}(_react.PureComponent || _react.Component);

exports.default = Hue;

/***/ }),

/***/ 1661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Saturation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _throttle = __webpack_require__(1626);

var _throttle2 = _interopRequireDefault(_throttle);

var _saturation = __webpack_require__(1691);

var saturation = _interopRequireWildcard(_saturation);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Saturation = exports.Saturation = function (_ref) {
  _inherits(Saturation, _ref);

  function Saturation(props) {
    _classCallCheck(this, Saturation);

    var _this = _possibleConstructorReturn(this, (Saturation.__proto__ || Object.getPrototypeOf(Saturation)).call(this, props));

    _this.handleChange = function (e, skip) {
      _this.throttle(_this.props.onChange, saturation.calculateChange(e, skip, _this.props, _this.refs.container), e);
    };

    _this.handleMouseDown = function (e) {
      _this.handleChange(e, true);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    };

    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };

    _this.throttle = (0, _throttle2.default)(function (fn, data, e) {
      fn(data, e);
    }, 50);
    return _this;
  }

  _createClass(Saturation, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref2 = this.props.style || {},
          color = _ref2.color,
          white = _ref2.white,
          black = _ref2.black,
          pointer = _ref2.pointer,
          circle = _ref2.circle;

      var styles = (0, _reactcss2.default)({
        'default': {
          color: {
            absolute: '0px 0px 0px 0px',
            background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
            borderRadius: this.props.radius
          },
          white: {
            absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to right, #fff, rgba(255,255,255,0))'
          },
          black: {
            absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
            boxShadow: this.props.shadow
          },
          pointer: {
            position: 'absolute',
            top: -(this.props.hsv.v * 100) + 100 + '%',
            left: this.props.hsv.s * 100 + '%',
            cursor: 'default'
          },
          circle: {
            width: '4px',
            height: '4px',
            boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)',
            borderRadius: '50%',
            cursor: 'hand',
            transform: 'translate(-2px, -2px)'
          }
        },
        'custom': {
          color: color,
          white: white,
          black: black,
          pointer: pointer,
          circle: circle
        }
      }, { 'custom': !!this.props.style });

      return _react2.default.createElement(
        'div',
        {
          style: styles.color,
          ref: 'container',
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange
        },
        _react2.default.createElement(
          'div',
          { style: styles.white },
          _react2.default.createElement('div', { style: styles.black }),
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.circle })
          )
        )
      );
    }
  }]);

  return Saturation;
}(_react.PureComponent || _react.Component);

exports.default = Saturation;

/***/ }),

/***/ 1662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swatch = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swatch = exports.Swatch = function Swatch(_ref) {
  var color = _ref.color,
      style = _ref.style,
      onClick = _ref.onClick,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? color : _ref$title;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        background: color,
        height: '100%',
        width: '100%',
        cursor: 'pointer'
      }
    },
    'custom': {
      swatch: style
    }
  }, 'custom');

  var handleClick = function handleClick(e) {
    return onClick(color, e);
  };

  return _react2.default.createElement('div', { style: styles.swatch, onClick: handleClick, title: title });
};

exports.default = Swatch;

/***/ }),

/***/ 1663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Compact = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(1173);

var _map2 = _interopRequireDefault(_map);

var _color = __webpack_require__(1180);

var _color2 = _interopRequireDefault(_color);

var _reactMaterialDesign = __webpack_require__(1325);

var _common = __webpack_require__(1165);

var _CompactColor = __webpack_require__(1664);

var _CompactColor2 = _interopRequireDefault(_CompactColor);

var _CompactFields = __webpack_require__(1665);

var _CompactFields2 = _interopRequireDefault(_CompactFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Compact = exports.Compact = function Compact(_ref) {
  var onChange = _ref.onChange,
      colors = _ref.colors,
      hex = _ref.hex,
      rgb = _ref.rgb;

  var styles = (0, _reactcss2.default)({
    'default': {
      Compact: {
        background: '#f6f6f6',
        radius: '4px'
      },
      compact: {
        paddingTop: '5px',
        paddingLeft: '5px',
        boxSizing: 'initial',
        width: '240px'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      _color2.default.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else {
      onChange(data, e);
    }
  };

  return _react2.default.createElement(
    _reactMaterialDesign.Raised,
    { style: styles.Compact },
    _react2.default.createElement(
      'div',
      { style: styles.compact, className: 'compact-picker' },
      _react2.default.createElement(
        'div',
        null,
        (0, _map2.default)(colors, function (c) {
          return _react2.default.createElement(_CompactColor2.default, {
            key: c,
            color: c,
            active: c.toLowerCase() === hex,
            onClick: handleChange
          });
        }),
        _react2.default.createElement('div', { style: styles.clear })
      ),
      _react2.default.createElement(_CompactFields2.default, { hex: hex, rgb: rgb, onChange: handleChange })
    )
  );
};

Compact.defaultProps = {
  colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E']
};

exports.default = (0, _common.ColorWrap)(Compact);

/***/ }),

/***/ 1664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompactColor = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompactColor = exports.CompactColor = function CompactColor(_ref) {
  var color = _ref.color,
      onClick = _ref.onClick,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      color: {
        background: color,
        width: '15px',
        height: '15px',
        float: 'left',
        marginRight: '5px',
        marginBottom: '5px',
        position: 'relative',
        cursor: 'pointer'
      },
      dot: {
        absolute: '5px 5px 5px 5px',
        background: '#fff',
        borderRadius: '50%',
        opacity: '0'
      }
    },
    'active': {
      dot: {
        opacity: '1'
      }
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd'
      },
      dot: {
        background: '#000'
      }
    }
  }, { active: active, 'color-#FFFFFF': color === '#FFFFFF' });

  var handleClick = function handleClick(e) {
    return onClick({ hex: color }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.color, onClick: handleClick },
    _react2.default.createElement('div', { style: styles.dot })
  );
};

exports.default = CompactColor;

/***/ }),

/***/ 1665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompactFields = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1165);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompactFields = exports.CompactFields = function CompactFields(_ref) {
  var hex = _ref.hex,
      rgb = _ref.rgb,
      onChange = _ref.onChange;

  var styles = (0, _reactcss2.default)({
    'default': {
      fields: {
        display: 'flex',
        paddingBottom: '6px',
        paddingRight: '5px',
        position: 'relative'
      },
      active: {
        position: 'absolute',
        top: '6px',
        left: '5px',
        height: '9px',
        width: '9px',
        background: hex
      },
      HEXwrap: {
        flex: '6',
        position: 'relative'
      },
      HEXinput: {
        width: '80%',
        padding: '0px',
        paddingLeft: '20%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px'
      },
      HEXlabel: {
        display: 'none'
      },
      RGBwrap: {
        flex: '3',
        position: 'relative'
      },
      RGBinput: {
        width: '70%',
        padding: '0px',
        paddingLeft: '30%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px'
      },
      RGBlabel: {
        position: 'absolute',
        top: '3px',
        left: '0px',
        lineHeight: '16px',
        textTransform: 'uppercase',
        fontSize: '12px',
        color: '#999'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    } else {
      onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    }
  };

  return _react2.default.createElement(
    'div',
    { style: styles.fields, className: 'flexbox-fix' },
    _react2.default.createElement('div', { style: styles.active }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
      label: 'hex',
      value: hex,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'r',
      value: rgb.r,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'g',
      value: rgb.g,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'b',
      value: rgb.b,
      onChange: handleChange
    })
  );
};

exports.default = CompactFields;

/***/ }),

/***/ 1666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Github = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(1173);

var _map2 = _interopRequireDefault(_map);

var _common = __webpack_require__(1165);

var _GithubSwatch = __webpack_require__(1667);

var _GithubSwatch2 = _interopRequireDefault(_GithubSwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Github = exports.Github = function Github(_ref) {
  var width = _ref.width,
      colors = _ref.colors,
      onChange = _ref.onChange,
      triangle = _ref.triangle;

  var styles = (0, _reactcss2.default)({
    'default': {
      card: {
        width: width,
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.2)',
        boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
        borderRadius: '4px',
        position: 'relative',
        padding: '5px',
        display: 'flex',
        flexWrap: 'wrap'
      },
      triangle: {
        position: 'absolute',
        border: '7px solid transparent',
        borderBottomColor: '#fff'
      },
      triangleShadow: {
        position: 'absolute',
        border: '8px solid transparent',
        borderBottomColor: 'rgba(0,0,0,0.15)'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      },
      triangleShadow: {
        display: 'none'
      }
    },
    'top-left-triangle': {
      triangle: {
        top: '-14px',
        left: '10px'
      },
      triangleShadow: {
        top: '-16px',
        left: '9px'
      }
    },
    'top-right-triangle': {
      triangle: {
        top: '-14px',
        right: '10px'
      },
      triangleShadow: {
        top: '-16px',
        right: '9px'
      }
    }
  }, {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right'
  });

  var handleChange = function handleChange(hex, e) {
    return onChange({ hex: hex, source: 'hex' }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'github-picker' },
    _react2.default.createElement('div', { style: styles.triangleShadow }),
    _react2.default.createElement('div', { style: styles.triangle }),
    (0, _map2.default)(colors, function (c) {
      return _react2.default.createElement(_GithubSwatch2.default, { color: c, key: c, onClick: handleChange });
    })
  );
};

Github.defaultProps = {
  width: '200px',
  colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'],
  triangle: 'top-left'
};

exports.default = (0, _common.ColorWrap)(Github);

/***/ }),

/***/ 1667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GithubSwatch = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1165);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubSwatch = exports.GithubSwatch = function GithubSwatch(_ref) {
  var hover = _ref.hover,
      color = _ref.color,
      onClick = _ref.onClick;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        width: '25px',
        height: '25px'
      }
    },
    'hover': {
      swatch: {
        position: 'relative',
        zIndex: '2',
        outline: '2px solid #fff',
        boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'
      }
    }
  }, { hover: hover });

  return _react2.default.createElement(
    'div',
    { style: styles.swatch },
    _react2.default.createElement(_common.Swatch, { color: color, onClick: onClick })
  );
};

exports.default = (0, _reactcss.hover)(GithubSwatch);

/***/ }),

/***/ 1668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HuePicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1165);

var _HuePointer = __webpack_require__(1669);

var _HuePointer2 = _interopRequireDefault(_HuePointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HuePicker = exports.HuePicker = function HuePicker(_ref) {
  var width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      hsl = _ref.hsl,
      direction = _ref.direction,
      pointer = _ref.pointer;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      hue: {
        radius: '2px'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'hue-picker' },
    _react2.default.createElement(_common.Hue, _extends({}, styles.hue, {
      hsl: hsl,
      pointer: pointer,
      onChange: onChange,
      direction: direction
    }))
  );
};

HuePicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
  pointer: _HuePointer2.default
};

exports.default = (0, _common.ColorWrap)(HuePicker);

/***/ }),

/***/ 1669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderPointer = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderPointer = exports.SliderPointer = function SliderPointer(_ref) {
  var direction = _ref.direction;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    },
    'vertical': {
      picker: {
        transform: 'translate(-3px, -9px)'
      }
    }
  }, { vertical: direction === 'vertical' });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = SliderPointer;

/***/ }),

/***/ 1670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Material = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(1180);

var _color2 = _interopRequireDefault(_color);

var _reactMaterialDesign = __webpack_require__(1325);

var _common = __webpack_require__(1165);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Material = exports.Material = function Material(_ref) {
  var onChange = _ref.onChange,
      hex = _ref.hex,
      rgb = _ref.rgb;

  var styles = (0, _reactcss2.default)({
    'default': {
      material: {
        width: '98px',
        height: '98px',
        padding: '16px',
        fontFamily: 'Roboto'
      },
      HEXwrap: {
        position: 'relative'
      },
      HEXinput: {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        borderBottom: '2px solid ' + hex,
        outline: 'none',
        height: '30px'
      },
      HEXlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        textTransform: 'capitalize'
      },
      Hex: {
        style: {}
      },
      RGBwrap: {
        position: 'relative'
      },
      RGBinput: {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        borderBottom: '1px solid #eee',
        outline: 'none',
        height: '30px'
      },
      RGBlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        textTransform: 'capitalize'
      },
      split: {
        display: 'flex',
        marginRight: '-10px',
        paddingTop: '11px'
      },
      third: {
        flex: '1',
        paddingRight: '10px'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      _color2.default.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    }
  };

  return _react2.default.createElement(
    _reactMaterialDesign.Raised,
    null,
    _react2.default.createElement(
      'div',
      { style: styles.material, className: 'material-picker' },
      _react2.default.createElement(_common.EditableInput, {
        style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
        label: 'hex',
        value: hex,
        onChange: handleChange
      }),
      _react2.default.createElement(
        'div',
        { style: styles.split, className: 'flexbox-fix' },
        _react2.default.createElement(
          'div',
          { style: styles.third },
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'r', value: rgb.r,
            onChange: handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.third },
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'g',
            value: rgb.g,
            onChange: handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.third },
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'b',
            value: rgb.b,
            onChange: handleChange
          })
        )
      )
    )
  );
};

exports.default = (0, _common.ColorWrap)(Material);

/***/ }),

/***/ 1671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Photoshop = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1165);

var _PhotoshopFields = __webpack_require__(1673);

var _PhotoshopFields2 = _interopRequireDefault(_PhotoshopFields);

var _PhotoshopPointerCircle = __webpack_require__(1675);

var _PhotoshopPointerCircle2 = _interopRequireDefault(_PhotoshopPointerCircle);

var _PhotoshopPointer = __webpack_require__(1674);

var _PhotoshopPointer2 = _interopRequireDefault(_PhotoshopPointer);

var _PhotoshopButton = __webpack_require__(1672);

var _PhotoshopButton2 = _interopRequireDefault(_PhotoshopButton);

var _PhotoshopPreviews = __webpack_require__(1676);

var _PhotoshopPreviews2 = _interopRequireDefault(_PhotoshopPreviews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Photoshop = exports.Photoshop = function (_React$Component) {
  _inherits(Photoshop, _React$Component);

  function Photoshop(props) {
    _classCallCheck(this, Photoshop);

    var _this = _possibleConstructorReturn(this, (Photoshop.__proto__ || Object.getPrototypeOf(Photoshop)).call(this));

    _this.state = {
      currentColor: props.hex
    };
    return _this;
  }

  _createClass(Photoshop, [{
    key: 'render',
    value: function render() {
      var styles = (0, _reactcss2.default)({
        'default': {
          picker: {
            background: '#DCDCDC',
            borderRadius: '4px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
            boxSizing: 'initial',
            width: '513px'
          },
          head: {
            backgroundImage: 'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
            borderBottom: '1px solid #B1B1B1',
            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
            height: '23px',
            lineHeight: '24px',
            borderRadius: '4px 4px 0 0',
            fontSize: '13px',
            color: '#4D4D4D',
            textAlign: 'center'
          },
          body: {
            padding: '15px 15px 0',
            display: 'flex'
          },
          saturation: {
            width: '256px',
            height: '256px',
            position: 'relative',
            border: '2px solid #B3B3B3',
            borderBottom: '2px solid #F0F0F0',
            overflow: 'hidden'
          },
          hue: {
            position: 'relative',
            height: '256px',
            width: '19px',
            marginLeft: '10px',
            border: '2px solid #B3B3B3',
            borderBottom: '2px solid #F0F0F0'
          },
          controls: {
            width: '180px',
            marginLeft: '10px'
          },
          top: {
            display: 'flex'
          },
          previews: {
            width: '60px'
          },
          actions: {
            flex: '1',
            marginLeft: '20px'
          }
        }
      });

      return _react2.default.createElement(
        'div',
        { style: styles.picker, className: 'photoshop-picker' },
        _react2.default.createElement(
          'div',
          { style: styles.head },
          this.props.header
        ),
        _react2.default.createElement(
          'div',
          { style: styles.body, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.saturation },
            _react2.default.createElement(_common.Saturation, {
              hsl: this.props.hsl,
              hsv: this.props.hsv,
              pointer: _PhotoshopPointerCircle2.default,
              onChange: this.props.onChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.hue },
            _react2.default.createElement(_common.Hue, {
              direction: 'vertical',
              hsl: this.props.hsl,
              pointer: _PhotoshopPointer2.default,
              onChange: this.props.onChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.controls },
            _react2.default.createElement(
              'div',
              { style: styles.top, className: 'flexbox-fix' },
              _react2.default.createElement(
                'div',
                { style: styles.previews },
                _react2.default.createElement(_PhotoshopPreviews2.default, {
                  rgb: this.props.rgb,
                  currentColor: this.state.currentColor
                })
              ),
              _react2.default.createElement(
                'div',
                { style: styles.actions },
                _react2.default.createElement(_PhotoshopButton2.default, { label: 'OK', onClick: this.props.onAccept, active: true }),
                _react2.default.createElement(_PhotoshopButton2.default, { label: 'Cancel', onClick: this.props.onCancel }),
                _react2.default.createElement(_PhotoshopFields2.default, {
                  onChange: this.props.onChange,
                  rgb: this.props.rgb,
                  hsv: this.props.hsv,
                  hex: this.props.hex
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Photoshop;
}(_react2.default.Component);

Photoshop.defaultProps = {
  header: 'Color Picker'
};

exports.default = (0, _common.ColorWrap)(Photoshop);

/***/ }),

/***/ 1672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopBotton = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopBotton = exports.PhotoshopBotton = function PhotoshopBotton(_ref) {
  var onClick = _ref.onClick,
      label = _ref.label,
      children = _ref.children,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      button: {
        backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
        border: '1px solid #878787',
        borderRadius: '2px',
        height: '20px',
        boxShadow: '0 1px 0 0 #EAEAEA',
        fontSize: '14px',
        color: '#000',
        lineHeight: '20px',
        textAlign: 'center',
        marginBottom: '10px',
        cursor: 'pointer'
      }
    },
    'active': {
      button: {
        boxShadow: '0 0 0 1px #878787'
      }
    }
  }, { active: active });

  return _react2.default.createElement(
    'div',
    { style: styles.button, onClick: onClick },
    label || children
  );
};

exports.default = PhotoshopBotton;

/***/ }),

/***/ 1673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopPicker = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(1180);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(1165);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPicker = exports.PhotoshopPicker = function PhotoshopPicker(_ref) {
  var onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsv = _ref.hsv,
      hex = _ref.hex;

  var styles = (0, _reactcss2.default)({
    'default': {
      fields: {
        paddingTop: '5px',
        paddingBottom: '9px',
        width: '80px',
        position: 'relative'
      },
      divider: {
        height: '5px'
      },
      RGBwrap: {
        position: 'relative'
      },
      RGBinput: {
        marginLeft: '40%',
        width: '40%',
        height: '18px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '5px',
        fontSize: '13px',
        paddingLeft: '3px',
        marginRight: '10px'
      },
      RGBlabel: {
        left: '0px',
        width: '34px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '18px',
        lineHeight: '22px',
        position: 'absolute'
      },
      HEXwrap: {
        position: 'relative'
      },
      HEXinput: {
        marginLeft: '20%',
        width: '80%',
        height: '18px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '6px',
        fontSize: '13px',
        paddingLeft: '3px'
      },
      HEXlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '14px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '18px',
        lineHeight: '22px'
      },
      fieldSymbols: {
        position: 'absolute',
        top: '5px',
        right: '-7px',
        fontSize: '13px'
      },
      symbol: {
        height: '20px',
        lineHeight: '22px',
        paddingBottom: '7px'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data['#']) {
      _color2.default.isValidHex(data['#']) && onChange({
        hex: data['#'],
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    } else if (data.h || data.s || data.v) {
      onChange({
        h: data.h || hsv.h,
        s: data.s || hsv.s,
        v: data.v || hsv.v,
        source: 'hsv'
      }, e);
    }
  };

  return _react2.default.createElement(
    'div',
    { style: styles.fields },
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'h',
      value: Math.round(hsv.h),
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 's',
      value: Math.round(hsv.s * 100),
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'v',
      value: Math.round(hsv.v * 100),
      onChange: handleChange
    }),
    _react2.default.createElement('div', { style: styles.divider }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'r',
      value: rgb.r,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'g',
      value: rgb.g,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'b',
      value: rgb.b,
      onChange: handleChange
    }),
    _react2.default.createElement('div', { style: styles.divider }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
      label: '#',
      value: hex.replace('#', ''),
      onChange: handleChange
    }),
    _react2.default.createElement(
      'div',
      { style: styles.fieldSymbols },
      _react2.default.createElement(
        'div',
        { style: styles.symbol },
        '\xB0'
      ),
      _react2.default.createElement(
        'div',
        { style: styles.symbol },
        '%'
      ),
      _react2.default.createElement(
        'div',
        { style: styles.symbol },
        '%'
      )
    )
  );
};

exports.default = PhotoshopPicker;

/***/ }),

/***/ 1674:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopPointerCircle = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function PhotoshopPointerCircle() {
  var styles = (0, _reactcss2.default)({
    'default': {
      triangle: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '4px 0 4px 6px',
        borderColor: 'transparent transparent transparent #fff',
        position: 'absolute',
        top: '1px',
        left: '1px'
      },
      triangleBorder: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '5px 0 5px 8px',
        borderColor: 'transparent transparent transparent #555'
      },

      left: {
        Extend: 'triangleBorder',
        transform: 'translate(-13px, -4px)'
      },
      leftInside: {
        Extend: 'triangle',
        transform: 'translate(-8px, -5px)'
      },

      right: {
        Extend: 'triangleBorder',
        transform: 'translate(20px, -14px) rotate(180deg)'
      },
      rightInside: {
        Extend: 'triangle',
        transform: 'translate(-8px, -5px)'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.pointer },
    _react2.default.createElement(
      'div',
      { style: styles.left },
      _react2.default.createElement('div', { style: styles.leftInside })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.right },
      _react2.default.createElement('div', { style: styles.rightInside })
    )
  );
};

exports.default = PhotoshopPointerCircle;

/***/ }),

/***/ 1675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopPointerCircle = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function PhotoshopPointerCircle(_ref) {
  var hsl = _ref.hsl;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fff',
        transform: 'translate(-6px, -6px)'
      }
    },
    'black-outline': {
      picker: {
        boxShadow: 'inset 0 0 0 1px #000'
      }
    }
  }, { 'black-outline': hsl.l > 0.5 });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = PhotoshopPointerCircle;

/***/ }),

/***/ 1676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopPreviews = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPreviews = exports.PhotoshopPreviews = function PhotoshopPreviews(_ref) {
  var rgb = _ref.rgb,
      currentColor = _ref.currentColor;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatches: {
        border: '1px solid #B3B3B3',
        borderBottom: '1px solid #F0F0F0',
        marginBottom: '2px',
        marginTop: '1px'
      },
      new: {
        height: '34px',
        background: 'rgb(' + rgb.r + ',' + rgb.g + ', ' + rgb.b + ')',
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'
      },
      current: {
        height: '34px',
        background: currentColor,
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
      },
      label: {
        fontSize: '14px',
        color: '#000',
        textAlign: 'center'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: styles.label },
      'new'
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatches },
      _react2.default.createElement('div', { style: styles.new }),
      _react2.default.createElement('div', { style: styles.current })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.label },
      'current'
    )
  );
};

exports.default = PhotoshopPreviews;

/***/ }),

/***/ 1677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sketch = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1165);

var _SketchFields = __webpack_require__(1678);

var _SketchFields2 = _interopRequireDefault(_SketchFields);

var _SketchPresetColors = __webpack_require__(1679);

var _SketchPresetColors2 = _interopRequireDefault(_SketchPresetColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sketch = exports.Sketch = function Sketch(_ref) {
  var width = _ref.width,
      rgb = _ref.rgb,
      hex = _ref.hex,
      hsv = _ref.hsv,
      hsl = _ref.hsl,
      onChange = _ref.onChange,
      disableAlpha = _ref.disableAlpha,
      presetColors = _ref.presetColors,
      renderers = _ref.renderers;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: width,
        padding: '10px 10px 0',
        boxSizing: 'initial',
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'
      },
      saturation: {
        width: '100%',
        paddingBottom: '75%',
        position: 'relative',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '3px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      controls: {
        display: 'flex'
      },
      sliders: {
        padding: '4px 0',
        flex: '1'
      },
      color: {
        width: '24px',
        height: '24px',
        position: 'relative',
        marginTop: '4px',
        marginLeft: '4px',
        borderRadius: '3px'
      },
      activeColor: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '2px',
        background: 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      hue: {
        position: 'relative',
        height: '10px',
        overflow: 'hidden'
      },
      Hue: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },

      alpha: {
        position: 'relative',
        height: '10px',
        marginTop: '4px',
        overflow: 'hidden'
      },
      Alpha: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      }
    },
    'disableAlpha': {
      color: {
        height: '10px'
      },
      hue: {
        height: '10px'
      },
      alpha: {
        display: 'none'
      }
    }
  }, { disableAlpha: disableAlpha });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'sketch-picker' },
    _react2.default.createElement(
      'div',
      { style: styles.saturation },
      _react2.default.createElement(_common.Saturation, {
        style: styles.Saturation,
        hsl: hsl,
        hsv: hsv,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.controls, className: 'flexbox-fix' },
      _react2.default.createElement(
        'div',
        { style: styles.sliders },
        _react2.default.createElement(
          'div',
          { style: styles.hue },
          _react2.default.createElement(_common.Hue, {
            style: styles.Hue,
            hsl: hsl,
            onChange: onChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.alpha },
          _react2.default.createElement(_common.Alpha, {
            style: styles.Alpha,
            rgb: rgb,
            hsl: hsl,
            renderers: renderers,
            onChange: onChange
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { style: styles.color },
        _react2.default.createElement(_common.Checkboard, null),
        _react2.default.createElement('div', { style: styles.activeColor })
      )
    ),
    _react2.default.createElement(_SketchFields2.default, {
      rgb: rgb,
      hsl: hsl,
      hex: hex,
      onChange: onChange,
      disableAlpha: disableAlpha
    }),
    _react2.default.createElement(_SketchPresetColors2.default, { colors: presetColors, onClick: onChange })
  );
};

Sketch.defaultProps = {
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'],
  width: 200
};

exports.default = (0, _common.ColorWrap)(Sketch);

/***/ }),

/***/ 1678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShetchFields = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(1180);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(1165);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-param-reassign */

var ShetchFields = exports.ShetchFields = function ShetchFields(_ref) {
  var onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hex = _ref.hex,
      disableAlpha = _ref.disableAlpha;

  var styles = (0, _reactcss2.default)({
    'default': {
      fields: {
        display: 'flex',
        paddingTop: '4px'
      },
      single: {
        flex: '1',
        paddingLeft: '6px'
      },
      alpha: {
        flex: '1',
        paddingLeft: '6px'
      },
      double: {
        flex: '2'
      },
      input: {
        width: '80%',
        padding: '4px 10% 3px',
        border: 'none',
        boxShadow: 'inset 0 0 0 1px #ccc',
        fontSize: '11px'
      },
      label: {
        display: 'block',
        textAlign: 'center',
        fontSize: '11px',
        color: '#222',
        paddingTop: '3px',
        paddingBottom: '4px',
        textTransform: 'capitalize'
      }
    },
    'disableAlpha': {
      alpha: {
        display: 'none'
      }
    }
  }, { disableAlpha: disableAlpha });

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      _color2.default.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        a: rgb.a,
        source: 'rgb'
      }, e);
    } else if (data.a) {
      if (data.a < 0) {
        data.a = 0;
      } else if (data.a > 100) {
        data.a = 100;
      }

      data.a = data.a / 100;
      onChange({
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: data.a,
        source: 'rgb'
      }, e);
    }
  };

  return _react2.default.createElement(
    'div',
    { style: styles.fields, className: 'flexbox-fix' },
    _react2.default.createElement(
      'div',
      { style: styles.double },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'hex',
        value: hex.replace('#', ''),
        onChange: handleChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.single },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'r',
        value: rgb.r,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.single },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'g',
        value: rgb.g,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.single },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'b',
        value: rgb.b,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.alpha },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'a',
        value: Math.round(rgb.a * 100),
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '100'
      })
    )
  );
};

exports.default = ShetchFields;

/***/ }),

/***/ 1679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SketchPresetColors = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1165);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SketchPresetColors = exports.SketchPresetColors = function SketchPresetColors(_ref) {
  var colors = _ref.colors,
      onClick = _ref.onClick;

  var styles = (0, _reactcss2.default)({
    'default': {
      colors: {
        margin: '0 -10px',
        padding: '10px 0 0 10px',
        borderTop: '1px solid #eee',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative'
      },
      swatchWrap: {
        width: '16px',
        height: '16px',
        margin: '0 10px 10px 0'
      },
      swatch: {
        borderRadius: '3px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)'
      }
    },
    'no-presets': {
      colors: {
        display: 'none'
      }
    }
  }, {
    'no-presets': !colors || !colors.length
  });

  var handleClick = function handleClick(hex, e) {
    onClick({
      hex: hex,
      source: 'hex'
    }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.colors, className: 'flexbox-fix' },
    colors.map(function (colorObjOrString) {
      var c = typeof colorObjOrString === 'string' ? { color: colorObjOrString } : colorObjOrString;
      return _react2.default.createElement(
        'div',
        { key: c.color, style: styles.swatchWrap },
        _react2.default.createElement(_common.Swatch, _extends({}, c, {
          style: styles.swatch,
          onClick: handleClick
        }))
      );
    })
  );
};
SketchPresetColors.propTypes = {
  colors: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.shape({
    color: _react2.default.PropTypes.string,
    title: _react2.default.PropTypes.string
  })]))
};

exports.default = SketchPresetColors;

/***/ }),

/***/ 1680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1165);

var _SliderSwatches = __webpack_require__(1683);

var _SliderSwatches2 = _interopRequireDefault(_SliderSwatches);

var _SliderPointer = __webpack_require__(1681);

var _SliderPointer2 = _interopRequireDefault(_SliderPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slider = exports.Slider = function Slider(_ref) {
  var hsl = _ref.hsl,
      onChange = _ref.onChange,
      pointer = _ref.pointer;

  var styles = (0, _reactcss2.default)({
    'default': {
      hue: {
        height: '12px',
        position: 'relative'
      },
      Hue: {
        radius: '2px'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { className: 'slider-picker' },
    _react2.default.createElement(
      'div',
      { style: styles.hue },
      _react2.default.createElement(_common.Hue, {
        style: styles.Hue,
        hsl: hsl,
        pointer: pointer,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatches },
      _react2.default.createElement(_SliderSwatches2.default, { hsl: hsl, onClick: onChange })
    )
  );
};

Slider.defaultProps = {
  pointer: _SliderPointer2.default
};

exports.default = (0, _common.ColorWrap)(Slider);

/***/ }),

/***/ 1681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderPointer = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderPointer = exports.SliderPointer = function SliderPointer() {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '14px',
        height: '14px',
        borderRadius: '6px',
        transform: 'translate(-7px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = SliderPointer;

/***/ }),

/***/ 1682:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderSwatch = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderSwatch = exports.SliderSwatch = function SliderSwatch(_ref) {
  var hsl = _ref.hsl,
      offset = _ref.offset,
      onClick = _ref.onClick,
      active = _ref.active,
      first = _ref.first,
      last = _ref.last;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        height: '12px',
        background: 'hsl(' + hsl.h + ', 50%, ' + offset * 100 + '%)',
        cursor: 'pointer'
      }
    },
    'first': {
      swatch: {
        borderRadius: '2px 0 0 2px'
      }
    },
    'last': {
      swatch: {
        borderRadius: '0 2px 2px 0'
      }
    },
    'active': {
      swatch: {
        transform: 'scaleY(1.8)',
        borderRadius: '3.6px/2px'
      }
    }
  }, { active: active, first: first, last: last });

  var handleClick = function handleClick(e) {
    return onClick({
      h: hsl.h,
      s: 0.5,
      l: offset,
      source: 'hsl'
    }, e);
  };

  return _react2.default.createElement('div', { style: styles.swatch, onClick: handleClick });
};

exports.default = SliderSwatch;

/***/ }),

/***/ 1683:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderSwatches = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _SliderSwatch = __webpack_require__(1682);

var _SliderSwatch2 = _interopRequireDefault(_SliderSwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderSwatches = exports.SliderSwatches = function SliderSwatches(_ref) {
  var onClick = _ref.onClick,
      hsl = _ref.hsl;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatches: {
        marginTop: '20px'
      },
      swatch: {
        boxSizing: 'border-box',
        width: '20%',
        paddingRight: '1px',
        float: 'left'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.swatches },
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.80',
        active: Math.round(hsl.l * 100) / 100 === 0.80 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick,
        first: true
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.65',
        active: Math.round(hsl.l * 100) / 100 === 0.65 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.50',
        active: Math.round(hsl.l * 100) / 100 === 0.50 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.35',
        active: Math.round(hsl.l * 100) / 100 === 0.35 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.20',
        active: Math.round(hsl.l * 100) / 100 === 0.20 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick,
        last: true
      })
    ),
    _react2.default.createElement('div', { style: styles.clear })
  );
};

exports.default = SliderSwatches;

/***/ }),

/***/ 1684:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swatches = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(1173);

var _map2 = _interopRequireDefault(_map);

var _color = __webpack_require__(1180);

var _color2 = _interopRequireDefault(_color);

var _materialColors = __webpack_require__(1388);

var material = _interopRequireWildcard(_materialColors);

var _common = __webpack_require__(1165);

var _reactMaterialDesign = __webpack_require__(1325);

var _SwatchesGroup = __webpack_require__(1686);

var _SwatchesGroup2 = _interopRequireDefault(_SwatchesGroup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swatches = exports.Swatches = function Swatches(_ref) {
  var width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      colors = _ref.colors,
      hex = _ref.hex;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: width,
        height: height
      },
      overflow: {
        height: height,
        overflowY: 'scroll'
      },
      body: {
        padding: '16px 0 6px 16px'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    _color2.default.isValidHex(data) && onChange({
      hex: data,
      source: 'hex'
    }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'swatches-picker' },
    _react2.default.createElement(
      _reactMaterialDesign.Raised,
      null,
      _react2.default.createElement(
        'div',
        { style: styles.overflow },
        _react2.default.createElement(
          'div',
          { style: styles.body },
          (0, _map2.default)(colors, function (group) {
            return _react2.default.createElement(_SwatchesGroup2.default, {
              key: group.toString(),
              group: group,
              active: hex,
              onClick: handleChange
            });
          }),
          _react2.default.createElement('div', { style: styles.clear })
        )
      )
    )
  );
};

/* eslint-disable max-len */
Swatches.defaultProps = {
  width: 320,
  height: 240,
  colors: [[material.red['900'], material.red['700'], material.red['500'], material.red['300'], material.red['100']], [material.pink['900'], material.pink['700'], material.pink['500'], material.pink['300'], material.pink['100']], [material.purple['900'], material.purple['700'], material.purple['500'], material.purple['300'], material.purple['100']], [material.deepPurple['900'], material.deepPurple['700'], material.deepPurple['500'], material.deepPurple['300'], material.deepPurple['100']], [material.indigo['900'], material.indigo['700'], material.indigo['500'], material.indigo['300'], material.indigo['100']], [material.blue['900'], material.blue['700'], material.blue['500'], material.blue['300'], material.blue['100']], [material.lightBlue['900'], material.lightBlue['700'], material.lightBlue['500'], material.lightBlue['300'], material.lightBlue['100']], [material.cyan['900'], material.cyan['700'], material.cyan['500'], material.cyan['300'], material.cyan['100']], [material.teal['900'], material.teal['700'], material.teal['500'], material.teal['300'], material.teal['100']], ['#194D33', material.green['700'], material.green['500'], material.green['300'], material.green['100']], [material.lightGreen['900'], material.lightGreen['700'], material.lightGreen['500'], material.lightGreen['300'], material.lightGreen['100']], [material.lime['900'], material.lime['700'], material.lime['500'], material.lime['300'], material.lime['100']], [material.yellow['900'], material.yellow['700'], material.yellow['500'], material.yellow['300'], material.yellow['100']], [material.amber['900'], material.amber['700'], material.amber['500'], material.amber['300'], material.amber['100']], [material.orange['900'], material.orange['700'], material.orange['500'], material.orange['300'], material.orange['100']], [material.deepOrange['900'], material.deepOrange['700'], material.deepOrange['500'], material.deepOrange['300'], material.deepOrange['100']], [material.brown['900'], material.brown['700'], material.brown['500'], material.brown['300'], material.brown['100']], [material.blueGrey['900'], material.blueGrey['700'], material.blueGrey['500'], material.blueGrey['300'], material.blueGrey['100']], ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF']]
};

exports.default = (0, _common.ColorWrap)(Swatches);

/***/ }),

/***/ 1685:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwatchesColor = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwatchesColor = exports.SwatchesColor = function SwatchesColor(_ref) {
  var color = _ref.color,
      onClick = _ref.onClick,
      first = _ref.first,
      last = _ref.last,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      color: {
        width: '40px',
        height: '24px',
        cursor: 'pointer',
        background: color,
        marginBottom: '1px'
      },
      check: {
        fill: '#fff',
        marginLeft: '8px',
        display: 'none'
      }
    },
    'first': {
      color: {
        overflow: 'hidden',
        borderRadius: '2px 2px 0 0'
      }
    },
    'last': {
      color: {
        overflow: 'hidden',
        borderRadius: '0 0 2px 2px'
      }
    },
    'active': {
      check: {
        display: 'block'
      }
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #eee'
      },
      check: {
        fill: '#333'
      }
    }
  }, { first: first, last: last, active: active, 'color=#FFFFFF': color === '#FFFFFF' });

  var handleClick = function handleClick(e) {
    return onClick(color, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.color, onClick: handleClick },
    _react2.default.createElement(
      'div',
      { style: styles.check },
      _react2.default.createElement(
        'svg',
        { style: { width: '24px', height: '24px' }, viewBox: '0 0 24 24' },
        _react2.default.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
      )
    )
  );
};

exports.default = SwatchesColor;

/***/ }),

/***/ 1686:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwatchesGroup = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(1173);

var _map2 = _interopRequireDefault(_map);

var _SwatchesColor = __webpack_require__(1685);

var _SwatchesColor2 = _interopRequireDefault(_SwatchesColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwatchesGroup = exports.SwatchesGroup = function SwatchesGroup(_ref) {
  var onClick = _ref.onClick,
      group = _ref.group,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      group: {
        paddingBottom: '10px',
        width: '40px',
        float: 'left',
        marginRight: '10px'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.group },
    (0, _map2.default)(group, function (color, i) {
      return _react2.default.createElement(_SwatchesColor2.default, {
        key: color,
        color: color,
        active: color.toLowerCase() === active,
        first: i === 0,
        last: i === group.length - 1,
        onClick: onClick
      });
    })
  );
};

exports.default = SwatchesGroup;

/***/ }),

/***/ 1687:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Twitter = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(1173);

var _map2 = _interopRequireDefault(_map);

var _color = __webpack_require__(1180);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(1165);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Twitter = exports.Twitter = function Twitter(_ref) {
  var onChange = _ref.onChange,
      colors = _ref.colors,
      width = _ref.width,
      triangle = _ref.triangle;

  var styles = (0, _reactcss2.default)({
    'default': {
      card: {
        width: width,
        background: '#fff',
        border: '0 solid rgba(0,0,0,0.25)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
        borderRadius: '4px',
        position: 'relative'
      },
      body: {
        padding: '15px 9px 9px 15px'
      },
      label: {
        fontSize: '18px',
        color: '#fff'
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent #fff transparent',
        position: 'absolute'
      },
      triangleShadow: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',
        position: 'absolute'
      },
      hash: {
        background: '#F0F0F0',
        height: '30px',
        width: '30px',
        borderRadius: '4px 0 0 4px',
        float: 'left',
        color: '#98A1A4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      input: {
        width: '100px',
        fontSize: '14px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '28px',
        boxShadow: 'inset 0 0 0 1px #F0F0F0',
        borderRadius: '0 4px 4px 0',
        float: 'left',
        paddingLeft: '8px'
      },
      swatch: {
        width: '30px',
        height: '30px',
        float: 'left',
        borderRadius: '4px',
        margin: '0 6px 6px 0'
      },
      clear: {
        clear: 'both'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      },
      triangleShadow: {
        display: 'none'
      }
    },
    'top-left-triangle': {
      triangle: {
        top: '-10px',
        left: '12px'
      },
      triangleShadow: {
        top: '-11px',
        left: '12px'
      }
    },
    'top-right-triangle': {
      triangle: {
        top: '-10px',
        right: '12px'
      },
      triangleShadow: {
        top: '-11px',
        right: '12px'
      }
    }
  }, {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right'
  });

  var handleChange = function handleChange(hex, e) {
    _color2.default.isValidHex(hex) && onChange({
      hex: hex,
      source: 'hex'
    }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'twitter-picker' },
    _react2.default.createElement('div', { style: styles.triangleShadow }),
    _react2.default.createElement('div', { style: styles.triangle }),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      (0, _map2.default)(colors, function (c, i) {
        return _react2.default.createElement(_common.Swatch, {
          key: i,
          color: c,
          hex: c,
          style: styles.swatch,
          onClick: handleChange
        });
      }),
      _react2.default.createElement(
        'div',
        { style: styles.hash },
        '#'
      ),
      _react2.default.createElement(_common.EditableInput, {
        placeholder: 'ff691f',
        style: { input: styles.input },
        value: '',
        onChange: handleChange
      }),
      _react2.default.createElement('div', { style: styles.clear })
    )
  );
};

Twitter.defaultProps = {
  width: '276px',
  colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],
  triangle: 'top-left'
};

exports.default = (0, _common.ColorWrap)(Twitter);

/***/ }),

/***/ 1688:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateChange = calculateChange;
function calculateChange(e, skip, props, container) {
  !skip && e.preventDefault();
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (props.direction === 'vertical') {
    var a = void 0;
    if (top < 0) {
      a = 0;
    } else if (top > containerHeight) {
      a = 1;
    } else {
      a = Math.round(top * 100 / containerHeight) / 100;
    }

    if (props.hsl.a !== a) {
      return {
        h: props.hsl.h,
        s: props.hsl.s,
        l: props.hsl.l,
        a: a,
        source: 'rgb'
      };
    }
  } else {
    var _a = void 0;
    if (left < 0) {
      _a = 0;
    } else if (left > containerWidth) {
      _a = 1;
    } else {
      _a = Math.round(left * 100 / containerWidth) / 100;
    }

    if (props.a !== _a) {
      return {
        h: props.hsl.h,
        s: props.hsl.s,
        l: props.hsl.l,
        a: _a,
        source: 'rgb'
      };
    }
  }
  return null;
}

/***/ }),

/***/ 1689:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.get = get;
var checkboardCache = {};

function render(c1, c2, size, serverCanvas) {
  if (typeof document === 'undefined' && !serverCanvas) return null;
  var canvas = serverCanvas ? new serverCanvas() : document.createElement('canvas');
  canvas.width = canvas.height = size * 2;
  var ctx = canvas.getContext('2d');
  if (!ctx) return null; // If no context can be found, return early.
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
}

function get(c1, c2, size, serverCanvas) {
  var key = c1 + '-' + c2 + '-' + size + (serverCanvas ? '-server' : '');
  var checkboard = render(c1, c2, size, serverCanvas);

  if (checkboardCache[key]) {
    return checkboardCache[key];
  }
  checkboardCache[key] = checkboard;
  return checkboard;
}

/***/ }),

/***/ 1690:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateChange = calculateChange;
function calculateChange(e, skip, props, container) {
  !skip && e.preventDefault();
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (props.direction === 'vertical') {
    var h = void 0;
    if (top < 0) {
      h = 359;
    } else if (top > containerHeight) {
      h = 0;
    } else {
      var percent = -(top * 100 / containerHeight) + 100;
      h = 360 * percent / 100;
    }

    if (props.hsl.h !== h) {
      return {
        h: h,
        s: props.hsl.s,
        l: props.hsl.l,
        a: props.hsl.a,
        source: 'rgb'
      };
    }
  } else {
    var _h = void 0;
    if (left < 0) {
      _h = 0;
    } else if (left > containerWidth) {
      _h = 359;
    } else {
      var _percent = left * 100 / containerWidth;
      _h = 360 * _percent / 100;
    }

    if (props.hsl.h !== _h) {
      return {
        h: _h,
        s: props.hsl.s,
        l: props.hsl.l,
        a: props.hsl.a,
        source: 'rgb'
      };
    }
  }
  return null;
}

/***/ }),

/***/ 1691:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateChange = calculateChange;
function calculateChange(e, skip, props, container) {
  !skip && e.preventDefault();
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (left < 0) {
    left = 0;
  } else if (left > containerWidth) {
    left = containerWidth;
  } else if (top < 0) {
    top = 0;
  } else if (top > containerHeight) {
    top = containerHeight;
  }

  var saturation = left * 100 / containerWidth;
  var bright = -(top * 100 / containerHeight) + 100;

  return {
    h: props.hsl.h,
    s: saturation,
    v: bright,
    a: props.hsl.a,
    source: 'rgb'
  };
}

/***/ }),

/***/ 1692:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CustomPicker = exports.TwitterPicker = exports.SwatchesPicker = exports.SliderPicker = exports.SketchPicker = exports.PhotoshopPicker = exports.MaterialPicker = exports.HuePicker = exports.GithubPicker = exports.CompactPicker = exports.ChromePicker = exports.CirclePicker = exports.BlockPicker = exports.AlphaPicker = undefined;

var _Alpha = __webpack_require__(1648);

Object.defineProperty(exports, 'AlphaPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Alpha).default;
  }
});

var _Block = __webpack_require__(1650);

Object.defineProperty(exports, 'BlockPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Block).default;
  }
});

var _Circle = __webpack_require__(1656);

Object.defineProperty(exports, 'CirclePicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Circle).default;
  }
});

var _Chrome = __webpack_require__(1652);

Object.defineProperty(exports, 'ChromePicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Chrome).default;
  }
});

var _Compact = __webpack_require__(1663);

Object.defineProperty(exports, 'CompactPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Compact).default;
  }
});

var _Github = __webpack_require__(1666);

Object.defineProperty(exports, 'GithubPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Github).default;
  }
});

var _Hue = __webpack_require__(1668);

Object.defineProperty(exports, 'HuePicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Hue).default;
  }
});

var _Material = __webpack_require__(1670);

Object.defineProperty(exports, 'MaterialPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Material).default;
  }
});

var _Photoshop = __webpack_require__(1671);

Object.defineProperty(exports, 'PhotoshopPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Photoshop).default;
  }
});

var _Sketch = __webpack_require__(1677);

Object.defineProperty(exports, 'SketchPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Sketch).default;
  }
});

var _Slider = __webpack_require__(1680);

Object.defineProperty(exports, 'SliderPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Slider).default;
  }
});

var _Swatches = __webpack_require__(1684);

Object.defineProperty(exports, 'SwatchesPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Swatches).default;
  }
});

var _Twitter = __webpack_require__(1687);

Object.defineProperty(exports, 'TwitterPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Twitter).default;
  }
});

var _ColorWrap = __webpack_require__(1400);

Object.defineProperty(exports, 'CustomPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ColorWrap).default;
  }
});

var _Chrome2 = _interopRequireDefault(_Chrome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Chrome2.default;

/***/ }),

/***/ 1693:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _isString = __webpack_require__(1286);

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Link).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Link, [{
    key: 'handleClick',
    value: function handleClick(e) {
      if (this.props.onClick) {
        this.props.onClick(e, this.props.callbackValue);
      }
    }
  }, {
    key: 'render',
    value: function render() {

      var a;
      if ((0, _isString2.default)(this.props.onClick)) {
        a = _react2.default.createElement(
          'a',
          { style: { textDecoration: 'none' }, href: this.props.onClick, target: this.props.newTab && '_blank' },
          this.props.children
        );
      } else {
        a = _react2.default.createElement(
          'a',
          { style: { textDecoration: 'none' }, onClick: this.handleClick },
          this.props.children
        );
      }

      return a;
    }
  }]);

  return Link;
}(_react2.default.Component);

// Link.propTypes =
//   onClick: React.PropTypes.oneOfType(
//     React.PropTypes.string,
//     React.PropTypes.func
//   );

Link.defaultProps = {
  newTab: false
};

exports.default = Link;

/***/ }),

/***/ 1694:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node: true, esnext: true */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Raised = function (_React$Component) {
  _inherits(Raised, _React$Component);

  function Raised() {
    _classCallCheck(this, Raised);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Raised).apply(this, arguments));
  }

  _createClass(Raised, [{
    key: 'render',
    value: function render() {

      var styles = (0, _reactcss2.default)({
        'default': {
          wrap: {
            position: 'relative'
          },
          content: {
            position: 'relative'
          },
          bg: {
            absolute: '0px 0px 0px 0px',
            boxShadow: '0 ${ this.props.zDepth }px ${ this.props.zDepth * 4 }px rgba(0,0,0,.24)',
            borderRadius: this.props.radius,
            background: this.props.background
          }
        },
        'zDepth-0': {
          bg: {
            boxShadow: 'none'
          }
        },

        'zDepth-1': {
          bg: {
            boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)'
          }
        },
        'zDepth-2': {
          bg: {
            boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)'
          }
        },
        'zDepth-3': {
          bg: {
            boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)'
          }
        },
        'zDepth-4': {
          bg: {
            boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)'
          }
        },
        'zDepth-5': {
          bg: {
            boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)'
          }
        },
        'square': {
          bg: {
            borderRadius: '0'
          }
        },
        'circle': {
          bg: {
            borderRadius: '50%'
          }
        }
      }, this.props);

      return _react2.default.createElement(
        'div',
        { style: styles.wrap },
        _react2.default.createElement('div', { style: styles.bg }),
        _react2.default.createElement(
          'div',
          { style: styles.content },
          this.props.children
        )
      );
    }
  }]);

  return Raised;
}(_react2.default.Component);

Raised.propTypes = {
  background: _react2.default.PropTypes.string,
  zDepth: _react2.default.PropTypes.oneOf(['0', '1', '2', '3', '4', '5', 0, 1, 2, 3, 4, 5]),
  radius: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
};

Raised.defaultProps = {
  background: '#fff',
  zDepth: '1',
  radius: '2px'
};

exports.default = Raised;

/***/ }),

/***/ 1695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab() {
    _classCallCheck(this, Tab);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Tab, [{
    key: 'handleClick',
    value: function handleClick() {
      if (this.props.selectable !== false) {
        this.props.onClick(this.props.tab);
      }
    }
  }, {
    key: 'render',
    value: function render() {

      var styles = (0, _reactcss2.default)({
        'default': {
          tab: {
            color: this.props.inactive || this.props.color,
            cursor: 'pointer',
            paddingLeft: '12px',
            paddingRight: '12px',
            height: '48px',
            lineHeight: '48px',
            textAlign: 'center',
            fontSize: '14px',
            textTransform: this.props.capitalize === false ? '' : 'uppercase',
            fontWeight: '500',
            whiteSpace: 'nowrap',
            opacity: '.47',
            transition: 'opacity 100ms linear'
          }
        },
        'selected': {
          tab: {
            color: this.props.color,
            opacity: '.87'
          }
        }
      }, this.props);

      return _react2.default.createElement(
        'div',
        { style: styles.tab, onClick: this.handleClick },
        this.props.children
      );
    }
  }]);

  return Tab;
}(_react2.default.Component);

Tab.propTypes = {
  selected: _react2.default.PropTypes.bool
};

Tab.defaultProps = {
  selected: false,
  color: '#fff'
};

exports.default = Tab;

/***/ }),

/***/ 1696:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _isString = __webpack_require__(1286);

var _isString2 = _interopRequireDefault(_isString);

var _Tab = __webpack_require__(1695);

var _Tab2 = _interopRequireDefault(_Tab);

var _Link = __webpack_require__(1693);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var Ink = require('./Ink');

// var context = {
//   primaryColor: '#2196F3',
//   accentColor: '#E91E63',
//   theme: 'light'
// }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this));

    var selectedTab;
    if (props.selectedTab < (props.tabs && props.tabs.length)) {
      selectedTab = props.selectedTab;
    } else {
      selectedTab = 0;
    }

    _this.state = {
      selectedTab: selectedTab
    };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.slide = _this.slide.bind(_this);
    return _this;
  }

  _createClass(Tabs, [{
    key: 'handleClick',
    value: function handleClick(tab) {
      if (this.props.onChange) {
        this.props.onChange(tab);
      }

      this.setState({
        selectedTab: tab
      });
    }
  }, {
    key: 'slide',
    value: function slide() {
      if (this.props.tabs.length) {
        var containerNode = this.refs.tabs.getDOMNode();
        var containerLeft = containerNode.scrollLeft;
        var containerRight = containerNode.offsetWidth + containerNode.scrollLeft;

        var selectedNode = this.refs['tab-' + this.state.selectedTab] && this.refs['tab-' + this.state.selectedTab].getDOMNode();
        var selectedLeft = selectedNode && selectedNode.getBoundingClientRect().left - containerNode.getBoundingClientRect().left + containerNode.scrollLeft;
        var selectedRight = selectedNode && selectedLeft + selectedNode.offsetWidth;

        // scroll right if tab is off screen
        if (selectedRight > containerRight) {
          containerNode.scrollLeft += selectedRight - containerRight;
        }

        // scroll left if tab is off screen
        if (selectedLeft < containerLeft) {
          containerNode.scrollLeft -= containerLeft - selectedLeft;
        }

        // slide the indicator
        var indicator = this.refs.indicator;
        indicator.style.left = selectedLeft + 'px';
        indicator.style.width = selectedNode.offsetWidth + 'px';
        indicator.style.height = '2px';
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.slide();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selectedTab !== this.state.selectedTab) {
        this.setState({ selectedTab: nextProps.selectedTab });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.selectedTab >= (nextProps.tabs && nextProps.tabs.length)) {
        nextState.selectedTab = nextProps.tabs.length - 1;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.slide();
    }
  }, {
    key: 'render',
    value: function render() {

      var styles = (0, _reactcss2.default)({
        'default': {
          tabs: {
            position: 'relative',
            background: this.props.background
          },
          tabWrap: {
            display: 'flex'
          },
          tab: {
            justifyContent: 'flex-start',
            minWidth: '68px',
            maxWidth: '240px'
          },
          Tab: {
            color: this.props.color,
            inactive: this.props.inactive,
            capitalize: this.props.capitalize
          },
          indicator: {
            height: '0',
            position: 'absolute',
            bottom: '0',
            left: '0',
            background: this.props.color,
            transition: 'all 200ms linear'
          }
        },
        'scrollable': {
          tabs: {
            overflowX: 'scroll'
          },
          tabWrap: {
            paddingLeft: '60px',
            justifyContent: 'flex-start',
            width: '400%'
          },
          tab: {
            width: 'auto'
          }
        },
        'align-justify': {
          tabWrap: {
            justifyContent: 'space-between'
          },
          tab: {
            width: 100 / this.props.tabs.length + '%'
          }
        },
        'align-left': {
          tabWrap: {
            paddingLeft: '60px',
            justifyContent: 'flex-start'
          },
          tab: {
            width: 'auto'
          }
        },
        'align-center': {
          tabWrap: {
            justifyContent: 'center'
          },
          tab: {
            width: 'auto'
          }
        }
      }, {
        'scrollable': this.props.width / this.props.tabs.length < 72
      }, this.props, this.state);

      var tabs = [];
      for (var i = 0; i < this.props.tabs.length; i++) {
        var tab = this.props.tabs[i];

        var label;
        var callback;
        var callbackValue;
        var newTab;
        if ((0, _isString2.default)(tab)) {
          label = tab;
          callback = null;
        } else {
          label = tab.label;
          callback = tab.onClick;
          callbackValue = tab.callbackValue;
          newTab = tab.newTab;
        }

        tabs.push(_react2.default.createElement(
          'div',
          { style: styles.tab, ref: 'tab-' + i, key: i },
          _react2.default.createElement(
            _Link2.default,
            { onClick: callback, callbackValue: callbackValue, newTab: newTab },
            _react2.default.createElement(
              _Tab2.default,
              { style: styles.Tab, tab: i, selected: this.state.selectedTab === i, selectable: tab.selectable, onClick: this.handleClick },
              label
            )
          )
        ));
      }

      return _react2.default.createElement(
        'div',
        { style: styles.tabs, ref: 'tabs' },
        _react2.default.createElement(
          'div',
          { style: styles.tabWrap, className: 'flexbox-fix' },
          tabs
        ),
        _react2.default.createElement('div', { style: styles.indicator, ref: 'indicator' })
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.defaultProps = {
  selectedTab: 0,
  background: 'transparent',
  color: '#fff'
};

exports.default = Tabs;

/***/ }),

/***/ 1697:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node: true, esnext: true */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1164);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tile = function (_React$Component) {
  _inherits(Tile, _React$Component);

  function Tile() {
    _classCallCheck(this, Tile);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tile).apply(this, arguments));
  }

  _createClass(Tile, [{
    key: 'render',
    value: function render() {

      var styles = (0, _reactcss2.default)({
        'default': {
          tile: {
            fontSize: '16px',
            padding: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            color: this.props.color
          },
          primary: {
            display: 'flex',
            width: '100%'
          },
          sidebar: {
            minWidth: '56px',
            maxWidth: '56px',
            flexBasis: '56px' },
          // 72 minus 16
          content: {
            background: 'none',
            flex: '1',
            overflow: 'auto'
          },
          secondary: {
            flexBasis: '42',
            textAlign: 'center'
          },
          sidebarIcon: {
            marginTop: '-12px',
            marginLeft: '-12px',
            marginBottom: '-12px'
          }
        },
        'divider': {
          tile: {
            boxShadow: 'inset 0 -1px 0 rgba(0,0,0,.12)'
          }
        },
        'condensed': {
          tile: {
            paddingBottom: '0px',
            paddingTop: '0px',
            paddingRight: '0px'
          },
          sidebar: {
            minWidth: '28px',
            maxWidth: '28px',
            flexBasis: '28px'
          }
        }
      }, {
        'clickable': this.props.onClick
      }, this.props);

      var _props$children = _slicedToArray(this.props.children, 2);

      var sidebar = _props$children[0];
      var content = _props$children[1];


      return _react2.default.createElement(
        'div',
        { style: styles.tile, className: 'flexbox-fix' },
        _react2.default.createElement(
          'div',
          { style: styles.primary, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.sidebar, key: "sidebar-#{ sidebar }" },
            sidebar
          ),
          _react2.default.createElement(
            'div',
            { style: styles.content, key: "content-#{ content }" },
            content
          )
        )
      );
    }
  }]);

  return Tile;
}(_react2.default.Component);

;

exports.default = Tile;

/***/ }),

/***/ 1698:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// jscs: disable

// TinyColor v1.1.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function() {

var trimLeft = /^[\s,#]+/;
var trimRight = /\s+$/;
var tinyCounter = 0;
var math = Math;
var mathRound = math.round;
var mathMin = math.min;
var mathMax = math.max;
var mathRandom = math.random;

function tinycolor(color, opts) {

		color = (color) ? color : '';
		opts = opts || { };

		// If input is already a tinycolor, return itself
		if (color instanceof tinycolor) {
			 return color;
		}
		// If we are called as a function, call using new instead
		if (!(this instanceof tinycolor)) {
				return new tinycolor(color, opts);
		}

		var rgb = inputToRGB(color);
		this._originalInput = color,
		this._r = rgb.r,
		this._g = rgb.g,
		this._b = rgb.b,
		this._a = rgb.a,
		this._roundA = mathRound(100*this._a) / 100,
		this._format = opts.format || rgb.format;
		this._gradientType = opts.gradientType;

		// Don't let the range of [0,255] come back in [0,1].
		// Potentially lose a little bit of precision here, but will fix issues where
		// .5 gets interpreted as half of the total, instead of half of 1
		// If it was supposed to be 128, this was already taken care of by `inputToRgb`
		if (this._r < 1) { this._r = mathRound(this._r); }
		if (this._g < 1) { this._g = mathRound(this._g); }
		if (this._b < 1) { this._b = mathRound(this._b); }

		this._ok = rgb.ok;
		this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
		isDark: function() {
				return this.getBrightness() < 128;
		},
		isLight: function() {
				return !this.isDark();
		},
		isValid: function() {
				return this._ok;
		},
		getOriginalInput: function() {
			return this._originalInput;
		},
		getFormat: function() {
				return this._format;
		},
		getAlpha: function() {
				return this._a;
		},
		getBrightness: function() {
				//http://www.w3.org/TR/AERT#color-contrast
				var rgb = this.toRgb();
				return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
		},
		getLuminance: function() {
				//http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
				var rgb = this.toRgb();
				var RsRGB, GsRGB, BsRGB, R, G, B;
				RsRGB = rgb.r/255;
				GsRGB = rgb.g/255;
				BsRGB = rgb.b/255;

				if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
				if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
				if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
				return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
		},
		setAlpha: function(value) {
				this._a = boundAlpha(value);
				this._roundA = mathRound(100*this._a) / 100;
				return this;
		},
		toHsv: function() {
				var hsv = rgbToHsv(this._r, this._g, this._b);
				return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
		},
		toHsvString: function() {
				var hsv = rgbToHsv(this._r, this._g, this._b);
				var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
				return (this._a == 1) ?
					"hsv("	+ h + ", " + s + "%, " + v + "%)" :
					"hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
		},
		toHsl: function() {
				var hsl = rgbToHsl(this._r, this._g, this._b);
				return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
		},
		toHslString: function() {
				var hsl = rgbToHsl(this._r, this._g, this._b);
				var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
				return (this._a == 1) ?
					"hsl("	+ h + ", " + s + "%, " + l + "%)" :
					"hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
		},
		toHex: function(allow3Char) {
				return rgbToHex(this._r, this._g, this._b, allow3Char);
		},
		toHexString: function(allow3Char) {
				return '#' + this.toHex(allow3Char);
		},
		toHex8: function() {
				return rgbaToHex(this._r, this._g, this._b, this._a);
		},
		toHex8String: function() {
				return '#' + this.toHex8();
		},
		toRgb: function() {
				return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
		},
		toRgbString: function() {
				return (this._a == 1) ?
					"rgb("	+ mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
					"rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
		},
		toPercentageRgb: function() {
				return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
		},
		toPercentageRgbString: function() {
				return (this._a == 1) ?
					"rgb("	+ mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
					"rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
		},
		toName: function() {
				if (this._a === 0) {
						return "transparent";
				}

				if (this._a < 1) {
						return false;
				}

				return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
		},
		toFilter: function(secondColor) {
				var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
				var secondHex8String = hex8String;
				var gradientType = this._gradientType ? "GradientType = 1, " : "";

				if (secondColor) {
						var s = tinycolor(secondColor);
						secondHex8String = s.toHex8String();
				}

				return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
		},
		toString: function(format) {
				var formatSet = !!format;
				format = format || this._format;

				var formattedString = false;
				var hasAlpha = this._a < 1 && this._a >= 0;
				var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

				if (needsAlphaFormat) {
						// Special case for "transparent", all other non-alpha formats
						// will return rgba when there is transparency.
						if (format === "name" && this._a === 0) {
								return this.toName();
						}
						return this.toRgbString();
				}
				if (format === "rgb") {
						formattedString = this.toRgbString();
				}
				if (format === "prgb") {
						formattedString = this.toPercentageRgbString();
				}
				if (format === "hex" || format === "hex6") {
						formattedString = this.toHexString();
				}
				if (format === "hex3") {
						formattedString = this.toHexString(true);
				}
				if (format === "hex8") {
						formattedString = this.toHex8String();
				}
				if (format === "name") {
						formattedString = this.toName();
				}
				if (format === "hsl") {
						formattedString = this.toHslString();
				}
				if (format === "hsv") {
						formattedString = this.toHsvString();
				}

				return formattedString || this.toHexString();
		},

		_applyModification: function(fn, args) {
				var color = fn.apply(null, [this].concat([].slice.call(args)));
				this._r = color._r;
				this._g = color._g;
				this._b = color._b;
				this.setAlpha(color._a);
				return this;
		},
		lighten: function() {
				return this._applyModification(lighten, arguments);
		},
		brighten: function() {
				return this._applyModification(brighten, arguments);
		},
		darken: function() {
				return this._applyModification(darken, arguments);
		},
		desaturate: function() {
				return this._applyModification(desaturate, arguments);
		},
		saturate: function() {
				return this._applyModification(saturate, arguments);
		},
		greyscale: function() {
				return this._applyModification(greyscale, arguments);
		},
		spin: function() {
				return this._applyModification(spin, arguments);
		},

		_applyCombination: function(fn, args) {
				return fn.apply(null, [this].concat([].slice.call(args)));
		},
		analogous: function() {
				return this._applyCombination(analogous, arguments);
		},
		complement: function() {
				return this._applyCombination(complement, arguments);
		},
		monochromatic: function() {
				return this._applyCombination(monochromatic, arguments);
		},
		splitcomplement: function() {
				return this._applyCombination(splitcomplement, arguments);
		},
		triad: function() {
				return this._applyCombination(triad, arguments);
		},
		tetrad: function() {
				return this._applyCombination(tetrad, arguments);
		}
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
		if (typeof color == "object") {
				var newColor = {};
				for (var i in color) {
						if (color.hasOwnProperty(i)) {
								if (i === "a") {
										newColor[i] = color[i];
								}
								else {
										newColor[i] = convertToPercentage(color[i]);
								}
						}
				}
				color = newColor;
		}

		return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//		 "red"
//		 "#f00" or "f00"
//		 "#ff0000" or "ff0000"
//		 "#ff000000" or "ff000000"
//		 "rgb 255 0 0" or "rgb (255, 0, 0)"
//		 "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//		 "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//		 "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//		 "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//		 "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//		 "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

		var rgb = { r: 0, g: 0, b: 0 };
		var a = 1;
		var ok = false;
		var format = false;

		if (typeof color == "string") {
				color = stringInputToObject(color);
		}

		if (typeof color == "object") {
				if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
						rgb = rgbToRgb(color.r, color.g, color.b);
						ok = true;
						format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
				}
				else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
						color.s = convertToPercentage(color.s, 1);
						color.v = convertToPercentage(color.v, 1);
						rgb = hsvToRgb(color.h, color.s, color.v);
						ok = true;
						format = "hsv";
				}
				else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
						color.s = convertToPercentage(color.s);
						color.l = convertToPercentage(color.l);
						rgb = hslToRgb(color.h, color.s, color.l);
						ok = true;
						format = "hsl";
				}

				if (color.hasOwnProperty("a")) {
						a = color.a;
				}
		}

		a = boundAlpha(a);

		return {
				ok: ok,
				format: color.format || format,
				r: mathMin(255, mathMax(rgb.r, 0)),
				g: mathMin(255, mathMax(rgb.g, 0)),
				b: mathMin(255, mathMax(rgb.b, 0)),
				a: a
		};
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
		return {
				r: bound01(r, 255) * 255,
				g: bound01(g, 255) * 255,
				b: bound01(b, 255) * 255
		};
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

		r = bound01(r, 255);
		g = bound01(g, 255);
		b = bound01(b, 255);

		var max = mathMax(r, g, b), min = mathMin(r, g, b);
		var h, s, l = (max + min) / 2;

		if(max == min) {
				h = s = 0; // achromatic
		}
		else {
				var d = max - min;
				s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
				switch(max) {
						case r: h = (g - b) / d + (g < b ? 6 : 0); break;
						case g: h = (b - r) / d + 2; break;
						case b: h = (r - g) / d + 4; break;
				}

				h /= 6;
		}

		return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
		var r, g, b;

		h = bound01(h, 360);
		s = bound01(s, 100);
		l = bound01(l, 100);

		function hue2rgb(p, q, t) {
				if(t < 0) t += 1;
				if(t > 1) t -= 1;
				if(t < 1/6) return p + (q - p) * 6 * t;
				if(t < 1/2) return q;
				if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
				return p;
		}

		if(s === 0) {
				r = g = b = l; // achromatic
		}
		else {
				var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
				var p = 2 * l - q;
				r = hue2rgb(p, q, h + 1/3);
				g = hue2rgb(p, q, h);
				b = hue2rgb(p, q, h - 1/3);
		}

		return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

		r = bound01(r, 255);
		g = bound01(g, 255);
		b = bound01(b, 255);

		var max = mathMax(r, g, b), min = mathMin(r, g, b);
		var h, s, v = max;

		var d = max - min;
		s = max === 0 ? 0 : d / max;

		if(max == min) {
				h = 0; // achromatic
		}
		else {
				switch(max) {
						case r: h = (g - b) / d + (g < b ? 6 : 0); break;
						case g: h = (b - r) / d + 2; break;
						case b: h = (r - g) / d + 4; break;
				}
				h /= 6;
		}
		return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

		h = bound01(h, 360) * 6;
		s = bound01(s, 100);
		v = bound01(v, 100);

		var i = math.floor(h),
				f = h - i,
				p = v * (1 - s),
				q = v * (1 - f * s),
				t = v * (1 - (1 - f) * s),
				mod = i % 6,
				r = [v, q, p, p, t, v][mod],
				g = [t, v, v, q, p, p][mod],
				b = [p, p, t, v, v, q][mod];

		return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

		var hex = [
				pad2(mathRound(r).toString(16)),
				pad2(mathRound(g).toString(16)),
				pad2(mathRound(b).toString(16))
		];

		// Return a 3 character hex if possible
		if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
				return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
		}

		return hex.join("");
}
		// `rgbaToHex`
		// Converts an RGBA color plus alpha transparency to hex
		// Assumes r, g, b and a are contained in the set [0, 255]
		// Returns an 8 character hex
		function rgbaToHex(r, g, b, a) {

				var hex = [
						pad2(convertDecimalToHex(a)),
						pad2(mathRound(r).toString(16)),
						pad2(mathRound(g).toString(16)),
						pad2(mathRound(b).toString(16))
				];

				return hex.join("");
		}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
		if (!color1 || !color2) { return false; }
		return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function() {
		return tinycolor.fromRatio({
				r: mathRandom(),
				g: mathRandom(),
				b: mathRandom()
		});
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
		amount = (amount === 0) ? 0 : (amount || 10);
		var hsl = tinycolor(color).toHsl();
		hsl.s -= amount / 100;
		hsl.s = clamp01(hsl.s);
		return tinycolor(hsl);
}

function saturate(color, amount) {
		amount = (amount === 0) ? 0 : (amount || 10);
		var hsl = tinycolor(color).toHsl();
		hsl.s += amount / 100;
		hsl.s = clamp01(hsl.s);
		return tinycolor(hsl);
}

function greyscale(color) {
		return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
		amount = (amount === 0) ? 0 : (amount || 10);
		var hsl = tinycolor(color).toHsl();
		hsl.l += amount / 100;
		hsl.l = clamp01(hsl.l);
		return tinycolor(hsl);
}

function brighten(color, amount) {
		amount = (amount === 0) ? 0 : (amount || 10);
		var rgb = tinycolor(color).toRgb();
		rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
		rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
		rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
		return tinycolor(rgb);
}

function darken (color, amount) {
		amount = (amount === 0) ? 0 : (amount || 10);
		var hsl = tinycolor(color).toHsl();
		hsl.l -= amount / 100;
		hsl.l = clamp01(hsl.l);
		return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
		var hsl = tinycolor(color).toHsl();
		var hue = (mathRound(hsl.h) + amount) % 360;
		hsl.h = hue < 0 ? 360 + hue : hue;
		return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
		var hsl = tinycolor(color).toHsl();
		hsl.h = (hsl.h + 180) % 360;
		return tinycolor(hsl);
}

function triad(color) {
		var hsl = tinycolor(color).toHsl();
		var h = hsl.h;
		return [
				tinycolor(color),
				tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
				tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
		];
}

function tetrad(color) {
		var hsl = tinycolor(color).toHsl();
		var h = hsl.h;
		return [
				tinycolor(color),
				tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
				tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
				tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
		];
}

function splitcomplement(color) {
		var hsl = tinycolor(color).toHsl();
		var h = hsl.h;
		return [
				tinycolor(color),
				tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
				tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
		];
}

function analogous(color, results, slices) {
		results = results || 6;
		slices = slices || 30;

		var hsl = tinycolor(color).toHsl();
		var part = 360 / slices;
		var ret = [tinycolor(color)];

		for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
				hsl.h = (hsl.h + part) % 360;
				ret.push(tinycolor(hsl));
		}
		return ret;
}

function monochromatic(color, results) {
		results = results || 6;
		var hsv = tinycolor(color).toHsv();
		var h = hsv.h, s = hsv.s, v = hsv.v;
		var ret = [];
		var modification = 1 / results;

		while (results--) {
				ret.push(tinycolor({ h: h, s: s, v: v}));
				v = (v + modification) % 1;
		}

		return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
		amount = (amount === 0) ? 0 : (amount || 50);

		var rgb1 = tinycolor(color1).toRgb();
		var rgb2 = tinycolor(color2).toRgb();

		var p = amount / 100;
		var w = p * 2 - 1;
		var a = rgb2.a - rgb1.a;

		var w1;

		if (w * a == -1) {
				w1 = w;
		} else {
				w1 = (w + a) / (1 + w * a);
		}

		w1 = (w1 + 1) / 2;

		var w2 = 1 - w1;

		var rgba = {
				r: rgb2.r * w1 + rgb1.r * w2,
				g: rgb2.g * w1 + rgb1.g * w2,
				b: rgb2.b * w1 + rgb1.b * w2,
				a: rgb2.a * p	+ rgb1.a * (1 - p)
		};

		return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
		var c1 = tinycolor(color1);
		var c2 = tinycolor(color2);
		return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//			the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//			the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//		tinycolor.isReadable("#000", "#111") => false
//		tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false

tinycolor.isReadable = function(color1, color2, wcag2) {
		var readability = tinycolor.readability(color1, color2);
		var wcag2Parms, out;

		out = false;

		wcag2Parms = validateWCAG2Parms(wcag2);
		switch (wcag2Parms.level + wcag2Parms.size) {
				case "AAsmall":
				case "AAAlarge":
						out = readability >= 4.5;
						break;
				case "AAlarge":
						out = readability >= 3;
						break;
				case "AAAsmall":
						out = readability >= 7;
						break;
		}
		return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//		tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//		tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();	// "#ffffff"
//		tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//		tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"


tinycolor.mostReadable = function(baseColor, colorList, args) {
		var bestColor = null;
		var bestScore = 0;
		var readability;
		var includeFallbackColors, level, size ;
		args = args || {};
		includeFallbackColors = args.includeFallbackColors ;
		level = args.level;
		size = args.size;

		for (var i= 0; i < colorList.length ; i++) {
				readability = tinycolor.readability(baseColor, colorList[i]);
				if (readability > bestScore) {
						bestScore = readability;
						bestColor = tinycolor(colorList[i]);
				}
		}

		if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
				return bestColor;
		}
		else {
				args.includeFallbackColors=false;
				return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
		}
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
		aliceblue: "f0f8ff",
		antiquewhite: "faebd7",
		aqua: "0ff",
		aquamarine: "7fffd4",
		azure: "f0ffff",
		beige: "f5f5dc",
		bisque: "ffe4c4",
		black: "000",
		blanchedalmond: "ffebcd",
		blue: "00f",
		blueviolet: "8a2be2",
		brown: "a52a2a",
		burlywood: "deb887",
		burntsienna: "ea7e5d",
		cadetblue: "5f9ea0",
		chartreuse: "7fff00",
		chocolate: "d2691e",
		coral: "ff7f50",
		cornflowerblue: "6495ed",
		cornsilk: "fff8dc",
		crimson: "dc143c",
		cyan: "0ff",
		darkblue: "00008b",
		darkcyan: "008b8b",
		darkgoldenrod: "b8860b",
		darkgray: "a9a9a9",
		darkgreen: "006400",
		darkgrey: "a9a9a9",
		darkkhaki: "bdb76b",
		darkmagenta: "8b008b",
		darkolivegreen: "556b2f",
		darkorange: "ff8c00",
		darkorchid: "9932cc",
		darkred: "8b0000",
		darksalmon: "e9967a",
		darkseagreen: "8fbc8f",
		darkslateblue: "483d8b",
		darkslategray: "2f4f4f",
		darkslategrey: "2f4f4f",
		darkturquoise: "00ced1",
		darkviolet: "9400d3",
		deeppink: "ff1493",
		deepskyblue: "00bfff",
		dimgray: "696969",
		dimgrey: "696969",
		dodgerblue: "1e90ff",
		firebrick: "b22222",
		floralwhite: "fffaf0",
		forestgreen: "228b22",
		fuchsia: "f0f",
		gainsboro: "dcdcdc",
		ghostwhite: "f8f8ff",
		gold: "ffd700",
		goldenrod: "daa520",
		gray: "808080",
		green: "008000",
		greenyellow: "adff2f",
		grey: "808080",
		honeydew: "f0fff0",
		hotpink: "ff69b4",
		indianred: "cd5c5c",
		indigo: "4b0082",
		ivory: "fffff0",
		khaki: "f0e68c",
		lavender: "e6e6fa",
		lavenderblush: "fff0f5",
		lawngreen: "7cfc00",
		lemonchiffon: "fffacd",
		lightblue: "add8e6",
		lightcoral: "f08080",
		lightcyan: "e0ffff",
		lightgoldenrodyellow: "fafad2",
		lightgray: "d3d3d3",
		lightgreen: "90ee90",
		lightgrey: "d3d3d3",
		lightpink: "ffb6c1",
		lightsalmon: "ffa07a",
		lightseagreen: "20b2aa",
		lightskyblue: "87cefa",
		lightslategray: "789",
		lightslategrey: "789",
		lightsteelblue: "b0c4de",
		lightyellow: "ffffe0",
		lime: "0f0",
		limegreen: "32cd32",
		linen: "faf0e6",
		magenta: "f0f",
		maroon: "800000",
		mediumaquamarine: "66cdaa",
		mediumblue: "0000cd",
		mediumorchid: "ba55d3",
		mediumpurple: "9370db",
		mediumseagreen: "3cb371",
		mediumslateblue: "7b68ee",
		mediumspringgreen: "00fa9a",
		mediumturquoise: "48d1cc",
		mediumvioletred: "c71585",
		midnightblue: "191970",
		mintcream: "f5fffa",
		mistyrose: "ffe4e1",
		moccasin: "ffe4b5",
		navajowhite: "ffdead",
		navy: "000080",
		oldlace: "fdf5e6",
		olive: "808000",
		olivedrab: "6b8e23",
		orange: "ffa500",
		orangered: "ff4500",
		orchid: "da70d6",
		palegoldenrod: "eee8aa",
		palegreen: "98fb98",
		paleturquoise: "afeeee",
		palevioletred: "db7093",
		papayawhip: "ffefd5",
		peachpuff: "ffdab9",
		peru: "cd853f",
		pink: "ffc0cb",
		plum: "dda0dd",
		powderblue: "b0e0e6",
		purple: "800080",
		rebeccapurple: "663399",
		red: "f00",
		rosybrown: "bc8f8f",
		royalblue: "4169e1",
		saddlebrown: "8b4513",
		salmon: "fa8072",
		sandybrown: "f4a460",
		seagreen: "2e8b57",
		seashell: "fff5ee",
		sienna: "a0522d",
		silver: "c0c0c0",
		skyblue: "87ceeb",
		slateblue: "6a5acd",
		slategray: "708090",
		slategrey: "708090",
		snow: "fffafa",
		springgreen: "00ff7f",
		steelblue: "4682b4",
		tan: "d2b48c",
		teal: "008080",
		thistle: "d8bfd8",
		tomato: "ff6347",
		turquoise: "40e0d0",
		violet: "ee82ee",
		wheat: "f5deb3",
		white: "fff",
		whitesmoke: "f5f5f5",
		yellow: "ff0",
		yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
		var flipped = { };
		for (var i in o) {
				if (o.hasOwnProperty(i)) {
						flipped[o[i]] = i;
				}
		}
		return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
		a = parseFloat(a);

		if (isNaN(a) || a < 0 || a > 1) {
				a = 1;
		}

		return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
		if (isOnePointZero(n)) { n = "100%"; }

		var processPercent = isPercentage(n);
		n = mathMin(max, mathMax(0, parseFloat(n)));

		// Automatically convert percentage into number
		if (processPercent) {
				n = parseInt(n * max, 10) / 100;
		}

		// Handle floating point rounding errors
		if ((math.abs(n - max) < 0.000001)) {
				return 1;
		}

		// Convert into [0, 1] range if it isn't already
		return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
		return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
		return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
		return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
		return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
		return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n, multiplier) {
		multiplier = multiplier || 100;
		if (n <= 1) {
				n = (n * multiplier) + "%";
		}

		return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
		return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
		return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

		// <http://www.w3.org/TR/css3-values/#integers>
		var CSS_INTEGER = "[-\\+]?\\d+%?";

		// <http://www.w3.org/TR/css3-values/#number-value>
		var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

		// Allow positive/negative integer/number.	Don't capture the either/or, just the entire outcome.
		var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

		// Actual matching.
		// Parentheses and commas are optional, but not required.
		// Whitespace can take the place of commas or opening paren
		var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
		var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

		return {
				rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
				rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
				hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
				hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
				hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
				hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
				hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
				hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
				hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
		};
})();

// `stringInputToObject`
// Permissive string parsing.	Take in a number of formats, and output an object
// based on detected format.	Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

		color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
		var named = false;
		if (names[color]) {
				color = names[color];
				named = true;
		}
		else if (color == 'transparent') {
				return { r: 0, g: 0, b: 0, a: 0, format: "name" };
		}

		// Try to match string input using regular expressions.
		// Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
		// Just return an object and let the conversion functions handle that.
		// This way the result will be the same whether the tinycolor is initialized with string or object.
		var match;
		if ((match = matchers.rgb.exec(color))) {
				return { r: match[1], g: match[2], b: match[3] };
		}
		if ((match = matchers.rgba.exec(color))) {
				return { r: match[1], g: match[2], b: match[3], a: match[4] };
		}
		if ((match = matchers.hsl.exec(color))) {
				return { h: match[1], s: match[2], l: match[3] };
		}
		if ((match = matchers.hsla.exec(color))) {
				return { h: match[1], s: match[2], l: match[3], a: match[4] };
		}
		if ((match = matchers.hsv.exec(color))) {
				return { h: match[1], s: match[2], v: match[3] };
		}
		if ((match = matchers.hsva.exec(color))) {
				return { h: match[1], s: match[2], v: match[3], a: match[4] };
		}
		if ((match = matchers.hex8.exec(color))) {
				return {
						a: convertHexToDecimal(match[1]),
						r: parseIntFromHex(match[2]),
						g: parseIntFromHex(match[3]),
						b: parseIntFromHex(match[4]),
						format: named ? "name" : "hex8"
				};
		}
		if ((match = matchers.hex6.exec(color))) {
				return {
						r: parseIntFromHex(match[1]),
						g: parseIntFromHex(match[2]),
						b: parseIntFromHex(match[3]),
						format: named ? "name" : "hex"
				};
		}
		if ((match = matchers.hex3.exec(color))) {
				return {
						r: parseIntFromHex(match[1] + '' + match[1]),
						g: parseIntFromHex(match[2] + '' + match[2]),
						b: parseIntFromHex(match[3] + '' + match[3]),
						format: named ? "name" : "hex"
				};
		}

		return false;
}

function validateWCAG2Parms(parms) {
		// return valid WCAG2 parms for isReadable.
		// If input parms are invalid, return {"level":"AA", "size":"small"}
		var level, size;
		parms = parms || {"level":"AA", "size":"small"};
		level = (parms.level || "AA").toUpperCase();
		size = (parms.size || "small").toLowerCase();
		if (level !== "AA" && level !== "AAA") {
				level = "AA";
		}
		if (size !== "small" && size !== "large") {
				size = "small";
		}
		return {"level":level, "size":size};
}
// Node: Export function
if (typeof module !== "undefined" && module.exports) {
		module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {return tinycolor;}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {
		window.tinycolor = tinycolor;
}

})();


/***/ }),

/***/ 1729:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.autoprefix=void 0;var _map=__webpack_require__(1173),_map2=_interopRequireDefault(_map),_objectAssign=__webpack_require__(591),_objectAssign2=_interopRequireDefault(_objectAssign),transforms={borderRadius:function(e){return{msBorderRadius:e,MozBorderRadius:e,OBorderRadius:e,WebkitBorderRadius:e,borderRadius:e}},boxShadow:function(e){return{msBoxShadow:e,MozBoxShadow:e,OBoxShadow:e,WebkitBoxShadow:e,boxShadow:e}},userSelect:function(e){return{WebkitTouchCallout:e,KhtmlUserSelect:e,MozUserSelect:e,msUserSelect:e,WebkitUserSelect:e,userSelect:e}},flex:function(e){return{WebkitBoxFlex:e,MozBoxFlex:e,WebkitFlex:e,msFlex:e,flex:e}},flexBasis:function(e){return{WebkitFlexBasis:e,flexBasis:e}},justifyContent:function(e){return{WebkitJustifyContent:e,justifyContent:e}},transition:function(e){return{msTransition:e,MozTransition:e,OTransition:e,WebkitTransition:e,transition:e}},transform:function(e){return{msTransform:e,MozTransform:e,OTransform:e,WebkitTransform:e,transform:e}},absolute:function(e){var t=e&&e.split(" ");return{position:"absolute",top:t&&t[0],right:t&&t[1],bottom:t&&t[2],left:t&&t[3]}},extend:function(e,t){var r=t[e];return r?r:{extend:e}}},autoprefix=exports.autoprefix=function(e){var t={};return(0,_map2["default"])(e,function(e,r){var o={};(0,_map2["default"])(e,function(e,t){var r=transforms[t];r?(0,_objectAssign2["default"])(o,r(e)):o[t]=e}),t[r]=o}),t};exports["default"]=autoprefix;

/***/ }),

/***/ 1730:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.active=void 0;var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),active=exports.active=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"span";return function(r){function n(){var r,o,a,c;_classCallCheck(this,n);for(var u=arguments.length,s=Array(u),i=0;i<u;i++)s[i]=arguments[i];return o=a=_possibleConstructorReturn(this,(r=n.__proto__||Object.getPrototypeOf(n)).call.apply(r,[this].concat(s))),a.state={active:!1},a.handleMouseDown=function(){return a.setState({active:!0})},a.handleMouseUp=function(){return a.setState({active:!1})},a.render=function(){return _react2["default"].createElement(t,{onMouseDown:a.handleMouseDown,onMouseUp:a.handleMouseUp},_react2["default"].createElement(e,_extends({},a.props,a.state)))},c=o,_possibleConstructorReturn(a,c)}return _inherits(n,r),n}(_react2["default"].Component)};exports["default"]=active;

/***/ }),

/***/ 1731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.hover=void 0;var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),hover=exports.hover=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"span";return function(r){function o(){var r,n,u,a;_classCallCheck(this,o);for(var s=arguments.length,c=Array(s),i=0;i<s;i++)c[i]=arguments[i];return n=u=_possibleConstructorReturn(this,(r=o.__proto__||Object.getPrototypeOf(o)).call.apply(r,[this].concat(c))),u.state={hover:!1},u.handleMouseOver=function(){return u.setState({hover:!0})},u.handleMouseOut=function(){return u.setState({hover:!1})},u.render=function(){return _react2["default"].createElement(t,{onMouseOver:u.handleMouseOver,onMouseOut:u.handleMouseOut},_react2["default"].createElement(e,_extends({},u.props,u.state)))},a=n,_possibleConstructorReturn(u,a)}return _inherits(o,r),o}(_react2["default"].Component)};exports["default"]=hover;

/***/ }),

/***/ 1732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ReactCSSComponent=void 0;var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_inline=__webpack_require__(1735),_inline2=_interopRequireDefault(_inline),_once=__webpack_require__(1623),_once2=_interopRequireDefault(_once),warning=(0,_once2["default"])(function(){return console.warn("Extending ReactCSS.Component\n  is deprecated in ReactCSS 1.0.0")}),ReactCSSComponent=exports.ReactCSSComponent=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"css",value:function(e){return warning(),_inline2["default"].call(this,e)}},{key:"styles",value:function(){return this.css()}}]),t}(_react2["default"].Component);ReactCSSComponent.contextTypes={mixins:_react2["default"].PropTypes.object},exports["default"]=ReactCSSComponent;

/***/ }),

/***/ 1733:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkClassStructure=void 0;var _map=__webpack_require__(1173),_map2=_interopRequireDefault(_map),_isObject=__webpack_require__(1167),_isObject2=_interopRequireDefault(_isObject),checkClassStructure=exports.checkClassStructure=function(e){(0,_map2["default"])(e,function(t,s){e.hasOwnProperty(s)&&((0,_isObject2["default"])(t)?(0,_map2["default"])(t,function(e,u){t.hasOwnProperty(u)&&((0,_isObject2["default"])(e)||console.warn("Make sure the value of the element `"+s+"`\n                is an object of css. You passed it `"+t+"`"))}):console.warn("Make sure the value of `"+s+"` is an object of\n          html elements. You passed it `"+t+"`"))})};exports["default"]=checkClassStructure;

/***/ }),

/***/ 1734:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.combine=void 0;var _merge=__webpack_require__(1736),_merge2=_interopRequireDefault(_merge),_transformMixins=__webpack_require__(1737),_transformMixins2=_interopRequireDefault(_transformMixins),combine=exports.combine=function(e,r){var i=(0,_merge2["default"])(e);return(0,_transformMixins2["default"])(i,r)};exports["default"]=combine;

/***/ }),

/***/ 1735:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _isObject=__webpack_require__(1167),_isObject2=_interopRequireDefault(_isObject),_checkClassStructure=__webpack_require__(1733),_checkClassStructure2=_interopRequireDefault(_checkClassStructure),_combine=__webpack_require__(1734),_combine2=_interopRequireDefault(_combine);module.exports=function(e){var s=this,t=[];if(!this.classes)throw console.warn("Define this.classes on `"+this.constructor.name+"`");(0,_checkClassStructure2["default"])(this.classes());var r=function(e,r){s.classes()[e]?t.push(s.classes()[e]):e&&r&&r.warn===!0&&console.warn("The `"+e+"` css class does not exist on `"+s.constructor.name+"`")};r("default");for(var i in this.props){var c=this.props[i];(0,_isObject2["default"])(c)||(c===!0?(r(i),r(i+"-true")):r(c?i+"-"+c:i+"-false"))}if(this.props&&this.props.activeBounds)for(var o=0;o<this.props.activeBounds.length;o++){var n=this.props.activeBounds[o];r(n)}for(var a in e){var u=e[a];u===!0&&r(a,{warn:!0})}var l={};return this.context&&this.context.mixins&&(l=this.context.mixins),(0,_combine2["default"])(t,l)};

/***/ }),

/***/ 1736:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _merge=__webpack_require__(1389),_merge2=_interopRequireDefault(_merge),_isObject=__webpack_require__(1167),_isObject2=_interopRequireDefault(_isObject),merge=function(e){return(0,_isObject2["default"])(e)&&!Array.isArray(e)?e:1===e.length?e[0]:_merge2["default"].recursive.apply(void 0,e)};exports["default"]=merge;

/***/ }),

/***/ 1737:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _isObject=__webpack_require__(1167),_isObject2=_interopRequireDefault(_isObject),_merge=__webpack_require__(1389),_merge2=_interopRequireDefault(_merge),localProps={borderRadius:function(e){if(null!==e)return{msBorderRadius:e,MozBorderRadius:e,OBorderRadius:e,WebkitBorderRadius:e,borderRadius:e}},boxShadow:function(e){if(null!==e)return{msBoxShadow:e,MozBoxShadow:e,OBoxShadow:e,WebkitBoxShadow:e,boxShadow:e}},userSelect:function(e){if(null!==e)return{WebkitTouchCallout:e,KhtmlUserSelect:e,MozUserSelect:e,msUserSelect:e,WebkitUserSelect:e,userSelect:e}},flex:function(e){if(null!==e)return{WebkitBoxFlex:e,MozBoxFlex:e,WebkitFlex:e,msFlex:e,flex:e}},flexBasis:function(e){if(null!==e)return{WebkitFlexBasis:e,flexBasis:e}},justifyContent:function(e){if(null!==e)return{WebkitJustifyContent:e,justifyContent:e}},transition:function(e){if(null!==e)return{msTransition:e,MozTransition:e,OTransition:e,WebkitTransition:e,transition:e}},transform:function(e){if(null!==e)return{msTransform:e,MozTransform:e,OTransform:e,WebkitTransform:e,transform:e}},Absolute:function(e){if(null!==e){var r=e.split(" ");return{position:"absolute",top:r[0],right:r[1],bottom:r[2],left:r[3]}}},Extend:function(e,r){var t=r[e];if(t)return t}},transform=function e(r,t,n){var i=(0,_merge2["default"])(t,localProps),o={};for(var u in r){var s=r[u];if((0,_isObject2["default"])(s)&&!Array.isArray(s))o[u]=e(s,t,r);else if(i[u]){var l=i[u](s,n);for(var a in l){var f=l[a];o[a]=f}}else o[u]=s}return o};module.exports=function(e,r,t){return transform(e,r,t)};

/***/ }),

/***/ 1738:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.flattenNames=void 0;var _map=__webpack_require__(1173),_map2=_interopRequireDefault(_map),_isPlainObject=__webpack_require__(1620),_isPlainObject2=_interopRequireDefault(_isPlainObject),_isString=__webpack_require__(1286),_isString2=_interopRequireDefault(_isString),flattenNames=exports.flattenNames=function e(t){var i=[];return t.map(function(t){return Array.isArray(t)&&e(t).map(function(e){return i.push(e)}),(0,_isPlainObject2["default"])(t)&&(0,_map2["default"])(t,function(e,t){e===!0&&i.push(t),i.push(t+"-"+e)}),(0,_isString2["default"])(t)&&i.push(t),t}),i};exports["default"]=flattenNames;

/***/ }),

/***/ 1739:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var loopable=function(e,t){var l={},o=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];l[e]=t};return 0===e&&o("first-child"),e===t-1&&o("last-child"),(0===e||e%2===0)&&o("even"),1===Math.abs(e%2)&&o("odd"),o("nth-child",e),l};exports["default"]=loopable;

/***/ }),

/***/ 1740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeClasses=void 0;var _map=__webpack_require__(1173),_map2=_interopRequireDefault(_map),_cloneDeep=__webpack_require__(1615),_cloneDeep2=_interopRequireDefault(_cloneDeep),_objectAssign=__webpack_require__(591),_objectAssign2=_interopRequireDefault(_objectAssign),mergeClasses=exports.mergeClasses=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=e["default"]&&(0,_cloneDeep2["default"])(e["default"])||{};return t.map(function(t){var s=e[t];return s&&(0,_map2["default"])(s,function(e,t){r[t]||(r[t]={}),(0,_objectAssign2["default"])(r[t],s[t])}),t}),r};exports["default"]=mergeClasses;

/***/ })

});
//# sourceMappingURL=theme.js.map