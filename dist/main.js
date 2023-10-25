/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolver: () => (/* binding */ resolver)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _manipulation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manipulation.js */ "./src/manipulation.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


function resolver(initialMove, targetMove) {
  // console.log("initial move:", initialMove);
  // console.log("target: ", targetMove);
  var pathResult;

  // let initialMove = [7, 7];
  // let targetMove = [0, 0];
  var Noddinson = /*#__PURE__*/_createClass(function Noddinson() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [null];
    _classCallCheck(this, Noddinson);
    this.parent = parent;
    this.value = value;
  });
  function generatingMoves(initialMove) {
    var father = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    // let newFatherr = [grant, initialMove];

    var listOfNodes = [];
    var one = [[initialMove[0] + 2, initialMove[1] + 1], [initialMove[0] + 1, initialMove[1] + 2], [initialMove[0] - 2, initialMove[1] - 1], [initialMove[0] - 1, initialMove[1] - 2], [initialMove[0] - 1, initialMove[1] + 2], [initialMove[0] + 1, initialMove[1] - 2], [initialMove[0] - 2, initialMove[1] + 1], [initialMove[0] + 2, initialMove[1] - 1]];

    //  check it is a valid move insde of the frame
    //  make a node if the move it´s valid (L)
    one.forEach(function (elm) {
      if (elm[0] <= 7 && elm[0] >= 0 && elm[1] <= 7 && elm[1] >= 0) {
        var nodito = new Noddinson(elm, father);
        listOfNodes.push(nodito);
        // listOfNodes.push(elm);
      }
    });

    return listOfNodes;
  }
  function checkwinner(nodes) {
    var _iterator = _createForOfIteratorHelper(nodes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var noDo = _step.value;
        if (noDo.value[0] == targetMove[0] && noDo.value[1] == targetMove[1]) {
          pathResult = _toConsumableArray(noDo.parent);
          pathResult.push(noDo.value);
          return true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return false;
  }
  function setFather(moves) {
    //  doing a shadow copy of the moves.parent
    var partial = _toConsumableArray(moves.parent);
    partial.push(moves.value);
    return partial;
  }
  function findPath(movi) {
    if (checkwinner(movi)) {
      // listOfSteps.push(node[1]);
      return pathResult;
    } else {
      var newMoves = [];
      // let partial = [];
      var _iterator2 = _createForOfIteratorHelper(movi),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var element = _step2.value;
          var parent = setFather(element);
          var moves = generatingMoves(element.value, parent);
          newMoves.push.apply(newMoves, _toConsumableArray(moves));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      findPath(newMoves);
    }
  }
  // console.log(pathResult);

  var startM = new Noddinson(initialMove);
  findPath([startM]);
  return pathResult;
}

/***/ }),

/***/ "./src/manipulation.js":
/*!*****************************!*\
  !*** ./src/manipulation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawBoard: () => (/* binding */ drawBoard)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var board = document.querySelector(".board");
var sendBtn = document.querySelector(".subBtn");
var resetBtn = document.querySelector(".resetBtn");
var leftNums = document.querySelector(".leftNums");
var buttonNums = document.querySelector(".buttonNums");
var startPoint = [];
var targetPoint = [];
var pointResult;

//  draw the board
function drawBoard() {
  for (var i = 7; i >= 0; i--) {
    drawIndicator(i);
    for (var j = 0; j <= 7; j++) {
      var square = document.createElement("div");
      square.setAttribute("class", "square");
      square.setAttribute("data", "".concat(i, ",").concat(j));
      board.appendChild(square);
    }
  }
}
drawBoard();
function drawIndicator(indice) {
  var lat = document.createElement("div");
  lat.classList.add("ind");
  lat.innerText = indice;
  leftNums.appendChild(lat);
  var bott = document.createElement("div");
  bott.classList.add("bott");
  bott.innerText = indice;
  buttonNums.appendChild(bott);
}

//  set the event to the squares
var smallSq = document.querySelectorAll(".square");
smallSq.forEach(function (sq) {
  sq.addEventListener("click", function () {
    console.log(sq.attributes.data.value);
  });
});

