'use strict';

var Basket = require('./basket');
var Promotion = require('./promotion');
var _ = require('lodash');

var Payment = (function() {
  function Payment() {}

  function getSubTotal(list) {
    var result = 0;
    _.each(list, function(count, key) {
      result += count * 8;
    });
    return result;
  }

  Payment.prototype.getTotalPrice = function(list) {
    var basket = new Basket();
    var promotion = new Promotion();

    basket.addBook(list);
    promotion.grouping(basket.listing);
    var discountPrice = promotion.getDiscountPrice();
    var subtotal = getSubTotal(list);

    return subtotal - discountPrice;
  }

  return Payment;
})();

module.exports = Payment;
