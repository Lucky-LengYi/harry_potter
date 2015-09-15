'use strict';

var Promotion = require('../src/model/promotion');
var list1 = {
  partOne: 2,
  partTwo: 2,
  partThree: 2,
  partFour: 1,
  partFive: 1
};
var list2 = {
  partOne: 5,
  partTwo: 4,
  partThree: 3,
  partFour: 2,
  partFive: 1
};


describe('Promotion', function() {
  describe('#getGrouping()', function() {
    it('should get the group', function() {
      var promotion = new Promotion();
      promotion.grouping(list1);
      expect(promotion.group).toEqual({
        4: 2
      });
    });

    it('should get the simple group', function() {
      var list = {};
      var promotion = new Promotion();
      promotion.grouping(list);
      expect(promotion.group).toEqual({});
    });

    it('group the book list', function() {
      var promotion = new Promotion();
      promotion.grouping(list2);
      expect(promotion.group).toEqual({
        1: 1,
        2: 1,
        4: 3,
      });
    });
  });

  describe('#getDiscountPrice()', function() {
    it('should return the 0', function() {
      var promotion = new Promotion();
      var result = promotion.getDiscountPrice();
      expect(result).toBe(0);
    });

    it('should return the 12.8', function() {
      var list = {
        partOne: 2,
        partTwo: 2,
        partThree: 2,
        partFour: 1,
        partFive: 1
      };
      var promotion = new Promotion();
      promotion.grouping(list);
      var result = promotion.getDiscountPrice();
      expect(result).toBe(12.8);
    });
  });
});
