'use strict';

var _ = require('lodash');

var Promotion = (function() {
  function Promotion() {
    this.discount = {
      1: 0,
      2: 0.05,
      3: 0.1,
      4: 0.2,
      5: 0.25
    };
    this.group = {};
    this.price = 8;
  }


  function getSet(list) {
    var result = 0;

    _.each(list, function(val, key) {
      if (val > 0) {
        result++;
        list[key]--;
      }
    });

    return result;
  }

  function getBestGrouping(group) {
    var isExist = group[3] !== undefined && group[5] !== undefined;

    while (isExist && group[3] > 0 && group[5] > 0) {
      group[3]--;
      group[5]--;

      group[4] = group[4] || 0;
      group[4] += 2;
    }
    deleteUselessElement(group);

    return group;
  }

  function deleteUselessElement(group) {
    _.each(group, function(val, key) {
      if (val === 0) {
        delete group[key];
      }
    });
  }

  Promotion.prototype.grouping = function(listing) {
    var set;
    var list = _.clone(listing, true);
    do {
      set = getSet(list);
      if (set !== 0) {
        this.group[set] = this.group[set] || 0;
        this.group[set]++;
      }
    }
    while (set > 0);

    this.group = getBestGrouping(this.group);
  }

  Promotion.prototype.getDiscountPrice = function(group) {
    var totalPrice = 0;
    var that = this;

    _.each(this.group, function(val, count) {
      totalPrice += val * count * that.price * that.discount[count];
    });

    return totalPrice;
  };

  return Promotion;
})();



module.exports = Promotion;
