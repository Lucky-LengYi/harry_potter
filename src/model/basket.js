'use strict';

var _ = require('lodash');

function Basket() {
  this.listing = {};
  this.group = {};
}

Basket.prototype.addBook = function(list) {
  var that = this;

  if (Array.isArray(list)) {

    list.forEach(function(item) {
      that.listing[item] = that.listing[item] || 0;
      that.listing[item]++;
    });
  } else {
    this.listing = list;
  }
}

module.exports = Basket;
