'use strict';

var Payment = require('../src/model/payment');

describe('main', function() {
  it('should return 0', function() {
    var list = {};
    var payment = new Payment();
    expect(payment.getTotalPrice(list)).toBe(0);
  });

  it('should return 8', function() {
    var list = {
      partOne: 1
    };
    var payment = new Payment();
    expect(payment.getTotalPrice(list)).toBe(8);
  });

  it('should return 51.20', function() {
    var list = {
      partOne: 2,
      partTwo: 2,
      partThree: 2,
      partFour: 1,
      partFive: 1
    };
    var payment = new Payment();
    expect(payment.getTotalPrice(list)).toBe(51.2);
  });

});
