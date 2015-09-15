'use strict';

var Basket = require('../src/model/basket');
var list1 = [
  'partOne',
  'partOne',
  'partTwo',
  'partTwo',
  'partThree',
  'partThree',
  'partFour',
  'partFive'
];
var list2 = {
  partOne: 5,
  partTwo: 4,
  partThree: 3,
  partFour: 2,
  partFive: 1
};

describe('Basket', function() {
  it('should have one attribute', function() {
    var basket = new Basket();
    basket.addBook(list1);
    expect(basket.listing).toEqual({
      partOne: 2,
      partTwo: 2,
      partThree: 2,
      partFour: 1,
      partFive: 1
    });

    basket.addBook(list2);
    expect(basket.listing).toEqual({
      partOne: 5,
      partTwo: 4,
      partThree: 3,
      partFour: 2,
      partFive: 1
    });
  });
});