//  when send it´s click
sendBtn.addEventListener("click", function () {
  //prevent the botton to be double click
  sendBtn.disabled = true;
  startPoint.length = 0;
  targetPoint.length = 0;
  var inputUsr = document.querySelectorAll("input");
  var _iterator = _createForOfIteratorHelper(inputUsr),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var inp = _step.value;
      if (startPoint.length <= 1) {
        startPoint.push(+inp.value);
      } else {
        targetPoint.push(+inp.value);
      }
    }
    //    call the resolver
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  pointResult = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.resolver)(startPoint, targetPoint);
  drawMoves(pointResult);
});
function drawMoves(_x) {
  return _drawMoves.apply(this, arguments);
} //  when reset it´s click
function _drawMoves() {
  _drawMoves = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(coordinates) {
    var large, _loop, i;
    return _regeneratorRuntime().wrap(function _callee$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          large = Object.keys(coordinates).length;
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
            var points, squarePath;
            return _regeneratorRuntime().wrap(function _loop$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  points = coordinates[i].join();
                  console.log(points);
                  squarePath = document.querySelector("div[data=\"".concat(points, "\"]"));
                  _context.next = 5;
                  return new Promise(function (resolve) {
                    return setTimeout(function () {
                      resolve(squarePath.classList.add("travel"));
                      if (i == 1) {
                        squarePath.innerText = "START";
                        squarePath.classList.add("start");
                      } else if (i == large - 1) {
                        squarePath.innerText = "META";
                        squarePath.classList.add("meta");
                        sendBtn.disabled = false;
                      } else {
                        squarePath.innerText = i - 1;
                      }
                    }, 1000);
                  });
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _loop);
          });
          i = 1;
        case 3:
          if (!(i < large)) {
            _context2.next = 8;
            break;
          }
          return _context2.delegateYield(_loop(i), "t0", 5);
        case 5:
          i++;
          _context2.next = 3;
          break;
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee);
  }));
  return _drawMoves.apply(this, arguments);
}
resetBtn.addEventListener("click", function () {
  board.innerHTML = "";
  leftNums.innerHTML = "";
  buttonNums.innerHTML = "";
  drawBoard();
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    padding: 0;
    font-family: 'Courier New', Courier, monospace;
    background-color: black;
    color: #57D982;

}

body{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
.mainBtns{
    font-weight: bold;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-auto-flow: row;
    justify-items: center;
    gap: 5px;
    padding: 1%;
}

.sendReset{
    display: flex;
    column-gap: 5px;
}


.header{
    text-align: center;
}

button{
    background-color:#7ed9573f;
    border: 1px solid rebeccapurple;
    color: aliceblue;
    border-radius: 10%;
    padding: 4%;
    text-transform: uppercase;
}
button:hover{
    background-color:rgba(240, 248, 255, 0.765);
    color:rebeccapurple;
}
button:disabled{
    background-color: gray;
}

input:invalid:required {
    border: 1px solid #D957CE;
}

input:valid {
    border: 1px solid #7DD957;
}

.board {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
}

.square {
    border: 1px solid rebeccapurple;
    width: 12.5%;
    height: 12.5%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 2s;
}

.square:hover {
  transform: rotate(180deg);
}

.travel{

    background-color: rebeccapurple;
}
.frame{
    display: grid;
    grid-template-columns: 50px 6fr;
}
.leftNums{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    align-items: center;
    padding-right: 2rem;
}
.buttonNums{
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    padding-top: 1rem;
}
.ind,
.bott{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: larger;
    width: 50px;
    height: 50px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,8CAA8C;IAC9C,uBAAuB;IACvB,cAAc;;AAElB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,kCAAkC;IAClC,mBAAmB;IACnB,qBAAqB;IACrB,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;;AAGA;IACI,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,+BAA+B;IAC/B,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,yBAAyB;AAC7B;AACA;IACI,2CAA2C;IAC3C,mBAAmB;AACvB;AACA;IACI,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;IAEI,+BAA+B;AACnC;AACA;IACI,aAAa;IACb,+BAA+B;AACnC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,2BAA2B;IAC3B,yBAAyB;IACzB,iBAAiB;AACrB;AACA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,WAAW;IACX,YAAY;AAChB","sourcesContent":["* {\n    box-sizing: border-box;\n    padding: 0;\n    font-family: 'Courier New', Courier, monospace;\n    background-color: black;\n    color: #57D982;\n\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.mainBtns{\n    font-weight: bold;\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr;\n    grid-auto-flow: row;\n    justify-items: center;\n    gap: 5px;\n    padding: 1%;\n}\n\n.sendReset{\n    display: flex;\n    column-gap: 5px;\n}\n\n\n.header{\n    text-align: center;\n}\n\nbutton{\n    background-color:#7ed9573f;\n    border: 1px solid rebeccapurple;\n    color: aliceblue;\n    border-radius: 10%;\n    padding: 4%;\n    text-transform: uppercase;\n}\nbutton:hover{\n    background-color:rgba(240, 248, 255, 0.765);\n    color:rebeccapurple;\n}\nbutton:disabled{\n    background-color: gray;\n}\n\ninput:invalid:required {\n    border: 1px solid #D957CE;\n}\n\ninput:valid {\n    border: 1px solid #7DD957;\n}\n\n.board {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    height: 100%;\n}\n\n.square {\n    border: 1px solid rebeccapurple;\n    width: 12.5%;\n    height: 12.5%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: transform 2s;\n}\n\n.square:hover {\n  transform: rotate(180deg);\n}\n\n.travel{\n\n    background-color: rebeccapurple;\n}\n.frame{\n    display: grid;\n    grid-template-columns: 50px 6fr;\n}\n.leftNums{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    text-align: center;\n    align-items: center;\n    padding-right: 2rem;\n}\n.buttonNums{\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    padding-top: 1rem;\n}\n.ind,\n.bott{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    font-size: larger;\n    width: 50px;\n    height: 50px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHR0cmF2YWlscy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rbmlnaHR0cmF2YWlscy8uL3NyYy9tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8va25pZ2h0dHJhdmFpbHMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2tuaWdodHRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rbmlnaHR0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tuaWdodHRyYXZhaWxzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2tuaWdodHRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tuaWdodHRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rbmlnaHR0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rbmlnaHR0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHR0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2tuaWdodHRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va25pZ2h0dHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0dHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va25pZ2h0dHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodHRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va25pZ2h0dHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHR0cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8va25pZ2h0dHJhdmFpbHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9rbmlnaHR0cmF2YWlscy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8va25pZ2h0dHJhdmFpbHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGRyYXdCb2FyZCB9IGZyb20gXCIuL21hbmlwdWxhdGlvbi5qc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVyKGluaXRpYWxNb3ZlLCB0YXJnZXRNb3ZlKSB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJpbml0aWFsIG1vdmU6XCIsIGluaXRpYWxNb3ZlKTtcclxuICAvLyBjb25zb2xlLmxvZyhcInRhcmdldDogXCIsIHRhcmdldE1vdmUpO1xyXG4gIGxldCBwYXRoUmVzdWx0O1xyXG5cclxuICAvLyBsZXQgaW5pdGlhbE1vdmUgPSBbNywgN107XHJcbiAgLy8gbGV0IHRhcmdldE1vdmUgPSBbMCwgMF07XHJcblxyXG4gIGNsYXNzIE5vZGRpbnNvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IG51bGwsIHBhcmVudCA9IFtudWxsXSkge1xyXG4gICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2VuZXJhdGluZ01vdmVzKGluaXRpYWxNb3ZlLCBmYXRoZXIgPSBudWxsKSB7XHJcbiAgICAvLyBsZXQgbmV3RmF0aGVyciA9IFtncmFudCwgaW5pdGlhbE1vdmVdO1xyXG5cclxuICAgIGxldCBsaXN0T2ZOb2RlcyA9IFtdO1xyXG4gICAgbGV0IG9uZSA9IFtcclxuICAgICAgW2luaXRpYWxNb3ZlWzBdICsgMiwgaW5pdGlhbE1vdmVbMV0gKyAxXSxcclxuICAgICAgW2luaXRpYWxNb3ZlWzBdICsgMSwgaW5pdGlhbE1vdmVbMV0gKyAyXSxcclxuICAgICAgW2luaXRpYWxNb3ZlWzBdIC0gMiwgaW5pdGlhbE1vdmVbMV0gLSAxXSxcclxuICAgICAgW2luaXRpYWxNb3ZlWzBdIC0gMSwgaW5pdGlhbE1vdmVbMV0gLSAyXSxcclxuICAgICAgW2luaXRpYWxNb3ZlWzBdIC0gMSwgaW5pdGlhbE1vdmVbMV0gKyAyXSxcclxuICAgICAgW2luaXRpYWxNb3ZlWzBdICsgMSwgaW5pdGlhbE1vdmVbMV0gLSAyXSxcclxuICAgICAgW2luaXRpYWxNb3ZlWzBdIC0gMiwgaW5pdGlhbE1vdmVbMV0gKyAxXSxcclxuICAgICAgW2luaXRpYWxNb3ZlWzBdICsgMiwgaW5pdGlhbE1vdmVbMV0gLSAxXSxcclxuICAgIF07XHJcblxyXG4gICAgLy8gIGNoZWNrIGl0IGlzIGEgdmFsaWQgbW92ZSBpbnNkZSBvZiB0aGUgZnJhbWVcclxuICAgIC8vICBtYWtlIGEgbm9kZSBpZiB0aGUgbW92ZSBpdMK0cyB2YWxpZCAoTClcclxuICAgIG9uZS5mb3JFYWNoKChlbG0pID0+IHtcclxuICAgICAgaWYgKGVsbVswXSA8PSA3ICYmIGVsbVswXSA+PSAwICYmIGVsbVsxXSA8PSA3ICYmIGVsbVsxXSA+PSAwKSB7XHJcbiAgICAgICAgbGV0IG5vZGl0byA9IG5ldyBOb2RkaW5zb24oZWxtLCBmYXRoZXIpO1xyXG4gICAgICAgIGxpc3RPZk5vZGVzLnB1c2gobm9kaXRvKTtcclxuICAgICAgICAvLyBsaXN0T2ZOb2Rlcy5wdXNoKGVsbSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGxpc3RPZk5vZGVzO1xyXG4gIH1cclxuICBmdW5jdGlvbiBjaGVja3dpbm5lcihub2Rlcykge1xyXG4gICAgZm9yIChjb25zdCBub0RvIG9mIG5vZGVzKSB7XHJcbiAgICAgIGlmIChub0RvLnZhbHVlWzBdID09IHRhcmdldE1vdmVbMF0gJiYgbm9Eby52YWx1ZVsxXSA9PSB0YXJnZXRNb3ZlWzFdKSB7XHJcbiAgICAgICAgcGF0aFJlc3VsdCA9IFsuLi5ub0RvLnBhcmVudF07XHJcbiAgICAgICAgcGF0aFJlc3VsdC5wdXNoKG5vRG8udmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RmF0aGVyKG1vdmVzKSB7XHJcbiAgICAvLyAgZG9pbmcgYSBzaGFkb3cgY29weSBvZiB0aGUgbW92ZXMucGFyZW50XHJcbiAgICBsZXQgcGFydGlhbCA9IFsuLi5tb3Zlcy5wYXJlbnRdO1xyXG4gICAgcGFydGlhbC5wdXNoKG1vdmVzLnZhbHVlKTtcclxuICAgIHJldHVybiBwYXJ0aWFsO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmluZFBhdGgobW92aSkge1xyXG4gICAgaWYgKGNoZWNrd2lubmVyKG1vdmkpKSB7XHJcbiAgICAgIC8vIGxpc3RPZlN0ZXBzLnB1c2gobm9kZVsxXSk7XHJcbiAgICAgIHJldHVybiBwYXRoUmVzdWx0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IG5ld01vdmVzID0gW107XHJcbiAgICAgIC8vIGxldCBwYXJ0aWFsID0gW107XHJcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBtb3ZpKSB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IHNldEZhdGhlcihlbGVtZW50KTtcclxuICAgICAgICBsZXQgbW92ZXMgPSBnZW5lcmF0aW5nTW92ZXMoZWxlbWVudC52YWx1ZSwgcGFyZW50KTtcclxuICAgICAgICBuZXdNb3Zlcy5wdXNoKC4uLm1vdmVzKTtcclxuICAgICAgfVxyXG4gICAgICBmaW5kUGF0aChuZXdNb3Zlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGNvbnNvbGUubG9nKHBhdGhSZXN1bHQpO1xyXG5cclxuICBsZXQgc3RhcnRNID0gbmV3IE5vZGRpbnNvbihpbml0aWFsTW92ZSk7XHJcbiAgZmluZFBhdGgoW3N0YXJ0TV0pO1xyXG4gIHJldHVybiBwYXRoUmVzdWx0O1xyXG59XHJcbiIsImltcG9ydCB7IHJlc29sdmVyIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxubGV0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZFwiKTtcbmxldCBzZW5kQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJCdG5cIik7XG5sZXQgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0QnRuXCIpO1xubGV0IGxlZnROdW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0TnVtc1wiKTtcbmxldCBidXR0b25OdW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25OdW1zXCIpO1xubGV0IHN0YXJ0UG9pbnQgPSBbXTtcbmxldCB0YXJnZXRQb2ludCA9IFtdO1xubGV0IHBvaW50UmVzdWx0O1xuXG4vLyAgZHJhdyB0aGUgYm9hcmRcbmZ1bmN0aW9uIGRyYXdCb2FyZCgpIHtcbiAgZm9yIChsZXQgaSA9IDc7IGkgPj0gMDsgaS0tKSB7XG4gICAgZHJhd0luZGljYXRvcihpKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSA3OyBqKyspIHtcbiAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3F1YXJlXCIpO1xuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGFcIiwgYCR7aX0sJHtqfWApO1xuICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gIH1cbn1cbmRyYXdCb2FyZCgpO1xuXG5mdW5jdGlvbiBkcmF3SW5kaWNhdG9yKGluZGljZSkge1xuICBsZXQgbGF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGF0LmNsYXNzTGlzdC5hZGQoXCJpbmRcIik7XG4gIGxhdC5pbm5lclRleHQgPSBpbmRpY2U7XG4gIGxlZnROdW1zLmFwcGVuZENoaWxkKGxhdCk7XG4gIGxldCBib3R0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm90dC5jbGFzc0xpc3QuYWRkKFwiYm90dFwiKTtcbiAgYm90dC5pbm5lclRleHQgPSBpbmRpY2U7XG4gIGJ1dHRvbk51bXMuYXBwZW5kQ2hpbGQoYm90dCk7XG59XG5cbi8vICBzZXQgdGhlIGV2ZW50IHRvIHRoZSBzcXVhcmVzXG5sZXQgc21hbGxTcSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpO1xuc21hbGxTcS5mb3JFYWNoKChzcSkgPT4ge1xuICBzcS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNxLmF0dHJpYnV0ZXMuZGF0YS52YWx1ZSk7XG4gIH0pO1xufSk7XG5cbi8vICB3aGVuIHNlbmQgaXTCtHMgY2xpY2tcbnNlbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgLy9wcmV2ZW50IHRoZSBib3R0b24gdG8gYmUgZG91YmxlIGNsaWNrXG4gIHNlbmRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICBzdGFydFBvaW50Lmxlbmd0aCA9IDA7XG4gIHRhcmdldFBvaW50Lmxlbmd0aCA9IDA7XG4gIGxldCBpbnB1dFVzciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgZm9yIChsZXQgaW5wIG9mIGlucHV0VXNyKSB7XG4gICAgaWYgKHN0YXJ0UG9pbnQubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHN0YXJ0UG9pbnQucHVzaCgraW5wLnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0UG9pbnQucHVzaCgraW5wLnZhbHVlKTtcbiAgICB9XG4gIH1cbiAgLy8gICAgY2FsbCB0aGUgcmVzb2x2ZXJcbiAgcG9pbnRSZXN1bHQgPSByZXNvbHZlcihzdGFydFBvaW50LCB0YXJnZXRQb2ludCk7XG4gIGRyYXdNb3Zlcyhwb2ludFJlc3VsdCk7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gZHJhd01vdmVzKGNvb3JkaW5hdGVzKSB7XG4gIGxldCBsYXJnZSA9IE9iamVjdC5rZXlzKGNvb3JkaW5hdGVzKS5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbGFyZ2U7IGkrKykge1xuICAgIGxldCBwb2ludHMgPSBjb29yZGluYXRlc1tpXS5qb2luKCk7XG4gICAgY29uc29sZS5sb2cocG9pbnRzKTtcbiAgICBsZXQgc3F1YXJlUGF0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhPVwiJHtwb2ludHN9XCJdYCk7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShzcXVhcmVQYXRoLmNsYXNzTGlzdC5hZGQoXCJ0cmF2ZWxcIikpO1xuICAgICAgICBpZiAoaSA9PSAxKSB7XG4gICAgICAgICAgc3F1YXJlUGF0aC5pbm5lclRleHQgPSBcIlNUQVJUXCI7XG4gICAgICAgICAgc3F1YXJlUGF0aC5jbGFzc0xpc3QuYWRkKFwic3RhcnRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PSBsYXJnZSAtIDEpIHtcbiAgICAgICAgICBzcXVhcmVQYXRoLmlubmVyVGV4dCA9IFwiTUVUQVwiO1xuICAgICAgICAgIHNxdWFyZVBhdGguY2xhc3NMaXN0LmFkZChcIm1ldGFcIik7XG4gICAgICAgICAgc2VuZEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNxdWFyZVBhdGguaW5uZXJUZXh0ID0gaSAtIDE7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDApXG4gICAgKTtcbiAgfVxufVxuLy8gIHdoZW4gcmVzZXQgaXTCtHMgY2xpY2tcbnJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGJvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gIGxlZnROdW1zLmlubmVySFRNTCA9IFwiXCI7XG4gIGJ1dHRvbk51bXMuaW5uZXJIVE1MID0gXCJcIjtcbiAgZHJhd0JvYXJkKCk7XG59KTtcblxuZXhwb3J0IHsgZHJhd0JvYXJkIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6ICM1N0Q5ODI7XG5cbn1cblxuYm9keXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG4ubWFpbkJ0bnN7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIHBhZGRpbmc6IDElO1xufVxuXG4uc2VuZFJlc2V0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sdW1uLWdhcDogNXB4O1xufVxuXG5cbi5oZWFkZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjojN2VkOTU3M2Y7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmViZWNjYXB1cnBsZTtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBwYWRkaW5nOiA0JTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsIDI0OCwgMjU1LCAwLjc2NSk7XG4gICAgY29sb3I6cmViZWNjYXB1cnBsZTtcbn1cbmJ1dHRvbjpkaXNhYmxlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG5pbnB1dDppbnZhbGlkOnJlcXVpcmVkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDk1N0NFO1xufVxuXG5pbnB1dDp2YWxpZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdERDk1Nztcbn1cblxuLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zcXVhcmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlYmVjY2FwdXJwbGU7XG4gICAgd2lkdGg6IDEyLjUlO1xuICAgIGhlaWdodDogMTIuNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XG59XG5cbi5zcXVhcmU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4udHJhdmVse1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcbn1cbi5mcmFtZXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCA2ZnI7XG59XG4ubGVmdE51bXN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuLmJ1dHRvbk51bXN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cbi5pbmQsXG4uYm90dHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsOENBQThDO0lBQzlDLHVCQUF1QjtJQUN2QixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDJDQUEyQztJQUMzQyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztJQUVJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogIzU3RDk4MjtcXG5cXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4ubWFpbkJ0bnN7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxJTtcXG59XFxuXFxuLnNlbmRSZXNldHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNXB4O1xcbn1cXG5cXG5cXG4uaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojN2VkOTU3M2Y7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlYmVjY2FwdXJwbGU7XFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgcGFkZGluZzogNCU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbmJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuNzY1KTtcXG4gICAgY29sb3I6cmViZWNjYXB1cnBsZTtcXG59XFxuYnV0dG9uOmRpc2FibGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG5pbnB1dDppbnZhbGlkOnJlcXVpcmVkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q5NTdDRTtcXG59XFxuXFxuaW5wdXQ6dmFsaWQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjN0REOTU3O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWJlY2NhcHVycGxlO1xcbiAgICB3aWR0aDogMTIuNSU7XFxuICAgIGhlaWdodDogMTIuNSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcXG59XFxuXFxuLnNxdWFyZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4udHJhdmVse1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlO1xcbn1cXG4uZnJhbWV7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCA2ZnI7XFxufVxcbi5sZWZ0TnVtc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxufVxcbi5idXR0b25OdW1ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG4uaW5kLFxcbi5ib3R0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsiZHJhd0JvYXJkIiwicmVzb2x2ZXIiLCJpbml0aWFsTW92ZSIsInRhcmdldE1vdmUiLCJwYXRoUmVzdWx0IiwiTm9kZGluc29uIiwiX2NyZWF0ZUNsYXNzIiwidmFsdWUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwYXJlbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJnZW5lcmF0aW5nTW92ZXMiLCJmYXRoZXIiLCJsaXN0T2ZOb2RlcyIsIm9uZSIsImZvckVhY2giLCJlbG0iLCJub2RpdG8iLCJwdXNoIiwiY2hlY2t3aW5uZXIiLCJub2RlcyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJub0RvIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZXJyIiwiZSIsImYiLCJzZXRGYXRoZXIiLCJtb3ZlcyIsInBhcnRpYWwiLCJmaW5kUGF0aCIsIm1vdmkiLCJuZXdNb3ZlcyIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJlbGVtZW50IiwiYXBwbHkiLCJzdGFydE0iLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhbGxvd0FycmF5TGlrZSIsIml0IiwiQXJyYXkiLCJpc0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiRiIsIl9lIiwibm9ybWFsQ29tcGxldGlvbiIsImRpZEVyciIsInN0ZXAiLCJfZTIiLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJhcnIiLCJsZW4iLCJhcnIyIiwiYm9hcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZW5kQnRuIiwicmVzZXRCdG4iLCJsZWZ0TnVtcyIsImJ1dHRvbk51bXMiLCJzdGFydFBvaW50IiwidGFyZ2V0UG9pbnQiLCJwb2ludFJlc3VsdCIsImRyYXdJbmRpY2F0b3IiLCJqIiwic3F1YXJlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNvbmNhdCIsImFwcGVuZENoaWxkIiwiaW5kaWNlIiwibGF0IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJUZXh0IiwiYm90dCIsInNtYWxsU3EiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3EiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImF0dHJpYnV0ZXMiLCJkYXRhIiwiZGlzYWJsZWQiLCJpbnB1dFVzciIsImlucCIsImRyYXdNb3ZlcyIsIl94IiwiX2RyYXdNb3ZlcyIsIl9jYWxsZWUiLCJjb29yZGluYXRlcyIsImxhcmdlIiwiX2xvb3AiLCJfY2FsbGVlJCIsIl9jb250ZXh0MiIsInBvaW50cyIsInNxdWFyZVBhdGgiLCJfbG9vcCQiLCJfY29udGV4dCIsImpvaW4iLCJzZXRUaW1lb3V0IiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==