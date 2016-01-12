/**
 * Walter Calculator
 * Calculates the maximum number of bottles someone can buy
 * @input: initialMoney
 * @output: [totalWalters, moneyLeft]
 */

module.exports = (function () {
  "use strict";

  const WALTER_PRICE = 0.53;
  const TARE_PRICE = 0.08;

   /**
    * Walter Calculator
    */
  class WalterCalculator {
    /**
     * [calculate description]
     * @param  {[type]} initalMoney    =             0 [description]
     * @param  {[type]} {totalWalters: totalWalters  = 0             [description]
     * @param  {[type]} moneyLeft:     moneyLeft     = 0}            [description]
     * @return {[type]}                [description]
     */
    static calculate(initialMoney = 0) {
      if (initialMoney <= 0) { return [0, 0]; }

      let maxNumberOfBottles = WalterCalculator.getMaxNumberOfBottles(initialMoney);
      let priceOfBottles = WalterCalculator.getPriceOfBottles(maxNumberOfBottles);
      let amountLeft = initialMoney - priceOfBottles;
      let addedAmount = amountLeft + maxNumberOfBottles * TARE_PRICE;
      let canBuyMore = WalterCalculator.getMaxNumberOfBottles(addedAmount) > 0;
      let walters = 0, amount = 0;

      if (canBuyMore) {
        [walters, addedAmount] = WalterCalculator.calculate(addedAmount);
      }

      return [
        walters + maxNumberOfBottles,
        Math.round(addedAmount * 1000) / 1000
      ];
    }
    /**
     * Gets maximium number of bottles for a given amount
     * @param {float} amount
     * @return {float} maximum bottles
     */
    static getMaxNumberOfBottles(amount) {
      return Math.floor(amount / WALTER_PRICE);
    }
    /**
     * [getPriceOfBottles description]
     * @param  {[type]} bottles [description]
     * @return {[type]}         [description]
     */
    static getPriceOfBottles(bottles) {
      return bottles * WALTER_PRICE;
    }
  }

  /**
   * Walter Calculator as a function
   * @return {float} Initial Amount
   */
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
}());
