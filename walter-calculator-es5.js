/**
 * Walter Calculator
 * Calculates the maximum number of bottles someone can buy
 * @input: initialMoney
 * @output: [totalWalters, moneyLeft]
 */

"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = (function () {
  "use strict";

  var WALTER_PRICE = 0.53;
  var TARE_PRICE = 0.08;

  /**
   * Walter Calculator
   */

  var WalterCalculator = (function () {
    function WalterCalculator() {
      _classCallCheck(this, WalterCalculator);
    }

    /**
     * Walter Calculator as a function
     * @return {float} Initial Amount
     */

    _createClass(WalterCalculator, null, [{
      key: "calculate",

      /**
       * [calculate description]
       * @param  {[type]} initalMoney    =             0 [description]
       * @param  {[type]} {totalWalters: totalWalters  = 0             [description]
       * @param  {[type]} moneyLeft:     moneyLeft     = 0}            [description]
       * @return {[type]}                [description]
       */
      value: function calculate() {
        var initialMoney = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

        if (initialMoney <= 0) {
          return [0, 0];
        }

        var maxNumberOfBottles = WalterCalculator.getMaxNumberOfBottles(initialMoney);
        var priceOfBottles = WalterCalculator.getPriceOfBottles(maxNumberOfBottles);
        var amountLeft = initialMoney - priceOfBottles;
        var addedAmount = amountLeft + maxNumberOfBottles * TARE_PRICE;
        var canBuyMore = WalterCalculator.getMaxNumberOfBottles(addedAmount) > 0;
        var walters = 0,
            amount = 0;

        if (canBuyMore) {
          var _WalterCalculator$calculate = WalterCalculator.calculate(addedAmount);

          var _WalterCalculator$calculate2 = _slicedToArray(_WalterCalculator$calculate, 2);

          walters = _WalterCalculator$calculate2[0];
          addedAmount = _WalterCalculator$calculate2[1];
        }

        return [walters + maxNumberOfBottles, Math.round(addedAmount * 1000) / 1000];
      }

      /**
       * Gets maximium number of bottles for a given amount
       * @param {float} amount
       * @return {float} maximum bottles
       */
    }, {
      key: "getMaxNumberOfBottles",
      value: function getMaxNumberOfBottles(amount) {
        return Math.floor(amount / WALTER_PRICE);
      }

      /**
       * [getPriceOfBottles description]
       * @param  {[type]} bottles [description]
       * @return {[type]}         [description]
       */
    }, {
      key: "getPriceOfBottles",
      value: function getPriceOfBottles(bottles) {
        return bottles * WALTER_PRICE;
      }
    }]);

    return WalterCalculator;
  })();

  return function (initialAmount) {
    initialAmount = parseFloat(initialAmount);
    if (isNaN(initialAmount) || !isFinite(initialAmount)) {
      throw new Error("Initial Amount must be a number.");
    }
    if (initialAmount < 0) {
      throw new Error("Initial Amount must be a positive number.");
    }
    return WalterCalculator.calculate(initialAmount);
  };
})();
