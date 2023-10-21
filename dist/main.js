/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
var initialMove = [7, 7];
var targetMove = [0, 0];
var pathResult;
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
var startM = new Noddinson(initialMove);
console.log(findPath([startM]));
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUFDLElBQUEsR0FBNEI7UUFBQSxJQUFqQmMsT0FBTyxHQUFBRCxNQUFBLENBQUFsQyxLQUFBO1FBQ2hCLElBQUlJLE1BQU0sR0FBR3VCLFNBQVMsQ0FBQ1EsT0FBTyxDQUFDO1FBQy9CLElBQUlQLEtBQUssR0FBR3RCLGVBQWUsQ0FBQzZCLE9BQU8sQ0FBQ25DLEtBQUssRUFBRUksTUFBTSxDQUFDO1FBQ2xENEIsUUFBUSxDQUFDbkIsSUFBSSxDQUFBdUIsS0FBQSxDQUFiSixRQUFRLEVBQUFULGtCQUFBLENBQVNLLEtBQUssRUFBQztNQUN6QjtJQUFDLFNBQUFKLEdBQUE7TUFBQVMsVUFBQSxDQUFBUixDQUFBLENBQUFELEdBQUE7SUFBQTtNQUFBUyxVQUFBLENBQUFQLENBQUE7SUFBQTtJQUNESSxRQUFRLENBQUNFLFFBQVEsQ0FBQztFQUNwQjtBQUNGO0FBQ0EsSUFBSUssTUFBTSxHQUFHLElBQUl2QyxTQUFTLENBQUNILFdBQVcsQ0FBQztBQUN2QzJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxRQUFRLENBQUMsQ0FBQ08sTUFBTSxDQUFDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0dHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGluaXRpYWxNb3ZlID0gWzcsIDddO1xyXG5sZXQgdGFyZ2V0TW92ZSA9IFswLCAwXTtcclxubGV0IHBhdGhSZXN1bHQ7XHJcblxyXG5jbGFzcyBOb2RkaW5zb24ge1xyXG4gIGNvbnN0cnVjdG9yKHZhbHVlID0gbnVsbCwgcGFyZW50ID0gW251bGxdKSB7XHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRpbmdNb3Zlcyhpbml0aWFsTW92ZSwgZmF0aGVyID0gbnVsbCkge1xyXG4gIC8vIGxldCBuZXdGYXRoZXJyID0gW2dyYW50LCBpbml0aWFsTW92ZV07XHJcblxyXG4gIGxldCBsaXN0T2ZOb2RlcyA9IFtdO1xyXG4gIGxldCBvbmUgPSBbXHJcbiAgICBbaW5pdGlhbE1vdmVbMF0gKyAyLCBpbml0aWFsTW92ZVsxXSArIDFdLFxyXG4gICAgW2luaXRpYWxNb3ZlWzBdICsgMSwgaW5pdGlhbE1vdmVbMV0gKyAyXSxcclxuICAgIFtpbml0aWFsTW92ZVswXSAtIDIsIGluaXRpYWxNb3ZlWzFdIC0gMV0sXHJcbiAgICBbaW5pdGlhbE1vdmVbMF0gLSAxLCBpbml0aWFsTW92ZVsxXSAtIDJdLFxyXG4gICAgW2luaXRpYWxNb3ZlWzBdIC0gMSwgaW5pdGlhbE1vdmVbMV0gKyAyXSxcclxuICAgIFtpbml0aWFsTW92ZVswXSArIDEsIGluaXRpYWxNb3ZlWzFdIC0gMl0sXHJcbiAgICBbaW5pdGlhbE1vdmVbMF0gLSAyLCBpbml0aWFsTW92ZVsxXSArIDFdLFxyXG4gICAgW2luaXRpYWxNb3ZlWzBdICsgMiwgaW5pdGlhbE1vdmVbMV0gLSAxXSxcclxuICBdO1xyXG5cclxuICAvLyAgY2hlY2sgaXQgaXMgYSB2YWxpZCBtb3ZlIGluc2RlIG9mIHRoZSBmcmFtZVxyXG4gIC8vICBtYWtlIGEgbm9kZSBpZiB0aGUgbW92ZSBpdMK0cyB2YWxpZCAoTClcclxuICBvbmUuZm9yRWFjaCgoZWxtKSA9PiB7XHJcbiAgICBpZiAoZWxtWzBdIDw9IDcgJiYgZWxtWzBdID49IDAgJiYgZWxtWzFdIDw9IDcgJiYgZWxtWzFdID49IDApIHtcclxuICAgICAgbGV0IG5vZGl0byA9IG5ldyBOb2RkaW5zb24oZWxtLCBmYXRoZXIpO1xyXG4gICAgICBsaXN0T2ZOb2Rlcy5wdXNoKG5vZGl0byk7XHJcbiAgICAgIC8vIGxpc3RPZk5vZGVzLnB1c2goZWxtKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gbGlzdE9mTm9kZXM7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2t3aW5uZXIobm9kZXMpIHtcclxuICBmb3IgKGNvbnN0IG5vRG8gb2Ygbm9kZXMpIHtcclxuICAgIGlmIChub0RvLnZhbHVlWzBdID09IHRhcmdldE1vdmVbMF0gJiYgbm9Eby52YWx1ZVsxXSA9PSB0YXJnZXRNb3ZlWzFdKSB7XHJcbiAgICAgIHBhdGhSZXN1bHQgPSBbLi4ubm9Eby5wYXJlbnRdO1xyXG4gICAgICBwYXRoUmVzdWx0LnB1c2gobm9Eby52YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRGYXRoZXIobW92ZXMpIHtcclxuICAvLyAgZG9pbmcgYSBzaGFkb3cgY29weSBvZiB0aGUgbW92ZXMucGFyZW50XHJcbiAgbGV0IHBhcnRpYWwgPSBbLi4ubW92ZXMucGFyZW50XTtcclxuICBwYXJ0aWFsLnB1c2gobW92ZXMudmFsdWUpO1xyXG4gIHJldHVybiBwYXJ0aWFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kUGF0aChtb3ZpKSB7XHJcbiAgaWYgKGNoZWNrd2lubmVyKG1vdmkpKSB7XHJcbiAgICAvLyBsaXN0T2ZTdGVwcy5wdXNoKG5vZGVbMV0pO1xyXG4gICAgcmV0dXJuIHBhdGhSZXN1bHQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCBuZXdNb3ZlcyA9IFtdO1xyXG4gICAgLy8gbGV0IHBhcnRpYWwgPSBbXTtcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBtb3ZpKSB7XHJcbiAgICAgIGxldCBwYXJlbnQgPSBzZXRGYXRoZXIoZWxlbWVudCk7XHJcbiAgICAgIGxldCBtb3ZlcyA9IGdlbmVyYXRpbmdNb3ZlcyhlbGVtZW50LnZhbHVlLCBwYXJlbnQpO1xyXG4gICAgICBuZXdNb3Zlcy5wdXNoKC4uLm1vdmVzKTtcclxuICAgIH1cclxuICAgIGZpbmRQYXRoKG5ld01vdmVzKTtcclxuICB9XHJcbn1cclxubGV0IHN0YXJ0TSA9IG5ldyBOb2RkaW5zb24oaW5pdGlhbE1vdmUpO1xyXG5jb25zb2xlLmxvZyhmaW5kUGF0aChbc3RhcnRNXSkpO1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbE1vdmUiLCJ0YXJnZXRNb3ZlIiwicGF0aFJlc3VsdCIsIk5vZGRpbnNvbiIsIl9jcmVhdGVDbGFzcyIsInZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicGFyZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiZ2VuZXJhdGluZ01vdmVzIiwiZmF0aGVyIiwibGlzdE9mTm9kZXMiLCJvbmUiLCJmb3JFYWNoIiwiZWxtIiwibm9kaXRvIiwicHVzaCIsImNoZWNrd2lubmVyIiwibm9kZXMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwibm9EbyIsIl90b0NvbnN1bWFibGVBcnJheSIsImVyciIsImUiLCJmIiwic2V0RmF0aGVyIiwibW92ZXMiLCJwYXJ0aWFsIiwiZmluZFBhdGgiLCJtb3ZpIiwibmV3TW92ZXMiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiZWxlbWVudCIsImFwcGx5Iiwic3RhcnRNIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=